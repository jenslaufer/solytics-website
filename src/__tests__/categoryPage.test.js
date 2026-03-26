import { describe, it, expect, beforeAll, beforeEach, afterEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { router } from '../router.js'
import { blogPosts } from '../data/blogPosts.js'
import CategoryPage from '../pages/blog/CategoryPage.vue'

// jsdom lacks IntersectionObserver
beforeAll(() => {
  globalThis.IntersectionObserver = class {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
})

describe('category routes', () => {
  const paths = router.getRoutes().map(r => r.path)

  it('has /blog/e-rechnung route', () => {
    expect(paths).toContain('/blog/e-rechnung')
  })

  it('has /blog/ki-automatisierung route', () => {
    expect(paths).toContain('/blog/ki-automatisierung')
  })

  it('category routes resolve before the catch-all /blog/:slug', () => {
    const resolved = router.resolve('/blog/e-rechnung')
    expect(resolved.matched[0].path).toBe('/blog/e-rechnung')
  })
})

function createTestRouter(category) {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/blog', component: { template: '<div>blog</div>' } },
      { path: `/blog/${category}`, component: CategoryPage, meta: { category } },
    ],
  })
}

describe('CategoryPage — e-rechnung', () => {
  let wrapper, testRouter

  beforeEach(async () => {
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
    testRouter = createTestRouter('e-rechnung')
    testRouter.push('/blog/e-rechnung')
    await testRouter.isReady()
    wrapper = mount(CategoryPage, {
      global: {
        plugins: [testRouter],
        stubs: { MainLayout: { template: '<div><slot /></div>' } },
      },
    })
  })

  afterEach(() => {
    wrapper?.unmount()
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
  })

  it('renders only e-rechnung articles', () => {
    const expected = blogPosts.filter(p => p.category === 'e-rechnung').length
    const cards = wrapper.findAll('a[href^="/blog/"]').filter(a => a.attributes('href') !== '/blog')
    expect(cards).toHaveLength(expected)
  })

  it('renders intro text', () => {
    expect(wrapper.text()).toContain('XRechnung, ZUGFeRD, Pflichten ab 2027')
  })

  it('injects JSON-LD BreadcrumbList', () => {
    const script = document.querySelector('script[type="application/ld+json"]')
    expect(script).not.toBeNull()
    const data = JSON.parse(script.textContent)
    expect(data['@type']).toBe('BreadcrumbList')
    expect(data.itemListElement[1].name).toBe('E-Rechnung')
  })
})

describe('CategoryPage — ki-automatisierung', () => {
  let wrapper, testRouter

  beforeEach(async () => {
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
    testRouter = createTestRouter('ki-automatisierung')
    testRouter.push('/blog/ki-automatisierung')
    await testRouter.isReady()
    wrapper = mount(CategoryPage, {
      global: {
        plugins: [testRouter],
        stubs: { MainLayout: { template: '<div><slot /></div>' } },
      },
    })
  })

  afterEach(() => {
    wrapper?.unmount()
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove())
  })

  it('renders only ki-automatisierung articles', () => {
    const expected = blogPosts.filter(p => p.category === 'ki-automatisierung').length
    const cards = wrapper.findAll('a[href^="/blog/"]').filter(a => a.attributes('href') !== '/blog')
    expect(cards).toHaveLength(expected)
  })

  it('renders intro text', () => {
    expect(wrapper.text()).toContain('Agenten, Buchhaltung, Vertrieb und ROI-Berechnungen')
  })

  it('injects JSON-LD BreadcrumbList', () => {
    const script = document.querySelector('script[type="application/ld+json"]')
    const data = JSON.parse(script.textContent)
    expect(data['@type']).toBe('BreadcrumbList')
    expect(data.itemListElement[1].name).toBe('KI-Automatisierung')
  })
})
