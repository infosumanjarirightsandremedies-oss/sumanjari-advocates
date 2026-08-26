import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  Landmark,
  ShieldAlert,
  HandCoins,
  Banknote,
  Home,
  Users,
  Scale,
  ShieldCheck,
  MessageSquareWarning,
  MapPin,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'DRT Lawyer in Lucknow, Ghaziabad, Noida & Agra | SARFAESI & Bank Recovery',
  description:
    'Sumanjari & Co. Advocates represents banks, financial institutions, borrowers, and guarantors before the Debts Recovery Tribunal (DRT), Lucknow — whose jurisdiction covers Lucknow, Ghaziabad, Noida, Greater Noida, Agra, Meerut, and across western & central Uttar Pradesh — plus SARFAESI, DRAT Allahabad appeals, and cheque bounce matters.',
  keywords: [
    'DRT Lawyer Lucknow',
    'DRT Advocate Lucknow',
    'Debts Recovery Tribunal Advocate Lucknow',
    'DRT Lawyer Ghaziabad',
    'DRT Lawyer Noida',
    'DRT Lawyer Agra',
    'DRT Lawyer Meerut',
    'SARFAESI Lawyer Lucknow',
    'SARFAESI Section 17 Lawyer',
    'Bank Recovery Lawyer Lucknow',
    'DRAT Allahabad Appeal Lawyer',
    'Cheque Bounce Lawyer Lucknow',
    'Section 138 NI Act Lawyer Lucknow',
    'Loan Recovery Lawyer Lucknow',
    'Guarantor Liability Lawyer Lucknow',
    'Negotiable Instruments Lawyer Lucknow',
    'DRT-II Lucknow Advocate',
  ],
  alternates: {
    canonical: '/services/banking-recovery-matters',
  },
  openGraph: {
    title: 'DRT Lawyer in Lucknow, Ghaziabad, Noida & Agra | Sumanjari & Co. Advocates',
    description:
      'Representation before the Debts Recovery Tribunal, Lucknow, SARFAESI enforcement, bank loan recovery, and negotiable instrument disputes — serving clients across DRT Lucknow’s jurisdiction in Lucknow, Ghaziabad, Noida, Greater Noida, and Agra.',
    url: '/services/banking-recovery-matters',
  },
}

const bankingRecoveryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Banking, Recovery & Negotiable Instruments Matters',
  url: `${SITE_URL}/services/banking-recovery-matters`,
  description:
    'Representation for banks, financial institutions, borrowers, and guarantors in Debts Recovery Tribunal proceedings, SARFAESI enforcement, bank loan recovery and settlement, and negotiable instrument disputes, before the DRT, Lucknow, DRAT Allahabad, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-82990-86204',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'City', name: 'Ghaziabad' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' },
    { '@type': 'City', name: 'Agra' },
    { '@type': 'City', name: 'Meerut' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Banking, Recovery & Negotiable Instruments Legal Services',
}

const drtFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the minimum claim before a DRT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A bank or financial institution can approach the DRT only where the debt due is ₹20 lakh or more — claims below this threshold must be pursued before the ordinary civil court.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which areas fall under DRT Lucknow’s jurisdiction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Debts Recovery Tribunal, Lucknow, has territorial jurisdiction over a large part of western and central Uttar Pradesh, including Lucknow, Ghaziabad, Gautam Budh Nagar (Noida and Greater Noida), Agra, Meerut, Bareilly, Aligarh, and several neighbouring districts.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I challenge a SARFAESI notice?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A borrower aggrieved by measures taken under Section 13(4) of the SARFAESI Act, such as possession of a secured asset, can file an application under Section 17 before the DRT having jurisdiction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a pre-deposit required to appeal a SARFAESI order to the DRAT?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. An appeal to the DRAT under Section 18 of the SARFAESI Act requires a borrower to pre-deposit 50% of the debt due, which the Tribunal may reduce to not less than 25% for reasons recorded in writing.',
      },
    },
  ],
}

