import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'

vi.mock('vue-router', () => ({
  RouterLink: { template: '<a><slot /></a>', props: ['to'] },
  useRoute: () => ({ params: {} }),
}))

describe('ERechnungLexoffice', () => {
  let wrapper

  beforeAll(async () => {
    const mod = await import('../../src/pages/blog/ERechnungLexoffice.vue')
    wrapper = mount(mod.default, {
      global: {
        stubs: { 'router-link': { template: '<a :href="to"><slot /></a>', props: ['to'] } },
      },
    })
  })

  it('renders without errors', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('has correct H2 headings for all sections', () => {
    const h2s = wrapper.findAll('h2')
    const texts = h2s.map(h => h.text())
    expect(texts.some(t => t.includes('Lexoffice'))).toBe(true)
    expect(texts.some(t => t.includes('XRechnung') || t.includes('ZUGFeRD'))).toBe(true)
    expect(texts.some(t => t.includes('Einrichtung') || t.includes('Schritt'))).toBe(true)
    expect(texts.some(t => t.includes('Grenzen') || t.includes('Limit'))).toBe(true)
  })

  it('contains RelatedArticles component', () => {
    const related = wrapper.findComponent({ name: 'RelatedArticles' })
    expect(related.exists()).toBe(true)
  })

  it('article wrapper has prose-article class', () => {
    const article = wrapper.find('article.prose-article')
    expect(article.exists()).toBe(true)
  })

  it('blogPosts entry has correct metadata', async () => {
    const { blogPosts } = await import('../../src/data/blogPosts.js')
    const post = blogPosts.find(p => p.slug === 'e-rechnung-lexoffice')
    expect(post).toBeDefined()
    expect(post.title).toContain('Lexoffice')
    expect(post.excerpt).toBeTruthy()
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(post.category).toBe('e-rechnung')
    expect(typeof post.component).toBe('function')
  })

  it('related articles mapping exists with 2+ entries', async () => {
    const { relationshipMap } = await import('../../src/data/articles.js')
    const related = relationshipMap['e-rechnung-lexoffice']
    expect(related).toBeDefined()
    expect(related.length).toBeGreaterThanOrEqual(2)
  })

  it('contains CTA link', () => {
    const links = wrapper.findAll('a[href]')
    const ctaLinks = links.filter(l => {
      const href = l.attributes('href')
      return href === '/kontakt' || href === '/e-rechnung' || href?.startsWith('/e-rechnung/')
    })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
  })
})
