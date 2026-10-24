import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Globe2, Home, ScrollText, Users, Heart, Scale, FileCheck2, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { nriStages, nriStatutes, nriToc } from '@/lib/guides/nriLucknow'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, whatsappUrl } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const nriLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const nriTeam = ['jitendra-tiwari', 'shishir-pandey']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

export const metadata: Metadata = {
  title: { absolute: 'NRI Lawyer in Lucknow | NRI Property Disputes, POA & Divorce' },
  description: 'NRI Lawyer in Lucknow & UP for overseas Indians. Remote representation in NRI property disputes, illegal possession, Power of Attorney (POA) & NRI divorce.',
  keywords: ['NRI Lawyer', 'NRI Advocate', 'NRI Legal Services', 'NRI Lawyer in Lucknow', 'NRI Property Dispute Lawyer', 'NRI Power of Attorney', 'NRI Inheritance Lawyer', 'NRI Divorce Lawyer'],
  alternates: { canonical: '/services/nri-lawyer' },
  twitter: {
    card: 'summary_large_image',
    title: 'NRI Lawyer in Lucknow | Legal Services in India',
    description: 'Property, inheritance, powers of attorney and family disputes in India: documents, competent forums and an eight-stage guide for overseas clients.',
  },
  openGraph: {
    title: 'NRI Lawyer & Advocate | Sumanjari & Co. Advocates',
    description: 'NRI legal services in Lucknow for property, inheritance, overseas powers of attorney, family disputes and litigation, with a detailed procedural guide.',
    url: '/services/nri-lawyer',
  },
}

const matters = [
  {
    icon: Home,
    title: 'Property Disputes & Title Verification',
    points: [
      'Review of ownership documents, title chains, sale agreements, and available revenue records before a property transaction.',
      'Advice and representation in possession disputes, partition suits, tenancy matters, and applications for injunctions.',
      'Assistance with property transfers and mutation applications before the appropriate authorities.',
    ],
  },
  {
    icon: ScrollText,
    title: 'Power of Attorney & Legal Documentation',
    points: [
      'Drafting purpose-specific powers of attorney for property transactions, litigation, and other permitted acts in India.',
      'Guidance on overseas execution, consular attestation or apostille, and Indian stamping and registration requirements, as applicable.',
      'Review and drafting of agreements, legal notices, affidavits, and supporting documents.',
    ],
  },
  {
    icon: Users,
    title: 'Inheritance, Wills & Succession',
    points: [
      'Advice on succession rights and disputes concerning ancestral or self-acquired assets in India.',
      'Assistance with succession certificates for debts and securities, probate, or letters of administration where applicable.',
      'Will drafting, family settlement documentation, and representation in partition and inheritance disputes.',
    ],
  },
  {
    icon: Heart,
    title: 'NRI Divorce & Family Matters',
    points: [
      'Advice on mutual-consent and contested divorce, maintenance, child custody, and matrimonial proceedings in India.',
      'Review of jurisdiction, service of court documents overseas, and the effect of foreign matrimonial orders under Indian law.',
      'Assistance with mediation, settlement terms, and requests for video appearances or attendance exemptions where permitted.',
    ],
  },
  {
    icon: Scale,
    title: 'Civil & Criminal Litigation',
    points: [
      'Representation in civil suits, contractual disputes, recovery proceedings, and cheque dishonour matters.',
      'Advice on criminal complaints, bail applications, and FIR quashing proceedings, subject to the facts and applicable jurisdiction.',
      'Case preparation and representation before competent courts and forums, including the Allahabad High Court, Lucknow Bench.',
    ],
  },
  {
    icon: FileCheck2,
    title: 'Consumer, RERA & Business Disputes',
    points: [
      'Advice on delayed possession, builder disputes, and refund or compensation claims before the relevant RERA authority or consumer forum.',
      'Review of commercial contracts and legal notices for business interests in India.',
      'Assessment of the appropriate forum, limitation periods, and documentary evidence before starting proceedings.',
    ],
  },
]

