import Link from 'next/link'
import { Languages } from 'lucide-react'

export default function ServiceLanguageSwitch({ basePath, language }: { basePath: string; language: 'en' | 'hi' }) {
  const hindi = language === 'en'
  return (
    <Link
      href={`${basePath}${hindi ? '/hindi' : ''}`}
      hrefLang={hindi ? 'hi' : 'en'}
      lang={hindi ? 'hi' : 'en'}
      data-service-language-switch
      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border border-gold-500/50 bg-gold-500/10 px-4 py-3 font-body text-base font-semibold text-navy-900 transition-colors hover:bg-gold-500/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 dark:text-cream"
    >
      <Languages aria-hidden="true" className="h-5 w-5" />
      {hindi ? 'हिंदी में पढ़ें' : 'Read in English'}
    </Link>
  )
}
