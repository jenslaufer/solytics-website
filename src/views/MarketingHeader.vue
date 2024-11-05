<template>
    <div class="flex flex-col items-center" :class="background">
        <h1 class="font-bold text-center pt-10 lg:pt-16 pb-1 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            :class="fontColor">{{
                headline }}</h1>
        <h2 class="text-xl md:text-2xl xl:text-3xl 2xl:text-4xl py-6 font-semibold text-center" :class="fontColor">{{
            subheadline }}
        </h2>
        <p class="text-gray-300 text-base font-normal w-1/2">{{ explainer }}</p>
        <registration class="mt-8 w-3/4 md:7/12 lg:w-1/2" :button-label="cta" :errorColor="errorColor"
            :successColor="successColor" :route="route" :campaign="campaign" />
    </div>
</template>
<script setup>
import Registration from './Registration.vue';

const props = defineProps({
    headline: {
        type: String
    },
    subheadline: {
        type: String
    },
    explainer: {
        type: String
    },
    cta: {
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
    route: {
        type: String
    }
});
</script>