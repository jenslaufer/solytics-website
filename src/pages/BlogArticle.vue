<template>
  <div class="min-h-screen bg-white">
    <div class="max-w-3xl mx-auto px-6 py-16 pb-24">
      <router-link to="/blog" class="text-sm text-slate-400 hover:text-red-500 transition">&larr; Alle Artikel</router-link>

      <article class="mt-6 prose prose-slate prose-lg max-w-none
        prose-headings:font-sans-serif prose-headings:font-extrabold
        prose-a:text-red-500 prose-a:no-underline hover:prose-a:underline
        prose-table:text-sm prose-th:bg-slate-100 prose-th:p-3 prose-td:p-3 prose-td:border-t">
        <div class="flex items-center gap-3 text-sm text-slate-400 mb-4 not-prose">
          <span>{{ post.date }}</span>
          <span>&middot;</span>
          <span>{{ post.readingTime }}</span>
        </div>
        <h1>{{ post.title }}</h1>
        <slot />
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  post: { type: Object, required: true }
})
</script>
