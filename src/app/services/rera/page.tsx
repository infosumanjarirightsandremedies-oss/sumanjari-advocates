import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  Building2,
  Home,
  FileWarning,
  Hammer,
  ClipboardCheck,
  Gavel,
  ShieldCheck,
  MessageSquareWarning,
  MapPin,
  Lock,
  Search,
  FileSignature,
  Presentation,
  CheckCircle2,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'RERA Lawyer in Lucknow, Noida, Greater Noida & Ghaziabad',
  description:
    'Sumanjari & Co. Advocates represents homebuyers and developers in RERA disputes across Lucknow, Noida, Greater Noida and Ghaziabad — before UP-RERA and the RERA Appellate Tribunal. Builder-buyer conflicts, possession delays, compensation claims, and project compliance.',
  keywords: [
    'RERA Lawyer Lucknow',
    'RERA Advocate Lucknow',
    'RERA Lawyer Noida',
    'RERA Advocate Noida',
    'RERA Lawyer Greater Noida',
    'RERA Advocate Greater Noida',
    'RERA Lawyer Ghaziabad',
    'RERA Advocate Ghaziabad',
    'Builder Buyer Dispute Lawyer Noida',
    'Builder Buyer Dispute Lawyer Ghaziabad',
    'Builder Buyer Dispute Lawyer Greater Noida',
    'UP RERA Complaint Lawyer',
    'UP RERA Advocate',
    'RERA Possession Delay Lawyer',
    'RERA Appellate Tribunal Lawyer UP',
    'RERA Compensation Claim Lawyer',
  ],
  alternates: {
    canonical: '/services/rera',
  },
  openGraph: {
    title: 'RERA Lawyer in Lucknow, Noida, Greater Noida & Ghaziabad | Sumanjari & Co. Advocates',
    description:
      'Representation in real estate regulatory disputes before UP-RERA and the RERA Appellate Tribunal — serving clients across Lucknow, Noida, Greater Noida and Ghaziabad.',
    url: '/services/rera',
  },
}

const reraServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — RERA Matters',
  url: `${SITE_URL}/services/rera`,
  description:
    'Representation for homebuyers and developers in RERA disputes — builder-buyer conflicts, possession delays, compensation claims, project registration and compliance, and appeals before the RERA Appellate Tribunal.',
  telephone: '+91-82990-86204',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'City', name: 'Noida' },
    { '@type': 'City', name: 'Greater Noida' },
    { '@type': 'City', name: 'Ghaziabad' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'RERA Legal Services',
}

