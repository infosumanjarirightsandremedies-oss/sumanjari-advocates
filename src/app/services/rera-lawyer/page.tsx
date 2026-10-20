import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  Building2,
  Home,
  FileWarning,
  Hammer,
  ClipboardCheck,
  Gavel,
  ShieldCheck,
  MessageSquareWarning,
  MapPin,
  Lock,
  Search,
  FileSignature,
  Presentation,
  CheckCircle2,
  ScrollText,
  Award,
  Landmark,
  ArrowUpRight,
  Phone,
  Mail,
  MessageCircle,
  UserCheck,
  Clock,
  Percent,
  IndianRupee,
  Ruler,
  FileCheck,
  CalendarClock,
} from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const reraTeam = ['jyotish-raj', 'aniket-bose', 'prerna-yaduvanshi']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

// ─────────────────────────────────────────────────────────────────────────────
// RERA practice credibility data
// -----------------------------------------------------------------------------
// EDIT with figures the firm can factually stand behind. Bar Council of India
// norms allow declarative, verifiable facts (years, forums, matters handled) but
// NOT superlatives ("best", "No. 1") or solicitation. The two numeric stats below
// render ONLY when set to a real string — leave them `null` and they stay hidden,
// so no unverified number is ever published.
const reraLead = {
  name: 'Adv. Jitendra Tiwari',
  href: '/team/jitendra-tiwari',
  photo: '/images/Jitendra.jpeg',
  photoFocus: '50% 80%',
  // Already published on his team page — verifiable:
  role: 'Director, Sumanjari & Co. Advocates',
  qualification: 'B.A. LL.B (Hons.)',
  credential: 'Over 8 years of practice before the Allahabad High Court, Lucknow Bench',
  forums: 'UP-RERA · RERA Appellate Tribunal · Allahabad High Court, Lucknow Bench',
}

const reraTrackRecord = {
  yearsPractisingRera: '8+' as string | null,
  mattersHandled: '100+' as string | null,
}

const reraStats = [
  reraTrackRecord.yearsPractisingRera && {
    value: reraTrackRecord.yearsPractisingRera,
    label: 'Years practising before UP-RERA',
  },
  reraTrackRecord.mattersHandled && {
    value: reraTrackRecord.mattersHandled,
    label: 'RERA & builder-buyer matters handled',
  },
].filter(Boolean) as { value: string; label: string }[]

// Real, site-wide contact details (kept in sync with Footer.tsx / Contact.tsx).
const CONTACT = {
  phone: [
    { name: 'Adv. Jitendra Tiwari', display: '+91 82990 86204', tel: 'tel:+918299086204' },
    { name: 'Adv. Aishwarya Pandey', display: '+91 83024 71764', tel: 'tel:+918302471764' },
  ],
  email: 'info.sumanjarirightsandremedies@gmail.com',
  whatsapp: `https://wa.me/918299086204?text=${encodeURIComponent(
    'Hello, I have a RERA / builder-buyer matter and would like a consultation.'
  )}`,
}

// Genuine, BCI-safe differentiators (declarative facts, no superlatives).
const trustBadges = [
  {
    icon: UserCheck,
    title: 'A Named Advocate on Every Matter',
    text: 'Your case is handled by an identified advocate of the firm — not an anonymous call-centre or intake desk.',
  },
  {
    icon: ShieldCheck,
    title: 'Clear Scope, Discussed Upfront',
    text: 'Strategy, likely outcomes, and the stage-by-stage plan are explained before you engage — no vague promises.',
  },
  {
    icon: Landmark,
    title: 'UP-RERA · REAT · High Court',
    text: 'Representation across the full lifecycle — from the Authority to the Appellate Tribunal to the Allahabad High Court, Lucknow Bench.',
  },
]

