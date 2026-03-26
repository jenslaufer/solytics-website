<template>
  <article class="prose-article">
    <p>
      Mein KI-Assistent hat heute Nacht 5 Pull Requests reviewed, einen Blogbeitrag geschrieben und eine neue Landing Page gebaut. Ich habe geschlafen. Das klingt nach Zukunftsmusik — ist aber mein Alltag seit rund sechs Monaten. In diesem Artikel zeige ich, wie ich meine GmbH mit KI-Agenten automatisiert habe, welche Workflows wirklich funktionieren und wo die Grenzen liegen.
    </p>

    <h2>Das Problem: Solo-Geschäftsführer ertrinkt in Aufgaben</h2>
    <p>
      Als Gründer einer kleinen GmbH trage ich viele Hüte gleichzeitig: Vertrieb, Produktentwicklung, Marketing, Buchhaltungsvorbereitung, Kundenkommunikation, Serveradministration. Jede dieser Aufgaben ist wichtig. Keine davon bringt direkt Umsatz — wenn ich sie selbst erledige.
    </p>
    <p>
      Das klassische Problem: Entweder ich arbeite im Unternehmen (operative Aufgaben) oder an ihm (Strategie, Wachstum). Beides gleichzeitig geht nicht — zumindest nicht als einzelne Person mit endlich vielen Stunden am Tag.
    </p>
    <p>
      KI-Agenten lösen dieses Problem nicht vollständig. Aber sie verschieben die Grenze erheblich.
    </p>

    <h2>Was ist ein KI-Agent — und was nicht?</h2>
    <p>
      Ein KI-Chatbot antwortet auf Fragen. Ein KI-Agent erledigt Aufgaben. Der Unterschied ist fundamental.
    </p>
    <p>
      Ein Agent erhält ein Ziel, plant eigenständig die notwendigen Schritte, nutzt Tools (APIs, Datenbanken, Terminal, Browser) und liefert ein fertiges Ergebnis — ohne dass ich jeden Zwischenschritt vorgeben muss. Er kann Fehler erkennen, seinen Ansatz anpassen und bei Bedarf Rückfragen stellen.
    </p>
    <p>
      Konkret: Ich sage dem Agenten nicht "Öffne Datei X, lies Zeile Y, schreibe Wert Z in Tabelle A". Ich sage: "Analysiere die Serverkosten der letzten drei Monate und erstelle eine Zusammenfassung mit Optimierungsvorschlägen." Der Rest ist seine Aufgabe.
    </p>
    <p>
      Mehr zum Thema lesen Sie in unserem Artikel <router-link to="/blog/ki-agenten-fuer-unternehmen" class="text-primary-600 hover:text-primary-700 underline">KI-Agenten für Unternehmen</router-link>.
    </p>

    <h2>6 konkrete Automatisierungen in meiner GmbH</h2>

    <h3>1. Code-Deployment und Pull-Request-Reviews</h3>
    <p>
      Mein Entwicklungs-Agent läuft auf einer dedizierten Instanz und beobachtet das Repository. Neue Feature-Branches werden automatisch reviewed: Codequalität, Sicherheitslücken, fehlende Tests, Performance-Probleme. Der Agent erstellt einen strukturierten Review-Kommentar und — falls die Änderungen unkritisch sind — merged selbstständig.
    </p>
    <p>
      Bei komplexen Änderungen eskaliert er: Er markiert den PR mit einem Label und schickt mir eine Zusammenfassung. Ich entscheide nur dort, wo menschliches Urteil wirklich nötig ist.
    </p>
    <blockquote>
      <strong>Ergebnis:</strong> Rund 60 % aller PRs werden ohne mein Zutun abgearbeitet. Review-Zeit von durchschnittlich 45 Minuten auf unter 5 Minuten gesunken.
    </blockquote>

    <h3>2. Marketing-Content und SEO</h3>
    <p>
      Blogbeiträge, Landing Pages, Social-Media-Posts — der Content-Agent produziert auf Basis von Briefings und Keyword-Listen fertige Entwürfe. Er recherchiert Wettbewerber, analysiert Suchintentionen, strukturiert den Artikel und schreibt ihn in meinem Stil (den er aus bestehenden Texten gelernt hat).
    </p>
    <p>
      Ich review, passe an, gebe frei. Der Agent veröffentlicht, erstellt die Meta-Tags, aktualisiert die Sitemap. Was früher einen halben Tag dauerte, kostet mich heute 30 Minuten.
    </p>

    <h3>3. Server-Monitoring und Incident-Response</h3>
    <p>
      Ein Monitoring-Agent überwacht alle produktiven Systeme rund um die Uhr. Bei Anomalien analysiert er Logs, versucht bekannte Lösungen automatisch anzuwenden (Dienst neu starten, Cache leeren, Disk-Space aufräumen) und dokumentiert den Vorfall.
    </p>
    <p>
      Nur wenn das Problem unklar ist oder der automatische Fix nicht greift, weckt er mich. Nachts schläft mein Telefon wieder durch — meistens.
    </p>

    <h3>4. Buchhaltungsvorbereitung und Belegverarbeitung</h3>
    <p>
      Eingangsrechnungen landen per E-Mail oder Upload im System. Der Buchhaltungs-Agent extrahiert alle relevanten Daten (Lieferant, Betrag, Steuersatz, Fälligkeit), ordnet sie Kostenstellen zu, prüft auf Duplikate und bereitet alles für den Export zum Steuerberater vor.
    </p>
    <p>
      Das Gleiche gilt für Ausgangsrechnungen: Auf Basis von Projektdaten im CRM erstellt der Agent Rechnungsentwürfe, die ich nur noch freigeben muss. Zusammen mit der kommenden E-Rechnungspflicht — mehr dazu in unserem Artikel zur <router-link to="/blog/xrechnung-pflicht-2027" class="text-primary-600 hover:text-primary-700 underline">XRechnung-Pflicht 2027</router-link> — wird dieser Prozess vollständig automatisierbar.
    </p>

    <h3>5. Kundenkommunikation und Follow-ups</h3>
    <p>
      Der Kommunikations-Agent verwaltet eingehende Anfragen, klassifiziert sie nach Dringlichkeit und Thema, beantwortet Standardfragen direkt und erstellt für komplexe Anfragen einen Entwurf, den ich prüfe und abschicke.
    </p>
    <p>
      Follow-up-Sequenzen nach Angeboten laufen vollautomatisch: Drei Tage nach Angebotsversand geht eine persönlich formulierte Nachfrage raus, nach weiteren sieben Tagen eine abschließende. Kein Termin geht mehr durch die Lappen.
    </p>

    <h3>6. QA und Regressionstests</h3>
    <p>
      Nach jedem Deployment läuft der QA-Agent durch eine definierte Liste von User Flows: Er öffnet den Browser, navigiert durch die Anwendung, prüft kritische Pfade und erstellt einen Screenshot-Report. Fehler werden sofort gemeldet, kleine Abweichungen werden dokumentiert.
    </p>
    <p>
      Was früher manuelle Testzyklen von zwei bis drei Stunden bedeutete, läuft jetzt in unter 15 Minuten — vollautomatisch nach jedem Push.
    </p>

    <h2>Tech-Stack: Was ich konkret einsetze</h2>
    <p>
      Die Frage, die mir am häufigsten gestellt wird: Welche Tools nutzt du?
    </p>
    <ul>
      <li><strong>Orchestrierung:</strong> Claude API (Anthropic) als Haupt-LLM für komplexe Reasoning-Aufgaben</li>
      <li><strong>Agent-Framework:</strong> Eigene Implementierung auf Basis von Claude's tool-use API, ergänzt durch spezialisierte Bibliotheken</li>
      <li><strong>Infrastruktur:</strong> Docker-Container auf einem deutschen VPS, Nginx als Reverse Proxy</li>
      <li><strong>Monitoring:</strong> Prometheus + Grafana für Metriken, Loki für Logs</li>
      <li><strong>Workflows:</strong> n8n für einfachere Automatisierungen, Python-Skripte für komplexere Logik</li>
      <li><strong>Versionskontrolle:</strong> GitHub mit Actions für CI/CD-Integration der Agenten</li>
    </ul>
    <p>
      Der wichtigste Grundsatz: Kein Agent erhält mehr Berechtigungen als nötig. Jeder Agent arbeitet in einer isolierten Umgebung und darf nur die Systeme ansprechen, die für seine Aufgabe relevant sind.
    </p>

    <h2>Ergebnisse nach 6 Monaten</h2>
    <table>
      <thead>
        <tr><th>Bereich</th><th>Vorher</th><th>Nachher</th></tr>
      </thead>
      <tbody>
        <tr><td>Code-Reviews</td><td>45 Min. / PR</td><td>&lt;5 Min. / PR (60 % vollautomatisch)</td></tr>
        <tr><td>Content-Produktion</td><td>4–6 Std. / Artikel</td><td>30–45 Min. / Artikel</td></tr>
        <tr><td>Buchhaltungsvorbereitung</td><td>3–4 Std. / Monat</td><td>30 Min. / Monat</td></tr>
        <tr><td>Kundenkommunikation</td><td>1–2 Std. / Tag</td><td>20–30 Min. / Tag</td></tr>
        <tr><td>QA nach Deployment</td><td>2–3 Std. / Release</td><td>15 Min. (automatisch)</td></tr>
        <tr><td>Incident-Response nachts</td><td>1–3× / Woche</td><td>1–2× / Monat</td></tr>
      </tbody>
    </table>
    <p>
      Unterm Strich habe ich rund 20 Stunden pro Woche zurückgewonnen. Diese Zeit stecke ich in Produktentwicklung, Kundenakquise und strategische Arbeit — also genau das, was eine GmbH wachsen lässt.
    </p>

    <h2>Grenzen und ehrliche Einschätzung</h2>
    <p>
      KI-Agenten sind kein Allheilmittel. Wo sie an Grenzen stoßen:
    </p>
    <ul>
      <li><strong>Kreative Grundsatzentscheidungen:</strong> Positionierung, Preisgestaltung, Partnerschaften — das bleibt Chefsache. Agenten können Daten liefern und Optionen aufzeigen, aber nicht entscheiden.</li>
      <li><strong>Vertrauensaufbau mit Kunden:</strong> Erstgespräche, heikle Verhandlungen, Beziehungspflege — das funktioniert nur mit echtem menschlichem Kontakt.</li>
      <li><strong>Neuland ohne Daten:</strong> In Bereichen, wo keine Vorlage, kein Prozess und keine historischen Daten existieren, braucht der Agent intensive Führung.</li>
      <li><strong>Halluzinationen bei Fakten:</strong> Für alles, was faktisch korrekt sein muss (rechtliche Aussagen, Zahlen, Referenzen), ist menschliche Prüfung unerlässlich.</li>
    </ul>
    <p>
      Der größte Fehler, den ich zu Beginn gemacht habe: Ich habe Agenten zu früh zu viel Autonomie gegeben, ohne ausreichende Guardrails. Das hat zu mehreren kleinen Fehlern geführt, die ich manuell korrigieren musste. Gute Automatisierung erfordert sorgfältiges Setup — sie ist keine Abkürzung.
    </p>

    <h2>Fazit: Lohnt es sich für Ihre GmbH?</h2>
    <p>
      Ja — wenn Sie bereit sind, die Anfangsinvestition zu leisten. Das Setup und die Konfiguration von Agenten kostet Zeit und Geld. Aber der Break-even liegt in den meisten Fällen bei zwei bis vier Monaten.
    </p>
    <p>
      Besonders lohnend ist die Automatisierung, wenn Sie: wiederkehrende, gut definierbare Aufgaben haben, bereits digitale Prozesse und strukturierte Daten nutzen und bereit sind, Agenten schrittweise zu vertrauen — mit klaren Eskalationspfaden.
    </p>
    <p>
      Sie wollen wissen, welche Prozesse in Ihrem Unternehmen das höchste Automatisierungspotenzial haben? Unser <router-link to="/ki-automatisierung/readiness-check" class="text-primary-600 hover:text-primary-700 underline">KI-Readiness-Check</router-link> hilft Ihnen in wenigen Minuten, Ihre Ausgangslage einzuschätzen.
    </p>
    <p>
      <strong>Nächster Schritt:</strong> <router-link to="/kontakt" class="text-primary-600 hover:text-primary-700 underline">Vereinbaren Sie ein kostenloses Erstgespräch</router-link> — wir zeigen Ihnen, welche Agenten für Ihre spezifische Situation sinnvoll sind und wie ein realistischer Zeitplan aussieht.
    </p>
    <p>
      <strong>Weiterlesen:</strong> <router-link to="/blog/ki-automatisierung-kosten" class="text-primary-600 hover:text-primary-700 underline">Was kostet KI-Automatisierung? Preise, ROI und Amortisation 2026</router-link>
    </p>
  </article>
</template>
