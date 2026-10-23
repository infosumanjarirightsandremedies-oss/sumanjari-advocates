import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  ShieldHalf,
  Mountain,
  Gavel,
  Scale,
  Landmark,
  ShieldCheck,
  Banknote,
  ClipboardList,
  MessageSquareWarning,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { aftMiningStages, aftMiningStatutes, aftMiningToc } from '@/lib/guides/aftMiningLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const PAGE_PATH = '/services/armed-forces-tribunal-mining-lawyer-lucknow'
const aftMiningLead = teamMembers.find((member) => member.slug === 'abhishek-mishra')
const aftMiningTeam = ['jitendra-tiwari', 'aditya-narayan-shukla', 'vinod-arya']
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
  title: { absolute: 'Armed Forces Tribunal & Mining Lawyer in Lucknow | Sumanjari' },
  description:
    'Armed Forces Tribunal & mining lawyer in Lucknow: disability pension, discharge and court-martial appeals before the AFT, Lucknow Bench, and mining lease, royalty and illegal-mining disputes.',
  keywords: [
    'Armed Forces Tribunal Lawyer Lucknow',
    'AFT Lucknow Bench Advocate',
    'Disability Pension Lawyer Lucknow',
    'Court Martial Appeal Lawyer',
    'Mining Lawyer Lucknow',
    'Mining Lease Dispute Advocate UP',
    'Mining Royalty Lawyer Lucknow',
    'Defence Pension Advocate Lucknow',
  ],
  alternates: {
    canonical: PAGE_PATH,
  },
  openGraph: {
    title: 'Armed Forces Tribunal & Mining Lawyer in Lucknow | Sumanjari & Co.',
    description:
      'Disability pension, discharge and court-martial appeals before the Armed Forces Tribunal, Lucknow Bench, and mining lease, royalty and illegal-mining disputes in Uttar Pradesh.',
    url: PAGE_PATH,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Armed Forces Tribunal & Mining Lawyer in Lucknow',
    description: 'Disability pension, discharge, court-martial appeals, and mining lease and royalty disputes in Lucknow.',
  },
}

const aftMiningJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Armed Forces Tribunal & Mining Lawyer in Lucknow',
  url: `${SITE_URL}${PAGE_PATH}`,
  description:
    'Representation in disability and family pension, discharge, dismissal and court-martial appeals before the Armed Forces Tribunal, Lucknow Bench, and in mining lease, royalty, dead-rent and illegal-mining disputes in Uttar Pradesh.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Armed Forces Tribunal & Mining Legal Services',
}

const aftMiningBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Armed Forces Tribunal & Mining Lawyer in Lucknow', item: `${SITE_URL}${PAGE_PATH}` },
  ],
}

const jurisdiction = [
  {
    title: 'Armed Forces Tribunal, Lucknow Bench',
    blurb: 'Disability and family pension, promotion, discharge, dismissal, and appeals against court-martial findings and sentences.',
  },
  {
    title: 'Mining Tribunal & Revenue Authorities',
    blurb: 'Mining lease grant, renewal and cancellation disputes, royalty and dead-rent assessment, and illegal-mining complaints before the Tehsildar, SDM and Director of Geology & Mining.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb: 'Writ challenges to AFT and mining-authority orders, arguing from our chambers at Block D-311.',
  },
  {
    title: 'Supreme Court of India',
    blurb: 'Appeals under Section 30/31 of the AFT Act and special leave petitions against High Court orders in mining matters.',
  },
]

