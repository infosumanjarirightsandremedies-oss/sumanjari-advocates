import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { getBlogPost, getBlogPosts, getServiceSlugForCategory, type BlogBlock } from '@/lib/blogs'

type PageProps = {
  params: Promise<{ slug: string }>
}

export const revalidate = 3600
// New rows published in the sheet after the last build should still render —
// generate them on demand instead of 404ing until the next full deploy.
export const dynamicParams = true

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getBlogPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
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

  const serviceSlug = getServiceSlugForCategory(post.category)
  const backHref = serviceSlug ? `/services/${serviceSlug}` : '/'
  const backLabel = serviceSlug ? `Back to ${post.category}` : 'Back to Home'

  return (
    <main className="relative min-h-screen">
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
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={post.thumbnail}
              alt={post.title}
              className="mb-10 h-64 w-full rounded-sm object-cover md:h-80"
            />
          )}

          <div className="mb-10">
            <BlockList blocks={content} />
          </div>

          <div className="glass-card rounded-sm border border-gold-500/20 p-8 text-center dark:border-gold-500/15">
            <p className="font-body text-navy-700/85 dark:text-cream/60">
              Speak with our team directly about this topic.
            </p>
            <a
              href="/#contact"
              className="btn-gold mt-6 inline-flex rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900"
            >
              Consult Now
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
