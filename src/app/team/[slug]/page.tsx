import Link from 'next/link'
import ProfileLayout from '@/components/ProfileLayout'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft, Mail, Phone, GraduationCap, Scale, Languages, MapPin, Building2 } from 'lucide-react'
import { FIRM_EMAIL, getMemberBySlug, teamMembers } from '@/lib/team'

// Members with a hand-built page under /team/<slug> are served by that static route instead.
export const dynamicParams = false

type PageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return teamMembers.filter((m) => m.profile).map((m) => ({ slug: m.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const member = getMemberBySlug(slug)
  if (!member?.profile) return {}

  return {
    title: `${member.name} — ${member.expertise.slice(0, 2).join(' & ')}`,
    description: member.profile.bio[0],
    alternates: { canonical: `/team/${member.slug}` },
    openGraph: {
      title: `${member.name} | Sumanjari & Co. Advocates`,
      description: member.profile.summary,
      url: `/team/${member.slug}`,
    },
  }
}

const labelClass =
  'font-caps text-[11px] tracking-widest uppercase text-navy-600/60 dark:text-cream/40 mb-1'
const iconClass = 'w-4 h-4 mt-0.5 text-gold-600 dark:text-gold-400 flex-shrink-0'

export default async function TeamMemberPage({ params }: PageProps) {
  const { slug } = await params
  const member = getMemberBySlug(slug)
  if (!member?.profile) notFound()

  const { profile } = member
  const displayName = member.name.replace(/^Adv\.\s*/, '')

  return (
    <section className="py-20 md:py-28">
      <ProfileLayout slug={member.slug}>
        <Link
          href="/team"
          className="inline-flex items-center gap-2 font-caps text-xs tracking-widest uppercase text-navy-700/70 dark:text-cream/45 hover:text-gold-600 dark:hover:text-gold-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Team
        </Link>

        <div className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-2">
            {displayName}{' '}
            <span className="text-navy-500/60 dark:text-cream/40 text-2xl font-normal block mt-1 lg:mt-0 lg:inline"><span className="hidden lg:inline">, </span>{member.location}</span>
          </h1>
          <p className="font-body text-gold-700 dark:text-gold-400 text-lg">{member.role}</p>
        </div>

        <div className="glass-card rounded-sm border border-gold-500/25 dark:border-gold-500/20 p-6 md:p-8 mb-12 grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            {profile.phone && (
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:+91${profile.phone}`}
                  className="font-body text-navy-800 dark:text-cream/85 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                >
                  +91 {profile.phone.slice(0, 5)} {profile.phone.slice(5)}
                </a>
              </div>
            )}
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <a
                href={`mailto:${FIRM_EMAIL}`}
                className="font-body text-navy-800 dark:text-cream/85 hover:text-gold-600 dark:hover:text-gold-400 transition-colors break-all"
              >
                {FIRM_EMAIL}
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className={iconClass} />
              <div>
                <div className={labelClass}>Location</div>
                <p className="font-body text-navy-800 dark:text-cream/85 text-sm">{member.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Scale className={iconClass} />
              <div>
                <div className={labelClass}>Professional Memberships</div>
                <ul className="font-body text-navy-800 dark:text-cream/85 text-sm space-y-1">
                  {profile.memberships.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <GraduationCap className={iconClass} />
              <div>
                <div className={labelClass}>Education</div>
                <ul className="font-body text-navy-800 dark:text-cream/85 text-sm space-y-1">
                  {profile.education.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            {profile.officeAddress && (
              <div className="flex items-start gap-3">
                <Building2 className={iconClass} />
                <div>
                  <div className={labelClass}>Office</div>
                  <p className="font-body text-navy-800 dark:text-cream/85 text-sm">
                    Sumanjari &amp; Co., Advocates
                    <br />
                    {profile.officeAddress}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4 mb-14">
          {profile.bio.map((para) => (
            <p key={para} className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
              {para}
            </p>
          ))}
        </div>

        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-6">Areas of Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {member.expertise.map((item) => (
              <div
                key={item}
                className="glass-card rounded-sm border border-gold-500/20 dark:border-gold-500/15 px-4 py-3 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="font-body text-navy-800 dark:text-cream/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {profile.experience && (
          <div className="mb-14">
            <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-4">
              Representative Experience
            </h2>
            <ul className="space-y-3">
              {profile.experience.map((item) => (
                <li key={item} className="font-body text-navy-700/85 dark:text-cream/65 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gold-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            {profile.closingNote && (
              <p className="mt-6 font-body text-navy-800 dark:text-cream/75 leading-relaxed">{profile.closingNote}</p>
            )}
          </div>
        )}

        {profile.sections?.map((section) => (
          <div key={section.title} className="mb-14">
            <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-4">{section.title}</h2>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item} className="font-body text-navy-700/85 dark:text-cream/65 flex items-start gap-2">
                  <span className="w-1.5 h-1.5 mt-2 rounded-full bg-gold-500 flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {profile.languages && (
          <div>
            <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-4 flex items-center gap-2">
              <Languages className="w-5 h-5 text-gold-600 dark:text-gold-400" /> Languages
            </h2>
            <ul className="flex flex-wrap gap-3">
              {profile.languages.map((item) => (
                <li
                  key={item}
                  className="glass-card rounded-sm border border-gold-500/20 dark:border-gold-500/15 px-4 py-2 font-body text-navy-800 dark:text-cream/80 text-sm"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </ProfileLayout>
    </section>
  )
}
