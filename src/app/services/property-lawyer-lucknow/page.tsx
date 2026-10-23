import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Home,
  FileWarning,
  Scale,
  ShieldCheck,
  Landmark,
  MapPin,
  ShieldAlert,
  Banknote,
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
import { propertyStages, propertyStatutes, propertyToc } from '@/lib/guides/propertyLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const propertyLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const propertyTeam = ['vinod-arya', 'akhilesh-yadav', 'abhishek-mishra', 'aditya-narayan-shukla']
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
  title: { absolute: 'Property Lawyer in Lucknow | Sumanjari & Co. Advocates' },
  description:
    'Property lawyer and land dispute advocate in Lucknow for title checks, partition, mutation and possession matters. Consult our team for a document review.',
  keywords: [
    'Property Lawyer Lucknow',
    'Land Dispute Lawyer Lucknow',
    'Property Advocate Lucknow',
    'Title Verification Lawyer Lucknow',
    'Partition Suit Lawyer Lucknow',
    'Possession Dispute Lawyer Lucknow',
    'Mutation Dakhil Kharij Lawyer Lucknow',
    'Boundary Dispute Lawyer Lucknow',
    'Benami Property Lawyer Lucknow',
    'Land Acquisition Compensation Lawyer Lucknow',
    'Revenue Court Lawyer Lucknow',
    'UP Zamindari Abolition Act Lawyer',
    'LDA Property Dispute Lawyer Lucknow',
    'Sale Deed Cancellation Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/property-lawyer-lucknow',
  },
  openGraph: {
    title: 'Property Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Advice and representation for property title checks, partition, disputed mutation, possession and land acquisition matters in Lucknow and Uttar Pradesh.',
    url: '/services/property-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Property Lawyer in Lucknow | Title, Partition & Land Disputes',
    description: 'Review of title records, possession disputes, mutation, partition and development-authority property issues in Lucknow.',
  },
}

const propertyMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Property & Land Matters',
  url: `${SITE_URL}/services/property-lawyer-lucknow`,
  description:
    'Representation in property title verification and due diligence, sale and transfer transactions, partition suits, possession disputes, mutation and revenue proceedings, boundary disputes, benami property matters, and land acquisition compensation, before the Revenue Courts, District Courts, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Property & Land Legal Services',
}

