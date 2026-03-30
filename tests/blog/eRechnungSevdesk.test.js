import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'

vi.mock('vue-router', () => ({
  RouterLink: { template: '<a><slot /></a>', props: ['to'] },
  useRoute: () => ({ params: {} }),
}))

describe('ERechnungSevdesk', () => {
  let wrapper

  beforeAll(async () => {
    const mod = await import('../../src/pages/blog/ERechnungSevdesk.vue')
    wrapper = mount(mod.default, {
      global: {
        stubs: { 'router-link': { template: '<a :href="to"><slot /></a>', props: ['to'] } },
      },
    })
  })

  it('renders without errors', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('heading contains "sevDesk" and "XRechnung"', () => {
    const h2 = wrapper.find('h2')
    expect(h2.text()).toContain('sevDesk')
    expect(h2.text()).toContain('XRechnung')
  })

  it('has expected section headings', () => {
    const headings = wrapper.findAll('h2')
    const texts = headings.map(h => h.text())
    expect(texts.some(t => t.includes('API'))).toBe(true)
    expect(texts.some(t => t.includes('DATEV'))).toBe(true)
  })

  it('CTA links point to /e-rechnung', () => {
    const links = wrapper.findAll('a[href]')
    const eRechnungLinks = links.filter(l => {
      const href = l.attributes('href')
      return href === '/e-rechnung' || href?.startsWith('/e-rechnung/')
    })
    expect(eRechnungLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('blogPosts entry has correct meta', async () => {
    const { blogPosts } = await import('../../src/data/blogPosts.js')
    const post = blogPosts.find(p => p.slug === 'e-rechnung-sevdesk')
    expect(post).toBeDefined()
    expect(post.title).toContain('sevDesk')
    expect(post.excerpt).toBeTruthy()
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(post.category).toBe('e-rechnung')
    expect(typeof post.component).toBe('function')
  })

  it('has related articles component', () => {
    expect(wrapper.text()).toContain('Das könnte Sie auch interessieren')
  })
})
