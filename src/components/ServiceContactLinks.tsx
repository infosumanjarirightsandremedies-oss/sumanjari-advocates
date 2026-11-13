import { MessageCircle } from 'lucide-react'
import ServicePhoneLink from '@/components/ServicePhoneLink'
import { whatsappUrl } from '@/lib/contactLinks'

export default function ServiceContactLinks({
  phoneHref,
  phoneNumber,
  whatsappHref = whatsappUrl(),
}: {
  phoneHref?: string
  phoneNumber?: string
  whatsappHref?: string
}) {
  return (
    <div data-service-contact-links className="flex flex-wrap items-stretch gap-1 sm:gap-3">
      <ServicePhoneLink href={phoneHref} number={phoneNumber} />
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        data-service-whatsapp
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-gold-500/40 px-2 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-300 sm:px-3 sm:text-sm"
      >
        <MessageCircle aria-hidden="true" className="h-4 w-4 shrink-0" /> WhatsApp
      </a>
    </div>
  )
}
