<template>
  <div class="flex flex-col items-center" :class="background">
    <h1 class="font-bold text-center pt-10 lg:pt-16 pb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      :class="fontColor">{{
        headline }}</h1>
    <h2 class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-6 font-semibold text-center"
      :class="fontColor">{{ subheadline }}
    </h2>
    <registration class="mt-8" button-label="Book a consultancy call" :errorColor="errorColor"
      :successColor="successColor" campaign="tool-funnel" />
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Registration from './Registration.vue';

const $route = useRoute()
const $router = useRouter()

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

const headline = ref('')
const subheadline = ref('')

try {
  headline.value = props.content[$route.params.id].headline
  subheadline.value = props.content[$route.params.id].subheadline
} catch (error) {
  $router.push('/not-found')
}
</script>