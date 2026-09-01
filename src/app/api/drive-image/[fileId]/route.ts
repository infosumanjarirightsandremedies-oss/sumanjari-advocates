import { NextResponse } from 'next/server'

type RouteParams = {
  params: Promise<{ fileId: string }>
}

// Proxies a public Drive file through our own domain so <img> tags load it
// same-origin. Chrome's ORB blocks Drive's direct link as a cross-origin
// subresource (its redirect hop declares content-type: application/binary),
// even though the file itself is a real image — fetching it server-to-server
// here sidesteps that browser-only restriction entirely.
export async function GET(_req: Request, { params }: RouteParams) {
  const { fileId } = await params

  const res = await fetch(`https://drive.google.com/uc?export=view&id=${fileId}`)
  if (!res.ok || !res.body) {
    return NextResponse.json({ error: 'Image not found' }, { status: 404 })
  }

  const contentType = res.headers.get('content-type') || 'image/jpeg'
  return new NextResponse(res.body, {
    headers: {
      'content-type': contentType,
      'cache-control': 'public, max-age=86400, immutable',
    },
  })
}
