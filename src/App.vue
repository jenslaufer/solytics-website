<template>
  <router-view />
</template>

<script setup>
import { useHead } from '@unhead/vue'

useHead({
  htmlAttrs: { lang: 'de' },
})
</script>
