'use client'
import { Phone, MessageCircle } from 'lucide-react'
import { buildArticleWhatsAppUrl, CHAMBER_TEL } from '@/lib/contactLinks'

// Sticky bottom bar for mobile blog reading, with a pulsing glow to draw the
// eye. On desktop this is hidden and the home-style WhatsApp float is shown
// instead. One tap to call the chamber or open a WhatsApp chat pre-filled with
// the article the reader is on.
export default function BlogContactBar({ title, category }: { title: string; category: string }) {
  const whatsappUrl = buildArticleWhatsAppUrl(title, category)

  return (
    <div className="bar-flash fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-gold-500/25 bg-cream/95 backdrop-blur-md dark:bg-navy-950/95 md:hidden">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-green-500 py-3.5 font-caps text-xs font-semibold uppercase tracking-widest text-white"
        aria-label={`WhatsApp us about ${title}`}
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp Us
      </a>
      <a
        href={CHAMBER_TEL}
        className="flex items-center justify-center gap-2 border-l border-gold-500/20 py-3.5 font-caps text-xs font-semibold uppercase tracking-widest text-navy-900 dark:text-cream"
      >
        <Phone className="h-4 w-4 text-gold-600 dark:text-gold-400" />
        Call Chamber
      </a>
    </div>
  )
}
