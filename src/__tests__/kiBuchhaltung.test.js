import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { blogPosts } from '../data/blogPosts.js'
import KiBuchhaltung from '../pages/blog/KiBuchhaltung.vue'

describe('KiBuchhaltung', () => {
  it('renders without errors', () => {
    const wrapper = mount(KiBuchhaltung)
    expect(wrapper.find('article.prose-article').exists()).toBe(true)
  })

  it('heading contains "Buchhaltung"', () => {
    const wrapper = mount(KiBuchhaltung)
    const headings = wrapper.findAll('h2')
    const hasBuchhaltung = headings.some(h => h.text().includes('Buchhaltung'))
    expect(hasBuchhaltung).toBe(true)
  })

  it('CTA links point to /ki-automatisierung', () => {
    const wrapper = mount(KiBuchhaltung)
    const links = wrapper.findAll('a')
    const kiLinks = links.filter(a => a.attributes('href')?.startsWith('/ki-automatisierung'))
    expect(kiLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('blogPosts entry has correct metadata', () => {
    const post = blogPosts.find(p => p.slug === 'ki-buchhaltung')
    expect(post).toBeTruthy()
    expect(post.title).toContain('Buchhaltung')
    expect(post.category).toBe('ki-automatisierung')
    expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
    expect(typeof post.component).toBe('function')
  })
})
