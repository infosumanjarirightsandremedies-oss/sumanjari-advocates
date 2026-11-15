import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, KeyRound, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceContactLinks from '@/components/ServiceContactLinks'
import ServiceSelection from '@/components/ServiceSelection'
import ServiceStats from '@/components/ServiceStats'
import LucknowChambers from '@/components/LucknowChambers'
import TeamCarousel from '@/components/TeamCarousel'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import { GuideToc } from '@/components/LucknowGuide'
import { getBlogPostsBySlugs } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { serviceSearchContent } from '@/lib/serviceSearch'
import { CHAMBER_TEL, LUCKNOW_SERVICE_LOCATION, whatsappUrl } from '@/lib/contactLinks'
import ServiceLanguageSwitch from '@/components/ServiceLanguageSwitch'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const PAGE_PATH = '/services/bail-lawyer-lucknow'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const searchContent = serviceSearchContent['bail-lawyer-lucknow']
const bailLead = teamMembers.find(member => member.slug === 'aditya-narayan-shukla')
const bailTeam = ['jitendra-tiwari', 'abhishek-mishra', 'shishir-pandey', 'priyesh-dwivedi']
  .flatMap(slug => teamMembers.filter(member => member.slug === slug))
const bailBlogSlugs = [
  'pre-arrest-rights-police-investigation-anticipatory-bail',
  'regular-bail-default-statutory-bail-lucknow-bench',
]

export const metadata: Metadata = {
  title: { absolute: searchContent.title },
  description: searchContent.description,
  keywords: [
    searchContent.attorneyKeyword, 'Bail Lawyer Lucknow', 'Anticipatory Bail Lawyer Lucknow',
    'Regular Bail Lucknow', 'Default Bail BNSS', 'NBW Recall Lucknow',
    'Lucknow mein zamanat ka vakil', 'Agrim zamanat Lucknow', 'Bail kaise milegi Lucknow',
    'लखनऊ में जमानत के वकील', 'अग्रिम जमानत लखनऊ', 'नियमित जमानत लखनऊ',
    'डिफॉल्ट जमानत', 'लखनऊ हाईकोर्ट जमानत',
  ],
  alternates: { canonical: PAGE_PATH, languages: { en: PAGE_PATH, hi: `${PAGE_PATH}/hindi`, 'x-default': PAGE_PATH } },
  openGraph: { title: searchContent.title, description: searchContent.description, url: PAGE_PATH, locale: 'en_IN', alternateLocale: ['hi_IN'] },
  twitter: { card: 'summary_large_image', title: searchContent.title, description: searchContent.description },
}

const urgentSituations = [
  { title: 'Police Notice Received (Section 35(3) BNSS / 41A CrPC)', text: 'Check the attendance date and respond lawfully. Arnesh Kumar and Satender Kumar Antil address unnecessary arrest; a notice is not blanket immunity from arrest.', href: '#police-notice-remand' },
  { title: 'Apprehending Arrest After FIR (Anticipatory Bail)', text: 'Assess pre-arrest relief under Section 482 BNSS, the alleged offences and any statutory exclusions before filing.', href: '#bail-remedies' },
  { title: 'Person Arrested — First 24 Hours & Remand', text: 'Article 22(2) requires production before a Magistrate within 24 hours, excluding necessary travel time. Review grounds of arrest, remand and regular bail.', href: '#police-notice-remand' },
  { title: 'Non-Bailable Warrant (NBW) Issued', text: 'Review the order and reasons for non-appearance. Recall or cancellation, surrender and bail are separate steps; filing alone does not suspend the warrant.', href: '#nbw-recall' },
  { title: 'Bail Rejected by Sessions Court', text: 'Review the rejection order and the appropriate High Court remedy. Special statutes may require an appeal rather than an ordinary bail application.', href: '#bail-courts' },
  { title: 'Chargesheet Not Filed in 60 / 90 Days', text: 'Calculate default bail under Section 187(3) BNSS from the custody record. Special statutes can change the period; assert an accrued right promptly.', href: '#default-bail-deadlines' },
]

const remedies = [
  { title: 'Anticipatory Bail (Section 482 BNSS / Section 438 CrPC)', text: 'Pre-arrest protection for an apprehended arrest in a non-bailable offence, where maintainable. In U.P., the Sessions Court is ordinarily approached first; special circumstances for a direct High Court application must be explained, including the principles in Ankit Bharti v. State of U.P. Interim protection requires a court order.' },
  { title: 'Regular Bail (Sections 480 & 483 BNSS / Sections 437 & 439 CrPC)', text: 'Post-arrest applications before the competent Magistrate, Sessions Court or High Court. The allegations, role, custody period, evidence, criminal history and risks of absconding or influencing witnesses are relevant. Bailable offences are governed separately by Section 478 BNSS.' },
  { title: 'Default / Statutory Bail (Section 187(3) BNSS / Section 167(2) CrPC)', text: 'The ordinary investigation period is 90 days for offences punishable with death, life imprisonment or imprisonment of ten years or more, and 60 days for other offences under BNSS. Check transitional law and special-statute extensions. The application and readiness to furnish bail must be assessed before a chargesheet defeats an unasserted right.' },
  { title: 'Interim Bail & Transit Bail', text: 'Temporary relief may be sought on legally recognised grounds, including medical circumstances or limited protection to approach the competent court for an out-of-state FIR. Availability, duration and conditions are determined by the court, not automatically by a travel or family need.' },
  { title: 'Suspension of Sentence & Bail Pending Appeal (Section 430 BNSS / Section 389 CrPC)', text: 'After conviction, suspension of sentence and release pending appeal require a separate assessment of the conviction, sentence, appeal and statutory restrictions. An appeal does not itself suspend the sentence.' },
  { title: 'Bail Modification, Surety Reduction & Cancellation Defence', text: 'Applications may seek variation of onerous reporting, travel or bond conditions. Cancellation proceedings, including under Section 483(3) BNSS, require a response to the grounds alleged. Continue complying with existing conditions unless the court changes them.' },
]

