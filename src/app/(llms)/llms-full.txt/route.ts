import {
  BCI_DISCLAIMER,
  CONTACT_LINES,
  CONTENT_NOTICE,
  FIRM_SUMMARY,
  KEY_FACTS,
  PAGE_LINKS,
  PRACTICE_AREAS,
  PRACTICE_AREA_GUIDES,
  SERVICE_LINKS,
  SITE_URL,
  practiceAreaGuideUrl,
  type LlmsLink,
} from '@/lib/llms'
import { blogSection, getSortedPosts, memberSection, pageSection, textResponse } from '@/lib/llms/sections'
import { teamMembers } from '@/lib/team'

export const revalidate = 604800 // 7 days; the sheet trigger invalidates on demand

// Service/team/static pages keep their copy inline in JSX, so their text is
// taken from the rendered HTML rather than duplicated here.
const FULL_PAGE_PATHS = ['/', '/our-journey', '/publications', '/internship']

export async function GET() {
  const sortedPosts = await getSortedPosts()

  const staticPages = FULL_PAGE_PATHS.map((path) => PAGE_LINKS.find((link) => link.path === path)).filter(
    (link): link is LlmsLink => Boolean(link)
  )

  const [pageSections, serviceSections, teamSections, blogSections] = await Promise.all([
    Promise.all(staticPages.map(pageSection)),
    Promise.all(SERVICE_LINKS.map(pageSection)),
    Promise.all(teamMembers.map(memberSection)),
    Promise.all(sortedPosts.map(blogSection)),
  ])

  const toc = [
    '- Firm Overview',
    '- Key Facts',
    '- Contact and Location',
    '- Practice Area Guides',
    `- Services (${SERVICE_LINKS.length})`,
    `- Pages (${staticPages.length})`,
    `- Advocates (${teamMembers.length})`,
    ...(sortedPosts.length > 0 ? [`- Blog Articles (${sortedPosts.length})`] : []),
  ].join('\n')

  return textResponse([
    '# Sumanjari & Co. Advocates — Full Site Content',
    `> ${FIRM_SUMMARY}`,
    `This file contains the full text of the firm's service pages, advocate profiles, key pages, and blog articles at ${SITE_URL}. It is large; if it is too long to read in one pass, use the smaller per-practice-area guides listed below, or the index at ${SITE_URL}/llms.txt. ${CONTENT_NOTICE}`,
    `Generated: ${new Date().toISOString()}`,
    '## Contents',
    toc,
    '## Firm Overview',
    FIRM_SUMMARY,
    PRACTICE_AREAS,
    BCI_DISCLAIMER,
    '## Key Facts',
    KEY_FACTS,
    '## Contact and Location',
    [...CONTACT_LINES, `- [XML Sitemap](${SITE_URL}/sitemap.xml): Index of public page and article URLs.`].join('\n'),
    '## Practice Area Guides',
    'Each guide holds one practice area in full: its service pages and every article in that area.',
    PRACTICE_AREA_GUIDES.map((guide) => `- [${guide.title}](${practiceAreaGuideUrl(guide)})`).join('\n'),
    '## Services',
    ...serviceSections,
    '## Pages',
    ...pageSections,
    '## Advocates',
    ...teamSections,
    ...(blogSections.length > 0 ? ['## Blog Articles', `Index: ${SITE_URL}/blog`, ...blogSections] : []),
  ])
}
