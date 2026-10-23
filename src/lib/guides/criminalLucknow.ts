import type { GuideStage, GuideTocItem, StatuteRow } from '@/lib/guides/types'

export const criminalStages: GuideStage[] = [
  {
    id: 'stage-1',
    title: 'Complaint, FIR or Police Notice',
    forum: 'Police stations under the Lucknow Police Commissionerate; Magistrate courts at the Civil Court, Kaiserbagh',
    body: [
      'Most criminal cases in Lucknow begin at a police station of the Lucknow Police Commissionerate. Information about a cognizable offence must be recorded as an FIR under Section 173 BNSS (formerly Section 154 CrPC). It can be given at any police station as a "zero FIR", or electronically, and must be signed within three days if sent online.',
      'For offences punishable with three to seven years, the police may first hold a preliminary enquiry of up to 14 days with the permission of a DSP-rank officer. If the police station refuses to register, the complainant can write to the Deputy Commissioner of Police under Section 173(4). After that, the complainant can apply to the Magistrate at the Civil Court, Kaiserbagh under Section 175(3), supported by an affidavit.',
      'If you are named in an FIR, do not contact the complainant or witnesses. Obtain a copy of the FIR from the UP Police citizen portal (UPCOP) or the police station, and get advice before giving any statement.',
    ],
    provisions: ['Section 173 BNSS (formerly s.154 CrPC)', 'Section 173(3) and 173(4) BNSS', 'Section 175(3) BNSS (formerly s.156(3) CrPC)', 'Section 223 BNSS (private complaint)'],
    checklist: ['FIR number, police station and date', 'Copy of any complaint or notice served', 'Names of the persons named and of the witnesses'],
  },
  {
    id: 'stage-2',
    title: 'Investigation & Notice of Appearance',
    forum: 'Investigating police station, Lucknow Police Commissionerate',
    body: [
      "For offences punishable with up to seven years, investigating officers at the concerned police station under the Lucknow Police Commissionerate must ordinarily issue a notice of appearance under Section 35(3) BNSS (formerly Section 41A CrPC) instead of making an arrest. The Supreme Court's guidelines in Arnesh Kumar v. State of Bihar (2014) require the police to record reasons before arresting in such cases, and non-compliance can itself support a bail application. Section 35(7) additionally bars arrest without a DSP-rank officer's permission for offences carrying under three years where the person is infirm or over sixty.",
      "During this stage the investigating officer records statements of witnesses and the complainant under Section 180 BNSS (formerly Section 161 CrPC), and may seek a statement on oath before a Magistrate under Section 183 BNSS (formerly Section 164 CrPC) to preserve testimony early. For offences carrying seven years or more, a forensic team's visit to the scene is mandated under Section 176(3) BNSS, and search and seizure must ordinarily be audio-video recorded under Section 105 BNSS — a safeguard worth checking where the investigation record is challenged later.",
      // VERIFY: current operational status of Family Welfare Committees in Lucknow
      "In complaints of cruelty under Section 85 BNS (formerly Section 498A IPC), the Allahabad High Court in Mukesh Bansal v. State of U.P. (2022) directed a two-month cooling-off period and referral to a Family Welfare Committee before arrest, a protection the Supreme Court endorsed in Shivangi Bansal v. Sahib Bansal (2025). Confirm the current operational status of Family Welfare Committees in Lucknow before relying on this safeguard.",
    ],
    provisions: ['Section 35(3) BNSS (formerly s.41A CrPC)', 'Section 35(7) BNSS', 'Section 180 BNSS (formerly s.161 CrPC)', 'Section 183 BNSS (formerly s.164 CrPC)', 'Section 176(3) BNSS', 'Section 105 BNSS'],
    checklist: ['Copy of the notice of appearance, if issued', 'Any statement already given to the police', 'Record of dates summons were received'],
  },
  {
    id: 'stage-3',
    title: 'Protection Before Arrest: Anticipatory Bail & Writ',
    forum: 'Sessions Court, Civil Court, Kaiserbagh; Allahabad High Court, Lucknow Bench, Gomti Nagar',
    body: [
      'Anticipatory bail under Section 482 BNSS (formerly Section 438 CrPC) allows a person apprehending arrest for a non-bailable offence to seek a direction for release in advance. In Uttar Pradesh this remedy has a particular history: it was withdrawn from 1976 and restored only when the CrPC (Uttar Pradesh Amendment) Act, 2018 took effect in June 2019. Applications are heard by the Sessions Court at the Civil Court, Kaiserbagh, and by the Allahabad High Court, Lucknow Bench, at Gomti Nagar, which have concurrent jurisdiction.',
      'Ordinarily, an applicant approaches the Sessions Court first and moves the Lucknow Bench only if relief is refused or urgent circumstances justify a direct application; this is a practice, not a fixed rule, and each case must be assessed on its facts. Conditions such as cooperation with investigation, surrender of a passport, or restrictions on contacting witnesses are commonly attached and must be honoured strictly.',
      'Separately, where an FIR itself is flawed, a Criminal Misc. Writ Petition under Article 226 can be filed at the Lucknow Bench to quash the FIR or restrain coercive action while investigation is pending — a route distinct from anticipatory bail and from the post-chargesheet remedy under Section 528 BNSS at Stage 7. The grounds recognised in State of Haryana v. Bhajan Lal (1992), such as allegations that do not disclose any offence, continue to guide both remedies.',
    ],
    provisions: ['Section 482 BNSS (formerly s.438 CrPC)', 'Article 226, Constitution of India', 'CrPC (Uttar Pradesh Amendment) Act, 2018'],
    checklist: ['Grounds for apprehending arrest', 'FIR copy and any notice received', 'Proposed sureties and contact details'],
  },
  {
    id: 'stage-4',
    title: 'Arrest, Production & Remand',
    forum: 'Remand / duty Magistrate, Civil Court, Lucknow',
    body: [
      'On arrest, Section 47 BNSS (formerly Section 50 CrPC) entitles the person to be told the grounds of arrest and, in a bailable offence, of the right to bail. Section 48 BNSS (formerly Section 50A) requires the police to inform a relative or friend of the arrest and place of custody. The arrested person must be produced before the nearest Magistrate at the Civil Court, Lucknow within twenty-four hours, excluding travel time, under Section 58 BNSS (formerly Section 57 CrPC).',
      'The remand Magistrate can authorise police or judicial custody under Section 187 BNSS (formerly Section 167 CrPC). Police custody is capped at fifteen days in total, which may now be sought in parts within the first forty or sixty days of the overall investigation period depending on the offence. If the police fail to file a report within sixty days (offences under ten years) or ninety days (graver offences), the accused acquires a right to default bail under Section 187(3), which must be claimed promptly once it accrues.',
      'Anyone unable to afford a lawyer at this stage can seek free legal aid through the District Legal Services Authority, Lucknow, and the duty remand advocate posted at the Civil Court. Do not sign any document or make a statement to the police without understanding its contents and consequences.',
    ],
    provisions: ['Section 47 BNSS (formerly s.50 CrPC)', 'Section 48 BNSS (formerly s.50A CrPC)', 'Section 58 BNSS (formerly s.57 CrPC)', 'Section 187 BNSS (formerly s.167 CrPC)'],
    checklist: ['Arrest memo and grounds of arrest', 'Name of the relative informed', 'Medical examination record, if any'],
  },
  {
    id: 'stage-5',
    title: 'Regular Bail: Magistrate, Sessions & High Court',
    forum: 'Magistrate and Sessions Court, Civil Court, Kaiserbagh; Allahabad High Court, Lucknow Bench',
    body: [
      'A person in custody may apply for regular bail before the Magistrate under Section 480 BNSS (formerly Section 437 CrPC) for offences within Magistrate jurisdiction, or before the Sessions Court and the Allahabad High Court, Lucknow Bench under Section 483 BNSS (formerly Section 439 CrPC) for graver offences. Lucknow practice ordinarily expects an application before the Magistrate or Sessions Court at the Civil Court, Kaiserbagh, before a bail application is carried to the Lucknow Bench, though urgent cases may justify approaching the High Court directly.',
      'For first-time offenders who are undertrials, Section 479 BNSS (formerly Section 436A CrPC) entitles release on bail after detention for one-third of the maximum sentence prescribed for the offence, subject to the court\'s discretion in serious cases. The guidelines in Satender Kumar Antil v. CBI (2022) emphasise that bail, not jail, is the norm once investigation is complete.',
      'Bail is granted subject to sureties and a bail bond, with conditions that can include surrender of travel documents and restrictions on leaving the district without permission. Special statutes such as the NDPS Act (Section 37) and the UAPA impose stricter thresholds before bail can be granted, and these bars must be checked before assuming ordinary bail principles will apply.',
    ],
    provisions: ['Section 480 BNSS (formerly s.437 CrPC)', 'Section 483 BNSS (formerly s.439 CrPC)', 'Section 479 BNSS (formerly s.436A CrPC)'],
    checklist: ['Proposed sureties with address proof', 'Custody period and remand history', 'Any prior bail orders in the case'],
  },
  {
    id: 'stage-6',
    title: 'Police Report (Chargesheet) or Closure',
    forum: 'Concerned Magistrate court, Civil Court, Lucknow',
    body: [
      'On completing investigation, the police file a report under Section 193 BNSS (formerly Section 173 CrPC) before the concerned Magistrate at the Civil Court, Lucknow — either a chargesheet recommending prosecution or a closure report. Section 193(3)(ii) requires the informant to be kept updated on the progress of investigation within ninety days, a safeguard that is often overlooked and worth actively asserting.',
      'Where the police file a closure report, the complainant can file a protest petition objecting to the closure and asking the Magistrate to take cognizance regardless. Further investigation after a report is filed is permitted under Section 193(9) and should ordinarily be completed within ninety days unless the court extends time for reasons recorded.',
      'Once a chargesheet is filed, the accused is entitled to copies of the chargesheet and the material relied upon under Section 230 BNSS, which should be reviewed carefully before the next hearing to identify gaps, delay, or procedural lapses that may support discharge or quashing later.',
    ],
    provisions: ['Section 193 BNSS (formerly s.173 CrPC)', 'Section 193(3)(ii) BNSS', 'Section 193(9) BNSS', 'Section 230 BNSS'],
    checklist: ['Copy of the chargesheet or closure report', 'List of witnesses and documents relied upon', 'Any protest petition filed'],
  },
  {
    id: 'stage-7',
    title: 'Cognizance, Summons & Quashing at the Lucknow Bench',
    forum: 'Magistrate court, Civil Court, Lucknow; Allahabad High Court, Lucknow Bench',
    body: [
      "On receiving the police report, the Magistrate at the Civil Court, Lucknow decides whether to take cognizance of the offence under Section 210 BNSS (formerly Section 190 CrPC); where the case began on a private complaint, the proviso to Section 223 requires the accused to be given a hearing before cognizance is taken. If the Magistrate proceeds, summons are issued under Section 227 BNSS, directing the accused's appearance.",
      'A chargesheet, summoning order, or the proceedings themselves can be challenged at the Allahabad High Court, Lucknow Bench through an application under Section 528 BNSS (formerly Section 482 CrPC), the inherent-powers provision, or through a criminal revision under Sections 438–442 against orders that are revisable. These are distinct from the writ remedy under Article 226 described at Stage 3, which is typically used while investigation is still pending rather than after a chargesheet or summoning order.',
      'In private and matrimonial disputes that have been compromised, the Lucknow Bench can quash proceedings in the interests of justice, following the guidance in Gian Singh v. State of Punjab (2012) and Narinder Singh v. State of Punjab (2014), though quashing on settlement is granted more readily in predominantly civil disputes than in heinous or non-compoundable offences.',
    ],
    provisions: ['Section 210 BNSS (formerly s.190 CrPC)', 'Section 223 BNSS proviso', 'Section 227 BNSS (formerly s.204 CrPC)', 'Section 528 BNSS (formerly s.482 CrPC)', 'Sections 438–442 BNSS (revision)'],
    checklist: ['Summoning order and cognizance order', 'Settlement deed, if the dispute is compromised', 'Grounds for challenging the chargesheet'],
  },
  {
    id: 'stage-8',
    title: 'Discharge & Framing of Charge',
    forum: 'Sessions Court and Special Courts, Civil Court, Lucknow; Magistrate for warrant cases',
    body: [
      'In sessions-triable cases, after committal from the Magistrate, the accused may apply for discharge under Section 250 BNSS (formerly Section 227 CrPC), ordinarily within sixty days of the date of commitment, on the ground that the material on record does not make out a case. If the court is not satisfied that grounds for discharge exist, charges are framed under Section 251 BNSS (formerly Section 228 CrPC) and the trial proceeds.',
      'In warrant cases triable by a Magistrate, the equivalent stages are discharge under Section 262 BNSS (formerly Section 239 CrPC) and framing of charge under Section 263 BNSS (formerly Section 240 CrPC). Special categories of offences — including those under the POCSO Act, the SC/ST (Prevention of Atrocities) Act, the NDPS Act, the Prevention of Corruption Act, and cases against public representatives — are tried by Special Courts constituted at the Civil Court, Lucknow.',
      // VERIFY: current designations of Special Courts at Lucknow
      'Confirm the current designation and location of each Special Court before citing a specific courtroom to a client, as designations are revised periodically by the High Court administration.',
    ],
    provisions: ['Section 250 BNSS (formerly s.227 CrPC)', 'Section 251 BNSS (formerly s.228 CrPC)', 'Section 262 BNSS (formerly s.239 CrPC)', 'Section 263 BNSS (formerly s.240 CrPC)'],
    checklist: ['Committal order, if applicable', 'Draft discharge application and grounds', 'List of prosecution witnesses cited'],
  },
  {
    id: 'stage-9',
    title: 'Trial: Evidence, Statement of the Accused & Arguments',
    forum: 'Trial court, Civil Court, Kaiserbagh',
    body: [
      'Trial before the designated court at the Civil Court, Kaiserbagh begins with the prosecution leading evidence through its witnesses, who are cross-examined on behalf of the accused. Electronic records such as CCTV footage, call detail records, and messages require a certificate under Section 63 of the Bharatiya Sakshya Adhiniyam (formerly Section 65B of the Evidence Act) before they can be read in evidence — the absence of this certificate is a common, avoidable ground of objection.',
      'After prosecution evidence closes, the accused is examined under Section 351 BNSS (formerly Section 313 CrPC) to explain incriminating circumstances, followed by any defence evidence the accused chooses to lead. Trial in electronic mode, including evidence by video-conference, is permitted under Section 530 BNSS, and a court may proceed in absentia against a proclaimed offender under Section 356 where the accused has absconded despite process.',
      'Once arguments conclude, Section 258 BNSS directs that judgment in a Sessions trial ordinarily follow within thirty days, extendable to forty-five days for reasons recorded — a timeline that is directory rather than an entitlement either side can enforce. A victim has an independent right to be heard on sentence and on any compromise, which courts are expected to respect.',
    ],
    provisions: ['Section 63, Bharatiya Sakshya Adhiniyam (formerly s.65B Evidence Act)', 'Section 351 BNSS (formerly s.313 CrPC)', 'Section 530 BNSS', 'Section 356 BNSS (formerly s.299 CrPC)', 'Section 258 BNSS'],
    checklist: ['List of prosecution witnesses examined so far', 'Electronic evidence and its certificate', 'Any compromise or settlement discussed'],
  },
  {
    id: 'stage-10',
    title: 'Judgment, Sentence, Appeal & Suspension',
    forum: 'Sessions Court; Allahabad High Court, Lucknow Bench; Supreme Court of India',
    body: [
      'Judgment is pronounced under Section 392 BNSS, followed, on conviction, by a separate hearing on sentence that may consider probation instead of imprisonment for appropriate first offences. A convicted person may appeal under Section 415 BNSS (formerly Section 374 CrPC) — to the Sessions Court against a Magistrate\'s conviction, or to the Allahabad High Court, Lucknow Bench against a Sessions Court conviction — and a victim has an independent right of appeal under Section 413 BNSS against acquittal or inadequate compensation.',
      'Pending appeal, Section 430 BNSS (formerly Section 389 CrPC) allows the appellate court to suspend the sentence and release the appellant on bail; this must be applied for separately and is not automatic merely because an appeal has been filed. Orders that are not independently appealable may still be challenged through a criminal revision under Sections 438–442, and a further appeal from the Lucknow Bench lies to the Supreme Court of India by special leave under Article 136.',
      'Limitation for filing an appeal runs from the date of judgment and must be checked immediately with the certified copy obtained from the Copying Section of the court concerned; do not assume a standard number of days without confirming the applicable provision for the specific order and forum.',
    ],
    provisions: ['Section 392 BNSS', 'Section 415 BNSS (formerly s.374 CrPC)', 'Section 413 BNSS', 'Section 430 BNSS (formerly s.389 CrPC)', 'Sections 438–442 BNSS (revision)', 'Article 136, Constitution of India'],
    checklist: ['Certified copy of the judgment', 'Sentencing order and any probation report', 'Limitation date for filing the appeal'],
  },
]

