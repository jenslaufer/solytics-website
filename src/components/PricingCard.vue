<template>
  <div class="relative bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 flex flex-col"
    :class="{ 'ring-2 ring-primary-500 dark:ring-primary-400': featured }">
    <div v-if="featured" class="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-xs font-semibold text-white bg-primary-500 rounded-full">
      Beliebt
    </div>
    <h3 class="text-xl font-bold text-surface-900 dark:text-surface-950">{{ title }}</h3>
    <p class="mt-2 text-sm text-surface-500 leading-relaxed">{{ description }}</p>
    <div class="mt-6 mb-6">
      <span class="text-4xl font-bold text-surface-900 dark:text-surface-950">{{ price }}</span>
      <span v-if="unit" class="text-surface-500 ml-1">{{ unit }}</span>
    </div>
    <ul class="space-y-3 mb-8 flex-1">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-3 text-sm text-surface-600 dark:text-surface-600">
        <svg class="w-5 h-5 text-primary-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M5 13l4 4L19 7"/>
        </svg>
        {{ feature }}
      </li>
    </ul>
    <router-link
      :to="cta.to"
      class="block text-center px-6 py-3 font-semibold rounded-[var(--radius-button)] transition-colors"
      :class="featured
        ? 'bg-primary-500 text-white hover:bg-primary-600'
        : 'bg-surface-100 dark:bg-surface-300 text-surface-900 dark:text-surface-950 hover:bg-surface-200 dark:hover:bg-surface-400'"
    >
      {{ cta.label }}
    </router-link>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  price: String,
  unit: { type: String, default: '' },
  features: Array,
  featured: { type: Boolean, default: false },
  cta: { type: Object, default: () => ({ label: 'Anfragen', to: '/kontakt' }) }
})
</script>
