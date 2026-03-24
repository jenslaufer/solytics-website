<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import SiteFooter from '../components/SiteFooter.vue'
</script>
