<template>
  <article class="prose-article">
    <h2>Warum EN 16931 allein nicht reicht</h2>
    <p>EN 16931 definiert ein <strong>semantisches Datenmodell</strong> für Rechnungen: Verkäufer, Käufer, Positionen, Steuern, Summen. Das Modell ist bewusst generisch — es soll für alle Branchen und alle EU-Länder funktionieren.</p>
    <p>In der Praxis fehlen vielen Branchen entscheidende Felder:</p>
    <ul>
      <li>Ein <strong>Bauunternehmen</strong> stellt Abschlagsrechnungen mit Sicherheitseinbehalten. EN 16931 kennt weder das eine noch das andere.</li>
      <li>Ein <strong>Krankenhaus</strong> rechnet über DRG-Fallpauschalen mit Kostenträgern ab. Die Fallnummer, ICD-10-Diagnose und der Kostenträger haben kein Feld im Standard.</li>
      <li>Ein <strong>Logistikdienstleister</strong> referenziert CMR-Frachtbriefe und Zolltarifnummern. Der Standard sieht keine strukturierten Transportdokumentreferenzen vor.</li>
    </ul>
    <p>Die Lösung: <strong>Branchenerweiterungen</strong> nach CEN/TS 16931-5.</p>

    <h2>Was CEN/TS 16931-5 definiert</h2>
    <p>Die technische Spezifikation CEN/TS 16931-5 regelt, <em>wie</em> EN 16931 erweitert werden darf, ohne die Interoperabilität zu brechen. Die Kernregeln:</p>

    <h3>Extension-Regeln</h3>
    <ol>
      <li><strong>Pflichtfelder bleiben Pflicht.</strong> Eine Extension darf keine Kernfelder entfernen oder deren Semantik ändern.</li>
      <li><strong>Neue Felder kommen in Extension Points.</strong> EN 16931 definiert explizite Stellen (auf Dokument-, Positions- und Steuerebene), an denen zusätzliche Felder eingefügt werden dürfen.</li>
      <li><strong>CustomizationID identifiziert die Extension.</strong> Jede Erweiterung hat eine eindeutige ID, die im Dokument angegeben wird. Empfänger erkennen daran, welche zusätzlichen Felder zu erwarten sind.</li>
      <li><strong>Extensions müssen validierbar sein.</strong> Zusätzliche Felder brauchen ein eigenes Schema mit Datentypen, Kardinalitäten und Geschäftsregeln.</li>
    </ol>

    <p>Das bedeutet: Ein System, das EN 16931 versteht, kann eine erweiterte Rechnung immer noch als gültige Basisrechnung verarbeiten — die zusätzlichen Felder werden ignoriert, wenn der Empfänger die Extension nicht kennt. Die Abwärtskompatibilität bleibt erhalten.</p>

    <h2>Branchenerweiterung Bauwirtschaft</h2>
    <p>Die <strong>E-Rechnung Bauwirtschaft</strong> ist der häufigste Anwendungsfall für Extensions in Deutschland. Bauprojekte arbeiten mit Teilrechnungen, Rückbehalten und normspezifischen Kostengliederungen, die im Standardmodell nicht abbildbar sind.</p>

    <h3>Typische Zusatzfelder</h3>
    <table>
      <thead>
        <tr>
          <th>Feld</th>
          <th>Zweck</th>
          <th>Beispiel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Abschlagsrechnung-Typ</strong></td>
          <td>1. bis n-te Abschlagsrechnung oder Schlussrechnung</td>
          <td><code>partial_invoice_3</code></td>
        </tr>
        <tr>
          <td><strong>Sicherheitseinbehalt</strong></td>
          <td>Prozentualer Rückbehalt gem. VOB/B</td>
          <td><code>5.0%</code> (Gewährleistung)</td>
        </tr>
        <tr>
          <td><strong>DIN 276 Kostengruppe</strong></td>
          <td>Zuordnung zu Baukostengruppen</td>
          <td><code>300</code> (Bauwerk — Baukonstruktionen)</td>
        </tr>
        <tr>
          <td><strong>GAEB-Referenz</strong></td>
          <td>Verweis auf Leistungsverzeichnis-Position</td>
          <td><code>LV-2024-001:03.02.010</code></td>
        </tr>
        <tr>
          <td><strong>Bauvorhaben-ID</strong></td>
          <td>Projektzuordnung über mehrere Rechnungen</td>
          <td><code>BV-2026-Karlstein-Neubau</code></td>
        </tr>
      </tbody>
    </table>

    <p>Ohne diese Felder müssten Bauunternehmen die Informationen in Freitextfelder packen — was die automatische Verarbeitung unmöglich macht. Mit einer strukturierten Extension validiert das System Sicherheitseinbehalte gegen Vertragsbedingungen und ordnet Positionen automatisch DIN-276-Kostengruppen zu.</p>

    <h2>Branchenerweiterung Gesundheitswesen</h2>
    <p>Das <strong>Gesundheitswesen</strong> hat eigene Abrechnungslogiken, die weit über den EN-16931-Standard hinausgehen. Krankenhäuser rechnen über DRG-Fallpauschalen ab, ambulante Leistungen nach EBM oder GOÄ, und der Kostenträger ist nicht der Patient.</p>

    <h3>Typische Zusatzfelder</h3>
    <table>
      <thead>
        <tr>
          <th>Feld</th>
          <th>Zweck</th>
          <th>Beispiel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>DRG-Code</strong></td>
          <td>Diagnosis Related Group für stationäre Fälle</td>
          <td><code>F67B</code></td>
        </tr>
        <tr>
          <td><strong>ICD-10-Diagnose</strong></td>
          <td>Haupt- und Nebendiagnosen</td>
          <td><code>I25.11</code> (KHK)</td>
        </tr>
        <tr>
          <td><strong>Kostenträger-IK</strong></td>
          <td>Institutionskennzeichen der Krankenkasse</td>
          <td><code>109519005</code> (AOK Bayern)</td>
        </tr>
        <tr>
          <td><strong>Fallnummer</strong></td>
          <td>Eindeutige Behandlungsfall-ID</td>
          <td><code>2026-KH-004217</code></td>
        </tr>
        <tr>
          <td><strong>Behandlungszeitraum</strong></td>
          <td>Aufnahme- und Entlassungsdatum</td>
          <td><code>2026-03-01 bis 2026-03-08</code></td>
        </tr>
      </tbody>
    </table>

    <p>Die Herausforderung: Im Gesundheitswesen ist der Rechnungsempfänger (Krankenkasse) nicht der Leistungsempfänger (Patient). Die Extension muss diese Drei-Parteien-Beziehung abbilden und gleichzeitig datenschutzkonform bleiben.</p>

    <h2>Branchenerweiterung Logistik</h2>
    <p>In der <strong>Logistik</strong> sind Rechnungen eng mit Transportdokumenten verknüpft. Ohne strukturierte Referenzen auf Frachtbriefe, Zolldaten und Lieferbedingungen ist keine automatische Zuordnung möglich.</p>

    <h3>Typische Zusatzfelder</h3>
    <table>
      <thead>
        <tr>
          <th>Feld</th>
          <th>Zweck</th>
          <th>Beispiel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>CMR/AWB-Nummer</strong></td>
          <td>Frachtbriefreferenz (Straße/Luft)</td>
          <td><code>CMR-2026-DE-00471</code></td>
        </tr>
        <tr>
          <td><strong>Incoterms</strong></td>
          <td>Lieferbedingung nach ICC 2020</td>
          <td><code>DAP Frankfurt</code></td>
        </tr>
        <tr>
          <td><strong>Zolltarifnummer</strong></td>
          <td>HS-Code für grenzüberschreitende Sendungen</td>
          <td><code>8471.30.00</code> (Laptops)</td>
        </tr>
        <tr>
          <td><strong>Gefahrgutklasse</strong></td>
          <td>ADR/IMDG-Klassifizierung</td>
          <td><code>3</code> (entzündbare Flüssigkeiten)</td>
        </tr>
        <tr>
          <td><strong>Container-ID</strong></td>
          <td>ISO 6346 Containernummer</td>
          <td><code>MSCU1234567</code></td>
        </tr>
      </tbody>
    </table>

    <h2>Branchenerweiterung Automotive</h2>
    <p>Die <strong>Automotive</strong>-Branche hat spezifische Anforderungen bei Leasing, Flottenmanagement und Ersatzteilhandel.</p>

    <h3>Typische Zusatzfelder</h3>
    <table>
      <thead>
        <tr>
          <th>Feld</th>
          <th>Zweck</th>
          <th>Beispiel</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>FIN/VIN</strong></td>
          <td>Fahrzeug-Identifikationsnummer</td>
          <td><code>WVWZZZ3CZWE123456</code></td>
        </tr>
        <tr>
          <td><strong>Leasingvertragsnummer</strong></td>
          <td>Zuordnung zur Leasingrate</td>
          <td><code>LS-2024-DE-00891</code></td>
        </tr>
        <tr>
          <td><strong>Leasingrate-Typ</strong></td>
          <td>Monatliche Rate, Sonderzahlung, Restwert</td>
          <td><code>monthly</code></td>
        </tr>
        <tr>
          <td><strong>OE-Teilenummer</strong></td>
          <td>Original-Ersatzteil-Identifikation</td>
          <td><code>1K0 615 301 AA</code></td>
        </tr>
      </tbody>
    </table>

    <h2>Wie Extensions technisch funktionieren</h2>
    <p>Eine Branchenerweiterung besteht aus drei Komponenten:</p>
    <ol>
      <li><strong>Schema-Definition:</strong> Ein JSON- oder XML-Schema beschreibt die zusätzlichen Felder mit Datentypen, Pflicht/Optional-Kennzeichen und erlaubten Werten. Das Schema wird über die <code>CustomizationID</code> referenziert.</li>
      <li><strong>Validierungsregeln:</strong> Geschäftsregeln, die über reine Datentyp-Prüfung hinausgehen. Beispiel: „Wenn Abschlagsrechnung, dann muss Sicherheitseinbehalt angegeben sein."</li>
      <li><strong>Serialisierung:</strong> Die Erweiterungsfelder werden in die UBL- oder CII-XML-Struktur eingebettet — an den definierten Extension Points.</li>
    </ol>

    <p>Im UBL-Format sieht eine Extension so aus:</p>
    <pre><code>&lt;ext:UBLExtensions&gt;
  &lt;ext:UBLExtension&gt;
    &lt;ext:ExtensionContent&gt;
      &lt;construction:RetentionRate&gt;5.0&lt;/construction:RetentionRate&gt;
      &lt;construction:PartialInvoiceNumber&gt;3&lt;/construction:PartialInvoiceNumber&gt;
      &lt;construction:ProjectID&gt;BV-2026-Karlstein&lt;/construction:ProjectID&gt;
    &lt;/ext:ExtensionContent&gt;
  &lt;/ext:UBLExtension&gt;
