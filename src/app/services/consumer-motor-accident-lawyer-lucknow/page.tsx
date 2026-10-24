import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  ShoppingBag,
  Landmark,
  Gavel,
  ShieldAlert,
  HandCoins,
  FileWarning,
  ShieldCheck,
  MessageSquareWarning,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideToc, GuideStages, StatuteTable } from '@/components/LucknowGuide'
import { consumerLucknowStages, consumerLucknowToc, consumerLucknowStatutes } from '@/lib/guides/consumerLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const consumerLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const consumerTeam = ['prerna-yaduvanshi', 'aditya-narayan-shukla', 'priyesh-dwivedi']
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
  title: { absolute: 'Consumer Court & MACT Lawyer in Lucknow | Insurance Claims' },
  description:
    'Consumer Court Lawyer & MACT Advocate in Lucknow. Representation before District/State Consumer Commission (SCDRC UP), MACT Lucknow & Insurance Disputes.',
  keywords: [
    'Consumer Lawyer Lucknow',
    'Consumer Forum Advocate Lucknow',
    'Consumer Protection Act Lawyer Lucknow',
    'Motor Accident Claim Lawyer Lucknow',
    'MACT Lawyer Lucknow',
    'Insurance Claim Lawyer Lucknow',
    'Hit and Run Compensation Lawyer Lucknow',
    'No Fault Liability Lawyer Lucknow',
    'Deficiency of Service Lawyer Lucknow',
    'Product Liability Lawyer Lucknow',
    'Consumer Commission Advocate Lucknow',
    'Motor Accident Compensation Lucknow',
    'Insurance Repudiation Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/consumer-motor-accident-lawyer-lucknow',
  },
  openGraph: {
    title: 'Consumer & Motor Accident Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in consumer forum complaints, MACT compensation claims, no-fault and hit-and-run compensation, and insurance disputes before the Consumer Commissions, MACT, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/consumer-motor-accident-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consumer & MACT Lawyer in Lucknow',
    description: 'Consumer complaints, insurance claim disputes and accident compensation: document review and forum-specific legal advice.',
  },
}

const consumerMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Consumer & Motor Accident Matters',
  url: `${SITE_URL}/services/consumer-motor-accident-lawyer-lucknow`,
  description:
    'Representation in consumer forum complaints under the Consumer Protection Act, 2019, Motor Accident Claims Tribunal proceedings under the Motor Vehicles Act, 1988, no-fault and hit-and-run compensation, and insurance claim disputes.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Consumer & Motor Accident Legal Services',
}

const consumerBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Consumer Court & MACT Lawyer in Lucknow', item: `${SITE_URL}/services/consumer-motor-accident-lawyer-lucknow` },
  ],
}

