import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Laptop,
  Lock,
  ShieldAlert,
  AlertTriangle,
  Smartphone,
  Landmark,
  Gavel,
  ShieldCheck,
  MessageSquareWarning,
  ScrollText,
  FileX,
  Phone,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideToc, GuideStages, StatuteTable } from '@/components/LucknowGuide'
import { cyberCrimeLucknowStages, cyberCrimeLucknowToc, cyberCrimeLucknowStatutes } from '@/lib/guides/cyberCrimeLucknow'
import { getBlogPostsByCategories } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const cyberCrimeLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const cyberCrimeTeam = ['jitendra-tiwari', 'abhishek-mishra']
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
  title: { absolute: 'Cyber Crime Lawyer in Lucknow | Bank Account Unfreeze & IT Act' },
  description:
    'Cyber Crime Lawyer in Lucknow at Cyber Thana Gomti Nagar & High Court. Bank account freeze/lien removal (Sec 106/503 BNSS), cyber fraud bail & IT Act defence.',
  keywords: [
    'Cyber Crime Lawyer Lucknow',
    'Cyber Crime Complaint Lucknow',
    'Cyber Thana Lucknow',
    'Cyber Fraud Advocate Lucknow High Court',
    'Cyber Law Advocate Uttar Pradesh',
    'Bank Account Freeze Lawyer',
    'Bank Account Unfreeze Lawyer',
    'IT Act Case Lawyer Lucknow',
    'Sextortion Complaint Lawyer',
    'Cyber Fraud Bail Lawyer Lucknow',
    'Cyber Crime Advocate Lucknow',
    'Cyber Fraud Evidence Legal Advice',
    'Cyber Crime Bank Lien Lucknow',
  ],
  alternates: {
    canonical: '/services/cyber-crime-lawyer-lucknow',
  },
  openGraph: {
    title: 'Cyber Crime Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Cyber crime complaints, bank account freeze/unfreeze matters, IT Act prosecution and defence, and cyber fraud bail before the Allahabad High Court, Lucknow Bench.',
    url: '/services/cyber-crime-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cyber Crime Lawyer in Lucknow | Fraud & Bank Freeze',
    description: 'Legal advice on cyber fraud complaints, digital evidence, bank account restrictions, IT Act cases and bail.',
  },
}

const cyberCrimeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Cyber Crime Matters',
  url: `${SITE_URL}/services/cyber-crime-lawyer-lucknow`,
  description:
    'Representation in cyber crime complaints, cyber thana proceedings, IT Act prosecutions, bank account freeze and unfreeze applications, sextortion and online harassment matters, and cyber fraud bail, before the police, District & Sessions Courts, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Cyber Crime & IT Act Legal Services',
}

const cyberCrimeBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Cyber Crime Lawyer in Lucknow', item: `${SITE_URL}/services/cyber-crime-lawyer-lucknow` },
  ],
}

