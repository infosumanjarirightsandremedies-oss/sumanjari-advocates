import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  Landmark,
  Gavel,
  Scale,
  ShieldCheck,
  Briefcase,
  ScrollText,
  MapPin,
  HeartHandshake,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc } from '@/components/LucknowGuide'
import { highCourtStages, highCourtToc, lucknowBenchDistricts } from '@/lib/guides/highCourtLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const PAGE_PATH = '/services/high-court-lawyer-lucknow'
const highCourtLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const highCourtTeam = ['aishwarya-pandey', 'aditya-narayan-shukla', 'priyesh-dwivedi', 'adarsh-pratap-singh', 'devesh-tiwari']
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
  title: { absolute: 'High Court Lawyer in Lucknow | Lucknow Bench Advocates | Sumanjari' },
  description:
    'High Court lawyers in Lucknow for writs, bail, Section 528 BNSS quashing, civil and criminal appeals and service matters at the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'High Court Lawyer Lucknow',
    'Lucknow Bench Advocate',
    'Allahabad High Court Lucknow Bench Lawyer',
    'High Court Advocate Gomti Nagar',
    'Writ Petition Lawyer Lucknow High Court',
    'Bail Lawyer Lucknow High Court',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'High Court Lawyer in Lucknow | Lucknow Bench Advocates | Sumanjari & Co.',
    description:
      'Representation in writs, bail, quashing, and civil, criminal and service appeals before the Allahabad High Court, Lucknow Bench at Gomti Nagar.',
    url: PAGE_PATH,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'High Court Lawyer in Lucknow | Lucknow Bench',
    description: 'Writs, bail, quashing, and appeals before the Allahabad High Court, Lucknow Bench.',
  },
}

const matters = [
  { icon: Scale, title: 'Writ Petitions & PIL', text: 'Writ petitions under Article 226/227 for certiorari, mandamus, habeas corpus and quo warranto, and public interest litigation.', href: '/services/constitutional-writ-lawyer-lucknow', linkLabel: 'Constitutional & writ practice' },
  { icon: Gavel, title: 'Criminal Bail, Quashing & Appeals', text: 'Anticipatory and regular bail, Section 528 BNSS quashing of FIRs and chargesheets, and criminal appeals and revisions.', href: '/services/criminal-lawyer-lucknow#stage-7', linkLabel: 'Criminal law practice' },
  { icon: Landmark, title: 'Civil First & Second Appeals', text: 'First appeals, second appeals on substantial questions of law, and Article 227 petitions against civil court orders.', href: '/services/civil-lawyer-lucknow#stage-10', linkLabel: 'Civil litigation practice' },
  { icon: HeartHandshake, title: 'Family Court Appeals', text: 'Appeals from Family Court, Lucknow decrees under Section 19 of the Family Courts Act, 1984.', href: '/services/divorce-lawyer-lucknow#stage-10', linkLabel: 'Divorce & matrimonial practice' },
  { icon: Briefcase, title: 'Service, Tax, RERA & Banking Matters', text: 'Service and departmental appeals, tax and revenue references, RERA appeals before the Appellate Tribunal, and DRT/SARFAESI writs.', href: '/services/service-lawyer-lucknow', linkLabel: 'Service advocate practice' },
  { icon: ShieldCheck, title: 'PIL, Contempt & Arbitration Appeals', text: 'Public interest litigation, contempt petitions for non-compliance with court directions, and appeals under Section 37 of the Arbitration Act.', href: '/services/company-corporate-lawyer-lucknow', linkLabel: 'Company & corporate practice' },
]

