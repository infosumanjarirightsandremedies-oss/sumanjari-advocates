import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { Suspense } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  Briefcase,
  Users,
  Gavel,
  ScrollText,
  Scale,
  ShieldCheck,
  Landmark,
  MessageSquareWarning,
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
import { corporateLucknowExamples, corporateLucknowFaqs, corporateLucknowStages, corporateLucknowStatutes, corporateLucknowToc } from '@/lib/guides/corporateLucknow'
import { getBlogPostsByCategory, type BlogPostMeta } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { LUCKNOW_CHAMBERS, LUCKNOW_SERVICE_LOCATION, whatsappUrl } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const searchContent = serviceSearchContent['company-corporate-lawyer-lucknow']
const corporateWhatsAppUrl = whatsappUrl('Hello, I would like to discuss a company or corporate law matter in Lucknow.')
const corporateLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const corporateTeam = ['aniket-bose', 'prerna-yaduvanshi', 'aditya-narayan-shukla', 'shishir-pandey']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

function ConsultationActions({ className }: { className: string }) {
  return (
    <div className={`flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      <a href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-900 sm:px-8 sm:text-sm sm:tracking-widest">
        Consult Now
      </a>
      <ServiceContactLinks whatsappHref={corporateWhatsAppUrl} />
    </div>
  )
}

export const metadata: Metadata = {
  title: { absolute: searchContent.title },
  description: searchContent.description,
  keywords: [
    searchContent.attorneyKeyword,
    'Corporate Lawyer Lucknow',
    'Company Law Advocate Lucknow',
    'NCLT Lawyer Lucknow',
    'NCLT Allahabad Bench Advocate',
    'Shareholder Dispute Lawyer Lucknow',
    'LLP Lawyer Lucknow',
    'Company Registration Lawyer Lucknow',
    'Corporate Litigation Lawyer Lucknow',
    'Commercial Court Lawyer Lucknow',
    'Oppression Mismanagement Lawyer Lucknow',
    'Partnership Dispute Lawyer Lucknow',
    'Commercial Contract Lawyer Lucknow',
    'Corporate Insolvency Legal Advice Uttar Pradesh',
  ],
  alternates: {
    canonical: '/services/company-corporate-lawyer-lucknow',
  },
  openGraph: {
    title: searchContent.title,
    description: searchContent.description,
    url: '/services/company-corporate-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: searchContent.title,
    description: searchContent.description,
  },
}

const companyMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/services/company-corporate-lawyer-lucknow#legalservice`,
  branchOf: { '@id': `${SITE_URL}/#organization` },
  ...LUCKNOW_SERVICE_LOCATION,
  name: 'Sumanjari & Co. Advocates — Company & Corporate Matters',
  url: `${SITE_URL}/services/company-corporate-lawyer-lucknow`,
  description: searchContent.description,
  hasMap: LUCKNOW_CHAMBERS.map(({ street, city }) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}, Uttar Pradesh, India`)}`),
  sameAs: ['https://www.linkedin.com/company/sumanjari-co-advocate/about/'],
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Company & Corporate Legal Services',
}

const companyBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Corporate Lawyers in Lucknow', item: `${SITE_URL}/services/company-corporate-lawyer-lucknow` },
  ],
}

const companyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: corporateLucknowFaqs.map(({ question, answer }) => ({
    '@type': 'Question',
    name: question,
    acceptedAnswer: { '@type': 'Answer', text: answer },
  })),
}

type ServiceBlock = { title: string; body: string; articleTerms: RegExp }

async function ContextualArticles({ posts, terms }: { posts: Promise<BlogPostMeta[]>; terms: RegExp }) {
  const related = (await posts).filter((post) => terms.test(`${post.title} ${post.excerpt}`)).slice(0, 2)
  return related.length > 0 ? (
    <p className="mt-4 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/70">
      Related reading:{' '}
      {related.map((post, index) => (
        <span key={post.slug}>
          {index > 0 && '; '}
          <Link href={`/blog/${post.slug}`} className="text-gold-700 underline underline-offset-4 dark:text-gold-400">{post.title}</Link>
        </span>
      ))}
    </p>
  ) : null
}

