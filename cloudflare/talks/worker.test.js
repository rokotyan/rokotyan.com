import assert from 'node:assert/strict';
import test from 'node:test';
import worker from './public/_worker.js';

const uploaded = new Date('2026-11-03T12:34:56.789Z');
const metadataHeaders = {
  contentType: 'Content-Type', contentLanguage: 'Content-Language',
  contentDisposition: 'Content-Disposition', contentEncoding: 'Content-Encoding',
  cacheControl: 'Cache-Control', cacheExpiry: 'Expires',
};

function bucket(files = {}) {
  const objects = new Map(Object.entries(files).map(([key, value]) => {
    const file = typeof value === 'string' ? { text: value } : value;
    const bytes = new TextEncoder().encode(file.text);
    return [key, {
      bytes, size: bytes.length, uploaded, etag: 'version-1', httpEtag: '"version-1"',
      writeHttpMetadata(headers) {
        for (const [name, value] of Object.entries(file.metadata || {})) {
          headers.set(metadataHeaders[name], value instanceof Date ? value.toUTCString() : value);
        }
      },
    }];
  }));
  const calls = [];
  return {
    objects, calls,
    async head(key) {
      calls.push(['head', key]);
      return objects.get(key) || null;
    },
    async get(key, options) {
      calls.push(['get', key, options]);
      const object = objects.get(key);
      if (!object) return null;
      if (options.onlyIf?.etagMatches !== object.etag) return object;
      const bytes = options.range
        ? object.bytes.subarray(options.range.offset, options.range.offset + options.range.length)
        : object.bytes;
      return { ...object, body: new Blob([bytes]).stream() };
    },
  };
}

function fetchFile(TALKS, path, options) {
  return worker.fetch(new Request(`https://talks.example${path}`, options), { TALKS });
}

test('streams exact decoded keys, infers PDF MIME, and exposes validation headers', async () => {
  const storage = bucket({ 'my talk.pdf': 'PDF bytes' });
  const response = await fetchFile(storage, '/my%20talk.pdf?download=1');
  assert.equal(response.status, 200);
  assert.equal(await response.text(), 'PDF bytes');
  assert.equal(response.headers.get('Content-Type'), 'application/pdf');
  assert.equal(response.headers.get('ETag'), '"version-1"');
  assert.equal(response.headers.get('Last-Modified'), 'Tue, 03 Nov 2026 12:34:56 GMT');
  assert.equal(response.headers.get('Content-Length'), '9');
  assert.equal(response.headers.get('Accept-Ranges'), 'bytes');
  assert.equal(response.headers.get('Cache-Control'), 'public, max-age=0, must-revalidate');
  assert.equal(storage.calls[0][1], 'my talk.pdf');
});

test('preserves uploaded MIME, disposition and caching; repairs generic octet-stream MIME', async () => {
  const storage = bucket({
    'talk.js': { text: 'script', metadata: { contentType: 'application/octet-stream' } },
    'download.pdf': { text: 'PDF', metadata: {
      contentType: 'custom/pdf', contentDisposition: 'attachment; filename="slides.pdf"',
      cacheControl: 'public, max-age=3600',
    } },
    'expires.txt': { text: 'expires', metadata: { cacheExpiry: new Date('2026-11-04T00:00:00Z') } },
  });
  assert.equal((await fetchFile(storage, '/talk.js')).headers.get('Content-Type'), 'text/javascript; charset=utf-8');
  const download = await fetchFile(storage, '/download.pdf');
  assert.equal(download.headers.get('Content-Type'), 'custom/pdf');
  assert.equal(download.headers.get('Content-Disposition'), 'attachment; filename="slides.pdf"');
  assert.equal(download.headers.get('Cache-Control'), 'public, max-age=3600');
  const expires = await fetchFile(storage, '/expires.txt');
  assert.equal(expires.headers.get('Expires'), 'Wed, 04 Nov 2026 00:00:00 GMT');
  assert.equal(expires.headers.get('Cache-Control'), null);
});

test('HEAD returns complete metadata without fetching body, including when Range is present', async () => {
  const storage = bucket({ 'video.mp4': '0123456789' });
  const response = await fetchFile(storage, '/video.mp4', { method: 'HEAD', headers: { Range: 'bytes=2-4' } });
  assert.equal(response.status, 200);
  assert.equal(response.body, null);
  assert.equal(response.headers.get('Content-Length'), '10');
  assert.deepEqual(storage.calls, [['head', 'video.mp4']]);
});

test('If-None-Match uses weak comparison, lists, wildcard, and takes precedence over dates', async () => {
  const storage = bucket({ 'talk.pdf': 'PDF' });
  for (const etag of ['"version-1"', 'W/"version-1"', '"other", W/"version-1"', '*']) {
    const response = await fetchFile(storage, '/talk.pdf', { headers: { 'If-None-Match': etag } });
    assert.equal(response.status, 304);
    assert.equal(response.body, null);
    assert.equal(response.headers.get('ETag'), '"version-1"');
    assert.equal(response.headers.get('Content-Length'), null);
  }
  assert.equal(storage.calls.some(([name]) => name === 'get'), false);
  const response = await fetchFile(storage, '/talk.pdf', { headers: {
    'If-None-Match': '"other"', 'If-Modified-Since': 'Wed, 04 Nov 2026 00:00:00 GMT',
  } });
  assert.equal(response.status, 200);
});

test('If-Modified-Since compares at HTTP second precision and ignores invalid/older dates', async () => {
  const storage = bucket({ 'talk.pdf': 'PDF' });
  assert.equal((await fetchFile(storage, '/talk.pdf', { headers: {
    'If-Modified-Since': 'Tue, 03 Nov 2026 12:34:56 GMT',
  } })).status, 304);
  for (const date of ['invalid', 'Tue, 03 Nov 2026 12:34:55 GMT']) {
    assert.equal((await fetchFile(storage, '/talk.pdf', { headers: { 'If-Modified-Since': date } })).status, 200);
  }
});

