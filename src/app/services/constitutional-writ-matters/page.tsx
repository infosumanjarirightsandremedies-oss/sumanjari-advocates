import Link from 'next/link'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  Landmark,
  Megaphone,
  ShieldCheck,
  Briefcase,
  Unlock,
  Scale,
  MessageSquareWarning,
  Gavel,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import { getBlogPostsByCategory } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Constitutional Lawyer in Lucknow | Writ Petitions & PIL, Article 226',
  description:
    'Sumanjari & Co. Advocates represents clients in writ petitions under Article 226, Public Interest Litigation, and fundamental rights matters — habeas corpus, mandamus, certiorari, prohibition, quo warranto, and service-related writs before the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Constitutional Lawyer Lucknow',
    'Writ Petition Lawyer Lucknow',
    'Article 226 Lawyer Lucknow',
    'PIL Lawyer Lucknow',
    'Public Interest Litigation Lawyer Lucknow',
    'Fundamental Rights Lawyer Lucknow',
    'Habeas Corpus Lawyer Lucknow',
    'Mandamus Petition Lawyer Lucknow',
    'Certiorari Petition Lawyer Lucknow',
    'Service Writ Lawyer Allahabad High Court',
    'Allahabad High Court Writ Advocate',
    'Quo Warranto Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/constitutional-writ-matters',
  },
  openGraph: {
    title: 'Constitutional & Writ Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in writ petitions, PIL, and fundamental rights matters under Article 226 before the Allahabad High Court, Lucknow Bench.',
    url: '/services/constitutional-writ-matters',
  },
}

const constitutionalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Constitutional & Writ Matters',
  url: `${SITE_URL}/services/constitutional-writ-matters`,
  description:
    'Representation in writ petitions under Article 226, Public Interest Litigation, fundamental rights matters, and service-related writs, before the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-82990-86204',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Constitutional & Writ Legal Services',
}

const constitutionalFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a writ petition under Article 226?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Article 226 empowers the High Court to issue writs — habeas corpus, mandamus, prohibition, certiorari, or quo warranto — for the enforcement of fundamental rights and for any other legal right, against the State, public authorities, and in appropriate cases, private bodies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the five types of writs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Habeas corpus secures the release of a person unlawfully detained; mandamus compels a public authority to perform a legal duty; prohibition restrains a lower court or tribunal from exceeding its jurisdiction; certiorari quashes an order already passed by a subordinate court, tribunal, or authority; and quo warranto challenges a person’s right to hold a public office.',
      },
    },
    {
      '@type': 'Question',
      name: 'When can I file a Public Interest Litigation (PIL)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A PIL can be filed where the issue affects the public at large or a class of citizens rather than a single individual, and courts have relaxed the ordinary rule of standing to allow such petitions in the interest of justice.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a writ be filed for a service matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Where a service dispute falls outside the jurisdiction of a service tribunal, or challenges a decision of the tribunal itself, a writ petition under Article 226 before the High Court remains available.',
      },
    },
  ],
}

const matters = [
  {
    icon: Landmark,
    title: 'Writ Petitions Under Article 226',
    points: [
      'Filing writ petitions before the Allahabad High Court for violation of fundamental or other legal rights',
      'Representation at the admission, interim relief, and final hearing stages',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Fundamental Rights Violations',
    points: [
      'Matters concerning the Right to Equality (Articles 14–18) and Right to Freedom (Articles 19–22)',
      'Violations of rights against exploitation, freedom of religion, and cultural and educational rights',
    ],
  },
  {
    icon: Megaphone,
    title: 'Public Interest Litigation (PIL)',
    points: [
      'Filing and defending PILs raising issues of public importance',
      'Advisory on maintainability and locus standi in public interest matters',
    ],
  },
  {
    icon: Briefcase,
    title: 'Service-Related Writs',
    points: [
      'Writ petitions in service matters falling outside tribunal jurisdiction',
      'Challenging orders of the Central Administrative Tribunal or State Tribunal by way of writ, in appropriate cases',
    ],
  },
  {
    icon: Unlock,
    title: 'Habeas Corpus & Personal Liberty',
    points: [
      'Petitions challenging illegal detention or custody',
      'Urgent applications for the production and release of a detained person',
    ],
  },
  {
    icon: Scale,
    title: 'Mandamus, Prohibition, Certiorari & Quo Warranto',
    points: [
      'Mandamus compelling a public authority to perform a statutory duty',
      'Prohibition and certiorari against subordinate courts, tribunals, and authorities acting beyond jurisdiction',
      'Quo warranto challenging illegal appointment to a public office',
    ],
  },
]

const whyIssues = [
  'Violation of fundamental rights guaranteed under Part III of the Constitution',
  'Arbitrary or illegal action by government departments and statutory authorities',
  'Illegal detention or custody',
  'Public interest matters affecting a class of citizens',
  'Service-related grievances not covered by tribunal jurisdiction',
  'Challenging orders of subordinate courts, tribunals, and authorities',
]

const jurisdiction = [
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Writ petitions under Article 226 for matters arising within the Bench’s jurisdiction, argued from our chambers at Block D-311.',
  },
  {
    title: 'Allahabad High Court, Prayagraj (Principal Seat)',
    blurb:
      'Matters that fall within the jurisdiction of the Principal Seat rather than the Lucknow Bench.',
  },
  {
    title: 'Departmental & Statutory Authorities',
    blurb:
      'Representations before the concerned authority at the pre-writ stage, where an alternative remedy must first be exhausted.',
  },
  {
    title: 'Supreme Court of India',
    blurb:
      'Article 32 petitions and special leave matters, in appropriate cases.',
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
    icon: Briefcase,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
  },
]

