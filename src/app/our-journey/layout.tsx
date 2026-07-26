import type { Metadata } from 'next'

// Same reasoning as publications/layout.tsx — page.tsx here is a Client
// Component, so metadata has to live in this sibling Server Component layout.
export const metadata: Metadata = {
  title: 'Our Journey',
  description:
    'The story behind the name Sumanjari & Co. Advocates, and the values of integrity, diligence, and accessibility that guide the firm.',
  alternates: {
    canonical: '/our-journey',
  },
  openGraph: {
    title: 'Our Journey | Sumanjari & Co. Advocates',
    description: 'The story behind the name Sumanjari & Co. Advocates.',
    url: '/our-journey',
  },
}

export default function OurJourneyLayout({ children }: { children: React.ReactNode }) {
  return children
}
