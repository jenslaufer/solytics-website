<template>
  <MainLayout>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,64,175,0.2),transparent_60%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div class="max-w-3xl">
          <p class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-green-300 bg-green-400/10 border border-green-400/20 rounded-full">
            Bis zu 50 % Förderung durch den Freistaat Bayern
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Digitalisierung.<br>
            <span class="text-green-300">Halb so teuer mit Digitalbonus.</span>
          </h1>
          <p class="mt-6 text-lg text-primary-200 max-w-2xl leading-relaxed">
            Der Digitalbonus Bayern übernimmt bis zu 50 % Ihrer Digitalisierungskosten — maximal 7.500 €. Ob E-Rechnung oder KI-Automatisierung: Nutzen Sie die Förderung, bevor sie ausläuft.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
              Kostenloses Erstgespräch
            </router-link>
            <a href="#pakete" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-button)] transition-colors">
              Förderfähige Pakete
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- What is Digitalbonus -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Digitalbonus Bayern">
          So funktioniert die Förderung.
          <template #description>Der Freistaat Bayern fördert die Digitalisierung kleiner und mittlerer Unternehmen — E-Rechnung, KI-Automatisierung und mehr.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-3 gap-6 fade-up">
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] text-center">
            <div class="text-3xl font-bold text-green-600">50 %</div>
            <div class="mt-2 text-sm font-semibold text-surface-900 dark:text-surface-950">Zuschuss</div>
            <p class="mt-2 text-sm text-surface-500">Der Freistaat übernimmt die Hälfte Ihrer Digitalisierungskosten.</p>
          </div>
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] text-center">
            <div class="text-3xl font-bold text-green-600">7.500 €</div>
            <div class="mt-2 text-sm font-semibold text-surface-900 dark:text-surface-950">Maximalförderung</div>
            <p class="mt-2 text-sm text-surface-500">Bis zu 7.500 € Zuschuss für den Digitalbonus Standard.</p>
          </div>
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] text-center ring-2 ring-red-500">
            <div class="text-3xl font-bold text-red-500">31.12.2027</div>
            <div class="mt-2 text-sm font-semibold text-surface-900 dark:text-surface-950">Förderende</div>
            <p class="mt-2 text-sm text-surface-500">Antragstellung nur noch bis Ende 2027 möglich.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Two areas -->
    <section class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Förderfähige Bereiche">
          Was der Digitalbonus abdeckt.
          <template #description>Beide Solytics-Leistungsbereiche fallen unter "Digitalisierung von Geschäftsprozessen".</template>
        </SectionHeading>

        <div class="grid md:grid-cols-2 gap-8 fade-up">
          <!-- E-Rechnung -->
          <div class="bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg>
              </div>
              <h3 class="text-xl font-bold text-surface-900 dark:text-surface-950">E-Rechnung</h3>
            </div>
            <p class="text-sm text-surface-500 mb-4">Pflicht ab 2027. XRechnung, ZUGFeRD, API-Integration — wir machen Sie compliant.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center gap-2 text-sm text-surface-600">
                <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Compliance-Check ab <span class="font-semibold text-green-600">750 €</span>
              </li>
              <li class="flex items-center gap-2 text-sm text-surface-600">
                <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Implementierung ab <span class="font-semibold text-green-600">2.500 €</span>
              </li>
              <li class="flex items-center gap-2 text-sm text-surface-600">
                <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Komplettmigration ab <span class="font-semibold text-green-600">5.000 €</span>
              </li>
            </ul>
            <router-link to="/e-rechnung" class="text-sm font-semibold text-primary-600 hover:text-primary-500 transition-colors">
              Mehr zu E-Rechnung &rarr;
            </router-link>
          </div>

          <!-- KI-Automatisierung -->
          <div class="bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center">
                <svg class="w-5 h-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"/></svg>
              </div>
              <h3 class="text-xl font-bold text-surface-900 dark:text-surface-950">KI-Automatisierung</h3>
            </div>
            <p class="text-sm text-surface-500 mb-4">KI-Agenten für Ihre Geschäftsprozesse. Autonom, lernfähig, integriert in Ihre Systeme.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center gap-2 text-sm text-surface-600">
                <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Discovery Workshop ab <span class="font-semibold text-green-600">1.250 €</span>
              </li>
              <li class="flex items-center gap-2 text-sm text-surface-600">
                <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Agent Setup ab <span class="font-semibold text-green-600">2.500 €</span>
              </li>
              <li class="flex items-center gap-2 text-sm text-surface-600">
                <svg class="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Retainer ab <span class="font-semibold text-green-600">1.000 €/Monat</span>
              </li>
            </ul>
            <router-link to="/ki-automatisierung" class="text-sm font-semibold text-primary-600 hover:text-primary-500 transition-colors">
              Mehr zu KI-Automatisierung &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="In 3 Schritten">
          So nutzen Sie den Digitalbonus.
        </SectionHeading>

        <div class="grid sm:grid-cols-3 gap-6 fade-up">
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]">
            <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg mb-4">1</div>
            <h3 class="text-lg font-bold text-surface-900 dark:text-surface-950">Erstgespräch</h3>
            <p class="mt-2 text-sm text-surface-500">Wir analysieren Ihren Bedarf — ob E-Rechnung, KI oder beides — und erstellen ein förderfähiges Angebot.</p>
          </div>
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]">
            <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg mb-4">2</div>
            <h3 class="text-lg font-bold text-surface-900 dark:text-surface-950">Antrag stellen</h3>
            <p class="mt-2 text-sm text-surface-500">Sie stellen den Digitalbonus-Antrag bei der IHK. Wir helfen Ihnen bei der Dokumentation.</p>
          </div>
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]">
            <div class="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg mb-4">3</div>
            <h3 class="text-lg font-bold text-surface-900 dark:text-surface-950">Umsetzung</h3>
            <p class="mt-2 text-sm text-surface-500">Nach Bewilligung starten wir die Implementierung. Sie zahlen nur Ihren Eigenanteil.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="pakete" class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="FAQ">
          Häufige Fragen zum Digitalbonus.
        </SectionHeading>

        <div class="space-y-6 fade-up">
          <div v-for="faq in faqs" :key="faq.q" class="bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] p-6">
            <h3 class="font-bold text-surface-900 dark:text-surface-950">{{ faq.q }}</h3>
            <p class="mt-2 text-sm text-surface-500 leading-relaxed">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-(--spacing-section) bg-gradient-to-br from-primary-900 to-primary-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          50 % sparen. Jetzt handeln.
        </h2>
        <p class="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
          Der Digitalbonus endet 2027. Wer jetzt startet, spart die Hälfte — ob bei E-Rechnung, KI-Automatisierung oder beidem.
        </p>
        <router-link to="/kontakt" class="inline-flex items-center justify-center mt-10 px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
          Kostenloses Erstgespräch vereinbaren
        </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { useHead } from '../composables/useHead.js'

