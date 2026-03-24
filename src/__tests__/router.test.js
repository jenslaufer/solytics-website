import { describe, it, expect } from 'vitest'
import { router } from '../router.js'

describe('router', () => {
  const paths = router.getRoutes().map(r => r.path)

  it('has all main routes', () => {
    const required = ['/', '/e-rechnung', '/ki-automatisierung', '/blog', '/kontakt', '/impressum', '/datenschutz']
    for (const path of required) {
      expect(paths).toContain(path)
    }
  })

  it('has blog article route', () => {
    expect(paths).toContain('/blog/:slug')
  })

  it('has interactive check routes', () => {
    expect(paths).toContain('/ki-automatisierung/readiness-check')
    expect(paths).toContain('/e-rechnung/pflicht-check')
  })

  it('has catch-all 404 route', () => {
    expect(paths).toContain('/:pathMatch(.*)*')
  })

  it('has legacy redirects', () => {
    const route = router.getRoutes().find(r => r.path === '/appointment')
    expect(route?.redirect).toBe('/kontakt')
  })

  it('uses HTML5 history mode (not hash)', () => {
    // createWebHashHistory adds a # to all URLs; createWebHistory does not
    const url = router.resolve('/blog').href
    expect(url).not.toContain('#')
  })
})
