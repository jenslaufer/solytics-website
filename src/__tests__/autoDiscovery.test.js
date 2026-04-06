import { describe, it, expect } from 'vitest'
import { blogPosts } from '../data/blogPosts.js'
import { routes } from '../router.js'
import { navItems, footerServices, footerCompany } from '../data/navigation.js'
import { relationshipMap, getRelatedArticles } from '../data/articles.js'

const expectedBlogSlugs = [
  'xrechnung-pflicht-2027',
  'ki-agenten-fuer-unternehmen',
  'e-rechnung-software-vergleich-2026',
  'e-rechnung-handwerk',
  'xrechnung-vs-zugferd',
  'en16931-branchenerweiterungen',
  'xrechnung-implementieren',
  'e-rechnung-kleinunternehmer',
  'digitalisierung-mittelstand-2026',
  'e-rechnung-steuerberater',
  'ki-im-vertrieb',
  'ki-automatisierung-kosten',
  'e-rechnung-erstellen-anleitung',
  'ki-buchhaltung',
  'e-rechnung-fehler',
  'ki-agent-vs-chatbot',
  'ki-roi-berechnen',
  'ki-fuer-steuerberater',
  'ki-kundenservice-agent',
  'ki-agenten-dsgvo-datenschutz',
  'e-rechnung-datev',
  'gmbh-mit-ki-agenten-automatisiert',
  'e-rechnung-lexoffice',
  'e-rechnung-sevdesk',
  'e-rechnung-checkliste-2026',
  'e-rechnung-freiberufler',
  'e-rechnung-gastronomie',
  'e-rechnung-baugewerbe',
  'e-rechnung-einzelhandel',
]

const expectedPaths = [
  '/', '/e-rechnung', '/ki-automatisierung', '/blog',
  '/kontakt', '/impressum', '/datenschutz',
  '/blog/e-rechnung', '/blog/ki-automatisierung',
  '/blog/:slug',
  '/ki-automatisierung/readiness-check', '/e-rechnung/pflicht-check',
  '/digitalbonus', '/website-redesign',
  '/:pathMatch(.*)*',
]

describe('blog post auto-discovery', () => {
  it('discovers all 29 blog posts', () => {
    expect(blogPosts.length).toBe(29)
  })

  it('discovers all expected slugs', () => {
    const slugs = blogPosts.map(p => p.slug)
    for (const slug of expectedBlogSlugs) {
      expect(slugs, `missing slug: ${slug}`).toContain(slug)
    }
  })

  it('each discovered post has required fields including tags', () => {
    for (const post of blogPosts) {
      expect(post.slug).toBeTruthy()
      expect(post.title).toBeTruthy()
      expect(post.excerpt).toBeTruthy()
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(['e-rechnung', 'ki-automatisierung']).toContain(post.category)
      expect(post.readingTime).toBeTruthy()
      expect(typeof post.component).toBe('function')
      expect(Array.isArray(post.tags)).toBe(true)
      expect(post.tags.length).toBeGreaterThanOrEqual(2)
    }
  })

  it('posts are sorted by date ascending then slug', () => {
    for (let i = 1; i < blogPosts.length; i++) {
      const prev = blogPosts[i - 1]
      const curr = blogPosts[i]
      const cmp = prev.date.localeCompare(curr.date) || prev.slug.localeCompare(curr.slug)
      expect(cmp, `${prev.slug} should come before ${curr.slug}`).toBeLessThanOrEqual(0)
    }
  })
})

describe('route auto-discovery', () => {
  it('discovers all expected routes', () => {
    const paths = routes.map(r => r.path)
    for (const path of expectedPaths) {
      expect(paths, `missing route: ${path}`).toContain(path)
    }
  })

  it('does not include stale Chrome extension privacy policy routes', () => {
    const paths = routes.map(r => r.path)
    expect(paths).not.toContain('/privacy_policy_recipe_radar')
    expect(paths).not.toContain('/privacy_policy_xg_goals_calculator')
  })

  it('has legacy redirects', () => {
    const redirects = routes.filter(r => r.redirect)
    expect(redirects.length).toBeGreaterThanOrEqual(3)
  })

  it('total discoverable pages >= 38', () => {
    const ssgRoutes = routes.filter(r => !r.redirect && r.path !== '/:pathMatch(.*)*' && !r.path.includes(':'))
    const blogRoutes = blogPosts.map(p => `/blog/${p.slug}`)
    expect(ssgRoutes.length + blogRoutes.length).toBeGreaterThanOrEqual(38)
  })
})

describe('navigation auto-discovery', () => {
  it('contains all expected nav items in correct order', () => {
    expect(navItems).toEqual([
      { label: 'E-Rechnung', to: '/e-rechnung' },
      { label: 'KI-Automatisierung', to: '/ki-automatisierung' },
      { label: 'Website-Redesign', to: '/website-redesign' },
      { label: 'Blog', to: '/blog' },
    ])
  })
})

describe('footer auto-discovery', () => {
  it('service links contain expected items in order', () => {
    expect(footerServices).toEqual([
      { label: 'E-Rechnung', to: '/e-rechnung' },
      { label: 'KI-Automatisierung', to: '/ki-automatisierung' },
      { label: 'Website-Redesign', to: '/website-redesign' },
      { label: 'Blog', to: '/blog' },
    ])
  })

  it('company links contain expected items in order', () => {
    expect(footerCompany).toEqual([
      { label: 'Kontakt', to: '/kontakt' },
      { label: 'Impressum', to: '/impressum' },
      { label: 'Datenschutz', to: '/datenschutz' },
    ])
  })
})

describe('relationship auto-computation', () => {
  it('every post has at least 2 related articles', () => {
    for (const post of blogPosts) {
      const related = relationshipMap[post.slug]
      expect(related, `${post.slug} missing from relationshipMap`).toBeDefined()
      expect(related.length, `${post.slug} has only ${related?.length} related`).toBeGreaterThanOrEqual(2)
    }
  })

  it('no self-links', () => {
    for (const [slug, related] of Object.entries(relationshipMap)) {
      expect(related, `${slug} links to itself`).not.toContain(slug)
    }
  })

  it('all referenced slugs exist in blogPosts', () => {
    const allSlugs = blogPosts.map(p => p.slug)
    for (const [slug, related] of Object.entries(relationshipMap)) {
      expect(allSlugs, `key "${slug}" not in blogPosts`).toContain(slug)
      for (const r of related) {
        expect(allSlugs, `"${r}" (related to ${slug}) not in blogPosts`).toContain(r)
      }
    }
  })

  it('getRelatedArticles returns full post objects', () => {
    const articles = getRelatedArticles(blogPosts[0].slug)
    expect(articles.length).toBeGreaterThanOrEqual(2)
    for (const a of articles) {
      expect(a).toHaveProperty('slug')
      expect(a).toHaveProperty('title')
    }
  })
})
