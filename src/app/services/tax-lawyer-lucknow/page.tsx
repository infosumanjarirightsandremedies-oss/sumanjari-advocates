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
import ServiceSelection from '@/components/ServiceSelection'
import { serviceSearchContent, withServiceSelectionFaq } from '@/lib/serviceSearch'
import LucknowChambers from '@/components/LucknowChambers'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { taxLucknowStages, taxLucknowStatutes, taxLucknowToc } from '@/lib/guides/taxLucknow'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, LUCKNOW_SERVICE_LOCATION } from '@/lib/contactLinks'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const searchContent = serviceSearchContent['tax-lawyer-lucknow']
const officialTaxSources = [
  { title: 'GSTAT: bench announcements and tribunal information', href: 'https://gstat.gov.in/' },
  { title: 'GSTAT: official e-filing user guides', href: 'https://gstat.gov.in/user-guides' },
  { title: 'ITAT: official e-filing portal and instructions', href: 'https://itat.gov.in/efiling' },
  { title: 'Income Tax Department: scope and transition of the Income-tax Act, 2025', href: 'https://www.incometax.gov.in/iec/foportal/help/all-topics/e-filing-services/objective-and-scope-new-act' },
  { title: 'India Code: Uttar Pradesh GST Section 74A and the applicable period', href: 'https://www.indiacode.nic.in/show-data?abv=null&statehandle=null&actid=AC_UP_88_448_00001_00001_1601884306960&orderno=81&orgactid=AC_UP_88_448_00001_00001_1601884306960' },
]

const taxLead = teamMembers.find((member) => member.slug === 'aditya-narayan-shukla')
const taxTeam = ['arti-dwivedi', 'jitendra-tiwari', 'prabhash-yadav', 'vinod-arya', 'abhishek-mishra']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

