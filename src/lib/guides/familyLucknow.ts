import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const familyLucknowStages: GuideStage[] = [
  {
    id: 'family-stage-1',
    title: 'Identify the personal law, forum and immediate priorities',
    forum: 'Competent Family Court, Magistrate or other court with statutory jurisdiction',
    body: [
      'Begin with the marriage history, applicable personal law, place of marriage, residence and any existing proceedings. Divorce, judicial separation, custody, maintenance and protection are distinct remedies, even when they arise from the same relationship. We identify which relief is needed now and which court can grant it. Living in Lucknow does not automatically establish jurisdiction for every claim, particularly where spouses or children live elsewhere or overseas.',
      'Immediate safety, access to essential funds and a child\'s day-to-day care may require attention before negotiations about final settlement. Disclose existing orders, notices, foreign proceedings and proposed travel. The appropriate route depends on the marriage law, the relief sought and the local court\'s jurisdiction. Do not assume that a divorce petition automatically supplies protection, child arrangements or financial support; separate applications and different forums may be necessary.',
    ],
    provisions: ['Family Courts Act, 1984: section 7', 'Applicable marriage, maintenance, guardianship and protection laws'],
  },
  {
    id: 'family-stage-2',
    title: 'Prepare the chronology, disclosures and child-focused record',
    forum: 'Confidential consultation and lawful document collection',
    body: [
      'Bring marriage documents, identity and address records, a factual chronology and all pleadings or orders from connected cases. Financial issues require reliable income, assets, liabilities, bank records and essential expenditure details. Identify what is available and what may need lawful disclosure from another party. Avoid exaggerated allegations or selective extracts: inconsistencies across maintenance, matrimonial and protection proceedings can complicate both interim relief and the final decision.',
      'For a child-related dispute, gather schooling, health, caregiving, expenses and existing contact arrangements. Explain routines and specific safety concerns without coaching a child or treating access as a bargaining tool. Preserve relevant communications and original electronic records without accessing another person\'s private accounts. The consultation should distinguish personal disagreements from facts that support a legal remedy. Any recording, disclosure or sensitive evidence requires advice about lawful collection, relevance and privacy.',
    ],
    provisions: ['Applicable disclosure directions and financial-affidavit requirements', 'Relevant guardianship, custody and evidence provisions'],
    checklist: ['Marriage and residence records; all existing proceedings and orders', 'Income, assets, liabilities and necessary expenses', 'Child health, schooling, caregiving and contact records'],
  },
  {
    id: 'family-stage-3',
    title: 'Choose distinct pleadings and seek necessary interim relief',
    forum: 'Family Court or competent Magistrate according to the remedy',
    body: [
      'A matrimonial petition must use grounds and relief available under the applicable marriage law. Maintenance may arise under personal law, the relevant summary statutory route or protection legislation, depending on eligibility and circumstances. Domestic-violence proceedings can involve protection, residence, monetary and other statutory relief before the competent forum. Identify the required orders clearly rather than placing every dispute inside one divorce claim or assuming all tracks have identical eligibility.',
      'Urgent applications may concern interim support, litigation expenses, protection, residence, custody or contact. They require supporting facts and disclosure of earlier orders and payments. Interim relief is not automatic, and support is not fixed by one universal percentage. Explain immediate needs, actual resources and relevant obligations candidly. Where connected cases overlap, coordinate the pleadings and seek appropriate adjustment or clarification so orders are not presented as independent entitlements to duplicate recovery.',
    ],
    provisions: ['Applicable marriage-law interim-relief provisions', 'BNSS section 144 or saved CrPC section 125 as applicable', 'Protection of Women from Domestic Violence Act, 2005'],
  },
  {
    id: 'family-stage-4',
    title: 'Assess mediation and record workable settlement terms',
    forum: 'Court-referred mediation or another appropriate consensual process',
    body: [
      'Mediation can help parties address support, parenting, property-related arrangements and the intended resolution of connected proceedings. Participation and any agreement must be assessed in light of safety, informed consent and the ability to negotiate freely. Coercion or urgent protection concerns may require court attention first. Reconciliation is not the only possible outcome, and settlement discussions should not be described as a guarantee that a contested dispute will end.',
      'A proposed settlement should specify payment obligations, practical child arrangements, document exchange and the legally appropriate steps for each pending case. Private terms do not themselves dissolve a marriage or automatically terminate criminal proceedings. A consent divorce remains subject to the applicable statutory requirements and court satisfaction. Child-related terms must remain consistent with welfare, not merely parental agreement. Confirm which obligations need a decree, an order, separate applications or further judicial approval.',
    ],
    provisions: ['Family Courts Act, 1984: section 9', 'Applicable consent-divorce provisions and connected-case disposal procedures'],
  },
  {
    id: 'family-stage-5',
    title: 'Present evidence and seek workable participation arrangements',
    forum: 'Court hearing the matrimonial, maintenance, protection or custody matter',
    body: [
      'If issues remain contested, prepare pleadings, disclosures, witness evidence and relevant documents for the particular proceeding. Respond accurately to disputed financial claims and explain missing records through the proper procedural route. In custody and access matters, the child\'s welfare is central: schooling, health, caregiving, stability, safety and meaningful relationships require a practical assessment. Neither parental gender, higher income nor an untested allegation automatically determines the final arrangement.',
      'Overseas residence, work commitments or health concerns may justify a request for video participation, exemption or another procedural accommodation. Such arrangements are not automatic and depend on court permission, the purpose of the hearing and applicable rules. A power of attorney does not necessarily replace personal evidence or attendance at every stage. Address travel, identity verification and child movement transparently, and comply with existing orders unless they are modified by the competent court.',
    ],
    provisions: ['Family Courts Act, 1984: applicable procedure and evidence provisions', 'Applicable guardianship and custody law; court rules on remote participation'],
  },
  {
    id: 'family-stage-6',
    title: 'Review orders, compliance and any later change of circumstances',
    forum: 'Issuing court, competent enforcement forum or statutory appellate court',
    body: [
      'Read each order or decree for its precise obligations, effective terms, payment requirements and contact arrangements. Keep proof of compliance, receipts and an accurate record of any outstanding obligation. A matrimonial decree does not automatically dispose of every maintenance, custody or protection case. Where settlement involved several proceedings, verify the required orders in each rather than relying only on an agreement or an informal assurance that all cases are closed.',
      'Non-compliance, changed financial circumstances or a child\'s evolving needs may require enforcement, clarification or an application for variation under the relevant law. Do not stop payments or alter access unilaterally because a dispute continues. Appeal and other challenges depend on the type of order, statutory route and applicable filing requirements. Seek prompt advice on the complete record; the availability of modification, a stay or appellate relief should never be assumed from a general guide.',
    ],
    provisions: ['Applicable enforcement, variation and appellate provisions', 'Family Courts Act, 1984: section 19 where applicable'],
  },
]

