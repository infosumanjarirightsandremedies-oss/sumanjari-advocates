'use client'
import { startTransition } from 'react'
import { useRouter } from 'next/navigation'

// A post's first-ever render can fail while the Apps Script backend warms up;
// it caches the post meanwhile, so a retry moments later normally succeeds.
export default function BlogPostError({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter()

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="glass-card max-w-md rounded-sm border border-gold-500/20 p-8 text-center">
        <h1 className="font-display text-2xl font-bold text-navy-900 dark:text-cream">
          This article is taking longer than usual
        </h1>
        <p className="mt-3 font-body text-sm text-navy-700/85 dark:text-cream/60">
          Please try again in a moment.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <button
            type="button"
            onClick={() => startTransition(() => { router.refresh(); reset() })}
            className="btn-gold rounded-sm px-6 py-3 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900"
          >
            Try again
          </button>
          <a
            href="/blog"
            className="rounded-sm border border-gold-500/40 px-6 py-3 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900 dark:text-cream"
          >
            All articles
          </a>
        </div>
      </div>
    </main>
  )
}
