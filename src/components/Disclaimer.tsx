'use client'
import { useEffect, useState, useCallback } from 'react'
import { Scale, CheckCircle, ArrowRight } from 'lucide-react'

// ─── CONFIGURATION ───────────────────────────────────────────────────────────
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzvY1iyl0nipJ5iLRSkuxkdQkpTvIX5bDX1aeMpWHPfP39CaSBHNL2e-1STOSBYCM1G/exec"
// ─────────────────────────────────────────────────────────────────────────────
const STORAGE_KEY = 'sumanjari_disclaimer_response'
// The modal waits a few seconds so a visitor can glimpse some content first,
// instead of hitting a wall the instant the page paints.
const MODAL_DELAY_MS = 3000

// Fallback for browsers that block localStorage, so a tab switch doesn't re-prompt.
let acceptedInMemory = false

function persistAcceptance() {
  acceptedInMemory = true
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      response: 'accepted',
      timestamp: new Date().toISOString(),
    }))
  } catch {
    // Storage blocked (private mode / in-app browsers) — still let them in for this visit.
  }
  logToGoogleSheetsBackground('accepted')
}

function logToGoogleSheetsBackground(response: 'accepted') {
  fetch('https://ipwho.is/')
    .then(r => r.json())
    .catch(() => ({}))
    .then(geo => {
      return fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({
          response,
          timestamp: new Date().toISOString(),
          ip: geo.ip || '',
          city: geo.city || '',
          region: geo.region || '',
          country: geo.country || '',
          userAgent: navigator.userAgent,
          page: window.location.href,
        }),
      })
    })
    .catch(() => {
      // Silently fail — logging is best-effort only
    })
}

// The ONLY thing that means "let this visitor in": a record in STORAGE_KEY
// whose response is literally 'accepted'. Anything else — missing key,
// or corrupted JSON — must show the modal.
function hasAccepted(): boolean {
  if (acceptedInMemory) return true
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return false
    const parsed = JSON.parse(saved)
    return parsed?.response === 'accepted'
  } catch {
    return false
  }
}

export default function Disclaimer() {
  const [visible, setVisible] = useState(false)
  const [delayReady, setDelayReady] = useState(false)
  const [accepting, setAccepting] = useState(false)
  const [accepted, setAccepted] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const evaluate = useCallback(() => {
    setVisible(!hasAccepted())
  }, [])

  useEffect(() => {
    evaluate()

    const timer = setTimeout(() => setDelayReady(true), MODAL_DELAY_MS)

    const onPageShow = (event: PageTransitionEvent) => {
      if (event.persisted) evaluate()
    }
    window.addEventListener('pageshow', onPageShow)

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') evaluate()
    }
    document.addEventListener('visibilitychange', onVisibilityChange)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('pageshow', onPageShow)
      document.removeEventListener('visibilitychange', onVisibilityChange)
    }
  }, [evaluate])

  // Lock body scroll while the mandatory modal is on screen so it reads as a
  // genuine gate rather than a half-blocking overlay the page scrolls behind.
  useEffect(() => {
    if (visible && delayReady) {
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = ''
      }
    }
  }, [visible, delayReady])

  const handleAccept = () => {
    if (submitted) return
    setSubmitted(true)
    setAccepting(true)

    persistAcceptance()

    setAccepting(false)
    setAccepted(true)

    setTimeout(() => setVisible(false), 1200)
  }

  if (!visible) return null

  // Mandatory acceptance on every page (blog included), held back a few seconds
  // so a visitor can glimpse some content before the modal blocks the page.
  if (!delayReady) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" />

      <div className="relative w-full max-w-2xl glass-card rounded-sm border border-gold-500/25 shadow-2xl p-8 md:p-10">
        {accepted ? (
          <div className="flex flex-col items-center justify-center text-center py-8">
            <div className="w-16 h-16 rounded-full bg-gold-500/15 border border-gold-500/40 flex items-center justify-center mb-4">
              <CheckCircle className="w-8 h-8 text-gold-600 dark:text-gold-400" />
            </div>
            <h3 className="font-display text-xl font-bold text-navy-900 dark:text-cream mb-2">
              Thank you for acknowledging.
            </h3>
            <p className="font-body text-navy-600/70 dark:text-cream/50 text-sm">
              You are being redirected…
            </p>
          </div>
        ) : (
          <>
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gold-500/20">
              <div className="w-12 h-12 rounded-full border border-gold-500/50 flex items-center justify-center flex-shrink-0">
                <Scale className="w-5 h-5 text-gold-600 dark:text-gold-400" />
              </div>
              <div>
                <div className="font-caps text-gold-600 dark:text-gold-400 text-[10px] tracking-[0.3em] uppercase mb-1">
                  Important Notice
                </div>
                <h2 className="font-display text-xl font-bold text-navy-900 dark:text-cream">
                  Disclaimer — Sumanjari & Co.
                </h2>
              </div>
            </div>

            <div className="space-y-4 mb-8 max-h-64 overflow-y-auto pr-2 scrollbar-thin">
              <p className="font-body text-navy-800 dark:text-cream/80 text-sm leading-relaxed">
                This website is created and maintained by <strong>Sumanjari & Co. — Advocates</strong> for
                informational purposes only and should not be construed as solicitation or advertisement.
              </p>
              <p className="font-body text-navy-800 dark:text-cream/80 text-sm leading-relaxed">
                As per the rules of the <strong>Bar Council of India</strong>, advocates are not permitted
                to solicit work or advertise. By accessing this website, the user acknowledges that there
                has been no advertisement, personal communication, solicitation, invitation, or inducement
                of any sort whatsoever.
              </p>
              <p className="font-body text-navy-800 dark:text-cream/80 text-sm leading-relaxed">
                The information provided on this website is intended solely for <strong>general
                informational purposes</strong> and should not be interpreted as legal advice.
              </p>
              <p className="font-body text-navy-800 dark:text-cream/80 text-sm leading-relaxed">
                Sumanjari & Co. shall not be liable for any consequence of any action taken by the user
                relying on the material/information provided on this website.
              </p>
              <p className="font-body text-navy-800 dark:text-cream/80 text-sm leading-relaxed">
                The contents of this website are the <strong>intellectual property</strong> of Sumanjari & Co.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <button
                type="button"
                onClick={handleAccept}
                disabled={submitted}
                className={`btn-gold w-full text-navy-900 font-caps font-bold text-sm md:text-base tracking-widest uppercase px-8 py-4 md:py-5 rounded-sm ring-2 ring-gold-400/60 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 ${submitted ? '' : 'cta-pulse'}`}
              >
                {accepting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-navy-900/30 border-t-navy-900 rounded-full animate-spin" />
                    Processing…
                  </>
                ) : (
                  <>
                    I Agree &amp; Proceed
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <p className="font-body text-navy-600/50 dark:text-cream/30 text-[11px] text-center mt-4">
              This notice is displayed in compliance with the Bar Council of India Rules.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
