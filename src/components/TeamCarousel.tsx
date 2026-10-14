'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, Pause, Play } from 'lucide-react'
import TeamMemberCard from '@/components/TeamMemberCard'
import type { TeamMember } from '@/lib/team'

export default function TeamCarousel({ members, label = 'Team members' }: { members: TeamMember[]; label?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const reducedMotion = useRef(false)

  const move = (direction: number) => {
    const scroller = scrollerRef.current
    const card = scroller?.firstElementChild as HTMLElement | null
    if (!scroller || !card) return
    const step = card.getBoundingClientRect().width + 24
    const maximum = scroller.scrollWidth - scroller.clientWidth
    let target = scroller.scrollLeft + direction * step
    if (direction > 0 && scroller.scrollLeft >= maximum - 2) target = 0
    if (direction < 0 && scroller.scrollLeft <= 2) target = maximum
    scroller.scrollTo({ left: target, behavior: reducedMotion.current ? 'auto' : 'smooth' })
  }

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const updatePreference = () => {
      reducedMotion.current = preference.matches
      if (preference.matches) setIsPlaying(false)
    }
    updatePreference()
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (!isPlaying || isHovered || isFocused || members.length < 2) return
    const interval = setInterval(() => move(1), 4000)
    return () => clearInterval(interval)
  }, [isPlaying, isHovered, isFocused, members.length])

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocusCapture={() => setIsFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsFocused(false)
      }}
    >
      <div
        ref={scrollerRef}
        tabIndex={0}
        aria-label="Scroll team members"
        className="scrollbar-hide flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain pb-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-500"
      >
        {members.map((member) => (
          <div key={member.slug} className="flex w-[260px] shrink-0 snap-start sm:w-[280px]">
            <TeamMemberCard member={member} sizes="(min-width: 640px) 280px, 260px" />
          </div>
        ))}
      </div>
      {members.length > 1 && (
        <div className="mt-5 flex justify-end gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Previous team members" title="Previous team members" className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold-500/30 text-gold-700 hover:bg-gold-500/10 dark:text-gold-400">
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? 'Pause team carousel' : 'Play team carousel'} title={isPlaying ? 'Pause team carousel' : 'Play team carousel'} className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold-500/30 text-gold-700 hover:bg-gold-500/10 dark:text-gold-400">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
          <button type="button" onClick={() => move(1)} aria-label="Next team members" title="Next team members" className="flex h-10 w-10 items-center justify-center rounded-sm border border-gold-500/30 text-gold-700 hover:bg-gold-500/10 dark:text-gold-400">
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  )
}