const constitutionalInsights = [
  {
    icon: Landmark,
    title: 'What Is a Writ Petition Under Article 226?',
    excerpt:
      'Article 226 empowers the High Court to issue writs for the enforcement of fundamental rights and for any other legal right, against the State, public authorities, and in appropriate cases, private bodies.',
  },
  {
    icon: Scale,
    title: 'What Are the Five Types of Writs?',
    excerpt:
      'Habeas corpus, mandamus, prohibition, certiorari, and quo warranto — each addresses a different kind of illegality, from unlawful detention to a public authority exceeding its powers.',
  },
  {
    icon: Megaphone,
    title: 'When Can I File a Public Interest Litigation?',
    excerpt:
      'A PIL is appropriate where the issue affects the public at large or a class of citizens rather than a single individual, and courts have relaxed the ordinary rule of standing to allow such petitions.',
  },
  {
    icon: Briefcase,
    title: 'Can a Writ Be Filed for a Service Matter?',
    excerpt:
      'Yes — where a dispute falls outside a service tribunal’s jurisdiction, or challenges the tribunal’s own order, a writ petition under Article 226 before the High Court remains available.',
  },
]

export default async function ConstitutionalWritMattersPage() {
  const constitutionalBlogPosts = await getBlogPostsByCategory('Constitutional & Writ Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(constitutionalJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(constitutionalFaqJsonLd) }}
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
                Constitutional Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Constitutional &amp; <em className="text-gold-gradient">Writ Matters</em>
            </h1>
            <p className="mx-auto max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Representation in writ petitions, Public Interest Litigation,
              and fundamental rights matters under Article 226 before the
              Allahabad High Court, Lucknow Bench.
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
              Article 226 of the Constitution gives the High Court wide power
              to issue writs against the State, public authorities, and, in
              appropriate cases, private bodies — for the enforcement of
              fundamental rights and any other legal right. Sumanjari &amp;
              Co. Advocates advises and represents individuals, groups, and
              institutions in writ petitions, PILs, and fundamental rights
              matters before the Allahabad High Court, Lucknow Bench.
            </p>
            <p>
              Whether the matter involves illegal detention, arbitrary action
              by a government department, a service dispute outside tribunal
              jurisdiction, or an issue of public importance, we prepare each
              petition with careful attention to maintainability, alternative
              remedy, and the relief available under Article 226.
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
              Types of Constitutional &amp; Writ Matters We Handle
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
                We begin with a confidential review of the facts and the order
                or action under challenge, and advise clearly on
                maintainability, alternative remedy, and the relief available.
                Where a writ is the right course, we draft and file the
                petition promptly, seek interim relief where warranted, and
                represent you through to final hearing before the Allahabad
                High Court, Lucknow Bench.
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
                Constitutional Law <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our
                constitutional and writ practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {constitutionalInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={constitutionalBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Constitutional & Writ Blogs"
            description="Short reads on writ remedies and constitutional law practice."
            viewAllHref={`/blog?category=${encodeURIComponent('Constitutional & Writ Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Considering a Writ Petition?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your writ petition, PIL, or
              fundamental rights matter — practising before the Allahabad
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
