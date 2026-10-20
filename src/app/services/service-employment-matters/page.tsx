import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
  Phone,
  UserSearch,
  TrendingUp,
  Gavel,
  UserX,
  HandCoins,
  Repeat2,
  ShieldAlert,
  Landmark,
  ShieldCheck,
  MessageSquareWarning,
  BookOpen,
  ScrollText,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const serviceLead = teamMembers.find((member) => member.slug === 'jitendra-tiwari')
const serviceTeam = ['aditya-narayan-shukla', 'devesh-tiwari', 'abhishek-mishra']
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
  title: { absolute: 'Service Matter Advocate in Lucknow | Sumanjari & Co.' },
  description:
    'Service matter advocate and employment lawyer in Lucknow for inquiries, suspension, promotion, pay and pension disputes before tribunals and the High Court.',
  keywords: [
    'Service Lawyer Lucknow',
    'Service Matter Advocate Lucknow',
    'Service Tribunal Lawyer Lucknow',
    'Departmental Inquiry Lawyer Lucknow',
    'Wrongful Termination Lawyer Lucknow',
    'Pension Dispute Lawyer Lucknow',
    'Promotion Dispute Lawyer Lucknow',
    'Seniority Dispute Lawyer Lucknow',
    'POSH Act Lawyer Lucknow',
    'Government Employee Lawyer Lucknow',
    'Service Writ Lawyer Allahabad High Court',
    'U.P. Public Services Tribunal Advocate',
    'CAT Lucknow Bench Advocate',
    'Central Administrative Tribunal Lawyer Lucknow',
    'CAT Advocate Lucknow',
    'CGIT Lawyer Lucknow',
    'Industrial Dispute Advocate Lucknow',
    'Central Government Industrial Tribunal Lawyer',
    'CGIT Advocate Lucknow',
    'Armed Forces Tribunal Legal Advice Lucknow',
    'Disciplinary Charge Sheet Reply Lawyer Lucknow',
  ],
  alternates: {
    canonical: '/services/service-advocate',
  },
  openGraph: {
    title: 'Service Matter Advocate in Lucknow | Sumanjari & Co.',
    description:
      'Representation for government, public sector, and private sector employees in service disputes, departmental inquiries, and employment litigation before CAT, the Service Tribunal, CGIT, and the Allahabad High Court, Lucknow Bench.',
    url: '/services/service-advocate',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Matter Advocate in Lucknow | Employment Disputes',
    description: 'Advice on disciplinary inquiries, employment orders, pay, pension and the appropriate tribunal or court remedy.',
  },
}

const serviceMattersJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Sumanjari & Co. Advocates — Service & Employment Matters',
  url: `${SITE_URL}/services/service-advocate`,
  description:
    'Representation for government, public sector, and private sector employees in recruitment disputes, promotion and seniority matters, departmental and disciplinary proceedings, wrongful termination, pension and retirement benefits, and POSH Act compliance and inquiry matters before the Central Administrative Tribunal, U.P. Public Services Tribunal, CGIT, and the Allahabad High Court.',
  telephone: '+91-83024-71764',
  email: 'info.sumanjarirightsandremedies@gmail.com',
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
    { '@type': 'State', name: 'Uttar Pradesh' },
  ],
  serviceType: 'Service & Employment Legal Services',
}