const matters = [
  {
    icon: ShieldHalf,
    title: 'Disability & Family Pension',
    points: [
      'Challenges to Release and Review Medical Board findings on attributability, aggravation, and disability percentage',
      'Broad-banding entitlement and arrears recovery for serving and retired personnel',
    ],
  },
  {
    icon: Gavel,
    title: 'Discharge, Dismissal & Court-Martial Appeals',
    points: [
      'Challenges to premature retirement, discharge, and dismissal orders',
      'Appeals against the findings and sentence of a General, Summary General, or Summary Court Martial',
    ],
  },
  {
    icon: ClipboardList,
    title: 'Promotion & Seniority Disputes',
    points: [
      'Representation in promotion board, ACR, and seniority disputes for defence personnel',
    ],
  },
  {
    icon: Mountain,
    title: 'Mining Lease Grant, Renewal & Cancellation',
    points: [
      'Challenges to refusal, cancellation, or non-renewal of a mining lease',
      'Representation in e-auction and minor-mineral concession disputes under the UP Rules',
    ],
  },
  {
    icon: Banknote,
    title: 'Royalty, Dead-Rent & Illegal Mining',
    points: [
      'Challenges to royalty and dead-rent assessment orders',
      'Defence and complaints in illegal-mining proceedings and penalty notices',
    ],
  },
  {
    icon: Scale,
    title: 'Environmental & Writ Matters',
    points: [
      'Disputes over environmental-clearance conditions attached to mining operations',
      'Writ petitions at the Lucknow Bench where no adequate statutory remedy exists',
    ],
  },
]

const aftMiningInsights = [
  {
    icon: ShieldHalf,
    title: 'What matters does the Armed Forces Tribunal handle?',
    excerpt:
      'The AFT handles service matters of Army, Navy and Air Force personnel — disability and family pension, promotion, discharge, and dismissal — and appeals against the findings or sentence of a court martial, under Sections 14 and 15 of the Armed Forces Tribunal Act, 2007.',
  },
  {
    icon: ClipboardList,
    title: 'Is a statutory complaint mandatory before filing an OA?',
    excerpt:
      'In most service matters, yes. Section 21 of the Act ordinarily requires a representation to the competent authority first, and the Original Application can be filed only after it is rejected or the prescribed period lapses without a decision.',
  },
  {
    icon: Landmark,
    title: 'Where is the AFT Bench for Uttar Pradesh cases?',
    excerpt:
      'The Lucknow Bench of the Armed Forces Tribunal has jurisdiction over service matters arising in Uttar Pradesh and Uttarakhand. Appeals against its orders lie to the Supreme Court under Sections 30 and 31 of the Act.',
  },
  {
    icon: Mountain,
    title: 'Which forum hears a mining lease cancellation challenge?',
    excerpt:
      'Depending on the order, it may go before the state Mining Tribunal, in revision to the Central Government under the Mines and Minerals (Development and Regulation) Act, 1957, or as a writ petition before the Allahabad High Court, Lucknow Bench.',
  },
  {
    icon: Banknote,
    title: 'Can a royalty or dead-rent assessment be challenged?',
    excerpt:
      'Yes, an assessment order can be challenged through the statutory appellate route under the MMDR Act or the applicable UP Minor Mineral Rules; the correct forum depends on the mineral and the authority that passed the order.',
  },
  {
    icon: ScrollText,
    title: 'Do you handle disability-pension re-assessment cases?',
    excerpt:
      'Yes, including challenges to Release and Review Medical Board findings on attributability, aggravation, and disability percentage, and claims for broad-banding where applicable.',
  },
]

const aftMiningFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: aftMiningInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: excerpt,
    },
  })),
}

