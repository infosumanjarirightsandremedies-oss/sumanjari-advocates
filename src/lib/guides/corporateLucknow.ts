import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const corporateLucknowStages: GuideStage[] = [
  {
    id: 'corporate-stage-authority',
    title: 'Confirm the entity, client and authority to act',
    forum: 'Initial consultation; company or LLP records and Registrar of Companies filings',
    body: [
      'First identify the legal entity and who seeks advice: the company, an individual director, a shareholder, a partner or a creditor. Their interests may diverge, so a conflict check and clear instructions matter. Incorporation records, the registered office, articles, shareholder arrangements and the LLP or partnership agreement establish the starting position. A commercial disagreement involving a company does not automatically become a company-law petition.',
      'Before sending a notice or commencing proceedings in the entity\'s name, check the signatory\'s authority, board resolutions and any reserved approval requirements. Preserve minutes, statutory registers, shareholding records and relevant filings rather than reconstructing them after litigation begins. For a contested board, the validity of the instructions may itself be disputed. Explain the desired business outcome, current management control and any immediate risk to assets, records or statutory compliance.',
    ],
    provisions: ['Companies Act, 2013: sections 21 and 179, where applicable', 'Articles, board resolutions and applicable LLP or partnership terms'],
  },
  {
    id: 'corporate-stage-records',
    title: 'Build the transaction record and evaluate notice requirements',
    forum: 'Contracting parties, their authorised representatives and any agreed negotiation mechanism',
    body: [
      'For a contract or unpaid-invoice dispute, assemble the executed agreement, purchase orders, delivery records, acceptance evidence, invoices and payment reconciliation. Review termination, cure, escalation, governing-law and dispute-resolution clauses together. The contractual balance may differ from an invoice total because of credits, retention, set-off or disputed performance. Counsel also checks limitation, including the legal effect of acknowledgments or part-payments, without assuming negotiations extend time.',
      'A notice should state the contractual basis, material facts and requested remedy, and be sent through the prescribed channels with proof of service. Preserve emails and electronic records in their original form. An arbitration invocation, an insolvency demand and an ordinary contractual demand serve different purposes and are not interchangeable. Where a company needs compliance advice rather than litigation, identify the filing defect and responsible authority before escalating the matter into a dispute.',
    ],
    provisions: ['Indian Contract Act, 1872', 'Limitation Act, 1963, as applicable', 'Arbitration and Conciliation Act, 1996: section 21 where relevant'],
  },
  {
    id: 'corporate-stage-forum',
    title: 'Choose between commercial litigation and arbitration',
    forum: 'Competent Commercial Court or civil court; arbitral tribunal and competent supervisory court',
    body: [
      'A commercial claim requires both a qualifying commercial dispute and the applicable specified value, alongside territorial and pecuniary jurisdiction. A contract\'s forum clause cannot create jurisdiction where none exists. If there is an arbitration clause, review its scope, seat, parties and arbitrability before choosing a court action. The arbitration seat and statutory allocation determine supervisory jurisdiction; a business presence in Lucknow is not sufficient by itself.',
      'For a qualifying commercial suit that does not contemplate urgent interim relief, assess mandatory pre-institution mediation under Section 12A. Genuine urgency needs an evidence-based explanation, not a label used to avoid that requirement. Arbitration has separate appointment and interim-protection mechanisms. Decide whether relief concerns payment, performance, restraint or preservation of assets, and prepare the correct application. Neither an arbitration notice nor a mediation request automatically restrains the other party.',
    ],
    provisions: ['Commercial Courts Act, 2015: sections 2, 6 and 12A, as applicable', 'Arbitration and Conciliation Act: sections 8, 9, 11 and 17, where applicable'],
  },
  {
    id: 'corporate-stage-members',
    title: 'Assess shareholder remedies and statutory standing',
    forum: 'Jurisdictionally competent NCLT bench, including Allahabad where currently allocated',
    body: [
      'Allegations of oppressive conduct or mismanagement require analysis of the company\'s affairs and the statutory grounds, not merely proof of a disagreement between owners. Counsel checks membership, the Section 244 eligibility requirements and whether a waiver application is needed. Prepare the shareholding history, disputed allotments, meeting notices, minutes and financial records. Identify the specific conduct and prejudice rather than treating every contractual breach as oppression.',
      'Relief under Sections 241 and 242 can affect company governance, so proposed interim and final directions must address the actual problem and necessary parties. Share-transfer or register-rectification issues may engage different provisions. An LLP or partnership disagreement follows its own statute and agreement; it should not be put into a shareholder-petition format by analogy. Confirm the entity\'s registered office and current bench allocation before filing, and preserve ongoing statutory compliance while proceedings continue.',
    ],
    provisions: ['Companies Act: sections 58, 59 and 241-244, where applicable', 'Limited Liability Partnership Act, 2008 and Indian Partnership Act, 1932 for their respective entities'],
  },
  {
    id: 'corporate-stage-insolvency',
    title: 'Test insolvency eligibility without using it as a collection shortcut',
    forum: 'Competent NCLT as adjudicating authority for corporate insolvency; insolvency professional after appointment',
    body: [
      'Before invoking the Insolvency and Bankruptcy Code, identify whether the obligation is financial debt, operational debt or outside those categories. Verify default, limitation, the currently applicable threshold and statutory exclusions. Operational-creditor proceedings require their own demand process and examination of a pre-existing dispute; financial-creditor applications follow a different route. An unpaid invoice alone does not establish that an insolvency application is maintainable or appropriate.',
      'For a company receiving an insolvency demand or application, preserve the underlying contract, performance objections, dispute correspondence and payment evidence. Explain the potential collective consequences of admission, including the statutory moratorium and change in management control, rather than presenting the process as an ordinary money decree. The moratorium does not arise merely from sending a demand or filing an application. Claim submission, resolution and any withdrawal require separate statutory analysis once proceedings are admitted.',
    ],
    provisions: ['Insolvency and Bankruptcy Code, 2016: sections 4, 7, 8, 9, 10A and 14, as applicable'],
  },
  {
    id: 'corporate-stage-hearing',
    title: 'Prepare pleadings, evidence and proportionate interim relief',
    forum: 'The chosen NCLT, Commercial Court, civil court or arbitral tribunal',
    body: [
      'Once the correct forum is chosen, plead the facts and relief within that forum\'s powers. Verify authority to sign, necessary parties, service addresses, valuation and filing requirements. Court suits, NCLT petitions and arbitral proceedings have different rules for disclosure, replies and evidence. A commercial suit requires particular attention to document disclosure and statements of truth; missing records should be explained honestly rather than filled with assumptions.',
      'An interim request should identify a concrete risk, such as dissipation of assets, interference with records or an impending disputed corporate action. Supply supporting documents and disclose prior proceedings and adverse orders. Interim protection is discretionary or subject to statutory conditions and is not automatic on filing. Maintain a hearing and compliance record, coordinate authorised instructions from the entity, and keep settlement proposals distinct from admissions made in the formal pleadings.',
    ],
    provisions: ['NCLT Rules, 2016, where applicable', 'Code of Civil Procedure, 1908 as applicable to commercial disputes', 'Arbitration and Conciliation Act: sections 9, 17 and 19, where relevant'],
  },
  {
    id: 'corporate-stage-outcome',
    title: 'Plan the correct appeal, enforcement or documented settlement',
    forum: 'NCLAT for eligible NCLT appeals; competent appellate or arbitration court for other remedies',
    body: [
      'Read the operative order and identify the governing appeal route before acting. Eligible company-law NCLT orders and insolvency orders have separate NCLAT appeal provisions, with different limitation and further-appeal rules. A Commercial Court decision or arbitral award does not move to NCLAT merely because a company is a party. Obtain the communicated order, record receipt dates and assess any stay request separately; an appeal ordinarily does not suspend compliance by itself.',
      'For a negotiated outcome, confirm that the signatories can bind the company and that required corporate approvals are in place. Record payments, releases, share transfers, statutory filings and treatment of pending proceedings precisely. An arbitral award may require enforcement or a statutory challenge, while a court decree follows execution procedure. A settlement involving an admitted insolvency case cannot simply ignore that collective process. Keep proof of performance and completed filings before treating the dispute as closed.',
    ],
    provisions: ['Companies Act: sections 421 and 423, where applicable', 'Insolvency and Bankruptcy Code: sections 61 and 62', 'Arbitration and Conciliation Act: sections 34, 36 and 37, where applicable', 'Commercial Courts Act: section 13'],
  },
]

