<template>
  <article class="prose-article">
    <h2>Warum XRechnung implementieren?</h2>
    <p>Ab 1. Januar 2027 müssen alle deutschen Unternehmen im B2B-Bereich E-Rechnungen versenden können. XRechnung ist der deutsche Standard nach <strong>EN 16931</strong> — und das Pflichtformat für Rechnungen an öffentliche Auftraggeber. Wer Software für Rechnungsstellung entwickelt, kommt an XRechnung nicht vorbei.</p>
    <p>Dieser Artikel zeigt Ihnen als Entwickler den direkten Weg: XML-Struktur verstehen, Pflichtfelder korrekt befüllen, gegen EN 16931 validieren und per API automatisieren.</p>

    <h2>1. XML-Struktur: UBL 2.1 vs. CII</h2>
    <p>XRechnung unterstützt zwei XML-Syntaxen. Beide sind gleichwertig gültig — die Wahl hängt von Ihrem Anwendungsfall ab.</p>

    <h3>UBL 2.1 (Universal Business Language)</h3>
    <p>UBL ist der international verbreitetere Standard. Die Rechnungsdaten liegen im Namespace <code>urn:oasis:names:specification:ubl:schema:xsd:Invoice-2</code>. Das Root-Element ist <code>&lt;Invoice&gt;</code>.</p>

    <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;Invoice xmlns="urn:oasis:names:specification:ubl:schema:xsd:Invoice-2"
         xmlns:cac="urn:oasis:names:specification:ubl:schema:xsd:CommonAggregateComponents-2"
         xmlns:cbc="urn:oasis:names:specification:ubl:schema:xsd:CommonBasicComponents-2"&gt;
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
&lt;/Invoice&gt;</code></pre>

    <h3>UN/CEFACT CII (Cross-Industry Invoice)</h3>
    <p>CII ist die UN-Syntax, die auch ZUGFeRD verwendet. Das Root-Element ist <code>&lt;CrossIndustryInvoice&gt;</code>. Die Daten sind hierarchisch in Trade-Blöcke gegliedert.</p>

    <pre><code>&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;rsm:CrossIndustryInvoice
    xmlns:rsm="urn:un:unece:uncefact:data:standard:CrossIndustryInvoice:100"
    xmlns:ram="urn:un:unece:uncefact:data:standard:ReusableAggregateBusinessInformationEntity:100"
    xmlns:udt="urn:un:unece:uncefact:data:standard:UnqualifiedDataType:100"&gt;
  &lt;rsm:ExchangedDocumentContext&gt;
    &lt;ram:GuidelineSpecifiedDocumentContextParameter&gt;
      &lt;ram:ID&gt;urn:cen.eu:en16931:2017#compliant#urn:xoev-de:kosit:standard:xrechnung_3.0&lt;/ram:ID&gt;
    &lt;/ram:GuidelineSpecifiedDocumentContextParameter&gt;
  &lt;/rsm:ExchangedDocumentContext&gt;
  &lt;rsm:ExchangedDocument&gt;
    &lt;ram:ID&gt;RE-2026-001&lt;/ram:ID&gt;
    &lt;ram:TypeCode&gt;380&lt;/ram:TypeCode&gt;
    &lt;ram:IssueDateTime&gt;
      &lt;udt:DateTimeString format="102"&gt;20260322&lt;/udt:DateTimeString&gt;
    &lt;/ram:IssueDateTime&gt;
  &lt;/rsm:ExchangedDocument&gt;
  &lt;rsm:SupplyChainTradeTransaction&gt;
    &lt;!-- Handelspartner, Lieferung, Zahlung --&gt;
  &lt;/rsm:SupplyChainTradeTransaction&gt;
