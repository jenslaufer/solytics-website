import { describe, it, expect } from 'vitest'
import { blogPosts } from '../data/blogPosts.js'

describe('blogPosts', () => {
  it('exports a non-empty array', () => {
    expect(Array.isArray(blogPosts)).toBe(true)
    expect(blogPosts.length).toBeGreaterThan(0)
  })

  it('each post has required fields', () => {
    for (const post of blogPosts) {
      expect(post.slug).toBeTruthy()
      expect(post.title).toBeTruthy()
      expect(post.excerpt).toBeTruthy()
      expect(post.date).toMatch(/^\d{4}-\d{2}-\d{2}$/)
      expect(post.category).toBeTruthy()
      expect(post.readingTime).toBeTruthy()
      expect(typeof post.component).toBe('function')
    }
  })

  it('slugs are unique', () => {
    const slugs = blogPosts.map(p => p.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
  })

  it('categories are valid', () => {
    const valid = ['e-rechnung', 'ki-automatisierung']
    for (const post of blogPosts) {
      expect(valid).toContain(post.category)
    }
  })
})
