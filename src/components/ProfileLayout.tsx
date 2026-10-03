import Image from 'next/image'
import { getMemberBySlug } from '@/lib/team'

// Children are expected in page order: back link, name/role header, info card, then the rest.
export default function ProfileLayout({ slug, children }: { slug: string; children: React.ReactNode }) {
  const member = getMemberBySlug(slug)

  if (!member?.img) {
    return <div className="max-w-4xl mx-auto px-6">{children}</div>
  }

  return (
    <div className="profile-grid mx-auto max-w-6xl px-6">
      <div className="profile-photo">
        <div className="relative w-[calc(100%-0.75rem)] max-w-[320px] lg:absolute lg:inset-0 lg:w-auto lg:max-w-none">
          <div aria-hidden className="absolute -bottom-3 -right-3 h-full w-full rounded-sm border border-gold-500/40" />
          <div className="relative h-full overflow-hidden rounded-sm border border-gold-500/30 bg-navy-900/5 shadow-[0_10px_30px_rgba(10,15,24,0.08)] dark:border-gold-500/25 dark:shadow-none">
            <Image
              src={member.img}
              alt={member.name}
              width={640}
              height={800}
              sizes="(min-width: 1024px) 280px, 320px"
              priority
              style={{ objectPosition: member.focus }}
              className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full"
            />
          </div>
        </div>
      </div>
      {children}
    </div>
  )
}
