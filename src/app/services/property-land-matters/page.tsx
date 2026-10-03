import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  Home,
  FileWarning,
  Scale,
  ShieldCheck,
  Landmark,
  MapPin,
  ShieldAlert,
  Banknote,
  Gavel,
  MessageSquareWarning,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Property Lawyer in Lucknow | Title, Partition & Land Disputes',
  description:
    'Sumanjari & Co. Advocates represents clients in property title verification, partition suits, possession disputes, mutation, boundary disputes, benami property, and land acquisition compensation before the Revenue Courts, District Courts, and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Property Lawyer Lucknow',
    'Land Dispute Lawyer Lucknow',
    'Property Advocate Lucknow',
    'Title Verification Lawyer Lucknow',
    'Partition Suit Lawyer Lucknow',
    'Possession Dispute Lawyer Lucknow',
    'Mutation Dakhil Kharij Lawyer Lucknow',
    'Boundary Dispute Lawyer Lucknow',
    'Benami Property Lawyer Lucknow',
    'Land Acquisition Compensation Lawyer Lucknow',
    'Revenue Court Lawyer Lucknow',
    'UP Zamindari Abolition Act Lawyer',
  ],
  alternates: {
    canonical: '/services/property-land-matters',
  },
  openGraph: {
    title: 'Property & Land Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in property title verification, partition, possession disputes, mutation, boundary disputes, benami property, and land acquisition compensation before the Revenue Courts and Allahabad High Court, Lucknow Bench.',
    url: '/services/property-land-matters',
  },
}

const propertyMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Property & Land Matters',
  url: `${SITE_URL}/services/property-land-matters`,
  description:
    'Representation in property title verification and due diligence, sale and transfer transactions, partition suits, possession disputes, mutation and revenue proceedings, boundary disputes, benami property matters, and land acquisition compensation, before the Revenue Courts, District Courts, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Property & Land Legal Services',
}

const propertyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is title verification important before buying property?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Title verification examines the chain of ownership, revenue records, and litigation history of a property, helping identify disputes, encumbrances, or defects before money changes hands.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is mutation (dakhil-kharij) and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mutation, or dakhil-kharij, is the updating of revenue records to reflect a new owner after a sale, inheritance, gift, or partition, carried out under Sections 34 and 35 of the U.P. Revenue Code, 2006 by the Tehsildar. It does not itself create ownership but is important evidence of possession and title.',
      },
    },
    {
      '@type': 'Question',
      name: 'How are ancestral properties partitioned?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ancestral property can be partitioned amicably through a registered family settlement or partition deed, or, where family members disagree, through a partition suit before the civil court seeking a formal division of shares.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compensation can I claim for land acquired by the government?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compensation for land acquired by the government is governed by the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013, with recourse to a Reference Court where the compensation awarded is disputed.',
      },
    },
  ],
}