const faqs = [
  { question: 'Which High Court bench will hear my case from Sitapur or Barabanki?', answer: 'Districts within the Lucknow Bench\'s jurisdiction — including Sitapur and Barabanki — are ordinarily heard at the Lucknow Bench rather than the Principal Seat at Prayagraj. Confirm the current list of districts under the Lucknow Bench before assuming a specific district is covered, since the list should be verified against the High Court\'s own notification.' },
  { question: 'Can I file directly in the High Court without going to the district court?', answer: 'It depends on the remedy. A writ petition under Article 226 can sometimes be filed directly where no adequate alternative remedy exists, but a civil or criminal appeal ordinarily requires a prior order from the court or authority below. We assess whether the district court, tribunal, or High Court is the correct first forum for a given matter.' },
  { question: 'What is stamp reporting?', answer: 'Stamp reporting is the registry\'s scrutiny of a freshly filed case for court fee, limitation, and compliance with the High Court Rules. Objections raised at this stage, called defects, must be cured within the time allowed; uncured defects can prevent the case from being listed for hearing.' },
  { question: 'How do I check my case status and cause list?', answer: 'Case status, listing dates, and the daily cause list for the Lucknow Bench are published on the Allahabad High Court\'s official website. Tracking the case number there is the most reliable way to confirm the next hearing date.' },
  { question: 'Is video-conference hearing possible at the Lucknow Bench?', answer: 'Video-conference appearance is available in appropriate cases, subject to the High Court\'s practice directions in force at the time. Whether a specific hearing can proceed this way should be confirmed with the registry rather than assumed.' },
  { question: 'What is the difference between a writ and an appeal?', answer: 'A writ petition under Article 226 challenges a decision on constitutional or jurisdictional grounds and is not a routine substitute for an appeal. An appeal challenges a decree or order under a specific statutory right of appeal and can examine the merits of the decision far more broadly. The correct remedy depends on the order under challenge and the statute governing it.' },
  { question: 'What documents do I need for a High Court petition?', answer: 'At minimum, a certified copy of the impugned order, the pleadings and annexures from the proceedings below, identity and address proof, and a vakalatnama. Additional documents depend on the nature of the case — for instance, service records for a service matter, or the chargesheet and bail orders for a criminal matter.' },
  { question: 'How are High Court fees decided?', answer: 'Court fee is calculated on the nature of the relief claimed and, in money or property matters, the valuation of the claim, under the Court Fees Act as applied in Uttar Pradesh. We confirm the applicable fee during drafting so the filing is not held up at the stamp-reporting stage.' },
]

const structuredData = [
  {
    '@context': 'https://schema.org', '@type': 'LegalService',
    name: 'Sumanjari & Co. Advocates — High Court Lawyer in Lucknow',
    url: `${SITE_URL}${PAGE_PATH}`,
    description: metadata.description,
    telephone: '+91-83024-71764',
    email: 'info.sumanjarirightsandremedies@gmail.com',
    areaServed: [
      ...lucknowBenchDistricts.map((name) => ({ '@type': 'AdministrativeArea', name })),
      { '@type': 'State', name: 'Uttar Pradesh' },
    ],
    serviceType: 'High Court Legal Services',
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/#services` },
      { '@type': 'ListItem', position: 3, name: 'High Court Lawyer in Lucknow', item: `${SITE_URL}${PAGE_PATH}` },
    ],
  },
]

