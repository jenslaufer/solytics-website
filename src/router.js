import { createWebHistory, createRouter } from 'vue-router'

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      component: () => import('./pages/Home.vue'),
    },
    {
      path: '/e-rechnung',
      component: () => import('./pages/einvoice/Index.vue'),
    },
    {
      path: '/ki-automatisierung',
      component: () => import('./pages/ai/Index.vue'),
    },
    {
      path: '/blog',
      component: () => import('./pages/Blog.vue'),
    },
    {
      path: '/blog/e-rechnung',
      component: () => import('./pages/blog/CategoryPage.vue'),
      meta: { category: 'e-rechnung' },
    },
    {
      path: '/blog/ki-automatisierung',
      component: () => import('./pages/blog/CategoryPage.vue'),
      meta: { category: 'ki-automatisierung' },
    },
    {
      path: '/blog/:slug',
      component: () => import('./pages/BlogArticle.vue'),
    },
    {
      path: '/ki-automatisierung/readiness-check',
      component: () => import('./pages/ai/ReadinessCheck.vue'),
    },
    {
      path: '/e-rechnung/pflicht-check',
      component: () => import('./pages/einvoice/PflichtCheck.vue'),
    },
    {
      path: '/kontakt',
      component: () => import('./pages/Kontakt.vue'),
    },
    {
      path: '/impressum',
      component: () => import('./pages/Impressum.vue'),
    },
    {
      path: '/datenschutz',
      component: () => import('./pages/Datenschutz.vue'),
    },
    // Chrome extension privacy policies (must be kept)
    {
      path: '/privacy_policy_recipe_radar',
      component: () => import('./pages/RecipeRadarPrivacyPolicy.vue'),
    },
    {
      path: '/privacy_policy_xg_goals_calculator',
      component: () => import('./pages/XgCalculatorPrivacyPolicy.vue'),
    },
    // Legacy redirects
    { path: '/inpress', redirect: '/impressum' },
    { path: '/privacy_policy', redirect: '/datenschutz' },
    { path: '/appointment', redirect: '/kontakt' },
    // Catch-all
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('./pages/NotFound.vue'),
    },
  ],
})
