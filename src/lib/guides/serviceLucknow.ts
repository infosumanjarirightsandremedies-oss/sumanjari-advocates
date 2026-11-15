import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const serviceStages: GuideStage[] = [
  {
    id: 'service-stage-1',
    title: 'Challenge a Prolonged Suspension Order',
    forum: 'Disciplinary authority; UPPST, Indira Bhawan, Hazratganj or CAT, Lucknow Bench, Vipin Khand, Gomti Nagar, as applicable',
    body: [
      'Suspension is not a punishment in itself, but a prolonged or procedurally defective suspension may be challenged. We examine the order, review record, charge-sheet status and governing rules, including the principles discussed in Ajay Kumar Choudhary v. Union of India. Central and State service rules are not interchangeable: a 90-day review requirement must not be assumed to apply identically to every employee. Revocation, subsistence allowance and interim relief depend on the applicable rules and facts.',
      'Preserve the suspension order, proof of the date it was served and every review order or extension. For Central Government employees, CCS (CCA) Rule 10 applies; for State employees, Rule 4 of the U.P. Government Servant (Discipline and Appeal) Rules, 1999. The remedy and forum differ between the two, so the governing rule must be confirmed before filing.',
    ],
    provisions: ['Ajay Kumar Choudhary v. Union of India (principles on prolonged suspension)', 'Rule 4, U.P. Government Servant (Discipline and Appeal) Rules, 1999 where applicable', 'Rule 10, CCS (CCA) Rules, 1965 where applicable'],
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
      'Employees and recruitment applicants within CAT coverage may file an Original Application under Section 19 of the Administrative Tribunals Act, 1985 before the territorially competent bench. Coverage of central autonomous bodies and public-sector organisations depends on the applicable notifications, not the employer label alone. Public servants covered by the U.P. Public Services (Tribunal) Act, 1976 may pursue a Section 4 claim before the UPPST at Indira Bhawan, Hazratganj. The two forums have different exclusions, forms and limitation rules.',
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
      'A direct service writ under Article 226 requires a separate maintainability assessment; transfer, suspension, promotion or pension grievances do not automatically permit bypassing the competent tribunal. Review the available statutory remedy, any recognised exception and territorial jurisdiction before approaching the Allahabad High Court, Lucknow Bench. K.V. Jankiraman concerns sealed-cover promotion procedure, while State of Punjab v. Rafiq Masih concerns recovery of excess payments in specified circumstances, not a general bar on withholding pension or gratuity. Post-retirement proceedings require checking the applicable pension rules, sanction requirements and restrictions on the events that may be investigated.',
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
      'Covered industrial employees may follow the industrial-dispute track rather than the public-service tribunals. Check actual duties, establishment coverage, the appropriate government and current commencement, savings and transitional provisions before selecting a remedy under the Industrial Relations Code, 2020 or earlier industrial-disputes legislation. A bank or private-sector job title does not itself establish workman status or CGIT jurisdiction. Conciliation, adjudication and recovery proceedings have different requirements, and some contractual claims belong before a civil court.',
      'Wrongful dismissal, notice-pay recovery and wage claims are built on the employment contract, appointment terms, payslips and termination record. Statutory coverage depends on actual duties, not the job title; POSH Act, 2013 matters follow their own Internal Committee procedure, in which legal practitioners advise on preparation but cannot appear as representatives.',
    ],
    provisions: ['Industrial Relations Code, 2020; applicable commencement, savings and transitional provisions', 'Earlier industrial-disputes legislation where applicable', 'POSH Act, 2013 and Rules, 2013'],
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
  { id: 'lucknow-chambers', label: 'Our Lucknow Chambers' },
  { id: 'choosing-an-advocate', label: 'Choosing a Lawyer or Advocate' },
  { id: 'service-forums', label: 'Departmental, Tribunal and Court Forums' },
  { id: 'service-localities', label: 'Consultations Across Lucknow' },
  { id: 'service-forum-logistics', label: 'Preparing for a Tribunal or Court Visit' },
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
    law: 'Covered State Government & UP PSU Employees',
    provisions: 'U.P. Public Services (Tribunal) Act, 1976 (Section 4 claim petitions) & U.P. Government Servant (Discipline and Appeal) Rules, 1999 (Rule 4 suspension, Rule 7 major penalty inquiry)',
    relevance: 'Forum: U.P. Public Services Tribunal (UPPST), Indira Bhawan, Hazratganj, subject to statutory coverage and exclusions. High Court review is subject to maintainability and territorial jurisdiction.',
  },
  {
    law: 'Covered Central Government Posts & Notified Organisations',
    provisions: 'Administrative Tribunals Act, 1985 (Section 19 Original Applications, Section 20 exhaustion of remedies, Section 21 limitation) & CCS (CCA) Rules, 1965 (Rule 10 & Rule 14)',
    relevance: 'Forum: Central Administrative Tribunal (CAT), Lucknow Bench, Vipin Khand, Gomti Nagar, Lucknow, with Division Bench writ review before the Allahabad High Court, Lucknow Bench per L. Chandra Kumar.',
  },
  {
    law: 'Constitutional Protections & Retiral Recovery',
    provisions: 'Articles 14, 16, 226 & 311(2) where applicable; applicable pension rules, including Article 351-A Civil Service Regulations where governing the employee',
    relevance: 'Review pension withholding separately from recovery of excess payments. Rafiq Masih concerns specified recovery situations; sanction, event-based restrictions, exceptions and the applicable service rules require individual assessment.',
  },
  {
    law: 'Compassionate Appointment (Dying-in-Harness)',
    provisions: 'U.P. Recruitment of Dependants of Government Servants Dying in Harness Rules, 1974',
    relevance: 'Assess dependency, eligibility, financial circumstances, time limits and the current scheme. Compassionate appointment is not an automatic entitlement.',
  },
  {
    law: 'Covered Industrial Employees & Private Employment Claims',
    provisions: 'Industrial Relations Code, 2020 and applicable earlier industrial-disputes legislation, subject to commencement and transitional provisions; POSH Act, 2013',
    relevance: 'Verify actual duties, appropriate-government jurisdiction and the currently competent labour forum. Contractual claims may require a civil remedy; POSH inquiries follow a separate procedure.',
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