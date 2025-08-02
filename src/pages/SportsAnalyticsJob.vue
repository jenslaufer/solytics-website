<template>
    <div class="flex justify-center items-center min-h-screen py-12">
        <div class="text-center p-10 lg:p-0 min-w-sm max-w-5xl">
            <!-- Header Section -->
            <div class="mb-16">
                <h1 class="text-3xl md:text-4xl xl:text-5xl font-extrabold mt-2 font-sans-serif leading-tight">
                    📊 Join Solytics GmbH
                </h1>
                <h2 class="text-xl md:text-2xl xl:text-3xl font-serif lg:font-semibold mt-4 leading-tight">
                    Data Analyst / Data Scientist
                </h2>
                <h3 class="text-lg md:text-xl text-gray-700 mt-2">{{ type }}</h3>
                <p class="text-sm mt-4 text-gray-500 font-medium">
                    Freelance • Remote • Flexible • Project-based
                </p>
            </div>

            <!-- Content Sections -->
            <div class="space-y-12 text-left max-w-4xl mx-auto">

                <!-- About the Role -->
                <section class="text-center">
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">🚀 About the Role</h3>
                    <div class="text-gray-700 text-base md:text-lg leading-relaxed space-y-4">
                        <p>
                            At Solytics GmbH, we're building a talent pool for upcoming collaborations with football and
                            ice
                            hockey clubs — from top-tier organizations to ambitious smaller teams.
                            We're actively working on partnerships in <strong>player analysis, scouting</strong>, and
                            the
                            creation of <strong>social media articles and visualizations</strong>.
                        </p>
                        <p>
                            We want to be ready with the right people when these opportunities turn into concrete
                            assignments.
                        </p>
                    </div>
                </section>

                <!-- Who We're Looking For -->
                <section class="text-center">
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">🔍 Who We're Looking For</h3>
                    <div class="text-gray-700 text-base md:text-lg leading-relaxed">
                        <div class="bg-gray-50 rounded-lg p-6 text-left">
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>No polished CVs needed — show us what you've built.</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span><strong>Reference projects</strong> on GitHub, dashboards, blog posts, or
                                        prototypes.</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>You might be a freelancer, a student with side projects, or changing fields —
                                        as long as you're practical, curious, and hands-on.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Skills -->
                <section class="text-center">
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">🧰 Skills That Fit</h3>
                    <p class="text-gray-600 mb-6 text-lg">(Pick your stack)</p>
                    <div class="text-gray-700 text-base md:text-lg leading-relaxed">
                        <div class="bg-gray-50 rounded-lg p-6 text-left">
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span><strong>R:</strong> tidyverse, dplyr, ggplot2, tidymodels, Shiny</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span><strong>Python:</strong> polars, pandas, numpy, scikit-learn, Streamlit</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span><strong>Visualization:</strong> PowerBI, Tableau, Shiny, Streamlit, custom
                                        dashboards</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span><strong>Version control:</strong> Git, GitHub, Gitlab</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>Anything else useful? Don't be shy — show us.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- Example Areas -->
                <section class="text-center">
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">🧠 Example Areas You Might Work On
                    </h3>
                    <div class="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
                        <div class="bg-gray-50 rounded-lg p-6 text-left">
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>Dashboards for scouting or performance trends</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>Reports on team or player development</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>Articles and visualizations for clubs' social media channels</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>Tools that turn raw sports data into insight</span>
                                </li>
                            </ul>
                        </div>
                        <p class="text-center">
                            We're currently building relationships and preparing for projects with clubs — and we want
                            you on the team when it happens.
                        </p>
                    </div>
                </section>

                <!-- How to Apply -->
                <section class="text-center">
                    <h3 class="text-2xl md:text-3xl font-bold mb-6 text-gray-800">📬 How to Apply</h3>
                    <div class="text-gray-700 text-base md:text-lg leading-relaxed space-y-6">
                        <p class="text-lg font-medium">Send a quick message with:</p>
                        <div class="bg-gray-50 rounded-lg p-6 text-left">
                            <ul class="space-y-3">
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>A short intro</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-red-500 mr-3 mt-1">•</span>
                                    <span>Links to your GitHub, Blogs, Dashboards, or anything that shows your
                                        work</span>
                                </li>
                            </ul>
                        </div>

                        <!-- Email Input and CTA -->
                        <div class="mt-8 space-y-4">
                            <div v-if="!formSent" class="max-w-md mx-auto">
                                <input v-model="emailInput" type="email" placeholder="Enter your email address"
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                    :class="{ 'border-red-500': v$.emailInput.$error }" />
                                <p v-if="v$.emailInput.$error" class="text-red-500 text-sm mt-2">
                                    Please enter a valid email address
                                </p>
                            </div>

                            <div v-if="!formSent">
                                <button @click="submitEmail" :disabled="v$.emailInput.$invalid"
                                    class="bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-8 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-lg">
                                    Get In Touch
                                </button>
                            </div>

                            <div v-if="message" class="text-center">
                                <p class="text-lg font-medium" :class="formSent ? 'text-green-600' : 'text-red-600'">
                                    {{ message }}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { required, email } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import axios from 'axios'

const props = defineProps({
    type: {
        type: String
    },
    product: {
        type: String,
        default: 'sports-analytics-job'
    }
})

const FORM_SENT_EVENT = 'formSent'

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
    v$.value.$touch()
    if (v$.value.$invalid) {
        return
    }

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