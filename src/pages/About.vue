<template>
  <MainLayout>
    <!-- Hero -->
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <p class="label text-muted mb-4">Über Solytics</p>
          <h1 class="heading-xl text-ink mb-8">Enterprise-Erfahrung. Startup-Geschwindigkeit.</h1>
          <p class="body-lg text-muted max-w-prose">
            Solytics baut autonome KI-Systeme für deutsche Unternehmen. Gegründet von Jens Laufer — mit 15 Jahren Erfahrung in Enterprise-Softwareentwicklung, Data Engineering und Machine Learning.
          </p>
        </div>
      </div>
    </section>

    <!-- Founder -->
    <section class="py-16 md:py-24 px-6 md:px-10 bg-warm-gray border-t border-border">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="md:grid md:grid-cols-12 md:gap-16">
          <div class="md:col-span-5 mb-10 md:mb-0">
            <p class="label text-accent mb-4">Gründer & Geschäftsführer</p>
            <h2 class="heading-lg text-ink mb-4">Jens Laufer</h2>
            <p class="body-md text-muted mb-6">
              Diplomingenieur für Informatik mit Schwerpunkt auf verteilte Systeme und maschinelles Lernen. Über 15 Jahre in Konzernen — SAP-nahe Systemlandschaften, Data Pipelines, ML-Modelle in Produktion.
            </p>
            <p class="body-md text-muted mb-6">
              Heute baut Jens mit Solytics KI-Agenten, die repetitive Arbeit in Unternehmen übernehmen. Von E-Rechnung-Compliance bis zur vollständigen Prozessautomatisierung.
            </p>
            <div class="flex gap-4">
              <a href="https://www.linkedin.com/in/jenslaufer" target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                LinkedIn
              </a>
              <a href="https://github.com/jenslaufer" target="_blank" rel="noopener"
                class="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-hover transition-colors">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </div>
          </div>

          <div class="md:col-span-6 md:col-start-7">
            <h3 class="heading-md text-ink mb-6">Expertise</h3>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <p class="label text-muted mb-2">Programmiersprachen</p>
                <p class="body-md text-ink">Python, JavaScript/TypeScript, R, Java, SQL</p>
              </div>
              <div>
                <p class="label text-muted mb-2">KI & ML</p>
                <p class="body-md text-ink">LLMs, RAG, Agent-Systeme, scikit-learn, PyTorch</p>
              </div>
              <div>
                <p class="label text-muted mb-2">Data Engineering</p>
                <p class="body-md text-ink">ETL/ELT, Data Pipelines, Polars, Spark, dbt</p>
              </div>
              <div>
                <p class="label text-muted mb-2">Fullstack</p>
                <p class="body-md text-ink">Vue 3, FastAPI, Docker, PostgreSQL, SQLite</p>
              </div>
              <div>
                <p class="label text-muted mb-2">Enterprise</p>
                <p class="body-md text-ink">SAP-Integration, Compliance, DSGVO, GoBD</p>
              </div>
              <div>
                <p class="label text-muted mb-2">E-Rechnung</p>
                <p class="body-md text-ink">XRechnung, ZUGFeRD, EN 16931, Peppol</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Company -->
    <section class="py-16 md:py-24 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="mb-16 max-w-2xl">
          <p class="label text-muted mb-4">Unternehmen</p>
          <h2 class="heading-lg text-ink">Solytics GmbH</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8">
            <p class="label text-muted mb-2">Rechtsform</p>
            <p class="body-md text-ink font-semibold">GmbH</p>
            <p class="body-md text-muted mt-1">HRB 16879, AG Aschaffenburg</p>
          </div>
          <div class="bg-surface p-8">
            <p class="label text-muted mb-2">Standort</p>
            <p class="body-md text-ink font-semibold">Karlstein a. Main, Bayern</p>
            <p class="body-md text-muted mt-1">Deutschland</p>
          </div>
          <div class="bg-surface p-8">
            <p class="label text-muted mb-2">Schwerpunkt</p>
            <p class="body-md text-ink font-semibold">KI-Automatisierung</p>
            <p class="body-md text-muted mt-1">E-Rechnung & Prozessautomatisierung</p>
          </div>
          <div class="bg-surface p-8">
            <p class="label text-muted mb-2">Zielmarkt</p>
            <p class="body-md text-ink font-semibold">Konzerne & Mittelstand</p>
            <p class="body-md text-muted mt-1">B2B, DACH-Region</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-24 md:py-40 px-6 md:px-10 bg-warm-gray border-t border-border">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="heading-lg text-ink mb-8">Lassen Sie uns sprechen.</h2>
        <p class="body-lg text-muted mb-12">In einem kostenlosen Erstgespräch klären wir, ob und wie KI-Automatisierung in Ihrem Unternehmen Wert schaffen kann.</p>
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
import { useHead } from '../composables/useHead.js'
import { useHead as _useHead } from '@unhead/vue'

useHead({
  title: 'Über Solytics — Jens Laufer, KI-Automatisierung aus Deutschland',
  description: 'Solytics GmbH: Gegründet von Jens Laufer. 15 Jahre Enterprise-Erfahrung in Data Engineering, ML und Softwareentwicklung. KI-Agenten für deutsche Unternehmen.',
})

// Person schema for E-E-A-T (SSR-compatible via useHead)
_useHead({
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jens Laufer',
      jobTitle: 'Geschäftsführer',
      worksFor: { '@type': 'Organization', name: 'Solytics GmbH', url: 'https://solytics.de' },
      url: 'https://solytics.de/ueber-uns',
      sameAs: [
        'https://www.linkedin.com/in/jenslaufer',
        'https://github.com/jenslaufer',
      ],
      knowsAbout: [
        'Künstliche Intelligenz', 'Machine Learning', 'Data Engineering',
        'E-Rechnung', 'XRechnung', 'ZUGFeRD', 'Prozessautomatisierung',
      ],
    }),
  }],
})
</script>
