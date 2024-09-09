<template>
  <div class="flex flex-col w-full bg-blue-200 items-center">
    <h1 class="text-5xl font-bold text-center w-4/12 pb-6">Business Owner?</h1>
    <h2 class="text-2xl font-bold text-center w-5/12">Attract high-quality, low-cost leads with Software Tools and
      Quizzes</h2>
    <ul class="flex flex-col w-9/12 items-center mt-8">
      <li class="text-xl mt-6"><svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        Get a free 30-minute consultancy call</li>
      <li class="text-xl w-5/12 mt-6"><svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>Learn how to use quizzes to generate leads</li>
      <li class="text-xl w-5/12 mt-6"><svg class="w-3.5 h-3.5 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
          aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
          <path
            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>Get a free 30-minute consultancy call</li>
    </ul>
    <registration class="mt-14 w-4/12 p-8" button-label=" Book a consultancy call" />
  </div>
</template>
<script setup>
import Registration from './Registration.vue';
</script>