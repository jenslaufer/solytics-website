<template>
  <marketing-header :headline="headline" :subheadline="subheadline" :cta="cta" :errorColor="errorColor"
    :successColor="successColor" :background="background" :fontColor="fontColor" :content="content" :route="route"
    :campaign="campaign" />
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useGtm } from '@gtm-support/vue-gtm'
import MarketingHeader from '../views/MarketingHeader.vue';

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