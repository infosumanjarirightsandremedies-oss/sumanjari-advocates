import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const bankingLucknowStages: GuideStage[] = [
  {
    id: 'banking-stage-npa-audit',
    title: 'Audit of NPA Classification & Section 13(2) 60-Day Demand Notice',
    forum: 'Chamber consultation and representation before the secured creditor and its authorised officer',
    body: [
      'We begin by auditing the NPA classification itself — whether the account crossed the 90-day default threshold under the RBI Master Directions, whether interest and penal charges were computed correctly, and whether the Section 13(2) SARFAESI demand notice accurately states the secured debt. A defective classification or an inflated demand weakens every enforcement step that follows.',
      'Within the 60-day notice window, we draft the mandatory Section 13(3A) representation raising specific, document-supported objections — undervaluation of the secured asset, incorrect interest-rate application, or breach of RBI MSME restructuring guidelines — and press for the speaking order the statute requires the creditor to issue. Proof of dispatch and the creditor\'s response are preserved for the DRT record.',
    ],
    provisions: ['SARFAESI Act, 2002: sections 13(2) and 13(3A)', 'RBI Master Directions on NPA classification and MSME restructuring'],
  },
  {
    id: 'banking-stage-possession',
    title: 'Challenging Section 13(4) Symbolic Possession & Section 14 DM/ACMM Physical Possession Orders',
    forum: 'Authorised officer of the secured creditor; District Magistrate or ACMM for Section 14 assistance',
    body: [
      'Once the creditor moves to Section 13(4) — symbolic possession, takeover of management, or appointment of a receiver — each measure is examined against the statutory preconditions and the actual record. Symbolic possession that is not validly taken or published cannot found a lawful auction.',
      'Where the creditor seeks Section 14 assistance from the District Magistrate or ACMM for physical possession, we scrutinise the application for compliance with the 9-point mandatory affidavit requirements and challenge defective or premature assistance orders. Agricultural land exempt under Section 31(i) is identified at this stage, since SARFAESI cannot be invoked against it at all.',
    ],
    provisions: ['SARFAESI Act, 2002: sections 13(4), 14 and 31(i)'],
  },
  {
    id: 'banking-stage-sa',
    title: 'Filing Securitisation Application (SA) under Section 17 before DRT Lucknow',
    forum: 'Debts Recovery Tribunal, Lucknow (University Road, Babuganj, Hasanganj)',
    body: [
      'Any person aggrieved by a Section 13(4) measure must file the Securitisation Application before the DRT within the strict 45-day statutory window. We identify the challenged measure precisely, calculate limitation from the correct trigger date, and plead each defect — in the demand, possession, or sale process — with supporting documents.',
      'Where eviction or auction is imminent, the SA is accompanied by a reasoned interim application seeking a stay of coercive steps, with full disclosure of earlier proceedings and any conditional deposit the Tribunal may direct. Filing alone does not stay enforcement; the protection depends on the Tribunal\'s order.',
    ],
    provisions: ['SARFAESI Act, 2002: section 17', 'Limitation computed from the challenged Section 13(4) measure'],
  },
  {
    id: 'banking-stage-auction',
    title: 'Defending E-Auction Notices under Rules 8(6) & 9(1) of the Security Interest (Enforcement) Rules, 2002',
    forum: 'Authorised officer and e-auction platform; DRT Lucknow for interim protection',
    body: [
      'Auction of an immovable secured asset is tested rule by rule: the 30-day clear notice under Rule 8(6) before the first sale, the 15-day notice to the borrower under Rule 9(1), publication requirements, and the reserve price fixed on proper valuation. Short notice, defective service or an undervalued reserve price are recognised grounds to challenge the sale.',
      'We also advise on the borrower\'s right of redemption under Section 13(8) — recalibrated after the Supreme Court\'s decision in Celir LLP v. Bafna Motors — and on applications to set aside a completed sale where the Rules were breached. Auction dates move fast; the notice and its delivery record should reach counsel immediately.',
    ],
    provisions: ['Security Interest (Enforcement) Rules, 2002: rules 8(6) and 9(1)', 'SARFAESI Act, 2002: section 13(8)'],
  },
  {
    id: 'banking-stage-oa',
    title: 'Contesting Original Applications under Section 19 RDB Act & Borrower Counter-Claims',
    forum: 'Debts Recovery Tribunal, Lucknow, for claims of ₹20 lakh and above',
    body: [
      'Where a bank or financial institution files an Original Application under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993 for a debt of ₹20 lakh or more, we examine standing, the debt computation, limitation and the security documents before drafting the defence.',
      'The defence uses the full statutory toolkit — the written statement, set-off and counter-claim under Sections 19(6) to 19(8), including borrower counter-claims for wrongful debits, penal interest or misapplied payments. After a recovery certificate, execution before the Recovery Officer under Sections 25 to 28 is contested within its own statutory framework.',
    ],
    provisions: ['RDB Act, 1993: sections 19, 19(6)-(8), 20 and 25-28'],
  },
  {
    id: 'banking-stage-138',
    title: 'Section 138 NI Act Cheque Bounce Trial & Settlement',
    forum: 'ACJM / Special NI Act Magistrate Courts, Kaiserbagh, Lucknow',
    body: [
      'Cheque dishonour proceedings run on their own strict timeline: the 15-day statutory demand notice after dishonour, the 15-day payment window, and the 30-day window for filing the complaint. We verify notice contents, service, territorial jurisdiction and the legally enforceable debt before complaint or defence is finalised.',
      'At trial before the Lucknow ACJM or Special NI Act Magistrate Courts at Kaiserbagh, we address Section 143A interim compensation (up to 20% of the cheque amount) defence, Section 141 vicarious-liability questions for company signatories, and compounding under Section 147, which often delivers the fastest commercial closure for both sides.',
    ],
    provisions: ['NI Act, 1881: sections 138, 141, 143A and 147', 'Payment and Settlement Systems Act, 2007: section 25'],
  },
  {
    id: 'banking-stage-appeal-drat',
    title: 'DRAT Allahabad Appeals & Writs before the Allahabad High Court, Lucknow Bench',
    forum: 'Debts Recovery Appellate Tribunal, Allahabad; Allahabad High Court, Lucknow Bench (Chamber D-311)',
    body: [
      'Appeals against DRT orders lie to DRAT Allahabad — under Section 18 of the SARFAESI Act or Section 20 of the RDB Act, depending on the originating statute. The borrower\'s SARFAESI appeal carries a 50% pre-deposit, which the DRAT may reduce to 25% on a reasoned hardship waiver application; the RDB route has its own deposit conditions.',
      'Where a statutory remedy is inadequate — an order passed without jurisdiction or in breach of natural justice, or RBI-mandated hearing requirements ignored before wilful-defaulter or fraud classification — we carry the matter by writ petition under Articles 226 and 227 before the Allahabad High Court, Lucknow Bench, from our chambers at D-311.',
    ],
    provisions: ['SARFAESI Act, 2002: section 18 (50%/25% pre-deposit)', 'RDB Act, 1993: sections 20 and 21', 'Constitution of India: Articles 226 and 227', 'State Bank of India v. Rajesh Agarwal (natural justice before classification)'],
  },
]