const matters = [
  {
    icon: UserSearch,
    title: 'Recruitment & Selection Disputes',
    points: [
      'Challenging selection irregularities, eligibility disputes, and appointment orders',
      'Representation before the Service Tribunal and High Court in recruitment matters',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Promotion & Seniority Matters',
    points: [
      'Disputes over denial or delay of promotion',
      'Seniority list challenges and departmental promotion committee decisions',
    ],
  },
  {
    icon: Gavel,
    title: 'Departmental & Disciplinary Proceedings',
    points: [
      'Representation on show cause notices and charge sheets',
      'Departmental inquiry proceedings and response to findings',
      'Challenging punishment orders in appeal or revision',
    ],
  },
  {
    icon: UserX,
    title: 'Wrongful Termination & Reinstatement',
    points: [
      'Challenging dismissal, removal, and compulsory retirement orders',
      'Reinstatement claims with back wages and consequential benefits',
      'Suspension-related disputes and subsistence allowance claims',
      'Retrenchment, wrongful dismissal, and wage disputes before CGIT (Central Government Industrial Tribunal-cum-Labour Court)',
    ],
  },
  {
    icon: HandCoins,
    title: 'Pension & Retirement Benefits',
    points: [
      'Pension calculation and delayed disbursal disputes',
      'Family pension, gratuity, and other retiral dues',
    ],
  },
  {
    icon: Repeat2,
    title: 'Transfer, Posting & Service Conditions',
    points: [
      'Review of transfer orders for breach of statutory rules, lack of authority, or mala fides',
      'Pay fixation, withheld increments, salary arrears, and recovery from pay or pension',
      'Disputes concerning allowances, leave, and service-record entries',
    ],
  },
  {
    icon: UserSearch,
    title: 'Compassionate Appointment',
    points: [
      'Review of eligibility, dependency, financial circumstances, and the applicable appointment scheme',
      'Advice on rejected or delayed applications; appointment is not an automatic entitlement',
    ],
  },
  {
    icon: ScrollText,
    title: 'Regularisation & Contractual Employment',
    points: [
      'Assessment of ad hoc, daily-wage, and contractual service against the applicable rules and binding decisions',
      'Review of appointment records, sanctioned posts, and available remedies without assuming a right to regularisation',
    ],
  },
  {
    icon: ShieldAlert,
    title: 'POSH Act Compliance & Inquiry Matters',
    points: [
      'Advice on complaints, replies, evidence, and procedural fairness in Internal Committee inquiries; legal practitioners cannot represent parties in the inquiry under the POSH Rules',
      'Compliance advisory for employers on POSH policy and committee constitution',
    ],
  },
]

const whyIssues = [
  'Denial or delay in promotion and seniority disputes',
  'Suspension, show cause notices, and departmental inquiry proceedings',
  'Wrongful termination, removal, or compulsory retirement',
  'Pension, gratuity, and retirement benefit disputes',
  'Transfer and posting grievances',
  'POSH Act complaints and Internal Committee proceedings',
]

const jurisdiction = [
  {
    title: 'Departmental Authorities',
    blurb:
      'Advice on replies, evidence, departmental appeals, and review petitions. Assistance or representation during an inquiry depends on the applicable service rules and permission requirements.',
  },
  {
    title: 'U.P. Public Services Tribunal',
    blurb:
      'Claims by public servants covered by the U.P. Public Services (Tribunal) Act, 1976. Eligibility, available departmental remedies, and limitation must be checked before filing; not every public-sector post is covered.',
  },
  {
    title: 'Central Administrative Tribunal (CAT), Lucknow Bench',
    blurb:
      'Recruitment and service disputes within the Administrative Tribunals Act, 1985, including covered Central Government posts and notified organisations. PSU employment alone does not establish CAT jurisdiction; bench jurisdiction also needs checking.',
  },
  {
    title: 'Central Government Industrial Tribunal-cum-Labour Court',
    blurb:
      'Industrial disputes within the central labour jurisdiction, subject to employee status and the applicable statutory procedure. Other employment disputes may belong before State labour forums or a civil court; CGIT is not the default forum for every private employee.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Service writ petitions under Article 226 and judicial review of tribunal decisions, subject to maintainability, alternative remedies, and territorial jurisdiction. A Lucknow address alone does not establish jurisdiction.',
  },
  {
    title: 'Internal Complaints Committee',
    blurb:
      'Advice on POSH complaints, responses, inquiry procedure, and available appeals. Legal practitioners cannot represent either party before the Internal Committee under the POSH Rules.',
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
    icon: BookOpen,
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
    icon: HandCoins,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
  },
]

const serviceInsights = [
  {
    icon: BookOpen,
    title: 'What does a service matter advocate in Lucknow help with?',
    excerpt:
      'A service law advocate reviews recruitment, appointment, suspension, disciplinary action, promotion, pay, and pension disputes against the rules governing your post. The first step is to identify your employer, employment status, challenged order, and the authority or court that can grant a remedy.',
  },
  {
    icon: Gavel,
    title: 'How should I respond to a departmental charge sheet?',
    excerpt:
      'Record the date of receipt and the reply deadline. Check each allegation against the applicable conduct and disciplinary rules, request relied-upon documents where needed, and prepare a point-by-point reply supported by records. Seek an extension promptly if necessary; do not assume it has been granted or ignore the notice.',
  },
  {
    icon: TrendingUp,
    title: 'Can I challenge a promotion decision or seniority list?',
    excerpt:
      'A review may consider eligibility, vacancies, recruitment rules, the seniority list, service-record entries, and the Departmental Promotion Committee process. Keep the relevant orders and submit objections within any notified period. The available remedy depends on your service rules; eligibility does not automatically guarantee promotion.',
  },
  {
    icon: HandCoins,
    title: 'What can I do about delayed pension or retirement benefits?',
    excerpt:
      'Collect your retirement order, pension payment order, service and pay records, calculation sheets, and earlier representations. A review can identify missing service periods, incorrect calculations, or the stated reason for withholding benefits. Arrears and interest may be sought where legally available, but depend on the applicable rules and facts.',
  },
  {
    icon: Landmark,
    title: 'Should I approach CAT, the U.P. Tribunal, or the High Court?',
    excerpt:
      'CAT generally hears covered Central Government service matters; the U.P. Public Services Tribunal hears claims within its statutory coverage. For matters assigned to a tribunal, that tribunal ordinarily acts as the court of first instance, with High Court judicial review available afterwards. Employer status, statutory exclusions, departmental remedies, and territorial jurisdiction must be checked before choosing a forum.',
  },
  {
    icon: ShieldCheck,
    title: 'Can I obtain a stay on suspension, transfer, or dismissal?',
    excerpt:
      'Interim relief can be requested from the competent forum where the facts and law justify it. Filing a challenge does not itself suspend the order. The forum considers factors such as a prima facie case, balance of convenience, and irreparable harm; transfer and disciplinary matters have specific limits on judicial intervention. No stay or reinstatement can be guaranteed.',
  },
  {
    icon: ScrollText,
    title: 'What is the deadline to challenge a service order?',
    excerpt:
      'There is no single deadline for all service disputes. A departmental reply, statutory appeal, CAT application, and U.P. Tribunal claim can each have different time limits. Record when the order was communicated and obtain advice promptly. Repeated representations do not automatically extend limitation, and the power to excuse delay differs between forums.',
  },
  {
    icon: UserX,
    title: 'Can a private employee file a service writ petition?',
    excerpt:
      'A private employment dispute does not automatically qualify for a writ petition. The employer, any public-law duty, your actual duties, and the governing employment law determine whether a labour remedy, civil claim, contractual process, or exceptional writ remedy is available. Keep the employment contract, termination notice, payslips, and relevant correspondence.',
  },
  {
    icon: HandCoins,
    title: 'What will a service-law consultation and case cost?',
    excerpt:
      'Fees depend on the records to review, the forum, urgency, drafting, and the stages of representation required. Ask for the proposed scope, professional fees, and separate filing or incidental expenses before instructing counsel. The likely duration depends on the proceedings and cannot be promised in advance.',
  },
]

const serviceFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: serviceInsights.map(({ title, excerpt }) => ({
    '@type': 'Question',
    name: title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: excerpt,
    },
  })),
}

