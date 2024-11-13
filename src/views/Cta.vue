<template>
    <a :href="route"
        class="mt-6 inline-block px-6 py-3 bg-red-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
        {{ cta }}
    </a>
</template>
<script setup>

const props = defineProps({
    cta: {
        type: String
    },
    route: {
        type: String
    },
})
</script>