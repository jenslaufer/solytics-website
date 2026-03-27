import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { blogPosts } from '../data/blogPosts.js'
import KiKundenserviceAgent from '../pages/blog/KiKundenserviceAgent.vue'

describe('KiKundenserviceAgent', () => {
  it('renders without errors', () => {
    const wrapper = mount(KiKundenserviceAgent)
    expect(wrapper.find('article.prose-article').exists()).toBe(true)
  })

  it('heading contains "Kundenservice"', () => {
    const wrapper = mount(KiKundenserviceAgent)
    const headings = wrapper.findAll('h2')
    const hasKundenservice = headings.some(h => h.text().includes('Kundenservice'))
    expect(hasKundenservice).toBe(true)
  })

  it('CTA links point to /ki-automatisierung', () => {
    const wrapper = mount(KiKundenserviceAgent)
    const links = wrapper.findAll('a')
    const kiLinks = links.filter(a => a.attributes('href')?.startsWith('/ki-automatisierung'))
    expect(kiLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('blogPosts entry has correct metadata', () => {
    const post = blogPosts.find(p => p.slug === 'ki-kundenservice-agent')
    expect(post).toBeTruthy()
    expect(post.title).toContain('Kundenservice')
    expect(post.category).toBe('ki-automatisierung')
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(typeof post.component).toBe('function')
  })
})
