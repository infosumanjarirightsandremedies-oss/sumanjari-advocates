'use client'
import { useEffect, useRef } from 'react'
import { ArrowDown, Shield, Landmark, Building2 } from 'lucide-react'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const onScroll = () => {
      const offset = window.scrollY * 0.35
      el.style.backgroundPositionY = `${offset}px`
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background: soft blur + scale hides edge artifacts */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={heroRef}
          className="absolute inset-0 scale-110 bg-cover bg-center blur-[3px] md:blur-[2px] dark:brightness-[0.42] dark:saturate-[0.85]"
          style={{ backgroundImage: `url(${HERO_IMAGE})` }}
          aria-hidden
        />
      </div>

      {/* Readability scrims: strong wash on the left where copy sits; softer on the right */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#f4f1ea]/[0.96] via-[#f4f1ea]/78 to-[#f4f1ea]/35 dark:from-navy-950/98 dark:via-navy-900/90 dark:to-navy-900/70"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#f4f1ea]/25 via-transparent to-[#f4f1ea]/88 dark:from-navy-950/40 dark:via-transparent dark:to-navy-950/95"
        aria-hidden
      />
      {/* Subtle gold haze */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(201,168,76,0.12),transparent_55%)] dark:bg-[radial-gradient(ellipse_80%_60%_at_20%_40%,rgba(201,168,76,0.08),transparent_55%)]"
        aria-hidden
      />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.04] pointer-events-none" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.45) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Corner ornaments */}
      <div className="absolute top-24 left-8 w-20 h-20 border-l border-t border-gold-500/30 dark:border-gold-500/25 hidden md:block pointer-events-none" />
      <div className="absolute top-24 right-8 w-20 h-20 border-r border-t border-gold-500/30 dark:border-gold-500/25 hidden md:block pointer-events-none" />
      <div className="absolute bottom-20 left-8 w-20 h-20 border-l border-b border-gold-500/30 dark:border-gold-500/25 hidden md:block pointer-events-none" />
      <div className="absolute bottom-20 right-8 w-20 h-20 border-r border-b border-gold-500/30 dark:border-gold-500/25 hidden md:block pointer-events-none" />

      {/* Live badge */}
      <div className="absolute top-28 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full border border-gold-500/35 bg-white/85 px-4 py-1.5 shadow-md backdrop-blur-md dark:border-gold-400/30 dark:bg-navy-900/85 dark:shadow-lg dark:shadow-black/40">
        <span className="h-2 w-2 animate-pulse rounded-full bg-gold-500" />
        <span className="font-caps text-xs uppercase tracking-widest text-gold-800 dark:text-gold-200">
          Live Legal Services
        </span>
      </div>

      {/* Main content — frosted panel for crisp type over photography */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-32">
        <div className="max-w-4xl">
          <div className="rounded-2xl border border-white/90 bg-white/[0.82] p-8 shadow-[0_25px_80px_-20px_rgba(10,15,24,0.18)] backdrop-blur-xl ring-1 ring-[#0a0e1a]/[0.08] dark:border-gold-500/25 dark:bg-navy-950/90 dark:shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)] dark:ring-gold-500/10 md:p-10">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="hidden sm:block font-caps text-xs uppercase tracking-[0.3em] text-[#6b5420] dark:text-gold-400">
             www.sumanjarirightandremedies.com
              </span>
            </div>

            {/* Headline — explicit ink in light mode (never cream on glass) */}
            <h1 className="font-display mb-4 text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-[#060a10] dark:text-cream">Sumanjari &</span>
              <span className="block italic text-gold-gradient">Co.</span>
              <span className="mt-2 block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-medium text-[#060a10] dark:text-cream">
                Advocates
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-body mb-8 max-w-xl text-sm sm:text-base md:text-xl leading-7 text-[#1a2438] dark:text-cream/85">
              Rooted in Law. Rising with You. Practising before the Allahabad High Court, Lucknow Bench. Your right, our resolve.
            </p>

            {/* CTAs */}
            <div className="mb-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="btn-gold rounded-sm px-8 py-4 font-caps text-sm font-semibold uppercase tracking-widest text-navy-950"
              >
                Consult an Advocate
              </a>
              <a
                href="#services"
                className="rounded-sm border-2 border-[#a8893d] px-8 py-4 font-caps text-sm uppercase tracking-widest text-[#060a10] backdrop-blur-sm transition-colors hover:bg-gold-500/20 dark:border-gold-500/50 dark:text-gold-300 dark:hover:bg-gold-500/15"
              >
                View Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 border-t border-gold-500/20 pt-8 md:gap-16 dark:border-gold-500/15">
              {[
                { icon: Landmark, value: 'Lucknow Bench', label: 'Allahabad High Court' },
                { icon: Building2, value: 'Block D-311', label: 'Office Chamber · High Court' },
                { icon: Shield, value: 'Law for All', label: 'Justice for Everyone' },
              ].map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/40 bg-white/50 dark:border-gold-500/35 dark:bg-navy-900/40">
                    <Icon className="h-4 w-4 text-gold-700 dark:text-gold-400" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-gold-700 dark:text-gold-300">{value}</div>
                    <div className="font-caps text-[11px] uppercase tracking-widest text-[#2a3548] dark:text-cream/65">
                      {label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-gold-700/50 dark:text-gold-400/70">
        <span className="font-caps text-[10px] uppercase tracking-widest dark:text-cream/60">Scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  )
}
