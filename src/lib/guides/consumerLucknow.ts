import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const consumerLucknowStages: GuideStage[] = [
  {
    id: 'consumer-stage-1',
    title: 'Identify the remedy and the competent forum',
    forum: 'Competent Consumer Commission, Motor Accident Claims Tribunal, or designated scheme authority',
    body: [
      'Start by separating the underlying events. A defective product, deficient service or eligible insurance dispute may support a consumer complaint. Injury or death arising from use of a motor vehicle usually requires assessment under the Motor Vehicles Act before the competent MACT. An accident involving an unidentified vehicle may engage the separate statutory hit-and-run scheme, rather than an ordinary claim against an identified insurer.',
      'We check consumer status, territorial connections, monetary jurisdiction, the accident location and claimant residence where relevant. Existing complaints, settlements and payments must be disclosed before selecting a route. Filing in Lucknow is not justified solely by preference, and a policy dispute does not automatically belong before MACT. Applicable limitation, commencement provisions and current forum practice require an individual review; do not assume delay can always be excused.',
    ],
    provisions: ['Consumer Protection Act, 2019: jurisdiction and complaint provisions', 'Motor Vehicles Act, 1988: sections 161, 165 and 166'],
  },
  {
    id: 'consumer-stage-2',
    title: 'Preserve the purchase, accident and loss records',
    forum: 'Client consultation, treating hospital, police and relevant insurer',
    body: [
      'For a consumer dispute, assemble invoices, payment proof, the contract, warranty terms, service requests and written responses. Retain the complete policy and repudiation letter for insurance complaints, not just a sales brochure. Record the sequence of events and the remedy already requested. Keep original files and messages intact so the documents can be matched to the transaction and the correct supplier or service provider.',
      'For an accident, preserve police records, accident details, vehicle registration and insurance information, medical records, bills and discharge summaries. Income, age, disability, dependency and expenditure require appropriate supporting records. Obtain copies through lawful channels and identify missing documents early. A disability certificate and an assertion of lost earnings serve different purposes; the effect on work must be explained and proved rather than inferred from a percentage alone.',
    ],
    provisions: ['Consumer Protection Act, 2019: complaint evidence', 'Motor Vehicles Act, 1988: claims inquiry and accident records'],
    checklist: ['Purchase or policy file and complaint correspondence', 'Police, treatment and vehicle records', 'Income, age, disability and dependency evidence'],
  },
  {
    id: 'consumer-stage-3',
    title: 'Frame the claim and disclose parallel remedies',
    forum: 'Competent Consumer Commission or MACT; scheme authority where applicable',
    body: [
      'A consumer complaint should identify the deficiency, supporting transaction, appropriate opposite parties and relief sought. A MACT petition requires the relevant accident facts, parties, policy position and heads of compensation. We examine the legal basis for liability and any available statutory route before drafting. Requests for reimbursement, compensation and costs need supporting facts; a large demand is not a substitute for evidence of the loss claimed.',
      'Hit-and-run assistance has its own eligibility, verification and payment framework under the applicable scheme. It should not be described as an automatic insurer award or combined indiscriminately with another compensation route. Disclose all applications, earlier payments, releases and proposed settlements so adjustment or recovery questions can be considered. Any pre-filing representation, filing method and supporting affidavit requirements are checked against the relevant remedy and current local practice.',
    ],
    provisions: ['Consumer Protection Act, 2019: sections 35 and 39', 'Motor Vehicles Act, 1988: sections 161, 164 and 166'],
  },
  {
    id: 'consumer-stage-4',
    title: 'Address replies, liability disputes and expert evidence',
    forum: 'Consumer Commission or MACT handling the proceeding',
    body: [
      'Once notice is issued, the supplier, insurer, vehicle owner or other respondent may dispute jurisdiction, coverage, negligence, entitlement or the amount claimed. Review the reply against the documents rather than treating every objection as decisive. Consumer matters can require technical or expert material to establish a defect or service failure. Medical-negligence allegations need a careful assessment of treatment records and the relevant standard of care.',
      'Accident proceedings may require evidence from treating doctors, employers, investigating personnel or other witnesses, depending on the disputed issues. Keep originals available and explain inconsistencies in names, dates, income records or policy details promptly. Seek necessary documents through the appropriate procedural route. The forum decides admissibility, examination and further evidence; neither a police record nor an insurer communication alone guarantees that every element of the claim is established.',
    ],
    provisions: ['Consumer Protection Act, 2019: section 38', 'Motor Vehicles Act, 1988: sections 168 and 169'],
  },
  {
    id: 'consumer-stage-5',
    title: 'Evaluate compensation and any settlement proposal',
    forum: 'Consumer Commission, MACT or an appropriate settlement forum',
    body: [
      'Consumer relief depends on the proven deficiency and the remedy the forum can grant, such as repair, replacement, refund or compensation in an appropriate case. Accident compensation requires a reasoned assessment of the applicable heads, supported earnings, age, dependency, treatment needs and functional impact of injury. Relevant judicial principles inform the calculation, but no universal multiplier, interest rate or payout can responsibly be promised in advance.',
      'Before accepting an offer, check what it covers, which claims are released, how existing payments are treated and whether further treatment or dependent interests require attention. Where minors are involved, the competent forum may impose safeguards concerning settlement and disbursement. Mediation or negotiated resolution can be considered where legally suitable and voluntary. Do not sign a discharge, blank document or full-and-final receipt without understanding its effect on the remaining claim.',
    ],
    provisions: ['Consumer Protection Act, 2019: relief and mediation framework', 'Motor Vehicles Act, 1988: section 168 and applicable compensation principles'],
  },
  {
    id: 'consumer-stage-6',
    title: 'Review the order, payment and enforcement route',
    forum: 'Issuing forum, statutory appellate forum or competent High Court as applicable',
    body: [
      'After an order or award, review the operative directions, liable parties, payment conditions and any deposit or disbursement requirements. Keep the complete order, proof of service, account information and records of every payment received. A favourable decision and actual receipt of money are separate steps. If compliance is incomplete, identify the outstanding obligation precisely before seeking execution or other enforcement available under the relevant statutory framework.',
      'Appeal, review or challenge must be considered under the correct statute and forum hierarchy. Consumer appeals do not all go directly to the High Court, and a MACT award follows a different appellate route. Filing periods, deposit requirements and the effect of a stay need prompt, case-specific advice. Confirm the applicable law and current practice when taking action; the guide does not guarantee an appeal, uninterrupted payment or a particular recovery timetable.',
    ],
    provisions: ['Consumer Protection Act, 2019: statutory appeals and enforcement', 'Motor Vehicles Act, 1988: sections 173 and 174'],
  },
]

