<template>
  <MainLayout>
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-3xl mx-auto">
        <p class="label text-muted mb-4">Häufige Fragen</p>
        <h1 class="heading-xl text-ink mb-12">FAQ</h1>

        <div v-for="(section, i) in sections" :key="i" class="mb-12">
          <h2 class="heading-md text-ink mb-6">{{ section.title }}</h2>
          <div class="space-y-px bg-border rounded-md overflow-hidden">
            <details v-for="(item, j) in section.items" :key="j" class="bg-surface group">
              <summary class="cursor-pointer p-6 flex items-center justify-between gap-4 hover:bg-warm-gray transition-colors">
                <span class="body-md font-semibold text-ink">{{ item.q }}</span>
                <svg class="w-5 h-5 text-muted flex-shrink-0 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </summary>
              <div class="px-6 pb-6 body-md text-muted" v-html="item.a"></div>
            </details>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-16 bg-warm-gray rounded-md p-8 sm:p-12 text-center">
          <h3 class="heading-lg text-ink">Frage nicht dabei?</h3>
          <p class="mt-3 body-lg text-muted max-w-xl mx-auto">
            Sprechen Sie direkt mit uns — kostenlos und unverbindlich.
          </p>
          <router-link to="/kontakt"
            class="cta-button inline-block mt-8 bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover">
            Gespräch vereinbaren
          </router-link>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useHead } from '../composables/useHead.js'
import { useHead as _useHead } from '@unhead/vue'

const sections = [
  {
    title: 'E-Rechnung',
    items: [
      {
        q: 'Was ist eine E-Rechnung?',
        a: 'Eine E-Rechnung ist eine elektronische Rechnung in einem strukturierten, maschinenlesbaren Format wie XRechnung oder ZUGFeRD. Im Gegensatz zu einer PDF enthält sie Daten, die automatisch verarbeitet werden können — ohne manuelle Eingabe oder OCR.',
      },
      {
        q: 'Wann wird die E-Rechnung Pflicht?',
        a: 'Seit dem 1. Januar 2025 müssen alle B2B-Unternehmen E-Rechnungen empfangen können. Ab 2027 gilt die Versandpflicht für Unternehmen mit über 800.000 Euro Vorjahresumsatz. Ab 2028 für alle.',
      },
      {
        q: 'Was ist der Unterschied zwischen XRechnung und ZUGFeRD?',
        a: 'XRechnung ist ein reines XML-Format — nur maschinenlesbar. ZUGFeRD (ab Version 2.0) kombiniert ein PDF mit eingebetteten XML-Daten und ist damit sowohl menschen- als auch maschinenlesbar. Beide erfüllen die EU-Norm EN 16931.',
      },
      {
        q: 'Brauchen Kleinunternehmer auch eine E-Rechnung?',
        a: 'Ja, auch Kleinunternehmer müssen seit 2025 E-Rechnungen empfangen können. Die Versandpflicht greift ab 2028 für alle Unternehmen, unabhängig vom Umsatz. Kleinbetragsrechnungen bis 250 Euro sind ausgenommen.',
      },
      {
        q: 'Welche Software brauche ich für E-Rechnungen?',
        a: 'Die meisten modernen Buchhaltungslösungen (DATEV, Lexoffice, sevDesk) unterstützen bereits XRechnung und ZUGFeRD. Solytics kann Ihren bestehenden Rechnungsprozess automatisieren und in Ihre Systeme integrieren.',
      },
    ],
  },
  {
    title: 'KI-Automatisierung',
    items: [
      {
        q: 'Was ist ein KI-Agent?',
        a: 'Ein KI-Agent ist ein autonomes System, das eigenständig Aufgaben erledigt — nicht nur antwortet wie ein Chatbot. Er liest Daten, trifft Entscheidungen, führt Aktionen aus und lernt aus Feedback. Typische Einsätze: Rechnungsverarbeitung, Reporting, Vertriebsautomatisierung.',
      },
      {
        q: 'Wie lange dauert die Implementierung?',
        a: 'Ein erster KI-Agent ist typischerweise in 2 Wochen produktiv. Komplexere Integrationen in Enterprise-Umgebungen dauern 4–8 Wochen. Wir beginnen immer mit einem konkreten Prozess, der schnell ROI liefert.',
      },
      {
        q: 'Ist meine Daten bei KI-Agenten sicher?',
        a: 'Ja. Alle Systeme können DSGVO-konform und auf Wunsch on-premise deployed werden. Wir arbeiten ausschließlich mit europäischen oder selbst gehosteten Infrastrukturen. Ihre Daten verlassen nicht Ihre Kontrolle.',
      },
      {
        q: 'Was kostet KI-Automatisierung?',
        a: 'Die Kosten hängen vom Umfang ab. Ein einzelner KI-Agent für einen klar definierten Prozess startet typischerweise bei wenigen tausend Euro. Die meisten Projekte amortisieren sich innerhalb von 3–6 Monaten. In Bayern gibt es bis zu 50% Förderung über den Digitalbonus.',
      },
      {
        q: 'Brauche ich eine eigene IT-Abteilung?',
        a: 'Nein. Solytics übernimmt Entwicklung, Deployment und Wartung komplett. Sie brauchen nur einen Ansprechpartner, der den zu automatisierenden Prozess kennt.',
      },
    ],
  },
]

useHead({
  title: 'FAQ — Häufige Fragen zu E-Rechnung & KI-Automatisierung — Solytics',
  description: 'Antworten auf häufige Fragen zu E-Rechnung (XRechnung, ZUGFeRD, Pflicht 2027) und KI-Automatisierung für Unternehmen.',
})

// FAQPage schema (SSR-compatible via useHead)
const allItems = sections.flatMap(s => s.items)
_useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: allItems.map(item => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a,
        },
      })),
    }),
  }],
})
</script>