const matters = [
  {
    icon: Laptop,
    title: 'Cyber Crime Complaints & Cyber Thana Proceedings',
    points: [
      'Filing and follow-up of complaints on the National Cyber Crime Reporting Portal and at the Cyber Thana, Lucknow',
      'Drafting representations to the Cyber Cell and nodal police officers for timely action on online fraud, hacking, and impersonation',
      'Liaising with investigating officers through the complaint and investigation stage',
    ],
  },
  {
    icon: Lock,
    title: 'Bank Account Freeze & Unfreeze Matters',
    points: [
      'Advice and representation where a bank account is frozen following a cyber crime complaint, police direction, or court order, after reviewing the stated legal basis',
      'Applications before the investigating officer, bank nodal office, and Magistrate for defreezing/unfreezing of wrongly or disproportionately frozen accounts',
      'Representation for account holders who are third parties to the underlying fraud but whose accounts are frozen in the process',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Cyber Fraud & Financial Scams',
    points: [
      'UPI, net-banking, OTP, and card fraud complaints, and recovery of siphoned funds where possible',
      'Investment, loan-app, and job-fraud scam complaints and representation',
      'Coordination with banks and payment intermediaries on fraud-reporting timelines',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Sextortion & Online Harassment',
    points: [
      'Confidential representation in sextortion, blackmail, and morphed-image/video extortion complaints',
      'Complaints for online stalking, impersonation, and harassment on social media and messaging platforms',
      'Takedown requests for unlawful content under the IT Act and intermediary guidelines',
    ],
  },
  {
    icon: ScrollText,
    title: 'IT Act Prosecution & Defence',
    points: [
      'Prosecution and defence in offences under the Information Technology Act, 2000 — including Sections 66, 66C, 66D, 66E, and 67',
      'Defence in cases of identity theft, cheating by personation using a computer resource, and publication of obscene material',
      'Advice on compliance for businesses and intermediaries under the IT Act and IT Rules',
    ],
  },
  {
    icon: Gavel,
    title: 'Cyber Fraud Bail & Quashing',
    points: [
      'Regular bail before the competent court and anticipatory bail before the Sessions Court or High Court, where maintainable',
      'High Court petitions for quashing of FIRs and cyber crime proceedings under the applicable procedural law, including Section 528 BNSS where applicable',
      'Challenging chargesheets filed in cyber crime investigations',
    ],
  },
]

const whyIssues = [
  'Unauthorised bank transactions and account freezing',
  'Hacking, phishing, and identity theft',
  'Sextortion, blackmail, and online harassment',
  'Defamatory or obscene content online',
  'Bail and anticipatory bail in cyber crime FIRs',
  'Compliance advisory for businesses and intermediaries',
]

const jurisdiction = [
  {
    title: 'Cyber Thana & Cyber Cell, Lucknow',
    blurb:
      'Filing and follow-up of complaints at the Cyber Crime Police Station (Cyber Thana), Vibhuti Khand, Gomti Nagar, Lucknow, and the UP Police Cyber Crime Headquarters, Signature Building, Gomti Nagar Extension, Lucknow — including representations for account unfreezing and coordination with investigating officers.',
  },
  {
    title: 'Local Police Stations',
    blurb:
      'Complaints where the underlying offence — fraud, extortion, harassment — also falls within ordinary police jurisdiction.',
  },
  {
    title: 'Magistrate & Sessions Courts, Lucknow',
    blurb:
      'Bail applications, trial, and account-defreezing applications arising from cyber crime investigations.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Anticipatory bail, FIR quashing, and writ remedies in cyber crime and IT Act matters, argued from our chambers at Block D-311.',
  },
]

const cyberCrimeInsights = [
  {
    icon: Lock,
    title: 'How to Unfreeze a Bank Account',
    excerpt:
      'Ask the bank for the freeze reference, disputed amount, and investigating authority. Bank statements, invoices, and proof of the source of funds can support a representation or application before the competent court. The appropriate remedy depends on the direction or order; no fixed unfreezing timeline can be promised.',
  },
  {
    icon: Smartphone,
    title: 'Where to File a Cyber Crime Complaint in Lucknow',
    excerpt:
      'Complaints can be filed on the National Cyber Crime Reporting Portal (cybercrime.gov.in), the 1930 helpline for financial fraud, or in person at the Cyber Thana, Lucknow — the choice of channel can affect how quickly funds are traced and frozen.',
  },
  {
    icon: AlertTriangle,
    title: 'What to Do If You Receive a Sextortion Threat',
    excerpt:
      'Do not make any payment or engage with the sender. Preserve screenshots, chat logs, and payment demands, and report immediately through the Cyber Thana or the national portal — early reporting significantly improves the chance of tracing the offender.',
  },
  {
    icon: ScrollText,
    title: 'Common Offences Under the IT Act, 2000',
    excerpt:
      'Sections 66, 66C, 66D, and 66E cover hacking, identity theft, cheating by personation, and violation of privacy, while Section 67 addresses publishing or transmitting obscene material in electronic form — each carries distinct penal consequences.',
  },
  {
    icon: Gavel,
    title: 'Can You Get Bail in a Cyber Fraud Case?',
    excerpt:
      'Bail depends on the offences alleged, the accused person\u2019s role, the money trail, and the need for custody. Regular bail is sought before the competent court; anticipatory bail may be sought before the Sessions Court or High Court where maintainable. A complaint or account freeze alone does not determine the outcome.',
  },
]

const cyberCrimeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I unfreeze a bank account frozen in a cyber crime case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First obtain the freeze reference, disputed amount, and investigating authority from the bank. Preserve bank statements and documents showing the source of funds. Depending on the direction or order, a representation to the investigating officer or an application before the competent court may seek release or limitation of the freeze. Relief and timelines depend on the facts; the bank may need instructions from the authority that ordered the restriction.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I file a cyber crime complaint in Lucknow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Report online financial fraud immediately to your bank or payment provider and call 1930. Submit the details at cybercrime.gov.in and preserve the acknowledgement. You can also approach the local police or Cyber Crime Police Station in Lucknow. An online acknowledgement is not itself confirmation that an FIR has been registered; follow up with the investigating authority.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I receive a sextortion threat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid any payment or further engagement with the sender, preserve all evidence such as screenshots and chat logs, and report the matter promptly through the Cyber Thana or the national cyber crime portal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get bail in a cyber fraud or IT Act case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bail depends on the charged offences, alleged role, transaction trail, and investigation needs. Regular bail is sought before the competent court. Anticipatory bail may be sought before the Sessions Court or High Court where maintainable. The FIR and any police notice should be reviewed before deciding the remedy; bail cannot be guaranteed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What offences fall under the IT Act, 2000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Information Technology Act, 2000 addresses computer-related offences under Section 66, identity theft under Section 66C, cheating by personation using a computer resource under Section 66D, violation of privacy under Section 66E, and obscene electronic material under Section 67. Other criminal offences may also apply. The applicable substantive and procedural law depends on the dates and circumstances of the case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can money lost in UPI fraud or an online investment scam be recovered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Prompt reporting to the bank, 1930, and the national portal may help authorities trace or hold funds, but it does not guarantee recovery. Release of traced funds depends on the investigation and applicable bank or court process. Keep transaction references, statements, complaint acknowledgements, and communications with the recipient.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a lawyer to file a cyber crime complaint?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. You can report directly to the bank, helpline, portal, or police without a lawyer. Legal assistance may help where a complaint needs detailed supporting evidence, there is no progress, your account is frozen, or you need advice on a police notice, bail, or court proceedings. Do not delay urgent reporting while arranging a consultation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I bring to a cyber crime lawyer consultation in Lucknow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bring a dated chronology, complaint or FIR details, police notices, bank statements, transaction IDs, relevant messages and URLs, and any freeze communication. Preserve original devices and files. Do not send passwords, OTPs, PINs, or unnecessary copies of intimate material. Fees and scope should be discussed after the documents and required work are assessed.',
      },
    },
  ],
}

