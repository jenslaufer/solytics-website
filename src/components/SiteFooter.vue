<template>
  <footer class="py-12 px-6 md:px-10 border-t border-border">
    <div class="max-w-[var(--max-width-content)] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <div class="font-bold text-lg text-ink mb-2">Solytics</div>
          <p class="body-md text-muted">
            E-Rechnung &amp; KI-Automatisierung.<br>
            Software made in Germany.
          </p>
        </div>

        <!-- Leistungen -->
        <div>
          <h4 class="label text-muted mb-4">Leistungen</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/e-rechnung" class="text-muted hover:text-ink transition-colors">E-Rechnung</router-link></li>
            <li><router-link to="/ki-automatisierung" class="text-muted hover:text-ink transition-colors">KI-Automatisierung</router-link></li>
            <li><router-link to="/website-redesign" class="text-muted hover:text-ink transition-colors">Website-Redesign</router-link></li>
            <li><router-link to="/blog" class="text-muted hover:text-ink transition-colors">Blog</router-link></li>
          </ul>
        </div>

        <!-- Unternehmen -->
        <div>
          <h4 class="label text-muted mb-4">Unternehmen</h4>
          <ul class="space-y-2 text-sm">
            <li><router-link to="/kontakt" class="text-muted hover:text-ink transition-colors">Kontakt</router-link></li>
            <li><router-link to="/impressum" class="text-muted hover:text-ink transition-colors">Impressum</router-link></li>
            <li><router-link to="/datenschutz" class="text-muted hover:text-ink transition-colors">Datenschutz</router-link></li>
          </ul>
        </div>

        <!-- Kontakt -->
        <div>
          <h4 class="label text-muted mb-4">Kontakt</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="mailto:jens.laufer@solytics.de" class="text-muted hover:text-ink transition-colors">
                jens.laufer@solytics.de
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jenslaufer" target="_blank" rel="noopener" class="text-muted hover:text-ink transition-colors">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/jenslaufer" target="_blank" rel="noopener" class="text-muted hover:text-ink transition-colors">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted">
        <p>&copy; {{ new Date().getFullYear() }} Solytics GmbH. Alle Rechte vorbehalten.</p>
        <div class="flex gap-6">
          <router-link to="/impressum" class="hover:text-ink transition-colors">Impressum</router-link>
          <router-link to="/datenschutz" class="hover:text-ink transition-colors">Datenschutz</router-link>
        </div>
      </div>
    </div>
  </footer>
</template>
