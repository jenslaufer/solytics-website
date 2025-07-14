<template>
    <div class="flex justify-between items-center">
        <div class="flex gap-2">
            <a href="#/" class="hover:text-black">Home</a> |
            <a href="#/impressum" class="hover:text-black">Impressum</a> |
            <a href="#/datenschutzerklaerung" class="hover:text-black">Datenschutzerklärung</a>
        </div>
        <p class="text-right">&copy; {{ year }}&nbsp;<a href="/#">Solytics GmbH</a></p>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const year = ref(new Date().getFullYear());
</script>