const matters = [
  {
    icon: Briefcase,
    title: 'Company Registration & Compliance Advisory',
    articleTerms: /incorporat|registration|compliance/i,
    points: [
      'Advisory on incorporation and registration through the Registrar of Companies, Kanpur',
      'Annual compliance and statutory filing advisory under the Companies Act, 2013',
    ],
  },
  {
    icon: Users,
    title: 'Shareholder & Partnership Disputes',
    articleTerms: /shareholder|oppression|mismanagement|partnership/i,
    points: [
      'Oppression and mismanagement petitions under Sections 241–242 of the Companies Act before the NCLT',
      'Disputes among partners under the Indian Partnership Act, 1932',
    ],
  },
  {
    icon: Gavel,
    title: 'Corporate Litigation',
    articleTerms: /commercial|litigation|contract/i,
    points: [
      'Commercial and contractual disputes involving companies and business entities',
      'Representation before the Commercial Courts and the Allahabad High Court, Lucknow Bench',
    ],
  },
  {
    icon: ScrollText,
    title: 'LLP-Related Matters',
    articleTerms: /\bLLP\b|partnership/i,
    points: [
      'LLP registration and compliance advisory under the Limited Liability Partnership Act, 2008',
      'Disputes among designated partners',
    ],
  },
  {
    icon: Scale,
    title: 'NCLT & Insolvency-Related Matters',
    articleTerms: /\bIBC\b|insolvency|NCLT/i,
    points: [
      'Representation before the NCLT, Allahabad Bench, in company law petitions',
      'Advisory in insolvency-related company matters under the Insolvency and Bankruptcy Code, 2016',
    ],
  },
  {
    icon: ShieldCheck,
    title: "Directors' & Company Secretarial Matters",
    articleTerms: /director|secretarial|compliance/i,
    points: [
      "Advisory on directors' duties and liabilities under the Companies Act",
      'Disputes over removal or resignation of directors',
    ],
  },
  {
    icon: Briefcase,
    title: 'M&A, Joint Ventures & Investment',
    articleTerms: /acquisition|merger|investment|venture|startup/i,
    points: ['Transaction structure, legal due diligence and investment documentation', 'Shareholder rights, approvals and closing conditions for acquisitions and joint ventures'],
  },
  {
    icon: ShieldCheck,
    title: 'Corporate IP, Employment & POSH',
    articleTerms: /intellectual|trademark|employment|POSH/i,
    points: ['IP ownership, licensing and confidentiality in business contracts', 'Employment documentation and workplace policy review, including POSH obligations where applicable'],
  },
]

const corporateAdvisoryBlocks: ServiceBlock[] = [
  {
    title: 'Company Incorporation & Structuring',
    articleTerms: /incorporat|registration|structur/i,
    body: 'End-to-end incorporation and structuring for Private Limited Companies, LLPs under the LLP Act, 2008, One Person Companies, Section 8 Non-Profit Companies and Partnership Firm registration — with advice on the entity form that best fits the ownership, funding and compliance profile of the venture.',
  },
  {
    title: 'ROC / Secretarial & Director Compliance',
    articleTerms: /ROC|director|compliance|strike.off/i,
    body: 'Review annual and event-based filings, statutory registers, board approvals and director duties for Uttar Pradesh entities under ROC Kanpur. Filing defaults, Section 164(2) disqualification and Section 252 restoration require different remedies. Secretarial certification and regulated filings are coordinated with a practising company secretary or other authorised professional where required.',
  },
  {
    title: 'Commercial Contract Drafting & Vetting',
    articleTerms: /contract|agreement|arbitrat/i,
    body: 'Drafting, vetting and negotiation of shareholder and subscription agreements, master service agreements, NDAs, vendor, distribution and franchise contracts. Review scope, payment triggers, liability caps, indemnities, termination, data handling and dispute-resolution clauses. Restrictive covenants require particular scrutiny under Section 27 of the Indian Contract Act; a non-compete label does not make a clause enforceable.',
  },
  {
    title: 'MSME Samadhaan Delayed Payment Recovery',
    articleTerms: /MSME|Samadhaan|delayed.payment/i,
    body: 'Recovery of delayed payments owed to MSME suppliers through the Micro and Small Enterprises Facilitation Council under Section 18 of the MSMED Act, 2006, including MSME Samadhaan portal references, conciliation and the arbitration that follows failed conciliation.',
  },
  {
    title: 'M&A, Joint Ventures & Restructuring',
    articleTerms: /merger|acquisition|joint.venture|restructur/i,
    body: 'Assess share or asset acquisitions, joint-venture structures and corporate reorganisations through legal due diligence, title and authority checks, material-contract review and identification of litigation or regulatory exposure. Transaction documents address conditions precedent, warranties, disclosures, indemnities and closing steps. Companies Act approvals, NCLT schemes, competition review and lender or sector permissions depend on the structure; tax and valuation advice needs the appropriate professionals.',
  },
  {
    title: 'Startup, Seed/PE/VC & India Entry Advisory',
    articleTerms: /startup|seed|private.equity|venture|foreign.invest/i,
    body: 'Review founder agreements, cap tables, term sheets, share subscription and shareholder agreements, investor consent rights, vesting and exit mechanisms. Seed, private equity and venture capital rounds require approval and filing checks rather than a standard document alone. India entry and foreign investment also require assessment of sector restrictions, FEMA, beneficial ownership and reporting, coordinated with authorised financial and compliance professionals.',
  },
  {
    title: 'Corporate IP & Employment/POSH',
    articleTerms: /intellectual|trademark|employment|POSH/i,
    body: 'Review ownership and assignment of founder, employee and contractor-created IP, trademarks, licensing, confidentiality and technology contracts. Employment and consultancy terms need checks on classification, applicable workplace laws and separation obligations. POSH compliance includes an Internal Committee where the statutory ten-employee threshold applies, policies, training and complaint procedures; advice must distinguish employer compliance from an individual complaint.',
  },
]

