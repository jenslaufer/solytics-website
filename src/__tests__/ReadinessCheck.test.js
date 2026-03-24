import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import ReadinessCheck from '../pages/ai/ReadinessCheck.vue'

function createWrapper() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/ki-automatisierung', component: { template: '<div />' } },
      { path: '/ki-automatisierung/readiness-check', component: ReadinessCheck },
      { path: '/kontakt', component: { template: '<div />' } },
    ],
  })
  return mount(ReadinessCheck, { global: { plugins: [router] } })
}

describe('ReadinessCheck', () => {
  it('renders step 1 initially', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain('In welcher Branche')
    expect(wrapper.text()).toContain('Schritt 1 von 5')
  })

  it('advances to step 2 on branche selection', async () => {
    const wrapper = createWrapper()
    const buttons = wrapper.findAll('button')
    const itButton = buttons.find(b => b.text() === 'IT & Software')
    await itButton.trigger('click')
    expect(wrapper.text()).toContain('Wie viele Mitarbeiter')
    expect(wrapper.text()).toContain('Schritt 2 von 5')
  })

  it('can navigate back from step 2', async () => {
    const wrapper = createWrapper()
    await wrapper.findAll('button').find(b => b.text() === 'IT & Software').trigger('click')
    await wrapper.findAll('button').find(b => b.text().includes('Zurück')).trigger('click')
    expect(wrapper.text()).toContain('In welcher Branche')
  })

  it('completes full flow and shows result', async () => {
    const wrapper = createWrapper()

    // Step 1: Branche
    await wrapper.findAll('button').find(b => b.text() === 'IT & Software').trigger('click')
    // Step 2: Mitarbeiter
    await wrapper.findAll('button').find(b => b.text() === '200+').trigger('click')
    // Step 3: Prozesse (multi-select)
    await wrapper.findAll('button').find(b => b.text() === 'Dateneingabe & -pflege').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Berichtswesen & Reporting').trigger('click')
    await wrapper.findAll('button').find(b => b.text().includes('Weiter')).trigger('click')
    // Step 4: Infra
    await wrapper.findAll('button').find(b => b.text() === 'Cloud-basiert').trigger('click')
    // Step 5: Budget
    await wrapper.findAll('button').find(b => b.text() === 'Über 50.000 €').trigger('click')

    expect(wrapper.text()).toContain('Advanced')
    expect(wrapper.text()).toContain('Readiness-Level')
    expect(wrapper.text()).toContain('Zeitersparnis')
  })

  it('shows reset button after result', async () => {
    const wrapper = createWrapper()
    await wrapper.findAll('button').find(b => b.text() === 'Sonstige').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === '1–10').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Dateneingabe & -pflege').trigger('click')
    await wrapper.findAll('button').find(b => b.text().includes('Weiter')).trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'On-Premise').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Unter 5.000 €').trigger('click')

    expect(wrapper.text()).toContain('Nochmal starten')
  })
})
