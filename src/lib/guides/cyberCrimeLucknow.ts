import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const cyberCrimeLucknowStages: GuideStage[] = [
  {
    id: 'cyber-stage-1',
    title: 'Report the incident and identify immediate concerns',
    forum: 'Bank fraud channel, 1930, National Cyber Crime Reporting Portal and competent police unit',
    body: [
      'For suspected financial fraud, promptly notify the bank through its official channel and report through 1930 and the National Cyber Crime Reporting Portal where applicable. Preserve each acknowledgement and transaction reference. Reporting can help authorities examine a transaction trail, but does not itself establish criminal liability or guarantee that funds will be stopped or returned. Never disclose an OTP, password or payment authorisation to someone claiming to arrange a refund.',
      'Separate the immediate problem from the legal remedy: financial loss, account restriction, impersonation, harassment and a police notice may require different responses. Explain the events accurately and identify continuing safety concerns. A portal acknowledgement is not automatically an FIR, a court direction or a bank-release order. Confirm how the complaint is being handled and which police unit has jurisdiction; a Lucknow residence alone does not resolve every interstate investigation issue.',
    ],
    provisions: ['Information Technology Act, 2000: applicable offences', 'BNSS complaint and investigation framework, subject to savings'],
  },
  {
    id: 'cyber-stage-2',
    title: 'Preserve digital evidence and the transaction chronology',
    forum: 'Client consultation and authorised investigating or forensic personnel',
    body: [
      'Prepare a chronology covering contact, representations, payments, discovery and reporting. Retain full bank statements, transaction identifiers, complaint references, messages, email headers where available, account URLs and relevant notices. Keep original devices and files intact alongside readable copies; a cropped screenshot alone may omit context or attribution. Record where each item came from and avoid editing, deleting or circulating material that may be needed for an investigation.',
      'Electronic records can raise authenticity, certification and chain-of-custody questions under the applicable evidence law. Seek advice before exporting sensitive workplace material or handling another person\'s device. Do not access someone else\'s account, impersonate a suspect or attempt a private technical investigation. Where forensic examination is necessary, it should be handled lawfully by authorised personnel. Share only relevant information through appropriate channels and protect unrelated personal, banking and third-party data.',
    ],
    provisions: ['Bharatiya Sakshya Adhiniyam, 2023: electronic-record provisions including section 63', 'Indian Evidence Act, 1872: saved proceedings where applicable'],
    checklist: ['Complete transaction references and bank communications', 'Original messages, files, URLs and devices', 'Complaint acknowledgements and notices with dates of receipt'],
  },
  {
    id: 'cyber-stage-3',
    title: 'Determine the complaint route and applicable criminal law',
    forum: 'Competent police station or cybercrime unit; jurisdictional Magistrate where appropriate',
    body: [
      'A written complaint should set out verifiable events, the relevant transactions, available evidence and the action requested. Reporting on a portal, registration of an FIR and a Magistrate application are distinct steps. We examine the status of earlier complaints, territorial connections and any response from police before recommending further action. A commercial disagreement or failed investment does not become a criminal offence merely because communications occurred online.',
      'The Information Technology Act may operate alongside general criminal law where the alleged conduct supports it. BNS, BNSS and BSA applicability requires attention to offence dates, commencement, procedural stage and savings; older IPC, CrPC or Evidence Act provisions may remain relevant in particular proceedings. Do not mechanically replace section numbers across an existing case. For interstate or multiple-complaint matters, identify the investigating units and disclose connected proceedings to avoid inconsistent representations.',
    ],
    provisions: ['Information Technology Act, 2000: sections 66C and 66D where facts support them', 'BNS/BNSS/BSA commencement and savings; saved predecessor law'],
  },
  {
    id: 'cyber-stage-4',
    title: 'Identify the basis and scope of an account restriction',
    forum: 'Bank nodal officer, investigating officer and competent court as applicable',
    body: [
      'An account restriction may reflect a disputed-amount lien, a wider debit freeze, a police instruction or an order from a competent authority. Ask the bank for the available written basis, complaint reference, issuing authority and amount affected. Gather statements, legitimate transaction records, business invoices and explanations for relevant credits. Being a recipient in a transaction chain does not by itself settle guilt, but a claim of innocence does not automatically remove the restriction.',
      'We assess whether clarification, a documented representation or an application before the competent court is appropriate. The bank may be unable to override an investigating authority or court direction on its own. Multiple instructions from different jurisdictions may need separate attention, even after one issue is resolved. Any request to narrow or lift a restriction must address the evidence and lawful authority; immediate unfreezing, uninterrupted banking access and release of all funds cannot be promised.',
    ],
    provisions: ['BNSS seizure and property-control framework, including section 106 where applicable', 'Corresponding CrPC provisions in saved proceedings; relevant court directions'],
  },
  {
    id: 'cyber-stage-5',
    title: 'Respond to notices and coordinate connected remedies',
    forum: 'Investigating unit, jurisdictional criminal court or platform grievance mechanism',
    body: [
      'Read every police notice or court communication carefully and preserve proof of receipt. Confirm its authenticity through official channels and obtain advice on the requested documents, attendance and lawful response. A person may be a complainant, witness, account holder or accused; the legal position differs. Where arrest or prosecution concerns arise, assess the applicable criminal procedure and any bail remedy on the actual record rather than assuming every cyber complaint has the same consequences.',
      'Platform reporting or content-removal requests may proceed alongside a criminal complaint, but removal does not decide liability or recover money. Preserve the relevant material before seeking lawful takedown and avoid publicly sharing intimate or sensitive content. Civil recovery, contractual remedies and bank grievance processes may also need assessment. Coordinate those routes with the investigation so statements remain accurate and relevant records are available without surrendering unrelated confidential information unnecessarily.',
    ],
    provisions: ['Applicable BNSS or saved CrPC notice, investigation and bail provisions', 'Information Technology Act and applicable intermediary grievance rules'],
  },
  {
    id: 'cyber-stage-6',
    title: 'Pursue appropriate release, restitution and follow-through',
    forum: 'Competent criminal court, investigating authority and implementing bank',
    body: [
      'Tracing or holding funds is different from establishing who is entitled to receive them. A release or restitution request may require transaction proof, identification of the affected money, notice to interested parties and directions from the competent authority or court. Review the investigation status and any existing seizure or property order before applying. An acknowledgement that funds were traced should not be presented as a guaranteed refund or a final adjudication of ownership.',
      'After a direction is issued, supply the required documents through the prescribed channel and check precisely what the bank must implement. Keep records of partial releases, remaining restrictions and connected instructions from other jurisdictions. If an application is refused or compliance remains incomplete, consider the appropriate further representation, challenge or enforcement route. Timing depends on the record, competing claims, investigation and forum practice; neither a lawyer nor a private recovery agent can promise instant repayment.',
    ],
    provisions: ['Applicable BNSS or saved CrPC property-disposal and release provisions', 'Operative court or authority directions and bank compliance requirements'],
  },
]

