import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowUpRight,
  Phone,
  Landmark,
  Gavel,
  Scale,
  ShieldCheck,
  Briefcase,
  HeartHandshake,
  Users,
  MapPin,
  Laptop,
  Banknote,
  Building2,
  FileWarning,
  ShieldHalf,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideToc } from '@/components/LucknowGuide'
import { FIRM_BACKGROUND, FIRM_CREDENTIALS } from '@/lib/firm'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const PAGE_PATH = '/law-firm-in-lucknow'
const lucknowTeam = teamMembers.filter((member) => member.office === 'lucknow')
const firmLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')

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
  title: { absolute: 'Law Firm in Lucknow | Sumanjari & Co. Advocates' },
  description:
    'Sumanjari & Co. Advocates is a law firm in Lucknow handling civil, criminal, family, property, cyber crime, service, tax, RERA and banking matters before the Civil Court, Family Court, and the Allahabad High Court, Lucknow Bench.',
  keywords: [
    'Law Firm in Lucknow',
    'Law Firm Lucknow',
    'Advocates in Lucknow',
    'Lucknow Advocates Office',
    'Legal Services Lucknow',
    'Law Office Gomti Nagar',
    'Law Firm Kaiserbagh',
  ],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Law Firm in Lucknow | Sumanjari & Co. Advocates',
    description:
      'A second-generation law firm in Lucknow handling civil, criminal, family, property, cyber crime, service, tax, RERA and banking matters.',
    url: PAGE_PATH,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Law Firm in Lucknow | Sumanjari & Co. Advocates',
    description: 'Civil, criminal, family, property, cyber crime, service, tax, RERA and banking matters in Lucknow.',
  },
}

const practiceAreas = [
  { icon: Gavel, title: 'Criminal Lawyer in Lucknow', href: '/services/criminal-lawyer-lucknow' },
  { icon: Scale, title: 'Civil Lawyer in Lucknow', href: '/services/civil-lawyer-lucknow' },
  { icon: HeartHandshake, title: 'Divorce Lawyer in Lucknow', href: '/services/divorce-lawyer-lucknow' },
  { icon: Landmark, title: 'High Court Lawyer in Lucknow', href: '/services/high-court-lawyer-lucknow' },
  { icon: Building2, title: 'Property Lawyer in Lucknow', href: '/services/property-lawyer-lucknow' },
  { icon: Laptop, title: 'Cyber Crime Lawyer in Lucknow', href: '/services/cyber-crime-lawyer-lucknow' },
  { icon: Briefcase, title: 'Service Lawyer in Lucknow', href: '/services/service-lawyer-lucknow' },
  { icon: FileWarning, title: 'Tax Lawyer in Lucknow', href: '/services/tax-lawyer-lucknow' },
  { icon: Banknote, title: 'Banking & Recovery Matters', href: '/services/banking-recovery-lawyer-lucknow' },
  { icon: Building2, title: 'Company & Corporate Matters', href: '/services/company-corporate-lawyer-lucknow' },
  { icon: ShieldCheck, title: 'Consumer & Motor Accident Matters', href: '/services/consumer-motor-accident-lawyer-lucknow' },
  { icon: Scale, title: 'Constitutional & Writ Matters', href: '/services/constitutional-writ-lawyer-lucknow' },
  { icon: HeartHandshake, title: 'Family & Matrimonial Matters', href: '/services/family-advocate' },
  { icon: Users, title: 'NRI Legal Services', href: '/services/nri-lawyer' },
  { icon: Building2, title: 'RERA Advocate & Real Estate Lawyer', href: '/services/rera-lawyer-lucknow' },
  { icon: ShieldHalf, title: 'Armed Forces Tribunal & Mining Matters', href: '/services/armed-forces-tribunal-mining-lawyer-lucknow' },
]

