<template>
  <article class="prose-article">
    <h2>KI-Agent vs Chatbot: Was ist der Unterschied?</h2>
    <p>
      Chatbot, KI-Chatbot, KI-Agent — die Begriffe werden oft synonym verwendet. Dabei unterscheiden sich diese Technologien grundlegend in ihren Fähigkeiten. Wer die Unterschiede kennt, trifft bessere Entscheidungen bei der Automatisierung von Geschäftsprozessen.
    </p>

    <h3>Stufe 1: Regelbasierter Chatbot</h3>
    <p>
      Ein regelbasierter Chatbot folgt vordefinierten Wenn-Dann-Regeln. Er erkennt Schlüsselwörter in der Eingabe und liefert passende Antworten aus einer festen Datenbank. Typische Einsatzbereiche: FAQ-Seiten, einfache Terminbuchung, Öffnungszeiten-Auskunft. Sobald eine Anfrage vom Skript abweicht, scheitert der Bot.
    </p>

    <h3>Stufe 2: KI-Chatbot</h3>
    <p>
      Ein KI-Chatbot nutzt ein großes Sprachmodell (LLM), um natürliche Sprache zu verstehen und frei zu formulieren. Er kann Kontext innerhalb eines Gesprächs behalten, Fragen umformuliert beantworten und auf unvorhergesehene Eingaben reagieren. Allerdings bleibt er auf Konversation beschränkt — er kann keine externen Systeme steuern oder eigenständig Aktionen auslösen.
    </p>

    <h3>Stufe 3: KI-Agent</h3>
    <p>
      Ein <router-link to="/blog/ki-agenten-fuer-unternehmen">KI-Agent</router-link> geht deutlich weiter. Er plant mehrstufige Aufgaben, nutzt Werkzeuge (APIs, Datenbanken, E-Mail), trifft Entscheidungen auf Basis von Zwischenergebnissen und passt seine Strategie an. Ein KI-Agent handelt autonom — er erhält ein Ziel und findet selbstständig den Weg dorthin.
    </p>

    <h2>Feature-Vergleich: Chatbot vs KI-Agent</h2>
    <table>
      <thead>
        <tr>
          <th>Eigenschaft</th>
          <th>Regelbasierter Chatbot</th>
          <th>KI-Chatbot</th>
          <th>KI-Agent</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Sprachverständnis</td>
          <td>Schlüsselwort-Matching</td>
          <td>Natürliche Sprache (LLM)</td>
          <td>Natürliche Sprache (LLM)</td>
        </tr>
        <tr>
          <td>Datenzugriff</td>
          <td>Statische FAQ-Datenbank</td>
          <td>Trainingsdaten + Kontext</td>
          <td>Live-Zugriff auf APIs, Datenbanken, Dateien</td>
        </tr>
        <tr>
          <td>Aktionen ausführen</td>
          <td>Nein</td>
          <td>Nein</td>
          <td>Ja — Buchungen, E-Mails, Systemänderungen</td>
        </tr>
        <tr>
          <td>Lernfähigkeit</td>
          <td>Keine</td>
          <td>Begrenzt (innerhalb Session)</td>
          <td>Langzeit-Gedächtnis, lernt aus Ergebnissen</td>
        </tr>
        <tr>
          <td>Autonomie</td>
          <td>Keine — folgt starren Regeln</td>
          <td>Gering — antwortet auf Anfragen</td>
          <td>Hoch — plant, entscheidet, handelt</td>
        </tr>
        <tr>
          <td>Systemintegration</td>
          <td>Minimal (Webseite, Messenger)</td>
          <td>Begrenzt (Chat-Plattformen)</td>
          <td>Umfassend (ERP, CRM, E-Mail, Dateisysteme)</td>
        </tr>
      </tbody>
    </table>

    <h2>Wann reicht ein Chatbot?</h2>
    <p>
      Ein Chatbot ist die richtige Wahl, wenn Ihre Anforderungen klar abgegrenzt sind:
    </p>
    <ul>
      <li><strong>FAQ und Standardfragen:</strong> Öffnungszeiten, Lieferstatus, Rückgabebedingungen — Antworten, die sich selten ändern.</li>
      <li><strong>Erstkontakt und Qualifizierung:</strong> Der Chatbot sammelt Kontaktdaten und leitet an den richtigen Ansprechpartner weiter.</li>
      <li><strong>Einfache Terminbuchung:</strong> Der Kunde wählt aus verfügbaren Slots — keine komplexe Logik nötig.</li>
      <li><strong>Geringe Varianz:</strong> Weniger als 50 verschiedene Anfragetypen, klare Antwortmuster.</li>
    </ul>

    <h2>Wann brauchen Sie einen KI-Agenten?</h2>
    <p>
      Sobald Prozesse mehrere Systeme umfassen, Entscheidungen erfordern oder unstrukturierte Daten verarbeiten, stößt ein Chatbot an seine Grenzen.
    </p>
    <ul>
      <li><strong>Rechnungsverarbeitung:</strong> Eingangsrechnungen lesen, Daten extrahieren, gegen Bestellungen abgleichen, in die Buchhaltung buchen — das erfordert Tool-Nutzung und Entscheidungslogik.</li>
      <li><strong>Automatisiertes Reporting:</strong> Daten aus ERP, CRM und Excel zusammenführen, bereinigen, analysieren und als fertigen Bericht ausgeben.</li>
      <li><strong>Komplexer Kundenservice:</strong> Kundenhistorie im CRM abrufen, Retoure anlegen, Gutschrift erstellen, Folge-E-Mail senden — alles in einem Vorgang.</li>
      <li><strong>Marktanalyse und Recherche:</strong> Systematisch Informationen aus verschiedenen Quellen zusammentragen, bewerten und strukturiert aufbereiten.</li>
    </ul>

    <h2>Praxis-Szenarien im Vergleich</h2>

    <h3>Szenario 1: Kundenservice</h3>
    <p>
      <strong>Chatbot-Lösung:</strong> Beantwortet häufige Fragen, leitet komplexe Anfragen an Mitarbeiter weiter. Deckt 60-70 % der Anfragen ab. Für viele Unternehmen ausreichend.
    </p>
    <p>
      <strong>Agent-Lösung:</strong> Versteht das Anliegen, prüft die Kundenhistorie, löst das Problem eigenständig (Retoure, Gutschrift, Terminänderung). Deckt 85-95 % der Anfragen ab.
    </p>

    <h3>Szenario 2: Rechnungsverarbeitung</h3>
    <p>
      <strong>Chatbot-Lösung:</strong> Nicht geeignet. Rechnungsverarbeitung erfordert Datenzugriff, Validierung und Buchungsvorgänge — alles jenseits der Chatbot-Fähigkeiten.
    </p>
    <p>
      <strong>Agent-Lösung:</strong> Liest die Rechnung, extrahiert Positionen, gleicht mit offenen Bestellungen ab, bucht in die Finanzbuchhaltung und meldet Abweichungen. Durchlaufzeit: Minuten statt Stunden.
    </p>

    <h3>Szenario 3: Management-Reporting</h3>
    <p>
      <strong>Chatbot-Lösung:</strong> Nicht geeignet. Berichte erfordern Datenzugriff über mehrere Systeme, Berechnungen und formatierte Ausgabe.
    </p>
    <p>
      <strong>Agent-Lösung:</strong> Verbindet sich mit Ihren Datenquellen, führt Analysen durch, erstellt tagesaktuelle Reports in Ihrem gewünschten Format.
    </p>

    <h2>Kostenvergleich</h2>
    <table>
      <thead>
        <tr>
          <th>Kostenart</th>
          <th>Chatbot (SaaS)</th>
          <th>KI-Agent (individuell)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Einrichtung</td>
          <td>0-500 EUR</td>
          <td>2.000-8.000 EUR</td>
        </tr>
        <tr>
          <td>Monatliche Kosten</td>
          <td>200-500 EUR/Monat</td>
          <td>500-2.000 EUR/Monat (Hosting + Wartung)</td>
        </tr>
        <tr>
          <td>Anpassungen</td>
          <td>Begrenzt (Templates)</td>
          <td>Voll flexibel, maßgeschneidert</td>
        </tr>
        <tr>
          <td>Skalierung</td>
          <td>Preis steigt mit Nutzern</td>
          <td>Infrastrukturkosten, skaliert linear</td>
        </tr>
        <tr>
          <td>ROI-Zeitraum</td>
          <td>1-2 Monate</td>
          <td>3-6 Monate</td>
        </tr>
      </tbody>
    </table>
    <p>
      Ein Chatbot ist günstiger im Einstieg. Ein KI-Agent rechnet sich, sobald er manuelle Prozesse ersetzt, die mehrere Stunden pro Woche beanspruchen. Detaillierte Kostenbetrachtungen finden Sie in unserem Artikel zur <router-link to="/blog/ki-automatisierung-kosten">KI-Automatisierung: Was kostet es wirklich?</router-link>
    </p>

    <h2>5 Fragen zur richtigen Entscheidung</h2>
    <p>
      Beantworten Sie diese fünf Fragen, um herauszufinden, ob ein Chatbot oder ein KI-Agent die richtige Lösung für Ihr Unternehmen ist:
    </p>
    <ol>
      <li><strong>Wie komplex sind Ihre Anfragen?</strong> Weniger als 50 Standard-Anfragetypen → Chatbot. Variable, kontextabhängige Anfragen → Agent.</li>
      <li><strong>Muss das System auf externe Datenquellen zugreifen?</strong> Nein → Chatbot. Ja (ERP, CRM, Datenbanken) → Agent.</li>
      <li><strong>Soll das System eigenständig Aktionen auslösen?</strong> Nein, nur antworten → Chatbot. Ja, buchen/mailen/ändern → Agent.</li>
      <li><strong>Wie hoch ist der manuelle Aufwand aktuell?</strong> Unter 5 Stunden/Woche → Chatbot lohnt sich. Über 10 Stunden/Woche → Agent amortisiert sich schnell.</li>
      <li><strong>Müssen mehrere Systeme zusammenspielen?</strong> Ein System → Chatbot. Mehrere Systeme → Agent.</li>
    </ol>

    <h2>Die richtige Strategie: Stufenweise vorgehen</h2>
    <p>
      Chatbot und KI-Agent schließen sich nicht aus. Viele Unternehmen starten mit einem Chatbot für den Erstkontakt und erweitern bei Bedarf auf einen KI-Agenten für komplexere Prozesse. Die <router-link to="/blog/digitalisierung-mittelstand-2026">Digitalisierung im Mittelstand</router-link> folgt oft genau diesem Muster: klein starten, messen, skalieren.
    </p>
    <p>
      Entscheidend ist, dass Sie mit dem richtigen Werkzeug für Ihren konkreten Anwendungsfall starten. Einen Chatbot dort einzusetzen, wo ein Agent nötig wäre, führt zu Frust bei Mitarbeitern und Kunden. Einen Agent dort einzusetzen, wo ein Chatbot reicht, ist unnötig teuer.
    </p>

    <h2>Fazit</h2>
    <p>
      Ein Chatbot beantwortet Fragen. Ein KI-Agent löst Probleme. Der Unterschied liegt nicht im Preis, sondern in der Aufgabe. Definieren Sie zuerst den Prozess, den Sie automatisieren wollen — dann wird die Technologiewahl eindeutig.
    </p>
    <p>
      Sie sind unsicher, welche Lösung zu Ihrem Unternehmen passt? Unser <router-link to="/ki-automatisierung/readiness-check">KI-Readiness-Check</router-link> hilft Ihnen in wenigen Minuten, Ihre Ausgangslage einzuschätzen und die nächsten Schritte zu planen.
    </p>
  </article>
</template>
