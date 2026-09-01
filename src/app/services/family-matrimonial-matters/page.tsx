import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  HeartCrack,
  HandCoins,
  Baby,
  ShieldAlert,
  HeartHandshake,
  Scale,
  Landmark,
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
  title: 'Family & Matrimonial Lawyer in Lucknow | Divorce, Custody & Maintenance',
  description:
    'Sumanjari & Co. Advocates represents clients in divorce, child custody, maintenance, domestic violence, and matrimonial disputes before the Family Court, District Courts, and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Family Lawyer Lucknow',
    'Matrimonial Lawyer Lucknow',
    'Divorce Lawyer Lucknow',
    'Child Custody Lawyer Lucknow',
    'Maintenance Lawyer Lucknow',
    'Domestic Violence Lawyer Lucknow',
    'Family Court Lawyer Lucknow',
    'Mutual Consent Divorce Lawyer Lucknow',
    'Contested Divorce Lawyer Lucknow',
    'Alimony Lawyer Lucknow',
    'Restitution of Conjugal Rights Lawyer Lucknow',
    'Matrimonial Dispute Advocate Lucknow',
  ],
  alternates: {
    canonical: '/services/family-matrimonial-matters',
  },
  openGraph: {
    title: 'Family & Matrimonial Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in divorce, child custody, maintenance, domestic violence, and matrimonial disputes before the Family Court and Allahabad High Court, Lucknow Bench.',
    url: '/services/family-matrimonial-matters',
  },
}

const familyServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Family & Matrimonial Matters',
  url: `${SITE_URL}/services/family-matrimonial-matters`,
  description:
    'Representation in divorce, maintenance, child custody, domestic violence protection, restitution of conjugal rights, and succession disputes before the Family Court, District Courts, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-82990-86204',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Family & Matrimonial Legal Services',
}

const matters = [
  {
    icon: HeartCrack,
    title: 'Divorce & Matrimonial Disputes',
    points: [
      'Mutual consent divorce petitions and settlement negotiations',
      'Contested divorce proceedings on grounds such as cruelty, desertion, or adultery',
      'Judicial separation and annulment matters',
    ],
  },
  {
    icon: HandCoins,
    title: 'Maintenance & Alimony',
    points: [
      'Interim and permanent maintenance under Section 144 BNSS (formerly Section 125 CrPC)',
      'Maintenance claims under the Hindu Marriage Act and Hindu Adoption & Maintenance Act',
      'Negotiating and enforcing alimony settlements',
    ],
  },
  {
    icon: Baby,
    title: 'Child Custody & Guardianship',
    points: [
      'Physical and legal custody petitions',
      'Guardianship applications under the Guardians and Wards Act',
      'Visitation rights and arrangements that safeguard the child’s welfare',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Domestic Violence Protection',
    points: [
      'Protection orders under Section 18 of the Protection of Women from Domestic Violence Act, 2005',
      'Residence orders under Section 19 and monetary relief under Section 20 of the Act',
      'Representation in related 498A and matrimonial cruelty matters',
    ],
  },
  {
    icon: HeartHandshake,
    title: 'Restitution of Conjugal Rights',
    points: [
      'Filing and defending petitions for restitution of conjugal rights',
      'Advisory on related matrimonial remedies and defences',
    ],
  },
  {
    icon: Scale,
    title: 'Succession & Inheritance Disputes',
    points: [
      'Succession certificate and legal heirship applications',
      'Inheritance disputes among family members',
      'Drafting and advisory on family settlement deeds',
    ],
  },
]

const whyIssues = [
  'Breakdown of marriage and the appropriate grounds for divorce',
  'Fair determination of maintenance and alimony',
  'Custody arrangements that protect the child’s welfare and stability',
  'Protection from domestic violence and matrimonial cruelty',
  'Restitution of conjugal rights and related matrimonial remedies',
  'Family property, succession, and inheritance disputes',
]

const jurisdiction = [
  {
    title: 'Family Court, Lucknow',
    blurb:
      'Representation in divorce, maintenance, custody, and related matrimonial proceedings before the Principal Judge, Family Court, Lucknow.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Appeals, revisions, and writ matters arising out of family and matrimonial proceedings, argued from our chambers at Block D-311.',
  },
  {
    title: 'District & Sessions Courts',
    blurb:
      'Domestic violence, maintenance, and allied criminal-matrimonial proceedings before the District and Sessions Courts.',
  },
  {
    title: 'Mediation & Settlement',
    blurb:
      'Negotiated and mediated resolutions where both parties are open to an amicable settlement, in and outside court.',
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
    icon: Scale,
    title: 'In-Depth Case Review',
    description:
      'Every document and detail is carefully examined so we can assess the strengths, risks, and best possible legal routes for you.',
  },
  {
    icon: HeartHandshake,
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

const familyInsights = [
  {
    icon: HeartCrack,
    title: 'Mutual Consent vs. Contested Divorce — What Is the Difference?',
    excerpt:
      'A mutual consent divorce is generally faster and requires both spouses to agree on terms including maintenance and custody, while a contested divorce is decided by the court on specific legal grounds.',
  },
  {
    icon: HandCoins,
    title: 'How Is Maintenance Calculated?',
    excerpt:
      'Courts weigh the income and assets of both spouses, the standard of living during marriage, dependents, and reasonable needs when fixing interim or permanent maintenance under Section 144 BNSS.',
  },
  {
    icon: Baby,
    title: 'What Do Courts Look At in Child Custody?',
    excerpt:
      'The welfare of the child is the paramount consideration — including age, the child’s own wishes where relevant, stability of the home, and each parent’s ability to provide care.',
  },
  {
    icon: ShieldAlert,
    title: 'What Relief Is Available Under the Domestic Violence Act?',
    excerpt:
      'A Magistrate can grant a protection order (Section 18), a residence order (Section 19), and monetary relief (Section 20) to an aggrieved person facing domestic violence, in addition to any criminal proceedings.',
  },
]

const familyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between mutual consent and contested divorce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A mutual consent divorce is generally faster and requires both spouses to agree on terms including maintenance and custody, while a contested divorce is decided by the court on specific legal grounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is maintenance calculated in a matrimonial matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Courts weigh the income and assets of both spouses, the standard of living during marriage, dependents, and reasonable needs when fixing interim or permanent maintenance under Section 144 BNSS (formerly Section 125 CrPC).',
      },
    },
    {
      '@type': 'Question',
      name: 'What do courts look at in child custody cases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The welfare of the child is the paramount consideration — including age, the child’s own wishes where relevant, stability of the home, and each parent’s ability to provide care.',
      },
    },
    {
      '@type': 'Question',
      name: 'What relief is available under the Domestic Violence Act?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A Magistrate can grant a protection order under Section 18, a residence order under Section 19, and monetary relief under Section 20 of the Protection of Women from Domestic Violence Act, 2005.',
      },
    },
  ],
}

