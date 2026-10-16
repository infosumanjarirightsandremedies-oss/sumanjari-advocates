import {
  BCI_DISCLAIMER,
  CONTACT_LINES,
  CONTENT_NOTICE,
  FIRM_SUMMARY,
  KEY_FACTS,
  PRACTICE_AREA_GUIDES,
  SERVICE_LINKS,
  SITE_URL,
  practiceAreaGuideUrl,
} from '@/lib/llms'
import { blogSection, getSortedPosts, memberSummaryLine, pageSection, textResponse } from '@/lib/llms/sections'
import { teamMembers } from '@/lib/team'

export const revalidate = 604800 // 7 days; the sheet trigger invalidates on demand
export const dynamicParams = false

export function generateStaticParams() {
  return PRACTICE_AREA_GUIDES.map((guide) => ({ file: `${guide.slug}.txt` }))
}

export async function GET(_request: Request, { params }: { params: { file: string } }) {
  const guide = PRACTICE_AREA_GUIDES.find((item) => `${item.slug}.txt` === params.file)
  if (!guide) return new Response('Not found', { status: 404 })

  const services = SERVICE_LINKS.filter((link) => guide.servicePaths.includes(link.path))
  const posts = (await getSortedPosts()).filter((post) => guide.categories.includes(post.category))

  const [serviceSections, blogSections] = await Promise.all([
    Promise.all(services.map(pageSection)),
    Promise.all(posts.map(blogSection)),
  ])

  const otherGuides = PRACTICE_AREA_GUIDES.filter((item) => item !== guide)
    .map((item) => `- [${item.title}](${practiceAreaGuideUrl(item)})`)
    .join('\n')

  return textResponse([
    `# Sumanjari & Co. Advocates — ${guide.title}`,
    `> ${FIRM_SUMMARY}`,
    `This file contains the full text of the firm's ${guide.title} service ${services.length === 1 ? 'page' : 'pages'}${posts.length > 0 ? ` and all ${posts.length} articles in this practice area` : ''}. The whole site in one file is at ${SITE_URL}/llms-full.txt; the index is at ${SITE_URL}/llms.txt. ${CONTENT_NOTICE}`,
    BCI_DISCLAIMER,
    `Generated: ${new Date().toISOString()}`,
    '## Key Facts',
    KEY_FACTS,
    '## Contact and Location',
    CONTACT_LINES.join('\n'),
    '## Services',
    ...serviceSections,
    '## Advocates',
    teamMembers.map(memberSummaryLine).join('\n'),
    ...(blogSections.length > 0 ? ['## Articles', ...blogSections] : []),
    '## Other Practice Area Guides',
    otherGuides,
  ])
}
