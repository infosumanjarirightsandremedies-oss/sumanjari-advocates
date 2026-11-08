import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const bankingLucknowStages: GuideStage[] = [
  {
    id: 'banking-stage-notice-ots',
    title: 'Account Reconciliation, Demand Notice & One-Time Settlement (OTS)',
    forum: 'Chamber consultation and correspondence with the lender or borrower',
    body: [
      'We begin by reconciling the loan account — statements, interest computation, penal charges and any disputed debits — before drafting or responding to a pre-litigation legal demand notice. A notice that overstates the outstanding amount or omits credits weakens the creditor\'s later recovery claim.',
      'Where settlement is the better commercial outcome, we negotiate One-Time Settlement (OTS) terms, instalment schedules, and release-of-security and no-dues documentation. An OTS proposal does not by itself stop a pending proceeding or extend a statutory deadline; any live limitation period must still be tracked separately.',
    ],
    provisions: ['RBI Master Directions on fair practices and non-arbitrary OTS processing', 'Indian Contract Act, 1872: accord and satisfaction'],
  },
  {
    id: 'banking-stage-138-notice',
    title: 'Section 138 NI Act: Dishonour, Statutory Notice & Complaint',
    forum: 'ACJM / Special NI Act Magistrate Courts, Kaiserbagh, Lucknow',
    body: [
      'Cheque dishonour proceedings run on their own strict timeline: the 15-day statutory demand notice after dishonour, the 15-day payment window, and the 30-day window for filing the complaint. We verify notice contents, service, territorial jurisdiction and the legally enforceable debt before the complaint or defence is finalised.',
    ],
    provisions: ['NI Act, 1881: sections 138 and 142', 'Payment and Settlement Systems Act, 2007: section 25 (electronic dishonour)'],
  },
  {
    id: 'banking-stage-138-trial',
    title: 'Section 138 NI Act: Trial, Interim Compensation & Compounding',
    forum: 'ACJM / Special NI Act Magistrate Courts, Kaiserbagh, Lucknow',
    body: [
      'At trial before the Lucknow ACJM or Special NI Act Magistrate Courts at Kaiserbagh, we address Section 143A interim compensation (up to 20% of the cheque amount), Section 141 vicarious-liability questions for company signatories, and compounding under Section 147, which often delivers the fastest commercial closure for both sides.',
    ],
    provisions: ['NI Act, 1881: sections 141, 143A and 147'],
  },
  {
    id: 'banking-stage-commercial-suit',
    title: 'Commercial Recovery Suits, Guarantor Claims & Execution',
    forum: 'Commercial Court, Lucknow; executing court for decree execution',
    body: [
      'Recovery claims against borrowers, corporate debtors, or guarantors that fall outside the DRT\'s institutional and pecuniary jurisdiction — including many NBFC and private lending disputes — proceed as summary or commercial suits. We examine limitation, acknowledgment of debt, interest computation and the underlying agreement before filing or defending.',
      'Guarantors are advised separately on invocation of the guarantee, discharge and set-off. Once a money decree is passed, we assist with execution proceedings, attachment and realisation of the decretal amount.',
    ],
    provisions: ['Commercial Courts Act, 2015', 'Code of Civil Procedure, 1908: Order XXXVII (summary suits) and Order XXI (execution)', 'Indian Contract Act, 1872: sections 126-147 (contract of guarantee)'],
  },
]

export const bankingLucknowStatutes: StatuteRow[] = [
  {
    law: 'Negotiable Instruments Act, 1881 & Payment and Settlement Systems Act, 2007',
    provisions: 's.138 cheque dishonour; s.141 offences by companies; s.143A interim compensation up to 20%; s.147 compounding; s.25 PSS Act (electronic dishonour)',
    relevance: 'Cheque bounce complaints and defence before the Lucknow ACJM / Special NI Act Magistrate Courts, Kaiserbagh.',
  },
  {
    law: 'Commercial Courts Act, 2015 & Code of Civil Procedure, 1908',
    provisions: 'Commercial Court procedure for high-value recovery suits; Order XXXVII summary suits; Order XXI execution of a money decree',
    relevance: 'Recovery claims outside the DRT\'s pecuniary or institutional jurisdiction — including NBFC and private lending disputes.',
  },
  {
    law: 'Indian Contract Act, 1872',
    provisions: 'Sections 126-147: contract of guarantee, invocation, discharge and set-off',
    relevance: 'Guarantor liability and discharge disputes arising in recovery and settlement negotiations.',
  },
  {
    law: 'RBI Master Directions',
    provisions: '90-day NPA classification norms; MSME restructuring framework; non-arbitrary One-Time Settlement (OTS) processing',
    relevance: 'Grounds to review account classification and negotiate, or challenge, an unreasonable settlement refusal.',
  },
]

export const bankingLucknowToc: GuideTocItem[] = [
  { id: 'banking-team', label: 'Our Team' },
  { id: 'lucknow-chambers', label: 'Our Lucknow Chambers' },
  { id: 'choosing-an-advocate', label: 'Choosing a Lawyer or Advocate' },
  { id: 'banking-overview', label: 'Banking and recovery practice' },
  { id: 'sarfaesi-next-steps', label: 'Notices, settlement and recovery claims' },
  { id: 'drt-documents', label: 'Documents for the first consultation' },
  { id: 'banking-statutes', label: 'Statutory framework' },
  { id: 'banking-matters', label: 'Matters we handle' },
  { id: 'banking-forums', label: 'Competent forums' },
  { id: 'banking-procedure', label: 'Banking recovery matter: Stage 1 to Stage 4', children: bankingLucknowStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })) },
  { id: 'banking-faqs', label: 'Frequently asked questions' },
  { id: 'drt-official-resources', label: 'Official resources' },
]
