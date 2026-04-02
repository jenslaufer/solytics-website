<template>
  <MainLayout>
    <!-- Hero -->
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <h1 class="heading-xl text-ink mb-8">
            E-Rechnung &amp; KI-Automatisierung. Aus einer Hand.
          </h1>
          <p class="body-lg text-muted max-w-prose mb-10">
            Solytics macht Ihr Unternehmen compliant und effizient. E-Rechnungspflicht ab 2027 — wir setzen um. Routineprozesse, die niemand machen will — KI-Agenten übernehmen.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt"
              class="cta-button bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover text-center">
              Kostenloses Erstgespräch
            </router-link>
            <router-link to="/ki-automatisierung"
              class="inline-block px-8 py-4 text-base font-semibold text-ink border border-border hover:bg-warm-gray rounded-md transition-colors text-center">
              Leistungen entdecken
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Two Pillars -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Leistungen">
          Zwei Bereiche. Ein Partner.
        </SectionHeading>

        <div class="grid md:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-urgency mb-4">Pflicht ab 2027</p>
            <h3 class="heading-md text-ink mb-4">E-Rechnung</h3>
            <p class="body-md text-muted mb-6">
              XRechnung, ZUGFeRD, API-Integration. Wir machen Ihr Unternehmen compliant — vom Compliance-Check bis zur Komplettmigration.
            </p>
            <router-link to="/e-rechnung" class="label text-accent hover:text-accent-hover transition-colors">
              Mehr erfahren &rarr;
            </router-link>
          </div>
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-4">Autonome Prozesse</p>
            <h3 class="heading-md text-ink mb-4">KI-Automatisierung</h3>
            <p class="body-md text-muted mb-6">
              KI-Agenten, die Routineprozesse autonom ausführen — Berichte, Freigaben, Datenabgleich. Ihre Mitarbeiter machen die Arbeit, für die Sie sie eingestellt haben.
            </p>
            <router-link to="/ki-automatisierung" class="label text-accent hover:text-accent-hover transition-colors">
              Mehr erfahren &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 3-Step Process -->
    <section class="py-20 md:py-32 px-6 md:px-10 fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="So funktioniert's">
          In drei Schritten zur Lösung.
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <div v-for="(step, i) in processSteps" :key="step.title" class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-6">Schritt {{ i + 1 }}</p>
            <h3 class="heading-md text-ink mb-4">{{ step.title }}</h3>
            <p class="body-md text-muted">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trust Signals -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Warum Solytics">
          Technologie trifft Beratung.
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <FeatureCard
            title="Made in Germany"
            description="Deutsche GmbH mit Sitz in Bayern. Ihre Daten bleiben in Deutschland."
          >
            <template #icon>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard
            title="End-to-End"
            description="Von der Beratung über die Implementierung bis zum laufenden Betrieb."
          >
            <template #icon>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard
            title="API-First"
            description="Moderne Schnittstellen für nahtlose Integration in Ihre bestehende IT-Landschaft."
          >
            <template #icon>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
            </template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Digitalbonus Teaser -->
    <section class="py-16 md:py-24 px-6 md:px-10 border-t border-b border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="md:grid md:grid-cols-12 md:gap-16">
          <div class="md:col-span-5 mb-6 md:mb-0">
            <p class="label text-success mb-4">Förderung</p>
            <h2 class="heading-lg text-ink">Digitalbonus Bayern: 50 % sparen.</h2>
          </div>
          <div class="md:col-span-6 md:col-start-7">
            <p class="body-lg text-muted mb-6">
              Der Freistaat übernimmt bis zu die Hälfte Ihrer Digitalisierungskosten — maximal 7.500 €. Gilt für E-Rechnung und KI-Automatisierung. Förderende: 31.12.2027.
            </p>
            <router-link to="/digitalbonus" class="label text-accent hover:text-accent-hover transition-colors">
              Mehr zur Förderung &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="heading-lg text-ink mb-8">Lassen Sie uns sprechen.</h2>
        <p class="body-lg text-muted mb-12">
          30 Minuten, keine Verpflichtung. Wir schauen gemeinsam, wo der größte Hebel liegt — ob E-Rechnung, KI-Automatisierung oder beides.
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
  title: 'Solytics GmbH — E-Rechnung & KI-Automatisierung',
  description: 'Solytics macht Ihr Unternehmen compliant und effizient. E-Rechnung ab 2027. KI-Agenten für autonome Prozesse. Beratung, Implementierung, Betrieb.',
})

const processSteps = [
  { title: 'Analyse', description: 'Wir identifizieren, wo der größte Hebel liegt — ob Compliance oder Automatisierung.' },
  { title: 'Umsetzung', description: 'Implementierung in Ihre bestehende Infrastruktur. Keine neue Plattform, die Ihre IT verwalten muss.' },
  { title: 'Betrieb', description: 'Alles läuft. Wir stehen für Fragen bereit, aber Sie sind nicht von uns abhängig.' },
]
</script>
