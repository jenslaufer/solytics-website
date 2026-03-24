import { ref, watchEffect } from 'vue'

const isDark = ref(false)

export function useDarkMode() {
  function init() {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDark.value = true
    }
  }

  watchEffect(() => {
    document.documentElement.classList.toggle('dark', isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  })

  function toggle() {
    isDark.value = !isDark.value
  }

  return { isDark, toggle, init }
}