export default async function ServiceEmploymentMattersPage() {
  const employmentBlogPosts = getBlogPostsByCategory('Service & Employment Matters')

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceMattersJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqJsonLd) }}
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
                Service Law
              </span>
              <div className="h-px w-12 bg-gold-500" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-navy-900 dark:text-cream md:text-5xl">
              Service Matter Advocate <em className="text-gold-gradient">in Lucknow</em>
            </h1>
            <p className="max-w-2xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
              Our service matter advocates and employment lawyers in Lucknow advise government employees,
              public-sector staff, teachers, and private employees facing
              suspension, departmental inquiries, dismissal, promotion,
              pay, or pension disputes. We assess the applicable service
              rules and the appropriate remedy before the CAT Lucknow Bench,
              U.P. Public Services Tribunal, labour forums, or the
              Allahabad High Court, Lucknow Bench.
            </p>
            <ConsultationActions className="mt-8 hidden md:flex" />
            </div>
            {serviceLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {serviceLead.img && (
                  <Image src={serviceLead.img} alt={serviceLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: serviceLead.focus }} />
                )}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Service &amp; Employment Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{serviceLead.name}</h2>
                <p className="mt-2 font-body text-sm text-navy-700 dark:text-cream/60">{serviceLead.role}</p>
                <Link href={`/team/${serviceLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">
                  View Profile <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            )}
            <ConsultationActions className="flex md:hidden" />
          </div>

          <section className="mb-16" aria-labelledby="service-team">
            <h2 id="service-team" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Our Service &amp; Employment Law Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads our service and employment practice alongside
              Adv. Aditya Narayan Shukla, Adv. Devesh Tiwari, and Adv. Abhishek Mishra.
              Each profile below sets out that member&apos;s individual practice areas.
            </p>
            <TeamCarousel members={serviceTeam} label="Service and employment team members" />
          </section>

          <div className="mb-16 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <p>
              Service law governs employment relationships arising under
              statutory rules, service regulations, and administrative
              instructions. For government employees, public sector staff,
              teachers, personnel of statutory bodies, and workmen in private
              employment, disputes over recruitment, promotion, disciplinary
              action, retrenchment, or retirement benefits can directly affect
              a career and livelihood.
            </p>
            <p>
              Sumanjari &amp; Co. Advocates advises and represents employees
              and, where instructed, departments — from the departmental
              inquiry stage through departmental appeals and, where
              maintainable, tribunal or court proceedings. The correct route
              depends on the legal status of the employer, the post held,
              the governing rules, and where the cause of action arose.
              Central and State Government service disputes, aided-institution
              matters, and private employment claims do not all follow the
              same procedure.
            </p>
          </div>

          <div className="mb-16">
            <div className="mb-8 flex items-center gap-2">
              <Landmark className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Which Forum Can Hear Your Service Matter?
              </h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
              Types of Service &amp; Employment Matters We Handle
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

          <section className="mb-16" aria-labelledby="service-deadlines">
            <h2 id="service-deadlines" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Received a Service Order? Deadlines and Immediate Steps
            </h2>
            <div className="space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              <p>
                Keep the complete order, notice, envelope, or email showing when
                it reached you. A charge-sheet reply, departmental appeal,
                tribunal application, and writ petition have different procedural
                requirements. An informal assurance from the department or a
                fresh representation should not be treated as an extension of time.
              </p>
              <p>
                For Central Government matters, Sections 20 and 21 of the
                Administrative Tribunals Act, 1985 address departmental remedies
                and limitation. U.P. Tribunal claims are governed by the U.P.
                Public Services (Tribunal) Act, 1976, including its limitation
                provisions. Departmental appeal periods depend on the disciplinary
                rules applicable to your post. Writ petitions can also be refused
                for unexplained delay even where no fixed statutory period applies.
              </p>
              <p>
                If an order has immediate consequences, seek advice on any
                available interim application. Until a competent authority or
                court grants relief, filing a representation or case does not
                by itself stay the order. Do not assume you can disregard it.
              </p>
            </div>
          </section>

          <section className="mb-16" aria-labelledby="service-documents">
            <h2 id="service-documents" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Documents to Bring to a Service-Law Consultation
            </h2>
            <ul className="list-disc space-y-3 pl-5 font-body leading-relaxed text-navy-800 dark:text-cream/75">
              <li>The challenged order or notice, its attachments, and proof of the date you received it.</li>
              <li>Your appointment letter, employment terms, applicable service rules, and relevant service-book entries.</li>
              <li>For disciplinary matters: the charge sheet, relied-upon documents, replies, inquiry report, and punishment order.</li>
              <li>For promotion or pay disputes: seniority lists, promotion orders, relevant service-record entries, payslips, and fixation or recovery orders.</li>
              <li>For retirement claims: the retirement order, pension payment order, gratuity calculation, and details of unpaid benefits.</li>
              <li>Earlier representations, appeals, acknowledgements, and any tribunal or court orders, with a short chronology of events.</li>
            </ul>
            <p className="mt-5 font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Bring the records available to you; do not delay seeking advice
              solely because a document is missing. A first review should identify
              the available remedy, missing evidence, urgency, and proposed scope
              of work, rather than promise a particular result.
            </p>
          </section>

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
                We begin with a confidential review of your service record,
                charge sheet, or the order under challenge, followed by clear
                advice on the likely outcomes and the forum best suited to
                your matter. We represent you at the departmental stage
                wherever possible, and are fully prepared to carry the matter
                before the Central Administrative Tribunal, the U.P. Public
                Services Tribunal, CGIT, or in writ jurisdiction before the
                Allahabad High Court, Lucknow Bench.
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
                Service Law <em className="text-gold-gradient">Frequently Asked Questions</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Answers on departmental proceedings, service tribunals,
                employment remedies, and preparing for a consultation in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {serviceInsights.map(({ icon: Icon, title, excerpt }) => (
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

          <section aria-labelledby="service-disciplinary-record-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="service-disciplinary-record-review" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">Facing a Charge Sheet, Suspension or Adverse Service Order?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Identify the employer, appointment terms, applicable service rules and the stage of proceedings before choosing a remedy. A departmental inquiry, statutory appeal, CAT application, U.P. Public Services Tribunal claim, industrial dispute and High Court writ are not interchangeable. Armed forces service matters may engage the Armed Forces Tribunal, subject to its statutory jurisdiction and exclusions. Private employment claims require a separate assessment of the contract, duties and applicable labour law.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Prepare the full employment and disciplinary record</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Share the appointment letter, service rules, charge sheet and annexures, inquiry notices, replies, inquiry report, challenged order and proof of its communication. For pay or pension disputes, add service-book extracts, pay fixation and retirement records. Record each reply, appeal and hearing deadline. Repeated representations do not necessarily extend limitation or suspend the order. We assess natural justice, available departmental remedies and the basis for any interim relief; reinstatement or a stay cannot be assured.</p>
          </section>

          <ServiceBlogs
            posts={employmentBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="Service & Employment Blogs"
            description="Short reads on service law, employment disputes, and departmental proceedings."
            viewAllHref={`/blog?category=${encodeURIComponent('Service & Employment Matters')}`}
          />

          <div className="glass-card rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a Service or Employment Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your recruitment, promotion,
              disciplinary, pension, or industrial dispute — practising before
              the Central Administrative Tribunal, the U.P. Public Services
              Tribunal, CGIT, and the Allahabad High Court, Lucknow Bench.
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
