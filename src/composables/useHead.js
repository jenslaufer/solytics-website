import { useHead as _useHead } from '@unhead/vue'
import { useRoute } from 'vue-router'

export function useHead({ title, description }) {
  const route = useRoute()
  const url = `https://solytics.de${route.path}`

  _useHead({
    title,
    meta: [
      ...(description ? [
        { name: 'description', content: description },
        { property: 'og:description', content: description },
      ] : []),
      ...(title ? [{ property: 'og:title', content: title }] : []),
      { property: 'og:url', content: url },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}
