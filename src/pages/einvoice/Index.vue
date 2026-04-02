<template>
  <MainLayout>
    <!-- Hero -->
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <p class="label text-urgency mb-6">Pflicht ab 01.01.2027</p>
          <h1 class="heading-xl text-ink mb-8">
            E-Rechnung. Compliant. Automatisiert.
          </h1>
          <p class="body-lg text-muted max-w-prose mb-10">
            Ab 2027 wird die elektronische Rechnung im B2B-Bereich Pflicht. Wir machen Ihr Unternehmen fit — mit XRechnung, ZUGFeRD, API-Integration und persönlicher Beratung.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt"
              class="cta-button bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover text-center">
              Compliance-Check anfragen
            </router-link>
            <a href="#pakete"
              class="inline-block px-8 py-4 text-base font-semibold text-ink border border-border hover:bg-warm-gray rounded-md transition-colors text-center">
              Pakete ansehen
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Zeitplan">
          Die E-Rechnungspflicht kommt.
          <template #description>Der Gesetzgeber hat einen klaren Fahrplan. Wer jetzt handelt, vermeidet Stress und Risiken.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8 text-center">
            <div class="text-3xl font-bold text-accent">2025</div>
            <div class="mt-2 heading-md text-ink">Empfangspflicht</div>
            <p class="mt-2 body-md text-muted">Alle Unternehmen müssen E-Rechnungen empfangen können.</p>
          </div>
          <div class="bg-surface p-8 text-center ring-2 ring-inset ring-urgency">
            <div class="text-3xl font-bold text-urgency">2027</div>
            <div class="mt-2 heading-md text-ink">Versandpflicht</div>
            <p class="mt-2 body-md text-muted">B2B: Alle Rechnungen müssen als E-Rechnung versendet werden.</p>
          </div>
          <div class="bg-surface p-8 text-center">
            <div class="text-3xl font-bold text-accent">2028+</div>
            <div class="mt-2 heading-md text-ink">Meldesystem</div>
            <p class="mt-2 body-md text-muted">Elektronisches Meldesystem für Rechnungsdaten geplant.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-20 md:py-32 px-6 md:px-10 fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Leistungen">
          Alles für Ihre E-Rechnung.
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <FeatureCard title="XRechnung" description="Erstellung und Validierung konformer XRechnung-Dateien nach EN 16931.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="ZUGFeRD" description="Hybride Rechnungen mit eingebettetem XML — lesbar für Mensch und Maschine.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="API-Integration" description="REST-API für automatisierten Rechnungsversand und -empfang in Ihren Systemen.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Validierung" description="Automatische Prüfung aller Pflichtfelder, Schematron-Regeln und Leitweg-IDs.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Beratung" description="Persönliche Beratung zu Compliance-Anforderungen und optimaler Umsetzung.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Migration" description="Komplettmigration bestehender Rechnungsprozesse auf E-Rechnung.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg></template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pakete" class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Pakete">
          Transparent. Fair.
          <template #description>Wählen Sie das passende Paket für Ihre Anforderungen.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <PricingCard
            title="Compliance-Check"
            description="Analyse Ihrer aktuellen Rechnungsprozesse und konkreter Handlungsplan."
            price="1.500 €"
            :features="[
              'Ist-Analyse Rechnungsprozesse',
              'Gap-Analyse zur E-Rechnungspflicht',
              'Konkreter Maßnahmenplan',
              'Dokumentation & Handlungsempfehlung',
            ]"
          />
          <PricingCard
            title="Implementierung"
            description="Technische Umsetzung der E-Rechnung in Ihren bestehenden Systemen."
            price="5.000 €"
            :featured="true"
            :features="[
              'Alles aus Compliance-Check',
              'XRechnung / ZUGFeRD Setup',
              'API-Integration',
              'Validierung & Testing',
              'Go-Live Begleitung',
            ]"
          />
          <PricingCard
            title="Komplettmigration"
            description="Vollständige Migration aller Rechnungsprozesse inkl. laufender Betreuung."
            price="Auf Anfrage"
            :features="[
              'Alles aus Implementierung',
              'Komplette Prozessmigration',
              'Mitarbeiterschulung',
              'Laufender Support',
              'SLA-basierte Betreuung',
            ]"
          />
        </div>
      </div>
    </section>

    <!-- Pflicht-Check -->
    <section class="py-16 md:py-24 px-6 md:px-10 border-t border-b border-border fade-up">
      <div class="max-w-2xl mx-auto text-center">
        <p class="label text-muted mb-4">Kostenlos</p>
        <h2 class="heading-lg text-ink mb-4">Sind Sie bereit für die E-Rechnungspflicht?</h2>
        <p class="body-lg text-muted mb-8">Finden Sie in 4 Schritten heraus, ob und wann Ihr Unternehmen betroffen ist.</p>
        <router-link to="/e-rechnung/pflicht-check"
          class="cta-button bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover">
          Jetzt Check starten
        </router-link>
      </div>
    </section>

    <!-- Digitalbonus -->
    <section class="py-16 md:py-24 px-6 md:px-10 bg-success-light fade-up">
      <div class="max-w-2xl mx-auto text-center">
        <p class="label text-success mb-4">Förderung</p>
        <h2 class="heading-lg text-ink mb-4">Digitalbonus Bayern: 50 % sparen.</h2>
        <p class="body-lg text-muted mb-8">Der Freistaat übernimmt bis zu die Hälfte Ihrer Digitalisierungskosten — maximal 7.500 €. Gilt bis Ende 2027.</p>
        <router-link to="/digitalbonus" class="label text-accent hover:text-accent-hover transition-colors">
          Mehr zur Förderung &rarr;
        </router-link>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="heading-lg text-ink mb-8">Warten Sie nicht bis 2027.</h2>
        <p class="body-lg text-muted mb-12">
          Je früher Sie starten, desto reibungsloser die Umstellung. Wir helfen Ihnen, heute compliant zu werden.
        </p>
        <router-link to="/kontakt"
          class="cta-button bg-accent text-white px-10 py-5 text-lg rounded-md hover:bg-accent-hover">
          Jetzt Compliance-Check starten
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
  title: 'E-Rechnung — XRechnung & ZUGFeRD Compliance | Solytics',
  description: 'E-Rechnungspflicht ab 2027: XRechnung, ZUGFeRD, API-Integration, Beratung und Implementierung. Solytics macht Ihr Unternehmen compliant.',
})
</script>