// "Know Your RERA Rights" — authority-building, snippet-optimised statutory facts.
const reraRights = [
  {
    icon: Clock,
    title: 'Possession Delay & Refund — Section 18',
    text: 'If possession is not given by the date in the builder-buyer agreement, the buyer may claim interest for every month of delay, or withdraw and seek a full refund with interest under Section 18.',
  },
  {
    icon: Percent,
    title: 'Interest Rate on Delay',
    text: 'Delay interest is calculated at the prescribed rate — the State Bank of India’s highest marginal cost of lending rate (MCLR) plus the margin set under the RERA rules — applied to the amount the buyer has paid. We confirm the exact rate applied in your matter.',
  },
  {
    icon: CalendarClock,
    title: '60-Day Appeal Window — Section 44(2)',
    text: 'An appeal against an order of the Authority must be filed before the RERA Appellate Tribunal within 60 days of the order under Section 44(2).',
  },
  {
    icon: IndianRupee,
    title: 'Promoter Pre-Deposit — Section 43(5)',
    text: 'Where a promoter appeals, Section 43(5) requires a pre-deposit of at least 30% of the penalty, or the total amount to be paid to the buyer, before the appeal is entertained.',
  },
  {
    icon: Ruler,
    title: 'Carpet Area & Amenities',
    text: 'RERA fixes liability on the price of carpet area and on the amenities promised in the sanctioned plan — shortfalls between the brochure and delivery are actionable.',
  },
  {
    icon: FileCheck,
    title: 'Execution of RERA Orders',
    text: 'A RERA order that is not complied with can be executed as a recovery certificate through the District Magistrate, with further remedies before the High Court where required.',
  },
]

export const metadata: Metadata = {
  title: { absolute: 'RERA Lawyer in Lucknow | Builder Disputes & Refunds | Sumanjari' },
  description:
    'RERA advocate and real estate lawyer in Lucknow for builder-buyer disputes, possession delays, refunds and appeals before UP-RERA and the Appellate Tribunal.',
  keywords: [
    'Real Estate Advocate & Lawyer',
    'Real Estate Advocate',
    'Real Estate Lawyer',
    'RERA Advocate',
    'RERA Lawyer Lucknow',
    'RERA Advocate Lucknow',
    'RERA Lawyer Near Me',
    'RERA Property Lawyer',
    'Advocate for RERA Case',
    'UP RERA Lawyer',
    'Real Estate Lawyer Lucknow',
    'Real Estate Advocate Lucknow',
    'Builder Buyer Dispute Lawyer Lucknow',
    'UP RERA Complaint Lawyer',
    'UP RERA Advocate',
    'RERA Possession Delay Lawyer',
    'RERA Appellate Tribunal Lawyer UP',
    'RERA Compensation Claim Lawyer',
    'UP RERA Order Enforcement Lawyer',
    'Builder Buyer Agreement Review Lucknow',
  ],
  alternates: {
    canonical: '/services/rera-lawyer',
  },
  openGraph: {
    title: 'RERA Advocate & Real Estate Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Real estate advocates and lawyers in Lucknow representing homebuyers and developers in disputes before UP-RERA and the RERA Appellate Tribunal.',
    url: '/services/rera-lawyer',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RERA Lawyer in Lucknow | Builder Disputes & Refunds',
    description: 'UP-RERA advice on delayed possession, refunds, agreement review, order compliance and appeals.',
  },
}

const reraServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'RERA & Real Estate Legal Services in Lucknow',
  url: `${SITE_URL}/services/rera-lawyer`,
  description:
    'Representation for homebuyers and developers in Lucknow in RERA disputes — builder-buyer conflicts, possession delays, compensation claims, project registration and compliance, and appeals before the RERA Appellate Tribunal.',
  provider: { '@id': `${SITE_URL}/#organization` },
  areaServed: [
    { '@type': 'City', name: 'Lucknow' },
  ],
  serviceType: 'RERA Legal Services',
  employee: {
    '@type': 'Person',
    name: 'Jitendra Tiwari',
    jobTitle: 'Attorney',
    url: `${SITE_URL}/team/jitendra-tiwari`,
    knowsAbout: [
      'RERA',
      'Builder-Buyer Disputes',
      'Real Estate Regulation and Development Act, 2016',
    ],
  },
}

