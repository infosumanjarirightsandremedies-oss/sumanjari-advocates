import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Laptop,
  Lock,
  ShieldAlert,
  AlertTriangle,
  Smartphone,
  Scale,
  Siren,
  Landmark,
  Gavel,
  ShieldCheck,
  MessageSquareWarning,
  ScrollText,
  FileX,
  Phone,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceBlogs from '@/components/ServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const cyberCrimeLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const cyberCrimeTeam = ['jitendra-tiwari', 'abhishek-mishra']
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
  title: 'Cyber Crime Lawyer in Lucknow | IT Act, Cyber Fraud & Bank Freeze Cases',
  description:
    'Sumanjari & Co. Advocates handles cyber crime complaints, cyber thana matters, IT Act prosecutions, bank account freeze/unfreeze applications, cyber fraud bail, and sextortion cases in Lucknow and before the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Cyber Crime Lawyer Lucknow',
    'Cyber Crime Complaint Lucknow',
    'Cyber Thana Lucknow',
    'Cyber Fraud Advocate Lucknow High Court',
    'Cyber Law Advocate Uttar Pradesh',
    'Bank Account Freeze Lawyer',
    'Bank Account Unfreeze Lawyer',
    'IT Act Case Lawyer Lucknow',
    'Sextortion Complaint Lawyer',
    'Cyber Fraud Bail Lawyer Lucknow',
    'Cyber Crime Advocate Lucknow',
  ],
  alternates: {
    canonical: '/services/cyber-crime-lawyer',
  },
  openGraph: {
    title: 'Cyber Crime Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Cyber crime complaints, bank account freeze/unfreeze matters, IT Act prosecution and defence, and cyber fraud bail before the Allahabad High Court, Lucknow Bench.',
    url: '/services/cyber-crime-lawyer',
  },
}

const cyberCrimeJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Cyber Crime Matters',
  url: `${SITE_URL}/services/cyber-crime-lawyer`,
  description:
    'Representation in cyber crime complaints, cyber thana proceedings, IT Act prosecutions, bank account freeze and unfreeze applications, sextortion and online harassment matters, and cyber fraud bail, before the police, District & Sessions Courts, and the Allahabad High Court, Lucknow Bench.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Cyber Crime & IT Act Legal Services',
}

