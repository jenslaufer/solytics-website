import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./pages/404.vue') },
        {
            path: '/impressum',
            component: () => import('./pages/Impressum.vue'),
            props: {
                name: "Solytics GmbH",
                address: "Hörsteiner Str. 20a",
                zip: "63791",
                city: "Karlstein a. Main",
                country: "Germany",
                email: "jens.laufer@solytics.de",
                handelsregister: "Handelsregister: HRB 16879",
                amtsgericht: "Registergericht: Amtsgericht Aschaffenburg",
                vertreter: "Jens Laufer (Geschäftsführer)"
            },
        },
        {
            path: '/',
            component: () => import('./pages/Home.vue')
        }
    ]
})
