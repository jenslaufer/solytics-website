<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="text-center p-10 lg:p-0 min-w-sm max-w-5xl">
      <h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mt-2 lg:mt-28 font-sans-serif leading-tight">
        KI-Automatisierung für Ihr Unternehmen
      </h1>
      <h2 class="text-xl md:text-2xl xl:text-3xl font-serif lg:font-semibold mt-4 leading-tight text-gray-700">
        Wiederkehrende Aufgaben automatisieren. Mehr Zeit fürs Wesentliche.
      </h2>
      <div class="mt-6 lg:mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button @click="router.push('/appointment')"
          class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Beratungsgespräch buchen
        </button>
        <button @click="router.push('/ki-automatisierung/readiness-check')"
          class="border-2 border-red-500 text-red-500 hover:bg-red-50 font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
          Readiness-Check starten &rarr;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
