// Builds the full-text sections shared by /llms-full.txt and /llms/<area>.txt.
import { getBlogPost, getBlogPosts, type BlogBlock, type BlogPostMeta } from '@/lib/blogs'
import { SITE_URL, markdownText, type LlmsLink } from '.'
import { FIRM_EMAIL, officeLabels, teamMembers, type TeamMember } from '@/lib/team'

const PAGE_REVALIDATE_SECONDS = 86400
const PAGE_TAGS = ['blogs']

// --- HTML -> markdown --------------------------------------------------------

const NAMED_ENTITIES: Record<string, string> = {
  amp: '&',
  lt: '<',
  gt: '>',
  quot: '"',
  apos: "'",
  nbsp: ' ',
  ndash: '–',
  mdash: '—',
  lsquo: '‘',
  rsquo: '’',
  ldquo: '“',
  rdquo: '”',
  hellip: '…',
  middot: '·',
  bull: '•',
  copy: '©',
  reg: '®',
  trade: '™',
  rarr: '→',
  larr: '←',
  times: '×',
}

function decodeEntities(value: string): string {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, entity: string) => {
    if (entity[0] === '#') {
      const code = entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10)
      return Number.isFinite(code) && code > 0 && code <= 0x10ffff ? String.fromCodePoint(code) : match
    }
    return NAMED_ENTITIES[entity.toLowerCase()] ?? match
  })
}

function inlineText(html: string): string {
  return decodeEntities(html.replace(/<[^>]+>/g, ' '))
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?)])/g, '$1')
    .trim()
}

type Faq = { question: string; answer: string }

function collectFaqs(node: unknown, faqs: Faq[]): void {
  if (Array.isArray(node)) {
    node.forEach((item) => collectFaqs(item, faqs))
    return
  }
  if (!node || typeof node !== 'object') return
  const record = node as Record<string, unknown>
  if (record['@type'] === 'FAQPage') {
    const entities = Array.isArray(record.mainEntity) ? record.mainEntity : [record.mainEntity]
    for (const entity of entities) {
      const q = entity as { name?: unknown; acceptedAnswer?: { text?: unknown } } | undefined
      if (typeof q?.name === 'string' && typeof q.acceptedAnswer?.text === 'string') {
        faqs.push({ question: inlineText(q.name), answer: inlineText(q.acceptedAnswer.text) })
      }
    }
  }
  if (record['@graph']) collectFaqs(record['@graph'], faqs)
}

// Symbol-only lines are decorative bullets, accordion toggles, and separators.
const DECORATIVE_LINE = /^[\s•·+\-–—|,.:/→←×*…]*$/
// Lines made up only of link/button labels carry no content.
const UI_LABELS =
  /\b(back to (services|team|blog|home)|view profile|linkedin profile|profile|consult now|call now|read article|read more|ask us about this|contact on whatsapp|book a consultation|whatsapp|get in touch|view services|scroll|currently accepting consultations|loading [\w\s]+…?|www\.sumanjariadvocates\.com)\b/gi

function htmlToMarkdown(html: string): string {
  const region =
    html.match(/<main\b[^>]*>([\s\S]*)<\/main>/i)?.[1] ?? html.match(/<body\b[^>]*>([\s\S]*)<\/body>/i)?.[1] ?? ''

  // FAQs only appear in JSON-LD on these pages, not in the visible markup.
  const faqs: Faq[] = []
  for (const [, json] of region.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      collectFaqs(JSON.parse(json), faqs)
    } catch {
      // Malformed JSON-LD just means no FAQ section.
    }
  }

  const text = region
    .replace(/<!--[\s\S]*?-->/g, '')
    // The home page ticker repeats its items twice for the scrolling animation.
    .replace(/<div class="ticker-wrap">[\s\S]*?<\/div>\s*<\/div>/gi, '')
    .replace(
      /<(script|style|noscript|svg|nav|footer|form|button|template|iframe|select|textarea|dialog)\b[\s\S]*?<\/\1>/gi,
      ''
    )
    .replace(/<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi, (_, level: string, inner: string) => {
      const heading = inlineText(inner)
      const depth = Number(level) <= 2 ? 4 : Number(level) === 3 ? 5 : 6
      return heading ? `\n${'#'.repeat(depth)} ${heading}\n` : '\n'
    })
    .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, (_, inner: string) => {
      const item = inlineText(inner).replace(/^[•·\-–—]\s*/, '')
      return item ? `\n- ${item}\n` : '\n'
    })
    .replace(/<t[dh]\b[^>]*>([\s\S]*?)<\/t[dh]>/gi, (_, inner: string) => ` ${inlineText(inner)} |`)
    .replace(/<tr\b[^>]*>/gi, '\n|')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?a\b[^>]*>/gi, ' ')
    .replace(
      /<\/?(p|div|section|article|header|aside|main|ul|ol|dl|dt|dd|blockquote|figure|figcaption|table|thead|tbody|tr)\b[^>]*>/gi,
      '\n'
    )

  const seen = new Set<string>()
  const lines: string[] = []
  for (const raw of decodeEntities(text.replace(/<[^>]+>/g, '')).split('\n')) {
    const line = raw.replace(/\s+/g, ' ').replace(/\s+([,.;:!?)])/g, '$1').trim()
    if (!line || DECORATIVE_LINE.test(line.replace(UI_LABELS, ''))) continue
    // Marquees and responsive duplicates render the same text more than once.
    if (!line.startsWith('#') && seen.has(line)) continue
    seen.add(line)
    lines.push(line)
  }

  if (faqs.length > 0) {
    lines.push('#### Frequently Asked Questions')
    for (const { question, answer } of faqs) lines.push(`##### ${question}`, answer)
  }

  return joinMarkdown(lines)
}

