<template>
  <marketing-header :headline="headline" :subheadline="subheadline" :explainer="explainer" :cta="cta"
    :errorColor="errorColor" :successColor="successColor" :background="background" :fontColor="fontColor" :route="url"
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
  }
});

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

onMounted(() => {
  gtm.trackView("", `solytics${$route.path}`)
});
</script>