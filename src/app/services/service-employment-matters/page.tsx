import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  UserSearch,
  TrendingUp,
  Gavel,
  UserX,
  HandCoins,
  Repeat2,
  ShieldAlert,
  Landmark,
  ShieldCheck,
  MessageSquareWarning,
  BookOpen,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Service & Employment Lawyer in Lucknow | CAT Lucknow Bench & Service Tribunal',
  description:
    'Sumanjari & Co. Advocates represents government, public sector, and private sector employees in departmental inquiries, wrongful termination, promotion & seniority disputes, pension matters, and POSH Act proceedings before the CAT Lucknow Bench, U.P. Public Services Tribunal, CGIT, and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Service Lawyer Lucknow',
    'Service Matter Advocate Lucknow',
    'Service Tribunal Lawyer Lucknow',
    'Departmental Inquiry Lawyer Lucknow',
    'Wrongful Termination Lawyer Lucknow',
    'Pension Dispute Lawyer Lucknow',
    'Promotion Dispute Lawyer Lucknow',
    'Seniority Dispute Lawyer Lucknow',
    'POSH Act Lawyer Lucknow',
    'Government Employee Lawyer Lucknow',
    'Service Writ Lawyer Allahabad High Court',
    'U.P. Public Services Tribunal Advocate',
    'CAT Lucknow Bench Advocate',
    'Central Administrative Tribunal Lawyer Lucknow',
    'CAT Advocate Lucknow',
    'CGIT Lawyer Lucknow',
    'Industrial Dispute Advocate Lucknow',
    'Central Government Industrial Tribunal Lawyer',
    'CGIT Advocate Lucknow',
  ],
  alternates: {
    canonical: '/services/service-employment-matters',
  },
  openGraph: {
    title: 'Service & Employment Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation for government, public sector, and private sector employees in service disputes, departmental inquiries, and employment litigation before CAT, the Service Tribunal, CGIT, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/service-employment-matters',
  },
}

const serviceMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Service & Employment Matters',
  url: `${SITE_URL}/services/service-employment-matters`,
  description:
    'Representation for government, public sector, and private sector employees in recruitment disputes, promotion and seniority matters, departmental and disciplinary proceedings, wrongful termination, pension and retirement benefits, and POSH Act compliance and inquiry matters before the Central Administrative Tribunal, U.P. Public Services Tribunal, CGIT, and the Allahabad High Court.',
  telephone: '+91-82990-86204',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Service & Employment Legal Services',
}

