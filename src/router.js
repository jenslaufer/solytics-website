import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        // will match everything and put it under `route.params.pathMatch`
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./pages/404.vue') },
        {
            path: '',
            component: () => import('./pages/Index.vue'),
            redirect: '/tool-funnel/0'
        },
        {
            path: '/tool-funnel/:id',
            props: {
                buttonLabel: 'Sign Up',
                errorColor: 'text-red-700',
                successColor: 'text-green-700',
                background: 'bg-[#080808]',
                fontColor: 'text-white',
                route: '/calendar',
                campaign: 'tool-funnel',
                content: [
                    {
                        headline: 'Business Owner?',
                        subheadline: 'Attract high-quality, low-cost leads with Software Tools and Quizzes',
                        cta: 'Book a free consultation call'
                    }
                ]
            },
            component: () => import('./pages/LandingPage.vue')
        },
        {
            path: '/not-found',
            component: () => import('./pages/404.vue')
        },
        {
            path: '/impressum',
            component: () => import('./pages/Impressum.vue')
        },
        {
            path: '/calendar',
            component: () => import('./pages/Calendar.vue')
        }
    ]
})