export default async function FamilyMatrimonialServicePage() {
  const familyBlogPosts = await getBlogPostsByCategory('Family & Matrimonial Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(familyServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(familyFaqJsonLd) }}
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
                Family Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Family &amp; <em className="text-gold-gradient">Matrimonial Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Discreet, sensitive representation in divorce, custody, maintenance,
              and matrimonial disputes — before the Family Court, District Courts,
              and the Allahabad High Court, Lucknow Bench.
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
              Family disputes carry personal, emotional, and financial weight that
              goes well beyond the courtroom. Whether the matter concerns divorce,
              maintenance, child custody, domestic violence, or a family property
              dispute, Sumanjari &amp; Co. Advocates provides clear legal guidance
              and steady representation through every stage of the process.
            </p>
            <p>
              We advise both individuals and families on their rights and options,
              working towards an amicable resolution wherever possible while
              remaining fully prepared to represent you before the Family Court,
              District Courts, and the Allahabad High Court, Lucknow Bench, where
              litigation cannot be avoided.
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Courts &amp; Forums We Appear Before
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
              Types of Family &amp; Matrimonial Matters We Handle
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
                Every family matter is handled in confidence and with sensitivity
                to the personal circumstances involved. We begin by understanding
                the facts and your priorities, then advise you clearly on the
                likely outcomes and options — including negotiated or mediated
                settlement where appropriate. Where litigation is necessary, we
                represent you with the same care through the Family Court,
                District Courts, and in appeal before the Allahabad High Court,
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
                Family Law <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our family and
                matrimonial practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {familyInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={familyBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Family & Matrimonial Blogs"
            description="Short reads on divorce, custody, and matrimonial disputes."
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Family or Matrimonial Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team in confidence about your divorce, custody,
              maintenance, or matrimonial matter — practising before the Family
              Court, District Courts, and the Allahabad High Court, Lucknow Bench.
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
