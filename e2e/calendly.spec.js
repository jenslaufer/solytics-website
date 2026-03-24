import { test, expect } from '@playwright/test'

test.describe('Calendly widget', () => {
  test('renders on direct navigation to /kontakt', async ({ page }) => {
    await page.goto('/kontakt')
    const widget = page.locator('.calendly-inline-widget iframe')
    await expect(widget).toBeVisible({ timeout: 10000 })
  })

  test('renders after client-side navigation to /kontakt', async ({ page }) => {
    // Start on homepage, then navigate via router
    await page.goto('/')
    await page.click('a[href="/kontakt"]')
    const widget = page.locator('.calendly-inline-widget iframe')
    await expect(widget).toBeVisible({ timeout: 10000 })
  })

  test('Calendly iframe loads correct URL', async ({ page }) => {
    await page.goto('/kontakt')
    const iframe = page.locator('.calendly-inline-widget iframe')
    await expect(iframe).toBeVisible({ timeout: 10000 })
    const src = await iframe.getAttribute('src')
    expect(src).toContain('calendly.com')
  })
})
