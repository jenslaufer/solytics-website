<template>
    <div class="flex flex-col items-center" :class="background">
        <h1 class="font-bold text-center px-2 pt-10 lg:pt-16 pb-1 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
            :class="fontColor">{{ headline }}</h1>
        <h2 class="px-4 text-xl md:text-2xl xl:text-3xl 2xl:text-4xl py-6 font-semibold text-center" :class="fontColor">
            {{ subheadline }}
        </h2>
        <p v-show="showExplainer" class="px-6 pb-4 text-gray-300 text-base font-normal w-1/1 lg:w-1/2">{{ explainer }}
        </p>
        <registration v-show="registration" class="mt-8 w-10/12 sm:w-8/12 md:w-7/12 lg:w-5/12 xl:w-4/12"
            :button-label="cta" :errorColor="errorColor" :successColor="successColor" :route="route"
            :campaign="campaign" />
        <cta v-show="!registration" :route="route" :cta="cta" />
    </div>
</template>
<script setup>
import Registration from './Registration.vue';
import Cta from './Cta.vue';

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
    },
    buttonLabel: {
        type: String
    },
    showExplainer: {
        type: Boolean
    },
    registration: {
        type: Boolean
    }
});
</script>