&lt;/rsm:CrossIndustryInvoice&gt;</code></pre>

    <h3>UBL oder CII?</h3>
    <p><strong>UBL</strong> eignet sich, wenn Sie international agieren oder PEPPOL nutzen. <strong>CII</strong> ist die Wahl, wenn Sie auch ZUGFeRD unterstützen wollen — ZUGFeRD verwendet ausschließlich CII.</p>

    <h2>2. Pflichtfelder nach EN 16931</h2>
    <p>EN 16931 definiert über 160 semantische Elemente. Nicht alle sind Pflicht. Die folgende Tabelle zeigt die <strong>Mindestanforderungen</strong> für eine gültige XRechnung:</p>

    <table>
      <thead>
        <tr>
          <th>BT-Nr.</th>
          <th>Feld</th>
          <th>Beschreibung</th>
          <th>Beispielwert</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BT-1</td>
          <td>Rechnungsnummer</td>
          <td>Eindeutige Kennung der Rechnung</td>
          <td><code>RE-2026-001</code></td>
        </tr>
        <tr>
          <td>BT-2</td>
          <td>Rechnungsdatum</td>
          <td>Ausstellungsdatum</td>
          <td><code>2026-03-22</code></td>
        </tr>
        <tr>
          <td>BT-3</td>
          <td>Rechnungsart</td>
          <td>UNTDID 1001 Code</td>
          <td><code>380</code> (Rechnung)</td>
        </tr>
        <tr>
          <td>BT-5</td>
          <td>Währung</td>
          <td>ISO 4217 Währungscode</td>
          <td><code>EUR</code></td>
        </tr>
        <tr>
          <td>BT-27</td>
          <td>Verkäufername</td>
          <td>Name des Rechnungsstellers</td>
          <td><code>Muster GmbH</code></td>
        </tr>
        <tr>
          <td>BT-44</td>
          <td>Käufername</td>
          <td>Name des Rechnungsempfängers</td>
          <td><code>Kunde AG</code></td>
        </tr>
        <tr>
          <td>BT-109</td>
          <td>Zahlbarer Betrag</td>
          <td>Gesamtbetrag inkl. MwSt.</td>
          <td><code>1190.00</code></td>
        </tr>
        <tr>
          <td>BT-112</td>
          <td>Nettobetrag</td>
          <td>Gesamtbetrag exkl. MwSt.</td>
          <td><code>1000.00</code></td>
        </tr>
        <tr>
          <td>BT-115</td>
          <td>Fälliger Betrag</td>
          <td>Zu zahlender Betrag</td>
          <td><code>1190.00</code></td>
        </tr>
      </tbody>
    </table>

    <h3>Zusätzliche Pflichtfelder für XRechnung (BR-DE)</h3>
    <p>Die deutschen Geschäftsregeln (BR-DE) erweitern die EN 16931-Pflichtfelder:</p>
    <ul>
      <li><strong>Leitweg-ID</strong> (BT-10): Pflicht bei B2G-Rechnungen. Format: <code>04011000-12345-67</code></li>
      <li><strong>Bankverbindung</strong> (BG-17): IBAN des Verkäufers bei Überweisung</li>
      <li><strong>E-Mail-Adresse</strong> (BT-43): Kontaktadresse des Verkäufers</li>
      <li><strong>Zahlungsbedingungen</strong> (BT-20): Freitext für Zahlungskonditionen</li>
    </ul>

    <h2>3. XRechnung implementieren mit der E-Invoice API</h2>
    <p>Statt XML manuell zu bauen, können Sie die <strong>E-Invoice API</strong> nutzen. Sie senden Rechnungsdaten als JSON — die API erzeugt valides XRechnung-XML.</p>

    <h3>API starten (Docker)</h3>
    <pre><code>docker run -p 8000:8000 ghcr.io/jenslaufer/e-invoice:latest</code></pre>

    <h3>XRechnung generieren (Python)</h3>
    <p>Dieses Beispiel erstellt eine vollständige XRechnung im UBL-Format:</p>

    <pre><code>import requests

