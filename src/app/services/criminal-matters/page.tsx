import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  FileX,
  KeyRound,
  Gavel,
  Scale,
  Banknote,
  ShieldAlert,
  Laptop,
  Landmark,
  ShieldCheck,
  MessageSquareWarning,
  Siren,
  ClipboardX,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Criminal Lawyer in Lucknow | Bail, FIR Quashing & Trial Defence',
  description:
    'Sumanjari & Co. Advocates provides strategic criminal defence in Lucknow — bail and anticipatory bail, FIR quashing, trial representation, appeals, cheque bounce, and 498A matters before the District & Sessions Courts and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Criminal Lawyer Lucknow',
    'Criminal Advocate Lucknow',
    'Bail Lawyer Lucknow',
    'Anticipatory Bail Lawyer Lucknow',
    'FIR Quashing Lawyer Lucknow',
    'Criminal Defence Lawyer Lucknow',
    'Cheque Bounce Lawyer Lucknow',
    'Section 138 NI Act Lawyer Lucknow',
    '498A Lawyer Lucknow',
    'Criminal Appeal Lawyer Lucknow',
    'BNSS Lawyer Lucknow',
    'Cybercrime Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/criminal-matters',
  },
  openGraph: {
    title: 'Criminal Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Strategic criminal defence, bail, FIR quashing, trial representation, and appellate advocacy before the District & Sessions Courts and the Allahabad High Court, Lucknow Bench.',
    url: '/services/criminal-matters',
  },
}

const criminalMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Criminal Matters',
  url: `${SITE_URL}/services/criminal-matters`,
  description:
    'Strategic criminal defence covering FIR quashing, bail and anticipatory bail, trial representation, appeals and revisions, cheque bounce, domestic violence and 498A matters, and cybercrime, before the District & Sessions Courts and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Criminal Legal Services',
}

const matters = [
  {
    icon: FileX,
    title: 'FIR & Chargesheet Quashing Petitions',
    points: [
      'Petitions under Section 528 BNSS (the inherent powers provision, formerly Section 482 CrPC) to quash an FIR or criminal proceeding',
      'Quashing on grounds of abuse of process, or on the basis of a settlement in compoundable and certain non-compoundable offences',
      'Challenging a chargesheet and the order taking cognizance after investigation, with the chargesheet and cognizance order placed on record as required by the Allahabad High Court',
    ],
  },
  {
    icon: KeyRound,
    title: 'Bail Matters',
    points: [
      'Regular bail applications before the Magistrate, Sessions Court, and High Court',
      'Anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC)',
      'Interim bail and applications for suspension of sentence pending appeal',
    ],
  },
  {
    icon: Gavel,
    title: 'Criminal Trial Defence',
    points: [
      'Defence representation in Sessions and Magistrate Court trials',
      'Cross-examination strategy, evidence review, and witness preparation',
    ],
  },
  {
    icon: Scale,
    title: 'Criminal Appeals & Revisions',
    points: [
      'Appeals against conviction, acquittal, or sentence before the Sessions Court and High Court',
      'Revision petitions against interlocutory and other orders passed during trial',
    ],
  },
  {
    icon: Banknote,
    title: 'Cheque Bounce Cases (Section 138 NI Act)',
    points: [
      'Complaints for dishonour of cheque, including statutory notice and follow-up proceedings',
      'Defence in cheque bounce prosecutions, and negotiated compounding of the offence',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Domestic Violence & 498A Matters',
    points: [
      'Representation in complaints of cruelty under Section 85 BNS (formerly Section 498A IPC)',
      'Anticipatory bail, quashing, and defence in matrimonial cruelty proceedings',
    ],
  },
  {
    icon: Laptop,
    title: 'Cybercrime & Other Offences',
    points: [
      'Representation in cybercrime complaints, including online fraud and harassment',
      'Defence and prosecution support in white-collar and other special-statute offences',
    ],
  },
]

const whyIssues = [
  'Arrest, police remand, and judicial custody',
  'Grant of bail — regular, anticipatory, and interim',
  'Quashing of FIRs and criminal proceedings',
  'Trial strategy and defence in serious offences',
  'Cheque bounce and other financial offence complaints',
  'Appeals, revisions, and suspension of sentence',
]

const jurisdiction = [
  {
    title: 'Police Stations & Investigation Stage',
    blurb:
      'Advice from the point of an FIR or complaint, including representation on arrest, remand, and custody applications.',
  },
  {
    title: 'Magistrate & Sessions Courts, Lucknow',
    blurb:
      'Bail applications and trial representation before the Magistrate and Sessions Courts.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'FIR quashing, anticipatory bail, appeals, and revisions, arguing from our chambers at Block D-311.',
  },
  {
    title: 'Special & Fast-Track Courts',
    blurb:
      'Matters before special courts constituted for NI Act, NDPS, and other special-statute offences.',
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
    icon: Siren,
    title: 'In-Depth Case Review',
    description:
      'Every document and detail is carefully examined so we can assess the strengths, risks, and best possible legal routes for you.',
  },
  {
    icon: Scale,
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
    icon: Gavel,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
  },
]

const criminalInsights = [
  {
    icon: ShieldAlert,
    title: 'What to Do If You Are Arrested',
    excerpt:
      'You have the right to know the grounds of arrest, the right to consult a lawyer of your choice, and the right to remain silent — exercising these rights early can shape the entire case.',
  },
  {
    icon: KeyRound,
    title: 'Regular vs. Anticipatory Bail',
    excerpt:
      'Anticipatory bail under Section 482 BNSS protects a person from arrest before it happens, while regular bail is sought after arrest — the forum and approach differ with the stage of the case.',
  },
  {
    icon: FileX,
    title: 'When Can an FIR Be Quashed?',
    excerpt:
      'The Allahabad High Court can quash an FIR under Section 528 BNSS where continuing the proceedings would be an abuse of process, including personal or matrimonial disputes resolved through compromise — though grave offences such as murder, rape, or dacoity are not ordinarily quashed even after a settlement.',
  },
  {
    icon: Banknote,
    title: 'Cheque Bounce Under Section 138 NI Act',
    excerpt:
      'A dishonoured cheque can lead to criminal liability once a valid legal demand notice is issued and payment is not made within the statutory period, with scope for compounding the offence.',
  },
  {
    icon: ClipboardX,
    title: 'Chargesheet Quashing Under Section 528 BNSS',
    excerpt:
      'Once a chargesheet is filed and the Magistrate takes cognizance, the chargesheet and cognizance order can be challenged under Section 528 BNSS — the Supreme Court has held that Article 226 is not the route once cognizance is taken, and the Allahabad High Court requires the chargesheet and cognizance order to be placed on record for the petition to be maintainable.',
  },
]

const criminalFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What should I do if I am arrested?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You have the right to know the grounds of arrest, the right to consult a lawyer of your choice, and the right to remain silent — exercising these rights early can shape the entire case.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between regular and anticipatory bail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anticipatory bail under Section 482 BNSS protects a person from arrest before it happens, while regular bail is sought after arrest — the forum and approach differ with the stage of the case.',
      },
    },
    {
      '@type': 'Question',
      name: 'When can an FIR be quashed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Allahabad High Court can quash an FIR under Section 528 BNSS where continuing the proceedings would be an abuse of process, including personal or matrimonial disputes resolved through compromise — though grave offences such as murder, rape, or dacoity are not ordinarily quashed even after a settlement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I face criminal liability for a bounced cheque?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dishonoured cheque can lead to criminal liability under Section 138 of the Negotiable Instruments Act once a valid legal demand notice is issued and payment is not made within the statutory period, with scope for compounding the offence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a chargesheet be quashed under Section 528 BNSS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Once a chargesheet is filed and the Magistrate takes cognizance, the chargesheet and cognizance order can be challenged under Section 528 BNSS. The Supreme Court has held that Article 226 is not the route once cognizance is taken, and the Allahabad High Court requires the chargesheet and cognizance order to be placed on record for the petition to be maintainable.',
      },
    },
  ],
}

