// Shared by /llms.txt, /llms-full.txt, and /llms/<area>.txt.
import { FIRM_EMAIL, officeLabels, teamMembers } from '@/lib/team'
import { FIRM_BACKGROUND, FIRM_CREDENTIALS } from '@/lib/firm'

export const SITE_URL = 'https://www.sumanjariadvocates.com'

export function markdownText(value: string): string {
  return value.replace(/\s+/g, ' ').replace(/[\\[\]]/g, '\\$&').trim()
}

export const FIRM_SUMMARY =
  `Sumanjari & Co. Advocates is ${FIRM_BACKGROUND}, practising before the Allahabad High Court, Lucknow Bench (Chamber Block D-311), serving clients across Lucknow, Kanpur, Ayodhya, Prayagraj, and Uttar Pradesh. The firm also handles RERA builder-buyer disputes and DRT bank recovery matters for clients in Noida, Ghaziabad, and Greater Noida.`

export const PRACTICE_AREAS =
  'Practice areas: civil litigation; criminal law; cyber crime & IT Act matters; family & matrimonial matters; property & land disputes; rent & tenancy matters; tax & revenue matters; service & employment law; consumer disputes; motor accident compensation claims; company & corporate matters; contractual & commercial disputes; constitutional & writ matters; drafting & legal opinions; RERA builder-buyer disputes; banking recovery & Debts Recovery Tribunal (DRT) proceedings; SARFAESI Act matters; cheque bounce & negotiable instruments disputes; NRI legal services; Armed Forces Tribunal (AFT) service disputes; defence personnel pension & benefit claims; mining lease disputes; and mining revenue matters.'

export const CONTENT_NOTICE =
  "Articles are general legal information, not legal advice; their publication dates and cited law should be checked before relying on them. An advocate's individual practice areas are listed on their profile. No case outcome is guaranteed."

export const CONTACT_LINES = [
  `- [Contact the Firm](${SITE_URL}/#contact): Consultation enquiries and office contact details.`,
  '- Phone: +91-83024-71764.',
  '- Email: info.sumanjarirightsandremedies@gmail.com.',
  '- Lucknow chamber: Block D-311, Allahabad High Court, Lucknow Bench.',
]

// Mirrors the LegalService JSON-LD in app/layout.tsx so engines see one consistent entity.
export const KEY_FACTS = [
  '- Name: Sumanjari & Co. Advocates',
  '- Type: Law firm (advocates) in India',
  ...FIRM_CREDENTIALS.map(({ value, label }) => `- ${label}: ${value}`),
  '- Chamber: Chamber No. Block D-311, Allahabad High Court, Lucknow Bench, Lucknow, Uttar Pradesh, India',
  `- Offices: ${Object.values(officeLabels)
    .map((office) => `${office.title} — ${office.subtitle}`)
    .join(' ')}`,
  '- Areas served: Lucknow, Kanpur, Ayodhya, Prayagraj, Sultanpur, Ambedkar Nagar, Noida, Ghaziabad, Greater Noida, Gurugram, Delhi, and across Uttar Pradesh',
  '- Phone: +91-83024-71764',
  `- Email: ${FIRM_EMAIL}`,
  `- Website: ${SITE_URL}`,
  `- Advocates: ${teamMembers.length}`,
].join('\n')

export const BCI_DISCLAIMER =
  'As per the rules of the Bar Council of India, advocates are not permitted to solicit work or advertise. This content is provided for information only and is not solicitation, advertisement, or legal advice; reading it does not create an advocate-client relationship.'

export type LlmsLink = { path: string; title: string; description: string }

