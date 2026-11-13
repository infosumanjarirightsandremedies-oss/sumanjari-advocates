import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Landmark,
  Gavel,
  HandCoins,
  Banknote,
  Users,
  ShieldCheck,
  MessageSquareWarning,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceContactLinks from '@/components/ServiceContactLinks'
import ServiceSelection from '@/components/ServiceSelection'
import { serviceSearchContent, withServiceSelectionFaq } from '@/lib/serviceSearch'
import LucknowChambers from '@/components/LucknowChambers'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { bankingLucknowStages, bankingLucknowStatutes, bankingLucknowToc } from '@/lib/guides/bankingLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { LUCKNOW_SERVICE_LOCATION } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const searchContent = serviceSearchContent['banking-recovery-lawyer-lucknow']

const bankingLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const bankingTeam = ['shishir-pandey', 'aniket-bose', 'prerna-yaduvanshi', 'aditya-narayan-shukla', 'priyesh-dwivedi']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

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
  keywords: [
    searchContent.attorneyKeyword,
    'Bank Recovery Lawyer Lucknow',
    'Banking Recovery Advocate Lucknow',
    'Loan Recovery Lawyer Lucknow',
    'Cheque Bounce Lawyer Lucknow',
    'Section 138 NI Act Lawyer Lucknow',
    'One Time Settlement Lawyer Lucknow',
    'OTS Negotiation Advocate Lucknow',
    'Commercial Recovery Suit Lawyer Lucknow',
    'Guarantor Liability Lawyer Lucknow',
    'Negotiable Instruments Lawyer Lucknow',
    'Banking Dispute Law Firm Lucknow',
  ],
  alternates: {
    canonical: '/services/banking-recovery-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Banking Recovery Lawyer in Lucknow | OTS & Cheque Bounce',
    description: 'Advice for borrowers, guarantors and lenders on loan recovery, settlement negotiation, and cheque dishonour proceedings.',
  },
  openGraph: {
    title: 'Banking Recovery Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Legal assistance for borrowers, guarantors, banks and financial institutions in loan recovery, One-Time Settlement, commercial recovery suits, and cheque dishonour matters.',
    url: '/services/banking-recovery-lawyer-lucknow',
  },
}

const bankingRecoveryJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  ...LUCKNOW_SERVICE_LOCATION,
  name: 'Sumanjari & Co. Advocates — Banking, Recovery & Negotiable Instruments Matters',
  url: `${SITE_URL}/services/banking-recovery-lawyer-lucknow`,
  description:
    'Representation for banks, financial institutions, borrowers, and guarantors in loan recovery and settlement, One-Time Settlement (OTS) negotiation, commercial recovery suits, and negotiable instrument (cheque bounce) disputes, before the Commercial Court, the ACJM/Special NI Act courts, and the Allahabad High Court, Lucknow Bench.',
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

const bankingBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Banking & Recovery Lawyer in Lucknow', item: `${SITE_URL}/services/banking-recovery-lawyer-lucknow` },
  ],
}

