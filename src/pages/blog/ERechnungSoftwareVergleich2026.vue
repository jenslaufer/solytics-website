<template>
  <article class="prose-article">
    <h2>Warum E-Rechnung-Software jetzt wichtig ist</h2>
    <p>
      Das Wachstumschancengesetz hat den Zeitplan festgelegt: Ab 2025 müssen Unternehmen strukturierte elektronische Rechnungen empfangen können. Ab 2027 wird auch der Versand für alle B2B-Umsätze zur Pflicht.
    </p>
    <p>
      E-Rechnungen sind keine PDFs mit hübschem Layout. Sie bestehen aus maschinenlesbaren XML-Daten nach den Standards XRechnung oder ZUGFeRD. Ihre Software muss diese Formate erzeugen, validieren und verarbeiten können.
    </p>
    <p>
      Die Vorteile gehen über Compliance hinaus. Automatische Verarbeitung reduziert manuelle Fehler, beschleunigt den Rechnungseingang und spart durchschnittlich 60–80 % der Bearbeitungszeit pro Rechnung.
    </p>

    <h2>Anforderungen an gute E-Rechnung-Software</h2>

    <h3>Format-Unterstützung: XRechnung und ZUGFeRD</h3>
    <p>
      <strong>XRechnung</strong> ist das XML-Format für den öffentlichen Sektor in Deutschland. Es basiert auf der europäischen Norm EN 16931. Jede Software muss XRechnung in der aktuellen Version (mindestens 3.0) unterstützen.
    </p>
    <p>
      <strong>ZUGFeRD 2.1/2.2</strong> (auch bekannt als Factur-X) kombiniert ein PDF/A-3-Dokument mit einer eingebetteten XML-Datei. Für den B2B-Bereich ist das Profil "EN 16931" oder höher relevant.
    </p>

    <h3>Validierung</h3>
    <p>
      Eine gute Software validiert vor dem Versand automatisch gegen die Schematron-Regeln der EN 16931 und die nationalen CIUS-Erweiterungen. Das verhindert Rückläufer und spart Zeit.
    </p>

    <h3>API-Zugang und Integration</h3>
    <p>
      Für automatisierte Workflows ist eine REST-API entscheidend. Damit können Sie E-Rechnungen direkt aus Ihrem ERP erstellen, versenden und empfangen — ohne manuelle Zwischenschritte.
    </p>

    <h3>Archivierung und GoBD-Konformität</h3>
    <p>
      E-Rechnungen müssen nach GoBD revisionssicher archiviert werden — unveränderbar, nachvollziehbar und über die gesetzliche Aufbewahrungsfrist zugänglich.
    </p>

    <h2>Drei Kategorien von E-Rechnung-Software</h2>

    <h3>ERP-integrierte Lösungen</h3>
    <p>
      Große ERP-Systeme wie SAP, Microsoft Dynamics oder DATEV bieten E-Rechnungsmodule als Erweiterung an. Integration ist nahtlos, aber Updates kommen oft verzögert und die Konfiguration ist komplex.
    </p>

    <h3>Standalone-Software</h3>
    <p>
      Spezialisierte Tools wie Easybill, SevDesk, FastBill oder Lexware bieten benutzerfreundliche Oberflächen und schnelle Einrichtung. Bei komplexen Prozessen oder hohem Volumen stoßen sie an Grenzen.
    </p>

    <h3>API-First-Plattformen</h3>
    <p>
      API-First-Lösungen erzeugen, validieren und versenden E-Rechnungen über REST-APIs. Maximale Flexibilität, Automatisierung und Skalierbarkeit — aber technisches Know-how für die Integration nötig.
    </p>

    <h2>Vergleichstabelle</h2>
    <table>
      <thead>
        <tr><th>Kriterium</th><th>ERP-integriert</th><th>Standalone</th><th>API-First</th></tr>
      </thead>
      <tbody>
        <tr><td>XRechnung</td><td>Ja (per Modul)</td><td>Ja</td><td>Ja</td></tr>
        <tr><td>ZUGFeRD 2.x</td><td>Teilweise</td><td>Ja</td><td>Ja</td></tr>
        <tr><td>Validierung</td><td>Basis</td><td>Gut</td><td>Umfassend</td></tr>
        <tr><td>Peppol-Zugang</td><td>Per Partner</td><td>Selten</td><td>Oft integriert</td></tr>
        <tr><td>API-Qualität</td><td>Eingeschränkt</td><td>Einfach</td><td>Umfangreich</td></tr>
        <tr><td>Einrichtung</td><td>Wochen–Monate</td><td>Stunden–Tage</td><td>Tage–Wochen</td></tr>
        <tr><td>Automatisierung</td><td>Hoch (im ERP)</td><td>Begrenzt</td><td>Sehr hoch</td></tr>
        <tr><td>Preisniveau</td><td>Hoch</td><td>Niedrig–Mittel</td><td>Nutzungsbasiert</td></tr>
        <tr><td>Zielgruppe</td><td>Konzerne</td><td>KMU, Freelancer</td><td>Technische Teams</td></tr>
      </tbody>
    </table>

    <h2>Für wen eignet sich welche Lösung?</h2>

    <h3>Freelancer und Kleinunternehmen</h3>
    <p>
      <strong>Empfehlung: Standalone-Software.</strong> Schnelle Einrichtung, günstige Preise. Achten Sie darauf, dass ZUGFeRD im Profil "EN 16931" unterstützt wird.
    </p>

    <h3>Mittelständische Unternehmen</h3>
    <p>
      Entweder das E-Rechnungsmodul Ihres ERP aktivieren oder eine API-First-Lösung anbinden. Letzteres ist oft schneller produktiv und flexibler bei Format-Updates.
    </p>

    <h3>Konzerne und hohes Rechnungsvolumen</h3>
    <p>
      <strong>Empfehlung: API-First-Plattform</strong> in Kombination mit dem bestehenden ERP. So vermeiden Sie Vendor Lock-in und bleiben flexibel.
    </p>

    <h2>Checkliste: So wählen Sie die richtige Software</h2>
    <ol>
      <li>Format-Anforderungen klären: XRechnung, ZUGFeRD oder beides?</li>
      <li>Volumen einschätzen: Ab ca. 100 Rechnungen/Monat lohnt sich API-Automatisierung.</li>
      <li>Bestehende Systeme prüfen: ERP-Modul vorhanden? Wie ausgereift?</li>
      <li>Validierung testen: Erstellen Sie eine Testrechnung und prüfen Sie mit dem KoSIT-Validator.</li>
      <li>API-Dokumentation prüfen: Sandbox? Vollständige Doku? Test-Integration möglich?</li>
      <li>Archivierung klären: GoBD-konforme Archivierung integriert oder externes DMS?</li>
      <li>Zukunftssicherheit bewerten: Reaktionszeit bei neuen Versionen?</li>
      <li>Kosten vergleichen: Grundpreis, Kosten pro Rechnung, API-Aufrufe.</li>
      <li>Support und Community: Technischer Support auf Deutsch?</li>
      <li>Testphase nutzen: Reale Szenarien durchspielen.</li>
    </ol>

    <h2>Fazit</h2>
    <p>
      Die Wahl der richtigen E-Rechnung-Software hängt von Ihrer Unternehmensgröße, Ihrem Rechnungsvolumen und Ihrer bestehenden IT-Landschaft ab. Wer jetzt die richtige Lösung wählt, spart sich späteren Migrationsstress und profitiert sofort von effizienteren Prozessen.
    </p>
  </article>
</template>
