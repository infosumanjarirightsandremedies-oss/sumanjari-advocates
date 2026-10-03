'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import TeamMemberCard from '@/components/TeamMemberCard'
import { teamMembers } from '@/lib/team'

const AUTO_ROTATE_INTERVAL_MS = 4000

const team = teamMembers

export default function Team() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollToIndex = (index: number) => {
    const scroller = scrollerRef.current
    const card = scroller?.querySelectorAll('[data-team-card]')[index] as HTMLElement | undefined
    if (!scroller || !card) return
    const targetLeft =
      card.getBoundingClientRect().left - scroller.getBoundingClientRect().left + scroller.scrollLeft
    scroller.scrollTo({ left: targetLeft, behavior: 'smooth' })
  }

  const startAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % team.length
        scrollToIndex(next)
        return next
      })
    }, AUTO_ROTATE_INTERVAL_MS)
  }

  useEffect(() => {
    startAutoRotate()
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  const handleDotClick = (index: number) => {
    setActiveIndex(index)
    scrollToIndex(index)
    startAutoRotate()
  }

  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-500" />
            <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Our Advocates</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4">
            Meet the <em className="text-gold-gradient">Legal Team</em>
          </h2>
          <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/50">
            Seasoned advocates with deep expertise across every domain of law.
          </p>
        </div>

        <div
          ref={scrollerRef}
          className="scrollbar-hide mx-auto flex snap-x snap-mandatory gap-6 overflow-x-auto pb-2 sm:max-w-[888px]"
        >
          {team.map((member) => (
            <div
              key={member.slug}
              data-team-card
              className="flex w-[260px] flex-shrink-0 snap-start sm:w-[280px]"
            >
              <TeamMemberCard member={member} />
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {team.map((member, index) => (
            <button
              key={member.slug}
              type="button"
              onClick={() => handleDotClick(index)}
              aria-label={`Show ${member.name}`}
              aria-current={activeIndex === index}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? 'w-6 bg-gold-500'
                  : 'w-2 bg-gold-500/30 hover:bg-gold-500/50'
              }`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/team"
            className="inline-flex items-center gap-1 font-caps text-xs tracking-widest uppercase text-gold-700 dark:text-gold-400 hover:text-gold-600 transition-colors"
          >
            View Full Team <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="mt-16 glass-card rounded-sm p-8 md:p-12 text-center border border-gold-500/22 dark:border-gold-500/20">
          <div className="inline-flex items-center gap-2 bg-gold-500/12 border border-gold-500/32 dark:bg-gold-500/10 dark:border-gold-500/30 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase">YOUR RIGHT, OUR RESOLVE</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-cream mb-4">
            Connect with an Expert <em className="text-gold-gradient">Instantly</em>
          </h3>
          <p className="font-body text-navy-700/85 dark:text-cream/60 text-lg max-w-xl mx-auto mb-8">
            Dedicated to protecting your rights & delivering justice - law for all, justice for everyone.
          </p>
          <a href="#contact" className="btn-gold inline-block text-navy-900 font-caps font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm">
            For Enquiries
          </a>
        </div>
      </div>
    </section>
  )
}