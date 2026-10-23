import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const propertyStages: GuideStage[] = [
  {
    id: 'property-stage-1',
    title: 'Classify the Land and Identify the Competent Forum',
    forum: 'Competent civil court at Lucknow or the designated revenue court for the holding',
    body: [
      'Begin with the exact property description: district, tehsil, village or municipal address, plot or gata number, area and boundaries. Establish whether the dispute concerns an agricultural holding, an urban house, leasehold premises or development-authority land. Land use, tenure and any legally effective declaration changing its status matter; a postal address within Lucknow does not by itself determine civil or revenue jurisdiction. Record who currently occupies the property and the relief actually needed.',
      'A civil court ordinarily handles civil rights unless jurisdiction is excluded, while the U.P. Revenue Code assigns specified agricultural-tenure disputes to revenue authorities. Mutation before a Tehsildar is different from partition or a declaration of tenure rights before the competent revenue court. Check the Code, its schedules, the relief pleaded and any saved older proceedings before filing. For acquisition or development-authority orders, examine the special statutory remedy separately rather than assuming an ordinary title suit is sufficient.',
    ],
    provisions: ['Section 9, Code of Civil Procedure, 1908', 'U.P. Revenue Code, 2006: Section 206 and applicable schedules; Sections 80, 116 and 144 where relevant'],
    checklist: ['Plot identifiers, map, area and boundaries', 'Current tenure and land-use records', 'Earlier suits, revenue proceedings and authority orders'],
  },
  {
    id: 'property-stage-2',
    title: 'Examine the Ownership Chain, Authority and Revenue Entries',
    forum: 'Sub-Registrar, relevant tehsil record office and development authority; document review with counsel',
    body: [
      'Trace the ownership chain through the available registered conveyances, inheritance documents, grants or leases rather than relying only on the latest deed. Compare names, shares, plot numbers and boundaries across documents. Check mortgages, litigation, acquisition notices, restrictions on transfer and the seller\'s authority, including the terms of any lease or allotment. An online record or registration search is a useful starting point, but should be reconciled with certified records and physical possession.',
      'Mutation updates revenue records for fiscal and administrative purposes; it does not create or conclusively settle ownership. A disputed mutation entry therefore needs to be distinguished from a substantive title claim. Likewise, an agreement to sell or power of attorney is not itself a conveyance of ownership. A properly authorised attorney may execute a legally required transfer instrument for the owner, subject to authority, stamping and registration requirements. Identify missing links and unresolved risks before advising payment, settlement or litigation.',
    ],
    provisions: ['Section 54, Transfer of Property Act, 1882', 'Sections 17, 32, 33 and 49, Registration Act, 1908', 'Sections 34 and 35, U.P. Revenue Code, 2006'],
    checklist: ['Ownership chain and certified deeds where required', 'Authority documents, succession records and co-owner details', 'Revenue entries, lease terms and encumbrance material'],
  },
  {
    id: 'property-stage-3',
    title: 'Choose Between Possession, Partition, Performance and Injunction',
    forum: 'Civil Judge of competent jurisdiction, Lucknow; appropriate revenue court for covered tenure claims',
    body: [
      'The remedy must match both the right asserted and the present interference. A person out of possession may need recovery of possession rather than an injunction alone. Where ownership is genuinely disputed, consider whether a declaration and consequential relief are necessary. A co-owner seeking separation of shares needs an appropriate partition proceeding, with all necessary parties identified. Agricultural holdings may require the revenue partition route instead of a civil partition suit.',
      'For a failed sale transaction, specific performance requires scrutiny of the agreement, enforceability, the claimant\'s obligations and evidence of readiness and willingness where required. Cancellation of a disputed instrument is different from declaring that an instrument is not binding on a claimant. Injunctions protect legally supportable rights; they do not cure a defective title. Review limitation from the relevant refusal, knowledge, dispossession or other statutory trigger, including special requirements for summary possession remedies, without assuming every property claim has the same filing period.',
    ],
    provisions: ['Specific Relief Act, 1963: Sections 5, 6, 10, 16, 31, 34 and 38', 'Section 116, U.P. Revenue Code, 2006 where applicable', 'Limitation Act, 1963: applicable Articles including 54, 58, 59, 64 and 65'],
    checklist: ['Present possession and the precise relief sought', 'Agreement, payments and evidence of performance', 'Dates of refusal, knowledge and dispossession'],
  },
  {
    id: 'property-stage-4',
    title: 'Preserve Evidence and Assess Notice or Interim Protection',
    forum: 'Competent civil or revenue court; relevant authority for any statutory notice',
    body: [
      'Preserve photographs, correspondence, payment records, boundary material and evidence of threatened construction or transfer without altering originals. Prepare a dated account of possession and interference. A legal notice may clarify a demand or support negotiations, but statutory notice requirements and urgency need separate review, particularly when government or public authorities are involved. Do not assume sending a notice stops limitation or authorises entry onto disputed land.',
      'Where immediate harm is supported by evidence, consider a temporary injunction before the competent court. The application should explain the prima facie case, balance of convenience and irreparable injury, identify the exact property, and disclose earlier orders. Urgent or without-notice relief remains discretionary and carries procedural duties, including service as directed. Filing a suit does not itself restrain construction, dispossession or alienation; obtain and read the actual order. Avoid self-help eviction or breaching an existing status quo direction.',
    ],
    provisions: ['Order XXXIX Rules 1 to 3, Code of Civil Procedure, 1908', 'Section 80 CPC where applicable', 'Applicable interim powers and notice requirements under the governing revenue or special law'],
    checklist: ['Dated evidence of urgency and possession', 'Existing injunctions and related litigation disclosed', 'Notice requirements and proposed protective relief'],
  },
  {
    id: 'property-stage-5',
    title: 'Prepare and File the Suit or Revenue Application',
    forum: 'Competent Lucknow civil court or designated revenue authority with territorial and subject-matter jurisdiction',
    body: [
      'Draft the plaint or application around a clear chronology, source of rights, cause of action and legally available relief. Include an accurate property schedule, valuation and the applicable court fee. Identify co-sharers, purchasers, affected successors and other necessary parties; omitting a person whose rights are directly affected can obstruct effective relief. Territorial rules for immovable property and pecuniary limits must be checked alongside subject-matter jurisdiction before selecting a court.',
      'Attach legible deeds, records and earlier orders, distinguishing originals from copies and identifying documents that need to be summoned. For a revenue application, use the procedure prescribed for that specific proceeding rather than transplanting a civil plaint unchanged. Address registry objections, arrange service, and track the response and hearing directions. A development-authority appeal, acquisition reference or other special proceeding has its own requirements and cannot be assumed to follow the same filing route or evidentiary scope.',
    ],
    provisions: ['Section 16 and Orders I, VI and VII, Code of Civil Procedure, 1908', 'Applicable court-fee and valuation law in Uttar Pradesh', 'U.P. Revenue Code, 2006 and Rules, 2016 for the relevant proceeding'],
    checklist: ['Property schedule, map and valuation', 'Correct parties and service addresses', 'Indexed documents, court fee and filing objections'],
  },
  {
    id: 'property-stage-6',
    title: 'Prove the Claim and Explore a Workable Settlement',
    forum: 'Trial court or revenue court hearing the dispute; mediation where referred',
    body: [
      'After pleadings, the court identifies the questions requiring decision and receives evidence under the applicable procedure. Ownership, possession, shares, execution of documents and the boundaries of the property may require different proof. Arrange originals or certified records, relevant witnesses and properly preserved electronic material. A commissioner or official demarcation may help establish physical features where permitted, but a survey or local inspection does not by itself decide ownership.',
      'Settlement can be considered without abandoning the protection of an existing order. For partition or a family arrangement, address every affected share, access route, common facility, encumbrance and possession arrangement. Check whether the proposed instrument or compromise requires stamping or registration; the answer depends on its substance and legal effect. If the matter proceeds to judgment, a partition claim may require further steps after shares are declared before actual division and delivery can occur. Keep interim conditions and evidence directions under review throughout.',
    ],
    provisions: ['Orders XIV, XVIII, XX Rule 18, XXIII Rule 3 and XXVI CPC where applicable', 'Registration Act, 1908 and state stamp law for the proposed instrument', 'Applicable evidence law, including transitional rules for pending proceedings'],
    checklist: ['Original documents and a witness plan', 'Survey or commission issues requiring clarification', 'Settlement shares, access, registration and implementation terms'],
  },
  {
    id: 'property-stage-7',
    title: 'Implement the Decision and Review Appeal or Execution',
    forum: 'Executing civil court; competent revenue appellate or revisional authority; Allahabad High Court where maintainable',
    body: [
      'Read the operative decree or order to identify exactly what was granted: possession, cancellation, performance, defined shares, an injunction or reconsideration by an authority. Obtain the necessary copies and consider execution, final partition proceedings, registration or correction of consequential records as the order requires. A favourable declaration is not the same as physical delivery of possession, and mutation following an order remains distinct from the judicial determination of rights.',
      'If the decision is adverse, identify the appeal, revision or other challenge actually provided for that order and forum. Revenue appeals depend on the Code and its schedules; not every order goes directly to the Board of Revenue or High Court. Check limitation and any basis for seeking a stay promptly. An appeal does not automatically suspend enforcement. Writ or supervisory jurisdiction at the Lucknow Bench requires its own maintainability and territorial assessment, and ordinarily is not a substitute for an effective statutory remedy.',
    ],
    provisions: ['Order XXI and Order XLI Rule 5, Code of Civil Procedure, 1908', 'Applicable appeal and revision provisions of the U.P. Revenue Code, 2006', 'Articles 226 and 227, Constitution of India where maintainable'],
    checklist: ['Operative decree, order and required certified copies', 'Execution or final-partition steps and compliance evidence', 'Available challenge, limitation and any separate stay application'],
  },
]

