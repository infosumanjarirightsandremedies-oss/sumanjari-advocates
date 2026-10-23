import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
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
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideToc, GuideStages, StatuteTable } from '@/components/LucknowGuide'
import { familyLucknowStages, familyLucknowToc, familyLucknowStatutes } from '@/lib/guides/familyLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const familyLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const familyTeam = ['akhilesh-yadav', 'prerna-yaduvanshi']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

function ConsultationActions({ className }: { className: string }) {
  return (
    <div className={`flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      <a href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-900 sm:px-8 sm:text-sm sm:tracking-widest">
        Consult Now
      </a>
      <a href={CHAMBER_TEL} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-500/40 px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-300 sm:px-6 sm:text-sm sm:tracking-widest">
        <Phone aria-hidden="true" className="h-4 w-4 shrink-0" /> Call Now
      </a>
    </div>
  )
}

export const metadata: Metadata = {
  title: { absolute: 'Family Advocate & Lawyer in Lucknow | Sumanjari & Co.' },
  description:
    'Consult a family lawyer or family advocate in Lucknow for custody, maintenance, divorce and domestic violence matters. Led by Adv. Aishwarya Pandey.',
  keywords: [
    'Family Advocate Lucknow',
    'Family Advocate & Lawyer in Lucknow',
    'Aishwarya Pandey Family Lawyer',
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
    'Child Visitation Lawyer Lucknow',
    'Interim Maintenance Legal Advice Lucknow',
  ],
  alternates: {
    canonical: '/services/family-advocate',
  },
  openGraph: {
    title: 'Family Advocate & Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in divorce, child custody, maintenance, domestic violence, and matrimonial disputes before the Family Court and Allahabad High Court, Lucknow Bench.',
    url: '/services/family-advocate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Advocate & Lawyer in Lucknow',
    description: 'Divorce, child custody, maintenance and domestic violence representation led by Adv. Aishwarya Pandey at Sumanjari & Co. Advocates.',
  },
}

const familyServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/services/family-advocate#legal-service`,
  name: 'Sumanjari & Co. Advocates — Family Advocate & Lawyer in Lucknow',
  url: `${SITE_URL}/services/family-advocate`,
  description:
    'Representation in divorce, maintenance, child custody, domestic violence protection, restitution of conjugal rights, and succession disputes before the Family Court, District Courts, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Family & Matrimonial Legal Services',
  employee: familyLead ? {
    '@type': 'Person',
    name: familyLead.name,
    jobTitle: 'Family Law Practice Lead',
    url: `${SITE_URL}/team/${familyLead.slug}`,
  } : undefined,
}

const familyBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Family Advocate & Lawyer in Lucknow', item: `${SITE_URL}/services/family-advocate` },
  ],
}