invoice_data = {
    "invoice_number": "RE-2026-001",
    "issue_date": "2026-03-22",
    "due_date": "2026-04-21",
    "currency_code": "EUR",
    "invoice_type_code": "380",
    "buyer_reference": "04011000-12345-67",  # Leitweg-ID
    "seller": {
        "name": "Muster GmbH",
        "street": "Musterstraße 1",
        "city": "Berlin",
        "postal_code": "10115",
        "country_code": "DE",
        "tax_id": "DE123456789",
        "contact": {
            "email": "rechnung@muster.de"
        },
        "bank_account": {
            "iban": "DE89370400440532013000"
        }
    },
    "buyer": {
        "name": "Bundesministerium für Beispiele",
        "street": "Regierungsstraße 10",
        "city": "Berlin",
        "postal_code": "10117",
        "country_code": "DE"
    },
    "lines": [
        {
            "description": "Softwareentwicklung",
            "quantity": 10,
            "unit_code": "HUR",
            "unit_price": 100.00,
            "tax_category": "S",
            "tax_percent": 19.0
        }
    ],
    "payment_terms": "Zahlbar innerhalb von 30 Tagen"
}

# XRechnung als UBL generieren
response = requests.post(
    "http://localhost:8000/api/v1/invoices/xml",
    json=invoice_data,
    params={"syntax": "ubl"}
)

if response.status_code == 200:
    with open("rechnung.xml", "wb") as f:
        f.write(response.content)
    print("XRechnung erstellt: rechnung.xml")
else:
    print(f"Fehler: {response.json()}")</code></pre>

    <h3>CII-Syntax verwenden</h3>
    <p>Für CII-Output ändern Sie nur den Parameter:</p>
    <pre><code>response = requests.post(
    "http://localhost:8000/api/v1/invoices/xml",
    json=invoice_data,
    params={"syntax": "cii"}
)</code></pre>

    <h2>4. Validierung gegen EN 16931</h2>
    <p>Eine XRechnung muss fünf Validierungsschichten bestehen. Jede Schicht prüft unterschiedliche Aspekte:</p>

    <table>
      <thead>
        <tr>
          <th>Schicht</th>
          <th>Prüfung</th>
          <th>Werkzeug</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1. Schema</td>
          <td>XML-Struktur und Datentypen</td>
          <td>XSD-Validierung</td>
        </tr>
        <tr>
          <td>2. EN 16931</td>
          <td>Europäische Geschäftsregeln (BR-*)</td>
          <td>Schematron</td>
        </tr>
        <tr>
          <td>3. XRechnung CIUS</td>
          <td>Deutsche Geschäftsregeln (BR-DE-*)</td>
          <td>Schematron</td>
        </tr>
        <tr>
          <td>4. Berechnung</td>
          <td>Summen, Steuern, Rundung</td>
          <td>Arithmetische Prüfung</td>
        </tr>
        <tr>
          <td>5. Semantik</td>
          <td>Codelisten, Referenzen, Konsistenz</td>
          <td>Geschäftslogik</td>
        </tr>
      </tbody>
    </table>

    <h3>Validierung per API</h3>
    <pre><code># XRechnung validieren
with open("rechnung.xml", "rb") as f:
    xml_content = f.read()

response = requests.post(
    "http://localhost:8000/api/v1/invoices/validate",
    files={"file": ("rechnung.xml", xml_content, "application/xml")}
)

result = response.json()
print(f"Gültig: {result['valid']}")

if not result["valid"]:
    for error in result["errors"]:
        print(f"  [{error['rule']}] {error['message']}")</code></pre>

    <p>Eine typische Validierungsantwort bei Fehlern:</p>
    <pre><code>{
  "valid": false,
  "errors": [
    {
      "rule": "BR-DE-1",
      "message": "Eine XRechnung muss eine Leitweg-ID enthalten (BT-10).",
      "severity": "error",
      "location": "/Invoice"
    }
  ],
  "warnings": []
}</code></pre>

    <h3>Validierung in die CI/CD-Pipeline integrieren</h3>
    <p>Validieren Sie generierte Rechnungen automatisch in Ihrer Pipeline:</p>
    <pre><code># validate_invoices.py
import sys
import requests
import glob

api_url = "http://localhost:8000/api/v1/invoices/validate"
errors_found = False

