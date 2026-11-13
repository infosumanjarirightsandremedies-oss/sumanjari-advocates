import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import {
  ArrowLeft,
  ArrowUpRight,
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
import ServiceContactLinks from '@/components/ServiceContactLinks'
import ServiceSelection from '@/components/ServiceSelection'
import { serviceSearchContent, withServiceSelectionFaq } from '@/lib/serviceSearch'
import LucknowChambers from '@/components/LucknowChambers'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideToc, GuideStages, StatuteTable } from '@/components/LucknowGuide'
import { familyLucknowStages, familyLucknowToc, familyLucknowStatutes } from '@/lib/guides/familyLucknow'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { LUCKNOW_SERVICE_LOCATION } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const searchContent = serviceSearchContent['family-advocate']
const familyLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const familyTeam = ['akhilesh-yadav', 'prerna-yaduvanshi']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

function ConsultationActions({ className }: { className: string }) {
  return (
    <div className={`flex-wrap items-center gap-2 sm:gap-3 ${className}`}>
      <a href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-3 py-3.5 font-caps text-[11px] font-semibold uppercase tracking-wide text-navy-900 sm:px-8 sm:text-sm sm:tracking-widest">
        Consult Now
      </a>
      <ServiceContactLinks />
    </div>
  )
}

export const metadata: Metadata = {
  title: { absolute: searchContent.title },
  description: searchContent.description,
  keywords: [
    'Family Court Lawyer in Lucknow',
    searchContent.attorneyKeyword,
    'Family Court Lawyer Lucknow',
    'Family Advocate Lucknow',
    'Family Advocate & Lawyer in Lucknow',
    'Aishwarya Pandey Family Lawyer',
    'Family Lawyer Lucknow',
    'Matrimonial Lawyer Lucknow',
    'Divorce Lawyer Lucknow',
    'Child Custody Lawyer Lucknow',
    'Maintenance Lawyer Lucknow',
    'Domestic Violence Lawyer Lucknow',
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
    title: 'Family Court Lawyer in Lucknow | Sumanjari & Co. Advocates',
    description:
      'Representation in divorce, child custody, maintenance, domestic violence, and matrimonial disputes before the Family Court, Kaiserbagh and Allahabad High Court, Lucknow Bench.',
    url: '/services/family-advocate',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Court Lawyer in Lucknow',
    description: 'Divorce, child custody, maintenance and domestic violence representation led by Adv. Aishwarya Pandey at Sumanjari & Co. Advocates.',
  },
}

const familyServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  ...LUCKNOW_SERVICE_LOCATION,
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
  knowsAbout: ['Family Court Litigation', 'Child Custody', 'Maintenance under Section 144 BNSS', 'Domestic Violence Act'],
  employee: familyLead ? {
    '@type': 'Person',
    name: familyLead.name,
    jobTitle: 'Family Law Practice Lead',
    url: `${SITE_URL}/team/${familyLead.slug}`,
    knowsAbout: ['Family Court Litigation', 'Child Custody', 'Maintenance under Section 144 BNSS', 'Domestic Violence Act'],
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
      'Representation in divorce, maintenance, custody, and related matrimonial proceedings before the Principal Judge, Family Court, Lucknow — 430, Wala Qadar Road, Kaiserbagh Officer&apos;s Colony, Kaiser Bagh, Lucknow.',
  },
  {
    title: 'Allahabad High Court, Lucknow Bench',
    blurb:
      'Appeals, revisions, and writ matters arising out of family and matrimonial proceedings, argued from our chambers at Block D-311.',
  },
  {
    title: 'District & Sessions Courts',
    blurb:
      'Domestic violence, maintenance, and allied criminal-matrimonial proceedings before the District and Sessions Courts, including matters arising from counseling at the Mahila Thana (CAW Cell), Hazratganj, Lucknow.',
  },
  {
    title: 'Mediation & Settlement',
    blurb:
      'Negotiated and mediated resolutions where both parties are open to an amicable settlement, in and outside court.',
  },
]

