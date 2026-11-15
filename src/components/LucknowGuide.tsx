import Link from 'next/link'
import type { GuideStage, GuideTocItem, StatuteRow } from '@/lib/guides/types'

const linkClass = 'underline-offset-4 hover:text-gold-700 hover:underline dark:hover:text-gold-400'

export function GuideToc({ items, language = 'en' }: { items: GuideTocItem[]; language?: 'en' | 'hi' }) {
  return (
    <nav aria-label={language === 'hi' ? 'इस पेज की जानकारी' : 'Table of contents'} className="glass-card mb-16 rounded-sm border border-gold-500/20 p-6 md:p-8">
      <p className={`mb-4 text-gold-700 dark:text-gold-400 ${language === 'hi' ? 'font-body text-base font-semibold' : 'font-caps text-xs uppercase tracking-[0.3em]'}`}>{language === 'hi' ? 'इस पेज में क्या मिलेगा' : 'Table of Contents'}</p>
      <ol className="list-decimal space-y-2 pl-5 font-body text-navy-800 dark:text-cream/75">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={linkClass}>{item.label}</a>
            {item.children && (
              <ol className="mt-2 grid gap-1.5 pl-4 text-sm sm:grid-cols-2">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <a href={`#${child.id}`} className={linkClass}>{child.label}</a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function GuideStages({ id, heading, intro, stages, language = 'en' }: { id: string; heading: string; intro: string; stages: GuideStage[]; language?: 'en' | 'hi' }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16 scroll-mt-28">
      <h2 id={`${id}-heading`} className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">{heading}</h2>
      <p className="mb-10 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">{intro}</p>
      <ol className="space-y-10 border-l border-gold-500/30 pl-6 md:pl-8">
        {stages.map((stage, index) => (
          <li key={stage.id} id={stage.id} className="scroll-mt-28">
            <p className={`text-gold-700 dark:text-gold-400 ${language === 'hi' ? 'font-body text-sm font-semibold' : 'font-caps text-xs uppercase tracking-[0.3em]'}`}>{language === 'hi' ? 'चरण' : 'Stage'} {index + 1}</p>
            <h3 className="mb-2 mt-1 font-display text-xl font-bold text-navy-900 dark:text-cream">{stage.title}</h3>
            <p className="mb-3 font-body text-sm text-navy-700 dark:text-cream/60"><strong>{language === 'hi' ? 'संबंधित अधिकारी / मंच:' : 'Forum:'}</strong> {stage.forum}</p>
            {stage.body.map((paragraph, i) => {
              const links = (stage.bodyLinks ?? [])
                .filter((link) => link.paragraph === i)
                .map((link) => ({ ...link, start: paragraph.indexOf(link.text) }))
                .sort((a, b) => a.start - b.start)
              let end = 0
              const content = links.map((link) => {
                if (!link.text || link.start < end) {
                  throw new Error(`Invalid inline link in ${stage.id}, paragraph ${i}: ${link.text}`)
                }
                const before = paragraph.slice(end, link.start)
                end = link.start + link.text.length
                return <span key={`${link.start}-${link.href}`}>{before}<Link href={link.href} className="text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">{link.text}</Link></span>
              })
              return <p key={i} className="mb-3 font-body leading-relaxed text-navy-800 dark:text-cream/75">{content}{paragraph.slice(end)}</p>
            })}
            <p className="font-body text-sm text-navy-700 dark:text-cream/60"><strong>{language === 'hi' ? 'मुख्य प्रावधान:' : 'Key provisions:'}</strong> {stage.provisions.join('; ')}</p>
            {stage.checklist && (
              <ul className="mt-3 list-disc space-y-1 pl-5 font-body text-sm text-navy-700 dark:text-cream/60">
                {stage.checklist.map((point) => <li key={point}>{point}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export function StatuteTable({ id, heading, intro, rows, language = 'en' }: { id: string; heading: string; intro: string; rows: StatuteRow[]; language?: 'en' | 'hi' }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16 scroll-mt-28">
      <h2 id={`${id}-heading`} className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">{heading}</h2>
      <p className="mb-6 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">{intro}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left font-body text-sm">
          <thead>
            <tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">
              <th scope="col" className="py-3 pr-4 font-semibold">{language === 'hi' ? 'कानून' : 'Law'}</th>
              <th scope="col" className="py-3 pr-4 font-semibold">{language === 'hi' ? 'मुख्य प्रावधान' : 'Key provisions'}</th>
              <th scope="col" className="py-3 font-semibold">{language === 'hi' ? 'कहाँ लागू होता है' : 'Where it matters'}</th>
            </tr>
          </thead>
          <tbody className="text-navy-800 dark:text-cream/75">
            {rows.map((row) => (
              <tr key={row.law} className="border-b border-gold-500/10 align-top">
                <th scope="row" className="py-3 pr-4 font-semibold">{row.law}</th>
                <td className="py-3 pr-4">{row.provisions}</td>
                <td className="py-3">{row.relevance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
