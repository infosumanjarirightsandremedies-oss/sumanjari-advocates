import type { GuideStage, GuideTocItem, StatuteRow } from './types'

export const drtLucknowStages: GuideStage[] = [
  {
    id: 'drt-stage-npa-audit',
    title: 'Audit of NPA Classification & Section 13(2) 60-Day Demand Notice',
    forum: 'Chamber consultation and representation before the secured creditor and its authorised officer',
    body: [
      'We begin by auditing the NPA classification itself — whether the account crossed the 90-day default threshold under the RBI Master Directions, whether interest and penal charges were computed correctly, and whether the Section 13(2) SARFAESI demand notice accurately states the secured debt. A defective classification or an inflated demand weakens every enforcement step that follows.',
      'Within the 60-day notice window, we draft the mandatory Section 13(3A) representation raising specific, document-supported objections — undervaluation of the secured asset, incorrect interest-rate application, or breach of RBI MSME restructuring guidelines — and press for the speaking order the statute requires the creditor to issue. Proof of dispatch and the creditor\'s response are preserved for the DRT record.',
    ],
    provisions: ['SARFAESI Act, 2002: sections 13(2) and 13(3A)', 'RBI Master Directions on NPA classification and MSME restructuring'],
  },
  {
    id: 'drt-stage-possession',
    title: 'Challenging Section 13(4) Symbolic Possession & Section 14 DM/ACMM Physical Possession Orders',
    forum: 'Authorised officer of the secured creditor; District Magistrate or ACMM for Section 14 assistance',
    body: [
      'Once the creditor moves to Section 13(4) — symbolic possession, takeover of management, or appointment of a receiver — each measure is examined against the statutory preconditions and the actual record. Symbolic possession that is not validly taken or published cannot found a lawful auction.',
      'Where the creditor seeks Section 14 assistance from the District Magistrate or ACMM for physical possession, we scrutinise the application for compliance with the 9-point mandatory affidavit requirements and challenge defective or premature assistance orders. Agricultural land exempt under Section 31(i) is identified at this stage, since SARFAESI cannot be invoked against it at all.',
    ],
    provisions: ['SARFAESI Act, 2002: sections 13(4), 14 and 31(i)'],
  },
  {
    id: 'drt-stage-sa',
    title: 'Filing Securitisation Application (SA) under Section 17 before DRT Lucknow',
    forum: 'Debts Recovery Tribunal, Lucknow (University Road, Babuganj, Hasanganj)',
    body: [
      'Any person aggrieved by a Section 13(4) measure must file the Securitisation Application before the DRT within the strict 45-day statutory window. We identify the challenged measure precisely, calculate limitation from the correct trigger date, and plead each defect — in the demand, possession, or sale process — with supporting documents.',
      'Where eviction or auction is imminent, the SA is accompanied by a reasoned interim application seeking a stay of coercive steps, with full disclosure of earlier proceedings and any conditional deposit the Tribunal may direct. Filing alone does not stay enforcement; the protection depends on the Tribunal\'s order.',
    ],
    provisions: ['SARFAESI Act, 2002: section 17', 'Limitation computed from the challenged Section 13(4) measure'],
  },
  {
    id: 'drt-stage-auction',
    title: 'Defending E-Auction Notices under Rules 8(6) & 9(1) of the Security Interest (Enforcement) Rules, 2002',
    forum: 'Authorised officer and e-auction platform; DRT Lucknow for interim protection',
    body: [
      'Auction of an immovable secured asset is tested rule by rule: the 30-day clear notice under Rule 8(6) before the first sale, the 15-day notice to the borrower under Rule 9(1), publication requirements, and the reserve price fixed on proper valuation. Short notice, defective service or an undervalued reserve price are recognised grounds to challenge the sale.',
      'We also advise on the borrower\'s right of redemption under Section 13(8) — recalibrated after the Supreme Court\'s decision in Celir LLP v. Bafna Motors — and on applications to set aside a completed sale where the Rules were breached. Auction dates move fast; the notice and its delivery record should reach counsel immediately.',
    ],
    provisions: ['Security Interest (Enforcement) Rules, 2002: rules 8(6) and 9(1)', 'SARFAESI Act, 2002: section 13(8)'],
  },
  {
    id: 'drt-stage-oa',
    title: 'Contesting Original Applications under Section 19 RDB Act & Borrower Counter-Claims',
    forum: 'Debts Recovery Tribunal, Lucknow, for claims of ₹20 lakh and above',
    body: [
      'Where a bank or financial institution files an Original Application under Section 19 of the Recovery of Debts and Bankruptcy Act, 1993 for a debt of ₹20 lakh or more, we examine standing, the debt computation, limitation and the security documents before drafting the defence.',
      'The defence uses the full statutory toolkit — the written statement, set-off and counter-claim under Sections 19(6) to 19(8), including borrower counter-claims for wrongful debits, penal interest or misapplied payments. After a recovery certificate, execution before the Recovery Officer under Sections 25 to 28 is contested within its own statutory framework.',
    ],
    provisions: ['RDB Act, 1993: sections 19, 19(6)-(8), 20 and 25-28'],
  },
  {
    id: 'drt-stage-appeal-drat',
    title: 'DRAT Allahabad Appeals & Writs before the Allahabad High Court, Lucknow Bench',
    forum: 'Debts Recovery Appellate Tribunal, Allahabad; Allahabad High Court, Lucknow Bench (Chamber D-311)',
    body: [
      'Appeals against DRT orders lie to DRAT Allahabad — under Section 18 of the SARFAESI Act or Section 20 of the RDB Act, depending on the originating statute. The borrower\'s SARFAESI appeal carries a 50% pre-deposit, which the DRAT may reduce to 25% on a reasoned hardship waiver application; the RDB route has its own deposit conditions.',
      'Where a statutory remedy is inadequate — an order passed without jurisdiction or in breach of natural justice, or RBI-mandated hearing requirements ignored before wilful-defaulter or fraud classification — we carry the matter by writ petition under Articles 226 and 227 before the Allahabad High Court, Lucknow Bench, from our chambers at D-311.',
    ],
    provisions: ['SARFAESI Act, 2002: section 18 (50%/25% pre-deposit)', 'RDB Act, 1993: sections 20 and 21', 'Constitution of India: Articles 226 and 227', 'State Bank of India v. Rajesh Agarwal (natural justice before classification)'],
  },
]

