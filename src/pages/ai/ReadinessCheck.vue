<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl md:text-4xl font-extrabold font-sans-serif text-center mb-2">
        KI-Readiness-Check
      </h1>
      <p class="text-center text-gray-600 font-serif mb-8">
        In 5 Schritten erfahren Sie, wie bereit Ihr Unternehmen für KI-Automatisierung ist.
      </p>

      <!-- Progress Bar -->
      <div class="mb-8">
        <div class="flex justify-between text-sm text-gray-500 mb-1">
          <span>Schritt {{ showResult ? 5 : step }} von 5</span>
          <span>{{ Math.round((showResult ? 5 : step) / 5 * 100) }}%</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2">
          <div class="bg-red-500 h-2 rounded-full transition-all duration-500"
            :style="{ width: ((showResult ? 5 : step) / 5 * 100) + '%' }" />
        </div>
      </div>

      <!-- Step 1: Branche -->
      <transition name="fade" mode="out-in">
        <div v-if="step === 1 && !showResult" key="step1" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">In welcher Branche ist Ihr Unternehmen tätig?</h2>
          <div class="grid gap-3">
            <button v-for="option in branchen" :key="option" @click="answers.branche = option; step = 2"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.branche === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
        </div>

        <!-- Step 2: Mitarbeiterzahl -->
        <div v-else-if="step === 2 && !showResult" key="step2" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">Wie viele Mitarbeiter hat Ihr Unternehmen?</h2>
          <div class="grid gap-3">
            <button v-for="option in mitarbeiterOptions" :key="option" @click="answers.mitarbeiter = option; step = 3"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.mitarbeiter === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
          <button @click="step = 1" class="mt-4 text-sm text-gray-500 hover:text-gray-700">&larr; Zurück</button>
        </div>

        <!-- Step 3: Manuelle Prozesse (multi-select) -->
        <div v-else-if="step === 3 && !showResult" key="step3" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-2">Welche wiederkehrenden manuellen Prozesse haben Sie?</h2>
          <p class="text-sm text-gray-500 mb-4">Mehrfachauswahl möglich</p>
          <div class="grid gap-3">
            <button v-for="option in prozessOptions" :key="option" @click="toggleProzess(option)"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.prozesse.includes(option) ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
          <div class="flex justify-between mt-4">
            <button @click="step = 2" class="text-sm text-gray-500 hover:text-gray-700">&larr; Zurück</button>
            <button @click="step = 4" :disabled="answers.prozesse.length === 0"
              class="bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white font-semibold py-2 px-6 rounded-lg transition">
              Weiter &rarr;
            </button>
          </div>
        </div>

        <!-- Step 4: IT-Infrastruktur -->
        <div v-else-if="step === 4 && !showResult" key="step4" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">Wie sieht Ihre IT-Infrastruktur aus?</h2>
          <div class="grid gap-3">
            <button v-for="option in infraOptions" :key="option" @click="answers.infra = option; step = 5"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.infra === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
          <button @click="step = 3" class="mt-4 text-sm text-gray-500 hover:text-gray-700">&larr; Zurück</button>
        </div>

        <!-- Step 5: Budget -->
        <div v-else-if="step === 5 && !showResult" key="step5" class="bg-white rounded-xl shadow p-6">
          <h2 class="text-xl font-bold mb-4">Welches Budget haben Sie für Automatisierung?</h2>
          <div class="grid gap-3">
            <button v-for="option in budgetOptions" :key="option" @click="answers.budget = option; evaluate()"
              class="text-left px-4 py-3 rounded-lg border-2 transition hover:border-red-500 hover:bg-red-50"
              :class="answers.budget === option ? 'border-red-500 bg-red-50' : 'border-gray-200'">
              {{ option }}
            </button>
          </div>
          <button @click="step = 4" class="mt-4 text-sm text-gray-500 hover:text-gray-700">&larr; Zurück</button>
        </div>

        <!-- Result -->
        <div v-else-if="showResult" key="result" class="bg-white rounded-xl shadow p-6">
          <!-- Score -->
          <div class="text-center mb-6">
            <div class="relative inline-flex items-center justify-center w-28 h-28 mb-4">
              <svg class="w-28 h-28 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" fill="none" stroke="#e5e7eb" stroke-width="8" />
                <circle cx="60" cy="60" r="52" fill="none" :stroke="scoreColor" stroke-width="8"
                  stroke-linecap="round" :stroke-dasharray="2 * Math.PI * 52"
                  :stroke-dashoffset="2 * Math.PI * 52 * (1 - score / 100)" class="transition-all duration-1000" />
              </svg>
              <span class="absolute text-2xl font-bold">{{ score }}</span>
            </div>
            <h2 class="text-2xl font-bold" :style="{ color: scoreColor }">{{ level }}</h2>
          </div>

          <!-- Details -->
          <div class="grid gap-4 mb-6">
            <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span class="text-gray-600">Readiness-Level</span>
              <span class="font-bold">{{ level }}</span>
            </div>
            <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span class="text-gray-600">Geschätzte Zeitersparnis</span>
              <span class="font-bold">{{ timeSaving }} Std./Woche</span>
            </div>
            <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span class="text-gray-600">Empfohlenes Paket</span>
              <span class="font-bold">{{ recommendedPackage }}</span>
            </div>
          </div>

          <p class="text-gray-700 mb-6 leading-relaxed">{{ recommendation }}</p>

          <div class="flex flex-col sm:flex-row gap-3 mt-8">
            <a href="#/kontakt"
              class="flex-1 text-center bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition">
              Workshop buchen
            </a>
            <a href="#/ki-automatisierung"
              class="flex-1 text-center border-2 border-red-500 text-red-500 hover:bg-red-50 font-semibold py-3 px-6 rounded-lg transition">
              Mehr erfahren
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
  document.title = 'KI-Readiness-Check — Ist Ihr Unternehmen bereit für KI-Automatisierung?'
})

