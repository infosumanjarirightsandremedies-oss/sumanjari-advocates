'use client'
import Link from 'next/link'
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react'

const team = [
  {
    slug: 'jitendra-tiwari',
    name: 'Adv. Jitendra Tiwari',
    // role: 'Property, Civil & Revenue Matters',
    chamber: 'Chamber Block D-311',
    phone: '8299086204',
    img: '/images/Jitendra.jpeg',
    focus: '50% 20%',
    linkedin: '#',
    email: 'info.sumanjarirightsandremedies@gmail.com',
  },
  {
    slug: 'aishwarya-pandey',
    name: 'Adv. Aishwarya Pandey',
    // role: 'Family, Matrimonial & Constitutional Matters',
    chamber: 'Chamber Block D-311',
    phone: '8302471764',
    img: '/images/Aishwarya.jpeg',
    focus: '50% 15%',
    linkedin: '#',
    email: 'info.sumanjarirightsandremedies@gmail.com',
  },
]

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32 relative">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member) => (
            <div key={member.slug} className="glass-card rounded-sm overflow-hidden card-glow group flex flex-col">
              <Link href={`/team/${member.slug}`} className="block">
                <div className="relative h-64 overflow-hidden bg-navy-900/5">
                  <img
                    src={member.img}
                    alt={member.name}
                    style={{ objectPosition: member.focus }}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/95 via-transparent to-transparent dark:from-navy-900 dark:via-navy-900/25 dark:to-transparent" />
                  <div className="absolute inset-0 bg-gold-500/12 dark:bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-5 pb-0">
                  <div className="font-display text-navy-900 dark:text-cream text-lg font-semibold leading-snug min-h-[3.25rem] flex items-start group-hover:text-gold-700 dark:group-hover:text-gold-400 transition-colors">
                    {member.name}
                  </div>
                  {/* <div className="font-body text-gold-600 dark:text-gold-400 text-sm mb-4">{member.role}</div> */}
                </div>
              </Link>

              {/* Meta: chamber and phone stacked as separate lines — always fully visible, always uniform */}
              {/* Meta: chamber and phone */}
<div className="px-5 pt-2 space-y-1">
  <div className="font-caps text-black dark:text-white font-bold text-[12px] tracking-wide">
    {member.chamber}
  </div>

  <a
    href={`tel:+91${member.phone}`}
    className="font-caps text-black dark:text-white font-bold text-[12px] tracking-wide hover:text-gold-600 dark:hover:text-gold-400 transition-colors block"
  >
    +91-{member.phone}
  </a>
</div>

              {/* Contact + profile actions */}
              <div className="p-5 pt-4 mt-auto flex items-center justify-between">
                <div className="flex gap-3">
                  
                   <a  href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                    className="w-8 h-8 rounded-sm border border-gold-500/35 flex items-center justify-center text-gold-600 dark:text-gold-400 hover:bg-gold-500/12 dark:border-gold-500/30 dark:hover:bg-gold-500/10 transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                  </a>
                  
                   <a href={`mailto:${member.email}`}
                    aria-label={`Email ${member.name}`}
                    className="w-8 h-8 rounded-sm border border-gold-500/35 flex items-center justify-center text-gold-600 dark:text-gold-400 hover:bg-gold-500/12 dark:border-gold-500/30 dark:hover:bg-gold-500/10 transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                  </a>
                </div>
                <a href={`/team/${member.slug}`}
                  className="flex items-center gap-1 font-caps text-[11px] tracking-widest uppercase text-navy-700/70 dark:text-cream/45 hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                >
                  Profile <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
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
