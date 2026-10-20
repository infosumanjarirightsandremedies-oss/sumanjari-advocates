import type { Metadata } from 'next'
import { Cormorant_SC, EB_Garamond, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Disclaimer from '@/components/Disclaimer'

const playfair = Playfair_Display({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--font-playfair' })
const ebGaramond = EB_Garamond({ subsets: ['latin'], style: ['normal', 'italic'], display: 'swap', variable: '--font-eb-garamond' })
const cormorantSC = Cormorant_SC({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], display: 'swap', preload: false, variable: '--font-cormorant-sc' })

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png', sizes: '192x192' }],
    shortcut: '/favicon.png',
    apple: [{ url: '/favicon.png', sizes: '192x192', type: 'image/png' }],
  },
  title: {
    default: 'Sumanjari & Co. Advocates | 8302471764 | Advocates in Lucknow & Allahabad High Court',
    template: '%s | Sumanjari & Co. Advocates',
  },
 description:
'Sumanjari & Co. Advocates practises before the Allahabad High Court, Lucknow Bench from Chamber Block D-311. We handle civil, criminal, family, property, constitutional, service, consumer, tax, RERA, banking recovery (DRT), armed forces tribunal (AFT), and mining matters across Lucknow, Ayodhya and Uttar Pradesh.',
keywords: [
  'Sumanjari & Co. Advocates',
  'Sumanjari Advocates',
  'Law Firm Lucknow',
  'Jitendra Tiwari Advocate',
  'Jitendra Tiwari Lawyer',
  'Jitendra Tiwari Advocate Lucknow',
  'Jitendra Tiwari',
  'Law Firms Near me',
  'law firms near me',
  'Aishwarya Pandey Advocate',
  'Aishwarya Pandey Lawyer',
  'Aishwarya Pandey Advocate Lucknow',
  'Aishwarya Pandey',
  'Law Firm Uttar Pradesh',
  'Advocate Lucknow',
  'Lawyer Lucknow',
  'Advocate in Lucknow',
  'Lawyer in Lucknow',
  'Best Lawyer Lucknow',
  'High Court Advocate Lucknow',
  'Allahabad High Court Lucknow Bench',
  'Civil Lawyer Lucknow',
  'Criminal Lawyer Lucknow',
  'Family Lawyer Lucknow',
  'Divorce Lawyer Lucknow',
  'Property Lawyer Lucknow',
  'Constitutional Lawyer Lucknow',
  'Service Matter Lawyer Lucknow',
  'Corporate Lawyer Lucknow',
  'Arbitration Lawyer Lucknow',
  'Legal Consultation Lucknow',
  'Legal Services Lucknow',
  'Advocate Near Me',
  'High Court Lawyer Uttar Pradesh',
  'Best Advocate Lucknow',
  'Best Lawyer Lucknow',
  'Top Advocate Lucknow',
  'Top Lawyer Lucknow',
  'Litigation Lawyer Lucknow',
  'Lawyer in Prayagraj',
  'Advocate Prayagraj',
  'Law Firm Prayagraj',
  'Lawyer Allahabad',
  'Best Advocate Allahabad',
  'High Court Lawyer Allahabad',
  'Legal Services Prayagraj',
  'Litigation Lawyer Uttar Pradesh',
  'Best Litigation Advocate UP',
  'Court Case Lawyer UP',
  'Civil Lawyer Uttar Pradesh',
  'Criminal Lawyer Uttar Pradesh',
  'Property Dispute Lawyer UP',
  'Family Court Lawyer Uttar Pradesh',
  'Online Legal Consultation India',
  'Legal Consultancy India',
  'Legal Advice Online India',
  'Best Legal Consultancy India',
  'Consumer Lawyer Lucknow',
  'Motor Accident Claims Lawyer Lucknow',
  'Rent & Tenancy Lawyer Lucknow',
  'Tax & Revenue Lawyer Lucknow',
  'Company Law Lawyer Lucknow',
  'Legal Drafting Lucknow',
  'RERA Lawyer Lucknow',
  'RERA Advocate Lucknow',
  'Builder Buyer Dispute Lawyer Lucknow',
  'DRT Lawyer Lucknow',
  'Debts Recovery Tribunal Advocate Lucknow',
  'SARFAESI Act Lawyer Lucknow',
  'Banking Recovery Lawyer Lucknow',
  'Negotiable Instruments Lawyer Lucknow',
  'Cheque Bounce Lawyer Lucknow',
  'AFT Lawyer Lucknow',
  'Armed Forces Tribunal Advocate Lucknow',
  'Defence Personnel Lawyer Lucknow',
  'Mining Matters Lawyer Lucknow',
  'Mining Dispute Advocate Uttar Pradesh',
],
  authors: [{ name: 'Sumanjari & Co. Advocates' }],
  creator: 'Sumanjari & Co. Advocates',
  publisher: 'Sumanjari & Co. Advocates',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
  },
  other: {
    'geo.placename': 'Lucknow, Uttar Pradesh, India',
    'geo.region': 'IN-UP',
    'geo.position': '26.8467;80.9462',
    ICBM: '26.8467, 80.9462',
  },
  openGraph: {
    title: 'Sumanjari & Co. Advocates',
    description:
      'Rooted in law. Rising with you. Practising before the Allahabad High Court, Lucknow Bench.',
    type: 'website',
    url: SITE_URL,
    siteName: 'Sumanjari & Co. Advocates',
    locale: 'en_IN',
    images: [
      {
        url: '/images/Lucknow-High-Court.jpg',
        width: 1200,
        height: 800,
        alt: 'Allahabad High Court, Lucknow Bench',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sumanjari & Co. Advocates',
    description:
      'Practising before the Allahabad High Court, Lucknow Bench — Chamber Block D-311.',
    images: ['/images/Lucknow-High-Court.jpg'],
  },
}

const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Sumanjari & Co. Advocates',
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.png`,
  description:
    'Sumanjari & Co. Advocates practises before the Allahabad High Court, Lucknow Bench, serving clients across Lucknow, Kanpur, Ayodhya, Prayagraj, Sultanpur, Ambedkar Nagar, Noida, and Delhi — handling civil, criminal, family, property, consumer, tax, RERA, banking recovery (DRT), armed forces tribunal (AFT), and mining matters.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chamber No. Block D – 311, Allahabad High Court, Lucknow Bench',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 26.8467,
    longitude: 80.9462,
  },
  email: 'info.sumanjarirightsandremedies@gmail.com',
  telephone: '+91-83024-71764',
  sameAs: [
    'https://www.instagram.com/thelast_verdict',
    'https://www.reddit.com/user/Mean-Bicycle-5947/',
  ],
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'City', name: 'Kanpur' },
    { '@type': 'City', name: 'Ayodhya' },
    { '@type': 'City', name: 'Prayagraj' },
    { '@type': 'City', name: 'Sultanpur' },
    { '@type': 'City', name: 'Ambedkar Nagar' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Gurugram' },
    { '@type': 'City', name: 'Delhi' },
    { '@type': 'State', name: 'Uttar Pradesh' },
    { '@type': 'Country', name: 'India' },
  ],
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${ebGaramond.variable} ${cormorantSC.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(()=>{try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){document.documentElement.classList.remove('dark')}})()`,
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(legalServiceJsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Disclaimer />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
