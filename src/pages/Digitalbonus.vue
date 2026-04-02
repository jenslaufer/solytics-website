<template>
  <MainLayout>
    <!-- Hero -->
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <p class="label text-success mb-6">Bis zu 50 % Förderung durch den Freistaat Bayern</p>
          <h1 class="heading-xl text-ink mb-8">
            Digitalisierung. Halb so teuer mit Digitalbonus.
          </h1>
          <p class="body-lg text-muted max-w-prose mb-10">
            Der Digitalbonus Bayern übernimmt bis zu 50 % Ihrer Digitalisierungskosten — maximal 7.500 €. Ob E-Rechnung oder KI-Automatisierung: Nutzen Sie die Förderung, bevor sie ausläuft.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt"
              class="cta-button bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover text-center">
              Kostenloses Erstgespräch
            </router-link>
            <a href="#pakete"
              class="inline-block px-8 py-4 text-base font-semibold text-ink border border-border hover:bg-warm-gray rounded-md transition-colors text-center">
              Förderfähige Pakete
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Numbers -->
    <section class="py-16 md:py-24 px-6 md:px-10 bg-warm-gray border-t border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Digitalbonus Bayern">
          So funktioniert die Förderung.
          <template #description>Der Freistaat Bayern fördert die Digitalisierung kleiner und mittlerer Unternehmen — E-Rechnung, KI-Automatisierung und mehr.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8 text-center">
            <div class="text-3xl font-bold text-success">50 %</div>
            <div class="mt-2 heading-md text-ink">Zuschuss</div>
            <p class="mt-2 body-md text-muted">Der Freistaat übernimmt die Hälfte Ihrer Digitalisierungskosten.</p>
          </div>
          <div class="bg-surface p-8 text-center">
            <div class="text-3xl font-bold text-success">7.500 €</div>
            <div class="mt-2 heading-md text-ink">Maximalförderung</div>
            <p class="mt-2 body-md text-muted">Bis zu 7.500 € Zuschuss für den Digitalbonus Standard.</p>
          </div>
          <div class="bg-surface p-8 text-center ring-2 ring-inset ring-urgency">
            <div class="text-3xl font-bold text-urgency">31.12.2027</div>
            <div class="mt-2 heading-md text-ink">Förderende</div>
            <p class="mt-2 body-md text-muted">Antragstellung nur noch bis Ende 2027 möglich.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Two areas -->
    <section class="py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Förderfähige Bereiche">
          Was der Digitalbonus abdeckt.
          <template #description>Beide Solytics-Leistungsbereiche fallen unter "Digitalisierung von Geschäftsprozessen".</template>
        </SectionHeading>

        <div class="grid md:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-urgency mb-3">Pflicht ab 2027</p>
            <h3 class="heading-md text-ink mb-3">E-Rechnung</h3>
            <p class="body-md text-muted mb-4">XRechnung, ZUGFeRD, API-Integration — wir machen Sie compliant.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center gap-3 body-md text-muted">
                <span class="block w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>
                Compliance-Check ab <span class="font-semibold text-success">750 €</span>
              </li>
              <li class="flex items-center gap-3 body-md text-muted">
                <span class="block w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>
                Implementierung ab <span class="font-semibold text-success">2.500 €</span>
              </li>
              <li class="flex items-center gap-3 body-md text-muted">
                <span class="block w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>
                Komplettmigration ab <span class="font-semibold text-success">5.000 €</span>
              </li>
            </ul>
            <router-link to="/e-rechnung" class="label text-accent hover:text-accent-hover transition-colors">
              Mehr zu E-Rechnung &rarr;
            </router-link>
          </div>
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-3">Autonome Prozesse</p>
            <h3 class="heading-md text-ink mb-3">KI-Automatisierung</h3>
            <p class="body-md text-muted mb-4">KI-Agenten für Ihre Geschäftsprozesse. Autonom, lernfähig, integriert in Ihre Systeme.</p>
            <ul class="space-y-2 mb-6">
              <li class="flex items-center gap-3 body-md text-muted">
                <span class="block w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>
                Discovery Workshop ab <span class="font-semibold text-success">1.250 €</span>
              </li>
              <li class="flex items-center gap-3 body-md text-muted">
                <span class="block w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>
                Agent Setup ab <span class="font-semibold text-success">2.500 €</span>
              </li>
              <li class="flex items-center gap-3 body-md text-muted">
                <span class="block w-1.5 h-1.5 rounded-full bg-success shrink-0"></span>
                Retainer ab <span class="font-semibold text-success">1.000 €/Monat</span>
              </li>
            </ul>
            <router-link to="/ki-automatisierung" class="label text-accent hover:text-accent-hover transition-colors">
              Mehr zu KI-Automatisierung &rarr;
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- How it works -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray border-t border-b border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="In 3 Schritten">
          So nutzen Sie den Digitalbonus.
        </SectionHeading>

        <div class="grid sm:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8">
            <p class="label text-accent mb-4">Schritt 1</p>
            <h3 class="heading-md text-ink mb-2">Erstgespräch</h3>
            <p class="body-md text-muted">Wir analysieren Ihren Bedarf — ob E-Rechnung, KI oder beides — und erstellen ein förderfähiges Angebot.</p>
          </div>
          <div class="bg-surface p-8">
            <p class="label text-accent mb-4">Schritt 2</p>
            <h3 class="heading-md text-ink mb-2">Antrag stellen</h3>
            <p class="body-md text-muted">Sie stellen den Digitalbonus-Antrag bei der IHK. Wir helfen Ihnen bei der Dokumentation.</p>
          </div>
          <div class="bg-surface p-8">
            <p class="label text-accent mb-4">Schritt 3</p>
            <h3 class="heading-md text-ink mb-2">Umsetzung</h3>
            <p class="body-md text-muted">Nach Bewilligung starten wir die Implementierung. Sie zahlen nur Ihren Eigenanteil.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section id="pakete" class="py-16 md:py-24 px-6 md:px-10 fade-up">
      <div class="max-w-3xl mx-auto">
        <SectionHeading badge="FAQ">
          Häufige Fragen zum Digitalbonus.
        </SectionHeading>

        <div class="space-y-px">
          <div v-for="faq in faqs" :key="faq.q" class="bg-warm-gray p-6">
            <h3 class="font-bold text-ink">{{ faq.q }}</h3>
            <p class="mt-2 body-md text-muted">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-dark py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="heading-lg mb-8">50 % sparen. Jetzt handeln.</h2>
        <p class="body-lg text-muted mb-12">
          Der Digitalbonus endet 2027. Wer jetzt startet, spart die Hälfte — ob bei E-Rechnung, KI-Automatisierung oder beidem.
        </p>
        <router-link to="/kontakt"
          class="cta-button bg-accent text-white px-10 py-5 text-lg rounded-md hover:bg-accent-hover">
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