export const SERVICE_LINKS: LlmsLink[] = [
  {
    path: '/services/civil-lawyer-lucknow',
    title: 'Civil Lawyer in Lucknow',
    description: 'Recovery suits, injunctions, property disputes, and civil appeals, led by Adv. Jitendra Tiwari.',
  },
  {
    path: '/services/criminal-lawyer-lucknow',
    title: 'Criminal Lawyer in Lucknow',
    description: 'Bail, anticipatory bail, FIR quashing, trial defence, and criminal appeals.',
  },
  {
    path: '/services/cyber-crime-lawyer-lucknow',
    title: 'Cyber Crime Lawyer in Lucknow',
    description:
      'Cyber crime complaints, IT Act prosecution and defence, bank account freeze/unfreeze, cyber fraud bail, and sextortion cases.',
  },
  {
    path: '/services/armed-forces-tribunal-mining-lawyer-lucknow',
    title: 'Armed Forces Tribunal & Mining Lawyer in Lucknow',
    description:
      'Disability and family pension, discharge and court-martial appeals before the AFT, Lucknow Bench, and mining lease, royalty and illegal-mining disputes.',
  },
  {
    path: '/services/family-advocate',
    title: 'Family Advocate & Lawyer',
    description: 'Divorce, child custody, maintenance, and domestic violence matters, led by Adv. Aishwarya Pandey.',
  },
  {
    path: '/services/divorce-lawyer-lucknow',
    title: 'Divorce Lawyer in Lucknow',
    description:
      'Mutual consent and contested divorce, maintenance, alimony, and custody, led by Adv. Aishwarya Pandey.',
  },
  {
    path: '/services/nri-lawyer',
    title: 'NRI Legal Services',
    description:
      'Property, inheritance, powers of attorney, family disputes, and litigation in India for NRIs, led by Adv. Aishwarya Pandey.',
  },
  {
    path: '/services/property-lawyer-lucknow',
    title: 'Property Lawyer in Lucknow',
    description:
      'Title verification, partition suits, possession and boundary disputes, mutation, benami property, and land acquisition compensation.',
  },
  {
    path: '/services/rera-lawyer-lucknow',
    title: 'RERA Advocate & Real Estate Lawyer',
    description: 'Builder-buyer disputes, possession delays, refunds, and appeals before UP-RERA and the Appellate Tribunal.',
  },
  {
    path: '/services/rera-lawyer-noida-ghaziabad',
    title: 'RERA Advocate in Noida & Ghaziabad',
    description:
      'Builder-buyer disputes, delayed possession, refund claims, and project compliance for Noida and Ghaziabad projects.',
  },
  {
    path: '/services/service-lawyer-lucknow',
    title: 'Service Lawyer in Lucknow',
    description:
      'Departmental inquiries, wrongful termination, promotion and seniority disputes, pension matters, and POSH Act proceedings.',
  },
  {
    path: '/services/tax-lawyer-lucknow',
    title: 'Tax Lawyer in Lucknow',
    description:
      'Stamp duty and registration, property tax, circle rate valuation, income tax, and GST disputes, led by Adv. Jitendra Tiwari.',
  },
  {
    path: '/services/company-corporate-lawyer-lucknow',
    title: 'Company & Corporate Matters',
    description:
      'Company and LLP compliance, shareholder and partnership disputes, and corporate litigation before the NCLT and Commercial Courts.',
  },
  {
    path: '/services/constitutional-writ-lawyer-lucknow',
    title: 'Constitutional & Writ Matters',
    description: 'Writ petitions under Article 226, Public Interest Litigation, and fundamental rights matters.',
  },
  {
    path: '/services/consumer-motor-accident-lawyer-lucknow',
    title: 'Consumer & Motor Accident Matters',
    description: 'Consumer forum complaints, motor accident compensation claims, and insurance disputes.',
  },
  {
    path: '/services/banking-recovery-lawyer-lucknow',
    title: 'Banking & Recovery Matters',
    description: 'DRT, SARFAESI, and bank recovery matters for banks, borrowers, and guarantors, led by Adv. Jitendra Tiwari.',
  },
  {
    path: '/services/high-court-lawyer-lucknow',
    title: 'High Court Lawyer in Lucknow (Lucknow Bench)',
    description: 'Writs, bail, Section 528 BNSS quashing, and civil, criminal, and service appeals before the Allahabad High Court, Lucknow Bench.',
  },
]