const matters = [
  {
    icon: Home,
    title: 'Sale, Purchase & Transfer of Property',
    points: [
      'Drafting and vetting sale deeds, agreements to sell, and transfer documents',
      'Representation in sale, purchase, and transfer transactions',
      'Suits for specific performance of sale agreements under the Specific Relief Act, 1963',
    ],
  },
  {
    icon: FileWarning,
    title: 'Property Title Verification & Due Diligence',
    points: [
      'Title search and verification before purchase',
      'Examining revenue records, encumbrances, and litigation history',
    ],
  },
  {
    icon: Scale,
    title: 'Partition Suits',
    points: [
      'Partition of ancestral and self-acquired property',
      'Family settlement deeds and amicable partition',
      'Contested partition suits before the civil court',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Possession Disputes & Injunctions',
    points: [
      'Suits for possession and injunction',
      'Protection against illegal dispossession',
    ],
  },
  {
    icon: Landmark,
    title: 'Property Mutation & Revenue Proceedings',
    points: [
      'Mutation (dakhil-kharij) under Sections 34 and 35 of the U.P. Revenue Code, 2006',
      'Proceedings before the Tehsildar, Sub-Divisional Officer, and Collector',
    ],
  },
  {
    icon: MapPin,
    title: 'Boundary Disputes & Demarcation',
    points: [
      'Boundary and demarcation disputes',
      'Encroachment matters and protective relief',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Benami Property & Land Reforms Matters',
    points: [
      'Matters under the Prohibition of Benami Property Transactions Act, 1988',
      'Matters under the U.P. Zamindari Abolition and Land Reforms Act, 1950',
    ],
  },
  {
    icon: Banknote,
    title: 'Land Acquisition & Compensation',
    points: [
      'Compensation claims under the Right to Fair Compensation and Transparency in Land Acquisition, Rehabilitation and Resettlement Act, 2013',
      'Representation before the Land Acquisition Officer and Reference Court',
    ],
  },
]

const whyIssues = [
  'Verifying title and revenue records before a property purchase',
  'Partition among family members and family settlement',
  'Illegal possession, encroachment, and boundary disputes',
  'Mutation of property in revenue records after sale, inheritance, or gift',
  'Benami property allegations and land reforms matters',
  'Compensation for land acquired by the government',
]

const jurisdiction = [
  {
    title: 'Revenue Courts (Tehsildar, SDO, Collector)',
    blurb:
      'Mutation, partition of revenue records, and boundary disputes under the U.P. Revenue Code, 2006.',
  },
  {
    title: 'Civil Judge & District Courts, Lucknow',
    blurb:
      'Possession, injunction, partition, and specific performance suits relating to immovable property.',
  },
  {
    title: 'Board of Revenue, Uttar Pradesh',
    blurb:
      'Second appeals and revisions against orders of subordinate revenue authorities.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Writ and appellate matters arising from property and land disputes, argued from our chambers at Block D-311.',
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
    icon: FileWarning,
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

const propertyInsights = [
  {
    icon: FileWarning,
    title: 'Why Is Title Verification Important Before Buying Property?',
    excerpt:
      'Title verification examines the chain of ownership, revenue records, and litigation history of a property, helping identify disputes, encumbrances, or defects before money changes hands.',
  },
  {
    icon: Landmark,
    title: 'What Is Mutation (Dakhil-Kharij) and Why Does It Matter?',
    excerpt:
      'Mutation is the updating of revenue records to reflect a new owner after a sale, inheritance, gift, or partition, carried out under Sections 34 and 35 of the U.P. Revenue Code, 2006 by the Tehsildar — important evidence of possession, though it does not itself create ownership.',
  },
  {
    icon: Scale,
    title: 'How Are Ancestral Properties Partitioned?',
    excerpt:
      'Ancestral property can be partitioned amicably through a registered family settlement or partition deed, or, where family members disagree, through a partition suit before the civil court.',
  },
  {
    icon: Banknote,
    title: 'What Compensation Can I Claim for Land Acquisition?',
    excerpt:
      'Compensation for land acquired by the government is governed by the RFCTLARR Act, 2013, with recourse to a Reference Court where the compensation awarded is disputed.',
  },
]

export default async function PropertyLandMattersPage() {
  const propertyBlogPosts = await getBlogPostsByCategory('Property & Land Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(propertyFaqJsonLd) }}
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
                Property &amp; Land Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Property &amp; <em className="text-gold-gradient">Land Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Comprehensive legal assistance in property ownership, transfers,
              title verification, land disputes, revenue proceedings, and
              documentation.
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
              Property and land matters in Uttar Pradesh sit at the
              intersection of civil law and revenue law — a dispute over
              possession, a delayed mutation entry, or an unclear title can
              each derail a transaction or a family settlement. Sumanjari
              &amp; Co. Advocates advises and represents clients in property
              transactions, title verification, partition, possession
              disputes, and revenue proceedings.
            </p>
            <p>
              We handle matters before the Revenue Courts under the U.P.
              Revenue Code, 2006, civil suits before the Civil Judge and
              District Courts, Lucknow, and appellate and writ matters before
              the Allahabad High Court, Lucknow Bench.
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
              Types of Property &amp; Land Matters We Handle
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
                We begin with a confidential review of the title, revenue
                records, and documents involved, and advise clearly on the
                risks and the course available — whether that is completing a
                mutation, pursuing partition, seeking possession or
                injunctive relief, or claiming compensation. We represent you
                before the Revenue Courts, the Civil Judge and District
                Courts, and, where necessary, in appeal or writ before the
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
                Property &amp; Land <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our
                property and land practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {propertyInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={propertyBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Property & Land Blogs"
            description="Short reads on property disputes, title issues, and land matters."
            viewAllHref={`/blog?category=${encodeURIComponent('Property & Land Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Property or Land Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your title, partition, possession, or
              land acquisition matter — practising before the Revenue Courts
              and the Allahabad High Court, Lucknow Bench.
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
