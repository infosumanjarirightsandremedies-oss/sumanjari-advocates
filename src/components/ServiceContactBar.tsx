import { MessageCircle, Phone } from 'lucide-react'
import { CHAMBER_TEL, whatsappUrl } from '@/lib/contactLinks'

export default function ServiceContactBar() {
  return (
    <nav aria-label="Mobile service contact" className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-gold-500/30 bg-cream pb-[env(safe-area-inset-bottom)] dark:bg-navy-950 md:hidden">
      <a href={CHAMBER_TEL} className="flex min-h-14 items-center justify-center gap-2 font-caps text-sm font-semibold text-navy-900 dark:text-cream">
        <Phone aria-hidden="true" className="h-4 w-4" /> Call Chamber
      </a>
      <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="flex min-h-14 items-center justify-center gap-2 border-l border-gold-500/30 font-caps text-sm font-semibold text-navy-900 dark:text-cream">
        <MessageCircle aria-hidden="true" className="h-4 w-4" /> WhatsApp
      </a>
    </nav>
  )
}
