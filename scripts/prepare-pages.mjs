import { mkdir, readFile, readdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'

// GitHub Pages serves files rather than rewriting client-side routes to index.html.
// Derive entry files from the existing route declarations and project metadata.
const html = await readFile('dist/index.html', 'utf8')
const app = await readFile('src/App.tsx', 'utf8')
const routes = new Set(
  [...app.matchAll(/\bpath="([^"*]+)"/g)].map(match => match[1]),
)

async function addProjectRoutes(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) await addProjectRoutes(path)
    else if (/^index\.(?:[jt]sx?)$/.test(entry.name)) {
      const source = await readFile(path, 'utf8')
      if (!source.includes('export const project')) continue
      const metadata = source.split(/\bstrings\s*:/)[0]
      if (/\bhidden\s*:\s*true/.test(metadata)) continue
      const link = metadata.match(/\blink\s*:\s*['"]([^'"]+)['"]/)?.[1]
      if (!link) throw new Error(`Missing project link: ${path}`)
      routes.add(`/projects/${link}`)
      const aliases = metadata.match(/\blegacyPaths\s*:\s*\[([\s\S]*?)\]/)?.[1] || ''
      for (const match of aliases.matchAll(/['"]([^'"]+)['"]/g)) routes.add(match[1])
    }
  }
}

await addProjectRoutes('projects')
// The original Express website accepted both spellings of this legacy URL.
if (routes.has('/CO2')) routes.add('/co2')

for (const route of routes) {
  if (!/^\/[\w/-]*$/.test(route)) throw new Error(`Unsupported static route: ${route}`)
  const directory = join('dist', route.replace(/^\//, ''))
  await mkdir(directory, { recursive: true })
  await writeFile(join(directory, 'index.html'), html)
}

await writeFile('dist/404.html', html)
await writeFile('dist/.nojekyll', '')
console.log(`Prepared ${routes.size} page entry files and the GitHub Pages fallback.`)