const matters = [
  {
    icon: Landmark,
    title: 'Debts Recovery Tribunal (DRT) Proceedings',
    points: [
      'Filing and defending Original Applications under Section 19 of the RDDBFI Act, where the debt due is ₹20 lakh or more',
      'Recovery Certificate execution proceedings before the Recovery Officer',
      'Appeals to the Debts Recovery Appellate Tribunal (DRAT), Allahabad, under Section 20',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'SARFAESI Act Matters',
    points: [
      'Advising on Section 13(2) demand notices and Section 13(4) enforcement measures against secured assets',
      'Section 17 applications before the DRT challenging possession or sale of secured assets',
      'Section 18 appeals before the DRAT, including applications for reduction of the mandatory pre-deposit',
    ],
  },
  {
    icon: HandCoins,
    title: 'Bank Loan Recovery & Settlement',
    points: [
      'Representing banks, financial institutions, and borrowers in loan recovery and restructuring',
      'One-time settlement (OTS) negotiations and compromise proposals',
    ],
  },
  {
    icon: Banknote,
    title: 'Negotiable Instruments & Cheque Recovery',
    points: [
      'Cheque bounce complaints and defence under Section 138 of the Negotiable Instruments Act',
      'Recovery suits and settlement negotiations linked to dishonoured cheques and promissory notes',
    ],
  },
  {
    icon: Users,
    title: 'Guarantor & Third-Party Liability',
    points: [
      'Representing guarantors and co-obligors in recovery and SARFAESI proceedings',
      'Disputes over invocation of guarantees and enforcement against guarantor assets',
    ],
  },
  {
    icon: Home,
    title: 'Secured Asset & Possession Disputes',
    points: [
      'Challenging possession notices and auction sale proceedings under SARFAESI',
      'Disputes over valuation, symbolic possession, and sale of mortgaged or hypothecated property',
    ],
  },
]

const whyIssues = [
  'Recovery of dues by banks and financial institutions',
  'Enforcement action under SARFAESI, including possession and sale of secured assets',
  'Cheque bounce and negotiable instrument disputes',
  'Guarantor liability and invocation of guarantees',
  'Loan settlement, restructuring, and one-time settlement negotiations',
  'Appeals against DRT and DRAT orders',
]

const jurisdiction = [
  {
    title: 'Debts Recovery Tribunal (DRT), Lucknow',
    blurb:
      'Original Applications for loan recovery and SARFAESI Section 17 applications before the Tribunal.',
  },
  {
    title: 'Debts Recovery Appellate Tribunal (DRAT), Allahabad',
    blurb:
      'Appeals against orders of the DRT, Lucknow, under Section 20 of the RDDBFI Act and Section 18 of the SARFAESI Act.',
  },
  {
    title: 'District & Sessions Courts',
    blurb:
      'Complaints and defence in cheque bounce matters under Section 138 of the Negotiable Instruments Act.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Writ challenges to SARFAESI action and orders of the DRT and DRAT, arguing from our chambers at Block D-311.',
  },
]

const workSteps = [
  {
    icon: Landmark,
    title: 'Private Consultation',
    description:
      'We begin with a confidential discussion of your matter, understanding the facts and your expectations while safeguarding your privacy.',
  },
  {
    icon: Scale,
    title: 'In-Depth Case Review',
    description:
      'Every document and detail is carefully examined so we can assess the strengths, risks, and best possible legal routes for you.',
  },
  {
    icon: HandCoins,
    title: 'Strategy & Drafting',
    description:
      'A clear, customised strategy is prepared and precise pleadings are drafted to present your case strongly before the court or authority.',
  },
  {
    icon: ShieldCheck,
    title: 'Focused Representation',
    description:
      'We represent you with preparation and clarity, ensuring timely filings, effective arguments, and regular updates on each hearing.',
  },
  {
    icon: Banknote,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
  },
]

const bankingInsights = [
  {
    icon: Landmark,
    title: 'What Is the Minimum Claim Before a DRT?',
    excerpt:
      'A bank or financial institution can approach the DRT only where the debt due is ₹20 lakh or more — claims below this threshold must be pursued before the ordinary civil court.',
  },
  {
    icon: MapPin,
    title: 'Which Areas Fall Under DRT Lucknow’s Jurisdiction?',
    excerpt:
      'The DRT, Lucknow has territorial jurisdiction over a large part of western and central Uttar Pradesh, including Lucknow, Ghaziabad, Gautam Budh Nagar (Noida and Greater Noida), Agra, Meerut, Bareilly, Aligarh, and several neighbouring districts.',
  },
  {
    icon: ShieldAlert,
    title: 'Challenging a SARFAESI Notice',
    excerpt:
      'A borrower aggrieved by measures taken under Section 13(4) of the SARFAESI Act — such as possession of a secured asset — can file an application under Section 17 before the DRT.',
  },
  {
    icon: HandCoins,
    title: 'The Pre-Deposit Rule in SARFAESI Appeals',
    excerpt:
      'An appeal to the DRAT under Section 18 requires a borrower to pre-deposit 50% of the debt due, which the Tribunal may reduce to not less than 25% for reasons recorded in writing.',
  },
  {
    icon: Banknote,
    title: 'Recovering Dues on a Dishonoured Cheque',
    excerpt:
      'Beyond criminal liability under Section 138 NI Act, a dishonoured cheque can also support a civil recovery suit — the two remedies can often be pursued alongside each other.',
  },
]

export default function BankingRecoveryMattersPage() {
  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bankingRecoveryJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drtFaqJsonLd) }}
      />
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/#services"
            className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Services
          </Link>

          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                Banking &amp; Recovery
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              DRT Lawyer — Banking, Recovery &amp;{' '}
              <em className="text-gold-gradient">Negotiable Instruments Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Representation before the{' '}
              <strong className="font-semibold text-navy-900 dark:text-cream">
                Debts Recovery Tribunal (DRT), Lucknow
              </strong>{' '}
              — whose jurisdiction covers Lucknow, Ghaziabad, Noida, Greater
              Noida, and Agra — for banks, financial institutions, borrowers,
              and guarantors in SARFAESI, loan recovery, and cheque bounce
              disputes.
            </p>
          </div>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Loan defaults and recovery proceedings move on strict timelines
              — a demand notice under the SARFAESI Act, an Original
              Application before the Debts Recovery Tribunal (DRT), or a
              cheque bounce notice each carry their own limitation periods and
              procedural requirements. Sumanjari &amp; Co. Advocates advises
              and represents banks, financial institutions, borrowers, and
              guarantors through each stage of the process.
            </p>
            <p>
              We handle recovery and enforcement matters before the DRT,
              Lucknow — whose territorial jurisdiction extends across
              Lucknow, Ghaziabad, Gautam Budh Nagar (Noida and Greater Noida),
              Agra, and much of western and central Uttar Pradesh — appeals
              before the DRAT, Allahabad, cheque bounce proceedings under the
              Negotiable Instruments Act, and, where necessary, writ
              challenges before the Allahabad High Court, Lucknow Bench.
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Forums We Appear Before
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {jurisdiction.map(({ title, blurb }) => (
                <div
                  key={title}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <h3 className="mb-2 font-display text-base font-bold text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {blurb}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Banking &amp; Recovery Matters We Handle
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {matters.map(({ icon: Icon, title, points }) => (
                <div
                  key={title}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <ul className="space-y-2">
                    {points.map((point) => (
                      <li key={point} className="flex gap-2.5 text-sm text-navy-700/85 dark:text-cream/60">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                        <span className="font-body leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-cream">
                <MessageSquareWarning className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                Key Issues We Advise On
              </h2>
              <ul className="space-y-3">
                {whyIssues.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-body text-navy-800 dark:text-cream/75">
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-cream">
                <ShieldCheck className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                Our Approach
              </h2>
              <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
                We begin with a confidential review of the loan documents,
                notices, or order in question, followed by clear advice on
                your position and the timelines that apply — SARFAESI and DRT
                matters move on tight limitation periods, so early action
                matters. We represent you before the DRT, Lucknow, and are
                fully prepared to carry the matter in appeal before the DRAT,
                Allahabad, or in writ jurisdiction before the Allahabad High
                Court, Lucknow Bench.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                The Way <em className="text-gold-gradient">We Work</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                A clear, structured process from first consultation to resolution.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-[10%] right-[10%] top-[22px] hidden h-px bg-gold-500/25 lg:block" aria-hidden />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {workSteps.map(({ icon: Icon, title, description }, index) => (
                  <div key={title} className="relative flex flex-col items-center gap-4 text-center">
                    <div className="glass-card z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/40">
                      <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                    </div>
                    <div className="glass-card w-full flex-1 rounded-sm border border-gold-500/20 p-5 dark:border-gold-500/15">
                      <span className="mb-1 block font-caps text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400">
                        Step {index + 1}
                      </span>
                      <h3 className="mb-1.5 font-display text-lg font-bold text-navy-900 dark:text-cream">
                        {title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Banking &amp; Recovery <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our banking
                and recovery practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {bankingInsights.map(({ icon: Icon, title, excerpt }) => (
                <div
                  key={title}
                  className="glass-card card-glow flex flex-col rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold leading-snug text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {excerpt}
                  </p>
                  <a
                    href="/#contact"
                    className="font-caps text-xs uppercase tracking-widest text-gold-700 transition-opacity hover:opacity-75 dark:text-gold-400"
                  >
                    Ask Us About This →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Recovery or SARFAESI Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your DRT, SARFAESI, loan recovery, or
              cheque bounce matter — serving clients across Lucknow,
              Ghaziabad, Noida, Greater Noida, and Agra, and practising before
              the Debts Recovery Tribunal, the DRAT, Allahabad, and the
              Allahabad High Court, Lucknow Bench.
            </p>
            <a href="/#contact" className="btn-gold inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900">
              Consult Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
