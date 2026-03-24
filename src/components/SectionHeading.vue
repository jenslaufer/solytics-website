<template>
  <div class="text-center max-w-3xl mx-auto mb-16">
    <p v-if="badge" class="inline-block px-4 py-1.5 mb-4 text-xs font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950 rounded-full">
      {{ badge }}
    </p>
    <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-surface-900 dark:text-surface-950 tracking-tight">
      <slot />
    </h2>
    <p v-if="$slots.description" class="mt-4 text-lg text-surface-500 dark:text-surface-500 leading-relaxed">
      <slot name="description" />
    </p>
  </div>
</template>

<script setup>
defineProps({
  badge: { type: String, default: '' }
})
</script>
