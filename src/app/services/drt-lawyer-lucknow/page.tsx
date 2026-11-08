import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Landmark,
  ShieldAlert,
  Gavel,
  Home,
  AlertTriangle,
  ShieldCheck,
  ScrollText,
  MapPin,
  FileCheck,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceSelection from '@/components/ServiceSelection'
import { serviceSearchContent, withServiceSelectionFaq } from '@/lib/serviceSearch'
import LucknowChambers from '@/components/LucknowChambers'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import {
  drtLucknowStages,
  drtLucknowStatutes,
  drtLucknowToc,
  drtLucknowFaqs,
  drtLucknowBilingualFaqs,
} from '@/lib/guides/drtLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, LUCKNOW_SERVICE_LOCATION } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const searchContent = serviceSearchContent['drt-lawyer-lucknow']

const drtLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const drtTeam = ['shishir-pandey', 'aniket-bose', 'prerna-yaduvanshi']
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
  title: { absolute: searchContent.title },
  description: searchContent.description,
  keywords: [
    searchContent.attorneyKeyword,
    'DRT Lawyer Lucknow',
    'DRT Advocate Lucknow',
    'Debts Recovery Tribunal Advocate Lucknow',
    'DRT Lawyer Ghaziabad',
    'DRT Lawyer Noida',
    'DRT Lawyer Agra',
    'DRT Lawyer Meerut',
    'SARFAESI Lawyer Lucknow',
    'SARFAESI Section 17 Lawyer',
    'Bank Auction Stay Lawyer Lucknow',
    'DRAT Allahabad Appeal Lawyer',
    'DRT-II Lucknow Advocate',
  ],
  alternates: {
    canonical: '/services/drt-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRT Lawyer in Lucknow | SARFAESI & Bank Auction Stay',
    description: 'Urgent representation for borrowers, guarantors and lenders in DRT proceedings, SARFAESI possession and auction disputes, and DRAT appeals.',
  },
  openGraph: {
    title: 'DRT Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Legal assistance for borrowers, guarantors, banks and financial institutions in DRT proceedings, SARFAESI possession and auction disputes, and DRAT appeals.',
    url: '/services/drt-lawyer-lucknow',
  },
}

const drtServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  ...LUCKNOW_SERVICE_LOCATION,
  name: 'DRT Lawyer in Lucknow | Sumanjari & Co. Advocates',
  url: `${SITE_URL}/services/drt-lawyer-lucknow`,
  description:
    'Representation for banks, financial institutions, borrowers, and guarantors in Debts Recovery Tribunal proceedings, SARFAESI enforcement, bank auction disputes, and DRAT Allahabad appeals.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'City', name: 'Kanpur' },
    { '@type': 'City', name: 'Unnao' },
    { '@type': 'City', name: 'Hardoi' },
    { '@type': 'City', name: 'Sitapur' },
    { '@type': 'City', name: 'Ayodhya' },
    { '@type': 'City', name: 'Gorakhpur' },
    { '@type': 'City', name: 'Varanasi' },
    { '@type': 'City', name: 'Agra' },
  ],
  knowsAbout: [
    'Debts Recovery Tribunal (DRT)',
    'SARFAESI Act 2002',
    'RDB Act 1993',
    'Bank Auction Stay',
    'DRAT Appeals',
  ],
}

const drtFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ...drtLucknowFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
    ...drtLucknowBilingualFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  ],
}

const drtBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Banking & Recovery', item: `${SITE_URL}/services/banking-recovery-lawyer-lucknow` },
    { '@type': 'ListItem', position: 4, name: 'DRT Lawyer in Lucknow', item: `${SITE_URL}/services/drt-lawyer-lucknow` },
  ],
}