test('single ranges support inclusive ends, open ends, suffixes, and clamping', async () => {
  const storage = bucket({ 'video.mp4': '0123456789' });
  for (const [range, body, contentRange] of [
    ['bytes=2-4', '234', 'bytes 2-4/10'],
    ['bytes=7-', '789', 'bytes 7-9/10'],
    ['bytes=-3', '789', 'bytes 7-9/10'],
    ['bytes=8-999', '89', 'bytes 8-9/10'],
    ['bytes=-999', '0123456789', 'bytes 0-9/10'],
  ]) {
    const response = await fetchFile(storage, '/video.mp4', { headers: { Range: range } });
    assert.equal(response.status, 206, range);
    assert.equal(response.headers.get('Content-Range'), contentRange);
    assert.equal(response.headers.get('Content-Length'), String(body.length));
    assert.equal(await response.text(), body);
  }
});

test('unsatisfiable ranges return 416 without fetching a body', async () => {
  const storage = bucket({ 'video.mp4': '0123456789', 'empty.txt': '' });
  for (const [path, range, size] of [
    ['/video.mp4', 'bytes=10-', 10], ['/video.mp4', 'bytes=-0', 10], ['/empty.txt', 'bytes=0-', 0],
  ]) {
    const response = await fetchFile(storage, path, { headers: { Range: range } });
    assert.equal(response.status, 416);
    assert.equal(response.body, null);
    assert.equal(response.headers.get('Content-Range'), `bytes */${size}`);
    assert.equal(response.headers.get('Content-Length'), '0');
  }
  assert.equal(storage.calls.some(([name]) => name === 'get'), false);
});

test('malformed, unsupported and multiple ranges fall back to a complete response', async () => {
  const storage = bucket({ 'video.mp4': '0123456789' });
  for (const range of ['bytes=4-2', 'bytes=-', 'bytes=nope', 'items=2-4', 'bytes=0-1,4-5']) {
    const response = await fetchFile(storage, '/video.mp4', { headers: { Range: range } });
    assert.equal(response.status, 200, range);
    assert.equal(response.headers.get('Content-Range'), null);
    assert.equal(await response.text(), '0123456789');
  }
});

test('If-Range permits matching strong ETags/dates and falls back to 200 otherwise', async () => {
  const storage = bucket({ 'video.mp4': '0123456789' });
  for (const [ifRange, expected] of [
    ['"version-1"', 206], ['Tue, 03 Nov 2026 12:34:56 GMT', 206],
    ['"other"', 200], ['W/"version-1"', 200], ['invalid', 200],
    ['Tue, 03 Nov 2026 12:34:55 GMT', 200],
  ]) {
    const response = await fetchFile(storage, '/video.mp4', { headers: { Range: 'bytes=2-4', 'If-Range': ifRange } });
    assert.equal(response.status, expected, ifRange);
    assert.equal(await response.text(), expected === 206 ? '234' : '0123456789');
  }
  const ignoredUnsatisfiable = await fetchFile(storage, '/video.mp4', {
    headers: { Range: 'bytes=999-', 'If-Range': '"other"' },
  });
  assert.equal(ignoredUnsatisfiable.status, 200);
});

test('serves root/directory indexes, redirects slashless directories, and preserves exact keys', async () => {
  const storage = bucket({
    'index.html': 'home', 'zurich/index.html': 'slides',
    exact: 'exact object', 'exact/index.html': 'directory object',
  });
  assert.equal(await (await fetchFile(storage, '/')).text(), 'home');
  assert.equal(await (await fetchFile(storage, '/zurich/')).text(), 'slides');
  const redirect = await fetchFile(storage, '/zurich?slide=2');
  assert.equal(redirect.status, 308);
  assert.equal(redirect.headers.get('Location'), 'https://talks.example/zurich/?slide=2');
  assert.equal(await (await fetchFile(storage, '/exact')).text(), 'exact object');
});

test('missing keys never list the bucket, invalid encodings return 400, and writes are rejected', async () => {
  const storage = bucket();
  assert.equal((await fetchFile(storage, '/')).status, 404);
  const missing = await fetchFile(storage, '/missing', { method: 'HEAD' });
  assert.equal(missing.status, 404);
  assert.equal(missing.body, null);
  assert.equal((await fetchFile(storage, '/bad%zz')).status, 400);
  for (const method of ['POST', 'PUT', 'DELETE', 'OPTIONS']) {
    const response = await fetchFile(storage, '/file', { method });
    assert.equal(response.status, 405);
    assert.equal(response.headers.get('Allow'), 'GET, HEAD');
  }
  assert.equal(storage.calls.some(([name]) => name !== 'head'), false);
});

test('an upload racing the read retries metadata and returns the new version consistently', async () => {
  const storage = bucket({ 'talk.pdf': 'old file' });
  const get = storage.get.bind(storage);
  let firstRead = true;
  storage.get = async (key, options) => {
    if (firstRead) {
      firstRead = false;
      const updated = bucket({ 'talk.pdf': 'new file with more bytes' }).objects.get(key);
      updated.etag = 'version-2';
      updated.httpEtag = '"version-2"';
      storage.objects.set(key, updated);
    }
    return get(key, options);
  };
  const response = await fetchFile(storage, '/talk.pdf');
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('ETag'), '"version-2"');
  assert.equal(response.headers.get('Content-Length'), '24');
  assert.equal(await response.text(), 'new file with more bytes');
});