const specialStatutes = [
  { title: 'Matrimonial & Section 85 BNS (498A IPC) / Dowry Prohibition Bail', text: 'Assess the specific role and allegations, notice compliance and any connected proceedings. Mediation or a matrimonial settlement does not automatically grant bail.', points: ['Prepare a person-specific chronology rather than assuming every named relative has the same alleged role.', 'Disclose connected maintenance, protection and criminal orders; avoid inconsistent affidavits across proceedings.', 'Review additional allegations separately, including injury, dowry death or other serious offences that change the bail assessment.'], href: '/services/divorce-lawyer-lucknow', label: 'Matrimonial & 498A Practice' },
  { title: 'Cyber Fraud, IT Act & Bank Freeze-Linked Bail', text: 'Review the transaction trail, alleged role and investigating jurisdiction. Release from custody and release of a bank freeze are distinct remedies.', points: ['Keep bank notices, complaint references, transaction IDs and evidence of the account holder’s actual role.', 'Identify whether multiple FIRs or agencies are involved; release in one case may not resolve custody in another.', 'Preserve original devices and records lawfully. Do not delete messages, alter account statements or share passwords and OTPs.'], href: '/services/cyber-crime-lawyer-lucknow', label: 'Cyber Crime Lawyer in Lucknow' },
  { title: 'U.P. Gangsters Act, 1986 & Goonda Act Proceedings', text: 'Section 19(4) of the Gangsters Act contains additional bail conditions. Goonda Act notices and externment orders involve a different preventive process and should not be treated as ordinary bail proceedings.', points: ['Obtain the gang chart, underlying FIRs and orders showing the status of each listed case.', 'Bail in a predicate case does not automatically grant bail in a separate Gangsters Act prosecution.', 'For a Goonda Act notice, review the authority, response deadline and proposed preventive action rather than treating it as a custody-bail application.'], href: '/services/criminal-lawyer-lucknow#special-statute-defence', label: 'Special-statute criminal defence' },
  { title: 'NDPS Act, 1985 & Section 37 Restrictions', text: 'Quantity, substance, recovery and statutory compliance matter. Section 37 imposes additional conditions for specified offences, including commercial quantity cases; small or intermediate quantity does not guarantee bail.', points: ['Review the seizure memo, alleged conscious possession, sampling records and laboratory report where available.', 'Where Section 37 applies, ordinary bail factors alone do not replace its additional statutory requirements.', 'Check the applicable investigation period and any valid extension order before calculating default bail; do not assume the ordinary 60/90-day rule.'] },
  { title: 'POCSO Act, 2012 & SC/ST (PoA) Act, 1989', text: 'Review the designated Special Court, victim notice and participation requirements, and any statutory bar to anticipatory bail. SC/ST Act bail orders may be challenged by an appeal under Section 14A.', points: ['Examine the alleged acts, age records where relevant, statements and the precise offence sections without exposing the victim’s identity.', 'SC/ST Act restrictions on anticipatory bail require a separate legal assessment; a bare denial does not remove a statutory bar.', 'Comply with victim notice and hearing requirements and avoid contact with the complainant or witnesses that could amount to pressure.'] },
  { title: 'White-Collar, Prevention of Corruption Act & PMLA Cases', text: 'CBI and ED matters require review of the designated forum and applicable statute. Section 45 PMLA contains additional bail conditions, subject to statutory exceptions and binding decisions; agency involvement alone does not determine the remedy.', points: ['Separate the allegations in the predicate offence from the money-laundering case and disclose orders in both.', 'Review arrest and remand records, the alleged financial role and supporting documents rather than relying only on transaction value.', 'Custody length, health and trial progress may require examination alongside statutory conditions and current binding judgments.'] },
]

