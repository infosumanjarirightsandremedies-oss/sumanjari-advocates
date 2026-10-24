import type { GuideStage, GuideTocItem, StatuteRow } from '@/lib/guides/types'

export const aftMiningStages: GuideStage[] = [
  {
    id: 'stage-1',
    title: 'Case Assessment: Service Record or Mining Lease Review',
    forum: 'Chamber consultation, Lucknow',
    body: [
      'For a defence-service grievance, we start by reviewing the service record, discharge order, show-cause notice, or Release and Review Medical Board proceedings to identify whether the matter falls within the Armed Forces Tribunal\'s jurisdiction under Section 14 (service matters) or Section 15 (appeals against a court-martial finding or sentence) of the Armed Forces Tribunal Act, 2007.',
      'For a mining dispute, we review the lease deed, royalty or dead-rent assessment order, or the notice alleging illegal mining, and identify whether the correct route is a representation to the mining authority, an appeal under the Mines and Minerals (Development and Regulation) Act, 1957, or a writ petition before the Allahabad High Court, Lucknow Bench.',
    ],
    provisions: ['Section 14, Armed Forces Tribunal Act, 2007', 'Section 15, Armed Forces Tribunal Act, 2007'],
    checklist: ['Service record, PPO, or discharge order', 'Medical board proceedings, if a disability pension matter', 'Mining lease deed or impugned order/notice'],
  },
  {
    id: 'stage-2',
    title: 'Statutory Representation Before Filing',
    forum: 'Service Headquarters / Mining Officer, Lucknow Division',
    body: [
      'Section 21 of the Armed Forces Tribunal Act ordinarily requires a statutory complaint or representation to the competent service authority before an Original Application (OA) can be filed; the OA follows only after the representation is rejected, or after the prescribed period lapses without a decision. Keeping dated proof of despatch is important for the limitation argument later.',
      'In mining matters, a representation to the Mining Officer, the District Magistrate, or the Director of Geology and Mining, Uttar Pradesh, depending on the issue, is often a practical first step before a formal legal challenge, and helps place the department on notice of the dispute.',
    ],
    provisions: ['Section 21, Armed Forces Tribunal Act, 2007'],
    checklist: ['Draft representation', 'Proof of despatch and acknowledgment', 'Any response received'],
  },
  {
    id: 'stage-3',
    title: 'Drafting the Original Application or Petition',
    forum: 'Chamber drafting, Lucknow',
    body: [
      'The OA before the Armed Forces Tribunal sets out the facts, the grounds of challenge, and the specific relief sought — such as reinstatement, revision of disability pension, or quashing of a court-martial finding — supported by a sworn affidavit and the service documents relied upon.',
      'A mining petition similarly sets out the lease terms, the impugned action, and the relief sought, whether quashing a cancellation order, restraining illegal extraction by a rival party, or correcting a royalty assessment, annexed with the lease deed and correspondence on record.',
    ],
    provisions: ['Armed Forces Tribunal (Procedure) Rules, 2008'],
    checklist: ['Draft OA or petition with grounds and relief', 'Supporting affidavit', 'Annexures: orders, representations, lease documents'],
  },
  {
    id: 'stage-4',
    title: 'Filing & Registration',
    forum: 'Armed Forces Tribunal, Lucknow Bench / Mining Tribunal or Allahabad High Court, Lucknow Bench',
    body: [
      'The OA is filed at the Armed Forces Tribunal\'s Lucknow Bench registry with the prescribed fee and the required number of copies. The registry checks limitation under Section 22 of the Act and formal compliance with the Procedure Rules before registering the case for hearing.',
      'Mining disputes are filed before the forum appropriate to the order under challenge — the state-constituted Mining Tribunal, in revision to the Central Government under the MMDR Act, or as a writ petition before the Allahabad High Court, Lucknow Bench, where no statutory appellate remedy is available or adequate.',
    ],
    provisions: ['Section 22, Armed Forces Tribunal Act, 2007 (limitation)'],
    checklist: ['Filing fee', 'Prescribed number of copies', 'Vakalatnama'],
  },
  {
    id: 'stage-5',
    title: 'Interim Relief',
    forum: 'Armed Forces Tribunal, Lucknow Bench / Mining Tribunal / Allahabad High Court, Lucknow Bench',
    body: [
      'Interim relief — such as a stay on a discharge or dismissal order, continuation of pension payments pending the OA, or a restraint on disputed mining operations — can be sought where the applicant shows a prima facie case and that the balance of convenience favours interim protection.',
      'In mining disputes involving ongoing extraction, interim relief is often time-sensitive, and the application should be moved promptly alongside, rather than after, the main petition.',
    ],
    provisions: ['Armed Forces Tribunal (Procedure) Rules, 2008'],
    checklist: ['Grounds for interim relief', 'Urgency specifically pleaded with supporting material'],
  },
  {
    id: 'stage-6',
    title: 'Notice, Reply, Rejoinder & Hearing',
    forum: 'Armed Forces Tribunal, Lucknow Bench / Mining Tribunal',
    body: [
      'Once admitted, notice is issued to the respondents — typically the Union of India through the concerned service headquarters, or the mining department and any opposing lessee — who file a reply or counter affidavit, to which a rejoinder may be filed in response.',
      'At hearing, both sides argue on the pleadings and the record; the Tribunal may call for the original service record or mining file where necessary, and written submissions are often invited alongside oral arguments, particularly where disability-pension medical findings or lease terms are contested.',
    ],
    provisions: ['Armed Forces Tribunal (Procedure) Rules, 2008'],
    checklist: ['Counter affidavit received', 'Draft rejoinder, if needed', 'Compilation of case law relied upon'],
  },
  {
    id: 'stage-7',
    title: 'Order, Compliance & Enforcement',
    forum: 'Armed Forces Tribunal, Lucknow Bench / PCDA (Pension) / Mining Department',
    body: [
      'The Tribunal passes a reasoned order allowing, partly allowing, or dismissing the OA or petition — for instance, directing a revised disability-pension percentage, quashing a discharge order, or setting aside a lease-cancellation order. A certified copy should be obtained promptly from the registry.',
      'Where the order directs an authority to act, compliance can be monitored, and a contempt or execution application filed under Section 19 of the Act if directions are not honoured within the time given; for pension matters, this often means following up with the Principal Controller of Defence Accounts (Pension) to confirm the revised amount is actually credited.',
    ],
    provisions: ['Section 19, Armed Forces Tribunal Act, 2007', 'Section 31, Armed Forces Tribunal Act, 2007'],
    checklist: ['Certified copy of the order', 'Compliance timeline directed, if any', 'Execution or contempt application, if non-compliance persists'],
  },
  {
    id: 'stage-8',
    title: 'Further Appeal to the Supreme Court',
    forum: 'Supreme Court of India',
    body: [
      'An appeal against an order of the Armed Forces Tribunal lies to the Supreme Court under Section 30, generally where it involves a substantial question of law of general public importance, and under Section 31 with the Tribunal\'s or the Supreme Court\'s leave in other cases.',
      'Mining Tribunal or High Court orders can likewise be challenged by special leave under Article 136 of the Constitution; limitation runs from the date of judgment and should be checked immediately against the certified copy before deciding on a further appeal.',
    ],
    provisions: ['Section 30, Armed Forces Tribunal Act, 2007', 'Section 31, Armed Forces Tribunal Act, 2007', 'Article 136, Constitution of India'],
    checklist: ['Certified copy of the Tribunal or High Court order', 'Limitation date for the appeal or SLP'],
  },
]

