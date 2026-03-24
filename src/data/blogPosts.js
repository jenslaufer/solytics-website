export const blogPosts = [
  {
    slug: 'xrechnung-pflicht-2027',
    title: 'XRechnung-Pflicht 2027: Was Unternehmen jetzt wissen müssen',
    description: 'Ab 2027 wird die elektronische Rechnung im B2B-Bereich Pflicht. Erfahren Sie, welche Fristen gelten, wer betroffen ist und wie Sie Ihr Unternehmen rechtzeitig vorbereiten.',
    date: '2026-03-21',
    category: 'e-rechnung',
    readingTime: '8 min',
    component: () => import('../pages/blog/XRechnungPflicht2027.vue'),
  },
  {
    slug: 'ki-agenten-fuer-unternehmen',
    title: 'KI-Agenten für Unternehmen: Prozesse automatisieren mit intelligenter Software',
    description: 'KI-Agenten revolutionieren Geschäftsprozesse. Erfahren Sie, was KI-Agenten sind, welche Anwendungsfälle es gibt und wie Ihr Unternehmen davon profitiert.',
    date: '2026-03-24',
    category: 'ki-automatisierung',
    readingTime: '9 min',
    component: () => import('../pages/blog/KiAgentenFuerUnternehmen.vue'),
  },
]
