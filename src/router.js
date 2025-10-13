import { createWebHashHistory, createRouter } from 'vue-router'

export const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('./pages/404.vue') },
        {
            path: '/inpress',
            component: () => import('./pages/Inpress.vue'),
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
        { path: '/privacy_policy', component: () => import('./pages/PrivacyPolicy.vue') },
        { path: '/privacy_policy_recipe_radar', component: () => import('./pages/RecipeRadarPrivacyPolicy.vue') },
        { path: '/appointment', component: () => import('./pages/Appointment.vue') },
        { path: '/jobs', component: () => import('./pages/Jobs.vue') },
        {
            path: '/jobs/hockey_analytics_job', component: () => import('./pages/SportsAnalyticsJob.vue'),
            props: {
                type: "Hockey (Ice Hockey) for German Hockey League (DEL)"
            }
        },
        {
            path: '/jobs/football_analytics_job', component: () => import('./pages/SportsAnalyticsJob.vue'),
            props: {
                type: "Football (Soccer)"
            }
        },
        {
            path: '/',
            component: () => import('./pages/Home.vue'),
            props: {
                headlines: [
                    {
                        "headline": "From Raw Data to Real Decisions",
                        "subheadline": "Stop guessing. We turn your messy data into interactive dashboards and predictive tools that help you act with confidence.",
                        "cta": "Book a Free Data Strategy Call..."
                    },
                    {
                        "headline": "Launch Your MVP Without a Dev Team",
                        "subheadline": "We design, build, and deploy working prototypes in weeks — so you can pitch investors, test markets, or ship your first product.",
                        "cta": "Schedule Your MVP Planning Call..."
                    },
                    {
                        "headline": "Make Your Data Speak — Visually and Intelligently",
                        "subheadline": "We combine statistical rigor with stunning dashboards to surface patterns, insights, and stories your team can act on.",
                        "cta": "Get a Free Visualization Audit..."
                    },
                    {
                        "headline": "Outsmart the Competition with Custom AI",
                        "subheadline": "From forecasting to recommendation engines — we integrate machine learning that fits your workflow, not the other way around.",
                        "cta": "Talk to an AI Consultant..."
                    },
                    {
                        "headline": "Technical Firepower for Ambitious Founders",
                        "subheadline": "No in-house team? No problem. We bring senior-level full stack, analytics, and AI skills to move your startup from idea to traction.",
                        "cta": "Book a Founder's Tech Session..."
                    },
                    {
                        "headline": "Your Internal Analytics Team — Without the Hiring",
                        "subheadline": "We work like an embedded team: asking smart questions, building fast, and delivering tools your business actually uses.",
                        "cta": "Start with a Discovery Call..."
                    },
                    {
                        "headline": "Simulate, Predict, Adapt",
                        "subheadline": "From Monte Carlo simulations to real-time KPIs — we help you see not just what happened, but what could happen next.",
                        "cta": "Request a Simulation Demo..."
                    },
                    {
                        "headline": "From Excel Chaos to Streamlit Clarity",
                        "subheadline": "We upgrade your spreadsheets into interactive web dashboards your team will actually use — no more endless tabs or version confusion.",
                        "cta": "Book a Dashboard Modernization Call..."
                    },
                    {
                        "headline": "Data Tools That Don’t Just Look Good — They Work",
                        "subheadline": "Whether it’s a dashboard for your CEO or a tactical tool for coaches, we build interfaces that drive better decisions every day.",
                        "cta": "Get a Tool Design Consultation..."
                    },
                    {
                        "headline": "You Have the Vision — We Code the Reality",
                        "subheadline": "With Vue.js, Python, and R, we build products that work from day one — tested, deployed, and ready to grow with you.",
                        "cta": "Schedule a Product Planning Session..."
                    }
                ]

            }
        }
    ]
})
