import{_ as s,a as l}from"./FunnelCTA-C6wT6xaK.js";import{d,a as n,b as t,f as o,w as r,y as i,r as a,o as g}from"./app-CJUWskXV.js";import"./articles-BBVxtfnD.js";import"./blogPosts-Ho5VfD64.js";import"./LeadCaptureCTA-C0ub0Xc2.js";const c={class:"prose-article"},R={__name:"XRechnungImplementieren",setup(q){return(m,e)=>{const u=a("router-link");return g(),d("article",c,[e[35]||(e[35]=n("h2",null,"Warum XRechnung implementieren — und wer muss ab wann?",-1)),n("p",null,[e[1]||(e[1]=t("Empfangen müssen deutsche Unternehmen E-Rechnungen bereits seit dem 1. Januar 2025. Beim Versand läuft die Übergangsregelung des § 27 Abs. 38 UStG gestaffelt aus: Ab dem ",-1)),e[2]||(e[2]=n("strong",null,"1. Januar 2027",-1)),e[3]||(e[3]=t(" entfällt sie für Unternehmen mit mehr als ",-1)),e[4]||(e[4]=n("strong",null,"800.000 Euro Gesamtumsatz im Vorjahr",-1)),e[5]||(e[5]=t(", ab dem ",-1)),e[6]||(e[6]=n("strong",null,"1. Januar 2028",-1)),e[7]||(e[7]=t(" für alle übrigen. Maßgeblich ist der Umsatz des Rechnungsstellers, nicht des Empfängers. Details zu den Fristen klärt ",-1)),o(u,{to:"/blog/xrechnung-pflicht-2027/"},{default:r(()=>[...e[0]||(e[0]=[t("XRechnung-Pflicht 2027",-1)])]),_:1}),e[8]||(e[8]=t(".",-1))]),e[36]||(e[36]=n("p",null,[t("XRechnung ist der deutsche Standard nach "),n("strong",null,"EN 16931"),t(" — und das Pflichtformat für Rechnungen an öffentliche Auftraggeber. Wer Software für Rechnungsstellung entwickelt, kommt an XRechnung nicht vorbei.")],-1)),n("p",null,[e[10]||(e[10]=t("Dieser Artikel zeigt Ihnen als Entwickler den direkten Weg: XML-Struktur verstehen, Pflichtfelder korrekt befüllen, gegen EN 16931 validieren und per API automatisieren. Stand: Juli 2026, geprüft gegen die gültige Spezifikation ",-1)),e[11]||(e[11]=n("strong",null,"XRechnung 3.0.2",-1)),e[12]||(e[12]=t(". Den organisatorischen Rahmen zeigt der Leitfaden dazu, ",-1)),o(u,{to:"/blog/e-rechnung-steuerberater/"},{default:r(()=>[...e[9]||(e[9]=[t("wie Steuerberater ihre Mandanten auf die E-Rechnung umstellen",-1)])]),_:1}),e[13]||(e[13]=t(".",-1))]),e[37]||(e[37]=i(`<h2>1. UBL oder CII: Welche XML-Syntax soll ich wählen?</h2><p>XRechnung unterstützt zwei XML-Syntaxen. Beide sind gleichwertig gültig — die Wahl hängt von Ihrem Anwendungsfall ab.</p><h3>UBL 2.1 (Universal Business Language)</h3><p>UBL ist der international verbreitetere Standard. Die Rechnungsdaten liegen im Namespace <code>urn:oasis:names:specification:ubl:schema:xsd:Invoice-2</code>. Das Root-Element ist <code>&lt;Invoice&gt;</code>.</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Invoice xmlns=&quot;urn:oasis:names:specification:ubl:schema:xsd:Invoice-2&quot;
         xmlns:cac=&quot;urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2&quot;
         xmlns:cbc=&quot;urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2&quot;&gt;
  &lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0&lt;/cbc:CustomizationID&gt;
  &lt;cbc:ID&gt;RE-2026-001&lt;/cbc:ID&gt;
  &lt;cbc:IssueDate&gt;2026-03-22&lt;/cbc:IssueDate&gt;
  &lt;cbc:InvoiceTypeCode&gt;380&lt;/cbc:InvoiceTypeCode&gt;
  &lt;cbc:DocumentCurrencyCode&gt;EUR&lt;/cbc:DocumentCurrencyCode&gt;
  &lt;cac:AccountingSupplierParty&gt;
    &lt;!-- Rechnungssteller --&gt;
  &lt;/cac:AccountingSupplierParty&gt;
  &lt;cac:AccountingCustomerParty&gt;
    &lt;!-- Rechnungsempfänger --&gt;
  &lt;/cac:AccountingCustomerParty&gt;
  &lt;cac:LegalMonetaryTotal&gt;
    &lt;!-- Summen --&gt;
  &lt;/cac:LegalMonetaryTotal&gt;
  &lt;cac:InvoiceLine&gt;
    &lt;!-- Rechnungspositionen --&gt;
  &lt;/cac:InvoiceLine&gt;
&lt;/Invoice&gt;</code></pre><h3>UN/CEFACT CII (Cross-Industry Invoice)</h3><p>CII ist die UN-Syntax, die auch ZUGFeRD verwendet. Das Root-Element ist <code>&lt;CrossIndustryInvoice&gt;</code>. Die Daten sind hierarchisch in Trade-Blöcke gegliedert.</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;rsm:CrossIndustryInvoice
    xmlns:rsm=&quot;urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100&quot;
    xmlns:ram=&quot;urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100&quot;
    xmlns:udt=&quot;urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100&quot;&gt;
  &lt;rsm:ExchangedDocumentContext&gt;
    &lt;ram:GuidelineSpecifiedDocumentContextParameter&gt;
      &lt;ram:ID&gt;urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0&lt;/ram:ID&gt;
    &lt;/ram:GuidelineSpecifiedDocumentContextParameter&gt;
  &lt;/rsm:ExchangedDocumentContext&gt;
  &lt;rsm:ExchangedDocument&gt;
    &lt;ram:ID&gt;RE-2026-001&lt;/ram:ID&gt;
    &lt;ram:TypeCode&gt;380&lt;/ram:TypeCode&gt;
    &lt;ram:IssueDateTime&gt;
      &lt;udt:DateTimeString format=&quot;102&quot;&gt;20260322&lt;/udt:DateTimeString&gt;
    &lt;/ram:IssueDateTime&gt;
  &lt;/rsm:ExchangedDocument&gt;
  &lt;rsm:SupplyChainTradeTransaction&gt;
    &lt;!-- Handelspartner, Lieferung, Zahlung --&gt;
  &lt;/rsm:SupplyChainTradeTransaction&gt;
&lt;/rsm:CrossIndustryInvoice&gt;</code></pre><h3>UBL oder CII?</h3><p><strong>UBL</strong> eignet sich, wenn Sie international agieren oder PEPPOL nutzen. <strong>CII</strong> ist die Wahl, wenn Sie auch ZUGFeRD unterstützen wollen — ZUGFeRD verwendet ausschließlich CII.</p><h2>2. Welche Pflichtfelder braucht eine XRechnung?</h2><p>EN 16931 definiert rund 160 semantische Datenfelder (BT) in gut 30 Gruppen (BG). Nicht alle sind Pflicht. Die folgende Tabelle zeigt die <strong>Mindestanforderungen</strong> für eine gültige XRechnung:</p><table><thead><tr><th>BT-Nr.</th><th>Feld</th><th>Beschreibung</th><th>Beispielwert</th></tr></thead><tbody><tr><td>BT-1</td><td>Rechnungsnummer</td><td>Eindeutige Kennung der Rechnung</td><td><code>RE-2026-001</code></td></tr><tr><td>BT-2</td><td>Rechnungsdatum</td><td>Ausstellungsdatum</td><td><code>2026-03-22</code></td></tr><tr><td>BT-3</td><td>Rechnungsart</td><td>UNTDID 1001 Code</td><td><code>380</code> (Rechnung)</td></tr><tr><td>BT-5</td><td>Währung</td><td>ISO 4217 Währungscode</td><td><code>EUR</code></td></tr><tr><td>BT-27</td><td>Verkäufername</td><td>Name des Rechnungsstellers</td><td><code>Muster GmbH</code></td></tr><tr><td>BT-44</td><td>Käufername</td><td>Name des Rechnungsempfängers</td><td><code>Kunde AG</code></td></tr><tr><td>BT-109</td><td>Rechnungsbetrag ohne MwSt.</td><td>Gesamtbetrag exkl. MwSt.</td><td><code>1000.00</code></td></tr><tr><td>BT-110</td><td>MwSt.-Betrag</td><td>Summe der Umsatzsteuer</td><td><code>190.00</code></td></tr><tr><td>BT-112</td><td>Rechnungsbetrag mit MwSt.</td><td>Gesamtbetrag inkl. MwSt.</td><td><code>1190.00</code></td></tr><tr><td>BT-115</td><td>Fälliger Betrag</td><td>Zu zahlender Betrag</td><td><code>1190.00</code></td></tr></tbody></table><h3>Welche Felder verlangt XRechnung zusätzlich (BR-DE)?</h3><p>Die deutschen Geschäftsregeln (BR-DE) verschärfen EN 16931. Die wichtigsten:</p><ul><li><strong>Buyer reference</strong> (BT-10): <strong>BR-DE-15</strong> macht dieses Feld in jeder XRechnung zur Pflicht — auch im B2B.</li><li><strong>Zahlungsdaten</strong> (BG-16): <strong>BR-DE-1</strong> verlangt Angaben zu „PAYMENT INSTRUCTIONS&quot;, etwa die IBAN des Verkäufers bei Überweisung.</li><li><strong>E-Mail-Adresse</strong> (BT-43): <strong>BR-DE-7</strong> verlangt die Kontakt-E-Mail des Verkäufers.</li><li><strong>Zahlungsbedingungen</strong> (BT-20): Freitext für Zahlungskonditionen.</li></ul><h3>Leitweg-ID: nur bei Behörden, nicht im B2B</h3><p>Hier verwechseln viele Implementierungen zwei Dinge. BT-10 ist ein <em>generisches</em> Käufer-Referenzfeld. Die <strong>Leitweg-ID</strong> ist kein eigenes Feld, sondern ein Inhalt, den Bund, Länder und Kommunen in BT-10 erwarten (B2G und G2G). Format: <code>04011000-12345-67</code>.</p><p>Im B2B gibt es in der Regel keine Leitweg-ID. BT-10 bleibt trotzdem Pflicht — dort steht dann die Referenz, die Ihr Kunde vorgibt, etwa eine Bestellnummer. Einzelne Länder und Kommunen geben abweichende Zuordnungsmuster vor; auch die gehören in BT-10.</p><h2>3. Wie erzeuge ich eine XRechnung per API?</h2><p>Statt XML manuell zu bauen, können Sie die <strong>E-Invoice API</strong> nutzen. Sie senden Rechnungsdaten als JSON — die API erzeugt valides XRechnung-XML.</p><h3>API starten (Docker)</h3><pre><code>docker run -p 8000:8000 ghcr.io/jenslaufer/e-invoice:latest</code></pre><h3>XRechnung generieren (Python)</h3><p>Dieses Beispiel erstellt eine vollständige XRechnung im UBL-Format:</p><pre><code>import requests

invoice_data = {
    &quot;invoice_number&quot;: &quot;RE-2026-001&quot;,
    &quot;issue_date&quot;: &quot;2026-03-22&quot;,
    &quot;due_date&quot;: &quot;2026-04-21&quot;,
    &quot;currency_code&quot;: &quot;EUR&quot;,
    &quot;invoice_type_code&quot;: &quot;380&quot;,
    &quot;buyer_reference&quot;: &quot;04011000-12345-67&quot;,  # Leitweg-ID
    &quot;seller&quot;: {
        &quot;name&quot;: &quot;Muster GmbH&quot;,
        &quot;street&quot;: &quot;Musterstraße 1&quot;,
        &quot;city&quot;: &quot;Berlin&quot;,
        &quot;postal_code&quot;: &quot;10115&quot;,
        &quot;country_code&quot;: &quot;DE&quot;,
        &quot;tax_id&quot;: &quot;DE123456789&quot;,
        &quot;contact&quot;: {
            &quot;email&quot;: &quot;rechnung@muster.de&quot;
        },
        &quot;bank_account&quot;: {
            &quot;iban&quot;: &quot;DE89370400440532013000&quot;
        }
    },
    &quot;buyer&quot;: {
        &quot;name&quot;: &quot;Bundesministerium für Beispiele&quot;,
        &quot;street&quot;: &quot;Regierungsstraße 10&quot;,
        &quot;city&quot;: &quot;Berlin&quot;,
        &quot;postal_code&quot;: &quot;10117&quot;,
        &quot;country_code&quot;: &quot;DE&quot;
    },
    &quot;lines&quot;: [
        {
            &quot;description&quot;: &quot;Softwareentwicklung&quot;,
            &quot;quantity&quot;: 10,
            &quot;unit_code&quot;: &quot;HUR&quot;,
            &quot;unit_price&quot;: 100.00,
            &quot;tax_category&quot;: &quot;S&quot;,
            &quot;tax_percent&quot;: 19.0
        }
    ],
    &quot;payment_terms&quot;: &quot;Zahlbar innerhalb von 30 Tagen&quot;
}

# XRechnung als UBL generieren
response = requests.post(
    &quot;http://localhost:8000/api/v1/invoices/xml&quot;,
    json=invoice_data,
    params={&quot;syntax&quot;: &quot;ubl&quot;}
)

if response.status_code == 200:
    with open(&quot;rechnung.xml&quot;, &quot;wb&quot;) as f:
        f.write(response.content)
    print(&quot;XRechnung erstellt: rechnung.xml&quot;)
else:
    print(f&quot;Fehler: {response.json()}&quot;)</code></pre><h3>CII-Syntax verwenden</h3><p>Für CII-Output ändern Sie nur den Parameter:</p><pre><code>response = requests.post(
    &quot;http://localhost:8000/api/v1/invoices/xml&quot;,
    json=invoice_data,
    params={&quot;syntax&quot;: &quot;cii&quot;}
)</code></pre><h2>4. Wie validiere ich eine XRechnung gegen EN 16931?</h2><p>Eine XRechnung muss fünf Validierungsschichten bestehen. Referenz ist der <strong>KoSIT-Validator</strong> mit der offiziellen Validator-Konfiguration — was der ablehnt, lehnt auch der Empfänger ab. Jede Schicht prüft unterschiedliche Aspekte:</p><table><thead><tr><th>Schicht</th><th>Prüfung</th><th>Werkzeug</th></tr></thead><tbody><tr><td>1. Schema</td><td>XML-Struktur und Datentypen</td><td>XSD-Validierung</td></tr><tr><td>2. EN 16931</td><td>Europäische Geschäftsregeln (BR-*)</td><td>Schematron</td></tr><tr><td>3. XRechnung CIUS</td><td>Deutsche Geschäftsregeln (BR-DE-*)</td><td>Schematron</td></tr><tr><td>4. Berechnung</td><td>Summen, Steuern, Rundung</td><td>Arithmetische Prüfung</td></tr><tr><td>5. Semantik</td><td>Codelisten, Referenzen, Konsistenz</td><td>Geschäftslogik</td></tr></tbody></table><h3>Validierung per API</h3><pre><code># XRechnung validieren
with open(&quot;rechnung.xml&quot;, &quot;rb&quot;) as f:
    xml_content = f.read()

response = requests.post(
    &quot;http://localhost:8000/api/v1/invoices/validate&quot;,
    files={&quot;file&quot;: (&quot;rechnung.xml&quot;, xml_content, &quot;application/xml&quot;)}
)

result = response.json()
print(f&quot;Gültig: {result[&#39;valid&#39;]}&quot;)

if not result[&quot;valid&quot;]:
    for error in result[&quot;errors&quot;]:
        print(f&quot;  [{error[&#39;rule&#39;]}] {error[&#39;message&#39;]}&quot;)</code></pre><p>Eine typische Validierungsantwort bei Fehlern:</p><pre><code>{
  &quot;valid&quot;: false,
  &quot;errors&quot;: [
    {
      &quot;rule&quot;: &quot;BR-DE-15&quot;,
      &quot;message&quot;: &quot;Das Element \\&quot;Buyer reference\\&quot; (BT-10) muss übermittelt werden.&quot;,
      &quot;severity&quot;: &quot;error&quot;,
      &quot;location&quot;: &quot;/Invoice&quot;
    }
  ],
  &quot;warnings&quot;: []
}</code></pre><h3>Validierung in die CI/CD-Pipeline integrieren</h3><p>Validieren Sie generierte Rechnungen automatisch in Ihrer Pipeline:</p><pre><code># validate_invoices.py
import sys
import requests
import glob

api_url = &quot;http://localhost:8000/api/v1/invoices/validate&quot;
errors_found = False

for xml_file in glob.glob(&quot;output/*.xml&quot;):
    with open(xml_file, &quot;rb&quot;) as f:
        resp = requests.post(
            api_url,
            files={&quot;file&quot;: (xml_file, f, &quot;application/xml&quot;)}
        )
    result = resp.json()
    if not result[&quot;valid&quot;]:
        errors_found = True
        print(f&quot;FEHLER in {xml_file}:&quot;)
        for err in result[&quot;errors&quot;]:
            print(f&quot;  [{err[&#39;rule&#39;]}] {err[&#39;message&#39;]}&quot;)
    else:
        print(f&quot;OK: {xml_file}&quot;)

sys.exit(1 if errors_found else 0)</code></pre><h2>5. Welche Fehler treten am häufigsten auf?</h2>`,40)),n("p",null,[e[15]||(e[15]=t("Diese Fehler treten bei der ",-1)),e[16]||(e[16]=n("strong",null,"EN 16931 Implementierung",-1)),e[17]||(e[17]=t(" am häufigsten auf. Welche Fehler im laufenden Betrieb zu Ablehnungen führen, zeigt ",-1)),o(u,{to:"/blog/e-rechnung-fehler/"},{default:r(()=>[...e[14]||(e[14]=[t("Die häufigsten Fehler bei der E-Rechnung",-1)])]),_:1}),e[18]||(e[18]=t(".",-1))]),e[38]||(e[38]=i(`<h3>Fehler 1: Falsche CustomizationID</h3><p>Die CustomizationID muss exakt stimmen. Die Regel <strong>BR-DE-21</strong> prüft den Wert zeichengenau — eine Abweichung führt zur Ablehnung.</p><p>Zwei Stolperfallen: Seit XRechnung 3.0 lautet der Namensraum <code>xeinkauf.de:kosit:xrechnung_</code>. Ältere Anleitungen zeigen noch die 2.x-Form <code>xoev-de:kosit:standard:xrechnung_</code> — die ist für 3.x ungültig. Und der Wert trägt nur <strong>Major- und Minor-Version</strong>: Auch bei Spezifikation 3.0.2 steht dort <code>_3.0</code>, nicht <code>_3.0.2</code>.</p><pre><code>&lt;!-- Falsch: ohne CIUS-Kennung --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017&lt;/cbc:CustomizationID&gt;

&lt;!-- Falsch: 2.x-Namensraum in einer 3.x-Rechnung --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xoev-de:kosit:standard:xrechnung_3.0&lt;/cbc:CustomizationID&gt;

&lt;!-- Richtig (XRechnung 3.0.2) --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xeinkauf.de:kosit:xrechnung_3.0&lt;/cbc:CustomizationID&gt;</code></pre><p>In CII steht derselbe String in <code>rsm:ExchangedDocumentContext/ram:GuidelineSpecifiedDocumentContextParameter/ram:ID</code>. Semantisch ist es <code>BT-24</code> (Specification identifier).</p><h3>Fehler 2: Steuerberechnung mit Rundungsfehlern</h3><p>EN 16931 verlangt kaufmännische Rundung auf 2 Dezimalstellen. Fließkomma-Arithmetik führt zu Abweichungen.</p><pre><code># Falsch: Fließkomma-Fehler
tax = 100.05 * 0.19  # 19.0095000000000027...

# Richtig: Decimal verwenden
from decimal import Decimal, ROUND_HALF_UP
tax = (Decimal(&quot;100.05&quot;) * Decimal(&quot;0.19&quot;)).quantize(
    Decimal(&quot;0.01&quot;), rounding=ROUND_HALF_UP
)  # Decimal(&#39;19.01&#39;)</code></pre><h3>Fehler 3: BT-10 nur bei Behördenrechnungen befüllen</h3><p>Die Geschäftsregel <strong>BR-DE-15</strong> verlangt <code>BT-10</code> (Buyer reference) in <em>jeder</em> XRechnung — nicht nur bei B2G. Wer das Feld im B2B wegoptimiert, weil dort keine Leitweg-ID existiert, produziert eine ungültige Rechnung. Bei öffentlichen Auftraggebern muss zusätzlich der <em>Inhalt</em> stimmen: eine gültige Leitweg-ID.</p><h3>Fehler 4: Datumsformat in CII</h3><p>CII verwendet ein anderes Datumsformat als UBL. Häufiger Fehler: ISO-8601 statt CCYYMMDD.</p><pre><code>&lt;!-- Falsch in CII --&gt;
&lt;udt:DateTimeString format=&quot;102&quot;&gt;2026-03-22&lt;/udt:DateTimeString&gt;

&lt;!-- Richtig in CII --&gt;
&lt;udt:DateTimeString format=&quot;102&quot;&gt;20260322&lt;/udt:DateTimeString&gt;</code></pre><h3>Fehler 5: Summen stimmen nicht überein</h3><p>EN 16931 enthält arithmetische Regeln (BR-CO-*). Die Summen müssen exakt passen:</p><ul><li><strong>BR-CO-10</strong>: BT-106 (Summe Nettobeträge der Positionen) = Summe aller BT-131</li><li><strong>BR-CO-13</strong>: BT-109 (Rechnungsbetrag ohne MwSt.) = Summe aller BT-131 − BT-107 + BT-108</li><li><strong>BR-CO-15</strong>: BT-112 (Rechnungsbetrag mit MwSt.) = BT-109 + BT-110 (MwSt.-Betrag)</li><li><strong>BR-CO-16</strong>: BT-115 (Fälliger Betrag) = BT-112 − BT-113 (bereits gezahlt) + BT-114 (Rundungsbetrag)</li></ul><p>Zwei Details, die oft danebengehen: <code>BT-107</code> und <code>BT-108</code> sind bereits <em>Summen</em> auf Dokumentebene — die einzelnen Nachlässe stehen in <code>BT-92</code>, die einzelnen Zuschläge in <code>BT-99</code>. Und wer <code>BT-114</code> in BR-CO-16 vergisst, bekommt genau dann einen Fehler, wenn gerundet wird.</p><h3>Fehler 6: Falsche Unit-Codes</h3><p>Mengeneinheiten stammen aus <strong>UN/ECE Recommendation 20</strong> <em>und</em> <strong>Recommendation 21</strong> — ausgewählt nach der in Rec 20, Intro 2.a) beschriebenen Methode. Codes aus Rec 21 tragen ein vorangestelltes <code>X</code>, etwa <code>XPP</code> (Packung). Wer nur in Rec 20 nachschlägt, findet die Verpackungscodes nicht. Häufige Codes:</p><table><thead><tr><th>Code</th><th>Bedeutung</th></tr></thead><tbody><tr><td><code>HUR</code></td><td>Stunde</td></tr><tr><td><code>DAY</code></td><td>Tag</td></tr><tr><td><code>C62</code></td><td>Stück (Einheit)</td></tr><tr><td><code>MON</code></td><td>Monat</td></tr><tr><td><code>KWH</code></td><td>Kilowattstunde</td></tr><tr><td><code>TNE</code></td><td>Tonne (metrisch)</td></tr></tbody></table><p><strong>Tipp:</strong> Validieren Sie jede generierte Rechnung <strong>vor dem Versand</strong>. Die E-Invoice API prüft alle 5 Schichten in einem Aufruf — Schema, EN 16931, BR-DE, Berechnung und Semantik.</p><h2>6. Wie sieht eine vollständige Implementierung aus?</h2><p>Das folgende Beispiel zeigt den vollständigen Workflow — Rechnung erstellen, validieren und speichern:</p><pre><code>import requests
from pathlib import Path

API_BASE = &quot;http://localhost:8000/api/v1&quot;

def create_xrechnung():
    &quot;&quot;&quot;Erstellt eine XRechnung und validiert sie.&quot;&quot;&quot;
    invoice = {
        &quot;invoice_number&quot;: &quot;RE-2026-042&quot;,
        &quot;issue_date&quot;: &quot;2026-03-22&quot;,
        &quot;due_date&quot;: &quot;2026-04-21&quot;,
        &quot;currency_code&quot;: &quot;EUR&quot;,
        &quot;invoice_type_code&quot;: &quot;380&quot;,
        &quot;buyer_reference&quot;: &quot;04011000-12345-67&quot;,
        &quot;seller&quot;: {
            &quot;name&quot;: &quot;DevCorp GmbH&quot;,
            &quot;street&quot;: &quot;Entwicklerweg 42&quot;,
            &quot;city&quot;: &quot;München&quot;,
            &quot;postal_code&quot;: &quot;80331&quot;,
            &quot;country_code&quot;: &quot;DE&quot;,
            &quot;tax_id&quot;: &quot;DE987654321&quot;,
            &quot;contact&quot;: {&quot;email&quot;: &quot;billing@devcorp.de&quot;},
            &quot;bank_account&quot;: {&quot;iban&quot;: &quot;DE89370400440532013000&quot;}
        },
        &quot;buyer&quot;: {
            &quot;name&quot;: &quot;Stadt München&quot;,
            &quot;street&quot;: &quot;Marienplatz 8&quot;,
            &quot;city&quot;: &quot;München&quot;,
            &quot;postal_code&quot;: &quot;80331&quot;,
            &quot;country_code&quot;: &quot;DE&quot;
        },
        &quot;lines&quot;: [
            {
                &quot;description&quot;: &quot;API-Entwicklung&quot;,
                &quot;quantity&quot;: 80,
                &quot;unit_code&quot;: &quot;HUR&quot;,
                &quot;unit_price&quot;: 120.00,
                &quot;tax_category&quot;: &quot;S&quot;,
                &quot;tax_percent&quot;: 19.0
            },
            {
                &quot;description&quot;: &quot;Code Review&quot;,
                &quot;quantity&quot;: 20,
                &quot;unit_code&quot;: &quot;HUR&quot;,
                &quot;unit_price&quot;: 95.00,
                &quot;tax_category&quot;: &quot;S&quot;,
                &quot;tax_percent&quot;: 19.0
            }
        ],
        &quot;payment_terms&quot;: &quot;Zahlbar innerhalb von 30 Tagen netto&quot;
    }

    # 1. XML generieren
    resp = requests.post(
        f&quot;{API_BASE}/invoices/xml&quot;,
        json=invoice,
        params={&quot;syntax&quot;: &quot;ubl&quot;}
    )
    resp.raise_for_status()
    xml_bytes = resp.content

    # 2. Validieren
    val = requests.post(
        f&quot;{API_BASE}/invoices/validate&quot;,
        files={&quot;file&quot;: (&quot;invoice.xml&quot;, xml_bytes, &quot;application/xml&quot;)}
    )
    result = val.json()

    if not result[&quot;valid&quot;]:
        for err in result[&quot;errors&quot;]:
            print(f&quot;Fehler: [{err[&#39;rule&#39;]}] {err[&#39;message&#39;]}&quot;)
        return False

    # 3. Speichern
    output = Path(&quot;output/RE-2026-042.xml&quot;)
    output.parent.mkdir(exist_ok=True)
    output.write_bytes(xml_bytes)
    print(f&quot;Valide XRechnung gespeichert: {output}&quot;)
    return True

if __name__ == &quot;__main__&quot;:
    create_xrechnung()</code></pre><h2>7. Was kommt als Nächstes: XRechnung 4.0, Peppol, Fristen</h2><p>Sie haben die Grundlagen der <strong>XRechnung-Implementierung</strong> kennengelernt. Drei Punkte für den produktiven Einsatz:</p>`,26)),n("ul",null,[n("li",null,[e[20]||(e[20]=n("strong",null,"Beispieldatei zum Abgleich:",-1)),e[21]||(e[21]=t(" Eine vollständige, Block für Block erklärte XRechnung zum Download — UBL und CII — finden Sie in ",-1)),o(u,{to:"/blog/xrechnung-beispiel/"},{default:r(()=>[...e[19]||(e[19]=[t("XRechnung-Beispiel",-1)])]),_:1}),e[22]||(e[22]=t(". Ideal, um Ihre eigene Ausgabe Feld für Feld dagegenzuhalten.",-1))]),n("li",null,[e[24]||(e[24]=n("strong",null,"Branchenerweiterungen prüfen:",-1)),e[25]||(e[25]=t(" Bau, Gesundheit, Logistik und Automotive haben zusätzliche Anforderungen — siehe ",-1)),o(u,{to:"/blog/en16931-branchenerweiterungen/"},{default:r(()=>[...e[23]||(e[23]=[t("EN 16931 Branchenerweiterungen",-1)])]),_:1}),e[26]||(e[26]=t(".",-1))]),n("li",null,[e[28]||(e[28]=n("strong",null,"ZUGFeRD parallel einrichten:",-1)),e[29]||(e[29]=t(" Viele B2B-Empfänger bevorzugen das Hybridformat. Die Unterschiede klärt ",-1)),o(u,{to:"/blog/xrechnung-vs-zugferd/"},{default:r(()=>[...e[27]||(e[27]=[t("XRechnung vs. ZUGFeRD",-1)])]),_:1}),e[30]||(e[30]=t(".",-1))]),e[31]||(e[31]=n("li",null,[n("strong",null,"Fristen beachten:"),t(" Versandpflicht ab 2027 über 800.000 Euro Vorjahresumsatz, ab 2028 für alle.")],-1))]),e[39]||(e[39]=n("h3",null,"Muss ich Peppol nutzen?",-1)),e[40]||(e[40]=n("p",null,"Nein. Der Gesetzgeber schreibt keinen Übermittlungsweg vor. Das BMF nennt E-Mail, Portal-Download, EDI, Schnittstelle oder gemeinsamen Speicherort als zulässige Wege — welchen Weg und welches zulässige Format die Parteien wählen, ist eine zivilrechtliche Frage zwischen ihnen. Für den Inlandsversand reicht XRechnung per E-Mail.",-1)),n("p",null,[e[33]||(e[33]=t("Peppol bleibt trotzdem relevant: Die KoSIT ist deutsche Peppol Authority, und XRechnung ist ab Version 3.0 inhaltlich deckungsgleich mit Peppol BIS Billing. Wer grenzüberschreitend fakturiert, kommt an einem Access Point praktisch kaum vorbei. Einordnung in ",-1)),o(u,{to:"/blog/peppol-b2b-deutschland-2026/"},{default:r(()=>[...e[32]||(e[32]=[t("Peppol im deutschen B2B",-1)])]),_:1}),e[34]||(e[34]=t(".",-1))]),e[41]||(e[41]=n("h3",null,"Kommt XRechnung 4.0?",-1)),e[42]||(e[42]=n("p",null,[t("Die KoSIT bereitet "),n("strong",null,"XRechnung 4.0"),t(" als deutsche Umsetzung der neuen EU-Norm EN 16931-1:2026 vor; angekündigt ist ein Release Mitte bis Ende 2026, zunächst als Vorabversion ohne Produktionsfreigabe. Ein verbindliches Gültigkeitsdatum ist noch nicht veröffentlicht — die Bundle-Erstellung wartet auf die CEN-Syntaxbindings und Validierungsartefakte.")],-1)),e[43]||(e[43]=n("p",null,[t("Für heutige Implementierungen ändert das nichts: Gültig ist "),n("strong",null,"XRechnung 3.0.2"),t(" auf Basis der EN-16931-Linie von 2017. Planen Sie die CustomizationID und die Schematron-Artefakte aber als "),n("em",null,"konfigurierbar"),t(" ein, nicht als Konstante im Code — mit 4.0 werden beide wechseln.")],-1)),o(s,{category:"e-rechnung"}),o(l,{slug:"xrechnung-implementieren"})])}}};export{R as default};
