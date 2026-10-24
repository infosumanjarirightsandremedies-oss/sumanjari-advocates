import type { GuideStage, GuideTocItem, StatuteRow } from '@/lib/guides/types'

export const divorceStages: GuideStage[] = [
  {
    id: 'stage-1',
    title: 'Assessment, Safety & Choosing the Route',
    forum: 'Chamber consultation; Family Counselling Centre of the UP Police, where a complaint is involved',
    body: [
      'The first step is identifying which marriage law governs the relationship — the Hindu Marriage Act, the Special Marriage Act, or another personal law — since grounds, eligibility and procedure differ across each. Section 14 of the Hindu Marriage Act ordinarily bars a petition within one year of marriage, except on grounds of exceptional hardship to the petitioner or exceptional depravity by the respondent, so the marriage date and the available route need to be checked together.',
      'Where safety is a concern, immediate options such as a domestic violence complaint or a protection order should be discussed before, or alongside, any divorce strategy; a settlement conversation must never substitute for necessary protective relief. Where a criminal complaint has already been filed, the Family Counselling Centre (Parivar Paramarsh Kendra) run by the UP Police can be a venue for an attempted reconciliation or settlement.',
      'Preserve evidence lawfully: screenshots, messages and financial records can support a case only if obtained without hacking an account or violating another law. A legal notice is optional at this stage, not a mandatory precondition to filing.',
    ],
    provisions: ['Section 14, Hindu Marriage Act, 1955', 'Section 12, Protection of Women from Domestic Violence Act, 2005'],
    checklist: ['Marriage certificate and registration details', 'Dated chronology of the relationship and separation', 'Any existing protection or maintenance order'],
  },
  {
    id: 'stage-2',
    title: 'Jurisdiction: Can You File in Lucknow?',
    forum: 'Family Court, Lucknow, Wala Qadar Road, Qaiserbagh',
    body: [
      'Section 19 of the Hindu Marriage Act allows a petition to be filed where the marriage was solemnised, where the respondent resides, where the parties last resided together, or, since the 2003 amendment, where the wife resides at the time of filing. The Special Marriage Act has its own jurisdiction provision under Section 31. A petitioner living in Lucknow does not automatically make every matrimonial case maintainable at the Family Court, Lucknow — the statutory connection must actually exist.',
      'Residents of the other districts under the Lucknow Bench — such as Hardoi, Sitapur, Unnao or Barabanki — ordinarily file in their own district Family Court rather than in Lucknow, unless one of the statutory connections points here. Where the respondent is an NRI, additional considerations about service and appearance arise.',
      'If proceedings have already been filed in the wrong forum, or a party wants a case moved for convenience or fairness, Section 24 of the Civil Procedure Code allows a transfer petition to the High Court for cases within Uttar Pradesh, while Section 25 CPC allows an inter-state transfer petition to the Supreme Court.',
    ],
    provisions: ['Section 19, Hindu Marriage Act, 1955', 'Section 31, Special Marriage Act, 1954', 'Section 24, Code of Civil Procedure, 1908', 'Section 25, Code of Civil Procedure, 1908'],
    checklist: ['Addresses: marriage, matrimonial home, and current residence', 'Any prior case filed in another district', 'NRI status and country of residence of either spouse'],
  },
  {
    id: 'stage-3',
    title: 'Drafting & Filing the Petition',
    forum: 'Filing counter / e-filing, Family Court, Lucknow',
    body: [
      'A contested petition under Section 13 of the Hindu Marriage Act must plead the specific ground relied upon — cruelty, desertion, adultery or another recognised ground — with dates and particulars, supported by an affidavit. A joint petition for mutual consent divorce under Section 13B instead annexes the agreed settlement terms: alimony, return of stridhan, custody and visitation, and withdrawal of any connected cases.',
      'Filing requires proof of marriage, identity and address documents, the applicable court fee, and a vakalatnama authorising the advocate to appear. Where maintenance is claimed, the Supreme Court\'s direction in Rajnesh v. Neha (2020) requires a sworn affidavit of assets, income and liabilities in a prescribed format, which both parties must eventually file.',
      'Draft pleadings carefully: inconsistencies between the petition and later affidavits or cross-examination are commonly used to challenge credibility, particularly in a contested matter.',
    ],
    provisions: ['Section 13, Hindu Marriage Act, 1955', 'Section 13B, Hindu Marriage Act, 1955', 'Rajnesh v. Neha (2020) disclosure affidavit'],
    checklist: ['Draft petition and supporting affidavit', 'Settlement deed, for a mutual consent petition', 'Proof of marriage and identity documents'],
  },
  {
    id: 'stage-4',
    title: 'Notice, Service & First Appearance',
    forum: 'Family Court, Lucknow',
    body: [
      'Once filed, the court issues notice to the respondent, served through the court process, registered post, or, where the court permits, electronic means such as email or WhatsApp. If the respondent avoids service and stays away despite valid notice, the court can proceed ex parte on the record before it.',
      'In a mutual consent petition, both spouses must ordinarily appear and have their statements recorded at the first motion confirming their joint consent to the terms filed. For an NRI respondent, appearance through video-conference may be permitted where the court allows it, though this should not be assumed without confirming the practice with the registry.',
    ],
    provisions: ['Order V, Code of Civil Procedure, 1908', 'Section 13B(1), Hindu Marriage Act, 1955'],
    checklist: ['Correct current address for service on the respondent', 'Proof of service, once effected', 'Travel or availability constraints for NRI parties'],
  },
  {
    id: 'stage-5',
    title: 'Counselling, Mediation & Reconciliation',
    forum: 'Family Court counsellors; Mediation Centre, Civil Court, Lucknow; Lok Adalat (DLSA Lucknow)',
    body: [
      'Section 9 of the Family Courts Act, 1984 places a duty on the Family Court to make an effort at settlement before proceeding with a contested case, and Section 23(2) of the Hindu Marriage Act requires the court to attempt reconciliation wherever possible. In practice this often means a reference to the court\'s own counsellors or to the Mediation Centre at the Civil Court, Lucknow.',
      'Mediation discussions are confidential and cannot ordinarily be used as evidence if they fail. Where a settlement is reached, it should be reduced to a clear, enforceable deed covering every financial and parenting term, rather than left as an informal understanding. The National Lok Adalat, coordinated through the District Legal Services Authority, Lucknow, is another forum where a consent decree can sometimes be recorded quickly.',
      'If mediation does not resolve the dispute, the case returns to the regular track and proceeds to written statement, issues and evidence as described at Stage 7.',
    ],
    provisions: ['Section 9, Family Courts Act, 1984', 'Section 23(2), Hindu Marriage Act, 1955'],
    checklist: ['Points of agreement and disagreement so far', 'Draft settlement terms, if discussions have progressed', 'Willingness of both sides to attend counselling'],
  },
  {
    id: 'stage-6',
    title: 'Interim Maintenance, Custody & Protection',
    forum: 'Family Court, Lucknow; Judicial Magistrate (DV Act), Civil Court, Lucknow',
    body: [
      'While the main petition is pending, a spouse without independent income can seek interim maintenance and litigation costs under Section 24 of the Hindu Marriage Act, assessed on income, earning capacity, reasonable needs and dependants rather than a fixed percentage. Interim custody and visitation arrangements can be sought under Section 26 of the Act, guided throughout by the child\'s welfare.',
      'A parallel claim for maintenance of a spouse, children or parents can also be made under Section 144 BNSS (formerly Section 125 CrPC), and protection, residence or monetary relief can be sought under Sections 18 to 23 of the Domestic Violence Act before the Judicial Magistrate at the Civil Court, Lucknow. Courts are expected to account for amounts already awarded under one proceeding when deciding another, to avoid double recovery, as emphasised in Rajnesh v. Neha (2020).',
    ],
    provisions: ['Section 24, Hindu Marriage Act, 1955', 'Section 26, Hindu Marriage Act, 1955', 'Section 144 BNSS (formerly s.125 CrPC)', 'Sections 18–23, Protection of Women from Domestic Violence Act, 2005'],
    checklist: ['Income and asset affidavit', 'Existing maintenance or protection orders', 'Child\'s school, medical and care expenses'],
  },
  {
    id: 'stage-7',
    title: 'Written Statement, Issues & Evidence (Contested)',
    forum: 'Family Court, Lucknow',
    body: [
      'In a contested matter, the respondent files a written statement responding to the grounds pleaded, and may raise a counter-claim. The court then frames the issues that need to be decided, and Section 14 of the Family Courts Act allows it to receive any report, statement, or material it considers helpful to settling the dispute, in addition to conventional oral evidence.',
      'Evidence is led by affidavit and tested through cross-examination. Under Section 13 of the Family Courts Act, a party is not entitled to representation by a legal practitioner as of right, though in practice advocates regularly appear with the leave of the court. Section 21B of the Hindu Marriage Act directs that a petition should, as far as possible, be disposed of within six months of service of notice — a directory aim rather than a guaranteed timeline given the court\'s overall caseload.',
    ],
    provisions: ['Section 14, Family Courts Act, 1984', 'Section 13, Family Courts Act, 1984', 'Section 21B, Hindu Marriage Act, 1955'],
    checklist: ['Written statement and any counter-claim', 'List of witnesses and documents to be proved', 'Evidence affidavits for examination-in-chief'],
  },
  {
    id: 'stage-8',
    title: 'Mutual Consent: Second Motion & Cooling-Off Waiver',
    forum: 'Family Court, Lucknow',
    body: [
      'For a mutual consent petition, Section 13B(2) requires a second motion confirming that consent has not been withdrawn, to be moved not earlier than six months and not later than eighteen months after the first motion. The six-month interval can be waived in appropriate cases following the Supreme Court\'s conditions in Amardeep Singh v. Harveen Kaur (2017) — typically where the statutory period for mediation has already been observed and the court is satisfied that settlement is unlikely.',
      'Consent can lawfully be withdrawn by either spouse at any point before the decree is passed, as held in Sureshta Devi v. Om Prakash (1991); a decree cannot be forced on an unwilling party merely because a petition was jointly filed. Where the court permits, personal appearance at the second motion may be substituted by video-conference, but this should be confirmed with the registry rather than assumed.',
    ],
    provisions: ['Section 13B(2), Hindu Marriage Act, 1955', 'Amardeep Singh v. Harveen Kaur (2017)', 'Sureshta Devi v. Om Prakash (1991)'],
    checklist: ['Confirmation that both parties still consent', 'Compliance so far with settlement terms', 'Grounds for seeking waiver of the six-month interval'],
  },
  {
    id: 'stage-9',
    title: 'Decree, Alimony, Stridhan & Custody Orders',
    forum: 'Family Court, Lucknow',
    body: [
      'On granting the petition, the court passes a decree of divorce and, where claimed, a separate order on permanent alimony under Section 25 of the Hindu Marriage Act, which may be structured as a lump sum or periodic payments. Section 27 allows the court to make orders regarding property presented at or about the time of marriage, though a jointly purchased asset held outside this provision generally needs its own separate resolution.',
      'The decree should also record the return of stridhan and jewellery, and any custody, guardianship and visitation schedule agreed or decided. A certified copy of the decree should be obtained promptly, since Section 15 permits either party to remarry only after the limitation period for an appeal has lapsed, or after any appeal has been finally dismissed.',
    ],
    provisions: ['Section 25, Hindu Marriage Act, 1955', 'Section 27, Hindu Marriage Act, 1955', 'Section 15, Hindu Marriage Act, 1955'],
    checklist: ['Certified copy of the decree', 'Written alimony and property settlement terms', 'Custody and visitation schedule, if children are involved'],
  },
  {
    id: 'stage-10',
    title: 'Appeal, Enforcement & Closing Connected Cases',
    forum: 'Allahabad High Court, Lucknow Bench (appeal); Family Court, Lucknow (execution)',
    body: [
      // VERIFY: which limitation period the Lucknow Bench currently applies to Family Court appeals
      'An appeal against a Family Court decree lies to the Allahabad High Court, Lucknow Bench under Section 19 of the Family Courts Act, 1984, for decrees passed by the Lucknow Family Court. Limitation is strict, and the period stated in Section 19(3) of the Family Courts Act and the period stated in Section 28(4) of the Hindu Marriage Act are not identical; confirm which applies with the certified copy in hand and seek advice immediately rather than estimate the deadline.',
      'Where maintenance or alimony falls into arrears, execution proceedings can be filed before the Family Court, Lucknow to recover the amount. Where a settlement has resolved a connected criminal complaint — for instance cruelty under Section 85 BNS, a domestic violence case, or a dowry-related FIR — a quashing application under Section 528 BNSS at the Lucknow Bench, following the approach in Gian Singh v. State of Punjab (2012), is the usual route to formally close it; a private withdrawal letter to the police does not by itself end a criminal case.',
    ],
    provisions: ['Section 19, Family Courts Act, 1984', 'Section 28, Hindu Marriage Act, 1955', 'Section 528 BNSS (formerly s.482 CrPC)'],
    checklist: ['Certified copy and date of the decree', 'Arrears statement, if enforcing maintenance', 'Status of any connected FIR or DV case'],
  },
]