const matters = [
  {
    icon: ShoppingBag,
    title: 'Consumer Complaints Under the Consumer Protection Act, 2019',
    points: [
      'Complaints for deficiency of service and defective goods',
      'Unfair trade practices and misleading advertisements',
      'E-commerce disputes and product liability claims',
    ],
  },
  {
    icon: Landmark,
    title: 'Consumer Forum Jurisdiction & Filing',
    points: [
      'Complaints before the District Commission (up to ₹50 lakh), State Commission (₹50 lakh–₹2 crore), and National Commission (above ₹2 crore)',
      'Appeals and revisions between consumer forums',
    ],
  },
  {
    icon: Gavel,
    title: 'Motor Accident Claims Tribunal (MACT) Proceedings',
    points: [
      'Compensation claims under Section 166 of the Motor Vehicles Act, 1988 for death or injury in road accidents',
      'Claims filed within the 6-month limitation period, with applications for condonation of delay where needed',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'No-Fault & Hit-and-Run Compensation',
    points: [
      'Statutory no-fault compensation under Section 164 of the Motor Vehicles Act (₹5,00,000 for death and ₹2,50,000 for grievous hurt, replacing erstwhile Section 140)',
      'Hit-and-Run Compensation Scheme, 2022 claims under Section 161/164B (₹2,00,000 for death and ₹50,000 for grievous injury), payable from the Motor Vehicle Accident Fund',
    ],
  },
  {
    icon: HandCoins,
    title: 'Insurance Claim Disputes',
    points: [
      'Third-party and own-damage insurance claim disputes',
      'Repudiation of claims and disputes over policy coverage',
    ],
  },
  {
    icon: FileWarning,
    title: 'Product Liability & Warranty Disputes',
    points: [
      'Claims for defective products under the product liability provisions of the CPA, 2019',
      'Warranty and after-sales service disputes',
    ],
  },
]

const whyIssues = [
  'Deficiency of service and defective goods',
  'Unfair trade practices and misleading advertisements',
  'Compensation for death or injury in road accidents',
  'No-fault and hit-and-run compensation claims',
  'Insurance claim repudiation and coverage disputes',
  'Appeals between consumer forums and before the High Court',
]

const jurisdiction = [
  {
    title: 'District Consumer Disputes Redressal Commission, Lucknow',
    blurb:
      'Consumer complaints where the value of goods or services does not exceed ₹50 lakh.',
  },
  {
    title: 'State Consumer Disputes Redressal Commission, U.P.',
    blurb:
      'Complaints between ₹50 lakh and ₹2 crore, and appeals from the District Commission.',
  },
  {
    title: 'Motor Accident Claims Tribunal (MACT), Lucknow',
    blurb:
      'Compensation claims for death or injury arising from motor vehicle accidents under the Motor Vehicles Act.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Appeals and revisions in consumer and motor accident matters, argued from our chambers at Block D-311.',
  },
]

const consumerInsights = [
  {
    icon: Landmark,
    title: 'What Is the Pecuniary Jurisdiction of Consumer Commissions?',
    excerpt:
      'The appropriate Consumer Commission depends on the jurisdiction provisions and monetary rules currently in force, including the applicable basis for valuing the transaction. Territorial jurisdiction and consumer eligibility must also be established. A compensation demand alone does not determine the correct forum; bring the purchase or policy records for an individual assessment.',
  },
  {
    icon: Gavel,
    title: 'Is There a Time Limit to File a Motor Accident Claim?',
    excerpt:
      'Motor accident filing requirements need prompt, case-specific review under the applicable Motor Vehicles Act provisions, amendments and binding decisions. The accident date, chosen route and procedural history matter. Do not assume that a delayed claim will be accepted or that the Tribunal can always excuse delay. Seek advice promptly with the available accident records.',
  },
  {
    icon: ShieldAlert,
    title: 'What Is No-Fault Liability Compensation?',
    excerpt:
      'The Motor Vehicles Act provides statutory compensation routes, including section 164 where applicable, with different requirements from a fault-based claim. Eligibility, commencement provisions and interaction with other claims or payments must be examined. Older references to section 140 should not be applied mechanically to a current accident; no entitlement or payout is guaranteed by this guide.',
  },
  {
    icon: HandCoins,
    title: 'What Compensation Is Available in Hit-and-Run Cases?',
    excerpt:
      'An accident involving an unidentified vehicle may fall within the statutory hit-and-run compensation framework and the applicable scheme. The designated authority examines eligibility, accident records and the prescribed application. This is distinct from an ordinary MACT claim against an identified driver, owner or insurer. Current scheme conditions and interaction with any other compensation must be reviewed before applying.',
  },
]

const consumerFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: consumerInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: excerpt,
    },
  })),
}

