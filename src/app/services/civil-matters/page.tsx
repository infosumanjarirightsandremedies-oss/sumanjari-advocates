import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Banknote,
  ShieldCheck,
  Landmark,
  Gavel,
  FileWarning,
  Home,
  Scale,
  MessageSquareWarning,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const civilLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const civilTeam = ['aishwarya-pandey', 'akhilesh-yadav', 'prerna-yaduvanshi']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

function ConsultationActions({ className }: { className: string }) {
  return (
    <div className={`flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      <a href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-900 sm:px-8 sm:text-sm sm:tracking-widest">
        Consult Now
      </a>
      <a href={CHAMBER_TEL} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-500/40 px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-300 sm:px-6 sm:text-sm sm:tracking-widest">
        <Phone className="h-4 w-4 shrink-0" /> Call Now
      </a>
    </div>
  )
}

export const metadata: Metadata = {
  title: { absolute: 'Civil Advocate in Lucknow | Suits & Injunctions | Sumanjari' },
  description:
    'Civil advocate and lawyer in Lucknow for recovery suits, injunctions, property disputes and civil appeals. Civil practice led by Adv. Jitendra Tiwari.',
  keywords: [
    'Civil Lawyer Lucknow',
    'Civil Litigation Lawyer Lucknow',
    'Civil Advocate Lucknow',
    'Recovery Suit Lawyer Lucknow',
    'Injunction Lawyer Lucknow',
    'Civil Appeal Lawyer Lucknow',
    'Decree Execution Lawyer Lucknow',
    'Contract Dispute Lawyer Lucknow',
    'Partition Suit Lawyer Lucknow',
    'Easement Dispute Lawyer Lucknow',
    'CPC Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/civil-advocate',
  },
  openGraph: {
    title: 'Civil Advocate & Lawyer in Lucknow | Sumanjari & Co.',
    description:
      'Representation in civil suits, recovery of money, injunctions, contractual disputes, execution proceedings, and civil appeals before the District Courts and the Allahabad High Court, Lucknow Bench.',
    url: '/services/civil-advocate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Civil Advocate & Lawyer in Lucknow | Sumanjari & Co.',
    description: 'Civil suits, recovery, injunctions, property disputes and appeals in Lucknow. Civil practice led by Adv. Jitendra Tiwari.',
  },
}

const civilMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Civil Advocate & Lawyer in Lucknow',
  url: `${SITE_URL}/services/civil-advocate`,
  description:
    'Representation in civil suits, recovery of money, injunctions and declaratory relief, contractual disputes, execution proceedings, easementary and partition disputes, and civil appeals, before the District Courts and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Civil Litigation Legal Services',
}

const civilFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I get an interim injunction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A temporary injunction under Order XXXIX Rules 1 and 2 of the Code of Civil Procedure requires showing a prima facie case, that the balance of convenience favours the applicant, and that irreparable injury would result if the injunction is refused.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the limitation period for a civil suit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The limitation period depends on the nature of the claim — for example, a suit for specific performance must be filed within three years under Article 54 of the Limitation Act, 1963, while suits not covered by a specific article generally carry a three-year period under the residuary Article 113.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is a civil decree executed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An executable decree may be enforced under Order XXI of the Code of Civil Procedure, subject to any stay or legal restriction. An appeal does not by itself stay execution. Available modes may include attachment and sale of the judgment-debtor’s property, depending on the decree and applicable law.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a first appeal and a second appeal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A first appeal under Section 96 CPC lies against a trial court’s decree and can examine both facts and law, while a second appeal under Section 100 CPC before the High Court is confined to substantial questions of law.',
      },
    },
  ],
}

const matters = [
  {
    icon: Banknote,
    title: 'Civil Suits & Recovery of Money',
    points: [
      'Recovery of dues under contracts, loans, and business dealings',
      'Suits for accounts and recovery of outstanding payments',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Injunction & Declaratory Suits',
    points: [
      'Temporary injunctions under Order XXXIX Rules 1 and 2 CPC',
      'Permanent injunction and declaratory relief under the Specific Relief Act, 1963',
    ],
  },
  {
    icon: Landmark,
    title: 'Execution & Recovery Proceedings',
    points: [
      'Execution of decrees under Order XXI CPC',
      'Attachment and sale of property, and other modes of execution, to satisfy a decree',
    ],
  },
  {
    icon: Gavel,
    title: 'Civil Appellate Work',
    points: [
      'First appeals under Section 96 CPC against a trial court’s decree',
      'Second appeals under Section 100 CPC before the High Court on substantial questions of law',
      'Civil revisions under Section 115 CPC',
    ],
  },
  {
    icon: FileWarning,
    title: 'Contractual Disputes',
    points: [
      'Breach of contract claims and suits for damages',
      'Suits for specific performance of agreements to sell and other contracts',
    ],
  },
  {
    icon: Home,
    title: 'Easementary, Partition & Property Rights Disputes',
    points: [
      'Easementary rights and right-of-way disputes',
      'Partition suits and boundary or encroachment disputes',
    ],
  },
]

const whyIssues = [
  'Recovery of money due under contracts, loans, and business dealings',
  'Breach of contract and specific performance claims',
  'Injunctions to protect possession or prevent an illegal or threatened act',
  'Partition and easementary rights disputes',
  'Execution of decrees and enforcement of court orders',
  'Civil appeals and revisions before the High Court',
]

const jurisdiction = [
  {
    title: 'Civil Judge & District Courts, Lucknow',
    blurb:
      'Trial of civil suits, recovery proceedings, and applications for interim relief before the Civil Judge (Junior/Senior Division) and District Judge.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'First and second appeals, civil revisions, and writ matters arising from civil proceedings, argued from our chambers at Block D-311.',
  },
  {
    title: 'Execution Courts',
    blurb:
      'Execution proceedings under Order XXI CPC to enforce decrees once they become final.',
  },
  {
    title: 'Mediation & ADR Centres',
    blurb:
      'Negotiated and mediated resolution of civil disputes, in and outside court, where both parties are open to settlement.',
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
    icon: ScrollText,
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

const civilInsights = [
  {
    icon: ShieldCheck,
    title: 'How Do I Get an Interim Injunction?',
    excerpt:
      'A temporary injunction under Order XXXIX Rules 1 and 2 CPC requires showing a prima facie case, that the balance of convenience favours you, and that irreparable injury would result if it is refused.',
  },
  {
    icon: ScrollText,
    title: 'What Is the Limitation Period for a Civil Suit?',
    excerpt:
      'It depends on the claim — a suit for specific performance must be filed within three years under Article 54 of the Limitation Act, 1963, while suits not covered by a specific article generally carry a three-year period under the residuary Article 113.',
  },
  {
    icon: Landmark,
    title: 'How Is a Civil Decree Executed?',
    excerpt:
      'An executable decree may be enforced under Order XXI CPC, subject to any stay or legal restriction. An appeal does not by itself stay execution. Attachment and sale of property or other modes depend on the decree and applicable law.',
  },
  {
    icon: Gavel,
    title: 'First Appeal vs. Second Appeal',
    excerpt:
      'A first appeal under Section 96 CPC examines both facts and law, while a second appeal under Section 100 CPC before the High Court is confined to substantial questions of law.',
  },
]

export default async function CivilMattersPage() {
  const civilBlogPosts = getBlogPostsByCategory('Civil Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(civilMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(civilFaqJsonLd) }}
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

          <div className="mb-12 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                Civil Litigation
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Civil Advocate &amp; Lawyer <em className="text-gold-gradient">in Lucknow</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Sumanjari &amp; Co. Advocates provides civil advocate and lawyer
              services in Lucknow for civil suits, recovery of money, injunctions,
              contractual disputes, and civil appeals before the District
              Courts and the Allahabad High Court, Lucknow Bench.
            </p>
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {civilLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {civilLead.img && (
                  <Image src={civilLead.img} alt={civilLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: civilLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Civil Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{civilLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{civilLead.role}</p>
                <Link href={`/team/${civilLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <section className="mb-16" aria-labelledby="civil-team">
            <h2 id="civil-team" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Civil Law Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads our civil practice, supported by
              Adv. Aishwarya Pandey and Adv. Akhilesh Yadav, whose practice areas
              include family and matrimonial matters. Adv. Prerna Yaduvanshi
              handles civil and matrimonial matters in Delhi. Each profile below
              sets out the advocate&apos;s individual practice areas and location.
            </p>
            <TeamCarousel members={civilTeam} label="Civil law team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Civil disputes — whether a recovery claim, a contractual
              disagreement, a partition among family members, or a dispute
              over possession — are governed by the Code of Civil Procedure,
              1908, and depend heavily on documentation, timelines, and
              procedural strategy. Sumanjari &amp; Co. Advocates advises and
              represents clients through each stage, from a legal notice and
              the drafting of pleadings to trial, execution, and appeal.
            </p>
            <p>
              We handle civil suits and recovery proceedings before the Civil
              Judge and District Courts, Lucknow, execution of decrees, and
              civil appeals and revisions before the Allahabad High Court,
              Lucknow Bench.
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
              Types of Civil Matters We Handle
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
                We begin with a confidential review of the facts and
                documents, often followed by a legal notice where appropriate,
                and clear advice on the relief available and the timelines
                that apply. We draft pleadings with care, seek interim relief
                where warranted, and represent you through trial, execution,
                and — where necessary — appeal before the Allahabad High
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
                Civil Litigation <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our civil
                litigation practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {civilInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <section aria-labelledby="civil-case-preparation" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="civil-case-preparation" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">Before Filing a Civil Suit in Lucknow</h2>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Identify the claim, court and limitation period</h3>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">A recovery suit, declaration, partition claim and injunction do not follow an identical filing route. We review the cause of action, property location, claim value, court fees and limitation before recommending a civil court, commercial court or contractual arbitration. Do not assume that sending a legal notice extends the time to sue. Urgent interim relief requires evidence of the threatened harm and remains subject to the court&apos;s assessment.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Documents for your first consultation</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring the agreement or title documents, payment records, notices and delivery proofs, relevant messages, previous pleadings and orders, and a dated chronology. For an existing decree, include its certified copy and available information about the judgment-debtor&apos;s assets; execution may be available unless stayed and need not always await the end of every appeal. For title and possession issues, also see our <Link href="/services/property-land-matters" className="text-gold-700 underline dark:text-gold-400">property and land dispute practice</Link>.</p>
          </section>

          <ServiceBlogs
            posts={civilBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Civil Matters Blogs"
            description="Short reads on the practical side of civil suits, recovery, and appeals."
            viewAllHref={`/blog?category=${encodeURIComponent('Civil Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Civil Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your recovery suit, injunction,
              contractual dispute, or civil appeal — practising before the
              District Courts and the Allahabad High Court, Lucknow Bench.
            </p>
            <a href="/#contact" className="btn-gold inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900">
              Consult Now
            </a>
          </div>
        </div>
      </section>

      <FirmCredentials />
      <Footer />
    </main>
  )
}
