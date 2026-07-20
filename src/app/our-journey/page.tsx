// 'use client'
// import { Heart, ShieldCheck, Compass, Scale } from 'lucide-react'

// const HERO_IMAGE = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1920&q=80'


// const guidingValues = [
//   {
//     icon: ShieldCheck,
//     title: 'Integrity',
//     copy: 'We say what we mean and do what we say — in the chamber, in the courtroom, and everywhere in between.',
//   },
//   {
//     icon: Compass,
//     title: 'Diligence',
//     copy: 'Every matter, however small, is prepared with the same care and attention we would want for our own family.',
//   },
//   {
//     icon: Scale,
//     title: 'Accessibility',
//     copy: 'Good counsel should never be out of reach. We keep the law approachable, and our door open.',
//   },
// ]

// export default function Page() {
//   return (
//     <section id="our-journey" className="relative overflow-hidden py-24 md:py-32">
//       {/* Lady Justice Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
//         <img
//           src={HERO_IMAGE}
//           alt=""
//           className="absolute right-[-6%] top-1/2 h-[95%] w-auto -translate-y-1/2 object-contain opacity-[0.12] blur-[1px]"
//         />
//       </div>

//       {/* Soft Overlay */}
//       <div className="absolute inset-0 bg-[#faf8f5]/88 dark:bg-navy-950/88" aria-hidden />

//       {/* Background wash */}
//       <div
//         className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(201,168,76,0.14),transparent_70%)]"
//         aria-hidden
//       />
//       <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
//         <div
//           className="h-full w-full"
//           style={{
//             backgroundImage:
//               'linear-gradient(rgba(201,168,76,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.45) 1px, transparent 1px)',
//             backgroundSize: '80px 80px',
//           }}
//         />
//       </div>

//       <div className="relative z-10 mx-auto max-w-5xl px-6">
//         {/* Eyebrow + heading */}
//         <div className="mb-16 text-center reveal visible">
//           <div className="mb-5 flex items-center justify-center gap-4">
//             <div className="h-px w-12 bg-gold-500" />
//             <span className="font-caps text-xs uppercase tracking-[0.3em] text-[#6b5420] dark:text-gold-400">
//               Our Journey
//             </span>
//             <div className="h-px w-12 bg-gold-500" />
//           </div>
//           <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#060a10] dark:text-cream">
//             A name born out of{' '}
//             <span className="italic text-gold-gradient">love and gratitude</span>
//           </h2>
//         </div>

//         {/* Origin story card */}
//         <div className="glass-card card-glow mb-16 rounded-2xl p-8 md:p-12">
//           <div className="mb-6 flex justify-center">
//             <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-white/50 dark:border-gold-500/35 dark:bg-navy-900/40">
//               <Heart className="h-5 w-5 text-gold-700 dark:text-gold-400" />
//             </div>
//           </div>
//           <p className="font-body mx-auto max-w-3xl text-center text-base sm:text-lg md:text-xl leading-8 text-[#1a2438] dark:text-cream/85">
//             We chose the name{' '}
//             <span className="font-display italic text-gold-gradient">Sumanjari</span> for our
//             firm from our own mothers — <span className="font-semibold text-[#060a10] dark:text-cream">Suman</span> and{' '}
//             <span className="font-semibold text-[#060a10] dark:text-cream">Manju</span> — two
//             women whose strength, values, and belief in doing right shaped who we are today.
//             Sumanjari &amp; Co. is our way of carrying their name, and their spirit, into every
//             case we stand for.
//           </p>
//           <p className="font-caps mt-8 text-center text-base sm:text-lg uppercase tracking-widest text-gold-700 dark:text-gold-300">
//             This firm exists because of them — and it is dedicated to them.
//           </p>
//         </div>

//        {/*
//         <div className="mb-16 text-center">
//           <div className="divider-gold mb-8" />
//           <p className="font-caps mb-4 text-xs uppercase tracking-[0.3em] text-[#6b5420] dark:text-gold-400">
//             Our Vision
//           </p>
//           <p className="font-display mx-auto max-w-2xl text-xl sm:text-2xl md:text-3xl font-medium leading-snug text-[#060a10] dark:text-cream">
//             Law that&rsquo;s approachable, representation that&rsquo;s honest, and justice
//             that&rsquo;s within reach.
//           </p>
//         </div>

//         */}

