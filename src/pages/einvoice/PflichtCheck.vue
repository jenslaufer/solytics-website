<template>
  <MainLayout>
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-2xl mx-auto">
        <h1 class="heading-lg text-ink text-center mb-2">
          E-Rechnungspflicht-Check
        </h1>
        <p class="text-center body-md text-muted mb-8">
          Finden Sie in 4 Schritten heraus, ob Ihr Unternehmen E-Rechnung braucht.
        </p>

        <!-- Progress Bar -->
        <div class="mb-8">
          <div class="flex justify-between text-sm text-muted mb-1">
            <span>Schritt {{ showResult ? 4 : step }} von 4</span>
            <span>{{ Math.round((showResult ? 4 : step) / 4 * 100) }}%</span>
          </div>
          <div class="w-full bg-border rounded-full h-2">
            <div class="bg-accent h-2 rounded-full transition-all duration-500"
              :style="{ width: ((showResult ? 4 : step) / 4 * 100) + '%' }" />
          </div>
        </div>

        <!-- Step 1: Rechtsform -->
        <transition name="fade" mode="out-in">
          <div v-if="step === 1 && !showResult" key="step1" class="bg-warm-gray rounded-md p-6">
            <h2 class="heading-md text-ink mb-4">Welche Rechtsform hat Ihr Unternehmen?</h2>
            <div class="grid gap-3">
              <button v-for="option in rechtsformen" :key="option" @click="answers.rechtsform = option; step = 2"
                class="text-left px-4 py-3 rounded-md border-2 transition body-md text-muted hover:border-accent hover:bg-accent-light"
                :class="answers.rechtsform === option ? 'border-accent bg-accent-light' : 'border-border'">
                {{ option }}
              </button>
            </div>
          </div>

          <!-- Step 2: B2B -->
          <div v-else-if="step === 2 && !showResult" key="step2" class="bg-warm-gray rounded-md p-6">
            <h2 class="heading-md text-ink mb-4">Stellen Sie B2B-Rechnungen aus?</h2>
            <div class="grid gap-3">
              <button v-for="option in b2bOptions" :key="option" @click="answers.b2b = option; step = 3"
                class="text-left px-4 py-3 rounded-md border-2 transition body-md text-muted hover:border-accent hover:bg-accent-light"
                :class="answers.b2b === option ? 'border-accent bg-accent-light' : 'border-border'">
                {{ option }}
              </button>
            </div>
            <button @click="step = 1" class="mt-4 text-sm text-muted hover:text-ink">&larr; Zurück</button>
          </div>

          <!-- Step 3: Umsatz -->
          <div v-else-if="step === 3 && !showResult" key="step3" class="bg-warm-gray rounded-md p-6">
            <h2 class="heading-md text-ink mb-4">Wie hoch ist Ihr Jahresumsatz?</h2>
            <div class="grid gap-3">
              <button v-for="option in umsatzOptions" :key="option" @click="answers.umsatz = option; step = 4"
                class="text-left px-4 py-3 rounded-md border-2 transition body-md text-muted hover:border-accent hover:bg-accent-light"
                :class="answers.umsatz === option ? 'border-accent bg-accent-light' : 'border-border'">
                {{ option }}
              </button>
            </div>
            <button @click="step = 2" class="mt-4 text-sm text-muted hover:text-ink">&larr; Zurück</button>
          </div>

          <!-- Step 4: Aktuelle Rechnungsstellung -->
          <div v-else-if="step === 4 && !showResult" key="step4" class="bg-warm-gray rounded-md p-6">
            <h2 class="heading-md text-ink mb-4">Wie stellen Sie aktuell Rechnungen?</h2>
            <div class="grid gap-3">
              <button v-for="option in rechnungOptions" :key="option" @click="answers.rechnung = option; evaluate()"
                class="text-left px-4 py-3 rounded-md border-2 transition body-md text-muted hover:border-accent hover:bg-accent-light"
                :class="answers.rechnung === option ? 'border-accent bg-accent-light' : 'border-border'">
                {{ option }}
              </button>
            </div>
            <button @click="step = 3" class="mt-4 text-sm text-muted hover:text-ink">&larr; Zurück</button>
          </div>

          <!-- Result -->
          <div v-else-if="showResult" key="result" class="bg-warm-gray rounded-md p-6">
            <div class="text-center mb-6">
              <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" :class="resultColor.bg">
                <svg v-if="urgencyLevel === 'high'" class="w-10 h-10 text-urgency" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"/></svg>
                <svg v-else-if="urgencyLevel === 'medium'" class="w-10 h-10 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"/></svg>
                <svg v-else class="w-10 h-10 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h2 class="text-2xl font-bold" :class="resultColor.text">{{ result.level }}</h2>
            </div>

            <p class="body-md text-muted mb-6 leading-relaxed">{{ result.text }}</p>

            <div v-if="result.actions.length" class="mb-6">
              <h3 class="font-bold text-ink mb-2">Empfohlene Schritte:</h3>
              <ul class="space-y-2">
                <li v-for="action in result.actions" :key="action" class="flex items-start gap-2">
                  <span class="block w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0"></span>
                  <span class="body-md text-muted">{{ action }}</span>
                </li>
              </ul>
            </div>

            <div class="flex flex-col sm:flex-row gap-3 mt-8">
              <router-link to="/kontakt"
                class="cta-button flex-1 text-center bg-accent hover:bg-accent-hover text-white font-semibold py-3 px-6 rounded-md">
                Compliance-Check anfragen
              </router-link>
              <router-link to="/e-rechnung#pakete"
                class="flex-1 text-center border-2 border-accent text-accent hover:bg-accent-light font-semibold py-3 px-6 rounded-md transition-colors">
                Consulting-Pakete
              </router-link>
            </div>

            <button @click="reset()" class="mt-4 w-full text-sm text-muted hover:text-ink">
              Nochmal starten
            </button>
          </div>
        </transition>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import { ref, reactive } from 'vue'
