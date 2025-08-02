<template>
    <div class="flex justify-center items-center h-screen">
        <div class="text-center p-10 lg:p-0 min-w-sm max-w-5xl">
            <h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mt-2 lg:mt-28 font-sans-serif leading-tight">
                404
            </h1>
            <h2 class="text-xl md:text-2xl xl:text-3xl font-serif lg:font-semibold mt-4 leading-tight">
                Page Not Found
            </h2>
            <p class="text-lg md:text-xl text-gray-600 mt-6 mb-8 max-w-3xl mx-auto">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <div class="mt-4 lg:mt-6">
                <button @click="router.go(-1)"
                    class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                    Go Back
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>