const bankingFaqs = [
  {
    question: 'How do bank recovery proceedings differ for borrowers and lenders?',
    answer: 'Borrowers and guarantors may need to respond to demand notices, examine account statements and security documents, or negotiate settlement terms. Banks and financial institutions may need advice on recovery suits, settlement policy and compliance. We first identify your role, the current procedural stage, the competent forum and any live deadline. Representation is subject to a conflict-of-interest check; the firm does not act for opposing parties in the same dispute.',
  },
  {
    question: 'When should I contact a banking recovery lawyer in Lucknow?',
    answer: 'Seek advice when you receive a bank demand notice, a cheque dishonour notice, or a recovery suit summons, or when you are considering a settlement proposal. Bring the notice and its date of receipt so counsel can identify the appropriate forum, response and deadline.',
  },
  {
    question: 'Can a guarantor defend bank recovery proceedings?',
    answer: 'A guarantor can obtain advice on the guarantee terms, invocation, claimed amount, limitation and the security being enforced. A creditor need not invariably exhaust remedies against the principal borrower first. Any defence or settlement strategy must be based on the guarantee and the surrounding records, rather than an assumption that guarantors cannot be pursued.',
  },
  {
    question: 'Does a one-time settlement (OTS) request stop bank recovery?',
    answer: 'An OTS proposal does not by itself stop recovery proceedings or extend a legal deadline. Settlement depends on the lender’s applicable policy and written acceptance. We assist with proposals and review payment schedules, release of security and closure terms while advising separately on pending proceedings.',
  },
  {
    question: 'What is the limitation period for a cheque bounce complaint under Section 138?',
    answer: 'The payee must issue a statutory demand notice within 30 days of receiving the dishonour memo, allow the drawer 15 days to pay, and then file the complaint within 30 days of the payment period expiring (subject to the court’s discretion to condone delay). Notice contents, service and the underlying debt must be verified before a complaint or defence is finalised.',
  },
  {
    question: 'Can a cheque bounce case be settled or compounded?',
    answer: 'Yes. Section 147 of the Negotiable Instruments Act permits compounding of the offence, which often delivers the fastest and most commercial resolution for both sides. Settlement terms, payment schedule and withdrawal of the complaint should be documented carefully.',
  },
  {
    question: 'Where does a SARFAESI or DRT matter fit into bank recovery?',
    answer: 'Enforcement against secured assets under the SARFAESI Act, and recovery claims above the DRT’s ₹20 lakh threshold, follow a distinct tribunal track with its own limitation periods. See our dedicated DRT & SARFAESI Matters page for that practice.',
  },
  {
    question: 'What are the fees and expected duration of a banking recovery matter?',
    answer: 'Fees depend on whether advice, a notice response, a cheque bounce complaint, a commercial recovery suit, or a settlement negotiation is required, and on the documents and hearings involved. A document review allows the scope and professional fees to be discussed; no fixed disposal time or outcome can be assured.',
  },
]

const bankingFaqJsonLd = {
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
    icon: HandCoins,
    title: 'Bank Loan Recovery & Settlement',
    points: [
      'Representing banks, financial institutions, and borrowers in loan recovery and restructuring',
      'One-time settlement (OTS) negotiations and compromise proposals',
      'Reviewing account statements, disputed interest and repayment records in the context of the available legal remedy',
    ],
  },
  {
    icon: Banknote,
    title: 'Negotiable Instruments & Cheque Recovery',
    points: [
      'Cheque bounce complaints and defence under Section 138 of the Negotiable Instruments Act',
      'Recovery suits and settlement negotiations linked to dishonoured cheques and promissory notes',
      'Compounding under Section 147 and interim-compensation disputes under Section 143A',
    ],
  },
  {
    icon: Users,
    title: 'Guarantor & Third-Party Liability',
    points: [
      'Representing guarantors and co-obligors in recovery proceedings and settlement negotiations',
      'Disputes over invocation of guarantees and enforcement against guarantor assets',
    ],
  },
  {
    icon: Gavel,
    title: 'Commercial Recovery Suits',
    points: [
      'Summary and commercial-court recovery suits for unsecured loans and business credit facilities',
      'Execution of money decrees and recovery of the decretal amount',
    ],
  },
]

const whyIssues = [
  'Recovery of dues by banks, financial institutions and private lenders',
  'Cheque bounce and negotiable instrument disputes',
  'Guarantor liability and invocation of guarantees',
  'Loan settlement, restructuring, and one-time settlement negotiations',
  'Commercial recovery suits outside the DRT’s jurisdiction',
]

const jurisdiction = [
  {
    title: 'District & Sessions Courts',
    blurb:
      'Complaints and defence in cheque bounce matters under Section 138 of the Negotiable Instruments Act, before the ACJM / Special NI Act Magistrate Courts, Kaiserbagh.',
  },
  {
    title: 'Commercial Court, Lucknow',
    blurb:
      'Recovery suits and execution proceedings for commercial debts falling outside the Debts Recovery Tribunal’s pecuniary or institutional jurisdiction.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Advice on exceptional writ remedies, subject to territorial jurisdiction and maintainability.',
  },
]

