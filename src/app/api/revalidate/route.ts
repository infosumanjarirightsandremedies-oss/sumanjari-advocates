import { NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { timingSafeEqual } from 'node:crypto'

// Secret-gated cache invalidation. The Blogs sheet's Apps Script trigger calls
// this on publish/unpublish so the site reflects the change immediately instead
// of waiting out the (1-week) ISR TTL. Also usable by hand after editing a Doc's
// body (which doesn't touch the sheet, so it doesn't fire the trigger).
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

// Constant-time compare so a wrong secret can't be recovered via response timing.
// Fails closed: no configured secret (or none provided) means no match.
function secretMatches(provided: string | null): boolean {
  const expected = process.env.REVALIDATE_SECRET
  if (!expected || !provided) return false
  const a = Buffer.from(provided)
  const b = Buffer.from(expected)
  if (a.length !== b.length) return false
  return timingSafeEqual(a, b)
}

export async function GET(request: Request) {
  const secret = new URL(request.url).searchParams.get('secret')
  if (!secretMatches(secret)) {
    // Generic response — don't reveal whether the secret is set or why it failed.
    return NextResponse.json({ ok: false }, { status: 401 })
  }

  // Every blog fetch is tagged 'blogs', so one call refreshes the list, each
  // post, the service pages, sitemap and llms.txt together.
  revalidateTag('blogs')
  // Shows newly approved reviews without waiting out their 1h cache.
  revalidateTag('reviews')
  return NextResponse.json({ ok: true, revalidated: true, at: Date.now() })
}
