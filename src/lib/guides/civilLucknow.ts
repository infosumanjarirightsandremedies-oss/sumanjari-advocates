import type { GuideStage, GuideTocItem, StatuteRow } from '@/lib/guides/types'

export const civilStages: GuideStage[] = [
  {
    id: 'stage-1',
    title: 'Pre-Litigation: Records, Notice & Mediation',
    forum: 'Chamber consultation; DLSA Lucknow (pre-institution mediation)',
    body: [
      'Before any suit is drafted, we collect the title papers — khatauni, sale deed or registry, mutation extract — along with the underlying contract, correspondence and payment records, since a civil case stands or falls on its documents. A legal notice is often sent at this stage to place the other side on record and to invite a response, though it is a strategic step, not a universal precondition to filing.',
      'Where the intended defendant is a government body such as the Lucknow Development Authority or the Lucknow Municipal Corporation, Section 80 of the Code of Civil Procedure requires two months\' prior written notice before a suit can be filed, except where the court grants leave for urgent relief under Section 80(2). For commercial disputes, Section 12A of the Commercial Courts Act, 2015 makes pre-institution mediation mandatory unless urgent interim relief is sought, and skipping it can result in the suit being rejected at the threshold.',
    ],
    provisions: ['Section 80, Code of Civil Procedure, 1908', 'Section 80(2), Code of Civil Procedure, 1908', 'Section 12A, Commercial Courts Act, 2015'],
    checklist: ['Title documents: registry, mutation, khatauni', 'Contract, invoices and payment proof', 'Draft legal notice, if one is to be sent'],
  },
  {
    id: 'stage-2',
    title: 'Choosing the Right Forum in Lucknow',
    forum: 'Civil Court, Kaiserbagh (Civil Judge Junior/Senior Division, District Judge); Commercial Court, Lucknow; revenue courts; UP-RERA; District Consumer Commission, Lucknow',
    body: [
      // VERIFY: current UP pecuniary jurisdiction limits for Civil Judge (Junior/Senior Division)
      'Territorial jurisdiction under Sections 16 to 20 of the CPC depends on where the property is situated or where the cause of action arose, while pecuniary jurisdiction depends on the value of the suit. Confirm the current pecuniary limits for the Civil Judge (Junior and Senior Division) in Uttar Pradesh before assuming which court can hear a given claim; without that confirmation, treat the forum as depending on valuation rather than quoting a specific figure.',
      'Disputes over agricultural land do not go to the civil court at all: Section 206 of the Uttar Pradesh Revenue Code, 2006 bars the civil court\'s jurisdiction over matters the revenue courts are empowered to decide, such as mutation, partition of agricultural holdings, and declarations of bhumidhari rights, which instead go to the Tehsildar, Sub-Divisional Magistrate, Commissioner (Lucknow Division) and the Board of Revenue in that hierarchy.',
      'A commercial dispute of specified value is filed in the Commercial Court, Lucknow under the Commercial Courts Act, 2015 rather than the ordinary civil court. Builder-buyer disputes are better pursued before UP-RERA — see our RERA practice — and consumer complaints before the District Consumer Disputes Redressal Commission, Lucknow — see our consumer and motor accident practice.',
    ],
    provisions: ['Sections 16–20, Code of Civil Procedure, 1908', 'Section 206, UP Revenue Code, 2006', 'Section 2(1)(c), Commercial Courts Act, 2015'],
    checklist: ['Nature of the property: agricultural or non-agricultural', 'Approximate value of the claim', 'Whether the dispute is commercial, consumer, or RERA in nature'],
  },
  {
    id: 'stage-3',
    title: 'Drafting & Filing the Plaint',
    forum: 'Civil Court, Lucknow (filing section / e-filing)',
    body: [
      'The plaint must comply with Order VII of the CPC, setting out the cause of action, the relief claimed, and the facts relied upon, with the documents listed under Order VII Rule 14 filed along with it. Correct valuation and payment of ad valorem or fixed court fee under the Court Fees Act (as applied in UP) determine both the amount payable and, indirectly, the pecuniary forum.',
      'Every plaint must carry a verification and, since the 2002 CPC amendment, a statement of truth. Before filing, it is worth checking the caveat register — a caveat filed under Section 148A remains valid for ninety days and entitles the caveator to notice before any interim order is passed against them. Most civil filings in Lucknow can now be made through the eCourts e-filing portal in addition to the physical filing counter.',
    ],
    provisions: ['Order VII, Code of Civil Procedure, 1908', 'Order VII Rule 14, Code of Civil Procedure, 1908', 'Section 148A, Code of Civil Procedure, 1908'],
    checklist: ['Draft plaint with verification and statement of truth', 'Court fee calculation', 'List of documents to be filed with the plaint'],
  },
  {
    id: 'stage-4',
    title: 'Urgent Interim Relief',
    forum: 'Civil Court, Lucknow',
    body: [
      'Where delay would defeat the purpose of the suit, a temporary injunction can be sought under Order XXXIX Rules 1 and 2 of the CPC, which requires the applicant to show a prima facie case, that the balance of convenience favours the injunction, and that irreparable harm would otherwise result. In genuinely urgent cases, an ex parte order can be obtained under Rule 3, though the applicant must then comply with conditions for serving the opposite side promptly, and a breach of an injunction can be dealt with under Order XXXIX Rule 2A.',
      'Other interim remedies include the appointment of a receiver under Order XL to preserve or manage disputed property, and attachment before judgment under Order XXXVIII Rule 5 where there is a real risk the defendant will dispose of assets to defeat the decree. An order refusing or granting an injunction is independently appealable under Order XLIII to the District Judge, without waiting for the final decree.',
    ],
    provisions: ['Order XXXIX Rules 1–2, Code of Civil Procedure, 1908', 'Order XXXIX Rule 2A', 'Order XXXIX Rule 3', 'Order XL, Code of Civil Procedure, 1908', 'Order XXXVIII Rule 5', 'Order XLIII, Code of Civil Procedure, 1908'],
    checklist: ['Evidence of the threatened harm or disposal of assets', 'Draft injunction application and affidavit', 'Proposed undertaking, if seeking an ex parte order'],
  },
  {
    id: 'stage-5',
    title: 'Summons & Written Statement',
    forum: 'Civil Court, Lucknow',
    body: [
      'Summons is served on the defendant under Order V of the CPC, including, where permitted, by electronic means such as email alongside conventional modes. An ordinary defendant has thirty days under Order VIII Rule 1 to file a written statement, extendable up to ninety days for reasons recorded, though commercial suits under the Commercial Courts Act enforce a hard outer limit of one hundred and twenty days, after which the right to file is forfeited, as the Supreme Court confirmed in SCG Contracts India v. K.S. Chamankar Infrastructure (2019).',
      'The written statement may include a counter-claim or a set-off against the plaintiff\'s claim. If the defendant does not appear despite valid service, the court can proceed ex parte and pass an ex parte decree, which the defendant can later apply to set aside under Order IX Rule 13 on showing sufficient cause for the non-appearance.',
    ],
    provisions: ['Order V, Code of Civil Procedure, 1908', 'Order VIII Rule 1, Code of Civil Procedure, 1908', 'Order IX Rule 13, Code of Civil Procedure, 1908'],
    checklist: ['Proof of service of summons', 'Written statement and any counter-claim', 'Grounds for setting aside, if an ex parte decree was passed'],
  },
  {
    id: 'stage-6',
    title: 'Admission, Discovery & ADR Referral',
    forum: 'Civil Court, Lucknow; Mediation Centre, Civil Court, Lucknow; National Lok Adalat (DLSA Lucknow)',
    body: [
      'Either party can seek discovery and inspection of documents under Order XI, and admissions of fact or documents can be recorded under Order XII to narrow the issues genuinely in dispute. The court may also examine the parties directly under Order X to clarify the pleadings before framing issues.',
      'Section 89 of the CPC empowers the court to refer the dispute to mediation, conciliation, or a Lok Adalat where a settlement appears possible. An award passed by a Lok Adalat is final and is not open to appeal under Section 21 of the Legal Services Authorities Act, 1987, which makes the National Lok Adalat, coordinated through DLSA Lucknow, an efficient route for disputes capable of settlement. Court fee already paid may be refundable on a settlement reached through this route, subject to the applicable rules.',
    ],
    provisions: ['Order XI, Code of Civil Procedure, 1908', 'Order XII, Code of Civil Procedure, 1908', 'Order X, Code of Civil Procedure, 1908', 'Section 89, Code of Civil Procedure, 1908', 'Section 21, Legal Services Authorities Act, 1987'],
    checklist: ['Documents likely to be sought in discovery', 'Facts that can reasonably be admitted', 'Willingness to attempt mediation or Lok Adalat'],
  },
  {
    id: 'stage-7',
    title: 'Framing of Issues',
    forum: 'Civil Court, Lucknow',
    body: [
      'Once pleadings are complete, the court frames the issues on which the parties are at variance, distinguishing questions of law from questions of fact, under Order XIV of the CPC. Where a preliminary issue — such as a challenge to the court\'s jurisdiction or a plea of limitation — can dispose of the suit without going into the merits, the court will ordinarily try that issue first.',
      'The way issues are framed shapes the entire trial that follows, since evidence is led and arguments are made issue by issue; it is worth reviewing the framed issues carefully and seeking correction promptly if a material issue has been omitted or mis-stated.',
    ],
    provisions: ['Order XIV, Code of Civil Procedure, 1908'],
    checklist: ['Draft list of issues proposed', 'Any preliminary issue to be raised', 'Documents supporting each disputed fact'],
  },
  {
    id: 'stage-8',
    title: 'Evidence, Commissions & Site Inspection',
    forum: 'Civil Court, Lucknow; Court Commissioner / Amin',
    body: [
      'Evidence-in-chief is ordinarily led by affidavit under Order XVIII Rule 4, with the witness then cross-examined in court or before a commissioner appointed for recording evidence. In property and boundary disputes, a local investigation or survey commission can be appointed under Order XXVI Rule 9 to inspect the site, verify boundaries, and report on encroachment, which often proves decisive.',
      'Certified copies of revenue records — khatauni, khasra, and mutation extracts — are routinely proved through the concerned revenue official, and electronic evidence such as photographs or recordings requires a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam before it can be read in evidence.',
    ],
    provisions: ['Order XVIII Rule 4, Code of Civil Procedure, 1908', 'Order XXVI Rule 9, Code of Civil Procedure, 1908', 'Section 63, Bharatiya Sakshya Adhiniyam, 2023'],
    checklist: ['Witness list and draft affidavits of evidence', 'Revenue records to be proved', 'Site plan or survey, if a commission is sought'],
  },
  {
    id: 'stage-9',
    title: 'Final Arguments, Judgment & Decree',
    forum: 'Civil Court, Lucknow',
    body: [
      'After evidence closes, both sides present final arguments, often supported by written submissions summarising the evidence against each framed issue. The court then delivers judgment and draws up the decree under Order XX, which also addresses costs under Section 35 of the CPC.',
      'A party dissatisfied with the judgment on a ground apparent from the record, or discovering new and important evidence that could not have been produced earlier despite due diligence, can apply for review under Order XLVII before the same court, instead of or in addition to filing an appeal. The certified copy of the judgment and decree should be obtained promptly, since limitation for any appeal runs from the date of the decree.',
    ],
    provisions: ['Order XX, Code of Civil Procedure, 1908', 'Section 35, Code of Civil Procedure, 1908', 'Order XLVII, Code of Civil Procedure, 1908'],
    checklist: ['Written arguments and summary of evidence', 'Certified copy of the judgment and decree', 'Grounds for review, if applicable'],
  },
  {
    id: 'stage-10',
    title: 'Appeal, Second Appeal & Execution',
    forum: 'District Judge, Lucknow; Allahabad High Court, Lucknow Bench; executing court, Civil Court, Lucknow',
    body: [
      // VERIFY: current UP pecuniary thresholds for the first-appeal forum
      'A first appeal lies under Section 96 of the CPC, with the appellate forum — the District Judge or the Allahabad High Court, Lucknow Bench — depending on the valuation of the original suit; confirm the current pecuniary thresholds in Uttar Pradesh before advising which forum applies. A second appeal to the Lucknow Bench under Section 100 is confined to a substantial question of law, and a civil revision under Section 115 or a supervisory petition under Article 227 may lie against orders that are not independently appealable.',
      'Once a decree is final, execution proceeds under Order XXI before the executing court in Lucknow, through modes such as attachment, sale of property, or delivery of possession; arrest and detention in execution of a money decree is available only in limited circumstances and is treated as a last resort. Filing an appeal does not itself stay execution — a separate stay application under Order XLI Rule 5 must be made and granted.',
    ],
    provisions: ['Section 96, Code of Civil Procedure, 1908', 'Section 100, Code of Civil Procedure, 1908', 'Section 115, Code of Civil Procedure, 1908', 'Article 227, Constitution of India', 'Order XXI, Code of Civil Procedure, 1908', 'Order XLI Rule 5, Code of Civil Procedure, 1908'],
    checklist: ['Certified copy of the decree and date of judgment', 'Judgment-debtor\'s known assets, for execution', 'Grounds for a stay application pending appeal'],
  },
]