for xml_file in glob.glob("output/*.xml"):
    with open(xml_file, "rb") as f:
        resp = requests.post(
            api_url,
            files={"file": (xml_file, f, "application/xml")}
        )
    result = resp.json()
    if not result["valid"]:
        errors_found = True
        print(f"FEHLER in {xml_file}:")
        for err in result["errors"]:
            print(f"  [{err['rule']}] {err['message']}")
    else:
        print(f"OK: {xml_file}")

sys.exit(1 if errors_found else 0)</code></pre>

    <h2>5. Häufige Fehler und wie Sie sie vermeiden</h2>
    <p>Diese Fehler treten bei der <strong>EN 16931 Implementierung</strong> am häufigsten auf:</p>

    <h3>Fehler 1: Falsche CustomizationID</h3>
    <p>Die CustomizationID muss exakt zur XRechnung-Version passen. Ein Tippfehler führt zur Ablehnung.</p>
    <pre><code>&lt;!-- Falsch --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017&lt;/cbc:CustomizationID&gt;

&lt;!-- Richtig (XRechnung 3.0) --&gt;
&lt;cbc:CustomizationID&gt;urn:cen.eu:en16931:2017#compliant#urn:xoev-de:kosit:standard:xrechnung_3.0&lt;/cbc:CustomizationID&gt;</code></pre>

    <h3>Fehler 2: Steuerberechnung mit Rundungsfehlern</h3>
    <p>EN 16931 verlangt kaufmännische Rundung auf 2 Dezimalstellen. Fließkomma-Arithmetik führt zu Abweichungen.</p>
    <pre><code># Falsch: Fließkomma-Fehler
tax = 100.05 * 0.19  # 19.0095000000000027...

# Richtig: Decimal verwenden
from decimal import Decimal, ROUND_HALF_UP
tax = (Decimal("100.05") * Decimal("0.19")).quantize(
    Decimal("0.01"), rounding=ROUND_HALF_UP
)  # Decimal('19.01')</code></pre>

    <h3>Fehler 3: Fehlende Leitweg-ID bei B2G</h3>
    <p>Die Geschäftsregel <strong>BR-DE-1</strong> verlangt eine Leitweg-ID (<code>BT-10</code>) für alle Rechnungen an öffentliche Auftraggeber. Ohne Leitweg-ID wird die Rechnung abgelehnt.</p>

    <h3>Fehler 4: Datumsformat in CII</h3>
    <p>CII verwendet ein anderes Datumsformat als UBL. Häufiger Fehler: ISO-8601 statt CCYYMMDD.</p>
    <pre><code>&lt;!-- Falsch in CII --&gt;
&lt;udt:DateTimeString format="102"&gt;2026-03-22&lt;/udt:DateTimeString&gt;

&lt;!-- Richtig in CII --&gt;
&lt;udt:DateTimeString format="102"&gt;20260322&lt;/udt:DateTimeString&gt;</code></pre>

    <h3>Fehler 5: Summen stimmen nicht überein</h3>
    <p>EN 16931 enthält arithmetische Regeln (BR-CO-*). Die Summen müssen exakt passen:</p>
    <ul>
      <li><strong>BT-106</strong> (Summe Nettobetrag Positionen) = Summe aller BT-131</li>
      <li><strong>BT-109</strong> (Rechnungsbetrag ohne MwSt.) = BT-106 + BT-108 (Zuschlag) − BT-107 (Abzug)</li>
      <li><strong>BT-112</strong> (Rechnungsbetrag mit MwSt.) = BT-109 + BT-110 (MwSt.-Betrag)</li>
      <li><strong>BT-115</strong> (Fälliger Betrag) = BT-112 − BT-113 (bereits gezahlt)</li>
    </ul>

    <h3>Fehler 6: Falsche Unit-Codes</h3>
    <p>Mengeneinheiten müssen UN/ECE Recommendation 20 entsprechen. Häufige Codes:</p>
    <table>
      <thead>
        <tr>
          <th>Code</th>
          <th>Bedeutung</th>
        </tr>
      </thead>
      <tbody>
        <tr><td><code>HUR</code></td><td>Stunde</td></tr>
        <tr><td><code>DAY</code></td><td>Tag</td></tr>
        <tr><td><code>C62</code></td><td>Stück (Einheit)</td></tr>
        <tr><td><code>KGM</code></td><td>Kilogramm</td></tr>
        <tr><td><code>MTR</code></td><td>Meter</td></tr>
        <tr><td><code>LTR</code></td><td>Liter</td></tr>
      </tbody>
    </table>

    <p><strong>Tipp:</strong> Validieren Sie jede generierte Rechnung <strong>vor dem Versand</strong>. Die E-Invoice API prüft alle 5 Schichten in einem Aufruf — Schema, EN 16931, BR-DE, Berechnung und Semantik.</p>

    <h2>6. Komplettes Beispiel: XRechnung von A bis Z</h2>
    <p>Das folgende Beispiel zeigt den vollständigen Workflow — Rechnung erstellen, validieren und speichern:</p>

    <pre><code>import requests
