export const REVIEWS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbw1TTp2FLMJU7vqEqlyos1Igl_WDcb16bSQ6dXszTnGy6PGUTXjOzwMdItBs-pZ1mmF/exec'

export type Review = {
  name: string
  location: string
  rating: number
  text: string
  case: string
}

// Coerces sheet rows into well-formed reviews; drops rows missing a name or text.
export function normalizeReviews(data: unknown): Review[] {
  if (!Array.isArray(data)) return []
  return data
    .filter((r): r is Record<string, unknown> => !!r && typeof r === 'object')
    .map((r) => ({
      name: String(r.name ?? '').trim(),
      location: String(r.location ?? '').trim(),
      rating: Math.min(5, Math.max(0, Math.round(Number(r.rating) || 0))),
      text: String(r.text ?? '').trim(),
      case: String(r.case ?? '').trim(),
    }))
    .filter((r) => r.name && r.text)
}

// Cached server-side (1h) so reviews ship in the page HTML instead of waiting on
// a ~4s client-side Apps Script call. null = failed; the client then retries.
export async function getReviews(): Promise<Review[] | null> {
  try {
    const res = await fetch(`${REVIEWS_SCRIPT_URL}?action=get`, {
      signal: AbortSignal.timeout(10_000),
      next: { revalidate: 3600, tags: ['reviews'] },
    })
    if (!res.ok) return null
    return normalizeReviews(await res.json())
  } catch {
    return null
  }
}