export const consumerLucknowToc: GuideTocItem[] = [
  { id: 'consumer-team', label: 'Our Team' },
  { id: 'consumer-statutes', label: 'Applicable Laws and Forums' },
  { id: 'consumer-procedure', label: 'Complaint and Claim Procedure', children: consumerLucknowStages.map(({ id, title }) => ({ id, label: title })) },
  { id: 'consumer-documents', label: 'First-Consultation Checklist' },
  { id: 'consumer-mact-claim-review', label: 'Consumer or MACT: Choosing the Route' },
]

export const consumerLucknowStatutes: StatuteRow[] = [
  { law: 'Consumer Protection Act, 2019', provisions: 'Sections 34-39 and corresponding State/National Commission provisions', relevance: 'Consumer eligibility, jurisdiction, complaints and relief. Monetary thresholds and filing practice must be checked under the rules currently in force.' },
  { law: 'Motor Vehicles Act, 1988', provisions: 'Sections 165-169', relevance: 'MACT jurisdiction, claims and inquiry into compensation for qualifying motor accidents; the applicable route depends on the facts.' },
  { law: 'Motor Vehicles Act: statutory compensation routes', provisions: 'Sections 161, 164 and 164B; applicable scheme rules', relevance: 'Separate hit-and-run assistance, statutory compensation and fund framework. Eligibility, commencement and interaction with other payments require review.' },
  { law: 'Compensation to Victims of Hit and Run Motor Accidents Scheme, 2022', provisions: 'Applicable scheme procedure and prescribed documentation', relevance: 'Designated authorities examine qualifying unidentified-vehicle cases. This is distinct from an ordinary MACT claim against an identified driver, owner or insurer.' },
  { law: 'Appeals and enforcement', provisions: 'Consumer Protection Act statutory hierarchy; Motor Vehicles Act sections 173-174', relevance: 'The correct challenge and recovery mechanism differs by forum and order; filing periods, deposits and stays are case-specific.' },
]