<template>
  <section v-if="articles.length" class="mt-16 pt-10 border-t border-surface-100 dark:border-surface-300">
    <h2 class="text-xl font-semibold text-surface-900 dark:text-surface-950 mb-6">Das könnte Sie auch interessieren</h2>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="block bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group no-underline"
      >
        <span class="inline-block text-xs font-medium uppercase tracking-wider text-primary-500 dark:text-primary-400 mb-2">
          {{ article.category === 'e-rechnung' ? 'E-Rechnung' : 'KI-Automatisierung' }}
        </span>
        <h3 class="text-base font-semibold text-surface-900 dark:text-surface-950 mb-2 group-hover:text-primary-500 transition-colors">
          {{ article.title }}
        </h3>
        <p class="text-sm text-surface-500 leading-relaxed line-clamp-2">{{ article.excerpt }}</p>
        <span class="inline-flex items-center text-sm font-medium text-primary-500 dark:text-primary-400 mt-3 group-hover:gap-2 transition-all">
          Weiterlesen
          <svg class="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
          </svg>
        </span>
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { getRelatedArticles } from '../data/articles.js'

const props = defineProps({
  slug: { type: String, required: true },
})

const articles = computed(() => getRelatedArticles(props.slug))
</script>
