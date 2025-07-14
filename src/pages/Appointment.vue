<template>
    <div class="flex justify-center h-screen">
        <div class="text-center lg:p-0 min-w-2xl max-w-7xl">
            <h1 class="text-xl md:text-2xl xl:text-3xl font-extrabold mt-4 mb-8 lg:mt-8 font-sans-serif leading-tight">
                Book Your Appointment
            </h1>

            <div ref="calendlyInlineWidget" class="h-[1200px] w-full" />
        </div>
    </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'

const calendlyInlineWidget = ref(null);

onMounted(() => {
    window.Calendly.initInlineWidget({
        url: 'https://calendly.com/jens-laufer-solytics/30min',
        parentElement: calendlyInlineWidget.value,
        prefill: {},
        utm: {}
    });
});
</script>