const forums = [
  { title: 'Civil Courts & Revenue Authorities', text: 'Title, possession, partition, injunctions and revenue entries require different remedies. The property location, land classification, valuation and relief determine the competent court or revenue authority; not every land dispute belongs in a civil suit.' },
  { title: 'Family & Succession Courts', text: 'The jurisdictional Family Court hears matters within its statutory remit. Probate, administration and succession-certificate proceedings follow their own jurisdictional rules. A family dispute and an estate proceeding may need separate filings.' },
  { title: 'Registration Offices, RERA & Consumer Forums', text: 'A Sub-Registrar deals with registration formalities, not a final adjudication of every ownership dispute. Builder claims may call for RERA or consumer proceedings, depending on the relief, statutory requirements and existing litigation.' },
  { title: 'Allahabad High Court, Lucknow Bench', text: 'Appropriate writs, appeals and other maintainable proceedings arising within the Bench\'s jurisdiction may be considered here. Living overseas is not a substitute for the legal grounds or jurisdiction required to approach the High Court.' },
]

const authoritySteps = [
  { title: 'Define the authority before signing', text: 'Identify the representative, property or case, authorised acts and financial limits. State separately whether settlement, sale, receipt of money, delegation or appointment of an advocate is permitted. A litigation authority and an authority to dispose of an asset should not be treated as interchangeable.' },
  { title: 'Confirm the overseas execution route', text: 'Check the receiving court, registry or bank requirements before attending a notary or consulate. The appropriate authentication route depends on the country, the document and its use. An apostille authenticates the origin of a public document; it does not certify that a transaction is valid under Indian property law.' },
  { title: 'Check Indian stamping and registration', text: 'Overseas authentication does not automatically make an instrument ready for use in India. Review applicable duty, adjudication, registration and presentation requirements, including relevant receipt dates and Uttar Pradesh provisions. Do not assume every power of attorney needs the same formalities or has the same deadline.' },
  { title: 'Control use, originals and revocation', text: 'Keep a signed copy and a record of who holds the original. Ask for copies of documents signed under the authority and a clear account of payments. If the authority must be withdrawn, seek advice on revocation, notice to affected parties and any limits on revocability; destroying your copy alone may not prevent further reliance on it.' },
]

const estateIssues = [
  { title: 'Title and possession are separate questions', text: 'A sale deed, an agreement to sell, a revenue entry and physical possession have different legal effects. Review the chain of ownership, competing claims, encumbrances, occupier status and pending proceedings before choosing a title, possession, partition or injunction remedy. Mutation generally records revenue administration; it does not by itself settle ownership.' },
  { title: 'Choose the estate document that fits the asset', text: 'A death certificate, legal-heir record, succession certificate, probate and letters of administration are not interchangeable. The asset, will, applicable succession law, jurisdiction and institutional requirements determine the next step. A succession certificate concerning debts or securities should not be treated as a declaration of title to an inherited house or plot.' },
  { title: 'Review foreign orders before relying on them in India', text: 'A foreign divorce or other judgment requires an Indian-law assessment of the issuing court\'s jurisdiction, the nature of the decision, notice, natural justice and the other applicable recognition conditions. Direct execution of a qualifying foreign money decree is a different issue from recognition of marital status. Retain the complete order, pleadings, service records and any finality or appeal documents.' },
]

const documentChecklist = [
  'A brief chronology, your country of residence, contact details, and every approaching hearing or response deadline.',
  'Relevant identity and residency documents; citizenship or OCI details where material to the transaction.',
  'Property title deeds, the ownership chain, available revenue records, possession information, agreements and payment records.',
  'For an estate: the death certificate, will if any, family details, asset schedule and existing heirship or succession papers.',
  'For a family matter: marriage records, relevant child-related records, existing pleadings, orders and any overseas proceedings.',
  'Notices, summons, FIR or complaint details where relevant, court orders and proof of how and when documents were received.',
  'Existing powers of attorney, authentication records, translations and any evidence of dispatch or receipt of originals in India.',
]

const consultationChecks = [
  'Which Indian forum has territorial and subject-matter jurisdiction, and whether another proceeding already affects the claim.',
  'Whether interim protection, a notice response or a limitation deadline must be addressed before the complete file is assembled.',
  'What can be done remotely, what authority is needed, and which steps may require originals, personal evidence or attendance.',
  'The proposed scope, fees and disbursements, who will handle the matter, and how instructions on significant steps will be obtained.',
]

