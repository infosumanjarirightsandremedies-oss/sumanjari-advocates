import Link from 'next/link'
import { ArrowLeft, Mail, GraduationCap, Scale, Languages } from 'lucide-react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Adv.Devesh Tiwari — Associate Advocate',
  description:
    'Adv. Devesh Tiwari is an Associate Advocate practising before the Allahabad High Court and subordinate courts, holding LL.B. and LL.M. degrees and enrolled with the Bar Council of Uttar Pradesh.',
  alternates: {
    canonical: '/team/devesh-tiwari',
  },
  openGraph: {
    title: 'Adv. Devesh Tiwari | Sumanjari & Co. Advocates',
    description:
      'Associate Advocate practising before the Allahabad High Court and subordinate courts.',
    url: '/team/devesh-tiwari',
  },
}

const practiceAreas = [
  'Civil Litigation',
  'Criminal Law',
  'Constitutional & Writ Matters',
  'Service Matters',
  'Family Law',
  'Legal Drafting & Advisory',
]

const courts = [
  'Allahabad High Court, Lucknow Bench',
  'District & Sessions Courts',
  'Tribunals & Other Judicial Forums',
]

const languages = ['Hindi', 'English']

export default function DeveshTiwariPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 font-caps text-xs tracking-widest uppercase text-navy-700/70 dark:text-cream/45 hover:text-gold-600 dark:hover:text-gold-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Team
        </Link>

        <div className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-2">
            Devesh Tiwari <span className="text-navy-500/60 dark:text-cream/40 text-2xl font-normal">, Lucknow</span>
          </h1>
          <p className="font-body text-gold-700 dark:text-gold-400 text-lg">
            Associate Advocate
          </p>
        </div>

        <div className="glass-card rounded-sm border border-gold-500/25 dark:border-gold-500/20 p-6 md:p-8 mb-12 grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <a href="mailto:info.sumanjarirightsandremedies@gmail.com" className="font-body text-navy-800 dark:text-cream/85 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                info.sumanjarirightsandremedies@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Scale className="w-4 h-4 mt-0.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <div>
                <div className="font-caps text-[11px] tracking-widest uppercase text-navy-600/60 dark:text-cream/40 mb-1">Enrolment</div>
                <ul className="font-body text-navy-800 dark:text-cream/85 text-sm space-y-1">
                  <li>Bar Council of Uttar Pradesh</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 mt-0.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <div>
                <div className="font-caps text-[11px] tracking-widest uppercase text-navy-600/60 dark:text-cream/40 mb-1">Education</div>
                <ul className="font-body text-navy-800 dark:text-cream/85 text-sm space-y-1">
                  <li>BA LL.B.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-14">
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Devesh Tiwari is an Associate Advocate with a strong academic background and practical litigation experience.
          </p>
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            He is actively engaged in representing clients before the High Court and subordinate courts, with a focus on providing strategic legal advice, effective advocacy, and practical legal solutions.
          </p>
        </div>

        {/* <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-6">Practice Areas</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {practiceAreas.map((item) => (
              <div
                key={item}
                className="glass-card rounded-sm border border-gold-500/20 dark:border-gold-500/15 px-4 py-3 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="font-body text-navy-800 dark:text-cream/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-4">Courts of Practice</h2>
          <ul className="space-y-2">
            {courts.map((item) => (
              <li key={item} className="font-body text-navy-700/85 dark:text-cream/65 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500" /> {item}
              </li>
            ))}
          </ul>
        </div> */}

        <div>
          <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-4 flex items-center gap-2">
            <Languages className="w-5 h-5 text-gold-600 dark:text-gold-400" /> Languages
          </h2>
          <ul className="flex flex-wrap gap-3">
            {languages.map((item) => (
              <li
                key={item}
                className="glass-card rounded-sm border border-gold-500/20 dark:border-gold-500/15 px-4 py-2 font-body text-navy-800 dark:text-cream/80 text-sm"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
