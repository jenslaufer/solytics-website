<template>
  <MainLayout>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.08),transparent_60%)]"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(30,64,175,0.15),transparent_60%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 lg:py-44">
        <div class="max-w-4xl">
          <p class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-accent-300 bg-accent-400/10 border border-accent-400/20 rounded-full">
            KI-Agenten für Ihr Unternehmen
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            KI-Automatisierung
            <span class="block mt-2 bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">für Ihr Unternehmen.</span>
          </h1>
          <p class="mt-6 text-lg sm:text-xl text-primary-200 max-w-2xl leading-relaxed">
            Solytics entwickelt KI-Agenten, die Ihre Geschäftsprozesse verstehen und autonom ausführen. Von der Analyse über den Workshop bis zum produktiven Einsatz.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
              Termin vereinbaren
              <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
            <router-link to="/ki-automatisierung" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-button)] transition-colors">
              Leistungen entdecken
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- What KI-Agenten do -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="KI-Agenten">
          Intelligente Automatisierung.
          <template #description>KI-Agenten sind autonome Software-Systeme, die Aufgaben selbstständig planen, ausführen und aus Ergebnissen lernen.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
          <FeatureCard title="Autonome Ausführung" description="Agenten arbeiten selbstständig an Aufgaben — ohne ständige menschliche Eingriffe.">
            <template #icon>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard title="Tool-Nutzung" description="Agenten nutzen APIs, Datenbanken und Software-Tools genau wie ein erfahrener Mitarbeiter.">
            <template #icon>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11.42 15.17l-5.65-5.65a8 8 0 1111.3 0l-5.65 5.65z"/><path d="M12 9v.01"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard title="Prozessautomatisierung" description="Wiederkehrende Geschäftsprozesse werden vollständig automatisiert.">
            <template #icon>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg>
            </template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Trust Signals -->
    <section class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 fade-up">
          <div v-for="signal in trustSignals" :key="signal.label" class="text-center">
            <div class="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400">{{ signal.value }}</div>
            <div class="mt-2 text-sm text-surface-500">{{ signal.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Solytics -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Warum Solytics">
          Technologie trifft Beratung.
          <template #description>Wir verbinden tiefes technisches Know-how mit pragmatischer Umsetzung.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
          <FeatureCard
            title="Made in Germany"
            description="Deutsche GmbH mit Sitz in Bayern. Ihre Daten bleiben in Deutschland."
          >
            <template #icon>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard
            title="End-to-End Lösung"
            description="Von der Beratung über die Implementierung bis zum laufenden Betrieb."
          >
            <template #icon>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"/></svg>
            </template>
          </FeatureCard>
          <FeatureCard
            title="API-First"
            description="Moderne Schnittstellen für nahtlose Integration in Ihre bestehende IT-Landschaft."
          >
            <template #icon>
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg>
            </template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-(--spacing-section) bg-gradient-to-br from-primary-900 to-primary-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
          KI wartet nicht. Ihr Wettbewerb auch nicht.
        </h2>
        <p class="mt-4 text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed">
          Starten Sie mit einem Workshop und entdecken Sie, welche Prozesse in Ihrem Unternehmen sofort automatisiert werden können.
        </p>
        <router-link to="/kontakt" class="inline-flex items-center justify-center mt-10 px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
          Workshop anfragen
          <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
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
  title: 'Solytics GmbH — KI-Automatisierung für Ihr Unternehmen',
  description: 'Solytics entwickelt KI-Agenten, die Ihre Geschäftsprozesse verstehen und autonom ausführen. Von der Analyse über den Workshop bis zum produktiven Einsatz.',
})

const trustSignals = [
  { value: 'GmbH', label: 'Deutsche Kapitalgesellschaft' },
  { value: '100%', label: 'Made in Germany' },
  { value: '2022', label: 'Gegründet' },
  { value: '∞', label: 'Automatisierungspotenzial' },
]
</script>
