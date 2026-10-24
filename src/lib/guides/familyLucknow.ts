import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const familyLucknowStages: GuideStage[] = [
  {
    id: 'family-stage-1',
    title: 'Pre-Litigation Counseling & Mediation Referral',
    forum: 'Mahila Thana (CAW Cell), Hazratganj, Lucknow / Family Court Mediation Center, Kaiserbagh',
    body: [
      'Most matrimonial disputes in Lucknow first surface at the Mahila Thana (CAW Cell), Hazratganj, where the police attempt counseling before registering an FIR, or at the Family Court Mediation Center at Kaiserbagh once a petition is filed. We prepare clients for both: what to state, what not to concede, and how a counseling record can later be used in maintenance, custody or criminal proceedings.',
      'Participation in mediation is voluntary, and no settlement should be signed under pressure. Where safety or urgent financial support is at stake, we advise moving the competent court first and mediating only from a position of legal protection. A reconciliation at the CAW Cell does not by itself dispose of pending court cases — each proceeding needs its own lawful closure.',
    ],
    provisions: ['Family Courts Act, 1984: section 9 (duty to assist settlement)', 'Section 35(3) BNSS (formerly s.41A CrPC) notice practice in matrimonial FIRs'],
    checklist: ['Chronology of the marriage and dispute', 'Existing notices, counseling records and prior complaints', 'Immediate safety, residence and child-care concerns'],
  },
  {
    id: 'family-stage-2',
    title: 'Maintenance Claims with the Rajnesh v. Neha Affidavit',
    forum: 'Family Court, Lucknow (Kaiserbagh) / Judicial Magistrate concerned',
    body: [
      'Summary maintenance for a wife, children or dependent parents is filed under Section 144 BNSS (formerly Section 125 CrPC), while spouses in pending matrimonial litigation may also seek interim support and litigation expenses under Section 24 of the Hindu Marriage Act, 1955. Every maintenance claim before the Family Court, Lucknow now requires the mandatory Affidavit of Assets & Liabilities in the format prescribed in Rajnesh v. Neha — incomplete or evasive disclosure is routinely drawn against the defaulting spouse.',
      'We compile income, bank, tax and expenditure records so the affidavit withstands cross-examination, and we seek enforcement of arrears through Section 147 BNSS attachment and recovery proceedings where an order is not honoured. There is no universal percentage of income fixed as maintenance; the award turns on disclosed means, reasonable needs and the marital standard of living.',
    ],
    provisions: ['Section 144 BNSS (formerly s.125 CrPC)', 'Section 147 BNSS (enforcement of maintenance arrears)', 'Sections 24/25 Hindu Marriage Act, 1955', 'Rajnesh v. Neha (2020) affidavit of assets & liabilities'],
    checklist: ['Income, bank and tax records of both spouses', 'Household and child-related expense schedule', 'Existing maintenance or interim orders in connected cases'],
  },
  {
    id: 'family-stage-3',
    title: 'Domestic Violence & Shared Household Residence Orders',
    forum: 'ACJM / Judicial Magistrate Courts, Lucknow (PWDVA proceedings)',
    body: [
      'An aggrieved woman may apply under Section 12 of the Protection of Women from Domestic Violence Act, 2005 before the competent Magistrate in Lucknow for protection orders (Section 18), monetary relief and compensation (Sections 20 and 22), and temporary custody (Section 21). Interim and ex parte relief can be sought under Section 23 where urgency is shown.',
      'Following Satish Chander Ahuja v. Sneha Ahuja, the right to reside in the shared household under Sections 17 and 19 is not defeated merely because the husband or his relatives own the property. We both prosecute PWDVA applications and defend respondents against exaggerated claims, including Section 29 appeals before the Sessions Court, Lucknow.',
    ],
    provisions: ['PWDVA, 2005: sections 12, 17, 18, 19, 20, 21, 22, 23 and 29', 'Satish Chander Ahuja v. Sneha Ahuja (2020) — shared household'],
  },
  {
    id: 'family-stage-4',
    title: 'Child Custody, Interim Visitation & Parenting Plans',
    forum: 'Family Court, Lucknow (Kaiserbagh) / District Judge, Lucknow (GWA petitions)',
    body: [
      'Custody and guardianship applications are framed under the Guardians and Wards Act, 1890 — Section 7 for permanent guardianship, Section 12 for interim custody and visitation, and Section 25 for restoration of a child wrongfully removed — read with Section 6 of the Hindu Minority and Guardianship Act, 1956 and Section 26 of the Hindu Marriage Act, 1955. The paramount consideration is the welfare of the child, not the gender or income of either parent.',
      'We prepare parenting plans covering schooling, holidays, communication and travel so interim visitation does not collapse into repeated applications. School, medical and caregiving records, and the child\'s existing routine, carry more weight than untested allegations.',
    ],
    provisions: ['Guardians and Wards Act, 1890: sections 7, 12, 17 and 25', 'Hindu Minority and Guardianship Act, 1956: section 6', 'Hindu Marriage Act, 1955: section 26'],
    checklist: ['Schooling, health and caregiving records', 'Existing contact and visitation arrangements', 'Specific safety or relocation concerns'],
  },
  {
    id: 'family-stage-5',
    title: 'Defending False Matrimonial FIRs (498A / 85 BNS)',
    forum: 'Mahila Thana / concerned police station; Sessions Court & Allahabad High Court, Lucknow Bench',
    body: [
      'Matrimonial cruelty prosecutions under Section 498A IPC (now Sections 85/86 BNS) and Sections 3/4 of the Dowry Prohibition Act frequently name every relative of the husband. The Arnesh Kumar safeguards and the Section 35(3) BNSS (formerly Section 41A CrPC) notice regime mean arrest is not automatic — we move quickly to secure anticipatory bail and to protect elderly parents and distant relatives from coercive process.',
      'Where the FIR is an abuse of process or the dispute has been settled, we pursue quashing of the FIR, chargesheet or summoning order under Section 528 BNSS (formerly Section 482 CrPC) before the Allahabad High Court, Lucknow Bench, alongside compounding-based closure where the law permits.',
    ],
    provisions: ['Sections 85/86 BNS (formerly s.498A IPC)', 'Dowry Prohibition Act, 1961: sections 3/4', 'Section 35(3) BNSS & Arnesh Kumar guidelines', 'Section 528 BNSS (formerly s.482 CrPC) quashing'],
  },
  {
    id: 'family-stage-6',
    title: 'Succession Certificates, Legal Heirship & Family Settlements',
    forum: 'District Judge / Civil Judge, Lucknow; Sub-Registrar & revenue authorities',
    body: [
      'Death in the family often requires a succession certificate under Section 372 of the Indian Succession Act, 1925 for debts and securities, legal heirship (Varisana) documentation, or a family settlement deed to divide ancestral and self-acquired assets without litigation. A succession certificate does not decide title to immovable property — that requires the appropriate civil or revenue remedy.',
      'We draft and register family settlement deeds, advise on stamp duty and registration formalities in Lucknow, and represent heirs in contested succession, probate and partition proceedings where settlement is not possible.',
    ],
    provisions: ['Indian Succession Act, 1925: section 372', 'Applicable personal succession law and registration provisions'],
  },
  {
    id: 'family-stage-7',
    title: 'Execution of Orders & Section 19 Appeals to the High Court',
    forum: 'Family Court (execution); Allahabad High Court, Lucknow Bench (appeals)',
    body: [
      'A decree or order is only the beginning: unpaid maintenance is executed through attachment and recovery under Section 147 BNSS, custody and visitation orders through the Family Court\'s enforcement process, and disobedience may invite contempt or coercive steps. We track compliance and move execution applications promptly.',
      'Against a judgment or decree of the Family Court, Lucknow, a First Appeal under Section 19 of the Family Courts Act, 1984 lies to a Division Bench of the Allahabad High Court, Lucknow Bench within the prescribed 30/90-day limitation. Appeals from our chamber at Block D-311 are assessed on the certified record, limitation and the grounds available.',
    ],
    provisions: ['Section 147 BNSS (maintenance execution)', 'Family Courts Act, 1984: section 19 (First Appeal)', 'Contempt of Courts Act, 1971 where applicable'],
    checklist: ['Certified copy of the decree or order', 'Record of payments made and arrears due', 'Limitation date for any appeal'],
  },
]

