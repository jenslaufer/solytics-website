import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useHead as mockUseHead } from '@unhead/vue'
vi.mock('vue-router', () => ({ useRoute: () => ({ path: '/test-page' }) }))

import { useHead } from '../composables/useHead.js'

describe('useHead', () => {
  beforeEach(() => mockUseHead.mockClear())

  it('sets title and og:title', () => {
    useHead({ title: 'Test Title', description: '' })
    const call = mockUseHead.mock.calls[0][0]
    expect(call.title).toBe('Test Title')
    expect(call.meta).toContainEqual({ property: 'og:title', content: 'Test Title' })
  })

  it('sets meta description and og:description', () => {
    useHead({ title: '', description: 'Test desc' })
    const call = mockUseHead.mock.calls[0][0]
    expect(call.meta).toContainEqual({ name: 'description', content: 'Test desc' })
    expect(call.meta).toContainEqual({ property: 'og:description', content: 'Test desc' })
  })

  it('sets canonical URL from route', () => {
    useHead({ title: 'Page', description: 'Desc' })
    const call = mockUseHead.mock.calls[0][0]
    expect(call.link).toContainEqual({ rel: 'canonical', href: 'https://solytics.de/test-page' })
    expect(call.meta).toContainEqual({ property: 'og:url', content: 'https://solytics.de/test-page' })
  })

  it('omits description meta when empty', () => {
    useHead({ title: 'Title', description: '' })
    const call = mockUseHead.mock.calls[0][0]
    expect(call.meta.find(m => m.name === 'description')).toBeUndefined()
  })
})
