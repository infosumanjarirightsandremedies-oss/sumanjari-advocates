import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const serviceStages: GuideStage[] = [
  {
    id: 'service-stage-1',
    title: 'Challenge a Prolonged Suspension Order',
    forum: 'Disciplinary authority; UPPST, Indira Bhawan, Hazratganj or CAT, Lucknow Bench, Vipin Khand, Gomti Nagar, as applicable',
    body: [
      'Suspension is not a punishment in itself, but an unreviewed suspension can be challenged. Under the 90-day unreviewed suspension rule in Ajay Kumar Choudhary v. Union of India and the Rule 4(1) proviso of the U.P. CCA Rules, 1999, a suspension continued without timely review or charge sheet is vulnerable. We examine the suspension order, its review record and the applicable rule before seeking revocation, subsistence allowance review or tribunal intervention.',
      'Preserve the suspension order, proof of the date it was served and every review order or extension. For Central Government employees, CCS (CCA) Rule 10 applies; for State employees, Rule 4 of the U.P. Government Servant (Discipline and Appeal) Rules, 1999. The remedy and forum differ between the two, so the governing rule must be confirmed before filing.',
    ],
    provisions: ['Ajay Kumar Choudhary v. Union of India (90-day unreviewed suspension rule)', 'Rule 4(1) proviso, U.P. Government Servant (Discipline and Appeal) Rules, 1999', 'Rule 10, CCS (CCA) Rules, 1965'],
    checklist: ['Suspension order and service date', 'Review/extension orders on record', 'Applicable disciplinary rules'],
  },
  {
    id: 'service-stage-2',
    title: 'Reply to the Charge Sheet and Defend the Departmental Inquiry',
    forum: 'Disciplinary authority and inquiry officer, under the governing conduct and discipline rules',
    body: [
      'A charge-sheet reply must answer each allegation with documents, request the relied-upon documents that have not been supplied, and record objections to vague or unsupported charges. Under Rule 7 of the U.P. CCA Rules, 1999 and Rule 14 of the CCS (CCA) Rules, the delinquent employee is entitled to the relied-upon material, to examine oral evidence and to cross-examine witnesses. Failure to supply documents or a fair opportunity is a recognised procedural defect.',
      'If the inquiry report is adverse, the non-furnishing of that report to the employee before the penalty decision is itself a ground of challenge under ECIL v. B. Karunakar. We track the report, the disagreement note and the show-cause on the proposed penalty so each procedural safeguard is preserved in the record for later tribunal or writ review.',
    ],
    provisions: ['Rule 7, U.P. CCA Rules, 1999 / Rule 14, CCS (CCA) Rules, 1965', 'ECIL v. B. Karunakar (supply of inquiry report)', 'Article 311(2), Constitution of India for covered civil servants'],
    checklist: ['Charge sheet and relied-upon documents', 'Inquiry proceedings and objections record', 'Inquiry report and disagreement note'],
  },
  {
    id: 'service-stage-3',
    title: 'Use the Departmental Appeal, Revision and Statutory Waiting Window',
    forum: 'Departmental appellate or revisional authority specified in the service rules',
    body: [
      'A punishment order is ordinarily challenged first through the departmental appeal or revision provided by the applicable rules, within the prescribed period. The appeal should address the findings, the evidence, the procedural objections and the proportionality of the penalty. An informal representation to a different officer is not the prescribed appeal and does not protect limitation.',
      'Tribunal legislation generally expects available departmental remedies to be pursued before an application is filed, subject to the statutory waiting windows. We record the appeal filing, any acknowledgment and the expiry of the statutory period so the tribunal filing that follows is not met with a maintainability objection.',
    ],
    provisions: ['Section 20, Administrative Tribunals Act, 1985 (exhaustion of remedies)', 'Applicable departmental appeal and revision rules', 'Section 21, Administrative Tribunals Act, 1985 (limitation) where applicable'],
    checklist: ['Reasoned punishment order', 'Appeal filed within the prescribed period', 'Acknowledgment and waiting-window record'],
  },
  {
    id: 'service-stage-4',
    title: 'File the Original Application or Claim Petition Before the Tribunal',
    forum: 'CAT, Lucknow Bench, Vipin Khand, Gomti Nagar; or UPPST, Indira Bhawan, Hazratganj, Lucknow',
    body: [
      'Central Government, Railways, Postal, Income Tax and central autonomous body employees file an Original Application under Section 19 of the Administrative Tribunals Act, 1985 before the CAT Lucknow Bench at Gomti Nagar. State Government and UP PSU employees file a claim petition under Section 4 of the U.P. Public Services (Tribunal) Act, 1976 before the UPPST at Indira Bhawan, Hazratganj. The two forums have different coverage, forms and limitation rules.',
      'The pleading must identify the exact relief, the necessary parties and the complete record, with the challenged order and earlier proceedings annexed. Interim protection, where justified, needs a specific reasoned request; filing alone does not stay the order. Coverage, territorial allocation and limitation are verified before filing.',
    ],
    provisions: ['Section 19, Administrative Tribunals Act, 1985 (Original Applications)', 'Section 4, U.P. Public Services (Tribunal) Act, 1976 (claim petitions)', 'L. Chandra Kumar (High Court review of tribunal decisions)'],
    checklist: ['Coverage and limitation confirmation', 'Indexed application with complete record', 'Specific interim-relief request'],
  },
  {
    id: 'service-stage-5',
    title: 'Move a Direct Writ-A Petition Before the High Court, Lucknow Bench',
    forum: 'Allahabad High Court, Lucknow Bench (Chamber D-311), under Article 226',
    body: [
      'Certain service grievances justify a direct Writ-A petition under Article 226 before the Allahabad High Court, Lucknow Bench: punitive mid-term transfers, arbitrary suspension, dying-in-harness rejections under the 1974 Rules, sealed-cover promotion delays (K.V. Jankiraman) and post-retirement gratuity or pension withholding barred by State of Punjab v. Rafiq Masih. Article 351-A CSR also bars disciplinary proceedings initiated more than four years after retirement without the Governor\'s sanction.',
      'Writ review of a tribunal decision is not a fresh merits appeal; the petition must identify illegality, procedural unfairness or a recognised ground of interference. Maintainability, alternative remedies and territorial jurisdiction are assessed before filing from Chamber D-311.',
    ],
    provisions: ['Articles 14, 16, 226 and 311(2), Constitution of India', 'State of Punjab v. Rafiq Masih (bar on recovery from Class III/IV and retired employees)', 'K.V. Jankiraman (sealed-cover promotion procedure)'],
    checklist: ['Grounds of illegality or unfairness', 'Alternative-remedy and limitation assessment', 'Complete order and service record'],
  },
  {
    id: 'service-stage-6',
    title: 'Pursue Industrial and Private Employment Litigation',
    forum: 'CGIT-cum-Labour Court, Sector H, Aliganj, Lucknow; Labour Court Lucknow; Civil/Commercial Courts',
    body: [
      'Industrial workmen, bank employees and private-sector staff follow the industrial-dispute and labour-law track rather than the service tribunals. Sections 2A, 10, 25F and 33C(2) of the Industrial Disputes Act, 1947 and the U.P. Industrial Disputes Act, 1947 cover illegal retrenchment, termination disputes, back wages and statutory dues recovery before the CGIT-cum-Labour Court at Aliganj and the Labour Court, Lucknow.',
      'Wrongful dismissal, notice-pay recovery and wage claims are built on the employment contract, appointment terms, payslips and termination record. Statutory coverage depends on actual duties, not the job title; POSH Act, 2013 matters follow their own Internal Committee procedure, in which legal practitioners advise on preparation but cannot appear as representatives.',
    ],
    provisions: ['Sections 2A, 10, 25F and 33C(2), Industrial Disputes Act, 1947', 'U.P. Industrial Disputes Act, 1947', 'POSH Act, 2013 and Rules, 2013'],
    checklist: ['Employment contract and termination record', 'Payslips and wage calculation', 'Conciliation and reference record'],
  },
  {
    id: 'service-stage-7',
    title: 'Enforce Relief Through Contempt and Compliance Monitoring',
    forum: 'The tribunal or court that granted relief; implementing department and accounts authorities',
    body: [
      'A favourable order still requires implementation. We track the operative directions for reinstatement, seniority refixation, pay and pension arrears disbursal, and consequential benefits against what the department actually does. The operative order is communicated through the proper channel with acknowledgment preserved, and benefit calculations are checked against what was actually awarded.',
      'Where the department does not comply within the stipulated period, contempt petitions and time-bound compliance applications are pursued before the forum that granted relief. Any departmental challenge, review or appeal by the employer is answered separately; a stay sought by the department does not automatically erase the existing direction.',
    ],
    provisions: ['Contempt jurisdiction of the granting tribunal or court', 'Articles 226 and 227, Constitution of India where applicable', 'Applicable implementation, review and appeal provisions'],
    checklist: ['Operative order and compliance period', 'Implementation correspondence and acknowledgments', 'Arrears and benefit calculation sheets'],
  },
]

