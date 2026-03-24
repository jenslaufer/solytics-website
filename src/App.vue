<template>
  <router-view />
</template>

<script setup>
import { useDarkMode } from './composables/useDarkMode.js'

const { init } = useDarkMode()
init()
</script>
