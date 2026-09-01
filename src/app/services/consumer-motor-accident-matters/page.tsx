import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ShoppingBag,
  Landmark,
  Gavel,
  ShieldAlert,
  HandCoins,
  FileWarning,
  Scale,
  ShieldCheck,
  MessageSquareWarning,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Consumer & MACT Lawyer in Lucknow | Consumer Forum & Accident Claims',
  description:
    'Sumanjari & Co. Advocates represents clients in consumer forum complaints, motor accident compensation claims, no-fault and hit-and-run compensation, and insurance disputes before the District & State Consumer Commissions, the Motor Accident Claims Tribunal, and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Consumer Lawyer Lucknow',
    'Consumer Forum Advocate Lucknow',
    'Consumer Protection Act Lawyer Lucknow',
    'Motor Accident Claim Lawyer Lucknow',
    'MACT Lawyer Lucknow',
    'Insurance Claim Lawyer Lucknow',
    'Hit and Run Compensation Lawyer Lucknow',
    'No Fault Liability Lawyer Lucknow',
    'Deficiency of Service Lawyer Lucknow',
    'Product Liability Lawyer Lucknow',
    'Consumer Commission Advocate Lucknow',
  ],
  alternates: {
    canonical: '/services/consumer-motor-accident-matters',
  },
  openGraph: {
    title: 'Consumer & Motor Accident Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in consumer forum complaints, MACT compensation claims, no-fault and hit-and-run compensation, and insurance disputes before the Consumer Commissions, MACT, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/consumer-motor-accident-matters',
  },
}

const consumerMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Consumer & Motor Accident Matters',
  url: `${SITE_URL}/services/consumer-motor-accident-matters`,
  description:
    'Representation in consumer forum complaints under the Consumer Protection Act, 2019, Motor Accident Claims Tribunal proceedings under the Motor Vehicles Act, 1988, no-fault and hit-and-run compensation, and insurance claim disputes.',
  telephone: '+91-82990-86204',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Consumer & Motor Accident Legal Services',
}

const consumerFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the pecuniary jurisdiction of consumer commissions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'As per the 2021 notification, the District Commission has jurisdiction up to ₹50 lakh, the State Commission from ₹50 lakh up to ₹2 crore, and the National Commission for claims exceeding ₹2 crore, based on the value of goods or services paid as consideration.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a time limit to file a motor accident claim?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 2019 amendment to Section 166 of the Motor Vehicles Act reinstated a 6-month limitation period, effective from April 1, 2022, though this is subject to the Tribunal’s discretion to condone delay given the beneficial nature of the legislation.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is no-fault liability compensation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under Section 140 of the Motor Vehicles Act, 1988, a claimant can receive fixed compensation — ₹50,000 for death and ₹25,000 for permanent disablement — without having to prove negligence or fault on the part of the vehicle owner or driver.',
      },
    },
    {
      '@type': 'Question',
      name: 'What compensation is available in hit-and-run cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the Compensation to Victims of Hit and Run Motor Accidents Scheme, 2022, ₹2 lakh is payable for death and ₹50,000 for grievous injury, disbursed from the Motor Vehicle Accident Fund constituted under Section 164B of the Motor Vehicles Act.',
      },
    },
  ],
}