export const civilToc: GuideTocItem[] = [
  { id: 'civil-team', label: 'Our Team' },
  { id: 'forums', label: 'Forums We Appear Before' },
  { id: 'statutory-framework', label: 'Statutory Framework for Civil Disputes' },
  { id: 'civil-core-matters', label: 'Core Civil Litigation Matters' },
  { id: 'civil-forum-hierarchy', label: 'Civil Court Hierarchy & Forum Selection' },
  { id: 'matters', label: 'Types of Civil Matters We Handle' },
  {
    id: 'civil-procedure',
    label: 'Civil Suit Procedure: Stage 1 to Stage 10',
    children: civilStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })),
  },
  { id: 'documents', label: 'Before Filing a Civil Suit' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Speak to a Civil Lawyer in Lucknow' },
]

export const civilStatutes: StatuteRow[] = [
  {
    law: 'Code of Civil Procedure, 1908',
    provisions: 's.9, 15–20 (forum), 26 & O.VII (plaint), s.80 (notice to Government), s.89 (ADR), s.96 / s.100 (appeals), s.115 (revision), s.148A (caveat), O.V, VIII, X–XIV, XVIII r.4, XX, XXI, XXVI r.9, XXXVIII r.5, XXXIX r.1–2 & r.3, XL, XLI, XLIII, XLVII',
    relevance: 'Procedure in every civil suit at the Civil Court, Kaiserbagh',
  },
  {
    law: 'Specific Relief Act, 1963 (amended 2018)',
    provisions: 's.6 (dispossession within 6 months), s.10 (specific performance), s.34 (declaration), s.38–39 (injunctions)',
    relevance: 'Property, possession and contract suits',
  },
  {
    law: 'Limitation Act, 1963',
    provisions: 'Art. 58 (declaration, 3 years), Art. 65 (possession on title, 12 years), Art. 113 (residuary, 3 years); s.5 (does not apply to suits)',
    relevance: 'Whether the suit is still in time',
  },
  {
    law: 'Transfer of Property Act 1882; Registration Act 1908; Indian Stamp Act 1899 (as applicable in UP)',
    provisions: 'TPA s.53A, 54, 58, 105–106; Registration Act s.17, 49',
    relevance: 'Sale deeds, agreements to sell, leases, unregistered documents',
  },
  {
    law: 'UP Revenue Code, 2006',
    provisions: 's.24 (boundary disputes), s.34–35 (mutation), s.116 (partition of agricultural land), s.144 (declaration of bhumidhari rights), s.206 (bar on civil courts)',
    relevance: 'Agricultural land goes to the Tehsildar / SDM / Collector / Commissioner, Lucknow Division, and the Board of Revenue.',
  },
  {
    law: 'Commercial Courts Act, 2015',
    provisions: 's.2(1)(c), s.12 (specified value ₹3 lakh+), s.12A (mandatory pre-institution mediation), s.13 (appeals)',
    relevance: 'Commercial disputes at the Commercial Court, Lucknow',
  },
  {
    law: 'Court Fees Act, 1870 (UP amendments) & Suits Valuation Act, 1887',
    provisions: 'Ad valorem vs fixed fees; valuation',
    relevance: 'Decides court fee and the pecuniary forum',
  },
  {
    law: 'Legal Services Authorities Act, 1987',
    provisions: 's.19–21',
    relevance: 'Lok Adalat awards are final; DLSA Lucknow and the High Court Legal Services Sub-Committee at Lucknow',
  },
  {
    law: 'Constitution of India',
    provisions: 'Art. 227',
    relevance: 'Supervisory petitions at the Lucknow Bench against interlocutory orders of the Lucknow civil courts',
  },
]
