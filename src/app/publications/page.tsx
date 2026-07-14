
'use client'
import { useState, useMemo } from 'react'
import {
  BookMarked,
  Send,
  User,
  Phone,
  Mail,
  FileText,
  Link as LinkIcon,
  UploadCloud,
  Newspaper,
  ScrollText,
  ExternalLink,
  Download,
} from 'lucide-react'
import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js'
import { isValidEmail, isValidPhone } from '@/lib/validation'

const publicationTypes = [
  'Thesis',
  'Research Article',
  'Case Note / Commentary',
  'Journal Publication',
  'Book Chapter',
  'Blog / Op-Ed',
]

// Filter tabs shown above the gallery. "All" plus each type.
const filterTabs = ['All', ...publicationTypes]

type Publication = {
  id: string
  title: string
  author: string
  type: string
  outlet?: string
  date: string
  excerpt: string
  href?: string // external link to the published work
  fileUrl?: string // hosted file (e.g. Supabase storage) for direct download
}

// Placeholder gallery data — replace with entries pulled from your
// datastore (e.g. a Supabase table, since next.config.js already
// whitelists your Supabase project for images) once submissions
// are wired up to a real backend.
const samplePublications: Publication[] = [
  {
    id: '1',
    title: 'Evolving Contours of Bail Jurisprudence Under the BNSS',
    author: 'Adv. Ramesh Sagar',
    type: 'Journal Publication',
    outlet: 'Allahabad Law Review',
    date: 'March 2026',
    excerpt:
      'An analysis of how bail provisions have shifted under the Bharatiya Nagarik Suraksha Sanhita and their impact on undertrial detention.',
    href: '#',
  },
  {
    id: '2',
    title: 'Arbitrability of Fraud in Commercial Contracts',
    author: 'Priya Nair',
    type: 'Research Article',
    outlet: 'NLU Journal of Commercial Law',
    date: 'January 2026',
    excerpt:
      'Examines the tension between arbitration clauses and fraud allegations in light of recent Supreme Court rulings.',
    href: '#',
  },
  {
    id: '3',
    title: 'Rethinking Consumer Protection in the Digital Marketplace',
    author: 'Adv. Sangam Verma',
    type: 'Thesis',
    outlet: 'LLM Dissertation, Lucknow University',
    date: 'November 2025',
    excerpt:
      'A doctrinal study of e-commerce liability frameworks and gaps in enforcement under the Consumer Protection Act, 2019.',
    fileUrl: '#',
  },
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

export default function Publications() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    type: '',
    title: '',
    outlet: '',
    link: '',
    description: '',
  })
  const [country, setCountry] = useState<CountryCode>('IN')
  const [file, setFile] = useState<File | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [activeFilter, setActiveFilter] = useState('All')
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({})

  const countryList = useMemo(() => buildCountryList(), [])
  const selectedCountry = countryList.find((c) => c.iso === country)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files?.[0] ?? null)
  }

  const validate = () => {
    const errors: { email?: string; phone?: string } = {}
    if (!isValidEmail(form.email)) errors.email = 'Enter a valid email address'
    // Phone is optional here — only validate format if the visitor entered one.
    if (form.phone.trim() && !isValidPhone(form.phone, country)) {
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
      const fullPhone = form.phone.trim() ? `${dialCode} ${form.phone.replace(/\D/g, '')}` : ''

      const payload = new FormData()
      payload.append('formType', 'publication')
      Object.entries(form).forEach(([key, value]) => {
        payload.append(key, key === 'phone' ? fullPhone : value)
      })
      if (file) payload.append('file', file)

      const res = await fetch('/api/contact', { method: 'POST', body: payload })

      if (res.ok) {
        setStatus('success')
        setForm({
          name: '',
          email: '',
          phone: '',
          type: '',
          title: '',
          outlet: '',
          link: '',
          description: '',
        })
        setCountry('IN')
        setFile(null)
        setFieldErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const filteredPublications =
    activeFilter === 'All'
      ? samplePublications
      : samplePublications.filter(p => p.type === activeFilter)

  return (
    <section id="publications" className="py-24 md:py-32 relative scroll-mt-24">
      {/* Decorative divider */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500/28 to-transparent dark:via-gold-500/30" />
      {/* Ambient glow */}
      <div className="absolute left-0 top-1/3 w-80 h-80 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-500" />
            <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">
              Scholarship & Writing
            </span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4">
            Publications <em className="text-gold-gradient">& Articles</em>
          </h2>
          <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/50">
            Share your thesis, research article, or publication with us —
            selected submissions are featured in our gallery below.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 mb-28">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {[
              {
                icon: ScrollText,
                label: 'What You Can Submit',
                value: 'Theses, research articles, case notes, journal publications & book chapters',
              },
              {
                icon: FileText,
                label: 'Accepted Formats',
                value: 'PDF or Word document upload, or a link to the published work',
              },
              {
                icon: Newspaper,
                label: 'Review Process',
                value: 'Our editorial team reviews each submission before it is featured',
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
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass-card rounded-sm p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gold-500/18 border border-gold-500/40 flex items-center justify-center mb-6">
                  <BookMarked className="w-7 h-7 text-gold-600 dark:text-gold-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-3">
                  Submission Received!
                </h3>
                <p className="font-body text-navy-700/85 dark:text-cream/60 mb-6">
                  Thank you for sharing your work. Our editorial team will
                  review it and reach out if it is selected for the gallery.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase border border-gold-500/35 dark:border-gold-500/30 px-6 py-3 rounded-sm hover:bg-gold-500/12 dark:hover:bg-gold-500/10 transition-colors"
                >
                  Submit Another Work
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
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div>
                    <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                      Contact Number
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

                  {/* Type */}
                  <div>
                    <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                      Type of Work *
                    </label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      required
                      className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)]"
                    >
                      <option value="" className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream">
                        Select a category
                      </option>
                      {publicationTypes.map(t => (
                        <option
                          key={t}
                          value={t}
                          className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream"
                        >
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    Title *
                  </label>
                  <div className="relative">
                    <ScrollText className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
                    <input
                      name="title"
                      value={form.title}
                      onChange={handleChange}
                      required
                      placeholder="Title of your thesis, article, or publication"
                      className="input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm"
                    />
                  </div>
                </div>

                {/* Outlet */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    Journal / Publisher / Institution
                  </label>
                  <div className="relative">
                    <Newspaper className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
                    <input
                      name="outlet"
                      value={form.outlet}
                      onChange={handleChange}
                      placeholder="Where was this published or submitted?"
                      className="input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm"
                    />
                  </div>
                </div>

                {/* Link */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    Link to Published Work
                  </label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gold-600/60 dark:text-gold-400/50 pointer-events-none" />
                    <input
                      name="link"
                      type="url"
                      value={form.link}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="input-luxury w-full pl-10 pr-4 py-3 rounded-sm font-body text-sm"
                    />
                  </div>
                </div>

                {/* File upload */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    Upload File (PDF / DOC)
                  </label>
                  <label
                    htmlFor="file-upload"
                    className="input-luxury flex items-center gap-3 w-full pl-4 pr-4 py-3 rounded-sm font-body text-sm cursor-pointer"
                  >
                    <UploadCloud className="w-4 h-4 text-gold-600/60 dark:text-gold-400/50 flex-shrink-0" />
                    <span className="truncate text-navy-700/70 dark:text-cream/40">
                      {file ? file.name : 'Choose a file to upload (optional)'}
                    </span>
                  </label>
                  <input
                    id="file-upload"
                    name="file"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">
                    Abstract / Description *
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="A brief summary of the work"
                    className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm resize-none"
                  />
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
                      Submit Work
                    </>
                  )}
                </button>

                <p className="font-body text-navy-600/55 dark:text-cream/30 text-xs text-center">
                  All submissions are reviewed by our editorial team before publication.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div>
          <div className="text-center mb-10">
            <h3 className="font-display text-3xl font-bold text-navy-900 dark:text-cream mb-4">
              Featured <em className="text-gold-gradient">Works</em>
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterTabs.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`font-caps text-xs tracking-widest uppercase px-4 py-2 rounded-sm border transition-colors ${
                    activeFilter === tab
                      ? 'tab-active border-gold-500/50'
                      : 'border-gold-500/20 text-navy-600/60 dark:text-cream/40 hover:border-gold-500/40'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {filteredPublications.length === 0 ? (
            <p className="font-body text-navy-600/60 dark:text-cream/40 text-center py-16">
              No works in this category yet.
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPublications.map(pub => (
                <div
                  key={pub.id}
                  className="glass-card card-glow rounded-sm p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-caps text-gold-600 dark:text-gold-400 text-[10px] tracking-widest uppercase border border-gold-500/30 rounded-sm px-2 py-1">
                      {pub.type}
                    </span>
                    <span className="font-body text-navy-600/50 dark:text-cream/30 text-xs">
                      {pub.date}
                    </span>
                  </div>

                  <h4 className="font-display text-lg font-bold text-navy-900 dark:text-cream mb-2 leading-snug">
                    {pub.title}
                  </h4>

                  <p className="font-body text-navy-700/80 dark:text-cream/55 text-sm mb-1">
                    {pub.author}
                  </p>
                  {pub.outlet && (
                    <p className="font-body text-navy-600/55 dark:text-cream/35 text-xs italic mb-4">
                      {pub.outlet}
                    </p>
                  )}

                  <p className="font-body text-navy-700/75 dark:text-cream/50 text-sm leading-relaxed mb-6 flex-1">
                    {pub.excerpt}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t border-gold-500/15">
                    {pub.href && (
                      <a
                        href={pub.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase flex items-center gap-1.5 hover:opacity-75 transition-opacity"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Read
                      </a>
                    )}
                    {pub.fileUrl && (
                      <a
                        href={pub.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase flex items-center gap-1.5 hover:opacity-75 transition-opacity"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Download
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
