import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Building2, FileCheck, MapPin, MessageCircle, Phone, ScrollText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { CHAMBER_TEL, CHAMBER_CALL_DISPLAY, whatsappUrl } from '@/lib/contactLinks'
import { teamMembers } from '@/lib/team'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const PAGE_PATH = '/services/rera-lawyer-noida-ghaziabad'
const reraAdvocate = teamMembers.find((member) => member.slug === 'shishir-pandey')
const pageTeam = ['prerna-yaduvanshi', 'jyotish-raj', 'aniket-bose']
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
  title: { absolute: 'RERA Lawyer in Noida & Ghaziabad | Builder Claims | Sumanjari' },
  description: 'RERA advocate and real estate lawyer for Noida and Ghaziabad builder-buyer disputes, delayed possession, refund claims, project compliance and appeals.',
  alternates: { canonical: PAGE_PATH },
  keywords: ['RERA Lawyer Noida', 'RERA Lawyer Ghaziabad', 'UP RERA Greater Noida Lawyer', 'Builder Buyer Dispute Noida', 'Delayed Possession Lawyer Ghaziabad', 'RERA Refund Claim Noida', 'UP RERA Order Enforcement NCR', 'RERA Appeal Lawyer Uttar Pradesh'],
  twitter: {
    card: 'summary_large_image',
    title: 'RERA Lawyer in Noida & Ghaziabad | Builder Claims',
    description: 'Project-specific advice on UP-RERA complaints, delayed possession, refunds, order enforcement and appeals for NCR homebuyers.',
  },
  openGraph: {
    title: 'RERA Advocate & Lawyer in Noida & Ghaziabad | Sumanjari & Co. Advocates',
    description: 'Representation for Noida and Ghaziabad homebuyers and developers in UP-RERA complaints, possession delays, refund claims and appeals.',
    url: PAGE_PATH,
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'RERA Legal Services for Noida & Ghaziabad',
  url: `${SITE_URL}${PAGE_PATH}`,
  description: 'RERA representation for homebuyers and developers with projects in Noida and Ghaziabad, including builder-buyer disputes, possession delays, refunds and appeals.',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Ghaziabad' },
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
    question: 'How do I check a Noida or Ghaziabad project on UP-RERA?',
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
    question: 'How is a complaint for a Noida or Ghaziabad project filed?',
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

export default async function NoidaGhaziabadReraPage() {
  const posts = getBlogPostsByCategory('RERA').then((posts) => posts.filter(
    (post) => /\b(?:Noida|Ghaziabad)\b/i.test(`${post.title} ${post.excerpt}`)
  ))

  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Navbar />
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-32 md:pt-36">
        <Link href="/services/rera-lawyer" className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45">
          <ArrowLeft className="h-3.5 w-3.5" /> RERA Services in Lucknow
        </Link>

        <div className="mb-16 grid items-start gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <span className="font-caps text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-400">UP-RERA &amp; Appellate Matters</span>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.12] text-navy-900 dark:text-cream md:text-[3.25rem]">
              RERA Advocate &amp; Lawyer in{' '}
              <em className="text-gold-gradient">Noida &amp; Ghaziabad</em>
            </h1>
            <p className="mt-5 max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Real estate legal representation for homebuyers and developers with
              projects in Noida and Ghaziabad, including delayed possession,
              disputed builder demands, refund claims and RERA compliance.
            </p>
            <p className="mt-4 max-w-2xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              A project&apos;s location, registration and contractual documents
              guide the case assessment. Our team reviews the appropriate UP-RERA
              forum and the available remedies before advising on a complaint or appeal.
            </p>
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

        <section className="mb-16" aria-labelledby="delhi-team">
          <h2 id="delhi-team" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Our RERA Team</h2>
          <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Adv. Shishir Pandey leads our RERA practice for Noida and
            Ghaziabad alongside Adv. Prerna Yaduvanshi, Adv. Jyotish Raj,
            and Adv. Aniket Bose.
            Each profile below sets out that member&apos;s
            individual practice areas.
          </p>
          <TeamCarousel members={pageTeam} label="RERA team members" />
        </section>

        <section className="mb-16" aria-labelledby="project-locations">
          <h2 id="project-locations" className="mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">RERA Matters by Project Location</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="border-t border-gold-500/30 pt-5">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900 dark:text-cream"><MapPin className="h-5 w-5 shrink-0 text-gold-600" /> Noida</h3>
              <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">
                For a Noida project, identify its UP-RERA registration number,
                registered promoter and phase, rather than relying only on a
                development&apos;s marketing name. The allotment letter, agreement,
                registered disclosures and possession correspondence help establish
                which commitments apply to your unit.
              </p>
            </div>
            <div className="border-t border-gold-500/30 pt-5">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold text-navy-900 dark:text-cream"><MapPin className="h-5 w-5 shrink-0 text-gold-600" /> Ghaziabad</h3>
              <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">
                For projects in Ghaziabad, including Indirapuram and Raj Nagar
                Extension, check the registered project address, promoter and
                promised handover date. Keep any possession offer, disputed demand
                or cancellation notice with your payment records so its effect on
                the proposed claim can be reviewed.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16" aria-labelledby="rera-matters">
          <h2 id="rera-matters" className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl"><Building2 className="h-6 w-6 shrink-0 text-gold-600" /> Builder-Buyer &amp; RERA Matters</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {matters.map((matter) => (
              <div key={matter.title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">{matter.title}</h3>
                <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">{matter.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 border-t border-gold-500/30 pt-8" aria-labelledby="case-review">
          <h2 id="case-review" className="mb-5 flex items-center gap-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl"><FileCheck className="h-6 w-6 shrink-0 text-gold-600" /> Preparing Your Case for Review</h2>
          <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/60">
            <li>Project registration details, unit number, booking form and allotment letter.</li>
            <li>Builder-buyer agreement, payment receipts and the promised possession date.</li>
            <li>Emails, notices, possession offers and records of disputed demands.</li>
            <li>Any earlier complaint, settlement, RERA order or appeal papers.</li>
          </ul>
          <p className="mt-5 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Tell us whether you seek possession, a refund, delay interest or
            enforcement of an existing order. Compensation and other relief may
            require different procedural consideration; the appropriate forum,
            limitation issues and evidence are assessed for your matter.
            No particular result or completion timeline is guaranteed.
          </p>
        </section>

        <section className="mb-16" aria-labelledby="before-filing">
          <h2 id="before-filing" className="mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Before You File a RERA Complaint</h2>
          <ol className="grid list-none gap-8 md:grid-cols-3">
            <li className="border-t border-gold-500/30 pt-5">
              <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">1. Verify the Project and Promoter</h3>
              <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">Check the registered phase and promoter against your documents. Note the contractual possession date and any disclosed extension; do not assume a registration extension alone resolves the buyer&apos;s claim.</p>
            </li>
            <li className="border-t border-gold-500/30 pt-5">
              <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">2. Define the Relief and Evidence</h3>
              <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">Decide whether you seek possession, refund, delay interest, compensation or compliance with an order. Prepare a dated payment and correspondence record, and disclose any previous settlement or pending proceeding.</p>
            </li>
            <li className="border-t border-gold-500/30 pt-5">
              <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">3. Plan Beyond the Complaint</h3>
              <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/60">Check the correct filing route and current requirements. After an order, preserve proof of receipt, track its compliance terms and review execution or appeal options promptly rather than assuming compliance is automatic.</p>
            </li>
          </ol>
        </section>

        <section aria-labelledby="ncr-rera-enforcement-review" className="mb-16 border-t border-gold-500/20 pt-10">
          <h2 id="ncr-rera-enforcement-review" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">Noida &amp; Ghaziabad Projects: From Complaint to Order Compliance</h2>
          <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Start with the project registration, promoter&apos;s legal name, unit and phase details, agreement, payment trail and current construction or possession status. A NOIDA, GNIDA or other development-authority issue is not necessarily the same as a promoter&apos;s RERA obligation. The project location and current UP-RERA allocation must be checked before choosing the filing route; an NCR address alone does not decide every jurisdiction question.</p>
          <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">If you already hold a refund or possession order, share its complete copy, service details, compliance dates, payments received and information about any appeal or stay. The next step may be compliance or recovery proceedings, not another complaint on the same facts. Promoter insolvency, competing proceedings or a settlement can affect strategy and recoverability. We assess those issues before advising on enforcement or an appeal, without promising a collection date or outcome.</p>
        </section>

        <section className="mb-16" aria-labelledby="rera-faqs">
          <h2 id="rera-faqs" className="mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Noida &amp; Ghaziabad RERA FAQs</h2>
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

        <ServiceBlogs posts={posts} fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600" />} heading="Noida & Ghaziabad RERA Articles" description="Articles on builder-buyer disputes and RERA matters involving NCR projects." viewAllHref="/blog?category=RERA" />

        <section className="border-t border-gold-500/30 pt-8" aria-labelledby="contact-rera">
          <h2 id="contact-rera" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Discuss a Noida or Ghaziabad RERA Matter</h2>
          <p className="mt-4 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
            Contact the firm to connect with our Delhi/NCR team and discuss
            document review and representation arrangements for your Noida or
            Ghaziabad project. This page does not indicate a separate office
            in either city.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href={CHAMBER_TEL} className="inline-flex items-center gap-2 rounded-sm border border-gold-500/40 px-5 py-3 font-body font-semibold text-navy-900 dark:text-cream"><Phone className="h-4 w-4" /> +91 {CHAMBER_CALL_DISPLAY}</a>
            <a href={whatsappUrl('Hello, I would like to discuss a RERA matter involving a project in Noida or Ghaziabad.')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-gold-500/40 px-5 py-3 font-body font-semibold text-navy-900 dark:text-cream"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
          </div>
          <p className="mt-6 font-body text-sm text-navy-700 dark:text-cream/60">
            For title, ownership or land disputes outside RERA, see{' '}
            <Link href="/services/property-land-matters" className="font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">property and land legal services</Link>.
          </p>
        </section>
      </div>
      <FirmCredentials />
      <Footer />
    </main>
  )
}