<template>
  <MainLayout>
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.1),transparent_60%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div class="max-w-3xl">
          <p class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-accent-300 bg-accent-400/10 border border-accent-400/20 rounded-full">
            Blog — {{ config.label }}
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            {{ config.heading }}
          </h1>
          <p class="mt-6 text-lg text-primary-200 max-w-2xl leading-relaxed">
            {{ config.intro }}
          </p>
        </div>
      </div>
    </section>

    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between mb-12 fade-up">
          <p class="text-sm text-surface-500">{{ posts.length }} {{ posts.length === 1 ? 'Artikel' : 'Artikel' }}</p>
          <router-link to="/blog" class="text-sm font-medium text-primary-600 hover:text-primary-700 transition-colors">
            ← Alle Artikel
          </router-link>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          <router-link v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`"
            class="block bg-white dark:bg-surface-200 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow overflow-hidden group">
            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-4"
                :class="post.category === 'e-rechnung' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' : 'bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300'">
                {{ config.label }}
              </span>
              <h2 class="text-lg font-bold text-surface-900 dark:text-surface-950 group-hover:text-primary-600 transition-colors leading-snug">
                {{ post.title }}
              </h2>
              <p class="mt-3 text-sm text-surface-500 leading-relaxed line-clamp-3">
                {{ post.excerpt }}
              </p>
              <div class="mt-4 flex items-center gap-4 text-xs text-surface-400">
                <span>{{ formatDate(post.date) }}</span>
                <span>{{ post.readingTime }}</span>
              </div>
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

// JSON-LD BreadcrumbList
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
