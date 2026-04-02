<template>
  <MainLayout>
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-2xl mb-16">
          <p class="label text-muted mb-4">Kontakt</p>
          <h1 class="heading-xl text-ink mb-4">Lassen Sie uns sprechen.</h1>
          <p class="body-lg text-muted">Vereinbaren Sie ein unverbindliches Erstgespräch oder schreiben Sie uns direkt.</p>
        </div>

        <div class="md:grid md:grid-cols-12 md:gap-16">
          <!-- Calendly Embed -->
          <div class="md:col-span-7 mb-10 md:mb-0">
            <h3 class="heading-md text-ink mb-4">Termin buchen</h3>
            <div class="bg-warm-gray rounded-md overflow-hidden min-h-[400px] sm:min-h-[500px]">
              <div
                class="calendly-inline-widget"
                data-url="https://calendly.com/jens-laufer-solytics/30min"
                style="min-width:100%;height:500px;"
              ></div>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="md:col-span-4 md:col-start-9">
            <h3 class="heading-md text-ink mb-4">Direkt kontaktieren</h3>
            <div class="space-y-6">
              <div>
                <div class="label text-muted mb-1">E-Mail</div>
                <a href="mailto:jens.laufer@solytics.de" class="text-accent hover:text-accent-hover font-medium transition-colors">
                  jens.laufer@solytics.de
                </a>
              </div>
              <div>
                <div class="label text-muted mb-1">Adresse</div>
                <p class="body-md text-muted">
                  Solytics GmbH<br>
                  Hörsteiner Str. 20a<br>
                  63791 Karlstein a. Main<br>
                  Deutschland
                </p>
              </div>
              <div>
                <div class="label text-muted mb-1">Geschäftsführer</div>
                <p class="body-md text-muted">Jens Laufer</p>
              </div>
              <hr class="border-border">
              <div class="space-y-3">
                <a href="https://www.linkedin.com/in/jenslaufer" target="_blank" rel="noopener" class="flex items-center gap-3 body-md text-muted hover:text-ink transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
                <a href="https://github.com/jenslaufer" target="_blank" rel="noopener" class="flex items-center gap-3 body-md text-muted hover:text-ink transition-colors">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Kontakt — Solytics GmbH',
  description: 'Nehmen Sie Kontakt mit Solytics auf. Vereinbaren Sie ein unverbindliches Erstgespräch zu E-Rechnung oder KI-Automatisierung.',
})

onMounted(() => {
  if (window.Calendly) {
    window.Calendly.initInlineWidget({
      url: 'https://calendly.com/jens-laufer-solytics/30min',
      parentElement: document.querySelector('.calendly-inline-widget'),
    })
  }
})
</script>
