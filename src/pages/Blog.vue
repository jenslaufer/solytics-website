<template>
  <MainLayout>
    <!-- Hero -->
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <div class="max-w-3xl">
          <p class="label text-muted mb-6">Blog</p>
          <h1 class="heading-xl text-ink mb-4">Aktuelles von Solytics.</h1>
          <p class="body-lg text-muted">Insights zu E-Rechnung, KI-Automatisierung und digitaler Transformation.</p>
        </div>
      </div>
    </section>

    <section class="pb-20 md:pb-32 px-6 md:px-10">
      <div class="max-w-[var(--max-width-content)] mx-auto">
        <!-- Category filter -->
        <div class="flex flex-wrap gap-3 mb-12 fade-up">
          <button v-for="cat in categories" :key="cat.value" @click="activeCategory = cat.value"
            class="px-4 py-2 text-sm font-medium rounded-md transition-colors"
            :class="activeCategory === cat.value
              ? 'bg-accent text-white'
              : 'bg-warm-gray text-muted hover:text-ink'">
            {{ cat.label }}
          </button>
        </div>

        <!-- Post cards -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-md overflow-hidden fade-up-fast">
          <router-link v-for="post in filteredPosts" :key="post.slug" :to="`/blog/${post.slug}`"
            class="block bg-surface p-6 hover:bg-warm-gray transition-colors group">
            <span class="label mb-4 inline-block"
              :class="post.category === 'e-rechnung' ? 'text-urgency' : 'text-accent'">
              {{ categoryLabel(post.category) }}
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
