<template>
    <section class="max-w-3xl mx-auto p-6 text-gray-800">
        <h1 class="text-3xl font-bold mb-6">
            Privacy Policy – Chrome Extension “Expected Goals (xG) Calculator – Football Winning Probability & Odds”
        </h1>

        <p class="mb-4">
            Protecting your personal data is very important to us. We process your data exclusively in accordance
            with the applicable legal provisions (GDPR, BDSG, TTDSG) and the Google Chrome Web Store Developer Policy.
        </p>

        <p class="mb-6">
            This Privacy Policy explains how your data is handled when using our Chrome Extension
            <strong>Expected Goals (xG) Calculator – Football Winning Probability & Odds</strong> (hereinafter referred
            to as the “Extension”).
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">1. Controller</h2>
        <p class="mb-4">
            Solytics GmbH<br />
            Hörsteiner Str. 20a<br />
            63791 Karlstein a. Main<br />
            Germany<br />
            Email:
            <a href="mailto:jens.laufer@solytics.de" class="text-blue-600 underline">jens.laufer@solytics.de</a>
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">2. Purpose of the Extension</h2>
        <p class="mb-4">
            The Extension allows users to calculate football winning probabilities and fair odds based on
            <strong>Expected Goals (xG)</strong> data. All calculations are performed locally within the browser.
            No external servers, APIs, or databases are contacted during usage.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">3. Data Collected and Processed</h2>
        <p class="mb-4">
            The Extension does <strong>not collect, store, or transmit any personal data</strong>.
            All inputs (e.g., expected goal values) are processed exclusively on your device and are
            not sent to any server or third party.
        </p>

        <h3 class="text-lg font-semibold mt-6 mb-1">a) User Input</h3>
        <p class="mb-4">
            When you enter xG values into the calculator, this data is processed locally in your browser’s memory
            to generate the probability and odds results. The data is not stored after closing the Extension.
            <br />
            <strong>Legal basis:</strong> No personal data processing within the meaning of Art. 4(1) GDPR.
        </p>

        <h3 class="text-lg font-semibold mt-6 mb-1">b) Technical Data</h3>
        <p class="mb-4">
            The Extension does not collect or log any technical data, browsing activity, or analytics.
            It runs fully offline once installed.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">4. No Disclosure to Third Parties</h2>
        <p class="mb-4">
            As no personal data is processed, there is no disclosure or transfer of any information to third parties.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">5. Chrome Permissions</h2>
        <ul class="list-disc list-inside mb-4 space-y-1">
            <li>
                <code>sidePanel</code> – Allows the Extension to display its calculator interface in the Chrome side
                panel for convenient access while browsing.
            </li>
        </ul>
        <p class="mb-4">
            These permissions are used exclusively for core functionality. The Extension does not access your browsing
            data, history, or any personal information.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">6. Storage, Security, and Transmission</h2>
        <p class="mb-4">
            The Extension does not store or transmit any user data to external systems. All calculations occur
            locally in your browser. No network connections are established.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">7. Cookies and Tracking</h2>
        <p class="mb-4">
            The Extension does not use cookies, analytics, or tracking technologies. It does not track your activity
            across websites or collect any form of user behavior data.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">8. Legal Basis Summary</h2>
        <p class="mb-4">
            No processing of personal data occurs within the meaning of the GDPR. Therefore, no legal basis under
            Art. 6 GDPR is applicable.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">9. Data Retention</h2>
        <p class="mb-4">
            The Extension does not retain any data. All user input and calculation results are deleted automatically
            when the Extension or browser tab is closed.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">10. Your Rights</h2>
        <p class="mb-4">
            Since no personal data is processed, the data subject rights under the GDPR (access, deletion, correction,
            etc.) do not apply.
        </p>

        <h2 class="text-xl font-semibold mt-8 mb-2">11. Updates</h2>
        <p class="mb-4">
            We may update this Privacy Policy from time to time, for example to reflect changes in functionality or
            legal requirements. The latest version will always be available within the Extension and in the Chrome
            Web Store listing.
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
