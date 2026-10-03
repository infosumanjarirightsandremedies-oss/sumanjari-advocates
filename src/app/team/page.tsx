import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import TeamMemberCard from '@/components/TeamMemberCard'
import { officeLabels, teamMembers, type TeamOffice } from '@/lib/team'

const SITE_URL = 'https://www.sumanjariadvocates.com'

export const metadata: Metadata = {
  title: 'Our Team',
  description:
    'Meet the advocates of Sumanjari & Co. Advocates across our Lucknow and Delhi NCR teams, practising before the Supreme Court, High Courts, district courts and tribunals.',
  alternates: { canonical: '/team' },
  openGraph: {
    title: 'Our Team | Sumanjari & Co. Advocates',
    description: 'Meet the advocates of Sumanjari & Co. Advocates in Lucknow and Delhi NCR.',
    url: '/team',
  },
}

const offices: TeamOffice[] = ['lucknow', 'ncr']

export default function TeamIndexPage() {
  const collectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Our Team | Sumanjari & Co. Advocates',
    url: `${SITE_URL}/team`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: teamMembers.map((member, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${SITE_URL}/team/${member.slug}`,
        name: member.name,
      })),
    },
  }

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <span className="block font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
            Our Advocates
          </span>
          <h1 className="mb-4 mt-3 font-display text-3xl font-bold text-navy-900 dark:text-cream md:text-5xl">
            Meet the <em className="text-gold-gradient">Legal Team</em>
          </h1>
          <p className="mb-8 max-w-2xl font-body text-lg text-navy-700/85 dark:text-cream/60">
            Advocates across Lucknow and Delhi NCR, appearing before the Supreme Court, High Courts, district courts and tribunals.
          </p>

          <nav aria-label="Team offices" className="mb-14 flex flex-wrap gap-3">
            {offices.map((office) => (
              <a
                key={office}
                href={`#${office}`}
                className="rounded-sm border border-gold-500/35 px-4 py-2 font-caps text-xs uppercase tracking-widest text-navy-800 transition-colors hover:bg-gold-500/12 dark:border-gold-500/30 dark:text-cream/80 dark:hover:bg-gold-500/10"
              >
                {officeLabels[office].title}
              </a>
            ))}
          </nav>

          <div className="space-y-20">
            {offices.map((office) => {
              const members = teamMembers.filter((m) => m.office === office)
              return (
                <section key={office} id={office} className="scroll-mt-28">
                  <div className="mb-8 flex items-center gap-4">
                    <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
                      {officeLabels[office].title}
                    </h2>
                    <div className="h-px flex-1 bg-gold-500/30" />
                    <span className="font-caps text-xs uppercase tracking-widest text-navy-700/60 dark:text-cream/40">
                      {members.length} {members.length === 1 ? 'Member' : 'Members'}
                    </span>
                  </div>
                  <p className="-mt-4 mb-8 font-body text-navy-700/80 dark:text-cream/55">
                    {officeLabels[office].subtitle}
                  </p>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {members.map((member) => (
                      <TeamMemberCard
                        key={member.slug}
                        member={member}
                        sizes="(min-width: 1024px) 352px, (min-width: 640px) 476px, calc(100vw - 48px)"
                      />
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppFloat splitDesktop />
    </main>
  )
}
