<template>
  <MainLayout>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(30,64,175,0.2),transparent_60%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div class="max-w-3xl">
          <p class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-red-300 bg-red-400/10 border border-red-400/20 rounded-full">
            Pflicht ab 01.01.2027
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            E-Rechnung.<br>
            <span class="text-primary-300">Compliant. Automatisiert.</span>
          </h1>
          <p class="mt-6 text-lg text-primary-200 max-w-2xl leading-relaxed">
            Ab 2027 wird die elektronische Rechnung im B2B-Bereich Pflicht. Wir machen Ihr Unternehmen fit — mit XRechnung, ZUGFeRD, API-Integration und persönlicher Beratung.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
              Compliance-Check anfragen
            </router-link>
            <a href="#pakete" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-button)] transition-colors">
              Pakete ansehen
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Urgency -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Zeitplan">
          Die E-Rechnungspflicht kommt.
          <template #description>Der Gesetzgeber hat einen klaren Fahrplan. Wer jetzt handelt, vermeidet Stress und Risiken.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-3 gap-6 fade-up">
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">2025</div>
            <div class="mt-2 text-sm font-semibold text-surface-900 dark:text-surface-950">Empfangspflicht</div>
            <p class="mt-2 text-sm text-surface-500">Alle Unternehmen müssen E-Rechnungen empfangen können.</p>
          </div>
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] text-center ring-2 ring-red-500">
            <div class="text-3xl font-bold text-red-500">2027</div>
            <div class="mt-2 text-sm font-semibold text-surface-900 dark:text-surface-950">Versandpflicht</div>
            <p class="mt-2 text-sm text-surface-500">B2B: Alle Rechnungen müssen als E-Rechnung versendet werden.</p>
          </div>
          <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] text-center">
            <div class="text-3xl font-bold text-primary-600 dark:text-primary-400">2028+</div>
            <div class="mt-2 text-sm font-semibold text-surface-900 dark:text-surface-950">Meldesystem</div>
            <p class="mt-2 text-sm text-surface-500">Elektronisches Meldesystem für Rechnungsdaten geplant.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Leistungen">
          Alles für Ihre E-Rechnung.
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
          <FeatureCard title="XRechnung" description="Erstellung und Validierung konformer XRechnung-Dateien nach EN 16931.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="ZUGFeRD" description="Hybride Rechnungen mit eingebettetem XML — lesbar für Mensch und Maschine.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="API-Integration" description="REST-API für automatisierten Rechnungsversand und -empfang in Ihren Systemen.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Validierung" description="Automatische Prüfung aller Pflichtfelder, Schematron-Regeln und Leitweg-IDs.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Beratung" description="Persönliche Beratung zu Compliance-Anforderungen und optimaler Umsetzung.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Migration" description="Komplettmigration bestehender Rechnungsprozesse auf E-Rechnung.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182"/></svg></template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="pakete" class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Pakete">
          Transparent. Fair.
          <template #description>Wählen Sie das passende Paket für Ihre Anforderungen.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-8 fade-up">
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

    <!-- Pflicht-Check Placeholder -->
    <section class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <SectionHeading badge="Self-Service">
          Sind Sie bereit für die E-Rechnungspflicht?
          <template #description>Unser interaktiver Pflicht-Check zeigt Ihnen in wenigen Minuten, wo Sie stehen.</template>
        </SectionHeading>
        <div class="bg-surface-50 dark:bg-surface-100 rounded-[var(--radius-card)] p-12 border-2 border-dashed border-surface-300 dark:border-surface-400">
          <svg class="w-16 h-16 mx-auto text-surface-300 dark:text-surface-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"/>
          </svg>
          <p class="text-surface-500 font-medium">Interaktiver Pflicht-Check — demnächst verfügbar</p>
          <router-link to="/kontakt" class="inline-flex items-center justify-center mt-6 px-6 py-3 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-[var(--radius-button)] transition-colors">
            Stattdessen persönlich beraten lassen
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-(--spacing-section) bg-gradient-to-br from-primary-900 to-primary-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Warten Sie nicht bis 2027.
        </h2>
        <p class="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
          Je früher Sie starten, desto reibungsloser die Umstellung. Wir helfen Ihnen, heute compliant zu werden.
        </p>
        <router-link to="/kontakt" class="inline-flex items-center justify-center mt-10 px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
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
