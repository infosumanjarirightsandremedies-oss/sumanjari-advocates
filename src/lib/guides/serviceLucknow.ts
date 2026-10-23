import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const serviceStages: GuideStage[] = [
  {
    id: 'service-stage-1',
    title: 'Identify the Employer, Employment Status and Forum',
    forum: 'CAT, Lucknow Bench; U.P. Public Services Tribunal; competent labour forum or civil court, according to coverage',
    body: [
      'Start with the appointment letter, employer\'s legal identity, actual duties and the rules governing the post. Central government service, Uttar Pradesh public service, employment in a statutory corporation and a private employment contract do not share one remedy. A public-sector label alone does not establish tribunal jurisdiction. Record whether the person is a candidate, probationer, permanent employee, contractual appointee or retiree, and identify the precise order or omission being challenged.',
      'CAT jurisdiction depends on the Administrative Tribunals Act and applicable notifications; it does not cover every government, university or public-sector employee. The U.P. Public Services Tribunal has its own coverage and exclusions. Private employment may require a statutory labour remedy or contractual claim, depending on actual duties and governing law. A writ is not available merely because termination seems unfair; public-law obligations, maintainability, territorial jurisdiction and alternative remedies must first be assessed. Armed-forces service has a distinct statutory framework.',
    ],
    provisions: ['Section 14, Administrative Tribunals Act, 1985 and applicable notifications', 'U.P. Public Services (Tribunal) Act, 1976: coverage and exclusions', 'Article 226, Constitution of India where maintainable'],
    checklist: ['Employer identity and appointment status', 'Applicable recruitment or service rules and notifications', 'Actual duties, place of posting and impugned order'],
  },
  {
    id: 'service-stage-2',
    title: 'Build the Service Record and Check Live Deadlines',
    forum: 'Employer or departmental record office; relevant statutory authority for the proposed remedy',
    body: [
      'Prepare a dated chronology of appointment, postings, promotions, notices, representations and the adverse decision. Preserve proof of when the order was communicated, not only the date printed on it. Recruitment disputes require the advertisement, eligibility terms and selection records; pension matters require the retirement order, service particulars and pension calculations. For a private employee, preserve the contract, payslips, termination communication and material showing the duties actually performed.',
      'Check limitation and procedural time limits separately for a reply, departmental appeal, tribunal claim or labour proceeding. Repeated representations do not necessarily revive an old cause of action or stop time running. Where the law permits condonation, reasons for delay need evidence rather than an assumption that relief will follow. Identify missing records promptly and seek them through the appropriate route without waiting to protect an urgent remedy. Confidential employment or inquiry material should be shared securely and only with those entitled to receive it.',
    ],
    provisions: ['Sections 20 and 21, Administrative Tribunals Act, 1985 where applicable', 'Applicable limitation provisions of the U.P. Public Services (Tribunal) Act, 1976', 'Governing service rules and remedy-specific labour or contractual requirements'],
    checklist: ['Communication dates and proof of receipt', 'Chronology, representations and acknowledgments', 'Relevant service book, pay, pension or selection records'],
  },
  {
    id: 'service-stage-3',
    title: 'Respond to Charges and Protect Procedural Fairness',
    forum: 'Disciplinary authority and inquiry officer; Internal Committee for a separate POSH inquiry where applicable',
    body: [
      'Read the charge sheet, statement of allegations and relied-upon material together. Identify the applicable procedure, competent authority and response date before drafting a factual reply. Request relevant documents or inspection with reasons, identify defence witnesses, and preserve evidence that contradicts the allegations. Suspension is distinct from a final punishment; its review, subsistence allowance and related obligations depend on the governing rules. Assistance by a defence representative or lawyer during an inquiry is not an unrestricted right.',
      'At the inquiry, objections should be specific: withheld relied-upon records, denial of a permitted opportunity to question witnesses, apparent bias or findings unsupported by the material. Distinguish the inquiry officer\'s report from the disciplinary authority\'s eventual decision, including any opportunity to address an adverse report or disagreement. POSH proceedings have separate confidentiality and procedure requirements, and legal practitioners cannot represent parties in the Internal Committee inquiry under the Rules. Advice on preparation is different from appearing as a representative in that inquiry.',
    ],
    provisions: ['Articles 309 and 311, Constitution of India for covered public service', 'Applicable U.P. Government Servant (Discipline and Appeal) Rules, 1999 or CCS (CCA) Rules, 1965', 'Sections 11, 13 and 16, POSH Act, 2013; Rule 7 of the POSH Rules'],
    checklist: ['Complete charge sheet and relied-upon records', 'Document requests, defence material and inquiry orders', 'Applicable assistance rules and report-response opportunity'],
  },
  {
    id: 'service-stage-4',
    title: 'Use the Appropriate Departmental or Statutory Remedy',
    forum: 'Departmental appellate or reviewing authority; conciliation or designated statutory authority for covered employment claims',
    body: [
      'Review the final order and the appeal, review or grievance procedure actually provided by the governing rules. A departmental appeal should address the findings, evidence, procedural objections and permissible grounds concerning the penalty. For promotion, seniority, pay or pension disputes, identify the challenged decision and the rule said to be breached. Tribunal legislation may ordinarily require available departmental remedies to be pursued, subject to its terms; an informal request to a different officer is not necessarily the prescribed appeal.',
      'For covered private or industrial employment, assess the statutory dispute or conciliation route, the appropriate government and the designated authority. A managerial title alone may not decide statutory coverage; actual functions matter. Ordinary contractual disputes need a separate assessment, and reinstatement is not the automatic remedy for every termination. Any settlement should specify wages or benefits, tax and payment treatment, release terms and implementation. Do not allow negotiations or an unanswered representation to obscure a live filing requirement.',
    ],
    provisions: ['Section 20, Administrative Tribunals Act, 1985 where applicable', 'Applicable departmental appeal and review rules', 'Governing industrial-relations, wage or benefit legislation, including commencement and transitional provisions'],
    checklist: ['Reasoned order and prescribed appeal channel', 'Evidence supporting each ground of challenge', 'Statutory coverage, appropriate government and settlement terms'],
  },
  {
    id: 'service-stage-5',
    title: 'File Before the Competent Tribunal or Court',
    forum: 'CAT, Lucknow Bench; U.P. Public Services Tribunal, Lucknow; competent notified labour forum; High Court where maintainable',
    body: [
      'Prepare the application or claim around the exact relief, necessary parties and complete record. CAT and the state tribunal apply different jurisdictional and procedural requirements. Confirm the employee and subject are covered, territorial allocation, limitation and treatment of departmental remedies. Selection or seniority disputes may require affected appointees or employees to be joined; the employer alone may not be enough for effective adjudication. Attach the challenged order and earlier pleadings with an accurate chronology.',
      'An interim request should explain a concrete risk, such as an imminent action or consequence that cannot adequately be repaired later, and disclose earlier applications. Filing does not automatically suspend a transfer, termination, recovery or disciplinary order. Where a High Court petition is proposed, explain why that route is maintainable rather than treating Article 226 as a bypass of a competent tribunal or statutory remedy. For labour matters, verify the forum currently notified under the governing legislation and any transitional allocation before filing.',
    ],
    provisions: ['Sections 14, 19 to 22, Administrative Tribunals Act, 1985 as applicable', 'U.P. Public Services (Tribunal) Act, 1976 and applicable procedure', 'Article 226, Constitution of India; applicable statutory labour forum and interim-relief provisions'],
    checklist: ['Jurisdiction, limitation and exhaustion assessment', 'Necessary parties, indexed records and prior proceedings', 'Specific interim request supported by current evidence'],
  },
  {
    id: 'service-stage-6',
    title: 'Address the Record, Evidence and Limits of Review',
    forum: 'Tribunal, labour adjudicator or court seized of the claim; Allahabad High Court, Lucknow Bench where competent',
    body: [
      'Once the employer responds, compare its account with the service rules, inquiry record and contemporary correspondence. A rejoinder should answer material factual disputes rather than merely repeat the original claim. Seek missing records through the forum\'s procedure and comply with evidentiary directions. Labour adjudication may involve evidence and remedies different from public-service judicial review; the powers of the particular forum determine whether and how contested facts can be examined.',
      'In disciplinary judicial review, the High Court ordinarily examines legality, fairness and recognised grounds of interference rather than conducting a fresh departmental trial or substituting its preferred factual conclusion. Promotion eligibility does not necessarily confer a right to promotion, and a procedural defect may lead to reconsideration rather than immediate reinstatement or payment. Identify the prejudice caused and frame consequential relief carefully. Compliance with an interim order continues during the case, and any request to vary protection needs a reasoned application, not an assumption that it continues indefinitely.',
    ],
    provisions: ['Section 22, Administrative Tribunals Act, 1985 where applicable', 'Applicable service, evidence and labour-adjudication procedure', 'Articles 14, 16, 226 and 311, Constitution of India as relevant to the employment and claim'],
    checklist: ['Employer response and missing-record requests', 'Rule-by-rule grounds and identifiable prejudice', 'Current interim order, conditions and next directions'],
  },
  {
    id: 'service-stage-7',
    title: 'Implement Relief and Assess the Next Lawful Challenge',
    forum: 'Employer and deciding tribunal or court; Allahabad High Court or other statutory appellate forum where available',
    body: [
      'Read whether the final order grants payment, reinstatement, reconsideration, a fresh inquiry or only a decision on a representation. These outcomes have different implementation steps. Send the operative order through the proper channel, preserve acknowledgment and check the employer\'s action against its terms. Pay fixation, continuity of service, pension revision and consequential benefits should be calculated from what was actually awarded; back wages or promotion should not be assumed merely because an adverse order was set aside.',
      'If a challenge is needed, identify the available review, statutory appeal or High Court remedy and its requirements. Judicial review of a tribunal decision is not the same as an unrestricted merits appeal. For non-compliance, examine execution, implementation or contempt only within the relevant forum\'s powers and the actual direction; ambiguity may require clarification. Check limitation and seek any necessary stay separately, since filing a challenge does not itself halt the order. Current rules and notifications should be verified for the specific employment category.',
    ],
    provisions: ['Applicable tribunal implementation, review and enforcement provisions', 'Articles 226 and 227, Constitution of India where applicable', 'Governing appeal, limitation and contempt provisions for the particular order'],
    checklist: ['Operative order and implementation acknowledgment', 'Benefit calculations and actual compliance records', 'Available challenge, filing requirements and any separate stay'],
  },
]

export const serviceToc: GuideTocItem[] = [
  { id: 'service-team', label: 'Our Team' },
  { id: 'service-forums', label: 'Departmental, Tribunal and Court Forums' },
  { id: 'service-statutory-framework', label: 'Service and Employment Law Framework' },
  { id: 'service-matters', label: 'Service and Employment Matters We Handle' },
  { id: 'service-deadlines', label: 'Notices, Orders and Live Deadlines' },
  { id: 'service-documents', label: 'Documents for Consultation' },
  {
    id: 'service-procedure',
    label: 'Seven Stages of a Service or Employment Matter',
    children: serviceStages.map((stage, index) => ({ id: stage.id, label: `Stage ${index + 1}: ${stage.title}` })),
  },
  { id: 'service-faqs', label: 'Frequently Asked Questions' },
  { id: 'service-disciplinary-record-review', label: 'Charge Sheet and Adverse Order Review' },
  { id: 'service-consultation', label: 'Discuss Your Employment Matter' },
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