export const cyberCrimeLucknowToc: GuideTocItem[] = [
  { id: 'cyber-crime-team', label: 'Our Team' },
  { id: 'urgent-cyber-fraud', label: 'Immediate Fraud Reporting' },
  { id: 'cyber-complaint-lucknow', label: 'Complaint and FIR Routes' },
  { id: 'frozen-bank-account', label: 'Bank Freeze and Release Authority' },
  { id: 'unfreeze-bank-account-bnss', label: 'Unfreezing Under BNSS/CrPC' },
  { id: 'cyber-statutes', label: 'Applicable Laws and Transitional Rules' },
  { id: 'cyber-procedure', label: 'Cybercrime Procedure', children: cyberCrimeLucknowStages.map(({ id, title }) => ({ id, label: title })) },
  { id: 'cyber-documents', label: 'First-Consultation Checklist' },
  { id: 'cyber-crime-faq', label: 'Frequently Asked Questions' },
]

export const cyberCrimeLucknowStatutes: StatuteRow[] = [
  { law: 'Information Technology Act, 2000', provisions: 'Sections 66C and 66D; other provisions only where their ingredients are met', relevance: 'Identity theft and cheating by personation using computer resources. An online transaction is not automatically an offence under every cyber provision.' },
  { law: 'Bharatiya Nyaya Sanhita, 2023', provisions: 'Applicable cheating, personation, forgery or intimidation offences', relevance: 'General criminal offences depend on the alleged conduct and date. IPC provisions may govern earlier conduct subject to applicable savings.' },
  { law: 'Bharatiya Nagarik Suraksha Sanhita, 2023', provisions: 'Complaint, investigation, seizure and property-release framework', relevance: 'Distinguishes reporting, FIR registration, investigation and court remedies. Authority and restrictions must be identified; saved CrPC proceedings require separate review.' },
  { law: 'Bharatiya Sakshya Adhiniyam, 2023', provisions: 'Electronic and digital records, including section 63', relevance: 'Authenticity, lawful preservation and applicable certification matter. Evidence Act requirements may remain relevant under transitional provisions.' },
  { law: 'Applicable intermediary and banking grievance frameworks', provisions: 'Current platform grievance rules and relevant bank procedures', relevance: 'Content reporting and bank grievances are distinct from criminal adjudication and court-directed release. No framework guarantees immediate removal, unfreezing or refund.' },
]