function ConsultationActions({ className }: { className: string }) {
  return (
    <div className={`flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      <a href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-900 sm:px-8 sm:text-sm sm:tracking-widest">
        Chamber Contact
      </a>
      <a href={CHAMBER_TEL} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-500/40 px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-300 sm:px-6 sm:text-sm sm:tracking-widest">
        <Phone className="h-4 w-4 shrink-0" /> Call Chamber
      </a>
    </div>
  )
}

export const metadata: Metadata = {
  title: { absolute: searchContent.title },
  description: searchContent.description,
  keywords: [
    searchContent.attorneyKeyword,
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
  other: {
    'geo.placename': 'Lucknow, Uttar Pradesh, India',
    'geo.region': 'IN-UP',
    'geo.position': [],
    ICBM: [],
  },
  openGraph: {
    title: searchContent.title,
    description: searchContent.description,
    url: '/services/tax-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: searchContent.title,
    description: searchContent.description,
  },
}

const taxMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/services/tax-lawyer-lucknow#legal-service`,
  ...LUCKNOW_SERVICE_LOCATION,
  name: 'Sumanjari & Co. Advocates',
  branchOf: { '@id': `${SITE_URL}/#organization` },
  url: `${SITE_URL}/services/tax-lawyer-lucknow`,
  description: searchContent.description,
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Tax, GST and Revenue Proceedings',
  knowsAbout: [
    'GST notices, refunds and statutory appeals',
    'Income-tax assessment and reassessment',
    'ITAT Lucknow Bench proceedings',
    'GSTAT appeals under Section 112',
    'Tax writ petitions under Article 226',
    'Uttar Pradesh stamp duty and revenue disputes',
  ],
}

const matters = [
  {
    icon: Receipt,
    title: 'GST Advisory, Notices & Appeals',
    points: [
      'Advisory on GST registration and compliance for business clients',
      'Replies to show-cause notices in Form DRC-01 under Sections 73, 74 and 74A',
      'Challenging provisional bank attachment under Section 83 (Form DRC-22) and summons or search action under Sections 67 and 70',
      'First appeals under Section 107 and eligible further appeals under Section 112 before the competent GSTAT bench',
      'GST refund rejection or delay, registration cancellation and goods-in-transit disputes under their applicable procedures',
    ],
  },
  {
    icon: ScrollText,
    title: 'Income Tax Assessment, Reassessment & ITAT Appeals',
    points: [
      'Advisory on income tax compliance, in coordination with chartered accountants',
      'Assessment and reassessment proceedings, including Sections 148/148A for matters governed by the Income-tax Act, 1961',
      'Allocated first appeals and eligible ITAT Lucknow Bench appeals under the applicable income-tax enactment and transitional provisions',
    ],
  },
  {
    icon: Receipt,
    title: 'Stamp Duty & Registration Matters',
    points: [
      'Stamp duty under the Indian Stamp Act, 1899, as applicable in Uttar Pradesh',
      'Section 47-A undervaluation references and Section 56 appeals before the Chief Controlling Revenue Authority (CCRA)',
      'Registration of documents under Section 17 of the Registration Act, 1908',
      'Advisory on concessional stamp duty for transfers between blood relatives',
    ],
  },
  {
    icon: Home,
    title: 'Municipal House Tax & Property Tax Assessment Disputes',
    points: [
      'Challenging municipal house tax and property tax assessments before the municipal authority',
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
    icon: Gavel,
    title: 'Recovery of Government Dues & Tax Arrears',
    points: [
      'Representation in recovery certificate proceedings for tax and revenue arrears, including tehsil recovery certificates (Talbi Parwana)',
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
    local:
      'Registration is handled through the sub-registrar office with jurisdiction over the property, and a deficiency or undervaluation reference proceeds before the Collector (Stamps) of the district. The competent office follows the location of the property, not the parties\' residence or the nearest office to the High Court. Section 56 appeals go to the Chief Controlling Revenue Authority.',
    checks: ['Locality, mohalla and district rate-schedule entry for the property', 'Registration endorsement, receipt and valuation sheet', 'Collector\'s notice, hearing dates and reasons for the proposed value'],
  },
  {
    title: 'GST Proper Officer & Appellate Authority',
    blurb:
      'GST notice responses and first appeals before the designated Central or State authority — the CGST & Central Excise Commissionerate at 38, M.G. Marg, Hazratganj, and the UPGST / Commercial Tax HQ at Vibhuti Khand, Gomti Nagar; these are distinct from a further GSTAT appeal.',
    local:
      'In Lucknow the Central administration is associated with the CGST & Central Excise Commissionerate in Hazratganj, and the State administration with the Commercial Tax headquarters in Vibhuti Khand, Gomti Nagar. A registered person is allocated to one administration for a given proceeding, so the issuing officer, the portal order and the Form DRC-01 header decide where the reply and hearing are directed. Parallel or cross-empowered proceedings for the same period need a separate check.',
    checks: ['Whether the notice is under the CGST Act or the UPGST Act', 'Issuing officer, jurisdiction code and DIN on the notice', 'Hearing date, mode of hearing and portal upload requirements'],
  },
  {
    title: 'Income Tax Authorities & First Appellate Authority',
    blurb:
      'Assessment responses and eligible first appeals before the allocated Joint Commissioner (Appeals) or Commissioner (Appeals), under the law and scheme applicable to the relevant proceeding. Aayakar Bhawan (Pr. Chief Commissioner of Income Tax) is at 5, Ashok Marg, Hazratganj, Lucknow.',
    local:
      'Aayakar Bhawan on Ashok Marg, Hazratganj, is the principal income-tax office in the city, but many assessments and first appeals run through electronic or faceless procedures, so a taxpayer\'s record often sits on the portal rather than in a Lucknow file. Confirm from the notice whether a jurisdictional assessing officer or a centralised unit issued it, and whether any physical or video hearing is offered.',
    checks: ['PAN, assessment or tax year and notice section', 'Portal reference and the date of electronic service', 'Authority named for the hearing and the response window'],
  },
  {
    title: 'ITAT, Lucknow Bench',
    blurb:
      'Eligible income-tax appeals before the ITAT Lucknow Bench at Vibhuti Khand, Gomti Nagar, subject to the governing enactment, prior appellate order where required, current territorial allocation and bench assignment.',
    local:
      'The Lucknow Bench sits in Vibhuti Khand, Gomti Nagar, close to the High Court Lucknow Bench and the State GST headquarters, which makes same-day coordination across these forums practical. The ITAT\'s official e-filing resources and bench notices, including notices on holidays and non-functioning of regular benches, should be read before fixing a hearing or travel plan.',
    checks: ['First appellate order and proof of its communication', 'Bench allocation and the listing or cause-list entry', 'Latest ITAT e-filing instructions and bench notices'],
  },
  {
    title: 'GST Appellate Tribunal (GSTAT), Lucknow',
    blurb:
      'Eligible further GST appeals, subject to the competent bench, current filing arrangements, transitional notifications and statutory conditions.',
    local:
      'GSTAT appeals are filed through its official e-filing portal, and bench composition, roster arrangements and transitional filing windows are announced by the Tribunal. A Lucknow-based appellant should confirm from the current GSTAT announcements which bench is competent for Uttar Pradesh categories of case before relying on a physical location.',
    checks: ['Section 107 or 108 order being appealed, with its date', 'Competent bench and category under the current roster', 'Official e-filing guide and any transitional notification'],
  },
  {
    title: 'Municipal Assessment & Appellate Authorities',
    blurb:
      'Property-tax objections and appeals before the relevant local body and designated forum under its governing legislation, separate from stamp valuation.',
    local:
      'In Lucknow the local body is ordinarily the Lucknow Municipal Corporation, but the assessment zone, ward and property identification number control the record. Check whether the property sits within municipal limits or another local body, since the objection and appeal forums differ. Annual-value and use-category entries are frequently corrected on measurement and occupancy evidence.',
    checks: ['Ward, zone and house or property number', 'Assessment notice, bill and earlier payment receipts', 'Occupancy, use and area evidence supporting a correction'],
  },
  {
    title: 'Mining & Revenue Authorities',
    blurb:
      'The source authority decides the underlying demand; Collector or Tehsildar recovery proceedings require separate review of the certificate and applicable recovery law.',
    local:
      'Mining royalty and lease matters are administered at district level, while recovery certificates are executed through the tehsil and the Collector\'s office. The issuing district, the demand calculation and the certificate itself should be examined separately, because a recovery officer does not usually decide whether the underlying demand is correct.',
    checks: ['Lease, permit and royalty calculation sheet', 'Recovery certificate, tehsil and date of issue', 'Inspection reports and any pending review or appeal'],
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Statutory court remedies or exceptional writ review from Chamber Block D-311, Allahabad High Court, Lucknow Bench, subject to the particular enactment, territorial jurisdiction and available alternative remedies.',
    local:
      'The Lucknow Bench in Vibhuti Khand, Gomti Nagar, hears matters whose cause of action arises within the territorial areas assigned to it; a cause of action elsewhere in Uttar Pradesh may belong at Allahabad (Prayagraj). Our High Court chamber, Block D-311, is within the court complex. Confirm bench, listing and any e-filing or hearing directions on the court\'s official notices before a hearing.',
    checks: ['District where the impugned authority acted', 'Statutory appeal available and why it is or is not adequate', 'Cause list, interim orders and compliance deadlines'],
  },
]

const taxInsights = [
  {
    icon: Gavel,
    title: 'What is the difference between a Section 107 appeal and a GSTAT appeal in Lucknow?',
    excerpt:
      'Section 107 ordinarily provides the first appeal against an adjudicating authority\'s GST order. Section 112 provides an eligible further appeal to GSTAT against an appellate or revisional order under Sections 107 or 108. Identify the challenged order before selecting the forum. Each route has its own limitation, prescribed filing requirements and deposit conditions. A taxpayer in Lucknow should verify the competent Central or State appellate authority, GSTAT bench allocation and current portal directions; GSTAT is not the initial forum for answering DRC-01.',
  },
  {
    icon: Landmark,
    title: 'When can a tax writ be filed before the Lucknow Bench against a GST demand order?',
    excerpt:
      'The High Court may consider an Article 226 petition in exceptional circumstances, such as lack of jurisdiction, breach of natural justice, a challenge to statutory validity or infringement of fundamental rights. Availability of a statutory appeal remains important, and the Lucknow Bench must have territorial jurisdiction over the cause of action. Disagreement with the tax calculation, inability to pay a deposit or expiry of an appeal deadline does not by itself establish a right to bypass the appeal. Interim protection requires separate consideration; filing a writ does not automatically stay recovery.',
  },
  {
    icon: ScrollText,
    title: 'What is the procedure for an appeal before the ITAT Lucknow Bench?',
    excerpt:
      'First confirm that the challenged order is appealable to ITAT and falls within the Lucknow Bench\'s current allocation. Compile the order, proof of communication, relevant assessment records, grounds of appeal, required authorization and fee or payment records. File through the prescribed procedure, using the official ITAT e-filing resources and current bench directions. Retain the acknowledgment, address registry defects, and prepare an indexed paper book and submissions for the hearing. Limitation, any condonation request and recovery protection require separate review under the income-tax law governing the proceeding.',
  },
  {
    icon: Receipt,
    title: 'How should a GST refund rejection or delay be examined?',
    excerpt:
      'Identify whether the refund is pending, subject to a deficiency communication or show-cause notice, or rejected by a final order. Preserve the refund application acknowledgment, invoices, return reconciliations, relevant export or supply evidence, correspondence and order. The refund category and period determine eligibility and supporting records. A final rejection may have a statutory appeal route; delay or a procedural failure needs its own remedy analysis. Interest on a delayed refund is subject to statutory conditions, not an automatic entitlement in every case.',
  },
  {
    icon: Receipt,
    title: 'Does replying to DRC-01 or filing an appeal release a GST bank attachment?',
    excerpt:
      'No. A demand notice, a provisional attachment under Section 83 and recovery of an adjudicated demand are different actions. Obtain the attachment order, bank communication, reasons and dates, and identify the statutory procedure for objections or release. Review whether the applicable conditions and duration of attachment are satisfied. A notice reply alone does not release a bank account. Recovery protection after compliance with specified appeal conditions must be distinguished from relief against a separate provisional attachment.',
  },
  {
    icon: ScrollText,
    title: 'What is the role of an advocate and a chartered accountant in a tax dispute?',
    excerpt:
      'An accountant can assist with books, returns, reconciliations and computation; an advocate can assess legal grounds, jurisdiction, drafting and court remedies. Representation rights before a particular authority or tribunal depend on the governing law, and coordination avoids inconsistencies between figures and pleadings. Agree on who prepares the factual reconciliation, files the reply or appeal and appears at each stage. Fees depend on the record, forum and agreed scope rather than a promised result.',
  },
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
  '@id': `${SITE_URL}/services/tax-lawyer-lucknow#faqs`,
  mainEntity: taxInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: { '@type': 'Answer', text: excerpt },
  })),
}

const taxBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Tax Lawyer & GST Advocate in Lucknow', item: `${SITE_URL}/services/tax-lawyer-lucknow` },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withServiceSelectionFaq(taxFaqJsonLd, searchContent)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxBreadcrumbJsonLd) }}
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
              Tax Lawyers &amp; GST Advocates{' '}
              <em className="text-gold-gradient">in Lucknow: Direct Tax, Indirect Tax &amp; Tribunal Litigation</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Sumanjari &amp; Co. Advocates maintains a tax and revenue practice
              in Lucknow for companies, firms and individual assessees. Matters
              include GST notices and statutory appeals, income-tax proceedings
              before the ITAT Lucknow Bench, eligible GSTAT appeals, and tax
              writs before the Allahabad High Court, Lucknow Bench. The issuing
              authority, tax period and order determine the appropriate forum.
            </p>
            <ServiceStats service="tax" />
            <p className="mt-4 font-body text-sm text-navy-700 dark:text-cream/60">
              Prepared by Sumanjari &amp; Co. Advocates. General legal information,
              not legal advice or a guarantee of outcome.
            </p>
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

          <LucknowChambers />
          <ServiceSelection content={searchContent} />

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

          <section id="gst-practice-lucknow" aria-labelledby="gst-practice-heading" className="mb-16 scroll-mt-28 space-y-4">
            <h2 id="gst-practice-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Goods and Services Tax (GST) Practice in Lucknow
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              GST disputes can concern input tax credit, return mismatches, classification,
              valuation or the treatment of a supply. For a DRC-01 demand summary, obtain
              the full show-cause notice and relied-upon material. Sections 73 and 74
              concern periods up to financial year 2023-24; Section 74A addresses
              determination for financial year 2024-25 onwards under the applicable
              text. The period, allegation and procedural stage must be identified
              before preparing a reconciliation or legal response.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Notice replies, appeals and recovery are separate decisions</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              A reply should address each allegation with return data, invoices, ledgers
              and payment evidence. Record requests for a hearing and retain portal
              acknowledgments. After adjudication, examine the Section 107 first appeal
              route; eligible further appeals under Section 112 go to the competent
              GSTAT bench. Check admitted liability, the applicable deposit and any
              statutory recovery protection separately. For Section 83 bank attachments,
              retain Form DRC-22 and bank communications and examine the specific
              objection or release procedure.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Refunds, registration and goods in transit</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Refund rejection or delay requires the application record and the
              relevant refund category. Registration cancellation requires the notice,
              order and compliance history; revocation and appeal are not interchangeable.
              Detention of goods requires invoices, e-way bills, transport records and
              the actual detention or penalty order. Do not apply a demand-notice
              deadline or remedy to these distinct proceedings without checking the law.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Input tax credit and return reconciliation</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              An input-tax-credit dispute requires more than a comparison of portal
              totals. Map each disputed invoice to the supplier, tax period, purchase
              ledger, receipt of goods or services and payment record. Compare the
              returns and statements relevant to that period, including available
              GSTR-2B records, and distinguish timing differences, duplicate entries,
              credit notes and reversals from disputed eligibility. For a supplier-related
              allegation, preserve transaction documents and communications rather
              than assuming either that the invoice alone proves entitlement or that
              every mismatch establishes an ineligible credit. Counsel and the
              accountant should agree on a reconciliation that can be traced back
              to the original records.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Preparing an allegation-wise reply and hearing record</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Separate the proposed tax, interest and penalty and identify the
              calculation and legal basis for each. A useful reply sets out the
              allegation, the taxpayer&apos;s explanation, the supporting document
              and the relief requested in a consistent sequence. Address classification
              or valuation questions through the actual contracts and supply records,
              not only accounting labels. Request missing relied-upon material and
              explain why it matters. Retain the filed reply, annexures, acknowledgment
              and hearing communications. After the order, check whether the authority
              dealt with the material objections and evidence; those findings help
              determine focused appeal grounds rather than simply repeating the reply.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Building the first-appeal and GSTAT record</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Keep the adjudication order, proof of communication, original notice,
              reply and indexed evidence together. Identify which findings are
              challenged and which amounts, if any, are admitted. Before filing,
              verify the prescribed form, competent authority, limitation,
              authorization and applicable payment conditions. For a GSTAT appeal,
              include the relevant appellate or revisional order and earlier appeal
              papers, and check the current bench and portal directions. Preserve
              filing and payment acknowledgments and address registry defects
              promptly. Any request to introduce material not considered below
              needs a separate procedural assessment; an appeal is not a reason
              to reconstruct or alter the underlying business records.
            </p>
          </section>

          <section id="income-tax-proceedings" aria-labelledby="income-tax-heading" className="mb-16 scroll-mt-28 space-y-4">
            <h2 id="income-tax-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Direct Tax &amp; Income Tax Proceedings
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Income-tax notices may concern return discrepancies, scrutiny, a
              reassessment, penalties or recovery. Review the relevant year, return,
              computation, tax-credit statements, bank records and earlier responses.
              The Income-tax Act, 2025 came into force on 1 April 2026; earlier-year
              matters and saved proceedings require analysis under the transition
              provisions. References to Sections 148/148A or 253 of the 1961 Act
              should not be treated as section numbers for every new-Act proceeding.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">First appeals and the ITAT Lucknow Bench</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Check whether the order goes first to the allocated Joint Commissioner
              (Appeals) or Commissioner (Appeals), including the applicable electronic
              procedure. ITAT hears eligible appeals, not every initial assessment
              objection. For Lucknow Bench matters, confirm territorial allocation,
              prepare focused grounds and an indexed record, and follow current
              filing and hearing directions. Rectification, an appeal and a recovery
              stay request have distinct legal purposes. Further High Court remedies
              have their own statutory gateways, including substantial questions of
              law where required.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Scrutiny, transaction explanations and tax-credit mismatches</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Start with the exact issue raised rather than sending an undifferentiated
              bundle of financial records. Reconcile the return and computation with
              the financial statements and applicable tax-credit information.
              Where the notice concerns bank deposits, property transactions,
              business receipts or deductions, prepare a transaction-wise explanation
              supported by the relevant agreements, invoices and bank trail.
              AIS or other reported information may need explanation or correction;
              a reported entry should not be treated as a complete account of the
              transaction. Distinguish a factual mismatch from a dispute about the
              legal treatment of income, expenditure or a claimed deduction.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Reassessment notices and the relevant-year chronology</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              For a reassessment matter, collect the original return, earlier
              assessment history, information supplied by the authority and each
              subsequent notice, response and order. In a proceeding governed by
              the 1961 Act, references to Sections 148 and 148A must be examined
              against the applicable version and transitional rules. Check the
              notice date, service record, relevant year, stated basis and the
              procedural steps actually followed. Do not assume that a notice is
              invalid merely because reassessment is proposed, or that every
              reassessment challenge belongs directly in the High Court. The
              available response, appellate route and any exceptional judicial
              review depend on the particular record.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Electronic proceedings and preparation for an ITAT hearing</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              In electronic assessment or first-appellate proceedings, retain
              downloaded notices, complete submissions and portal acknowledgments,
              including any hearing request. Record a technical filing difficulty
              with dated evidence and use the available official procedure; an
              unanswered portal message should not be assumed to extend a deadline.
              For ITAT, organize the challenged findings, grounds of appeal,
              assessment and first-appellate orders, and an indexed paper book.
              Distinguish evidence already on the record from proposed additional
              evidence and check the applicable procedure for the latter. Written
              submissions should connect each legal ground to the facts and the
              documents that support it.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Demand, penalty and implementation after an order</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              An assessment dispute, penalty proceeding and recovery demand may
              require separate responses. Review credited payments, disputed and
              admitted amounts, and the conditions of any stay already granted.
              A rectification application is not a substitute for an appeal on
              every contested issue. After appellate relief, check the consequential
              computation, demand adjustment and any refund or payment credit.
              Keep correspondence and orders until the result is reflected in the
              relevant records; the decision on the merits and its administrative
              implementation are distinct steps.
            </p>
          </section>

          <section id="tax-high-court-writs" aria-labelledby="tax-writ-heading" className="mb-16 scroll-mt-28 space-y-4">
            <h2 id="tax-writ-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              High Court Writs &amp; Commercial Tax Litigation
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Article 226 review before the Lucknow Bench of the Allahabad High Court
              requires a maintainability and territorial-jurisdiction assessment.
              Potential issues include an authority acting without jurisdiction,
              denial of a required hearing or a challenge to statutory validity.
              The petition should identify the impugned action, the legal defect,
              available alternative remedies and the precise relief sought.
              An expired appeal deadline does not itself make a writ maintainable.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Assessing maintainability and the alternative remedy</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              First identify whether the proposed challenge concerns a notice,
              final demand, appellate order, refund action or attachment. Then
              examine the remedy provided by the governing enactment and the
              reason judicial review is sought instead. A jurisdictional objection
              should identify the alleged absence or excess of statutory power;
              a natural-justice objection should explain the missing opportunity
              and its significance to the decision. Merely describing an assessment
              as arbitrary does not establish an exception to the statutory route.
              The court&apos;s discretionary review and the merits of the underlying
              tax dispute are separate questions, and neither should be presented
              as a guaranteed result.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Territorial jurisdiction of the Lucknow Bench</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Bench selection requires examination of the cause of action and
              the applicable territorial rules. Record where the relevant authority
              acted, how the impugned decision arose and the facts connecting the
              dispute to the proposed forum. A taxpayer&apos;s address in Lucknow,
              counsel&apos;s chamber location or receipt of an electronic message
              should not be treated in isolation as conclusive. Identify the
              appropriate respondents and distinguish the authority responsible
              for the decision from a department that only implements recovery.
              Connected proceedings and existing orders must also be considered
              when deciding where and how to seek relief.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Petition, annexures and interim protection</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Prepare a dated chronology with the challenged order, notice,
              relied-upon material, reply and hearing record. Link each asserted
              legal defect to an identified document, state the relief sought,
              and disclose relevant earlier litigation, pending appeals and interim
              orders. If recovery or an attachment creates immediate difficulty,
              preserve the bank or recovery communication and explain the urgency
              with supporting facts. A request for interim relief should address
              the actual action to be restrained and any applicable conditions.
              Filing the petition or obtaining a listing date is not equivalent
              to a stay; only the operative court order establishes the protection
              granted and its scope.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Relief, remand and compliance with the court&apos;s directions</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Judicial review may result in directions to consider a representation,
              provide a hearing or decide a matter afresh, rather than finally
              extinguishing the tax demand. Read the operative directions, deadlines
              and conditions carefully and preserve proof of compliance or service
              where required. For a remanded matter, prepare the fresh response
              and evidence within the permitted scope. For legacy VAT or commercial-tax
              disputes, continue to check the governing law rather than importing
              GST procedures. Counsel should also review whether a later order
              requires a statutory appeal, implementation request or another
              case-specific remedy.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Preserve notices, orders, replies, hearing records, service evidence
              and any recovery or attachment communications. Interim protection is
              a separate request and depends on the facts and the court&apos;s order.
              Legacy VAT or commercial-tax proceedings must be examined under their
              own enactment and savings provisions rather than using GST appeal rules.
              See our{' '}
              <Link href="/services/constitutional-writ-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">constitutional and writ procedure guide</Link>
              {' '}and{' '}
              <Link href="/services/high-court-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">Lucknow High Court practice page</Link>
              {' '}for related court procedure.
            </p>
          </section>

          <section id="lucknow-tax-jurisdiction" aria-labelledby="lucknow-tax-jurisdiction-heading" className="mb-16 scroll-mt-28 space-y-4">
            <h2 id="lucknow-tax-jurisdiction-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Local Tax Jurisdiction and Business Records</h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Lucknow&apos;s tax institutions include the State GST / Commercial Tax
              headquarters in Vibhuti Khand, the CGST Commissionerate in Hazratganj
              and the ITAT Lucknow Bench. An institutional headquarters is not
              necessarily the officer or appellate forum allocated to an individual
              taxpayer. Confirm jurisdiction from the notice, registration record
              and current allocation rather than the nearest office.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              For trading, transport and manufacturing records connected with
              Transport Nagar, Sarojini Nagar or Talkatora, relevant evidence may
              include goods-receipt notes, e-way bills, stock registers, supply
              contracts and invoice-to-return reconciliations. These locality
              references provide business context, not a claim of branch offices
              or a separate legal jurisdiction. The two chamber addresses are
              listed above.
            </p>
          </section>

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
            <p className="mb-4 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/70">
              Lucknow&apos;s tax forums are spread across two clusters. Vibhuti Khand,
              Gomti Nagar, holds the Allahabad High Court Lucknow Bench, the ITAT
              Lucknow Bench and the State GST headquarters. Hazratganj holds the
              CGST Commissionerate and Aayakar Bhawan. Property-based forums such as
              the sub-registrar, municipal ward and tehsil follow the location of the
              property, not the nearest office.
            </p>
            <p className="mb-8 max-w-3xl font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
              Offices, benches, hearing modes and e-filing arrangements change. The
              entries below describe the usual local structure; the notice, order and
              the official notice of the forum decide the actual venue and procedure.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {jurisdiction.map(({ title, blurb, local, checks }) => (
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
                  <p className="mt-3 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    <strong>Local detail:</strong> {local}
                  </p>
                  <p className="mt-3 font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Check locally</p>
                  <ul className="mt-1 list-disc space-y-1 pl-5 font-body text-sm text-navy-700/85 dark:text-cream/60">
                    {checks.map((item) => <li key={item}>{item}</li>)}
                  </ul>
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
                Tax &amp; GST <em className="text-gold-gradient">Frequently Asked Questions</em>
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
                </div>
              ))}
            </div>
          </div>

          <section aria-labelledby="tax-notice-appeal-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="tax-notice-appeal-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Tax Notice, Demand Order or Revenue Recovery: What Comes Next?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">First distinguish a show-cause notice from a final assessment, penalty order or recovery action. The governing statute, period involved, issuing authority and communication date determine the reply or appeal route. GST, income tax, stamp duty, municipal property tax and mining revenue disputes have different procedures; a writ petition is not an automatic replacement for a statutory remedy. We check current forum arrangements, limitation, any pre-deposit and the separate requirements for protection from recovery.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Records for a tax or mining revenue consultation</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Share the full notice or order, portal acknowledgements, returns, ledgers, invoices, earlier replies and payment records. For stamp duty or property valuation, include the instrument and assessment material; for mining lease or royalty disputes, include the lease, permits, inspection records and demand calculation. Preparing a reply or appeal does not itself stay recovery. The legal team can coordinate with your accountant or technical adviser while reviewing the legal grounds and procedural deadlines.</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <li><strong>GST:</strong> full notice and DRC summary, GSTIN details, GSTR-1/3B reconciliations, available GSTR-2B records, invoices, ledgers and earlier replies; refund or transport records where relevant.</li>
              <li><strong>Income tax:</strong> relevant-year return and computation, financial statements, AIS/TIS and Form 26AS where applicable, notice or order, and supporting bank or transaction records.</li>
              <li><strong>Appeals:</strong> challenged order, proof of communication, earlier appeal papers, authorization and payment records. Record both the response date shown and the legal limitation trigger.</li>
              <li><strong>Recovery or writ review:</strong> attachment or recovery order, bank communications, hearing requests, pending proceedings and every operative interim order.</li>
            </ul>
            <p className="mt-4 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">Use an agreed secure channel for financial records. Do not send portal passwords, OTPs or unnecessary personal identifiers with an initial enquiry.</p>
          </section>

          <section id="tax-official-resources" aria-labelledby="tax-official-resources-heading" className="mb-16 scroll-mt-28 space-y-4">
            <h2 id="tax-official-resources-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Official Tax Laws and Filing Resources</h2>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">
              Check the governing Act, amendments, notifications and current bench
              directions before relying on a procedural summary. GSTAT provides an
              official e-filing system and user guides; older transitional filing
              announcements are not a universal deadline for every appeal. An online
              filing acknowledgment does not by itself establish that all statutory
              conditions have been met.
            </p>
            <ul className="list-disc space-y-2 pl-5 font-body">
              {officialTaxSources.map(({ title, href }) => (
                <li key={href}>
                  <a href={href} className="text-gold-700 underline underline-offset-4 dark:text-gold-400">{title}</a>
                </li>
              ))}
            </ul>
            <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
              This page is informational, not solicitation or a substitute for
              case-specific advice. Reading it does not create an advocate-client
              relationship. Filing deadlines, deposits, jurisdiction and interim
              relief must be checked for the actual proceeding.
            </p>
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
              Tax &amp; Revenue Chamber Enquiries
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Chamber addresses and contact details are available for enquiries
              about tax and revenue proceedings. Representation is subject to
              conflict checks, the agreed scope and the competent forum.
            </p>
            <a href="/#contact" className="btn-gold inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900">
              Chamber Contact Details
            </a>
          </div>
        </div>
      </section>

      <FirmCredentials />
      <Footer />
    </main>
  )
}