const courtJurisdictionTable = [
  {
    matter: 'Divorce, judicial separation, restitution of conjugal rights, Section 24/25 HMA maintenance, custody & guardianship',
    law: 'Hindu Marriage Act, 1955 / Special Marriage Act, 1954 / Family Courts Act, 1984',
    forum: 'Principal Judge / Additional Principal Judges, Family Court, Kaiserbagh',
  },
  {
    matter: 'Summary maintenance for wife, children & parents, and enforcement of arrears',
    law: 'Sections 144 & 147 BNSS (formerly Sections 125 & 128 CrPC)',
    forum: 'Family Court, Kaiserbagh / concerned Judicial Magistrate',
  },
  {
    matter: 'Domestic violence protection, residence, monetary relief & compensation',
    law: 'Protection of Women from Domestic Violence Act, 2005',
    forum: 'ACJM / Judicial Magistrate Courts, Lucknow',
  },
  {
    matter: 'Matrimonial cruelty FIRs and connected dowry complaints',
    law: 'Sections 85/86 BNS (formerly Section 498A IPC); Dowry Prohibition Act, 1961',
    forum: 'Mahila Thana (CAW Cell), Hazratganj → Sessions Court, Lucknow',
  },
  {
    matter: 'Mandatory pre-decree settlement conferences',
    law: 'Section 9, Family Courts Act, 1984',
    forum: 'Mediation & Conciliation Centre, Kaiserbagh / DLSA Lucknow Lok Adalat',
  },
  {
    matter: 'Maintenance for senior citizens and dependent parents',
    law: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
    forum: 'SDM Maintenance Tribunal, Lucknow',
  },
  {
    matter: 'Succession certificates, legal heirship & partition disputes',
    law: 'Indian Succession Act, 1925',
    forum: 'District Judge / Civil Judge, Lucknow; Sub-Registrar & revenue authorities',
  },
  {
    matter: 'Family Court appeals and quashing of matrimonial FIRs',
    law: 'Section 19, Family Courts Act, 1984; Section 528 BNSS (formerly Section 482 CrPC)',
    forum: 'Allahabad High Court, Lucknow Bench, Gomti Nagar',
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

const detailedFaqs = [
  {
    question: 'Where is the Family Court in Lucknow located, and which cases are filed there?',
    answer: 'The Family Court, Lucknow is situated at 430, Wala Qadar Road, Kaiserbagh (near Parivartan Chowk). Under Section 7 of the Family Courts Act, 1984, it hears divorce, judicial separation, restitution of conjugal rights, maintenance under Section 144 BNSS (formerly Section 125 CrPC), child custody, and guardianship matters. Section 85 BNS (498A IPC) and Domestic Violence Act complaints are heard before the Judicial Magistrate at the Civil Court, Lucknow.',
  },
  {
    question: 'If my child is under 5 years old, who gets custody in Lucknow Family Court — and how can a father get visitation rights?',
    answer: 'Under Section 6(a) of the Hindu Minority and Guardianship Act, 1956, custody of a child below five years ordinarily remains with the mother unless the child\u2019s welfare requires otherwise. The Family Court, Lucknow treats the welfare of the child as paramount and can grant a non-custodial parent interim and regular visitation, including weekend, holiday, and supervised or virtual access.',
  },
  {
    question: 'Can a working wife still claim maintenance in Lucknow Family Court, and is an income affidavit mandatory?',
    answer: 'Yes — a working wife may still claim maintenance if her income is insufficient to maintain a standard of living comparable to the marriage, though voluntary unemployment or desertion without reasonable cause can reduce or bar a claim. Under Rajnesh v. Neha (2020), both spouses must additionally file sworn Affidavits of Assets, Income and Liabilities, in the prescribed format, before the Family Court, Lucknow, so that interim and final maintenance reflect disclosed income rather than assumption.',
  },
  {
    question: 'What happens if a spouse refuses to pay court-ordered maintenance in Lucknow?',
    answer: 'An aggrieved party can file an execution application under Section 147 BNSS (formerly Section 125(3)/128 CrPC) before the Family Court, Lucknow. For wilful default, the court can issue a distress warrant, attach salary or property, or order imprisonment until the arrears are paid, subject to the facts and the defaulting spouse\u2019s explanation.',
  },
  {
    question: 'Can I file a Domestic Violence (PWDVA) case in Lucknow alongside a Family Court maintenance or divorce case?',
    answer: 'Yes. An aggrieved woman can seek protection, residence, monetary relief, and temporary custody under Section 12 of the Protection of Women from Domestic Violence Act, 2005 before the Judicial Magistrate in Lucknow alongside Family Court proceedings. Courts generally adjust overlapping maintenance awards across the two proceedings to prevent double recovery.',
  },
  {
    question: 'What should I do in Lucknow if a false 498A / Section 85 BNS or dowry complaint is threatened or filed?',
    answer: 'At the Mahila Thana or Parivar Paramarsh Kendra stage, submit a structured written response and preserve relevant, lawfully obtained evidence. If an FIR is registered under Section 85 BNS (498A IPC), the police must follow the Arnesh Kumar safeguards and ordinarily issue a Section 35(3) BNSS notice before arrest. Depending on the facts, you may seek anticipatory bail or a Section 528 BNSS (formerly Section 482 CrPC) quashing petition before the Allahabad High Court, Lucknow Bench.',
  },
  {
    question: 'How can Stridhan and marriage jewellery be legally recovered in Lucknow?',
    answer: 'Stridhan can be pursued through an application under Section 27 of the Hindu Marriage Act, 1955, a Section 12 PWDVA petition before the Magistrate, or a complaint under Section 316 BNS (formerly Section 406 IPC) for criminal breach of trust — each supported by bills, photographs, and an itemised inventory wherever available.',
  },
  {
    question: 'Can I file a family court case in Lucknow if my spouse lives in another city or abroad?',
    answer: 'Yes, provided Lucknow satisfies the statutory jurisdiction requirements — such as where the marriage was solemnised, where the parties last resided together, where the respondent resides, or, for certain petitions, where the wife resides. To transfer a connected case within Uttar Pradesh, a Section 24 CPC transfer petition lies before the Allahabad High Court, Lucknow Bench.',
  },
  {
    question: 'What if my spouse obtained an ex-parte decree in Lucknow Family Court, or I never received the notice?',
    answer: 'You should promptly approach the same Family Court in Lucknow to explain the non-service and seek recall of the ex-parte proceedings. If an ex-parte decree has already been passed, an Order IX Rule 13 CPC application can be filed to set it aside for non-service of notice, or, where maintainable, an appeal can be filed under Section 19 of the Family Courts Act, 1984 before the Allahabad High Court, Lucknow Bench. Acting quickly matters, as limitation periods apply.',
  },
  {
    question: 'Can parents or senior citizens claim maintenance from their adult children in Lucknow?',
    answer: 'Yes. Parents who are unable to maintain themselves can claim monthly maintenance from adult sons and daughters under Section 144 BNSS before the Family Court, Lucknow, or before the Maintenance Tribunal constituted under the Maintenance and Welfare of Parents and Senior Citizens Act, 2007.',
  },
  {
    question: 'Does a married daughter have an equal right in ancestral family property, and can a wife claim her husband\u2019s parents\u2019 house?',
    answer: 'Following Vineeta Sharma v. Rakesh Sharma (2020), a daughter has equal coparcenary rights by birth in Hindu ancestral property, regardless of her marital status or the date of her father\u2019s death. A wife generally does not acquire ownership title in her in-laws\u2019 self-acquired property, though she may claim a right of residence in a shared household under Section 19 of the Domestic Violence Act, subject to the facts.',
  },
  {
    question: 'Are advocates allowed in Family Court, Lucknow, and is a notarised stamp-paper divorce valid?',
    answer: 'A marriage cannot be dissolved by a notarised stamp-paper agreement; only a decree from a competent court legally dissolves a marriage. While Section 13 of the Family Courts Act, 1984 does not give parties an automatic right to counsel, the Family Court, Lucknow routinely permits advocates to appear and represent clients with the leave of the court.',
  },
]

const hindiFaqs = [
  {
    question: 'लखनऊ का फैमिली कोर्ट कहाँ स्थित है और वहाँ किन मामलों की सुनवाई होती है?',
    answer: 'लखनऊ का फैमिली कोर्ट 430, वाला कदर रोड, कैसरबाग (क़ैसरबाग), लखनऊ, उत्तर प्रदेश 226001 में परिवर्तन चौक के पास स्थित है। फैमिली कोर्ट्स एक्ट, 1984 के तहत यहाँ तलाक, न्यायिक पृथक्करण, दाम्पत्य अधिकारों की पुनर्स्थापना, भरण-पोषण, बच्चों की अभिरक्षा और संरक्षकता संबंधी मामले सुने जाते हैं, जहाँ अदालत को क्षेत्राधिकार प्राप्त हो। अदालत जाने से पहले रजिस्ट्री या वाद-सूची से वर्तमान पता, कक्ष संख्या और कार्य समय की पुष्टि करें।',
  },
  {
    question: 'धारा 144 BNSS के तहत भरण-पोषण का दावा कैसे दायर करें?',
    answer: 'पत्नी, बच्चों या आश्रित माता-पिता के लिए संक्षिप्त भरण-पोषण भारतीय नागरिक सुरक्षा संहिता (BNSS) की धारा 144 (पूर्व में दंड प्रक्रिया संहिता की धारा 125) के तहत संबंधित न्यायिक मजिस्ट्रेट या फैमिली कोर्ट, कैसरबाग के समक्ष दायर किया जाता है। रजनेश बनाम नेहा (2020) के निर्देशानुसार दोनों पक्षों को निर्धारित प्रारूप में संपत्ति और देनदारियों का शपथ पत्र देना होता है। अवैतनिक राशि की वसूली धारा 147 BNSS के तहत कुर्की द्वारा की जा सकती है।',
  },
  {
    question: 'लखनऊ फैमिली कोर्ट बच्चे की अभिरक्षा पर निर्णय कैसे लेता है?',
    answer: 'अभिरक्षा और संरक्षकता के आवेदन अभिभावक और प्रतिपाल्य अधिनियम, 1890 तथा हिंदू अप्राप्तवयता एवं संरक्षकता अधिनियम, 1956 के तहत दायर किए जाते हैं। निर्णय में सबसे महत्वपूर्ण बात बच्चे का कल्याण है, न कि किसी एक माता-पिता का लिंग या आय। स्कूली शिक्षा, स्वास्थ्य, देखभाल की स्थिरता और मौजूदा मुलाक़ात व्यवस्था जैसे तथ्यों पर विचार किया जाता है; अंतरिम अभिरक्षा और मुलाक़ात अधिकार भी माँगे जा सकते हैं।',
  },
  {
    question: 'घरेलू हिंसा अधिनियम के तहत पीड़ित महिला को क्या राहत मिल सकती है?',
    answer: 'घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005 की धारा 12 के तहत संबंधित मजिस्ट्रेट के समक्ष आवेदन करने पर धारा 18 में संरक्षण आदेश, धारा 19 में निवास आदेश, धारा 20 में आर्थिक राहत, धारा 21 में अस्थायी अभिरक्षा और धारा 22 में प्रतिकर दिया जा सकता है। तत्काल खतरे की स्थिति में धारा 23 के तहत अंतरिम या एकपक्षीय आदेश माँगा जा सकता है। गंभीर खतरे की स्थिति में तुरंत पुलिस या आपातकालीन सेवाओं से संपर्क करें।',
  },
  {
    question: 'फैमिली कोर्ट में मध्यस्थता (मीडिएशन) अनिवार्य है क्या?',
    answer: 'फैमिली कोर्ट्स एक्ट, 1984 की धारा 9 के तहत अदालत पक्षों को समझौते के प्रयास के लिए परामर्शदाता या कैसरबाग स्थित मध्यस्थता एवं सुलह केंद्र में भेज सकती है। भाग लेना सामान्यतः प्रक्रिया का हिस्सा है, परंतु कोई भी समझौता स्वेच्छा से ही होना चाहिए; दबाव में कोई समझौता पत्र पर हस्ताक्षर न करें। सुरक्षा या तत्काल भरण-पोषण की आवश्यकता होने पर पहले उपयुक्त अदालत से राहत माँगने की सलाह दी जाती है।',
  },
  {
    question: 'फैमिली कोर्ट, लखनऊ के आदेश के विरुद्ध अपील कहाँ दायर होती है?',
    answer: 'फैमिली कोर्ट्स एक्ट, 1984 की धारा 19 के तहत अपील योग्य निर्णय और आदेश के विरुद्ध इलाहाबाद हाईकोर्ट की लखनऊ बेंच, गोमती नगर में दो न्यायाधीशों की पीठ के समक्ष अपील दायर की जाती है। सहमति की डिक्री और अंतरिम आदेशों पर यह अपील लागू नहीं होती; कुछ भरण-पोषण आदेशों के लिए अलग समीक्षा प्रक्रिया है। प्रमाणित प्रति मिलते ही अपील की उपलब्धता और समय-सीमा की पुष्टि करें।',
  },
  {
    question: 'यदि बच्चा 5 वर्ष से कम आयु का है तो लखनऊ फैमिली कोर्ट में अभिरक्षा किसे मिलती है, और पिता मुलाक़ात अधिकार कैसे प्राप्त कर सकता है?',
    answer: 'हिंदू अप्राप्तवयता एवं संरक्षकता अधिनियम, 1956 की धारा 6(क) के अनुसार पाँच वर्ष से कम आयु के बच्चे की अभिरक्षा सामान्यतः माँ के पास रहती है, जब तक कि बच्चे का कल्याण अन्यथा की माँग न करे। फैमिली कोर्ट, लखनऊ बच्चे के कल्याण को सर्वोपरि मानता है और गैर-अभिरक्षक माता-पिता को अंतरिम व नियमित मुलाक़ात अधिकार दे सकता है, जिसमें सप्ताहांत, छुट्टियाँ और पर्यवेक्षित या वर्चुअल मुलाक़ात शामिल हो सकती है।',
  },
  {
    question: 'कामकाजी पत्नी भी भरण-पोषण का दावा कर सकती है क्या, और क्या आय शपथ पत्र देना अनिवार्य है?',
    answer: 'हाँ — यदि कामकाजी पत्नी की आय विवाह के समान जीवन-स्तर बनाए रखने के लिए पर्याप्त नहीं है, तो वह भी भरण-पोषण का दावा कर सकती है, हालाँकि स्वेच्छा से बेरोज़गार रहना या बिना उचित कारण परित्याग करना दावे को घटा या रोक सकता है। रजनेश बनाम नेहा (2020) के अनुसार दोनों पक्षों को निर्धारित प्रारूप में संपत्ति, आय और देनदारियों का शपथ पत्र फैमिली कोर्ट, लखनऊ के समक्ष दाखिल करना होता है, ताकि अंतरिम और अंतिम भरण-पोषण वास्तविक आय पर आधारित हो, अनुमान पर नहीं।',
  },
  {
    question: 'यदि कोई पक्ष लखनऊ में अदालत द्वारा आदेशित भरण-पोषण देने से इनकार करे तो क्या होगा?',
    answer: 'पीड़ित पक्ष धारा 147 BNSS (पूर्व में धारा 125(3)/128 CrPC) के तहत फैमिली कोर्ट, लखनऊ के समक्ष निष्पादन आवेदन दायर कर सकता है। जानबूझकर चूक करने पर अदालत कुर्की वारंट जारी कर सकती है, वेतन या संपत्ति कुर्क कर सकती है, या तथ्यों और बकायादार पक्ष के स्पष्टीकरण के अधीन, बकाया राशि चुकाए जाने तक कारावास का आदेश दे सकती है।',
  },
  {
    question: 'क्या लखनऊ में घरेलू हिंसा (PWDVA) का मामला फैमिली कोर्ट के भरण-पोषण या तलाक के मामले के साथ-साथ दायर किया जा सकता है?',
    answer: 'हाँ। पीड़ित महिला घरेलू हिंसा से महिलाओं का संरक्षण अधिनियम, 2005 की धारा 12 के तहत लखनऊ के संबंधित मजिस्ट्रेट के समक्ष फैमिली कोर्ट की कार्यवाही के साथ-साथ संरक्षण, निवास, आर्थिक राहत और अस्थायी अभिरक्षा की माँग कर सकती है। अदालतें सामान्यतः दोहरी वसूली रोकने के लिए दोनों कार्यवाहियों में भरण-पोषण राशि को समायोजित करती हैं।',
  },
  {
    question: 'यदि लखनऊ में झूठी धारा 498A / धारा 85 BNS या दहेज शिकायत की धमकी दी जाए या दर्ज की जाए तो क्या करें?',
    answer: 'महिला थाना या परिवार परामर्श केंद्र स्तर पर संरचित लिखित जवाब प्रस्तुत करें और प्रासंगिक, वैध रूप से प्राप्त साक्ष्य सुरक्षित रखें। यदि धारा 85 BNS (498A IPC) के तहत FIR दर्ज हो जाए, तो पुलिस को अर्नेश कुमार दिशा-निर्देशों का पालन करना होता है और गिरफ़्तारी से पहले सामान्यतः धारा 35(3) BNSS का नोटिस देना होता है। तथ्यों के अनुसार, अग्रिम जमानत या इलाहाबाद हाईकोर्ट की लखनऊ बेंच के समक्ष धारा 528 BNSS (पूर्व में धारा 482 CrPC) के तहत रद्दीकरण याचिका दायर की जा सकती है।',
  },
  {
    question: 'लखनऊ में स्त्रीधन और विवाह के आभूषण कानूनी रूप से कैसे वापस प्राप्त किए जा सकते हैं?',
    answer: 'स्त्रीधन की वापसी हिंदू विवाह अधिनियम, 1955 की धारा 27 के तहत आवेदन, मजिस्ट्रेट के समक्ष धारा 12 PWDVA याचिका, या आपराधिक विश्वासघात के लिए धारा 316 BNS (पूर्व में धारा 406 IPC) की शिकायत के माध्यम से माँगी जा सकती है — प्रत्येक के साथ उपलब्ध बिल, फ़ोटोग्राफ़ और मदवार सूची संलग्न करें।',
  },
  {
    question: 'यदि पति या पत्नी किसी अन्य शहर या विदेश में रहते हों, तो क्या मैं लखनऊ में पारिवारिक मामला दायर कर सकता/सकती हूँ?',
    answer: 'हाँ, बशर्ते लखनऊ वैधानिक क्षेत्राधिकार की शर्तें पूरी करे — जैसे जहाँ विवाह संपन्न हुआ, जहाँ पक्ष अंतिम बार साथ रहे, जहाँ प्रतिवादी रहता है, या कुछ याचिकाओं के लिए जहाँ पत्नी रहती है। उत्तर प्रदेश के भीतर संबंधित मामले को स्थानांतरित करने के लिए धारा 24 CPC की स्थानांतरण याचिका इलाहाबाद हाईकोर्ट की लखनऊ बेंच के समक्ष दायर की जा सकती है।',
  },
  {
    question: 'यदि फैमिली कोर्ट में पति या पत्नी के विरुद्ध एकपक्षीय (ex-parte) डिक्री पारित हो गई हो, या नोटिस कभी प्राप्त न हुआ हो, तो क्या करें?',
    answer: 'तुरंत उसी फैमिली कोर्ट, लखनऊ में उपस्थित होकर नोटिस की गैर-तामील स्पष्ट करें और एकपक्षीय कार्यवाही को वापस लेने (recall) का अनुरोध करें। यदि एकपक्षीय डिक्री पहले ही पारित हो चुकी है, तो नोटिस की गैर-तामील के आधार पर उसे रद्द करने के लिए आदेश IX नियम 13 CPC का आवेदन दायर किया जा सकता है, या जहाँ अपील योग्य हो, फैमिली कोर्ट्स एक्ट, 1984 की धारा 19 के तहत इलाहाबाद हाईकोर्ट की लखनऊ बेंच में अपील की जा सकती है। शीघ्र कार्रवाई महत्वपूर्ण है, क्योंकि समय-सीमा लागू होती है।',
  },
  {
    question: 'क्या लखनऊ में माता-पिता या वरिष्ठ नागरिक अपने वयस्क बच्चों से भरण-पोषण का दावा कर सकते हैं?',
    answer: 'हाँ। जो माता-पिता अपना भरण-पोषण करने में असमर्थ हैं, वे धारा 144 BNSS के तहत फैमिली कोर्ट, लखनऊ के समक्ष, या माता-पिता और वरिष्ठ नागरिक भरण-पोषण एवं कल्याण अधिनियम, 2007 के तहत गठित भरण-पोषण अधिकरण के समक्ष अपने वयस्क पुत्र-पुत्रियों से मासिक भरण-पोषण का दावा कर सकते हैं।',
  },
  {
    question: 'क्या विवाहित बेटी को पैतृक संपत्ति में बेटे के बराबर अधिकार है, और क्या पत्नी अपने ससुराल के घर पर दावा कर सकती है?',
    answer: 'विनीता शर्मा बनाम राकेश शर्मा (2020) के अनुसार, बेटी को जन्म से ही हिंदू पैतृक संपत्ति में समान सहदायिक (coparcenary) अधिकार प्राप्त है, चाहे उसकी वैवाहिक स्थिति या पिता की मृत्यु की तारीख कुछ भी हो। पत्नी को सामान्यतः ससुराल की स्वअर्जित संपत्ति में स्वामित्व अधिकार नहीं मिलता, हालाँकि तथ्यों के अनुसार वह घरेलू हिंसा अधिनियम की धारा 19 के तहत साझा गृहस्थी में निवास के अधिकार का दावा कर सकती है।',
  },
  {
    question: 'क्या फैमिली कोर्ट, लखनऊ में अधिवक्ता की अनुमति है, और क्या नोटरी किए गए स्टाम्प-पेपर पर तलाक वैध है?',
    answer: 'स्टाम्प-पेपर पर नोटरी किए गए समझौते से विवाह विच्छेद नहीं हो सकता; केवल सक्षम अदालत की डिक्री ही कानूनी रूप से विवाह भंग करती है। फैमिली कोर्ट्स एक्ट, 1984 की धारा 13 पक्षों को स्वतः अधिवक्ता का अधिकार नहीं देती, फिर भी फैमिली कोर्ट, लखनऊ सामान्यतः अदालत की अनुमति से अधिवक्ताओं को उपस्थित होने और प्रतिनिधित्व करने देता है।',
  },
]

const familyFaqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  inLanguage: ['en-IN', 'hi-IN'],
  mainEntity: [
    ...familyInsights.map(({ title, excerpt }) => ({
      '@type': 'Question',
      inLanguage: 'en-IN',
      name: title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: excerpt,
      },
    })),
    ...detailedFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      inLanguage: 'en-IN',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
    ...hindiFaqs.map(({ question, answer }) => ({
      '@type': 'Question',
      inLanguage: 'hi-IN',
      name: question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: answer,
      },
    })),
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(withServiceSelectionFaq(familyFaqJsonLd, searchContent)) }}
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
              Family Court Lawyer &amp; Matrimonial Advocate <em className="text-gold-gradient">in Lucknow</em> — Custody, Maintenance &amp; Domestic Violence
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

          <LucknowChambers />
          <ServiceSelection content={searchContent} />

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
              petitions, notices, or existing orders. In Lucknow, matrimonial
              petitions are heard by the Principal Judge, Family Court at 430,
              Wala Qadar Road, Kaiserbagh Officer&apos;s Colony, Kaiser Bagh,
              while pre-litigation counseling in matrimonial complaints commonly
              takes place at the Mahila Thana (CAW Cell), Hazratganj, Lucknow.
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

          <section id="family-court-jurisdiction-table" aria-labelledby="family-court-jurisdiction-heading" className="mb-16 scroll-mt-28">
            <h2 id="family-court-jurisdiction-heading" className="mb-4 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Which Lucknow Court Hears Your Family Matter?
            </h2>
            <p className="mb-6 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Matrimonial, maintenance, custody, protection, and senior-citizen proceedings are distinct statutory tracks, each heard by a different Lucknow forum. This table is a quick reference; the facts of your matter and current court practice determine the correct forum.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left font-body text-sm">
                <thead>
                  <tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">
                    <th scope="col" className="py-3 pr-4 font-semibold">Family Matter</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">Governing Law</th>
                    <th scope="col" className="py-3 font-semibold">Forum in Lucknow</th>
                  </tr>
                </thead>
                <tbody className="text-navy-800 dark:text-cream/75">
                  {courtJurisdictionTable.map(({ matter, law, forum }) => (
                    <tr key={matter} className="border-b border-gold-500/10 align-top">
                      <th scope="row" className="py-3 pr-4 font-semibold">{matter}</th>
                      <td className="py-3 pr-4">{law}</td>
                      <td className="py-3">{forum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

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
            heading="Statutory Framework Governing Family & Matrimonial Litigation in Lucknow"
            intro="Matrimonial, maintenance, custody, protection and senior-citizen proceedings are distinct statutory tracks heard by different Lucknow forums. The governing marriage law, eligibility, territorial jurisdiction, existing orders and current local court practice determine the appropriate route; no single statute applies to every family."
            rows={familyLucknowStatutes}
          />

          <GuideStages
            id="family-procedure"
            heading="How a Family & Matrimonial Case Proceeds in Lucknow: Stage 1 to Stage 7"
            intro="From pre-litigation counseling at the Mahila Thana (CAW Cell), Hazratganj and the Family Court Mediation Center, Kaiserbagh, through maintenance, custody and defence proceedings, to execution and Section 19 appeals at the Allahabad High Court, Lucknow Bench."
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

          <section aria-labelledby="family-interim-relief-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="family-interim-relief-review" className="mb-5 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream">Planning Custody, Visitation and Interim Support</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">Family proceedings may require workable interim arrangements before a final decision. For custody and access, prepare a child-focused account of schooling, health, daily care, safety and existing contact arrangements. The child&apos;s welfare is central; neither parent should assume custody follows automatically from gender, income or allegations. We assess requests for interim custody, visitation, communication and travel in light of the record and any existing order.</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Financial disclosure and connected cases</h3>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">Bring income and asset records, bank statements, essential household and child-related expenses, marriage records and every pending maintenance or protection order. Disclose overlapping proceedings so relief and payments can be addressed consistently; support is not calculated by one universal percentage. Divorce, maintenance, domestic violence and guardianship may involve different provisions and forums. For marriage dissolution and settlement planning, see our <Link href="/services/divorce-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">divorce lawyer page</Link>.</p>
          </section>

          <div id="family-faqs" className="mb-16 scroll-mt-28">
            <div className="mb-10 text-center">
              <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                From Our Desk
              </span>
              <h2 id="family-faqs-heading" className="mb-3 mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
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

          <section id="detailed-faqs" aria-labelledby="detailed-faqs-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="detailed-faqs-heading" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Family Court Lawyer in Lucknow: More Questions, Answered
            </h2>
            <p className="mb-6 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              Practical, case-specific questions our family court lawyers in Lucknow are asked most often — on child custody, maintenance enforcement, domestic violence, Stridhan recovery, ex-parte orders, senior-citizen maintenance, and inheritance.
            </p>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">
              {detailedFaqs.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer font-display text-lg font-bold leading-relaxed text-navy-900 transition-colors hover:text-gold-700 focus-visible:outline-gold-500 dark:text-cream dark:hover:text-gold-400">
                    {question}
                  </summary>
                  <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/70">{answer}</p>
                </details>
              ))}
            </div>
          </section>

          <section id="hindi-faqs" lang="hi" aria-labelledby="hindi-faqs-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="hindi-faqs-heading" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              लखनऊ फैमिली कोर्ट: हिंदी में सामान्य प्रश्न
            </h2>
            <p className="mb-6 font-body leading-relaxed text-navy-700 dark:text-cream/70">
              यह सामान्य कानूनी जानकारी है, किसी विशेष मामले की सलाह नहीं। लागू कानून, तथ्यों और अदालत के आदेश के अनुसार प्रक्रिया बदल सकती है। किसी परिणाम या समय-सीमा की गारंटी नहीं है।
            </p>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">
              {hindiFaqs.map(({ question, answer }) => (
                <details key={question} className="py-5">
                  <summary className="cursor-pointer font-display text-lg font-bold leading-relaxed text-navy-900 transition-colors hover:text-gold-700 focus-visible:outline-gold-500 dark:text-cream dark:hover:text-gold-400">
                    {question}
                  </summary>
                  <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/70">{answer}</p>
                </details>
              ))}
            </div>
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
