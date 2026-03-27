import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { blogPosts } from '../data/blogPosts.js'
import KiAgentenDsgvoDatenschutz from '../pages/blog/KiAgentenDsgvoDatenschutz.vue'

describe('KiAgentenDsgvoDatenschutz', () => {
  it('renders without errors', () => {
    const wrapper = mount(KiAgentenDsgvoDatenschutz)
    expect(wrapper.find('article.prose-article').exists()).toBe(true)
  })

  it('heading contains "DSGVO"', () => {
    const wrapper = mount(KiAgentenDsgvoDatenschutz)
    const headings = wrapper.findAll('h2')
    const hasDsgvo = headings.some(h => h.text().includes('DSGVO'))
    expect(hasDsgvo).toBe(true)
  })

  it('CTA links point to /ki-automatisierung', () => {
    const wrapper = mount(KiAgentenDsgvoDatenschutz)
    const links = wrapper.findAll('a')
    const kiLinks = links.filter(a => a.attributes('href')?.startsWith('/ki-automatisierung'))
    expect(kiLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('blogPosts entry has correct metadata', () => {
    const post = blogPosts.find(p => p.slug === 'ki-agenten-dsgvo-datenschutz')
    expect(post).toBeTruthy()
    expect(post.title).toContain('DSGVO')
    expect(post.category).toBe('ki-automatisierung')
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(typeof post.component).toBe('function')
  })
})
