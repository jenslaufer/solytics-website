<template>
  <MainLayout>
    <section class="py-(--spacing-section) bg-surface-50 dark:bg-surface-100">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading badge="Blog">
          Aktuelles von Solytics.
          <template #description>Insights zu E-Rechnung, KI-Automatisierung und digitaler Transformation.</template>
        </SectionHeading>

        <div class="bg-white dark:bg-surface-200 rounded-[var(--radius-card)] p-12 text-center shadow-[var(--shadow-card)]">
          <svg class="w-16 h-16 mx-auto text-surface-300 dark:text-surface-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z"/>
          </svg>
          <p class="text-surface-500 font-medium text-lg">Blog — demnächst verfügbar</p>
          <p class="text-surface-400 mt-2 text-sm">Wir arbeiten an spannenden Inhalten. Schauen Sie bald wieder vorbei.</p>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import SectionHeading from '../components/SectionHeading.vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Blog — Solytics GmbH',
  description: 'Blog der Solytics GmbH: Insights zu E-Rechnung, KI-Automatisierung und digitaler Transformation.',
})
</script>
