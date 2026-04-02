import { describe, it, expect, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { blogPosts } from '../data/blogPosts.js'
import ERechnungCheckliste2026 from '../pages/blog/ERechnungCheckliste2026.vue'

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  }
})

const SLUG = 'e-rechnung-checkliste-2026'

describe('ERechnungCheckliste2026', () => {
  it('is registered in blogPosts with correct metadata', () => {
    const post = blogPosts.find(p => p.slug === SLUG)
    expect(post).toBeDefined()
    expect(post.title).toContain('Checkliste')
    expect(post.category).toBe('e-rechnung')
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(post.readingTime).toBeTruthy()
    expect(typeof post.component).toBe('function')
  })

  it('renders article content with checklist items', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div />' } },
        { path: '/blog/:slug', component: { template: '<div />' } },
        { path: '/e-rechnung', component: { template: '<div />' } },
        { path: '/kontakt', component: { template: '<div />' } },
      ],
    })

    const wrapper = mount(ERechnungCheckliste2026, {
      global: { plugins: [router] },
    })

    // Has article root
    expect(wrapper.find('article.prose-article').exists()).toBe(true)

    // Contains checklist items (at least 10)
    const listItems = wrapper.findAll('li')
    expect(listItems.length).toBeGreaterThanOrEqual(10)

    // Contains key headings
    const text = wrapper.text()
    expect(text).toContain('Checkliste')
    expect(text).toContain('2025')
    expect(text).toContain('2027')
    expect(text).toContain('2028')
  })

  it('contains CTA link to /e-rechnung', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div />' } },
        { path: '/blog/:slug', component: { template: '<div />' } },
        { path: '/e-rechnung', component: { template: '<div />' } },
        { path: '/kontakt', component: { template: '<div />' } },
      ],
    })

    const wrapper = mount(ERechnungCheckliste2026, {
      global: { plugins: [router] },
    })

    const ctaLink = wrapper.find('a[href="/e-rechnung"]')
    expect(ctaLink.exists()).toBe(true)
  })

  it('appears in blog listing', async () => {
    const Blog = (await import('../pages/Blog.vue')).default
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div />' } },
        { path: '/blog', component: Blog },
        { path: '/blog/:slug', component: { template: '<div />' } },
      ],
    })
    router.push('/blog')
    await router.isReady()

    const wrapper = mount(Blog, {
      global: {
        plugins: [router],
        stubs: { MainLayout: { template: '<div><slot /></div>' } },
      },
    })

    const link = wrapper.find(`a[href="/blog/${SLUG}"]`)
    expect(link.exists()).toBe(true)
  })
})
