<template>
  <article class="prose-article">
    <h2>Was ist XRechnung?</h2>
    <p><strong>XRechnung</strong> ist der deutsche Standard für elektronische Rechnungen an öffentliche Auftraggeber. Es handelt sich um eine <em>reine XML-Datei</em> — ohne visuelle Darstellung, ohne PDF, ohne menschenlesbare Komponente. Die Daten liegen vollständig strukturiert vor.</p>
    <p>Technisch basiert XRechnung auf der europäischen Norm <strong>EN 16931</strong> und definiert eine deutsche <strong>CIUS</strong> (Core Invoice Usage Specification). Das bedeutet: XRechnung übernimmt das semantische Datenmodell von EN 16931 und ergänzt es um deutsche Geschäftsregeln (BR-DE). Dazu gehören etwa die Leitweg-ID für B2G-Rechnungen, Bankverbindung und Zahlungsbedingungen.</p>
    <p>XRechnung unterstützt zwei XML-Syntaxen: <strong>UBL 2.1</strong> (Universal Business Language) und <strong>UN/CEFACT CII</strong> (Cross-Industry Invoice). Beide sind gleichwertig gültig. Die Validierung erfolgt über XSD-Schemata und Schematron-Regeln — über 30 Einzelprüfungen allein für die deutschen Geschäftsregeln.</p>

    <h3>XRechnung auf einen Blick</h3>
    <ul>
      <li><strong>Format:</strong> Reine XML-Datei (UBL oder CII)</li>
      <li><strong>Standard:</strong> EN 16931 + deutsche CIUS (BR-DE)</li>
      <li><strong>Pflicht:</strong> B2G seit 2020 (Bund), seit 2024 für alle Länder</li>
      <li><strong>Aktuelle Version:</strong> XRechnung 3.0</li>
    </ul>

    <h2>Was ist ZUGFeRD?</h2>
    <p><strong>ZUGFeRD</strong> (Zentraler User Guide des Forums elektronische Rechnung Deutschland) ist ein Hybridformat. Es kombiniert ein <strong>PDF/A-3-Dokument</strong> mit einer eingebetteten <strong>CII-XML-Datei</strong>. Der Empfänger sieht ein normales PDF — die maschinenlesbaren Daten stecken unsichtbar darin.</p>
    <p>ZUGFeRD 2.3 definiert vier <strong>Profile</strong>, die sich im Umfang der strukturierten Daten unterscheiden:</p>
    <ul>
      <li><strong>Minimum:</strong> Nur Basisdaten (Rechnungsnummer, Datum, Summen). Reicht nicht für automatische Verarbeitung.</li>
      <li><strong>Basic:</strong> Positionsdaten enthalten. Geeignet für einfache Automatisierung.</li>
      <li><strong>EN16931:</strong> Vollständige EN 16931-Konformität. Gesetzlich anerkannt für die E-Rechnungspflicht.</li>
      <li><strong>Extended:</strong> Alle EN 16931-Felder plus zusätzliche Branchenfelder. Ebenfalls gesetzeskonform.</li>
    </ul>
    <p><strong>Wichtig:</strong> Nur die Profile <em>EN16931</em> und <em>Extended</em> erfüllen die Anforderungen des Wachstumschancengesetzes. Minimum und Basic reichen nicht.</p>

    <h2>XRechnung und ZUGFeRD im Vergleich</h2>
    <p>Die Kernfrage beim <strong>XRechnung ZUGFeRD Unterschied</strong> ist: reines XML oder Hybrid-PDF? Diese Tabelle fasst die wesentlichen Unterschiede zusammen:</p>

    <table>
      <thead>
        <tr>
          <th>Kriterium</th>
          <th>XRechnung</th>
          <th>ZUGFeRD 2.3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Dateiformat</strong></td>
          <td>Reine XML-Datei</td>
          <td>PDF/A-3 mit eingebettetem XML</td>
        </tr>
        <tr>
          <td><strong>XML-Syntax</strong></td>
          <td>UBL 2.1 oder CII</td>
          <td>Nur CII</td>
        </tr>
        <tr>
          <td><strong>Menschenlesbar</strong></td>
          <td>Nein (nur maschinell)</td>
          <td>Ja (PDF-Ansicht)</td>
        </tr>
        <tr>
          <td><strong>B2G-tauglich</strong></td>
          <td>Ja (Pflichtformat)</td>
          <td>Nur Profil EN16931 mit XRechnung-Extension</td>
        </tr>
        <tr>
          <td><strong>B2B-tauglich</strong></td>
          <td>Ja</td>
          <td>Ja (bevorzugt)</td>
        </tr>
        <tr>
          <td><strong>Validierung</strong></td>
          <td>XSD + Schematron (BR-DE)</td>
          <td>XSD + Schematron + PDF/A-Prüfung</td>
        </tr>
        <tr>
          <td><strong>Dateigröße</strong></td>
          <td>Klein (wenige KB)</td>
          <td>Größer (PDF + XML)</td>
        </tr>
        <tr>
          <td><strong>Weiterverarbeitung</strong></td>
          <td>Direkt automatisierbar</td>
          <td>XML extrahieren, dann verarbeiten</td>
        </tr>
      </tbody>
    </table>

    <h2>ZUGFeRD oder XRechnung? Die Entscheidungshilfe</h2>
    <p>Die Wahl hängt von drei Faktoren ab: <strong>Empfänger</strong>, <strong>Unternehmensgröße</strong> und <strong>bestehende Systeme</strong>.</p>

    <h3>XRechnung wählen, wenn…</h3>
    <ul>
      <li>Sie Rechnungen an <strong>öffentliche Auftraggeber</strong> stellen (Bund, Länder, Kommunen). XRechnung mit Leitweg-ID ist hier Pflicht.</li>
      <li>Ihre Empfänger <strong>automatisierte Verarbeitung</strong> erwarten und kein PDF benötigen.</li>
      <li>Sie bereits ein ERP-System nutzen, das UBL oder CII nativ exportiert.</li>
      <li>Maximale <strong>Interoperabilität</strong> im europäischen Raum wichtig ist (EN 16931 CIUS wird EU-weit akzeptiert).</li>
    </ul>

    <h3>ZUGFeRD wählen, wenn…</h3>
    <ul>
      <li>Ihre Empfänger eine <strong>visuelle Rechnung</strong> erwarten — typisch im Mittelstand und bei KMU.</li>
      <li>Sie den Übergang <strong>schrittweise</strong> gestalten wollen: Das PDF sieht aus wie bisher, die strukturierten Daten kommen automatisch mit.</li>
      <li>Ihr Rechnungsprozess auf <strong>PDF-Versand per E-Mail</strong> basiert und Sie möglichst wenig ändern wollen.</li>
      <li>Sie B2B-Rechnungen an <strong>kleine Empfänger</strong> stellen, die noch kein E-Rechnungssystem haben.</li>
    </ul>

    <h3>Entscheidungsmatrix nach Unternehmensgröße</h3>

    <table>
      <thead>
        <tr>
          <th>Szenario</th>
          <th>Empfehlung</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Freelancer / Einzelunternehmer</td>
          <td><strong>ZUGFeRD EN16931</strong> — Empfänger sieht PDF, Sie erfüllen die Pflicht</td>
        </tr>
        <tr>
          <td>KMU, nur B2B</td>
          <td><strong>ZUGFeRD EN16931</strong> — Minimaler Umstellungsaufwand, hybrides Format</td>
        </tr>
        <tr>
          <td>KMU mit B2G-Anteil</td>
          <td><strong>Beide:</strong> XRechnung für Behörden, ZUGFeRD für B2B</td>
        </tr>
        <tr>
          <td>Mittelstand / Konzern</td>
          <td><strong>XRechnung</strong> als Standard — volle Automatisierung, ERP-Integration</td>
        </tr>
        <tr>
          <td>Branche mit Sonderfeldern</td>
          <td><strong>ZUGFeRD Extended</strong> oder XRechnung mit Extension — je nach Empfänger</td>
        </tr>
      </tbody>
    </table>

    <h2>Beide Formate gleichzeitig nutzen</h2>
    <p>Die Frage „ZUGFeRD oder XRechnung" ist kein Entweder-oder. Viele Unternehmen setzen <strong>beide Formate</strong> parallel ein:</p>
    <ul>
      <li><strong>XRechnung für B2G:</strong> Öffentliche Auftraggeber verlangen XRechnung mit Leitweg-ID. Kein Weg daran vorbei.</li>
      <li><strong>ZUGFeRD für B2B:</strong> Geschäftspartner bekommen ein PDF, das sie öffnen und lesen können — plus maschinenlesbare Daten für die automatische Verarbeitung.</li>
    </ul>
    <p>Technisch ist das kein Problem: Beide Formate nutzen dasselbe semantische Datenmodell (EN 16931). Die Rechnungsdaten sind identisch — nur die Serialisierung unterscheidet sich. Ein System, das beides kann, braucht die Daten nur einmal und generiert daraus das gewünschte Format.</p>

    <h2>Fazit: XRechnung vs ZUGFeRD — die richtige Wahl treffen</h2>
    <p>Es gibt kein „besseres" Format. XRechnung und ZUGFeRD sind zwei Wege zum selben Ziel: gesetzeskonforme E-Rechnungen nach EN 16931.</p>
    <ul>
      <li><strong>XRechnung</strong> ist das Pflichtformat für B2G und die erste Wahl für vollautomatisierte Prozesse.</li>
      <li><strong>ZUGFeRD</strong> ist der pragmatische Weg für B2B — besonders wenn Empfänger noch ein lesbares PDF erwarten.</li>
      <li><strong>Beide zusammen</strong> decken alle Szenarien ab. Investieren Sie in ein System, das beides kann.</li>
    </ul>
    <p>Die Versandpflicht greift ab 1. Januar 2027. Wer sich jetzt für eine Lösung entscheidet, die beide Formate unterstützt, ist für B2G und B2B gleichermaßen aufgestellt.</p>
  </article>
</template>
