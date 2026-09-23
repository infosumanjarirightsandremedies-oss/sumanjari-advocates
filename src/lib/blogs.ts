const BLOG_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxe94rBErezAQUus-lzGat8QliKGBqN-QZmibJFD8OsGeTWRRpHIcSp5TLko3G4Nlae/exec'

export type BlogBlock =
  | { type: 'heading' | 'paragraph' | 'list-item'; text: string }
  | { type: 'table'; rows: string[][] }

export type BlogPost = {
  slug: string
  title: string
  category: string
  excerpt: string
  thumbnail: string | null
  order: number
  publishedDate: string
  content: BlogBlock[]
}

// Editors paste whatever link Drive's "Share" dialog gives them
// (drive.google.com/file/d/<ID>/view...). Chrome's ORB blocks Drive's direct
// link when embedded cross-origin as an <img>, so route it through our own
// /api/drive-image proxy instead — see that route for why. Still requires
// the file to be shared as "Anyone with the link".
function normalizeThumbnail(url: string | null): string | null {
  if (!url) return null
  const match = url.match(/drive\.google\.com\/file\/d\/([^/]+)/)
  if (!match) return url
  return `/api/drive-image/${match[1]}`
}

// Published posts live in a Google Sheet an editor controls directly — a row's
// Status flips to "published" and it shows up here within one revalidation
// cycle, no redeploy needed. The Apps Script also renders each row's linked
// Google Doc into structured blocks server-side, so the Doc can stay private.
export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const res = await fetch(`${BLOG_SCRIPT_URL}?resource=blogs`, {
      next: { revalidate: 86400 },
    })
    if (!res.ok) return []
    const data = await res.json()
    const posts = Array.isArray(data) ? data : []
    return posts.map((post) => ({ ...post, thumbnail: normalizeThumbnail(post.thumbnail) }))
  } catch {
    // Apps Script down/unreachable — degrade to no posts rather than
    // throwing and breaking the page that called this.
    return []
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | undefined> {
  const posts = await getBlogPosts()
  return posts.find((post) => post.slug === slug)
}

export async function getBlogPostsByCategory(category: string): Promise<BlogPost[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.category === category)
}

// Maps each sheet Category value to the service page that renders it, so a
// blog post's "Back" link can return to its own service page instead of home.
const CATEGORY_TO_SERVICE_SLUG: Record<string, string> = {
  RERA: 'rera',
  'Civil Matters': 'civil-matters',
  'Criminal Matters': 'criminal-matters',
  'Family & Matrimonial Matters': 'family-matrimonial-matters',
  'Property & Land Matters': 'property-land-matters',
  'Banking & Recovery Matters': 'banking-recovery-matters',
  'Company & Corporate Matters': 'company-corporate-matters',
  'Constitutional & Writ Matters': 'constitutional-writ-matters',
  'Consumer & Motor Accident Matters': 'consumer-motor-accident-matters',
  'Service & Employment Matters': 'service-employment-matters',
  'Tax & Revenue Matters': 'tax-revenue-matters',
}

export function getServiceSlugForCategory(category: string): string | undefined {
  return CATEGORY_TO_SERVICE_SLUG[category]
}