const matters = [
  {
    icon: Hammer,
    title: 'Builder-Buyer Disputes',
    points: [
      'Legal support for buyers facing delayed possession, faulty construction, or non-delivery of promised amenities',
      'Filing complaints against builders and developers for non-compliance with RERA guidelines and the sale agreement',
      'Refund of booking amounts, interest on delayed payments, and compensation claims',
    ],
  },
  {
    icon: Home,
    title: 'Possession Delay & Compensation',
    points: [
      'Legal recourse where possession is delayed beyond the timeline committed in the agreement',
      'Claims for interest, refunds, and compensation for delayed delivery',
      'Resolving disputes linked to missing occupancy certificates and pending approvals',
    ],
  },
  {
    icon: ClipboardCheck,
    title: 'Project Registration & Compliance',
    points: [
      'Advisory to builders and developers on registering projects under UP-RERA',
      'Ensuring ongoing compliance with RERA rules to avoid penalties and enforcement action',
      'Complaints for non-registration of projects and other violations of RERA norms',
    ],
  },
  {
    icon: FileWarning,
    title: 'Construction Defects & Quality',
    points: [
      'Representation where construction quality, materials, or specifications fall short of what was promised',
      'Claims for rectification of defects or compensation in lieu of repair',
    ],
  },
  {
    icon: Gavel,
    title: 'RERA Appeals & Dispute Resolution',
    points: [
      'Appeals before the UP Real Estate Appellate Tribunal against orders of the Authority, within the 60-day limitation period under Section 44(2)',
      'Advising promoters on the mandatory 30% pre-deposit required under Section 43(5) before a promoter’s appeal is entertained',
      'Representation in mediation and settlement discussions with builders and developers, and execution of RERA orders before the Authority and Tribunal',
    ],
  },
  {
    icon: Building2,
    title: 'Developer-Side Advisory',
    points: [
      'Guidance for developers on structuring agreements to stay within RERA norms',
      'Responding to buyer complaints and Authority notices',
      'Compliance advisory to reduce exposure to penalties and project delays',
    ],
  },
]

const whyIssues = [
  'Builder defaults and breach of the builder-buyer agreement',
  'Compensation and refund claims for delayed or defective possession',
  'Delayed or stalled real estate projects',
  'Non-registration of projects and other RERA violations',
  'Substandard construction and non-compliance with agreed specifications',
]

const workSteps = [
  {
    icon: Lock,
    title: 'Private Consultation',
    description:
      'We begin with a confidential discussion of your matter, understanding the facts and your expectations while safeguarding your privacy.',
  },
  {
    icon: Search,
    title: 'In-Depth Case Review',
    description:
      'Every document and detail is carefully examined so we can assess the strengths, risks, and best possible legal routes for you.',
  },
  {
    icon: FileSignature,
    title: 'Strategy & Drafting',
    description:
      'A clear, customised strategy is prepared and precise pleadings are drafted to present your case strongly before the court or authority.',
  },
  {
    icon: Presentation,
    title: 'Focused Representation',
    description:
      'We represent you with preparation and clarity, ensuring timely filings, effective arguments, and regular updates on each hearing.',
  },
  {
    icon: CheckCircle2,
    title: 'Resolution & Ongoing Support',
    description:
      'Even after the matter is resolved, we guide you on next steps, compliance, and any further legal support you may require.',
  },
]

const reraInsights = [
  {
    icon: ClipboardCheck,
    title: 'How to File a Complaint Before UP-RERA',
    excerpt:
      'A UP-RERA complaint is filed online on the prescribed form with the requisite fee, supported by the builder-buyer agreement, payment receipts, and correspondence evidencing the delay or default. Once admitted, the Authority can order interest, refund, or compensation to the buyer.',
  },
  {
    icon: Home,
    title: "What Counts as 'Possession Delay' Under RERA?",
    excerpt:
      'Possession delay under RERA is measured from the date committed in the builder-buyer agreement, not marketing brochures. Once that date passes without a valid occupancy certificate, the buyer can claim monthly interest on the amount paid, or withdraw and seek a full refund with interest under Section 18.',
  },
  {
    icon: FileWarning,
    title: 'Builder-Buyer Disputes: Documents You Will Need',
    excerpt:
      'A RERA builder-buyer complaint is strongest with the allotment letter, the sale or builder-buyer agreement, the payment schedule, demand and payment receipts, and the project’s RERA registration or occupancy-certificate details. These establish the committed timeline and the amount paid, on which interest and compensation are calculated.',
  },
  {
    icon: Gavel,
    title: 'RERA Appeals: What Is the Time Limit and Pre-Deposit?',
    excerpt:
      'An appeal to the RERA Appellate Tribunal must be filed within 60 days of the Authority’s order under Section 44(2). Where the promoter appeals, Section 43(5) requires a pre-deposit of at least 30% of the penalty or amount due to the buyer before the appeal is entertained.',
  },
  {
    icon: UserCheck,
    title: 'How Do I Choose the Right Advocate for a RERA Case?',
    excerpt:
      'Rather than searching for a "best RERA advocate" by ranking alone, check that the advocate regularly appears before UP-RERA and the Appellate Tribunal, is named and identifiable on your matter, and explains the likely strategy and outcomes before you engage — these are the factors that actually decide a RERA case.',
  },
  {
    icon: MapPin,
    title: 'Do I Need a RERA Lawyer Near Me, or Can I Hire One From Another City?',
    excerpt:
      'A RERA complaint is filed before the Authority in the state where the project is located, so an advocate familiar with UP-RERA practice and the local Appellate Tribunal is generally better placed than searching only for a "RERA lawyer near me" by distance — what matters is regular appearance before the forum handling your matter.',
  },
]

const reraFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I file a complaint before UP-RERA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A UP-RERA complaint is filed online on the prescribed form with the requisite fee, supported by the builder-buyer agreement, payment receipts, and correspondence evidencing the delay or default. Once admitted, the Authority can order interest, refund, or compensation to the buyer.',
      },
    },
    {
      '@type': 'Question',
      name: 'What counts as possession delay under RERA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Possession delay under RERA is measured from the date committed in the builder-buyer agreement, not marketing brochures. Once that date passes without a valid occupancy certificate, the buyer can claim monthly interest on the amount paid, or withdraw and seek a full refund with interest under Section 18.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are needed for a builder-buyer dispute?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A RERA builder-buyer complaint is strongest with the allotment letter, the sale or builder-buyer agreement, the payment schedule, demand and payment receipts, and the project’s RERA registration or occupancy-certificate details. These establish the committed timeline and the amount paid, on which interest and compensation are calculated.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the time limit and pre-deposit for a RERA appeal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An appeal to the RERA Appellate Tribunal must be filed within 60 days of the Authority’s order under Section 44(2) of the RERA Act, 2016. Where the promoter files the appeal, Section 43(5) requires a pre-deposit of at least 30% of the penalty or amount due to the buyer before the appeal is entertained.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I choose the right advocate for a RERA case?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rather than searching for a "best RERA advocate" by ranking alone, check that the advocate regularly appears before UP-RERA and the Appellate Tribunal, is named and identifiable on your matter, and explains the likely strategy and outcomes before you engage — these are the factors that actually decide a RERA case.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a RERA lawyer near me, or can I hire one from another city?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A RERA complaint is filed before the Authority in the state where the project is located, so an advocate familiar with UP-RERA practice and the local Appellate Tribunal is generally better placed than searching only for a "RERA lawyer near me" by distance — what matters is regular appearance before the forum handling your matter.',
      },
    },
  ],
}

