<template>
  <MainLayout>
    <section class="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800">
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,191,36,0.1),transparent_60%)]"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36">
        <div class="max-w-3xl">
          <p class="inline-block px-4 py-1.5 mb-6 text-xs font-semibold uppercase tracking-widest text-accent-300 bg-accent-400/10 border border-accent-400/20 rounded-full">
            Blog
          </p>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
            Aktuelles von Solytics.
          </h1>
          <p class="mt-6 text-lg text-primary-200 max-w-2xl leading-relaxed">
            Insights zu E-Rechnung, KI-Automatisierung und digitaler Transformation.
          </p>
        </div>
      </div>
    </section>

    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Category filter -->
        <div class="flex flex-wrap gap-3 mb-12 fade-up">
          <button v-for="cat in categories" :key="cat.value" @click="activeCategory = cat.value"
            class="px-4 py-2 text-sm font-medium rounded-full transition-colors"
            :class="activeCategory === cat.value
              ? 'bg-primary-500 text-white'
              : 'bg-white dark:bg-surface-200 text-surface-600 dark:text-surface-500 hover:bg-primary-50 dark:hover:bg-surface-300'">
            {{ cat.label }}
          </button>
        </div>

        <!-- Post cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-up">
          <router-link v-for="post in filteredPosts" :key="post.slug" :to="`/blog/${post.slug}`"
            class="block bg-white dark:bg-surface-200 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow overflow-hidden group">
            <div class="p-6">
              <span class="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full mb-4"
                :class="post.category === 'e-rechnung' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300' : 'bg-accent-100 text-accent-700 dark:bg-accent-900 dark:text-accent-300'">
                {{ categoryLabel(post.category) }}
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
import { ref, computed } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import { useScrollAnimation } from '../composables/useScrollAnimation.js'
import { useHead } from '../composables/useHead.js'
import { blogPosts } from '../data/blogPosts.js'

useScrollAnimation()
useHead({
  title: 'Blog — Solytics',
  description: 'Insights zu E-Rechnung, KI-Automatisierung und digitaler Transformation.',
})

const activeCategory = ref('all')

const categories = [
  { value: 'all', label: 'Alle' },
  { value: 'e-rechnung', label: 'E-Rechnung' },
  { value: 'ki-automatisierung', label: 'KI-Automatisierung' },
]

function categoryLabel(cat) {
  return categories.find(c => c.value === cat)?.label ?? cat
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('de-DE', { day: 'numeric', month: 'long', year: 'numeric' })
}

const filteredPosts = computed(() =>
  activeCategory.value === 'all'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory.value)
)
</script>
