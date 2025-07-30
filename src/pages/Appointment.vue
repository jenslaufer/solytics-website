<template>
    <div class="flex justify-center items-start min-h-screen py-12">
        <div class="text-center p-10 lg:p-0 min-w-sm max-w-5xl w-full">
            <h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mt-2 lg:mt-8 font-sans-serif leading-tight">
                Book Your Appointment
            </h1>
            <h2
                class="text-xl md:text-2xl xl:text-3xl font-serif lg:font-semibold mt-4 mb-8 leading-tight text-gray-700">
                Let's discuss your analytics needs
            </h2>

            <div class="mt-8 lg:mt-12">
                <div ref="calendlyInlineWidget"
                    class="h-[700px] md:h-[800px] lg:h-[900px] w-full max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden" />
            </div>
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