const courts = [
  ['Bailable / Magistrate-triable regular bail', 'CJM / ACJM or competent Magistrate', 'District Court complex, Kaiserbagh, Lucknow 226001', 'Sections 478 / 480 BNSS'],
  ['Anticipatory bail & Sessions regular bail', 'District & Sessions Judge / competent ADJ', 'District Court complex, Kaiserbagh, Lucknow 226001', 'Sections 482 / 483 BNSS'],
  ['High Court bail & SC/ST bail appeals', 'Allahabad High Court, Lucknow Bench, where it has jurisdiction', 'Vibhuti Khand, Gomti Nagar, Lucknow 226010', 'Sections 482 / 483 BNSS; Section 14A SC/ST Act'],
  ['CBI / ED / other special-statute bail', 'Designated Special Judge under the applicable statute', 'Confirm the assigned Special Court and venue in Lucknow', 'PC Act / PMLA Section 45 / applicable special statute'],
]

const crossReferences = [
  ['Anticipatory bail', '482', '438'],
  ['Magistrate bail', '480', '437'],
  ['Sessions / High Court bail', '483', '439'],
  ['Default bail', '187(3)', '167(2)'],
  ['Notice of appearance', '35(3)', '41A'],
]

const documents = [
  'Certified or downloaded FIR, offence sections, police station and case number.',
  'Police notice, summons or NBW, with the date of service and attendance.',
  'Arrest memo, custody warrant and remand orders, where available.',
  'Prior bail applications and rejection orders, particularly before moving the High Court.',
  'Identity and residence records; proposed surety and solvency documents as required by the court.',
  'Relevant medical, employment and lawfully obtained supporting records; details of earlier cases and orders.',
  'A dated custody and hearing chronology, with the first remand order and any order extending the investigation period.',
  'Co-accused bail orders, if parity is raised, together with records explaining similarities or differences in the alleged roles.',
  'For NBW recall: the warrant order, earlier attendance or exemption orders, and records supporting the reason for absence.',
  'For sentence suspension: the conviction judgment, sentence order, appeal papers and custody details.',
]

const faqs = [
  { question: 'Which court in Lucknow hears an anticipatory bail application first?', answer: 'In U.P., an application under Section 482 BNSS (formerly Section 438 CrPC) is ordinarily made first to the Sessions Court. The Sessions Court and High Court have concurrent jurisdiction, but special circumstances for directly approaching the Allahabad High Court, Lucknow Bench must be explained, including the principles in Ankit Bharti v. State of U.P.' },
  { question: 'What is the difference between regular bail and anticipatory bail?', answer: 'Anticipatory bail is sought before arrest for an apprehended arrest in a non-bailable offence, where legally available. Regular bail under Sections 480 and 483 BNSS is sought after arrest. Bailable offences have a separate right-to-bail framework under Section 478 BNSS.' },
  { question: 'How long does it take to get anticipatory or regular bail in Lucknow?', answer: 'There is no guaranteed listing or disposal time. Filing scrutiny, notice to the prosecution or victim, the court roster, instructions, case records and special-statute requirements affect timing. Urgent listing or interim protection can be requested where justified, but neither is automatic.' },
  { question: 'Can police arrest me for offences punishable up to 7 years without a notice?', answer: 'Arrest must meet the statutory necessity requirements and reasons must be recorded. Section 35(3) BNSS requires a notice where arrest is not required under Section 35(1). Arnesh Kumar and Satender Kumar Antil address unnecessary arrest. Comply with a lawful notice; compliance does not rule out a later arrest where the law permits it and reasons are recorded.' },
  { question: 'What is default bail or statutory bail under Section 187(3) BNSS?', answer: 'Under the ordinary BNSS rule, the period is 90 days for offences punishable with death, life imprisonment or imprisonment of ten years or more, and 60 days for other offences. Failure to complete investigation within the applicable period may create a default bail right if the accused is prepared to furnish bail. Check custody calculations, transitional law and special-statute extensions, and assert the right promptly before the chargesheet is filed.' },
  { question: 'What happens if my bail application is rejected by the Sessions Court in Lucknow?', answer: 'Review the reasons and the maintainable High Court remedy with the rejection order and complete earlier applications. Regular or anticipatory bail may be sought under Sections 483 or 482 BNSS where available. SC/ST Act bail orders ordinarily require a Section 14A appeal. A successive application must disclose prior orders and relevant changes in circumstances.' },
  { question: 'What documents are needed to file a bail application in Lucknow?', answer: 'Bring the FIR, police notice or summons, remand papers if in custody, earlier bail applications and rejection orders, identity and address documents, and relevant supporting records. The registry and the particular court may require additional copies, affidavits or documents.' },
  { question: 'What surety and bail bond documents are required after bail is granted?', answer: 'The bail order determines the bond, sureties and conditions. Identity, address and financial verification documents may be required. Local sureties or a fixed number of sureties should not be assumed in every case. Seek clarification or modification if a condition cannot be met; a bail order does not itself complete release formalities.' },
  { question: 'Can anticipatory bail be granted in a Section 85 BNS (498A IPC) matrimonial case?', answer: 'Anticipatory bail can be sought where legally maintainable, subject to the allegations, connected offence sections and applicable restrictions. The court assesses the facts and arrest requirements. General allegations, cooperation or mediation may be relevant but do not guarantee protection.' },
  { question: 'How is bail decided in NDPS, U.P. Gangsters Act, or PMLA cases in Lucknow?', answer: 'These statutes can impose additional conditions beyond ordinary bail principles, including Section 37 NDPS, Section 19(4) U.P. Gangsters Act and Section 45 PMLA. Their scope, exceptions, custody circumstances and binding judgments must be examined separately. No result follows automatically from a quantity label or a claim of innocence.' },
  { question: 'Does a non-bailable offence mean bail cannot be granted?', answer: 'No. Non-bailable ordinarily means release is not available as the same automatic right that applies to a bailable offence. The competent court considers the application under the governing law, facts and restrictions. It is not a prediction that every application will be rejected.' },
  { question: 'Can anticipatory bail be sought before an FIR is registered?', answer: 'A registered FIR is not invariably a precondition, but the applicant must show a concrete and reasonable apprehension of arrest for an identifiable non-bailable allegation. A vague fear of a future complaint is not enough. The underlying facts, available records and statutory exclusions must be reviewed.' },
  { question: 'Can I apply again after a bail rejection?', answer: 'A later application must disclose the earlier applications and orders. Before the same court, identify a material change in circumstances rather than simply repeating rejected arguments. A High Court application after a Sessions rejection and a successive application before the same court are different procedural situations.' },
  { question: 'Will I get bail because a co-accused has been released?', answer: 'A co-accused order can support a parity argument where the alleged role and relevant circumstances are comparable. The court also examines differences in evidence, recovery, criminal history and conduct. Parity is not an automatic entitlement and the complete order should be disclosed.' },
  { question: 'Does filing a chargesheet make regular bail unavailable?', answer: 'No. A regular bail application can be considered after a chargesheet, subject to the governing statute and case circumstances. The effect of a chargesheet on an unasserted default bail right is a separate question. Do not confuse the two remedies or assume that completion of investigation guarantees release.' },
  { question: 'Can bail be granted if I have earlier criminal cases?', answer: 'Earlier cases and their status are relevant, but must be assessed accurately rather than treated as identical convictions. Disclose all known FIRs, bail orders, acquittals and pending proceedings. Concealment can undermine the application, and another custody warrant may prevent release even after bail in the present case.' },
  { question: 'Can I travel outside Lucknow or abroad after bail?', answer: 'Read the specific order for territorial restrictions, passport surrender, reporting and attendance requirements. Apply for permission or modification before travelling where required. A bail order in one case does not override restrictions or warrants in another proceeding.' },
  { question: 'Is a bail order the same as acquittal or FIR quashing?', answer: 'No. Bail concerns liberty during proceedings and is normally subject to conditions. Acquittal determines the prosecution outcome at trial or appeal; quashing challenges the legal continuation of proceedings. Bail does not remove the FIR or end the duty to attend court.' },
  { question: 'Does filing an NBW recall application automatically stop arrest?', answer: 'No. Filing a recall or bail application does not itself suspend a non-bailable warrant. Obtain the warrant order and assess recall, any surrender requirement and bail as separate steps. Protection requires an applicable court order; a proposed surrender date is not automatic protection.' },
]