const toolkit = [
  {
    icon: ShieldAlert,
    title: 'SARFAESI Asset Protection',
    points: [
      'Auditing Section 13(2) 60-day demand notices against the RBI 90-day overdue norms',
      'Drafting Section 13(3A) statutory objections requiring a mandatory speaking order',
      'Challenging Section 14 DM/ACMM physical possession orders on defective 9-point affidavits',
      'Invoking the Section 31(i) statutory exemption for agricultural land collateral',
    ],
  },
  {
    icon: Gavel,
    title: 'Auction Defense & Securitisation Applications',
    points: [
      'Filing Section 17 Securitisation Applications before DRT Lucknow within the 45-day statutory window',
      'Enforcing Rule 8(6) and Rule 9(1) notice periods and challenging reserve-price valuation',
      'Protecting the borrower\'s redemption rights under Section 13(8) (Celir LLP v. Bafna Motors)',
    ],
  },
  {
    icon: Landmark,
    title: 'Contesting Section 19 Original Applications (RDB Act)',
    points: [
      'Drafting written statements, set-offs and counter-claims under Sections 19(6)-19(8) for wrongful interest debits',
      'Contesting Recovery Officer execution warrants and attachment of personal assets',
    ],
  },
  {
    icon: Home,
    title: 'Appellate & High Court Remedies',
    points: [
      'Section 18 SARFAESI appeals before DRAT Allahabad, including applications for reduction of the pre-deposit (from 50% down to 25% on financial hardship)',
      'Writ petitions under Article 226 before the Allahabad High Court, Lucknow Bench during DRT recesses or for a breach of natural justice',
    ],
  },
]

const jurisdiction = [
  {
    title: 'Debts Recovery Tribunal (DRT), Lucknow',
    blurb: 'Original Applications for loan recovery and SARFAESI Section 17 applications before the Tribunal.',
  },
  {
    title: 'Debts Recovery Appellate Tribunal (DRAT), Allahabad',
    blurb: 'Appeals under Section 20 of the Recovery of Debts and Bankruptcy Act and Section 18 of the SARFAESI Act, subject to appellate jurisdiction and deposit requirements.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb: 'Writ remedies under Articles 226 and 227 where statutory DRT or DRAT remedies are inadequate or unavailable.',
  },
]

const documentChecklist = [
  'Section 13(2) demand notice, with postal or courier tracking proof of service.',
  'Section 13(4) possession notice, or the e-auction/newspaper publication, with its date.',
  'Loan sanction letter, loan agreement and the current account/ledger statement.',
  'Title deeds and valuation reports for the mortgaged or hypothecated property.',
  'Any DRT summons, prior order, recovery certificate or DRAT appeal papers already on record.',
]