export const familyLucknowToc: GuideTocItem[] = [
  { id: 'family-team', label: 'Our Team' },
  { id: 'family-statutes', label: 'Applicable Personal Laws and Forums' },
  { id: 'family-procedure', label: 'Family Proceedings Step by Step', children: familyLucknowStages.map(({ id, title }) => ({ id, label: title })) },
  { id: 'family-documents', label: 'First-Consultation Checklist' },
  { id: 'family-interim-relief-review', label: 'Custody, Support and Connected Proceedings' },
]

export const familyLucknowStatutes: StatuteRow[] = [
  { law: 'Family Courts Act, 1984', provisions: 'Sections 7, 9 and applicable procedure/appeal provisions', relevance: 'Defines Family Court jurisdiction and settlement duties; not every family-related criminal or protection remedy is heard in that court.' },
  { law: 'Applicable marriage and personal law', provisions: 'Hindu Marriage Act, Special Marriage Act and other applicable personal-law statutes', relevance: 'Grounds for matrimonial relief, consent proceedings and interim support vary with the marriage and governing law. No single marriage statute applies to all couples.' },
  { law: 'Summary maintenance framework', provisions: 'BNSS section 144 or saved CrPC section 125, as applicable', relevance: 'Eligibility, jurisdiction and procedural savings require review. Financial disclosure and other support orders matter; there is no universal support percentage.' },
  { law: 'Protection of Women from Domestic Violence Act, 2005', provisions: 'Sections 12 and 18-23, subject to statutory eligibility', relevance: 'Protection, residence, monetary and interim relief can follow a distinct statutory track. These proceedings do not themselves dissolve a marriage.' },
  { law: 'Guardians and Wards Act, 1890 and applicable personal law', provisions: 'Jurisdiction, guardianship, custody and welfare provisions', relevance: 'The child\'s welfare controls custody and access decisions. Existing orders, ordinary residence, schooling, safety and caregiving must be considered.' },
]