<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold font-sans-serif text-center mb-2">
        E-Rechnungspflicht-Check
      </h1>
      <p class="text-center text-gray-600 font-serif mb-8">
        Finden Sie in 4 Schritten heraus, ob Ihr Unternehmen E-Rechnung braucht.
      </p>

      <!-- Progress Bar -->
      <div class="mb-8">
        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>Schritt {{ showResult ? 4 : step }} von 4</span>
          <span>{{ Math.round((showResult ? 4 : step) / 4 * 100) }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-red-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: ((showResult ? 4 : step) / 4 * 100) + '%' }" />
        </div>
      </div>

      <!-- Step 1: Rechtsform -->
      <transition name="fade" mode="out-in">
        <div v-if="step === 1 && !showResult" key="step1" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">Welche Rechtsform hat Ihr Unternehmen?</h2>
          <div class="grid gap-3">
            <button v-for="option in rechtsformen" :key="option" @click="answers.rechtsform = option; step = 2"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.rechtsform === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
        </div>

        <!-- Step 2: B2B -->
        <div v-else-if="step === 2 && !showResult" key="step2" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">Stellen Sie B2B-Rechnungen aus?</h2>
          <div class="grid gap-3">
            <button v-for="option in b2bOptions" :key="option" @click="answers.b2b = option; step = 3"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.b2b === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
          <button @click="step = 1" class="mt-4 text-sm text-gray-500 hover:text-gray-700">&larr; Zurück</button>
        </div>

        <!-- Step 3: Umsatz -->
        <div v-else-if="step === 3 && !showResult" key="step3" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">Wie hoch ist Ihr Jahresumsatz?</h2>
          <div class="grid gap-3">
            <button v-for="option in umsatzOptions" :key="option" @click="answers.umsatz = option; step = 4"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.umsatz === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
          <button @click="step = 2" class="mt-4 text-sm text-gray-500 hover:text-gray-700">&larr; Zurück</button>
        </div>

        <!-- Step 4: Aktuelle Rechnungsstellung -->
        <div v-else-if="step === 4 && !showResult" key="step4" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">Wie stellen Sie aktuell Rechnungen?</h2>
          <div class="grid gap-3">
            <button v-for="option in rechnungOptions" :key="option" @click="answers.rechnung = option; evaluate()"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.rechnung === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
          <button @click="step = 3" class="mt-4 text-sm text-gray-500 hover:text-gray-700">&larr; Zurück</button>
        </div>

        <!-- Result -->
        <div v-else-if="showResult" key="result" class="bg-white rounded-xl shadow p-6">
          <div class="text-center mb-6">
            <div class="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
              :class="resultColor.bg">
              <span class="text-4xl">{{ resultColor.icon }}</span>
            </div>
            <h2 class="text-2xl font-bold" :class="resultColor.text">{{ result.level }}</h2>
          </div>

          <p class="text-gray-700 mb-6 leading-relaxed">{{ result.text }}</p>

          <div v-if="result.actions.length" class="mb-6">
            <h3 class="font-bold mb-2">Empfohlene Schritte:</h3>
            <ul class="space-y-2">
              <li v-for="action in result.actions" :key="action" class="flex items-start gap-2">
                <span class="text-red-500 mt-0.5">&#10003;</span>
                <span class="text-gray-700">{{ action }}</span>
              </li>
            </ul>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 mt-8">
            <a href="#/kontakt"
              class="flex-1 text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition">
              Compliance-Check anfragen
            </a>
            <a href="#/e-rechnung#pakete"
              class="flex-1 text-center border-2 border-red-500 text-red-500 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition">
              Consulting-Pakete
            </a>
          </div>

          <button @click="reset()" class="mt-4 w-full text-sm text-gray-500 hover:text-gray-700">
            Nochmal starten
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

onMounted(() => {
  document.title = 'E-Rechnungspflicht-Check — Braucht Ihr Unternehmen E-Rechnung?'
})

