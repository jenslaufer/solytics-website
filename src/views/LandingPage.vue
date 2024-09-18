<template>
  <div class="flex flex-col bg-blue-200 items-center" :class="background">
    <h1 class="font-bold text-center pt-10 lg:pt-16 pb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      :class="fontColor">{{
        content[$route.params.id].headline }}</h1>
    <h2 class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-6 font-semibold text-center"
      :class="fontColor">{{
        content[$route.params.id].subheadline }}
    </h2>
    <registration class="mt-8" button-label="Book a consultancy call" :errorColor="errorColor"
      :successColor="successColor" />
  </div>
</template>
<script setup>
import Registration from './Registration.vue';
const props = defineProps({
  errorColor: {
    type: String
  },
  successColor: {
    type: String
  },
  background: {
    type: String
  },
  fontColor: {
    type: String
  },
  content: {
    type: Array,
    default: () => []
  }
});
</script>