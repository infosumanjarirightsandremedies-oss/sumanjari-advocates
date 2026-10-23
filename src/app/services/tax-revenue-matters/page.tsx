import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Receipt,
  Home,
  MapPin,
  ScrollText,
  Gavel,
  Landmark,
  ShieldCheck,
  MessageSquareWarning,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { taxLucknowStages, taxLucknowStatutes, taxLucknowToc } from '@/lib/guides/taxLucknow'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

const taxLead = teamMembers.find((member) => member.slug === 'aditya-narayan-shukla')
const taxTeam = ['arti-dwivedi', 'jitendra-tiwari', 'prabhash-yadav', 'vinod-arya', 'abhishek-mishra']
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
  title: { absolute: 'Tax & Revenue Advocate in Lucknow | GST & Appeals | Sumanjari' },
  description:
    'Tax and revenue advocate and lawyer in Lucknow for GST, income tax, stamp duty, property tax and mining disputes. Advice on notices, appeals and recovery.',
  keywords: [
    'Tax & Revenue Advocate and Lawyer in Lucknow',
    'Tax Advocate Lucknow',
    'Revenue Advocate Lucknow',
    'Tax Lawyer Lucknow',
    'Revenue Lawyer Lucknow',
    'Stamp Duty Lawyer Lucknow',
    'Property Tax Lawyer Lucknow',
    'Circle Rate Dispute Lawyer Lucknow',
    'Income Tax Lawyer Lucknow',
    'ITAT Lucknow Advocate',
    'GST Lawyer Lucknow',
    'GST Appellate Tribunal Lucknow',
    'GSTAT Lucknow Advocate',
    'Registration Act Lawyer Lucknow',
    'Mining Lease Dispute Lawyer Lucknow',
    'Mining Revenue Matters Uttar Pradesh',
    'GST Demand Notice Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/tax-lawyer-lucknow',
  },
  openGraph: {
    title: 'Tax & Revenue Advocate and Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Advisory and litigation in stamp duty, property tax, circle rate valuation, income tax, and GST disputes before the ITAT Lucknow Bench, GSTAT Lucknow, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/tax-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tax & Revenue Advocate in Lucknow | GST & Appeals',
    description: 'Legal review of tax notices, statutory appeals, stamp duty, property tax and mining revenue disputes in Uttar Pradesh.',
  },
}

const taxMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Tax & Revenue Advocate and Lawyer in Lucknow',
  url: `${SITE_URL}/services/tax-lawyer-lucknow`,
  description:
    'Advisory and representation in stamp duty and registration, property tax assessment, circle rate valuation, income tax, GST, and recovery of government dues, before the ITAT Lucknow Bench, the GST Appellate Tribunal, Lucknow, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Tax & Revenue Legal Services',
}

const matters = [
  {
    icon: Receipt,
    title: 'Stamp Duty & Registration Matters',
    points: [
      'Stamp duty under the Indian Stamp Act, 1899, as applicable in Uttar Pradesh',
      'Registration of documents under Section 17 of the Registration Act, 1908',
      'Advisory on concessional stamp duty for transfers between blood relatives',
    ],
  },
  {
    icon: Home,
    title: 'Property Tax Assessment Disputes',
    points: [
      'Challenging house and property tax assessments before the municipal authority',
      'Disputes over annual rateable value and assessment orders',
    ],
  },
  {
    icon: MapPin,
    title: 'Circle Rate & Valuation Disputes',
    points: [
      'Disputes over circle rate valuation used for stamp duty purposes',
      'Representation before the Collector on references for alleged undervaluation',
    ],
  },
  {
    icon: ScrollText,
    title: 'Income Tax Advisory & Litigation',
    points: [
      'Advisory on income tax compliance, in coordination with chartered accountants',
      'Representation in appeals before the Commissioner (Appeals) and the ITAT, Lucknow Bench',
    ],
  },
  {
    icon: Receipt,
    title: 'GST Advisory & Disputes',
    points: [
      'Advisory on GST registration and compliance for business clients',
      'Representation in GST appeals, including before the GST Appellate Tribunal (GSTAT), Lucknow',
    ],
  },
  {
    icon: Gavel,
    title: 'Recovery of Government Dues & Tax Arrears',
    points: [
      'Representation in recovery certificate proceedings for tax and revenue arrears',
      'Advisory on settlement and instalment applications before the recovering authority',
    ],
  },
]