export default async function CyberCrimeLawyerAdvocatePage() {
  const cyberCrimeBlogPosts = getBlogPostsByCategories(['Criminal Matters', 'Banking & Recovery Matters'], 8)

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cyberCrimeJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cyberCrimeFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cyberCrimeBreadcrumbJsonLd) }}
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

          <div className="mb-16 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-12 bg-gold-500" />
                <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                  Cyber Law
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
                Cyber Crime Lawyer in Lucknow — <em className="text-gold-gradient">Bank Account Unfreeze, Cyber Fraud &amp; IT Act Defence</em>
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Our cyber crime lawyers and advocates in Lucknow assist with complaints, bank account freeze &amp; unfreeze
                matters, IT Act prosecution and defence, and cyber fraud bail
                — before the Cyber Thana, Lucknow, and the Allahabad High
                Court, Lucknow Bench, led by Adv. Aishwarya Pandey.
              </p>
              <ServiceStats service="cyberCrime" />
              <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {cyberCrimeLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {cyberCrimeLead.img && (
                  <Image src={cyberCrimeLead.img} alt={cyberCrimeLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: cyberCrimeLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Cyber Crime Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{cyberCrimeLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{cyberCrimeLead.role}</p>
                <Link href={`/team/${cyberCrimeLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={cyberCrimeLucknowToc} />

          <section className="mb-16" aria-labelledby="cyber-crime-team">
            <h2 id="cyber-crime-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Cyber Crime Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aishwarya Pandey leads our cyber crime practice alongside
              Adv. Jitendra Tiwari and Adv. Abhishek Mishra. Each profile
              below sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={cyberCrimeTeam} label="Cyber crime team members" />
          </section>

          <section className="mb-16 border-y border-gold-500/25 py-8" aria-labelledby="urgent-cyber-fraud">
            <h2 id="urgent-cyber-fraud" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Lost Money to Online Fraud? Act Immediately
            </h2>
            <ol className="list-decimal space-y-3 pl-5 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              <li>Contact your bank or payment provider through its official fraud channel to report the transaction and secure affected accounts.</li>
              <li>Call the national financial cyber fraud helpline <a href="tel:1930" className="font-semibold underline underline-offset-4">1930</a> and submit your complaint at <a href="https://cybercrime.gov.in/" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-4">cybercrime.gov.in</a>. Keep the acknowledgement and follow the reporting instructions.</li>
              <li>Save transaction IDs, beneficiary details, messages, phone numbers, and website links. Do not delete chats or reset the affected device before preserving evidence.</li>
              <li>Do not pay a supposed recovery agent or transfer more money to unlock funds. No caller can lawfully place you under a &quot;digital arrest&quot; over a video call.</li>
            </ol>
            <p className="mt-4 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
              You do not need a lawyer to make an urgent report. Early reporting may help trace funds, but recovery is not guaranteed. For an immediate threat to physical safety, contact emergency services on <a href="tel:112" className="underline underline-offset-4">112</a>.
            </p>
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Looking for a cyber crime advocate in Lucknow often starts with
              an urgent problem: a fraudulent UPI payment, a frozen bank
              account, a police notice, or threats on social media.
              Sumanjari &amp; Co. Advocates advises and represents victims
              and accused persons alike — from filing a complaint at the
              Cyber Thana or on the National Cyber Crime Reporting Portal,
              through investigation, bail, and trial under the Information
              Technology Act, 2000.
            </p>
            <p>
              Whether you need to report online fraud, apply to unfreeze a
              bank account linked to a cyber crime complaint, respond to a
              sextortion threat, or defend an IT Act prosecution, we handle
              the matter with the discretion and urgency it requires —
              representing you before the police, the District &amp;
              Sessions Courts, and in appropriate cases, the Allahabad High
              Court, Lucknow Bench.
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
          </div>

          <div className="mb-16">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Cyber Crime Matters We Handle
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

          <section className="mb-16 space-y-6" aria-labelledby="cyber-complaint-lucknow">
            <h2 id="cyber-complaint-lucknow" className="scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              How to File a Cyber Crime Complaint in Lucknow
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Prepare a dated account of what happened: how contact began, what was promised or threatened, when each payment was made, and when you discovered the fraud. Include the amount, transaction reference or UTR, recipient account or UPI ID, phone numbers, email addresses, and relevant URLs. Keep the portal acknowledgement and copies of anything submitted to the police. A portal complaint is not the same as a registered FIR; ask the police about the status and next steps.
            </p>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream">Preserve Digital Evidence Before It Disappears</h3>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Keep original messages, chat exports, emails with headers, payment receipts, and bank statements as well as screenshots showing dates and account handles. Do not crop or edit the only copy. Preserve the original device where possible; screenshots alone may not establish authenticity. Electronic records may require supporting certificates under the applicable evidence law. Avoid forwarding intimate material unnecessarily, and never share passwords, OTPs, or banking PINs.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Our role can include organising the evidence, drafting a complaint or follow-up representation, and advising on remedies where action is delayed. The appropriate police authority and court depend on the facts and territorial jurisdiction, not simply the complainant&apos;s preferred location.
            </p>
          </section>

          <section className="mb-16 space-y-5" aria-labelledby="frozen-bank-account">
            <h2 id="frozen-bank-account" className="scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Bank Account Frozen After a Cyber Crime Complaint?
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              An account restriction can affect a fraud victim, a business that received a payment, or an account holder alleged to be part of a transaction chain. A freeze does not by itself establish guilt. Ask the bank for the complaint or reference number, the investigating agency, the disputed amount, and whether the restriction is a lien for a specific amount or a wider debit freeze.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Gather statements and documents explaining the payment, such as invoices, contracts, salary records, or delivery proof. After reviewing the direction and money trail, counsel can assess a representation to the investigating officer or an application to the competent court for release or a narrower restriction. Do not assume the bank can remove a police-directed freeze on its own. Where the investigation originates outside Lucknow, proceedings may need to be taken before the authority or court with jurisdiction.
            </p>
          </section>

          <section id="unfreeze-bank-account-bnss" className="mb-16 scroll-mt-28 space-y-5 border-t border-gold-500/20 pt-10" aria-labelledby="unfreeze-bank-account-bnss-heading">
            <h2 id="unfreeze-bank-account-bnss-heading" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              How to Unfreeze a Bank Account Frozen by Cyber Cell (Section 106 &amp; 503 BNSS / Section 102 &amp; 457 CrPC)
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              Cyber Cell freezes take two forms, and the distinction decides the remedy. A <strong className="text-navy-900 dark:text-cream">Total Debit Freeze</strong> blocks the entire account, while a <strong className="text-navy-900 dark:text-cream">Specific Disputed Lien</strong> holds only the disputed credit in a Layer-2, Layer-3 or Layer-4 account through which fraud proceeds were routed. Settled High Court principles hold that investigating agencies acting under Section 102 CrPC / Section 106 BNSS should ordinarily mark a specific lien on the disputed transaction amount rather than paralyzing the entire bank account of an innocent merchant, salaried employee or P2P trader.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              The remedy is a release application under Section 451/457 CrPC (Section 497/503 BNSS) before the jurisdictional Magistrate, or — where the freeze is arbitrary or disproportionate — a Writ-C petition under Article 226 before the Allahabad High Court, Lucknow Bench. We routinely handle freezes arising from P2P crypto/USDT trades on Binance and Telegram task-fraud chains, gathering exchange KYC records, order IDs and transaction proofs to demonstrate the legitimate source of the frozen credit.
            </p>
          </section>

          <section className="mb-16 space-y-5" aria-labelledby="cyber-law-remedies">
            <h2 id="cyber-law-remedies" className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Cyber Law, Police Notices and Court Remedies
            </h2>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              The Information Technology Act, 2000 addresses identity theft, online personation, computer-related offences, privacy violations, and unlawful electronic content. Cheating, extortion, stalking, or other offences under general criminal law may also be alleged. The dates and circumstances determine which substantive, procedural, and evidence provisions apply; older and newer cases should not be treated as legally identical.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              If you receive a police notice or learn of an FIR, preserve it and obtain advice before responding. Do not ignore the notice, delete records, or contact a complainant to pressure them. We assess the alleged role, transaction trail, and available documents before advising on a response, regular or anticipatory bail where maintainable, or a High Court remedy. Quashing is a distinct remedy and is not available merely because an allegation is disputed.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              For connected proceedings, see our <Link href="/services/criminal-lawyer-lucknow" className="font-semibold underline underline-offset-4">criminal law practice in Lucknow</Link>. For online harassment or impersonation, preserve the account URLs and report the content through the platform&apos;s grievance process alongside any police complaint; content removal and criminal proceedings are separate processes.
            </p>
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
                We act without delay once instructed — filing or responding
                to complaints, applying for account unfreezing where funds
                have been wrongly held, and preparing bail applications and
                a considered defence strategy. Where warranted, we pursue
                quashing, anticipatory bail, or appeal before the Allahabad
                High Court, Lucknow Bench.
              </p>
            </div>
          </div>

          <StatuteTable
            id="cyber-statutes"
            heading="Cybercrime Law, Procedure and Digital Evidence"
            intro="The IT Act may apply alongside general criminal law. Offence dates, procedural stage and commencement or savings provisions determine whether BNS, BNSS and BSA or predecessor provisions govern a particular issue. Current jurisdictional and forum practice must also be checked."
            rows={cyberCrimeLucknowStatutes}
          />

          <GuideStages
            id="cyber-procedure"
            heading="From Cybercrime Reporting to Appropriate Court Relief"
            intro="These six stages distinguish a report from an FIR, an investigation from a finding of liability, and a bank restriction from authority to release money. The sequence varies with the incident, your role and connected proceedings."
            stages={cyberCrimeLucknowStages}
          />

          <section id="cyber-documents" aria-labelledby="cyber-documents-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="cyber-documents-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">First-Consultation and Digital-Evidence Checklist</h2>
            <p className="mb-4 font-body leading-relaxed text-navy-700 dark:text-cream/70">Preserve the originals and a clear chronology. Seek urgent advice on an active notice, continuing threat or account restriction even when the bank has not yet supplied every requested detail.</p>
            <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <li>Transaction IDs, relevant statements, payment dates and amounts, bank complaints and replies from official channels.</li>
              <li>1930 or portal acknowledgements, written police complaints, FIR details if registered, notices and proof of receipt.</li>
              <li>Original messages, emails, account URLs and relevant devices; retain complete context without editing or publicly circulating sensitive material.</li>
              <li>For a freeze: the available restriction letter, affected amount, issuing authority, complaint references and documents explaining legitimate credits.</li>
              <li>All connected complaints, orders and partial releases, including instructions from other states. Do not provide passwords, OTPs or remote access to anyone promising recovery.</li>
            </ul>
          </section>

          <div className="mb-16">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Cyber Law <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our cyber
                crime practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {cyberCrimeInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <section className="mb-16" aria-labelledby="cyber-crime-faq">
            <h2 id="cyber-crime-faq" className="mb-6 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Cyber Crime Lawyer in Lucknow: Frequently Asked Questions
            </h2>
            <div className="divide-y divide-gold-500/20">
              {cyberCrimeFaqJsonLd.mainEntity.map((question) => (
                <details key={question.name} className="py-5">
                  <summary className="cursor-pointer font-display text-lg font-bold text-navy-900 dark:text-cream">
                    {question.name}
                  </summary>
                  <p className="mt-3 font-body leading-relaxed text-navy-800 dark:text-cream/75">
                    {question.acceptedAnswer.text}
                  </p>
                </details>
              ))}
            </div>
            <p className="mt-5 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
              This page provides general information, not advice on an individual case. Legal options depend on the records, applicable law, and jurisdiction. No recovery, account release, bail, or other outcome is guaranteed.
            </p>
          </section>

          <section aria-labelledby="cyber-fraud-evidence" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="cyber-fraud-evidence" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">Online Fraud Reporting and Bank Freeze Review</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">For suspected financial cyber fraud, contact your bank and report promptly through 1930 or the National Cyber Crime Reporting Portal at cybercrime.gov.in. Do not wait for a lawyer appointment before reporting an ongoing loss. Retain the acknowledgement and transaction references; a report does not guarantee recovery. If your own account is restricted, ask the bank for the available lien or freeze particulars, the originating authority and the complaint reference rather than assuming the restriction can be removed by the branch alone.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Keep the complaint, transaction trail and electronic evidence separate</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Preserve original messages, email headers, URLs, payment references, account statements and bank communications without editing or deleting the source material. A cyber complaint acknowledgement is not the same document as an FIR or a court order. Multistate complaints may require identifying each police authority and the precise restriction before making representations or seeking relief before the competent forum. Never share passwords, OTPs, PINs or recovery codes with someone claiming to recover funds.</p>
          </section>

          <ServiceBlogs
            posts={cyberCrimeBlogPosts}
            fallbackIcon={<FileX className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Cyber Fraud, Bank Freeze & Criminal Procedure Blogs"
            description="Short reads on criminal procedure, bail, bank account freezes and fund recovery relevant to cyber crime matters."
            viewAllHref="/blog"
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Cyber Crime Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your cyber crime complaint, frozen
              bank account, IT Act case, or cyber fraud bail — practising
              before the Cyber Thana, Lucknow, and the Allahabad High
              Court, Lucknow Bench.
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