from pathlib import Path

API_BASE = "http://localhost:8000/api/v1"

def create_xrechnung():
    """Erstellt eine XRechnung und validiert sie."""
    invoice = {
        "invoice_number": "RE-2026-042",
        "issue_date": "2026-03-22",
        "due_date": "2026-04-21",
        "currency_code": "EUR",
        "invoice_type_code": "380",
        "buyer_reference": "04011000-12345-67",
        "seller": {
            "name": "DevCorp GmbH",
            "street": "Entwicklerweg 42",
            "city": "München",
            "postal_code": "80331",
            "country_code": "DE",
            "tax_id": "DE987654321",
            "contact": {"email": "billing@devcorp.de"},
            "bank_account": {"iban": "DE89370400440532013000"}
        },
        "buyer": {
            "name": "Stadt München",
            "street": "Marienplatz 8",
            "city": "München",
            "postal_code": "80331",
            "country_code": "DE"
        },
        "lines": [
            {
                "description": "API-Entwicklung",
                "quantity": 80,
                "unit_code": "HUR",
                "unit_price": 120.00,
                "tax_category": "S",
                "tax_percent": 19.0
            },
            {
                "description": "Code Review",
                "quantity": 20,
                "unit_code": "HUR",
                "unit_price": 95.00,
                "tax_category": "S",
                "tax_percent": 19.0
            }
        ],
        "payment_terms": "Zahlbar innerhalb von 30 Tagen netto"
    }

    # 1. XML generieren
    resp = requests.post(
        f"{API_BASE}/invoices/xml",
        json=invoice,
        params={"syntax": "ubl"}
    )
    resp.raise_for_status()
    xml_bytes = resp.content

    # 2. Validieren
    val = requests.post(
        f"{API_BASE}/invoices/validate",
        files={"file": ("invoice.xml", xml_bytes, "application/xml")}
    )
    result = val.json()

    if not result["valid"]:
        for err in result["errors"]:
            print(f"Fehler: [{err['rule']}] {err['message']}")
        return False

    # 3. Speichern
    output = Path("output/RE-2026-042.xml")
    output.parent.mkdir(exist_ok=True)
    output.write_bytes(xml_bytes)
    print(f"Valide XRechnung gespeichert: {output}")
    return True

if __name__ == "__main__":
    create_xrechnung()</code></pre>

    <h2>7. Nächste Schritte</h2>
    <p>Sie haben die Grundlagen der <strong>XRechnung-Implementierung</strong> kennengelernt. Für den produktiven Einsatz empfehlen wir:</p>
    <ul>
      <li><strong>Branchenerweiterungen prüfen:</strong> Bau, Gesundheit, Logistik und Automotive haben zusätzliche Anforderungen.</li>
      <li><strong>ZUGFeRD parallel einrichten:</strong> Viele B2B-Empfänger bevorzugen das Hybridformat.</li>
      <li><strong>Fristen beachten:</strong> Die E-Rechnungspflicht 2027 betrifft alle B2B-Unternehmen.</li>
    </ul>
  </article>
</template>
