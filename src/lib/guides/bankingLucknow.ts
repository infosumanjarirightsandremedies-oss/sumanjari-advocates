import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const bankingLucknowStages: GuideStage[] = [
  {
    id: 'banking-stage-review',
    title: 'Identify the debt, security and live proceeding',
    forum: 'Initial consultation; the competent DRT or civil court is identified from the transaction',
    body: [
      'Start by identifying whether you are the borrower, guarantor, secured creditor or purchaser of an auctioned asset. A loan recall, a SARFAESI demand, a DRT summons and a cheque dishonour notice require different responses. Counsel checks the creditor, facility documents, security creation, account classification and payments before choosing a route. The current territorial allocation and applicable recovery threshold must be verified; a Lucknow address alone does not settle jurisdiction.',
      'Bring the complete sanction and loan papers, guarantee, account statements, security documents and every notice with its envelope or electronic delivery record. Prepare a dated payment history and identify any threatened possession or sale. Explain existing proceedings, prior settlements and disputed signatures at the outset. A conflict check precedes representation, and neither a preliminary consultation nor correspondence with the lender protects a procedural deadline by itself.',
    ],
    provisions: ['Recovery of Debts and Bankruptcy Act, 1993: sections 17 and 19', 'SARFAESI Act: sections 13 and 17, where applicable'],
  },
  {
    id: 'banking-stage-demand',
    title: 'Review the Section 13(2) demand and submit objections',
    forum: 'The secured creditor and its authorised officer',
    body: [
      'A Section 13(2) notice is a statutory demand, not the same event as a Section 13(4) enforcement measure. Review the claimed liability against disbursements, repayments, interest terms and security particulars. Counsel also examines whether the statutory conditions for using SARFAESI are met, including applicable exclusions. A representation under Section 13(3A) should identify supported objections and request specific corrections rather than merely deny the debt.',
      'Preserve proof of sending the representation and the creditor\'s response. Supply reconciled account entries, payment acknowledgments and documents explaining any dispute about the secured asset or guarantee. Keep settlement discussions separate from the legal response. A demand notice alone ordinarily does not open the Section 17 remedy, and rejection of objections is not itself a substitute for the later statutory trigger. Review any subsequent possession or sale step immediately.',
    ],
    provisions: ['SARFAESI Act: sections 13(2), 13(3A), 13(4) and 31, as applicable'],
  },
  {
    id: 'banking-stage-enforcement',
    title: 'Examine possession, Section 14 assistance and sale steps',
    forum: 'Authorised officer; competent Chief Metropolitan Magistrate or District Magistrate for Section 14 assistance',
    body: [
      'Once enforcement begins, identify the exact measure, affected asset and date rather than treating all bank correspondence alike. Symbolic possession, physical possession and an auction announcement have different factual records. Where Section 14 assistance is sought, examine the application, supporting affidavit and resulting order. The magistrate\'s assistance process should not be confused with adjudication of a borrower\'s substantive challenge before the DRT.',
      'For an immovable-property sale, collect possession and sale notices, service records, publications, valuation material available to you and the auction terms. Counsel tests the applicable Security Interest (Enforcement) Rules against the actual sequence, including any earlier failed sale. Third-party occupation or ownership claims need their own supporting documents. An objection, negotiation or proposed tribunal filing does not automatically suspend possession, bidding, payment obligations or confirmation of sale.',
    ],
    provisions: ['SARFAESI Act: sections 13(4) and 14', 'Security Interest (Enforcement) Rules, 2002: rules 8 and 9 for immovable property'],
  },
  {
    id: 'banking-stage-drt',
    title: 'Prepare a Section 17 application and any interim request',
    forum: 'Jurisdictionally competent Debts Recovery Tribunal, including DRT Lucknow where allocated',
    body: [
      'A person aggrieved by a qualifying Section 13(4) measure may seek relief under Section 17. The application should identify the challenged action, explain standing and jurisdiction, and connect each alleged defect to documents. Counsel checks limitation against the actual measure and record; an earlier representation or an OTS discussion does not reset it. Tribunal allocation must be confirmed for the relevant branch, property and statutory connecting factors.',
      'If possession or an auction is imminent, an interim request should state the immediate risk, precise relief and supporting facts. Include the creditor and other necessary parties, disclose earlier orders, and preserve proof of filing and service. There is no automatic stay merely because the application is filed. Read the operative directions carefully, comply with any conditions, and track subsequent enforcement steps while the substantive challenge is heard.',
    ],
    provisions: ['SARFAESI Act: sections 17(1), 17(1A), 17(2) and 17(3), as applicable'],
  },
  {
    id: 'banking-stage-recovery',
    title: 'Handle the lender\'s Original Application and certificate recovery',
    forum: 'Competent DRT and its Recovery Officer; civil court where the statutory recovery route does not apply',
    body: [
      'A lender\'s Original Application under Section 19 of the Recovery of Debts and Bankruptcy Act is distinct from a borrower\'s SARFAESI application. Check the notified threshold, lender eligibility, territorial jurisdiction and computation of the claim. A defence may require account reconciliation, limitation analysis and examination of guarantees. Guarantor liability depends on the undertaking and applicable law; the lender need not invariably exhaust the principal borrower\'s assets first.',
      'After a recovery certificate, the Recovery Officer acts within a separate statutory enforcement framework. Attachment, sale objections and challenges to an officer\'s order should be assessed under that framework rather than described as another Section 17 application. Keep the certificate, execution notices, payment proofs and ownership records together. Cheque dishonour proceedings have a separate criminal complaint route and statutory requirements; they do not replace the accounting or jurisdiction analysis for civil recovery.',
    ],
    provisions: ['Recovery of Debts and Bankruptcy Act: sections 19, 25, 29 and 30', 'Indian Contract Act, 1872: guarantee provisions', 'Negotiable Instruments Act, 1881: sections 138 and 142, where relevant'],
  },
  {
    id: 'banking-stage-appeal',
    title: 'Select the correct appeal and examine deposit conditions',
    forum: 'Competent Debts Recovery Appellate Tribunal, including DRAT Allahabad where allocated',
    body: [
      'Identify which statute produced the order before drafting an appeal. A SARFAESI Section 18 appeal and an appeal under Section 20 of the Recovery of Debts and Bankruptcy Act are not interchangeable. Record the order\'s communication date and obtain the complete pleadings, evidence and interim directions. Counsel checks appealability, limitation, the competent DRAT and the particular statutory conditions instead of assuming one appeal format covers every recovery dispute.',
      'A borrower\'s Section 18 appeal attracts a statutory pre-deposit, subject to the limited reduction the statute permits; it is not the same requirement as an initial Section 17 application. The recovery statute has its own deposit provision. Plan funding and any supported reduction request before filing. An appeal does not automatically stay the challenged order. Exceptional High Court remedies require a separate maintainability assessment and ordinarily do not bypass effective tribunal remedies.',
    ],
    provisions: ['SARFAESI Act: section 18', 'Recovery of Debts and Bankruptcy Act: sections 20 and 21', 'Constitution of India: Articles 226 and 227, subject to maintainability'],
  },
  {
    id: 'banking-stage-closure',
    title: 'Document settlement, compliance and release of security',
    forum: 'Lender\'s competent settlement authority; DRT, DRAT or Recovery Officer for pending proceedings',
    body: [
      'A one-time settlement is a negotiated route governed by the lender\'s applicable policy and written approval, not a borrower\'s automatic entitlement. A proposal should match available funds and identify the facilities, guarantors and secured assets it covers. Check the consequences of default, interest treatment and whether earlier concessions revive. Unless the creditor agrees or a competent forum orders otherwise, settlement discussions do not halt enforcement or extend filing periods.',
      'Before treating the matter as closed, obtain payment acknowledgments, the agreed discharge documents and the terms for returning originals and releasing charges. Pending cases, recovery certificates and attachments may require specific disposal or satisfaction steps. Review whether the settlement releases guarantors and how credit reporting corrections will be addressed. Maintain a closing record of approvals, receipts and release filings; a verbal assurance or a single account entry is not a complete discharge record.',
    ],
    provisions: ['Applicable loan, guarantee and settlement terms', 'Recovery of Debts and Bankruptcy Act and SARFAESI procedures relevant to pending proceedings'],
  },
]

