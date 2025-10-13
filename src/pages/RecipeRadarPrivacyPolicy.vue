<template>
    <section class="max-w-3xl mx-auto p-6 text-gray-800">
        <h1 class="text-3xl font-bold mb-6">Privacy Policy – Chrome Extension “RecipeRadar”</h1>

        <p class="mb-4">
            Protecting your personal data is very important to us. We process your data exclusively in accordance
            with the applicable legal provisions (GDPR, BDSG, TTDSG) and the Google Chrome Web Store Developer Policy.
        </p>

        <p class="mb-6">
            This Privacy Policy explains how your data is collected and processed when using our Chrome Extension
            <strong>RecipeRadar</strong> (hereinafter referred to as the “Extension”).
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">1. Controller</h2>
        <p class="mb-4">
            Solytics GmbH<br />
            Hörsteiner Str. 20a<br />
            63791 Karlstein a. Main<br />
            Germany<br />
            Email: <a href="mailto:jens.laufer@solytics.de" class="text-blue-600 underline">jens.laufer@solytics.de</a>
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">2. Purpose of the Extension</h2>
        <p class="mb-4">
            RecipeRadar allows you to enter a list of ingredients and generates a recipe using artificial intelligence
            (AI).
            To provide this functionality, the Extension securely communicates with our backend API.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">3. Data Collected and Processed</h2>

        <h3 class="text-lg font-semibold mt-6 mb-1">a) Account and Login Data</h3>
        <p class="mb-4">
            When using RecipeRadar with login, we collect your <strong>email address</strong> and
            <strong>password</strong>
            to create, authenticate, and manage your user account.
            <br />
            <strong>Legal basis:</strong> Art. 6 (1)(b) GDPR (performance of a contract).
        </p>

        <h3 class="text-lg font-semibold mt-6 mb-1">b) Ingredient Input</h3>
        <p class="mb-4">
            The <strong>ingredient list</strong> you provide is sent to our backend for temporary processing by an AI
            model
            to generate the corresponding recipe. This data is not permanently stored or linked to your user identity.
            <br />
            <strong>Legal basis:</strong> Art. 6 (1)(b) GDPR (performance of a contract).
        </p>

        <h3 class="text-lg font-semibold mt-6 mb-1">c) Technical Data</h3>
        <p class="mb-4">
            Limited technical data (e.g., browser version, extension version) may be processed to ensure compatibility,
            stability, and security.
            <br />
            <strong>Legal basis:</strong> Art. 6 (1)(f) GDPR (legitimate interest in secure operation).
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">4. No Disclosure to Third Parties</h2>
        <p class="mb-4">
            Your personal data is not shared with third parties. If external processors are used for AI processing,
            this is done solely based on <strong>Art. 28 GDPR</strong> under strict data processing agreements ensuring
            compliance.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">5. Chrome Permissions</h2>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li><code>storage</code> – Used to store Extension settings locally (e.g., preferences, session info).</li>
            <li><code>activeTab</code> – Accesses the active browser tab only when functionally required (no browsing
                history collection).</li>
            <li><code>sidePanel</code> – Allows RecipeRadar to remain visible in the Chrome side panel while browsing.
            </li>
        </ul>
        <p class="mb-4">
            These permissions are used exclusively to provide core functionality. RecipeRadar does not collect unrelated
            data.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">6. Storage, Security, and Transmission</h2>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li><strong>Login data</strong> (username, email) is securely stored on our servers.</li>
            <li><strong>Ingredient data</strong> is processed temporarily and not permanently associated with your
                account.</li>
            <li>All data transmissions between your browser and our backend are encrypted via <strong>HTTPS</strong>.
            </li>
        </ul>
        <p class="mb-4">
            We implement appropriate technical and organizational measures to protect your data from unauthorized
            access,
            loss, or misuse.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">7. Cookies and Tracking</h2>
        <p class="mb-4">
            The Extension does not use analytics or marketing cookies. Settings are stored locally via Chrome Storage.
            RecipeRadar does not track your browsing behavior or activity across websites.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">8. Legal Basis Summary</h2>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li>Art. 6 (1)(b) GDPR – Contract performance (login, recipe generation).</li>
            <li>Art. 6 (1)(f) GDPR – Legitimate interest (operation, security, troubleshooting, improvement).</li>
        </ul>

        <h2 class="text-xl font-semibold mt-8 mb-2">9. Data Retention</h2>
        <p class="mb-4">
            Account data is stored for as long as your account remains active. Ingredient data is processed only
            temporarily.
            You can request deletion of your account and associated data at any time by contacting us.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">10. Your Rights</h2>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li>Access to your data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion of your data (“Right to be forgotten”)</li>
            <li>Restriction of processing</li>
            <li>Data portability</li>
            <li>Objection to processing</li>
        </ul>
        <p class="mb-4">
            To exercise these rights, contact us at
            <a href="mailto:jens.laufer@solytics.de" class="text-blue-600 underline">jens.laufer@solytics.de</a>.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">11. Updates</h2>
        <p class="mb-4">
            We may update this Privacy Policy from time to time. The latest version will always be available within
            the Extension and in the Chrome Web Store listing. Continued use of RecipeRadar after any update implies
            acceptance of the revised policy.
        </p>

        <a @click="router.go(-1)"
            class="mt-6 mb-10 inline-block px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-md shadow-md">
            Go Back
        </a>
    </section>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()


</script>