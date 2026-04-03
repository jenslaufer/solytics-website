// Auto-discover navigation and footer items from co-located .route.js files
const routeModules = import.meta.glob('../pages/**/*.route.js', { eager: true })

const allRoutes = Object.values(routeModules).map(m => m.default)

export const navItems = allRoutes
  .filter(r => r.nav)
  .sort((a, b) => a.nav.order - b.nav.order)
  .map(r => ({ label: r.nav.label, to: r.path }))

export const footerServices = allRoutes
  .filter(r => r.footer?.section === 'services')
  .sort((a, b) => a.footer.order - b.footer.order)
  .map(r => ({ label: r.footer.label, to: r.path }))

export const footerCompany = allRoutes
  .filter(r => r.footer?.section === 'company')
  .sort((a, b) => a.footer.order - b.footer.order)
  .map(r => ({ label: r.footer.label, to: r.path }))