const ncltInsolvencyBlocks: ServiceBlock[] = [
  {
    title: 'NCLT Allahabad Bench — The Forum for Lucknow Enterprises',
    articleTerms: /NCLT|company.law/i,
    body: 'Companies registered in Lucknow and elsewhere in Uttar Pradesh fall within the jurisdiction of the NCLT, Allahabad Bench (which also covers Uttarakhand), with eligible appeals lying to the NCLAT, New Delhi. Bench allocation and the registered office are verified before any filing.',
  },
  {
    title: 'Section 8 Statutory Demand Notice & Section 9 Operational Creditor Petitions',
    articleTerms: /operational|demand.notice|Mobilox/i,
    body: 'For operational creditors — suppliers, service providers and workmen — we issue the Section 8 statutory demand notice and prosecute or defend Section 9 petitions, including the decisive pre-existing dispute defence settled by the Supreme Court in Mobilox Innovations v. Kirusa Software.',
  },
  {
    title: 'Section 7 Financial Creditor Petitions & Section 10A / Threshold Defenses',
    articleTerms: /IBC|insolvency|financial.creditor/i,
    body: 'Representation of banks, NBFCs and lenders in Section 7 petitions, and defence of corporate debtors on eligibility grounds — the ₹1 Crore minimum default threshold under Section 4 and the Section 10A bar on petitions for defaults arising during the notified pandemic period.',
  },
  {
    title: 'Sections 241–244: Oppression & Mismanagement and Director Removal Disputes',
    articleTerms: /oppression|mismanagement|director|shareholder/i,
    body: 'Member petitions alleging oppression and mismanagement under Sections 241–242 of the Companies Act, 2013 — with Section 244 eligibility or waiver analysis — and disputes over the removal or resignation of directors, deadlocked boards and prejudicial corporate actions.',
  },
]

