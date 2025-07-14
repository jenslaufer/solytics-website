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
            component: () => import('./pages/Home.vue'),
            props: {
                headlines: [
                    {
                        "headline": "From Raw Data to Real Decisions",
                        "subheadline": "Stop guessing. We turn your messy data into interactive dashboards and predictive tools that help you act with confidence."
                    },
                    {
                        "headline": "Launch Your MVP Without a Dev Team",
                        "subheadline": "We design, build, and deploy working prototypes in weeks — so you can pitch investors, test markets, or ship your first product."
                    },
                    {
                        "headline": "Make Your Data Speak — Visually and Intelligently",
                        "subheadline": "We combine statistical rigor with stunning dashboards to surface patterns, insights, and stories your team can act on."
                    },
                    {
                        "headline": "Outsmart the Competition with Custom AI",
                        "subheadline": "From forecasting to recommendation engines — we integrate machine learning that fits your workflow, not the other way around."
                    },
                    {
                        "headline": "Technical Firepower for Ambitious Founders",
                        "subheadline": "No in-house team? No problem. We bring senior-level full stack, analytics, and AI skills to move your startup from idea to traction."
                    },
                    {
                        "headline": "Your Internal Analytics Team — Without the Hiring",
                        "subheadline": "We work like an embedded team: asking smart questions, building fast, and delivering tools your business actually uses."
                    },
                    {
                        "headline": "Simulate, Predict, Adapt",
                        "subheadline": "From Monte Carlo simulations to real-time KPIs — we help you see not just what happened, but what could happen next."
                    },
                    {
                        "headline": "From Excel Chaos to Streamlit Clarity",
                        "subheadline": "We upgrade your spreadsheets into interactive web dashboards your team will actually use — no more endless tabs or version confusion."
                    },
                    {
                        "headline": "Data Tools That Don’t Just Look Good — They Work",
                        "subheadline": "Whether it’s a dashboard for your CEO or a tactical tool for coaches, we build interfaces that drive better decisions every day."
                    },
                    {
                        "headline": "You Have the Vision — We Code the Reality",
                        "subheadline": "With Vue.js, Python, and R, we build products that work from day one — tested, deployed, and ready to grow with you."
                    }
                ]
            }
        }
    ]
})
