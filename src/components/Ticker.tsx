'use client'

const items = [
  'YOUR RIGHT, OUR RESOLVE',
  'LAW FOR ALL, JUSTICE FOR EVERYONE',
  'Rooted in Law. Rising with You.',
  '🏛 Justice',
  '👥 People',
  '⚖ Rights',
  '🤝 Welfare',
  '⚖ Civil Matters',
  '⚖ Criminal Matters',
  '💑 Family & Divorce',
  '🏠 Property Matters',
  '📋 Service & Employment',
  '🛒 Consumer Matters',
  '🚗 Motor Accident Claims',
  '📝 Drafting & Legal Opinions',
  '📜 Writ Petitions',
  '🏢 Company Matters',
]

export default function Ticker() {
  return (
    <div className="bg-[#ece8e0] border-y border-gold-500/18 dark:bg-navy-800 dark:border-gold-500/10 py-4 overflow-hidden">
      <div className="ticker-wrap">
        <div className="ticker-inner">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6 mx-8">
              <span className="font-caps text-gold-700/75 dark:text-gold-500/60 text-xs tracking-widest uppercase whitespace-nowrap">
                {item}
              </span>
              <span className="w-1 h-1 rounded-full bg-gold-500/35 dark:bg-gold-500/30 flex-shrink-0" />
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