const matters = [
  {
    icon: Laptop,
    title: 'Cyber Crime Complaints & Cyber Thana Proceedings',
    points: [
      'Filing and follow-up of complaints on the National Cyber Crime Reporting Portal and at the Cyber Thana, Lucknow',
      'Drafting representations to the Cyber Cell and nodal police officers for timely action on online fraud, hacking, and impersonation',
      'Liaising with investigating officers through the complaint and investigation stage',
    ],
  },
  {
    icon: Lock,
    title: 'Bank Account Freeze & Unfreeze Matters',
    points: [
      'Advice and representation where a bank account is frozen on a cyber crime complaint or police request under Section 35 of the IT Act',
      'Applications before the investigating officer, bank nodal office, and Magistrate for defreezing/unfreezing of wrongly or disproportionately frozen accounts',
      'Representation for account holders who are third parties to the underlying fraud but whose accounts are frozen in the process',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'Cyber Fraud & Financial Scams',
    points: [
      'UPI, net-banking, OTP, and card fraud complaints, and recovery of siphoned funds where possible',
      'Investment, loan-app, and job-fraud scam complaints and representation',
      'Coordination with banks and payment intermediaries on fraud-reporting timelines',
    ],
  },
  {
    icon: AlertTriangle,
    title: 'Sextortion & Online Harassment',
    points: [
      'Confidential representation in sextortion, blackmail, and morphed-image/video extortion complaints',
      'Complaints for online stalking, impersonation, and harassment on social media and messaging platforms',
      'Takedown requests for unlawful content under the IT Act and intermediary guidelines',
    ],
  },
  {
    icon: ScrollText,
    title: 'IT Act Prosecution & Defence',
    points: [
      'Prosecution and defence in offences under the Information Technology Act, 2000 — including Sections 66, 66C, 66D, 66E, and 67',
      'Defence in cases of identity theft, cheating by personation using a computer resource, and publication of obscene material',
      'Advice on compliance for businesses and intermediaries under the IT Act and IT Rules',
    ],
  },
  {
    icon: Gavel,
    title: 'Cyber Fraud Bail & Quashing',
    points: [
      'Regular and anticipatory bail in cyber crime and IT Act cases before the Magistrate, Sessions Court, and High Court',
      'Petitions under Section 528 BNSS for quashing of FIRs and cyber crime proceedings',
      'Challenging chargesheets filed in cyber crime investigations',
    ],
  },
]

const whyIssues = [
  'Unauthorised bank transactions and account freezing',
  'Hacking, phishing, and identity theft',
  'Sextortion, blackmail, and online harassment',
  'Defamatory or obscene content online',
  'Bail and anticipatory bail in cyber crime FIRs',
  'Compliance advisory for businesses and intermediaries',
]

const jurisdiction = [
  {
    title: 'Cyber Thana & Cyber Cell, Lucknow',
    blurb:
      'Filing and follow-up of complaints, representations for account unfreezing, and coordination with investigating officers.',
  },
  {
    title: 'Local Police Stations',
    blurb:
      'Complaints where the underlying offence — fraud, extortion, harassment — also falls within ordinary police jurisdiction.',
  },
  {
    title: 'Magistrate & Sessions Courts, Lucknow',
    blurb:
      'Bail applications, trial, and account-defreezing applications arising from cyber crime investigations.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Anticipatory bail, FIR quashing, and writ remedies in cyber crime and IT Act matters, argued from our chambers at Block D-311.',
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
    icon: Siren,
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

const cyberCrimeInsights = [
  {
    icon: Lock,
    title: 'How to Unfreeze a Bank Account',
    excerpt:
      'A bank account is often frozen on the direction of an investigating officer once it is linked, even remotely, to a cyber fraud complaint. An application before the IO, the bank nodal office, or the Magistrate — supported by proof of the legitimate source of funds — is usually the fastest route to defreezing.',
  },
  {
    icon: Smartphone,
    title: 'Where to File a Cyber Crime Complaint in Lucknow',
    excerpt:
      'Complaints can be filed on the National Cyber Crime Reporting Portal (cybercrime.gov.in), the 1930 helpline for financial fraud, or in person at the Cyber Thana, Lucknow — the choice of channel can affect how quickly funds are traced and frozen.',
  },
  {
    icon: AlertTriangle,
    title: 'What to Do If You Receive a Sextortion Threat',
    excerpt:
      'Do not make any payment or engage with the sender. Preserve screenshots, chat logs, and payment demands, and report immediately through the Cyber Thana or the national portal — early reporting significantly improves the chance of tracing the offender.',
  },
  {
    icon: ScrollText,
    title: 'Common Offences Under the IT Act, 2000',
    excerpt:
      'Sections 66, 66C, 66D, and 66E cover hacking, identity theft, cheating by personation, and violation of privacy, while Section 67 addresses publishing or transmitting obscene material in electronic form — each carries distinct penal consequences.',
  },
  {
    icon: Gavel,
    title: 'Can You Get Bail in a Cyber Fraud Case?',
    excerpt:
      'Bail in cyber fraud and IT Act matters depends on the gravity of the offence, the amount involved, and the accused\u2019s role — regular and anticipatory bail applications are considered by the Magistrate, Sessions Court, and the Allahabad High Court on the usual bail parameters.',
  },
]

const cyberCrimeFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I unfreeze a bank account frozen in a cyber crime case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An application is filed before the investigating officer, the bank\u2019s nodal office, or the Magistrate, supported by proof of the legitimate source of the frozen funds — this is the usual route to defreezing an account linked to a cyber fraud complaint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where can I file a cyber crime complaint in Lucknow?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complaints can be filed on the National Cyber Crime Reporting Portal, through the 1930 financial-fraud helpline, or in person at the Cyber Thana, Lucknow.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if I receive a sextortion threat?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Avoid any payment or further engagement with the sender, preserve all evidence such as screenshots and chat logs, and report the matter promptly through the Cyber Thana or the national cyber crime portal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I get bail in a cyber fraud or IT Act case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Regular and anticipatory bail in cyber fraud and IT Act matters are considered by the Magistrate, Sessions Court, and the Allahabad High Court, Lucknow Bench, based on the gravity of the offence, amount involved, and the accused\u2019s role.',
      },
    },
    {
      '@type': 'Question',
      name: 'What offences fall under the IT Act, 2000?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Common offences include hacking (Section 66), identity theft (Section 66C), cheating by personation using a computer resource (Section 66D), violation of privacy (Section 66E), and publishing obscene material in electronic form (Section 67).',
      },
    },
  ],
}

