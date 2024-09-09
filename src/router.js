import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '',
        component: () => import('./views/Registration.vue'),
        props: {
            buttonLabel: 'Sign Up',
        },
        redirect: '/landing1'
    },
    {
        path: '/landing1',
        component: () => import('./views/LandingPage1.vue')
    },
    {
        path: '/landing2',
        component: () => import('./views/LandingPage2.vue')
    }
    ]
})
