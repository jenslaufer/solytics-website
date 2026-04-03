import { createRouter, createMemoryHistory, createWebHistory } from 'vue-router'

// Auto-discover routes from co-located .route.js files
const routeModules = import.meta.glob('./pages/**/*.route.js', { eager: true })
const componentModules = import.meta.glob('./pages/**/*.vue')

function resolveComponent(routeFilePath, config) {
  if (config.redirect) return undefined

  if (config.component) {
    const dir = routeFilePath.substring(0, routeFilePath.lastIndexOf('/') + 1)
    return componentModules[dir + config.component.replace('./', '')]
  }

  return componentModules[routeFilePath.replace('.route.js', '.vue')]
}

const discoveredRoutes = Object.entries(routeModules)
  .map(([path, mod]) => {
    const config = mod.default
    const component = resolveComponent(path, config)
    return {
      path: config.path,
      ...(component && { component }),
      ...(config.meta && { meta: config.meta }),
      ...(config.name && { name: config.name }),
    }
  })

export const routes = [
  ...discoveredRoutes,
  // Legacy redirects (historical, no component)
  { path: '/inpress', redirect: '/impressum' },
  { path: '/privacy_policy', redirect: '/datenschutz' },
  { path: '/appointment', redirect: '/kontakt' },
]

export const router = createRouter({
  history: typeof window !== 'undefined' ? createWebHistory() : createMemoryHistory(),
  routes,
})
