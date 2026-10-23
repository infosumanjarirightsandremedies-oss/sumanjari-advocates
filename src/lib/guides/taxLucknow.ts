import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const taxLucknowStages: GuideStage[] = [
  {
    id: 'tax-stage-classify',
    title: 'Identify the tax track, period and communication date',
    forum: 'Initial consultation; issuing tax, stamp, municipal or revenue authority identified from the notice',
    body: [
      'Begin with the complete notice or order, not just the demand amount shown in a message. Identify the issuing authority, governing statute, taxpayer or property, period involved and proposed action. A show-cause notice, assessment order, penalty order and recovery certificate are different documents. Record portal uploads, electronic communications and physical service because the relevant legal trigger depends on the particular enactment and proceeding.',
      'Prepare a chronology with returns, earlier replies, hearing notices, payments and previous litigation. Share portal acknowledgments and available originals with counsel and the accountant or technical adviser handling the figures. The applicable law may depend on the tax year and transitional provisions rather than the date of consultation. No single limitation period, appeal form, deposit requirement or stay rule applies across GST, income tax, stamp duty, municipal assessment and mining revenue.',
    ],
    provisions: ['The enactment and rules identified in the notice', 'Applicable commencement, amendment, transitional and service provisions'],
  },
  {
    id: 'tax-stage-gst-notice',
    title: 'Reconcile a GST notice and prepare the adjudication response',
    forum: 'Jurisdictional Central or Uttar Pradesh State GST proper officer',
    body: [
      'For a GST demand, identify the period, alleged discrepancy and statutory provision before preparing a reply. The demand framework may differ for earlier periods and those covered by Section 74A. Reconcile returns, electronic ledgers, invoices, credit notes, payments and available input-tax-credit records. Distinguish a reconciliation difference from a legal dispute about eligibility, classification or valuation, and do not assume a portal summary contains the entire allegation.',
      'A focused reply should answer each allegation, explain supporting reconciliations and attach indexed evidence. Ask for the relied-upon material and an appropriate hearing where the law requires one. Preserve the submission acknowledgment and any hearing record. An audit inquiry, registration proceeding or demand adjudication may use different procedures, so relief must match the actual action. Payment options and their consequences require independent review; submitting a reply alone does not suspend an existing recovery action.',
    ],
    provisions: ['CGST and UPGST Acts: sections 73, 74, 74A and 75, according to the period and applicable text', 'Relevant GST rules and prescribed notices/forms'],
  },
  {
    id: 'tax-stage-gst-appeal',
    title: 'Choose the GST appeal route and verify filing conditions',
    forum: 'Designated GST Appellate Authority; competent GSTAT bench for an eligible further appeal',
    body: [
      'After a GST order, identify whether the remedy is an appeal, rectification request or another statutory procedure. A first appeal under Section 107 is not a direct application to GSTAT. Review the signed order, communication record, disputed tax, interest and penalty separately. Limitation, condonation powers, admitted liability and pre-deposit requirements must be checked against the applicable current text and any relevant transitional notification.',
      'For an eligible further appeal, verify the competent GSTAT bench, operational filing arrangements and any category-specific transitional directions before relying on a bench location. Keep proof of the appeal and deposit and examine the precise statutory effect on recovery. GST protection following compliance with specified appeal conditions should not be described as an unconditional stay from filing. Any disputed recovery, attachment or exceptional writ request needs separate grounds and a maintainability review.',
    ],
    provisions: ['CGST and UPGST Acts: sections 107 and 112, as applicable', 'Relevant GST recovery, appellate and transitional provisions and notifications'],
  },
  {
    id: 'tax-stage-income',
    title: 'Review income-tax assessment and the allocated appellate route',
    forum: 'Jurisdictional assessing authority; allocated Joint Commissioner (Appeals) or Commissioner (Appeals); competent ITAT bench',
    body: [
      'Income-tax work starts with the relevant year, notice provision and assessment history. Review the return, computation, financial statements, tax-credit records, supporting transactions and earlier responses. A reassessment notice, an assessment, a penalty and a recovery demand do not carry identical remedies. Counsel must identify the applicable enactment and savings provisions for the year, including whether an older proceeding continues under the Income-tax Act, 1961.',
      'For an appealable order, check the allocated first appellate authority and procedural scheme rather than assuming the matter starts at ITAT. Preserve electronic service and submission records, obtain the complete assessment file available to you and separate factual reconciliation from legal grounds. Eligible further appeals go to the competent ITAT bench; later court remedies have their own statutory scope. Rectification, appeal and a request for protection from recovery are distinct steps with different requirements.',
    ],
    provisions: ['Income-tax law applicable to the relevant year and proceeding', 'Income-tax Act, 1961 appellate and recovery provisions where retained by savings; applicable Income-tax Act, 2025 provisions for the relevant matter'],
  },
  {
    id: 'tax-stage-stamp',
    title: 'Examine the instrument and any stamp undervaluation reference',
    forum: 'Sub-Registrar and competent Collector or stamp authority; designated Uttar Pradesh appellate or revisional authority',
    body: [
      'Stamp liability begins with the nature and execution date of the instrument, parties and property, not merely its description as a family transfer. Obtain the complete deed, registration endorsements, valuation sheet and applicable district rate schedule. Concessions depend on the current notification, instrument category, qualifying relationship and conditions. A guideline rate is relevant valuation material, but the legal valuation exercise and permissible objections require review of the applicable Uttar Pradesh provisions.',
      'For an undervaluation reference or deficiency demand, examine the notice, inspection material, property characteristics and reasons for the proposed value. Support objections with the land use, location, area and reliable valuation evidence. Registration refusal, stamp deficiency and a title dispute are not the same proceeding. Select the applicable appeal or revision against the actual order and verify its own limitation and payment conditions; GST appeal requirements cannot be carried across to this track.',
    ],
    provisions: ['Indian Stamp Act, 1899 as applicable in Uttar Pradesh, including section 47-A where relevant', 'Applicable Uttar Pradesh valuation rules and concession notifications', 'Registration Act, 1908 for registration issues'],
  },
  {
    id: 'tax-stage-municipal',
    title: 'Challenge a municipal property-tax assessment on its own record',
    forum: 'Lucknow Municipal Corporation or the relevant local body; designated objection and appellate authority',
    body: [
      'A municipal house-tax or property-tax assessment is separate from stamp valuation and income tax. Identify the local body, property number, assessment period, use classification and the basis of annual value or other applicable valuation method. Compare the demand with assessment notices, occupancy records, measurements and earlier payments. A changed owner, duplicate entry or incorrect use category needs evidence tailored to the municipal assessment record.',
      'Check whether an objection, assessment appeal or correction procedure is available under the governing local-body law and rules. Record service dates and any hearing opportunity, and obtain the reasoned assessment order rather than relying on a ledger total. Payment and recovery conditions must be reviewed independently for this remedy. A successful stamp valuation objection does not automatically alter municipal tax, and mutation or payment of property tax does not by itself establish ownership title.',
    ],
    provisions: ['Applicable Uttar Pradesh municipal corporation or local-body legislation', 'Current assessment rules, local notifications and statutory appeal provisions'],
  },
  {
    id: 'tax-stage-revenue',
    title: 'Separate mining or revenue merits from certificate recovery',
    forum: 'Competent mining authority or revenue officer; Collector/Tehsildar for applicable recovery proceedings',
    body: [
      'For a mining demand, obtain the lease or permit, inspection record, alleged quantity, royalty calculation and basis for any penalty. Determine whether the dispute concerns contractual lease terms, royalty assessment, an alleged breach or unauthorised extraction. The competent authority and remedy depend on the governing enactment, concession rules and order. Not every mining or land-revenue dispute can be treated as an ordinary tax appeal.',
      'Where a demand is forwarded for recovery as arrears of land revenue, distinguish a challenge to the underlying liability from objections to the recovery certificate, identity, payment credit or execution step. Obtain the certificate, requisition and attachment or sale notices. A recovering officer may not have power to reopen the original assessment. Consider relief before the source authority or appellate forum and the recovery authority as appropriate, without assuming that approaching either one automatically halts the other process.',
    ],
    provisions: ['Mines and Minerals (Development and Regulation) Act, 1957 and applicable Uttar Pradesh concession rules', 'Uttar Pradesh Revenue Code, 2006 and applicable recovery rules, where invoked'],
  },
  {
    id: 'tax-stage-protection',
    title: 'Address recovery, further review and final compliance separately',
    forum: 'Authority empowered to grant recovery protection; competent statutory appellate forum or Allahabad High Court subject to jurisdiction',
    body: [
      'Build a separate recovery plan alongside the merits challenge. Identify the outstanding admitted and disputed amounts, payments already credited, attachment risk and any operative stay conditions. Some statutes provide protection after prescribed appeal conditions are met; others require a specific order. Counsel checks the actual mechanism instead of promising that an appeal, rectification request, instalment proposal or accountant\'s correspondence will automatically prevent recovery.',
      'After an order, review compliance and the next remedy within that track. A GST further appeal, an income-tax court appeal, a stamp revision and judicial review of revenue action have different legal gateways. Writ jurisdiction is exceptional and subject to alternative remedies and territorial limits. Retain orders, payment receipts, refund or adjustment records and proof of release of any attachment. A favourable decision may still require implementation steps before the demand or portal record is corrected.',
    ],
    provisions: ['Track-specific appeal, recovery, refund and compliance provisions', 'Constitution of India: Articles 226 and 227 where maintainable'],
  },
]

