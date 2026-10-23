import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Landmark,
  ShieldAlert,
  HandCoins,
  Banknote,
  Home,
  Users,
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
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { bankingLucknowStages, bankingLucknowStatutes, bankingLucknowToc } from '@/lib/guides/bankingLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'

const bankingLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const bankingTeam = ['aniket-bose', 'prerna-yaduvanshi', 'aditya-narayan-shukla', 'priyesh-dwivedi']
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
  title: { absolute: 'DRT Lawyer in Lucknow | SARFAESI & Bank Recovery | Sumanjari' },
  description:
    'DRT lawyer and banking advocate in Lucknow for SARFAESI notices, bank recovery, property auctions, guarantor disputes and DRAT appeals. Arrange a review.',
  keywords: [
    'DRT Lawyer Lucknow',
    'DRT Advocate Lucknow',
    'Debts Recovery Tribunal Advocate Lucknow',
    'DRT Lawyer Ghaziabad',
    'DRT Lawyer Noida',
    'DRT Lawyer Agra',
    'DRT Lawyer Meerut',
    'SARFAESI Lawyer Lucknow',
    'SARFAESI Section 17 Lawyer',
    'Bank Recovery Lawyer Lucknow',
    'DRAT Allahabad Appeal Lawyer',
    'Cheque Bounce Lawyer Lucknow',
    'Section 138 NI Act Lawyer Lucknow',
    'Loan Recovery Lawyer Lucknow',
    'Guarantor Liability Lawyer Lucknow',
    'Negotiable Instruments Lawyer Lucknow',
    'DRT-II Lucknow Advocate',
  ],
  alternates: {
    canonical: '/services/banking-recovery-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DRT Lawyer in Lucknow | SARFAESI & Bank Recovery',
    description: 'Advice for borrowers, guarantors and lenders on bank notices, possession, auctions, DRT proceedings and recovery settlements.',
  },
  openGraph: {
    title: 'DRT Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Legal assistance for borrowers, guarantors, banks and financial institutions in DRT proceedings, SARFAESI possession and auction disputes, settlements and DRAT appeals.',
    url: '/services/banking-recovery-lawyer-lucknow',
  },
}

const bankingRecoveryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Banking, Recovery & Negotiable Instruments Matters',
  url: `${SITE_URL}/services/banking-recovery-lawyer-lucknow`,
  description:
    'Representation for banks, financial institutions, borrowers, and guarantors in Debts Recovery Tribunal proceedings, SARFAESI enforcement, bank loan recovery and settlement, and negotiable instrument disputes, before the DRT, Lucknow, DRAT Allahabad, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'City', name: 'Ghaziabad' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' },
    { '@type': 'City', name: 'Agra' },
    { '@type': 'City', name: 'Meerut' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Banking, Recovery & Negotiable Instruments Legal Services',
}

