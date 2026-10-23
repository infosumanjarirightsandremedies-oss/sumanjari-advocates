import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Landmark,
  Megaphone,
  ShieldCheck,
  Briefcase,
  Unlock,
  Scale,
  MessageSquareWarning,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { constitutionalStages, constitutionalStatutes, constitutionalToc } from '@/lib/guides/constitutionalLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const constitutionalLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const constitutionalTeam = ['abhishek-mishra', 'priyesh-dwivedi', 'adarsh-pratap-singh', 'devesh-tiwari']
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
  title: { absolute: 'Writ Petition Lawyer in Lucknow | Article 226 | Sumanjari' },
  description:
    'Writ petition lawyer and constitutional advocate in Lucknow for Article 226, PIL and administrative orders before Allahabad High Court, Lucknow Bench.',
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
    'Administrative Order Challenge Lucknow',
    'Writ Maintainability Legal Advice',
  ],
  alternates: {
    canonical: '/services/constitutional-writ-lawyer-lucknow',
  },
  openGraph: {
    title: 'Constitutional & Writ Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in writ petitions, PIL, and fundamental rights matters under Article 226 before the Allahabad High Court, Lucknow Bench.',
    url: '/services/constitutional-writ-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Writ Petition Lawyer in Lucknow | Article 226',
    description: 'Advice on writ maintainability, public authority decisions, fundamental rights and PIL before the Lucknow Bench.',
  },
}

const constitutionalJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Constitutional & Writ Matters',
  url: `${SITE_URL}/services/constitutional-writ-lawyer-lucknow`,
  description:
    'Representation in writ petitions under Article 226, Public Interest Litigation, fundamental rights matters, and service-related writs, before the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Constitutional & Writ Legal Services',
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
      'Prohibition and certiorari where maintainable against tribunals and public authorities acting beyond jurisdiction',
      'Supervisory challenges to civil-court judicial orders under Article 227 where justified, distinct from Article 226 certiorari',
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
      'Habeas corpus addresses unlawful detention; mandamus concerns performance of a public legal duty; prohibition restrains a proceeding exceeding jurisdiction; certiorari may quash an unlawful tribunal or public-authority decision; and quo warranto tests entitlement to a public office. Their requirements differ. Judicial orders of civil courts are ordinarily considered, where intervention is justified, under Article 227 supervision rather than Article 226 certiorari.',
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
      'A public-service writ may be considered where maintainable, including judicial review of a tribunal decision or a matter outside tribunal coverage. Employer status, the public-law issue, territorial jurisdiction and effective alternative remedies still need assessment. A private employment dispute does not automatically qualify for a writ, and an available statutory remedy cannot be bypassed as of right.',
  },
]

const constitutionalFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: constitutionalInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: excerpt,
    },
  })),
}

export default async function ConstitutionalWritMattersPage() {
  const constitutionalBlogPosts = getBlogPostsByCategory('Constitutional & Writ Matters')

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

          <div className="mb-12 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
            <div className="mb-4 flex items-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                Constitutional Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Constitutional &amp; <em className="text-gold-gradient">Writ Matters</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our writ petition lawyers and constitutional advocates in Lucknow represent clients in
              Public Interest Litigation and fundamental rights matters under Article 226 before the
              Allahabad High Court, Lucknow Bench.
            </p>
            <ServiceStats service="writ" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {constitutionalLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {constitutionalLead.img && (
                  <Image src={constitutionalLead.img} alt={constitutionalLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: constitutionalLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Constitutional Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{constitutionalLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{constitutionalLead.role}</p>
                <Link href={`/team/${constitutionalLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={constitutionalToc} />

          <section className="mb-16" aria-labelledby="constitutional-team">
            <h2 id="constitutional-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Constitutional &amp; Writ Matters Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aishwarya Pandey leads the constitutional practice
              assessment, supported by advocates with recorded experience in
              PIL, civil rights and High Court litigation. Case allocation
              depends on the subject matter and forum.
            </p>
            <TeamCarousel members={constitutionalTeam} label="Constitutional and writ team members" />
          </section>

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
              remedy, and the relief available under Article 226. For a
              step-by-step look at how a case moves through the Lucknow
              Bench — from filing to judgment and appeal — see our{' '}
              <Link href="/services/high-court-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">High Court lawyer in Lucknow guide</Link>.
            </p>
          </div>

          <div id="constitutional-forums" className="mb-16 scroll-mt-28">
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

          <StatuteTable
            id="constitutional-statutory-framework"
            heading="Constitutional and Procedural Framework"
            intro="Article 226 writs and Article 227 supervision are distinct. The challenged action, respondent, territorial connection and statutory remedies determine the available route; current High Court rules and directions must be checked for filing and further challenge."
            rows={constitutionalStatutes}
          />

          <div id="constitutional-matters" className="mb-16 scroll-mt-28">
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

          <GuideStages
            id="constitutional-procedure"
            heading="Writ and Supervisory Matters: Seven Practical Stages"
            intro="The route depends on the decision and the jurisdiction invoked. These stages cover maintainability, statutory alternatives, the record, filing, interim relief, hearing and compliance. Neither filing nor admission guarantees a stay or the final remedy requested."
            stages={constitutionalStages}
          />

          <div id="constitutional-faqs" className="mb-16 scroll-mt-28">
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

          <section aria-labelledby="writ-maintainability-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="writ-maintainability-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Can Your Administrative Order Be Challenged by Writ?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">A writ petition is not an automatic alternative to a statutory appeal or a civil suit. We examine whether the respondent is amenable to writ jurisdiction, whether an effective alternative remedy exists, delay in approaching the court, and whether the cause of action falls within the Lucknow Bench&apos;s territorial allocation. Questions of natural justice, jurisdiction and fundamental rights may affect maintainability, but the facts and applicable law must support the chosen remedy.</p>
            <h3 id="constitutional-documents" className="mb-2 scroll-mt-28 font-display text-xl font-bold text-navy-900 dark:text-cream">Records needed for a writ consultation</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Share the complete challenged order, its communication date, notices, your replies and representations, supporting records and previous proceedings. Identify the public authority, the action requested and any urgent consequence. For PIL, disclose the public injury, your interest and prior approaches to the authorities; a private grievance does not become a public-interest case merely by its label. For employment orders, see our <Link href="/services/service-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">service law practice</Link>.</p>
          </section>

          <ServiceBlogs
            posts={constitutionalBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Constitutional & Writ Blogs"
            description="Short reads on writ remedies and constitutional law practice."
            viewAllHref={`/blog?category=${encodeURIComponent('Constitutional & Writ Matters')}`}
          />

          <div id="constitutional-consultation" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
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

      <FirmCredentials />
      <Footer />
    </main>
  )
}
