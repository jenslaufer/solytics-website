<template>
  <div class="flex flex-col w-screen h-screen font-poppins">
    <router-view class="grow" />
    <app-footer />
  </div>
</template>
<script setup>
import AppFooter from './views/AppFooter.vue';
</script>