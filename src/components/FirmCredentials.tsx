import { FIRM_CREDENTIALS } from '@/lib/firm'

export default function FirmCredentials() {
  return (
    <section aria-label="Firm experience and legacy" className="border-y border-gold-500/25 bg-gold-500/5 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-6 text-center font-caps text-xs uppercase tracking-wide text-navy-700 dark:text-cream/70">
          Sumanjari &amp; Co. Advocates
        </p>
        <dl className="grid grid-cols-1 gap-6 text-center sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-gold-500/25">
          {FIRM_CREDENTIALS.map(({ value, label }) => (
            <div key={label} className="flex flex-col-reverse gap-2 px-4">
              <dt className="font-body text-sm text-navy-700 dark:text-cream/70">{label}</dt>
              <dd className="font-display text-4xl font-bold text-gold-700 dark:text-gold-400">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-6 text-center leading-relaxed text-navy-900 dark:text-cream">
          <span className="block text-base font-normal">
            {FIRM_CREDENTIALS[0].value} years of firm-wide legal experience across practice areas.
          </span>
          <span className="mt-1 block text-sm text-navy-700 dark:text-cream/80">
            Each matter is assessed on its own facts and applicable law.
          </span>
        </p>
      </div>
    </section>
  )
}