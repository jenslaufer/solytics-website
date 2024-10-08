<template>
  <div class="flex flex-col items-center" :class="background">
    <h1 class="font-bold text-center pt-10 lg:pt-16 pb-2 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
      :class="fontColor">{{
        headline }}</h1>
    <h2 class="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl p-6 font-semibold text-center" :class="fontColor">{{
      subheadline }}
    </h2>
    <registration class="mt-8 w-3/4 md:7/12 lg:w-1/2" :button-label="cta" :errorColor="errorColor"
      :successColor="successColor" :route="route" :campaign="campaign" />
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Registration from './Registration.vue';
import { useGtm } from '@gtm-support/vue-gtm'

const $route = useRoute()
const $router = useRouter()
const gtm = useGtm()

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
  },
  campaign: {
    type: String
  },
  route: {
    type: String
  }
});

const headline = ref(0)
const subheadline = ref(0)
const cta = ref(0)

try {
  headline.value = props.content[$route.params.id].headline
  subheadline.value = props.content[$route.params.id].subheadline
  cta.value = props.content[$route.params.id].cta
} catch (error) {
  $router.push('/not-found')
}

onMounted(() => {
  gtm.trackView("", `solytics${$route.path}`)
});
</script>