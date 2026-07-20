
'use client'

import { CheckCircle, Globe, Clock, Lock } from 'lucide-react'

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
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute left-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-gold-500/8 blur-3xl dark:bg-gold-500/5 pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src="images/Lucknow-High-Court.jpg"
                alt="Allahabad High Court, Lucknow Bench"
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
  D–311 Chamber · Block D
  <br />
</div>
            </div>

            <div className="absolute left-4 top-4 h-16 w-16 border-l-2 border-t-2 border-gold-500/45 dark:border-gold-500/40" />
            <div className="absolute bottom-10 right-10 h-16 w-16 border-b-2 border-r-2 border-gold-500/45 dark:border-gold-500/40" />
          </div>

          {/* Right */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-600 dark:text-gold-400">
                Who We Are
              </span>
            </div>

            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">
              Law for All
              <br />
              <em className="text-gold-gradient">Justice for Everyone</em>
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-navy-700/85 dark:text-cream/60">
              <strong>Sumanjari &amp; Co.</strong> is a trusted law firm serving clients across{' '}
              <strong>Lucknow, Kanpur, Ayodhya, Prayagraj, Sultanpur, Ambedkar Nagar, Noida, Gurugram, and Delhi</strong>.
              Our practice spans civil, criminal, matrimonial, constitutional writs, employment,
              consumer disputes, corporate litigation, compensation claims, bail matters,
              legal drafting, and advisory services, with a commitment to protecting our
              clients' rights through practical and effective legal representation.
            </p>

            <p className="mb-10 text-lg leading-relaxed text-navy-700/85 dark:text-cream/60">
              • <strong>Dedicated to protecting your rights &amp; delivering justice.</strong>
            </p>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
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
    </section>
  )
}