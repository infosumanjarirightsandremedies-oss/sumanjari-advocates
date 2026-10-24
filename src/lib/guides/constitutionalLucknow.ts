import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const constitutionalStages: GuideStage[] = [
  {
    id: 'constitutional-stage-1',
    title: 'Identify the Public-Law Issue and the Correct Jurisdiction',
    forum: 'Allahabad High Court, Lucknow Bench or Principal Seat, subject to territorial allocation and the nature of the proceeding',
    body: [
      'Identify the decision, omission, detention or threatened action and the legal right affected. Article 226 permits the High Court to enforce fundamental rights and other legal rights, but the respondent and public-law duty matter. An ordinary private contractual grievance does not become a writ claim simply because other remedies are inconvenient. Certain writs have distinct requirements: habeas corpus concerns unlawful detention, while quo warranto examines entitlement to hold a qualifying public office.',
      'Article 227 is a supervisory jurisdiction over courts and tribunals within the High Court\'s territory, not another name for an Article 226 writ or an unrestricted appeal. Judicial orders of civil courts are ordinarily considered, if supervisory intervention is justified, under Article 227 rather than certiorari under Article 226. Identify any available appeal or revision and the limited grounds of supervision. Tribunal decisions and administrative orders require their own assessment; labelling every challenge a writ petition can select the wrong route.',
    ],
    provisions: ['Articles 226 and 227, Constitution of India', 'Applicable statutory appeal or revision provisions for the challenged order'],
    checklist: ['Exact order or omission and relief sought', 'Respondent identity and source of legal duty', 'Administrative, tribunal or civil-court character of the decision'],
  },
  {
    id: 'constitutional-stage-2',
    title: 'Check Territory, Alternative Remedies and Delay',
    forum: 'Allahabad High Court, Lucknow Bench or Principal Seat; competent statutory appellate authority where required',
    body: [
      'Map the material events giving rise to the claim: where the decision was made or implemented, the relevant authority and the facts necessary to establish the right asserted. Article 226(2) concerns the cause of action arising wholly or partly within the territory; the petitioner\'s residence or counsel\'s chamber is not enough by itself. Allocation between the Lucknow Bench and Principal Seat requires a separate check under the governing framework and applicable decisions.',
      'Identify any effective statutory appeal, revision or tribunal remedy before proposing a writ. Recognised exceptions may include a properly supported breach of natural justice, lack of jurisdiction, enforcement of fundamental rights or challenge to statutory validity; merely using those labels does not require the court to entertain the petition. Explain delay, earlier proceedings and why the chosen route is appropriate. A writ does not revive an expired appeal as of right, and constitutional jurisdiction should not be assumed to suspend statutory limitation.',
    ],
    provisions: ['Article 226(2), Constitution of India', 'Clause 14, United Provinces High Courts (Amalgamation) Order, 1948 and applicable territorial-allocation decisions', 'Governing statutory remedy and principles of alternative remedy, delay and laches'],
    checklist: ['Material cause-of-action facts and territorial connection', 'Available statutory remedy and any evidenced exception', 'Communication dates, delay explanation and earlier proceedings'],
  },
  {
    id: 'constitutional-stage-3',
    title: 'Prepare the Record, Pleadings and Necessary Parties',
    forum: 'Preparation for the competent High Court registry; records obtained from the deciding authority or lower forum',
    body: [
      'Assemble the complete challenged order, notice, reply, hearing record and documents establishing the legal right relied on. Use a dated chronology to separate facts supported by records from disputed assertions. Annexures should be legible, correctly indexed and referred to in the pleadings; obtain required copies and translations under current filing practice. Explain missing documents and how they can be obtained rather than presenting an incomplete extract as the whole decision.',
      'Draft distinct grounds addressing jurisdiction, procedure, statutory interpretation or another recognised review error, and connect each ground to the record. Name the authority capable of granting the requested relief and persons whose rights would be directly affected. Plead all relevant earlier cases, adverse orders and representations with a properly verified supporting affidavit. A PIL requires an additional assessment of genuine public interest, standing, credentials and disclosure obligations; it must not be used to repackage a personal service or property dispute.',
    ],
    provisions: ['Articles 226 and 227, Constitution of India as appropriate', 'Allahabad High Court Rules, 1952 and current filing directions', 'Applicable PIL standing, disclosure and affidavit requirements'],
    checklist: ['Complete order, annexures, index and translations where required', 'Necessary respondents and affected beneficiaries', 'Verified chronology, specific grounds and full prior-case disclosure'],
  },
  {
    id: 'constitutional-stage-4',
    title: 'File Under the Correct Category and Address Registry Requirements',
    forum: 'Allahabad High Court registry at the competent Bench or Principal Seat; court assigned by the current roster',
    body: [
      'Select the filing category according to the jurisdiction invoked, subject matter and relief, rather than treating an Article 226 petition, Article 227 matter and statutory appeal as interchangeable. Confirm current registry requirements for affidavits, annexures, authorisation, court fee and service. Any urgent listing request should identify the event requiring immediate consideration and include supporting material. Administrative acceptance of a filing does not establish maintainability or guarantee that the case will be heard immediately.',
      'Resolve defects promptly and retain acknowledgment of filing and any permitted advance service. Check the listed matter, current roster and subsequent directions instead of relying on a previously used courtroom or listing pattern. If another court or authority has already been approached, disclose the result and the present status. Habeas corpus or other urgent liberty matters may need distinct procedural treatment; urgency should be explained on the facts and does not remove the duty to provide an accurate record.',
    ],
    provisions: ['Allahabad High Court Rules, 1952 and current registry, service and listing directions', 'Articles 226 and 227, Constitution of India as invoked'],
    checklist: ['Correct jurisdiction, case category and current filing requirements', 'Filing acknowledgment, objections and service evidence', 'Evidence supporting urgency and prior-proceeding disclosure'],
  },
  {
    id: 'constitutional-stage-5',
    title: 'Address Admission and Make a Specific Interim Request',
    forum: 'Allahabad High Court bench hearing the matter under the applicable roster',
    body: [
      'At initial consideration, the court may examine territorial jurisdiction, standing, alternative remedies, delay and whether the record supports interference. It may seek instructions or a response, issue notice, decline intervention or make another appropriate direction. Prepare to explain why the statutory route is inadequate in the particular case if relying on an exception. Admission or issuance of notice is not a finding that the challenged action is unlawful.',
      'An interim application must identify the precise protection requested, its legal basis and the harm that may occur before final decision. Prima facie merits, balance of convenience, irreparable injury and public interest may be relevant, depending on the case. Filing a writ, seeking urgent listing or receiving notice does not automatically stay an order, recovery or proceeding. Read the operative terms, duration and conditions of any protection and complete service as directed. Exceptional relief without hearing the other side carries particular disclosure and procedural responsibilities.',
    ],
    provisions: ['Article 226, including clause (3) where its conditions apply', 'Applicable principles governing interim relief and the relevant statutory framework'],
    checklist: ['Maintainability explanation supported by documents', 'Narrow interim prayer and evidence of immediate harm', 'Actual order, service directions and compliance requirements'],
  },
  {
    id: 'constitutional-stage-6',
    title: 'Complete Affidavits and Present the Review Grounds',
    forum: 'Allahabad High Court bench seized of the petition or supervisory proceeding',
    body: [
      'Compare the respondent\'s counter affidavit and produced records with the pleaded chronology. A rejoinder should address material denials, explain documentary contradictions and avoid introducing a substantially new case without appropriate permission. Seek production of the relevant decision-making record where justified. Preserve the integrity of electronic material and distinguish evidence from legal submissions. The court determines the procedure; a writ proceeding should not be assumed to offer the full factual trial available in an ordinary civil suit.',
      'At final hearing, connect each requested remedy to an established review ground and explain what lawful action can follow. Judicial review generally examines legality rather than substituting the court\'s preferred administrative decision. Article 227 supervision is similarly limited and does not invite routine reappraisal of every factual finding. Where disputed facts, statutory expertise or another effective remedy are decisive, the court may decline the petition or direct another route. A remand or direction to consider a representation is different from an order granting the underlying benefit.',
    ],
    provisions: ['Articles 226 and 227, Constitution of India and their distinct standards', 'Applicable High Court affidavit procedure and the statute governing the challenged decision'],
    checklist: ['Counter affidavit, rejoinder and complete relevant record', 'Ground-to-document references and precise final prayers', 'Current interim terms and compliance while the case proceeds'],
  },
  {
    id: 'constitutional-stage-7',
    title: 'Read the Final Directions and Plan Compliance or Challenge',
    forum: 'Deciding authority and High Court as appropriate; appellate forum or Supreme Court where a challenge is available',
    body: [
      'Obtain the final order and identify whether it quashes an action, orders reconsideration, grants defined relief or disposes of the petition with another direction. Send it to the responsible authority through the required channel and retain proof of receipt. Where a fresh decision is directed, the authority may still decide the merits lawfully within the order\'s limits. Monitor compliance against the actual operative terms rather than assuming that a favourable observation grants every benefit originally requested.',
      'Review, intra-court appeal and special leave are different remedies with separate grounds and filing requirements. An intra-court appeal is not available against every decision, and the jurisdiction actually exercised, including Article 227, affects availability. Check the applicable rules, exclusions and limitation promptly. A challenge does not itself stay compliance. If directions are not obeyed, assess clarification, implementation or contempt according to the order and governing law; contempt is not a route to expand the original relief or retry an issue already decided.',
    ],
    provisions: ['Applicable High Court review and special-appeal rules, including exclusions', 'Article 136, Constitution of India where special leave is sought', 'Applicable compliance and contempt provisions'],
    checklist: ['Operative order and proof it reached the responsible authority', 'Compliance records and any required fresh decision', 'Available challenge, limitation and separate stay requirements'],
  },
]

