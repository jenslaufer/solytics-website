<template>
  <MainLayout>
    <!-- Hero -->
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <p class="label text-accent mb-6">Website-Redesign</p>
          <h1 class="heading-xl text-ink mb-8">
            Professionelles Website-Redesign. Modern. In 48 Stunden.
          </h1>
          <p class="body-lg text-muted max-w-prose mb-10">
            Ihre Website ist Ihr digitales Schaufenster. Wir verwandeln veraltete Webseiten in moderne, schnelle und mobiloptimierte Auftritte — mit KI-Unterstützung und professionellem Design.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <router-link to="/kontakt"
              class="cta-button bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover text-center">
              Kostenlose Analyse
            </router-link>
            <a href="#ablauf"
              class="inline-block px-8 py-4 text-base font-semibold text-ink border border-border hover:bg-warm-gray rounded-md transition-colors text-center">
              So funktioniert's
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Problem -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray border-t border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Das Problem">
          Eine veraltete Website kostet Sie Kunden.
          <template #description>Studien zeigen: 75 % der Nutzer beurteilen die Glaubwürdigkeit eines Unternehmens anhand des Website-Designs.</template>
        </SectionHeading>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <FeatureCard title="Veraltetes Design kostet Kunden" description="Besucher verlassen unprofessionelle Websites innerhalb von Sekunden. Jeder verlorene Besucher ist ein verlorener Auftrag.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z"/><path d="M12 15.75h.007v.008H12v-.008z"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Mobile Nutzer springen ab" description="Über 60 % Ihrer Besucher kommen vom Smartphone. Eine nicht-responsive Website verliert diese Nutzer sofort.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"/></svg></template>
          </FeatureCard>
          <FeatureCard title="Konkurrenz sieht professioneller aus" description="Wenn Ihre Mitbewerber modern auftreten und Sie nicht, verlieren Sie den Vertrauensvorsprung — noch bevor das erste Gespräch stattfindet.">
            <template #icon><svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"/></svg></template>
          </FeatureCard>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section id="ablauf" class="py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Ablauf">
          In 3 Schritten zur neuen Website.
          <template #description>Unser Prozess ist schlank und schnell — von der Analyse bis zum Launch in 48 Stunden.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-3 gap-px bg-border rounded-md overflow-hidden">
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-6">Schritt 1</p>
            <h3 class="heading-md text-ink mb-4">Analyse</h3>
            <p class="body-md text-muted">Wir prüfen Ihre aktuelle Website auf Design, Performance, Mobile-Tauglichkeit und SEO. Sie erhalten einen kostenlosen Analysebericht.</p>
          </div>
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-6">Schritt 2</p>
            <h3 class="heading-md text-ink mb-4">Redesign</h3>
            <p class="body-md text-muted">KI-gestützt erstellen wir ein modernes Design mit Tailwind CSS. Schnell, responsive und optimiert für Suchmaschinen.</p>
          </div>
          <div class="bg-surface p-8 md:p-10">
            <p class="label text-accent mb-6">Schritt 3</p>
            <h3 class="heading-md text-ink mb-4">Launch</h3>
            <p class="body-md text-muted">Innerhalb von 48 Stunden geht Ihre neue Website live. Inklusive Hosting-Setup auf Wunsch.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Before / After -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray border-t border-b border-border fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Vorher / Nachher">
          So sieht der Unterschied aus.
          <template #description>Beispiele für Website-Transformationen unserer Kunden.</template>
        </SectionHeading>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden fade-up-fast">
          <div v-for="(example, i) in beforeAfterExamples" :key="i" class="bg-surface p-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p class="label text-urgency mb-2">Vorher</p>
                <div class="aspect-[4/3] rounded bg-border flex items-center justify-center">
                  <div class="text-center space-y-1">
                    <div class="w-16 h-2 bg-muted/20 rounded mx-auto"></div>
                    <div class="w-12 h-2 bg-muted/20 rounded mx-auto"></div>
                    <div class="w-20 h-8 bg-muted/20 rounded mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
              <div>
                <p class="label text-success mb-2">Nachher</p>
                <div class="aspect-[4/3] rounded bg-accent-light flex items-center justify-center">
                  <div class="text-center space-y-1">
                    <div class="w-16 h-2 bg-accent/20 rounded mx-auto"></div>
                    <div class="w-12 h-2 bg-accent/20 rounded mx-auto"></div>
                    <div class="w-20 h-8 bg-accent/30 rounded mx-auto mt-2"></div>
                  </div>
                </div>
              </div>
            </div>
            <p class="mt-3 body-md font-medium text-ink">{{ example.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section id="preise" class="py-16 md:py-24 px-6 md:px-10 fade-up">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <SectionHeading badge="Preise" :center="true">
          Transparente Preise. Keine versteckten Kosten.
          <template #description>Ein Paket. Alles drin. Fertig in 48 Stunden.</template>
        </SectionHeading>

        <div class="max-w-md mx-auto">
          <div class="bg-warm-gray rounded-md overflow-hidden">
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
          <div class="mt-6 text-center">
            <p class="body-md text-success font-semibold">Digitalbonus Bayern: Bis zu 50 % Förderung möglich</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 md:py-32 px-6 md:px-10 bg-warm-gray border-t border-border fade-up">
      <div class="max-w-3xl mx-auto">
        <SectionHeading badge="FAQ">
          Häufige Fragen.
        </SectionHeading>

        <div class="space-y-px">
          <div v-for="(faq, i) in faqs" :key="i" class="bg-surface p-6">
            <h3 class="font-bold text-ink">{{ faq.q }}</h3>
            <p class="mt-2 body-md text-muted">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-dark py-24 md:py-40 px-6 md:px-10 fade-up">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="heading-lg mb-8">Lassen Sie uns Ihre Website analysieren.</h2>
        <p class="body-lg text-muted mb-12">
          Fordern Sie jetzt eine kostenlose Analyse an und erfahren Sie, wie Ihre Website in 48 Stunden modern aussehen kann.
        </p>
        <router-link to="/kontakt"
          class="cta-button bg-accent text-white px-10 py-5 text-lg rounded-md hover:bg-accent-hover">
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
