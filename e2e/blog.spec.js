import { test, expect } from '@playwright/test'

test.describe('Blog articles', () => {
  test('article page renders content (not [object Promise])', async ({ page }) => {
    await page.goto('/blog/xrechnung-pflicht-2027')
    // Article should contain actual content
    const article = page.locator('.prose-article')
    await expect(article).toBeVisible({ timeout: 10000 })
    // Must not show [object Promise]
    const text = await article.textContent()
    expect(text).not.toContain('[object Promise]')
    expect(text).not.toContain('object Object')
    // Should contain real article content
    expect(text).toContain('XRechnung')
  })

  test('article renders after client-side navigation from blog listing', async ({ page }) => {
    await page.goto('/blog')
    await page.click('a[href="/blog/ki-agenten-fuer-unternehmen"]')
    const article = page.locator('.prose-article')
    await expect(article).toBeVisible({ timeout: 10000 })
    const text = await article.textContent()
    expect(text).not.toContain('[object Promise]')
    expect(text).toContain('KI-Agent')
  })

  test('all three articles render correctly', async ({ page }) => {
    const slugs = [
      { slug: 'xrechnung-pflicht-2027', keyword: 'XRechnung' },
      { slug: 'ki-agenten-fuer-unternehmen', keyword: 'KI-Agent' },
      { slug: 'e-rechnung-software-vergleich-2026', keyword: 'E-Rechnung-Software' },
    ]
    for (const { slug, keyword } of slugs) {
      await page.goto(`/blog/${slug}`)
      const article = page.locator('.prose-article')
      await expect(article).toBeVisible({ timeout: 10000 })
      const text = await article.textContent()
      expect(text).not.toContain('[object Promise]')
      expect(text).toContain(keyword)
    }
  })

  test('blog listing shows all posts', async ({ page }) => {
    await page.goto('/blog')
    const cards = page.locator('a[href^="/blog/"]')
    await expect(cards).toHaveCount(3, { timeout: 10000 })
  })

  test('prev/next navigation works', async ({ page }) => {
    await page.goto('/blog/ki-agenten-fuer-unternehmen')
    // Should have prev and next links
    const prevLink = page.locator('a[href="/blog/xrechnung-pflicht-2027"]')
    const nextLink = page.locator('a[href="/blog/e-rechnung-software-vergleich-2026"]')
    await expect(prevLink).toBeVisible({ timeout: 10000 })
    await expect(nextLink).toBeVisible()
  })
})
