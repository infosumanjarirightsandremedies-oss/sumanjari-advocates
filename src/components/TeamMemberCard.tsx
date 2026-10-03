import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Linkedin, Mail, MapPin } from 'lucide-react'
import { FIRM_EMAIL, type TeamMember } from '@/lib/team'

function initials(name: string) {
  return name
    .replace(/^Adv\.\s*/, '')
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function TeamMemberCard({
  member,
  sizes = '(min-width: 640px) 280px, 260px',
}: {
  member: TeamMember
  sizes?: string
}) {
  const href = `/team/${member.slug}`

  return (
    <article className="glass-card group relative flex w-full flex-col overflow-hidden rounded-sm !shadow-[0_1px_3px_rgba(10,15,24,0.06)] !backdrop-blur-none transition duration-300 hover:-translate-y-1 hover:!shadow-[0_6px_18px_rgba(201,168,76,0.08)] dark:!shadow-none dark:hover:!shadow-[0_6px_18px_rgba(201,168,76,0.05)]">
      {/* Stretched link: makes the whole card open the profile; action buttons sit above it via z-10. */}
      <Link href={href} aria-label={`View profile of ${member.name}`} className="absolute inset-0 z-0" />
      <div>
        <div className="relative h-64 overflow-hidden bg-navy-900/5">
          {member.img ? (
            <Image
              src={member.img}
              alt={member.name}
              width={560}
              height={512}
              sizes={sizes}
              style={{ objectPosition: member.focus }}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-gold-500/15 via-transparent to-navy-900/10 dark:from-gold-500/10 dark:to-navy-900/40">
              <span className="font-display text-6xl font-bold text-gold-600/80 dark:text-gold-400/80">
                {initials(member.name)}
              </span>
            </div>
          )}
          <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/30 to-transparent dark:from-navy-900/40" />
          <div className="absolute inset-0 bg-gold-500/12 opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:bg-gold-500/10" />
        </div>

        <div className="p-5 pb-0">
          <h3 className="font-display text-lg font-semibold leading-snug text-navy-900 transition-colors group-hover:text-gold-700 dark:text-cream dark:group-hover:text-gold-400">
            {member.name}
          </h3>
          <p className="mt-1 font-body text-sm text-gold-700 dark:text-gold-400">{member.role}</p>
        </div>
      </div>

      <div className="space-y-2 px-5 pt-3">
        <div className="flex items-center gap-1.5 font-caps text-[11px] uppercase tracking-widest text-navy-700/70 dark:text-cream/50">
          <MapPin className="h-3.5 w-3.5 text-gold-600 dark:text-gold-400" />
          {member.location}
        </div>
        <div className="font-body text-[12px] text-navy-600/70 dark:text-cream/45">{member.credentials}</div>
        {member.expertise.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {member.expertise.slice(0, 3).map((area) => (
              <li
                key={area}
                className="rounded-sm border border-gold-500/25 px-2 py-0.5 font-body text-[11px] text-navy-800 dark:border-gold-500/20 dark:text-cream/75"
              >
                {area}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-auto flex items-center justify-between p-5 pt-4">
        <div className="relative z-10 flex gap-2">
          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${member.name} on LinkedIn`}
              className="flex h-8 w-8 items-center justify-center rounded-sm border border-gold-500/35 text-gold-600 transition-colors hover:bg-gold-500/12 dark:border-gold-500/30 dark:text-gold-400 dark:hover:bg-gold-500/10"
            >
              <Linkedin className="h-3.5 w-3.5" />
            </a>
          )}
          <a
            href={`mailto:${FIRM_EMAIL}`}
            aria-label={`Email ${member.name}`}
            className="flex h-8 w-8 items-center justify-center rounded-sm border border-gold-500/35 text-gold-600 transition-colors hover:bg-gold-500/12 dark:border-gold-500/30 dark:text-gold-400 dark:hover:bg-gold-500/10"
          >
            <Mail className="h-3.5 w-3.5" />
          </a>
        </div>
        <Link
          href={href}
          className="relative z-10 flex items-center gap-1 font-caps text-[11px] uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"
        >
          Profile <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  )
}
