'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { ScrollText } from 'lucide-react'

type ArchivePost = {
  slug: string
  title: string
  category: string
  excerpt: string
  thumbnail: string | null
  publishedDate: string
}

// Client-side filter over the full, server-fetched post list — every post is
// already in the DOM, so switching tabs doesn't need a fetch and every post
// stays crawlable even before JS runs.
export default function BlogArchive({
  posts,
  initialCategory = 'All',
}: {
  posts: ArchivePost[]
  initialCategory?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const categories = useMemo(
    () => Array.from(new Set(posts.map((post) => post.category))).sort(),
    [posts]
  )
  // Honour ?category= from the URL when it matches a real category; otherwise 'All'.
  const [activeCategory, setActiveCategory] = useState(() =>
    initialCategory === 'All' || posts.some((post) => post.category === initialCategory)
      ? initialCategory
      : 'All'
  )

  const selectCategory = (category: string) => {
    setActiveCategory(category)
    const query = category === 'All' ? '' : `?category=${encodeURIComponent(category)}`
    router.replace(`${pathname}${query}`, { scroll: false })
  }

  const visiblePosts =
    activeCategory === 'All' ? posts : posts.filter((post) => post.category === activeCategory)

  return (
    <div>
      <div className="mb-10 flex flex-wrap gap-2">
        {['All', ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => selectCategory(category)}
            className={`font-caps rounded-sm border px-4 py-2 text-xs uppercase tracking-widest transition-colors ${
              activeCategory === category
                ? 'border-gold-500 bg-gold-500/15 text-gold-700 dark:text-gold-400'
                : 'border-gold-500/25 text-navy-700/70 hover:border-gold-500/50 hover:text-gold-600 dark:text-cream/55 dark:hover:text-gold-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {visiblePosts.length === 0 ? (
        <p className="font-body text-navy-700/70 dark:text-cream/55">No articles in this category yet.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiblePosts.map(({ slug, title, category, excerpt, thumbnail }) => (
            <Link
              key={slug}
              href={`/blog/${slug}`}
              className="glass-card card-glow flex flex-col overflow-hidden rounded-sm border border-gold-500/20 dark:border-gold-500/15"
            >
              {thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={thumbnail} alt={title} className="h-80 w-full object-cover" />
              ) : (
                <div className="p-6 pb-0">
                  <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <span className="font-caps mb-2 text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
                  {category}
                </span>
                <h3 className="mb-2 font-display text-lg font-bold leading-snug text-navy-900 dark:text-cream">
                  {title}
                </h3>
                <p className="mb-5 flex-1 font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">
                  {excerpt}
                </p>
                <span className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">
                  Read Article →
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
