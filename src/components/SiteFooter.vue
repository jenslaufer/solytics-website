<template>
  <footer class="bg-surface-900 dark:bg-surface-100 text-surface-300 dark:text-surface-600">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div class="md:col-span-1">
          <div class="font-bold text-xl text-white dark:text-surface-950 mb-3">Solytics</div>
          <p class="text-sm text-surface-400 dark:text-surface-500 leading-relaxed">
            E-Rechnung &amp; KI-Automatisierung.<br>
            Software made in Germany.
          </p>
        </div>

        <!-- Leistungen -->
        <div>
          <h4 class="text-sm font-semibold text-white dark:text-surface-950 uppercase tracking-wider mb-4">Leistungen</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/e-rechnung" class="hover:text-white dark:hover:text-surface-950 transition-colors">E-Rechnung</router-link></li>
            <li><router-link to="/ki-automatisierung" class="hover:text-white dark:hover:text-surface-950 transition-colors">KI-Automatisierung</router-link></li>
            <li><router-link to="/blog" class="hover:text-white dark:hover:text-surface-950 transition-colors">Blog</router-link></li>
          </ul>
        </div>

        <!-- Unternehmen -->
        <div>
          <h4 class="text-sm font-semibold text-white dark:text-surface-950 uppercase tracking-wider mb-4">Unternehmen</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/kontakt" class="hover:text-white dark:hover:text-surface-950 transition-colors">Kontakt</router-link></li>
            <li><router-link to="/impressum" class="hover:text-white dark:hover:text-surface-950 transition-colors">Impressum</router-link></li>
            <li><router-link to="/datenschutz" class="hover:text-white dark:hover:text-surface-950 transition-colors">Datenschutz</router-link></li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div>
          <h4 class="text-sm font-semibold text-white dark:text-surface-950 uppercase tracking-wider mb-4">Kontakt</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="mailto:jens.laufer@solytics.de" class="hover:text-white dark:hover:text-surface-950 transition-colors">
                jens.laufer@solytics.de
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/company/solytics-gmbh" target="_blank" rel="noopener" class="hover:text-white dark:hover:text-surface-950 transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/solytics" target="_blank" rel="noopener" class="hover:text-white dark:hover:text-surface-950 transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-surface-800 dark:border-surface-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-surface-500">
        <p>&copy; {{ new Date().getFullYear() }} Solytics GmbH. Alle Rechte vorbehalten.</p>
        <div class="flex gap-6">
          <router-link to="/impressum" class="hover:text-white dark:hover:text-surface-950 transition-colors">Impressum</router-link>
          <router-link to="/datenschutz" class="hover:text-white dark:hover:text-surface-950 transition-colors">Datenschutz</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
