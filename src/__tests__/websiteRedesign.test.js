import { describe, it, expect, beforeAll, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { router as appRouter } from '../router.js'
import WebsiteRedesign from '../pages/WebsiteRedesign.vue'

beforeAll(() => {
  global.IntersectionObserver = class {
    observe() {}
    disconnect() {}
    unobserve() {}
  }
})

describe('Website-Redesign route', () => {
  it('has /website-redesign route', () => {
    const paths = appRouter.getRoutes().map(r => r.path)
    expect(paths).toContain('/website-redesign')
  })
})

describe('WebsiteRedesign page', () => {
  let wrapper

  beforeEach(async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/website-redesign', component: WebsiteRedesign },
        { path: '/kontakt', component: { template: '<div>Kontakt</div>' } },
      ],
    })
    router.push('/website-redesign')
    await router.isReady()

    wrapper = mount(WebsiteRedesign, {
      global: { plugins: [router] },
    })
  })

  it('renders hero section with heading', () => {
    expect(wrapper.text()).toContain('Professionelles Website-Redesign')
    expect(wrapper.text()).toContain('Modern. In 48 Stunden.')
  })

  it('renders Website-Redesign badge', () => {
    expect(wrapper.text()).toContain('Website-Redesign')
  })

  it('renders problem section with 3 cards', () => {
    expect(wrapper.text()).toContain('Veraltetes Design kostet Kunden')
    expect(wrapper.text()).toContain('Mobile Nutzer springen ab')
    expect(wrapper.text()).toContain('Konkurrenz sieht professioneller aus')
  })

  it('renders process section with 3 steps', () => {
    expect(wrapper.text()).toContain('Analyse')
    expect(wrapper.text()).toContain('Redesign')
    expect(wrapper.text()).toContain('Launch')
  })

  it('renders before/after section', () => {
    expect(wrapper.text()).toContain('Vorher / Nachher')
    expect(wrapper.text()).toContain('Vorher')
    expect(wrapper.text()).toContain('Nachher')
  })

  it('renders pricing at 499 €', () => {
    expect(wrapper.text()).toContain('499 €')
  })

  it('renders Digitalbonus hint', () => {
    expect(wrapper.text()).toContain('Digitalbonus Bayern')
    expect(wrapper.text()).toContain('50 %')
  })

  it('renders FAQ section', () => {
    expect(wrapper.text()).toContain('Wie lange dauert das Redesign?')
    expect(wrapper.text()).toContain('Was passiert mit meinem bestehenden Content?')
    expect(wrapper.text()).toContain('Brauche ich technische Kenntnisse?')
    expect(wrapper.text()).toContain('Was kostet Hosting nach dem Redesign?')
  })

  it('renders CTA linking to /kontakt', () => {
    const ctaLinks = wrapper.findAll('a[href="/kontakt"]')
    expect(ctaLinks.length).toBeGreaterThan(0)
  })
})
