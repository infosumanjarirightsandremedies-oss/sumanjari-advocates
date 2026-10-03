import { NextResponse } from 'next/server'
import sharp from 'sharp'

// sharp needs the Node runtime (not edge).
export const runtime = 'nodejs'

type RouteParams = {
  params: Promise<{ fileId: string }>
}

// Default width covers listing thumbnails / cards; a post hero can request a
// larger `?w=` (e.g. 1200) so it stays crisp on Retina. Clamped to a sane range.
const DEFAULT_WIDTH = 800
const MIN_WIDTH = 200
const MAX_WIDTH = 1600
const WEBP_QUALITY = 72

function resolveWidth(url: string): number {
  const raw = Number(new URL(url).searchParams.get('w'))
  if (!Number.isFinite(raw) || raw <= 0) return DEFAULT_WIDTH
  return Math.min(MAX_WIDTH, Math.max(MIN_WIDTH, Math.round(raw)))
}

const CACHE = 'public, max-age=31536000, immutable'

// Proxies a public Drive file through our own domain so <img> tags load it
// same-origin (Chrome's ORB blocks Drive's direct link as a cross-origin
// subresource), and downsizes/re-encodes it on the way through. Browsers that
// accept WebP get the smallest payload; crawlers that don't (some social/OG
// scrapers) fall back to an optimized JPEG so link previews keep working.
export async function GET(req: Request, { params }: RouteParams) {
  const { fileId } = await params
  if (!/^[A-Za-z0-9_-]{10,100}$/.test(fileId)) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 })
  }

  const res = await fetch(`https://drive.google.com/uc?export=view&id=${fileId}`)
  if (!res.ok || !res.body) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 })
  }

  const upstreamType = res.headers.get('content-type') || ''
  // Drive answers unshared/throttled files with an HTML page; never cache that for a year.
  if (!upstreamType.startsWith('image/')) {
    return NextResponse.json(
      { error: 'Image unavailable' },
      { status: 502, headers: { 'cache-control': 'no-store' } }
    )
  }
  const original = Buffer.from(await res.arrayBuffer())

  // If sharp can't decode it, fall back to the original bytes.
  try {
    const width = resolveWidth(req.url)
    const wantsWebp = (req.headers.get('accept') || '').includes('image/webp')
    const pipeline = sharp(original)
      .rotate() // honour EXIF orientation before stripping metadata
      .resize({ width, withoutEnlargement: true })
    const [buffer, contentType] = wantsWebp
      ? [await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer(), 'image/webp']
      : [await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer(), 'image/jpeg']
    return new NextResponse(buffer, {
      headers: { 'content-type': contentType, 'cache-control': CACHE, vary: 'Accept' },
    })
  } catch {
    // fall through to serving the original
  }

  return new NextResponse(original, {
    headers: { 'content-type': upstreamType, 'cache-control': CACHE },
  })
}
