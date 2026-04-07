<template>
  <MainLayout>
    <!-- Hero -->
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <p class="label text-accent mb-6">KI-Automatisierung aus Deutschland</p>
          <h1 class="heading-xl text-ink mb-8">
            Wir automatisieren Ihre Geschäftsprozesse mit KI-Agenten.
          </h1>
          <p class="body-lg text-muted max-w-prose mb-10">
            Solytics baut autonome KI-Systeme, die repetitive Arbeit übernehmen — in Konzernen und im Mittelstand. Aus 15 Jahren Enterprise-Erfahrung entstehen Lösungen, die in bestehende IT-Landschaften passen.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt"
              class="cta-button bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover text-center">
              Erstgespräch vereinbaren
            </router-link>
            <router-link to="/ki-automatisierung"
              class="inline-block px-8 py-4 text-base font-semibold text-ink border border-border hover:bg-warm-gray rounded-md transition-colors text-center">
              Leistungen entdecken
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Two Tracks -->
    <section class="py-16 md:py-24 px-6 md:px-10 bg-warm-gray border-t border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Für wen wir arbeiten">
          Zwei Welten. Ein Ansatz.
          <template #description>KI-Automatisierung funktioniert in Konzernen anders als im Mittelstand. Wir kennen beide.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-4">Enterprise</p>
            <h3 class="heading-md text-ink mb-3">Konzerne &amp; Großunternehmen</h3>
            <p class="body-md text-muted mb-6">
              Komplexe Systemlandschaften, regulierte Prozesse, hohe Integrationstiefe. Wir kommen aus dieser Welt — SAP-Anbindung, Compliance, Multi-Team-Koordination.
            </p>
            <ul class="space-y-2">
              <li v-for="item in enterpriseItems" :key="item" class="flex items-start gap-2 body-md text-muted">
                <svg class="w-4 h-4 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
                {{ item }}
              </li>
            </ul>
          </div>
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-4">Mittelstand</p>
            <h3 class="heading-md text-ink mb-3">KMU &amp; wachsende Unternehmen</h3>
            <p class="body-md text-muted mb-6">
              Schnelle Ergebnisse, pragmatische Umsetzung, klare ROI-Rechnung. Automatisierung dort, wo sie sofort Kapazität freisetzt.
            </p>
            <ul class="space-y-2">
              <li v-for="item in mittelstandItems" :key="item" class="flex items-start gap-2 body-md text-muted">
                <svg class="w-4 h-4 mt-1 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4.5 12.75l6 6 9-13.5"/></svg>
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- What KI-Agenten do -->
    <section class="py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Was wir bauen">
          KI-Agenten, die arbeiten.
          <template #description>Keine Chatbots. Keine Dashboards. Autonome Systeme, die Aufgaben end-to-end erledigen.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden fade-up-fast">
          <FeatureCard title="Prozessautomatisierung" description="Wiederkehrende Abläufe — Rechnungseingang, Reporting, Datenabgleich — laufen autonom.">
            <template #icon>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard title="Systemintegration" description="Agenten verbinden APIs, Datenbanken und Legacy-Systeme — ohne manuelle Schnittstellen.">
            <template #icon>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard title="Entscheidungsunterstützung" description="KI analysiert Daten, erkennt Muster und liefert Handlungsempfehlungen in Echtzeit.">
            <template #icon>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>
            </template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray border-t border-b border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Anwendungsfälle">
          Wo KI-Agenten heute schon arbeiten.
          <template #description>Konkrete Prozesse, die wir automatisiert haben.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <div v-for="useCase in useCases" :key="useCase.title" class="bg-surface p-6 md:p-8">
            <div class="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-accent-light text-accent" v-html="useCase.icon"></div>
            <h3 class="heading-md text-ink">{{ useCase.title }}</h3>
            <p class="mt-2 body-md text-muted">{{ useCase.description }}</p>
            <p class="mt-3 body-md font-semibold text-accent">{{ useCase.metric }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Credibility -->
    <section class="py-16 md:py-24 px-6 md:px-10 fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="md:grid md:grid-cols-12 md:gap-16">
          <div class="md:col-span-5 mb-10 md:mb-0">
            <p class="label text-accent mb-4">Hintergrund</p>
            <h2 class="heading-lg text-ink mb-4">Enterprise-Erfahrung.<br>Startup-Geschwindigkeit.</h2>
            <p class="body-md text-muted">
              15 Jahre Softwareentwicklung in Konzernen. Data Engineering, ML, Fullstack. Jetzt als GmbH — mit dem Anspruch, KI-Automatisierung für deutsche Unternehmen zugänglich zu machen.
            </p>
          </div>
          <div class="md:col-span-6 md:col-start-7">
            <div class="grid grid-cols-2 gap-8">
              <div v-for="signal in trustSignals" :key="signal.label">
                <div class="text-2xl sm:text-3xl font-bold text-ink">{{ signal.value }}</div>
                <div class="mt-1 body-md text-muted">{{ signal.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Entry Points -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray border-t border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Einstiegspunkte">
          Starten Sie dort, wo es am meisten bringt.
          <template #description>Jedes Projekt beginnt mit einem konkreten Problem. Diese drei Themen bringen die schnellsten Ergebnisse.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <router-link v-for="entry in entryPoints" :key="entry.to" :to="entry.to" class="bg-surface p-8 md:p-10 group hover:bg-warm-gray transition-colors">
            <p class="label text-accent mb-4">{{ entry.badge }}</p>
            <h3 class="heading-md text-ink group-hover:text-accent transition-colors">{{ entry.title }}</h3>
            <p class="mt-2 body-md text-muted">{{ entry.description }}</p>
            <p class="mt-4 label text-accent">Mehr erfahren &rarr;</p>
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-dark py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="heading-lg mb-8">Welche Prozesse kosten Sie am meisten Zeit?</h2>
        <p class="body-lg text-muted mb-12">
          In einem kostenlosen Erstgespräch identifizieren wir Ihre drei größten Automatisierungspotenziale — und rechnen den ROI durch.
        </p>
        <router-link to="/kontakt"
          class="cta-button bg-accent text-white px-10 py-5 text-lg rounded-md hover:bg-accent-hover">
          Erstgespräch vereinbaren
        </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import SectionHeading from '../components/SectionHeading.vue'
import FeatureCard from '../components/FeatureCard.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { useHead } from '../composables/useHead.js'

useScrollAnimation()
useHead({
  title: 'Solytics GmbH — KI-Automatisierung für Unternehmen',
  description: 'Solytics baut autonome KI-Agenten für Konzerne und Mittelstand. Prozessautomatisierung, Systemintegration und Entscheidungsunterstützung aus Deutschland.',
})

import { onMounted } from 'vue'
onMounted(() => {
  const ld = document.createElement('script')
  ld.type = 'application/ld+json'
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'LocalBusiness'],
    name: 'Solytics GmbH',
    description: 'KI-Automatisierung für Unternehmen. Autonome KI-Agenten für Prozessautomatisierung, Systemintegration und Entscheidungsunterstützung.',
    url: 'https://solytics.de',
    telephone: '+49-6188-9149994',
    email: 'jens.laufer@solytics.de',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hauptstr. 24',
      addressLocality: 'Karlstein am Main',
      postalCode: '63791',
      addressCountry: 'DE',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 50.0387, longitude: 9.0347 },
    foundingDate: '2022',
    priceRange: '€€€',
    areaServed: { '@type': 'Country', name: 'Germany' },
    knowsAbout: ['KI-Automatisierung', 'KI-Agenten', 'Prozessautomatisierung', 'Enterprise AI', 'E-Rechnung', 'XRechnung'],
    makesOffer: [
      { '@type': 'Offer', name: 'Erstgespräch', price: '0', priceCurrency: 'EUR', description: 'Kostenlose Analyse Ihrer Automatisierungspotenziale' },
      { '@type': 'Offer', name: 'KI-Potenzialanalyse', price: '5000', priceCurrency: 'EUR', description: 'Systematische Identifikation und Priorisierung von Automatisierungspotenzialen' },
      { '@type': 'Offer', name: 'KI-Agent Implementierung', priceCurrency: 'EUR', description: 'Entwicklung und Deployment autonomer KI-Agenten für Ihre Prozesse' },
    ],
  })
  document.head.appendChild(ld)
})