&lt;/ext:UBLExtensions&gt;</code></pre>

    <p>Ein Empfänger, der die Bau-Extension nicht kennt, ignoriert den <code>UBLExtensions</code>-Block und verarbeitet die Rechnung als Standard-EN-16931-Dokument. Ein Empfänger mit Bau-Extension validiert die zusätzlichen Felder und verarbeitet sie automatisch.</p>

    <h2>Verfügbare Extensions</h2>
    <ul>
      <li><strong>Bauwirtschaft:</strong> Abschlagsrechnungen, Sicherheitseinbehalte, DIN 276, GAEB</li>
      <li><strong>Gesundheitswesen:</strong> DRG, ICD-10, Kostenträger, Fallnummern</li>
      <li><strong>Logistik:</strong> CMR/AWB, Incoterms, Zolltarifnummern, Container-IDs</li>
      <li><strong>Automotive:</strong> Leasing, FIN/VIN, OE-Teilenummern</li>
    </ul>

    <p>Neue Extensions lassen sich als JSON-Schema-Dateien hinzufügen, ohne den API-Code zu ändern. Das Schema wird beim Start geladen und steht sofort für Validierung und Generierung zur Verfügung.</p>

    <h2>Fazit: Extensions machen E-Rechnungen branchentauglich</h2>
    <p>EN 16931 ist das Fundament. Für branchenspezifische Anforderungen brauchen Sie Extensions nach CEN/TS 16931-5. Die gute Nachricht: Der Standard hat das von Anfang an vorgesehen. Extensions sind keine Hacks — sie sind der offizielle Erweiterungsmechanismus.</p>
    <p>Entscheidend ist die Wahl eines Systems, das Extensions als Konzept versteht und nicht nur als Freitext-Workaround. Strukturierte Erweiterungen ermöglichen automatische Validierung und Verarbeitung — genau das, was die E-Rechnungspflicht bezweckt.</p>
    <RelatedArticles slug="en16931-branchenerweiterungen" />
  </article>
</template>

<script setup>
import RelatedArticles from '../../components/RelatedArticles.vue'
</script>
