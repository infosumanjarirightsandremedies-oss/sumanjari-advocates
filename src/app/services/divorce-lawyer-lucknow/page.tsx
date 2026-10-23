import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Phone, HeartCrack, HeartHandshake, HandCoins, Baby, ShieldCheck, Scale, ScrollText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { divorceStages, divorceStatutes, divorceToc } from '@/lib/guides/divorceLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const PAGE_PATH = '/services/divorce-lawyer-lucknow'
const divorceLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const divorceTeam = ['akhilesh-yadav', 'prerna-yaduvanshi', 'jitendra-tiwari']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

export const metadata: Metadata = {
  title: { absolute: 'Divorce Lawyer in Lucknow | Mutual & Contested | Sumanjari' },
  description: 'Divorce lawyer in Lucknow: 10-stage guide to mutual and contested divorce, alimony and custody at the Family Court, Qaiserbagh and appeals at the Lucknow Bench.',
  keywords: ['Divorce Advocate in Lucknow', 'Divorce Lawyer in Lucknow', 'Mutual Consent Divorce Lawyer Lucknow', 'Contested Divorce Lawyer Lucknow', 'Alimony Lawyer Lucknow', 'Child Custody Lawyer Lucknow', 'Family Court Advocate Lucknow'],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Divorce Advocate & Lawyer in Lucknow | Sumanjari & Co.',
    description: 'Divorce and matrimonial representation led by Adv. Aishwarya Pandey: mutual consent divorce, contested proceedings, maintenance, and child custody in Lucknow.',
    url: PAGE_PATH,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divorce Lawyer in Lucknow | Mutual & Contested Divorce',
    description: 'Aishwarya Pandey leads advice on divorce, alimony, parenting arrangements and connected matrimonial proceedings.',
  },
}

const services = [
  {
    icon: HeartHandshake,
    title: 'Mutual Consent Divorce',
    text: 'When both spouses agree to separate, a clear settlement can reduce uncertainty. We assist with joint petitions, first and second motion proceedings, and applications for waiver of the cooling-off period where legally available.',
    points: ['Documenting voluntary consent and the terms of separation', 'Recording alimony, custody, visitation, and return of belongings', 'Coordinating settlement obligations with connected proceedings'],
  },
  {
    icon: HeartCrack,
    title: 'Contested Divorce',
    text: 'When consent or settlement is not possible, the petition must establish a ground recognised by the applicable marriage law. We prepare and defend petitions, assess evidence, and represent clients through interim applications, hearings, and trial.',
    points: ['Advice on grounds such as cruelty, desertion, or adultery', 'Petitions, replies, evidence, and cross-examination', 'Defence against disputed allegations and unsupported claims'],
  },
  {
    icon: HandCoins,
    title: 'Maintenance & Alimony',
    text: 'Financial arrangements need to account for actual income, reasonable needs, dependants, and existing orders. We assist with interim support, litigation expenses, permanent alimony, and settlement structures suited to the facts.',
    points: ['Income and asset disclosures and supporting records', 'Applications and responses under applicable maintenance provisions', 'Enforcement, variation, and adjustment of overlapping awards'],
  },
  {
    icon: Baby,
    title: 'Child Custody & Parenting Arrangements',
    text: 'The welfare of the child is central to custody decisions. We help parents seek workable arrangements for care, schooling, holidays, communication, and access, including interim relief while the divorce remains pending.',
    points: ['Custody, guardianship, and visitation applications', 'Parenting schedules and child-support arrangements', 'Relocation, access disputes, and changing circumstances'],
  },
  {
    icon: ShieldCheck,
    title: 'Domestic Violence & Connected Proceedings',
    text: 'A divorce may run alongside protection, residence, maintenance, or criminal proceedings. We assess each case separately and coordinate the strategy so that pleadings, disclosures, and settlement steps remain consistent.',
    points: ['Protection and residence relief under the Domestic Violence Act', 'Representation in connected matrimonial cruelty proceedings', 'Lawful settlement, withdrawal, or quashing steps where permissible'],
  },
  {
    icon: Scale,
    title: 'Judicial Separation & Annulment',
    text: 'Divorce is not the only matrimonial remedy. Judicial separation does not dissolve the marriage, while annulment concerns a marriage that is void or voidable on statutory grounds. We assess which remedy is legally appropriate.',
    points: ['Distinguishing separation from dissolution of marriage', 'Review of grounds, limitation, and supporting evidence', 'Petitions and defence under the governing marriage law'],
  },
]