const faqs = [
  { question: 'What does Sumanjari & Co. Advocates handle as a law firm in Lucknow?', answer: 'We handle civil, criminal, family and matrimonial, property, cyber crime, service and employment, tax and revenue, RERA, banking recovery (DRT), company and corporate, constitutional and writ, and consumer and motor accident matters before the Civil Court, the Family Court, and the Allahabad High Court, Lucknow Bench.' },
  { question: 'Where is your Lucknow chamber located?', answer: 'Our chamber is at Block D-311, Allahabad High Court, Lucknow Bench, Vibhuti Khand, Gomti Nagar, Lucknow. We also appear before the Civil Court, Kaiserbagh and the Family Court on Wala Qadar Road, Qaiserbagh, depending on the matter.' },
  { question: 'Which courts do you appear before in Lucknow?', answer: 'Our advocates appear before the Allahabad High Court, Lucknow Bench, the Civil Court at Kaiserbagh (Civil Judge, Sessions Court, and District Judge), the Family Court, Lucknow, the Commercial Court, Lucknow, and before UP-RERA, consumer commissions, and tribunals seated in Lucknow.' },
  { question: 'Do you only practice in Lucknow, or also elsewhere in Uttar Pradesh and NCR?', answer: 'Our Lucknow team practises across Uttar Pradesh, including the districts under the Allahabad High Court, Lucknow Bench, and the Principal Seat at Prayagraj. We also have advocates handling matters in Delhi NCR; see our team directory for each advocate\'s specific courts and locations.' },
  { question: 'How do I book a consultation with your Lucknow team?', answer: 'You can call or WhatsApp the chamber directly, or use the contact form on this site. Share a brief description of your matter and relevant documents so the right advocate can be identified for an initial consultation.' },
  { question: 'Do you handle cases for NRIs connected to Lucknow?', answer: 'Yes. We assist non-resident Indians with property, inheritance, power of attorney, and family matters connected to Lucknow and Uttar Pradesh, including representation where personal appearance is difficult. See our NRI legal services page for details.' },
  { question: 'What should I bring to a first consultation?', answer: 'Bring identity and address proof, any notices, FIRs, orders, contracts, or correspondence relevant to your matter, and a brief written chronology if possible. Each practice area page on this site lists the specific documents useful for that type of case.' },
  { question: 'Can I consult your Lucknow team remotely?', answer: 'Yes, where travel is impractical, an initial consultation can usually be arranged by phone or video call. Certain filings, affidavits, and hearings still require personal appearance, a properly executed vakalatnama, or original documents, which we flag early so there are no surprises.' },
  { question: 'Do you represent both individuals and businesses?', answer: 'Yes. We act for individuals and families in personal matters such as divorce, property, and criminal defence, and for businesses and professionals in commercial, employment, tax, and regulatory matters, each handled by the advocate whose practice area matches the dispute.' },
  { question: 'How are professional fees decided?', answer: 'Fees depend on the scope of work, the forum, the complexity of the matter, and whether representation is for a single hearing, full litigation, or ongoing advisory work. We explain the proposed scope and fee arrangement after reviewing the matter, kept separate from court fees and other expenses.' },
  { question: 'Can I be connected with a specific advocate for my matter?', answer: 'Yes. Each advocate\'s profile in our team directory lists their individual practice areas and the courts they appear before. After an initial review of your matter, we connect you with the advocate whose experience best matches it.' },
]

const forums = [
  { icon: Landmark, title: 'Allahabad High Court, Lucknow Bench', blurb: 'Writ petitions, bail and quashing applications, and civil, criminal, family and service appeals, argued from our chambers at Block D-311, Gomti Nagar.' },
  { icon: Scale, title: 'Civil Court, Kaiserbagh', blurb: 'Civil Judge (Junior/Senior Division), Sessions Court and District Judge — recovery suits, bail, criminal trials, and first appeals.' },
  { icon: HeartHandshake, title: 'Family Court, Lucknow', blurb: 'Divorce, maintenance, custody and guardianship matters before the Principal Judge and Additional Principal Judges, Qaiserbagh.' },
  { icon: Briefcase, title: 'Commercial Court, Lucknow', blurb: 'Commercial disputes of specified value under the Commercial Courts Act, 2015, including mandatory pre-institution mediation.' },
  { icon: Building2, title: 'Revenue Courts & UP-RERA', blurb: 'Tehsildar, SDM, Commissioner (Lucknow Division) and the Board of Revenue for agricultural land; UP-RERA and its Appellate Tribunal for builder-buyer disputes.' },
  { icon: Banknote, title: 'DRT, Consumer Commission & Tribunals', blurb: 'Debts Recovery Tribunal, the District Consumer Disputes Redressal Commission, and special courts and tribunals seated in Lucknow.' },
]

const whoWeServe = [
  { title: 'Individuals & Families', text: 'Advice on divorce, custody, maintenance, inheritance, criminal complaints, and property disputes, with attention to the practical and financial consequences of each option.' },
  { title: 'Businesses & Professionals', text: 'Contract disputes, recovery suits, company and partnership matters, employment and service issues, and compliance before regulators and tribunals in Lucknow.' },
  { title: 'NRIs & Overseas Clients', text: 'Representation in property, inheritance, and family matters connected to Lucknow and Uttar Pradesh, with remote coordination where personal appearance is not practical.' },
  { title: 'Government & Public Bodies', text: 'Defence and advisory work in writ proceedings, service matters, and statutory references before the Lucknow Bench and district forums.' },
]

