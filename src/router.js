import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '',
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
            content: [
                {
                    headline: 'Business Owner?',
                    subheadline: 'Attract high-quality, low-cost leads with Software Tools and Quizzes'
                }
            ]
        },
        component: () => import('./views/LandingPage.vue')
    }
    ]
})
