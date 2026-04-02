<template>
  <MainLayout>
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10 min-h-[60vh] flex items-center">
      <div class="max-w-2xl mx-auto text-center">
        <p class="text-8xl font-bold text-border">404</p>
        <h1 class="mt-4 heading-lg text-ink">Seite nicht gefunden</h1>
        <p class="mt-2 body-lg text-muted">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
        <router-link to="/"
          class="cta-button inline-block mt-8 bg-accent text-white px-6 py-3 text-sm rounded-md hover:bg-accent-hover">
          Zur Startseite
        </router-link>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useHead } from '../composables/useHead.js'

useHead({ title: '404 — Seite nicht gefunden | Solytics' })
</script>