const approachSteps = [
  { title: 'Confidential Consultation', text: 'We begin by understanding the facts, documents and objectives, and flag any urgent steps needed before the next hearing or deadline.' },
  { title: 'Case Assessment & Strategy', text: 'We review the applicable law, the correct forum, and the realistic options, and explain the risks and the scope of work before proceeding.' },
  { title: 'Drafting & Filing', text: 'Pleadings, applications and supporting documents are prepared with attention to procedure, limitation and the specific requirements of the forum concerned.' },
  { title: 'Representation & Follow-Up', text: 'We appear at hearings, track orders and deadlines, and keep clients informed at each stage, through to resolution, execution or appeal where necessary.' },
]

const toc = [
  { id: 'about', label: 'About the Firm' },
  { id: 'offices', label: 'Our Offices in Lucknow' },
  { id: 'forums', label: 'Courts & Forums We Appear Before' },
  { id: 'practice-areas', label: 'Practice Areas We Handle in Lucknow' },
  { id: 'who-we-serve', label: 'Who We Represent' },
  { id: 'approach', label: 'Our Approach to Representation' },
  { id: 'team', label: 'Our Lucknow Team' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Speak to Our Lucknow Team' },
]

const structuredData = [
  {
    '@context': 'https://schema.org', '@type': 'LegalService',
    name: 'Sumanjari & Co. Advocates — Law Firm in Lucknow',
    url: `${SITE_URL}${PAGE_PATH}`,
    description: metadata.description,
    telephone: CHAMBER_TEL.replace('tel:', ''),
    email: 'info.sumanjarirightsandremedies@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Chamber No. Block D – 311, Allahabad High Court, Lucknow Bench, Vibhuti Khand, Gomti Nagar',
      addressLocality: 'Lucknow',
      addressRegion: 'Uttar Pradesh',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'State', name: 'Uttar Pradesh' },
    ],
    serviceType: 'Law Firm Legal Services',
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Law Firm in Lucknow', item: `${SITE_URL}${PAGE_PATH}` },
    ],
  },
]

