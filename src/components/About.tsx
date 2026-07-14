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
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Left bg glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image + overlaid stats */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden">
              <img
                src="images/Lucknow-High-Court.jpg"
                alt="Law office interior"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/88 via-transparent to-transparent dark:from-navy-900/80" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -bottom-6 -right-6 glass-card rounded-sm p-6 max-w-[200px]">
              <div className="font-display text-4xl font-bold text-gold-gradient mb-1">D–311</div>
              <div className="font-caps text-navy-700/75 dark:text-cream/60 text-xs tracking-widest uppercase">Chamber · Block D · High Court Lucknow</div>
            </div>

            <div className="absolute -top-6 -left-6 glass-card rounded-sm p-5 max-w-[180px]">
              <div className="font-display text-3xl font-bold text-gold-gradient mb-1">Lucknow Bench</div>
              <div className="font-caps text-navy-700/75 dark:text-cream/60 text-xs tracking-widest uppercase">Allahabad High Court Briefing</div>
            </div>

            {/* Ornamental border */}
            <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-gold-500/45 dark:border-gold-500/40" />
            <div className="absolute bottom-10 right-10 w-16 h-16 border-r-2 border-b-2 border-gold-500/45 dark:border-gold-500/40" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-gold-500" />
              <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Who We Are</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-6 leading-tight">
              Law for All<br />
              <em className="text-gold-gradient">Justice for Everyone</em>
            </h2>
            

          <p className="font-body text-navy-700/85 dark:text-cream/60 text-lg leading-relaxed mb-6">
  <strong>Sumanjari &amp; Co. </strong> is a trusted law firm serving clients across{' '}
  <strong>Lucknow, Kanpur, Ayodhya, Prayagraj, Ambedkar Nagar, Noida, Gurugram, and Delhi</strong>.
  Our practice spans civil, criminal, matrimonial, constitutional writs, employment, consumer disputes,
  corporate litigation, compensation claims, bail matters, legal drafting, and advisory services,
  with a commitment to protecting our clients' rights through practical and effective legal representation.
</p>



            {/* <p className="font-body text-navy-700/85 dark:text-cream/60 text-lg leading-relaxed mb-6">
              <strong>Sumanjari &amp; Co.</strong> Advocates is a multidisciplinary practice chamber concentrated on mandates before{' '}
              <strong>Allahabad High Court, Lucknow Bench</strong>. We steward civil, criminal, matrimonial,
              employment, consumer, compensation, drafting, constitutional writ litigation, corporate disputes, bail,
              and allied matters—with your right guiding our resolve.
            </p>  */}

            <p className="font-body text-navy-700/85 dark:text-cream/60 text-lg leading-relaxed mb-10">
              Visit <strong className="text-navy-900 dark:text-cream">www.sumanjarirightandremedies.com</strong>
              <br></br>
               •{' '}
              <strong>Dedicated to protecting your rights & delivering justice.</strong>
            </p>

            {/* Pillars grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-sm border border-gold-500/40 flex items-center justify-center flex-shrink-0 group-hover:border-gold-500 group-hover:bg-gold-500/12 dark:border-gold-500/30 dark:group-hover:bg-gold-500/10 transition-all">
                    <Icon className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <div>
                    <div className="font-caps text-navy-900 dark:text-cream text-sm tracking-wide mb-1">{title}</div>
                    <div className="font-body text-navy-700/75 dark:text-cream/50 text-sm leading-relaxed">{desc}</div>
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