export const criminalToc: GuideTocItem[] = [
  { id: 'criminal-team', label: 'Our Team' },
  { id: 'forums', label: 'Criminal Courts in Lucknow' },
  { id: 'statutory-framework', label: 'Statutory Framework: BNS, BNSS, BSA' },
  {
    id: 'criminal-procedure',
    label: 'Criminal Case Procedure: Stage 1 to Stage 10',
    children: criminalStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })),
  },
  { id: 'matters', label: 'Criminal Matters We Handle' },
  { id: 'documents', label: 'Documents to Bring' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Speak to a Criminal Lawyer in Lucknow' },
]

export const criminalStatutes: StatuteRow[] = [
  {
    law: 'Bharatiya Nyaya Sanhita, 2023 (BNS), replacing the IPC',
    provisions: 's.85–86 (cruelty by husband/relatives, formerly 498A IPC), s.318 (cheating, formerly 420), s.316 (criminal breach of trust, formerly 406)',
    relevance: 'Decides what offence the FIR alleges, whether it is cognizable/bailable, and the maximum punishment, which drives arrest and bail strategy.',
  },
  {
    law: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), replacing the CrPC',
    provisions: 's.35, 47, 48, 58, 173, 175(3), 187, 193, 250–251, 258, 351, 415, 430, 438–442, 479–483, 528',
    relevance: 'Procedure from FIR to appeal before the Lucknow Magistrate and Sessions Courts and the Lucknow Bench.',
  },
  {
    law: 'Bharatiya Sakshya Adhiniyam, 2023 (BSA), replacing the Evidence Act',
    provisions: 's.63 (electronic records certificate, formerly s.65B)',
    relevance: 'Admissibility of CCTV, call records, WhatsApp chats and other digital evidence at trial.',
  },
  {
    law: 'Constitution of India',
    provisions: 'Art. 21, Art. 22, Art. 226, Art. 227, Art. 136',
    relevance: 'Liberty, arrest safeguards, writ petitions to quash FIRs at the Lucknow Bench, and SLP to the Supreme Court.',
  },
  {
    law: 'Negotiable Instruments Act, 1881',
    provisions: 's.138, 141, 142, 143A, 148',
    relevance: 'Cheque-bounce complaints in Lucknow Magistrate courts; interim compensation; deposit on appeal.',
  },
  {
    law: 'Special statutes',
    provisions: 'NDPS Act 1985, POCSO Act 2012, SC/ST (PoA) Act 1989, Prevention of Corruption Act 1988, IT Act 2000, Dowry Prohibition Act 1961, UP Gangsters Act 1986',
    relevance: 'Trials before designated Special Courts at the Civil Court, Lucknow, with special bail conditions.',
  },
]