export const drtLucknowStatutes: StatuteRow[] = [
  {
    law: 'SARFAESI Act, 2002',
    provisions: 's.13(2) 60-day demand notice; s.13(3A) objection & speaking order; s.13(4) symbolic/physical possession & auction; s.14 DM/ACMM physical possession assistance; s.17 Securitisation Application within 45 days before DRT Lucknow; s.18 appeal to DRAT Allahabad with 50%/25% pre-deposit; s.31(i) agricultural land exemption',
    relevance: 'The complete secured-asset enforcement and defence track for banks, borrowers and guarantors.',
  },
  {
    law: 'Recovery of Debts and Bankruptcy Act, 1993',
    provisions: 's.19 Original Application by banks for debts ≥ ₹20 lakh; s.19(6)–(8) written statement, set-off and counter-claim; s.20 appeal to DRAT; s.25–28 Recovery Officer execution',
    relevance: 'Lender recovery claims, borrower defences and certificate execution before DRT Lucknow.',
  },
  {
    law: 'Security Interest (Enforcement) Rules, 2002',
    provisions: 'Rule 8(6) 30-day clear auction notice; Rule 9(1) 15-day notice to borrower; reserve-price valuation requirements',
    relevance: 'Grounds to challenge a bank e-auction for short notice, defective service or an undervalued reserve price.',
  },
  {
    law: 'RBI Master Directions',
    provisions: '90-day NPA classification norms; natural justice required before wilful defaulter / fraud classification (State Bank of India v. Rajesh Agarwal)',
    relevance: 'Grounds to audit the NPA classification and challenge a punitive classification preceding enforcement.',
  },
  {
    law: 'Constitution of India',
    provisions: 'Articles 226 & 227',
    relevance: 'Writ-C jurisdiction before the Allahabad High Court, Lucknow Bench (Chamber D-311) where tribunal remedies are inadequate.',
  },
]

