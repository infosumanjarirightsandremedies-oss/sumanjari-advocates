'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ReactNode } from 'react'

type ServiceBlogPost = {
  slug: string
  title: string
  excerpt: string
  thumbnail: string | null
}

type ServiceBlogsProps = {
  posts: ServiceBlogPost[]
  fallbackIcon: ReactNode
  heading?: string
  eyebrow?: string
  description?: string
}

// Reusable horizontally-scrolling row of blog boxes for a service page.
// `posts` comes from the live Blogs sheet (see src/lib/blogs.ts) filtered by
// category — each box links to /blog/[slug].
export default function ServiceBlogs({
  posts,
  fallbackIcon,
  heading = 'From the Blog',
  eyebrow = 'Read More',
  description,
}: ServiceBlogsProps) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollByCard = (direction: 'left' | 'right') => {
    const scroller = scrollerRef.current
    if (!scroller) return
    const card = scroller.querySelector('[data-blog-card]') as HTMLElement | null
    const distance = card ? card.offsetWidth + 20 : 320
    scroller.scrollBy({ left: direction === 'left' ? -distance : distance, behavior: 'smooth' })
  }

  if (posts.length === 0) return null

  return (
    <div className="mb-16">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
            {eyebrow}
          </span>
          <h2 className="mt-2 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
            {heading}
          </h2>
          {description && (
            <p className="mt-2 max-w-xl font-body text-navy-700 dark:text-cream/55">{description}</p>
          )}
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => scrollByCard('left')}
            aria-label="Scroll blogs left"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 text-navy-700 transition-colors hover:border-gold-500/60 hover:text-gold-600 dark:text-cream/60 dark:hover:text-gold-400"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => scrollByCard('right')}
            aria-label="Scroll blogs right"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/30 text-navy-700 transition-colors hover:border-gold-500/60 hover:text-gold-600 dark:text-cream/60 dark:hover:text-gold-400"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="scrollbar-hide flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2"
      >
        {posts.map(({ slug, title, excerpt, thumbnail }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            data-blog-card
            className="glass-card card-glow flex w-[280px] flex-shrink-0 snap-start flex-col overflow-hidden rounded-sm border border-gold-500/20 dark:border-gold-500/15 sm:w-[320px]"
          >
            {thumbnail ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={thumbnail} alt={title} className="h-52 w-full object-cover" />
            ) : (
              <div className="p-6 pb-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                  {fallbackIcon}
                </div>
              </div>
            )}
            <div className="flex flex-1 flex-col p-6">
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
    </div>
  )
}