const matters = [
  {
    icon: UserSearch,
    title: 'Recruitment & Selection Disputes',
    points: [
      'Challenging selection irregularities, eligibility disputes, and appointment orders',
      'Representation before the Service Tribunal and High Court in recruitment matters',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Promotion & Seniority Matters',
    points: [
      'Disputes over denial or delay of promotion',
      'Seniority list challenges and departmental promotion committee decisions',
    ],
  },
  {
    icon: Gavel,
    title: 'Departmental & Disciplinary Proceedings',
    points: [
      'Representation on show cause notices and charge sheets',
      'Departmental inquiry proceedings and response to findings',
      'Challenging punishment orders in appeal or revision',
    ],
  },
  {
    icon: UserX,
    title: 'Wrongful Termination & Reinstatement',
    points: [
      'Challenging dismissal, removal, and compulsory retirement orders',
      'Reinstatement claims with back wages and consequential benefits',
      'Suspension-related disputes and subsistence allowance claims',
      'Retrenchment, wrongful dismissal, and wage disputes before CGIT (Central Government Industrial Tribunal-cum-Labour Court)',
    ],
  },
  {
    icon: HandCoins,
    title: 'Pension & Retirement Benefits',
    points: [
      'Pension calculation and delayed disbursal disputes',
      'Family pension, gratuity, and other retiral dues',
    ],
  },
  {
    icon: Repeat2,
    title: 'Transfer, Posting & Service Conditions',
    points: [
      'Transfer and posting grievances',
      'Disputes concerning pay, allowances, and leave rules',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'POSH Act Compliance & Inquiry Matters',
    points: [
      'Representation in Internal Committee inquiries under the POSH Act, 2013',
      'Compliance advisory for employers on POSH policy and committee constitution',
    ],
  },
]

const whyIssues = [
  'Denial or delay in promotion and seniority disputes',
  'Suspension, show cause notices, and departmental inquiry proceedings',
  'Wrongful termination, removal, or compulsory retirement',
  'Pension, gratuity, and retirement benefit disputes',
  'Transfer and posting grievances',
  'POSH Act complaints and Internal Committee proceedings',
]

const jurisdiction = [
  {
    title: 'Departmental Authorities',
    blurb:
      'Representation at the inquiry and show-cause stage before disciplinary and appellate authorities within the department.',
  },
  {
    title: 'U.P. Public Services Tribunal',
    blurb:
      'Service matters concerning State Government and public sector employees before the Tribunal.',
  },
  {
    title: 'Central Administrative Tribunal (CAT), Lucknow Bench',
    blurb:
      'Service disputes concerning Central Government employees and Central public sector personnel before the CAT Lucknow Bench, which sits locally rather than requiring travel to Allahabad.',
  },
  {
    title: 'Central Government Industrial Tribunal-cum-Labour Court',
    blurb:
      'Industrial and workmen disputes, including retrenchment, wrongful dismissal, and wage claims, before CGIT.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Writ petitions under Article 226 challenging service orders, arguing from our chambers at Block D-311.',
  },
  {
    title: 'Internal Complaints Committee',
    blurb:
      'Representation and advisory in proceedings before the Internal Committee constituted under the POSH Act.',
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
    icon: BookOpen,
    title: 'In-Depth Case Review',
    description:
      'Every document and detail is carefully examined so we can assess the strengths, risks, and best possible legal routes for you.',
  },
  {
    icon: Gavel,
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
    icon: HandCoins,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
  },
]

const serviceInsights = [
  {
    icon: BookOpen,
    title: 'What Is Service Law?',
    excerpt:
      'Service law governs employment relationships arising under statutory rules, service regulations, and administrative instructions applicable to government and public sector employees.',
  },
  {
    icon: Gavel,
    title: 'Responding to a Departmental Charge Sheet',
    excerpt:
      'A charge sheet should be answered within the prescribed time with a clear, well-reasoned written response — the approach taken at this stage often shapes the outcome of the inquiry.',
  },
  {
    icon: TrendingUp,
    title: 'Challenging Denial of Promotion or Seniority',
    excerpt:
      'Promotion and seniority disputes are typically pursued before the Service Tribunal or in writ jurisdiction, based on applicable service rules and the employer’s own promotion policy.',
  },
  {
    icon: HandCoins,
    title: 'Pension & Retiral Dues After Superannuation',
    excerpt:
      'Delayed or reduced pension, gratuity, and family pension can be pursued through representation to the department and, where unresolved, before the Tribunal or High Court.',
  },
  {
    icon: Landmark,
    title: 'CAT Matters for Lucknow-Based Central Government Employees',
    excerpt:
      'The Central Administrative Tribunal has a Lucknow Bench, so Central Government employees in and around Lucknow can pursue service matters locally rather than travelling to the Allahabad Bench.',
  },
]

const serviceFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is service law?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Service law governs employment relationships arising under statutory rules, service regulations, and administrative instructions applicable to government and public sector employees.',
      },
    },
    {
      '@type': 'Question',
      name: 'How should I respond to a departmental charge sheet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A charge sheet should be answered within the prescribed time with a clear, well-reasoned written response — the approach taken at this stage often shapes the outcome of the inquiry.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I challenge denial of promotion or seniority?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Promotion and seniority disputes are typically pursued before the Service Tribunal or in writ jurisdiction, based on applicable service rules and the employer’s own promotion policy.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I claim pension and retiral dues after superannuation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Delayed or reduced pension, gratuity, and family pension can be pursued through representation to the department and, where unresolved, before the Tribunal or High Court.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where do CAT matters get heard for Lucknow-based Central Government employees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Central Administrative Tribunal has a Lucknow Bench, so Central Government employees in and around Lucknow can pursue service matters locally rather than travelling to the Allahabad Bench.',
      },
    },
  ],
}

export default async function ServiceEmploymentMattersPage() {
  const employmentBlogPosts = await getBlogPostsByCategory('Service & Employment Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqJsonLd) }}
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
                Service Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Service &amp; <em className="text-gold-gradient">Employment Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Representation for government, public sector, and private
              sector employees in recruitment, promotion, disciplinary,
              pension, and industrial disputes — before the Central
              Administrative Tribunal (CAT), the U.P. Public Services
              Tribunal, CGIT, and the Allahabad High Court, Lucknow Bench.
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
              Service law governs employment relationships arising under
              statutory rules, service regulations, and administrative
              instructions. For government employees, public sector staff,
              teachers, personnel of statutory bodies, and workmen in private
              employment, disputes over recruitment, promotion, disciplinary
              action, retrenchment, or retirement benefits can directly affect
              a career and livelihood.
            </p>
            <p>
              Sumanjari &amp; Co. Advocates advises and represents employees
              and, where instructed, departments — from the departmental
              inquiry stage through to the CAT Lucknow Bench (for Central
              Government employees, without the need to travel to Allahabad),
              the U.P. Public Services Tribunal (for State Government
              employees), CGIT (for workmen and private sector employees),
              and writ proceedings before the Allahabad High Court, Lucknow
              Bench.
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Forums We Appear Before
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              Types of Service &amp; Employment Matters We Handle
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
                We begin with a confidential review of your service record,
                charge sheet, or the order under challenge, followed by clear
                advice on the likely outcomes and the forum best suited to
                your matter. We represent you at the departmental stage
                wherever possible, and are fully prepared to carry the matter
                before the Central Administrative Tribunal, the U.P. Public
                Services Tribunal, CGIT, or in writ jurisdiction before the
                Allahabad High Court, Lucknow Bench.
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
                Service Law <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions government and public sector employees bring
                to us — drawn from our service law practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {serviceInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={employmentBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Service & Employment Blogs"
            description="Short reads on service law, employment disputes, and departmental proceedings."
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Service or Employment Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your recruitment, promotion,
              disciplinary, pension, or industrial dispute — practising before
              the Central Administrative Tribunal, the U.P. Public Services
              Tribunal, CGIT, and the Allahabad High Court, Lucknow Bench.
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
