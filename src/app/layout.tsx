import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Disclaimer from '@/components/Disclaimer'

export const metadata: Metadata = {
  title: 'Sumanjari & Co. Advocates | Allahabad High Court Lucknow Bench',
  description:
    'Rooted in law. Rising with you. Sumanjari & Co. Advocates practises before Allahabad High Court, Lucknow Bench from Chamber Block D-311.',

  keywords:
    'Sumanjari & Co Advocates, Allahabad High Court Lucknow, chamber Block D-311 Lucknow High Court, civil criminal family property lawyer Lucknow Bench',

  icons: {
  icon: "/images/favicon.png",
  shortcut: "/images/favicon.png",
  apple: "/images/favicon.png",
},

  openGraph: {
    title: 'Sumanjari & Co. Advocates',
    description:
      'Law for all, justice for everyone — YOUR RIGHT, OUR RESOLVE.',
    type: 'website',
    url: 'https://www.sumanjariadvocates.com',
    images: [
      {
        url: '/images/favicon.ico',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Sumanjari & Co. Advocates',
    description:
      'Practicing before Allahabad High Court, Lucknow Bench.',
    images: ['/images/favicon.ico'],
  },
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

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

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
