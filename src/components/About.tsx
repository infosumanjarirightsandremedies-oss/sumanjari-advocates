
'use client'

import { useState } from 'react'
import { CheckCircle, Globe, Clock, Lock, ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'
import FirmCredentials from '@/components/FirmCredentials'
import { FIRM_BACKGROUND } from '@/lib/firm'

const pillars = [
  {
    icon: CheckCircle,
    title: 'Justice',
    desc: 'Advocacy aligned with lawful resolution and courtroom discipline before Allahabad High Court, Lucknow Bench.',
  },
  {
    icon: Globe,
    title: 'People',
    desc: 'Client-first representation—clear explanations, humane guidance, and strategy built around outcomes that matter.',
  },
  {
    icon: Clock,
    title: 'Rights',
    desc: 'Protection of substantive and procedural rights in civil, criminal, service, consumer, property, company, bail, and writ mandates.',
  },
  {
    icon: Lock,
    title: 'Welfare',
    desc: 'Rooted in law. Rising with you—confidential stewardship of every briefing, document, and court appearance.',
  },
]

export default function About() {
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className={expanded ? 'flow-root' : 'grid items-center gap-16 lg:grid-cols-2'}>

          {/* Left */}
          <div className={expanded ? 'relative mb-16 lg:float-left lg:mr-16 lg:w-[calc(50%_-_2rem)]' : 'relative'}>
            <div className="relative overflow-hidden rounded-sm">
              <Image
                src="/images/Lucknow-High-Court.jpg"
                alt="Allahabad High Court, Lucknow Bench"
                width={800}
                height={700}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-[520px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/90 via-transparent to-transparent dark:from-navy-900/80" />
            </div>

{/* Top Card */}
<div className="absolute -left-6 -top-6 glass-card inline-block rounded-sm px-7 py-6 shadow-xl">
  <h3 className="font-display text-[3rem] font-bold leading-[0.9] text-gold-gradient whitespace-nowrap">
    Allahabad
    <br />
    High
    <br />
    Court
  </h3>
</div>

            {/* Bottom Card */}
            <div className="absolute -bottom-6 -right-6 glass-card w-[220px] rounded-sm p-6 shadow-xl">
              <div className="font-display text-4xl font-bold text-gold-gradient">
                Lucknow Bench
              </div>

              <div className="mt-2 font-caps text-xs font-bold uppercase tracking-[0.22em] leading-relaxed text-navy-700 dark:text-cream/60">
               D–311 Chamber·Block D, Gomti Nagar, Lucknow, Uttar Pradesh
  <br />
</div>
            </div>

            <div className="absolute left-4 top-4 h-16 w-16 border-l-2 border-t-2 border-gold-500/45 dark:border-gold-500/40" />
            <div className="absolute bottom-10 right-10 h-16 w-16 border-b-2 border-r-2 border-gold-500/45 dark:border-gold-500/40" />
          </div>

          {/* Right */}
          <div className={expanded ? 'lg:contents' : undefined}>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-600 dark:text-gold-400">
                Who We Are
              </span>
            </div>

            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">
              Sumanjari &amp; Co.
              <br />
              <em className="text-gold-gradient">Advocates in Lucknow</em>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-navy-700/85 dark:text-cream/60">
              <strong>Sumanjari &amp; Co. Advocates</strong> is {FIRM_BACKGROUND}.
              From Chamber Block D-311 at the Allahabad High Court, Lucknow Bench,
              we advise and represent individuals, families, businesses, and institutions
              in disputes that affect their rights, livelihoods, and futures.
            </p>

            <button
              type="button"
              aria-expanded={expanded}
              aria-controls="about-details"
              onClick={() => setExpanded(!expanded)}
              className="mb-6 inline-flex min-h-11 items-center gap-2 rounded-sm border border-gold-500/40 px-5 py-3 font-caps text-sm font-semibold text-gold-700 transition-colors hover:border-gold-500 hover:bg-gold-500/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 dark:text-gold-400"
            >
              {expanded ? 'Read Less' : 'Read More'}
              {expanded ? <ChevronUp aria-hidden="true" className="h-4 w-4" /> : <ChevronDown aria-hidden="true" className="h-4 w-4" />}
            </button>

            <div id="about-details" hidden={!expanded}>
              <p className="mb-6 text-lg leading-relaxed text-navy-700/85 dark:text-cream/60">
                Our practice brings together civil and criminal litigation, family and
                matrimonial matters, property and land disputes, rent and tenancy matters,
                constitutional writs, service and employment law, consumer disputes,
                motor accident compensation claims, company and corporate matters,
                contractual and commercial disputes, and tax and revenue matters.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-navy-700/85 dark:text-cream/60">
                We also handle cyber crime and IT Act matters, RERA builder-buyer disputes,
                banking recovery and Debts Recovery Tribunal (DRT) proceedings,
                SARFAESI Act matters, cheque bounce and negotiable instruments disputes,
                and legal matters for NRIs. Our practice includes Armed Forces Tribunal
                (AFT) service disputes, defence personnel pension and benefit claims,
                mining lease disputes, and mining revenue matters.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-navy-700/85 dark:text-cream/60">
                We serve clients across
                Lucknow, Kanpur, Ayodhya, Prayagraj, and Uttar Pradesh, including Noida,
                Ghaziabad, and Greater Noida.
              </p>

              <p className="mb-6 text-lg leading-relaxed text-navy-700/85 dark:text-cream/60">
                Every brief begins with understanding the facts, reviewing the documents,
                and explaining the available legal options. Whether a matter calls for
                negotiation, careful drafting, or court representation, our focus is on
                practical advice, thorough preparation, and clear communication.
              </p>

              <h3 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream">From advice to representation</h3>
              <p className="mb-6 leading-relaxed text-navy-700/85 dark:text-cream/60">
                We assist with legal opinions, notices, agreements, petitions, appeals,
                and other court pleadings, alongside representation in the relevant courts
                and tribunals. Advice is shaped by the applicable law, the available
                evidence, and the procedural requirements of each matter.
              </p>

              <h3 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream">A considered approach to every brief</h3>
              <p className="mb-10 leading-relaxed text-navy-700/85 dark:text-cream/60">
                We explain the strengths, risks, and next steps so clients can make
                informed decisions. Confidentiality, realistic expectations, and respect
                for each client&apos;s circumstances guide our work, whether the next step
                is a negotiated resolution or contested proceedings.
              </p>
            </div>

            <div className={`grid grid-cols-1 gap-5 sm:grid-cols-2${expanded ? ' lg:clear-both' : ''}`}>
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="group flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm border border-gold-500/40 transition-all group-hover:border-gold-500 group-hover:bg-gold-500/12 dark:border-gold-500/30 dark:group-hover:bg-gold-500/10">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>

                  <div>
                    <div className="mb-1 font-caps text-sm tracking-wide text-navy-900 dark:text-cream">
                      {title}
                    </div>
                    <div className="font-body text-sm leading-relaxed text-navy-700/75 dark:text-cream/50">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
      <div className="mt-16">
        <FirmCredentials />
      </div>
    </section>
  )
}