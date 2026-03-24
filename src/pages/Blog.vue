<template>
  <div class="min-h-screen pb-16">
    <div class="max-w-5xl mx-auto px-6 pt-12 lg:pt-20">
      <h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold font-sans-serif leading-tight">
        Blog
      </h1>
      <p class="text-lg text-slate-600 mt-3 font-serif">
        Fachwissen zu E-Rechnung, KI-Automatisierung und digitaler Transformation.
      </p>

      <div class="flex gap-3 mt-8">
        <button
          v-for="cat in categories"
          :key="cat.value"
          @click="activeCategory = cat.value"
          :class="[
            'px-4 py-2 rounded-lg text-sm font-semibold transition',
            activeCategory === cat.value
              ? 'bg-red-500 text-white'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          ]"
        >
          {{ cat.label }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mt-10">
        <router-link
          v-for="post in filteredPosts"
          :key="post.slug"
          :to="`/blog/${post.slug}`"
          class="block bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition group"
        >
          <span class="text-xs font-semibold uppercase tracking-wider text-red-500">
            {{ categoryLabel(post.category) }}
          </span>
          <h2 class="text-xl font-bold font-sans-serif mt-2 group-hover:text-red-600 transition leading-snug">
            {{ post.title }}
          </h2>
          <p class="text-slate-600 mt-3 text-sm leading-relaxed">
            {{ post.description }}
          </p>
          <div class="flex items-center gap-4 mt-4 text-xs text-slate-400">
            <span>{{ formatDate(post.date) }}</span>
            <span>{{ post.readingTime }} Lesezeit</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { blogPosts } from '../data/blogPosts.js'

const categories = [
  { value: 'all', label: 'Alle' },
  { value: 'e-rechnung', label: 'E-Rechnung' },
  { value: 'ki-automatisierung', label: 'KI-Automatisierung' },
]

const activeCategory = ref('all')

const filteredPosts = computed(() => {
  if (activeCategory.value === 'all') return blogPosts
  return blogPosts.filter(p => p.category === activeCategory.value)
})

function categoryLabel(cat) {
  return categories.find(c => c.value === cat)?.label ?? cat
}

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
</script>
