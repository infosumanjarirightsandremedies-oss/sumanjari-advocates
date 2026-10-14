import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Globe2, Home, ScrollText, Users, Heart, Scale, FileCheck2, Phone } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import TeamCarousel from '@/components/TeamCarousel'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, whatsappUrl } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const nriLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const nriTeam = ['shishir-pandey', 'aniket-bose', 'arti-dwivedi', 'prabhash-yadav']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

export const metadata: Metadata = {
  title: 'NRI Lawyer & Advocate | NRI Legal Services in India',
  description: 'NRI legal services at Sumanjari & Co. Advocates, led by Adv. Aishwarya Pandey: property disputes, inheritance, powers of attorney, family matters, and litigation in India.',
  keywords: ['NRI Lawyer', 'NRI Advocate', 'NRI Legal Services', 'NRI Lawyer in Lucknow', 'NRI Property Dispute Lawyer', 'NRI Power of Attorney', 'NRI Inheritance Lawyer', 'NRI Divorce Lawyer'],
  alternates: { canonical: '/services/nri-lawyer' },
  openGraph: {
    title: 'NRI Lawyer & Advocate | Sumanjari & Co. Advocates',
    description: 'Legal assistance for Indians living abroad with property, inheritance, family, documentation, and litigation matters in India.',
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

const process = [
  { title: 'Initial Consultation', text: 'Share the issue, your location, and any upcoming court dates. We assess jurisdiction, urgency, and the legal questions that need attention.' },
  { title: 'Document Review', text: 'Provide relevant notices, orders, agreements, identity documents, and property or family records for a case-specific review.' },
  { title: 'Advice & Authorisation', text: 'Discuss available remedies, likely procedural requirements, and the scope of engagement. Where needed, arrange a properly executed authority or power of attorney.' },
  { title: 'Proceedings & Updates', text: 'Coordinate filings and representation in the appropriate forum, with updates on material developments and any steps requiring your participation.' },
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
]

const serviceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates - NRI Legal Services',
  url: `${SITE_URL}/services/nri-lawyer`,
  description: 'Legal assistance for Non-Resident Indians with property, inheritance, powers of attorney, family matters, and litigation in India.',
  telephone: CHAMBER_TEL.replace('tel:', ''),
  areaServed: { '@type': 'Country', name: 'India' },
  serviceType: 'NRI Legal Services',
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
                NRI Lawyer &amp; Advocate <em className="text-gold-gradient">in India</em>
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Living abroad should not leave your legal affairs in India unattended. Sumanjari &amp; Co. Advocates assists Non-Resident Indians with property, inheritance, family disputes, documentation, and litigation, with Adv. Aishwarya Pandey as lead advocate.
              </p>
              <div className="hidden md:block">
                <ConsultationActions />
              </div>
            </div>
            {nriLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {nriLead.img && (
                  <Image src={nriLead.img} alt={nriLead.name} width={252} height={288} sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: nriLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">NRI Services Lead Advocate</p>
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

          <section className="mb-16" aria-labelledby="nri-team">
            <h2 id="nri-team" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Our NRI Legal Services Team</h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Led by Adv. Aishwarya Pandey, our NRI legal services team includes Adv. Shishir Pandey, Adv. Aniket Bose, Adv. Arti Dwivedi, and Adv. Prabhash Yadav.
            </p>
            <TeamCarousel members={nriTeam} label="NRI legal services team members" />
          </section>

          <section className="mb-16" aria-labelledby="nri-matters">
            <h2 id="nri-matters" className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">NRI Legal Matters We Assist With</h2>
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

          <section className="mb-16 border-y border-gold-500/25 py-10" aria-labelledby="nri-process">
            <h2 id="nri-process" className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Coordinating Your Matter From Abroad</h2>
            <ol className="grid gap-8 sm:grid-cols-2">
              {process.map((step, index) => (
                <li key={step.title} className="min-w-0">
                  <span className="font-caps text-xs tracking-widest text-gold-700 dark:text-gold-400">0{index + 1}</span>
                  <h3 className="mb-2 mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{step.title}</h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/65">{step.text}</p>
                </li>
              ))}
            </ol>
            <p className="mt-8 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
              Remote coordination can reduce unnecessary travel, but does not replace attendance when required by law or a court order. Jurisdiction, timelines, fees, and any need for personal participation are assessed for each matter.
            </p>
          </section>

          <section className="mb-16" aria-labelledby="nri-faqs">
            <h2 id="nri-faqs" className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Frequently Asked Questions</h2>
            <div className="divide-y divide-gold-500/20">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-5">
                  <summary className="cursor-pointer font-display text-lg font-semibold text-navy-900 marker:text-gold-600 dark:text-cream">{faq.question}</summary>
                  <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-navy-700 dark:text-cream/65">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="border-t border-gold-500/25 pt-10" aria-labelledby="nri-consultation">
            <h2 id="nri-consultation" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Discuss Your Legal Matter in India</h2>
            <p className="max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/65">Contact our chamber to arrange a consultation. Share the nature of your matter, the relevant Indian location, and any urgent deadlines so the team can assess the next steps.</p>
            <ConsultationActions />
            <a href={whatsappUrl('Hello, I am living abroad and would like to consult the NRI Legal Services team about a matter in India.')} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
              Contact on WhatsApp <ArrowUpRight className="h-4 w-4" />
            </a>
            <p className="mt-8 font-body text-xs leading-relaxed text-navy-700/70 dark:text-cream/45">This page provides general information, not legal advice. Remedies and procedural requirements depend on the facts and applicable law; no outcome is guaranteed.</p>
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}