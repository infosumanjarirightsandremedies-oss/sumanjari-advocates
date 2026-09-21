import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogArchive from '@/components/BlogArchive'
import { getBlogPosts } from '@/lib/blogs'

export const revalidate = 3600

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Articles and legal insights from Sumanjari & Co. Advocates on RERA, property, civil, criminal, family, tax, and other practice areas.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog | Sumanjari & Co. Advocates',
    description: 'Articles and legal insights from Sumanjari & Co. Advocates.',
    url: '/blog',
  },
}

export default async function BlogIndexPage() {
  const posts = await getBlogPosts()
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  )

  // A CollectionPage/ItemList listing every article in one structured block
  // gives LLM crawlers the full corpus without having to follow each link —
  // the same reasoning as the dynamic sitemap and llms.txt feed.
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog | Sumanjari & Co. Advocates',
    url: `${SITE_URL}/blog`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: sortedPosts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  }

  return (
    <main className="relative min-h-screen">
      {sortedPosts.length > 0 && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
      )}
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <span className="block font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
            From Our Desk
          </span>
          <h1 className="mb-4 mt-3 font-display text-3xl font-bold text-navy-900 dark:text-cream md:text-5xl">
            Legal Insights &amp; Articles
          </h1>
          <p className="mb-12 max-w-2xl font-body text-lg text-navy-700/85 dark:text-cream/60">
            Practical reading on RERA, property, civil, criminal, family, tax, and the other areas we practise in.
          </p>

          {sortedPosts.length === 0 ? (
            <p className="font-body text-navy-700/70 dark:text-cream/55">
              No articles are published yet — check back soon.
            </p>
          ) : (
            <BlogArchive posts={sortedPosts} />
          )}
        </div>
      </section>
      <Footer />
    </main>
  )
}