export default async function HighCourtLawyerLucknowPage() {
  const highCourtBlogPosts = getBlogPostsByCategory('Constitutional & Writ Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
                  Allahabad High Court, Lucknow Bench
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
                High Court Lawyers <em className="text-gold-gradient">in Lucknow</em>
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Representation before the Allahabad High Court, Lucknow Bench for writ petitions, bail and quashing applications, and civil, criminal, family, service and tax appeals from the Awadh region.
              </p>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
                The Lucknow Bench sits at Vibhuti Khand, Gomti Nagar, and hears cases from sixteen districts of the Awadh region. Our chamber, Block D-311, is in the Bench complex itself. The steps below explain how a case moves from filing to judgment.
              </p>
              <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {highCourtLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {highCourtLead.img && (
                  <Image src={highCourtLead.img} alt={highCourtLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: highCourtLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">High Court Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{highCourtLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{highCourtLead.role}</p>
                <Link href={`/team/${highCourtLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={highCourtToc} />

          <section className="mb-16" aria-labelledby="hc-team">
            <h2 id="hc-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our High Court Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads our High Court practice alongside Adv. Aishwarya Pandey, Adv. Aditya Narayan Shukla, Adv. Priyesh Dwivedi, Adv. Adarsh Pratap Singh and Adv. Devesh Tiwari. Each profile below sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={highCourtTeam} label="High Court team members" />
          </section>

          <section id="about-bench" className="mb-16 scroll-mt-28">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">About the Lucknow Bench</h2>
            <div className="space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              <p>
                The Allahabad High Court, Lucknow Bench traces its origin to the Chief Court of Oudh, which was amalgamated with the Allahabad High Court under the United Provinces High Courts (Amalgamation) Order, 1948, creating the present Lucknow Bench. The Bench now sits in a dedicated campus at Vibhuti Khand, Gomti Nagar, Lucknow, moved from its earlier premises on Faizabad Road.
              </p>
              <p>
                The Oudh Bar Association represents advocates practising at the Lucknow Bench, and the Bench functions as a full-fledged seat of the High Court for the districts within its jurisdiction, hearing writ petitions, criminal and civil appeals, and PIL independently of the Principal Seat at Prayagraj.
              </p>
            </div>
          </section>

          <section id="districts" className="mb-16 scroll-mt-28">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Districts Under the Lucknow Bench</h2>
            <p className="mb-6 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Cases from the following districts of the Awadh region are ordinarily heard at the Lucknow Bench rather than the Principal Seat at Prayagraj. Confirm the current list with the High Court before relying on it for a specific filing.
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {lucknowBenchDistricts.map((district) => (
                <div key={district} className="glass-card flex items-center gap-2 rounded-sm border border-gold-500/20 px-4 py-3 dark:border-gold-500/15">
                  <MapPin className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" />
                  <span className="font-body text-sm text-navy-800 dark:text-cream/75">{district}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/55">
              Residents of the remaining districts of Uttar Pradesh fall under the Principal Seat at Prayagraj. Sumanjari &amp; Co. Advocates also appears there — see our <Link href="/team" className="text-gold-700 underline dark:text-gold-400">team directory</Link> for advocates handling Prayagraj matters.
            </p>
          </section>

          <section id="matters" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Matters We Handle at the Lucknow Bench</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {matters.map(({ icon: Icon, title, text, href, linkLabel }) => (
                <div key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-2 font-display text-lg font-bold text-navy-900 dark:text-cream">{title}</h3>
                  <p className="mb-3 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{text}</p>
                  <Link href={href} className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">{linkLabel} →</Link>
                </div>
              ))}
            </div>
          </section>

          <GuideStages
            id="hc-procedure"
            heading="How a Case Moves at the Lucknow Bench: 8 Steps"
            intro="From certified copies and drafting through filing, listing, and final hearing, to judgment and any further appeal to the Supreme Court."
            stages={highCourtStages}
          />

          <section id="mediation-legal-aid" className="mb-16 scroll-mt-28">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Mediation &amp; Legal Aid at the Lucknow Bench</h2>
            <div className="space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              <p>
                The Lucknow Bench maintains a Mediation and Conciliation Centre for disputes capable of amicable resolution, including certain civil, matrimonial, and commercial matters referred by the court. Settlement through mediation can conclude a long-running appeal faster than contested final hearing, though not every matter is suitable for referral.
              </p>
              <p>
                Litigants who cannot afford representation can approach the High Court Legal Services Sub-Committee, Lucknow Bench, which coordinates free legal aid in eligible cases, working alongside the District Legal Services Authority, Lucknow for matters at the district level.
              </p>
            </div>
          </section>

          <section id="faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">From Our Desk</span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                High Court Lawyer in Lucknow: <em className="text-gold-gradient">FAQs</em>
              </h2>
            </div>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">
              {faqs.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer font-display text-lg font-bold leading-relaxed text-navy-900 transition-colors hover:text-gold-700 focus-visible:outline-gold-500 dark:text-cream dark:hover:text-gold-400">
                    {question}
                  </summary>
                  <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/65">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <ServiceBlogs
            posts={highCourtBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="High Court & Writ Matters Blogs"
            description="Short reads on writs, appeals, and practice before the Allahabad High Court, Lucknow Bench."
            viewAllHref={`/blog?category=${encodeURIComponent('Constitutional & Writ Matters')}`}
          />

          <div id="contact" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Need Representation at the Lucknow Bench?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your writ petition, appeal, bail or quashing application before the Allahabad High Court, Lucknow Bench.
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
