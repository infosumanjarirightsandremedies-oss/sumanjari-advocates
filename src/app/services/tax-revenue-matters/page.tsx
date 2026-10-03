import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  Receipt,
  Home,
  MapPin,
  ScrollText,
  Gavel,
  Landmark,
  ShieldCheck,
  MessageSquareWarning,
  Scale,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Tax Lawyer in Lucknow | Stamp Duty, GST & Income Tax Disputes',
  description:
    'Sumanjari & Co. Advocates advises on stamp duty and registration, property tax assessment, circle rate valuation, income tax, and GST disputes before the ITAT Lucknow Bench, the GST Appellate Tribunal, Lucknow, and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Tax Lawyer Lucknow',
    'Revenue Lawyer Lucknow',
    'Stamp Duty Lawyer Lucknow',
    'Property Tax Lawyer Lucknow',
    'Circle Rate Dispute Lawyer Lucknow',
    'Income Tax Lawyer Lucknow',
    'ITAT Lucknow Advocate',
    'GST Lawyer Lucknow',
    'GST Appellate Tribunal Lucknow',
    'GSTAT Lucknow Advocate',
    'Registration Act Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/tax-revenue-matters',
  },
  openGraph: {
    title: 'Tax & Revenue Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Advisory and litigation in stamp duty, property tax, circle rate valuation, income tax, and GST disputes before the ITAT Lucknow Bench, GSTAT Lucknow, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/tax-revenue-matters',
  },
}

const taxMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Tax & Revenue Matters',
  url: `${SITE_URL}/services/tax-revenue-matters`,
  description:
    'Advisory and representation in stamp duty and registration, property tax assessment, circle rate valuation, income tax, GST, and recovery of government dues, before the ITAT Lucknow Bench, the GST Appellate Tribunal, Lucknow, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Tax & Revenue Legal Services',
}

const taxFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How is stamp duty calculated on property in Uttar Pradesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stamp duty under the Indian Stamp Act, 1899, as applicable in Uttar Pradesh, is calculated on whichever is higher — the declared sale value or the District Magistrate’s notified circle rate — with a concessional flat rate available for transfers between blood relatives.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the ITAT and where is the Lucknow Bench?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Income Tax Appellate Tribunal (ITAT) is a statutory tribunal under Section 252 of the Income Tax Act, 1961. Its Lucknow Bench hears income tax appeals from Lucknow and most of central and western Uttar Pradesh.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a GST Appellate Tribunal in Lucknow now?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Uttar Pradesh has been allotted State Benches of the GST Appellate Tribunal (GSTAT) based in Lucknow, with circuit benches in Prayagraj and Agra, as the Tribunal is rolled out to hear GST appeals that were previously stalled for want of an appellate forum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who fixes the circle rate used for stamp duty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The circle rate — the government-notified minimum value of land or property for stamp duty purposes — is fixed by the District Magistrate, and disputes over undervaluation are referred to the Collector under the Stamp Act.',
      },
    },
  ],
}

const matters = [
  {
    icon: Receipt,
    title: 'Stamp Duty & Registration Matters',
    points: [
      'Stamp duty under the Indian Stamp Act, 1899, as applicable in Uttar Pradesh',
      'Registration of documents under Section 17 of the Registration Act, 1908',
      'Advisory on concessional stamp duty for transfers between blood relatives',
    ],
  },
  {
    icon: Home,
    title: 'Property Tax Assessment Disputes',
    points: [
      'Challenging house and property tax assessments before the municipal authority',
      'Disputes over annual rateable value and assessment orders',
    ],
  },
  {
    icon: MapPin,
    title: 'Circle Rate & Valuation Disputes',
    points: [
      'Disputes over circle rate valuation used for stamp duty purposes',
      'Representation before the Collector on references for alleged undervaluation',
    ],
  },
  {
    icon: ScrollText,
    title: 'Income Tax Advisory & Litigation',
    points: [
      'Advisory on income tax compliance, in coordination with chartered accountants',
      'Representation in appeals before the Commissioner (Appeals) and the ITAT, Lucknow Bench',
    ],
  },
  {
    icon: Receipt,
    title: 'GST Advisory & Disputes',
    points: [
      'Advisory on GST registration and compliance for business clients',
      'Representation in GST appeals, including before the GST Appellate Tribunal (GSTAT), Lucknow',
    ],
  },
  {
    icon: Gavel,
    title: 'Recovery of Government Dues & Tax Arrears',
    points: [
      'Representation in recovery certificate proceedings for tax and revenue arrears',
      'Advisory on settlement and instalment applications before the recovering authority',
    ],
  },
]