export const serviceToc: GuideTocItem[] = [
  { id: 'service-team', label: 'Our Team' },
  { id: 'service-forums', label: 'Departmental, Tribunal and Court Forums' },
  { id: 'service-forum-jurisdiction', label: 'Statutory framework and forum jurisdiction' },
  { id: 'service-statutory-framework', label: 'Service and Employment Law Framework' },
  { id: 'service-matters', label: 'Service and Employment Matters We Handle' },
  { id: 'service-deadlines', label: 'Notices, Orders and Live Deadlines' },
  { id: 'service-documents', label: 'Documents for Consultation' },
  {
    id: 'service-procedure',
    label: 'How a Service Matter Proceeds in Lucknow: Stages 1-7',
    children: serviceStages.map((stage, index) => ({ id: stage.id, label: `Stage ${index + 1}: ${stage.title}` })),
  },
  { id: 'service-faqs', label: 'Frequently Asked Questions' },
  { id: 'service-disciplinary-record-review', label: 'Charge Sheet and Adverse Order Review' },
  { id: 'service-consultation', label: 'Discuss Your Employment Matter' },
]

export const serviceForumJurisdiction: StatuteRow[] = [
  {
    law: 'State Government & UP PSU Employees',
    provisions: 'U.P. Public Services (Tribunal) Act, 1976 (Section 4 claim petitions) & U.P. Government Servant (Discipline and Appeal) Rules, 1999 (Rule 4 suspension, Rule 7 major penalty inquiry)',
    relevance: 'Forum: U.P. State Public Services Tribunal (UPPST), Indira Bhawan, Hazratganj, Lucknow, and Allahabad High Court, Lucknow Bench (Writ-A under Article 226).',
  },
  {
    law: 'Central Government, Railways, Postal, Income Tax & Central Autonomous Body Employees',
    provisions: 'Administrative Tribunals Act, 1985 (Section 19 Original Applications, Section 20 exhaustion of remedies, Section 21 limitation) & CCS (CCA) Rules, 1965 (Rule 10 & Rule 14)',
    relevance: 'Forum: Central Administrative Tribunal (CAT), Lucknow Bench, Vipin Khand, Gomti Nagar, Lucknow, with Division Bench writ review before the Allahabad High Court, Lucknow Bench per L. Chandra Kumar.',
  },
  {
    law: 'Constitutional Protections & Retiral Recovery',
    provisions: 'Articles 14, 16, 226 & 311(2), Constitution of India; Article 351-A Civil Service Regulations (CSR) (4-year bar on post-retirement disciplinary proceedings without Governor sanction)',
    relevance: 'State of Punjab v. Rafiq Masih bars recovery of excess payment from Class III/IV and retired employees; protects pension, gratuity and retiral dues from arbitrary withholding.',
  },
  {
    law: 'Compassionate Appointment (Dying-in-Harness)',
    provisions: 'U.P. Recruitment of Dependants of Government Servants Dying in Harness Rules, 1974',
    relevance: "Claims for dependent employment, including married daughters' entitlement under settled Allahabad High Court Full Bench rulings.",
  },
  {
    law: 'Industrial Workmen, Bank Employees & Private Sector Staff',
    provisions: 'Industrial Disputes Act, 1947 (Sections 2A, 10, 25F, 33C(2)), U.P. Industrial Disputes Act, 1947 & POSH Act, 2013',
    relevance: 'Forum: CGIT-cum-Labour Court (Sector H, Aliganj, Lucknow), Labour Court Lucknow, and Civil/Commercial Courts.',
  },
]

