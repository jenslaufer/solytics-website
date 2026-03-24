<template>
  <MainLayout>
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100 min-h-[60vh] flex items-center">
      <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-8xl font-bold text-primary-200 dark:text-primary-950">404</p>
        <h1 class="mt-4 text-2xl font-bold text-surface-900 dark:text-surface-950">Seite nicht gefunden</h1>
        <p class="mt-2 text-surface-500">Die angeforderte Seite existiert nicht oder wurde verschoben.</p>
        <router-link to="/" class="inline-flex items-center justify-center mt-8 px-6 py-3 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-[var(--radius-button)] transition-colors">
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
