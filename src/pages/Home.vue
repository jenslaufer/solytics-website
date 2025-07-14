<template>
  <div class="flex justify-center h-screen">
    <div class="text-center p-10 lg:p-0 min-w-sm max-w-5xl">
      <h1 class="text-2xl md:text-4xl xl:text-5xl font-extrabold mt-2 lg:mt-28 font-sans-serif leading-tight">
        {{ currentHeadline.headline }}
      </h1>
      <h1 class="text-xl md:text-xl xl:text-2xl font-normal lg:font-semibold mt-4 leading-tight">
        {{ currentHeadline.subheadline }}
      </h1>
      <div class="mt-4 lg:mt-6">
        <button @click="router.push('/appointment')"
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          {{ currentHeadline.cta }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const props = defineProps({
  headlines: {
    type: Array
  }
})

const router = useRouter()
const currentIndex = ref(0)
let intervalId = null

const currentHeadline = computed(() => {
  if (!props.headlines || props.headlines.length === 0) {
    return { headline: '', subheadline: '', cta: '' }
  }
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