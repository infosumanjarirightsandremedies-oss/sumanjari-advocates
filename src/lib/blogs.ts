import { cache } from 'react'

const BLOG_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyNJgTZgENxyi_mHtXorG2BA_Vce7M2IV1ng4B572ymDx9nrAwZXRDeZc3_ZOXkuDm_/exec'

// Refresh the catalog regularly even if the sheet's invalidation trigger fails.
// Article bodies keep a longer TTL; the shared tag still refreshes both on edits.
const CATALOG_REVALIDATE_SECONDS = 3600
const REVALIDATE_SECONDS = 604800 // 7 days
const BLOG_TAGS = ['blogs']

export type BlogBlock =
  | { type: 'heading' | 'paragraph' | 'list-item'; text: string }
  | { type: 'table'; rows: string[][] }

// Metadata only — what the catalog endpoint (?resource=blogs) returns. Used by
// the list, service pages, related posts, sitemap and llms.txt. No Doc content,
// so these views open zero Docs and stay fast.
export type BlogPostMeta = {
  slug: string
  title: string
  category: string
  excerpt: string
  thumbnail: string | null
  order: number
  publishedDate: string
}

// A single post plus its rendered blocks — what ?resource=post&slug= returns.
export type BlogPost = BlogPostMeta & { content: BlogBlock[] }

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

// --- request resilience ------------------------------------------------------
// A Vercel build renders many /blog/[slug] pages, each hitting ?resource=post.
// The gate keeps only a few of those in flight at once so we never trip Apps
// Script's ~30-simultaneous-execution limit; the timeout + backoff keep a
// transient throttle from turning into a build-time 404.

const MAX_CONCURRENT_POST_FETCHES = 5
let activeFetches = 0
const waiters: Array<() => void> = []

function acquire(): Promise<void> {
  if (activeFetches < MAX_CONCURRENT_POST_FETCHES) {
    activeFetches++
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    waiters.push(() => {
      activeFetches++
      resolve()
    })
  })
}

function release() {
  activeFetches--
  const next = waiters.shift()
  if (next) next()
}

