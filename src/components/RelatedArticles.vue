<template>
  <section v-if="articles.length" class="mt-16 pt-10 border-t border-border">
    <h2 class="heading-md text-ink mb-6">Das könnte Sie auch interessieren</h2>
    <div class="grid gap-px bg-border rounded-md overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
      <router-link
        v-for="article in articles"
        :key="article.slug"
        :to="`/blog/${article.slug}`"
        class="block bg-surface p-6 hover:bg-warm-gray transition-colors group no-underline"
      >
        <span class="label mb-2 inline-block"
          :class="article.category === 'e-rechnung' ? 'text-urgency' : 'text-accent'">
          {{ article.category === 'e-rechnung' ? 'E-Rechnung' : 'KI-Automatisierung' }}
        </span>
        <h3 class="text-base font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
          {{ article.title }}
        </h3>
        <p class="body-md text-muted line-clamp-2">{{ article.excerpt }}</p>
        <span class="inline-flex items-center text-sm font-medium text-accent mt-3 group-hover:gap-2 transition-all">
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