const bankingFaqs = [
  {
    question: 'How do bank recovery proceedings differ for borrowers and lenders?',
    answer: 'Borrowers and guarantors may need to respond to demand notices, examine account statements and security documents, or challenge eligible enforcement measures. Banks and financial institutions may need advice on recovery applications, enforcement compliance and Recovery Officer proceedings. We first identify your role, the current procedural stage, the competent forum and any live deadline. Representation is subject to a conflict-of-interest check; the firm does not act for opposing parties in the same dispute.',
  },
  {
    question: 'When should I contact a DRT lawyer in Lucknow?',
    answer: 'Seek advice when you receive a bank demand notice, DRT summons, possession notice or auction notice, or when a guarantee is invoked. Bring the notice and its date of receipt so counsel can identify the appropriate forum, response and deadline. Do not wait for an auction date to obtain advice.',
  },
  {
    question: 'What is the minimum debt for a bank recovery claim before the DRT?',
    answer: 'The notified pecuniary threshold for recovery applications by banks and financial institutions under the Recovery of Debts and Bankruptcy Act, 1993 is ₹20 lakh. This is not a blanket minimum for a borrower’s Section 17 SARFAESI application. Smaller recovery claims may require civil proceedings or another applicable remedy, depending on the creditor and transaction.',
  },
  {
    question: 'Can I challenge a Section 13(2) SARFAESI demand notice?',
    answer: 'A Section 13(2) demand notice gives the borrower 60 days to discharge the stated liability. A borrower can submit a representation or objection under Section 13(3A), supported by account records and relevant documents. A demand notice alone ordinarily does not trigger the Section 17 remedy; that remedy concerns measures under Section 13(4). The correct response depends on the stage and facts.',
  },
  {
    question: 'What is the time limit for a Section 17 SARFAESI application?',
    answer: 'A person aggrieved by a measure under Section 13(4) may apply to the competent DRT under Section 17 within 45 days from the date the measure was taken. Preserve possession and sale notices and seek advice promptly. Identifying the challenged measure and calculating limitation require review of the actual record.',
  },
  {
    question: 'Can a DRT lawyer help challenge a bank property auction?',
    answer: 'Counsel can examine the possession and sale notices, service, valuation, reserve price and compliance with the Security Interest (Enforcement) Rules, 2002. Where grounds exist, an application can seek appropriate relief, including interim protection. Filing a case or requesting a settlement does not automatically stay possession or an auction; relief depends on the Tribunal’s order.',
  },
  {
    question: 'Which DRT bench should hear my Lucknow or Uttar Pradesh matter?',
    answer: 'The correct tribunal depends on the applicable territorial notifications and the statutory jurisdiction rules, including the relevant branch, secured asset and cause of action. Confirm the current bench allocation for Lucknow, Noida, Ghaziabad, Agra or any other district before filing. The official DRT portal provides tribunal details, cause lists and case-status information.',
  },
  {
    question: 'Is a deposit required for a SARFAESI appeal before the DRAT?',
    answer: 'A Section 18 appeal is ordinarily filed within 30 days of receipt of the DRT order. For a borrower, the statutory pre-deposit is 50% of the debt claimed by the secured creditor or determined by the DRT, whichever is less. The DRAT may reduce this to not less than 25%, with reasons recorded in writing. This appeal requirement is distinct from an initial Section 17 application.',
  },
  {
    question: 'Can a guarantor defend bank recovery proceedings?',
    answer: 'A guarantor can obtain advice on the guarantee terms, invocation, claimed amount, limitation and the security being enforced. A creditor need not invariably exhaust remedies against the principal borrower first. Any defence or settlement strategy must be based on the guarantee and the surrounding records, rather than an assumption that guarantors cannot be pursued.',
  },
  {
    question: 'Does a one-time settlement request stop bank recovery?',
    answer: 'An OTS proposal does not by itself stop recovery proceedings or extend a legal deadline. Settlement depends on the lender’s applicable policy and written acceptance. We assist with proposals and review payment schedules, release of security and closure terms while advising separately on pending proceedings.',
  },
  {
    question: 'What are the fees and expected duration of a DRT case?',
    answer: 'Fees depend on whether advice, a notice response, an Original Application, a SARFAESI application or an appeal is required, and on the documents and hearings involved. Tribunal fees and any statutory appeal deposit are separate considerations. A document review allows the scope and professional fees to be discussed; no fixed disposal time or outcome can be assured.',
  },
]

const drtFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: bankingFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