export default async function ArmedForcesTribunalMiningMattersPage() {
  const aftMiningBlogPosts = getBlogPostsByCategory('Armed Forces Tribunal & Mining Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aftMiningJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aftMiningFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aftMiningBreadcrumbJsonLd) }}
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
                  AFT &amp; Mining Law
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
                Armed Forces Tribunal &amp; Mining Lawyer <em className="text-gold-gradient">in Lucknow</em>
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Representation for defence personnel in disability pension, discharge, and court-martial appeals before the Armed Forces Tribunal, Lucknow Bench, and for lessees and complainants in mining lease, royalty, and illegal-mining disputes across Uttar Pradesh.
              </p>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
                Most service matters require a statutory representation before the Tribunal can be approached, and most mining disputes turn on the lease terms and the authority that passed the impugned order. The eight stages below explain how each type of case actually proceeds.
              </p>
              <ServiceStats service="armedForcesTribunal" />
              <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {aftMiningLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {aftMiningLead.img && (
                  <Image src={aftMiningLead.img} alt={aftMiningLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: aftMiningLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{aftMiningLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{aftMiningLead.role}</p>
                <Link href={`/team/${aftMiningLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={aftMiningToc} />

          <section className="mb-16" aria-labelledby="aft-mining-team">
            <h2 id="aft-mining-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Armed Forces Tribunal &amp; Mining Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Abhishek Mishra leads this practice, supported by Adv. Jitendra Tiwari,
              Adv. Aditya Narayan Shukla and Adv. Vinod Arya. Each profile below
              sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={aftMiningTeam} label="Armed Forces Tribunal and mining team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Serving and retired defence personnel often need to challenge a
              discharge order, a disability pension assessment, or a
              court-martial finding, while mining lessees and complainants deal
              with lease disputes, royalty demands, and illegal-mining
              notices. Sumanjari &amp; Co. Advocates advises and represents
              clients in both areas before the Armed Forces Tribunal, Lucknow
              Bench, the Mining Tribunal, and the Allahabad High Court.
            </p>
            <p>
              Each matter is assessed on its own facts and record — a service
              record and medical board file call for a different approach
              than a mining lease and royalty assessment — and we explain the
              applicable procedure, limitation, and realistic options before
              any application is drafted.
            </p>
          </div>

          <div id="forums" className="mb-16 scroll-mt-28">
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

          <StatuteTable
            id="statutory-framework"
            heading="Statutory Framework"
            intro="The principal statutes governing a service matter before the Armed Forces Tribunal, Lucknow Bench, and a mining dispute arising in Uttar Pradesh."
            rows={aftMiningStatutes}
          />

          <div id="matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Matters We Handle
            </h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

          <GuideStages
            id="aft-mining-procedure"
            heading="How a Case Proceeds: Stage 1 to Stage 8"
            intro="How a service matter moves through the Armed Forces Tribunal, Lucknow Bench, or a mining dispute moves through the Mining Tribunal and the Allahabad High Court, Lucknow Bench."
            stages={aftMiningStages}
          />

          <section className="mb-16 grid gap-10 scroll-mt-28 md:grid-cols-2" id="documents" aria-labelledby="aft-mining-consultation">
            <div>
              <h2 id="aft-mining-consultation" className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-cream">
                <MessageSquareWarning className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                Documents to Bring
              </h2>
              <ul className="space-y-3">
                {[
                  'Service record, PPO, or discharge certificate',
                  'Medical board proceedings, for disability pension matters',
                  'Mining lease deed and royalty or dead-rent assessment orders',
                  'Representation copies with proof of service',
                  'The impugned order or show-cause notice',
                ].map((item) => (
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
              <p className="mb-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
                Ask about the proposed scope of work, professional fees,
                filing expenses, and who will appear. Related revenue and
                property questions are covered in our{' '}
                <Link href="/services/property-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">property law practice</Link>.
              </p>
              <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
                This page provides general information, not advice on an
                individual case. Relief depends on the facts, applicable law,
                and the forum concerned; no result or timeline is guaranteed.
              </p>
            </div>
          </section>

          <div id="faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Armed Forces Tribunal &amp; Mining: <em className="text-gold-gradient">FAQs</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us about defence-service
                and mining matters in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {aftMiningInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={aftMiningBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Armed Forces Tribunal & Mining Blogs"
            description="Short reads on defence-service pension matters and mining lease disputes."
            viewAllHref={`/blog?category=${encodeURIComponent('Armed Forces Tribunal & Mining Matters')}`}
          />

          <div id="contact" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing an AFT or Mining Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your pension, discharge, court-martial
              appeal, or mining lease dispute — practising before the Armed
              Forces Tribunal, Lucknow Bench and the Allahabad High Court.
            </p>
            <ConsultationActions className="flex justify-center" />
          </div>
        </div>
      </section>

      <FirmCredentials />
      <Footer />
    </main>
  )
}
