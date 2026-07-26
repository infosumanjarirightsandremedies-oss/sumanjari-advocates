import Internship from '@/components/Internship'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Internship Program',
  description:
    'Apply for an internship at Sumanjari & Co. Advocates and gain hands-on litigation experience before the Allahabad High Court, Lucknow Bench, across civil, criminal, family, and property matters.',
  alternates: {
    canonical: '/internship',
  },
  openGraph: {
    title: 'Internship Program | Sumanjari & Co. Advocates',
    description:
      'Apply for an internship at Sumanjari & Co. Advocates — hands-on litigation experience before the Allahabad High Court, Lucknow Bench.',
    url: '/internship',
  },
}

export default function InternshipPage() {
  return (
    <main className="relative min-h-screen">
      <Internship />
    </main>
  )
}