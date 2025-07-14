<template>
  <router-view class="z-101" />
  <app-footer
    class="fixed bottom-0 left-0 right-0 gap-4 bg-slate-100 text-slate-700 font-normal text-xs p-3 font-sans-serif" />

</template>
<script setup>
import AppFooter from './pages/partials/AppFooter.vue'
</script>