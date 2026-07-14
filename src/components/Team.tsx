// 'use client'
// import { Linkedin, Mail } from 'lucide-react'

// const team = [
//   {
//     name: 'Adv. Jitendra Tiwari',
//     role: 'Advocate — Allahabad High Court, Lucknow Bench',
//     exp: 'Chamber D-311 · Block D',
//     courts: '82990 86204',
//     img: '/images/Jitendra.jpeg',
//   },
//   {
//     name: 'Adv. Aishwarya Pandey',
//     role: 'Advocate — Allahabad High Court, Lucknow Bench',
//     exp: 'Chamber D-311 · Block D',
//     courts: '83024 71764',
//     img: 'images/Aishwarya.jpeg',
//   },
// ]

// export default function Team() {
//   return (
//     <section id="team" className="py-24 md:py-32 relative">
//       <div className="absolute right-0 bottom-0 w-96 h-96 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6">
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-12 h-px bg-gold-500" />
//             <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Our Advocates</span>
//             <div className="w-12 h-px bg-gold-500" />
//           </div>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4">
//             Meet the <em className="text-gold-gradient">Legal Team</em>
//           </h2>
//           <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/50">
//             Seasoned advocates with deep expertise across every domain of law.
//           </p>
//         </div>

//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {team.map((member) => (
//             <div key={member.name} className="glass-card rounded-sm overflow-hidden card-glow group">
//               {/* Photo */}
//               <div className="relative h-64 overflow-hidden">
//                 <img
//                   src={member.img}
//                   alt={member.name}
//                   className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/95 via-transparent to-transparent dark:from-navy-900 dark:via-navy-900/25 dark:to-transparent" />
//                 {/* Hover overlay */}
//                 <div className="absolute inset-0 bg-gold-500/12 dark:bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               {/* Info */}
//               <div className="p-5">
//                 <div className="font-display text-navy-900 dark:text-cream text-lg font-semibold mb-1">{member.name}</div>
//                 <div className="font-body text-gold-600 dark:text-gold-400 text-sm mb-3">{member.role}</div>
//                 <div className="flex gap-3 text-xs font-caps text-navy-700/90 dark:text-cream/40 tracking-wide mb-4">
//                   <span>{member.exp}</span>
//                   <span>·</span>
//                   <span>+91 {member.courts}</span>
//                 </div>
//                 <div className="flex gap-3">
//                   <button type="button" className="w-8 h-8 rounded-sm border border-gold-500/35 flex items-center justify-center text-gold-600 dark:text-gold-400 hover:bg-gold-500/12 dark:border-gold-500/30 dark:hover:bg-gold-500/10 transition-colors">
//                     <Linkedin className="w-3.5 h-3.5" />
//                   </button>
//                   <button type="button" className="w-8 h-8 rounded-sm border border-gold-500/35 flex items-center justify-center text-gold-600 dark:text-gold-400 hover:bg-gold-500/12 dark:border-gold-500/30 dark:hover:bg-gold-500/10 transition-colors">
//                     <Mail className="w-3.5 h-3.5" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Online consultation CTA */}
//         <div className="mt-16 glass-card rounded-sm p-8 md:p-12 text-center border border-gold-500/22 dark:border-gold-500/20">
//           <div className="inline-flex items-center gap-2 bg-gold-500/12 border border-gold-500/32 dark:bg-gold-500/10 dark:border-gold-500/30 px-4 py-1.5 rounded-full mb-6">
//             <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
//             <span className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase">YOUR RIGHT, OUR RESOLVE</span>
//           </div>
//           <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-cream mb-4">
//             Connect with an Expert <em className="text-gold-gradient">Instantly</em>
//           </h3>
//           <p className="font-body text-navy-700/85 dark:text-cream/60 text-lg max-w-xl mx-auto mb-8">
//             Dedicated to protecting your rights & delivering justice — law for all, justice for everyone.
//           </p>
//           <a href="#contact" className="btn-gold inline-block text-navy-900 font-caps font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm">
//             Book Your Consultation
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }



'use client'
import { Linkedin, Mail } from 'lucide-react'

const team = [
  {
    name: 'Adv. Jitendra Tiwari',
    role: 'Advocate — Allahabad High Court, Lucknow Bench',
    exp: 'Chamber D-311 · Block D',
    courts: '82990 86204',
    img: '/images/Jitendra.jpeg',
    focus: '50% 20%', // nudge crop per-photo: 'x% y%'
  },
  {
    name: 'Adv. Aishwarya Pandey',
    role: 'Advocate — Allahabad High Court, Lucknow Bench',
    exp: 'Chamber D-311 · Block D',
    courts: '83024 71764',
    img: '/images/Aishwarya.jpeg',
    focus: '50% 15%',
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
            <div key={member.name} className="glass-card rounded-sm overflow-hidden card-glow group">
              {/* Photo */}
              <div className="relative h-64 overflow-hidden bg-navy-900/5">
                <img
                  src={member.img}
                  alt={member.name}
                  style={{ objectPosition: member.focus }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#faf8f5]/95 via-transparent to-transparent dark:from-navy-900 dark:via-navy-900/25 dark:to-transparent" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gold-500/12 dark:bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="font-display text-navy-900 dark:text-cream text-lg font-semibold mb-1">{member.name}</div>
                <div className="font-body text-gold-600 dark:text-gold-400 text-sm mb-3">{member.role}</div>
                <div className="flex gap-3 text-xs font-caps text-navy-700/90 dark:text-cream/40 tracking-wide mb-4">
                  <span>{member.exp}</span>
                  <span>·</span>
                  <span>+91 {member.courts}</span>
                </div>
                <div className="flex gap-3">
                  <button type="button" className="w-8 h-8 rounded-sm border border-gold-500/35 flex items-center justify-center text-gold-600 dark:text-gold-400 hover:bg-gold-500/12 dark:border-gold-500/30 dark:hover:bg-gold-500/10 transition-colors">
                    <Linkedin className="w-3.5 h-3.5" />
                  </button>
                  <button type="button" className="w-8 h-8 rounded-sm border border-gold-500/35 flex items-center justify-center text-gold-600 dark:text-gold-400 hover:bg-gold-500/12 dark:border-gold-500/30 dark:hover:bg-gold-500/10 transition-colors">
                    <Mail className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Online consultation CTA */}
        <div className="mt-16 glass-card rounded-sm p-8 md:p-12 text-center border border-gold-500/22 dark:border-gold-500/20">
          <div className="inline-flex items-center gap-2 bg-gold-500/12 border border-gold-500/32 dark:bg-gold-500/10 dark:border-gold-500/30 px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase">YOUR RIGHT, OUR RESOLVE</span>
          </div>
          <h3 className="font-display text-3xl md:text-4xl font-bold text-navy-900 dark:text-cream mb-4">
            Connect with an Expert <em className="text-gold-gradient">Instantly</em>
          </h3>
          <p className="font-body text-navy-700/85 dark:text-cream/60 text-lg max-w-xl mx-auto mb-8">
            Dedicated to protecting your rights & delivering justice — law for all, justice for everyone.
          </p>
          <a href="#contact" className="btn-gold inline-block text-navy-900 font-caps font-semibold text-sm tracking-widest uppercase px-10 py-4 rounded-sm">
            Book Your Consultation
          </a>
        </div>
      </div>
    </section>
  )
}
