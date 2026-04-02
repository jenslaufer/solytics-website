<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-sm border-b border-border/60">
    <div class="max-w-[var(--max-width-content)] mx-auto px-6 md:px-10 flex items-center justify-between h-16">
      <router-link to="/" class="text-lg font-bold tracking-tight text-ink">
        Solytics
      </router-link>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="px-4 py-2 text-sm font-medium text-muted hover:text-ink transition-colors duration-200"
        >
          {{ item.label }}
        </router-link>
        <router-link
          to="/kontakt"
          class="ml-3 label text-accent hover:text-accent-hover transition-colors duration-200"
        >
          Gespräch vereinbaren
        </router-link>
      </div>

      <!-- Mobile hamburger -->
      <button
        @click="mobileOpen = !mobileOpen"
        class="md:hidden p-2 text-muted hover:text-ink"
        aria-label="Toggle menu"
      >
        <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path v-if="!mobileOpen" d="M4 6h16M4 12h16M4 18h16"/>
          <path v-else d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileOpen" class="md:hidden bg-surface border-b border-border px-6 pb-4 space-y-1">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="block px-4 py-2 text-sm font-medium text-muted hover:text-ink transition-colors"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </router-link>
        <router-link
          to="/kontakt"
          class="block px-4 py-2 text-sm font-semibold text-accent hover:text-accent-hover transition-colors"
          @click="mobileOpen = false"
        >
          Gespräch vereinbaren
        </router-link>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileOpen = ref(false)

const navItems = [
  { label: 'E-Rechnung', to: '/e-rechnung' },
  { label: 'KI-Automatisierung', to: '/ki-automatisierung' },
  { label: 'Website-Redesign', to: '/website-redesign' },
  { label: 'Blog', to: '/blog' },
]
</script>
