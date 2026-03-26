<template>
  <MainLayout>
    <template v-if="post">
      <!-- Hero -->
      <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.1),transparent_60%)]"></div>
        <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
          <!-- Breadcrumb -->
          <nav class="mb-6 text-sm text-primary-300">
            <router-link to="/" class="hover:text-white transition-colors">Home</router-link>
            <span class="mx-2">/</span>
            <router-link to="/blog" class="hover:text-white transition-colors">Blog</router-link>
            <span class="mx-2">/</span>
            <span class="text-white">{{ post.title }}</span>
          </nav>
          <span class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-6"
            :class="post.category === 'e-rechnung' ? 'bg-primary-100/20 text-primary-200' : 'bg-accent-400/20 text-accent-200'">
            {{ categoryLabel(post.category) }}
          </span>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
            {{ post.title }}
          </h1>
          <div class="mt-6 flex items-center gap-4 text-sm text-primary-300">
            <span>{{ formatDate(post.date) }}</span>
            <span>{{ post.readingTime }}</span>
          </div>
        </div>
      </section>

      <!-- Article content -->
      <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
        <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <component :is="asyncComponent" />

          <!-- CTA -->
          <div class="mt-16 bg-gradient-to-br from-primary-900 to-primary-950 rounded-[var(--radius-card)] p-8 sm:p-12 text-center">
            <h3 class="text-2xl font-bold text-white">Bereit für den nächsten Schritt?</h3>
            <p class="mt-3 text-primary-200 max-w-xl mx-auto">
              Sprechen Sie mit uns über Ihre Anforderungen — unverbindlich und kostenlos.
            </p>
            <router-link to="/kontakt" class="inline-flex items-center justify-center mt-8 px-8 py-4 text-base font-semibold text-primary-950 bg-accent-400 hover:bg-accent-300 rounded-[var(--radius-button)] transition-colors">
              Gespräch vereinbaren
            </router-link>
          </div>

          <!-- Prev/Next -->
          <div class="mt-12 flex justify-between gap-4">
            <router-link v-if="prevPost" :to="`/blog/${prevPost.slug}`" class="flex-1 p-4 bg-white dark:bg-surface-200 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow">
              <span class="text-xs text-surface-400 uppercase tracking-wider">Vorheriger Artikel</span>
              <p class="mt-1 text-sm font-semibold text-surface-900 dark:text-surface-950">{{ prevPost.title }}</p>
            </router-link>
            <router-link v-if="nextPost" :to="`/blog/${nextPost.slug}`" class="flex-1 p-4 bg-white dark:bg-surface-200 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow text-right">
              <span class="text-xs text-surface-400 uppercase tracking-wider">Nächster Artikel</span>
              <p class="mt-1 text-sm font-semibold text-surface-900 dark:text-surface-950">{{ nextPost.title }}</p>
            </router-link>
          </div>
        </div>
      </section>
    </template>

    <!-- 404 -->
    <section v-else class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-950">Artikel nicht gefunden</h1>
        <p class="mt-4 text-surface-500">Der gesuchte Blog-Artikel existiert nicht.</p>
        <router-link to="/blog" class="inline-flex items-center justify-center mt-8 px-6 py-3 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-[var(--radius-button)] transition-colors">
          Zum Blog
        </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { computed, defineAsyncComponent, watchEffect, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import { useHead } from '../composables/useHead.js'
import { blogPosts } from '../data/blogPosts.js'

const route = useRoute()

const post = computed(() => blogPosts.find(p => p.slug === route.params.slug))
const asyncComponent = computed(() => post.value ? defineAsyncComponent(post.value.component) : null)
const postIndex = computed(() => blogPosts.findIndex(p => p.slug === route.params.slug))
const prevPost = computed(() => postIndex.value > 0 ? blogPosts[postIndex.value - 1] : null)
const nextPost = computed(() => postIndex.value < blogPosts.length - 1 ? blogPosts[postIndex.value + 1] : null)

const categories = [
  { value: 'e-rechnung', label: 'E-Rechnung' },
  { value: 'ki-automatisierung', label: 'KI-Automatisierung' },
]

function categoryLabel(cat) {
  return categories.find(c => c.value === cat)?.label ?? cat
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

// SEO
useHead({
  title: post.value ? `${post.value.title} — Solytics` : 'Blog — Solytics',
  description: post.value?.excerpt ?? '',
})

// JSON-LD
let jsonLdScript = null
watchEffect(() => {
  if (!post.value) return
  if (jsonLdScript) jsonLdScript.remove()
  jsonLdScript = document.createElement('script')
  jsonLdScript.type = 'application/ld+json'
  jsonLdScript.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.value.title,
    description: post.value.excerpt,
    datePublished: post.value.date,
    url: `https://solytics.de/blog/${post.value.slug}`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://solytics.de/blog/${post.value.slug}` },
    author: { '@type': 'Organization', name: 'Solytics GmbH', url: 'https://solytics.de' },
    publisher: { '@type': 'Organization', name: 'Solytics GmbH', url: 'https://solytics.de' },
  })
  document.head.appendChild(jsonLdScript)
})

onUnmounted(() => {
  if (jsonLdScript) jsonLdScript.remove()
})
</script>
