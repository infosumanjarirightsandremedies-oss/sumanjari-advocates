'use client'
import { useState, useMemo } from 'react'
import { MapPin, Phone, Mail, Send, MessageCircle, Clock } from 'lucide-react'
import { getCountries, getCountryCallingCode, type CountryCode } from 'libphonenumber-js'
import { isValidEmail, isValidPhone } from '@/lib/validation'

const WHATSAPP_NUMBER = '8299086204'  //Jitendra Tiwari

const practiceAreas = [
  'Civil Matters',
  'Criminal Matters',
  'Family & Divorce Matters',
  'Property Matters',
  'Service & Employment Matters',
  'Consumer Matters',
  'Motor Accident Claims',
  'Drafting & Legal Opinions',
  'Writ Petitions',
  'Company Matters',
  'Bail Matters',
  'Other Legal Matters',
  'Other',
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

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', area: '', message: '' })
  const [country, setCountry] = useState<CountryCode>('IN')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [fieldErrors, setFieldErrors] = useState<{ email?: string; phone?: string }>({})

  const countryList = useMemo(() => buildCountryList(), [])
  const selectedCountry = countryList.find((c) => c.iso === country)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
    if (!form.phone.trim()) errors.phone = 'Phone number is required'
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
      payload.append('formType', 'contact')
      Object.entries(form).forEach(([key, value]) => {
        payload.append(key, key === 'phone' ? fullPhone : value)
      })

      const res = await fetch('/api/contact', {
        method: 'POST',
        body: payload,
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', area: '', message: '' })
        setCountry('IN')
        setFieldErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }
  

  const whatsappUrl = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hello, I need legal consultation. Please connect me with an advocate.')}`

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold-500/28 to-transparent dark:via-gold-500/30" />
      <div className="absolute left-0 top-1/4 w-80 h-80 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-500" />
            <span className="font-caps text-gold-600 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Get In Touch</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4">
            Book a <em className="text-gold-gradient">Consultation</em>
          </h2>
          <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/50">
            Fill out the form or reach us directly. We respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            {[
              { icon: Phone, label: 'Adv Jitendra Tiwari', value: '+91 82990 86204', href: 'tel:+918299086204' },
              { icon: Phone, label: 'Aishwarya Pandey', value: '+91 83024 71764', href: 'tel:+918302471764' },
              { icon: Mail, label: 'Email', value: 'info.sumanjarirightsandremedies@gmail.com', href: 'mailto:info.sumanjarirightsandremedies@gmail.com' },
              { icon: Clock, label: 'Hours', value: 'Mon–Sat: 10am – 7pm', href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label + value} className="glass-card rounded-sm p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm border border-gold-500/35 dark:border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <div className="font-caps text-navy-600/65 dark:text-cream/40 text-[10px] tracking-widest uppercase mb-1">{label}</div>
                  {href ? (
                    <a href={href} className="font-body text-navy-900 hover:text-gold-600 dark:text-cream dark:hover:text-gold-400 transition-colors">{value}</a>
                  ) : (
                    <div className="font-body text-navy-900 dark:text-cream">{value}</div>
                  )}
                </div>
              </div>
            ))}

            {/* Address */}
            <div className="glass-card rounded-sm p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm border border-gold-500/35 dark:border-gold-500/30 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="font-caps text-navy-600/65 dark:text-cream/40 text-[10px] tracking-widest uppercase mb-1">Office</div>
                <div className="font-body text-navy-900 dark:text-cream text-sm leading-relaxed">
                  Practising before Allahabad High Court, Lucknow Bench<br />
                  Chamber No. Block D&nbsp;–&nbsp;311
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-sm border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-caps text-green-600 dark:text-green-400 text-xs tracking-widest uppercase mb-1">WhatsApp Us</div>
                <div className="font-body text-navy-900 dark:text-cream text-sm">Chat directly with an advocate</div>
              </div>
            </a>

            {/* Locations */}
            <div className="glass-card rounded-sm p-5">
              <div className="font-caps text-navy-600/65 dark:text-cream/40 text-[10px] tracking-widest uppercase mb-3">We Serve</div>
              <div className="flex flex-wrap gap-2">
                {['Allahabad High Court · Lucknow Bench', 'Uttar Pradesh', 'PAN-India consults'].map(city => (
                  <span key={city} className="px-3 py-1 bg-gold-500/12 border border-gold-500/25 dark:bg-gold-500/10 dark:border-gold-500/20 rounded-full font-caps text-gold-700 dark:text-gold-400 text-[10px] tracking-widest uppercase">
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 glass-card rounded-sm p-8">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16">
                <div className="w-16 h-16 rounded-full bg-gold-500/18 border border-gold-500/40 flex items-center justify-center mb-6">
                  <Send className="w-7 h-7 text-gold-600 dark:text-gold-400" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-3">Message Sent!</h3>
                <p className="font-body text-navy-700/85 dark:text-cream/60 mb-6">
                  Thank you for reaching out. Our team will contact you within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-widest uppercase border border-gold-500/35 dark:border-gold-500/30 px-6 py-3 rounded-sm hover:bg-gold-500/12 dark:hover:bg-gold-500/10 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">Full Name *</label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm"
                    />
                  </div>
                  <div>
                    <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">Phone *</label>
                    <div className="flex gap-2">
                      <select
                        aria-label="Country code"
                        value={country}
                        onChange={(e) => setCountry(e.target.value as CountryCode)}
                        className="input-luxury w-[5.5rem] sm:w-24 px-1.5 py-3 rounded-sm font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)] flex-shrink-0"
                      >
                        {countryList.map(({ iso, dialCode, name, flag }) => (
                          <option
                            key={iso}
                            value={iso}
                            className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream"
                          >
                            {flag} {dialCode}
                          </option>
                        ))}
                      </select>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        required
                        inputMode="numeric"
                        placeholder="98765 43210"
                        aria-invalid={!!fieldErrors.phone}
                        className={`input-luxury w-full min-w-0 px-4 py-3 rounded-sm font-body text-sm ${fieldErrors.phone ? 'border-red-400/60' : ''}`}
                      />
                    </div>
                    {fieldErrors.phone && (
                      <p className="text-red-400 font-body text-xs mt-1.5">{fieldErrors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">Email Address *</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    aria-invalid={!!fieldErrors.email}
                    className={`input-luxury w-full px-4 py-3 rounded-sm font-body text-sm ${fieldErrors.email ? 'border-red-400/60' : ''}`}
                  />
                  {fieldErrors.email && (
                    <p className="text-red-400 font-body text-xs mt-1.5">{fieldErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">Practice Area</label>
                  <select
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                    className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)]"
                  >
                    <option value="" className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream">Select an area of law</option>
                    {practiceAreas.map(a => (
                      <option key={a} value={a} className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream">{a}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-caps text-navy-600/80 dark:text-cream/50 text-[10px] tracking-widest uppercase mb-2">Brief Description *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Please describe your legal matter briefly..."
                    className="input-luxury w-full px-4 py-3 rounded-sm font-body text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="text-red-400 font-body text-sm text-center bg-red-400/10 border border-red-400/20 rounded-sm px-4 py-3">
                    Something went wrong. Please try again or contact us directly.
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Consultation Request
                    </>
                  )}
                </button>

                <p className="font-body text-navy-600/55 dark:text-cream/30 text-xs text-center">
                  All consultations are strictly confidential under attorney-client privilege.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}