export const bankingLucknowStatutes: StatuteRow[] = [
  {
    law: 'SARFAESI Act, 2002',
    provisions: 's.13(2) 60-day demand notice; s.13(3A) objection & speaking order; s.13(4) symbolic/physical possession & auction; s.14 DM/ACMM physical possession assistance; s.17 Securitisation Application within 45 days before DRT Lucknow; s.18 appeal to DRAT Allahabad with 50%/25% pre-deposit; s.31(i) agricultural land exemption',
    relevance: 'The complete secured-asset enforcement and defence track for banks, borrowers and guarantors.',
  },
  {
    law: 'Recovery of Debts and Bankruptcy Act, 1993',
    provisions: 's.19 Original Application by banks for debts ≥ ₹20 lakh; s.19(6)–(8) written statement, set-off and counter-claim; s.20 appeal to DRAT; s.25–28 Recovery Officer execution',
    relevance: 'Lender recovery claims, borrower defences and certificate execution before DRT Lucknow.',
  },
  {
    law: 'Negotiable Instruments Act, 1881 & Payment and Settlement Systems Act, 2007',
    provisions: 's.138 cheque dishonour; s.141 offences by companies; s.143A interim compensation up to 20%; s.147 compounding; s.25 PSS Act (electronic dishonour)',
    relevance: 'Cheque bounce complaints and defence before the Lucknow ACJM / Special NI Act Magistrate Courts, Kaiserbagh.',
  },
  {
    law: 'RBI Master Directions',
    provisions: '90-day NPA classification; MSME restructuring framework; non-arbitrary OTS processing; natural justice before wilful defaulter / fraud classification (State Bank of India v. Rajesh Agarwal)',
    relevance: 'Grounds to audit account classification, settlement refusals and punitive classifications at every stage.',
  },
  {
    law: 'Constitution of India',
    provisions: 'Articles 226 & 227',
    relevance: 'Writ-C jurisdiction before the Allahabad High Court, Lucknow Bench (Chamber D-311) where tribunal remedies are inadequate.',
  },
]

export const bankingLucknowToc: GuideTocItem[] = [
  { id: 'banking-team', label: 'Our Team' },
  { id: 'banking-overview', label: 'Banking and recovery practice' },
  { id: 'sarfaesi-next-steps', label: 'Notices, possession and recovery claims' },
  { id: 'drt-documents', label: 'Documents for the first consultation' },
  { id: 'banking-statutes', label: 'Statutory framework' },
  { id: 'banking-matters', label: 'Matters we handle' },
  { id: 'banking-forums', label: 'Competent forums' },
  { id: 'banking-procedure', label: 'SARFAESI / DRT case: Stage 1 to Stage 7', children: bankingLucknowStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })) },
  { id: 'banking-faqs', label: 'Frequently asked questions' },
  { id: 'drt-official-resources', label: 'Official resources' },
]

