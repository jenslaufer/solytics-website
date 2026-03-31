import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'fs'

const staticRoutes = [
  '/',
  '/e-rechnung',
  '/ki-automatisierung',
  '/blog',
  '/kontakt',
  '/impressum',
  '/datenschutz',
  '/blog/e-rechnung',
  '/blog/ki-automatisierung',
  '/ki-automatisierung/readiness-check',
  '/e-rechnung/pflicht-check',
  '/digitalbonus',
  '/website-redesign',
  '/privacy_policy_recipe_radar',
  '/privacy_policy_xg_goals_calculator',
]

// Extract blog slugs from blogPosts.js without importing (avoids .vue loader issue)
const blogPostsSrc = readFileSync('./src/data/blogPosts.js', 'utf-8')
const slugMatches = [...blogPostsSrc.matchAll(/slug:\s*'([^']+)'/g)]
const blogRoutes = slugMatches.map((m) => `/blog/${m[1]}`)

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
  },
})
