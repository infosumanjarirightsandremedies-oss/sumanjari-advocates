export const SERVICE_STATS = {
  service: { years: '8+', cases: '1500+' },
  civil: { years: '8+', cases: '1000+' },
  nri: { years: '5+', cases: '200+' },
  property: { years: '8+', cases: '500+' },
  tax: { years: '30+', cases: '2000+' },
  criminal: { years: '30+', cases: '3000+' },
  family: { years: '5+', cases: '3000+' },
  rera: { years: '8+', cases: '1000+' },
  divorce: { years: '5+', cases: '400+' },
  consumer: { years: '8+', cases: '2000+' },
  corporate: { years: '8+', cases: '5000+' },
  writ: { years: '5+', cases: '1000+' },
  banking: { years: '8+', cases: '1000+' },
  cyberCrime: { years: '5+', cases: '1000+' },
  armedForcesTribunal: { years: '7+', cases: '500+' },
} as const

export default function ServiceStats({ service }: { service: keyof typeof SERVICE_STATS }) {
  const { years, cases } = SERVICE_STATS[service]
  const stats = [
    { value: years, label: 'Years of experience (lead advocate)' },
    { value: cases, label: 'Cases handled by our team' },
  ]

  return (
    <dl aria-label="Lead advocate experience and team cases handled" className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
      {stats.map(({ value, label }) => (
        <div key={label} className="flex items-baseline gap-2">
          <dt className="order-last max-w-[8rem] font-body text-sm leading-snug text-navy-700/75 dark:text-cream/55">
            {label}
          </dt>
          <dd className="font-display text-2xl font-bold text-gold-gradient">{value}</dd>
        </div>
      ))}
    </dl>
  )
}