const grounds = [
  { title: 'Cruelty', text: 'Physical or mental cruelty may be a divorce ground under the governing law. The court examines the conduct and its context; ordinary disagreements do not automatically establish cruelty. A careful chronology and reliable supporting material are important.' },
  { title: 'Desertion', text: 'Under the Hindu Marriage Act, desertion must ordinarily continue for at least two years immediately before the petition. Separation alone is not sufficient: intention, consent, reasonable cause, and the surrounding facts matter.' },
  { title: 'Adultery & Other Statutory Grounds', text: 'Adultery remains a civil divorce ground under relevant marriage laws even though it is no longer a criminal offence. Other grounds depend on the applicable statute and must meet its conditions. Evidence must be obtained lawfully, without unauthorised access to accounts or devices.' },
]

const documents = [
  'Marriage certificate, if available, and other evidence of the marriage such as photographs or invitations.',
  'Identity and address documents, and details of the marriage location, residence, and last shared home.',
  'A dated account of significant events, separation, reconciliation attempts, and earlier proceedings.',
  'Income records, salary slips, tax returns, bank statements, assets, liabilities, and relevant expenses.',
  'Children\'s birth certificates, school records, care arrangements, and education or medical expenses.',
  'Copies of notices, complaints, petitions, court orders, and existing settlement agreements.',
  'Lawfully obtained communications, medical records, or evidence relevant to the pleaded grounds.',
  'Details of stridhan, jewellery, belongings, and jointly held property relevant to settlement terms.',
]

