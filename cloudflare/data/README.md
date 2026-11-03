# Data bucket proxy

Cloudflare Pages serves the `data` R2 bucket through the `DATA` binding. The Worker allows public GET and HEAD requests, streams files, supports conditional requests and single byte ranges, and never lists or modifies bucket contents. No secrets are stored in this source.

After adding `d.rokotyan.com` as a custom domain on the `rokotyan-data` Pages project, add this record at Namecheap:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | d | rokotyan-data.pages.dev |

Object keys map directly to URLs: uploading `example.json` makes it available at `https://d.rokotyan.com/example.json`. Uploading `example/index.html` and its assets serves a page at `/example/`. Requests for `/example` redirect to the trailing slash when its index exists; an exact object key takes precedence. `/` serves the bucket's `index.html`, if present. Missing files return 404, including the root of an empty bucket.

Uploaded HTTP metadata is preserved. Common file types are inferred when Content-Type is absent or `application/octet-stream`. Files without cache metadata use `public, max-age=0, must-revalidate`, allowing updated uploads to refresh on subsequent requests.

Run the focused tests from this directory:

```sh
node --test
```

Deploy this directory with Wrangler Pages using `wrangler.jsonc`; the public directory contains the advanced-mode Worker, not the bucket's files. The talks proxy and the main portfolio's GitHub Pages deployment are independent.
