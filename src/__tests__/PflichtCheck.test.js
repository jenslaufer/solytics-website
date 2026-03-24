import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import PflichtCheck from '../pages/einvoice/PflichtCheck.vue'

function createWrapper() {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [
      { path: '/', component: { template: '<div />' } },
      { path: '/e-rechnung', component: { template: '<div />' } },
      { path: '/e-rechnung/pflicht-check', component: PflichtCheck },
      { path: '/kontakt', component: { template: '<div />' } },
    ],
  })
  return mount(PflichtCheck, { global: { plugins: [router] } })
}

describe('PflichtCheck', () => {
  it('renders step 1 initially', () => {
    const wrapper = createWrapper()
    expect(wrapper.text()).toContain('Welche Rechtsform')
    expect(wrapper.text()).toContain('Schritt 1 von 4')
  })

  it('completes full flow — high urgency', async () => {
    const wrapper = createWrapper()

    // Step 1: Rechtsform
    await wrapper.findAll('button').find(b => b.text() === 'GmbH').trigger('click')
    // Step 2: B2B
    await wrapper.findAll('button').find(b => b.text() === 'Ja').trigger('click')
    // Step 3: Umsatz
    await wrapper.findAll('button').find(b => b.text() === 'Über 800.000 €').trigger('click')
    // Step 4: Rechnung
    await wrapper.findAll('button').find(b => b.text() === 'Papier').trigger('click')

    expect(wrapper.text()).toContain('Handlungsbedarf: Hoch')
    expect(wrapper.text()).toContain('Empfohlene Schritte')
  })

  it('completes full flow — low urgency', async () => {
    const wrapper = createWrapper()

    await wrapper.findAll('button').find(b => b.text() === 'Freiberufler').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Nein').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Unter 250.000 €').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'E-Rechnung (XRechnung/ZUGFeRD)').trigger('click')

    expect(wrapper.text()).toContain('Handlungsbedarf: Gering')
  })

  it('can reset after result', async () => {
    const wrapper = createWrapper()

    await wrapper.findAll('button').find(b => b.text() === 'GmbH').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Ja').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Über 800.000 €').trigger('click')
    await wrapper.findAll('button').find(b => b.text() === 'Papier').trigger('click')

    await wrapper.findAll('button').find(b => b.text() === 'Nochmal starten').trigger('click')
    expect(wrapper.text()).toContain('Welche Rechtsform')
  })
})