export const serviceStatutes: StatuteRow[] = [
  {
    law: 'Constitution of India',
    provisions: 'Articles 14, 16, 226, 309 and 311 where applicable',
    relevance: 'Public-employment equality, statutory service rules, constitutional safeguards for covered civil servants and judicial review. These do not create a general writ right against every private employer.',
  },
  {
    law: 'Administrative Tribunals Act, 1985',
    provisions: 'Sections 14 and 19 to 22; applicable coverage notifications',
    relevance: 'CAT jurisdiction, applications, departmental remedies, limitation and procedure. Check employer and post coverage, exclusions and territorial allocation before approaching the Lucknow Bench.',
  },
  {
    law: 'U.P. Public Services (Tribunal) Act, 1976',
    provisions: 'Public-servant coverage, exclusions and claim provisions; applicable limitation and procedure',
    relevance: 'Covered state public-service claims before the tribunal. Coverage differs from CAT, and not every dispute involving a state-funded or public-sector body belongs here.',
  },
  {
    law: 'Applicable public-service disciplinary rules',
    provisions: 'U.P. Government Servant (Discipline and Appeal) Rules, 1999; CCS (CCA) Rules, 1965 where governing the employee',
    relevance: 'Authority, charge sheets, inquiry safeguards, penalties and departmental appeals. Verify the actual service rules rather than applying central and state procedures interchangeably.',
  },
  {
    law: 'Recruitment, pay and retirement rules for the particular service',
    provisions: 'Applicable cadre rules, recruitment advertisement, pension scheme and binding government orders',
    relevance: 'Eligibility, seniority, promotion consideration, pay fixation and pension entitlement depend on the relevant service and scheme; a general grievance alone does not establish the claimed benefit.',
  },
  {
    law: 'Industrial Relations Code, 2020 and applicable industrial-relations legislation',
    provisions: 'Coverage, appropriate-government, conciliation and adjudication provisions; current commencement, savings and transitional rules',
    relevance: 'Covered employment disputes require checking actual duties, establishment coverage and the currently competent notified tribunal or labour forum. Earlier proceedings and state practice need separate verification.',
  },
  {
    law: 'Applicable wage, gratuity and social-security legislation',
    provisions: 'Relevant benefit, claim and appeal provisions, including commencement and transitional arrangements',
    relevance: 'A wage, gratuity or retirement-benefit claim may have a designated statutory authority distinct from the tribunal hearing a termination dispute. The employee and establishment must satisfy the governing coverage rules.',
  },
  {
    law: 'POSH Act, 2013 and Rules, 2013',
    provisions: 'Sections 11, 13, 16 and 18; Rule 7',
    relevance: 'Inquiry procedure, recommendations, confidentiality and the applicable appeal. Legal advice on preparation is distinct from representation inside an Internal Committee inquiry, which the Rules prohibit for legal practitioners.',
  },
]