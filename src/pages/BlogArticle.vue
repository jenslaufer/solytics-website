<template>
  <MainLayout>
    <template v-if="post">
      <!-- Hero -->
      <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
        <div class="max-w-3xl mx-auto">
          <!-- Breadcrumb -->
          <nav class="mb-6 text-sm text-muted">
            <router-link to="/" class="hover:text-ink transition-colors">Home</router-link>
            <span class="mx-2">/</span>
            <router-link to="/blog" class="hover:text-ink transition-colors">Blog</router-link>
            <span class="mx-2">/</span>
            <span class="text-ink">{{ post.title }}</span>
          </nav>
          <span class="label mb-6 inline-block"
            :class="post.category === 'e-rechnung' ? 'text-urgency' : 'text-accent'">
            {{ categoryLabel(post.category) }}
          </span>
          <h1 class="heading-xl text-ink">
            {{ post.title }}
          </h1>
          <div class="mt-6 flex items-center gap-4 text-sm text-muted">
            <span>{{ formatDate(post.date) }}</span>
            <span>{{ post.readingTime }}</span>
          </div>
        </div>
      </section>

      <!-- Article content -->
      <section class="pb-20 md:pb-32 px-6 md:px-10">
        <div class="max-w-3xl mx-auto">
          <component :is="asyncComponent" />

          <!-- CTA -->
          <div class="mt-16 bg-warm-gray rounded-md p-8 sm:p-12 text-center">
            <h3 class="heading-lg text-ink">Bereit für den nächsten Schritt?</h3>
            <p class="mt-3 body-lg text-muted max-w-xl mx-auto">
              Sprechen Sie mit uns über Ihre Anforderungen — unverbindlich und kostenlos.
            </p>
            <router-link to="/kontakt"
              class="cta-button inline-block mt-8 bg-accent text-white px-8 py-4 text-base rounded-md hover:bg-accent-hover">
              Gespräch vereinbaren
            </router-link>
          </div>

          <!-- Prev/Next -->
          <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-border rounded-md overflow-hidden">
            <router-link v-if="prevPost" :to="`/blog/${prevPost.slug}`" class="bg-surface p-4 hover:bg-warm-gray transition-colors">
              <span class="label text-muted">Vorheriger Artikel</span>
              <p class="mt-1 body-md font-semibold text-ink">{{ prevPost.title }}</p>
            </router-link>
            <div v-else class="bg-surface p-4"></div>
            <router-link v-if="nextPost" :to="`/blog/${nextPost.slug}`" class="bg-surface p-4 hover:bg-warm-gray transition-colors text-right">
              <span class="label text-muted">Nächster Artikel</span>
              <p class="mt-1 body-md font-semibold text-ink">{{ nextPost.title }}</p>
            </router-link>
            <div v-else class="bg-surface p-4"></div>
          </div>
        </div>
      </section>
    </template>

    <!-- 404 -->
    <section v-else class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="heading-lg text-ink">Artikel nicht gefunden</h1>
        <p class="mt-4 body-lg text-muted">Der gesuchte Blog-Artikel existiert nicht.</p>
        <router-link to="/blog"
          class="cta-button inline-block mt-8 bg-accent text-white px-6 py-3 text-sm rounded-md hover:bg-accent-hover">
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
  if (!post.value || typeof document === 'undefined') return
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
