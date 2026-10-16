// Section builders shared by /llms.txt, /llms-full.txt, and /llms/<area>.txt.
import { getBlogPost, getBlogPosts, type BlogPostMeta } from '@/lib/blogs'
import { FIRM_EMAIL, officeLabels, type TeamMember } from '@/lib/team'
import { SITE_URL, markdownText, type LlmsLink } from '.'
import { blocksMarkdown, decodeEntities, htmlToMarkdown } from './markdown'

const PAGE_REVALIDATE_SECONDS = 604800 // same 7-day TTL as the blog pages; the 'blogs' tag refreshes on demand
const PAGE_TAGS = ['blogs']

// Service/team/static pages keep their copy inline in JSX, so their text is
// taken from the rendered HTML rather than duplicated here.
async function fetchPageMarkdown(path: string): Promise<string | undefined> {
  try {
    const res = await fetch(`${SITE_URL}${path}`, {
      headers: { accept: 'text/html' },
      signal: AbortSignal.timeout(20_000),
      next: { revalidate: PAGE_REVALIDATE_SECONDS, tags: PAGE_TAGS },
    })
    if (!res.ok) return undefined
    const markdown = htmlToMarkdown(await res.text())
    return markdown || undefined
  } catch {
    return undefined
  }
}

export async function pageSection(link: LlmsLink): Promise<string> {
  const content = await fetchPageMarkdown(link.path)
  return [`### ${link.title}`, `URL: ${SITE_URL}${link.path}`, `Summary: ${link.description}`, content ?? '']
    .filter(Boolean)
    .join('\n\n')
}

function memberDetails(member: TeamMember): string[] {
  const office = officeLabels[member.office]
  return [
    `- Role: ${member.role}`,
    `- Office: ${office.title} (${office.subtitle})`,
    `- Location: ${member.location}`,
    `- Credentials: ${member.credentials}`,
    `- Practice areas: ${member.expertise.join(', ')}`,
    ...(member.linkedin ? [`- LinkedIn: ${member.linkedin}`] : []),
  ]
}

export async function memberSection(member: TeamMember): Promise<string> {
  const path = `/team/${encodeURIComponent(member.slug)}`
  const header = [`### ${member.name}`, `URL: ${SITE_URL}${path}`, memberDetails(member).join('\n')]

  const { profile } = member
  if (!profile) {
    const content = await fetchPageMarkdown(path)
    return [...header, content ?? ''].filter(Boolean).join('\n\n')
  }

  const list = (title: string, items?: string[]) =>
    items && items.length > 0 ? [`#### ${title}`, items.map((item) => `- ${item}`).join('\n')] : []

  return [
    ...header,
    profile.summary,
    ...profile.bio,
    ...list('Experience', profile.experience),
    ...(profile.sections ?? []).flatMap((section) => list(section.title, section.items)),
    ...list('Education', profile.education),
    ...list('Memberships', profile.memberships),
    ...list('Languages', profile.languages),
    '#### Contact',
    [
      ...(profile.phone ? [`- Phone: ${profile.phone}`] : []),
      `- Email: ${FIRM_EMAIL}`,
      ...(profile.officeAddress ? [`- Office: ${profile.officeAddress}`] : []),
    ].join('\n'),
    ...(profile.closingNote ? [profile.closingNote] : []),
  ].join('\n\n')
}

export function memberSummaryLine(member: TeamMember): string {
  return `- [${markdownText(member.name)}](${SITE_URL}/team/${encodeURIComponent(member.slug)}): ${markdownText(member.role)} in ${markdownText(member.location)}. Practice areas: ${member.expertise.map(markdownText).join(', ')}.`
}

export async function getSortedPosts(): Promise<BlogPostMeta[]> {
  const posts = await getBlogPosts()
  return [...new Map(posts.map((post) => [post.slug, post])).values()].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )
}

export async function blogSection(post: BlogPostMeta): Promise<string> {
  const url = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`
  const published = new Date(post.publishedDate)
  const meta = [
    `- URL: ${url}`,
    `- Category: ${post.category}`,
    ...(Number.isFinite(published.getTime()) ? [`- Published: ${published.toISOString().slice(0, 10)}`] : []),
  ].join('\n')

  // One unreachable article shouldn't take the whole file down; fall back to its excerpt.
  const full = await getBlogPost(post.slug).catch(() => undefined)
  const content =
    full && full.content.length > 0
      ? blocksMarkdown(full.content, decodeEntities(post.title))
      : `Summary: ${decodeEntities(post.excerpt)}`

  return [`### ${markdownText(decodeEntities(post.title))}`, meta, content].join('\n\n')
}

export function textResponse(sections: string[]): Response {
  return new Response(`${sections.join('\n\n')}\n`, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
