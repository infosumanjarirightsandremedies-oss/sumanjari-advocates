import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
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
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { corporateLucknowStages, corporateLucknowStatutes, corporateLucknowToc } from '@/lib/guides/corporateLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const corporateLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const corporateTeam = ['aniket-bose', 'prerna-yaduvanshi', 'aditya-narayan-shukla', 'shishir-pandey']
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
  title: { absolute: 'Corporate Lawyer in Lucknow | Company & NCLT | Sumanjari' },
  description:
    'Corporate lawyer and company law advocate in Lucknow for shareholder disputes, LLP advice, contracts, NCLT matters and commercial litigation. Arrange a review.',
  keywords: [
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
    title: 'Company & Corporate Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Advisory and litigation in company registration and compliance, shareholder and partnership disputes, LLP matters, and corporate disputes before the NCLT, Commercial Courts, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/company-corporate-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Lawyer in Lucknow | Company & NCLT Matters',
    description: 'Company and LLP advice, shareholder disputes, commercial contracts and forum-specific corporate litigation.',
  },
}

const companyMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Company & Corporate Matters',
  url: `${SITE_URL}/services/company-corporate-lawyer-lucknow`,
  description:
    'Advisory and representation in company registration and compliance, shareholder and partnership disputes, LLP matters, and corporate litigation, before the National Company Law Tribunal (Allahabad Bench), the Commercial Courts, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Company & Corporate Legal Services',
}

const companyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is oppression and mismanagement under company law?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Sections 241 and 242 of the Companies Act, 2013, a member can apply to the NCLT for relief where the company’s affairs are conducted in a manner that is oppressive to a member or prejudicial to the company or public interest — the NCLT has wide powers to regulate the company’s affairs in response.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which NCLT bench covers Uttar Pradesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Company law and insolvency matters for Uttar Pradesh are heard by the NCLT, Allahabad Bench, which also covers the State of Uttarakhand.',
      },
    },
    {
      '@type': 'Question',
      name: 'What qualifies as a "commercial dispute" under the Commercial Courts Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A commercial dispute must meet the "specified value" under the Commercial Courts Act, 2015 — currently ₹3 lakh, reduced from ₹1 crore by the 2018 amendment — in addition to being commercial in nature as defined under the Act.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do I register a company or LLP in Uttar Pradesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Company and LLP registrations for Uttar Pradesh are filed with the Registrar of Companies (RoC), Kanpur, which also has jurisdiction over Uttarakhand.',
      },
    },
  ],
}

const matters = [
  {
    icon: Briefcase,
    title: 'Company Registration & Compliance Advisory',
    points: [
      'Advisory on incorporation and registration through the Registrar of Companies, Kanpur',
      'Annual compliance and statutory filing advisory under the Companies Act, 2013',
    ],
  },
  {
    icon: Users,
    title: 'Shareholder & Partnership Disputes',
    points: [
      'Oppression and mismanagement petitions under Sections 241–242 of the Companies Act before the NCLT',
      'Disputes among partners under the Indian Partnership Act, 1932',
    ],
  },
  {
    icon: Gavel,
    title: 'Corporate Litigation',
    points: [
      'Commercial and contractual disputes involving companies and business entities',
      'Representation before the Commercial Courts and the Allahabad High Court, Lucknow Bench',
    ],
  },
  {
    icon: ScrollText,
    title: 'LLP-Related Matters',
    points: [
      'LLP registration and compliance advisory under the Limited Liability Partnership Act, 2008',
      'Disputes among designated partners',
    ],
  },
  {
    icon: Scale,
    title: 'NCLT & Insolvency-Related Matters',
    points: [
      'Representation before the NCLT, Allahabad Bench, in company law petitions',
      'Advisory in insolvency-related company matters under the Insolvency and Bankruptcy Code, 2016',
    ],
  },
  {
    icon: ShieldCheck,
    title: "Directors' & Company Secretarial Matters",
    points: [
      "Advisory on directors' duties and liabilities under the Companies Act",
      'Disputes over removal or resignation of directors',
    ],
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
    blurb:
      'Registration and statutory compliance filings for companies and LLPs across Uttar Pradesh.',
  },
  {
    title: 'NCLT, Allahabad Bench',
    blurb:
      'Company law petitions and eligible corporate insolvency proceedings, subject to the registered office and current territorial allocation.',
  },
  {
    title: 'National Company Law Appellate Tribunal (NCLAT)',
    blurb:
      'Eligible appeals from NCLT orders under the Companies Act or Insolvency and Bankruptcy Code, each subject to its own statutory conditions.',
  },
  {
    title: 'Commercial Courts, Lucknow',
    blurb:
      'Qualifying commercial disputes, subject to specified value, current local allocation, territorial jurisdiction and any applicable arbitration agreement.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Maintainable court and arbitration remedies subject to statutory and territorial jurisdiction; not the ordinary appellate forum for NCLT orders.',
  },
]

const companyInsights = [
  {
    icon: Users,
    title: 'What Is Oppression and Mismanagement Under Company Law?',
    excerpt:
      'Under Sections 241–242 of the Companies Act, 2013, a member can apply to the NCLT for relief where the company’s affairs are conducted in a manner oppressive to a member or prejudicial to the company or public interest.',
  },
  {
    icon: Landmark,
    title: 'Which NCLT Bench Covers Uttar Pradesh?',
    excerpt:
      'Company law and insolvency matters for Uttar Pradesh are heard by the NCLT, Allahabad Bench, which also covers Uttarakhand.',
  },
  {
    icon: Scale,
    title: 'What Qualifies as a "Commercial Dispute"?',
    excerpt:
      'A commercial dispute must meet the "specified value" under the Commercial Courts Act, 2015 — currently ₹3 lakh, reduced from ₹1 crore by the 2018 amendment.',
  },
  {
    icon: Briefcase,
    title: 'Where Do I Register a Company or LLP in Uttar Pradesh?',
    excerpt:
      'Company and LLP registrations for Uttar Pradesh are filed with the Registrar of Companies (RoC), Kanpur, which also covers Uttarakhand.',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(companyFaqJsonLd) }}
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
              Company &amp; <em className="text-gold-gradient">Corporate Matters</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our corporate lawyers and company law advocates in Lucknow advise on
              compliance, shareholder and partnership disputes, and commercial litigation before the NCLT, the
              Commercial Courts, and the Allahabad High Court, Lucknow Bench.
            </p>
            <ServiceStats service="corporate" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {corporateLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {corporateLead.img && (
                  <Image src={corporateLead.img} alt={corporateLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: corporateLead.focus }} />
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

          <div id="corporate-matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Company &amp; Corporate Matters We Handle
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
                We begin with a confidential review of your incorporation
                documents, partnership or LLP agreement, or the dispute at
                hand, and advise clearly on the appropriate forum and relief
                available. We represent you before the NCLT, Allahabad Bench,
                the Commercial Courts, and, where necessary, in appeal before
                the Allahabad High Court, Lucknow Bench.
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
            <div className="grid gap-5 sm:grid-cols-2">
              {companyInsights.map(({ icon: Icon, title, excerpt }) => (
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