const faqs = [
  { question: 'How do I choose between mutual consent and contested divorce?', answer: 'Mutual consent divorce requires both spouses to agree to dissolve the marriage and maintain consent through the required proceedings. A contested divorce may be appropriate when one spouse does not agree or key issues remain unresolved, but a recognised statutory ground must be established. We assess the applicable law and evidence before recommending a route.' },
  { question: 'How long does a divorce take in Lucknow?', answer: 'There is no fixed completion time for every case. The applicable statute, service of notice, settlement, evidence, connected applications, and the court\'s schedule all affect duration. Mutual consent proceedings are generally less extensive than a contested trial, but no decree date can be guaranteed.' },
  { question: 'Can the six-month cooling-off period be waived?', answer: 'In appropriate mutual consent cases under Section 13B of the Hindu Marriage Act, the court may waive the six-month interval between motions after considering the applicable legal criteria. Waiver is discretionary, not automatic, and does not remove other eligibility requirements or the need for continuing consent.' },
  { question: 'Is one year of separation necessary for mutual consent divorce?', answer: 'Section 13B of the Hindu Marriage Act ordinarily requires the spouses to have lived separately for at least one year, to be unable to live together, and to agree to dissolve the marriage. Living separately concerns the marital relationship and does not always mean different addresses. Requirements under other laws must be checked separately.' },
  { question: 'Can I file in Lucknow if my spouse lives elsewhere?', answer: 'Possibly, depending on the applicable jurisdiction provisions. Under the Hindu Marriage Act, relevant connections can include where the marriage was solemnised, where the respondent resides, where the spouses last resided together, and, for a wife filing a petition, where she resides when filing. Special situations and other marriage laws require a separate assessment.' },
  { question: 'How are maintenance and permanent alimony decided?', answer: 'Courts consider factors such as income, earning capacity, assets, reasonable needs, dependants, and the circumstances of the parties. There is no universal percentage or automatic entitlement to a particular amount. Existing maintenance orders and financial disclosures are important to the assessment.' },
  { question: 'Who gets custody of the children after divorce?', answer: 'The child\'s welfare is the paramount consideration. Courts examine care, stability, education, safety, and other relevant circumstances, including the child\'s wishes where appropriate. Custody is not determined solely by a parent\'s gender or income. Visitation and child support may be addressed separately.' },
  { question: 'Does divorce automatically divide property equally?', answer: 'No general rule automatically divides all property equally on divorce in India. Title, contributions, the nature of the asset, applicable law, and negotiated terms matter. Stridhan is distinct from jointly held assets. A settlement should identify each asset and the steps needed to transfer or return it.' },
  { question: 'What if my spouse withdraws consent or refuses to attend?', answer: 'A mutual consent decree ordinarily requires continuing consent at the relevant stages. If consent is withdrawn or attendance becomes an issue, the available procedural options must be assessed. A contested petition is not an automatic substitute and requires its own legal basis.' },
  { question: 'Do connected criminal cases end with a divorce settlement?', answer: 'A settlement may provide for lawful steps in connected cases, but a divorce decree does not automatically close a criminal complaint or domestic violence proceeding. Withdrawal, compounding, or High Court quashing depends on the nature of the case and the court\'s approval where required.' },
  { question: 'What does divorce representation cost?', answer: 'Fees depend on the scope of advice, drafting, hearings, interim applications, evidence, and any appeal. After reviewing the matter, the team can explain the proposed scope and fee arrangement. Court fees and other expenses should be distinguished from professional fees.' },
  { question: 'Where is the Family Court in Lucknow and which cases does it hear?', answer: 'The Family Court, Lucknow sits on Wala Qadar Road, Qaiserbagh, near Parivartan Chowk, and hears divorce, judicial separation, restitution, maintenance, custody, and guardianship matters for Lucknow residents and others who meet the jurisdiction requirements. Not every matrimonial dispute connected to Lucknow is automatically maintainable here; the statutory basis for jurisdiction must be checked.' },
  { question: 'Can an NRI spouse take part in a Lucknow divorce by video-conference?', answer: 'Courts have increasingly permitted appearance and evidence by video-conference where travel is impractical, but this is allowed at the court\'s discretion and is not an automatic right. We assess whether video-conference participation is realistic for a given hearing, and coordinate service and representation where one spouse lives abroad. Our NRI legal services team can also assist with related cross-border issues.' },
  { question: 'Where do I appeal a Lucknow Family Court divorce decree?', answer: 'An appeal from a decree of the Family Court, Lucknow lies to the Allahabad High Court, Lucknow Bench at Gomti Nagar. Limitation for filing the appeal is strict and should be confirmed immediately from the certified copy of the decree, since different provisions prescribe different periods depending on which statute is invoked.' },
]

const structuredData = [
  {
    '@context': 'https://schema.org', '@type': 'LegalService',
    name: 'Sumanjari & Co. Advocates - Divorce Advocate & Lawyer in Lucknow',
    url: `${SITE_URL}${PAGE_PATH}`, description: metadata.description,
    telephone: CHAMBER_TEL.replace('tel:', ''),
    email: 'info.sumanjarirightsandremedies@gmail.com',
    areaServed: [{ '@type': 'City', name: 'Lucknow' }, { '@type': 'State', name: 'Uttar Pradesh' }],
    serviceType: 'Divorce and Matrimonial Legal Services',
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: faqs.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Family Advocate & Lawyer in Lucknow', item: `${SITE_URL}/services/family-advocate` },
      { '@type': 'ListItem', position: 3, name: 'Divorce Advocate & Lawyer in Lucknow', item: `${SITE_URL}${PAGE_PATH}` },
    ],
  },
]

function ConsultationActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-6 py-3.5 font-caps text-xs font-semibold uppercase tracking-widest text-navy-900">Consult Now</Link>
      <a href={CHAMBER_TEL} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-500/40 px-6 py-3.5 font-caps text-xs font-semibold uppercase tracking-widest text-navy-800 transition-colors hover:border-gold-500 dark:text-cream/85"><Phone aria-hidden="true" className="h-4 w-4 shrink-0" /> Call Now</a>
    </div>
  )
}

export default async function DivorceLawyerPage() {
  const familyBlogPosts = getBlogPostsByCategory('Family & Matrimonial Matters')
  const headingClass = 'mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
  const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'

  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/services/family-advocate" className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /> Family &amp; Matrimonial Matters</Link>

          <header className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1fr)_252px]">
            <div className="min-w-0">
              <p className="mb-4 font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">Family Law</p>
              <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">Divorce Advocate &amp; Lawyer <em className="text-gold-gradient">in Lucknow</em></h1>
              <p className={`mb-6 text-lg ${bodyClass}`}>Discreet representation for mutual consent divorce, contested proceedings, maintenance, and child custody before the Family Court, Lucknow and appropriate appellate forums.</p>
              <p className={`mb-8 ${bodyClass}`}>Our divorce and matrimonial practice is led by <strong className="text-navy-900 dark:text-cream">Adv. Aishwarya Pandey</strong>, Associate Partner at Sumanjari &amp; Co. Advocates. We help you understand the available remedies, prepare your case, and address the financial and parenting decisions that accompany separation.</p>
              <p className={`mb-8 ${bodyClass}`}>Divorce petitions for Lucknow are heard by the Family Court, Lucknow at Wala Qadar Road, Qaiserbagh (Principal Judge and Additional Principal Judges); appeals go to the Allahabad High Court, Lucknow Bench at Gomti Nagar; the ten stages below explain each step.</p>
              <ServiceStats service="divorce" />
              <div className="hidden md:block">
                <ConsultationActions />
              </div>
            </div>
            {divorceLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {divorceLead.img && <Image src={divorceLead.img} alt={divorceLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: divorceLead.focus }} />}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Divorce Practice Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{divorceLead.name}</h2>
                <p className={`mt-2 text-sm ${bodyClass}`}>{divorceLead.role}</p>
                <p className={`mt-2 text-sm ${bodyClass}`}>{divorceLead.credentials}</p>
                <Link href={`/team/${divorceLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">View Profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
              </div>
            )}
            <div className="md:hidden">
              <ConsultationActions />
            </div>
          </header>

          <GuideToc items={divorceToc} />

          <section className="mb-16" aria-labelledby="divorce-team">
            <h2 id="divorce-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Divorce &amp; Matrimonial Support Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aishwarya Pandey leads our divorce practice. Supporting
              advocates bring recorded experience in family, matrimonial and
              connected civil proceedings, with allocation based on the needs
              of the case.
            </p>
            <TeamCarousel members={divorceTeam} label="Divorce and matrimonial team members" />
          </section>

          <section className="mb-16">
            <h2 className={headingClass}>Clear Advice at a Difficult Turning Point</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>Ending a marriage involves more than obtaining a decree. Decisions about children, financial support, housing, belongings, and pending disputes can shape everyday life long after proceedings conclude. Our approach begins with understanding your circumstances, identifying immediate concerns, and explaining the remedies under the law governing your marriage.</p>
              <p>We assist spouses seeking an amicable separation as well as clients who need to file or defend contested proceedings. Where negotiation is realistic, we work towards precise and workable settlement terms. Where litigation is necessary, we focus on accurate pleadings, reliable evidence, and preparation for court rather than promises of a particular result.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className={headingClass}>Divorce &amp; Matrimonial Services We Handle</h2>
            <div className="grid gap-5 sm:grid-cols-2">{services.map(({ icon: Icon, title, text, points }) => (
              <article key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40"><Icon aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" /></div>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{title}</h3>
                <p className={`mb-4 text-sm ${bodyClass}`}>{text}</p>
                <ul className="space-y-2">{points.map((point) => <li key={point} className={`flex gap-2.5 text-sm ${bodyClass}`}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" /><span>{point}</span></li>)}</ul>
              </article>
            ))}</div>
          </section>

          <section id="mutual-vs-contested" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>Mutual Consent or Contested Divorce?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">An Agreed Separation</h3><p className={bodyClass}>Mutual consent divorce is based on a shared decision to end the marriage. Before filing, spouses should settle financial support, parenting arrangements, return of belongings, and how connected proceedings will be addressed. Clear payment milestones and compliance terms help prevent later disputes. Consent must remain voluntary through the legally required stages.</p></div>
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">A Disputed Petition</h3><p className={bodyClass}>Contested divorce requires the court to decide whether a statutory ground has been proved. The other spouse can respond and challenge the evidence. Interim maintenance or custody may need attention while the case continues. Even after litigation begins, mediation or settlement can remain an option if lawful and freely accepted.</p></div>
            </div>
          </section>

          <StatuteTable
            id="statutory-framework"
            heading="Which Law Applies to Your Marriage?"
            intro="The marriage framework determines the grounds, eligibility, procedure, and relief. A marriage certificate and details of the ceremony or registration help identify the correct starting point."
            rows={divorceStatutes}
          />

          <section id="grounds" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Grounds for a Contested Divorce</h2>
            <div className="space-y-6">{grounds.map(({ title, text }) => <div key={title} className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{title}</h3><p className={bodyClass}>{text}</p></div>)}</div>
            <p className={`mt-6 text-sm ${bodyClass}`}>Long separation or relationship breakdown does not, by itself, create an ordinary Family Court ground called irretrievable breakdown under the Hindu Marriage Act. The Supreme Court&apos;s exceptional powers are distinct from statutory grounds available in a regular divorce petition.</p>
          </section>

          <GuideStages
            id="divorce-procedure"
            heading="Divorce Procedure in Lucknow: Stage 1 to Stage 10"
            intro="How a divorce case moves through the Family Court, Lucknow, from first consultation to decree, enforcement, and appeal at the Allahabad High Court, Lucknow Bench."
            stages={divorceStages}
          />

          <section id="documents" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>Documents to Prepare for Your Consultation</h2>
            <p className={`mb-6 ${bodyClass}`}>Exact filing requirements depend on your case. Bring the records you already have; missing documents can be discussed at the consultation. Preserve originals and avoid altering messages or other evidence.</p>
            <ul className="grid gap-4 md:grid-cols-2">{documents.map((document) => <li key={document} className={`flex gap-3 text-sm ${bodyClass}`}><ScrollText aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" /><span>{document}</span></li>)}</ul>
          </section>

          <section id="settlement-children" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Financial Settlements &amp; Your Child&apos;s Welfare</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>A workable settlement distinguishes spousal support from child support and records whether payments are lump-sum, periodic, or linked to specific expenses. It should address due dates, transfer or return of assets, outstanding loans, and consequences of non-compliance. Divorce does not automatically transfer jointly held property or cancel obligations to a lender.</p>
              <p>For children, we focus on arrangements that function in practice: school-day care, holidays, travel, medical decisions, communication, and handover times. Parenting arrangements should not use access to a child as leverage over financial disputes. Courts may revisit custody or support when circumstances change and the law permits it.</p>
              <p>Where safety or coercion is a concern, settlement discussions must not replace necessary protective relief. Tell your advocate about urgent risks, existing protection orders, or restrictions that could affect mediation or contact with the other party.</p>
            </div>
          </section>

          <section id="courts" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Courts, Jurisdiction &amp; Representation</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Family Court, Lucknow</h3><p className={bodyClass}>We assist with divorce petitions, matrimonial relief, maintenance, and custody before the Family Court where it has jurisdiction. Living in Lucknow does not automatically make every matrimonial case maintainable here: the statutory connections and facts must be checked before filing.</p></div>
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">High Court &amp; Connected Forums</h3><p className={bodyClass}>Appeals and other appropriate proceedings may lie before the Allahabad High Court, Lucknow Bench, subject to jurisdiction and maintainability. Domestic violence and connected criminal proceedings may be before different courts. We assess the correct forum, remedy, and time limits for each matter.</p></div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className={headingClass}>Our Approach to Divorce Representation</h2>
            <div className={`space-y-4 ${bodyClass}`}><p>Led by Adv. Aishwarya Pandey, our team explains the options and their practical implications, including the distinction between urgent interim relief and a final divorce decree. We discuss the scope of representation and fees after reviewing the matter, so advice, drafting, hearings, and connected proceedings can be understood separately.</p><p>Preparation includes checking the consistency of the case history, identifying evidence gaps, and reviewing existing orders before filing a new application. We approach settlement with care, but do not assume every matter can or should be resolved through mediation. Client instructions and lawful protection of rights remain central.</p></div>
          </section>

          <section id="faqs" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">{faqs.map(({ question, answer }) => <details key={question} className="py-5"><summary className="cursor-pointer font-display text-lg font-bold leading-relaxed text-navy-900 transition-colors hover:text-gold-700 focus-visible:outline-gold-500 dark:text-cream dark:hover:text-gold-400">{question}</summary><p className={`mt-3 ${bodyClass}`}>{answer}</p></details>)}</div>
          </section>

          <section aria-labelledby="divorce-settlement-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="divorce-settlement-review" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">What Should a Divorce Settlement Cover?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">A mutual consent settlement should address more than the divorce petition. Review the amount and timing of financial support, return of belongings and stridhan, responsibility for joint liabilities, parenting arrangements and the lawful steps required in connected cases. A private agreement does not automatically close criminal or domestic violence proceedings, transfer property or dissolve a marriage. Each obligation needs an appropriate document, order or implementation step.</p>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">For the first review, bring marriage and identity records, address details, the separation chronology, income disclosures and all existing notices, petitions and orders. Identify the applicable marriage law and any overseas connection before assuming eligibility or a filing timeline. Consent must remain voluntary; a cooling-off waiver is subject to legal conditions and the court&apos;s decision. For broader support and protection issues, visit our <Link href="/services/family-advocate" className="text-gold-700 underline dark:text-gold-400">family law practice</Link>.</p>
          </section>

          <ServiceBlogs posts={familyBlogPosts} fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />} eyebrow="From Our Desk" heading="Divorce & Matrimonial Blogs" description="Legal perspectives on divorce, maintenance, custody, and family disputes." viewAllHref={`/blog?category=${encodeURIComponent('Family & Matrimonial Matters')}`} />

          <section id="contact" className="scroll-mt-28 border-t border-gold-500/25 pt-10 text-center">
            <h2 className={headingClass}>Speak with a Divorce Advocate in Lucknow</h2>
            <p className={`mx-auto mb-8 max-w-2xl ${bodyClass}`}>Discuss your circumstances with our divorce practice led by Adv. Aishwarya Pandey, whether you are considering separation, seeking an agreed divorce, or responding to a matrimonial petition.</p>
            <div className="flex justify-center"><ConsultationActions /></div>
            <p className={`mx-auto mt-8 max-w-2xl text-xs ${bodyClass}`}>This page provides general legal information, not advice for a specific case. Requirements and remedies depend on the applicable law, facts, and court orders. No result or completion timeline is guaranteed.</p>
          </section>
        </div>
      </section>
      <FirmCredentials />
      <Footer />
    </main>
  )
}