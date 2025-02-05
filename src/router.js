import { createWebHashHistory, createRouter } from 'vue-router'

const content = [
    {
        "headline": "Need Leads for Your Business?",
        "subheadline": "Attract high-quality leads at low costs with Software Tools and Quizzes",
        "cta": "Book a free consultation call",
        "url": "/calendar",
        "explainer": "Software tools and quizzes are a cost-efficient way to generate high-quality leads for your business. Your customers are driven by their desire for insights, and this is the gap your software tool or quiz fills. You generate leads while your customers receive something valuable in return, creating a win-win situation that builds trust in your business."
    },
    {
        "headline": "High-Quality, Low-Cost Leads",
        "subheadline": "Software tools and quizzes are the secret to attracting high-quality, low-cost leads",
        "cta": "Book a free consultation call",
        "url": "/calendar",
        "explainer": "Software tools and quizzes are a cost-efficient way to generate high-quality leads for your business. Your customers are driven by their desire for insights, and this is the gap your software tool or quiz fills. You generate leads while your customers receive something valuable in return, creating a win-win situation that builds trust in your business."
    },
    {
        "headline": "High-Quality, Low-Cost Leads",
        "subheadline": "Attract high-quality, low-cost leads with Software tools and Quizzes",
        "cta": "Book a free consultation call",
        "url": "/calendar",
        "explainer": "Software tools and quizzes are a cost-efficient way to generate high-quality leads for your business. Your customers are driven by their desire for insights, and this is the gap your software tool or quiz fills. You generate leads while your customers receive something valuable in return, creating a win-win situation that builds trust in your business."
    },
    {
        "headline": "Business Owner?",
        "subheadline": "Attract high-quality, low-cost leads with Software tools and Quizzes",
        "cta": "Book a free consultation call",
        "url": "/calendar",
        "explainer": "Software tools and quizzes are a cost-efficient way to generate high-quality leads for your business. Your customers are driven by their desire for insights, and this is the gap your software tool or quiz fills. You generate leads while your customers receive something valuable in return, creating a win-win situation that builds trust in your business."
    }
]

const landingPageProps = {
    content: content,
    buttonLabel: 'Sign Up',
    errorColor: 'text-red-700',
    successColor: 'text-green-700',
    background: 'bg-[#080808]',
    fontColor: 'text-white',
    product: 'tool-funnel'
}

const registrationProps = {
    ...landingPageProps,
    showExplainer: true,
    registration: true,
    showFooter: true
}

const ctaProps = {
    ...landingPageProps,
    showExplainer: false,
    registration: false,
    showFooter: false
}

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
            props: registrationProps,
            component: () => import('./pages/LandingPage.vue')
        },
        {
            path: '/tool-funnel-short/:id',
            props: ctaProps,
            component: () => import('./pages/LandingPage.vue')
        },
        {
            path: '/not-found',
            component: () => import('./pages/404.vue')
        },
        {
            path: '/impressum',
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
            component: () => import('./pages/Impressum.vue')
        },
        {
            path: '/calendar',
            component: () => import('./pages/Calendar.vue')
        }
    ]
})
