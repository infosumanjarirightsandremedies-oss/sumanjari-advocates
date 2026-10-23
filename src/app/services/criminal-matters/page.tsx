import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  FileX,
  KeyRound,
  Gavel,
  Scale,
  Banknote,
  ShieldAlert,
  Laptop,
  Landmark,
  ShieldCheck,
  MessageSquareWarning,
  ClipboardX,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { criminalStages, criminalStatutes, criminalToc } from '@/lib/guides/criminalLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const criminalLead = teamMembers.find((member) => member.slug === 'aditya-narayan-shukla')
const criminalTeam = ['jitendra-tiwari', 'abhishek-mishra', 'shishir-pandey', 'priyesh-dwivedi']
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
  title: { absolute: 'Criminal Lawyer in Lucknow | Bail & FIR Quashing | Sumanjari' },
  description:
    'Criminal lawyer in Lucknow: stage-by-stage guide from FIR and bail to trial and appeal before the Civil Court, Kaiserbagh and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Criminal Lawyer in Lucknow',
    'Criminal Lawyer Lucknow',
    'Bail Lawyer Lucknow',
    'Anticipatory Bail Lawyer Lucknow',
    'FIR Quashing Lawyer Lucknow',
    'Criminal Defence Lawyer Lucknow',
    'Criminal Advocate Lucknow',
    'Bail Advocate Lucknow',
    'Cheque Bounce Lawyer Lucknow',
    'Section 138 NI Act Lawyer Lucknow',
    '498A Lawyer Lucknow',
    'Criminal Appeal Lawyer Lucknow',
    'BNSS Lawyer Lucknow',
    'Cybercrime Lawyer Lucknow',
    'Police Notice Legal Advice Lucknow',
    'Criminal Summons Lawyer Lucknow',
    'Section 528 BNSS Lawyer Lucknow',
    'Section 482 CrPC Quashing Lucknow',
    'Anticipatory Bail Lucknow High Court',
    'Sessions Court Lucknow Lawyer',
  ],
  alternates: {
    canonical: '/services/criminal-lawyer-lucknow',
  },
  openGraph: {
    title: 'Criminal Lawyer in Lucknow | Bail & FIR Quashing | Sumanjari & Co.',
    description:
      'Consult a criminal lawyer in Lucknow for bail, FIR quashing, trial defence, and appeals before the District & Sessions Courts and the Allahabad High Court, Lucknow Bench.',
    url: '/services/criminal-lawyer-lucknow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Criminal Lawyer in Lucknow | Bail & FIR Quashing',
    description: 'Advice on police notices, arrest, bail, FIR quashing, trial defence and criminal appeals in Lucknow.',
  },
}

const criminalMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Criminal Lawyer in Lucknow',
  url: `${SITE_URL}/services/criminal-lawyer-lucknow`,
  description:
    'Strategic criminal defence covering FIR quashing, bail and anticipatory bail, trial representation, appeals and revisions, cheque bounce, domestic violence and 498A matters, and cybercrime, before the District & Sessions Courts and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Criminal Lawyer Services',
}

const criminalBreadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 3, name: 'Criminal Lawyer in Lucknow', item: `${SITE_URL}/services/criminal-lawyer-lucknow` },
  ],
}

