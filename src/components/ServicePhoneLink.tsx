import { Phone } from 'lucide-react'
import { CHAMBER_CALL_DISPLAY, CHAMBER_TEL } from '@/lib/contactLinks'

export function ServicePhoneNumber({ number = `+91 ${CHAMBER_CALL_DISPLAY}` }: { number?: string }) {
  return (
    <span className="whitespace-nowrap [font-family:Arial,Helvetica,sans-serif] text-sm font-semibold tabular-nums tracking-normal sm:text-base">
      {number}
    </span>
  )
}

export default function ServicePhoneLink({ href = CHAMBER_TEL, number }: { href?: string; number?: string }) {
  return (
    <a
      href={href}
      data-service-phone
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-gold-500/40 px-3 py-3.5 text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-300 sm:px-6"
    >
      <Phone aria-hidden="true" className="h-4 w-4 shrink-0" />
      <ServicePhoneNumber number={number} />
    </a>
  )
}
