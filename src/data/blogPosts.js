import { defineAsyncComponent } from 'vue'

export const blogPosts = [
  {
    slug: 'xrechnung-pflicht-2027',
    title: 'XRechnung-Pflicht 2027: Was Unternehmen jetzt wissen müssen',
    excerpt: 'Ab 2027 wird die elektronische Rechnung im B2B-Bereich Pflicht. Erfahren Sie, welche Fristen gelten, wer betroffen ist und wie Sie Ihr Unternehmen rechtzeitig vorbereiten.',
    date: '2026-03-21',
    category: 'e-rechnung',
    readingTime: '8 Min.',
    component: defineAsyncComponent(() => import('../pages/blog/XRechnungPflicht2027.vue')),
  },
  {
    slug: 'ki-agenten-fuer-unternehmen',
    title: 'KI-Agenten für Unternehmen: Prozesse automatisieren mit intelligenter Software',
    excerpt: 'KI-Agenten revolutionieren Geschäftsprozesse. Erfahren Sie, was KI-Agenten sind, welche Anwendungsfälle es gibt und wie Ihr Unternehmen davon profitiert.',
    date: '2026-03-24',
    category: 'ki-automatisierung',
    readingTime: '9 Min.',
    component: defineAsyncComponent(() => import('../pages/blog/KiAgentenFuerUnternehmen.vue')),
  },
  {
    slug: 'e-rechnung-software-vergleich-2026',
    title: 'E-Rechnung-Software im Vergleich 2026: ERP, Standalone oder API-First?',
    excerpt: 'Der Markt für E-Rechnung-Software ist unübersichtlich. Dieser Vergleich hilft Ihnen, die passende Lösung zu finden — ob Kleinunternehmen, Mittelstand oder Konzern.',
    date: '2026-03-24',
    category: 'e-rechnung',
    readingTime: '10 Min.',
    component: defineAsyncComponent(() => import('../pages/blog/ERechnungSoftwareVergleich2026.vue')),
  },
  {
    slug: 'e-rechnung-steuerberater',
    title: 'E-Rechnung für Steuerberater: Mandanten richtig beraten',
    excerpt: 'Die E-Rechnungspflicht betrifft jeden Mandanten. Erfahren Sie, wie Steuerberater ihre Mandanten bei Formatwahl, DATEV-Integration, GoBD-Archivierung und Umstellung kompetent begleiten.',
    date: '2026-03-25',
    category: 'e-rechnung',
    readingTime: '10 Min.',
    component: defineAsyncComponent(() => import('../pages/blog/ERechnungSteuerberater.vue')),
  },
]
