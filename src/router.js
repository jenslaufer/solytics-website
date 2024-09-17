import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: '',
        redirect: '/tunnel-funnel'
    },
    {
        path: '/tunnel-funnel',
        component: () => import('./views/Registration.vue'),
        props: {
            buttonLabel: 'Sign Up',
        },
        component: () => import('./views/ToolFunnel.vue')
    }
    ]
})