useScrollAnimation()
useHead({
  title: 'Digitalbonus Bayern — 50 % Förderung für E-Rechnung & KI | Solytics',
  description: 'Digitalbonus Bayern: Bis zu 50 % Zuschuss für E-Rechnung und KI-Automatisierung. Compliance-Check ab 750 €, KI-Workshop ab 1.250 €. Solytics GmbH.',
})

const faqs = [
  {
    q: 'Wer kann den Digitalbonus beantragen?',
    a: 'Kleine und mittlere Unternehmen (KMU) mit Sitz in Bayern. Maximal 250 Mitarbeiter und höchstens 50 Mio. € Jahresumsatz.',
  },
  {
    q: 'Wie hoch ist die Förderung?',
    a: 'Bis zu 50 % der förderfähigen Kosten, maximal 7.500 € beim Digitalbonus Standard. Sowohl E-Rechnung als auch KI-Automatisierung fallen unter "Digitalisierung von Geschäftsprozessen".',
  },
  {
    q: 'Kann ich E-Rechnung und KI kombinieren?',
    a: 'Ja. Sie können ein kombiniertes Projekt beantragen. Beispiel: E-Rechnung-Implementierung (5.000 €) + KI-Workshop (2.500 €) = 7.500 € Projektkosten, davon 3.750 € gefördert.',
  },
  {
    q: 'Kann ich den Antrag vor Projektstart stellen?',
    a: 'Ja — der Antrag muss sogar vor Projektbeginn gestellt werden. Deshalb: Erstgespräch führen, Angebot einholen, dann Antrag stellen, dann umsetzen.',
  },
  {
    q: 'Wie lange dauert die Bewilligung?',
    a: 'In der Regel 4–8 Wochen. Planen Sie diesen Zeitraum ein, bevor Sie mit der Implementierung starten.',
  },
  {
    q: 'Was passiert, wenn ich nichts tue?',
    a: 'Ab 01.01.2027 wird die E-Rechnung im B2B-Bereich Pflicht. Gleichzeitig läuft der Digitalbonus Ende 2027 aus. Wer jetzt handelt, spart doppelt: Förderung mitnehmen und rechtzeitig compliant sein.',
  },
]
</script>