const relatedServices = [
  { title: 'Property & Land Disputes', href: '/services/property-lawyer-lucknow', text: 'Title review, possession, partition, mutation and land-related remedies.' },
  { title: 'Family & Matrimonial Matters', href: '/services/family-advocate', text: 'Maintenance, parenting arrangements, matrimonial proceedings and settlements.' },
  { title: 'Divorce Proceedings', href: '/services/divorce-lawyer-lucknow', text: 'Mutual-consent and contested divorce, related financial issues and court procedure.' },
  { title: 'RERA & Builder Disputes', href: '/services/rera-lawyer-lucknow', text: 'Delayed possession, builder demands, refunds and appropriate real-estate remedies.' },
  { title: 'Civil Litigation', href: '/services/civil-lawyer-lucknow', text: 'Declarations, injunctions, recovery and civil disputes before the competent forum.' },
  { title: 'Tax & Revenue Matters', href: '/services/tax-lawyer-lucknow', text: 'Stamp duty, valuation, tax and revenue issues requiring a separate assessment.' },
]

const faqs = [
  {
    question: 'Can I manage an Indian legal matter while living abroad?',
    answer: 'Many consultations, document reviews, and procedural steps can be coordinated remotely through an advocate or duly authorised representative. Personal attendance, original documents, or evidence may still be required. Video appearances and exemptions depend on the forum and its orders.',
  },
  {
    question: 'How can an NRI address illegal occupation of property in India?',
    answer: 'Start with a review of title documents, possession records, and the circumstances of occupation. Depending on the facts, remedies may include a legal notice, a possession or partition suit, an injunction, or tenancy proceedings. Criminal remedies require a separate assessment of the alleged conduct.',
  },
  {
    question: 'How is a power of attorney signed overseas used in India?',
    answer: 'The document should clearly identify the authorised acts. Execution and authentication requirements depend on the country and the intended use; consular attestation or apostille may be relevant. Stamping, adjudication, and registration requirements in India must also be checked before use.',
  },
  {
    question: 'Do I need a succession certificate to inherit property?',
    answer: 'A succession certificate generally concerns debts and securities, not title to immovable property. Depending on the asset, personal law, and whether there is a will, the required process may instead involve probate, letters of administration, mutation, or other succession documentation.',
  },
  {
    question: 'Can an NRI divorce case be handled without travelling to India?',
    answer: 'An advocate can coordinate advice, filings, and representation, but attendance requirements depend on the type of proceedings and the court. Requests for video conferencing, an exemption, or an authorised representative are considered case by case and are not automatically granted.',
  },
  {
    question: 'What should I provide for an initial consultation?',
    answer: 'Share a brief chronology, the location of the dispute, copies of relevant agreements or ownership records, notices and court orders, and any approaching deadlines. The advocate will identify additional documents and any authority needed to act on your behalf.',
  },
  {
    question: 'Does a power of attorney transfer ownership of my property?',
    answer: 'No. A power of attorney authorises specified acts; it is not itself a conveyance of ownership. Where the law requires a registered conveyance, the correct transfer document and registration formalities must still be completed. Review any proposed authority to sell, receive money, delegate powers or settle a dispute before signing.',
  },
  {
    question: 'Does mutation in my name establish ownership of inherited land?',
    answer: 'Mutation generally serves revenue-record purposes and does not by itself conclusively determine title. The underlying conveyances, succession rights, will if any, possession and competing claims must be reviewed. A revenue application and a contested ownership dispute may require different proceedings.',
  },
  {
    question: 'Will an overseas divorce decree automatically be accepted in India?',
    answer: 'Not automatically. Its effect depends on the applicable matrimonial law and Indian rules on foreign judgments, including jurisdiction, the basis of the decision, notice and natural justice. Share the complete foreign pleadings, decree, service records and appeal status before relying on it for remarriage or connected Indian proceedings.',
  },
  {
    question: 'Can I send property-sale or inheritance proceeds abroad after the case ends?',
    answer: 'That requires a separate review of the asset, citizenship and residency status, source of funds, tax compliance and current FEMA and authorised-dealer bank requirements. A decree, inheritance document or completed sale does not itself guarantee unrestricted remittance. Confirm the required banking and tax documentation before committing to a payment or transfer.',
  },
  {
    question: 'How are timelines, fees and updates handled for an NRI matter?',
    answer: 'The scope and fee arrangement should be discussed before engagement, including court fees, translations, authentication, record collection and other disbursements where relevant. Timelines depend on the forum, service, evidence and contested issues. Agree how significant developments and instructions will be communicated; no fixed duration or result can be promised merely because the client lives abroad.',
  },
  {
    question: 'Should I courier original documents or share banking credentials at the outset?',
    answer: 'Scans can usually support an initial review; confirm which originals or certified copies are actually required before dispatch and keep a record of what is sent. Preserve unaltered electronic records. Do not share bank passwords, one-time passwords or account-login credentials as part of an initial consultation; any authority to receive or deal with funds must be specifically assessed.',
  },
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — NRI Lawyer in Lucknow',
  url: `${SITE_URL}/services/nri-lawyer`,
  description: 'Legal assistance for Non-Resident Indians with property disputes, inheritance, powers of attorney, family matters, and litigation in Lucknow, Uttar Pradesh and across India.',
  telephone: CHAMBER_TEL.replace('tel:', ''),
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'NRI Legal Services',
  employee: nriLead ? {
    '@type': 'Person',
    name: nriLead.name,
    jobTitle: 'NRI Practice Lead',
    url: `${SITE_URL}/team/${nriLead.slug}`,
  } : undefined,
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'NRI Lawyer in Lucknow', item: `${SITE_URL}/services/nri-lawyer` },
  ],
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

function ConsultationActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-5 py-3.5 font-caps text-xs font-semibold uppercase tracking-wide text-navy-900 sm:px-8 sm:text-sm">
        Consult Now
      </Link>
      <a href={CHAMBER_TEL} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-500/40 px-5 py-3.5 font-caps text-xs font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 sm:text-sm">
        <Phone className="h-4 w-4 shrink-0" /> Call Now
      </a>
    </div>
  )
}

export default function NriLegalServicesPage() {
  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/#services" className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Services
          </Link>

          <div className="mb-16 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-3 text-gold-700 dark:text-gold-400">
                <Globe2 className="h-5 w-5 shrink-0" />
                <span className="font-caps text-xs uppercase tracking-widest">NRI Legal Services</span>
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
                NRI Lawyer &amp; Legal Services <em className="text-gold-gradient">in Lucknow</em> — Property Disputes, Power of Attorney &amp; Matrimonial Representation
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Living abroad should not leave your legal affairs in Lucknow and India unattended. Our NRI lawyers and advocates in Lucknow assist Non-Resident Indians with property disputes, inheritance, family disputes, documentation, and litigation, with Adv. Aishwarya Pandey as lead advocate.
              </p>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
                From an overseas power of attorney to proceedings before the competent forum in Lucknow or elsewhere in India, the guide below explains the records, authorisation and participation each stage may require. Remote coordination is assessed alongside any court-directed attendance.
              </p>
              <ServiceStats service="nri" />
              <div className="hidden md:block">
                <ConsultationActions />
              </div>
            </div>
            {nriLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {nriLead.img && (
                  <Image src={nriLead.img} alt={nriLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: nriLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">NRI Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{nriLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{nriLead.role}</p>
                <Link href={`/team/${nriLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <div className="md:hidden">
              <ConsultationActions />
            </div>
          </div>

          <GuideToc items={nriToc} />

          <section id="nri-overview" aria-labelledby="nri-overview-heading" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <h2 id="nri-overview-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Legal Representation for Indians Living Abroad</h2>
            <p>An Indian legal matter can involve several distinct questions: who owns an asset, who may act for its owner, which forum can grant relief, and how a resulting order will be implemented. Signing an authority abroad is only one part of that process. Our Lucknow-based team reviews the documents and the relief sought before identifying the appropriate property, succession, family or litigation route.</p>
            <p>For a local matter, that assessment may involve the civil courts, Family Court, revenue authorities, a registration office, RERA or the Allahabad High Court, Lucknow Bench. For a matter elsewhere in India, territorial jurisdiction and the arrangements for representation must be confirmed. We do not assume that every Indian dispute can be filed or concluded in Lucknow.</p>
            <p>NRI status, OCI status, citizenship and residence under tax or foreign-exchange law can have different consequences. The country in which you live, the asset involved and the transaction history may affect the advice. Where foreign law or overseas proceedings are involved, advice from a suitably qualified lawyer in that jurisdiction may also be necessary.</p>
          </section>

          <section id="nri-remote-representation" aria-labelledby="nri-remote-representation-heading" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <h2 id="nri-remote-representation-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">End-to-End Remote Legal Representation for NRIs in Lucknow &amp; Uttar Pradesh (Without Frequent Travel to India)</h2>
            <p>Overseas clients in the USA, UK, Canada, UAE, Australia, Singapore and Europe instruct Sumanjari &amp; Co. Advocates in Lucknow remotely: matters begin with a scheduled video consultation, documents are reviewed electronically, and clients receive tracked court status updates after every hearing so the file never depends on a visit to India.</p>
            <p>Where a step requires personal authority, we prepare a lawfully executed Special Power of Attorney (SPOA) — drafted in Lucknow, attested before the Indian Embassy or Consulate or apostilled under the Hague Convention, and adjudicated before the Collector of Stamps in Lucknow — so an attorney holder can appear, sign and present documents on your behalf. Video-conferencing statements and exemption applications are sought from the competent court where permitted; nothing requires frequent travel to India unless the court specifically directs personal attendance.</p>
          </section>

          <section className="mb-16" aria-labelledby="nri-team">
            <h2 id="nri-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Our NRI Legal Services Team</h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Our NRI legal services in Lucknow are led by Adv. Aishwarya Pandey (Associate Partner) and Adv. Jitendra Tiwari (Director), supported by Adv. Shishir Pandey (Delhi NCR — FEMA &amp; cross-border matters).
            </p>
            <TeamCarousel members={nriTeam} label="NRI legal services team members" />
          </section>

          <section id="nri-forums" aria-labelledby="nri-forums-heading" className="mb-16 scroll-mt-28">
            <h2 id="nri-forums-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Which Court or Authority Can Hear Your Matter?</h2>
            <p className="mb-8 font-body leading-relaxed text-navy-700 dark:text-cream/65">There is no single court for every NRI dispute. The claim, property location, parties, valuation and relief determine the forum; existing orders and parallel proceedings also matter.</p>
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {forums.map((forum) => (
                <div key={forum.title} className="min-w-0 border-t border-gold-500/25 pt-6">
                  <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{forum.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/65">{forum.text}</p>
                </div>
              ))}
            </div>
          </section>

          <StatuteTable
            id="nri-statutory-framework"
            heading="Statutory Framework for NRI Legal Matters"
            intro="NRI legal services draw on the law governing the underlying issue, not a single NRI litigation code. These are common starting points; the current law, state amendments and forum-specific requirements must be checked for the individual matter."
            rows={nriStatutes}
          />

          <section className="mb-16" aria-labelledby="nri-matters">
            <h2 id="nri-matters" className="mb-8 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">NRI Legal Matters We Assist With</h2>
            <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {matters.map((matter) => (
                <div key={matter.title} className="min-w-0 border-t border-gold-500/25 pt-6">
                  <div className="mb-4 flex items-start gap-3">
                    <matter.icon className="mt-1 h-5 w-5 shrink-0 text-gold-700 dark:text-gold-400" />
                    <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">{matter.title}</h3>
                  </div>
                  <ul className="list-disc space-y-3 pl-5 font-body text-sm leading-relaxed text-navy-700 marker:text-gold-600 dark:text-cream/65">
                    {matter.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="nri-core-services" aria-labelledby="nri-core-services-heading" className="mb-16 scroll-mt-28">
            <h2 id="nri-core-services-heading" className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Core NRI Legal Services in Lucknow</h2>
            <div className="space-y-8">
              <div className="border-t border-gold-500/25 pt-6">
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">NRI Property Disputes, Anti-Encroachment &amp; Eviction of Illegal Occupants in Lucknow</h3>
                <p className="font-body leading-relaxed text-navy-700 dark:text-cream/65">We file civil suits for possession under Sections 5 and 6 of the Specific Relief Act, 1963, seek permanent and mandatory injunctions under Order 39 Rules 1 and 2 CPC against further dispossession or construction, pursue tenant eviction under the Uttar Pradesh Regulation of Urban Premises Tenancy Act, 2021 before the Rent Authority / Rent Tribunal, Lucknow, and initiate criminal FIRs against land grabbing and forgery where the facts disclose an offence.</p>
              </div>
              <div className="border-t border-gold-500/25 pt-6">
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Foreign Power of Attorney (SPOA / GPA) Drafting, Indian Embassy Apostille &amp; Collector Stamp Adjudication in Lucknow</h3>
                <p className="font-body leading-relaxed text-navy-700 dark:text-cream/65">We manage the complete chain: (1) drafting a compliant Special Power of Attorney in Lucknow, (2) attestation before the Indian Embassy or Consulate, or Hague Apostille where applicable, (3) dispatch of the original to India, and (4) mandatory adjudication and stamping before the Collector of Stamps / ADM (Finance &amp; Revenue), Lucknow within three months of receipt in India under Section 18 of the Indian Stamp Act, 1899. As held in Suraj Lamp &amp; Industries v. State of Haryana, a GPA cannot substitute for a registered conveyance or sale deed — but a valid SPOA can authorise an attorney to appear in court or present a deed for registration under Sections 32 and 33 of the Registration Act, 1908.</p>
              </div>
              <div className="border-t border-gold-500/25 pt-6">
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">NRI Ancestral Property Partition, Succession Certificate, Probate &amp; Mutation (Dakhil-Kharij)</h3>
                <p className="font-body leading-relaxed text-navy-700 dark:text-cream/65">We handle Lucknow Nagar Nigam house-tax mutation, LDA freehold and mutation transfers, partition suits and mutation proceedings under Sections 34/35 and Section 116 of the U.P. Revenue Code, 2006, and succession certificates for debts and securities under Section 372 of the Indian Succession Act, 1925 — coordinating each revenue and civil step so heirs abroad do not need repeated travel.</p>
              </div>
              <div className="border-t border-gold-500/25 pt-6">
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">NRI Divorce, Child Custody, LOC / Passport Impoundment &amp; 498A / 85 BNS Defense</h3>
                <p className="font-body leading-relaxed text-navy-700 dark:text-cream/65">We represent NRIs before the Principal Judge, Family Court, Kaiserbagh through SPOA holders and video-conferencing statements where permitted, and before the Allahabad High Court, Lucknow Bench to challenge Look Out Circulars (LOC), passport impoundment notices under Section 10(3) of the Passports Act, 1967, and Section 84 BNSS (formerly Section 82 CrPC) proclaimed offender proceedings, alongside defence against Section 498A IPC / Section 85 BNS matrimonial prosecutions.</p>
              </div>
            </div>
          </section>

          <section aria-labelledby="nri-authority-document-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="nri-authority-document-review" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Instructing an Indian Lawyer From Abroad</h2>
            <p className="mb-8 font-body leading-relaxed text-navy-700 dark:text-cream/70">An advocate engagement, vakalatnama and power of attorney do not perform the same function. Confirm who needs authority to do what, and the receiving authority&apos;s requirements, before signing or sending originals overseas.</p>
            <ol className="grid gap-x-10 gap-y-8 md:grid-cols-2">
              {authoritySteps.map((step, index) => (
                <li key={step.title} className="min-w-0 border-t border-gold-500/25 pt-5">
                  <p className="font-caps text-xs tracking-widest text-gold-700 dark:text-gold-400">0{index + 1}</p>
                  <h3 className="mb-3 mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/65">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="nri-inheritance" aria-labelledby="nri-inheritance-heading" className="mb-16 scroll-mt-28">
            <h2 id="nri-inheritance-heading" className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Property, Inheritance &amp; Foreign Orders: Important Distinctions</h2>
            <div className="space-y-8">
              {estateIssues.map((issue) => (
                <div key={issue.title} className="border-t border-gold-500/25 pt-6">
                  <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{issue.title}</h3>
                  <p className="font-body leading-relaxed text-navy-700 dark:text-cream/65">{issue.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="nri-documents" aria-labelledby="nri-document-checklist" className="mb-16 grid scroll-mt-28 gap-10 md:grid-cols-2">
            <div className="min-w-0">
              <h2 id="nri-document-checklist" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">Documents for an NRI Legal Consultation</h2>
              <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/65">Send what is available for the issue being assessed. Do not delay advice on an urgent notice or hearing merely because a full file or original document is not yet available.</p>
              <ul className="list-disc space-y-3 pl-5 font-body text-sm leading-relaxed text-navy-700 marker:text-gold-600 dark:text-cream/65">
                {documentChecklist.map((document) => <li key={document}>{document}</li>)}
              </ul>
            </div>
            <div className="min-w-0">
              <h2 className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">What We Assess at the First Consultation</h2>
              <ul className="list-disc space-y-3 pl-5 font-body text-sm leading-relaxed text-navy-700 marker:text-gold-600 dark:text-cream/65">
                {consultationChecks.map((check) => <li key={check}>{check}</li>)}
              </ul>
              <p className="mt-6 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">Preserve originals and unaltered electronic records. Confirm the required documents and the agreed sharing method before dispatch; bank passwords, OTPs and account-login credentials are not consultation documents.</p>
            </div>
          </section>

          <GuideStages
            id="nri-process"
            heading="Eight Stages of Coordinating Your Indian Legal Matter"
            intro="A practical route from the first document review to implementation of an order. These stages are not a promise of eight hearings or a fixed timetable: some matters settle early, some need urgent action, and others require separate proceedings or additional steps."
            stages={nriStages}
          />

          <section className="mb-16" aria-labelledby="nri-faqs">
            <h2 id="nri-faqs" className="mb-8 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Frequently Asked Questions</h2>
            <div className="divide-y divide-gold-500/20">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer font-display text-lg font-semibold text-navy-900 marker:text-gold-600 dark:text-cream">{faq.question}</summary>
                  <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-navy-700 dark:text-cream/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="nri-related-services" aria-labelledby="nri-related-services-heading" className="mb-16 scroll-mt-28">
            <h2 id="nri-related-services-heading" className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Related Legal Services</h2>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {relatedServices.map((service) => (
                <div key={service.href} className="min-w-0 border-t border-gold-500/25 pt-6">
                  <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream">
                    <Link href={service.href} className="inline-flex items-start gap-2 hover:text-gold-700 dark:hover:text-gold-400">{service.title}<ArrowUpRight className="mt-1 h-4 w-4 shrink-0" /></Link>
                  </h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/65">{service.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="nri-sources" aria-labelledby="nri-sources-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-8">
            <h2 id="nri-sources-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream">Legal Sources &amp; Document Guidance</h2>
            <p className="mb-5 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/65">These references explain the underlying provisions and authentication framework. The current statutory text, state amendments, receiving authority&apos;s requirements and case-specific court orders should be checked before acting.</p>
            <ul className="list-disc space-y-3 pl-5 font-body text-sm leading-relaxed text-gold-700 dark:text-gold-400">
              <li><a href="https://www.mea.gov.in/apostille-menu" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Ministry of External Affairs: attestation and apostille guidance</a></li>
              <li><a href="https://www.indiacode.nic.in/indiacode/bitstream/123456789/2191/1/A190805.pdf" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">India Code: Code of Civil Procedure, 1908 (PDF)</a></li>
              <li><a href="https://indiankanoon.org/doc/1182132/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Registration Act, 1908: Section 33 on powers of attorney</a></li>
              <li><a href="https://indiankanoon.org/doc/1494917/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Indian Succession Act, 1925: Section 370 on succession certificates</a></li>
            </ul>
          </section>

          <section className="border-t border-gold-500/25 pt-10" aria-labelledby="nri-consultation">
            <h2 id="nri-consultation" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Discuss Your Legal Matter in India</h2>
            <p className="max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/65">Contact our chamber to arrange a consultation. Share the nature of your matter, the relevant Indian location, and any urgent deadlines so the team can assess the next steps.</p>
            <ConsultationActions />
            <a href={whatsappUrl('Hello, I am living abroad and would like to consult the NRI Legal Services team about a matter in India.')} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
              Contact on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-8 font-body text-xs leading-relaxed text-navy-700/70 dark:text-cream/45">This page provides general information, not legal advice. Remedies and procedural requirements depend on the facts and applicable law; no outcome is guaranteed.</p>
          </section>
        </div>
      </section>
      <FirmCredentials />
      <Footer />
    </main>
  )
}