async function withGate<T>(fn: () => Promise<T>): Promise<T> {
  await acquire()
  try {
    return await fn()
  } finally {
    release()
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
const backoff = (attempt: number) => Math.min(1000 * 2 ** attempt, 8000)

// Fetch + parse a blog endpoint with a 30s timeout (covering the body read) and
// backoff retries. Apps Script intermittently answers 404 under load; a genuine
// miss is 200 + {error}, so an HTTP 404 is always transient and safe to retry.
async function fetchBlog(url: string, revalidateSeconds = REVALIDATE_SECONDS, retries = 3): Promise<{ status: number; data: unknown }> {
  for (let attempt = 0; ; attempt++) {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 30_000)
    try {
      const res = await fetch(url, {
        signal: controller.signal,
        next: { revalidate: revalidateSeconds, tags: BLOG_TAGS },
      })
      if (res.ok) {
        const data = await res.json().catch(() => undefined)
        return { status: data === undefined ? 502 : res.status, data }
      }
      if (attempt < retries && (res.status === 404 || res.status === 429 || res.status >= 500)) {
        await sleep(backoff(attempt))
        continue
      }
      return { status: res.status, data: undefined }
    } catch (err) {
      if (attempt < retries) {
        await sleep(backoff(attempt))
        continue
      }
      throw err
    } finally {
      clearTimeout(timer)
    }
  }
}

// Pre-synced snapshot from Supabase (see scripts/supabase-blog-cache/sync.py).
// Same TTL + tag as Apps Script fetches; any miss or failure returns undefined so callers fall back.
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

async function fetchSnapshot(key: string, revalidateSeconds: number): Promise<unknown> {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return undefined
  try {
    const res = await fetch(
      `${SUPABASE_URL}/rest/v1/blog_snapshots?select=payload&key=eq.${encodeURIComponent(key)}`,
      {
        headers: { apikey: SUPABASE_ANON_KEY, Authorization: `Bearer ${SUPABASE_ANON_KEY}` },
        signal: AbortSignal.timeout(5_000),
        next: { revalidate: revalidateSeconds, tags: BLOG_TAGS },
      }
    )
    if (!res.ok) return undefined
    const rows = (await res.json()) as Array<{ payload: unknown }>
    return rows[0]?.payload
  } catch {
    return undefined
  }
}

// --- public API --------------------------------------------------------------

// Catalog: metadata for every published post (no content). One upstream call;
// Next's tagged fetch cache dedupes it across the whole build.
//
// Deliberately does NOT swallow failures into an empty array: with a 1-week ISR
// TTL, a transient blip that returned [] would get cached as a "No articles"
// page and stick for days. Throwing instead yields a retriable 500 (never
// cached), so the page self-heals on the next request once the backend is back.
// A genuine empty catalog (200 + []) is still returned and cached normally.
// Wrapped in React cache(): passing an AbortSignal opts fetch out of Next's
// request memoization, so this dedupes generateMetadata + page in one render.
export const getBlogPosts = cache(async (): Promise<BlogPostMeta[]> => {
  const snapshot = await fetchSnapshot('catalog', CATALOG_REVALIDATE_SECONDS)
  if (Array.isArray(snapshot) && snapshot.length > 0) {
    return snapshot.map((post) => ({ ...post, thumbnail: normalizeThumbnail(post.thumbnail) }))
  }

  const { status, data } = await fetchBlog(`${BLOG_SCRIPT_URL}?resource=blogs`, CATALOG_REVALIDATE_SECONDS)
  if (status !== 200) throw new Error(`getBlogPosts: upstream HTTP ${status}`)
  if (!Array.isArray(data)) throw new Error('getBlogPosts: expected an array')
  return data.map((post) => ({ ...post, thumbnail: normalizeThumbnail(post.thumbnail) }))
})

// One post with its rendered content. Gated so a build-time fan-out can't
// overwhelm Apps Script; the Doc render is cached server-side (keyed by mtime).
//
// Only a genuine "not found" (200 + {error}) returns undefined, which the page
// turns into a (correctly cached) 404. Any upstream failure THROWS instead, so
// a transient blip renders a retriable 500 rather than caching a 404 on a real
// post for the 1-week TTL.
export const getBlogPost = cache(async (slug: string): Promise<BlogPost | undefined> => {
  const snapshot = (await fetchSnapshot(`post:${slug}`, REVALIDATE_SECONDS)) as BlogPost | undefined
  if (snapshot?.slug === slug && Array.isArray(snapshot.content) && snapshot.content.length > 0) {
    // Unlisted snapshots fall through so Apps Script can 404 an unpublished post.
    const published = await getBlogPosts().then((posts) => posts.some((post) => post.slug === slug), () => false)
    if (published) return { ...snapshot, thumbnail: normalizeThumbnail(snapshot.thumbnail) }
  }

  const { status, data } = await withGate(() =>
    fetchBlog(`${BLOG_SCRIPT_URL}?resource=post&slug=${encodeURIComponent(slug)}`)
  )
  if (status !== 200) throw new Error(`getBlogPost(${slug}): upstream HTTP ${status}`)
  const post = data as (BlogPost & { error?: string }) | null
  if (post && post.error) return undefined // genuine unpublished/unknown slug
  if (!post || !post.slug) throw new Error(`getBlogPost(${slug}): unexpected payload`)
  return { ...post, thumbnail: normalizeThumbnail(post.thumbnail) }
})

export async function getBlogPostsByCategory(category: string): Promise<BlogPostMeta[]> {
  const posts = await getBlogPosts()
  return posts.filter((post) => post.category === category)
}

// Maps each sheet Category value to the service page that renders it, so a
// blog post's "Back" link can return to its own service page instead of home.
const CATEGORY_TO_SERVICE_SLUG: Record<string, string> = {
  RERA: 'rera-lawyer',
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
