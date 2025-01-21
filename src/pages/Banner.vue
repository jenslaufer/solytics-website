<template>
  <div class="flex flex-col items-center grow" :class="background">
    <h1 class="font-bold text-center px-4 pt-10 pb-1 text-7xl" :class="fontColor">{{ headline }}</h1>
    <h2 class="px-6 text-3xl pt-4 font-semibold text-center" :class="fontColor">
      {{ subheadline }}
    </h2>
    <p class="mt-6 inline-block px-6 py-3 bg-red-600 text-white font-semibold text-3xl rounded-md">
      {{ cta }}
    </p>
  </div>
</template>
<script setup>
import { ref } from 'vue'

import { useRoute, useRouter } from 'vue-router'
const $route = useRoute()
const $router = useRouter()

const props = defineProps({
  content: {
    type: Array,
    default: () => []
  },
  buttonLabel: {
    type: String
  },
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
  campaign: {
    type: String
  },
  showExplainer: {
    type: Boolean,
    default: true
  },
  registration: {
    type: Boolean,
    default: false
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})

const headline = ref("")
const subheadline = ref("")
const explainer = ref("")
const cta = ref("")
const url = ref("")

try {
  headline.value = props.content[$route.params.id].headline
  subheadline.value = props.content[$route.params.id].subheadline
  explainer.value = props.content[$route.params.id].explainer
  cta.value = props.content[$route.params.id].cta
  url.value = props.content[$route.params.id].url
} catch (error) {
  $router.push('/not-found')
}

</script>