const whyIssues = [
  'Stamp duty calculation and registration of property documents',
  'Property tax and house tax assessment disputes',
  'Circle rate valuation and undervaluation references',
  'Income tax compliance and appellate disputes',
  'GST registration, compliance, and appellate disputes',
  'Recovery proceedings for government dues and tax arrears',
]

const jurisdiction = [
  {
    title: 'Sub-Registrar & Stamp Authorities, Lucknow',
    blurb:
      'Registration of documents and stamp duty valuation, including references on undervaluation before the Collector.',
  },
  {
    title: 'ITAT, Lucknow Bench',
    blurb:
      'Income tax appeals from Lucknow and most of central and western Uttar Pradesh.',
  },
  {
    title: 'GST Appellate Tribunal (GSTAT), Lucknow',
    blurb:
      'GST appeals for Uttar Pradesh, with circuit benches at Prayagraj and Agra, as the Tribunal is rolled out.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Tax references and writ petitions in stamp duty, property tax, and revenue matters, argued from our chambers at Block D-311.',
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

const taxInsights = [
  {
    icon: Receipt,
    title: 'How Is Stamp Duty Calculated on Property in UP?',
    excerpt:
      'Stamp duty is calculated on whichever is higher — the declared sale value or the District Magistrate’s notified circle rate — with a concessional flat rate for transfers between blood relatives.',
  },
  {
    icon: Landmark,
    title: 'What Is the ITAT and Where Is the Lucknow Bench?',
    excerpt:
      'The Income Tax Appellate Tribunal is a statutory tribunal under Section 252 of the Income Tax Act, 1961. Its Lucknow Bench hears income tax appeals from Lucknow and most of central and western Uttar Pradesh.',
  },
  {
    icon: Gavel,
    title: 'Is There a GST Appellate Tribunal in Lucknow Now?',
    excerpt:
      'Yes — Uttar Pradesh has been allotted State Benches of the GST Appellate Tribunal based in Lucknow, with circuit benches in Prayagraj and Agra, as the Tribunal is rolled out to finally hear GST appeals.',
  },
  {
    icon: MapPin,
    title: 'Who Fixes the Circle Rate Used for Stamp Duty?',
    excerpt:
      'The circle rate — the government-notified minimum value of land or property for stamp duty purposes — is fixed by the District Magistrate, and undervaluation disputes are referred to the Collector.',
  },
]

export default async function TaxRevenueMattersPage() {
  const taxBlogPosts = await getBlogPostsByCategory('Tax & Revenue Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxFaqJsonLd) }}
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
                Tax &amp; Revenue Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Tax &amp; <em className="text-gold-gradient">Revenue Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Legal assistance in stamp duty, registration, property tax,
              circle rate valuation, and income tax and GST disputes.
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
              Tax and revenue matters in Uttar Pradesh span several distinct
              forums — the Sub-Registrar and Collector for stamp duty and
              circle rate disputes, the Income Tax Appellate Tribunal for
              direct tax appeals, and, since Uttar Pradesh was allotted its
              own bench, the GST Appellate Tribunal for GST disputes.
              Sumanjari &amp; Co. Advocates advises individuals and
              businesses on compliance and represents them in disputes across
              these forums.
            </p>
            <p>
              We handle stamp duty and registration matters, property tax
              assessment disputes, circle rate valuation references, income
              tax appeals before the ITAT, Lucknow Bench, GST disputes, and
              writ and appellate matters before the Allahabad High Court,
              Lucknow Bench.
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
              Types of Tax &amp; Revenue Matters We Handle
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
                We begin with a confidential review of the document,
                assessment, or notice involved — coordinating with your
                chartered accountant on tax computation where needed — and
                advise clearly on the forum and relief available. We
                represent you before the Registrar and Collector, the ITAT,
                Lucknow Bench, the GST Appellate Tribunal, and, where
                necessary, in appeal or writ before the Allahabad High Court,
                Lucknow Bench.
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
                Tax &amp; Revenue <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our tax and
                revenue practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {taxInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={taxBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Tax & Revenue Blogs"
            description="Short reads on tax disputes and revenue matters."
            viewAllHref={`/blog?category=${encodeURIComponent('Tax & Revenue Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Tax or Revenue Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your stamp duty, property tax, income
              tax, or GST matter — practising before the ITAT, GSTAT, and the
              Allahabad High Court, Lucknow Bench.
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
