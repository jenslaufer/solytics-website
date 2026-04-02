<template>
  <MainLayout>
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-3xl mx-auto">
        <h1 class="heading-lg text-ink mb-8">Impressum</h1>

        <div class="space-y-6 body-md text-muted">
          <div>
            <h2 class="heading-md text-ink mb-2">Angaben gemäß § 5 TMG</h2>
            <p>
              Solytics GmbH<br>
              Hörsteiner Str. 20a<br>
              63791 Karlstein a. Main<br>
              Deutschland
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mb-2">Vertreten durch</h2>
            <p>Jens Laufer (Geschäftsführer)</p>
          </div>

          <div>
            <h2 class="heading-md text-ink mb-2">Kontakt</h2>
            <p>E-Mail: <a href="mailto:jens.laufer@solytics.de" class="text-accent hover:text-accent-hover underline">jens.laufer@solytics.de</a></p>
          </div>

          <div>
            <h2 class="heading-md text-ink mb-2">Registereintrag</h2>
            <p>
              Registergericht: Amtsgericht Aschaffenburg<br>
              Registernummer: HRB 16879
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mb-2">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>
              Jens Laufer<br>
              Hörsteiner Str. 20a<br>
              63791 Karlstein a. Main
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mb-2">Haftungsausschluss</h2>
            <h3 class="font-medium text-ink mt-4 mb-1">Haftung für Inhalte</h3>
            <p class="text-sm leading-relaxed">
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.
            </p>

            <h3 class="font-medium text-ink mt-4 mb-1">Haftung für Links</h3>
            <p class="text-sm leading-relaxed">
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
              Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Impressum — Solytics GmbH',
  description: 'Impressum der Solytics GmbH, Karlstein a. Main.',
})
</script>