const matters = [
  {
    icon: HeartCrack,
    title: 'Divorce & Matrimonial Disputes',
    href: '/services/divorce-lawyer-lucknow',
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
      'Interim and ongoing maintenance under Section 144 BNSS, subject to eligibility and applicable transitional provisions',
      'Interim support and permanent alimony under the Hindu Marriage Act; maintenance under the Hindu Adoptions and Maintenance Act',
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
      'Representation in connected matrimonial cruelty proceedings under Sections 85 and 86 BNS, or Section 498A IPC where applicable',
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
      'There is no fixed percentage that applies to every case. Courts consider income, assets, reasonable needs, dependants, the marital standard of living, and existing support orders. Section 144 BNSS provides maintenance for eligible wives, children, and parents; permanent alimony under Section 25 of the Hindu Marriage Act is a separate remedy. The applicable provision depends on the parties and facts.',
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
      'Depending on the facts, a Magistrate can grant protection orders under Section 18, residence orders under Section 19, monetary relief under Section 20, temporary custody under Section 21, and compensation under Section 22 of the Protection of Women from Domestic Violence Act, 2005. Interim or ex parte relief may be sought under Section 23. If there is immediate danger, contact the police or emergency services first.',
  },
  {
    icon: Landmark,
    title: 'Can I File a Family Case in Lucknow?',
    excerpt:
      'Living in Lucknow does not automatically give every court jurisdiction. For a Hindu Marriage Act petition, Section 19 considers factors such as where the marriage took place, where the respondent resides, and where the spouses last lived together; additional rules apply, including where a wife petitioner resides. Maintenance, domestic violence, and guardianship proceedings have their own jurisdiction rules. We assess the correct forum before filing.',
  },
  {
    icon: ScrollText,
    title: 'What Documents Should I Bring to a Family Lawyer?',
    excerpt:
      'Bring identity and address records, any marriage certificate or other available proof of marriage, a dated account of events, notices, and existing petitions or orders. For maintenance, include available income, asset, liability, and expense records. For custody, include birth, schooling, medical, and care records. Preserve relevant messages in their original form and obtain evidence lawfully. Missing documents can be discussed at the first consultation.',
  },
  {
    icon: HeartHandshake,
    title: 'Is Mediation Suitable for Every Family Dispute?',
    excerpt:
      'Mediation can help parties agree on financial support, parenting arrangements, and settlement terms, but settlement must be voluntary. Safety concerns, coercion, or urgent protection needs may require court relief first. A divorce still requires a court decree, and criminal proceedings cannot all be ended by a private agreement. Each connected case needs the legally appropriate disposal process.',
  },
  {
    icon: HandCoins,
    title: 'What Does a Family Court Case Cost in Lucknow?',
    excerpt:
      'Fees depend on the remedy, complexity, documents, contested issues, and stages of representation. Ask for the scope of work and fee terms before engaging counsel, including whether consultation, drafting, appearances, mediation, appeals, court fees, and other expenses are included. No single quoted amount can reliably cover every family dispute.',
  },
  {
    icon: Scale,
    title: 'How Long Does a Family Court Case Take?',
    excerpt:
      'Timing depends on service of notice, cooperation, interim applications, evidence, court workload, and any appeal. Under Section 13B of the Hindu Marriage Act, mutual consent divorce ordinarily requires at least one year of living separately and a six-month interval between motions; waiver of that interval is discretionary where legal conditions are met. Contested cases have no guaranteed completion date. Urgent interim relief can be assessed separately.',
  },
  {
    icon: Baby,
    title: 'Are Inheritance Disputes Also Decided by the Family Court?',
    excerpt:
      'Not every dispute between relatives belongs in the Family Court. Succession certificates, probate, inheritance, and partition disputes may require a different court or procedure depending on the relief and applicable law. A succession certificate generally concerns debts and securities, not ownership of immovable property. We distinguish these remedies from matrimonial and custody proceedings before recommending the next step.',
  },
]

const familyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: familyInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: excerpt,
    },
  })),
}

