import { readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { promisify } from 'node:util'
import { gzip } from 'node:zlib'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const gzipAsync = promisify(gzip)

function socialImageUrls() {
  let basePath = '/'
  const addOrigin = (html) => {
    const origin = (process.env.VITE_SITE_ORIGIN || 'https://rokotyan.com').replace(/\/$/, '')
    return html
      .replace(
        /(<meta\s+(?:property|name)="(?:og:image|twitter:image)"\s+content=")(\/[^"]+)(")/g,
        (_, prefix, path, suffix) => `${prefix}${origin}${path}${suffix}`,
      )
      .replace(
        /(<meta\s+(?:property|name)="(?:og:url|twitter:url)"\s+content=")[^"]+(")/g,
        (_, prefix, suffix) => `${prefix}${origin}${basePath}${suffix}`,
      )
  }

  return {
    name: 'social-image-urls',
    configResolved(config) {
      basePath = config.base
    },
    transformIndexHtml: {
      order: 'post',
      handler: addOrigin,
    },
    generateBundle: {
      order: 'post',
      handler(_, bundle) {
        // Vite resolves asset placeholders after its HTML transform hooks.
        const html = bundle['index.html']
        if (html) html.source = addOrigin(html.source.toString())
      },
    },
  }
}

// Keep pre-compressed files for the optional existing static server.
function gzipAssets() {
  return {
    name: 'gzip-assets',
    apply: 'build',
    async writeBundle(options, bundle) {
      await Promise.all(Object.keys(bundle).filter((name) => /\.(js|css|html)$/.test(name)).map(async (name) => {
        const path = resolve(options.dir, name)
        const content = await readFile(path)
        if (content.length < 10240) return
        const compressed = await gzipAsync(content)
        if (compressed.length / content.length < 0.8) await writeFile(`${path}.gz`, compressed)
      }))
    },
  }
}

export default defineConfig({
  base: process.env.VITE_BASE_PATH || '/',
  plugins: [react(), socialImageUrls(), gzipAssets()],
  resolve: {
    alias: Object.fromEntries(
      ['utils', 'components', 'fonts', 'pages', 'store'].map((name) => [name, resolve('src', name)]),
    ),
  },
  build: {
    assetsInlineLimit: 8192,
  },
})