import MainLayout from '../../layouts/MainLayout.vue'
import { useHead } from '../../composables/useHead.js'

useHead({
  title: 'E-Rechnungspflicht-Check — Solytics',
  description: 'Finden Sie heraus, ob und wann Ihr Unternehmen die E-Rechnungspflicht betrifft.',
})

const step = ref(1)
const showResult = ref(false)
const result = ref({ level: '', text: '', actions: [] })
const urgencyLevel = ref('')

const answers = reactive({
  rechtsform: '',
  b2b: '',
  umsatz: '',
  rechnung: '',
})

const rechtsformen = ['GmbH', 'AG', 'KG', 'OHG', 'GbR', 'Einzelunternehmen', 'Freiberufler', 'UG (haftungsbeschränkt)', 'Sonstige']
const b2bOptions = ['Ja', 'Nein', 'Teilweise']
const umsatzOptions = ['Unter 250.000 €', '250.000 € – 800.000 €', 'Über 800.000 €']
const rechnungOptions = ['Papier', 'PDF per E-Mail', 'E-Rechnung (XRechnung/ZUGFeRD)', 'Mix aus allem']

const resultColor = ref({ bg: '', text: '' })

function evaluate() {
  let u = 0
  if (answers.b2b === 'Ja') u += 3
  else if (answers.b2b === 'Teilweise') u += 2

  if (answers.umsatz === 'Über 800.000 €') u += 3
  else if (answers.umsatz === '250.000 € – 800.000 €') u += 2
  else u += 1

  if (answers.rechnung === 'Papier') u += 3
  else if (answers.rechnung === 'PDF per E-Mail') u += 2
  else if (answers.rechnung === 'Mix aus allem') u += 2

  if (['GmbH', 'AG', 'UG (haftungsbeschränkt)', 'KG', 'OHG'].includes(answers.rechtsform)) u += 1

  if (u >= 7) {
    urgencyLevel.value = 'high'
    result.value = {
      level: 'Handlungsbedarf: Hoch',
      text: `Als ${answers.rechtsform} mit B2B-Rechnungen und Ihrem aktuellen Rechnungsformat besteht dringender Handlungsbedarf. Ab dem 01.01.2025 müssen alle B2B-Unternehmen E-Rechnungen empfangen können. Die Versandpflicht folgt stufenweise.`,
      actions: ['E-Rechnungsfähigkeit sofort herstellen', 'Rechnungssoftware auf XRechnung/ZUGFeRD umstellen', 'Mitarbeiter schulen', 'Prozesse für Eingang und Versand definieren'],
    }
    resultColor.value = { bg: 'bg-urgency-light', text: 'text-urgency' }
  } else if (u >= 4) {
    urgencyLevel.value = 'medium'
    result.value = {
      level: 'Handlungsbedarf: Mittel',
      text: 'Ihr Unternehmen sollte sich zeitnah mit dem Thema E-Rechnung befassen. Auch wenn nicht alle Ihre Rechnungen betroffen sind, wird die E-Rechnungspflicht schrittweise ausgeweitet.',
      actions: ['Empfangsfähigkeit für E-Rechnungen sicherstellen', 'Bestandsaufnahme der aktuellen Rechnungsprozesse', 'Software-Optionen evaluieren', 'Übergangsfristen im Blick behalten'],
    }
    resultColor.value = { bg: 'bg-yellow-100', text: 'text-yellow-700' }
  } else {
    urgencyLevel.value = 'low'
    result.value = {
      level: 'Handlungsbedarf: Gering',
      text: 'Basierend auf Ihren Angaben ist der unmittelbare Handlungsbedarf gering. Dennoch sollten Sie die Entwicklung beobachten — die E-Rechnungspflicht wird schrittweise ausgeweitet.',
      actions: ['Gesetzliche Entwicklungen beobachten', 'Empfangsfähigkeit für E-Rechnungen vorbereiten', 'Bei Wachstum erneut prüfen'],
    }
    resultColor.value = { bg: 'bg-success-light', text: 'text-success' }
  }

  showResult.value = true
}

function reset() {
  step.value = 1
  showResult.value = false
  answers.rechtsform = ''
  answers.b2b = ''
  answers.umsatz = ''
  answers.rechnung = ''
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