// List items and table rows stay on consecutive lines; everything else is a paragraph.
function joinMarkdown(lines: string[]): string {
  return lines.reduce((out, line, i) => {
    if (i === 0) return line
    const prev = lines[i - 1]
    const tight = (prev.startsWith('- ') && line.startsWith('- ')) || (prev.startsWith('|') && line.startsWith('|'))
    return `${out}${tight ? '\n' : '\n\n'}${line}`
  }, '')
}

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

// --- sections ----------------------------------------------------------------

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

function tableMarkdown(rows: string[][]): string {
  if (rows.length === 0) return ''
  const width = Math.max(...rows.map((row) => row.length))
  const cell = (value = '') => value.replace(/\s+/g, ' ').replace(/\|/g, '\\|').trim()
  const line = (row: string[]) => `| ${Array.from({ length: width }, (_, i) => cell(row[i])).join(' | ')} |`
  return [line(rows[0]), `| ${Array(width).fill('---').join(' | ')} |`, ...rows.slice(1).map(line)].join('\n')
}

function blocksMarkdown(blocks: BlogBlock[], title: string): string {
  const lines: string[] = []
  const normalizedTitle = title.replace(/\s+/g, ' ').trim().toLowerCase()
  for (const block of blocks) {
    if (block.type === 'table') {
      const table = tableMarkdown(block.rows)
      if (table) lines.push(table)
      continue
    }
    const text = block.text.trim()
    if (!text) continue
    // Docs usually open with the title again as a heading.
    if (block.type === 'heading' && lines.length === 0 && text.replace(/\s+/g, ' ').toLowerCase() === normalizedTitle) {
      continue
    }
    if (block.type === 'heading') lines.push(`#### ${text.replace(/\s+/g, ' ')}`)
    else if (block.type === 'list-item') lines.push(`- ${text.replace(/\s+/g, ' ')}`)
    else lines.push(text)
  }
  return lines.reduce((out, line, i) => {
    if (i === 0) return line
    const tight = lines[i - 1].startsWith('- ') && line.startsWith('- ')
    return `${out}${tight ? '\n' : '\n\n'}${line}`
  }, '')
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
  const content = full && full.content.length > 0 ? blocksMarkdown(full.content, post.title) : `Summary: ${post.excerpt}`

  return [`### ${markdownText(post.title)}`, meta, content].join('\n\n')
}

// --- shared blocks -----------------------------------------------------------

// Mirrors the LegalService JSON-LD in app/layout.tsx so engines see one consistent entity.
export const KEY_FACTS = [
  '- Name: Sumanjari & Co. Advocates',
  '- Type: Law firm (advocates) in India',
  '- Legacy: Second-generation law firm with over 50 years of legal experience',
  '- Track record: More than 1,000 cases handled',
  '- Chamber: Chamber No. Block D-311, Allahabad High Court, Lucknow Bench, Lucknow, Uttar Pradesh, India',
  `- Offices: ${Object.values(officeLabels)
    .map((office) => `${office.title} — ${office.subtitle}`)
    .join(' ')}`,
  '- Areas served: Lucknow, Kanpur, Ayodhya, Prayagraj, Sultanpur, Ambedkar Nagar, Noida, Ghaziabad, Greater Noida, Gurugram, Delhi, and across Uttar Pradesh',
  '- Phone: +91-83024-71764',
  `- Email: ${FIRM_EMAIL}`,
  `- Website: ${SITE_URL}`,
  `- Advocates: ${teamMembers.length}`,
].join('\n')

export const BCI_DISCLAIMER =
  'As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This content is provided for information only and is not solicitation, advertisement, or legal advice; reading it does not create an advocate-client relationship.'

export async function getSortedPosts(): Promise<BlogPostMeta[]> {
  const posts = await getBlogPosts()
  return [...new Map(posts.map((post) => [post.slug, post])).values()].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )
}

export function memberSummaryLine(member: TeamMember): string {
  return `- [${markdownText(member.name)}](${SITE_URL}/team/${encodeURIComponent(member.slug)}): ${markdownText(member.role)} in ${markdownText(member.location)}. Practice areas: ${member.expertise.map(markdownText).join(', ')}.`
}

export function textResponse(sections: string[]): Response {
  return new Response(`${sections.join('\n\n')}\n`, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
