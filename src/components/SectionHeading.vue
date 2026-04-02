<template>
  <div class="mb-16" :class="center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'">
    <p v-if="badge" class="label text-muted mb-4">{{ badge }}</p>
    <h2 class="heading-lg text-ink">
      <slot />
    </h2>
    <p v-if="$slots.description" class="body-lg text-muted mt-6 max-w-prose">
      <slot name="description" />
    </p>
  </div>
</template>

<script setup>
defineProps({
  badge: { type: String, default: '' },
  center: { type: Boolean, default: false },
})
</script>
