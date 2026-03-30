<template>
  <nav class="fixed top-0 left-0 right-0 z-50 glass">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="flex items-center gap-2 font-bold text-xl text-primary-600 dark:text-primary-400">
          <svg class="w-8 h-8" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="currentColor" />
            <path d="M8 22l4-12h2l4 12M10 18h6M20 10v12M20 10l4 6-4 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          Solytics
        </router-link>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-1">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="px-4 py-2 text-sm font-medium text-surface-600 hover:text-primary-600 dark:text-surface-600 dark:hover:text-primary-400 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-200 transition-colors"
          >
            {{ item.label }}
          </router-link>
          <router-link
            to="/kontakt"
            class="ml-2 px-5 py-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-[var(--radius-button)] transition-colors"
          >
            Kontakt
          </router-link>
          <button
            @click="toggle"
            class="ml-2 p-2 text-surface-500 hover:text-surface-700 dark:hover:text-surface-800 rounded-lg hover:bg-surface-100 dark:hover:bg-surface-200 transition-colors"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <svg v-if="isDark" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="5"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
            </svg>
            <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
            </svg>
          </button>
        </div>

        <!-- Mobile hamburger -->
        <button
          @click="mobileOpen = !mobileOpen"
          class="md:hidden p-2 text-surface-600 hover:text-surface-800 rounded-lg"
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
        <div v-if="mobileOpen" class="md:hidden pb-4 space-y-1">
          <router-link
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="block px-4 py-2 text-sm font-medium text-surface-600 hover:text-primary-600 rounded-lg hover:bg-surface-100 transition-colors"
            @click="mobileOpen = false"
          >
            {{ item.label }}
          </router-link>
          <router-link
            to="/kontakt"
            class="block mx-4 mt-2 px-5 py-2 text-sm font-semibold text-center text-white bg-primary-500 hover:bg-primary-600 rounded-[var(--radius-button)] transition-colors"
            @click="mobileOpen = false"
          >
            Kontakt
          </router-link>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useDarkMode } from '../composables/useDarkMode.js'

const { isDark, toggle } = useDarkMode()
const mobileOpen = ref(false)

const navItems = [
  { label: 'E-Rechnung', to: '/e-rechnung' },
  { label: 'KI-Automatisierung', to: '/ki-automatisierung' },
  { label: 'Website-Redesign', to: '/website-redesign' },
  { label: 'Blog', to: '/blog' },
]
</script>
