<template>
  <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 group">
    <div class="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950 text-primary-500 dark:text-primary-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
      <slot name="icon">
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </slot>
    </div>
    <h3 class="text-lg font-semibold text-primary-900 dark:text-surface-950 mb-2">{{ title }}</h3>
    <p class="text-sm text-surface-600 dark:text-surface-700 leading-relaxed">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>
