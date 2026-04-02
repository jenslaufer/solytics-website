<template>
  <MainLayout>
    <section class="pt-32 pb-20 md:pt-44 md:pb-32 px-6 md:px-10">
      <div class="max-w-3xl mx-auto">
        <h1 class="heading-lg text-ink mb-8">Datenschutzerklärung</h1>

        <div class="space-y-6 body-md text-muted">
          <div>
            <h2 class="heading-md text-ink">1. Verantwortlicher</h2>
            <p>
              Solytics GmbH<br>
              Hörsteiner Str. 20a<br>
              63791 Karlstein a. Main<br>
              E-Mail: <a href="mailto:jens.laufer@solytics.de" class="text-accent hover:text-accent-hover underline">jens.laufer@solytics.de</a>
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mt-8">2. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Beim Besuch unserer Website werden durch den Browser automatisch Informationen an den Server gesendet.
              Diese Informationen werden temporär in einem sogenannten Logfile gespeichert:
            </p>
            <ul class="list-disc list-inside space-y-1 text-sm mt-2">
              <li>IP-Adresse des anfragenden Rechners</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Name und URL der abgerufenen Datei</li>
              <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
              <li>Verwendeter Browser und ggf. das Betriebssystem</li>
            </ul>
            <p class="text-sm mt-2">
              Die genannten Daten werden zu folgenden Zwecken verarbeitet: Gewährleistung eines reibungslosen Verbindungsaufbaus,
              Gewährleistung einer komfortablen Nutzung unserer Website, Auswertung der Systemsicherheit und -stabilität.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mt-8">3. Weitergabe von Daten</h2>
            <p>
              Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken
              findet nicht statt. Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn Sie Ihre ausdrückliche
              Einwilligung dazu erteilt haben (Art. 6 Abs. 1 lit. a DSGVO).
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mt-8">4. Cookies</h2>
            <p>
              Diese Website verwendet keine Tracking-Cookies und kein Local Storage.
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mt-8">5. Analyse-Tools</h2>
            <p>Wir setzen derzeit keine Analyse-Tools oder Tracking-Dienste ein.</p>
          </div>

          <div>
            <h2 class="heading-md text-ink mt-8">6. Calendly</h2>
            <p>
              Auf unserer Kontaktseite binden wir den Dienst Calendly (Calendly LLC, Atlanta, USA) ein.
              Wenn Sie einen Termin buchen, werden Ihre eingegebenen Daten (Name, E-Mail) von Calendly verarbeitet.
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO. Details finden Sie in der
              <a href="https://calendly.com/privacy" target="_blank" rel="noopener" class="text-accent hover:text-accent-hover underline">Datenschutzerklärung von Calendly</a>.
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mt-8">7. Ihre Rechte</h2>
            <p>Sie haben das Recht auf:</p>
            <ul class="list-disc list-inside space-y-1 text-sm mt-2">
              <li>Auskunft über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer Daten (Art. 17 DSGVO)</li>
              <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            </ul>
            <p class="text-sm mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich an:
              <a href="mailto:jens.laufer@solytics.de" class="text-accent hover:text-accent-hover underline">jens.laufer@solytics.de</a>
            </p>
          </div>

          <div>
            <h2 class="heading-md text-ink mt-8">8. Aktualität</h2>
            <p>Diese Datenschutzerklärung ist aktuell gültig und hat den Stand März 2026.</p>
          </div>
        </div>
      </div>
    </section>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue'
import { useHead } from '../composables/useHead.js'

useHead({
  title: 'Datenschutz — Solytics GmbH',
  description: 'Datenschutzerklärung der Solytics GmbH.',
})
</script>
