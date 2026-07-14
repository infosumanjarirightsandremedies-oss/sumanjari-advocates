'use client'
import { useState, useMemo } from 'react'
import { GraduationCap, Send, User, Phone, Mail, BookOpen, Briefcase } from 'lucide-react'
import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js'
import { isValidEmail, isValidPhone } from '@/lib/validation'

const areasOfInterest = [
  'Criminal Law',
  'Civil Litigation',
  'Corporate & Commercial Law',
  'Family & Matrimonial Law',
  'Intellectual Property',
  'Labour & Employment Law',
  'Real Estate & Property Law',
  'Cyber Law & IT',
  'Constitutional Law',
  'Consumer Protection',
]

// Converts an ISO 3166-1 alpha-2 code (e.g. "IN") into its flag emoji
function isoToFlag(iso: string): string {
  return iso
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
}

// Builds the full list of countries (dial code + display name + flag) once,
// straight from libphonenumber-js's metadata -- covers every country it supports.
function buildCountryList() {
  const regionNames =
    typeof Intl !== 'undefined' && 'DisplayNames' in Intl
      ? new Intl.DisplayNames(['en'], { type: 'region' })
      : null

  return getCountries()
    .map((iso) => ({
      iso: iso as CountryCode,
      dialCode: `+${getCountryCallingCode(iso as CountryCode)}`,
      name: regionNames?.of(iso) ?? iso,
      flag: isoToFlag(iso),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export default function Internship() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    college: '',
    area: '',
  })
  const [country, setCountry] = useState<CountryCode>('IN')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({})

  const countryList = useMemo(() => buildCountryList(), [])
  const selectedCountry = countryList.find((c) => c.iso === country)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    if (name === 'phone') {
      // allow only digits, spaces, and dashes while typing
      const cleaned = value.replace(/[^\d\s-]/g, '')
      setForm(prev => ({ ...prev, phone: cleaned }))
      return
    }
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const validate = () => {
    const errors: { email?: string; phone?: string } = {}
    if (!isValidEmail(form.email)) errors.email = 'Enter a valid email address'
    if (!form.phone.trim()) errors.phone = 'Contact number is required'
    else if (!isValidPhone(form.phone, country)) {
      errors.phone = `Enter a valid phone number for ${selectedCountry?.name ?? 'the selected country'}`
    }
    setFieldErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const dialCode = `+${getCountryCallingCode(country)}`
      const fullPhone = `${dialCode} ${form.phone.replace(/\D/g, '')}`

      const payload = new FormData()
      payload.append('formType', 'internship')
      Object.entries(form).forEach(([key, value]) => {
        payload.append(key, key === 'phone' ? fullPhone : value)
      })

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', phone: '', email: '', college: '', area: '' })
        setCountry('IN')
        setFieldErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="internship" className="py-24 md:py-32 relative scroll-mt-24">
      {/* Decorative divider */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500/28 to-transparent dark:via-gold-500/30" />
      {/* Ambient glow */}
      <div className="absolute right-0 top-1/3 w-80 h-80 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-500" />
            <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">
              Join Our Team
            </span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4">
            Internship <em className="text-gold-gradient">Programme</em>
          </h2>
          <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/50">
            Gain hands-on experience under seasoned advocates. Apply below and
            take your first step towards a distinguished legal career.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: GraduationCap,
                label: 'Eligibility',
                value: 'Law students (1st year onwards) & fresh LLB/LLM graduates',
              },
              {
                icon: Briefcase,
                label: 'Duration',
                value: 'Minimum 4 weeks · flexible scheduling available',
              },
              {
                icon: BookOpen,
                label: 'What You Will Learn',
                value:
                  'Court procedures, drafting, client interaction, legal research & more',
              },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="glass-card rounded-sm p-5 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-sm border border-gold-500/35 dark:border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <div className="font-caps text-navy-600/65 dark:text-cream/40 text-[10px] tracking-widest uppercase mb-1">
                    {label}
                  </div>
                  <div className="font-body text-navy-900 dark:text-cream text-sm leading-relaxed">
                    {value}
                  </div>
                </div>
              </div>
            ))}

            {/* Highlights */}
            <div className="glass-card rounded-sm p-5">
              <div className="font-caps text-navy-600/65 dark:text-cream/40 text-[10px] tracking-widest uppercase mb-3">
                Programme Highlights
              </div>
              <ul className="space-y-2">
                {[
                  'Certificate upon completion',
                  'Live courtroom exposure',
                  'Mentorship by senior advocates',
                  'Real case drafting practice',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                    <span className="font-body text-navy-800 dark:text-cream/75 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass-card rounded-sm p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gold-500/18 border border-gold-500/40 flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7 text-gold-600 dark:text-gold-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-3">
                  Application Received!
                </h3>
                <p className="font-body text-navy-700/85 dark:text-cream/60 mb-6">
                  Thank you for your interest. Our team will review your application
                  and get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase border border-gold-500/35 dark:border-gold-500/30 px-6 py-3 rounded-sm hover:bg-gold-500/12 dark:hover:bg-gold-500/10 transition-colors"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div>
                    <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                      Contact Number *
                    </label>
                    <div className="flex gap-2">
                      <select
                        aria-label="Country code"
                        value={country}
                        onChange={(e) => setCountry(e.target.value as CountryCode)}
                        className="input-luxury w-[5.5rem] sm:w-24 px-1.5 py-3 rounded-sm font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)] flex-shrink-0"
                      >
                        {countryList.map(({ iso, dialCode, flag }) => (
                          <option
                            key={iso}
                            value={iso}
                            className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream"
                          >
                            {flag} {dialCode}
                          </option>
                        ))}
                      </select>
                      <div className="relative w-full min-w-0">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          required
                          inputMode="numeric"
                          placeholder="98765 43210"
                          aria-invalid={!!fieldErrors.phone}
                          className={`input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm ${fieldErrors.phone ? 'border-red-400/60' : ''}`}
                        />
                      </div>
                    </div>
                    {fieldErrors.phone && (
                      <p className="text-red-400 font-body text-xs mt-1.5">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    Email ID *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      aria-invalid={!!fieldErrors.email}
                      className={`input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm ${fieldErrors.email ? 'border-red-400/60' : ''}`}
                    />
                  </div>
                  {fieldErrors.email && (
                    <p className="text-red-400 font-body text-xs mt-1.5">{fieldErrors.email}</p>
                  )}
                </div>

                {/* College */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    College / University *
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
                    <input
                      name="college"
                      value={form.college}
                      onChange={handleChange}
                      required
                      placeholder="Name of your institution"
                      className="input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm"
                    />
                  </div>
                </div>

                {/* Area of Interest */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    Area of Interest *
                  </label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    required
                    className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)]"
                  >
                    <option value="" className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream">
                      Select your preferred area
                    </option>
                    {areasOfInterest.map(a => (
                      <option
                        key={a}
                        value={a}
                        className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream"
                      >
                        {a}
                      </option>
                    ))}
                  </select>
                </div>

                {status === 'error' && (
                  <div className="text-red-400 font-body text-sm text-center bg-red-400/10 border border-red-400/20 rounded-sm px-4 py-3">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-gold w-full text-navy-900 font-caps font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === 'loading' ? (
                    <>
                      <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit Application
                    </>
                  )}
                </button>

                <p className="font-body text-navy-600/55 dark:text-cream/30 text-xs text-center">
                  All applications are reviewed personally by our senior advocates.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}




// 'use client'
// import { useState } from 'react'
// import { GraduationCap, Send, User, Phone, Mail, BookOpen, Briefcase } from 'lucide-react'
// import { isValidEmail, isValidPhone } from '@/lib/validation'

// const areasOfInterest = [
//   'Criminal Law',
//   'Civil Litigation',
//   'Corporate & Commercial Law',
//   'Family & Matrimonial Law',
//   'Intellectual Property',
//   'Labour & Employment Law',
//   'Real Estate & Property Law',
//   'Cyber Law & IT',
//   'Constitutional Law',
//   'Consumer Protection',
// ]

// export default function Internship() {
//   const [form, setForm] = useState({
//     name: '',
//     phone: '',
//     email: '',
//     college: '',
//     area: '',
//   })
//   const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
//   const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({})

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
//   }

//   const validate = () => {
//     const errors: { email?: string; phone?: string } = {}
//     if (!isValidEmail(form.email)) errors.email = 'Enter a valid email address'
//     if (!form.phone.trim()) errors.phone = 'Contact number is required'
//     else if (!isValidPhone(form.phone)) errors.phone = 'Enter a valid phone number with country code (e.g. +91 98765 43210)'
//     setFieldErrors(errors)
//     return Object.keys(errors).length === 0
//   }

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     if (!validate()) return
//     setStatus('loading')
//     try {
//       const payload = new FormData()
//       payload.append('formType', 'internship')
//       Object.entries(form).forEach(([key, value]) => payload.append(key, value))

//       const res = await fetch('/api/contact', {
//         method: 'POST',
//         body: payload,
//       })
//       if (res.ok) {
//         setStatus('success')
//         setForm({ name: '', phone: '', email: '', college: '', area: '' })
//         setFieldErrors({})
//       } else {
//         setStatus('error')
//       }
//     } catch {
//       setStatus('error')
//     }
//   }

//   return (
//     <section id="internship" className="py-24 md:py-32 relative scroll-mt-24">
//       {/* Decorative divider */}
//       <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500/28 to-transparent dark:via-gold-500/30" />
//       {/* Ambient glow */}
//       <div className="absolute right-0 top-1/3 w-80 h-80 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Section header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-12 h-px bg-gold-500" />
//             <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">
//               Join Our Team
//             </span>
//             <div className="w-12 h-px bg-gold-500" />
//           </div>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4">
//             Internship <em className="text-gold-gradient">Programme</em>
//           </h2>
//           <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/50">
//             Gain hands-on experience under seasoned advocates. Apply below and
//             take your first step towards a distinguished legal career.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-5 gap-10">
//           {/* Info panel */}
//           <div className="lg:col-span-2 space-y-6">
//             {[
//               {
//                 icon: GraduationCap,
//                 label: 'Eligibility',
//                 value: 'Law students (1st year onwards) & fresh LLB/LLM graduates',
//               },
//               {
//                 icon: Briefcase,
//                 label: 'Duration',
//                 value: 'Minimum 4 weeks · flexible scheduling available',
//               },
//               {
//                 icon: BookOpen,
//                 label: 'What You Will Learn',
//                 value:
//                   'Court procedures, drafting, client interaction, legal research & more',
//               },
//             ].map(({ icon: Icon, label, value }) => (
//               <div
//                 key={label}
//                 className="glass-card rounded-sm p-5 flex items-start gap-4"
//               >
//                 <div className="w-10 h-10 rounded-sm border border-gold-500/35 dark:border-gold-500/30 flex items-center justify-center flex-shrink-0">
//                   <Icon className="w-5 h-5 text-gold-600 dark:text-gold-400" />
//                 </div>
//                 <div>
//                   <div className="font-caps text-navy-600/65 dark:text-cream/40 text-[10px] tracking-widest uppercase mb-1">
//                     {label}
//                   </div>
//                   <div className="font-body text-navy-900 dark:text-cream text-sm leading-relaxed">
//                     {value}
//                   </div>
//                 </div>
//               </div>
//             ))}

//             {/* Highlights */}
//             <div className="glass-card rounded-sm p-5">
//               <div className="font-caps text-navy-600/65 dark:text-cream/40 text-[10px] tracking-widest uppercase mb-3">
//                 Programme Highlights
//               </div>
//               <ul className="space-y-2">
//                 {[
//                   'Certificate upon completion',
//                   'Live courtroom exposure',
//                   'Mentorship by senior advocates',
//                   'Real case drafting practice',
//                 ].map(item => (
//                   <li key={item} className="flex items-start gap-2">
//                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
//                     <span className="font-body text-navy-800 dark:text-cream/75 text-sm">
//                       {item}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Form */}
//           <div className="lg:col-span-3 glass-card rounded-sm p-8">
//             {status === 'success' ? (
//               <div className="h-full flex flex-col items-center justify-center text-center py-16">
//                 <div className="w-16 h-16 rounded-full bg-gold-500/18 border border-gold-500/40 flex items-center justify-center mb-6">
//                   <GraduationCap className="w-7 h-7 text-gold-600 dark:text-gold-400" />
//                 </div>
//                 <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-3">
//                   Application Received!
//                 </h3>
//                 <p className="font-body text-navy-700/85 dark:text-cream/60 mb-6">
//                   Thank you for your interest. Our team will review your application
//                   and get back to you shortly.
//                 </p>
//                 <button
//                   type="button"
//                   onClick={() => setStatus('idle')}
//                   className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase border border-gold-500/35 dark:border-gold-500/30 px-6 py-3 rounded-sm hover:bg-gold-500/12 dark:hover:bg-gold-500/10 transition-colors"
//                 >
//                   Submit Another Application
//                 </button>
//               </div>
//             ) : (
//               <form onSubmit={handleSubmit} className="space-y-5">
//                 <div className="grid sm:grid-cols-2 gap-5">
//                   {/* Name */}
//                   <div>
//                     <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                       Full Name *
//                     </label>
//                     <div className="relative">
//                       <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
//                       <input
//                         name="name"
//                         value={form.name}
//                         onChange={handleChange}
//                         required
//                         placeholder="Your full name"
//                         className="input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm"
//                       />
//                     </div>
//                   </div>

//                   {/* Phone */}
//                   <div>
//                     <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                       Contact Number *
//                     </label>
//                     <div className="relative">
//                       <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
//                       <input
//                         name="phone"
//                         value={form.phone}
//                         onChange={handleChange}
//                         required
//                         placeholder="+91 00000 00000"
//                         aria-invalid={!!fieldErrors.phone}
//                         className={`input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm ${fieldErrors.phone ? 'border-red-400/60' : ''}`}
//                       />
//                     </div>
//                     {fieldErrors.phone && (
//                       <p className="text-red-400 font-body text-xs mt-1.5">{fieldErrors.phone}</p>
//                     )}
//                   </div>
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                     Email ID *
//                   </label>
//                   <div className="relative">
//                     <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
//                     <input
//                       name="email"
//                       type="email"
//                       value={form.email}
//                       onChange={handleChange}
//                       required
//                       placeholder="your@email.com"
//                       aria-invalid={!!fieldErrors.email}
//                       className={`input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm ${fieldErrors.email ? 'border-red-400/60' : ''}`}
//                     />
//                   </div>
//                   {fieldErrors.email && (
//                     <p className="text-red-400 font-body text-xs mt-1.5">{fieldErrors.email}</p>
//                   )}
//                 </div>

//                 {/* College */}
//                 <div>
//                   <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                     College / University *
//                   </label>
//                   <div className="relative">
//                     <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
//                     <input
//                       name="college"
//                       value={form.college}
//                       onChange={handleChange}
//                       required
//                       placeholder="Name of your institution"
//                       className="input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm"
//                     />
//                   </div>
//                 </div>

//                 {/* Area of Interest */}
//                 <div>
//                   <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
//                     Area of Interest *
//                   </label>
//                   <select
//                     name="area"
//                     value={form.area}
//                     onChange={handleChange}
//                     required
//                     className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)]"
//                   >
//                     <option value="" className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream">
//                       Select your preferred area
//                     </option>
//                     {areasOfInterest.map(a => (
//                       <option
//                         key={a}
//                         value={a}
//                         className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream"
//                       >
//                         {a}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {status === 'error' && (
//                   <div className="text-red-400 font-body text-sm text-center bg-red-400/10 border border-red-400/20 rounded-sm px-4 py-3">
//                     Something went wrong. Please try again.
//                   </div>
//                 )}

//                 <button
//                   type="submit"
//                   disabled={status === 'loading'}
//                   className="btn-gold w-full text-navy-900 font-caps font-semibold text-sm tracking-widest uppercase px-8 py-4 rounded-sm flex items-center justify-center gap-2 disabled:opacity-60"
//                 >
//                   {status === 'loading' ? (
//                     <>
//                       <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
//                       Submitting…
//                     </>
//                   ) : (
//                     <>
//                       <Send className="w-4 h-4" />
//                       Submit Application
//                     </>
//                   )}
//                 </button>

//                 <p className="font-body text-navy-600/55 dark:text-cream/30 text-xs text-center">
//                   All applications are reviewed personally by our senior advocates.
//                 </p>
//               </form>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }