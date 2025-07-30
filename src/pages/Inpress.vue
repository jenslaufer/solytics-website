<template>
    <div class="flex justify-center items-center h-screen">
        <div class="text-center">
            <h1
                class="font-bold text-center pt-10 lg:pt-16 pb-2 text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white">
                Impressum</h1>
            <p class="text-2xl mt-4">{{ name }}</p>
            <p class="mt-2">{{ address }}</p>
            <p class="mt-2">{{ zip }} {{ city }}</p>
            <p class="mt-2">{{ country }}</p>
            <p class="mt-2">Email: {{ email }}</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
            <p class="mt-2">{{ handelsregister }}<br />
                {{ amtsgericht }}</p>

            <p class="mt-2 mb-10"><strong>Vertreten durch:</strong><br />
                {{ vertreter }}</p>

            <a @click="router.go(-1)"
                class="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                Go Back
            </a>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()



const props = defineProps({
    name: {
        type: String
    },
    address: {
        type: String
    },
    zip: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    email: {
        type: String
    },
    handelsregister: {
        type: String
    },
    amtsgericht: {
        type: String
    },
    vertreter: {
        type: String
    }
});

</script>