export const propertyToc: GuideTocItem[] = [
  { id: 'property-team', label: 'Our Team' },
  { id: 'property-forums', label: 'Civil and Revenue Forums' },
  { id: 'property-statutory-framework', label: 'Property and Land Law Framework' },
  { id: 'property-matters', label: 'Property Matters We Handle' },
  { id: 'property-purchase-checks', label: 'Checks Before a Property Purchase' },
  { id: 'property-documents', label: 'Documents for Consultation' },
  {
    id: 'property-procedure',
    label: 'Seven Stages of a Property Matter',
    children: propertyStages.map((stage, index) => ({ id: stage.id, label: `Stage ${index + 1}: ${stage.title}` })),
  },
  { id: 'property-faqs', label: 'Frequently Asked Questions' },
  { id: 'related-property-services', label: 'Related Property Services' },
  { id: 'property-title-forum-review', label: 'Title, Mutation and LDA Disputes' },
  { id: 'property-consultation', label: 'Discuss Your Property Matter' },
]

export const propertyStatutes: StatuteRow[] = [
  {
    law: 'Transfer of Property Act, 1882',
    provisions: 'Section 54; applicable provisions governing the particular transfer or mortgage',
    relevance: 'Distinguishes a sale from an agreement to sell. A power of attorney authorises acts within its terms; it is not itself a conveyance of ownership.',
  },
  {
    law: 'Registration Act, 1908',
    provisions: 'Sections 17, 32, 33 and 49; applicable state amendments',
    relevance: 'Compulsory registration, presentation through an authorised person and the consequences of non-registration, subject to statutory exceptions.',
  },
  {
    law: 'Specific Relief Act, 1963',
    provisions: 'Sections 5, 6, 10, 16, 31, 34 and 36 to 39',
    relevance: 'Recovery of possession, specific performance, cancellation, declaration and injunctions. Each remedy has separate requirements and may need consequential relief.',
  },
  {
    law: 'Code of Civil Procedure, 1908',
    provisions: 'Sections 9 and 16; Orders VII, XX, XXI, XXXIX and XLI as relevant',
    relevance: 'Civil jurisdiction, property pleadings, partition decrees, execution, temporary injunctions and appeals. Filing alone does not produce a stay.',
  },
  {
    law: 'U.P. Revenue Code, 2006 and Rules, 2016',
    provisions: 'Sections 24, 34, 35, 80, 116, 144 and 206; applicable schedules and amendments',
    relevance: 'Demarcation, mutation, land-use declarations and covered tenure or partition disputes before the designated authority. Mutation does not conclusively determine title; classification and jurisdiction must be checked.',
  },
  {
    law: 'Limitation Act, 1963 and special limitation provisions',
    provisions: 'Applicable Articles including 54, 58, 59, 64 and 65; remedy-specific exclusions and special-law requirements',
    relevance: 'The relevant trigger differs for performance, declaration, cancellation and possession. A notice or ongoing negotiation should not be assumed to extend time.',
  },
  {
    law: 'Indian Stamp Act, 1899 as applicable in Uttar Pradesh',
    provisions: 'Applicable state duty, valuation and adjudication provisions',
    relevance: 'Stamping deeds, settlements and authority documents according to their substance. Registration or notarisation alone does not resolve every duty issue.',
  },
  {
    law: 'U.P. Urban Planning and Development Act, 1973; applicable acquisition law',
    provisions: 'Order-specific notice, appeal, reference and review provisions; applicable allotment or lease terms',
    relevance: 'LDA and acquisition disputes require scrutiny of the particular order and statutory route, distinct from an ordinary ownership dispute. Check the governing enactment and any saved earlier acquisition proceedings.',
  },
]