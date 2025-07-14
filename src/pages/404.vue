<template>
    <div class="min-h-screen flex justify-center bg-gray-100">
        <div class="text-center px-4">
            <h1 class="text-6xl font-bold text-gray-900 mb-4">404</h1>
            <h2 class="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
            <p class="text-gray-600 mb-8">
                The page you are looking for doesn't exist or has been moved.
            </p>
            <router-link :to="router.go(-1)"
                class="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                Go Back Home
            </router-link>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
</script>