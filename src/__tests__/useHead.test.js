import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { defineComponent } from 'vue'
import { useHead } from '../composables/useHead.js'

function createWrapper(options) {
  const Comp = defineComponent({
    setup() { useHead(options) },
    template: '<div />',
  })
  return mount(Comp)
}

describe('useHead', () => {
  beforeEach(() => {
    document.title = ''
    document.head.querySelectorAll('meta[name="description"], meta[property^="og:"]').forEach(el => el.remove())
  })

  it('sets document title', () => {
    createWrapper({ title: 'Test Title', description: '' })
    expect(document.title).toBe('Test Title')
  })

  it('sets meta description', () => {
    createWrapper({ title: '', description: 'Test desc' })
    const meta = document.querySelector('meta[name="description"]')
    expect(meta?.getAttribute('content')).toBe('Test desc')
  })

  it('sets og:title and og:description', () => {
    createWrapper({ title: 'OG Title', description: 'OG Desc' })
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute('content')).toBe('OG Title')
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute('content')).toBe('OG Desc')
  })

  it('reuses existing meta tags', () => {
    createWrapper({ title: 'First', description: 'First desc' })
    createWrapper({ title: 'Second', description: 'Second desc' })
    const metas = document.querySelectorAll('meta[name="description"]')
    expect(metas.length).toBe(1)
    expect(metas[0].getAttribute('content')).toBe('Second desc')
  })
})
