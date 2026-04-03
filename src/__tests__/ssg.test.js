import { describe, it, expect } from 'vitest'
import { execSync } from 'child_process'
import { readdirSync, readFileSync, existsSync } from 'fs'
import { join } from 'path'
import { blogPosts } from '../data/blogPosts.js'

const dist = join(process.cwd(), 'dist')

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
]

const blogRoutes = blogPosts.map((p) => `/blog/${p.slug}`)
const allRoutes = [...staticRoutes, ...blogRoutes]

function htmlPathForRoute(route) {
  if (route === '/') return join(dist, 'index.html')
  return join(dist, route, 'index.html')
}

describe('vite-ssg build output', () => {
  it('produces an HTML file for every static route', () => {
    for (const route of allRoutes) {
      const file = htmlPathForRoute(route)
      expect(existsSync(file), `Missing HTML for ${route}: ${file}`).toBe(true)
    }
  })

  it('generated HTML contains actual page content (not just empty #app div)', () => {
    const home = readFileSync(htmlPathForRoute('/'), 'utf-8')
    expect(home).toContain('Solytics')
    expect(home).not.toMatch(/<div id="app"><\/div>/)

    const blog = readFileSync(htmlPathForRoute('/blog'), 'utf-8')
    expect(blog).toContain('Blog')
    expect(blog).not.toMatch(/<div id="app"><\/div>/)

    const firstPost = blogPosts[0]
    const postHtml = readFileSync(htmlPathForRoute(`/blog/${firstPost.slug}`), 'utf-8')
    expect(postHtml).toContain(firstPost.title)
    expect(postHtml).not.toMatch(/<div id="app"><\/div>/)
  })

  it('sitemap.xml exists and includes all routes', () => {
    const sitemapPath = join(dist, 'sitemap.xml')
    expect(existsSync(sitemapPath), 'sitemap.xml missing').toBe(true)

    const sitemap = readFileSync(sitemapPath, 'utf-8')
    for (const route of allRoutes) {
      const url = route === '/' ? 'https://solytics.de/' : `https://solytics.de${route}`
      expect(sitemap, `sitemap missing ${route}`).toContain(url)
    }
  })
})
