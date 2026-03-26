import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { blogPosts } from '../data/blogPosts.js'
import { relationshipMap, getRelatedArticles } from '../data/articles.js'
import RelatedArticles from '../components/RelatedArticles.vue'

const allSlugs = blogPosts.map(p => p.slug)

describe('relationshipMap', () => {
  it('every blog post has at least 2 related articles', () => {
    for (const slug of allSlugs) {
      const related = relationshipMap[slug]
      expect(related, `${slug} missing from relationshipMap`).toBeDefined()
      expect(related.length, `${slug} has only ${related?.length} related`).toBeGreaterThanOrEqual(2)
    }
  })

  it('no article links to itself', () => {
    for (const [slug, related] of Object.entries(relationshipMap)) {
      expect(related, `${slug} links to itself`).not.toContain(slug)
    }
  })

  it('all slugs in relationships exist in blogPosts', () => {
    for (const [slug, related] of Object.entries(relationshipMap)) {
      expect(allSlugs, `key "${slug}" not in blogPosts`).toContain(slug)
      for (const r of related) {
        expect(allSlugs, `"${r}" (related to ${slug}) not in blogPosts`).toContain(r)
      }
    }
  })
})

describe('getRelatedArticles', () => {
  it('returns full blog post objects', () => {
    const articles = getRelatedArticles('ki-buchhaltung')
    expect(articles.length).toBeGreaterThanOrEqual(2)
    for (const a of articles) {
      expect(a).toHaveProperty('slug')
      expect(a).toHaveProperty('title')
      expect(a).toHaveProperty('excerpt')
    }
  })

  it('returns empty array for unknown slug', () => {
    expect(getRelatedArticles('nonexistent')).toEqual([])
  })
})

describe('RelatedArticles component', () => {
  it('renders related article cards', () => {
    const wrapper = mount(RelatedArticles, {
      props: { slug: 'ki-buchhaltung' },
      global: {
        stubs: { 'router-link': { template: '<a><slot /></a>', props: ['to'] } },
      },
    })
    const cards = wrapper.findAll('a')
    expect(cards.length).toBeGreaterThanOrEqual(2)
    expect(wrapper.text()).toContain('Das könnte Sie auch interessieren')
  })

  it('renders nothing for unknown slug', () => {
    const wrapper = mount(RelatedArticles, {
      props: { slug: 'nonexistent' },
      global: {
        stubs: { 'router-link': { template: '<a><slot /></a>', props: ['to'] } },
      },
    })
    expect(wrapper.find('section').exists()).toBe(false)
  })
})
