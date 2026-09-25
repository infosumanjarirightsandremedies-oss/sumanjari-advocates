import type { MetadataRoute } from 'next'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      // /api/ routes have nothing worth indexing (they're form handlers,
      // not content) and shouldn't be crawled or show up in results.
      // /api/drive-image/ is the exception: it proxies real blog images,
      // so it needs to stay crawlable for image indexing.
      allow: ['/', '/api/drive-image/'],
      disallow: '/api/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