export default async function BankingRecoveryMattersPage() {
  const bankingBlogPosts = getBlogPostsByCategory('Banking & Recovery Matters').then((posts) => posts.filter(
    (post) => !/SARFAESI|DRT|tribunal|auction|possession/i.test(`${post.title} ${post.excerpt}`)
  ))

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withServiceSelectionFaq(bankingFaqJsonLd, searchContent)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bankingBreadcrumbJsonLd) }}
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
              Banking Recovery Lawyer &amp; Cheque Bounce Advocate in Lucknow{' '}
              <em className="text-gold-gradient">(OTS &amp; Section 138 NI Act)</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our banking and recovery advocates in Lucknow represent
              borrowers, guarantors, banks and financial institutions in loan
              recovery, One-Time Settlement (OTS) negotiations, cheque
              dishonour proceedings under Section 138, and commercial
              recovery suits. For SARFAESI enforcement and Debts Recovery
              Tribunal (DRT) proceedings, see our{' '}
              <Link href="/services/drt-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                dedicated DRT &amp; SARFAESI practice
              </Link>.
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
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{bankingLead.role}, {bankingLead.credentials} — 8+ years of High Court &amp; DRT practice</p>
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
              Adv. Jitendra Tiwari (Director, B.A. LL.B. Hons.) leads our
              banking and recovery practice, supported by Adv. Shishir Pandey
              and Adv. Aniket Bose in cheque-dishonour and recovery suit
              litigation, alongside Adv. Prerna Yaduvanshi, Adv. Aditya Narayan
              Shukla and Adv. Priyesh Dwivedi in related civil and commercial
              disputes. Each profile below sets out that member&apos;s
              individual practice areas.
            </p>
            <TeamCarousel members={bankingTeam} label="Banking and recovery team members" />
          </section>

          <LucknowChambers />
          <ServiceSelection content={searchContent} />

          <div id="banking-overview" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Loan defaults and recovery proceedings move on strict timelines
              — a pre-litigation demand notice, a cheque bounce notice under
              the Negotiable Instruments Act, or a commercial recovery suit
              each carry their own limitation periods and procedural
              requirements. Sumanjari &amp; Co. Advocates advises and
              represents banks, financial institutions, borrowers, and
              guarantors through each stage of the process.
            </p>
            <p>
              Our Lucknow banking practice handles loan recovery and One-Time
              Settlement (OTS) negotiations, cheque bounce proceedings under
              the Negotiable Instruments Act, and commercial recovery suits
              outside the Debts Recovery Tribunal&apos;s jurisdiction. Where
              the dispute involves SARFAESI enforcement, secured-asset
              possession, bank auctions, or a Debts Recovery Tribunal (DRT)
              Original Application above the ₹20 lakh threshold, see our{' '}
              <Link href="/services/drt-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                dedicated DRT &amp; SARFAESI Matters
              </Link>{' '}
              page for that specialised track.
            </p>
          </div>

          <section className="mb-16 rounded-sm border border-gold-500/30 bg-gold-500/5 p-6 dark:bg-gold-500/10" aria-labelledby="drt-cross-link">
            <h2 id="drt-cross-link" className="mb-2 font-display text-lg font-bold text-navy-900 dark:text-cream">
              Facing a Bank Auction, Possession Notice or DRT Summons?
            </h2>
            <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/70">
              SARFAESI and DRT matters run on strict, separate limitation
              periods. Visit our{' '}
              <Link href="/services/drt-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                dedicated DRT &amp; SARFAESI Defense Desk →
              </Link>
            </p>
          </section>

          <section className="mb-16" aria-labelledby="sarfaesi-next-steps">
            <h2 id="sarfaesi-next-steps" className="mb-6 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Received a Demand Notice, Cheque Bounce Notice or Recovery Suit Summons?
            </h2>
            <div className="space-y-6 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Demand notice, account reconciliation &amp; OTS</h3>
                <p>We review the loan terms, statement of account, interest calculation and service of the notice before preparing a response, objection, or a One-Time Settlement (OTS) proposal. An OTS proposal does not by itself stop a pending proceeding or extend a statutory deadline; keep the envelope, email or delivery record as well as the notice itself.</p>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Cheque dishonour and Section 138 complaints</h3>
                <p>We verify notice contents, service, territorial jurisdiction and the legally enforceable debt before a Section 138 complaint or defence is finalised, and advise on interim compensation, vicarious liability for company signatories, and compounding under Section 147.</p>
              </div>
              <div>
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Commercial recovery suits and guarantor claims</h3>
                <p>For a bank, NBFC or private lender pursuing recovery outside the DRT&apos;s jurisdiction, we examine the lending documents, acknowledgments, limitation and debt calculation before filing a commercial recovery suit. For a borrower or guarantor served with summons, we review the claim and prepare the appropriate defence. After a decree, advice may concern execution, attachment or realisation.</p>
              </div>
            </div>
          </section>

          <section className="mb-16 border-y border-gold-500/20 py-8" aria-labelledby="drt-documents">
            <h2 id="drt-documents" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Documents for Your Banking Recovery Consultation
            </h2>
            <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <li>Loan sanction letter, loan agreement, repayment schedule and recent account statements.</li>
              <li>Demand notices and cheque dishonour memos, with delivery records and relevant dates.</li>
              <li>Guarantee documents and security papers, where applicable.</li>
              <li>Recovery suit summons, cheque bounce complaint papers and any existing court orders.</li>
              <li>Payment receipts, correspondence with the lender and any OTS proposal or acceptance.</li>
            </ul>
            <p className="mt-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring the documents you have; do not delay advice while collecting the rest. We use the record to identify deadlines, assess available grounds and discuss the scope of representation and fees.</p>
            <ConsultationActions className="mt-6 flex" />
          </section>

          <StatuteTable
            id="banking-statutes"
            heading="Statutory Framework Governing Banking Recovery & Cheque Bounce in Lucknow"
            intro="The remedy depends on the creditor, transaction and challenged action. Check current amendments, notifications and tribunal allocation before relying on a provision; the tracks below have different requirements. For SARFAESI and DRT-specific statutes, see our dedicated DRT & SARFAESI page."
            rows={bankingLucknowStatutes}
          />

          <div id="banking-forums" className="mb-16 scroll-mt-28">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Forums We Appear Before
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-3">
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
                your position and the timelines that apply. Where possible,
                we work towards a negotiated settlement — but we are fully
                prepared to pursue a cheque bounce complaint or commercial
                recovery suit through trial and execution where necessary.
              </p>
            </div>
          </div>

          <GuideStages
            id="banking-procedure"
            heading="How a Banking Recovery Matter Proceeds in Lucknow: Stage 1 to Stage 4"
            intro="These are alternative and sometimes parallel tracks, not mandatory consecutive steps in every case. The notice, facility and available remedy determine which stages apply. No filing or settlement request automatically stops recovery."
            stages={bankingLucknowStages}
          />

          <div id="banking-faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Banking Recovery Lawyer in Lucknow: <em className="text-gold-gradient">FAQs</em>
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
            <h2 id="drt-official-resources" className="mb-3 scroll-mt-28 font-display text-xl font-bold text-navy-900 dark:text-cream">Official Resources</h2>
            <p>The Negotiable Instruments Act, 1881, the Commercial Courts Act, 2015 and related rules are available through <a href="https://www.indiacode.nic.in/" className="text-gold-700 underline dark:text-gold-400">India Code</a>. Confirm current notifications and filing requirements before taking action.</p>
            <p className="mt-3">This page provides general legal information, not advice on an individual notice or proceeding. Deadlines, jurisdiction and available relief depend on the facts and applicable law.</p>
            <p className="mt-3">For SARFAESI, secured-asset possession and DRT proceedings, see our <Link href="/services/drt-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">DRT &amp; SARFAESI Matters</Link> page. For related disputes, see our <Link href="/services/civil-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">civil litigation</Link> and <Link href="/services/property-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">property and land matters</Link> practice pages.</p>
          </section>

          <ServiceBlogs
            posts={bankingBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Banking & Recovery Blogs"
            description="Short reads on loan recovery, settlement, and negotiable instruments matters."
            viewAllHref={`/blog?category=${encodeURIComponent('Banking & Recovery Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Recovery or Cheque Bounce Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your loan recovery, settlement, or
              cheque bounce matter — serving clients across Lucknow,
              Ghaziabad, Noida, Greater Noida, and Agra. For SARFAESI and DRT
              proceedings, visit our{' '}
              <Link href="/services/drt-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-300">
                dedicated DRT &amp; SARFAESI page
              </Link>.
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
