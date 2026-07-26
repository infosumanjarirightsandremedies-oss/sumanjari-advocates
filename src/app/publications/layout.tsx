import type { Metadata } from 'next'

// page.tsx in this route is a Client Component ('use client'), and Next.js
// only allows a `metadata` export from a Server Component — so this sibling
// layout carries the page's metadata instead. It just passes children
// through; it exists purely to attach metadata to this route segment.
export const metadata: Metadata = {
  title: 'Publications',
  description:
    'Browse research articles, theses, case notes, and journal publications from Sumanjari & Co. Advocates and submit your own legal writing for review.',
  alternates: {
    canonical: '/publications',
  },
  openGraph: {
    title: 'Publications | Sumanjari & Co. Advocates',
    description:
      'Research articles, theses, case notes, and journal publications from Sumanjari & Co. Advocates.',
    url: '/publications',
  },
}

export default function PublicationsLayout({ children }: { children: React.ReactNode }) {
  return children
}