const matters = [
  {
    icon: Landmark,
    title: 'Debts Recovery Tribunal (DRT) Proceedings',
    points: [
      'Filing and defending Original Applications under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993, subject to the applicable ₹20 lakh threshold',
      'Recovery Certificate execution proceedings before the Recovery Officer',
      'Appeals to the Debts Recovery Appellate Tribunal (DRAT), Allahabad, under Section 20',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'SARFAESI Act Matters',
    points: [
      'Advising on Section 13(2) demand notices and Section 13(4) enforcement measures against secured assets',
      'Section 17 applications before the DRT challenging possession or sale of secured assets',
      'Section 18 appeals before the DRAT, including applications for reduction of the mandatory pre-deposit',
    ],
  },
  {
    icon: HandCoins,
    title: 'Bank Loan Recovery & Settlement',
    points: [
      'Representing banks, financial institutions, and borrowers in loan recovery and restructuring',
      'One-time settlement (OTS) negotiations and compromise proposals',
      'Reviewing NPA classification, account statements, disputed interest and repayment records in the context of the available legal remedy',
    ],
  },
  {
    icon: Banknote,
    title: 'Negotiable Instruments & Cheque Recovery',
    points: [
      'Cheque bounce complaints and defence under Section 138 of the Negotiable Instruments Act',
      'Recovery suits and settlement negotiations linked to dishonoured cheques and promissory notes',
    ],
  },
  {
    icon: Users,
    title: 'Guarantor & Third-Party Liability',
    points: [
      'Representing guarantors and co-obligors in recovery and SARFAESI proceedings',
      'Disputes over invocation of guarantees and enforcement against guarantor assets',
    ],
  },
  {
    icon: Home,
    title: 'Secured Asset & Possession Disputes',
    points: [
      'Challenging possession notices and auction sale proceedings under SARFAESI',
      'Disputes over valuation, symbolic possession, and sale of mortgaged or hypothecated property',
    ],
  },
]

const whyIssues = [
  'Recovery of dues by banks and financial institutions',
  'Enforcement action under SARFAESI, including possession and sale of secured assets',
  'Cheque bounce and negotiable instrument disputes',
  'Guarantor liability and invocation of guarantees',
  'Loan settlement, restructuring, and one-time settlement negotiations',
  'Appeals against DRT and DRAT orders',
]

const jurisdiction = [
  {
    title: 'Debts Recovery Tribunal (DRT), Lucknow',
    blurb:
      'Original Applications for loan recovery and SARFAESI Section 17 applications before the Tribunal.',
  },
  {
    title: 'Debts Recovery Appellate Tribunal (DRAT), Allahabad',
    blurb:
      'Appeals under Section 20 of the Recovery of Debts and Bankruptcy Act and Section 18 of the SARFAESI Act, subject to appellate jurisdiction and deposit requirements.',
  },
  {
    title: 'District & Sessions Courts',
    blurb:
      'Complaints and defence in cheque bounce matters under Section 138 of the Negotiable Instruments Act.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Advice on exceptional writ remedies, subject to territorial jurisdiction and maintainability. Statutory DRT and DRAT remedies ordinarily take priority.',
  },
]

export default async function BankingRecoveryMattersPage() {
  const bankingBlogPosts = getBlogPostsByCategory('Banking & Recovery Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bankingRecoveryJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(drtFaqJsonLd) }}
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
                Banking &amp; Recovery
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              DRT Lawyer in Lucknow{' '}
              <em className="text-gold-gradient">for SARFAESI &amp; Bank Recovery</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our DRT lawyers and banking advocates in Lucknow provide representation before the{' '}
              <strong className="font-semibold text-navy-900 dark:text-cream">
                Debts Recovery Tribunal (DRT), Lucknow
              </strong>{' '}
              {' '}for borrowers, guarantors, banks and financial institutions.
              Sumanjari &amp; Co. Advocates assists with bank demand notices,
              possession and property auction disputes, loan recovery claims,
              one-time settlements and DRAT appeals.
            </p>
            <ServiceStats service="banking" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {bankingLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {bankingLead.img && (
                  <Image src={bankingLead.img} alt={bankingLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: bankingLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Banking &amp; Recovery Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{bankingLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{bankingLead.role}</p>
                <Link href={`/team/${bankingLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={bankingLucknowToc} />

          <section className="mb-16" aria-labelledby="banking-team">
            <h2 id="banking-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Banking &amp; Recovery Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads our banking and recovery practice,
              supported by Adv. Aniket Bose in cheque-dishonour and commercial
              disputes, alongside Adv. Prerna Yaduvanshi, Adv. Aditya Narayan
              Shukla and Adv. Priyesh Dwivedi in related civil litigation.
              Each profile below sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={bankingTeam} label="Banking and recovery team members" />
          </section>

          <div id="banking-overview" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Loan defaults and recovery proceedings move on strict timelines
              — a demand notice under the SARFAESI Act, an Original
              Application before the Debts Recovery Tribunal (DRT), or a
              cheque bounce notice each carry their own limitation periods and
              procedural requirements. Sumanjari &amp; Co. Advocates advises
              and represents banks, financial institutions, borrowers, and
              guarantors through each stage of the process.
            </p>
            <p>
              Our Lucknow banking practice handles DRT recovery and SARFAESI
              matters, DRAT appeals and cheque bounce proceedings under the
              Negotiable Instruments Act. For clients in Noida, Ghaziabad,
              Greater Noida, Agra and elsewhere in Uttar Pradesh, we first
              check the competent tribunal and current bench allocation.
              High Court remedies are considered only where maintainable,
              rather than as a substitute for the statutory tribunal process.
            </p>
          </div>

          <section className="mb-16" aria-labelledby="sarfaesi-next-steps">
            <h2 id="sarfaesi-next-steps" className="mb-6 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Received a Bank Notice, DRT Summons or Auction Notice?
            </h2>
            <div className="space-y-6 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Demand notice and NPA disputes</h3>
                <p>A Section 13(2) notice is different from a possession notice. We review the loan terms, NPA classification, statement of account, interest calculation and service of the notice before preparing a response or objection under Section 13(3A). Keep the envelope, email or delivery record as well as the notice itself.</p>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Possession, Section 14 assistance and property auctions</h3>
                <p>If enforcement has progressed, the review focuses on the measures taken, the secured property, possession documents and sale procedure. Where legally available, we prepare a Section 17 securitisation application and a request for interim relief before the competent DRT. An application does not itself stop enforcement; any protection depends on an order. Share a scheduled auction date at the first consultation.</p>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Original Applications and Recovery Officer proceedings</h3>
                <p>For a bank or financial institution pursuing recovery, we examine the lending documents, security, acknowledgments, limitation and debt calculation before an Original Application. For a borrower or guarantor served with summons, we review the claim and prepare the appropriate defence. Following a recovery certificate, advice may concern execution, attachment, sale or the available challenge to a Recovery Officer order.</p>
              </div>
            </div>
          </section>

          <section className="mb-16 border-y border-gold-500/20 py-8" aria-labelledby="drt-documents">
            <h2 id="drt-documents" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Documents for Your DRT Consultation
            </h2>
            <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <li>Loan sanction letter, loan agreement, repayment schedule and recent account statements.</li>
              <li>Demand, possession and auction notices, with delivery records and relevant dates.</li>
              <li>Mortgage or security papers, property details, valuation reports and guarantee documents.</li>
              <li>DRT summons, applications, recovery certificates and any existing DRT, DRAT or court orders.</li>
              <li>Payment receipts, correspondence with the lender and any OTS proposal or acceptance.</li>
            </ul>
            <p className="mt-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring the documents you have; do not delay advice while collecting the rest. We use the record to identify deadlines, assess available grounds and discuss the scope of representation and fees.</p>
            <ConsultationActions className="mt-6 flex" />
          </section>

          <StatuteTable
            id="banking-statutes"
            heading="Laws Governing Bank Recovery and Secured Assets"
            intro="The remedy depends on the creditor, transaction and challenged action. Check current amendments, notifications and tribunal allocation before relying on a provision; the tracks below have different requirements."
            rows={bankingLucknowStatutes}
          />

          <div id="banking-forums" className="mb-16 scroll-mt-28">
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

          <div id="banking-matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Banking &amp; Recovery Matters We Handle
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
                We begin with a confidential review of the loan documents,
                notices, or order in question, followed by clear advice on
                your position and the timelines that apply — SARFAESI and DRT
                matters move on tight limitation periods, so early action
                matters. We represent you before the DRT, Lucknow, and are
                fully prepared to carry the matter in appeal before the DRAT,
                Allahabad, or in writ jurisdiction before the Allahabad High
                Court, Lucknow Bench.
              </p>
            </div>
          </div>

          <GuideStages
            id="banking-procedure"
            heading="Bank Recovery Procedure and Practical Decisions"
            intro="These are alternative and sometimes parallel tracks, not mandatory consecutive steps in every case. The notice, asset, existing orders and available statutory remedy determine which stages apply. No filing or settlement request automatically stops recovery."
            stages={bankingLucknowStages}
          />

          <div id="banking-faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                DRT &amp; SARFAESI Lawyer in Lucknow: <em className="text-gold-gradient">FAQs</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our banking
                and recovery practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {bankingFaqs.map(({ question, answer }) => (
                <div
                  key={question}
                  className="glass-card card-glow flex flex-col rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <h3 className="mb-2 font-display text-lg font-bold leading-snug text-navy-900 dark:text-cream">
                    {question}
                  </h3>
                  <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {answer}
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

          <section className="mb-12 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60" aria-labelledby="drt-official-resources">
            <h2 id="drt-official-resources" className="mb-3 scroll-mt-28 font-display text-xl font-bold text-navy-900 dark:text-cream">Official DRT and SARFAESI Resources</h2>
            <p>Check tribunal details, cause lists and case status on the <a href="https://drt.gov.in/" className="text-gold-700 underline dark:text-gold-400">official DRT portal</a>. The Recovery of Debts and Bankruptcy Act, 1993, the SARFAESI Act, 2002 and related rules are available through <a href="https://www.indiacode.nic.in/" className="text-gold-700 underline dark:text-gold-400">India Code</a>. Confirm current notifications and filing requirements before taking action.</p>
            <p className="mt-3">This page provides general legal information, not advice on an individual notice or proceeding. Deadlines, jurisdiction and available relief depend on the facts and applicable law.</p>
            <p className="mt-3">For related disputes, see our <Link href="/services/civil-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">civil litigation</Link> and <Link href="/services/property-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">property and land matters</Link> practice pages.</p>
          </section>

          <ServiceBlogs
            posts={bankingBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Banking & Recovery Blogs"
            description="Short reads on DRT proceedings, recovery claims, and negotiable instruments matters."
            viewAllHref={`/blog?category=${encodeURIComponent('Banking & Recovery Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Recovery or SARFAESI Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your DRT, SARFAESI, loan recovery, or
              cheque bounce matter — serving clients across Lucknow,
              Ghaziabad, Noida, Greater Noida, and Agra, and practising before
              the Debts Recovery Tribunal, the DRAT, Allahabad, and the
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
