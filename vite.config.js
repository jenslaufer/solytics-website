import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

// Auto-discover blog slugs from .meta.js files
const blogDir = './src/pages/blog'
const blogRoutes = readdirSync(blogDir)
  .filter(f => f.endsWith('.meta.js'))
  .map(f => {
    const content = readFileSync(join(blogDir, f), 'utf-8')
    const match = content.match(/slug:\s*'([^']+)'/)
    return match ? `/blog/${match[1]}` : null
  })
  .filter(Boolean)

// Auto-discover static routes from .route.js files
function findRouteFiles(dir) {
  const entries = readdirSync(dir, { withFileTypes: true })
  let files = []
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    if (entry.isDirectory()) {
      files = files.concat(findRouteFiles(fullPath))
    } else if (entry.name.endsWith('.route.js')) {
      files.push(fullPath)
    }
  }
  return files
}

const staticRoutes = findRouteFiles('./src/pages')
  .map(f => {
    const content = readFileSync(f, 'utf-8')
    const match = content.match(/path:\s*'([^']+)'/)
    return match ? match[1] : null
  })
  .filter(p => p && !p.includes(':'))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    dirStyle: 'nested',
    includedRoutes() {
      return [...staticRoutes, ...blogRoutes]
    },
  },
  test: {
    environment: 'jsdom',
    exclude: ['e2e/**', 'node_modules/**'],
    setupFiles: ['./src/__tests__/setup.js'],
  },
})
