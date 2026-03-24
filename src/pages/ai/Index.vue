<template>
  <MainLayout>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.1),transparent_60%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div class="max-w-3xl">
          <p class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-accent-300 bg-accent-400/10 border border-accent-400/20 rounded-full">
            KI-Agenten für Ihr Unternehmen
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            KI-Automatisierung.<br>
            <span class="text-accent-300">Intelligent. Autonom.</span>
          </h1>
          <p class="mt-6 text-lg text-primary-200 max-w-2xl leading-relaxed">
            Wir entwickeln KI-Agenten, die Ihre Geschäftsprozesse verstehen und autonom ausführen. Von der Datenverarbeitung über Kundenservice bis zur Entscheidungsvorbereitung.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
              Workshop buchen
            </router-link>
            <a href="#pakete" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-button)] transition-colors">
              Pakete ansehen
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- What are AI Agents -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="KI-Agenten">
          Was sind KI-Agenten?
          <template #description>KI-Agenten sind autonome Software-Systeme, die Aufgaben selbstständig planen, ausführen und aus Ergebnissen lernen.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
          <FeatureCard title="Autonome Ausführung" description="Agenten arbeiten selbstständig an Aufgaben — ohne ständige menschliche Eingriffe.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Tool-Nutzung" description="Agenten nutzen APIs, Datenbanken und Software-Tools genau wie ein erfahrener Mitarbeiter.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M11.42 15.17l-5.65-5.65a8 8 0 1111.3 0l-5.65 5.65z"/><path d="M12 9v.01"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Kontinuierliches Lernen" description="Durch Feedback und Ergebnisanalyse verbessern sich Agenten kontinuierlich.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Prozessautomatisierung" description="Wiederkehrende Geschäftsprozesse werden vollständig automatisiert.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Multi-Agent-Systeme" description="Mehrere spezialisierte Agenten arbeiten koordiniert an komplexen Aufgaben.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Sicherheit & Kontrolle" description="Volle Transparenz über Agentenaktionen mit konfigurierbaren Genehmigungsstufen.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg></template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pakete" class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Pakete">
          Ihr Weg zur KI-Automatisierung.
          <template #description>Strukturiert und begleitet — vom ersten Workshop bis zum produktiven Einsatz.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-8 fade-up">
          <PricingCard
            title="Discovery Workshop"
            description="Gemeinsame Analyse Ihrer Prozesse und Identifikation von Automatisierungspotenzial."
            price="2.500 €"
            :features="[
              'Ganztägiger Workshop (remote/vor Ort)',
              'Prozessanalyse & Mapping',
              'KI-Potenzialanalyse',
              'Priorisierte Roadmap',
              'ROI-Schätzung',
            ]"
          />
          <PricingCard
            title="Agent Setup"
            description="Entwicklung und Deployment Ihres ersten KI-Agenten für einen konkreten Prozess."
            price="5.000 €"
            :featured="true"
            :features="[
              'Alles aus Discovery Workshop',
              'Agenten-Entwicklung',
              'Integration in Ihre Systeme',
              'Testing & Qualitätssicherung',
              'Go-Live & Monitoring Setup',
              '30 Tage Support',
            ]"
          />
          <PricingCard
            title="Retainer"
            description="Kontinuierliche Betreuung, Optimierung und Ausbau Ihrer KI-Agenten."
            price="2.000 €"
            unit="/Monat"
            :features="[
              'Laufende Agenten-Optimierung',
              'Neue Agenten & Features',
              'Performance-Monitoring',
              'Priority Support',
              'Monatliches Review-Meeting',
            ]"
          />
        </div>
      </div>
    </section>

    <!-- Readiness Check -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <SectionHeading badge="Kostenlos">
          KI-Readiness-Check
          <template #description>Finden Sie in 2 Minuten heraus, wie bereit Ihr Unternehmen für KI-Automatisierung ist.</template>
        </SectionHeading>
        <router-link to="/ki-automatisierung/readiness-check"
          class="mt-8 inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
          Jetzt Check starten
        </router-link>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-(--spacing-section) bg-gradient-to-br from-primary-900 to-primary-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          KI wartet nicht. Ihr Wettbewerb auch nicht.
        </h2>
        <p class="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
          Starten Sie mit einem Workshop und entdecken Sie, welche Prozesse in Ihrem Unternehmen sofort automatisiert werden können.
        </p>
        <router-link to="/kontakt" class="inline-flex items-center justify-center mt-10 px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
          Workshop anfragen
        </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../layouts/MainLayout.vue'
import SectionHeading from '../../components/SectionHeading.vue'
import FeatureCard from '../../components/FeatureCard.vue'
import PricingCard from '../../components/PricingCard.vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation.js'
import { useHead } from '../../composables/useHead.js'

useScrollAnimation()
useHead({
  title: 'KI-Automatisierung — KI-Agenten für Ihr Unternehmen | Solytics',
  description: 'KI-Agenten für Geschäftsprozesse: Workshop, Setup und Retainer. Solytics entwickelt autonome KI-Systeme für Ihr Unternehmen.',
})
</script>
