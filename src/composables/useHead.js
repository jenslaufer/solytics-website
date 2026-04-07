import { useHead as _useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

const DEFAULT_OG_IMAGE = 'https://solytics.de/og-image.png'

export function useHead({ title, description, image }) {
  const route = useRoute()
  const url = `https://solytics.de${route.path}`
  const ogImage = image || DEFAULT_OG_IMAGE

  _useHead({
    title,
    meta: [
      ...(description ? [
        { name: 'description', content: description },
        { property: 'og:description', content: description },
        { name: 'twitter:description', content: description },
      ] : []),
      ...(title ? [
        { property: 'og:title', content: title },
        { name: 'twitter:title', content: title },
      ] : []),
      { property: 'og:url', content: url },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'de_DE' },
      { property: 'og:image', content: ogImage },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: ogImage },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}
