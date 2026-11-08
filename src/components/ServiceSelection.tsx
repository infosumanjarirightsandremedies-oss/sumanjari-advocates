import type { ServiceSearchContent } from '@/lib/serviceSearch'
import { FIRM_BACKGROUND } from '@/lib/firm'

export default function ServiceSelection({ content }: { content: ServiceSearchContent }) {
  return (
    <section id="choosing-an-advocate" aria-labelledby="choosing-an-advocate-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-8">
      <h2 id="choosing-an-advocate-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
        {content.question}
      </h2>
      <p className="font-body leading-relaxed text-navy-700 dark:text-cream/65">{content.answer}</p>
      <p className="mt-4 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
        Sumanjari &amp; Co. Advocates is {FIRM_BACKGROUND}. Each advocate&apos;s individual practice areas are listed on their profile; no outcome is guaranteed.
      </p>
    </section>
  )
}