const matters = [
  {
    icon: Hammer,
    title: 'Builder-Buyer Disputes',
    points: [
      'Legal support for buyers facing delayed possession, faulty construction, or non-delivery of promised amenities',
      'Filing complaints against builders and developers for non-compliance with RERA guidelines and the sale agreement',
      'Refund of booking amounts, interest on delayed payments, and compensation claims',
    ],
  },
  {
    icon: Home,
    title: 'Possession Delay & Compensation',
    points: [
      'Legal recourse where possession is delayed beyond the timeline committed in the agreement',
      'Claims for interest, refunds, and compensation for delayed delivery',
      'Resolving disputes linked to missing occupancy certificates and pending approvals',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Project Registration & Compliance',
    points: [
      'Advisory to builders and developers on registering projects under UP-RERA',
      'Ensuring ongoing compliance with RERA rules to avoid penalties and enforcement action',
      'Complaints for non-registration of projects and other violations of RERA norms',
    ],
  },
  {
    icon: FileWarning,
    title: 'Construction Defects & Quality',
    points: [
      'Representation where construction quality, materials, or specifications fall short of what was promised',
      'Claims for rectification of defects or compensation in lieu of repair',
    ],
  },
  {
    icon: Gavel,
    title: 'RERA Appeals & Dispute Resolution',
    points: [
      'Appeals before the UP Real Estate Appellate Tribunal against orders of the Authority, within the 60-day limitation period under Section 44(2)',
      'Advising promoters on the mandatory 30% pre-deposit required under Section 43(5) before a promoter’s appeal is entertained',
      'Representation in mediation and settlement discussions with builders and developers, and execution of RERA orders before the Authority and Tribunal',
    ],
  },
  {
    icon: Building2,
    title: 'Developer-Side Advisory',
    points: [
      'Guidance for developers on structuring agreements to stay within RERA norms',
      'Responding to buyer complaints and Authority notices',
      'Compliance advisory to reduce exposure to penalties and project delays',
    ],
  },
]

const whyIssues = [
  'Builder defaults and breach of the builder-buyer agreement',
  'Compensation and refund claims for delayed or defective possession',
  'Delayed or stalled real estate projects',
  'Non-registration of projects and other RERA violations',
  'Substandard construction and non-compliance with agreed specifications',
]

const areasServed = [
  {
    city: 'Lucknow',
    blurb:
      'Our chambers are based at Block D-311, Allahabad High Court, Lucknow Bench — representing homebuyers and developers before UP-RERA Lucknow and in appeals before the Appellate Tribunal.',
  },
  {
    city: 'Noida',
    blurb:
      'Handling builder-buyer disputes, delayed possession, and compensation claims for homebuyers in Noida’s residential and commercial projects, filed and pursued before UP-RERA.',
  },
  {
    city: 'Greater Noida',
    blurb:
      'Representation in RERA complaints and appeals concerning projects in Greater Noida and Greater Noida West, including possession delay, refund, and compensation claims.',
  },
  {
    city: 'Ghaziabad',
    blurb:
      'Advising homebuyers and developers in Ghaziabad, Indirapuram, and Raj Nagar Extension on RERA registration, compliance, and builder-buyer disputes.',
  },
]

const workSteps = [
  {
    icon: Lock,
    title: 'Private Consultation',
    description:
      'We begin with a confidential discussion of your matter, understanding the facts and your expectations while safeguarding your privacy.',
  },
  {
    icon: Search,
    title: 'In-Depth Case Review',
    description:
      'Every document and detail is carefully examined so we can assess the strengths, risks, and best possible legal routes for you.',
  },
  {
    icon: FileSignature,
    title: 'Strategy & Drafting',
    description:
      'A clear, customised strategy is prepared and precise pleadings are drafted to present your case strongly before the court or authority.',
  },
  {
    icon: Presentation,
    title: 'Focused Representation',
    description:
      'We represent you with preparation and clarity, ensuring timely filings, effective arguments, and regular updates on each hearing.',
  },
  {
    icon: CheckCircle2,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
  },
]

const reraInsights = [
  {
    icon: ClipboardCheck,
    title: 'How to File a Complaint Before UP-RERA',
    excerpt:
      'A homebuyer complaint before UP-RERA typically begins with the builder-buyer agreement, payment receipts, and correspondence showing the delay or default — filed on the prescribed form along with the requisite fee.',
  },
  {
    icon: Home,
    title: "What Counts as 'Possession Delay' Under RERA?",
    excerpt:
      'The date committed in the builder-buyer agreement — not marketing timelines — determines delay. Once that date passes without a valid occupancy certificate, buyers can typically claim interest or seek a refund.',
  },
  {
    icon: FileWarning,
    title: 'Builder-Buyer Disputes: Documents You Will Need',
    excerpt:
      'Allotment letter, payment schedule, sale/builder-buyer agreement, demand and payment receipts, and any project registration or occupancy certificate details strengthen a RERA complaint.',
  },
  {
    icon: Gavel,
    title: 'RERA Appeals: What Is the Time Limit and Pre-Deposit?',
    excerpt:
      'An appeal to the RERA Appellate Tribunal must be filed within 60 days of the Authority’s order under Section 44(2) — and where the appeal is filed by a promoter, Section 43(5) requires a pre-deposit of at least 30% of the penalty or amount due before the appeal is entertained.',
  },
]

const reraFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I file a complaint before UP-RERA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A homebuyer complaint before UP-RERA typically begins with the builder-buyer agreement, payment receipts, and correspondence showing the delay or default — filed on the prescribed form along with the requisite fee.',
      },
    },
    {
      '@type': 'Question',
      name: 'What counts as possession delay under RERA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The date committed in the builder-buyer agreement — not marketing timelines — determines delay. Once that date passes without a valid occupancy certificate, buyers can typically claim interest or seek a refund.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are needed for a builder-buyer dispute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Allotment letter, payment schedule, sale or builder-buyer agreement, demand and payment receipts, and any project registration or occupancy certificate details strengthen a RERA complaint.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time limit and pre-deposit for a RERA appeal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An appeal to the RERA Appellate Tribunal must be filed within 60 days of the Authority’s order under Section 44(2) of the RERA Act, 2016. Where a promoter files the appeal, Section 43(5) requires a pre-deposit of at least 30% of the penalty or amount due before the appeal is entertained.',
      },
    },
  ],
}

export default async function ReraServicePage() {
  const reraBlogPosts = await getBlogPostsByCategory('RERA')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reraServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reraFaqJsonLd) }}
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
                Real Estate Regulation
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              RERA <em className="text-gold-gradient">Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Representation for homebuyers and developers in real estate regulatory
              disputes under the RERA Act, 2016 — serving clients across{' '}
              <strong className="font-semibold text-navy-900 dark:text-cream">
                Lucknow, Noida, Greater Noida and Ghaziabad
              </strong>{' '}
              before UP-RERA and the RERA Appellate Tribunal.
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
              Real estate disputes under the Real Estate (Regulation and Development)
              Act, 2016 can be complex and drawn out — whether the issue is a
              delayed handover, a disputed project registration, or a builder
              who has fallen short of the commitments made at booking. At
              Sumanjari &amp; Co. Advocates, we represent both individual
              homebuyers and institutional clients before UP-RERA and the
              Appellate Tribunal.
            </p>
            <p>
              We handle the full range of builder-buyer disputes, delayed
              possession claims, project registration and compliance matters,
              and appeals — with the aim of securing possession, compensation,
              or refund at the earliest possible stage, and pursuing appellate
              or execution remedies where required. Our practice extends across
              Uttar Pradesh&apos;s major real estate markets, including{' '}
              Lucknow, Noida, Greater Noida, and Ghaziabad.
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-8 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Where We Practise
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {areasServed.map(({ city, blurb }) => (
                <div
                  key={city}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <h3 className="mb-2 font-display text-base font-bold text-navy-900 dark:text-cream">
                    RERA Lawyer in {city}
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
              Types of RERA Matters We Handle
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
                We begin with a confidential consultation to understand the
                facts and documentation, followed by clear advice on the
                likely outcomes and the strategy best suited to your matter.
                Where possible, we work towards a negotiated or mediated
                resolution with the builder or developer — but we are fully
                prepared to pursue the matter through UP-RERA, the Appellate
                Tribunal, and execution proceedings where necessary.
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
                RERA <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions homebuyers and developers bring to us — drawn from
                our RERA practice across Lucknow, Noida, Greater Noida and Ghaziabad.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reraInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={reraBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="RERA Blogs"
            description="Short reads on the practical side of RERA disputes and compliance."
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a RERA Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your builder-buyer dispute, possession
              delay, or project compliance matter — serving clients in Lucknow,
              Noida, Greater Noida and Ghaziabad, and practising before UP-RERA
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