const whyIssues = [
  'Stamp duty calculation and registration of property documents',
  'Property tax and house tax assessment disputes',
  'Circle rate valuation and undervaluation references',
  'Income tax compliance and appellate disputes',
  'GST registration, compliance, and appellate disputes',
  'Recovery proceedings for government dues and tax arrears',
]

const jurisdiction = [
  {
    title: 'Sub-Registrar & Stamp Authorities, Lucknow',
    blurb:
      'Registration of documents and stamp duty valuation, including references on undervaluation before the Collector.',
  },
  {
    title: 'GST Proper Officer & Appellate Authority',
    blurb:
      'GST notice responses and first appeals before the designated Central or State authority; these are distinct from a further GSTAT appeal.',
  },
  {
    title: 'Income Tax Authorities & First Appellate Authority',
    blurb:
      'Assessment responses and eligible first appeals before the allocated Joint Commissioner (Appeals) or Commissioner (Appeals), under the law and scheme applicable to the relevant proceeding.',
  },
  {
    title: 'ITAT, Lucknow Bench',
    blurb:
      'Eligible income-tax appeals, subject to the governing enactment, prior appellate order where required, current territorial allocation and bench assignment.',
  },
  {
    title: 'GST Appellate Tribunal (GSTAT), Lucknow',
    blurb:
      'Eligible further GST appeals, subject to the competent bench, current filing arrangements, transitional notifications and statutory conditions.',
  },
  {
    title: 'Municipal Assessment & Appellate Authorities',
    blurb:
      'Property-tax objections and appeals before the relevant local body and designated forum under its governing legislation, separate from stamp valuation.',
  },
  {
    title: 'Mining & Revenue Authorities',
    blurb:
      'The source authority decides the underlying demand; Collector or Tehsildar recovery proceedings require separate review of the certificate and applicable recovery law.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Statutory court remedies or exceptional writ review, subject to the particular enactment, territorial jurisdiction and available alternative remedies.',
  },
]

const taxInsights = [
  {
    icon: Receipt,
    title: 'How Is Stamp Duty Calculated on Property in UP?',
    excerpt:
      'Stamp duty depends on the instrument and the Indian Stamp Act as applicable in Uttar Pradesh, including the relevant valuation rules and district rate schedule. Any concession for a family transfer depends on the current notification, qualifying relationship, instrument category and conditions; it is not automatic for every transfer between relatives.',
  },
  {
    icon: Landmark,
    title: 'What Is the ITAT and Where Is the Lucknow Bench?',
    excerpt:
      'The Income Tax Appellate Tribunal hears eligible income-tax appeals under the governing enactment. Whether a matter belongs before its Lucknow Bench depends on current territorial allocation and assignment. The relevant year, applicable income-tax law and any savings provisions must be checked, as must the first appellate route where required.',
  },
  {
    icon: Gavel,
    title: 'Is There a GST Appellate Tribunal in Lucknow Now?',
    excerpt:
      'Lucknow is a GSTAT location relevant to Uttar Pradesh matters, but the competent bench, current filing arrangements and transitional directions must be verified for the particular appeal. GSTAT ordinarily deals with eligible further appeals, not the initial reply to a GST notice or every first appeal under Section 107.',
  },
  {
    icon: MapPin,
    title: 'Who Fixes the Circle Rate Used for Stamp Duty?',
    excerpt:
      'District valuation schedules are issued under the applicable Uttar Pradesh framework. Use the schedule relevant to the instrument and property, including its category, use and location. An undervaluation proceeding may be considered by the competent Collector or stamp authority under the state-applicable Stamp Act; it is separate from municipal tax assessment and a title dispute.',
  },
]

const taxFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: taxInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: { '@type': 'Answer', text: excerpt },
  })),
}