export default async function DrtLawyerLucknowPage() {
  const drtBlogPosts = getBlogPostsByCategory('Banking & Recovery Matters').then((posts) => posts.filter(
    (post) => /SARFAESI|DRT|tribunal|auction|possession|recovery/i.test(`${post.title} ${post.excerpt}`)
  ))

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drtServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withServiceSelectionFaq(drtFaqJsonLd, searchContent)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drtBreadcrumbJsonLd) }}
      />
      <Navbar />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Link
            href="/services/banking-recovery-lawyer-lucknow"
            className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Banking &amp; Recovery
          </Link>

          <div className="mb-12 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-12 bg-gold-500" />
                <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                  DRT &amp; SARFAESI Defense
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
                DRT Lawyer &amp; Advocate in Lucknow <em className="text-gold-gradient">(Debt Recovery Tribunal &amp; SARFAESI Defense)</em>
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Strategic legal representation before the{' '}
                <strong className="font-semibold text-navy-900 dark:text-cream">Debts Recovery Tribunal (DRT), Lucknow</strong>{' '}
                and the DRAT, Allahabad, for borrowers, guarantors and secured creditors — protection against illegal
                possession, bank e-auctions, and arbitrary NPA classifications.
              </p>
              <ServiceStats service="banking" />
              <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {drtLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {drtLead.img && (
                  <Image src={drtLead.img} alt={drtLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: drtLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">DRT &amp; SARFAESI Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{drtLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{drtLead.role}, {drtLead.credentials} — 8+ years of High Court &amp; DRT practice</p>
                <Link href={`/team/${drtLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={drtLucknowToc} />

          <section className="mb-16" aria-labelledby="drt-team">
            <h2 id="drt-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our DRT &amp; SARFAESI Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari (Director, B.A. LL.B. Hons.) leads our DRT and SARFAESI practice, supported by
              Adv. Shishir Pandey and Adv. Aniket Bose in Tribunal litigation, and Adv. Prerna Yaduvanshi on related
              documentation and compliance. Each profile below sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={drtTeam} label="DRT and SARFAESI team members" />
          </section>

          <LucknowChambers />
          <ServiceSelection content={searchContent} />

          <section id="drt-triage" className="mb-16 scroll-mt-28 rounded-sm border border-red-500/40 bg-red-500/5 p-6 dark:border-red-400/30 dark:bg-red-400/10 md:p-8">
            <div className="mb-3 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-600 dark:text-red-400" />
              <h2 className="font-display text-xl font-bold text-navy-900 dark:text-cream">
                Facing Imminent Property Auction or Physical Eviction?
              </h2>
            </div>
            <ul className="space-y-2 font-body text-sm leading-relaxed text-navy-800 dark:text-cream/75">
              <li>
                A Section 17 Securitisation Application carries a strict <strong>45-day limitation period</strong> from
                the date of the Section 13(4) possession measure.
              </li>
              <li>
                E-auctions require a mandatory 30-day clear notice under Rule 8(6) and a 15-day notice under Rule 9(1).
              </li>
              <li>Preserve every notice and its delivery record, and seek advice before the auction or eviction date.</li>
            </ul>
            <ConsultationActions className="mt-5 flex" />
          </section>

          <section id="drt-entity" className="mb-16 scroll-mt-28" aria-labelledby="drt-entity-heading">
            <div className="mb-5 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 id="drt-entity-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Debts Recovery Tribunal (DRT), Lucknow — Forum Details &amp; Jurisdiction
              </h2>
            </div>
            <div className="glass-card rounded-sm border border-gold-500/20 p-6 font-body text-sm leading-relaxed text-navy-800 dark:border-gold-500/15 dark:text-cream/75 md:p-8">
              <ul className="space-y-3">
                <li>
                  <strong className="text-navy-900 dark:text-cream">Tribunal Address:</strong> 600/1 University Road,
                  Babuganj, Hasanganj, Lucknow, Uttar Pradesh 226001 (near Hanuman Setu Mandir).
                </li>
                <li>
                  <strong className="text-navy-900 dark:text-cream">Appellate Forum:</strong> Debts Recovery Appellate
                  Tribunal (DRAT), 147-A-58/1, Jawahar Lal Nehru Road, Tagore Town, Prayagraj (Allahabad) — 211002.
                </li>
                <li>
                  <strong className="text-navy-900 dark:text-cream">Territorial Jurisdiction:</strong> DRT Lucknow
                  exercises jurisdiction over matters allocated to it across Lucknow, Kanpur, Unnao, Hardoi, Sitapur,
                  Ayodhya, Gorakhpur, Varanasi and Agra — subject to the current territorial notification.
                </li>
                <li>
                  <strong className="text-navy-900 dark:text-cream">Statutory Threshold:</strong> A minimum debt of
                  ₹20 lakh applies to Original Applications (OAs) by banks and financial institutions under Section 19
                  of the RDB Act, 1993.
                </li>
              </ul>
            </div>
          </section>

          <div id="drt-overview" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Loan default enforcement moves on strict timelines — a SARFAESI demand notice, a possession measure, or
              an Original Application before the Debts Recovery Tribunal each carry their own limitation periods and
              procedural requirements. Sumanjari &amp; Co. Advocates advises and represents banks, financial
              institutions, borrowers, and guarantors through every stage of the DRT and SARFAESI process.
            </p>
            <p>
              For cheque dishonour under Section 138 of the Negotiable Instruments Act, one-time settlement
              negotiations, or commercial recovery suits outside the DRT&apos;s jurisdiction, see our{' '}
              <Link href="/services/banking-recovery-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                general Banking &amp; Recovery practice
              </Link>.
            </p>
          </div>

          <section className="mb-16 border-y border-gold-500/20 py-8" aria-labelledby="drt-documents">
            <div className="mb-5 flex items-center gap-2">
              <FileCheck className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 id="drt-documents" className="scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Case Document Readiness Checklist
              </h2>
            </div>
            <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              {documentChecklist.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <p className="mt-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring the documents you have; do not delay advice while collecting the rest.</p>
            <ConsultationActions className="mt-6 flex" />
          </section>

          <StatuteTable
            id="drt-statutes"
            heading="Statutory Framework Governing DRT & SARFAESI Matters in Lucknow"
            intro="The remedy depends on the creditor, transaction and challenged action. Check current amendments, notifications and tribunal allocation before relying on a provision; the tracks below have different requirements."
            rows={drtLucknowStatutes}
          />

          <div id="drt-forums" className="mb-16 scroll-mt-28">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Forums We Appear Before
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
              {jurisdiction.map(({ title, blurb }) => (
                <div key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <h3 className="mb-2 font-display text-base font-bold text-navy-900 dark:text-cream">{title}</h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{blurb}</p>
                </div>
              ))}
            </div>
          </div>

          <div id="drt-matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              The Technical Defense Toolkit
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {toolkit.map(({ icon: Icon, title, points }) => (
                <div key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{title}</h3>
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

          <div className="mb-16">
            <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-cream">
              <ShieldCheck className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              Our Approach
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              We begin with a confidential review of the loan documents, notices, or order in question, followed by
              clear advice on your position and the timelines that apply — SARFAESI and DRT matters move on tight
              limitation periods, so early action matters. We represent you before the DRT, Lucknow, and are fully
              prepared to carry the matter in appeal before the DRAT, Allahabad, or in writ jurisdiction before the
              Allahabad High Court, Lucknow Bench.
            </p>
          </div>

          <GuideStages
            id="drt-procedure"
            heading="How a SARFAESI / DRT Case Proceeds in Lucknow: Stage 1 to Stage 6"
            intro="These are alternative and sometimes parallel tracks, not mandatory consecutive steps in every case. The notice, asset, existing orders and available statutory remedy determine which stages apply. No filing or settlement request automatically stops recovery."
            stages={drtLucknowStages}
          />

          <div id="drt-faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                DRT &amp; SARFAESI Lawyer in Lucknow: <em className="text-gold-gradient">FAQs</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our DRT and SARFAESI practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {drtLucknowFaqs.map(({ question, answer }) => (
                <div key={question} className="glass-card card-glow flex flex-col rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <h3 className="mb-2 font-display text-lg font-bold leading-snug text-navy-900 dark:text-cream">{question}</h3>
                  <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{answer}</p>
                  <a href="/#contact" className="font-caps text-xs uppercase tracking-widest text-gold-700 transition-opacity hover:opacity-75 dark:text-gold-400">
                    Ask Us About This →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div id="drt-faqs-hindi" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                अक्सर पूछे जाने वाले प्रश्न
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                FAQs in <em className="text-gold-gradient">Hindi / Hinglish</em>
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {drtLucknowBilingualFaqs.map(({ questionHinglish, question, answer }) => (
                <div key={question} className="glass-card card-glow flex flex-col rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <h3 className="mb-1 font-display text-base font-bold leading-snug text-navy-900 dark:text-cream">{question}</h3>
                  {questionHinglish !== question && (
                    <p className="mb-2 font-body text-xs italic text-navy-700/60 dark:text-cream/45">{questionHinglish}</p>
                  )}
                  <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{answer}</p>
                  <a href="/#contact" className="font-caps text-xs uppercase tracking-widest text-gold-700 transition-opacity hover:opacity-75 dark:text-gold-400">
                    Ask Us About This →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <section className="mb-12 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60" aria-labelledby="drt-official-resources">
            <h2 id="drt-official-resources" className="mb-3 scroll-mt-28 font-display text-xl font-bold text-navy-900 dark:text-cream">Official DRT and SARFAESI Resources</h2>
            <p>Check tribunal details, cause lists and case status on the <a href="https://drt.gov.in/" className="text-gold-700 underline dark:text-gold-400">official DRT portal</a>. The Recovery of Debts and Bankruptcy Act, 1993, the SARFAESI Act, 2002 and related rules are available through <a href="https://www.indiacode.nic.in/" className="text-gold-700 underline dark:text-gold-400">India Code</a>. Confirm current notifications and filing requirements before taking action.</p>
            <p className="mt-3">This page provides general legal information, not advice on an individual notice or proceeding. Deadlines, jurisdiction and available relief depend on the facts and applicable law.</p>
            <p className="mt-3">For cheque dishonour, OTS settlement, or commercial recovery suits, see our <Link href="/services/banking-recovery-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">Banking &amp; Recovery</Link> practice page.</p>
          </section>

          <ServiceBlogs
            posts={drtBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="DRT & SARFAESI Blogs"
            description="Short reads on DRT proceedings, SARFAESI enforcement, and bank auction disputes."
            viewAllHref={`/blog?category=${encodeURIComponent('Banking & Recovery Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a DRT or SARFAESI Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your DRT, SARFAESI, possession or bank auction matter — serving clients
              across Lucknow, Kanpur, Ayodhya, Gorakhpur, Varanasi and Agra, and practising before the Debts Recovery
              Tribunal, the DRAT, Allahabad, and the Allahabad High Court, Lucknow Bench.
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