export const aftMiningToc: GuideTocItem[] = [
  { id: 'aft-mining-team', label: 'Our Team' },
  { id: 'forums', label: 'Forums We Appear Before' },
  { id: 'statutory-framework', label: 'Statutory Framework' },
  { id: 'matters', label: 'Matters We Handle' },
  { id: 'aft-lucknow-bench', label: 'Defence Services at AFT Lucknow Bench' },
  { id: 'mining-disputes-up', label: 'Mining & MineMitra Disputes' },
  {
    id: 'aft-mining-procedure',
    label: 'How a Case Proceeds: Stage 1 to Stage 8',
    children: aftMiningStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })),
  },
  { id: 'documents', label: 'Documents to Bring' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Speak to Our Team' },
]

export const aftMiningStatutes: StatuteRow[] = [
  {
    law: 'Armed Forces Tribunal Act, 2007',
    provisions: 's.14 (service matters), s.15 (court-martial appeals), s.19 (execution of orders), s.21 (statutory complaint), s.22 (limitation), s.30–31 (appeal to Supreme Court)',
    relevance: 'Governs disability/family pension, promotion, discharge, dismissal and court-martial appeals before the Lucknow Bench.',
  },
  {
    law: 'Pension Regulations for the Army / Navy / Air Force',
    provisions: 'Entitlement and assessment rules for disability and family pension, attributability and aggravation',
    relevance: 'Decides whether an injury or illness is attributable to or aggravated by service, and the disability percentage awarded.',
  },
  {
    law: 'Mines and Minerals (Development and Regulation) Act, 1957',
    provisions: 'Grant, renewal and termination of mining leases; royalty and dead-rent; penalties for illegal mining; revision to the Central Government',
    relevance: 'Primary central statute governing mining lease and royalty disputes in Uttar Pradesh.',
  },
  {
    law: 'UP Minor Mineral (Concession) Rules',
    provisions: 'State procedure for minor-mineral leases, e-auction, and quarry permits',
    relevance: 'Applies to sand, gravel, and other minor-mineral leases and permits issued in the Lucknow Division.',
  },
  {
    law: 'Environment (Protection) Act, 1986',
    provisions: 'Environmental clearance conditions attached to mining operations',
    relevance: 'Non-compliance with clearance conditions is a common ground for suspension or cancellation of a mining lease.',
  },
  {
    law: 'Constitution of India',
    provisions: 'Art. 226/227 (writ jurisdiction), Art. 136 (special leave to the Supreme Court)',
    relevance: 'Supervisory and appellate remedies where the AFT Act or MMDR Act does not provide an adequate alternative.',
  },
]
