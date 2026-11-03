# Talks bucket proxy

Cloudflare Pages serves the `talks` R2 bucket through the `TALKS` binding. The Worker allows public GET and HEAD requests, streams files, supports conditional requests and single byte ranges, and never lists or modifies bucket contents. No secrets are stored in this source.

After adding `talks.rokotyan.com` as a custom domain on the `rokotyan-talks` Pages project, add this record at Namecheap:

| Type | Host | Value |
| --- | --- | --- |
| CNAME | talks | rokotyan-talks.pages.dev |

Object keys map directly to URLs: uploading `cosmograph-stanford-2026.pdf` makes it available at `https://talks.rokotyan.com/cosmograph-stanford-2026.pdf`. Uploading `2026-zurich/index.html` and its assets serves a presentation at `/2026-zurich/`. Requests for `/2026-zurich` redirect to the trailing slash when its index exists; an exact object key takes precedence. `/` serves the bucket's `index.html`, if present. Missing files return 404.

Uploaded HTTP metadata is preserved. Common file types are inferred when Content-Type is absent or `application/octet-stream`. Files without cache metadata use `public, max-age=0, must-revalidate`, allowing updated uploads to refresh on subsequent requests.

Run the focused tests from this directory:

```sh
node --test
```

Deploy this directory with Wrangler Pages using `wrangler.jsonc`; the public directory contains the advanced-mode Worker, not the bucket's files. The main portfolio's GitHub Pages deployment is independent.