const matters = [
  {
    icon: Home,
    title: 'Sale, Purchase & Transfer of Property',
    points: [
      'Drafting and vetting sale deeds, agreements to sell, and transfer documents',
      'Representation in sale, purchase, and transfer transactions',
      'Suits for specific performance of sale agreements under the Specific Relief Act, 1963',
    ],
  },
  {
    icon: FileWarning,
    title: 'Property Title Verification & Due Diligence',
    points: [
      'Title search and verification before purchase',
      'Examining revenue records, encumbrances, and litigation history',
      'Reviewing the ownership chain, seller authority, mortgages, and restrictions on transfer',
    ],
  },
  {
    icon: Scale,
    title: 'Partition Suits',
    points: [
      'Partition of ancestral and self-acquired property',
      'Family settlement deeds and amicable partition',
      'Contested partition before the competent civil or revenue court, depending on the land and relief sought',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Possession Disputes & Injunctions',
    points: [
      'Suits for possession and injunction',
      'Protection against illegal dispossession',
      'Assessment of urgent interim relief against threatened construction, sale, or interference with possession',
    ],
  },
  {
    icon: Landmark,
    title: 'Property Mutation & Revenue Proceedings',
    points: [
      'Mutation (dakhil-kharij) under Sections 34 and 35 of the U.P. Revenue Code, 2006',
      'Proceedings before the Tehsildar, Sub-Divisional Officer, and Collector',
      'Objections to disputed entries and challenges to mutation orders before the competent authority',
    ],
  },
  {
    icon: MapPin,
    title: 'Boundary Disputes & Demarcation',
    points: [
      'Boundary and demarcation disputes',
      'Encroachment matters and protective relief',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Benami Property & Land Reforms Matters',
    points: [
      'Matters under the Prohibition of Benami Property Transactions Act, 1988',
      'Matters under the U.P. Zamindari Abolition and Land Reforms Act, 1950',
    ],
  },
  {
    icon: Banknote,
    title: 'Land Acquisition & Compensation',
    points: [
      'Compensation claims under the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013',
      'Review of acquisition notices, awards, valuation, and the applicable statutory challenge or reference procedure',
    ],
  },
]

const whyIssues = [
  'Verifying title and revenue records before a property purchase',
  'Partition among family members and family settlement',
  'Illegal possession, encroachment, and boundary disputes',
  'Mutation of property in revenue records after sale, inheritance, or gift',
  'Benami property allegations and land reforms matters',
  'Compensation for land acquired by the government',
]

const jurisdiction = [
  {
    title: 'Revenue Courts (Tehsildar, SDO, Collector)',
    blurb:
      'Mutation, partition of agricultural holdings, and demarcation proceedings under the U.P. Revenue Code, 2006, subject to the authority competent to decide each matter.',
  },
  {
    title: 'Civil Judge & District Courts, Lucknow',
    blurb:
      'Possession, injunction, partition, and specific performance suits relating to immovable property.',
  },
  {
    title: 'Board of Revenue, Uttar Pradesh',
    blurb:
      'Second appeals and revisions against orders of subordinate revenue authorities.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Appropriate writ and appellate proceedings arising from property and land matters. Maintainability, territorial jurisdiction, and available statutory remedies must first be assessed.',
  },
]

const propertyInsights = [
  {
    icon: FileWarning,
    title: 'Why Is Title Verification Important Before Buying Property?',
    excerpt:
      'A property lawyer checks how the seller acquired ownership, earlier registered deeds, co-owner interests, mortgages, available revenue records, and relevant litigation. For a Lucknow plot or flat, applicable allotment conditions and approvals also need review. A registry, tax receipt, or mutation entry alone is not a substitute for examining the ownership chain.',
  },
  {
    icon: Landmark,
    title: 'What Is Mutation (Dakhil-Kharij) and Why Does It Matter?',
    excerpt:
      'Mutation updates revenue records following a sale, inheritance, gift, or other change. It does not itself confer ownership or conclusively decide title. If an entry is disputed, obtain the mutation order and relevant records so the appropriate objection, appeal, or other remedy can be assessed separately from any substantive ownership dispute.',
  },
  {
    icon: Scale,
    title: 'How Can Family or Ancestral Property Be Partitioned in Lucknow?',
    excerpt:
      'The first step is to identify the owners, source of title, applicable succession law, and whether the property is ancestral, jointly acquired, or separately owned. An agreed division may be recorded in an appropriately stamped and registered instrument where required. Contested partition of a house and partition of an agricultural holding can involve different civil or revenue proceedings; not every inherited property is legally ancestral.',
  },
  {
    icon: Banknote,
    title: 'What Compensation Can I Claim for Land Acquisition?',
    excerpt:
      'The available compensation and challenge procedure depend on the statute under which the land is acquired. Review the notification, award, valuation, ownership shares, and applicable rehabilitation entitlements. The 2013 land acquisition Act and special enactments can provide different procedures, authorities, and time limits, so the acquisition documents must be checked before choosing a remedy.',
  },
  {
    icon: ShieldCheck,
    title: 'What Should I Do About Encroachment or Threatened Dispossession?',
    excerpt:
      'Preserve title documents, photographs, boundary records, communications, and evidence of possession. A lawyer can assess a suit for injunction, declaration, or recovery of possession and whether an interim application is appropriate. Do not use force or alter the disputed site. Interim relief depends on the evidence, legal requirements, and court orders; a filing or stay cannot be promised within a fixed time.',
  },
  {
    icon: FileWarning,
    title: 'Can a Forged Sale Deed or Fraudulent Property Transfer Be Challenged?',
    excerpt:
      'Obtain a certified copy of the disputed deed, earlier title documents, and the related revenue entries. Depending on the facts and your relationship to the document, civil relief may include cancellation or a declaration and an injunction against further dealing. Suspected forgery may also require a separate criminal complaint. Correcting mutation alone does not resolve the effect of a disputed registered deed.',
  },
  {
    icon: Landmark,
    title: 'What If My Lucknow Property Involves LDA or a Builder Dispute?',
    excerpt:
      'An LDA allotment, lease, transfer, or cancellation issue requires review of the allotment letter, scheme conditions, notices, and payments. A builder delay or possession dispute may instead involve UP RERA or another competent forum. The right route depends on the project, agreement, relief sought, and available remedies; a private property dispute does not automatically belong before the High Court.',
  },
  {
    icon: Scale,
    title: 'Which Court Handles a Property Dispute in Lucknow?',
    excerpt:
      'Title, possession, injunction, and sale-agreement disputes commonly involve the competent civil court, while agricultural holdings and revenue entries may fall within revenue jurisdiction. The location and classification of the land, valuation, and relief sought determine the forum. High Court proceedings are considered where legally maintainable, not as a routine substitute for a civil suit or statutory appeal.',
  },
  {
    icon: ScrollText,
    title: 'What Are the Fees and Time Limits for a Property Case?',
    excerpt:
      'Fees depend on the documents, work required, forum, and complexity. Ask for clarity on professional fees, court fees, registration charges, and other expenses before proceeding. Limitation periods vary with the remedy and facts, and some notices or orders require prompt action. Case duration depends on service, evidence, interim applications, and court scheduling; neither a result nor a completion date can be guaranteed.',
  },
]

const propertyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: propertyInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: excerpt,
    },
  })),
}

