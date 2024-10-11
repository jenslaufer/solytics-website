<template>
    <div class="flex flex-col items-center bg-[#080808]">
        <h1
            class="font-bold text-center pt-10 px-20 lg:pt-16 pb-2 text-xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-white">
            Software Development, Data Science, and Machine Learning Solutions for Startups and Enterprises
        </h1>
        <h2 class="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl p-6 font-semibold text-center">
        </h2>
    </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { useGtm } from '@gtm-support/vue-gtm'

const gtm = useGtm()

onMounted(() => {
    gtm.trackView("", `solytics/index`)
})
</script>