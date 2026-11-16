import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Building2, FileCheck, MapPin, ScrollText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceContactLinks from '@/components/ServiceContactLinks'
import ServiceSelection from '@/components/ServiceSelection'
import { serviceSearchContent, withServiceSelectionFaq } from '@/lib/serviceSearch'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { reraNoidaStages, reraNoidaToc } from '@/lib/guides/reraNoida'
import { reraStatutes } from '@/lib/guides/reraLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { NCR_CHAMBER_ADDRESS, whatsappUrl } from '@/lib/contactLinks'
import { teamMembers } from '@/lib/team'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const searchContent = serviceSearchContent['rera-lawyer-noida']
const PAGE_PATH = '/services/rera-lawyer-noida'
const reraAdvocate = teamMembers.find((member) => member.slug === 'shishir-pandey')
const pageTeam = ['prerna-yaduvanshi', 'jyotish-raj', 'aniket-bose']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

// Noida-local office, shown only on the Noida and Ghaziabad RERA pages —
// intentionally not added to contactLinks.ts, Contact.tsx or Footer.tsx.
const NOIDA_OFFICE_ADDRESS = {
  street: 'Klassic Tower A6, Jaypee Wishtown Society',
  city: 'Sector 134, Noida',
} as const

function ConsultationActions({ className }: { className: string }) {
  return (
    <div className={`flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      <a href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-900 sm:px-8 sm:text-sm sm:tracking-widest">
        Consult Now
      </a>
      <ServiceContactLinks />
    </div>
  )
}

export const metadata: Metadata = {
  title: { absolute: searchContent.title },
  description: searchContent.description,
  alternates: { canonical: PAGE_PATH },
  keywords: [searchContent.attorneyKeyword, 'RERA Lawyer Noida', 'RERA Lawyer Greater Noida', 'UP RERA Greater Noida Lawyer', 'Builder Buyer Dispute Noida', 'Delayed Possession Lawyer Noida', 'RERA Refund Claim Noida', 'UP RERA Order Enforcement Noida', 'RERA Appeal Lawyer Uttar Pradesh'],
  twitter: {
    card: 'summary_large_image',
    title: 'RERA Lawyer in Noida & Greater Noida | Builder Claims',
    description: 'Project-specific advice on UP-RERA complaints, delayed possession, refunds, order enforcement and appeals for Noida homebuyers.',
  },
  openGraph: {
    title: 'RERA Advocate & Lawyer in Noida & Greater Noida | Sumanjari & Co. Advocates',
    description: 'Representation for Noida and Greater Noida homebuyers and developers in UP-RERA complaints, possession delays, refund claims and appeals.',
    url: PAGE_PATH,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'RERA Legal Services for Noida & Greater Noida',
  url: `${SITE_URL}${PAGE_PATH}`,
  description: 'RERA representation for homebuyers and developers with projects in Noida and Greater Noida, including builder-buyer disputes, possession delays, refunds and appeals.',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' },
  ],
  serviceType: 'RERA Legal Services',
}

const matters = [
  {
    title: 'Delayed Possession & Refund Claims',
    text: 'Review of the agreed handover date, extensions, payments and project status to assess a claim for possession, delay interest or a refund. The relief available depends on the agreement, facts and applicable law.',
  },
  {
    title: 'Amenities, Carpet Area & Project Commitments',
    text: 'Assessment of differences between the booking representations, registered project disclosures and what has been delivered, including disputed amenities, specifications and carpet area.',
  },
  {
    title: 'Builder Demands & Booking Disputes',
    text: 'Advice on disputed payment demands, cancellation notices, deductions and changes to agreed terms, based on the allotment letter, builder-buyer agreement and payment record.',
  },
  {
    title: 'Compliance, Appeals & Enforcement',
    text: 'Assistance for developers with RERA compliance and responses to complaints, and for parties seeking review of appeal options or enforcement of an existing order. Forum and maintainability are assessed individually.',
  },
]

const reraFAQs = [
  {
    question: 'How do I check a Noida or Greater Noida project on UP-RERA?',
    answer: 'Use the official UP-RERA portal to check the project registration and available disclosures. Match the registered promoter, project address and phase to your allotment letter and agreement; a marketing name alone may not identify the correct registration. Save the relevant disclosures alongside your booking and payment records.',
    source: 'https://www.up-rera.in/',
    sourceLabel: 'UP-RERA project portal',
  },
  {
    question: 'Can I seek a refund if my builder has delayed possession?',
    answer: 'Section 18(1) addresses a promoter\'s failure to complete or give possession in accordance with the agreement for sale. Where its conditions are met, an allottee who wishes to withdraw may demand return of the amount paid with interest at the prescribed rate, with compensation available in the manner provided by the Act. The agreement, possession date, payment history and applicable orders must be reviewed before choosing this remedy.',
    source: 'https://www.up-rera.in/pdf/reraact.pdf',
    sourceLabel: 'RERA Act, Section 18',
  },
  {
    question: 'What if I want possession rather than a refund?',
    answer: 'The proviso to Section 18(1) provides for interest for every month of delay until possession is handed over where the allottee does not intend to withdraw from the project. The applicable period and prescribed rate require assessment against the agreement and facts. A refund claim and a claim to remain in the project should not be treated as interchangeable; an existing settlement or order can also affect the relief sought.',
    source: 'https://www.up-rera.in/pdf/reraact.pdf',
    sourceLabel: 'RERA Act, Section 18(1)',
  },
  {
    question: 'How is a complaint for a Noida or Greater Noida project filed?',
    answer: 'Section 31 permits an aggrieved person to complain about violations of the Act, rules or regulations. UP-RERA provides an online complaint-registration route. Before filing, identify the correct project and parties, set out a dated chronology, attach supporting documents and specify the relief sought. Check the current portal instructions, fee and applicable forum; the firm\'s office location does not by itself determine jurisdiction.',
    source: 'https://www.up-rera.in/SignUp',
    sourceLabel: 'UP-RERA complaint registration',
  },
  {
    question: 'Are refund, delay interest and compensation the same claim?',
    answer: 'No. The Act distinguishes refund and interest remedies from adjudication of compensation. Section 71 provides for an adjudicating officer to determine compensation under Sections 12, 14, 18 and 19. UP-RERA also lists a separate complaint route for compensation. The allegations and relief requested should be reviewed so the claim follows the appropriate procedure rather than assuming all remedies are decided through one application.',
    source: 'https://www.up-rera.in/pdf/reraact.pdf',
    sourceLabel: 'RERA Act, Sections 18 and 71',
  },
  {
    question: 'Can I raise construction defects after taking possession?',
    answer: 'Section 14(3) covers structural defects and specified defects in workmanship, quality, services or the promoter\'s obligations under the agreement for sale. Defects brought to the promoter\'s notice within five years of handing over possession must be rectified without further charge within thirty days; failure can give rise to appropriate compensation under the Act. Preserve the possession date, written notice, photographs and any technical assessment. Not every maintenance issue necessarily falls within this provision.',
    source: 'https://www.up-rera.in/pdf/reraact.pdf',
    sourceLabel: 'RERA Act, Section 14(3)',
  },
  {
    question: 'What is the deadline to appeal a RERA order?',
    answer: 'Section 44 generally requires an appeal to the Appellate Tribunal within sixty days from receipt of a copy of the Authority\'s or adjudicating officer\'s direction, order or decision. The Tribunal may entertain a later appeal if sufficient cause is shown. Preserve proof of receipt and obtain advice promptly; do not assume a delayed appeal will be accepted. Promoter appeals also require review of the pre-deposit requirements in Section 43(5).',
    source: 'https://www.up-rera.in/pdf/reraact.pdf',
    sourceLabel: 'RERA Act, Sections 43 and 44',
  },
  {
    question: 'What can I do if the builder does not comply with a RERA order?',
    answer: 'UP-RERA provides a Request for Order Execution route. Section 40 addresses recovery and enforcement under the Act. Keep the order, proof of service, the compliance deadline and records of any payment or outstanding obligation. The appropriate execution or recovery steps depend on the terms of the order and any appeal or stay; obtaining an order does not guarantee immediate payment.',
    source: 'https://www.up-rera.in/frm_OrderExecution.aspx',
    sourceLabel: 'UP-RERA order execution portal',
  },
  {
    question: 'What is the UP-RERA conciliation forum, and does it cover Noida projects?',
    answer: 'UP-RERA operates conciliation forums, including one at Greater Noida in addition to Lucknow, where nominees of the buyers\' and promoters\' associations help negotiate a settlement before a contested hearing. Because the promoter also consents to conciliation, settlement can be faster, and a failed attempt still leaves a Section 31 complaint available. Whether conciliation suits a particular matter depends on the facts, the relief sought and the promoter\'s willingness to engage.',
    source: 'https://up-rera.in/complentRegister',
    sourceLabel: 'UP-RERA conciliation forum',
  },
  {
    question: 'My builder is undergoing NCLT insolvency — am I still a "financial creditor"?',
    answer: 'Generally, yes. The Supreme Court in Pioneer Urban Land and Infrastructure Ltd. v. Union of India (2019) upheld the IBC amendment treating real-estate allottees as financial creditors, letting them trigger or join a Corporate Insolvency Resolution Process (CIRP) and sit on the Committee of Creditors. However, Manish Kumar v. Union of India (2021) requires an insolvency application under Section 7 of the IBC to be filed jointly by at least 100 allottees of the same project, or 10% of them, whichever is fewer; an individual allottee cannot trigger insolvency alone. Check the current number of allottees who have joined, the project\'s CIRP status and any resolution plan before relying on this route.',
    source: 'https://indiankanoon.org/doc/118478827/',
    sourceLabel: 'Pioneer Urban Land v. Union of India (2019)',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: reraFAQs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'RERA Lawyer in Noida & Greater Noida', item: `${SITE_URL}${PAGE_PATH}` },
  ],
}

export default async function NoidaReraPage() {
  const posts = getBlogPostsByCategory('RERA').then((posts) => posts.filter(
    (post) => /\bNoida\b/i.test(`${post.title} ${post.excerpt}`)
  ))

  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(withServiceSelectionFaq(faqSchema, searchContent)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:pt-36">
        <Link href="/services/rera-lawyer-lucknow" className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45">
          <ArrowLeft className="h-3.5 w-3.5" /> RERA Services in Lucknow
        </Link>

        <div className="mb-16 grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <span className="font-caps text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-400">UP-RERA &amp; Appellate Matters</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.12] text-navy-900 dark:text-cream md:text-[3.25rem]">
              RERA Advocate in Noida &amp; Greater Noida —{' '}
              <em className="text-gold-gradient">UP-RERA NCR Bench &amp; UP-REAT Appeals</em>
            </h1>
            <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Real estate legal representation for homebuyers and developers with
              projects in Noida and Greater Noida, including delayed possession,
              disputed builder demands, refund claims and RERA compliance.
            </p>
            <p className="mt-4 max-w-2xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              A project&apos;s location, registration and contractual documents
              guide the case assessment. Our team reviews the appropriate UP-RERA
              forum and the available remedies before advising on a complaint or appeal.
            </p>
            <ServiceStats service="rera" />
            <ConsultationActions className="mt-8 hidden md:flex" />
          </div>
          {reraAdvocate && <div className="min-w-0 border-l border-gold-500/30 pl-6">
            {reraAdvocate.img && <Image src={reraAdvocate.img} alt={reraAdvocate.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: reraAdvocate.focus }} />}
            <div className="min-w-0">
              <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">RERA Practice Lead</p>
              <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{reraAdvocate.name}</h2>
              <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{reraAdvocate.role}</p>
              <Link href={`/team/${reraAdvocate.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                View Profile <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>}
          <ConsultationActions className="flex md:hidden" />
        </div>

        <GuideToc items={reraNoidaToc} />

        <section className="mb-16" aria-labelledby="noida-team">
          <h2 id="noida-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Our RERA Team</h2>
          <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Adv. Shishir Pandey leads our RERA practice for Noida and
            Greater Noida alongside Adv. Prerna Yaduvanshi, Adv. Jyotish Raj,
            and Adv. Aniket Bose.
            Each profile below sets out that member&apos;s
            individual practice areas.
          </p>
          <TeamCarousel members={pageTeam} label="RERA team members" />
        </section>

        <ServiceSelection content={searchContent} />

        <section className="mb-16" aria-labelledby="noida-lucknow-advantage">
          <h2 id="noida-lucknow-advantage" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
            The Noida-to-Lucknow RERA Advantage: Seamless Representation Across UP-RERA Greater Noida &amp; UP-REAT Lucknow
          </h2>
          <div className="max-w-4xl space-y-4 font-body leading-relaxed text-navy-700 dark:text-cream/60">
            <p>
              First-instance UP-RERA complaints for projects in Noida, Greater
              Noida (Gautam Budh Nagar) and the Yamuna Expressway region
              (YEIDA) are heard at the UP-RERA NCR Regional Office in Greater
              Noida. First appeals against UP-RERA Greater Noida orders lie
              exclusively before the Uttar Pradesh Real Estate Appellate
              Tribunal (UP-REAT) sitting in Lucknow. Recovery Certificates
              (RCs) go to the District Magistrate, Gautam Budh Nagar (Dadri,
              Sadar and Jewar Tehsils), while NCLT CIRP proceedings are filed
              before the NCLT New Delhi or Allahabad benches.
            </p>
            <p>
              Our Delhi NCR team at A-247, Defence Colony, New Delhi — Adv.
              Shishir Pandey, Adv. Prerna Yaduvanshi, Adv. Jyotish Raj and Adv.
              Aniket Bose — handles complaints, conciliations and tehsil RC
              executions on the ground in Noida and Greater Noida, while our
              Lucknow Bench team at Chamber D-311, High Court Lucknow (Adv.
              Jitendra Tiwari) conducts UP-REAT appeals in Lucknow under
              Section 44. Homebuyers never need to travel to Lucknow or hire
              a second firm. For projects in Ghaziabad, see our{' '}
              <Link href="/services/rera-lawyer-ghaziabad" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                RERA lawyer in Ghaziabad
              </Link>
              , and for projects in Lucknow itself, see our{' '}
              <Link href="/services/rera-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                UP RERA lawyer in Lucknow
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="project-localities">
          <h2 id="project-localities" className="mb-6 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">RERA Matters by Project Locality</h2>
          <p className="mb-5 max-w-4xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            UP-RERA has its principal office at Lucknow and a regional office at
            Greater Noida in Gautam Buddh Nagar. Noida and Greater Noida projects
            are both in Gautam Buddh Nagar district, but confirm the registered
            project, phase and current bench allocation before filing rather
            than selecting a forum solely by the buyer&apos;s residence, an NCR
            label or our chamber address.
          </p>
          <p className="mb-8 max-w-4xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Appeals from the Authority or adjudicating officer go to the Uttar
            Pradesh Real Estate Appellate Tribunal (UP-REAT), Lucknow, subject to
            the statutory requirements. This is not the same proceeding as the
            original regional complaint. A challenge to a decision of NOIDA,
            Greater Noida Industrial Development Authority (GNIDA) or YEIDA may
            require a different remedy from enforcing a promoter&apos;s RERA
            obligations. A later High Court remedy needs its own territorial
            assessment; the Lucknow Bench is not a universal filing destination
            for every Noida project dispute.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-t border-gold-500/30 pt-5">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900 dark:text-cream"><MapPin className="h-5 w-5 shrink-0 text-gold-600" /> Noida &amp; Noida Extension</h3>
              <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">
                For a Noida project, identify its UP-RERA registration number,
                registered promoter and phase, rather than relying only on a
                development&apos;s marketing name. The allotment letter, agreement,
                registered disclosures and possession correspondence help establish
                which commitments apply to your unit.
              </p>
            </div>
            <div className="border-t border-gold-500/30 pt-5">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900 dark:text-cream"><MapPin className="h-5 w-5 shrink-0 text-gold-600" /> Greater Noida &amp; Greater Noida West</h3>
              <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">
                For projects in Greater Noida, Greater Noida West and the
                Yamuna Expressway (YEIDA) corridor, check the registered
                project address, promoter and promised handover date. Keep any
                possession offer, disputed demand or cancellation notice with
                your payment records so its effect on the proposed claim can
                be reviewed.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="rera-matters">
          <h2 id="rera-matters" className="mb-6 flex scroll-mt-28 items-center gap-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl"><Building2 className="h-6 w-6 shrink-0 text-gold-600" /> Builder-Buyer &amp; RERA Matters</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {matters.map((matter) => (
              <div key={matter.title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">{matter.title}</h3>
                <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">{matter.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16" aria-labelledby="noida-specific-disputes">
          <h2 id="noida-specific-disputes" className="mb-6 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
            Noida, Greater Noida &amp; YEIDA Specific Real Estate Disputes We Handle
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="border-t border-gold-500/30 pt-5">
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream">Stalled Tripartite Sub-Lease Deeds, OC/CC Blocks &amp; Authority Dues (NOIDA, GNIDA &amp; YEIDA)</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
                Projects where builders defaulted on land premium dues to
                NOIDA, Greater Noida (GNIDA) or Yamuna Expressway (YEIDA)
                authorities, blocking Occupancy/Completion Certificates
                and sub-lease deed execution for homebuyers.
              </p>
            </div>
            <div className="border-t border-gold-500/30 pt-5">
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream">Dadri, Sadar &amp; Jewar Tehsil Recovery Certificate (RC) Realization &amp; Mandamus Writs</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
                Tracking Section 40 Recovery Certificates before the District
                Magistrate, Gautam Budh Nagar, with mandamus writs where
                revenue officials fail to execute.
              </p>
            </div>
            <div className="border-t border-gold-500/30 pt-5">
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream">Bank Subvention / Pre-EMI Tripartite Traps &amp; NCLT Insolvency (IBC) Homebuyer Claims</h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
                Protecting homebuyers when builders stop paying pre-EMIs under
                subvention schemes, and filing Form CA (Class of Creditors)
                claims before the Resolution Professional when a Noida or
                Greater Noida developer enters CIRP before the NCLT.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="noida-landmark-precedents">
          <h2 id="noida-landmark-precedents" className="mb-6 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
            Landmark Precedents &amp; the Noida/Greater Noida Stalled-Project Playbook
          </h2>
          <div className="max-w-4xl space-y-4 font-body leading-relaxed text-navy-700 dark:text-cream/60">
            <p>
              Noida, Greater Noida and the Yamuna Expressway region sit on land
              leased by NOIDA, GNIDA and YEIDA to developers on a 90-year
              leasehold basis. Where a developer defaults on land-premium
              instalments, these authorities have at times withheld
              Occupancy/Completion Certificates and permission for Tripartite
              Sub-Lease Deeds until dues are cleared — even against allottees
              who have paid the complete sale consideration. Section 17(1) of
              the RERA Act nonetheless places an unconditional duty on the
              promoter to execute a registered conveyance deed, generally
              within three months of the occupancy certificate; continuing
              non-compliance can attract daily penalties under Section 63 of
              up to five per cent of the estimated project cost. The Uttar
              Pradesh Cabinet&apos;s Amitabh Kant Committee package (notified
              December 2023) lets a developer unlock registries for completed
              towers by depositing 25% of recalculated dues, with zero-period
              interest waivers for NGT and Covid-19 disruption. See our
              detailed guide,{' '}
              <a href="/blog/the-stalled-registry-crisis-tripartite-sub-lease-deeds" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                The Stalled Registry Crisis: Tripartite Sub-Lease Deeds
              </a>
              , for the complete process and legal-notice format.
            </p>
            <p>
              Noida and Greater Noida homebuyer litigation has also produced
              Supreme Court decisions that can materially affect strategy in a
              stalled or insolvent project:
            </p>
          </div>
          <div className="mt-6 max-w-4xl divide-y divide-gold-500/20 border-y border-gold-500/20">
            <div className="py-5">
              <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">Bikram Chatterji v. Union of India (Amrapali), 2019 SCC OnLine SC 901</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">Cancelled the group&apos;s RERA registration and its Noida/Greater Noida lease deeds, appointed NBCC to complete the stalled towers under court supervision, and held that dues owed to the authorities and lending banks are recoverable only from the promoter&apos;s attached assets, not as a charge on homebuyers or the projects.</p>
              <a href="https://indiankanoon.org/doc/6791744/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">Read the judgment <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            </div>
            <div className="py-5">
              <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">Pioneer Urban Land and Infrastructure Ltd. v. Union of India (2019)</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">Upheld allottees as &quot;financial creditors&quot; under Section 5(8)(f) of the IBC, letting homebuyers trigger or join a Corporate Insolvency Resolution Process (CIRP) and sit on the Committee of Creditors alongside banks and other lenders.</p>
              <a href="https://indiankanoon.org/doc/118478827/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">Read the judgment <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            </div>
            <div className="py-5">
              <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">Manish Kumar v. Union of India (2021)</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">Upheld the requirement that a real-estate CIRP application under Section 7 of the IBC be filed jointly by at least 100 allottees, or 10% of the allottees of the same project, whichever is fewer — an individual allottee can no longer trigger insolvency alone.</p>
              <a href="https://indiankanoon.org/doc/54883247/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">Read the judgment <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            </div>
            <div className="py-5">
              <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">Supertech Ltd. v. Emerald Court Owner Resident Welfare Association, (2021) 10 SCC 593</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">The Noida Twin Towers case: confirmed that a promoter cannot materially alter a sanctioned layout under Section 14(2) of the RERA Act without the consent of at least two-thirds of existing allottees, and ordered demolition of the unauthorised towers built in violation of that requirement.</p>
              <a href="https://indiankanoon.org/doc/199986312/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">Read the judgment <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            </div>
            <div className="py-5">
              <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">Alpha Corp Development (P) Ltd. v. Greater Noida Industrial Development Authority (Earth Infrastructure), 2026</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">Restored CIRP resolution plans for Earth Infrastructure&apos;s stalled Greater Noida projects — Earth Towne, Earth TechOne and Earth Sapphire Court — after finding that the developer&apos;s subsidiary landholding entities were &quot;only a front,&quot; and limited GNIDA&apos;s claim to dues without penal interest for a defined period so construction could resume for over 4,000 affected buyers.</p>
              <a href="https://indiankanoon.org/doc/110990465/" target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">Read the judgment <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" /></a>
            </div>
          </div>
          <p className="mt-6 max-w-4xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Beyond adjudication, UP-RERA operates a conciliation forum at
            Greater Noida — in addition to the one at Lucknow — where
            nominees of the buyers&apos; and promoters&apos; associations help
            negotiate a faster, consented settlement; a failed conciliation
            does not bar a subsequent Section 31 complaint. Where a developer
            company is undergoing CIRP, recovery can also be pursued against
            the personal assets of promoter-directors who furnished personal
            guarantees, under Section 95 of the IBC, as a track running
            parallel to a Form CA claim before the Resolution Professional.
            Each remedy&apos;s current eligibility, limitation and evidentiary
            requirements need review before it is relied upon; neither relief
            nor a resolution timeline is guaranteed.
          </p>
        </section>

        <section className="mb-16 border-t border-gold-500/30 pt-8" aria-labelledby="case-review">
          <h2 id="case-review" className="mb-5 flex scroll-mt-28 items-center gap-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl"><FileCheck className="h-6 w-6 shrink-0 text-gold-600" /> Preparing Your Case for Review</h2>
          <p className="mb-5 max-w-4xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            At the first consultation, explain whether you want to retain the
            unit, withdraw, challenge a demand, claim compensation or enforce an
            existing order. Identify the nearest notice, hearing or appeal date
            and who can give instructions for any joint allottees. Share the full
            record, including documents that may support the other side; missing
            receipts or an earlier settlement can materially change the advice.
          </p>
          <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/60">
            <li>Project and phase registration, promoter&apos;s legal name, sector, unit number, booking form and allotment letter.</li>
            <li>Signed builder-buyer agreement, payment schedule, committed possession date, grace clauses and written amendments.</li>
            <li>A dated payment ledger supported by receipts, bank entries, loan disbursements and any refund already received.</li>
            <li>Demand and cancellation notices, disputed charges, emails, written extensions and proof of notice delivery.</li>
            <li>Possession offers, relevant occupancy or completion records, inspection photographs and any defect notice or technical report.</li>
            <li>Earlier complaints, consumer or insolvency proceedings, settlements, complete RERA orders, appeals and stay directions.</li>
            <li>Proof of receiving and serving orders, compliance dates, execution applications and any recovery certificate.</li>
            <li>Allottee identity and authorisation, a one-page chronology, preferred relief and separately explained interest or loss calculations.</li>
          </ul>
          <p className="mt-5 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Tell us whether you seek possession, a refund, delay interest or
            enforcement of an existing order. Compensation and other relief may
            require different procedural consideration; the appropriate forum,
            limitation issues and evidence are assessed for your matter.
            No particular result or completion timeline is guaranteed.
          </p>
        </section>

        <StatuteTable
          id="noida-rera-statutory-framework"
          heading="The Statutory Framework for Your RERA Matter"
          intro="These provisions separate promoter obligations, complaint remedies, compensation, appeals and enforcement. Check the current Uttar Pradesh rules, official directions and applicable decisions for your project before acting."
          rows={reraStatutes}
        />

        <GuideStages
          id="before-filing"
          heading="Seven Stages: From Project Review to Order Enforcement"
          intro="A Noida or Greater Noida matter may follow different routes for refund, interest, compensation or an existing unpaid order. These stages explain the main decisions and documents; not every case needs every stage, and neither a disposal date nor recovery is guaranteed."
          stages={reraNoidaStages}
        />

        <section aria-labelledby="noida-rera-enforcement-review" className="mb-16 border-t border-gold-500/20 pt-10">
          <h2 id="noida-rera-enforcement-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Noida &amp; Greater Noida Projects: From Complaint to Order Compliance</h2>
          <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Start with the project registration, promoter&apos;s legal name, unit and phase details, agreement, payment trail and current construction or possession status. A NOIDA, GNIDA or other development-authority issue is not necessarily the same as a promoter&apos;s RERA obligation. The project location and current UP-RERA allocation must be checked before choosing the filing route; an NCR address alone does not decide every jurisdiction question.</p>
          <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">If you already hold a refund or possession order, share its complete copy, service details, compliance dates, payments received and information about any appeal or stay. The next step may be compliance or recovery proceedings, not another complaint on the same facts. Promoter insolvency, competing proceedings or a settlement can affect strategy and recoverability. We assess those issues before advising on enforcement or an appeal, without promising a collection date or outcome.</p>
        </section>

        <section className="mb-16" aria-labelledby="rera-faqs">
          <h2 id="rera-faqs" className="mb-6 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Noida &amp; Greater Noida RERA FAQs</h2>
          <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">
            {reraFAQs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-lg font-semibold text-navy-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold-500 dark:text-cream [&::-webkit-details-marker]:hidden">
                  <h3 className="text-lg">{faq.question}</h3>
                  <ArrowUpRight aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold-600 transition-transform group-open:rotate-90 motion-reduce:transition-none" />
                </summary>
                <p className="mt-4 max-w-4xl font-body leading-relaxed text-navy-700 dark:text-cream/60">{faq.answer}</p>
                <a href={faq.source} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">
                  {faq.sourceLabel} <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </a>
              </details>
            ))}
          </div>
          <p className="mt-5 max-w-4xl font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">General information based on the RERA Act and official UP-RERA material reviewed on 14 October 2026. Check current rules, portal directions and applicable decisions before acting. These answers do not replace advice on your agreement, project or proceedings.</p>
          <a href="https://www.up-rera.in/pdf/faq.pdf" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">
            Official UP-RERA FAQs <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </a>
        </section>

        <ServiceBlogs posts={posts} fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600" />} heading="Noida & Greater Noida RERA Articles" description="Articles on builder-buyer disputes and RERA matters involving Noida and Greater Noida projects." viewAllHref="/blog?category=RERA" />

        <section className="border-t border-gold-500/30 pt-8" aria-labelledby="contact-rera">
          <h2 id="contact-rera" className="scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Discuss a Noida or Greater Noida RERA Matter</h2>
          <p className="mt-4 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Contact the firm to connect with our Delhi/NCR team and discuss
            document review and representation arrangements for your Noida or
            Greater Noida project. In addition to our NCR chamber, we maintain
            a Noida office for local coordination.
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-3 font-body text-navy-700 dark:text-cream/70">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
              <div>
                <h3 className="font-semibold text-navy-900 dark:text-cream">NCR Chamber</h3>
                <p className="mt-1 leading-relaxed">
                  {NCR_CHAMBER_ADDRESS.street}<br />
                  {NCR_CHAMBER_ADDRESS.city}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 font-body text-navy-700 dark:text-cream/70">
              <MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-gold-600" />
              <div>
                <h3 className="font-semibold text-navy-900 dark:text-cream">Noida Office</h3>
                <p className="mt-1 leading-relaxed">
                  {NOIDA_OFFICE_ADDRESS.street}<br />
                  {NOIDA_OFFICE_ADDRESS.city}
                </p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <ServiceContactLinks whatsappHref={whatsappUrl('Hello, I would like to discuss a RERA matter involving a project in Noida or Greater Noida.')} />
          </div>
          <p className="mt-6 font-body text-sm text-navy-700 dark:text-cream/60">
            For title, ownership or land disputes outside RERA, see{' '}
            <Link href="/services/property-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">property and land legal services</Link>.
          </p>
        </section>
      </div>
      <FirmCredentials />
      <Footer />
    </main>
  )
}
