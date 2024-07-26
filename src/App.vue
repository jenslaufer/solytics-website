<template>
  <div class="flex flex-col w-screen h-screen font-poppins">
    <router-view class="grow pt-20" />
    <div class="sticky bottom-0 flex gap-3 bg-slate-100 text-slate-600 text-xs italic p-3">
      <p>&copy; {{ year }} Solytics GmbH</p>
      <a href="" class="hover:text-black">Impressum</a>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const year = ref(new Date().getFullYear());
</script>