<template>
    <div class="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 px-4">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
                    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <h1 class="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                    Cook something real with what you've got.
                </h1>
                <h2 class="text-xl md:text-2xl text-gray-600 mb-8">
                    One textbox. No fluff. Just a recipe that fits your fridge.
                </h2>
            </div>

            <!-- Main Content Card -->
            <div class="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <!-- Benefits Section -->
                <div class="p-8">
                    <div class="flex items-center mb-6">
                        <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-lg">✨</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900">Why You'll Love It</h3>
                    </div>

                    <div class="space-y-4 mb-8">
                        <div
                            class="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                            <div
                                class="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-gray-700 leading-relaxed">Always know what to cook—even when the fridge
                                looks empty</span>
                        </div>

                        <div
                            class="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                            <div
                                class="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-gray-700 leading-relaxed">Turn random leftovers into real, satisfying
                                meals</span>
                        </div>

                        <div
                            class="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                            <div
                                class="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-gray-700 leading-relaxed">Stop wasting food—use what's already in your
                                kitchen</span>
                        </div>

                        <div
                            class="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                            <div
                                class="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-gray-700 leading-relaxed">Save money by skipping that "just one more
                                thing" grocery run</span>
                        </div>

                        <div
                            class="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200">
                            <div
                                class="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                                <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clip-rule="evenodd" />
                                </svg>
                            </div>
                            <span class="text-gray-700 leading-relaxed">No more dinner stress—just type ingredients and
                                get a recipe</span>
                        </div>
                    </div>
                </div>

                <!-- Email Signup Section -->
                <div class="bg-gradient-to-r from-amber-50 to-orange-50 px-8 py-8 border-t border-gray-100">
                    <div class="flex items-center justify-center mb-6">
                        <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                            <span class="text-lg">🔔</span>
                        </div>
                        <h3 class="text-xl font-bold text-gray-900">Get notified when we are live</h3>
                    </div>

                    <div class="max-w-md mx-auto">
                        <div v-if="message" :class="formSent ? 'text-green-600' : 'text-red-600'"
                            class="text-center font-medium mb-4 p-3 rounded-lg bg-white border border-gray-200">
                            {{ message }}
                        </div>

                        <div class="space-y-4">
                            <input type="email" placeholder="Your email" v-model="emailInput"
                                class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:ring-0 text-gray-900 placeholder-gray-500 transition-colors duration-200" />

                            <button @click="submitEmail" :disabled="v$.$invalid || formSent"
                                class="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 px-6 rounded-xl hover:from-orange-600 hover:to-red-600 focus:outline-none focus:ring-4 focus:ring-orange-500/25 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]">
                                <span class="flex items-center justify-center">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 17h5l-5 5m0 0l-5-5m5 5V3" />
                                    </svg>
                                    Notify me
                                </span>
                            </button>
                        </div>

                        <p class="text-sm text-gray-600 text-center mt-4">No spam. Just one email when it's ready.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue'
import { required, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import axios from 'axios'

const FORM_SENT_EVENT = 'formSent'

const props = defineProps({
    product: {
        type: String,
        default: 'recipe-radar'
    }
})

const emit = defineEmits([FORM_SENT_EVENT])

const emailInput = ref('')

const rules = {
    emailInput: { required, email }
}

const message = ref('')
const formSent = ref(false)

const v$ = useVuelidate(rules, { emailInput })

onMounted(() => {
    v$.value.$touch()
})

const submitEmail = async () => {
    // Handle email submission logic here
    console.log('Email submitted');
    try {
        const response = await axios.post(`${import.meta.env.VITE_API_BASE}/user`, {
            key: crypto.randomUUID(),
            credentials: {
                email: emailInput.value,
                product: props.product
            }
        });
        if (response.status === 201) {
            emit(FORM_SENT_EVENT, emailInput.value);
            message.value = 'Thank you! You will be notified as soon as we go live.';
        }
        formSent.value = true
    } catch (err) {
        message.value = `An unknown error occurred: ${err.message}`;
    }
};
</script>