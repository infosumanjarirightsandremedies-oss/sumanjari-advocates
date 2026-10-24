import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const nriToc: GuideTocItem[] = [
  { id: 'nri-team', label: 'Our Team' },
  { id: 'nri-overview', label: 'Legal representation for Indians living abroad' },
  { id: 'nri-remote-representation', label: 'End-to-end remote representation for NRIs in Lucknow & UP' },
  { id: 'nri-core-services', label: 'Core NRI legal services in Lucknow' },
  { id: 'nri-forums', label: 'Which court or authority can hear your matter?' },
  { id: 'nri-statutory-framework', label: 'Statutory framework' },
  { id: 'nri-matters', label: 'Legal matters we assist with' },
  { id: 'nri-authority-document-review', label: 'Instructing an Indian lawyer from abroad' },
  { id: 'nri-inheritance', label: 'Property, inheritance and foreign orders' },
  { id: 'nri-documents', label: 'Documents and first-consultation checklist' },
  {
    id: 'nri-process',
    label: 'Eight stages of coordinating your Indian legal matter',
    children: [
      { id: 'stage-1', label: 'Jurisdiction, urgency and instructions' },
      { id: 'stage-2', label: 'Records and legal assessment' },
      { id: 'stage-3', label: 'Authority and overseas execution' },
      { id: 'stage-4', label: 'Notice, negotiation and interim protection' },
      { id: 'stage-5', label: 'Filing before the competent forum' },
      { id: 'stage-6', label: 'Service, attendance and evidence' },
      { id: 'stage-7', label: 'Settlement or adjudication' },
      { id: 'stage-8', label: 'Enforcement and follow-through' },
    ],
  },
  { id: 'nri-faqs', label: 'Frequently asked questions' },
  { id: 'nri-related-services', label: 'Related legal services' },
  { id: 'nri-sources', label: 'Legal sources and document guidance' },
  { id: 'nri-consultation', label: 'Discuss your legal matter in India' },
]

export const nriStatutes: StatuteRow[] = [
  {
    law: 'Code of Civil Procedure, 1908',
    provisions: 'Sections 13, 14 and 44A; Order III; applicable service and evidence procedure',
    relevance: 'Recognised agents and advocates, examination of foreign judgments, and execution of qualifying decrees from reciprocating territories. A foreign order is not automatically executable merely because it was issued abroad.',
  },
  {
    law: 'Registration Act, 1908',
    provisions: 'Sections 17, 26, 32 and 33; applicable state amendments',
    relevance: 'Compulsory registration where required, presentation of documents executed overseas, and authentication of powers of attorney used for registration. The document, the authorised act and the receiving registry must be checked together.',
  },
  {
    law: 'Indian Stamp Act, 1899, as applicable in Uttar Pradesh',
    provisions: 'Section 18 and applicable state provisions on duty and adjudication',
    relevance: 'Stamping instruments executed outside India and checking the relevant receipt date, duty and procedure before use. Authentication overseas does not itself settle Indian stamp-duty requirements.',
  },
  {
    law: 'Transfer of Property Act, 1882; Specific Relief Act, 1963',
    provisions: 'Section 54 of the Transfer of Property Act; applicable possession, declaration and injunction provisions',
    relevance: 'Distinguishing a registered conveyance from an agreement or power of attorney, and choosing remedies for disputed title, possession or threatened transfer.',
  },
  {
    law: 'Indian Succession Act, 1925; applicable personal succession law',
    provisions: 'Probate and administration provisions; Part X on succession certificates',
    relevance: 'Identifying the appropriate estate procedure. A succession certificate concerns debts and securities, while immovable-property rights and the effect of a will require a separate assessment.',
  },
  {
    law: 'Family Courts Act, 1984; applicable matrimonial and guardianship law',
    provisions: 'Sections 7 to 9; the personal law and relief relevant to the dispute',
    relevance: 'Jurisdiction, settlement efforts, divorce, maintenance and parenting disputes. Overseas residence or an overseas divorce does not dispense with Indian jurisdiction and recognition requirements.',
  },
  {
    law: 'Foreign Exchange Management Act, 1999 and applicable rules',
    provisions: 'Current immovable-property, payment and repatriation rules; applicable RBI directions',
    relevance: 'Checking citizenship, residency, property category, transaction history and banking requirements before acquisition, transfer or remittance. Tax and foreign-exchange residence tests must not be treated as identical.',
  },
  {
    law: 'Limitation Act, 1963 and applicable special statutes',
    provisions: 'The limitation period and procedural deadlines for the specific remedy',
    relevance: 'Assessing the dates of notice, knowledge, refusal, dispossession or earlier orders. Living abroad should not be assumed to suspend a filing deadline.',
  },
]