export default async function ConsumerMotorAccidentMattersPage() {
  const consumerBlogPosts = getBlogPostsByCategory('Consumer & Motor Accident Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consumerMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consumerFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consumerBreadcrumbJsonLd) }}
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
                Consumer &amp; Accident Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Consumer Court Lawyer &amp; <em className="text-gold-gradient">Motor Accident Claims (MACT) Advocate in Lucknow</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our consumer lawyers and motor accident claims advocates in Lucknow handle
              consumer litigation, MACT compensation claims and insurance disputes before the Consumer Commissions, the Motor
              Accident Claims Tribunal, and the Allahabad High Court, Lucknow
              Bench.
            </p>
            <ServiceStats service="consumer" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {consumerLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {consumerLead.img && (
                  <Image src={consumerLead.img} alt={consumerLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: consumerLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Consumer &amp; Accident Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{consumerLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{consumerLead.role}</p>
                <Link href={`/team/${consumerLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={consumerLucknowToc} />

          <section className="mb-16" aria-labelledby="consumer-team">
            <h2 id="consumer-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Consumer &amp; Accident Claims Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads the initial litigation review. Adv.
              Prerna Yaduvanshi contributes her recorded consumer practice, with
              civil litigation support selected for the evidence and
              proceedings involved.
            </p>
            <TeamCarousel members={consumerTeam} label="Consumer and accident claims team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Consumer disputes and motor accident claims both move through
              specialised forums with their own procedure, jurisdiction, and
              timelines — a consumer complaint depends on the value involved,
              while a motor accident claim now carries a limitation period
              that did not exist for many years. Sumanjari &amp; Co. Advocates
              advises and represents clients in both areas.
            </p>
            <p>
              We handle consumer complaints before the District and State
              Consumer Disputes Redressal Commissions, compensation claims
              before the Motor Accident Claims Tribunal, Lucknow, insurance
              disputes, and appeals before the Allahabad High Court, Lucknow
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
            <p className="mt-6 max-w-3xl font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
              Under the Consumer Protection (Jurisdiction) Rules, 2021, the pecuniary jurisdiction of the District Commission (up to ₹50 lakh), the State Commission (₹50 lakh–₹2 crore) and the NCDRC (above ₹2 crore) is calculated on the actual consideration <strong className="text-navy-900 dark:text-cream">paid</strong> for the goods or services — not on the compensation claimed in the complaint.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Consumer &amp; Motor Accident Matters We Handle
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
                We begin with a confidential review of the facts, purchase or
                policy documents, or accident details, and advise clearly on
                the appropriate forum and the relief available. We prepare
                and file the complaint or claim promptly — mindful of the
                MACT limitation period — and represent you through hearing
                and, where necessary, in appeal before the Allahabad High
                Court, Lucknow Bench.
              </p>
            </div>
          </div>

          <StatuteTable
            id="consumer-statutes"
            heading="Consumer and Motor Accident Laws: Different Routes"
            intro="Consumer complaints, MACT claims and hit-and-run assistance have different eligibility and forum requirements. Applicable amendments, filing periods, scheme conditions and current Uttar Pradesh practice must be checked for the particular matter."
            rows={consumerLucknowStatutes}
          />

          <GuideStages
            id="consumer-procedure"
            heading="From Complaint or Accident Review to Enforcement"
            intro="These six stages describe the main decisions in a consumer dispute or motor accident claim. They are not one combined filing process: the appropriate forum, evidence and available relief depend on the chosen statutory route."
            stages={consumerLucknowStages}
          />

          <section id="consumer-mact-multiplier-fafo" aria-labelledby="consumer-mact-multiplier-fafo-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="consumer-mact-multiplier-fafo-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              MACT Compensation Multiplier Formula &amp; First Appeal From Order (FAFO) at High Court Lucknow
            </h2>
            <div className="space-y-4 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <p>
                MACT Lucknow assesses &quot;just compensation&quot; under Sections 166 and 168 of the Motor Vehicles Act using the structured multiplier method settled by the Supreme Court. The age-based multiplier table in <strong className="text-navy-900 dark:text-cream">Sarla Verma v. DTC</strong>, as affirmed and standardised by the Constitution Bench in <strong className="text-navy-900 dark:text-cream">National Insurance Co. Ltd. v. Pranay Sethi</strong>, fixes the multiplier by the victim&apos;s age, mandates an addition of 40% (50% for victims under 40) towards future prospects, and standardises conventional heads — loss of consortium, loss of estate and funeral expenses. For injuries, permanent functional disability — as distinct from mere medical disability — is assessed on the principles in <strong className="text-navy-900 dark:text-cream">Raj Kumar v. Ajay Kumar</strong>.
              </p>
              <p>
                Since the April 2022 amendment, Section 166(3) imposes a strict six-month limitation period for filing a MACT claim, so prompt filing is essential. A challenge to the Tribunal&apos;s award lies as a First Appeal From Order (FAFO) under Section 173 before the Allahabad High Court, Lucknow Bench, within 90 days — and an insurer&apos;s appeal is entertained only on the statutory deposit of ₹25,000 or 50% of the awarded amount, whichever is less.
              </p>
            </div>
          </section>

          <section id="consumer-edakhil-filing" aria-labelledby="consumer-edakhil-filing-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="consumer-edakhil-filing-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              District Commission (DCDRC Lucknow I &amp; II) &amp; UP State Consumer Commission (SCDRC Lucknow) Filing via E-Daakhil / E-Jagriti
            </h2>
            <div className="space-y-4 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <p>
                Consumer complaints before the District Consumer Disputes Redressal Commissions (DCDRC Lucknow I &amp; II) and the U.P. State Consumer Disputes Redressal Commission (SCDRC), Lucknow are filed electronically through the E-Daakhil portal (and its successor E-Jagriti platform), with e-payment of court fees and virtual hearing facilities. Section 35 complaints before these Commissions cover insurance repudiation across health, life, motor and fire/commercial policies, medical negligence assessed on the standards in <strong className="text-navy-900 dark:text-cream">Jacob Mathew v. State of Punjab</strong> and the Bolam-based benchmarks restated in <strong className="text-navy-900 dark:text-cream">Kusum Sharma v. Batra Hospital</strong>, and banking and credit-card cyber deficiencies.
              </p>
              <p>
                Where an opposite party fails to comply with a Commission&apos;s order, we move execution applications under Section 71 and seek penal consequences — including imprisonment and fine — under Section 72 of the Consumer Protection Act, 2019, with recovery also enforceable as arrears of land revenue through certificate proceedings.
              </p>
            </div>
          </section>

          <section id="consumer-documents" aria-labelledby="consumer-documents-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="consumer-documents-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">First-Consultation Checklist</h2>
            <p className="mb-4 font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring available records and identify what is missing. Do not delay urgent advice merely because a police, hospital or insurer document is still awaited.</p>
            <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <li>For consumer complaints: invoices, payment proof, contract or warranty, service requests, correspondence and the precise remedy sought.</li>
              <li>For insurance disputes: the full policy and schedule, proposal details, claim submissions, survey material available to you and any rejection or settlement letter.</li>
              <li>For accident claims: police papers, vehicle and insurance details, medical records, treatment bills and relevant witnesses or accident information.</li>
              <li>For loss assessment: age and income proof, disability and work-impact records, ongoing treatment needs, dependency details and expenses actually incurred.</li>
              <li>For any route: a dated chronology, jurisdictional connections, earlier proceedings, orders, payments and proposed releases or settlements.</li>
            </ul>
          </section>

          <div className="mb-16">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Consumer &amp; Accident <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our
                consumer and motor accident practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {consumerInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <section aria-labelledby="consumer-mact-claim-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="consumer-mact-claim-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Consumer Complaint or Motor Accident Claim: Which Route Applies?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">A complaint about defective goods, deficient services or an eligible insurance dispute may fall before a Consumer Commission. Compensation for injury or death arising from a motor accident follows the Motor Vehicles Act framework before the competent MACT; hit-and-run compensation has a separate scheme. We examine eligibility, territorial and monetary jurisdiction, the applicable filing period and existing proceedings before recommending a route. Not every insurance dispute belongs before the same forum.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Evidence to preserve before seeking compensation</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">For consumer matters, retain invoices, warranties, complaint numbers, correspondence and the insurer&apos;s rejection letter where relevant. For accident claims, preserve police papers, vehicle and policy details, treatment bills, income and age proof, disability assessments and dependency records. Compensation depends on proved facts and applicable law, not a promised payout. Prompt review is important because limitation and evidence requirements differ between remedies.</p>
          </section>

          <ServiceBlogs
            posts={consumerBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Consumer & Motor Accident Blogs"
            description="Short reads on consumer disputes and motor accident compensation claims."
            viewAllHref={`/blog?category=${encodeURIComponent('Consumer & Motor Accident Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Consumer or Accident Claim Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your consumer complaint, motor
              accident claim, or insurance dispute — practising before the
              Consumer Commissions, the MACT, and the Allahabad High Court,
              Lucknow Bench.
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
