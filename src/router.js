import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '',
        redirect: '/tool-funnel/0'
    },
    {
        path: '/tool-funnel/:id',
        component: () => import('./views/Registration.vue'),
        props: {
            buttonLabel: 'Sign Up',
        },
        component: () => import('./views/ToolFunnel/LandingPage.vue')
    }
    ]
})