export default async function CyberCrimeLawyerAdvocatePage() {
  const cyberCrimeBlogPosts = await getBlogPostsByCategory('Cyber Crime Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cyberCrimeJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(cyberCrimeFaqJsonLd) }}
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

          <div className="mb-16 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-12 bg-gold-500" />
                <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                  Cyber Law
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
                Cyber Crime <em className="text-gold-gradient">Lawyer & Advocate</em>
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Cyber crime complaints, bank account freeze &amp; unfreeze
                matters, IT Act prosecution and defence, and cyber fraud bail
                — before the Cyber Thana, Lucknow, and the Allahabad High
                Court, Lucknow Bench, led by Adv. Aishwarya Pandey.
              </p>
              <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {cyberCrimeLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {cyberCrimeLead.img && (
                  <Image src={cyberCrimeLead.img} alt={cyberCrimeLead.name} width={252} height={288} sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: cyberCrimeLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Cyber Crime Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{cyberCrimeLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{cyberCrimeLead.role}</p>
                <Link href={`/team/${cyberCrimeLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <section className="mb-16" aria-labelledby="cyber-crime-team">
            <h2 id="cyber-crime-team" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Cyber Crime Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aishwarya Pandey leads our cyber crime practice alongside
              Adv. Jitendra Tiwari and Adv. Abhishek Mishra. Each profile
              below sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={cyberCrimeTeam} label="Cyber crime team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Cyber crime cases move fast, and a delay of even a few hours in
              reporting online fraud can mean the difference between
              recovering siphoned funds and losing them permanently.
              Sumanjari &amp; Co. Advocates advises and represents victims
              and accused persons alike — from filing a complaint at the
              Cyber Thana or on the National Cyber Crime Reporting Portal,
              through investigation, bail, and trial under the Information
              Technology Act, 2000.
            </p>
            <p>
              Whether you need to report online fraud, apply to unfreeze a
              bank account linked to a cyber crime complaint, respond to a
              sextortion threat, or defend an IT Act prosecution, we handle
              the matter with the discretion and urgency it requires —
              representing you before the police, the District &amp;
              Sessions Courts, and in appropriate cases, the Allahabad High
              Court, Lucknow Bench.
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
              Types of Cyber Crime Matters We Handle
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
                We act without delay once instructed — filing or responding
                to complaints, applying for account unfreezing where funds
                have been wrongly held, and preparing bail applications and
                a considered defence strategy. Where warranted, we pursue
                quashing, anticipatory bail, or appeal before the Allahabad
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
                Cyber Law <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions clients bring to us — drawn from our cyber
                crime practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {cyberCrimeInsights.map(({ icon: Icon, title, excerpt }) => (
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
            posts={cyberCrimeBlogPosts}
            fallbackIcon={<FileX className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Cyber Crime Blogs"
            description="Short reads on cyber crime complaints, bank account freezing, and IT Act cases."
            viewAllHref={`/blog?category=${encodeURIComponent('Cyber Crime Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Cyber Crime Matter?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your cyber crime complaint, frozen
              bank account, IT Act case, or cyber fraud bail — practising
              before the Cyber Thana, Lucknow, and the Allahabad High
              Court, Lucknow Bench.
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