export default async function TaxRevenueMattersPage() {
  const taxBlogPosts = getBlogPostsByCategory('Tax & Revenue Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxFaqJsonLd) }}
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
                Tax &amp; Revenue Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Tax &amp; Revenue Advocate and Lawyer <em className="text-gold-gradient">in Lucknow</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our tax lawyers and revenue advocates advise individuals and businesses
              in Lucknow on stamp duty, registration, property tax, circle rate
              valuation, income tax, GST, and revenue recovery disputes before
              the relevant authorities, tribunals, and the Allahabad High Court,
              Lucknow Bench.
            </p>
            <ServiceStats service="tax" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {taxLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {taxLead.img && (
                  <Image src={taxLead.img} alt={taxLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: taxLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Tax &amp; Revenue Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{taxLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{taxLead.role}</p>
                <Link href={`/team/${taxLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={taxLucknowToc} />

          <section className="mb-16" aria-labelledby="tax-revenue-team">
            <h2 id="tax-revenue-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Tax &amp; Revenue Law Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aditya Narayan Shukla leads our tax and revenue practice, supported
              by Adv. Arti Dwivedi, Adv. Jitendra Tiwari and
              Adv. Prabhash Yadav in tax matters, and Adv. Vinod Arya and
              Adv. Abhishek Mishra in revenue matters. Each profile below
              sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={taxTeam} label="Tax and revenue team members" />
          </section>

          <div id="tax-overview" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Tax and revenue matters in Uttar Pradesh span several distinct
              forums — the Sub-Registrar and Collector for stamp duty and
              circle rate disputes, the Income Tax Appellate Tribunal for
              eligible direct tax appeals, and the designated GST authorities
              and GST Appellate Tribunal for their respective appellate stages.
              Sumanjari &amp; Co. Advocates advises individuals and
              businesses on compliance and represents them in disputes across
              these forums.
            </p>
            <p>
              We handle stamp duty and registration matters, property tax
              assessment disputes, circle rate valuation references, income
              tax appeals before the ITAT, Lucknow Bench, GST disputes, and
              writ and appellate matters before the Allahabad High Court,
              Lucknow Bench.
            </p>
          </div>

          <StatuteTable
            id="tax-statutes"
            heading="Tax and Revenue Laws: Separate Procedural Tracks"
            intro="The relevant period, instrument and issuing authority decide the remedy. Check current amendments, income-tax transitional provisions, Uttar Pradesh notifications and forum arrangements; limitation, deposits and recovery protection differ between these tracks."
            rows={taxLucknowStatutes}
          />

          <div id="tax-forums" className="mb-16 scroll-mt-28">
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

          <div id="tax-matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Tax &amp; Revenue Matters We Handle
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
                We begin with a confidential review of the document,
                assessment, or notice involved — coordinating with your
                chartered accountant on tax computation where needed — and
                advise clearly on the forum and relief available. We
                represent you before the Registrar and Collector, the ITAT,
                Lucknow Bench, the GST Appellate Tribunal, and, where
                necessary, in appeal or writ before the Allahabad High Court,
                Lucknow Bench.
              </p>
            </div>
          </div>

          <GuideStages
            id="tax-procedure"
            heading="Tax and Revenue Procedure: Track-Specific Decisions"
            intro="These stages identify alternative statutory routes, not a single sequence for every dispute. A GST notice, income-tax order, stamp valuation and revenue recovery certificate require separate authority, evidence, limitation and recovery analysis."
            stages={taxLucknowStages}
          />

          <div id="tax-faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Tax &amp; Revenue <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our tax and
                revenue practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {taxInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <section aria-labelledby="tax-notice-appeal-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="tax-notice-appeal-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Tax Notice, Demand Order or Revenue Recovery: What Comes Next?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">First distinguish a show-cause notice from a final assessment, penalty order or recovery action. The governing statute, period involved, issuing authority and communication date determine the reply or appeal route. GST, income tax, stamp duty, municipal property tax and mining revenue disputes have different procedures; a writ petition is not an automatic replacement for a statutory remedy. We check current forum arrangements, limitation, any pre-deposit and the separate requirements for protection from recovery.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Records for a tax or mining revenue consultation</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Share the full notice or order, portal acknowledgements, returns, ledgers, invoices, earlier replies and payment records. For stamp duty or property valuation, include the instrument and assessment material; for mining lease or royalty disputes, include the lease, permits, inspection records and demand calculation. Preparing a reply or appeal does not itself stay recovery. The legal team can coordinate with your accountant or technical adviser while reviewing the legal grounds and procedural deadlines.</p>
          </section>

          <ServiceBlogs
            posts={taxBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Tax & Revenue Blogs"
            description="Short reads on tax disputes and revenue matters."
            viewAllHref={`/blog?category=${encodeURIComponent('Tax & Revenue Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Tax or Revenue Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your stamp duty, property tax, income
              tax, or GST matter — practising before the ITAT, GSTAT, and the
              Allahabad High Court, Lucknow Bench.
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