export const divorceToc: GuideTocItem[] = [
  { id: 'divorce-team', label: 'Our Team' },
  { id: 'courts', label: 'Courts, Jurisdiction & Representation' },
  { id: 'statutory-framework', label: 'Which Law Applies to Your Marriage?' },
  { id: 'mutual-vs-contested', label: 'Mutual Consent or Contested Divorce?' },
  { id: 'mutual-contested-comparison', label: 'Mutual vs. Contested Comparison' },
  { id: 'mutual-consent-steps', label: 'Mutual Consent: Stage 1 to Stage 6' },
  { id: 'grounds', label: 'Grounds for a Contested Divorce' },
  { id: 'contested-alimony-annulment', label: 'Grounds, Alimony & Annulment' },
  {
    id: 'divorce-procedure',
    label: 'Divorce Procedure: Stage 1 to Stage 10',
    children: divorceStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })),
  },
  { id: 'documents', label: 'Documents to Prepare' },
  { id: 'settlement-children', label: "Financial Settlements & Child's Welfare" },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Speak to a Divorce Advocate in Lucknow' },
]

export const divorceStatutes: StatuteRow[] = [
  {
    law: 'Hindu Marriage Act, 1955',
    provisions: 's.9 (restitution), s.10 (judicial separation), s.13 (divorce grounds), s.13B (mutual consent), s.14 (one-year bar), s.15 (remarriage), s.19 (jurisdiction), s.21B (expeditious trial), s.23(2) (reconciliation), s.24 (interim maintenance & litigation costs), s.25 (permanent alimony), s.26 (custody), s.27 (joint property), s.28 (appeal)',
    relevance: 'Most divorce petitions at the Family Court, Lucknow',
  },
  {
    law: 'Special Marriage Act, 1954',
    provisions: 's.27, s.28, s.31, s.36–38',
    relevance: 'Court/registered marriages, interfaith marriages',
  },
  {
    law: 'Family Courts Act, 1984',
    provisions: 's.7 (jurisdiction), s.9 (duty to attempt settlement), s.10 (procedure), s.13 (legal representation), s.14 (evidence), s.19 (appeal to High Court)',
    relevance: 'How the Lucknow Family Court runs, and why appeals go to the Lucknow Bench',
  },
  {
    law: 'BNSS, 2023',
    provisions: 's.144–147 (maintenance, formerly s.125–128 CrPC); s.528 (quashing connected FIRs)',
    relevance: 'Maintenance claims; ending connected criminal cases on settlement',
  },
  {
    law: 'Protection of Women from Domestic Violence Act, 2005',
    provisions: 's.12, 18, 19, 20, 21, 23',
    relevance: 'DV applications before the Judicial Magistrate, Civil Court, Lucknow, often running alongside the divorce',
  },
  {
    law: 'Guardians and Wards Act, 1890; Hindu Minority and Guardianship Act, 1956',
    provisions: 'GWA s.7, 17, 25; HMGA s.6, 13',
    relevance: 'Custody and guardianship at the Family Court; the child\'s welfare is paramount',
  },
  {
    law: 'Other personal laws',
    provisions: 'Divorce Act 1869; Parsi Marriage and Divorce Act 1936; Dissolution of Muslim Marriages Act 1939; Muslim Women (Protection of Rights on Marriage) Act 2019',
    relevance: 'Which statute governs depends on the parties\' religion and marriage form',
  },
  {
    law: 'Key Supreme Court rulings',
    provisions: 'Amardeep Singh v. Harveen Kaur (2017); Rajnesh v. Neha (2020); Shilpa Sailesh v. Varun Sreenivasan (2023); Sureshta Devi v. Om Prakash (1991)',
    relevance: 'Reference points the Lucknow Family Court applies daily',
  },
]
