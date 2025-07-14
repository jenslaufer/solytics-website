<template>
    <section class="max-w-3xl mx-auto p-6 text-gray-800">
        <h1 class="text-3xl font-bold mb-6">Datenschutzerklärung</h1>

        <p class="mb-4">
            Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen. Wir verarbeiten Ihre Daten daher
            ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, BDSG, TTDSG).
        </p>

        <p class="mb-6">
            In dieser Datenschutzerklärung informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung auf
            unserer Website.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">1. Verantwortlicher</h2>
        <p class="mb-4">
            Solytics GmbH<br />
            Hörsteiner Str. 20a<br />
            63791 Karlstein a. Main<br />
            Deutschland<br />
            E-Mail: jens.laufer@solytics.de
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">2. Erhebung und Speicherung personenbezogener Daten</h2>

        <h3 class="text-lg font-semibold mt-6 mb-1">a) Beim Besuch der Website</h3>
        <p class="mb-4">
            Beim Besuch unserer Website werden automatisch folgende Daten erhoben:
        </p>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li>Anonymisierte IP-Adresse</li>
            <li>Datum und Uhrzeit</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Referrer-URL</li>
            <li>Browser und Betriebssystem</li>
        </ul>
        <p class="mb-4">
            <strong>Zweck:</strong> Sicherstellung des technischen Betriebs und Analyse zu Sicherheitszwecken.<br />
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO
        </p>

        <h3 class="text-lg font-semibold mt-6 mb-1">b) Kontaktformular</h3>
        <p class="mb-4">
            Bei Nutzung des Kontaktformulars verarbeiten wir Ihre angegebenen Daten zum Zweck der Bearbeitung Ihrer
            Anfrage.<br />
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">3. Webanalyse</h2>
        <p class="mb-4">
            Mit Ihrer Einwilligung verwenden wir Webanalyse-Tools wie Google Analytics oder Matomo. Sie können Ihre
            Einwilligung jederzeit widerrufen.
        </p>
        <p class="mb-4">
            <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">4. Cookies</h2>
        <p class="mb-4">
            Wir setzen technisch notwendige Cookies und – mit Ihrer Einwilligung – Analyse-Cookies ein. Ihre
            Cookie-Einstellungen können Sie jederzeit anpassen.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">5. Weitergabe von Daten</h2>
        <p class="mb-4">
            Eine Weitergabe erfolgt nur, wenn
        </p>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li>Sie ausdrücklich eingewilligt haben</li>
            <li>es gesetzlich vorgeschrieben ist</li>
            <li>es zur Vertragserfüllung erforderlich ist</li>
        </ul>

        <h2 class="text-xl font-semibold mt-8 mb-2">6. Ihre Rechte</h2>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li>Auskunft über Ihre Daten</li>
            <li>Berichtigung und Löschung</li>
            <li>Einschränkung der Verarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch und Widerruf</li>
            <li>Beschwerde bei der Aufsichtsbehörde</li>
        </ul>

        <h2 class="text-xl font-semibold mt-8 mb-2">7. Speicherdauer</h2>
        <p class="mb-4">
            Wir speichern Ihre Daten nur solange, wie es für den Zweck erforderlich ist oder gesetzliche Fristen es
            verlangen.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">8. Hosting</h2>
        <p class="mb-4">
            Das Hosting unserer Website erfolgt durch einen externen Dienstleister. Ein Vertrag zur Auftragsverarbeitung
            gemäß Art. 28 DSGVO liegt vor.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">9. Sicherheit</h2>
        <p class="mb-4">
            Wir setzen technische und organisatorische Maßnahmen ein, um Ihre Daten zu schützen.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">10. Aktualität</h2>
        <p class="mb-4">
            Stand: Juli 2025. Änderungen dieser Erklärung bleiben vorbehalten.
        </p>
        <a @click="router.go(-1)"
            class="mt-6 mb-10 inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700">
            Back
        </a>
    </section>
</template>
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


</script>