export const drtLucknowToc: GuideTocItem[] = [
  { id: 'drt-team', label: 'Our Team' },
  { id: 'lucknow-chambers', label: 'Our Lucknow Chambers' },
  { id: 'choosing-an-advocate', label: 'Choosing a Lawyer or Advocate' },
  { id: 'drt-triage', label: 'Facing an imminent auction or eviction?' },
  { id: 'drt-entity', label: 'DRT Lucknow & DRAT Allahabad — forum details' },
  { id: 'drt-overview', label: 'DRT & SARFAESI practice' },
  { id: 'drt-documents', label: 'Documents for the first consultation' },
  { id: 'drt-statutes', label: 'Statutory framework' },
  { id: 'drt-matters', label: 'The technical defense toolkit' },
  { id: 'drt-forums', label: 'Competent forums' },
  {
    id: 'drt-procedure',
    label: 'DRT / SARFAESI case: Stage 1 to Stage 6',
    children: drtLucknowStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })),
  },
  { id: 'drt-faqs', label: 'Frequently asked questions' },
  { id: 'drt-faqs-hindi', label: 'FAQs in Hindi / Hinglish' },
  { id: 'drt-official-resources', label: 'Official resources' },
]

export const drtLucknowFaqs = [
  {
    question: 'When should I contact a DRT lawyer in Lucknow?',
    answer: 'Seek advice as soon as you receive a Section 13(2) demand notice, a possession notice, an auction notice, or a DRT summons. Bring the notice and its date of receipt so counsel can identify the appropriate forum, response and deadline. Do not wait for an auction date to obtain advice.',
  },
  {
    question: 'What is the minimum debt for a bank recovery claim before the DRT?',
    answer: 'The notified pecuniary threshold for recovery applications by banks and financial institutions under the Recovery of Debts and Bankruptcy Act, 1993 is ₹20 lakh. This is not a blanket minimum for a borrower’s Section 17 SARFAESI application. Smaller recovery claims may require civil proceedings or another applicable remedy, depending on the creditor and transaction.',
  },
  {
    question: 'Can I challenge a Section 13(2) SARFAESI demand notice?',
    answer: 'A Section 13(2) demand notice gives the borrower 60 days to discharge the stated liability. A borrower can submit a representation or objection under Section 13(3A), supported by account records and relevant documents. A demand notice alone ordinarily does not trigger the Section 17 remedy; that remedy concerns measures under Section 13(4). The correct response depends on the stage and facts.',
  },
  {
    question: 'What is the time limit for a Section 17 SARFAESI application?',
    answer: 'A person aggrieved by a measure under Section 13(4) may apply to the competent DRT under Section 17 within 45 days from the date the measure was taken. Preserve possession and sale notices and seek advice promptly. Identifying the challenged measure and calculating limitation require review of the actual record.',
  },
  {
    question: 'Can a DRT lawyer help challenge a bank property auction?',
    answer: 'Counsel can examine the possession and sale notices, service, valuation, reserve price and compliance with the Security Interest (Enforcement) Rules, 2002. Where grounds exist, an application can seek appropriate relief, including interim protection. Filing a case or requesting a settlement does not automatically stay possession or an auction; relief depends on the Tribunal’s order.',
  },
  {
    question: 'Which DRT bench should hear my Lucknow or Uttar Pradesh matter?',
    answer: 'The correct tribunal depends on the applicable territorial notifications and the statutory jurisdiction rules, including the relevant branch, secured asset and cause of action. Confirm the current bench allocation for Lucknow, Kanpur, Unnao, Hardoi, Sitapur, Ayodhya, Gorakhpur, Varanasi, Agra or any other district before filing. The official DRT portal provides tribunal details, cause lists and case-status information.',
  },
  {
    question: 'Is a deposit required for a SARFAESI appeal before the DRAT?',
    answer: 'A Section 18 appeal is ordinarily filed within 30 days of receipt of the DRT order. For a borrower, the statutory pre-deposit is 50% of the debt claimed by the secured creditor or determined by the DRT, whichever is less. The DRAT may reduce this to not less than 25%, with reasons recorded in writing. This appeal requirement is distinct from an initial Section 17 application.',
  },
  {
    question: 'Can a guarantor defend bank recovery or SARFAESI proceedings?',
    answer: 'A guarantor can obtain advice on the guarantee terms, invocation, claimed amount, limitation and the security being enforced. A creditor need not invariably exhaust remedies against the principal borrower first. Any defence or settlement strategy must be based on the guarantee and the surrounding records, rather than an assumption that guarantors cannot be pursued.',
  },
]