const commercialArbitrationBlocks: ServiceBlock[] = [
  {
    title: 'Commercial Courts Act, 2015 — Practice before the Commercial Court, Lucknow',
    articleTerms: /commercial|mediation/i,
    body: 'Commercial suits proceed on an accelerated, rule-bound track: mandatory Section 12A Pre-Institution Mediation except where urgent interim relief is sought, the strict 120-day written statement forfeiture under amended Order 8 Rule 1 CPC, and Case Management Hearings that lock in the trial schedule.',
  },
  {
    title: 'Section 9 Interim Measures — Bank Guarantee Stays & Asset Attachment',
    articleTerms: /interim|guarantee|arbitration/i,
    body: 'Urgent pre-arbitration and pending-arbitration protection under Section 9 of the Arbitration and Conciliation Act, 1996 — stays on invocation of bank guarantees, attachment and preservation of assets, and interim custody of goods or funds in dispute.',
  },
  {
    title: 'Section 11 Appointment of Arbitrator',
    articleTerms: /arbitrator|arbitration/i,
    body: 'Applications before the Allahabad High Court, Lucknow Bench for appointment of an arbitrator under Section 11 where the agreed mechanism fails — including disputes over the existence and scope of the arbitration clause.',
  },
  {
    title: 'Section 34 Challenges & Section 36/37 Enforcement and Appeals',
    articleTerms: /award|enforce|arbitration/i,
    body: 'Setting aside arbitral awards under Section 34 on the limited statutory grounds, enforcement of awards under Section 36 as decrees of the court, and appeals under Section 37 — with interim strategy to protect or challenge the award debtor’s position.',
  },
]

const whyIssues = [
  'Company registration and statutory compliance',
  'Shareholder disputes and allegations of oppression or mismanagement',
  'Partnership and LLP disputes among partners',
  'Breach of commercial contracts involving companies',
  "Removal, resignation, and liability of directors",
  'Company law petitions before the NCLT',
]

const jurisdiction = [
  {
    title: 'Registrar of Companies (RoC), Kanpur',
    address: '37/17, Westcott Building, The Mall, Kanpur, Uttar Pradesh - 208001.',
    source: 'https://www.mca.gov.in/content/mca/global/en/contact-us/roc.html',
    blurb:
      'Registration and statutory compliance filings for companies and LLPs across Uttar Pradesh.',
  },
  {
    title: 'NCLT, Allahabad Bench',
    address: '6/7-B, Panna Lal Road, Prayagraj, Uttar Pradesh - 211002.',
    source: 'https://nclt.gov.in/allahabad-bench/contact-us',
    blurb:
      'Company law petitions and eligible corporate insolvency proceedings, subject to the registered office and current territorial allocation.',
  },
  {
    title: 'National Company Law Appellate Tribunal (NCLAT)',
    address: 'Confirm the currently assigned appellate bench and hearing venue from the registry and cause list.',
    source: 'https://nclat.nic.in/',
    blurb:
      'Eligible appeals from NCLT orders under the Companies Act or Insolvency and Bankruptcy Code, each subject to its own statutory conditions.',
  },
  {
    title: 'Commercial Courts, Lucknow',
    address: 'District court registry contact: Kaisarbagh, P.S. Wazeerganj, Lucknow - 226001. This is not a confirmed Commercial Court hearing address; check the assigned court and venue on the cause list.',
    source: 'https://lucknow.dcourts.gov.in/contact-us/',
    blurb:
      'Qualifying commercial disputes, subject to specified value, current local allocation, territorial jurisdiction and any applicable arbitration agreement.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    address: 'Vibhuti Khand, Gomti Nagar, Faizabad Road, Lucknow - 226010.',
    source: 'https://www.allahabadhighcourt.in/',
    blurb:
      'Maintainable court and arbitration remedies subject to statutory and territorial jurisdiction; not the ordinary appellate forum for NCLT orders.',
  },
  {
    title: 'Debts Recovery Tribunal, Lucknow',
    address: '600/1, University Road, near Hanuman Setu Mandir, Lucknow - 226001. Confirm the assigned tribunal and current venue.',
    source: 'https://drt.gov.in/',
    blurb: 'Bank recovery and eligible SARFAESI challenges use a separate statutory route; DRT is not the forum for every corporate debt.',
  },
  {
    title: 'UP-RERA, Lucknow Headquarters',
    address: 'Naveen Bhavan, Rajya Niyojan Sansthan, Kala Kankar House, Old Hyderabad, Lucknow - 226007.',
    source: 'https://up-rera.in/ContactUs',
    blurb: 'Project-related regulatory proceedings where RERA applies, not ordinary company governance or general contractual claims.',
  },
]

