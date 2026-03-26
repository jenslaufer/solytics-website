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
              Kostenlosen Potenzial-Check buchen
              <svg class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </router-link>
            <router-link to="/ki-automatisierung" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-button)] transition-colors">
              Leistungen entdecken
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- 3-Step Process -->
    <section class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid sm:grid-cols-3 gap-8 lg:gap-12 fade-up">
          <div v-for="(step, i) in processSteps" :key="step.title" class="relative text-center">
            <div class="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-accent-400/10 text-accent-500 font-bold text-lg">{{ i + 1 }}</div>
            <h3 class="text-lg font-semibold text-surface-900 dark:text-white">{{ step.title }}</h3>
            <p class="mt-2 text-sm text-surface-500 leading-relaxed">{{ step.description }}</p>
            <div v-if="i < 2" class="hidden sm:block absolute top-6 -right-6 lg:-right-8 text-surface-300 dark:text-surface-500">
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </div>
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

    <!-- Use Cases -->
    <section class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Einsatzbereiche">
          KI-Automatisierung in der Praxis.
          <template #description>Konkrete Anwendungsfälle mit messbaren Ergebnissen.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
          <div v-for="useCase in useCases" :key="useCase.title" class="relative p-6 bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] border border-surface-200 dark:border-surface-300">
            <div class="inline-flex items-center justify-center w-10 h-10 mb-4 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400" v-html="useCase.icon"></div>
            <h3 class="text-lg font-semibold text-surface-900 dark:text-white">{{ useCase.title }}</h3>
            <p class="mt-2 text-sm text-surface-500 leading-relaxed">{{ useCase.description }}</p>
            <p class="mt-3 text-sm font-semibold text-accent-500">{{ useCase.metric }}</p>
          </div>
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
          Workshop anfragen — 2.500 €
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

const processSteps = [
  { title: 'Analyse', description: 'Wir identifizieren Ihre Automatisierungspotenziale.' },
  { title: 'Workshop', description: 'Gemeinsam definieren wir den optimalen KI-Einsatz.' },
  { title: 'Produktivbetrieb', description: 'Ihre KI-Agenten arbeiten autonom.' },
]

const useCases = [
  {
    title: 'Buchhaltung',
    description: 'KI-Agenten erfassen Belege, kontieren automatisch und bereiten den Monatsabschluss vor.',
    metric: '80% weniger manueller Aufwand',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>',
  },
  {
    title: 'Vertrieb',
    description: 'Leads werden automatisch qualifiziert, priorisiert und mit personalisierten Follow-ups versorgt.',
    metric: 'Automatische Lead-Qualifizierung',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg>',
  },
  {
    title: 'Reporting',
    description: 'Echtzeit-Dashboards ersetzen manuelle Excel-Reports. Daten fließen automatisch zusammen.',
    metric: 'Echtzeit-Dashboards statt Excel',
    icon: '<svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"/></svg>',
  },
]

const trustSignals = [
  { value: 'GmbH', label: 'Deutsche Kapitalgesellschaft' },
  { value: '100%', label: 'Made in Germany' },
  { value: '2022', label: 'Gegründet' },
  { value: '∞', label: 'Automatisierungspotenzial' },
]
</script>
