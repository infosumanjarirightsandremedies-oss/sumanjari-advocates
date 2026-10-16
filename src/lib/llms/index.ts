// Shared by /llms.txt, /llms-full.txt, and /llms/<area>.txt.
import { FIRM_EMAIL, officeLabels, teamMembers } from '@/lib/team'

export const SITE_URL = 'https://www.sumanjariadvocates.com'

export function markdownText(value: string): string {
  return value.replace(/\s+/g, ' ').replace(/[\\[\]]/g, '\\$&').trim()
}

export const FIRM_SUMMARY =
  'Sumanjari & Co. Advocates is a second-generation law firm with over 50 years of legal experience and more than 1,000 cases handled, practising before the Allahabad High Court, Lucknow Bench (Chamber Block D-311), serving clients across Lucknow, Kanpur, Ayodhya, Prayagraj, and Uttar Pradesh. The firm also handles RERA builder-buyer disputes and DRT bank recovery matters for clients in Noida, Ghaziabad, and Greater Noida.'

export const PRACTICE_AREAS =
  'Practice areas: civil, criminal, cyber crime & IT Act, family & matrimonial, property & land, rent & tenancy, tax & revenue, service & employment, consumer & motor accident, company & corporate, constitutional & writ, drafting & legal opinions, RERA, banking & recovery (DRT), armed forces tribunal (AFT), and mining matters.'

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
  '- Legacy: Second-generation law firm with over 50 years of legal experience',
  '- Track record: More than 1,000 cases handled',
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
    path: '/services/civil-advocate',
    title: 'Civil Advocate & Lawyer',
    description: 'Recovery suits, injunctions, property disputes, and civil appeals, led by Adv. Jitendra Tiwari.',
  },
  {
    path: '/services/criminal-lawyer',
    title: 'Criminal Lawyer',
    description: 'Bail, anticipatory bail, FIR quashing, trial defence, and criminal appeals.',
  },
  {
    path: '/services/cyber-crime-lawyer',
    title: 'Cyber Crime Lawyer & Advocate',
    description:
      'Cyber crime complaints, IT Act prosecution and defence, bank account freeze/unfreeze, cyber fraud bail, and sextortion cases.',
  },
  {
    path: '/services/family-advocate',
    title: 'Family Advocate & Lawyer',
    description: 'Divorce, child custody, maintenance, and domestic violence matters, led by Adv. Aishwarya Pandey.',
  },
  {
    path: '/services/divorce-lawyer',
    title: 'Divorce Advocate & Lawyer',
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
    path: '/services/property-land-matters',
    title: 'Property & Land Matters',
    description:
      'Title verification, partition suits, possession and boundary disputes, mutation, benami property, and land acquisition compensation.',
  },
  {
    path: '/services/rera-lawyer',
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
    path: '/services/service-advocate',
    title: 'Service Advocate & Lawyer',
    description:
      'Departmental inquiries, wrongful termination, promotion and seniority disputes, pension matters, and POSH Act proceedings.',
  },
  {
    path: '/services/tax-revenue-advocate',
    title: 'Tax & Revenue Advocate and Lawyer',
    description:
      'Stamp duty and registration, property tax, circle rate valuation, income tax, and GST disputes, led by Adv. Jitendra Tiwari.',
  },
  {
    path: '/services/company-corporate-matters',
    title: 'Company & Corporate Matters',
    description:
      'Company and LLP compliance, shareholder and partnership disputes, and corporate litigation before the NCLT and Commercial Courts.',
  },
  {
    path: '/services/constitutional-writ-matters',
    title: 'Constitutional & Writ Matters',
    description: 'Writ petitions under Article 226, Public Interest Litigation, and fundamental rights matters.',
  },
  {
    path: '/services/consumer-motor-accident-matters',
    title: 'Consumer & Motor Accident Matters',
    description: 'Consumer forum complaints, motor accident compensation claims, and insurance disputes.',
  },
  {
    path: '/services/banking-recovery-matters',
    title: 'Banking & Recovery Matters',
    description: 'DRT, SARFAESI, and bank recovery matters for banks, borrowers, and guarantors, led by Adv. Jitendra Tiwari.',
  },
]

export const PAGE_LINKS: LlmsLink[] = [
  { path: '/', title: 'Home', description: 'Firm overview, practice areas, team, and contact.' },
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
  { slug: 'civil-matters', title: 'Civil Matters', servicePaths: ['/services/civil-advocate'], categories: ['Civil Matters'] },
  { slug: 'criminal-matters', title: 'Criminal Matters', servicePaths: ['/services/criminal-lawyer'], categories: ['Criminal Matters'] },
  { slug: 'cyber-crime', title: 'Cyber Crime Matters', servicePaths: ['/services/cyber-crime-lawyer'], categories: ['Cyber Crime Matters'] },
  {
    slug: 'family-matrimonial',
    title: 'Family, Matrimonial & Divorce Matters',
    servicePaths: ['/services/family-advocate', '/services/divorce-lawyer'],
    categories: ['Family & Matrimonial Matters'],
  },
  { slug: 'nri-legal-services', title: 'NRI Legal Services', servicePaths: ['/services/nri-lawyer'], categories: [] },
  {
    slug: 'property-land',
    title: 'Property & Land Matters',
    servicePaths: ['/services/property-land-matters'],
    categories: ['Property & Land Matters'],
  },
  {
    slug: 'rera',
    title: 'RERA & Real Estate Matters',
    servicePaths: ['/services/rera-lawyer', '/services/rera-lawyer-noida-ghaziabad'],
    categories: ['RERA'],
  },
  {
    slug: 'service-employment',
    title: 'Service & Employment Matters',
    servicePaths: ['/services/service-advocate'],
    categories: ['Service & Employment Matters'],
  },
  {
    slug: 'tax-revenue',
    title: 'Tax & Revenue Matters',
    servicePaths: ['/services/tax-revenue-advocate'],
    categories: ['Tax & Revenue Matters'],
  },
  {
    slug: 'company-corporate',
    title: 'Company & Corporate Matters',
    servicePaths: ['/services/company-corporate-matters'],
    categories: ['Company & Corporate Matters'],
  },
  {
    slug: 'constitutional-writ',
    title: 'Constitutional & Writ Matters',
    servicePaths: ['/services/constitutional-writ-matters'],
    categories: ['Constitutional & Writ Matters'],
  },
  {
    slug: 'consumer-motor-accident',
    title: 'Consumer & Motor Accident Matters',
    servicePaths: ['/services/consumer-motor-accident-matters'],
    categories: ['Consumer & Motor Accident Matters'],
  },
  {
    slug: 'banking-recovery',
    title: 'Banking & Recovery Matters',
    servicePaths: ['/services/banking-recovery-matters'],
    categories: ['Banking & Recovery Matters'],
  },
]

export function practiceAreaGuideUrl(guide: PracticeAreaGuide): string {
  return `${SITE_URL}/llms/${guide.slug}.txt`
}
