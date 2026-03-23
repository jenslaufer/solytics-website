# Solytics Website

Corporate website for Solytics GmbH — solytics.de.

## Business Areas

1. **E-Rechnung** — XRechnung/ZUGFeRD compliance, API, consulting. XRechnung-Pflicht 2027 = urgency.
2. **KI-Automatisierung** — AI agents for business automation, consulting, workshops.

## Tech Stack

- Vue 3 + Vite 7 + Tailwind CSS 4
- Vue Router (hash history for GitHub Pages)
- GitHub Pages deployment via GitHub Actions

## Structure

```
src/
├── App.vue
├── main.js
├── router.js
├── style.css
├── pages/           # Route components
│   ├── Home.vue
│   ├── Inpress.vue  # Impressum
│   ├── PrivacyPolicy.vue
│   ├── RecipeRadarPrivacyPolicy.vue  # Keep (Chrome extension requirement)
│   └── XgCalculatorPrivacyPolicy.vue # Keep (Chrome extension requirement)
├── assets/
public/
.github/workflows/deploy.yml  # GitHub Pages auto-deploy on push to main
```

## Legal

- Solytics GmbH, Hörsteiner Str. 20a, 63791 Karlstein a. Main
- HRB 16879, AG Aschaffenburg
- GF: Jens Laufer
- Email: jens.laufer@solytics.de

## Design Direction

Premium, trust-inspiring. Reference: stripe.com, linear.app, vercel.com.
Two business areas presented as equal pillars under one brand.
Mobile-first, fast, no heavy dependencies.

## Constraints

- Keep RecipeRadar and xG Calculator privacy policy pages (Chrome extension requirement)
- GitHub Pages: use hash routing (createWebHashHistory)
- No external component libraries — build from Tailwind
- Contact: jens.laufer@solytics.de

## Consulting Packages

### E-Rechnung
- Compliance-Check: €1.500
- Implementierung: €5.000
- Komplettmigration: auf Anfrage

### KI-Automatisierung
- Workshop: €2.500
- Setup: €5.000
- Retainer: €2.000/Monat

## Commands

```bash
npm install
npm run dev      # Dev server
npm run build    # Production build → dist/
```