const matters = [
  {
    icon: ShoppingBag,
    title: 'Consumer Complaints Under the Consumer Protection Act, 2019',
    points: [
      'Complaints for deficiency of service and defective goods',
      'Unfair trade practices and misleading advertisements',
      'E-commerce disputes and product liability claims',
    ],
  },
  {
    icon: Landmark,
    title: 'Consumer Forum Jurisdiction & Filing',
    points: [
      'Complaints before the District Commission (up to ₹50 lakh), State Commission (₹50 lakh–₹2 crore), and National Commission (above ₹2 crore)',
      'Appeals and revisions between consumer forums',
    ],
  },
  {
    icon: Gavel,
    title: 'Motor Accident Claims Tribunal (MACT) Proceedings',
    points: [
      'Compensation claims under Section 166 of the Motor Vehicles Act, 1988 for death or injury in road accidents',
      'Claims filed within the 6-month limitation period, with applications for condonation of delay where needed',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'No-Fault & Hit-and-Run Compensation',
    points: [
      'No-fault liability claims under Section 140 of the Motor Vehicles Act',
      'Hit-and-run compensation under the 2022 Scheme, payable from the Motor Vehicle Accident Fund under Section 164B',
    ],
  },
  {
    icon: HandCoins,
    title: 'Insurance Claim Disputes',
    points: [
      'Third-party and own-damage insurance claim disputes',
      'Repudiation of claims and disputes over policy coverage',
    ],
  },
  {
    icon: FileWarning,
    title: 'Product Liability & Warranty Disputes',
    points: [
      'Claims for defective products under the product liability provisions of the CPA, 2019',
      'Warranty and after-sales service disputes',
    ],
  },
]

const whyIssues = [
  'Deficiency of service and defective goods',
  'Unfair trade practices and misleading advertisements',
  'Compensation for death or injury in road accidents',
  'No-fault and hit-and-run compensation claims',
  'Insurance claim repudiation and coverage disputes',
  'Appeals between consumer forums and before the High Court',
]

const jurisdiction = [
  {
    title: 'District Consumer Disputes Redressal Commission, Lucknow',
    blurb:
      'Consumer complaints where the value of goods or services does not exceed ₹50 lakh.',
  },
  {
    title: 'State Consumer Disputes Redressal Commission, U.P.',
    blurb:
      'Complaints between ₹50 lakh and ₹2 crore, and appeals from the District Commission.',
  },
  {
    title: 'Motor Accident Claims Tribunal (MACT), Lucknow',
    blurb:
      'Compensation claims for death or injury arising from motor vehicle accidents under the Motor Vehicles Act.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Appeals and revisions in consumer and motor accident matters, argued from our chambers at Block D-311.',
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

const consumerInsights = [
  {
    icon: Landmark,
    title: 'What Is the Pecuniary Jurisdiction of Consumer Commissions?',
    excerpt:
      'As per the 2021 notification, the District Commission has jurisdiction up to ₹50 lakh, the State Commission from ₹50 lakh up to ₹2 crore, and the National Commission above ₹2 crore.',
  },
  {
    icon: Gavel,
    title: 'Is There a Time Limit to File a Motor Accident Claim?',
    excerpt:
      'A 2019 amendment reinstated a 6-month limitation period under Section 166 of the Motor Vehicles Act, effective from April 2022 — though the Tribunal retains discretion to condone delay.',
  },
  {
    icon: ShieldAlert,
    title: 'What Is No-Fault Liability Compensation?',
    excerpt:
      'Under Section 140 of the Motor Vehicles Act, a claimant can receive ₹50,000 for death and ₹25,000 for permanent disablement without having to prove negligence or fault.',
  },
  {
    icon: HandCoins,
    title: 'What Compensation Is Available in Hit-and-Run Cases?',
    excerpt:
      'Under the 2022 Scheme, ₹2 lakh is payable for death and ₹50,000 for grievous injury, disbursed from the Motor Vehicle Accident Fund under Section 164B.',
  },
]

export default async function ConsumerMotorAccidentMattersPage() {
  const consumerBlogPosts = await getBlogPostsByCategory('Consumer & Motor Accident Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consumerMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consumerFaqJsonLd) }}
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
                Consumer &amp; Accident Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Consumer &amp; <em className="text-gold-gradient">Motor Accident Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Consumer litigation, MACT compensation claims, and insurance
              dispute resolution before the Consumer Commissions, the Motor
              Accident Claims Tribunal, and the Allahabad High Court, Lucknow
              Bench.
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
              Consumer disputes and motor accident claims both move through
              specialised forums with their own procedure, jurisdiction, and
              timelines — a consumer complaint depends on the value involved,
              while a motor accident claim now carries a limitation period
              that did not exist for many years. Sumanjari &amp; Co. Advocates
              advises and represents clients in both areas.
            </p>
            <p>
              We handle consumer complaints before the District and State
              Consumer Disputes Redressal Commissions, compensation claims
              before the Motor Accident Claims Tribunal, Lucknow, insurance
              disputes, and appeals before the Allahabad High Court, Lucknow
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
              Types of Consumer &amp; Motor Accident Matters We Handle
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
                We begin with a confidential review of the facts, purchase or
                policy documents, or accident details, and advise clearly on
                the appropriate forum and the relief available. We prepare
                and file the complaint or claim promptly — mindful of the
                MACT limitation period — and represent you through hearing
                and, where necessary, in appeal before the Allahabad High
                Court, Lucknow Bench.
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
                Consumer &amp; Accident <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our
                consumer and motor accident practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {consumerInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={consumerBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Consumer & Motor Accident Blogs"
            description="Short reads on consumer disputes and motor accident compensation claims."
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Consumer or Accident Claim Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your consumer complaint, motor
              accident claim, or insurance dispute — practising before the
              Consumer Commissions, the MACT, and the Allahabad High Court,
              Lucknow Bench.
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
