<template>
  <article class="prose-article">
    <h2>Warum Sie 2026 mit E-Rechnungen starten sollten</h2>
    <p>
      Seit dem 1. Januar 2025 müssen alle Unternehmen in Deutschland elektronische Rechnungen empfangen können. Ab 2027 wird auch der Versand für Unternehmen mit über 800.000 Euro Vorjahresumsatz zur Pflicht — ab 2028 für alle. Wer jetzt die erste E-Rechnung erstellt, gewinnt Routine, bevor der Zeitdruck kommt.
    </p>
    <p>
      Diese Schritt-für-Schritt Anleitung zeigt Ihnen den kompletten Weg: vom richtigen Format über die Pflichtfelder bis zum Versand Ihrer ersten E-Rechnung. Kein Vorwissen nötig.
    </p>

    <h2>Schritt 1: Das richtige Format wählen — XRechnung oder ZUGFeRD</h2>
    <p>
      Bevor Sie Ihre erste E-Rechnung erstellen, müssen Sie sich für ein Format entscheiden. In Deutschland sind zwei Standards relevant: <strong>XRechnung</strong> und <strong>ZUGFeRD</strong>. Beide erfüllen die europäische Norm EN 16931 — unterscheiden sich aber in Aufbau und Einsatzzweck.
    </p>

    <h3>XRechnung</h3>
    <p>
      XRechnung ist ein reines XML-Format. Es enthält ausschließlich maschinenlesbare, strukturierte Daten — kein PDF, kein visuelles Layout. Das Format ist der nationale Standard für Rechnungen an öffentliche Auftraggeber (B2G) und wird zunehmend auch im B2B-Bereich eingesetzt.
    </p>

    <h3>ZUGFeRD</h3>
    <p>
      ZUGFeRD (auch bekannt als Factur-X) kombiniert ein PDF/A-3-Dokument mit einer eingebetteten XML-Datei. Der Vorteil: Die Rechnung ist sowohl menschenlesbar als auch maschinenverarbeitbar. Für den B2B-Bereich ist mindestens das Profil „EN 16931" nötig.
    </p>

    <h3>Vergleich: XRechnung vs ZUGFeRD</h3>
    <table>
      <thead>
        <tr><th>Kriterium</th><th>XRechnung</th><th>ZUGFeRD</th></tr>
      </thead>
      <tbody>
        <tr><td>Datenformat</td><td>Reines XML (UBL oder CII)</td><td>PDF/A-3 + eingebettetes XML</td></tr>
        <tr><td>Menschenlesbar</td><td>Nein (nur mit Viewer)</td><td>Ja (PDF-Ansicht)</td></tr>
        <tr><td>Maschinenlesbar</td><td>Ja</td><td>Ja (über XML-Teil)</td></tr>
        <tr><td>B2G (öffentliche Auftraggeber)</td><td>Pflichtformat</td><td>Nur mit Profil „XRechnung"</td></tr>
        <tr><td>B2B (Unternehmen)</td><td>Zulässig</td><td>Zulässig (ab Profil EN 16931)</td></tr>
        <tr><td>Norm</td><td>EN 16931 + CIUS-DE</td><td>EN 16931</td></tr>
        <tr><td>Typischer Einsatz</td><td>Behörden, große Unternehmen</td><td>KMU, Handwerk, Freiberufler</td></tr>
        <tr><td>Dateigröße</td><td>Klein (wenige KB)</td><td>Größer (PDF + XML)</td></tr>
      </tbody>
    </table>

    <p>
      <strong>Faustregel:</strong> Rechnungen an Behörden erfordern XRechnung. Für B2B-Rechnungen zwischen Unternehmen eignet sich ZUGFeRD oft besser, weil Ihre Geschäftspartner die Rechnung auch ohne spezielle Software lesen können. Mehr dazu in unserem Vergleich <router-link to="/blog/xrechnung-vs-zugferd">XRechnung vs ZUGFeRD</router-link>.
    </p>

    <h2>Schritt 2: Pflichtfelder kennen</h2>
    <p>
      Eine E-Rechnung ist nur gültig, wenn sie bestimmte Pflichtangaben enthält. Die EN 16931 definiert rund 165 Felder — aber nur ein Teil davon ist verpflichtend. Die wichtigsten Pflichtfelder:
    </p>

    <h3>Rechnungskopf</h3>
    <ul>
      <li><strong>Rechnungsnummer</strong> — eindeutig und fortlaufend</li>
      <li><strong>Rechnungsdatum</strong> — im Format YYYY-MM-DD</li>
      <li><strong>Rechnungsart</strong> — z. B. 380 (Rechnung) oder 381 (Gutschrift)</li>
      <li><strong>Währungscode</strong> — z. B. EUR</li>
      <li><strong>Leitweg-ID</strong> — nur bei B2G-Rechnungen (XRechnung), aber auch im B2B-Bereich sinnvoll</li>
    </ul>

    <h3>Verkäufer und Käufer</h3>
    <ul>
      <li><strong>Name und Anschrift</strong> — von beiden Parteien</li>
      <li><strong>Umsatzsteuer-ID</strong> oder Steuernummer</li>
      <li><strong>Kontaktdaten</strong> — optional, aber empfohlen</li>
    </ul>

    <h3>Rechnungspositionen</h3>
    <ul>
      <li><strong>Positionsnummer</strong></li>
      <li><strong>Bezeichnung</strong> der Ware oder Dienstleistung</li>
      <li><strong>Menge und Einheit</strong></li>
      <li><strong>Einzelpreis (netto)</strong></li>
      <li><strong>Umsatzsteuersatz und -betrag</strong></li>
      <li><strong>Positionsbetrag (netto)</strong></li>
    </ul>

    <h3>Summen und Zahlungsinformationen</h3>
    <ul>
      <li><strong>Gesamtbetrag netto</strong></li>
      <li><strong>Umsatzsteuerbetrag</strong></li>
      <li><strong>Gesamtbetrag brutto</strong> (Zahlbetrag)</li>
      <li><strong>Zahlungsbedingungen</strong> — Fälligkeitsdatum, Skonto</li>
      <li><strong>Bankverbindung</strong> — IBAN, BIC</li>
    </ul>

    <p>
      Vergessen Sie ein Pflichtfeld, wird die Rechnung bei der Validierung abgelehnt. Achten Sie besonders auf die Umsatzsteuer-ID — sie ist die häufigste Fehlerquelle.
    </p>

    <h2>Schritt 3: Software oder Tool auswählen</h2>
    <p>
      Für das Erstellen von E-Rechnungen gibt es drei Wege — je nach Rechnungsvolumen und technischem Know-how.
    </p>

    <h3>Option A: Buchhaltungssoftware mit E-Rechnungsfunktion</h3>
    <p>
      Die meisten modernen Buchhaltungslösungen (Lexware, SevDesk, FastBill, DATEV) bieten inzwischen XRechnung- und ZUGFeRD-Export an. Ideal für KMU und Freiberufler mit überschaubarem Volumen.
    </p>

    <h3>Option B: Spezialisierte E-Rechnung-Software</h3>
    <p>
      Tools wie Easybill oder spezielle E-Invoicing-Plattformen bieten erweiterte Funktionen: Validierung, Peppol-Versand, Archivierung. Sinnvoll bei mittlerem bis hohem Volumen. Einen ausführlichen Vergleich finden Sie in unserem Artikel <router-link to="/blog/e-rechnung-software-vergleich-2026">E-Rechnung-Software im Vergleich 2026</router-link>.
    </p>

    <h3>Option C: API-basierte Lösung</h3>
    <p>
      Über eine REST-API erstellen Sie E-Rechnungen direkt aus Ihrem ERP oder Ihrer eigenen Anwendung. Maximale Automatisierung und Flexibilität — erfordert aber technische Integration. Für Entwickler haben wir eine detaillierte Anleitung: <router-link to="/blog/xrechnung-implementieren">XRechnung implementieren</router-link>.
    </p>

    <h2>Schritt 4: Erste E-Rechnung erstellen</h2>
    <p>
      Unabhängig vom gewählten Tool folgt der Prozess immer dem gleichen Ablauf:
    </p>
    <ol>
      <li><strong>Rechnungsdaten erfassen:</strong> Empfänger, Positionen, Beträge, Steuersätze eingeben oder aus dem ERP übernehmen.</li>
      <li><strong>Format wählen:</strong> XRechnung (für B2G) oder ZUGFeRD (für B2B) — je nach Empfänger.</li>
      <li><strong>Leitweg-ID eintragen:</strong> Bei Rechnungen an Behörden zwingend. Fragen Sie Ihren öffentlichen Auftraggeber nach der korrekten ID.</li>
      <li><strong>Rechnung generieren:</strong> Die Software erzeugt die XML-Datei (XRechnung) oder das PDF mit eingebettetem XML (ZUGFeRD).</li>
      <li><strong>Vorschau prüfen:</strong> Kontrollieren Sie alle Angaben — insbesondere Beträge, Steuersätze und die Empfängerdaten.</li>
    </ol>

    <p>
      <strong>Tipp:</strong> Erstellen Sie Ihre erste E-Rechnung als Test. Nutzen Sie dafür einen realen Geschäftsvorfall, aber versenden Sie die Rechnung noch nicht. So können Sie den Prozess ohne Risiko durchspielen.
    </p>

    <h2>Schritt 5: E-Rechnung validieren</h2>
    <p>
      Vor dem Versand müssen Sie sicherstellen, dass Ihre E-Rechnung den technischen Anforderungen entspricht. Eine ungültige Rechnung wird vom Empfänger abgelehnt — das kostet Zeit und schadet der Geschäftsbeziehung.
    </p>

    <h3>Was wird geprüft?</h3>
    <ul>
      <li><strong>Schema-Validierung:</strong> Stimmt die XML-Struktur? Sind alle Pflichtfelder vorhanden?</li>
      <li><strong>Schematron-Regeln:</strong> Sind die Geschäftsregeln der EN 16931 eingehalten? (z. B. Steuersummen korrekt berechnet)</li>
      <li><strong>CIUS-DE-Regeln:</strong> Bei XRechnung: Werden die deutschen Zusatzanforderungen erfüllt?</li>
    </ul>

    <h3>Validierungstools</h3>
    <ul>
      <li><strong>KoSIT Validator:</strong> Das offizielle Tool der Koordinierungsstelle für IT-Standards. Prüft XRechnung und ZUGFeRD gegen die aktuellen Schematron-Regeln.</li>
      <li><strong>Integrierte Validierung:</strong> Gute E-Rechnung-Software validiert automatisch vor dem Versand.</li>
      <li><strong>API-Validierung:</strong> API-First-Plattformen bieten einen Validierungsendpunkt, der die Rechnung vor dem Versand prüft.</li>
    </ul>

    <p>
      Validieren Sie jede Rechnung vor dem Versand. Auch wenn Ihre Software das automatisch tut — bei den ersten Rechnungen lohnt sich eine zusätzliche Prüfung mit dem KoSIT Validator.
    </p>

    <h2>Schritt 6: E-Rechnung versenden</h2>
    <p>
      Ihre E-Rechnung ist erstellt und validiert. Jetzt muss sie den Empfänger erreichen. Je nach Empfänger gibt es unterschiedliche Versandwege:
    </p>

    <h3>Per E-Mail</h3>
    <p>
      Der einfachste Weg: XML-Datei (XRechnung) oder PDF mit XML (ZUGFeRD) als Anhang an die Rechnungsadresse des Empfängers senden. Für den B2B-Bereich aktuell der häufigste Kanal. Achten Sie darauf, dass der Empfänger XML-Anhänge akzeptiert.
    </p>

    <h3>Über ein Portal</h3>
    <p>
      Für Rechnungen an Bundesbehörden nutzen Sie die <strong>Zentrale Rechnungseingangsplattform (ZRE)</strong> des Bundes. Viele Landesbehörden betreiben eigene Portale (z. B. OZG-RE). Sie laden die XRechnung hoch und erhalten eine Eingangsbestätigung.
    </p>

    <h3>Über Peppol</h3>
    <p>
      <strong>Peppol</strong> (Pan-European Public Procurement OnLine) ist ein standardisiertes Netzwerk für den automatisierten Austausch von Geschäftsdokumenten. Vorteil: Der Empfänger wird automatisch über seine Peppol-ID identifiziert. Zustellung und Empfangsbestätigung laufen über das Netzwerk. Peppol wird voraussichtlich der Standard-Kanal für das ab 2028 geplante Meldesystem.
    </p>

    <h3>Welcher Kanal für welchen Empfänger?</h3>
    <table>
      <thead>
        <tr><th>Empfänger</th><th>Empfohlener Kanal</th><th>Format</th></tr>
      </thead>
      <tbody>
        <tr><td>Bundesbehörden</td><td>ZRE-Portal</td><td>XRechnung</td></tr>
        <tr><td>Landesbehörden</td><td>Landesportal (z. B. OZG-RE)</td><td>XRechnung</td></tr>
        <tr><td>Unternehmen (B2B)</td><td>E-Mail oder Peppol</td><td>ZUGFeRD oder XRechnung</td></tr>
        <tr><td>Internationale Partner</td><td>Peppol</td><td>Peppol BIS Billing 3.0</td></tr>
      </tbody>
    </table>

    <h2>Häufige Fehler beim E-Rechnung erstellen</h2>
    <ul>
      <li><strong>Falsches Profil bei ZUGFeRD:</strong> Nur die Profile „EN 16931" und „Extended" gelten als E-Rechnung im Sinne des Gesetzes. „Basic" oder „Minimum" reichen nicht.</li>
      <li><strong>Fehlende Leitweg-ID:</strong> Bei B2G-Rechnungen zwingend. Ohne Leitweg-ID wird die Rechnung vom Portal abgelehnt.</li>
      <li><strong>Steuersätze nicht korrekt zugeordnet:</strong> Jede Position braucht einen expliziten Steuersatz. Gemischte Steuersätze innerhalb einer Position sind nicht erlaubt.</li>
      <li><strong>PDF ohne XML verschickt:</strong> Ein reines PDF ist keine E-Rechnung. Ab 2027/2028 wird es nicht mehr akzeptiert.</li>
      <li><strong>Nicht validiert:</strong> Ohne Validierung riskieren Sie Rückläufer und Verzögerungen.</li>
    </ul>

    <h2>Checkliste: Ihre erste E-Rechnung</h2>
    <ol>
      <li>Format gewählt (XRechnung oder ZUGFeRD)</li>
      <li>Alle Pflichtfelder ausgefüllt</li>
      <li>Umsatzsteuer-ID und Steuersätze korrekt</li>
      <li>Leitweg-ID eingetragen (bei B2G)</li>
      <li>Rechnung mit KoSIT Validator geprüft</li>
      <li>Versandkanal geklärt (E-Mail, Portal, Peppol)</li>
      <li>Archivierung GoBD-konform eingerichtet</li>
    </ol>

    <h2>Nächste Schritte</h2>
    <p>
      Sie haben Ihre erste E-Rechnung erstellt. Wie geht es weiter?
    </p>
    <ul>
      <li>Prüfen Sie mit unserem <router-link to="/e-rechnung/pflicht-check">Pflicht-Check</router-link>, ab wann für Ihr Unternehmen die Versandpflicht gilt.</li>
      <li>Informieren Sie sich über die <router-link to="/blog/xrechnung-pflicht-2027">XRechnung-Pflicht 2027</router-link> und die konkreten Fristen.</li>
      <li>Sie sind im Handwerk tätig? Lesen Sie unseren Spezialartikel <router-link to="/blog/e-rechnung-handwerk">E-Rechnung im Handwerk</router-link>.</li>
      <li>Erfahren Sie mehr über unsere <router-link to="/e-rechnung">E-Rechnungslösungen</router-link> — von der Erstellung bis zur Archivierung.</li>
    </ul>

    <h2>Fazit</h2>
    <p>
      E-Rechnungen zu erstellen ist kein Hexenwerk. Mit dem richtigen Format, vollständigen Pflichtfeldern und einer Validierung vor dem Versand sind Sie auf der sicheren Seite. Starten Sie jetzt mit einer Testrechnung — je früher Sie Routine aufbauen, desto entspannter wird die Umstellung.
    </p>
  </article>
</template>
