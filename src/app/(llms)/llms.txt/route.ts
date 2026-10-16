import {
  CONTACT_LINES,
  CONTENT_NOTICE,
  FIRM_SUMMARY,
  PAGE_LINKS,
  PRACTICE_AREAS,
  PRACTICE_AREA_GUIDES,
  SERVICE_LINKS,
  SITE_URL,
  linkLine,
  markdownText,
  practiceAreaGuideUrl,
} from '@/lib/llms'
import { getSortedPosts, memberSummaryLine } from '@/lib/llms/sections'
import { teamMembers } from '@/lib/team'

export const revalidate = 604800 // 7 days; the sheet trigger invalidates on demand

export async function GET() {
  const sortedPosts = await getSortedPosts()

  const blogSection =
    sortedPosts.length > 0
      ? [
          '',
          '## Blog',
          '',
          `Legal articles and insights, updated regularly: ${SITE_URL}/blog`,
          '',
          ...sortedPosts.map(
            (post) =>
              `- [${markdownText(post.title)}](${SITE_URL}/blog/${encodeURIComponent(post.slug)}): ${markdownText(post.category)}. ${markdownText(post.excerpt)}`
          ),
        ].join('\n')
      : ''

  const guideSection = PRACTICE_AREA_GUIDES.map((guide) => {
    const count = sortedPosts.filter((post) => guide.categories.includes(post.category)).length
    const pages = guide.servicePaths.length === 1 ? 'Service page' : 'Service pages'
    const articles = count === 0 ? '' : ` and ${count} ${count === 1 ? 'article' : 'articles'}`
    return `- [${guide.title} — Full Guide](${practiceAreaGuideUrl(guide)}): ${pages}${articles} in full.`
  }).join('\n')

  const teamSection = teamMembers.map(memberSummaryLine).join('\n')

  const body = `# Sumanjari & Co. Advocates

> ${FIRM_SUMMARY}

${PRACTICE_AREAS}

This directory describes the firm's published services and advocate profiles. ${CONTENT_NOTICE}

For the complete text of every service page, advocate profile, and blog article in a single file, see [llms-full.txt](${SITE_URL}/llms-full.txt). The same content is also split into smaller per-practice-area files, listed under Practice Area Guides below.

## Contact and Location

${CONTACT_LINES.join('\n')}
- [XML Sitemap](${SITE_URL}/sitemap.xml): Index of public page and article URLs.
- [Full Site Content](${SITE_URL}/llms-full.txt): Complete text of all services, advocate profiles, pages, and blog articles.

## Services

${SERVICE_LINKS.map(linkLine).join('\n')}

## Practice Area Guides

${guideSection}

## Pages

${PAGE_LINKS.map(linkLine).join('\n')}

## Advocates

${teamSection}
${blogSection}`

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
