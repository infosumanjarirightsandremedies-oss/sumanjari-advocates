import { getBlogPosts } from '@/lib/blogs'

const SITE_URL = 'https://www.sumanjariadvocates.com'

// LLM crawlers (ChatGPT, Perplexity, Claude, etc.) fetch /llms.txt directly to
// decide what a site is about and which pages to cite — a static file can't
// list posts published after the last deploy. Generating it here from the
// same live blog feed as sitemap.ts keeps new articles visible to AI search
// the moment they're published, not just to traditional crawlers.
export const revalidate = 3600

export async function GET() {
  const posts = await getBlogPosts()
  const sortedPosts = [...posts].sort(
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
              `- [${post.title}](${SITE_URL}/blog/${post.slug}) — ${post.category}. ${post.excerpt}`
          ),
        ].join('\n')
      : ''

  const body = `# Sumanjari & Co. Advocates

> Sumanjari & Co. Advocates is a law firm practising before the Allahabad High Court, Lucknow Bench (Chamber Block D-311), serving clients across Lucknow, Kanpur, Ayodhya, Prayagraj, and Uttar Pradesh.

Practice areas: civil, criminal, family & matrimonial, property & land, rent & tenancy, tax & revenue, service & employment, consumer & motor accident, company & corporate, constitutional & writ, drafting & legal opinions, RERA, banking & recovery (DRT), armed forces tribunal (AFT), and mining matters.

## Pages

- [Home](${SITE_URL}/): Firm overview, practice areas, team, and contact.
- [Blog](${SITE_URL}/blog): Legal articles and insights across all practice areas.
- [Our Journey](${SITE_URL}/our-journey): The story behind the firm's name and guiding values.
- [Publications](${SITE_URL}/publications): Research articles, theses, and legal writing.
- [Internship](${SITE_URL}/internship): Internship programme details and application.
- [Jitendra Tiwari](${SITE_URL}/team/jitendra-tiwari): Director profile.
- [Aishwarya Pandey](${SITE_URL}/team/aishwarya-pandey): Associate Partner profile.
- [Priyesh Dwivedi](${SITE_URL}/team/priyesh-dwivedi): Associate Advocate profile.
- [Adarsh Pratap Singh](${SITE_URL}/team/adarsh-pratap-singh): Associate Advocate profile.
- [Devesh Tiwari](${SITE_URL}/team/devesh-tiwari): Associate Advocate profile.
${blogSection}`

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600',
    },
  })
}