const step = ref(1)
const showResult = ref(false)
const result = ref({ level: '', text: '', actions: [] })

const answers = reactive({
  rechtsform: '',
  b2b: '',
  umsatz: '',
  rechnung: ''
})

const rechtsformen = ['GmbH', 'AG', 'KG', 'OHG', 'GbR', 'Einzelunternehmen', 'Freiberufler', 'UG (haftungsbeschränkt)', 'Sonstige']
const b2bOptions = ['Ja', 'Nein', 'Teilweise']
const umsatzOptions = ['Unter 250.000 €', '250.000 € – 800.000 €', 'Über 800.000 €']
const rechnungOptions = ['Papier', 'PDF per E-Mail', 'E-Rechnung (XRechnung/ZUGFeRD)', 'Mix aus allem']

const resultColor = ref({ bg: '', text: '', icon: '' })

function evaluate() {
  let urgency = 0

  // B2B is the primary driver
  if (answers.b2b === 'Ja') urgency += 3
  else if (answers.b2b === 'Teilweise') urgency += 2
  else urgency += 0

  // Higher revenue = higher urgency
  if (answers.umsatz === 'Über 800.000 €') urgency += 3
  else if (answers.umsatz === '250.000 € – 800.000 €') urgency += 2
  else urgency += 1

  // Current invoicing method
  if (answers.rechnung === 'Papier') urgency += 3
  else if (answers.rechnung === 'PDF per E-Mail') urgency += 2
  else if (answers.rechnung === 'Mix aus allem') urgency += 2
  else urgency += 0

  // Legal form relevance
  if (['GmbH', 'AG', 'UG (haftungsbeschränkt)', 'KG', 'OHG'].includes(answers.rechtsform)) urgency += 1

  if (urgency >= 7) {
    result.value = {
      level: 'Handlungsbedarf: Hoch',
      text: `Als ${answers.rechtsform} mit B2B-Rechnungen und Ihrem aktuellen Rechnungsformat besteht dringender Handlungsbedarf. Ab dem 01.01.2025 müssen alle B2B-Unternehmen in Deutschland E-Rechnungen empfangen können. Die Pflicht zum Versand wird stufenweise eingeführt.`,
      actions: [
        'E-Rechnungsfähigkeit sofort herstellen',
        'Rechnungssoftware auf XRechnung/ZUGFeRD umstellen',
        'Mitarbeiter schulen',
        'Prozesse für Eingang und Versand definieren'
      ]
    }
    resultColor.value = { bg: 'bg-red-100', text: 'text-red-700', icon: '🔴' }
  } else if (urgency >= 4) {
    result.value = {
      level: 'Handlungsbedarf: Mittel',
      text: `Ihr Unternehmen sollte sich zeitnah mit dem Thema E-Rechnung befassen. Auch wenn nicht alle Ihre Rechnungen betroffen sind, wird die E-Rechnungspflicht schrittweise ausgeweitet. Eine frühzeitige Umstellung spart langfristig Kosten.`,
      actions: [
        'Empfangsfähigkeit für E-Rechnungen sicherstellen',
        'Bestandsaufnahme der aktuellen Rechnungsprozesse',
        'Software-Optionen evaluieren',
        'Übergangsfristen im Blick behalten'
      ]
    }
    resultColor.value = { bg: 'bg-yellow-100', text: 'text-yellow-700', icon: '🟡' }
  } else {
    result.value = {
      level: 'Handlungsbedarf: Gering',
      text: `Basierend auf Ihren Angaben ist der unmittelbare Handlungsbedarf gering. Dennoch sollten Sie die Entwicklung beobachten — die E-Rechnungspflicht wird schrittweise auf weitere Unternehmen ausgeweitet.`,
      actions: [
        'Gesetzliche Entwicklungen beobachten',
        'Empfangsfähigkeit für E-Rechnungen vorbereiten',
        'Bei Wachstum erneut prüfen'
      ]
    }
    resultColor.value = { bg: 'bg-green-100', text: 'text-green-700', icon: '🟢' }
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
