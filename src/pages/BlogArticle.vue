<template>
  <div class="min-h-screen pb-16">
    <div class="max-w-3xl mx-auto px-6 pt-12 lg:pt-20" v-if="post">
      <nav class="text-sm text-slate-400 mb-6">
        <router-link to="/" class="hover:text-slate-600">Home</router-link>
        <span class="mx-2">›</span>
        <router-link to="/blog" class="hover:text-slate-600">Blog</router-link>
        <span class="mx-2">›</span>
        <span class="text-slate-600">{{ post.title }}</span>
      </nav>

      <div class="flex items-center gap-4 text-sm text-slate-500 mb-4">
        <span>{{ formatDate(post.date) }}</span>
        <span>{{ post.readingTime }} Lesezeit</span>
        <span class="text-xs font-semibold uppercase tracking-wider text-red-500">
          {{ post.category === 'e-rechnung' ? 'E-Rechnung' : 'KI-Automatisierung' }}
        </span>
      </div>

      <component :is="post.component" />

      <div class="border-t border-slate-200 mt-12 pt-8 flex justify-between">
        <router-link
          v-if="prevPost"
          :to="`/blog/${prevPost.slug}`"
          class="text-red-500 hover:text-red-600 font-semibold text-sm"
        >
          ← {{ prevPost.title }}
        </router-link>
        <span v-else></span>
        <router-link
          v-if="nextPost"
          :to="`/blog/${nextPost.slug}`"
          class="text-red-500 hover:text-red-600 font-semibold text-sm text-right"
        >
          {{ nextPost.title }} →
        </router-link>
      </div>
    </div>

    <div v-else class="flex justify-center items-center h-screen">
      <div class="text-center">
        <h1 class="text-2xl font-bold">Artikel nicht gefunden</h1>
        <router-link to="/blog" class="text-red-500 hover:text-red-600 mt-4 inline-block">
          Zurück zum Blog
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { blogPosts } from '../data/blogPosts.js'

const route = useRoute()

const postIndex = computed(() =>
  blogPosts.findIndex(p => p.slug === route.params.slug)
)

const post = computed(() =>
  postIndex.value >= 0 ? blogPosts[postIndex.value] : null
)

const prevPost = computed(() =>
  postIndex.value > 0 ? blogPosts[postIndex.value - 1] : null
)

const nextPost = computed(() =>
  postIndex.value < blogPosts.length - 1 ? blogPosts[postIndex.value + 1] : null
)

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('de-DE', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

watchEffect(() => {
  if (!post.value) return
  document.title = `${post.value.title} | Solytics`

  let ld = document.querySelector('script[type="application/ld+json"]')
  if (!ld) {
    ld = document.createElement('script')
    ld.type = 'application/ld+json'
    document.head.appendChild(ld)
  }
  ld.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.value.title,
    description: post.value.description,
    datePublished: post.value.date,
    author: { '@type': 'Organization', name: 'Solytics GmbH' },
    publisher: { '@type': 'Organization', name: 'Solytics GmbH' },
  })

  let metaDesc = document.querySelector('meta[name="description"]')
  if (!metaDesc) {
    metaDesc = document.createElement('meta')
    metaDesc.name = 'description'
    document.head.appendChild(metaDesc)
  }
  metaDesc.content = post.value.description
})
</script>