export default async function CriminalMattersPage() {
  const criminalBlogPosts = await getBlogPostsByCategory('Criminal Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(criminalMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(criminalFaqJsonLd) }}
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
                Criminal Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Criminal <em className="text-gold-gradient">Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Strategic criminal defence — bail, FIR quashing, trial
              representation, and appellate advocacy — before the District
              &amp; Sessions Courts and the Allahabad High Court, Lucknow
              Bench.
            </p>
            <a
              href="/#contact"
              className="btn-gold mt-8 inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900"
            >
              Consult Now
            </a>
          </div>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              A criminal case can move quickly, and the steps taken in the
              first few days — at the time of an FIR, arrest, or notice —
              often shape the outcome. Sumanjari &amp; Co. Advocates advises
              and represents individuals from the investigation stage through
              trial, appeal, and revision, under the Bharatiya Nyaya Sanhita
              (BNS), the Bharatiya Nagarik Suraksha Sanhita (BNSS), and the
              Bharatiya Sakshya Adhiniyam (BSA).
            </p>
            <p>
              Whether the matter involves an FIR you wish to have quashed, a
              bail application, a criminal trial, or an appeal against
              conviction or acquittal, we prepare each case with careful
              attention to evidence, procedure, and strategy — and represent
              you with the same care before the District &amp; Sessions
              Courts and in appeal before the Allahabad High Court, Lucknow
              Bench.
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
              Types of Criminal Matters We Handle
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
                We move quickly once instructed — reviewing the FIR, charge
                sheet, or notice, and advising you clearly on your rights and
                the options available at that stage. We prepare bail
                applications without delay, build a considered defence
                strategy for trial, and are fully prepared to pursue quashing,
                appeal, or revision before the Allahabad High Court, Lucknow
                Bench, where warranted.
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
                Criminal Law <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our criminal
                law practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {criminalInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <ServiceBlogs
            posts={criminalBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Criminal Matters Blogs"
            description="Short reads on bail, criminal defence, and trial procedure."
            viewAllHref={`/blog?category=${encodeURIComponent('Criminal Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Criminal Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your FIR, bail, trial, or appeal —
              practising before the District &amp; Sessions Courts and the
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