const enterpriseItems = [
  'Prozessautomatisierung in regulierten Umgebungen',
  'Integration in SAP, Salesforce, Legacy-Systeme',
  'Datenschutz-konformes Deployment (on-premise möglich)',
  'Multi-Team-Rollout mit Change Management',
]

const mittelstandItems = [
  'Schneller ROI: erste Automatisierung in 2 Wochen',
  'E-Rechnung, Buchhaltung, Reporting als Einstieg',
  'Keine eigene IT-Abteilung nötig',
  'Digitalbonus Bayern: bis zu 50% Förderung',
]

const useCases = [
  {
    title: 'Rechnungseingang',
    description: 'KI-Agent empfängt, klassifiziert und kontiert eingehende Rechnungen automatisch — XRechnung, ZUGFeRD und PDF.',
    metric: '90% weniger manuelle Bearbeitung',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>',
  },
  {
    title: 'Datenintegration',
    description: 'Systeme synchronisieren sich selbstständig. Kein manueller Datenabgleich, keine CSV-Exporte, keine Fehler.',
    metric: 'Echtzeit-Synchronisation',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"/></svg>',
  },
  {
    title: 'Reporting',
    description: 'KI-Agent erstellt Berichte, erkennt Anomalien und liefert Handlungsempfehlungen — täglich, ohne Aufwand.',
    metric: 'Tägliche Reports statt Monatsberichte',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>',
  },
  {
    title: 'Vertriebsautomatisierung',
    description: 'Leads qualifizieren, Follow-ups personalisieren, CRM-Daten pflegen — der Agent arbeitet rund um die Uhr.',
    metric: '3x mehr qualifizierte Leads',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>',
  },
  {
    title: 'Compliance-Monitoring',
    description: 'Automatische Prüfung regulatorischer Anforderungen. Änderungen werden erkannt, bevor Fristen ablaufen.',
    metric: 'Null verpasste Deadlines',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>',
  },
  {
    title: 'Dokumentenverarbeitung',
    description: 'Verträge, Bestellungen, Lieferscheine — automatisch erfasst, extrahiert und ins System überführt.',
    metric: 'Sekundenbruchteile statt Stunden',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>',
  },
]

const entryPoints = [
  { badge: 'Häufigster Einstieg', title: 'E-Rechnung & Compliance', description: 'XRechnung-Pflicht ab 2025. Wir automatisieren Ihren Rechnungsprozess end-to-end — und machen den Rest Ihrer Buchhaltung gleich mit.', to: '/e-rechnung' },
  { badge: 'KI-Agenten', title: 'Prozessautomatisierung', description: 'Identifizieren Sie die Prozesse mit dem höchsten Automatisierungspotenzial. Wir bauen den ersten KI-Agenten in 2 Wochen.', to: '/ki-automatisierung' },
  { badge: 'Schnellster Start', title: 'Website-Modernisierung', description: 'Professionelles Redesign in 48h zeigt, was KI-gestützte Automatisierung kann — sichtbar, sofort, überzeugend.', to: '/website-redesign' },
]

const trustSignals = [
  { value: '15+', label: 'Jahre Enterprise-Erfahrung' },
  { value: 'GmbH', label: 'Deutsche Kapitalgesellschaft' },
  { value: 'Bayern', label: 'Standort Deutschland' },
  { value: '100%', label: 'KI-Automatisierung' },
]
</script>