const matters = [
  {
    icon: FileX,
    title: 'FIR & Chargesheet Quashing Petitions',
    points: [
      'Petitions under Section 528 BNSS (the inherent powers provision, formerly Section 482 CrPC) to quash an FIR or criminal proceeding',
      'Quashing on grounds of abuse of process, or on the basis of a settlement in compoundable and certain non-compoundable offences',
      'Challenging a chargesheet and the order taking cognizance after investigation, with the chargesheet and cognizance order placed on record as required by the Allahabad High Court',
    ],
  },
  {
    icon: KeyRound,
    title: 'Bail Matters',
    points: [
      'Regular bail applications before the Magistrate, Sessions Court, and High Court',
      'Anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC)',
      'Interim bail and applications for suspension of sentence pending appeal',
    ],
  },
  {
    icon: Gavel,
    title: 'Criminal Trial Defence',
    points: [
      'Defence representation in Sessions and Magistrate Court trials',
      'Cross-examination strategy, evidence review, and witness preparation',
    ],
  },
  {
    icon: Scale,
    title: 'Criminal Appeals & Revisions',
    points: [
      'Appeals against conviction, acquittal, or sentence before the Sessions Court and High Court',
      'Revision petitions against eligible orders, subject to statutory restrictions; purely interlocutory orders are ordinarily excluded',
    ],
  },
  {
    icon: Banknote,
    title: 'Cheque Bounce Cases (Section 138 NI Act)',
    points: [
      'Complaints for dishonour of cheque, including statutory notice and follow-up proceedings',
      'Defence in cheque bounce prosecutions, and negotiated compounding of the offence',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Domestic Violence & 498A Matters',
    points: [
      'Representation in complaints of cruelty under Section 85 BNS (formerly Section 498A IPC)',
      'Anticipatory bail, quashing, and defence in matrimonial cruelty proceedings',
    ],
  },
  {
    icon: Laptop,
    title: 'Cybercrime & Other Offences',
    points: [
      'Representation in cybercrime complaints, including online fraud and harassment',
      'Defence and prosecution support in white-collar and other special-statute offences',
    ],
  },
]

const whyIssues = [
  'Arrest, police remand, and judicial custody',
  'Grant of bail — regular, anticipatory, and interim',
  'Quashing of FIRs and criminal proceedings',
  'Trial strategy and defence in serious offences',
  'Cheque bounce and other financial offence complaints',
  'Appeals, revisions, and suspension of sentence',
]

const jurisdiction = [
  {
    title: 'Police Stations & Investigation Stage',
    blurb:
      'Advice from the point of an FIR or complaint, including representation on arrest, remand, and custody applications.',
  },
  {
    title: 'Magistrate & Sessions Courts, Lucknow',
    blurb:
      'Bail applications and trial representation before the Magistrate and Sessions Courts.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'FIR quashing, anticipatory bail, appeals, and revisions, arguing from our chambers at Block D-311.',
  },
  {
    title: 'Special & Fast-Track Courts',
    blurb:
      'Matters before special courts constituted for NI Act, NDPS, and other special-statute offences.',
  },
]

const criminalInsights = [
  {
    icon: ShieldAlert,
    title: 'What should I do after an arrest or police notice in Lucknow?',
    excerpt:
      'Do not ignore a police notice or court summons. Preserve it, note the FIR number and police station, and seek advice about the required response. If arrested, ask for the grounds of arrest and access to a lawyer, and request that a relative or friend be informed. Do not destroy evidence or attempt to influence witnesses.',
  },
  {
    icon: KeyRound,
    title: 'What is the difference between regular and anticipatory bail?',
    excerpt:
      'Regular bail is sought after arrest or surrender. Anticipatory bail under Section 482 BNSS is a request to the Sessions Court or High Court for release on bail in the event of arrest for a non-bailable offence. Availability, conditions, and restrictions depend on the allegations and applicable law; neither an application nor a consultation guarantees protection.',
  },
  {
    icon: FileX,
    title: 'Can the Allahabad High Court, Lucknow Bench quash an FIR?',
    excerpt:
      'The High Court can consider quashing where the legal grounds justify intervention, for example where the allegations do not disclose an offence or the proceedings amount to an abuse of process. The petition route depends on the stage and relief sought. Territorial jurisdiction must also be checked. A settlement does not automatically end a case, particularly one involving serious offences.',
  },
  {
    icon: Banknote,
    title: 'Can a bounced cheque lead to a criminal complaint?',
    excerpt:
      'Yes, if the requirements of Section 138 of the Negotiable Instruments Act are met, including a legally enforceable debt or liability, a timely demand notice, and non-payment within the statutory period. Bring the cheque, bank return memo, notice, delivery proof, and transaction records so limitation and available defences can be checked.',
  },
  {
    icon: ClipboardX,
    title: 'Can proceedings be challenged after a chargesheet is filed?',
    excerpt:
      'Filing a chargesheet does not by itself rule out a challenge. Depending on the record, a lawyer may assess discharge before the trial court or quashing under Section 528 BNSS, formerly Section 482 CrPC. The chargesheet, cognizance or summoning order, and subsequent orders should be reviewed together. Quashing is an exceptional remedy, not a substitute for a disputed factual trial.',
  },
  {
    icon: Landmark,
    title: 'Do BNS and BNSS apply to an older criminal case?',
    excerpt:
      'BNS, BNSS, and BSA came into force on 1 July 2024, subject to notified exceptions and transitional provisions. The date of the alleged offence and whether an investigation or proceeding was already pending matter. Older cases may continue under IPC, CrPC, or the Indian Evidence Act where the relevant savings provisions apply; the correct provisions must be checked case by case.',
  },
  {
    icon: ScrollText,
    title: 'How much does a criminal lawyer in Lucknow charge?',
    excerpt:
      'Fees depend on the work required, court, urgency, volume of records, and stage of proceedings. Ask for the scope of drafting, filing, appearances, and consultation to be explained, with court expenses and other outlays distinguished from professional fees. A bail application, full trial, and High Court petition involve different work; discuss an estimate after the papers are reviewed.',
  },
  {
    icon: Gavel,
    title: 'How long will bail or a criminal case take?',
    excerpt:
      'There is no reliable fixed timeline for every case. Listing, the court roster, prosecution response, custody status, evidence, and any special statute affect progress. A lawyer can explain the next procedural steps after reviewing the case but cannot promise same-day bail, a particular hearing date, or acquittal.',
  },
  {
    icon: ShieldCheck,
    title: 'How should I choose a criminal advocate in Lucknow?',
    excerpt:
      'Check the advocate\'s relevant practice areas, experience with the court and type of proceeding, and who will handle drafting and appearances. Ask for an assessment of risks, communication arrangements, and fee scope. Be cautious of anyone promising bail, quashing, or a favourable judgment; the decision belongs to the court.',
  },
  {
    icon: Scale,
    title: 'What is the difference between a writ petition and a Section 528 BNSS application at the Lucknow Bench?',
    excerpt:
      'A writ petition under Article 226 is typically used to challenge an FIR or restrain arrest while investigation is still pending, and is heard on constitutional grounds. An application under Section 528 BNSS (formerly Section 482 CrPC) is the ordinary route once a chargesheet, summoning order, or other proceeding exists, invoking the High Court\'s inherent powers to prevent abuse of process. The right remedy depends on the stage the case has reached.',
  },
  {
    icon: KeyRound,
    title: 'Is anticipatory bail available in Uttar Pradesh?',
    excerpt:
      'Yes. Anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC) is available in Uttar Pradesh, though the remedy was withdrawn by the state from 1976 and restored only when the CrPC (Uttar Pradesh Amendment) Act, 2018 took effect in June 2019. Applications can be made to the Sessions Court at the Civil Court, Kaiserbagh, or to the Allahabad High Court, Lucknow Bench.',
  },
  {
    icon: Gavel,
    title: 'Which court in Lucknow hears my bail application first?',
    excerpt:
      'This depends on the offence and the stage of the case. Bail for offences within Magistrate jurisdiction is usually sought from the Magistrate at the Civil Court, Kaiserbagh; for graver offences, the Sessions Court and, in appropriate cases, the Allahabad High Court, Lucknow Bench have concurrent jurisdiction. Ordinarily, the Sessions Court is approached before the Lucknow Bench, though urgent circumstances can justify approaching the High Court directly.',
  },
  {
    icon: ShieldAlert,
    title: 'Can a matrimonial (BNS s.85 / 498A) FIR be quashed after settlement?',
    excerpt:
      'The Allahabad High Court, Lucknow Bench can quash proceedings under Section 528 BNSS where parties to a matrimonial dispute have genuinely settled, applying the principles in Gian Singh v. State of Punjab (2012). Quashing is more readily granted where the dispute is predominantly civil or matrimonial in nature and less so in cases involving grave or non-compoundable allegations. Our divorce and matrimonial settlement practice can help document the terms of any settlement.',
  },
  {
    icon: Landmark,
    title: 'What happens if the police do not register my FIR in Lucknow?',
    excerpt:
      'If a police station refuses to register an FIR for a cognizable offence, a written complaint can be made to the Deputy Commissioner of Police under Section 173(4) BNSS. If that does not help, an application can be filed before the Magistrate at the Civil Court, Kaiserbagh under Section 175(3) BNSS (formerly Section 156(3) CrPC), supported by an affidavit, directing the police to register and investigate the complaint.',
  },
]

const criminalFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: criminalInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: excerpt,
    },
  })),
}