export const bankingLucknowStatutes: StatuteRow[] = [
  { law: 'SARFAESI Act, 2002', provisions: 'Sections 13(2), 13(3A), 13(4), 14, 17 and 18', relevance: 'Distinguish the demand and objection stage, enforcement measures, magistrate assistance, DRT application and conditional DRAT appeal.' },
  { law: 'Security Interest (Enforcement) Rules, 2002', provisions: 'Rules 8 and 9 for immovable property; other rules according to the asset', relevance: 'Review possession, valuation, sale notices and auction compliance against the applicable version and sale sequence.' },
  { law: 'Recovery of Debts and Bankruptcy Act, 1993', provisions: 'Sections 19, 20, 21, 25, 29 and 30', relevance: 'Lender recovery applications, appeals, deposit requirements and Recovery Officer proceedings follow this separate statutory track.' },
  { law: 'Indian Contract Act, 1872', provisions: 'Sections 126-147, where applicable', relevance: 'Guarantee terms, co-extensive liability and fact-specific defences require review of the undertaking and subsequent conduct.' },
  { law: 'Negotiable Instruments Act, 1881', provisions: 'Sections 138 and 142, where applicable', relevance: 'Cheque dishonour complaints require their own notice, limitation and territorial analysis; they are not DRT proceedings.' },
]

export const bankingLucknowToc: GuideTocItem[] = [
  { id: 'banking-team', label: 'Our Team' },
  { id: 'banking-overview', label: 'Banking and recovery practice' },
  { id: 'sarfaesi-next-steps', label: 'Notices, possession and recovery claims' },
  { id: 'drt-documents', label: 'Documents for the first consultation' },
  { id: 'banking-statutes', label: 'Statutory framework' },
  { id: 'banking-matters', label: 'Matters we handle' },
  { id: 'banking-forums', label: 'Competent forums' },
  { id: 'banking-procedure', label: 'Procedure and practical decisions', children: bankingLucknowStages.map(({ id, title }) => ({ id, label: title })) },
  { id: 'banking-faqs', label: 'Frequently asked questions' },
  { id: 'drt-official-resources', label: 'Official resources' },
]