export default async function CompanyCorporateMattersPage() {
  const companyBlogPosts = getBlogPostsByCategory('Company & Corporate Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withServiceSelectionFaq(companyFaqJsonLd, searchContent)) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyBreadcrumbJsonLd) }}
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
                Corporate Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Corporate &amp; Company Lawyers in Lucknow:{' '}
              <em className="text-gold-gradient">NCLT, Advisory &amp; Commercial Disputes</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our corporate lawyers and company law advocates in Lucknow advise on
              M&amp;A, commercial contracts, startup investment, compliance, shareholder and partnership disputes, and litigation before the NCLT, the
              Commercial Courts, and the Allahabad High Court, Lucknow Bench.
            </p>
            <ServiceStats service="corporate" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {corporateLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {corporateLead.img && (
                  <Image src={corporateLead.img} alt={corporateLead.name} width={252} height={288} loading="lazy" sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: corporateLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Corporate Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{corporateLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{corporateLead.role}</p>
                <Link href={`/team/${corporateLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={corporateLucknowToc} />

          <section className="mb-16" aria-labelledby="corporate-team">
            <h2 id="corporate-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Company &amp; Commercial Matters Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads the initial litigation assessment,
              supported by associates whose recorded practice includes
              commercial disputes, contract review and arbitration. The team
              is selected for the issues and forum involved.
            </p>
            <TeamCarousel members={corporateTeam} label="Company and commercial team members" />
          </section>

          <LucknowChambers />
          <ServiceSelection content={searchContent} />

          <div id="corporate-overview" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Companies, LLPs, and partnership firms each carry their own
              compliance obligations and their own forum for disputes — a
              shareholder disagreement is not resolved the same way as a
              commercial contract dispute or an LLP disagreement between
              designated partners. Sumanjari &amp; Co. Advocates advises
              businesses and individuals on registration, compliance, and
              represents them in corporate disputes.
            </p>
            <p>
              We advise businesses in Gomti Nagar, Hazratganj, Vibhuti Khand,
              Sushant Golf City and the Amausi and Chinhat industrial areas.
              These are service localities, not additional offices; the registered
              office, contract and statute determine the competent forum.
            </p>
            <p>
              We handle company law petitions before the NCLT, Allahabad
              Bench, commercial disputes before the Commercial Courts,
              Lucknow, and maintainable corporate and arbitration matters
              before the competent courts. Eligible NCLT appeals follow the
              NCLAT route under the governing statute; court appeals and
              arbitral challenges have separate routes and conditions.
            </p>
          </div>

          <StatuteTable
            id="corporate-statutes"
            heading="Company, Contract and Insolvency Framework"
            intro="Entity type and the relief sought determine the governing statute. Current amendments, thresholds, territorial allocation and procedural rules must be checked for the particular filing; these are distinct remedies, not interchangeable forums."
            rows={corporateLucknowStatutes}
          />

          <div id="corporate-forums" className="mb-16 scroll-mt-28">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Lucknow &amp; UP Corporate Forums and Jurisdiction
              </h2>
            </div>
            <p className="mb-5 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
              Verify current registry notices, territorial allocation and hearing venues before filing or visiting. NCLT Allahabad is in Prayagraj, not Lucknow. A company being a party does not confer jurisdiction on every forum listed.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              {jurisdiction.map(({ title, blurb, address, source }) => (
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
                  <p className="mt-3 font-body text-sm leading-relaxed text-navy-800 dark:text-cream/80">{address}</p>
                  <a href={source} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex font-body text-sm text-gold-700 underline underline-offset-4 dark:text-gold-400">Official registry information</a>
                </div>
              ))}
            </div>
          </div>

          <div id="corporate-matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Company &amp; Corporate Matters We Handle
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {matters.map(({ icon: Icon, title, points, articleTerms }) => (
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
                  <Suspense fallback={null}><ContextualArticles posts={companyBlogPosts} terms={articleTerms} /></Suspense>
                </div>
              ))}
            </div>
          </div>

          <div id="corporate-advisory" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Corporate Advisory, Company Registration &amp; Startup Legal Services in Lucknow
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {corporateAdvisoryBlocks.map(({ title, body, articleTerms }) => (
                <div
                  key={title}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {body}
                  </p>
                  <Suspense fallback={null}><ContextualArticles posts={companyBlogPosts} terms={articleTerms} /></Suspense>
                </div>
              ))}
            </div>
          </div>

          <div id="nclt-insolvency" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              NCLT Allahabad Bench &amp; Insolvency (IBC, 2016) Representation for Lucknow Enterprises
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {ncltInsolvencyBlocks.map(({ title, body, articleTerms }) => (
                <div
                  key={title}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {body}
                  </p>
                  <Suspense fallback={null}><ContextualArticles posts={companyBlogPosts} terms={articleTerms} /></Suspense>
                </div>
              ))}
            </div>
          </div>

          <div id="commercial-arbitration" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Commercial Court Litigation &amp; Arbitration in Lucknow
            </h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {commercialArbitrationBlocks.map(({ title, body, articleTerms }) => (
                <div
                  key={title}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {body}
                  </p>
                  <Suspense fallback={null}><ContextualArticles posts={companyBlogPosts} terms={articleTerms} /></Suspense>
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
                We begin with a confidential review of your incorporation
                documents, partnership or LLP agreement, or the dispute at
                hand, and advise clearly on the appropriate forum and relief
                available. We represent you before the NCLT, Allahabad Bench,
                the Commercial Courts, and competent arbitration courts.
                Eligible NCLT appeals lie to NCLAT under the governing
                statute; High Court remedies have separate jurisdictional requirements.
              </p>
            </div>
          </div>

          <GuideStages
            id="corporate-procedure"
            heading="Corporate Dispute Procedure and Practical Decisions"
            intro="The stages below describe alternative routes as well as common preparation. Company governance, contractual recovery, arbitration and insolvency have different standing, evidence and appeal requirements; not every matter passes through every stage."
            stages={corporateLucknowStages}
          />

          <div id="corporate-faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Corporate Law <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our
                corporate law practice in Lucknow.
              </p>
            </div>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">
              {corporateLucknowFaqs.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer font-display text-lg font-bold leading-relaxed text-navy-900 transition-colors hover:text-gold-700 focus-visible:outline-gold-500 dark:text-cream dark:hover:text-gold-400">
                    {question}
                  </summary>
                  <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/65">
                    {answer}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <section id="corporate-examples" aria-labelledby="corporate-examples-heading" className="mb-16 scroll-mt-28">
            <h2 id="corporate-examples-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream">Illustrative Corporate Law Scenarios</h2>
            <p className="mb-6 font-body text-navy-700 dark:text-cream/70">These hypothetical examples explain statutory choices. They are not client case histories, reported outcomes or claims of success.</p>
            <div className="grid gap-5 md:grid-cols-3">
              {corporateLucknowExamples.map(({ title, facts, forum, statute, assessment }) => (
                <article key={title} className="glass-card rounded-sm border border-gold-500/20 p-6">
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{title}</h3>
                  <dl className="space-y-3 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/70">
                    <div><dt className="font-semibold">Facts</dt><dd>{facts}</dd></div>
                    <div><dt className="font-semibold">Possible forum</dt><dd>{forum}</dd></div>
                    <div><dt className="font-semibold">Statutory framework</dt><dd>{statute}</dd></div>
                    <div><dt className="font-semibold">Assessment</dt><dd>{assessment}</dd></div>
                  </dl>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="corporate-case-preparation" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="corporate-case-preparation" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Company Dispute, Unpaid Invoice or Insolvency Notice?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">The remedy depends on the dispute, not just the fact that a company is involved. Shareholder oppression and mismanagement may engage the Companies Act and NCLT jurisdiction; contractual recovery may belong before a commercial court or arbitrator. Insolvency proceedings have separate eligibility, default and procedural requirements and are not a substitute for ordinary debt recovery. We review the registered office, contractual forum and current tribunal allocation before advising on filing.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Corporate documents to share for review</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring incorporation and LLP records, constitutional documents, shareholder or partnership agreements, board resolutions, statutory notices, contracts, invoices, payment evidence and relevant ROC filings. Include any demand notice and its delivery date, pending orders and a chronology of the dispute. The consultation can then address authority to act, available remedies, interim protection, professional fees and coordination with company secretaries or other professionals where needed.</p>
          </section>

          <ServiceBlogs
            posts={companyBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Company & Corporate Blogs"
            description="Short reads on company law, corporate compliance, and governance matters."
            viewAllHref={`/blog?category=${encodeURIComponent('Company & Corporate Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Corporate or Company Law Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your company registration,
              shareholder dispute, LLP matter, or corporate litigation —
              practising before the NCLT, Allahabad Bench, and the Allahabad
              High Court, Lucknow Bench.
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