export const taxLucknowStatutes: StatuteRow[] = [
  { law: 'Central and Uttar Pradesh Goods and Services Tax Acts', provisions: 'Sections 73, 74, 74A, 75, 107 and 112, as applicable', relevance: 'Period-specific demand proceedings, first appeals and GSTAT appeals; verify current deposit, recovery and transitional rules separately.' },
  { law: 'Applicable income-tax enactment', provisions: 'Income-tax Act, 1961 where saved; Income-tax Act, 2025 provisions applicable to the relevant year and proceeding', relevance: 'Identify the governing year, commencement and savings provisions before choosing assessment, appeal, rectification or recovery remedies.' },
  { law: 'Indian Stamp Act, 1899 as applicable in Uttar Pradesh', provisions: 'Section 47-A where relevant; applicable state valuation, appeal and revision provisions', relevance: 'Instrument-specific stamp liability and deficiency proceedings; concessions depend on the current notification and its conditions.' },
  { law: 'Registration Act, 1908', provisions: 'Section 17 and the applicable registration/refusal remedy provisions', relevance: 'Compulsory registration and refusal remedies are distinct from stamp valuation and adjudication of title.' },
  { law: 'Applicable Uttar Pradesh municipal legislation', provisions: 'Local-body assessment, objection, appeal and recovery rules', relevance: 'Municipal property tax has its own valuation record and remedy; neither circle rates nor tax payment establish title.' },
  { law: 'Mines and Minerals (Development and Regulation) Act, 1957', provisions: 'Applicable royalty, concession and enforcement provisions with current Uttar Pradesh rules', relevance: 'Distinguish lease conditions, royalty demands, penalties and any separate statutory or contractual review route.' },
  { law: 'Uttar Pradesh Revenue Code, 2006', provisions: 'Applicable revenue recovery provisions and rules, where invoked', relevance: 'A certificate recovery process must be distinguished from the forum competent to decide the underlying tax or mining demand.' },
]

export const taxLucknowToc: GuideTocItem[] = [
  { id: 'tax-revenue-team', label: 'Our Team' },
  { id: 'tax-overview', label: 'Tax and revenue practice' },
  { id: 'tax-statutes', label: 'Separate statutory tracks' },
  { id: 'tax-forums', label: 'Competent forums' },
  { id: 'tax-matters', label: 'Matters we handle' },
  { id: 'tax-procedure', label: 'Procedure and practical decisions', children: taxLucknowStages.map(({ id, title }) => ({ id, label: title })) },
  { id: 'tax-faqs', label: 'Frequently asked questions' },
  { id: 'tax-notice-appeal-review', label: 'Documents for the first consultation' },
]