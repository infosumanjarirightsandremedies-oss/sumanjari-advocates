import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BlogCallbackCard from '@/components/BlogCallbackCard'
import BlogContactBar from '@/components/BlogContactBar'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import { getBlogPost, getBlogPosts, getServiceSlugForCategory, type BlogBlock, type BlogPostMeta } from '@/lib/blogs'

type PageProps = {
  params: Promise<{ slug: string }>
}

const SITE_URL = 'https://www.sumanjariadvocates.com'

// Thumbnails are either an absolute URL an editor pasted directly, or a
// relative /api/drive-image/... path from normalizeThumbnail() in blogs.ts —
// schema.org/OG images must always be absolute, so only prefix when needed.
function absoluteImageUrl(url: string | null): string | undefined {
  if (!url) return undefined
  return url.startsWith('http') ? url : `${SITE_URL}${url}`
}

export const revalidate = 604800 // 7 days; the sheet trigger invalidates on demand
// New rows published in the sheet after the last build should still render —
// generate them on demand instead of 404ing until the next full deploy.
export const dynamicParams = true

// Pre-render only the newest handful at build time; the rest render on first
// visit (dynamicParams) and then cache. This keeps each build's ?resource=post
// fan-out small, so it can't overwhelm Apps Script's execution limit. All posts
// stay indexable — the sitemap lists every slug and each renders real HTML on
// first crawl.
const PRERENDER_COUNT = 12

export async function generateStaticParams() {
  try {
    const posts = await getBlogPosts()
    return posts.slice(0, PRERENDER_COUNT).map((post) => ({ slug: post.slug }))
  } catch {
    // Backend unreachable at build time — prerender none; dynamicParams renders
    // each on first visit. Don't fail the whole build over a transient blip.
    return []
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/blog/${slug}`,
      type: 'article',
      publishedTime: post.publishedDate,
      images: post.thumbnail ? [{ url: post.thumbnail }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

function BlockList({ blocks }: { blocks: BlogBlock[] }) {
  const elements: React.ReactNode[] = []
  let listItems: string[] = []

  const flushList = (key: string) => {
    if (listItems.length === 0) return
    elements.push(
      <ul key={key} className="mb-6 space-y-2">
        {listItems.map((item, i) => (
          <li key={i} className="flex gap-2.5 font-body text-lg text-navy-800 dark:text-cream/75">
            <span className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
            <span className="leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    )
    listItems = []
  }

  blocks.forEach((block, index) => {
    if (block.type === 'list-item') {
      listItems.push(block.text)
      return
    }
    flushList(`list-${index}`)

    if (block.type === 'heading') {
      elements.push(
        <h2
          key={index}
          className="mb-4 mt-10 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl"
        >
          {block.text}
        </h2>
      )
    } else if (block.type === 'paragraph') {
      elements.push(
        <p key={index} className="mb-6 font-body text-lg leading-relaxed text-navy-800 dark:text-cream/75">
          {block.text}
        </p>
      )
    } else if (block.type === 'table') {
      const [header, ...rows] = block.rows
      elements.push(
        <div key={index} className="mb-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-base">
            {header && (
              <thead>
                <tr className="border-b border-gold-500/30">
                  {header.map((cell, i) => (
                    <th
                      key={i}
                      className="font-caps px-4 py-2 text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {rows.map((row, r) => (
                <tr key={r} className="border-b border-gold-500/10">
                  {row.map((cell, c) => (
                    <td
                      key={c}
                      className="px-4 py-2 font-body text-navy-800 dark:text-cream/75"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    }
  })

  flushList('list-final')
  return <>{elements}</>
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) notFound()

  // Docs often repeat the title as their own first line — drop it so it
  // doesn't render twice under the page's <h1>.
  const [firstBlock] = post.content
  const content =
    firstBlock && firstBlock.type !== 'table' && firstBlock.text.trim().toLowerCase() === post.title.trim().toLowerCase()
      ? post.content.slice(1)
      : post.content

  // The hero renders wide, so request a larger width from our image proxy to
  // stay crisp on Retina (only for our own /api/drive-image/ URLs).
  const heroSrc =
    post.thumbnail && post.thumbnail.startsWith('/api/drive-image/')
      ? `${post.thumbnail}?w=1200`
      : post.thumbnail

  const serviceSlug = getServiceSlugForCategory(post.category)
  const backHref = serviceSlug ? `/services/${serviceSlug}` : '/'
  const backLabel = serviceSlug ? `Back to ${post.category}` : 'Back to Home'

  // Cross-links between posts in the same category so crawlers (and readers)
  // can reach the rest of the corpus without going back through /blog.
  // Related posts are non-essential — if the catalog call fails, show none
  // rather than 500-ing the article itself (getBlogPosts now throws on failure).
  let relatedPosts: BlogPostMeta[] = []
  try {
    const allPosts = await getBlogPosts()
    relatedPosts = allPosts.filter((p) => p.category === post.category && p.slug !== post.slug).slice(0, 3)
  } catch {
    /* leave relatedPosts empty */
  }

  // articleBody spells out the full text in one structured field so LLM
  // crawlers (which weigh JSON-LD heavily when citing sources) get the
  // complete article without having to parse the rendered block markup.
  const articleBody = content
    .map((block) => (block.type === 'table' ? block.rows.map((row) => row.join(' | ')).join('\n') : block.text))
    .join('\n\n')

  const blogPostingJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    articleBody,
    image: absoluteImageUrl(post.thumbnail),
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    articleSection: post.category,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: 'Sumanjari & Co. Advocates',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sumanjari & Co. Advocates',
      url: SITE_URL,
    },
  }

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${SITE_URL}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  }

  return (
    <main className="relative min-h-screen pb-14 md:pb-0">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href={backHref}
            className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> {backLabel}
          </Link>

          <span className="block font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
            {post.category}
          </span>
          <h1 className="mb-6 mt-3 font-display text-3xl font-bold text-navy-900 dark:text-cream md:text-5xl">
            {post.title}
          </h1>

          {post.thumbnail && (
            // Single hero image, above the fold — keep it eager for LCP; it's
            // the /blog listing's 100+ thumbnails that need lazy-loading.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={heroSrc!}
              alt={post.title}
              decoding="async"
              className="mb-10 h-64 w-full rounded-sm object-cover md:h-80"
            />
          )}

          <div className="mb-10">
            <BlockList blocks={content} />
          </div>

          <BlogCallbackCard />

          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h2 className="mb-6 font-display text-xl font-bold text-navy-900 dark:text-cream">
                More on {post.category}
              </h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="glass-card card-glow rounded-sm border border-gold-500/20 p-5 dark:border-gold-500/15"
                  >
                    <h3 className="mb-2 font-display text-base font-bold leading-snug text-navy-900 dark:text-cream">
                      {related.title}
                    </h3>
                    <span className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">
                      Read Article →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 text-center">
            <Link
              href="/blog"
              className="font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"
            >
              ← All Articles
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      {/* Mobile: flashing sticky bar. Desktop: home-style WhatsApp float. */}
      <BlogContactBar title={post.title} category={post.category} />
      <WhatsAppFloat title={post.title} category={post.category} className="hidden md:flex" splitDesktop />
    </main>
  )
}
