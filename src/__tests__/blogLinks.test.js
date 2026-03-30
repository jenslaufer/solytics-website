import { describe, it, expect, vi, beforeAll } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import Blog from '../pages/Blog.vue'
import { blogPosts } from '../data/blogPosts.js'

beforeAll(() => {
  // jsdom doesn't have IntersectionObserver
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  }
})

function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div>Home</div>' } },
      { path: '/blog', component: Blog },
      { path: '/blog/:slug', component: { template: '<div>Article</div>' } },
    ],
  })
}

describe('Blog listing links', () => {
  it('renders clickable links for all blog posts', async () => {
    const router = createTestRouter()
    router.push('/blog')
    await router.isReady()

    const wrapper = mount(Blog, {
      global: {
        plugins: [router],
        stubs: { MainLayout: { template: '<div><slot /></div>' } },
      },
    })

    const links = wrapper.findAll('a[href^="/blog/"]')
    expect(links.length).toBe(blogPosts.length)

    for (const post of blogPosts) {
      const link = wrapper.find(`a[href="/blog/${post.slug}"]`)
      expect(link.exists(), `Link to /blog/${post.slug} should exist`).toBe(true)
      expect(link.text()).toContain(post.title)
    }
  })

  it('blog post links are not blocked by pointer-events', async () => {
    const router = createTestRouter()
    router.push('/blog')
    await router.isReady()

    const wrapper = mount(Blog, {
      global: {
        plugins: [router],
        stubs: { MainLayout: { template: '<div><slot /></div>' } },
      },
    })

    const links = wrapper.findAll('a[href^="/blog/"]')
    for (const link of links) {
      const style = link.attributes('style') || ''
      expect(style).not.toContain('pointer-events: none')
    }
  })
})
