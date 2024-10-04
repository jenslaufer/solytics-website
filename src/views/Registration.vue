<template>
    <div class="flex flex-col">
        <h1 class="text-2xl font-semibold mb-6 text-center" v-if="title != ''">{{ title }}</h1>
        <p class="font-bold mb-2" v-if="error" :class="error ? errorColor : successColor">{{ message }}</p>
        <fwb-input v-model="email" placeholder="Your Email Address" label="Email" size="lg"
            :validation-status="v$.$invalid ? 'error' : 'null'" class="mb-4" />
        <fwb-button @click="register" :disabled="v$.$invalid" :pill="true" color="yellow" size="xl">{{ buttonLabel
            }}</fwb-button>
    </div>
</template>
<script setup>
import { router } from '../router'
import { useVuelidate } from '@vuelidate/core'
import { required, email as emailValidation } from '@vuelidate/validators'
import { ref } from 'vue'
import axios from 'axios'
import { FwbInput, FwbButton } from 'flowbite-vue'

const props = defineProps({
    buttonLabel: {
        type: String,
        default: 'Register'
    },
    title: {
        type: String,
        default: ''
    },
    errorColor: {
        type: String
    },
    successColor: {
        type: String
    },
    campaign: {
        type: String
    },
    route: {
        type: String
    }
}
)

const email = ref('')
const message = ref('')
const error = ref(false)

const rules = { email: { required, emailValidation } }

const v$ = useVuelidate(rules, { email })

const register = () => {
    axios.post(`${import.meta.env.VITE_API_BASE}/user`, { email: email.value, campaign: "tool-funnel" })
        .then((response) => {
            error.value = false
            message.value = 'Registered successfully'
            router.push(props.route)
        })
        .catch((err) => {
            error.value = true
            if (err.response && err.response.status === 422) {
                message.value = `Already registered`
            } else {
                message.value = `An error occurred: ${err.message}`
            }
        })
}
</script>