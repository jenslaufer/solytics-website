<template>
  <div class="flex flex-col w-screen h-screen bg-blue-100 font-poppins">
    <router-view class="grow pt-20" />
    <div class="sticky bottom-0 bg-slate-200 text-black text-xs p-4">
      <p>&copy; {{ year }} Solytics GmbH</p>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>