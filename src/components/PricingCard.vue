<template>
  <div class="bg-surface p-8 md:p-10 flex flex-col"
    :class="featured ? 'ring-2 ring-accent' : ''">
    <div v-if="featured" class="label text-accent mb-4">Beliebt</div>
    <h3 class="heading-md text-ink">{{ title }}</h3>
    <p class="body-md text-muted mt-2">{{ description }}</p>
    <div class="mt-6 mb-6">
      <span class="text-3xl font-bold text-ink">{{ price }}</span>
      <span v-if="unit" class="text-muted ml-1">{{ unit }}</span>
    </div>
    <ul class="space-y-3 mb-8 flex-1">
      <li v-for="feature in features" :key="feature" class="flex items-start gap-3 body-md text-muted">
        <span class="block w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
        {{ feature }}
      </li>
    </ul>
    <router-link
      :to="cta.to"
      class="cta-button block text-center px-6 py-3 text-base rounded-md"
      :class="featured
        ? 'bg-accent text-white hover:bg-accent-hover'
        : 'bg-warm-gray text-ink hover:bg-border'"
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
