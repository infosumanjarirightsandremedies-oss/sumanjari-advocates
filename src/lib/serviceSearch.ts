export type ServiceSearchContent = {
  title: string
  description: string
  attorneyKeyword: string
  question: string
  answer: string
}

export const serviceSearchContent = {
  'civil-lawyer-lucknow': {
    title: 'Civil Lawyer & Advocate in Lucknow | Suits & Injunctions',
    description: 'Experienced civil lawyers, advocates & attorneys in Lucknow for recovery suits, injunctions, partition and appeals. Review jurisdiction, documents and options.',
    attorneyKeyword: 'Civil Attorney Lucknow',
    question: 'How do I choose the best civil lawyer or advocate in Lucknow for my dispute?',
    answer: 'The best fit depends on the claim, court and stage of your dispute, not a search ranking. Ask about civil trial experience, limitation, interim injunctions, documentary evidence and decree execution. Check who will draft and appear, whether settlement is appropriate, and the written scope and fees. A civil advocate should explain the difference between trial, appeal and execution; no lawyer can guarantee recovery or a favourable decree.',
  },
  'criminal-lawyer-lucknow': {
    title: 'Criminal Lawyer & Advocate in Lucknow | FIR Quashing & Trial Defence',
    description: 'Criminal representation in Lucknow for FIR quashing, trial defence and appeals before Sessions Courts and the Allahabad High Court, Lucknow Bench.',
    attorneyKeyword: 'Criminal Attorney Lucknow',
    question: 'How do I choose the best criminal lawyer or bail advocate in Lucknow?',
    answer: 'Choose according to the alleged offence, custody status and court involved. Ask about regular or anticipatory bail, FIR review, trial preparation and maintainable High Court remedies. Share the FIR, notices and prior orders so an advocate can identify urgent deadlines and explain risks. Confirm who handles hearings and the fee scope. Claims of guaranteed bail, FIR quashing or acquittal are not a reliable basis for choosing a criminal lawyer.',
  },
  'bail-lawyer-lucknow': {
    title: 'Bail & Anticipatory Bail Lawyers in Lucknow | Sumanjari & Co.',
    description: 'Legal representation for anticipatory bail (482 BNSS), regular bail, default bail and NBW recall before Lucknow Sessions Court & Allahabad HC Lucknow Bench.',
    attorneyKeyword: 'Bail Attorney Lucknow',
    question: 'How do I choose a bail or anticipatory bail advocate in Lucknow?',
    answer: 'Match the advocate to the offence, custody status, court and applicable statute. Share the FIR, police notice, remand papers and prior rejection orders. Ask about available remedies, surety requirements, who will appear and the written fee scope. No advocate can guarantee bail or a fixed hearing date.',
  },
  'family-advocate': {
    title: 'Family Court Lawyer in Lucknow | Custody, Maintenance & Matrimonial',
    description: 'Consult a Family Court lawyer in Lucknow at Sumanjari & Co. Advocates for custody, maintenance (Sec 144 BNSS), 498A, DV & divorce at Kaiserbagh Family Court.',
    attorneyKeyword: 'Family Court Attorney Lucknow',
    question: 'How do I choose the best family court lawyer or advocate in Lucknow?',
    answer: 'Look for experience with the particular issue: custody, maintenance, domestic violence or connected matrimonial proceedings. Ask how the advocate assesses the appropriate forum, financial disclosures, interim relief and the interests of children. Discuss confidentiality, mediation, personal attendance and coordination with parallel cases. Obtain a clear explanation of professional fees and case updates. The best fit is matter-specific; custody or maintenance outcomes cannot be guaranteed.',
  },
  'divorce-lawyer-lucknow': {
    title: 'Divorce Lawyer & Advocate in Lucknow | Matrimonial Matters',
    description: 'Experienced divorce lawyers, advocates & attorneys in Lucknow for mutual consent and contested divorce, alimony and custody. Review procedure, settlement and documents.',
    attorneyKeyword: 'Divorce Attorney Lucknow',
    question: 'How do I choose the best divorce lawyer or matrimonial advocate in Lucknow?',
    answer: 'Start by identifying whether your matter involves mutual consent, contested grounds, maintenance or child custody. Ask about Family Court practice, eligibility and jurisdiction, settlement terms, financial disclosure and connected proceedings. Clarify who will appear, when personal attendance may be required, and how fees are divided across stages. A suitable divorce advocate explains options and risks without promising a fixed completion date or a particular alimony outcome.',
  },
  'tax-lawyer-lucknow': {
    title: 'Tax & GST Lawyer / Advocate in Lucknow | ITAT & High Court',
    description: 'Tax lawyers & GST advocates in Lucknow: notices, ITAT appeals, GSTAT proceedings and tax writs before the Allahabad High Court, Lucknow Bench.',
    attorneyKeyword: 'Tax Attorney Lucknow',
    question: 'How do I choose a tax lawyer or GST advocate in Lucknow?',
    answer: 'Match the advocate to the tax involved and the stage: notice response, assessment, statutory appeal or judicial review. Ask about the competent authority or tribunal, limitation, deposits and coordination with your accountant. Share the notice, return, assessment order and proof of service. Check the scope of drafting, representation and fees. Tax, GST and stamp-duty disputes follow different procedures; no adviser can guarantee cancellation of a demand.',
  },
  'service-lawyer-lucknow': {
    title: 'Service Lawyer & Advocate in Lucknow | Employment & Pension',
    description: 'Experienced service matter lawyers, advocates & attorneys in Lucknow for suspension, dismissal, pension and employment disputes before CAT, UPPST and the High Court.',
    attorneyKeyword: 'Service Matter Attorney Lucknow',
    question: 'How do I choose the best service matter lawyer or employment advocate in Lucknow?',
    answer: 'Identify your employer, service rules and the challenged order before comparing advocates. Ask about departmental inquiries, suspension, dismissal, recruitment or pension disputes, and whether CAT, the UP Public Services Tribunal, a labour forum or the High Court is competent. Review limitation, departmental remedies and interim relief with the appointment letter and orders. Confirm representation and fees in writing; no advocate can guarantee reinstatement, promotion or pension relief.',
  },
  'property-lawyer-lucknow': {
    title: 'Property Lawyer & Advocate in Lucknow | Land & Title Disputes',
    description: 'Experienced property lawyers, advocates & attorneys in Lucknow for title review, possession, partition, mutation and land disputes. Assess civil or revenue jurisdiction.',
    attorneyKeyword: 'Property Attorney Lucknow',
    question: 'How do I choose the best property lawyer or land dispute advocate in Lucknow?',
    answer: 'Ask about the kind of land, title history and remedy you need, rather than choosing on the label property lawyer alone. A suitable advocate should distinguish civil title and possession claims from revenue entries, agricultural tenure and development-authority issues. Share deeds, revenue records, notices and pending orders. Discuss interim protection, limitation, document verification and fees. A mutation entry or a favourable online review does not establish title or guarantee success.',
  },
  'cyber-crime-lawyer-lucknow': {
    title: 'Cyber Crime Lawyer & Advocate in Lucknow | Fraud & Bank Freeze',
    description: 'Experienced cyber crime lawyers, advocates & attorneys in Lucknow for online fraud, bank account freeze review, IT Act cases and bail. Preserve evidence and records.',
    attorneyKeyword: 'Cyber Crime Attorney Lucknow',
    question: 'How do I choose the best cyber crime lawyer or cyber law advocate in Lucknow?',
    answer: 'Look for an advocate who can distinguish a fraud complaint, bank lien or freeze, IT Act prosecution and bail application. Ask how the investigating authority, transaction trail and original electronic evidence will be identified, including multistate complaints. Bring bank communications, complaint references and prior orders; never share passwords or OTPs. Report ongoing financial fraud promptly rather than waiting for an appointment. No advocate can guarantee fund recovery or account release.',
  },
  'company-corporate-lawyer-lucknow': {
    title: 'Corporate Lawyers in Lucknow — NCLT, M&A & Company Law | Sumanjari & Co.',
    description: 'Corporate and company lawyers in Lucknow for M&A, contracts, startup advisory, ROC compliance, shareholder disputes and NCLT matters. Contact our chambers.',
    attorneyKeyword: 'Corporate Attorney Lucknow',
    question: 'How do I choose the best corporate lawyer or company law advocate in Lucknow?',
    answer: 'Choose for the actual issue: a commercial contract, shareholder dispute, corporate compliance or insolvency proceeding. Ask about the correct commercial court, arbitration clause or NCLT bench, rather than assuming every company dispute belongs before NCLT. Share incorporation records, agreements, notices and financial documents. Clarify responsibility for advisory work, pleadings and hearings, along with fees and confidentiality. Insolvency is not a guaranteed route to recover a disputed debt.',
  },
  'constitutional-writ-lawyer-lucknow': {
    title: 'Writ Lawyer & Advocate in Lucknow | Constitutional Matters',
    description: 'Experienced writ petition lawyers, constitutional advocates & attorneys in Lucknow for public authority decisions and Article 226 or 227 remedies. Assess maintainability.',
    attorneyKeyword: 'Writ Petition Attorney Lucknow',
    question: 'How do I choose the best writ petition lawyer or constitutional advocate in Lucknow?',
    answer: 'Ask how the advocate will assess territorial jurisdiction, alternative statutory remedies, delay and the public-law grounds for intervention. Share the challenged decision, proof of service, earlier representations and any related proceedings. Writ petitions, supervisory remedies and PIL have different requirements; a High Court filing is not a substitute for every appeal. Confirm drafting and appearance arrangements and fees. No lawyer can guarantee admission, an interim stay or a favourable writ order.',
  },
  'consumer-motor-accident-lawyer-lucknow': {
    title: 'Consumer & MACT Lawyer and Advocate in Lucknow | Claims',
    description: 'Experienced consumer court lawyers, MACT advocates & attorneys in Lucknow for consumer complaints, insurance disputes and accident compensation. Review evidence.',
    attorneyKeyword: 'Consumer Court Attorney Lucknow',
    question: 'How do I choose the best consumer court lawyer or motor accident advocate in Lucknow?',
    answer: 'First distinguish a consumer complaint from a motor accident compensation claim, since the forums and evidence differ. Ask about commission or tribunal jurisdiction, limitation, insurance documents and the records needed to establish loss. For accident claims, discuss medical evidence, income proof and liability; for consumer disputes, preserve invoices and correspondence. Confirm the fee scope and hearing arrangements. No advocate can guarantee a compensation amount or payment date.',
  },
  'banking-recovery-lawyer-lucknow': {
    title: 'Banking Recovery Lawyer & Advocate in Lucknow | OTS & Cheque Bounce',
    description: 'Experienced banking recovery lawyers, advocates & attorneys in Lucknow for loan notices, OTS negotiations, cheque bounce and recovery suits for borrowers and lenders.',
    attorneyKeyword: 'Banking Recovery Attorney Lucknow',
    question: 'How do I choose the best banking recovery lawyer or cheque bounce advocate in Lucknow?',
    answer: 'Match the advocate to your position as borrower, guarantor or lender and the remedy involved. Ask about loan notices, settlement negotiations, cheque dishonour timelines and the distinction between civil recovery and DRT proceedings. Provide agreements, account statements, notices and proof of delivery. Clarify whether advice covers negotiation, filing, hearings or enforcement. An OTS depends on the lender and facts; no lawyer can promise waiver, settlement or recovery.',
  },
  'drt-lawyer-lucknow': {
    title: 'DRT Lawyer & Advocate in Lucknow | SARFAESI & Bank Auctions',
    description: 'Experienced DRT lawyers, advocates & attorneys in Lucknow for SARFAESI possession, bank auction disputes and debt recovery proceedings. Review notices and deadlines.',
    attorneyKeyword: 'DRT Attorney Lucknow',
    question: 'How do I choose the best DRT lawyer or SARFAESI advocate in Lucknow?',
    answer: 'Ask about the relevant DRT, the enforcement measure challenged, statutory deadlines and the documents needed for interim relief. Share demand and possession notices, auction publications, loan records and prior orders immediately. Discuss guarantor exposure, DRAT appeal requirements and the limits of High Court remedies. Confirm who drafts and appears and the fee scope. Experience should be assessed against your records; no advocate can guarantee an auction stay or debt reduction.',
  },
  'armed-forces-tribunal-mining-lawyer-lucknow': {
    title: 'AFT & Mining Lawyer & Advocate in Lucknow | Pension & Leases',
    description: 'Experienced AFT and mining lawyers, advocates & attorneys in Lucknow for defence service, pension and mining lease disputes. Review tribunal jurisdiction and notices.',
    attorneyKeyword: 'Armed Forces Tribunal Attorney Lucknow',
    question: 'How do I choose the best AFT lawyer or mining advocate in Lucknow?',
    answer: 'These are distinct practice areas. For an armed forces matter, ask about service records, pension decisions, statutory remedies and AFT jurisdiction. For mining, ask about the lease, permit, royalty demand or enforcement notice and the competent authority or court. Share the relevant orders and proof of receipt before discussing limitation and interim relief. Confirm the advocate handling your subject and fees; neither pension benefits nor lease restoration can be guaranteed.',
  },
  'high-court-lawyer-lucknow': {
    title: 'High Court Lawyer & Advocate in Lucknow | Writs, Bail & Appeals',
    description: 'Experienced High Court lawyers, advocates & attorneys at the Allahabad High Court, Lucknow Bench for writs, bail, quashing and appeals. Review maintainability.',
    attorneyKeyword: 'High Court Attorney Lucknow',
    question: 'How do I choose the best High Court lawyer or advocate in Lucknow?',
    answer: 'Choose for the proceeding you need: a writ, bail application, quashing petition or statutory appeal. Ask about Lucknow Bench jurisdiction, maintainability, limitation and the record needed to present the grounds. Confirm who will settle the pleadings, attend hearings and communicate orders, and agree the scope and fees. Having a chamber near the court helps coordination but does not establish expertise or guarantee admission, relief or success.',
  },
  'nri-lawyer': {
    title: 'NRI Lawyer & Advocate in Lucknow | Property, POA & Divorce',
    description: 'Experienced NRI lawyers, advocates & attorneys in Lucknow for property, inheritance, powers of attorney and family disputes. Review remote representation and documents.',
    attorneyKeyword: 'NRI Attorney Lucknow',
    question: 'How do I choose the best NRI lawyer or advocate in Lucknow for an Indian legal matter?',
    answer: 'Match the advocate to the property, succession, family or litigation issue and its territorial jurisdiction. Ask how instructions, original records, overseas powers of attorney, Indian stamping and court-directed attendance will be handled. Confirm secure document exchange, time-zone communication, the representative in India and written fees. Foreign-law issues may need advice in the relevant country. Remote coordination is useful, but no lawyer can guarantee that personal attendance will never be required.',
  },
  'rera-lawyer-lucknow': {
    title: 'RERA Lawyer & Advocate in Lucknow | Builder Disputes & Refunds',
    description: 'Experienced RERA lawyers, advocates & attorneys in Lucknow for builder disputes, delayed possession, refunds and REAT appeals. Review project records and relief options.',
    attorneyKeyword: 'RERA Attorney Lucknow',
    question: 'How do I choose the best RERA lawyer or real estate advocate in Lucknow?',
    answer: 'Ask about the project registration, agreement, promised possession date and the relief you want: possession, refund, delay interest or compensation. A suitable advocate should explain the Authority, adjudicating officer and appellate routes, along with deposits, deadlines and order enforcement. Share payment records and any settlement or previous order. Confirm drafting, hearings and fees. No lawyer can guarantee a refund amount, recovery date or outcome against a builder.',
  },
  'rera-lawyer-noida': {
    title: 'RERA Lawyer & Advocate in Noida & Greater Noida | UP-RERA',
    description: 'Experienced RERA lawyers, advocates & attorneys for Noida and Greater Noida projects. Review builder disputes, delayed possession, refunds and UP-RERA complaints.',
    attorneyKeyword: 'RERA Attorney Noida',
    question: 'How do I choose the best RERA lawyer or advocate for a Noida project?',
    answer: 'Check the project location, registration and phase before comparing advocates. Ask about the UP-RERA route for the project, the distinction between possession, refund and compensation, and later UP-REAT proceedings in Lucknow where applicable. Preserve the agreement, payment trail and existing orders. Confirm how the NCR team coordinates documents, hearings and enforcement, together with fees. An office address does not determine jurisdiction, and no advocate can guarantee recovery from a developer.',
  },
  'rera-lawyer-ghaziabad': {
    title: 'RERA Lawyer & Advocate in Ghaziabad | UP-RERA',
    description: 'Experienced RERA lawyers, advocates & attorneys for Ghaziabad projects, including Indirapuram and Raj Nagar Extension. Review builder disputes, delayed possession, refunds and UP-RERA complaints.',
    attorneyKeyword: 'RERA Attorney Ghaziabad',
    question: 'How do I choose the best RERA lawyer or advocate for a Ghaziabad project?',
    answer: 'Check the project location, registration and phase before comparing advocates. Ask about the UP-RERA route for the project, the distinction between possession, refund and compensation, and later UP-REAT proceedings in Lucknow where applicable. Preserve the agreement, payment trail and existing orders. Confirm how the NCR team coordinates documents, hearings and enforcement, together with fees. An office address does not determine jurisdiction, and no advocate can guarantee recovery from a developer.',
  },
} satisfies Record<string, ServiceSearchContent>

export function serviceSelectionQuestion(content: ServiceSearchContent) {
  return {
    '@type': 'Question',
    name: content.question,
    acceptedAnswer: { '@type': 'Answer', text: content.answer },
  }
}

type FaqQuestion = ReturnType<typeof serviceSelectionQuestion>

export function withServiceSelectionFaq<T extends { mainEntity: FaqQuestion[] }>(schema: T, content: ServiceSearchContent) {
  return {
    ...schema,
    mainEntity: [...schema.mainEntity, serviceSelectionQuestion(content)],
  }
}
