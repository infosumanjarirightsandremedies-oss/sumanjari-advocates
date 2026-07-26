import type { Metadata } from 'next'
// @ts-ignore
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Disclaimer from '@/components/Disclaimer'

// Single source of truth for the site's canonical domain — every URL,
// canonical tag, and structured-data field below derives from this so
// they can never drift out of sync with each other again.
const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: 'Sumanjari & Co. Advocates | Allahabad High Court Lucknow Bench',
    // Child routes set their own `title` and it's slotted in here, so
    // every indexed page reads "<Page Title> | Sumanjari & Co. Advocates"
    // instead of losing brand context in search results.
    template: '%s | Sumanjari & Co. Advocates',
  },
 description:
'Sumanjari & Co. Advocates practises before the Allahabad High Court, Lucknow Bench from Chamber Block D-311. We handle civil, criminal, family, property, constitutional and service matters across Lucknow, Ayodhya and Uttar Pradesh.',
keywords: [
  'Sumanjari & Co. Advocates',
  'Sumanjari Advocates',
  'Law Firm Lucknow',
  'Law Firm Uttar Pradesh',
  'Advocate Lucknow',
  'Lawyer Lucknow',
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
  'Top Lawyer Lucknow'
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
        // Real, existing site asset — not a placeholder. Ratio isn't
        // the standard 1200x630, so most platforms will letterbox it;
        // swap in a purpose-cropped 1200x630 brand image when you have
        // one, this is just a legitimate stand-in until then.
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

// ---------------------------------------------------------------------------
// STRUCTURED DATA (schema.org JSON-LD)
// ---------------------------------------------------------------------------
// `LegalService` is the schema.org type Google's own structured-data
// documentation recommends for a law firm (it's a LocalBusiness subtype),
// as opposed to `Attorney`, which is meant for a single named practitioner.
// Every field below is a fact already published elsewhere on this site
// (Footer, team pages) — nothing here is invented for SEO purposes.
const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates',
  url: SITE_URL,
  description:
    'Sumanjari & Co. Advocates practises before the Allahabad High Court, Lucknow Bench, handling civil, criminal, family, and property matters.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Chamber No. Block D – 311, Allahabad High Court, Lucknow Bench',
    addressLocality: 'Lucknow',
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
  email: 'info.sumanjarirightsandremedies@gmail.com',
  telephone: '+91-82990-86204',
  sameAs: ['https://www.instagram.com/thelastvedict'],
  areaServed: {
    '@type': 'State',
    name: 'Uttar Pradesh',
  },
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,800&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Cormorant+SC:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
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
