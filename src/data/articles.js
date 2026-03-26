import { blogPosts } from './blogPosts.js'

/**
 * Manual relationship map: slug → array of related slugs (2-3 per article).
 * Primary: same category. Cross-category where thematically close.
 */
const relationshipMap = {
  // === E-Rechnung ===
  'xrechnung-pflicht-2027': [
    'xrechnung-vs-zugferd',
    'e-rechnung-erstellen-anleitung',
    'e-rechnung-kleinunternehmer',
  ],
  'e-rechnung-software-vergleich-2026': [
    'e-rechnung-erstellen-anleitung',
    'xrechnung-vs-zugferd',
    'e-rechnung-kleinunternehmer',
  ],
  'e-rechnung-handwerk': [
    'xrechnung-pflicht-2027',
    'e-rechnung-erstellen-anleitung',
    'e-rechnung-fehler',
  ],
  'xrechnung-vs-zugferd': [
    'xrechnung-pflicht-2027',
    'en16931-branchenerweiterungen',
    'xrechnung-implementieren',
  ],
  'en16931-branchenerweiterungen': [
    'xrechnung-implementieren',
    'xrechnung-vs-zugferd',
    'e-rechnung-handwerk',
  ],
  'xrechnung-implementieren': [
    'en16931-branchenerweiterungen',
    'e-rechnung-fehler',
    'xrechnung-vs-zugferd',
  ],
  'e-rechnung-kleinunternehmer': [
    'xrechnung-pflicht-2027',
    'e-rechnung-steuerberater',
    'e-rechnung-erstellen-anleitung',
  ],
  'e-rechnung-steuerberater': [
    'e-rechnung-kleinunternehmer',
    'e-rechnung-fehler',
    'e-rechnung-software-vergleich-2026',
  ],
  'e-rechnung-erstellen-anleitung': [
    'e-rechnung-fehler',
    'xrechnung-vs-zugferd',
    'e-rechnung-software-vergleich-2026',
  ],
  'e-rechnung-fehler': [
    'e-rechnung-erstellen-anleitung',
    'e-rechnung-steuerberater',
    'xrechnung-implementieren',
  ],

  // === KI-Automatisierung ===
  'ki-agenten-fuer-unternehmen': [
    'ki-agent-vs-chatbot',
    'ki-automatisierung-kosten',
    'gmbh-mit-ki-agenten-automatisiert',
  ],
  'digitalisierung-mittelstand-2026': [
    'ki-automatisierung-kosten',
    'ki-buchhaltung',
    'ki-im-vertrieb',
  ],
  'ki-im-vertrieb': [
    'ki-agenten-fuer-unternehmen',
    'ki-automatisierung-kosten',
    'digitalisierung-mittelstand-2026',
  ],
  'ki-automatisierung-kosten': [
    'ki-agenten-fuer-unternehmen',
    'digitalisierung-mittelstand-2026',
    'ki-im-vertrieb',
  ],
  'ki-buchhaltung': [
    'e-rechnung-fehler',
    'ki-automatisierung-kosten',
    'digitalisierung-mittelstand-2026',
  ],
  'ki-agent-vs-chatbot': [
    'ki-agenten-fuer-unternehmen',
    'gmbh-mit-ki-agenten-automatisiert',
    'ki-automatisierung-kosten',
  ],
  'gmbh-mit-ki-agenten-automatisiert': [
    'ki-agenten-fuer-unternehmen',
    'ki-agent-vs-chatbot',
    'ki-buchhaltung',
  ],
}

export function getRelatedArticles(slug) {
  const relatedSlugs = relationshipMap[slug] || []
  return relatedSlugs
    .map(s => blogPosts.find(p => p.slug === s))
    .filter(Boolean)
}

export { relationshipMap }