export default async function CriminalMattersPage() {
  const criminalBlogPosts = getBlogPostsByCategory('Criminal Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(criminalMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(criminalFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(criminalBreadcrumbJsonLd) }}
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
                Criminal Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Criminal Lawyers <em className="text-gold-gradient">in Lucknow</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Facing an FIR, a police notice, or an arrest in Lucknow?
              Our criminal lawyers and advocates advise on regular and anticipatory
              bail, FIR and chargesheet quashing, criminal trial defence,
              and appeals before the District &amp; Sessions Courts, Lucknow,
              and the Allahabad High Court, Lucknow Bench.
            </p>
            <p className="mt-4 max-w-2xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              In Lucknow, a criminal case usually moves from FIR or complaint at a police station under the Lucknow Police Commissionerate, through bail and remand before the Magistrate and Sessions Courts at the Civil Court, Kaiserbagh, to trial and appeal. Quashing, anticipatory bail and appeals can be taken to the Allahabad High Court, Lucknow Bench at Gomti Nagar. The ten stages below explain each step.
            </p>
            <ServiceStats service="criminal" />
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {criminalLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {criminalLead.img && (
                  <Image src={criminalLead.img} alt={criminalLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: criminalLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Criminal Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{criminalLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{criminalLead.role}</p>
                <Link href={`/team/${criminalLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={criminalToc} />

          <section className="mb-16" aria-labelledby="criminal-team">
            <h2 id="criminal-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Criminal Law Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aditya Narayan Shukla leads our criminal law practice alongside
              Adv. Jitendra Tiwari, Adv. Abhishek Mishra, Adv. Shishir Pandey and
              Adv. Priyesh Dwivedi. Each profile below sets out that member&apos;s
              individual practice areas.
            </p>
            <TeamCarousel members={criminalTeam} label="Criminal law team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              A criminal case can move quickly, and the steps taken in the
              first few days — at the time of an FIR, arrest, or notice —
              often shape the outcome. Sumanjari &amp; Co. Advocates advises
              and represents individuals from the investigation stage through
              trial, appeal, and revision, under the Bharatiya Nyaya Sanhita
              (BNS), the Bharatiya Nagarik Suraksha Sanhita (BNSS), and the
              Bharatiya Sakshya Adhiniyam (BSA).
            </p>
            <p>
              Whether the matter involves an FIR you wish to have quashed, a
              bail application, a criminal trial, or an appeal against
              conviction or acquittal, we prepare each case with careful
              attention to evidence, procedure, and strategy — and represent
              you with the same care before the District &amp; Sessions
              Courts and in appeal before the Allahabad High Court, Lucknow
              Bench.
            </p>
          </div>

          <div id="forums" className="mb-16 scroll-mt-28">
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
            id="statutory-framework"
            heading="Statutory Framework: BNS, BNSS & BSA"
            intro="The codes and special statutes that govern a criminal case moving through Lucknow's police stations, the Civil Court at Kaiserbagh, and the Allahabad High Court, Lucknow Bench."
            rows={criminalStatutes}
          />

          <p className="-mt-10 mb-16 max-w-3xl font-body text-sm leading-relaxed text-navy-700 dark:text-cream/55">
            BNS, BNSS and BSA apply from 1 July 2024. FIRs and proceedings begun earlier generally continue under the IPC, CrPC and Evidence Act per Section 531 BNSS. The date of the offence and of registration decide which code applies.
          </p>

          <div id="matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of Criminal Matters We Handle
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
                We move quickly once instructed — reviewing the FIR, charge
                sheet, or notice, and advising you clearly on your rights and
                the options available at that stage. We prepare bail
                applications without delay, build a considered defence
                strategy for trial, and are fully prepared to pursue quashing,
                appeal, or revision before the Allahabad High Court, Lucknow
                Bench, where warranted.
              </p>
            </div>
          </div>

          <section className="mb-16 grid gap-10 scroll-mt-28 md:grid-cols-2" id="documents" aria-labelledby="criminal-consultation">
            <div>
              <h2 id="criminal-consultation" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">
                Documents to Bring to a Criminal Lawyer
              </h2>
              <p className="mb-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
                Bring what is available; do not delay seeking advice about an
                arrest or imminent hearing just because the file is incomplete.
              </p>
              <ul className="list-disc space-y-3 pl-5 font-body text-navy-800 dark:text-cream/75">
                <li>FIR or complaint, police station details, and the case number.</li>
                <li>Police notices, summons, warrants, and the next hearing date.</li>
                <li>Arrest or remand papers and any earlier bail applications or orders.</li>
                <li>Chargesheet, witness statements, and court orders, if available.</li>
                <li>A dated account of events, relevant medical or financial records, and original electronic messages or files without alteration.</li>
              </ul>
            </div>
            <div>
              <h2 className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">
                What We Assess at the First Consultation
              </h2>
              <p className="mb-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
                We review your role in the case, the alleged offences, custody
                status, earlier orders, and immediate deadlines. This helps
                distinguish a bail application from a discharge request,
                quashing petition, trial defence, or appeal. The court with
                jurisdiction must be identified before selecting a remedy.
              </p>
              <p className="mb-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
                Ask about the proposed scope of work, professional fees,
                filing expenses, and who will appear. For matters involving
                electronic evidence, see our{' '}
                <Link href="/services/cyber-crime-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">cybercrime legal services</Link>.
                {' '}Related matrimonial issues are covered in our{' '}
                <Link href="/services/family-advocate" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">family and matrimonial practice</Link>.
              </p>
              <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
                This page provides general information, not advice on an
                individual case. Relief depends on the facts, applicable law,
                and the court; no result or timeline is guaranteed.
              </p>
            </div>
          </section>

          <GuideStages
            id="criminal-procedure"
            heading="Criminal Case Procedure in Lucknow: Stage 1 to Stage 10"
            intro="How a criminal case actually moves through Lucknow's police stations, the Civil Court at Kaiserbagh and the Allahabad High Court, Lucknow Bench, with the BNSS provisions that govern each step."
            stages={criminalStages}
          />

          <div className="glass-card mb-16 rounded-sm border border-gold-500/20 p-6 md:p-8">
            <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">Track B: Cheque Bounce (Section 138 NI Act) in Lucknow</h3>
            <p className="mb-3 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              A cheque-bounce complaint follows its own track outside the ten stages above. After the bank returns a cheque unpaid, a legal notice must be sent within 30 days of the return memo, demanding payment within 15 days. If payment is not made, the complaint must be filed before a Magistrate court at the Civil Court, Lucknow within one month after that window closes, under Section 142 of the Negotiable Instruments Act.
            </p>
            <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">
              The court can order interim compensation of up to 20% of the cheque amount under Section 143A, and an appellant against conviction must ordinarily deposit at least 20% of the compensation or fine awarded under Section 148 before the appeal is heard. The offence is compoundable, and many disputes settle once notice is served.
            </p>
          </div>

          <div id="faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Criminal Lawyer in Lucknow: <em className="text-gold-gradient">FAQs</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our criminal
                law practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {criminalInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <section aria-labelledby="criminal-notice-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="criminal-notice-review" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">Received a Police Notice, Summons or FIR?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">The next step depends on whether you are a complainant, witness, accused person or someone apprehending arrest. Share the complete notice or FIR, offence details, police station, hearing or attendance date and any existing order. Do not ignore a summons or assume that filing a quashing petition protects you from arrest; protection requires an applicable legal provision or a court order. Bail, anticipatory bail and quashing serve different purposes and require separate assessment.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Prepare the record without compromising evidence</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Preserve the chronology, original messages, medical records, transaction documents and previous applications. Do not delete records or approach witnesses to influence their account. We examine the offence date, procedural stage and transitional provisions before deciding whether the BNS, BNSS and Bharatiya Sakshya Adhiniyam or earlier legislation governs the issue. For electronic evidence and account restrictions, see our <Link href="/services/cyber-crime-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">cybercrime legal services</Link>.</p>
          </section>

          <ServiceBlogs
            posts={criminalBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Criminal Matters Blogs"
            description="Short reads on bail, criminal defence, and trial procedure."
            viewAllHref={`/blog?category=${encodeURIComponent('Criminal Matters')}`}
          />

          <div id="contact" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Criminal Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your FIR, bail, trial, or appeal —
              practising before the District &amp; Sessions Courts and the
              Allahabad High Court, Lucknow Bench.
            </p>
            <ConsultationActions className="flex justify-center" />
          </div>
        </div>
      </section>

      <FirmCredentials />
      <Footer />
    </main>
  )
}
