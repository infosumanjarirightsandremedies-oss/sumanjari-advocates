import { getBlogPosts } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const revalidate = 604800 // 7 days; the sheet trigger invalidates on demand

function markdownText(value: string): string {
  return value.replace(/\s+/g, ' ').replace(/[\\[\]]/g, '\\$&').trim()
}

export async function GET() {
  const posts = await getBlogPosts()
  const sortedPosts = [...new Map(posts.map((post) => [post.slug, post])).values()].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  const blogSection =
    sortedPosts.length > 0
      ? [
          '',
          '## Blog',
          '',
          `Legal articles and insights, updated regularly: ${SITE_URL}/blog`,
          '',
          ...sortedPosts.map(
            (post) =>
              `- [${markdownText(post.title)}](${SITE_URL}/blog/${encodeURIComponent(post.slug)}): ${markdownText(post.category)}. ${markdownText(post.excerpt)}`
          ),
        ].join('\n')
      : ''

  const teamSection = teamMembers.map((member) =>
    `- [${markdownText(member.name)}](${SITE_URL}/team/${encodeURIComponent(member.slug)}): ${markdownText(member.role)} in ${markdownText(member.location)}. Practice areas: ${member.expertise.map(markdownText).join(', ')}.`
  ).join('\n')

  const body = `# Sumanjari & Co. Advocates

> Sumanjari & Co. Advocates is a law firm practising before the Allahabad High Court, Lucknow Bench (Chamber Block D-311), serving clients across Lucknow, Kanpur, Ayodhya, Prayagraj, and Uttar Pradesh. The firm also handles RERA builder-buyer disputes and DRT bank recovery matters for clients in Noida, Ghaziabad, and Greater Noida.

Practice areas: civil, criminal, cyber crime & IT Act, family & matrimonial, property & land, rent & tenancy, tax & revenue, service & employment, consumer & motor accident, company & corporate, constitutional & writ, drafting & legal opinions, RERA, banking & recovery (DRT), armed forces tribunal (AFT), and mining matters.

This directory describes the firm's published services and advocate profiles. Articles are general legal information, not legal advice; their publication dates and cited law should be checked before relying on them. An advocate's individual practice areas are listed on their profile. No case outcome is guaranteed.

## Contact and Location

- [Contact the Firm](${SITE_URL}/#contact): Consultation enquiries and office contact details.
- Phone: +91-83024-71764.
- Email: info.sumanjarirightsandremedies@gmail.com.
- Lucknow chamber: Block D-311, Allahabad High Court, Lucknow Bench.
- [XML Sitemap](${SITE_URL}/sitemap.xml): Index of public page and article URLs.

## Services

- [Civil Advocate & Lawyer](${SITE_URL}/services/civil-advocate): Recovery suits, injunctions, property disputes, and civil appeals, led by Adv. Jitendra Tiwari.
- [Criminal Lawyer](${SITE_URL}/services/criminal-lawyer): Bail, anticipatory bail, FIR quashing, trial defence, and criminal appeals.
- [Cyber Crime Lawyer & Advocate](${SITE_URL}/services/cyber-crime-lawyer): Cyber crime complaints, IT Act prosecution and defence, bank account freeze/unfreeze, cyber fraud bail, and sextortion cases.
- [Family Advocate & Lawyer](${SITE_URL}/services/family-advocate): Divorce, child custody, maintenance, and domestic violence matters, led by Adv. Aishwarya Pandey.
- [Divorce Advocate & Lawyer](${SITE_URL}/services/divorce-lawyer): Mutual consent and contested divorce, maintenance, alimony, and custody, led by Adv. Aishwarya Pandey.
- [NRI Legal Services](${SITE_URL}/services/nri-lawyer): Property, inheritance, powers of attorney, family disputes, and litigation in India for NRIs, led by Adv. Aishwarya Pandey.
- [Property & Land Matters](${SITE_URL}/services/property-land-matters): Title verification, partition suits, possession and boundary disputes, mutation, benami property, and land acquisition compensation.
- [RERA Advocate & Real Estate Lawyer](${SITE_URL}/services/rera-lawyer): Builder-buyer disputes, possession delays, refunds, and appeals before UP-RERA and the Appellate Tribunal.
- [RERA Advocate in Noida & Ghaziabad](${SITE_URL}/services/rera-lawyer-noida-ghaziabad): Builder-buyer disputes, delayed possession, refund claims, and project compliance for Noida and Ghaziabad projects.
- [Service Advocate & Lawyer](${SITE_URL}/services/service-advocate): Departmental inquiries, wrongful termination, promotion and seniority disputes, pension matters, and POSH Act proceedings.
- [Tax & Revenue Advocate and Lawyer](${SITE_URL}/services/tax-revenue-advocate): Stamp duty and registration, property tax, circle rate valuation, income tax, and GST disputes, led by Adv. Jitendra Tiwari.
- [Company & Corporate Matters](${SITE_URL}/services/company-corporate-matters): Company and LLP compliance, shareholder and partnership disputes, and corporate litigation before the NCLT and Commercial Courts.
- [Constitutional & Writ Matters](${SITE_URL}/services/constitutional-writ-matters): Writ petitions under Article 226, Public Interest Litigation, and fundamental rights matters.
- [Consumer & Motor Accident Matters](${SITE_URL}/services/consumer-motor-accident-matters): Consumer forum complaints, motor accident compensation claims, and insurance disputes.
- [Banking & Recovery Matters](${SITE_URL}/services/banking-recovery-matters): DRT, SARFAESI, and bank recovery matters for banks, borrowers, and guarantors, led by Adv. Jitendra Tiwari.

## Pages

- [Home](${SITE_URL}/): Firm overview, practice areas, team, and contact.
- [Blog](${SITE_URL}/blog): Legal articles and insights across all practice areas.
- [Our Journey](${SITE_URL}/our-journey): The story behind the firm's name and guiding values.
- [Publications](${SITE_URL}/publications): Research articles, theses, and legal writing.
- [Internship](${SITE_URL}/internship): Internship programme details and application.
- [Team Directory](${SITE_URL}/team): Advocates, offices, and individual practice areas.

## Advocates

${teamSection}
${blogSection}`

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
