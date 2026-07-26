import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // /api/ routes have nothing worth indexing (they're form handlers,
      // not content) and shouldn't be crawled or show up in results.
      disallow: '/api/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
