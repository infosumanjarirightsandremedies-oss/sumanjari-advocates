import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Next.js's built-in redirects() config matches case-insensitively by
// default, which would also match (and redirect) the new lowercase URLs —
// causing a self-redirect loop. Doing an exact, case-sensitive string
// comparison here avoids that.
const CASE_REDIRECTS: Record<string, string> = {
  '/team/Adarsh-Pratap_Singh': '/team/adarsh-pratap-singh',
  '/team/Devesh-Tiwari': '/team/devesh-tiwari',
}

export function middleware(request: NextRequest) {
  const destination = CASE_REDIRECTS[request.nextUrl.pathname]
  if (destination) {
    const url = request.nextUrl.clone()
    url.pathname = destination
    return NextResponse.redirect(url, 308)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/team/Adarsh-Pratap_Singh', '/team/Devesh-Tiwari'],
}
