import{_ as e}from"./RelatedArticles-I-2iMO3Z.js";import{d as n,x as o,f as u,o as r}from"./app-CmuBPscI.js";import"./blogPosts-CIQMowzV.js";const i={class:"prose-article"},q={__name:"XRechnungImplementieren",setup(s){return(a,t)=>(r(),n("article",i,[t[0]||(t[0]=o(`<h2>Warum XRechnung implementieren?</h2><p>Ab 1. Januar 2027 müssen alle deutschen Unternehmen im B2B-Bereich E-Rechnungen versenden können. XRechnung ist der deutsche Standard nach <strong>EN 16931</strong> — und das Pflichtformat für Rechnungen an öffentliche Auftraggeber. Wer Software für Rechnungsstellung entwickelt, kommt an XRechnung nicht vorbei.</p><p>Dieser Artikel zeigt Ihnen als Entwickler den direkten Weg: XML-Struktur verstehen, Pflichtfelder korrekt befüllen, gegen EN 16931 validieren und per API automatisieren.</p><h2>1. XML-Struktur: UBL 2.1 vs. CII</h2><p>XRechnung unterstützt zwei XML-Syntaxen. Beide sind gleichwertig gültig — die Wahl hängt von Ihrem Anwendungsfall ab.</p><h3>UBL 2.1 (Universal Business Language)</h3><p>UBL ist der international verbreitetere Standard. Die Rechnungsdaten liegen im Namespace <code>urn:oasis:names:specification:ubl:schema:xsd:Invoice-2</code>. Das Root-Element ist <code>&lt;Invoice&gt;</code>.</p><pre><code>&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;
&lt;Invoice xmlns=&quot;urn:oasis:names:specification:ubl:schema:xsd:Invoice-2&quot;
         xmlns:cac=&quot;urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2&quot;
         xmlns:cbc=&quot;urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2&quot;&gt;
  &lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xoev-de:kosit:standard:xrechnung_3.0&lt;/cbc:CustomizationID&gt;
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
      &lt;ram:ID&gt;urn:cen.eu:en16931:2017#compliant#urn:xoev-de:kosit:standard:xrechnung_3.0&lt;/ram:ID&gt;
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
&lt;/rsm:CrossIndustryInvoice&gt;</code></pre><h3>UBL oder CII?</h3><p><strong>UBL</strong> eignet sich, wenn Sie international agieren oder PEPPOL nutzen. <strong>CII</strong> ist die Wahl, wenn Sie auch ZUGFeRD unterstützen wollen — ZUGFeRD verwendet ausschließlich CII.</p><h2>2. Pflichtfelder nach EN 16931</h2><p>EN 16931 definiert über 160 semantische Elemente. Nicht alle sind Pflicht. Die folgende Tabelle zeigt die <strong>Mindestanforderungen</strong> für eine gültige XRechnung:</p><table><thead><tr><th>BT-Nr.</th><th>Feld</th><th>Beschreibung</th><th>Beispielwert</th></tr></thead><tbody><tr><td>BT-1</td><td>Rechnungsnummer</td><td>Eindeutige Kennung der Rechnung</td><td><code>RE-2026-001</code></td></tr><tr><td>BT-2</td><td>Rechnungsdatum</td><td>Ausstellungsdatum</td><td><code>2026-03-22</code></td></tr><tr><td>BT-3</td><td>Rechnungsart</td><td>UNTDID 1001 Code</td><td><code>380</code> (Rechnung)</td></tr><tr><td>BT-5</td><td>Währung</td><td>ISO 4217 Währungscode</td><td><code>EUR</code></td></tr><tr><td>BT-27</td><td>Verkäufername</td><td>Name des Rechnungsstellers</td><td><code>Muster GmbH</code></td></tr><tr><td>BT-44</td><td>Käufername</td><td>Name des Rechnungsempfängers</td><td><code>Kunde AG</code></td></tr><tr><td>BT-109</td><td>Zahlbarer Betrag</td><td>Gesamtbetrag inkl. MwSt.</td><td><code>1190.00</code></td></tr><tr><td>BT-112</td><td>Nettobetrag</td><td>Gesamtbetrag exkl. MwSt.</td><td><code>1000.00</code></td></tr><tr><td>BT-115</td><td>Fälliger Betrag</td><td>Zu zahlender Betrag</td><td><code>1190.00</code></td></tr></tbody></table><h3>Zusätzliche Pflichtfelder für XRechnung (BR-DE)</h3><p>Die deutschen Geschäftsregeln (BR-DE) erweitern die EN 16931-Pflichtfelder:</p><ul><li><strong>Leitweg-ID</strong> (BT-10): Pflicht bei B2G-Rechnungen. Format: <code>04011000-12345-67</code></li><li><strong>Bankverbindung</strong> (BG-17): IBAN des Verkäufers bei Überweisung</li><li><strong>E-Mail-Adresse</strong> (BT-43): Kontaktadresse des Verkäufers</li><li><strong>Zahlungsbedingungen</strong> (BT-20): Freitext für Zahlungskonditionen</li></ul><h2>3. XRechnung implementieren mit der E-Invoice API</h2><p>Statt XML manuell zu bauen, können Sie die <strong>E-Invoice API</strong> nutzen. Sie senden Rechnungsdaten als JSON — die API erzeugt valides XRechnung-XML.</p><h3>API starten (Docker)</h3><pre><code>docker run -p 8000:8000 ghcr.io/jenslaufer/e-invoice:latest</code></pre><h3>XRechnung generieren (Python)</h3><p>Dieses Beispiel erstellt eine vollständige XRechnung im UBL-Format:</p><pre><code>import requests

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
)</code></pre><h2>4. Validierung gegen EN 16931</h2><p>Eine XRechnung muss fünf Validierungsschichten bestehen. Jede Schicht prüft unterschiedliche Aspekte:</p><table><thead><tr><th>Schicht</th><th>Prüfung</th><th>Werkzeug</th></tr></thead><tbody><tr><td>1. Schema</td><td>XML-Struktur und Datentypen</td><td>XSD-Validierung</td></tr><tr><td>2. EN 16931</td><td>Europäische Geschäftsregeln (BR-*)</td><td>Schematron</td></tr><tr><td>3. XRechnung CIUS</td><td>Deutsche Geschäftsregeln (BR-DE-*)</td><td>Schematron</td></tr><tr><td>4. Berechnung</td><td>Summen, Steuern, Rundung</td><td>Arithmetische Prüfung</td></tr><tr><td>5. Semantik</td><td>Codelisten, Referenzen, Konsistenz</td><td>Geschäftslogik</td></tr></tbody></table><h3>Validierung per API</h3><pre><code># XRechnung validieren
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
      &quot;rule&quot;: &quot;BR-DE-1&quot;,
      &quot;message&quot;: &quot;Eine XRechnung muss eine Leitweg-ID enthalten (BT-10).&quot;,
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

sys.exit(1 if errors_found else 0)</code></pre><h2>5. Häufige Fehler und wie Sie sie vermeiden</h2><p>Diese Fehler treten bei der <strong>EN 16931 Implementierung</strong> am häufigsten auf:</p><h3>Fehler 1: Falsche CustomizationID</h3><p>Die CustomizationID muss exakt zur XRechnung-Version passen. Ein Tippfehler führt zur Ablehnung.</p><pre><code>&lt;!-- Falsch --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017&lt;/cbc:CustomizationID&gt;

&lt;!-- Richtig (XRechnung 3.0) --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xoev-de:kosit:standard:xrechnung_3.0&lt;/cbc:CustomizationID&gt;</code></pre><h3>Fehler 2: Steuerberechnung mit Rundungsfehlern</h3><p>EN 16931 verlangt kaufmännische Rundung auf 2 Dezimalstellen. Fließkomma-Arithmetik führt zu Abweichungen.</p><pre><code># Falsch: Fließkomma-Fehler
tax = 100.05 * 0.19  # 19.0095000000000027...

# Richtig: Decimal verwenden
from decimal import Decimal, ROUND_HALF_UP
tax = (Decimal(&quot;100.05&quot;) * Decimal(&quot;0.19&quot;)).quantize(
    Decimal(&quot;0.01&quot;), rounding=ROUND_HALF_UP
)  # Decimal(&#39;19.01&#39;)</code></pre><h3>Fehler 3: Fehlende Leitweg-ID bei B2G</h3><p>Die Geschäftsregel <strong>BR-DE-1</strong> verlangt eine Leitweg-ID (<code>BT-10</code>) für alle Rechnungen an öffentliche Auftraggeber. Ohne Leitweg-ID wird die Rechnung abgelehnt.</p><h3>Fehler 4: Datumsformat in CII</h3><p>CII verwendet ein anderes Datumsformat als UBL. Häufiger Fehler: ISO-8601 statt CCYYMMDD.</p><pre><code>&lt;!-- Falsch in CII --&gt;
&lt;udt:DateTimeString format=&quot;102&quot;&gt;2026-03-22&lt;/udt:DateTimeString&gt;

&lt;!-- Richtig in CII --&gt;
&lt;udt:DateTimeString format=&quot;102&quot;&gt;20260322&lt;/udt:DateTimeString&gt;</code></pre><h3>Fehler 5: Summen stimmen nicht überein</h3><p>EN 16931 enthält arithmetische Regeln (BR-CO-*). Die Summen müssen exakt passen:</p><ul><li><strong>BT-106</strong> (Summe Nettobetrag Positionen) = Summe aller BT-131</li><li><strong>BT-109</strong> (Rechnungsbetrag ohne MwSt.) = BT-106 + BT-108 (Zuschlag) − BT-107 (Abzug)</li><li><strong>BT-112</strong> (Rechnungsbetrag mit MwSt.) = BT-109 + BT-110 (MwSt.-Betrag)</li><li><strong>BT-115</strong> (Fälliger Betrag) = BT-112 − BT-113 (bereits gezahlt)</li></ul><h3>Fehler 6: Falsche Unit-Codes</h3><p>Mengeneinheiten müssen UN/ECE Recommendation 20 entsprechen. Häufige Codes:</p><table><thead><tr><th>Code</th><th>Bedeutung</th></tr></thead><tbody><tr><td><code>HUR</code></td><td>Stunde</td></tr><tr><td><code>DAY</code></td><td>Tag</td></tr><tr><td><code>C62</code></td><td>Stück (Einheit)</td></tr><tr><td><code>KGM</code></td><td>Kilogramm</td></tr><tr><td><code>MTR</code></td><td>Meter</td></tr><tr><td><code>LTR</code></td><td>Liter</td></tr></tbody></table><p><strong>Tipp:</strong> Validieren Sie jede generierte Rechnung <strong>vor dem Versand</strong>. Die E-Invoice API prüft alle 5 Schichten in einem Aufruf — Schema, EN 16931, BR-DE, Berechnung und Semantik.</p><h2>6. Komplettes Beispiel: XRechnung von A bis Z</h2><p>Das folgende Beispiel zeigt den vollständigen Workflow — Rechnung erstellen, validieren und speichern:</p><pre><code>import requests
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
    create_xrechnung()</code></pre><h2>7. Nächste Schritte</h2><p>Sie haben die Grundlagen der <strong>XRechnung-Implementierung</strong> kennengelernt. Für den produktiven Einsatz empfehlen wir:</p><ul><li><strong>Branchenerweiterungen prüfen:</strong> Bau, Gesundheit, Logistik und Automotive haben zusätzliche Anforderungen.</li><li><strong>ZUGFeRD parallel einrichten:</strong> Viele B2B-Empfänger bevorzugen das Hybridformat.</li><li><strong>Fristen beachten:</strong> Die E-Rechnungspflicht 2027 betrifft alle B2B-Unternehmen.</li></ul>`,65)),u(e,{slug:"xrechnung-implementieren"})]))}};export{q as default};
