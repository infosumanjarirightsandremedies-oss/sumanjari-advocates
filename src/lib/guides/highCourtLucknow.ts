import type { GuideStage, GuideTocItem } from '@/lib/guides/types'

export const highCourtStages: GuideStage[] = [
  {
    id: 'hc-stage-1',
    title: 'Case Papers & Certified Copies',
    forum: 'Lower court or authority whose order is under challenge',
    body: [
      'Every High Court filing rests on the record of the proceedings below — the impugned order, the pleadings, and any annexures relied upon. We start by identifying what the lower court, tribunal, or authority actually decided, and obtaining a certified copy of the order, since an uncertified or incomplete copy is a common ground for a defect memo at the filing counter.',
      'Where the challenge concerns inaction rather than an order — for example, a department that has not decided a representation — we assess whether a representation and a reasonable waiting period should precede the writ, or whether the delay itself justifies moving directly to the Lucknow Bench.',
    ],
    provisions: ['Certified copy requirement, High Court Rules'],
    checklist: ['Certified copy of the impugned order', 'Complete pleadings and annexures from the court below', 'Any representation made to the authority and its response'],
  },
  {
    id: 'hc-stage-2',
    title: 'Drafting the Petition or Appeal & Affidavit',
    forum: 'Chamber drafting; Allahabad High Court, Lucknow Bench',
    body: [
      'The petition or appeal is drafted to set out the facts, the grounds of challenge, and the relief sought, supported by a sworn affidavit. For a writ petition under Article 226, the grounds must engage a recognised basis for interference — violation of fundamental rights, want of jurisdiction, or a decision vitiated by an error apparent on the face of the record — since the writ jurisdiction is not an ordinary avenue of appeal against every unfavourable order.',
      'For a first appeal, second appeal, or revision arising from a Lucknow civil or criminal court, the memorandum of appeal must identify the specific findings challenged, and, for a second appeal, the substantial question of law framed for the Bench\'s consideration.',
    ],
    provisions: ['Article 226, Constitution of India', 'Section 100, Code of Civil Procedure, 1908 (second appeal)'],
    checklist: ['Draft petition or memorandum of appeal', 'Supporting affidavit', 'List of grounds and the relief sought'],
  },
  {
    id: 'hc-stage-3',
    title: 'E-Filing, Filing Counter & Stamp Reporting',
    forum: 'Allahabad High Court, Lucknow Bench, Gomti Nagar',
    body: [
      'Filing can be made at the filing counter at the Lucknow Bench or through the High Court\'s e-filing facility. After filing, the case goes through stamp reporting, where the registry checks court fee, limitation, and formal compliance with the Rules of Court; objections raised at this stage are called defects, and they must be cured within the time allowed or the filing risks being treated as never made.',
      'Common defects include an uncertified annexure, an unsigned affidavit, an incorrect cause-title, or a missing index; reviewing the draft against the registry\'s checklist before filing reduces the number of objection rounds.',
    ],
    provisions: ['Rules of the Court, Allahabad High Court'],
    checklist: ['Court fee calculation', 'Properly certified and indexed annexures', 'Vakalatnama and affidavit execution'],
  },
  {
    id: 'hc-stage-4',
    title: 'Listing & the Cause List',
    forum: 'Allahabad High Court, Lucknow Bench',
    body: [
      'Once defects are cured, the case is listed before the appropriate Bench according to its subject-matter roster. Listing and hearing dates are published on the High Court\'s cause list on allahabadhighcourt.in, and tracking the case there is the most reliable way to know the next date; no fixed number of days from filing to first listing can be promised.',
      'Urgent matters — such as a plea for interim protection from arrest, or a stay of imminent dispossession — can be mentioned for early listing before the relevant Bench, subject to the court\'s practice directions in force at the time.',
    ],
    provisions: ['Cause list practice, Allahabad High Court'],
    checklist: ['Case number and Bench once allotted', 'Urgency, if any, to be mentioned for early listing'],
  },
  {
    id: 'hc-stage-5',
    title: 'Admission, Notice & Interim Orders',
    forum: 'Allahabad High Court, Lucknow Bench',
    body: [
      'At the first substantive hearing, the court may admit the petition and issue notice to the respondents, or dismiss it at the threshold if it does not disclose a maintainable case. Interim relief — such as a stay of the impugned order, or protection from coercive action — can be sought at this stage, though it is granted only where the applicant shows a prima facie case and that the balance of convenience favours interim protection.',
      'For writ petitions seeking to quash a criminal proceeding or restrain arrest, the standards discussed in our criminal law guide at Stage 3 and Stage 7 apply; for civil appeals, the standards for interim relief discussed at Stage 4 of our civil law guide apply.',
    ],
    provisions: ['Order on admission and interim relief, High Court practice'],
    checklist: ['Grounds for interim relief, if sought', 'Respondents to be served with notice'],
  },
  {
    id: 'hc-stage-6',
    title: 'Counter Affidavit, Rejoinder & Supplementary Pleadings',
    forum: 'Allahabad High Court, Lucknow Bench',
    body: [
      'Once notice is issued, the respondents file a counter affidavit answering the allegations, to which the petitioner may file a rejoinder. Supplementary affidavits can be filed with the court\'s leave where developments after the original filing are relevant — for example, a fresh order passed while the petition is pending.',
      'In service matters, PIL, and matters involving government departments, this exchange of affidavits often takes the most time, since multiple authorities may need to respond; keeping track of which respondent has or has not filed its counter is important to avoid delay being attributed to the petitioner.',
    ],
    provisions: ['Exchange of pleadings, High Court practice'],
    checklist: ['Counter affidavit(s) received', 'Draft rejoinder, if needed', 'Any supplementary development to be placed on record'],
  },
  {
    id: 'hc-stage-7',
    title: 'Final Hearing & Arguments',
    forum: 'Allahabad High Court, Lucknow Bench',
    body: [
      'At final hearing, both sides argue the case on the pleadings and the record, and the court may call for the original record from the authority or court below where necessary. Video-conference appearance is available in appropriate cases, subject to the court\'s practice directions, which should be confirmed with the registry rather than assumed for a specific matter.',
      'Written submissions are often invited alongside oral arguments, particularly in matters involving multiple respondents or detailed statutory provisions, and should be filed within any timeline the Bench directs.',
    ],
    provisions: ['Final hearing procedure, High Court practice'],
    checklist: ['Written submissions, if directed by the Bench', 'Compilation of case law relied upon', 'Original record, if summoned'],
  },
  {
    id: 'hc-stage-8',
    title: 'Judgment, Certified Copy, Compliance or Further Appeal',
    forum: 'Allahabad High Court, Lucknow Bench; Supreme Court of India (SLP)',
    body: [
      'After judgment, a certified copy should be obtained promptly from the Copying Section, both to enable compliance by the respondent authority and to preserve the option of a further challenge. Where the judgment directs an authority to act — reconsider a representation, release an undertrial, or pass a fresh order — compliance can itself need to be monitored through a contempt petition if it is not honoured within the time directed.',
      'A further challenge against a Division Bench judgment of the Lucknow Bench lies to the Supreme Court of India by special leave under Article 136; limitation for this runs from the date of judgment and should be checked immediately with the certified copy in hand rather than estimated.',
    ],
    provisions: ['Article 136, Constitution of India', 'Contempt of Courts Act, 1971'],
    checklist: ['Certified copy of the judgment', 'Compliance steps required of the authority', 'Limitation date for an SLP, if a further challenge is considered'],
  },
]

export const highCourtToc: GuideTocItem[] = [
  { id: 'hc-team', label: 'Our Team' },
  { id: 'about-bench', label: 'About the Lucknow Bench' },
  { id: 'districts', label: 'Districts Under the Lucknow Bench' },
  { id: 'matters', label: 'Matters We Handle at the Lucknow Bench' },
  {
    id: 'hc-procedure',
    label: 'How a Case Moves at the Lucknow Bench: 8 Steps',
    children: highCourtStages.map((s, i) => ({ id: s.id, label: `Step ${i + 1}: ${s.title}` })),
  },
  { id: 'mediation-legal-aid', label: 'Mediation & Legal Aid at the Lucknow Bench' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Speak to a High Court Lawyer in Lucknow' },
]

// VERIFY: the 16 districts under the Lucknow Bench's jurisdiction
export const lucknowBenchDistricts = [
  'Lucknow', 'Hardoi', 'Lakhimpur Kheri', 'Rae Bareli', 'Sitapur', 'Unnao',
  'Ayodhya (Faizabad)', 'Ambedkar Nagar', 'Bahraich', 'Shravasti', 'Barabanki',
  'Gonda', 'Balrampur', 'Pratapgarh', 'Sultanpur', 'Amethi',
]
