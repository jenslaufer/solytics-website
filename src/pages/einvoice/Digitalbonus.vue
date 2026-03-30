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
            E-Rechnung.<br>
            <span class="text-green-300">Halb so teuer mit Digitalbonus.</span>
          </h1>
          <p class="mt-6 text-lg text-primary-200 max-w-2xl leading-relaxed">
            Ab 2027 wird die E-Rechnung im B2B-Bereich Pflicht. Der Digitalbonus Bayern übernimmt bis zu 50 % der Kosten — maximal 7.500 €. Nutzen Sie die Förderung, bevor sie ausläuft.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
              Kostenloses Erstgespräch
            </router-link>
            <a href="#rechner" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-button)] transition-colors">
              Förderung berechnen
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
          <template #description>Der Freistaat Bayern fördert die Digitalisierung kleiner und mittlerer Unternehmen — einschließlich der E-Rechnung.</template>
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

    <!-- Price comparison -->
    <section id="rechner" class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Ihr Vorteil">
          Was Sie tatsächlich zahlen.
          <template #description>Mit Digitalbonus halbieren sich Ihre Kosten. Hier sehen Sie den Unterschied.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-8 fade-up">
          <div class="bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]">
            <h3 class="text-xl font-bold text-surface-900 dark:text-surface-950">Compliance-Check</h3>
            <p class="mt-2 text-sm text-surface-500">Analyse + Handlungsplan</p>
            <div class="mt-6">
              <span class="text-sm text-surface-400 line-through">1.500 €</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="text-4xl font-bold text-green-600">750 €</span>
                <span class="text-sm text-green-600 font-semibold">mit Digitalbonus</span>
              </div>
            </div>
            <ul class="mt-6 space-y-3">
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Ist-Analyse Rechnungsprozesse
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Gap-Analyse zur E-Rechnungspflicht
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Konkreter Maßnahmenplan
              </li>
            </ul>
            <router-link to="/kontakt" class="block text-center mt-8 px-6 py-3 font-semibold rounded-[var(--radius-button)] bg-surface-100 dark:bg-surface-300 text-surface-900 dark:text-surface-950 hover:bg-surface-200 dark:hover:bg-surface-400 transition-colors">
              Anfragen
            </router-link>
          </div>

          <div class="bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] ring-2 ring-primary-500">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-white bg-primary-500 rounded-full">
              Beliebt
            </div>
            <h3 class="text-xl font-bold text-surface-900 dark:text-surface-950">Implementierung</h3>
            <p class="mt-2 text-sm text-surface-500">Technische Umsetzung</p>
            <div class="mt-6">
              <span class="text-sm text-surface-400 line-through">5.000 €</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="text-4xl font-bold text-green-600">2.500 €</span>
                <span class="text-sm text-green-600 font-semibold">mit Digitalbonus</span>
              </div>
            </div>
            <ul class="mt-6 space-y-3">
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Alles aus Compliance-Check
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                XRechnung / ZUGFeRD Setup
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                API-Integration & Testing
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Go-Live Begleitung
              </li>
            </ul>
            <router-link to="/kontakt" class="block text-center mt-8 px-6 py-3 font-semibold rounded-[var(--radius-button)] bg-primary-500 text-white hover:bg-primary-600 transition-colors">
              Anfragen
            </router-link>
          </div>

          <div class="bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)]">
            <h3 class="text-xl font-bold text-surface-900 dark:text-surface-950">Komplettmigration</h3>
            <p class="mt-2 text-sm text-surface-500">Alle Prozesse umgestellt</p>
            <div class="mt-6">
              <span class="text-sm text-surface-400">Ab 10.000 €</span>
              <div class="flex items-baseline gap-2 mt-1">
                <span class="text-4xl font-bold text-green-600">ab 5.000 €</span>
                <span class="text-sm text-green-600 font-semibold">mit Digitalbonus</span>
              </div>
            </div>
            <ul class="mt-6 space-y-3">
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Alles aus Implementierung
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Komplette Prozessmigration
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Mitarbeiterschulung
              </li>
              <li class="flex items-start gap-3 text-sm text-surface-600">
                <svg class="w-5 h-5 text-green-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M5 13l4 4L19 7"/></svg>
                Laufender Support
              </li>
            </ul>
            <router-link to="/kontakt" class="block text-center mt-8 px-6 py-3 font-semibold rounded-[var(--radius-button)] bg-surface-100 dark:bg-surface-300 text-surface-900 dark:text-surface-950 hover:bg-surface-200 dark:hover:bg-surface-400 transition-colors">
              Anfragen
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
            <p class="mt-2 text-sm text-surface-500">Wir analysieren Ihren Status quo und erstellen ein Angebot, das zum Digitalbonus passt.</p>
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
    <section class="py-(--spacing-section) bg-white dark:bg-surface-200">
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
          Die E-Rechnungspflicht kommt 2027. Der Digitalbonus endet 2027. Wer jetzt startet, spart die Hälfte und ist rechtzeitig compliant.
        </p>
        <router-link to="/kontakt" class="inline-flex items-center justify-center mt-10 px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
          Kostenloses Erstgespräch vereinbaren
        </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../../layouts/MainLayout.vue'
import SectionHeading from '../../components/SectionHeading.vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation.js'
import { useHead } from '../../composables/useHead.js'

useScrollAnimation()
useHead({
  title: 'E-Rechnung mit Digitalbonus — 50 % Förderung | Solytics',
  description: 'E-Rechnungspflicht ab 2027: Mit dem Digitalbonus Bayern sparen Sie bis zu 50 % der Kosten. Compliance-Check ab 750 €, Implementierung ab 2.500 €.',
})

const faqs = [
  {
    q: 'Wer kann den Digitalbonus beantragen?',
    a: 'Kleine und mittlere Unternehmen (KMU) mit Sitz in Bayern. Maximal 250 Mitarbeiter und höchstens 50 Mio. € Jahresumsatz.',
  },
  {
    q: 'Wie hoch ist die Förderung?',
    a: 'Bis zu 50 % der förderfähigen Kosten, maximal 7.500 € beim Digitalbonus Standard. Die E-Rechnung-Implementierung fällt unter "Digitalisierung von Geschäftsprozessen".',
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
    a: 'Ab 01.01.2027 müssen alle B2B-Rechnungen als E-Rechnung versendet werden. Wer nicht compliant ist, riskiert Vorsteuerabzug und Geschäftsbeziehungen.',
  },
]
</script>
