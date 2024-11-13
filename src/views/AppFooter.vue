<template>
    <div class="sticky flex bottom-0 gap-4 bg-slate-100 text-slate-600 text-xs italic p-3">
        <p>&copy; {{ year }} Solytics GmbH</p>
        <a href="#/impressum" class="hover:text-black">Impressum</a>
    </div>
</template>
<script setup>
import { ref } from 'vue';
const year = ref(new Date().getFullYear());
</script>