export default async function ReraServicePage() {
  const reraBlogPosts = getBlogPostsByCategory('RERA').then((posts) => posts.filter(
    (post) => !/\b(?:Noida|Ghaziabad)\b/i.test(`${post.title} ${post.excerpt}`)
  ))

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reraServiceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reraFaqJsonLd) }}
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

          <div className="mb-16 grid items-stretch gap-10 md:mb-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
            <div className="order-1 lg:order-1">
              <span className="font-caps text-xs uppercase tracking-[0.25em] text-gold-700 dark:text-gold-400">
                UP-RERA &amp; Appellate Tribunal
              </span>
              <h1 className="mt-4 font-display text-4xl font-bold leading-[1.12] text-navy-900 dark:text-cream md:text-[3.25rem]">
                RERA Advocate &amp;{' '}
                <em className="text-gold-gradient">Real Estate Lawyer in Lucknow</em>
              </h1>
              <p className="mt-4 max-w-xl font-body text-lg font-semibold leading-relaxed text-navy-900 dark:text-cream">
                Delayed possession or a broken booking promise? We take it to UP-RERA.
              </p>
              <p className="mt-5 max-w-xl font-body text-lg leading-relaxed text-navy-700 dark:text-cream/60">
                Our real estate advocates and lawyers represent homebuyers and
                developers in{' '}
                <strong className="font-semibold text-navy-900 dark:text-cream">
                  Lucknow
                </strong>
                . We handle builder-buyer disputes, possession delay and
                compensation claims, and RERA appeals.
              </p>

              {reraStats.length > 0 && (
                <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                  {reraStats.map(({ value, label }) => (
                    <div key={label} className="flex items-baseline gap-2">
                      <span className="font-display text-2xl font-bold text-gold-gradient">
                        {value}
                      </span>
                      <span className="max-w-[8rem] font-body text-sm leading-snug text-navy-700/75 dark:text-cream/55">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="/#contact"
                  className="btn-gold inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900"
                >
                  Book a Consultation
                </a>
                <a
                  href={CONTACT.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-sm border border-gold-500/40 px-6 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-300"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp
                </a>
                <a
                  href={CONTACT.phone[0].tel}
                  className="inline-flex items-center gap-2 rounded-sm border border-gold-500/40 px-6 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-800 transition-colors hover:border-gold-500 hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-300"
                >
                  <Phone className="h-4 w-4" /> Call Now
                </a>
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <div className="glass-card card-glow relative mx-auto flex h-full max-w-sm flex-col overflow-hidden rounded-sm border border-gold-500/25 dark:border-gold-500/20 lg:max-w-none">
                <div className="relative aspect-[4/5] w-full lg:aspect-auto lg:min-h-0 lg:flex-1">
                  <Image
                    src={reraLead.photo}
                    alt={`${reraLead.name}, RERA lawyer in Lucknow`}
                    fill
                    priority
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    style={{ objectPosition: reraLead.photoFocus }}
                    className="object-cover"
                  />
                </div>
                <div className="border-t border-gold-500/25 bg-navy-950 p-6">
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-gold-400" />
                    <span className="font-caps text-[11px] uppercase tracking-widest text-gold-400">
                      RERA Practice Lead
                    </span>
                  </div>
                  <div className="mt-2 font-display text-2xl font-bold text-cream">
                    {reraLead.name}
                  </div>
                  <div className="mt-1 font-body text-sm text-cream/75">
                    {reraLead.role} · {reraLead.qualification}
                  </div>

                  <div className="mt-4 space-y-3 border-t border-gold-500/15 pt-4">
                    <p className="font-body text-xs leading-relaxed text-cream/70">
                      {reraLead.credential}
                    </p>
                    <div className="flex items-start gap-2">
                      <Landmark className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-gold-400" />
                      <p className="font-body text-xs leading-relaxed text-cream/70">
                        {reraLead.forums.replace(/ · /g, ' • ')}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={reraLead.href}
                    className="mt-4 inline-flex items-center gap-1 font-caps text-[11px] uppercase tracking-widest text-gold-400 transition-opacity hover:opacity-80"
                  >
                    View Full Profile <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <section className="mb-16" aria-labelledby="rera-team">
            <h2 id="rera-team" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              RERA &amp; Real Estate Support Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Jitendra Tiwari leads our RERA practice. Adv. Jyotish Raj
              contributes his recorded RERA and real estate dispute focus,
              supported by associates with civil, commercial and contract
              experience.
            </p>
            <TeamCarousel members={reraTeam} label="RERA and real estate team members" />
          </section>

          <div className="mb-16">
            <h2 className="sr-only">Why Clients Choose Us</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {trustBadges.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 text-center dark:border-gold-500/15"
                >
                  <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-2 font-display text-base font-bold text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div id="overview" className="mb-16 scroll-mt-28 space-y-4 font-body leading-relaxed text-navy-800 dark:text-cream/75">
            <h2 className="mb-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Real Estate Lawyer for RERA &amp; Builder-Buyer Disputes
            </h2>
            <p>
              Real estate disputes under the Real Estate (Regulation and
              Development) Act, 2016 can be complex and drawn out — whether the
              issue is a delayed handover, a disputed project registration, or a
              builder who has fallen short of the commitments made at booking. We
              represent both individual homebuyers and institutional clients
              before UP-RERA and the RERA Appellate Tribunal.
            </p>
            <p>
              We handle the full range of builder-buyer disputes, delayed
              possession claims, project registration and compliance matters,
              and appeals — with the aim of securing possession, compensation,
              or refund at the earliest possible stage, and pursuing appellate
              or execution remedies where required. This practice serves
              homebuyers and developers with real estate matters in Lucknow.
            </p>
            <p>
              A RERA advocate reviews the builder-buyer agreement, promised
              possession date, payment receipts, project registration details,
              and correspondence with the developer to assess the available
              remedies. Our real estate lawyers assist with preparing complaints,
              presenting supporting documents, responding to the other party,
              and pursuing appeals or enforcement of orders where appropriate.
              The relief available depends on the facts, the agreement, and the
              applicable law; no particular outcome is guaranteed.
            </p>
            <p>
              For ownership, title verification, partition, sale deeds, or land
              disputes outside the RERA context, see our{' '}
              <Link href="/services/property-land-matters" className="font-semibold text-gold-700 underline underline-offset-4 hover:text-gold-600 dark:text-gold-400">
                property and land legal services
              </Link>
              .
            </p>
          </div>

          <div id="cities" className="mb-16 scroll-mt-28">
            <div className="mb-8 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Where We Represent
              </h2>
            </div>
            <p className="max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Our chambers are based at Block D-311, Allahabad High Court,
              Lucknow Bench. We represent homebuyers and developers in Lucknow
              before UP-RERA and in appeals before the RERA Appellate Tribunal.
              For an initial review, bring your builder-buyer agreement, payment
              records, the promised possession date, and correspondence with the
              developer so the relevant documents and next steps can be assessed.
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              <Link href="#services" className="glass-card group block rounded-sm border border-gold-500/20 p-6 transition-colors hover:border-gold-500/50 dark:border-gold-500/15">
                <h3 className="flex items-center justify-between gap-4 font-display text-xl font-bold text-navy-900 dark:text-cream">
                  RERA Lawyer in Lucknow
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" />
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
                  Representation before UP-RERA and the RERA Appellate Tribunal
                  for Lucknow homebuyers and developers, including complaints,
                  possession delays, refund claims and appeals. Our chambers are
                  at Block D-311, Allahabad High Court, Lucknow Bench.
                </p>
              </Link>
              <Link href="/services/rera-lawyer-noida-ghaziabad" className="glass-card group block rounded-sm border border-gold-500/20 p-6 transition-colors hover:border-gold-500/50 dark:border-gold-500/15">
                <h3 className="flex items-center justify-between gap-4 font-display text-xl font-bold text-navy-900 dark:text-cream">
                  RERA Advocate &amp; Lawyer in Noida &amp; Ghaziabad
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" />
                </h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">
                  Meet our Delhi/NCR team and explore representation for builder-buyer
                  disputes, delayed possession and refund claims involving projects
                  in Noida and Ghaziabad.
                </p>
              </Link>
            </div>
          </div>

          <div id="services" className="mb-16 scroll-mt-28">
            <h2 className="mb-8 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Types of RERA Matters We Handle
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
                We begin with a confidential consultation to understand the
                facts and documentation, followed by clear advice on the
                likely outcomes and the strategy best suited to your matter.
                Where possible, we work towards a negotiated or mediated
                resolution with the builder or developer — but we are fully
                prepared to pursue the matter through UP-RERA, the Appellate
                Tribunal, and execution proceedings where necessary.
              </p>
            </div>
          </div>

          <div id="rights" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                Know Your Rights
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                Your <em className="text-gold-gradient">RERA Rights</em>, in Plain Terms
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                The statutory basics that decide most builder-buyer matters — the
                same provisions we argue before UP-RERA and the Appellate Tribunal.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {reraRights.map(({ icon: Icon, title, text }) => (
                <div
                  key={title}
                  className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-2 font-display text-base font-bold leading-snug text-navy-900 dark:text-cream">
                    {title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center font-body text-xs italic text-navy-600/70 dark:text-cream/40">
              General information on the law, not legal advice on your specific
              matter. Outcomes depend on the facts and documents in each case.
            </p>
          </div>

          <div id="process" className="mb-16 scroll-mt-28">
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

          <div id="insights" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                RERA <em className="text-gold-gradient">Insights</em>
              </h2>
              <p className="mx-auto max-w-xl font-body text-navy-700 dark:text-cream/55">
                Common questions homebuyers and developers bring to us — drawn from
                our RERA practice in Lucknow.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reraInsights.map(({ icon: Icon, title, excerpt }) => (
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
                    href="#contact"
                    className="font-caps text-xs uppercase tracking-widest text-gold-700 transition-opacity hover:opacity-75 dark:text-gold-400"
                  >
                    Ask Us About This →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <section aria-labelledby="rera-remedy-document-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="rera-remedy-document-review" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">Prepare Your UP-RERA Complaint Around the Relief You Need</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">A homebuyer seeking possession with delay interest may need a different case strategy from one seeking withdrawal and refund. Compensation, interest, project compliance, appeals and enforcement also have distinct statutory requirements. We review the agreement, project registration, promised possession date, extensions, payments and earlier proceedings before identifying the competent authority and available relief. Filing a complaint does not guarantee an immediate refund or possession.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Prepare a project and payment chronology</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Share the allotment letter, builder-buyer agreement, receipts, demand letters, possession communications, project details and any settlement or prior order. Record what was promised, paid, delivered and disputed, with dates. An unpaid order may require enforcement rather than a fresh complaint; an appeal has its own deadline and requirements. For projects in the NCR region, see our dedicated <Link href="/services/rera-lawyer-noida-ghaziabad" className="text-gold-700 underline dark:text-gold-400">Noida and Ghaziabad RERA service</Link>.</p>
          </section>

          <ServiceBlogs
            posts={reraBlogPosts}
            fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
            eyebrow="From Our Desk"
            heading="RERA Blogs"
            description="Short reads on the practical side of RERA disputes and compliance."
            viewAllHref="/blog?category=RERA"
          />

          <div
            id="contact"
            className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12"
          >
            <h2 className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Facing a RERA Dispute?
            </h2>
            <p className="mx-auto mb-8 max-w-xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Speak with our team about your builder-buyer dispute, possession
              delay, or project compliance matter in Lucknow. We represent clients
              before UP-RERA, the RERA Appellate Tribunal, and the Allahabad High
              Court, Lucknow Bench, as appropriate to the matter.
            </p>

            <div className="mx-auto grid max-w-2xl gap-4 text-left sm:grid-cols-2">
              {CONTACT.phone.map(({ name, display, tel }) => (
                <a
                  key={tel}
                  href={tel}
                  className="glass-card flex items-center gap-3 rounded-sm border border-gold-500/20 p-4 transition-colors hover:border-gold-500/50 dark:border-gold-500/15"
                >
                  <Phone className="h-5 w-5 flex-shrink-0 text-gold-600 dark:text-gold-400" />
                  <span>
                    <span className="block font-body text-sm font-semibold text-navy-900 dark:text-cream">
                      {display}
                    </span>
                    <span className="block font-body text-xs text-navy-700/70 dark:text-cream/50">
                      {name}
                    </span>
                  </span>
                </a>
              ))}
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-3 rounded-sm border border-gold-500/20 p-4 transition-colors hover:border-gold-500/50 dark:border-gold-500/15"
              >
                <MessageCircle className="h-5 w-5 flex-shrink-0 text-gold-600 dark:text-gold-400" />
                <span>
                  <span className="block font-body text-sm font-semibold text-navy-900 dark:text-cream">
                    Chat on WhatsApp
                  </span>
                  <span className="block font-body text-xs text-navy-700/70 dark:text-cream/50">
                    Quick questions, document sharing
                  </span>
                </span>
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="glass-card flex items-center gap-3 rounded-sm border border-gold-500/20 p-4 transition-colors hover:border-gold-500/50 dark:border-gold-500/15"
              >
                <Mail className="h-5 w-5 flex-shrink-0 text-gold-600 dark:text-gold-400" />
                <span>
                  <span className="block font-body text-sm font-semibold text-navy-900 dark:text-cream">
                    Email Us
                  </span>
                  <span className="block break-all font-body text-xs text-navy-700/70 dark:text-cream/50">
                    {CONTACT.email}
                  </span>
                </span>
              </a>
            </div>

            <a
              href="/#contact"
              className="btn-gold mt-8 inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900"
            >
              Send an Enquiry
            </a>
          </div>
        </div>
      </section>

      <FirmCredentials />
      <Footer />
    </main>
  )
}