//         {/* What Guides Us */}
//         <div>
//           <p className="font-caps mb-10 text-center text-xs uppercase tracking-[0.3em] text-[#6b5420] dark:text-gold-400">
//             What Guides Us
//           </p>
//           <div className="grid gap-6 sm:grid-cols-3">
//             {guidingValues.map(({ icon: Icon, title, copy }) => (
//               <div
//                 key={title}
//                 className="glass-card card-glow rounded-2xl p-8 text-center"
//               >
//                 <div className="mb-5 flex justify-center">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-white/50 dark:border-gold-500/35 dark:bg-navy-900/40">
//                     <Icon className="h-5 w-5 text-gold-700 dark:text-gold-400" />
//                   </div>
//                 </div>
//                 <h3 className="font-display mb-2 text-xl font-semibold text-[#060a10] dark:text-cream">
//                   {title}
//                 </h3>
//                 <p className="font-body text-sm leading-6 text-[#2a3548] dark:text-cream/70">
//                   {copy}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'
import Image from 'next/image'
import { Heart, ShieldCheck, Compass, Scale } from 'lucide-react'

const guidingValues = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    copy: 'We say what we mean and do what we say — in the chamber, in the courtroom, and everywhere in between.',
  },
  {
    icon: Compass,
    title: 'Diligence',
    copy: 'Every matter, however small, is prepared with the same care and attention we would want for our own family.',
  },
  {
    icon: Scale,
    title: 'Accessibility',
    copy: 'Good counsel should never be out of reach. We keep the law approachable, and our door open.',
  },
]

export default function Page() {
  return (
    <section id="our-journey" className="relative overflow-hidden py-24 md:py-32">
      {/* Lady Justice Background — self-hosted from /public/images.
          next/image handles responsive srcSet and AVIF/WebP format
          negotiation automatically. `fill` + a positioned wrapper
          makes it behave as a full-bleed cover background on every device.
          Note: no placeholder="blur" here since this is a plain public/
          path, not a static import — Next.js can't pre-generate a
          blur data URL without importing the file directly. */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <Image
          src="/images/lady-justice.jpeg"
          alt=""
          fill
          sizes="100vw"
          quality={80}
          className="object-cover object-[70%_center] opacity-[0.10] sm:opacity-[0.13] blur-[0.5px] sm:blur-[1px]"
        />
      </div>

      {/* Soft Overlay */}
      <div className="absolute inset-0 bg-[#faf8f5]/88 dark:bg-navy-950/88" aria-hidden />

      {/* Background wash */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_75%_60%_at_50%_0%,rgba(201,168,76,0.14),transparent_70%)]"
        aria-hidden
      />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" aria-hidden>
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(rgba(201,168,76,0.45) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.45) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Eyebrow + heading */}
        <div className="mb-16 text-center reveal visible">
          <div className="mb-5 flex items-center justify-center gap-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="font-caps text-xs uppercase tracking-[0.3em] text-[#6b5420] dark:text-gold-400">
              Our Journey
            </span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-tight text-[#060a10] dark:text-cream">
            A name born out of{' '}
            <span className="italic text-gold-gradient">love and gratitude</span>
          </h2>
        </div>

        {/* Origin story card */}
        <div className="glass-card card-glow mb-16 rounded-2xl p-8 md:p-12">
          <div className="mb-6 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-white/50 dark:border-gold-500/35 dark:bg-navy-900/40">
              <Heart className="h-5 w-5 text-gold-700 dark:text-gold-400" />
            </div>
          </div>
          <p className="font-body mx-auto max-w-3xl text-center text-base sm:text-lg md:text-xl leading-8 text-[#1a2438] dark:text-cream/85">
            We chose the name{' '}
            <span className="font-display italic text-gold-gradient">Sumanjari</span> for our
            firm from our own mothers — <span className="font-semibold text-[#060a10] dark:text-cream">Suman</span> and{' '}
            <span className="font-semibold text-[#060a10] dark:text-cream">Manju</span> — two
            women whose strength, values, and belief in doing right shaped who we are today.
            Sumanjari &amp; Co. is our way of carrying their name, and their spirit, into every
            case we stand for.
          </p>
          <p className="font-caps mt-8 text-center text-base sm:text-lg uppercase tracking-widest text-gold-700 dark:text-gold-300">
            This firm exists because of them — and it is dedicated to them.
          </p>
        </div>

        {/* What Guides Us */}
        <div>
          <p className="font-caps mb-10 text-center text-xs uppercase tracking-[0.3em] text-[#6b5420] dark:text-gold-400">
            What Guides Us
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {guidingValues.map(({ icon: Icon, title, copy }) => (
              <div
                key={title}
                className="glass-card card-glow rounded-2xl p-8 text-center"
              >
                <div className="mb-5 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/40 bg-white/50 dark:border-gold-500/35 dark:bg-navy-900/40">
                    <Icon className="h-5 w-5 text-gold-700 dark:text-gold-400" />
                  </div>
                </div>
                <h3 className="font-display mb-2 text-xl font-semibold text-[#060a10] dark:text-cream">
                  {title}
                </h3>
                <p className="font-body text-sm leading-6 text-[#2a3548] dark:text-cream/70">
                  {copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}