export default async function LawFirmInLucknowPage() {
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
          <div className="mb-12 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <div className="mb-4 flex items-center gap-4">
                <div className="h-px w-12 bg-gold-500" />
                <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                  Lucknow, Uttar Pradesh
                </span>
                <div className="h-px w-12 bg-gold-500" />
              </div>
              <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
                Law Firm <em className="text-gold-gradient">in Lucknow</em>
              </h1>
              <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Sumanjari &amp; Co. Advocates is {FIRM_BACKGROUND}, practising civil, criminal, family, property, cyber crime, service, tax, RERA and banking matters before the Civil Court, the Family Court, and the Allahabad High Court, Lucknow Bench.
              </p>
              <p className="mt-4 max-w-2xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
                Our chamber is at Block D-311 inside the Lucknow Bench complex at Gomti Nagar. Below is an overview of the firm, our Lucknow team, and every practice area we handle, each linking to a detailed guide.
              </p>
              <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {firmLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {firmLead.img && (
                  <Image src={firmLead.img} alt={firmLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: firmLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Managing Partner</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{firmLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{firmLead.role}</p>
                <Link href={`/team/${firmLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <GuideToc items={toc} />

          <section id="about" className="mb-16 scroll-mt-28">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">About the Firm</h2>
            <div className="mb-8 grid grid-cols-3 gap-4 sm:gap-6">
              {FIRM_CREDENTIALS.map(({ value, label }) => (
                <div key={label} className="glass-card rounded-sm border border-gold-500/20 p-4 text-center dark:border-gold-500/15 sm:p-6">
                  <p className="font-display text-2xl font-bold text-gold-700 dark:text-gold-400 sm:text-3xl">{value}</p>
                  <p className="mt-1 font-body text-xs text-navy-700/85 dark:text-cream/60 sm:text-sm">{label}</p>
                </div>
              ))}
            </div>
            <div className="space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              <p>
                Sumanjari &amp; Co. Advocates is {FIRM_BACKGROUND}. The firm advises individuals, families and businesses on contentious and non-contentious matters, with advocates based in Lucknow and in Delhi NCR covering connected forums.
              </p>
              <p>
                Our Lucknow advocates appear before the Civil Court at Kaiserbagh, the Family Court, Lucknow, and the Allahabad High Court, Lucknow Bench, and coordinate with revenue courts, tribunals, and special courts seated in the city where a matter requires it.
              </p>
              <p>
                As a second-generation practice, the firm combines long-standing courtroom experience with advocates handling newer areas such as cyber crime, RERA, and company law, so a client&apos;s matter is not handled generically but by the advocate whose practice area matches the dispute. The <Link href="/our-journey" className="text-gold-700 underline dark:text-gold-400">story behind the firm&apos;s name</Link> explains the values that continue to guide how we work.
              </p>
              <p>
                We do not take on a matter without first explaining the realistic options, the forum involved, and the likely scope of work. Clients are kept informed between hearings, not only before and after them, and every engagement begins with a clear understanding of fees and expenses before work starts.
              </p>
            </div>
          </section>

          <section id="offices" className="mb-16 scroll-mt-28">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Our Offices in Lucknow</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">Chamber, Allahabad High Court, Lucknow Bench</h3>
                </div>
                <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">Block D-311, Vibhuti Khand, Gomti Nagar, Lucknow — for writs, bail, quashing, and civil, criminal, family and service appeals before the Lucknow Bench.</p>
              </div>
              <div className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                <div className="mb-3 flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">Civil Court & Family Court, Kaiserbagh</h3>
                </div>
                <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">We appear before the Civil Judge, Sessions Court and District Judge at the Civil Court, Kaiserbagh, and before the Family Court on Wala Qadar Road, Qaiserbagh, for trial-stage matters.</p>
              </div>
            </div>
          </section>

          <section id="forums" className="mb-16 scroll-mt-28">
            <h2 className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Courts & Forums We Appear Before</h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Which forum hears a matter depends on the subject and its value. The table below is an overview; each practice-area page above explains the specific forum for that dispute in more detail.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {forums.map(({ icon: Icon, title, blurb }) => (
                <div key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <div className="mb-3 flex items-center gap-2">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                    <h3 className="font-display text-base font-bold text-navy-900 dark:text-cream">{title}</h3>
                  </div>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{blurb}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="practice-areas" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Practice Areas We Handle in Lucknow</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {practiceAreas.map(({ icon: Icon, title, href }) => (
                <Link
                  key={title}
                  href={href}
                  className="glass-card flex items-center gap-3 rounded-sm border border-gold-500/20 p-4 transition-colors hover:border-gold-500/50 dark:border-gold-500/15"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <span className="font-body text-sm font-semibold text-navy-800 dark:text-cream/80">{title}</span>
                </Link>
              ))}
            </div>
          </section>

          <section id="who-we-serve" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Who We Represent</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {whoWeServe.map(({ title, text }) => (
                <div key={title} className="border-l-2 border-gold-500/50 pl-5">
                  <h3 className="mb-2 font-display text-lg font-bold text-navy-900 dark:text-cream">{title}</h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{text}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="approach" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">Our Approach to Representation</h2>
            <ol className="space-y-7">
              {approachSteps.map(({ title, text }, index) => (
                <li key={title} className="flex gap-4 sm:gap-6">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-gold-500/40 font-caps text-sm text-gold-700 dark:text-gold-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{title}</h3>
                    <p className="font-body leading-relaxed text-navy-700 dark:text-cream/60">{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section id="team" className="mb-16 scroll-mt-28" aria-labelledby="lucknow-team-heading">
            <h2 id="lucknow-team-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Lucknow Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Each advocate below handles a defined set of practice areas; visit a profile for their individual experience and the courts they appear before.
            </p>
            <TeamCarousel members={lucknowTeam} label="Lucknow team members" />
          </section>

          <section id="faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">From Our Desk</span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Law Firm in Lucknow: <em className="text-gold-gradient">FAQs</em>
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

          <div id="contact" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Speak to Our Lucknow Team
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Tell us about your matter and we will connect you with the advocate best suited to your practice area.
            </p>
            <ConsultationActions className="flex justify-center" />
            <p className="mx-auto mt-8 max-w-2xl font-body text-xs leading-relaxed text-navy-700 dark:text-cream/55">
              This page provides general information, not legal advice for a specific case. No case outcome or timeline is guaranteed.
            </p>
          </div>
        </div>
      </section>

      <FirmCredentials />
      <Footer />
    </main>
  )
}
