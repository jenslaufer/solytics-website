<template>
  <div class="bg-surface p-8 md:p-10">
    <div class="w-10 h-10 rounded-lg bg-accent-light text-accent flex items-center justify-center mb-5">
      <slot name="icon">
        <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </slot>
    </div>
    <h3 class="heading-md text-ink mb-2">{{ title }}</h3>
    <p class="body-md text-muted">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
})
</script>