export type DrtBilingualFaq = { questionHinglish: string; question: string; answer: string }

// Hindi / Hinglish accordion for colloquial and voice search queries. General
// legal information only — the stage, forum and relief still depend on the
// actual notice and record in a given matter.
export const drtLucknowBilingualFaqs: DrtBilingualFaq[] = [
  {
    questionHinglish: 'E-Auction ko turant rokne ke liye kya kanuni vikalp hain?',
    question: 'बैंक की नीलामी (E-Auction) को तुरंत रोकने के लिए क्या कानूनी विकल्प हैं?',
    answer:
      'यदि बैंक ने आपकी बंधक (mortgaged) संपत्ति की ई-नीलामी का नोटिस जारी किया है, तो सरफेसी एक्ट (SARFAESI Act) की धारा 17 के तहत डीआरटी (DRT) लखनऊ में \'सिक्योरिटाइजेशन एप्लीकेशन\' (SA) दायर कर अंतरिम स्थगन (stay) की मांग की जा सकती है। यदि बैंक ने नियम 8(6) के 30-दिवसीय स्पष्ट नोटिस या उचित वैल्यूएशन का पालन नहीं किया है, तो नीलामी को चुनौती दी जा सकती है। स्थगन स्वतः नहीं मिलता — यह ट्रिब्यूनल के आदेश पर निर्भर करता है।',
  },
  {
    questionHinglish: 'Bank ka Section 13(2) notice aaya hai, kya property turant seal ho jayegi?',
    question: 'Bank ka Section 13(2) notice aaya hai, kya property turant seal ho jayegi?',
    answer:
      'नहीं, Section 13(2) केवल 60 दिनों का डिमांड नोटिस होता है। इस दौरान बैंक संपत्ति को सील या नीलाम नहीं कर सकता। कर्जदार के पास धारा 13(3A) के तहत अपनी लिखित आपत्ति (representation) दर्ज करने का अधिकार होता है, जिसका जवाब बैंक को एक रीज़न्ड स्पीकिंग ऑर्डर द्वारा देना अनिवार्य है।',
  },
  {
    questionHinglish: 'Kya DM ya Collector court se physical possession lene par stay mil sakta hai?',
    question: 'Kya DM ya Collector court se physical possession lene par stay mil sakta hai?',
    answer:
      'जी हाँ, यह संभव है। बैंक डीएम (District Magistrate) या एसीएमएम के समक्ष धारा 14 के तहत आवेदन करता है। यदि बैंक का 9-पॉइंट शपथ पत्र (affidavit) दोषपूर्ण है या संपत्ति कृषि भूमि (Section 31(i)) है, तो डीएम के आदेश के खिलाफ डीआरटी लखनऊ या इलाहाबाद उच्च न्यायालय (लखनऊ बेंच) से स्थगन प्राप्त किया जा सकता है।',
  },
  {
    questionHinglish: 'DRT Lucknow mein case file karne ki time limit kya hoti hai?',
    question: 'DRT Lucknow mein case file karne ki time limit kya hoti hai?',
    answer:
      'सरफेसी अधिनियम की धारा 13(4) (प्रतीकात्मक कब्जा या नीलामी नोटिस) की कार्रवाई के 45 दिनों के भीतर DRT लखनऊ में आवेदन (Section 17 SA) दाखिल करना अनिवार्य होता है। 45 दिन बीत जाने के बाद मामला कालबाधित (time-barred) हो सकता है — इसलिए नोटिस मिलते ही सलाह लें।',
  },
  {
    questionHinglish: 'DRAT Allahabad mein appeal karne ke liye kitna pre-deposit dena padta hai?',
    question: 'DRAT Allahabad mein appeal karne ke liye kitna pre-deposit dena padta hai?',
    answer:
      'धारा 18 की अपील में कर्जदार को सामान्यतः देय राशि का 50% जमा करना होता है, जिसे डीआरएटी उचित कारण होने पर घटाकर 25% तक कर सकता है। यह राशि डीआरटी के समक्ष प्रारंभिक सेक्शन 17 आवेदन से अलग है।',
  },
]