export const familyLucknowToc: GuideTocItem[] = [
  { id: 'family-team', label: 'Our Team' },
  { id: 'family-statutes', label: 'Statutory Framework Governing Family & Matrimonial Litigation in Lucknow' },
  { id: 'family-procedure', label: 'How a Family & Matrimonial Case Proceeds in Lucknow: Stage 1 to Stage 7', children: familyLucknowStages.map(({ id, title }) => ({ id, label: title })) },
  { id: 'family-documents', label: 'First-Consultation Checklist' },
  { id: 'family-interim-relief-review', label: 'Custody, Support and Connected Proceedings' },
]

export const familyLucknowStatutes: StatuteRow[] = [
  {
    law: 'Family Courts Act, 1984',
    provisions: 'Sections 7, 9 and 19',
    relevance: 'Section 7 vests jurisdiction in the Principal Judge, Family Court, Kaiserbagh; Section 9 casts a duty to assist settlement and mediation; Section 19 provides a First Appeal within 30/90 days to a Division Bench of the Allahabad High Court, Lucknow Bench.',
  },
  {
    law: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS) / CrPC',
    provisions: 'Sections 144, 147 and 35(3) BNSS',
    relevance: 'Section 144 BNSS (formerly s.125 CrPC) is the summary maintenance remedy for wife, children and parents; Section 147 BNSS enforces arrears by attachment; Section 35(3) BNSS (formerly s.41A CrPC) governs notice in place of arrest in matrimonial FIRs.',
  },
  {
    law: 'Protection of Women from Domestic Violence Act, 2005 (PWDVA)',
    provisions: 'Sections 12, 17, 18, 19, 20, 21, 22 and 29',
    relevance: 'Section 12 application to the Magistrate; Sections 17 & 19 secure the right to reside in the shared household (Satish Chander Ahuja precedent); Sections 18, 20 & 22 grant protection, monetary relief and compensation; Section 21 covers temporary custody; Section 29 provides a Sessions Court appeal.',
  },
  {
    law: 'Guardians and Wards Act, 1890 & Hindu Minority and Guardianship Act, 1956',
    provisions: 'Sections 7, 12, 17 & 25 GWA; s.6 HMGA; s.26 HMA',
    relevance: 'Permanent guardianship, interim visitation and custody restoration decided on the paramount welfare of the child, read with the natural-guardian rules of s.6 HMGA and custody orders in matrimonial proceedings under s.26 HMA.',
  },
  {
    law: 'Hindu Marriage Act, 1955 / Special Marriage Act, 1954 / Muslim Personal Law & Waqf Matters',
    provisions: 'Sections 9, 24 & 25 HMA; Indian Succession Act, 1925 s.372',
    relevance: 'Section 9 HMA restitution of conjugal rights; Sections 24/25 HMA pendente lite and permanent maintenance; succession certificates under s.372 of the Indian Succession Act and family settlement deeds for estate division.',
  },
  {
    law: 'Maintenance and Welfare of Parents and Senior Citizens Act, 2007',
    provisions: 'Sections 4, 5 and 23',
    relevance: 'Summary maintenance for parents and senior citizens before the SDM Maintenance Tribunal, Lucknow, and revocation under Section 23 of gift or transfer deeds made on the condition of care where the transferee neglects the senior citizen.',
  },
]
