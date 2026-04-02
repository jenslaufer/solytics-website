<template>
  <MainLayout>
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <p class="label text-muted mb-6">Blog — {{ config.label }}</p>
          <h1 class="heading-xl text-ink">{{ config.heading }}</h1>
          <p class="mt-6 body-lg text-muted max-w-prose">{{ config.intro }}</p>
        </div>
      </div>
    </section>

    <section class="pb-20 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="flex items-center justify-between mb-12 fade-up">
          <p class="text-sm text-muted">{{ posts.length }} Artikel</p>
          <router-link to="/blog" class="label text-accent hover:text-accent-hover transition-colors">
            &larr; Alle Artikel
          </router-link>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden fade-up">
          <router-link v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`"
            class="block bg-surface p-6 hover:bg-warm-gray transition-colors group">
            <span class="label mb-4 inline-block"
              :class="post.category === 'e-rechnung' ? 'text-urgency' : 'text-accent'">
              {{ config.label }}
            </span>
            <h2 class="heading-md text-ink group-hover:text-accent transition-colors leading-snug">
              {{ post.title }}
            </h2>
            <p class="mt-3 body-md text-muted line-clamp-3">
              {{ post.excerpt }}
            </p>
            <div class="mt-4 flex items-center gap-4 text-xs text-muted">
              <span>{{ formatDate(post.date) }}</span>
              <span>{{ post.readingTime }}</span>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '../../layouts/MainLayout.vue'
import { useScrollAnimation } from '../../composables/useScrollAnimation.js'
import { useHead } from '../../composables/useHead.js'
import { blogPosts } from '../../data/blogPosts.js'

const route = useRoute()
useScrollAnimation()

const categoryConfigs = {
  'e-rechnung': {
    label: 'E-Rechnung',
    heading: 'E-Rechnung.',
    intro: 'Alles zur elektronischen Rechnung in Deutschland: XRechnung, ZUGFeRD, Pflichten ab 2027, Implementierung und Software-Vergleiche. Praxiswissen für Unternehmer, Steuerberater und Entwickler.',
  },
  'ki-automatisierung': {
    label: 'KI-Automatisierung',
    heading: 'KI-Automatisierung.',
    intro: 'KI-Automatisierung für Unternehmen: Agenten, Buchhaltung, Vertrieb und ROI-Berechnungen. Erfahren Sie, wie KI Ihre Geschäftsprozesse transformiert — mit konkreten Beispielen und Kostenanalysen.',
  },
}

const category = computed(() => route.meta.category)
const config = computed(() => categoryConfigs[category.value])
const posts = computed(() => blogPosts.filter(p => p.category === category.value))

useHead({
  title: computed(() => `${config.value.label} — Blog — Solytics`),
  description: computed(() => config.value.intro),
})

let scriptEl = null
onMounted(() => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Blog', item: 'https://solytics.de/blog' },
      { '@type': 'ListItem', position: 2, name: config.value.label, item: `https://solytics.de/blog/${category.value}` },
    ],
  }
  scriptEl = document.createElement('script')
  scriptEl.type = 'application/ld+json'
  scriptEl.textContent = JSON.stringify(jsonLd)
  document.head.appendChild(scriptEl)
})

onUnmounted(() => {
  if (scriptEl) scriptEl.remove()
})

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}
</script>