export default async function FamilyMatrimonialServicePage() {
  const familyBlogPosts = getBlogPostsByCategory('Family & Matrimonial Matters')

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(familyBreadcrumbJsonLd) }}
      />

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
                Family Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Family Advocate &amp; Lawyer <em className="text-gold-gradient">in Lucknow</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our family lawyers and advocates provide representation in Lucknow,
              led by Adv. Aishwarya Pandey, for divorce, child custody, maintenance,
              and matrimonial disputes — before the Family Court, District Courts,
              and the Allahabad High Court, Lucknow Bench.
            </p>
            <ServiceStats service="family" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {familyLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {familyLead.img && (
                  <Image src={familyLead.img} alt={familyLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: familyLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Family Law Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{familyLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{familyLead.role}</p>
                <Link href={`/team/${familyLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={familyLucknowToc} />

          <section className="mb-16" aria-labelledby="family-team">
            <h2 id="family-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Family Law Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aishwarya Pandey leads our family and matrimonial practice in Lucknow,
              supported by Adv. Akhilesh Yadav in family matters. Adv. Prerna Yaduvanshi,
              based in Delhi, handles matrimonial disputes, domestic violence, maintenance
              and child custody matters. Each profile sets out the advocate&apos;s practice areas and location.
            </p>
            <TeamCarousel members={familyTeam} label="Family law team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Family Law Advice and Family Court Representation in Lucknow
            </h2>
            <p>
              A family dispute may involve several decisions at once: financial
              support while a case is pending, where a child will live, access to
              the shared home, or whether a marriage can be reconciled or legally
              dissolved. Our family lawyers in Lucknow help identify the remedy
              for each issue, the documents needed, and the court that can grant
              relief. We advise people bringing claims and those responding to
              petitions, notices, or existing orders.
            </p>
            <p>
              The governing law matters. Matrimonial remedies may arise under the
              Hindu Marriage Act, 1955, the Special Marriage Act, 1954, or other
              applicable personal law. The Family Courts Act, 1984 governs the
              jurisdiction and procedure of Family Courts, but not every dispute
              between relatives belongs there. We assess maintenance, protection,
              custody, and property issues separately instead of treating divorce
              as the only solution. For dissolution of marriage, see our{' '}
              <Link href="/services/divorce-lawyer-lucknow" className="font-semibold text-gold-700 underline underline-offset-4 dark:text-gold-400">
                divorce lawyer in Lucknow
              </Link>{' '}
              page for mutual consent and contested divorce guidance.
            </p>
            <p>
              For parents, advice can include interim custody, visitation,
              schooling, holidays, and child-support arrangements. For financial
              disputes, we review income and expense records and existing awards
              before recommending an application or response. Where safety is at
              risk, urgent protection may take priority over settlement. A
              negotiated agreement must be voluntary, workable, and followed by
              the court orders or other legal steps required in each proceeding.
            </p>
            <p className="text-sm">
              This page is general legal information, not advice on a particular
              case. Outcomes and timelines depend on the facts and applicable law.
              Statutory texts are available through{' '}
              <a href="https://www.indiacode.nic.in/" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">
                India Code
              </a>; case status and cause lists can be checked through{' '}
              <a href="https://services.ecourts.gov.in/" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">
                eCourts Services
              </a>.
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
              {matters.map(({ icon: Icon, title, points, href }) => (
                <div
                  key={title}
                  className={`glass-card relative rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15 ${href ? 'transition-colors hover:border-gold-500/60 focus-within:ring-2 focus-within:ring-gold-500' : ''}`}
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">
                    {href ? (
                      <a href={href} className="inline-flex items-center gap-2 focus:outline-none">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {title}
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" />
                      </a>
                    ) : title}
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

          <StatuteTable
            id="family-statutes"
            heading="Family Law: Personal Law, Relief and the Correct Forum"
            intro="Matrimonial, maintenance, custody and protection proceedings are distinct tracks. The governing marriage law, eligibility, territorial jurisdiction, existing orders and current local court practice determine the appropriate route; no single statute applies to every family."
            rows={familyLucknowStatutes}
          />

          <GuideStages
            id="family-procedure"
            heading="Six Stages of Planning Family Proceedings"
            intro="The appropriate sequence depends on safety, urgent support, child welfare and the relief sought. Mediation can assist suitable cases, but neither settlement nor a final order can be guaranteed."
            stages={familyLucknowStages}
          />

          <section id="family-documents" aria-labelledby="family-documents-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="family-documents-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">First-Consultation Checklist</h2>
            <p className="mb-4 font-body leading-relaxed text-navy-700 dark:text-cream/70">Prepare a factual account of the relationship, the immediate issue and the orders needed. Identify missing documents without delaying advice on an urgent safety, support or child-related concern.</p>
            <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              <li>Marriage documents, relevant personal-law details, identity and residence records, and a chronology of important events.</li>
              <li>All petitions, complaints, summons, interim orders and settlements, including connected or overseas proceedings and proof of payments already made.</li>
              <li>Income, tax, bank, asset and liability records, essential household expenses, and any existing financial-disclosure affidavit.</li>
              <li>For children: schooling, medical needs, caregiving routines, expenses, existing contact arrangements and specific safety or travel concerns.</li>
              <li>Relevant original communications and lawfully obtained evidence. For overseas participation, include travel constraints and any authority documents; video attendance requires the court&apos;s permission.</li>
            </ul>
          </section>

          <div className="mb-16">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Family Lawyers in Lucknow: <em className="text-gold-gradient">Frequently Asked Questions</em>
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

          <section aria-labelledby="family-interim-relief-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="family-interim-relief-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Planning Custody, Visitation and Interim Support</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Family proceedings may require workable interim arrangements before a final decision. For custody and access, prepare a child-focused account of schooling, health, daily care, safety and existing contact arrangements. The child&apos;s welfare is central; neither parent should assume custody follows automatically from gender, income or allegations. We assess requests for interim custody, visitation, communication and travel in light of the record and any existing order.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Financial disclosure and connected cases</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring income and asset records, bank statements, essential household and child-related expenses, marriage records and every pending maintenance or protection order. Disclose overlapping proceedings so relief and payments can be addressed consistently; support is not calculated by one universal percentage. Divorce, maintenance, domestic violence and guardianship may involve different provisions and forums. For marriage dissolution and settlement planning, see our <Link href="/services/divorce-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">divorce lawyer page</Link>.</p>
          </section>

          <ServiceBlogs
            posts={familyBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Family & Matrimonial Blogs"
            description="Short reads on divorce, custody, and matrimonial disputes."
            viewAllHref={`/blog?category=${encodeURIComponent('Family & Matrimonial Matters')}`}
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

      <FirmCredentials />
      <Footer />
    </main>
  )
}
