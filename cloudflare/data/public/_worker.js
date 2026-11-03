const MIME_TYPES = {
  html: 'text/html; charset=utf-8', htm: 'text/html; charset=utf-8',
  pdf: 'application/pdf', js: 'text/javascript; charset=utf-8', mjs: 'text/javascript; charset=utf-8',
  css: 'text/css; charset=utf-8', json: 'application/json; charset=utf-8',
  svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg',
  webp: 'image/webp', avif: 'image/avif', gif: 'image/gif', ico: 'image/x-icon',
  woff: 'font/woff', woff2: 'font/woff2', ttf: 'font/ttf', otf: 'font/otf',
  mp4: 'video/mp4', webm: 'video/webm', txt: 'text/plain; charset=utf-8',
};

function objectHeaders(object, key) {
  const headers = new Headers();
  object.writeHttpMetadata(headers);
  const type = headers.get('content-type')?.split(';')[0].trim().toLowerCase();
  if (!type || type === 'application/octet-stream') {
    headers.set('Content-Type', MIME_TYPES[key.split('.').pop().toLowerCase()] || 'application/octet-stream');
  }
  if (!headers.has('Cache-Control') && !headers.has('Expires')) {
    headers.set('Cache-Control', 'public, max-age=0, must-revalidate');
  }
  headers.set('ETag', object.httpEtag);
  headers.set('Last-Modified', object.uploaded.toUTCString());
  headers.set('Accept-Ranges', 'bytes');
  headers.set('Content-Length', String(object.size));
  return headers;
}

function notModified(request, object) {
  const etags = request.headers.get('If-None-Match');
  if (etags !== null) {
    return etags.trim() === '*' || (etags.match(/(?:W\/)?"[^"]*"/g) || [])
      .some(tag => tag.replace(/^W\//, '') === object.httpEtag);
  }
  const since = Date.parse(request.headers.get('If-Modified-Since'));
  return Number.isFinite(since) && Math.floor(object.uploaded.getTime() / 1000) <= Math.floor(since / 1000);
}

function allowsRange(request, object) {
  const value = request.headers.get('If-Range');
  if (value === null) return true;
  if (value.startsWith('"') || value.startsWith('W/')) return value === object.httpEtag;
  const date = Date.parse(value);
  return Number.isFinite(date) && Math.floor(object.uploaded.getTime() / 1000) <= Math.floor(date / 1000);
}

// null means ignore the header; false means a valid but unsatisfiable range.
function byteRange(value, size) {
  const match = /^bytes=(\d*)-(\d*)$/i.exec(value?.trim() || '');
  if (!match || (!match[1] && !match[2])) return null;
  if (!match[1]) {
    const length = Math.min(Number(match[2]), size);
    return length > 0 ? { offset: size - length, length } : false;
  }
  const offset = Number(match[1]);
  const end = match[2] ? Number(match[2]) : size - 1;
  if (match[2] && end < offset) return null;
  if (offset >= size) return false;
  return { offset, length: Math.min(end, size - 1) - offset + 1 };
}

function errorResponse(request, status, message, headers) {
  return new Response(request.method === 'HEAD' ? null : message, { status, headers });
}

export default {
  async fetch(request, env) {
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      return errorResponse(request, 405, 'Method not allowed', { Allow: 'GET, HEAD' });
    }
    const url = new URL(request.url);
    let key;
    try {
      key = decodeURIComponent(url.pathname.slice(1));
    } catch {
      return errorResponse(request, 400, 'Invalid URL encoding');
    }
    if (!key || key.endsWith('/')) key += 'index.html';

    // Pin the streamed body to the metadata version, retrying if an upload races this request.
    for (let attempt = 0; attempt < 2; attempt++) {
      const object = await env.DATA.head(key);
      if (!object) {
        if (!url.pathname.endsWith('/') && await env.DATA.head(`${key}/index.html`)) {
          url.pathname += '/';
          return new Response(null, { status: 308, headers: { Location: url.href } });
        }
        return errorResponse(request, 404, 'Not found');
      }
      const headers = objectHeaders(object, key);
      if (notModified(request, object)) {
        headers.delete('Content-Length');
        return new Response(null, { status: 304, headers });
      }
      // Range applies to GET only; HEAD describes a complete GET response.
      const range = request.method === 'GET' && allowsRange(request, object)
        ? byteRange(request.headers.get('Range'), object.size) : null;
      if (range === false) {
        headers.set('Content-Range', `bytes */${object.size}`);
        headers.set('Content-Length', '0');
        return new Response(null, { status: 416, headers });
      }
      if (range) {
        headers.set('Content-Range', `bytes ${range.offset}-${range.offset + range.length - 1}/${object.size}`);
        headers.set('Content-Length', String(range.length));
      }
      if (request.method === 'HEAD') return new Response(null, { headers });
      const body = await env.DATA.get(key, {
        onlyIf: { etagMatches: object.etag },
        ...(range ? { range } : {}),
      });
      if (body?.body) return new Response(body.body, { status: range ? 206 : 200, headers });
    }
    return errorResponse(request, 503, 'File changed; please retry', { 'Retry-After': '0' });
  },
};
