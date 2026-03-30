import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { blogPosts } from '../data/blogPosts.js'
import { relationshipMap } from '../data/articles.js'

const slug = 'e-rechnung-datev'

describe('ERechnungDatev blog post', () => {
  const post = blogPosts.find(p => p.slug === slug)

  it('exists in blogPosts', () => {
    expect(post).toBeDefined()
  })

  it('has correct metadata', () => {
    expect(post.title).toBe('E-Rechnung mit DATEV: So richten Sie XRechnung ein')
    expect(post.category).toBe('e-rechnung')
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(post.readingTime).toBeTruthy()
    expect(typeof post.component).toBe('function')
  })

  it('has related articles including software-vergleich and xrechnung-implementieren', () => {
    const related = relationshipMap[slug]
    expect(related).toBeDefined()
    expect(related.length).toBeGreaterThanOrEqual(2)
    expect(related).toContain('e-rechnung-software-vergleich-2026')
    expect(related).toContain('xrechnung-implementieren')
  })

  it('renders with correct heading', async () => {
    const comp = await post.component()
    const wrapper = mount(comp.default, {
      global: {
        stubs: {
          RelatedArticles: { template: '<div />' },
        },
      },
    })
    expect(wrapper.find('h2').text()).toContain('E-Rechnung mit DATEV')
    expect(wrapper.find('article').exists()).toBe(true)
    expect(wrapper.find('article').classes()).toContain('prose-article')
  })

  it('contains key SEO content', async () => {
    const comp = await post.component()
    const wrapper = mount(comp.default, {
      global: {
        stubs: {
          RelatedArticles: { template: '<div />' },
        },
      },
    })
    const text = wrapper.text()
    expect(text).toContain('DATEV')
    expect(text).toContain('XRechnung')
    expect(text).toContain('GoBD')
    expect(text).toContain('2027')
    expect(text).toContain('solytics.de/e-rechnung')
  })
})
