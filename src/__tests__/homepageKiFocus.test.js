import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { router as appRouter } from '../router.js'

vi.mock('../composables/useScrollAnimation.js', () => ({ useScrollAnimation: () => {} }))
vi.mock('../composables/useHead.js', () => ({ useHead: () => {} }))

// Minimal router for component mounting
function createTestRouter() {
  return createRouter({
    history: createMemoryHistory(),
    routes: appRouter.getRoutes().map(r => ({
      path: r.path,
      component: { template: '<div>stub</div>' },
      redirect: r.redirect,
      meta: r.meta,
    })),
  })
}

describe('homepage KI focus', () => {
  it('homepage hero focuses on KI, not E-Rechnung', async () => {
    const { default: Home } = await import('../pages/Home.vue')
    const router = createTestRouter()
    router.push('/')
    await router.isReady()

    const wrapper = mount(Home, {
      global: { plugins: [router], stubs: { MainLayout: { template: '<div><slot /></div>' } } },
    })
    const hero = wrapper.find('h1')
    expect(hero.text()).toContain('KI')
    expect(hero.text()).not.toContain('E-Rechnung')
  })

  it('homepage links to all three services', async () => {
    const { default: Home } = await import('../pages/Home.vue')
    const router = createTestRouter()
    router.push('/')
    await router.isReady()

    const wrapper = mount(Home, {
      global: { plugins: [router], stubs: { MainLayout: { template: '<div><slot /></div>' } } },
    })
    const text = wrapper.text()
    expect(text).toContain('E-Rechnung')
    expect(text).toContain('KI-Automatisierung')
    expect(text).toContain('Website-Redesign')
  })

  it('homepage renders KI-Automatisierung content', async () => {
    const { default: Home } = await import('../pages/Home.vue')
    const router = createTestRouter()
    router.push('/')
    await router.isReady()

    const wrapper = mount(Home, {
      global: { plugins: [router], stubs: { MainLayout: { template: '<div><slot /></div>' } } },
    })
    const text = wrapper.text()
    expect(text).toContain('KI')
  })
})

describe('e-invoice routes still resolve', () => {
  it('/e-rechnung resolves to a component (not 404)', () => {
    const route = appRouter.resolve('/e-rechnung')
    expect(route.matched.length).toBeGreaterThan(0)
    expect(route.matched[0].name).not.toBe('NotFound')
  })

  it('/e-rechnung/pflicht-check resolves to a component (not 404)', () => {
    const route = appRouter.resolve('/e-rechnung/pflicht-check')
    expect(route.matched.length).toBeGreaterThan(0)
    expect(route.matched[0].name).not.toBe('NotFound')
  })
})

describe('NavBar contains E-Rechnung', () => {
  it('navItems includes E-Rechnung', async () => {
    const { default: NavBar } = await import('../components/NavBar.vue')
    const router = createTestRouter()
    router.push('/')
    await router.isReady()

    const wrapper = mount(NavBar, {
      global: { plugins: [router] },
    })
    const text = wrapper.text()
    expect(text).toContain('E-Rechnung')
  })
})

describe('Footer contains E-Rechnung', () => {
  it('footer includes E-Rechnung link', async () => {
    const { default: SiteFooter } = await import('../components/SiteFooter.vue')
    const router = createTestRouter()
    router.push('/')
    await router.isReady()

    const wrapper = mount(SiteFooter, {
      global: { plugins: [router] },
    })
    const text = wrapper.text()
    expect(text).toContain('E-Rechnung')
  })
})
