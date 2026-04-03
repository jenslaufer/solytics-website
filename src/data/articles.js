import { blogPosts } from './blogPosts.js'

function countSharedTags(tagsA, tagsB) {
  return tagsA.filter(t => tagsB.includes(t)).length
}

function computeRelationships(posts) {
  const map = {}
  for (const post of posts) {
    const scored = posts
      .filter(p => p.slug !== post.slug)
      .map(p => ({
        slug: p.slug,
        score: (p.category === post.category ? 3 : 0) + countSharedTags(post.tags || [], p.tags || []),
      }))
      .sort((a, b) => b.score - a.score || a.slug.localeCompare(b.slug))
      .slice(0, 3)
    map[post.slug] = scored.map(s => s.slug)
  }
  return map
}

export const relationshipMap = computeRelationships(blogPosts)

export function getRelatedArticles(slug) {
  const relatedSlugs = relationshipMap[slug] || []
  return relatedSlugs
    .map(s => blogPosts.find(p => p.slug === s))
    .filter(Boolean)
}
