<template>
  <article class="prose-article">
    <h2>E-Rechnung: Die 10 häufigsten Fehler und wie Sie sie vermeiden</h2>
    <p>
      Die E-Rechnungspflicht kommt — und mit ihr eine neue Fehlerquelle. Während klassische PDF-Rechnungen selten an Formatproblemen scheitern, werden fehlerhafte E-Rechnungen vom Empfängersystem automatisch abgelehnt. Die Folgen: verzögerte Zahlungen, manueller Korrekturaufwand und im schlimmsten Fall Compliance-Verstöße.
    </p>
    <p>
      Besonders tückisch: Viele Fehler fallen erst auf, wenn die Rechnung beim Empfänger ankommt — oder gar nicht ankommt. Wer die häufigsten Stolperfallen kennt, spart sich Ärger, Nacharbeit und Geld. Dieser Artikel zeigt die zehn Fehler, die in der Praxis am häufigsten auftreten, und erklärt, wie Sie jeden einzelnen vermeiden.
    </p>

    <h2>Fehler 1: Falsche Leitweg-ID</h2>
    <p>
      Die Leitweg-ID ist die zentrale Adresse für E-Rechnungen an öffentliche Auftraggeber. Sie identifiziert den Empfänger eindeutig im System. Eine falsche oder fehlende Leitweg-ID führt dazu, dass die Rechnung nicht zugestellt werden kann — das System weist sie ab, bevor ein Mensch sie je sieht.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Die Leitweg-ID wird aus einer alten E-Mail oder einem veralteten Vertrag übernommen, statt sie direkt beim Auftraggeber zu erfragen.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Fragen Sie die Leitweg-ID immer direkt beim Auftraggeber an. Prüfen Sie das Format: Eine typische Leitweg-ID folgt dem Schema <em>04011000-1234512345-06</em>. Speichern Sie die ID in Ihrer Rechnungssoftware beim Kundenstamm, nicht nur im Freitext.
    </p>

    <h2>Fehler 2: Fehlende Pflichtfelder (BT-Referenzen)</h2>
    <p>
      Die europäische Norm EN 16931 definiert über 150 Felder für E-Rechnungen — viele davon sind Pflichtfelder. Fehlt ein Pflichtfeld, schlägt die Validierung fehl. Besonders häufig fehlen die Bestellreferenz (BT-13), die Käuferreferenz (BT-10) oder die Umsatzsteuer-ID des Empfängers (BT-48).
    </p>
    <p>
      <strong>Typische Ursache:</strong> Die Rechnungssoftware bildet nicht alle Pflichtfelder ab, oder Sachbearbeiter überspringen optionale Felder, die in bestimmten Konstellationen Pflicht sind.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Verwenden Sie eine Software, die EN 16931 vollständig unterstützt. Prüfen Sie jede Rechnung vor dem Versand mit einem Validierungstool. Die <router-link to="/e-rechnung">E-Rechnungslösung von Solytics</router-link> validiert automatisch gegen den aktuellen Standard.
    </p>

    <h2>Fehler 3: Falsche USt-Berechnung</h2>
    <p>
      Fehlerhafte Umsatzsteuerbeträge sind der häufigste Grund für Rechnungskorrekturen — auch bei E-Rechnungen. Das Problem wird verschärft, weil E-Rechnungssysteme die Beträge maschinell prüfen: Passt die Summe der Positionsbeträge nicht zum Gesamtbetrag, oder stimmt der berechnete Steuerbetrag nicht mit dem angegebenen Steuersatz überein, wird die Rechnung abgelehnt.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Rundungsdifferenzen bei vielen Einzelpositionen, falsche Steuersätze bei innergemeinschaftlichen Lieferungen oder vergessene Reverse-Charge-Kennzeichnung bei § 13b UStG.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Lassen Sie die Steuerberechnung immer von der Software übernehmen — nie manuell rechnen. Prüfen Sie die Konfiguration: Stimmen die Steuerkategorien? Sind Rundungsregeln korrekt eingestellt? Testen Sie besonders Sonderfälle wie 0%-Sätze, Reverse-Charge und steuerfreie Umsätze.
    </p>

    <h2>Fehler 4: Ungültiges XML-Format (Schema-Validierung)</h2>
    <p>
      E-Rechnungen basieren auf XML — entweder UBL (XRechnung) oder UN/CEFACT CII (ZUGFeRD). Ein einziges fehlendes Tag, ein falscher Namespace oder ein ungültiges Zeichen im XML macht die gesamte Rechnung ungültig. Die Schema-Validierung ist die erste Hürde, die jede E-Rechnung nehmen muss.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Eigenentwicklungen ohne Schema-Validierung, veraltete Bibliotheken, die eine ältere Schema-Version verwenden, oder manuelle XML-Bearbeitung.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Validieren Sie jede erzeugte Rechnung gegen das offizielle XSD-Schema. Nutzen Sie das Validierungstool der KoSIT oder integrieren Sie die Validierung in Ihren Erstellungsprozess. Entwickler finden in unserem Artikel <router-link to="/blog/xrechnung-implementieren">XRechnung implementieren</router-link> eine Schritt-für-Schritt-Anleitung mit korrekter Schema-Handhabung.
    </p>

    <h2>Fehler 5: Fehlende oder falsche Bankverbindung</h2>
    <p>
      Ohne korrekte Bankverbindung kann der Empfänger nicht zahlen — so einfach ist das. In der E-Rechnung werden IBAN und BIC in strukturierten Feldern übertragen. Tippfehler, die in einer PDF-Rechnung auffallen würden, werden hier vom System nicht automatisch erkannt — die IBAN-Prüfsumme passt trotzdem, aber das Geld landet auf dem falschen Konto.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Veraltete Bankverbindung im Kundenstamm, Copy-Paste-Fehler oder fehlende Aktualisierung nach einem Kontowechsel.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Pflegen Sie die Bankverbindung zentral in den Stammdaten Ihrer Software. Nutzen Sie die IBAN-Validierung (Prüfziffernkontrolle) vor dem Versand. Informieren Sie Geschäftspartner proaktiv bei Kontoänderungen.
    </p>

    <h2>Fehler 6: Verwechslung XRechnung und ZUGFeRD</h2>
    <p>
      XRechnung und ZUGFeRD sind beide EN 16931-konform — aber sie sind nicht dasselbe. <router-link to="/blog/xrechnung-vs-zugferd">XRechnung ist reines XML</router-link>, ZUGFeRD ein PDF mit eingebettetem XML. Öffentliche Auftraggeber verlangen in der Regel XRechnung. Wer stattdessen ZUGFeRD liefert, riskiert eine Ablehnung — und umgekehrt.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Unklare Anforderungen des Empfängers, oder die Software erzeugt nur eines der beiden Formate, ohne dass der Nutzer es merkt.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Klären Sie vor dem ersten Rechnungsversand, welches Format der Empfänger erwartet. Konfigurieren Sie das Format pro Kunde in Ihrer Software. Dokumentieren Sie die Formatanforderung im Kundenstamm.
    </p>

    <h2>Fehler 7: Keine Anhänge bei Bedarf (z.B. Leistungsnachweise)</h2>
    <p>
      Eine E-Rechnung kann Anhänge enthalten — Leistungsnachweise, Stundenlisten, Aufmaße oder Verträge. Viele Empfänger erwarten diese Anhänge, weil sie für die interne Freigabe benötigt werden. Fehlen sie, wird die Rechnung nicht abgelehnt, aber die Zahlung verzögert sich, weil Rückfragen nötig sind.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Der Rechnungsersteller weiß nicht, dass Anhänge in der E-Rechnung eingebettet werden können, oder die Software unterstützt keine Anhänge.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Klären Sie mit jedem Kunden, welche Nachweise zur Rechnung erwartet werden. Nutzen Sie das Feld „AdditionalDocumentReference" in der XRechnung, um PDFs oder Bilder einzubetten. Halten Sie Anhänge klein — maximal 15 MB pro Rechnung ist eine gängige Grenze.
    </p>

    <h2>Fehler 8: Falsche Datumsformate</h2>
    <p>
      E-Rechnungen erfordern Datumsangaben im ISO-Format: <em>YYYY-MM-DD</em>. Rechnungsdatum, Leistungsdatum und Fälligkeitsdatum müssen exakt diesem Format entsprechen. Ein Datum wie „15.03.2027" oder „March 15, 2027" führt zur Ablehnung bei der Schema-Validierung.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Die Software verwendet intern ein anderes Datumsformat und konvertiert nicht korrekt. Besonders bei Eigenentwicklungen oder Excel-basierten Lösungen tritt dieses Problem auf.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Stellen Sie sicher, dass Ihre Software alle Datumsfelder im ISO-8601-Format (YYYY-MM-DD) ausgibt. Testen Sie mit Datum-Randfällen: Jahreswechsel, Monatswechsel und Schaltjahre.
    </p>

    <h2>Fehler 9: Encoding-Probleme (Umlaute)</h2>
    <p>
      Deutsche E-Rechnungen enthalten zwangsläufig Umlaute, Eszett und Sonderzeichen. Wenn die XML-Datei nicht UTF-8-kodiert ist oder die Encoding-Deklaration fehlt, werden Zeichen wie ä, ö, ü, ß zu kryptischen Zeichenfolgen — oder die Datei wird als ungültig abgewiesen.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Die XML-Datei wird mit Latin-1 (ISO-8859-1) oder Windows-1252 kodiert statt mit UTF-8. Oder die XML-Deklaration sagt UTF-8, aber der Inhalt ist anders kodiert.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Erzwingen Sie UTF-8 als Encoding in Ihrer Rechnungssoftware. Prüfen Sie die XML-Deklaration: <em>&lt;?xml version="1.0" encoding="UTF-8"?&gt;</em> muss vorhanden sein und mit dem tatsächlichen Encoding übereinstimmen. Testen Sie explizit mit Firmennamen und Adressen, die Umlaute enthalten.
    </p>

    <h2>Fehler 10: Kein Testversand vor Produktivstart</h2>
    <p>
      Der teuerste Fehler kommt zum Schluss: Viele Unternehmen erstellen ihre erste echte E-Rechnung, ohne jemals einen Testlauf gemacht zu haben. Die Rechnung geht raus, wird abgelehnt, und der Fehler wird erst sichtbar, wenn der Kunde sich meldet — oder gar nicht zahlt.
    </p>
    <p>
      <strong>Typische Ursache:</strong> Zeitdruck. Die E-Rechnungspflicht rückt näher, die Software wird in letzter Minute eingerichtet, und für Tests bleibt keine Zeit.
    </p>
    <p>
      <strong>So vermeiden Sie den Fehler:</strong> Planen Sie mindestens vier Wochen Testphase ein. Erstellen Sie Testrechnungen für alle Rechnungstypen: Standardrechnung, Abschlagsrechnung, Gutschrift, Reverse-Charge. Validieren Sie mit dem KoSIT-Prüftool. Senden Sie Testrechnungen an Geschäftspartner und bitten Sie um Rückmeldung. Nutzen Sie den <router-link to="/e-rechnung/pflicht-check">Pflicht-Check von Solytics</router-link>, um Ihre Bereitschaft zu prüfen.
    </p>

    <h2>Checkliste: Vor dem Versand jeder E-Rechnung prüfen</h2>
    <p>
      Bevor Sie eine E-Rechnung absenden, gehen Sie diese Punkte durch:
    </p>
    <ul>
      <li><strong>Leitweg-ID korrekt?</strong> Beim Empfänger bestätigt, aktuell im System hinterlegt.</li>
      <li><strong>Alle Pflichtfelder gefüllt?</strong> Bestellreferenz, Käuferreferenz, USt-ID des Empfängers vorhanden.</li>
      <li><strong>Steuerberechnung stimmt?</strong> Positionssummen ergeben den Gesamtbetrag, Steuersatz und -betrag passen.</li>
      <li><strong>XML valide?</strong> Schema-Validierung gegen aktuelles XSD erfolgreich durchgeführt.</li>
      <li><strong>Bankverbindung korrekt?</strong> IBAN und BIC aktuell, Prüfsumme gültig.</li>
      <li><strong>Richtiges Format?</strong> XRechnung oder ZUGFeRD — wie vom Empfänger gefordert.</li>
      <li><strong>Anhänge vollständig?</strong> Leistungsnachweise, Aufmaße oder sonstige geforderte Belege eingebettet.</li>
      <li><strong>Datumsformate ISO-konform?</strong> Alle Datumsfelder im Format YYYY-MM-DD.</li>
      <li><strong>Encoding UTF-8?</strong> XML-Deklaration und tatsächliches Encoding stimmen überein.</li>
      <li><strong>Testlauf durchgeführt?</strong> Mindestens eine Testrechnung erfolgreich validiert und zugestellt.</li>
    </ul>

    <h2>Fazit: Fehler vermeiden ist günstiger als Fehler korrigieren</h2>
    <p>
      Jede abgelehnte E-Rechnung kostet Zeit und Geld — für die Korrektur, den Neuversand und die verzögerte Zahlung. Die zehn häufigsten Fehler lassen sich mit dem richtigen Prozess und einer guten Software zuverlässig vermeiden. Investieren Sie in eine saubere Einrichtung und einen gründlichen Testlauf, bevor die E-Rechnungspflicht greift.
    </p>
    <p>
      Sie wollen sichergehen, dass Ihre E-Rechnungen fehlerfrei sind? <router-link to="/e-rechnung">Solytics unterstützt Sie</router-link> bei Einrichtung, Validierung und Testbetrieb — damit Ihre erste echte E-Rechnung auf Anhieb durchgeht. Starten Sie mit dem <router-link to="/e-rechnung/pflicht-check">kostenlosen Pflicht-Check</router-link>.
    </p>
  </article>
</template>
