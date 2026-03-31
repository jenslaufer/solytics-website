<template>
  <MainLayout>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.1),transparent_60%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div class="max-w-3xl">
          <p class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-accent-300 bg-accent-400/10 border border-accent-400/20 rounded-full">
            Website-Redesign
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Professionelles Website-Redesign.<br>
            <span class="text-accent-300">Modern. In 48 Stunden.</span>
          </h1>
          <p class="mt-6 text-lg text-primary-200 max-w-2xl leading-relaxed">
            Ihre Website ist Ihr digitales Schaufenster. Wir verwandeln veraltete Webseiten in moderne, schnelle und mobiloptimierte Auftritte — mit KI-Unterstützung und professionellem Design.
          </p>
          <div class="mt-10 flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
              Kostenlose Analyse
            </router-link>
            <a href="#ablauf" class="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 rounded-[var(--radius-button)] transition-colors">
              So funktioniert's
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Das Problem">
          Eine veraltete Website kostet Sie Kunden.
          <template #description>Studien zeigen: 75 % der Nutzer beurteilen die Glaubwürdigkeit eines Unternehmens anhand des Website-Designs.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 fade-up">
          <FeatureCard title="Veraltetes Design kostet Kunden" description="Besucher verlassen unprofessionelle Websites innerhalb von Sekunden. Jeder verlorene Besucher ist ein verlorener Auftrag.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"/><path d="M12 15.75h.007v.008H12v-.008z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Mobile Nutzer springen ab" description="Über 60 % Ihrer Besucher kommen vom Smartphone. Eine nicht-responsive Website verliert diese Nutzer sofort.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Konkurrenz sieht professioneller aus" description="Wenn Ihre Mitbewerber modern auftreten und Sie nicht, verlieren Sie den Vertrauensvorsprung — noch bevor das erste Gespräch stattfindet.">
            <template #icon><svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg></template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="ablauf" class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Ablauf">
          In 3 Schritten zur neuen Website.
          <template #description>Unser Prozess ist schlank und schnell — von der Analyse bis zum Launch in 48 Stunden.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-8 fade-up">
          <div class="relative p-8 rounded-[var(--radius-card)] bg-surface-50 dark:bg-surface-100 border border-surface-200 dark:border-surface-300">
            <div class="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-xl">1</div>
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-900">Analyse</h3>
            <p class="mt-2 text-surface-600 dark:text-surface-600">Wir prüfen Ihre aktuelle Website auf Design, Performance, Mobile-Tauglichkeit und SEO. Sie erhalten einen kostenlosen Analysebericht.</p>
          </div>
          <div class="relative p-8 rounded-[var(--radius-card)] bg-surface-50 dark:bg-surface-100 border border-surface-200 dark:border-surface-300">
            <div class="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-xl">2</div>
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-900">Redesign</h3>
            <p class="mt-2 text-surface-600 dark:text-surface-600">KI-gestützt erstellen wir ein modernes Design mit Tailwind CSS. Schnell, responsive und optimiert für Suchmaschinen.</p>
          </div>
          <div class="relative p-8 rounded-[var(--radius-card)] bg-surface-50 dark:bg-surface-100 border border-surface-200 dark:border-surface-300">
            <div class="flex items-center justify-center w-12 h-12 mb-6 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-xl">3</div>
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-900">Launch</h3>
            <p class="mt-2 text-surface-600 dark:text-surface-600">Innerhalb von 48 Stunden geht Ihre neue Website live. Inklusive Hosting-Setup auf Wunsch.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Before / After -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Vorher / Nachher">
          So sieht der Unterschied aus.
          <template #description>Beispiele für Website-Transformationen unserer Kunden.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          <div v-for="(example, i) in beforeAfterExamples" :key="i" class="rounded-[var(--radius-card)] overflow-hidden border border-surface-200 dark:border-surface-300 bg-white dark:bg-surface-200">
            <div class="grid grid-cols-2 gap-0">
              <!-- Before -->
              <div class="p-4 bg-surface-100 dark:bg-surface-300 border-r border-surface-200 dark:border-surface-300">
                <p class="text-xs font-semibold uppercase tracking-wide text-red-500 mb-2">Vorher</p>
                <div class="aspect-[4/3] rounded-lg bg-surface-200 dark:bg-surface-400 flex items-center justify-center">
                  <div class="text-center space-y-1">
                    <div class="w-16 h-2 bg-surface-300 dark:bg-surface-500 rounded mx-auto"></div>
                    <div class="w-12 h-2 bg-surface-300 dark:bg-surface-500 rounded mx-auto"></div>
                    <div class="w-20 h-8 bg-surface-300 dark:bg-surface-500 rounded mx-auto mt-2"></div>
                    <div class="w-14 h-2 bg-surface-300 dark:bg-surface-500 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
              <!-- After -->
              <div class="p-4">
                <p class="text-xs font-semibold uppercase tracking-wide text-green-500 mb-2">Nachher</p>
                <div class="aspect-[4/3] rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-800/10 flex items-center justify-center">
                  <div class="text-center space-y-1">
                    <div class="w-16 h-2 bg-primary-300 dark:bg-primary-700 rounded mx-auto"></div>
                    <div class="w-12 h-2 bg-primary-200 dark:bg-primary-800 rounded mx-auto"></div>
                    <div class="w-20 h-8 bg-primary-400 dark:bg-primary-600 rounded mx-auto mt-2"></div>
                    <div class="w-14 h-2 bg-primary-200 dark:bg-primary-800 rounded mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 border-t border-surface-200 dark:border-surface-300">
              <p class="text-sm font-medium text-surface-800 dark:text-surface-800">{{ example.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="preise" class="py-(--spacing-section) bg-white dark:bg-surface-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Preise">
          Transparente Preise. Keine versteckten Kosten.
          <template #description>Ein Paket. Alles drin. Fertig in 48 Stunden.</template>
        </SectionHeading>

        <div class="max-w-md mx-auto fade-up">
          <PricingCard
            title="Website-Redesign"
            description="Komplettes Redesign Ihrer bestehenden Website — modern, schnell und mobiloptimiert."
            price="499 €"
            :featured="true"
            :features="[
              'Komplettes Redesign Ihrer Website',
              'Mobile-optimiert (responsive)',
              'Moderne Tailwind CSS Technologie',
              'SEO-Grundoptimierung',
              '48 Stunden Lieferzeit',
              'Hosting-Setup optional',
            ]"
            :cta="{ label: 'Kostenlose Analyse anfordern', to: '/kontakt' }"
          />
        </div>

        <div class="mt-8 max-w-md mx-auto text-center fade-up">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800">
            <svg class="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span class="text-sm font-medium text-green-800 dark:text-green-300">Digitalbonus Bayern: Bis zu 50 % Förderung möglich</span>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="FAQ">
          Häufige Fragen.
        </SectionHeading>

        <div class="space-y-4 fade-up">
          <details v-for="(faq, i) in faqs" :key="i" class="group rounded-[var(--radius-card)] border border-surface-200 dark:border-surface-300 bg-white dark:bg-surface-200">
            <summary class="flex items-center justify-between px-6 py-4 cursor-pointer text-surface-900 dark:text-surface-900 font-medium select-none">
              {{ faq.q }}
              <svg class="w-5 h-5 text-surface-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M19.5 8.25l-7.5 7.5-7.5-7.5"/></svg>
            </summary>
            <div class="px-6 pb-4 text-surface-600 dark:text-surface-600">{{ faq.a }}</div>
          </details>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-(--spacing-section) bg-gradient-to-br from-primary-900 to-primary-950">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-up">
        <h2 class="text-3xl sm:text-4xl font-bold text-white tracking-tight">
          Lassen Sie uns Ihre Website analysieren.
        </h2>
        <p class="mt-4 text-lg text-primary-200 max-w-2xl mx-auto">
          Fordern Sie jetzt eine kostenlose Analyse an und erfahren Sie, wie Ihre Website in 48 Stunden modern aussehen kann.
        </p>
        <router-link to="/kontakt" class="inline-flex items-center justify-center mt-10 px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors shadow-lg shadow-accent-400/25">
          Kostenlose Analyse anfordern
        </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import SectionHeading from '../components/SectionHeading.vue'
import FeatureCard from '../components/FeatureCard.vue'
import PricingCard from '../components/PricingCard.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { useHead } from '../composables/useHead.js'

useScrollAnimation()
useHead({
  title: 'Website-Redesign — Moderne Website in 48 Stunden | Solytics',
  description: 'Professionelles Website-Redesign in 48 Stunden. Modern, mobiloptimiert und SEO-freundlich. Ab 499 € mit Tailwind CSS Technologie.',
})

const beforeAfterExamples = [
  { label: 'Handwerksbetrieb — Von 2015 auf 2025' },
  { label: 'Steuerberatung — Vertrauen durch Design' },
  { label: 'Einzelhandel — Mobile-First Relaunch' },
]

const faqs = [
  { q: 'Wie lange dauert das Redesign?', a: 'In der Regel 48 Stunden nach Auftragsbestätigung. Komplexere Websites mit vielen Unterseiten können etwas länger dauern.' },
  { q: 'Was passiert mit meinem bestehenden Content?', a: 'Ihre Inhalte (Texte, Bilder, Videos) werden in das neue Design übernommen. Auf Wunsch optimieren wir Texte auch für Suchmaschinen.' },
  { q: 'Brauche ich technische Kenntnisse?', a: 'Nein. Wir kümmern uns um alles — vom Design bis zum Go-Live. Sie müssen nur Ihre aktuelle Website-URL teilen und Feedback geben.' },
  { q: 'Was kostet Hosting nach dem Redesign?', a: 'Das Hosting-Setup ist optional. Wir empfehlen moderne Hosting-Lösungen ab ca. 5 €/Monat. Alternativ können wir die neue Website auf Ihrem bestehenden Hosting deployen.' },
  { q: 'Kann ich die Website danach selbst bearbeiten?', a: 'Ja. Wir übergeben Ihnen den kompletten Code. Auf Wunsch richten wir auch ein einfaches Content-Management-System ein.' },
]
</script>
