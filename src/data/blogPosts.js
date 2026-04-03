// Auto-discover blog posts from co-located .meta.js files
const metas = import.meta.glob('../pages/blog/*.meta.js', { eager: true })
const components = import.meta.glob('../pages/blog/*.vue')

export const blogPosts = Object.entries(metas)
  .map(([path, mod]) => {
    const vuePath = path.replace('.meta.js', '.vue')
    return {
      ...mod.default,
      component: components[vuePath],
    }
  })
  .sort((a, b) => a.date.localeCompare(b.date) || a.slug.localeCompare(b.slug))