export const nriStages: GuideStage[] = [
  {
    id: 'stage-1',
    title: 'Identify the Jurisdiction, Urgency and Scope of Instructions',
    forum: 'Initial consultation with the Lucknow chamber; the competent forum depends on the dispute',
    body: [
      'Begin with a dated account of the issue, your country of residence, the Indian property or transaction location, and the names of the parties. Share any summons, threatened sale, occupation dispute, bank communication or approaching hearing immediately. Overseas residence does not by itself decide which Indian court has jurisdiction, and an urgent application may need to be assessed before the complete record is available.',
      'The initial review identifies whether the matter concerns title, possession, estate administration, a family dispute, a builder claim or criminal allegations. We distinguish the relief you want from the procedure available, check conflicts and existing proceedings, and discuss the proposed engagement, professional fees and likely disbursements. Any work requiring advice on foreign law should be coordinated with counsel qualified in that jurisdiction.',
    ],
    provisions: ['Applicable territorial, pecuniary and subject-matter jurisdiction rules', 'Limitation Act, 1963 and relevant special-law deadlines'],
    checklist: ['Country of residence and reliable contact details', 'A short chronology and the next live deadline', 'Case numbers, party names and existing orders'],
  },
  {
    id: 'stage-2',
    title: 'Review the Records and Select the Appropriate Remedy',
    forum: 'Document review; records may be obtained from courts, Sub-Registrar offices or revenue authorities',
    body: [
      'For a property matter, the review may cover registered conveyances, the ownership chain, revenue entries, possession, encumbrances and any earlier litigation. For inheritance, it includes the death certificate, family relationships, asset schedule and will, if any. For a matrimonial dispute, marriage records, existing proceedings, overseas orders and service documents are important. Scans can support a first assessment, but their completeness and provenance must be checked.',
      'Revenue mutation is not treated as a substitute for proof of title, and a bank requirement for estate documentation is not assumed to resolve a land dispute. We identify missing records, any need for certified copies or translations, and the legal questions that remain open. The strategy should reflect both the substantive claim and what can be supported by admissible evidence, rather than a promise of recovery or a fixed completion date.',
    ],
    provisions: ['Transfer of Property Act, 1882 and Registration Act, 1908 where applicable', 'Indian Succession Act, 1925 and applicable personal law'],
    checklist: ['Ownership, family or contractual records relevant to the claim', 'Notices, correspondence and earlier pleadings', 'Original electronic files preserved without alteration'],
  },
  {
    id: 'stage-3',
    title: 'Prepare the Authority and Complete Overseas Execution Requirements',
    forum: 'The appropriate overseas authentication authority and the receiving Indian court, registry or institution',
    body: [
      'An advocate engagement, vakalatnama and power of attorney serve different purposes. Where a representative must act in India, the authority should specify the property or proceeding, the permitted acts, financial limits and any prohibition on delegation or self-dealing. A document authorising court coordination should not casually confer authority to sell property, receive sale proceeds or enter a binding settlement on your behalf.',
      'Before signing abroad, confirm the execution and authentication route with reference to the country, the intended act and the receiving authority. Notarisation, consular authentication or an apostille may be relevant, but they do not replace any Indian stamping or registration requirement. Preserve the originals and the evidence of first receipt in India where relevant. A power of attorney is authority to act; it is not itself a conveyance of ownership.',
    ],
    provisions: ['Order III CPC', 'Sections 32 and 33, Registration Act, 1908, where applicable', 'Applicable Indian and Uttar Pradesh stamp and registration provisions'],
    checklist: ['A final approved draft before overseas signing', 'Identification of the authorised representative and precise permitted acts', 'Authentication, dispatch and receipt records'],
  },
  {
    id: 'stage-4',
    title: 'Assess Notices, Negotiation and Immediate Protection',
    forum: 'The relevant parties or institutions; the competent court or authority for urgent relief',
    body: [
      'Depending on the claim, the next step may be a legal notice, a response to a demand, a bank representation or an attempt at a documented settlement. Some proceedings have specific pre-filing requirements; others may require urgent court protection rather than prolonged correspondence. Where there is a threatened transfer, interference with possession or destruction of records, we assess the evidence and the legal basis for interim relief without assuming that relief will be granted.',
      'Keep communications factual and preserve the complete record of offers, acknowledgments and delivery. An NRI client should not sign a settlement or authorise a transfer merely to avoid a journey without understanding the legal and financial effect. Where civil and criminal issues overlap, each remedy requires a separate assessment; a property dispute is not automatically criminal, and filing a complaint does not establish ownership.',
    ],
    provisions: ['Applicable notice or pre-filing requirements', 'Specific Relief Act, 1963 and Order XXXIX CPC where relevant'],
    checklist: ['Evidence of the immediate risk and existing possession', 'Any notice deadline or prior settlement proposal', 'Clear instructions on what may be negotiated'],
  },
  {
    id: 'stage-5',
    title: 'Prepare and File Before the Competent Indian Forum',
    forum: 'The jurisdictional civil or family court, revenue authority, RERA or consumer forum, or High Court where maintainable',
    body: [
      'The pleadings should state the material facts, the relief sought, the basis of jurisdiction and the documents relied on. Court fees, valuation, translations, affidavits, verification and the representative authority must be considered before filing. In property matters, land classification can affect whether a civil court or revenue forum is appropriate. In a builder dispute, the available relief and earlier proceedings influence whether RERA, a consumer forum or another remedy should be considered.',
      'For a Lucknow matter, this may mean the jurisdictional civil courts, the Family Court at Qaiserbagh, the relevant revenue or registration office, or the Allahabad High Court, Lucknow Bench for an appropriate writ or appellate proceeding. A matter outside Lucknow must be assessed in its own territorial jurisdiction. Overseas residence creates practical coordination needs; it does not create a separate NRI court or an automatic right to approach the High Court.',
    ],
    provisions: ['The procedural rules of the selected forum', 'Relevant court-fee, valuation, verification and jurisdiction provisions'],
    checklist: ['Approved pleadings and signed authority', 'Required affidavits, originals or certified copies', 'Filing expenses and the scope of any interim application'],
  },
  {
    id: 'stage-6',
    title: 'Address Service, Personal Attendance and Evidence',
    forum: 'The court or authority handling the proceedings; overseas service may involve additional prescribed channels',
    body: [
      'Where a party lives outside India, service must follow the applicable procedure and any direction of the court. A convenient email address or messaging account should not be assumed to satisfy every requirement. Track service attempts, acknowledgments and the next hearing date. If you receive an Indian summons while abroad, obtain advice about the deadline and the response required rather than assuming that distance prevents the matter from proceeding.',
      'We assess whether routine appearances can be handled by the advocate, whether a representative has the necessary authority and knowledge, and whether an application for video conferencing or exemption is appropriate. Permission remains a matter for the forum. A power-of-attorney holder cannot simply replace a witness for facts known only to that witness. Personal evidence, cross-examination, mediation or identification may require your participation and the production of original records.',
    ],
    provisions: ['Applicable service-of-process rules', 'Order III CPC and the applicable evidence procedure', 'Current video-conferencing rules and case-specific court orders'],
    checklist: ['Proof of service and complete overseas addresses', 'A plan for time-zone coordination and evidence', 'Advance notice of any court-directed attendance'],
  },
  {
    id: 'stage-7',
    title: 'Record a Settlement or Pursue a Reasoned Decision',
    forum: 'The competent court or authority; mediation or settlement forum where appropriate',
    body: [
      'A settlement should identify the parties, the assets or obligations, payment dates, possession arrangements, costs and the steps needed to close connected proceedings. In family matters, parenting and maintenance terms require particular care and any necessary court approval. In a property or estate matter, an agreement may still require stamping, registration or separate conveyance documents. A verbal assurance or an informal payment does not necessarily complete those legal steps.',
      'If the matter is contested, the court considers the pleadings, admissible evidence and applicable law before deciding the claim. We review material developments with you, obtain instructions on proposals and explain the effect of interim or final orders. A foreign judgment or settlement needs a separate Indian-law review before it is relied on here. An appeal, challenge or application for a stay must be considered within the relevant procedural framework and deadline.',
    ],
    provisions: ['Applicable settlement, compromise and adjudication provisions', 'Sections 13 and 14 CPC where a foreign judgment is relied on', 'Relevant appeal and stay provisions'],
    checklist: ['Written instructions approving final settlement terms', 'A schedule for payments, documents and possession', 'Certified copies and a diary of post-order deadlines'],
  },
  {
    id: 'stage-8',
    title: 'Complete Enforcement, Record Changes and Financial Follow-Through',
    forum: 'The executing court, registration or revenue office, bank or other competent authority',
    body: [
      'A favourable decree or settlement is not always the end of the matter. Depending on the relief, further steps may include execution, delivery of possession, registration of a conveyance, mutation, collection of estate assets or compliance with instalment terms. Each receiving authority may require certified copies, proof of identity and a valid authorisation. We distinguish these implementation steps from the original proceedings so that a paper order is not mistaken for completed recovery.',
      'Where property or estate money is to be remitted abroad, obtain a separate review of the current foreign-exchange, tax and authorised-dealer bank requirements. An Indian court order does not by itself remove those checks. Keep the final orders, payment trail and registered documents together, and consider revoking or narrowing an authority once its purpose is complete. Cross-border enforcement and execution of foreign decrees require their own assessment rather than an assumption of automatic recognition.',
    ],
    provisions: ['Order XXI CPC; Section 44A where its conditions apply', 'Applicable registration and revenue procedure', 'Current FEMA, tax and authorised-dealer requirements'],
    checklist: ['Certified final orders and proof of compliance', 'Registration, possession or mutation records where required', 'Banking, tax and authority-closure documents'],
  },
]