import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
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
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Corporate Lawyer in Lucknow | Company, LLP & NCLT Matters',
  description:
    'Sumanjari & Co. Advocates advises on company registration and compliance, shareholder and partnership disputes, LLP matters, and corporate litigation before the NCLT, Allahabad Bench, the Commercial Courts, and the Allahabad High Court, Lucknow Bench.',
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
  ],
  alternates: {
    canonical: '/services/company-corporate-matters',
  },
  openGraph: {
    title: 'Company & Corporate Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Advisory and litigation in company registration and compliance, shareholder and partnership disputes, LLP matters, and corporate disputes before the NCLT, Commercial Courts, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/company-corporate-matters',
  },
}

const companyMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Company & Corporate Matters',
  url: `${SITE_URL}/services/company-corporate-matters`,
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
      'Company law petitions, oppression and mismanagement matters, and insolvency-related proceedings for Uttar Pradesh and Uttarakhand.',
  },
  {
    title: 'Commercial Courts, Lucknow',
    blurb:
      'Commercial disputes meeting the specified value of ₹3 lakh under the Commercial Courts Act, 2015.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Appeals and writ matters arising from corporate disputes, argued from our chambers at Block D-311.',
  },
]

const workSteps = [
  {
    icon: Landmark,
    title: 'Private Consultation',
    description:
      'We begin with a confidential discussion of your matter, understanding the facts and your expectations while safeguarding your privacy.',
  },
  {
    icon: ScrollText,
    title: 'In-Depth Case Review',
    description:
      'Every document and detail is carefully examined so we can assess the strengths, risks, and best possible legal routes for you.',
  },
  {
    icon: Scale,
    title: 'Strategy & Drafting',
    description:
      'A clear, customised strategy is prepared and precise pleadings are drafted to present your case strongly before the court or authority.',
  },
  {
    icon: ShieldCheck,
    title: 'Focused Representation',
    description:
      'We represent you with preparation and clarity, ensuring timely filings, effective arguments, and regular updates on each hearing.',
  },
  {
    icon: Gavel,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
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
  const companyBlogPosts = await getBlogPostsByCategory('Company & Corporate Matters')

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

          <div className="mb-16 text-center">
            <div className="mb-4 flex items-center justify-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                Corporate Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Company &amp; <em className="text-gold-gradient">Corporate Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Corporate advisory, compliance, shareholder and partnership
              disputes, and commercial litigation before the NCLT, the
              Commercial Courts, and the Allahabad High Court, Lucknow Bench.
            </p>
            <a
              href="/#contact"
              className="btn-gold mt-8 inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900"
            >
              Consult Now
            </a>
          </div>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
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
              Lucknow, and corporate litigation and appeals before the
              Allahabad High Court, Lucknow Bench.
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

          <div className="mb-16">
            <div className="mb-10 text-center">
              <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                The Way <em className="text-gold-gradient">We Work</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                A clear, structured process from first consultation to resolution.
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-[10%] right-[10%] top-[22px] hidden h-px bg-gold-500/25 lg:block" aria-hidden />
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
                {workSteps.map(({ icon: Icon, title, description }, index) => (
                  <div key={title} className="relative flex flex-col items-center gap-4 text-center">
                    <div className="glass-card z-10 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-gold-500/40">
                      <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                    </div>
                    <div className="glass-card w-full flex-1 rounded-sm border border-gold-500/20 p-5 dark:border-gold-500/15">
                      <span className="mb-1 block font-caps text-xs uppercase tracking-widest text-gold-600 dark:text-gold-400">
                        Step {index + 1}
                      </span>
                      <h3 className="mb-1.5 font-display text-lg font-bold text-navy-900 dark:text-cream">
                        {title}
                      </h3>
                      <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-16">
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

      <Footer />
    </main>
  )
}
