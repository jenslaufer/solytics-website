<template>
  <div class="flex justify-center h-screen">
    <div class="text-center min-w-xl max-w-4xl">
      <h1 class="text-3xl md:text-5xl font-extrabold mt-8 lg:mt-40 font-sans-serif">
        {{ currentHeadline.headline }}
      </h1>
      <h1 class="text-xl md:text-2xl font-semibold mt-2 font-serif mb-4">
        {{ currentHeadline.subheadline }}
      </h1>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  headlines: {
    type: Array,
    default: () => [
      { headline: 'Solytics GmbH', subheadline: 'In Data we Trust' }
    ]
  }
})

const router = useRouter()
const currentIndex = ref(0)
let intervalId = null

const currentHeadline = computed(() => {
  return props.headlines[currentIndex.value] || props.headlines[0]
})

onMounted(() => {
  if (props.headlines.length > 1) {
    intervalId = setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % props.headlines.length
    }, 10000)
  }
})

onUnmounted(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>