const structuredData = [
  {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL, name: searchContent.title, inLanguage: 'en',
    workTranslation: { '@id': `${PAGE_URL}/hindi#webpage` },
  },
  {
    '@context': 'https://schema.org', '@type': 'LegalService', '@id': `${PAGE_URL}#legalservice`,
    ...LUCKNOW_SERVICE_LOCATION,
    name: 'Sumanjari & Co. Advocates — Bail & Anticipatory Bail in Lucknow',
    url: PAGE_URL, description: searchContent.description, telephone: CHAMBER_TEL.replace('tel:', ''),
    branchOf: { '@id': `${SITE_URL}/#organization` },
    areaServed: [{ '@type': 'City', name: 'Lucknow' }, { '@type': 'State', name: 'Uttar Pradesh' }],
    serviceType: ['Anticipatory bail', 'Regular bail', 'Default bail', 'NBW recall'],
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Criminal Lawyer in Lucknow', item: `${SITE_URL}/services/criminal-lawyer-lucknow` },
      { '@type': 'ListItem', position: 3, name: 'Bail & Anticipatory Bail in Lucknow', item: PAGE_URL },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: [...faqs, searchContent].map(({ question, answer }) => ({
      '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  },
]

function ConsultationActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link href="/#contact" className="btn-gold rounded-sm px-5 py-3.5 font-caps text-xs font-semibold uppercase tracking-widest text-navy-900">Consult Now</Link>
      <ServiceContactLinks whatsappHref={whatsappUrl('Need consultation regarding bail / police notice in Lucknow')} />
    </div>
  )
}

export default function BailLawyerPage() {
  const headingClass = 'mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
  const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'
  const blogPosts = getBlogPostsBySlugs(bailBlogSlugs)

  return (
    <main lang="en" className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/services/criminal-lawyer-lucknow" className="inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> Criminal Matters</Link>
            <ServiceLanguageSwitch basePath={PAGE_PATH} language="en" />
          </div>
          <header className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1fr)_252px]">
            <div className="min-w-0">
              <p className="mb-4 font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">Criminal Law · Bail Practice</p>
              <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">Bail &amp; Anticipatory Bail Lawyers in Lucknow — <em className="text-gold-gradient">Sessions Court &amp; Allahabad High Court (Lucknow Bench)</em></h1>
              <p className={`mb-6 text-lg ${bodyClass}`}>{searchContent.description}</p>
              <p className={bodyClass}>Our bail practice is led by Adv. Aditya Narayan Shukla, with Adv. Jitendra Tiwari and our criminal team. The remedy depends on the offence, custody status, applicable statute and jurisdiction. For trial, appeals or challenges to proceedings, see <Link href="/services/criminal-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">Criminal Defence &amp; FIR Quashing in Lucknow</Link>.</p>
              <ServiceStats service="criminal" />
              <div className="hidden md:block"><ConsultationActions /></div>
            </div>
            {bailLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {bailLead.img && <Image src={bailLead.img} alt={bailLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: bailLead.focus }} />}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Criminal Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{bailLead.name}</h2>
                <p className={`mt-2 text-sm ${bodyClass}`}>{bailLead.role}</p>
                <p className={`mt-2 text-sm ${bodyClass}`}>{bailLead.credentials}</p>
                <Link href={`/team/${bailLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">View Profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
              </div>
            )}
            <div className="md:hidden"><ConsultationActions /></div>
          </header>
          <GuideToc items={[
            { id: 'immediate-bail', label: 'Immediate situations' }, { id: 'bail-remedies', label: 'Bail remedies' },
            { id: 'special-statutes', label: 'Special statutes' }, { id: 'bail-assessment', label: 'Grounds & evidence' },
            { id: 'police-notice-remand', label: 'Notice, arrest & NBW', children: [{ id: 'nbw-recall', label: 'Warrant recall' }] },
            { id: 'bail-courts', label: 'Court jurisdiction' }, { id: 'bail-cross-reference', label: 'BNSS / CrPC' },
            { id: 'default-bail-deadlines', label: 'Custody & default bail deadlines' }, { id: 'bail-process', label: 'Process & documents' },
            { id: 'bail-release-conditions', label: 'Release, sureties & conditions' },
            { id: 'bail-team', label: 'Practice team' }, { id: 'lucknow-chambers', label: 'Chambers & directions' },
            { id: 'bail-faqs', label: 'FAQs' },
          ]} />
          <section id="immediate-bail" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Immediate Bail &amp; Pre-Arrest Situations in Lucknow</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{urgentSituations.map(item => (
              <Link key={item.title} href={item.href} className="glass-card rounded-sm border border-gold-500/20 p-6 transition-colors hover:border-gold-500/60">
                <ShieldCheck aria-hidden="true" className="mb-4 h-5 w-5 text-gold-600 dark:text-gold-400" />
                <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={`text-sm ${bodyClass}`}>{item.text}</p>
              </Link>
            ))}</div>
          </section>
          <section id="bail-remedies" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Types of Bail Remedies We Handle in Lucknow</h2>
            <div className="grid gap-5 sm:grid-cols-2">{remedies.map(item => (
              <article key={item.title} className="glass-card rounded-sm border border-gold-500/20 p-6"><KeyRound aria-hidden="true" className="mb-4 h-5 w-5 text-gold-600 dark:text-gold-400" /><h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={bodyClass}>{item.text}</p></article>
            ))}</div>
          </section>
          <section id="special-statutes" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Bail Under Special Statutes &amp; High-Stakes Offences in Lucknow</h2>
            <div className="grid gap-8 sm:grid-cols-2">{specialStatutes.map(item => (
              <article key={item.title}><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={bodyClass}>{item.text}</p><ul className={`mt-4 list-disc space-y-3 pl-5 text-sm ${bodyClass}`}>{item.points.map(point => <li key={point}>{point}</li>)}</ul>{item.href && <Link href={item.href} className="mt-3 inline-block font-body text-gold-700 underline dark:text-gold-400">{item.label}</Link>}</article>
            ))}</div>
          </section>
          <section id="bail-assessment" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>How Courts Assess Bail: Grounds, Evidence &amp; Risks</h2>
            <div className={`space-y-5 ${bodyClass}`}>
              <p>A bail hearing is not a full trial or a declaration of innocence. The court assesses whether release is legally available and appropriate at that stage, considering the allegations, the material available and the risks associated with release. A non-bailable offence does not mean that bail is impossible; it means the application must be considered under the applicable discretionary framework and any statutory restrictions.</p>
              <p>The alleged role matters. A person named alongside several others may face different allegations, recoveries or evidence. Preparation should identify the specific acts attributed to the applicant, the source of the accusation, any material inconsistencies and the stage of investigation. An unsupported denial is not a substitute for a record-based response, and a bail application should not claim that disputed facts have already been conclusively decided.</p>
            </div>
            <dl className={`mt-7 space-y-5 ${bodyClass}`}>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Investigation, custody and the need for further detention</dt><dd>Check what investigation remains, whether recovery or questioning is sought, and whether the applicant has cooperated. Completion of investigation may be relevant, but neither filing a chargesheet nor offering cooperation automatically establishes a right to regular bail.</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Attendance and interference concerns</dt><dd>Residence, employment and prior attendance can help address an alleged risk of absconding. The court may also consider witness intimidation, evidence tampering and breach of earlier conditions. Support assertions with records and propose workable safeguards rather than assurances that cannot be checked.</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Parity, criminal history and personal circumstances</dt><dd>Provide complete co-accused orders and explain comparable roles if relying on parity. Disclose earlier cases with their actual status. Health, age, caregiving responsibilities and trial delay may require consideration, but a medical document, a clean record or a similar order is not by itself a guarantee of release.</dd></div>
            </dl>
            <p className={`mt-6 ${bodyClass}`}>Bail, acquittal and quashing are different remedies. For a challenge to the FIR or criminal proceedings themselves, review the maintainable route with our <Link href="/services/criminal-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">criminal defence and FIR quashing practice</Link>; filing that challenge does not substitute for a bail order.</p>
          </section>
          <section id="police-notice-remand" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Police Notice, Arrest &amp; Non-Bailable Warrants: Practical Next Steps</h2>
            <div className="space-y-8">
              <article>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Responding to a Section 35(3) BNSS Notice</h3>
                <div className={`space-y-4 ${bodyClass}`}>
                  <p>Keep the complete notice and record when and how it was received. Verify the police station, officer, FIR or enquiry reference, attendance date and any records requested. A notice of appearance, a witness summons and a court summons are not interchangeable; identify which document has actually been served.</p>
                  <p>Arrange legal advice before the attendance date, respond lawfully and preserve an acknowledgment of attendance or written communication. If illness or another genuine obstacle prevents attendance, communicate it promptly with supporting records and seek instructions rather than assuming a rescheduled date. Do not ignore the notice, alter evidence or contact witnesses to coordinate accounts.</p>
                  <p>Arnesh Kumar and Satender Kumar Antil address unnecessary arrest and related procedural safeguards. Their principles must be applied to the alleged offence and statutory conditions; they are not a general promise that a person who receives or complies with a notice cannot be arrested.</p>
                </div>
              </article>
              <article>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">After Arrest: Information, Legal Assistance &amp; Remand</h3>
                <div className={`space-y-4 ${bodyClass}`}>
                  <p>Record the arrest time, place, police station and the person informed. Section 47 BNSS concerns communication of the grounds of arrest and the right to bail in bailable offences; Section 48 concerns informing a relative or friend. Section 38 provides a right to meet an advocate during interrogation, though not throughout interrogation. These safeguards should be assessed from the actual arrest record.</p>
                  <p>Article 22(2) and Section 58 BNSS require production before a Magistrate within 24 hours, excluding necessary travel time. Remand is a judicial decision, not simply an extension of police custody on request. Review the remand application, the grounds for custody and relevant medical concerns, and place any alleged non-compliance before the competent court.</p>
                  <p>A family member can gather the FIR, arrest memo, remand papers and relevant medical records and contact counsel or the District Legal Services Authority. Do not assume that a Magistrate’s remand order decides the eventual bail application or the prosecution outcome.</p>
                </div>
              </article>
              <article id="nbw-recall" className="scroll-mt-28">
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">NBW Recall, Surrender &amp; Bail Are Separate Decisions</h3>
                <div className={`space-y-4 ${bodyClass}`}>
                  <p>Obtain the warrant order and preceding order sheets to understand why an NBW was issued. Missed attendance, disputed service, an earlier exemption request and an alleged breach of bail can require different responses. A genuine reason for absence should be supported by dated records, not a retrospective explanation without evidence.</p>
                  <p>The court that issued the warrant ordinarily considers its recall or cancellation, subject to the available legal remedy. Counsel should assess whether personal appearance or surrender is required and whether a separate bail application must accompany it. Existing proclamation or attachment proceedings require additional review.</p>
                  <p>Neither a recall application nor a proposed surrender date automatically suspends the warrant. Obtain and read the court’s actual order, and comply with directions on appearance. Do not treat a warrant as a document that can be resolved by an informal payment or an assurance from someone outside the court process.</p>
                </div>
              </article>
            </div>
          </section>
          <section id="bail-courts" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Which Court Hears Your Bail Application in Lucknow?</h2>
            <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left font-body text-sm">
              <caption className={`mb-3 text-left ${bodyClass}`}>Ordinary forums, subject to offence, territorial jurisdiction and current court assignment</caption>
              <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">{['Bail stage / statute', 'Court forum', 'Location', 'Governing provision'].map(label => <th key={label} scope="col" className="p-3">{label}</th>)}</tr></thead>
              <tbody className="text-navy-800 dark:text-cream/75">{courts.map(([stage, ...cells]) => <tr key={stage} className="border-b border-gold-500/15 align-top"><th scope="row" className="p-3 font-semibold">{stage}</th>{cells.map(cell => <td key={cell} className="p-3">{cell}</td>)}</tr>)}</tbody>
            </table></div>
            <p className={`mt-5 ${bodyClass}`}>Confirm the registry, cause list and assigned courtroom before travelling. A chamber appointment is not a court hearing. Not every FIR can be brought before the Lucknow Bench.</p>
          </section>
          <section id="bail-cross-reference" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Statutory Cross-Reference: BNSS 2023 vs. CrPC 1973 for Bail</h2>
            <p className={`mb-5 ${bodyClass}`}>BNSS took effect on 1 July 2024. The savings provision in Section 531 and the procedural history determine whether an older proceeding continues under CrPC; corresponding section numbers do not make every rule identical.</p>
            <div className="overflow-x-auto"><table className="w-full min-w-[400px] text-left font-body text-sm">
              <caption className="sr-only">Corresponding bail and notice provisions</caption>
              <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">{['Remedy', 'BNSS section', 'CrPC section'].map(label => <th key={label} scope="col" className="p-3">{label}</th>)}</tr></thead>
              <tbody className="text-navy-800 dark:text-cream/75">{crossReferences.map(([remedy, bnss, crpc]) => <tr key={remedy} className="border-b border-gold-500/15"><th scope="row" className="p-3 font-semibold">{remedy}</th><td className="p-3">{bnss}</td><td className="p-3">{crpc}</td></tr>)}</tbody>
            </table></div>
          </section>
          <section id="default-bail-deadlines" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Default Bail: Reading the Custody Record Before the Deadline</h2>
            <p className={`mb-5 ${bodyClass}`}>Default bail is about the investigating agency’s failure to complete investigation within the applicable statutory period, not a finding that the accusation is false. A family’s recollection of the arrest date is not enough to calculate it. Review the first remand, later custody orders, applicable offence classification and any lawful extension under a special statute.</p>
            <ol className={`list-decimal space-y-4 pl-5 ${bodyClass}`}>
              <li><strong className="text-navy-900 dark:text-cream">Identify the governing procedural law.</strong> Check whether BNSS or saved CrPC procedure applies. Similar section numbers do not resolve transitional questions or differences in the wording of the applicable deadline.</li>
              <li><strong className="text-navy-900 dark:text-cream">Build a dated custody ledger.</strong> Collect arrest and first remand records, subsequent orders and the custody status in each case. Counsel should verify how the relevant days are counted under binding law, rather than using an informal calendar estimate.</li>
              <li><strong className="text-navy-900 dark:text-cream">Check ordinary periods and special extensions.</strong> Section 187(3) BNSS ordinarily uses 60 or 90 days according to the punishment specified. Special statutes may prescribe different periods or permit extensions with stated safeguards. Obtain any extension application and order and review their validity.</li>
              <li><strong className="text-navy-900 dark:text-cream">Verify filing and assert the right in time.</strong> Confirm the chargesheet or prosecution complaint status from the court record. Once the right accrues, a properly made application and readiness to furnish bail are important; preserve the dated filing acknowledgment and orders.</li>
              <li><strong className="text-navy-900 dark:text-cream">Distinguish an asserted right from an unasserted one.</strong> A later chargesheet does not ordinarily defeat a default bail right properly asserted while available. If no application was made before the chargesheet, regular bail on the merits is a different route. The exact filing sequence must be established.</li>
            </ol>
            <p className={`mt-6 ${bodyClass}`}>An ongoing supplementary investigation does not, by itself, establish that no qualifying chargesheet has been filed. Whether a purported filing is legally sufficient can be contested, but must be examined from the filed papers and applicable law. Default bail also remains subject to bond requirements and other lawful release conditions.</p>
          </section>
          <section id="bail-process" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Step-by-Step Bail Filing Process &amp; Documents Checklist in Lucknow</h2>
            <h3 className="mb-4 font-display text-xl font-bold text-navy-900 dark:text-cream">Documents Required for Anticipatory &amp; Regular Bail</h3>
            <ul className={`mb-8 list-disc space-y-3 pl-5 ${bodyClass}`}>{documents.map(item => <li key={item}>{item}</li>)}</ul>
            <h3 className="mb-4 font-display text-xl font-bold text-navy-900 dark:text-cream">Timeline: Filing, Notice, Hearing &amp; Bail Bond Verification</h3>
            <ol className={`list-decimal space-y-4 pl-5 ${bodyClass}`}>
              <li><strong className="text-navy-900 dark:text-cream">Case intake and forum review.</strong> Record the FIR, offence sections, arrest or notice status, prior orders and immediate deadlines. Determine whether the application concerns pre-arrest protection, post-arrest release, an accrued default bail right or sentence suspension. Explain the proposed forum, scope of work and professional fees separately from court and copying expenses.</li>
              <li><strong className="text-navy-900 dark:text-cream">Drafting, disclosure and supporting records.</strong> Prepare the application and affidavit around the alleged role, relevant bail grounds and available evidence. Disclose earlier applications, withdrawn applications and criminal history accurately. Include legible orders and records; do not file guessed dates or unsupported statements merely to complete a form.</li>
              <li><strong className="text-navy-900 dark:text-cream">Filing scrutiny and notice.</strong> Follow the registry’s current filing or e-filing requirements, address defects and obtain the case or filing reference. State / AGA instructions and victim notice requirements may affect listing. Ask about urgent listing where justified, but distinguish a filing receipt from a listed hearing and from an interim protection order.</li>
              <li><strong className="text-navy-900 dark:text-cream">Hearing and response to objections.</strong> Address the prosecution’s position on the alleged role, investigation needs, past cases, witness safety and any special-statute threshold. Provide current orders or records where directed. If relief is refused, obtain the order and assess the next maintainable remedy rather than filing the same application without new grounds.</li>
              <li><strong className="text-navy-900 dark:text-cream">Order, release formalities and continuing compliance.</strong> Read the operative directions, complete bonds and surety verification, and confirm transmission of the release order. Check for custody in another case. Maintain a record of reporting and hearing dates and seek permission before any action restricted by the bail order.</li>
            </ol>
            <p className={`mt-6 ${bodyClass}`}>Related reading: <Link href={`/blog/${bailBlogSlugs[0]}`} className="text-gold-700 underline dark:text-gold-400">Pre-arrest rights &amp; anticipatory bail</Link> and <Link href={`/blog/${bailBlogSlugs[1]}`} className="text-gold-700 underline dark:text-gold-400">Regular bail &amp; default statutory bail</Link>.</p>
          </section>
          <section id="bail-release-conditions" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>After Bail Is Granted: Bonds, Release &amp; Conditions</h2>
            <div className="space-y-8">
              <article>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Why Release May Not Be Immediate</h3>
                <p className={bodyClass}>The operative order may require a personal bond, sureties, identity or financial verification and additional undertakings. Release depends on completing the directed process and the jail receiving an effective release order. Check the case number and accused details for errors, the status of verification and any separate detention or custody warrant. Bail in one FIR does not automatically release a person held in another.</p>
              </article>
              <article>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Bond Amount, Sureties &amp; Financial Difficulty</h3>
                <p className={bodyClass}>Follow the actual order rather than assuming that every case requires two local property-owning sureties. The number, amount and verification process depend on the directions and applicable law. A surety undertakes a legal obligation, and false documents or misstatements create separate risks. If an amount or condition is genuinely unaffordable or impracticable, place the supporting circumstances before the competent court and seek appropriate clarification or modification instead of ignoring it.</p>
              </article>
              <article>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Reporting, Travel &amp; Court Attendance</h3>
                <p className={bodyClass}>Make a written checklist of every reporting date, attendance requirement, address-update obligation, passport direction and restriction on contact with witnesses. Keep acknowledgments of compliance. Work travel, medical appointments or relocation may require permission if restricted by the order. Do not assume that counsel’s attendance replaces personal appearance unless the court has granted an applicable exemption.</p>
              </article>
              <article>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Cancellation, Breach Allegations &amp; Modification</h3>
                <p className={bodyClass}>A request to modify a condition is different from an application to cancel bail or a challenge to an allegedly improper grant. Allegations of absconding, intimidation, evidence interference, concealment or breach require a prompt, record-based response. Preserve attendance records and communications, review the stated grounds and any immediate directions, and continue complying with the existing order unless the court changes it.</p>
              </article>
            </div>
            <p className={`mt-6 ${bodyClass}`}>Bail does not end the prosecution. Continue monitoring the hearing schedule, chargesheet and trial, and consult counsel about connected orders. A missed date should be addressed promptly; do not wait for a fresh warrant to clarify an attendance problem.</p>
          </section>
          <section id="bail-team" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Bail &amp; Criminal Practice Team in Lucknow</h2>
            <p className={`mb-8 ${bodyClass}`}>Adv. Aditya Narayan Shukla leads the criminal practice, supported by Adv. Jitendra Tiwari, Adv. Abhishek Mishra, Adv. Shishir Pandey and Adv. Priyesh Dwivedi. Review their recorded credentials and profiles below; case allocation depends on the forum and needs of the matter.</p>
            <TeamCarousel members={bailTeam} label="Bail and criminal practice team members" />
          </section>
          <LucknowChambers />
          <ServiceSelection content={searchContent} />
          <section id="bail-faqs" lang="en" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Bail Lawyer in Lucknow: Frequently Asked Questions</h2>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">{faqs.map(item => (
              <details key={item.question} className="py-5"><summary className="cursor-pointer font-display text-lg font-semibold text-navy-900 dark:text-cream">{item.question}</summary><p className={`mt-3 ${bodyClass}`}>{item.answer}</p></details>
            ))}</div>
          </section>
          <ServiceBlogs posts={blogPosts} heading="Bail & Anticipatory Bail: Related Reading" fallbackIcon={<KeyRound aria-hidden="true" className="h-8 w-8 text-gold-600" />} />
          <section className="mt-12 border-t border-gold-500/20 pt-8">
            <p className={`text-sm ${bodyClass}`}>This page provides general legal information, not individual legal advice or a promise of bail. Applicable law, current judgments and court directions must be checked for each case. If representation is unaffordable, ask the District Legal Services Authority, Lucknow about legal aid.</p>
            <ConsultationActions />
          </section>
        </div>
      </section>
      <Footer />
    </main>
  )
}