export const PAGE_LINKS: LlmsLink[] = [
  { path: '/', title: 'Home', description: 'Firm overview, practice areas, team, and contact.' },
  { path: '/law-firm-in-lucknow', title: 'Law Firm in Lucknow', description: 'Firm overview, offices, practice-area directory, and Lucknow team.' },
  { path: '/blog', title: 'Blog', description: 'Legal articles and insights across all practice areas.' },
  { path: '/our-journey', title: 'Our Journey', description: "The story behind the firm's name and guiding values." },
  { path: '/publications', title: 'Publications', description: 'Research articles, theses, and legal writing.' },
  { path: '/internship', title: 'Internship', description: 'Internship programme details and application.' },
  { path: '/team', title: 'Team Directory', description: 'Advocates, offices, and individual practice areas.' },
]

export function linkLine({ path, title, description }: LlmsLink): string {
  return `- [${title}](${SITE_URL}${path}): ${description}`
}

// One /llms/<slug>.txt per practice area, so each stays small enough to be read in full.
export type PracticeAreaGuide = { slug: string; title: string; servicePaths: string[]; categories: string[] }

export const PRACTICE_AREA_GUIDES: PracticeAreaGuide[] = [
  { slug: 'civil-matters', title: 'Civil Matters', servicePaths: ['/services/civil-lawyer-lucknow'], categories: ['Civil Matters'] },
  { slug: 'criminal-matters', title: 'Criminal Matters', servicePaths: ['/services/criminal-lawyer-lucknow'], categories: ['Criminal Matters'] },
  { slug: 'cyber-crime', title: 'Cyber Crime Matters', servicePaths: ['/services/cyber-crime-lawyer-lucknow'], categories: ['Cyber Crime Matters'] },
  {
    slug: 'aft-mining',
    title: 'Armed Forces Tribunal & Mining Matters',
    servicePaths: ['/services/armed-forces-tribunal-mining-lawyer-lucknow'],
    categories: ['Armed Forces Tribunal & Mining Matters'],
  },
  {
    slug: 'family-matrimonial',
    title: 'Family, Matrimonial & Divorce Matters',
    servicePaths: ['/services/family-advocate', '/services/divorce-lawyer-lucknow'],
    categories: ['Family & Matrimonial Matters'],
  },
  { slug: 'nri-legal-services', title: 'NRI Legal Services', servicePaths: ['/services/nri-lawyer'], categories: [] },
  {
    slug: 'property-land',
    title: 'Property & Land Matters',
    servicePaths: ['/services/property-lawyer-lucknow'],
    categories: ['Property & Land Matters'],
  },
  {
    slug: 'rera',
    title: 'RERA & Real Estate Matters',
    servicePaths: ['/services/rera-lawyer-lucknow', '/services/rera-lawyer-noida-ghaziabad'],
    categories: ['RERA'],
  },
  {
    slug: 'service-employment',
    title: 'Service & Employment Matters',
    servicePaths: ['/services/service-lawyer-lucknow'],
    categories: ['Service & Employment Matters'],
  },
  {
    slug: 'tax-revenue',
    title: 'Tax & Revenue Matters',
    servicePaths: ['/services/tax-lawyer-lucknow'],
    categories: ['Tax & Revenue Matters'],
  },
  {
    slug: 'company-corporate',
    title: 'Company & Corporate Matters',
    servicePaths: ['/services/company-corporate-lawyer-lucknow'],
    categories: ['Company & Corporate Matters'],
  },
  {
    slug: 'constitutional-writ',
    title: 'Constitutional & Writ Matters',
    servicePaths: ['/services/constitutional-writ-lawyer-lucknow', '/services/high-court-lawyer-lucknow'],
    categories: ['Constitutional & Writ Matters'],
  },
  {
    slug: 'consumer-motor-accident',
    title: 'Consumer & Motor Accident Matters',
    servicePaths: ['/services/consumer-motor-accident-lawyer-lucknow'],
    categories: ['Consumer & Motor Accident Matters'],
  },
  {
    slug: 'banking-recovery',
    title: 'Banking & Recovery Matters',
    servicePaths: ['/services/banking-recovery-lawyer-lucknow'],
    categories: ['Banking & Recovery Matters'],
  },
]

export function practiceAreaGuideUrl(guide: PracticeAreaGuide): string {
  return `${SITE_URL}/llms/${guide.slug}.txt`
}
