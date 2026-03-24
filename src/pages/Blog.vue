<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-4xl mx-auto px-6 py-16 pb-24">
      <h1 class="text-4xl font-extrabold font-sans-serif mb-2">Blog</h1>
      <p class="text-lg text-slate-500 mb-12">Fachwissen rund um Daten, Software und digitale Prozesse.</p>

      <div class="space-y-8">
        <router-link v-for="post in posts" :key="post.slug" :to="`/blog/${post.slug}`"
          class="block group border border-slate-200 rounded-lg p-6 hover:border-red-300 hover:shadow-md transition">
          <div class="flex items-center gap-3 text-sm text-slate-400 mb-2">
            <span>{{ post.date }}</span>
            <span>&middot;</span>
            <span>{{ post.readingTime }}</span>
            <span>&middot;</span>
            <span class="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-xs">{{ post.category }}</span>
          </div>
          <h2 class="text-xl font-bold group-hover:text-red-500 transition">{{ post.title }}</h2>
          <p class="text-slate-600 mt-2">{{ post.description }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { blogPosts } from '../blogPosts.js'

const posts = blogPosts.slice().sort((a, b) => b.date.localeCompare(a.date))
</script>
