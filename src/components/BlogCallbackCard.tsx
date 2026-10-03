'use client'
import { useState } from 'react'
import { PhoneCall, CheckCircle } from 'lucide-react'
import { isValidPhone, isValidIntlPhone } from '@/lib/validation'
import { DIAL_CODES, DEFAULT_DIAL_CODE } from '@/lib/dialCodes'
import { CHAMBER_TEL, CHAMBER_CALL_DISPLAY } from '@/lib/contactLinks'

const URGENCY_TAGS = ['Received Notice', 'Need to File Case', 'Document Audit'] as const

// Inline mini-form that keeps blog readers on the page instead of bouncing them
// to /#contact. Collects only the essentials — name, mobile and a one-tap
// urgency tag — and silently attaches the article URL for context.
export default function BlogCallbackCard() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [dialCode, setDialCode] = useState<string>(DEFAULT_DIAL_CODE)
  const [urgency, setUrgency] = useState<string>('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({})

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/[^\d\s-]/g, '').slice(0, 15))
  }

  const validate = () => {
    const next: { name?: string; phone?: string } = {}
    if (!name.trim()) next.name = 'Please enter your name'
    if (!phone.trim()) next.phone = 'Mobile number is required'
    else if (dialCode === '+91' ? !isValidPhone(phone) : !isValidIntlPhone(phone)) {
      next.phone = dialCode === '+91' ? 'Enter a valid 10-digit mobile number' : 'Enter a valid phone number'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const payload = new FormData()
      payload.append('formType', 'callback')
      payload.append('name', name.trim())
      payload.append('phone', `${dialCode} ${phone.replace(/\D/g, '')}`)
      if (urgency) payload.append('urgency', urgency)
      payload.append('blogUrl', typeof window !== 'undefined' ? window.location.href : '')

      const res = await fetch('/api/contact', { method: 'POST', body: payload })
      if (res.ok) {
        setStatus('success')
        setName('')
        setPhone('')
        setDialCode(DEFAULT_DIAL_CODE)
        setUrgency('')
        setErrors({})
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="my-10 flex flex-col items-center rounded-sm border border-gold-500/25 bg-gold-500/5 p-8 text-center">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/15">
          <CheckCircle className="h-7 w-7 text-gold-600 dark:text-gold-400" />
        </div>
        <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">
          Request received.
        </h3>
        <p className="font-body text-navy-700/85 dark:text-cream/60">
          Our desk will call you back shortly. For anything urgent, call{' '}
          <a href={CHAMBER_TEL} className="text-gold-700 dark:text-gold-400">
            +91 {CHAMBER_CALL_DISPLAY}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <div className="my-10 rounded-sm border border-gold-500/25 bg-gold-500/[0.04] p-6 md:p-8">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm border border-gold-500/40">
          <PhoneCall className="h-5 w-5 text-gold-600 dark:text-gold-400" />
        </div>
        <div>
          <span className="font-caps text-[10px] uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">
            Request a Callback
          </span>
          <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream">
            Get a call from our legal desk
          </h3>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            aria-label="Your name"
            aria-invalid={!!errors.name}
            className={`input-luxury w-full rounded-sm px-4 py-3 font-body text-sm ${errors.name ? 'border-red-400/60' : ''}`}
          />
          {errors.name && <p className="mt-1.5 font-body text-xs text-red-400" role="alert" aria-live="polite">{errors.name}</p>}
        </div>

        <div>
          <div className="flex gap-2">
            <select
              aria-label="Country dial code"
              value={dialCode}
              onChange={(e) => setDialCode(e.target.value)}
              className="input-luxury w-[5rem] flex-shrink-0 rounded-sm px-2 py-3 font-body text-sm bg-white dark:bg-[rgba(255,255,255,0.04)]"
            >
              {DIAL_CODES.map(({ code, label }) => (
                <option key={label} value={code} className="bg-white text-navy-900 dark:bg-navy-800 dark:text-cream">
                  {label}
                </option>
              ))}
            </select>
            <input
              value={phone}
              onChange={handlePhoneChange}
              inputMode="numeric"
              placeholder="Mobile number"
              aria-label="Mobile number"
              aria-invalid={!!errors.phone}
              className={`input-luxury w-full min-w-0 rounded-sm px-4 py-3 font-body text-sm ${errors.phone ? 'border-red-400/60' : ''}`}
            />
          </div>
          {errors.phone && <p className="mt-1.5 font-body text-xs text-red-400" role="alert" aria-live="polite">{errors.phone}</p>}
        </div>

        <div>
          <div className="mb-2 font-caps text-[10px] uppercase tracking-widest text-navy-600/80 dark:text-cream/50">
            What do you need? (optional)
          </div>
          <div className="flex flex-wrap gap-2">
            {URGENCY_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setUrgency((cur) => (cur === tag ? '' : tag))}
                className={`font-caps rounded-sm border px-3 py-2 text-xs uppercase tracking-widest transition-colors ${
                  urgency === tag
                    ? 'border-gold-500 bg-gold-500/15 text-gold-700 dark:text-gold-400'
                    : 'border-gold-500/25 text-navy-700/70 hover:border-gold-500/50 dark:text-cream/55'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {status === 'error' && (
          <div className="rounded-sm border border-red-400/20 bg-red-400/10 px-4 py-3 text-center font-body text-sm text-red-400">
            Something went wrong. Please try again or call us directly.
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="btn-gold flex w-full items-center justify-center gap-2 rounded-sm px-8 py-3.5 font-caps text-sm font-semibold uppercase tracking-widest text-navy-900 disabled:opacity-60"
        >
          {status === 'loading' ? (
            <>
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-navy-900/30 border-t-navy-900" />
              Requesting…
            </>
          ) : (
            'Request Callback'
          )}
        </button>

        <p className="text-center font-body text-[11px] text-navy-600/60 dark:text-cream/40">
          We&apos;ll only call about your enquiry — no spam, strictly confidential.
        </p>
      </form>
    </div>
  )
}