export const constitutionalToc: GuideTocItem[] = [
  { id: 'constitutional-team', label: 'Our Team' },
  { id: 'constitutional-forums', label: 'High Court and Statutory Forums' },
  { id: 'constitutional-statutory-framework', label: 'Constitutional and Procedural Framework' },
  { id: 'writ-categories', label: 'Writ Categories at the Lucknow Bench' },
  { id: 'alternative-remedy-exceptions', label: 'Exceptions to Alternative Remedy' },
  { id: 'constitutional-matters', label: 'Constitutional and Writ Matters We Handle' },
  {
    id: 'constitutional-procedure',
    label: 'Seven Stages of a Writ or Supervisory Matter',
    children: constitutionalStages.map((stage, index) => ({ id: stage.id, label: `Stage ${index + 1}: ${stage.title}` })),
  },
  { id: 'constitutional-faqs', label: 'Frequently Asked Questions' },
  { id: 'writ-maintainability-review', label: 'Maintainability of an Administrative Challenge' },
  { id: 'constitutional-documents', label: 'Records for a Writ Consultation' },
  { id: 'constitutional-consultation', label: 'Discuss Your Constitutional Matter' },
]

export const constitutionalStatutes: StatuteRow[] = [
  {
    law: 'Constitution of India: Article 226',
    provisions: 'Clauses (1), (2) and (3), as relevant to the relief and procedural position',
    relevance: 'Writ jurisdiction for fundamental and other legal rights, territorial cause of action, and specific safeguards concerning certain interim orders. Maintainability and relief remain subject to the governing principles.',
  },
  {
    law: 'Constitution of India: Article 227',
    provisions: 'Superintendence over courts and tribunals within the territory, subject to constitutional limits',
    relevance: 'A supervisory jurisdiction distinct from Article 226 and an ordinary appeal. Civil-court judicial orders are ordinarily considered under Article 227, not through Article 226 certiorari.',
  },
  {
    law: 'Constitution of India: substantive rights',
    provisions: 'Articles 14, 16, 19 and 21 where the pleaded facts and claimant support the right invoked',
    relevance: 'Equality, covered public-employment rights, protected freedoms and personal liberty. A pleaded violation needs a factual and legal foundation; citing an Article alone does not establish relief.',
  },
  {
    law: 'United Provinces High Courts (Amalgamation) Order, 1948',
    provisions: 'Clause 14 and applicable territorial-allocation decisions',
    relevance: 'Allocation between the Lucknow Bench and Principal Seat must be assessed with the material cause-of-action facts. A Lucknow residence or lawyer address alone is not sufficient.',
  },
  {
    law: 'Allahabad High Court Rules, 1952 and current directions',
    provisions: 'Applicable writ, supervisory, affidavit, registry, listing and special-appeal requirements',
    relevance: 'Correct case category, verified pleadings, complete annexures, service and available further procedure. Check current requirements and appeal exclusions for the specific jurisdiction exercised.',
  },
  {
    law: 'The statute governing the challenged action',
    provisions: 'Relevant appeal, revision, tribunal, notice and limitation provisions',
    relevance: 'Alternative remedies and recognised exceptions must be assessed before a writ. Constitutional jurisdiction is not an assured replacement for an effective statutory appeal.',
  },
  {
    law: 'Constitution of India: Article 136; applicable contempt law',
    provisions: 'Special leave; lawful enforcement of clear directions within the deciding forum\'s powers',
    relevance: 'Further challenge and non-compliance require distinct grounds. Special leave is discretionary, and contempt cannot enlarge the substantive relief granted in the original order.',
  },
]