export const corporateLucknowStatutes: StatuteRow[] = [
  { law: 'Companies Act, 2013', provisions: 'Sections 21, 58, 59, 179, 241-244, 421 and 423, as applicable', relevance: 'Corporate authority, shareholding remedies, oppression and mismanagement, standing and the company-law appellate route.' },
  { law: 'Limited Liability Partnership Act, 2008 and Indian Partnership Act, 1932', provisions: 'Entity-specific governance provisions and the applicable agreement', relevance: 'Distinguish LLP and partnership rights from company membership and board procedures; confirm the actual remedy and forum.' },
  { law: 'Commercial Courts Act, 2015', provisions: 'Sections 2, 6, 12A and 13, as applicable', relevance: 'Commercial character, specified value, jurisdiction, pre-institution mediation and appeals need independent review.' },
  { law: 'Arbitration and Conciliation Act, 1996', provisions: 'Sections 8, 9, 11, 17, 21, 34, 36 and 37, as applicable', relevance: 'The agreement and seat determine arbitration and supervisory remedies; contractual disputes do not automatically belong before NCLT.' },
  { law: 'Insolvency and Bankruptcy Code, 2016', provisions: 'Sections 4, 7-9, 10A, 14, 61 and 62, as applicable', relevance: 'Eligibility, default, excluded periods, operational-debt disputes, admission consequences and appeals are not ordinary collection procedures.' },
  { law: 'Indian Contract Act, 1872 and Limitation Act, 1963', provisions: 'Applicable contractual remedies and limitation provisions', relevance: 'Assess performance, breach, acknowledgments, payment records and the relief sought before selecting litigation or settlement.' },
]

export const corporateLucknowToc: GuideTocItem[] = [
  { id: 'corporate-team', label: 'Our Team' },
  { id: 'corporate-overview', label: 'Company and commercial practice' },
  { id: 'corporate-statutes', label: 'Statutory framework' },
  { id: 'corporate-forums', label: 'Competent forums' },
  { id: 'corporate-matters', label: 'Matters we handle' },
  { id: 'corporate-procedure', label: 'Procedure and practical decisions', children: corporateLucknowStages.map(({ id, title }) => ({ id, label: title })) },
  { id: 'corporate-faqs', label: 'Frequently asked questions' },
  { id: 'corporate-case-preparation', label: 'Documents for the first consultation' },
]