const step = ref(1)
const showResult = ref(false)
const score = ref(0)
const level = ref('')
const timeSaving = ref('')
const recommendedPackage = ref('')
const recommendation = ref('')
const scoreColor = ref('')

const answers = reactive({
  branche: '',
  mitarbeiter: '',
  prozesse: [],
  infra: '',
  budget: ''
})

const branchen = ['IT & Software', 'Handel & E-Commerce', 'Dienstleistung', 'Produktion & Fertigung', 'Gesundheitswesen', 'Finanz- & Versicherungswesen', 'Sonstige']
const mitarbeiterOptions = ['1–10', '11–50', '51–200', '200+']
const prozessOptions = ['Dateneingabe & -pflege', 'Berichtswesen & Reporting', 'Kundenkommunikation', 'Rechnungsstellung & Buchhaltung', 'Terminplanung & Koordination', 'Dokumentenverarbeitung']
const infraOptions = ['Cloud-basiert', 'On-Premise', 'Hybrid (Cloud + On-Premise)']
const budgetOptions = ['Unter 5.000 €', '5.000 – 15.000 €', '15.000 – 50.000 €', 'Über 50.000 €']

function toggleProzess(option) {
  const idx = answers.prozesse.indexOf(option)
  if (idx >= 0) answers.prozesse.splice(idx, 1)
  else answers.prozesse.push(option)
}

function evaluate() {
  let s = 0

  // Branche scoring
  const brancheScores = { 'IT & Software': 20, 'Handel & E-Commerce': 16, 'Finanz- & Versicherungswesen': 16, 'Dienstleistung': 14, 'Produktion & Fertigung': 12, 'Gesundheitswesen': 10, 'Sonstige': 10 }
  s += brancheScores[answers.branche] || 10

  // Mitarbeiter scoring
  const mitarbeiterScores = { '1–10': 8, '11–50': 14, '51–200': 18, '200+': 20 }
  s += mitarbeiterScores[answers.mitarbeiter] || 8

  // Prozesse scoring (more processes = higher readiness need)
  s += Math.min(answers.prozesse.length * 5, 20)

  // Infra scoring
  const infraScores = { 'Cloud-basiert': 20, 'Hybrid (Cloud + On-Premise)': 15, 'On-Premise': 8 }
  s += infraScores[answers.infra] || 8

  // Budget scoring
  const budgetScores = { 'Unter 5.000 €': 5, '5.000 – 15.000 €': 12, '15.000 – 50.000 €': 17, 'Über 50.000 €': 20 }
  s += budgetScores[answers.budget] || 5

  score.value = Math.min(s, 100)

  // Determine level
  if (score.value >= 70) {
    level.value = 'Advanced'
    scoreColor.value = '#16a34a'
    timeSaving.value = '15–25'
    recommendedPackage.value = 'KI-Retainer'
    recommendation.value = 'Ihr Unternehmen ist gut aufgestellt für KI-Automatisierung. Mit der richtigen Infrastruktur und ausreichend manuellen Prozessen lohnt sich ein umfassender KI-Retainer, der kontinuierlich Prozesse identifiziert und automatisiert.'
  } else if (score.value >= 40) {
    level.value = 'Ready'
    scoreColor.value = '#ca8a04'
    timeSaving.value = '8–15'
    recommendedPackage.value = 'KI-Setup'
    recommendation.value = 'Ihr Unternehmen hat gute Voraussetzungen für KI-Automatisierung. Ein gezieltes Setup-Projekt kann schnell erste Erfolge liefern und den Grundstein für weitere Automatisierung legen.'
  } else {
    level.value = 'Beginner'
    scoreColor.value = '#dc2626'
    timeSaving.value = '3–8'
    recommendedPackage.value = 'KI-Workshop'
    recommendation.value = 'Starten Sie mit einem Workshop, um die besten Anwendungsfälle für KI in Ihrem Unternehmen zu identifizieren. Wir zeigen Ihnen, wo Automatisierung den größten Hebel hat und welche Schritte als Nächstes sinnvoll sind.'
  }

  showResult.value = true
}

function reset() {
  step.value = 1
  showResult.value = false
  score.value = 0
  answers.branche = ''
  answers.mitarbeiter = ''
  answers.prozesse = []
  answers.infra = ''
  answers.budget = ''
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
