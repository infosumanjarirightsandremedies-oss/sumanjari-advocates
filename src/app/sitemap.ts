import type { MetadataRoute } from 'next'
import { getBlogPosts } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const revalidate = 604800

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogPosts = await getBlogPosts()
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => {
    const published = new Date(post.publishedDate)
    return {
      url: `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`,
      ...(Number.isFinite(published.getTime()) && published.getTime() <= Date.now()
        ? { lastModified: published }
        : {}),
      changeFrequency: 'monthly',
      priority: 0.6,
    }
  })
  const teamProfileEntries: MetadataRoute.Sitemap = teamMembers
    .filter((member) => member.profile)
    .map((member) => ({
      url: `${SITE_URL}/team/${member.slug}`,
      changeFrequency: 'yearly',
      priority: 0.7,
    }))

  const entries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/law-firm-in-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/blog`,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/publications`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/rera-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/nri-lawyer`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/rera-lawyer-noida-ghaziabad`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/family-advocate`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/divorce-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/service-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/criminal-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/banking-recovery-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/constitutional-writ-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/high-court-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/services/civil-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/property-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/consumer-motor-accident-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/company-corporate-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/tax-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/cyber-crime-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/services/armed-forces-tribunal-mining-lawyer-lucknow`,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/internship`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${SITE_URL}/our-journey`,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/team`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/team/jitendra-tiwari`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/team/aishwarya-pandey`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/team/priyesh-dwivedi`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/team/adarsh-pratap-singh`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/team/devesh-tiwari`,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...teamProfileEntries,
    ...blogEntries,
  ]

  return [...new Map(entries.map((entry) => [entry.url, entry])).values()]
}