const consultationDocuments = [
  'Sale deed, gift deed, partition deed, will, or other document through which ownership is claimed, together with available earlier deeds',
  'Current and earlier khatauni, khasra, mutation orders, and revenue maps where relevant to the land',
  'Property identification details, site plan, boundary description, and photographs showing possession or encroachment',
  'Agreement to sell, payment receipts, loan or mortgage papers, and communications with the seller or buyer',
  'LDA allotment or lease papers, builder-buyer agreement, project details, and possession or cancellation notices, where applicable',
  'Legal notices, pleadings, court or revenue orders, acquisition notices, and a dated summary of events',
]

export default async function PropertyLandMattersPage() {
  const propertyBlogPosts = getBlogPostsByCategory('Property & Land Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyFaqJsonLd) }}
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
                Property &amp; Land Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Property Lawyer in <em className="text-gold-gradient">Lucknow</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our property lawyers and land dispute advocates provide advice and representation for title verification, partition,
              land disputes, possession, disputed mutation, and property transfers
              in Lucknow and Uttar Pradesh.
            </p>
            <ServiceStats service="property" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {propertyLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {propertyLead.img && (
                  <Image src={propertyLead.img} alt={propertyLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: propertyLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Property Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{propertyLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{propertyLead.role}</p>
                <Link href={`/team/${propertyLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={propertyToc} />

          <section className="mb-16" aria-labelledby="property-team">
            <h2 id="property-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Property &amp; Land Disputes Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads the property and land practice
              assessment, supported by advocates whose recorded expertise
              includes land and revenue matters, property disputes and civil
              litigation.
            </p>
            <TeamCarousel members={propertyTeam} label="Property and land team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Buying a plot, dividing a family house, or challenging an incorrect
              land record starts with the same questions: who has title, who is
              in possession, and which authority can grant the relief you need?
              Sumanjari &amp; Co. Advocates assists buyers, sellers, co-owners,
              and legal heirs with property transactions and land disputes in
              Lucknow. We examine the documents before advising on a negotiated
              settlement, registration, revenue proceedings, or litigation.
            </p>
            <p>
              We handle matters before the Revenue Courts under the U.P.
              Revenue Code, 2006, civil suits before the Civil Judge and
              District Courts, Lucknow, and appellate and writ matters before
              the Allahabad High Court, Lucknow Bench, where maintainable.
              Consultations can be arranged through our team at Chamber Block
              D-311, Allahabad High Court, Lucknow Bench.
            </p>
          </div>

          <div id="property-forums" className="mb-16 scroll-mt-28">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Civil Courts, Revenue Authorities &amp; High Court Remedies
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
            id="property-statutory-framework"
            heading="Property and Land Law: The Relevant Framework"
            intro="The land classification, tenure, transaction and relief determine which provisions apply. Check current Uttar Pradesh amendments, rules and any saved earlier proceedings; a revenue entry or registered instrument does not eliminate the need to examine title."
            rows={propertyStatutes}
          />

          <div id="property-matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Property &amp; Land Matters We Handle
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

          <section className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75" aria-labelledby="property-purchase-checks">
            <h2 id="property-purchase-checks" className="scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Before Buying a Plot, House or Flat in Lucknow
            </h2>
            <p>
              Check the seller&apos;s ownership and authority before paying a
              substantial advance or signing an agreement. Compare the property
              description in the deed with the site, boundaries, and relevant
              records. Identify any co-owner consent, succession issue, mortgage,
              existing tenancy, or pending dispute that could affect the transfer.
              The scope of due diligence depends on the property and the records
              available; no single certificate answers every title question.
            </p>
            <p>
              For an LDA-allotted or leasehold property, examine the allotment
              terms, lease conditions, dues, and applicable transfer permissions.
              For a builder project, review the agreement, promised possession
              date, applicable approvals, and UP RERA registration where required.
              For agricultural land, the recorded tenure and restrictions on
              transfer or proposed use require separate consideration.
            </p>
            <p>
              If a transaction has already failed, preserve the agreement,
              payment evidence, and correspondence. Whether to seek performance
              of the agreement, a refund, cancellation, or another remedy depends
              on its terms, the facts, and applicable time limits.
            </p>
          </section>

          <section className="mb-16" aria-labelledby="property-documents">
            <h2 id="property-documents" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Documents to Bring to a Property Consultation
            </h2>
            <p className="mb-5 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Bring the records available to you. The relevant documents differ
              for a purchase, inheritance, revenue dispute, or possession case;
              missing papers can be identified during the initial review.
            </p>
            <ul className="space-y-3">
              {consultationDocuments.map((document) => (
                <li key={document} className="flex items-start gap-2.5 font-body leading-relaxed text-navy-800 dark:text-cream/75">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                  {document}
                </li>
              ))}
            </ul>
          </section>

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
                We begin with a confidential review of the title, revenue
                records, and documents involved, and advise clearly on the
                risks and the course available — whether that is completing a
                mutation, pursuing partition, seeking possession or
                injunctive relief, or claiming compensation. We represent you
                before the Revenue Courts, the Civil Judge and District
                Courts, and, where necessary, in appeal or writ before the
                Allahabad High Court, Lucknow Bench.
              </p>
            </div>
          </div>

          <GuideStages
            id="property-procedure"
            heading="Property Matters in Lucknow: Seven Practical Stages"
            intro="A title suit, mutation application and agricultural partition follow different routes. These stages explain the decisions and documents involved; the competent forum and applicable procedure must be confirmed for the particular property and relief."
            stages={propertyStages}
          />

          <div id="property-faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Property Lawyer in Lucknow: <em className="text-gold-gradient">FAQs</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Questions about property purchases, ownership, revenue records,
                and court remedies in Lucknow and Uttar Pradesh.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {propertyInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <section className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75" aria-labelledby="related-property-services">
            <h2 id="related-property-services" className="scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Related Legal Assistance
            </h2>
            <p>
              A property matter may overlap with other areas of law. Read about
              our{' '}
              <Link href="/services/civil-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">civil litigation practice</Link>
              {' '}for declarations, injunctions, and contractual disputes, or
              our{' '}
              <Link href="/services/rera-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">RERA legal services</Link>
              {' '}for builder-buyer issues. Owners living abroad can also review
              our{' '}
              <Link href="/services/nri-lawyer" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">legal assistance for NRIs</Link>
              {' '}for document review and representation arrangements.
            </p>
            <p className="text-sm">
              This information is general and is not a title opinion or advice
              on a particular dispute. The appropriate remedy requires review
              of the property documents and facts.
            </p>
          </section>

          <section aria-labelledby="property-title-forum-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="property-title-forum-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Title, Mutation or LDA Dispute: Identify the Issue First</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">A mutation entry, registered instrument, development-authority allotment and right to physical possession are different parts of a property record. Mutation generally serves revenue administration and does not by itself settle ownership. A title or cancellation dispute, agricultural land proceeding and challenge to an LDA decision may require different remedies. We review the land classification, location, title chain and impugned action before advising on civil, revenue or other competent proceedings.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Property documents for a reliable first assessment</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring sale, gift, partition or inheritance records, previous title documents, current revenue entries, maps, possession evidence and any LDA allotment or lease papers. Include litigation records, encumbrance information and the date you first learned of a disputed transfer. An urgent injunction requires supporting facts, not only an allegation of fraud. For builder delays and project-specific relief, see our <Link href="/services/rera-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">Lucknow RERA practice</Link>.</p>
          </section>

          <ServiceBlogs
            posts={propertyBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Property & Land Blogs"
            description="Short reads on property disputes, title issues, and land matters."
            viewAllHref={`/blog?category=${encodeURIComponent('Property & Land Matters')}`}
          />

          <div id="property-consultation" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Property or Land Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your title, partition, possession, or
              land acquisition matter — practising before the Revenue Courts
              and the Allahabad High Court, Lucknow Bench.
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
