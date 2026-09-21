'use client'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Scale, ChevronDown } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

type NavLink = { label: string; href: string; target: '_self' | '_blank' }

// Homepage sections stay inline down to the lg breakpoint. Standalone pages
// (Blog, Internship, Publications, Journey) move into the "More" dropdown
// between lg and xl, where there isn't room for all nine links in one row —
// see the overflow investigation this replaced (full row needs ~1208px).
const primaryLinks: NavLink[] = [
  { label: 'Home', href: '/#home', target: '_self' },
  { label: 'Services', href: '/#services', target: '_self' },
  { label: 'About', href: '/#about', target: '_self' },
  { label: 'Team', href: '/#team', target: '_self' },
  { label: 'Contact', href: '/#contact', target: '_self' },
]

const secondaryLinks: NavLink[] = [
  { label: 'Blog', href: '/blog', target: '_self' },
  { label: 'Internship', href: '/internship', target: '_self' },
  { label: 'Publications', href: '/publications', target: '_self' },
  { label: 'Journey', href: '/our-journey', target: '_self' },
]

const allLinks: NavLink[] = [...primaryLinks, ...secondaryLinks]

const linkClass =
  'border-gold-animated pb-1 font-caps text-sm uppercase tracking-widest text-[#0a0f18] transition-colors duration-300 hover:text-gold-700 dark:text-cream/95 dark:hover:text-gold-300'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const moreRef = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!moreOpen) return
    const onClickOutside = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) setMoreOpen(false)
    }
    const onEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMoreOpen(false)
    }
    // The panel is anchored to the "More" button, not the page, so it would
    // otherwise stay pinned in place while the rest of the nav scrolls past —
    // close it on any scroll instead of letting it drift from its trigger.
    const onScroll = () => setMoreOpen(false)
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
      window.removeEventListener('scroll', onScroll)
    }
  }, [moreOpen])

  return (
    <nav
      className={`fixed inset-x-0 left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-gold-500/15 bg-white/92 py-3 backdrop-blur-md dark:border-gold-500/10 dark:bg-navy-950/96'
          : 'border-b border-black/[0.04] bg-white/65 py-6 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-navy-950/80 dark:shadow-lg dark:shadow-black/20 dark:backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full border border-gold-500/50 dark:border-gold-500/60 flex items-center justify-center group-hover:border-gold-500 transition-colors">
            <Scale className="w-5 h-5 text-gold-600 dark:text-gold-400" />
          </div>
          <div>
            <div className="font-display text-sm font-semibold leading-tight tracking-wide text-[#5c4a1e] dark:text-cream">
              Sumanjari & Co.
            </div>
            <div className="font-caps text-[10px] tracking-widest uppercase text-[#6b5420] dark:text-gold-400/90">
              Advocates
            </div>
          </div>
        </Link>

        {/* Full desktop nav — xl and up, every link inline */}
        <ul className="hidden xl:flex items-center gap-8">
          {allLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={linkClass}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Medium nav — lg to xl, primary links inline + secondary under "More" */}
        <ul className="hidden lg:flex xl:hidden items-center gap-6">
          {primaryLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className={linkClass}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setMoreOpen(!moreOpen)}
              aria-expanded={moreOpen}
              aria-haspopup="true"
              className="flex translate-y-1 items-center gap-1.5 font-caps text-sm uppercase tracking-widest text-[#0a0f18] transition-colors duration-300 hover:text-gold-700 dark:text-cream/95 dark:hover:text-gold-300"
            >
              {/* The sibling <a> links are inline text, which sits ~4px lower
                  in its <li> than a flex box fills it — translate-y-1 nudges
                  this <button> down to match that baseline exactly. The text
                  itself measures identically to the other links (verified:
                  same font-size/weight/letter-spacing) — the icon is sized
                  up here to give the whole unit comparable visual weight. */}
              <span className="border-gold-animated pb-1">More</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            {moreOpen && (
              <div className="absolute left-0 top-full mt-3 w-52 rounded-sm border border-gold-500/20 bg-white py-2 shadow-xl dark:border-gold-500/15 dark:bg-navy-950">
                {secondaryLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.target}
                    rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                    onClick={() => setMoreOpen(false)}
                    className="block px-5 py-2.5 font-caps text-sm uppercase tracking-widest text-navy-800 transition-colors hover:text-gold-700 dark:text-cream/85 dark:hover:text-gold-400"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </li>
        </ul>

        {/* Theme toggle + CTA — lg and up, shared by both desktop tiers */}
        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="/#contact"
            className="btn-gold text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile: theme + menu — below lg */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />
          <button type="button" onClick={() => setOpen(!open)} className="text-gold-600 dark:text-gold-400 p-1" aria-expanded={open} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu — below lg, every link listed */}
      {open && (
  <div className="lg:hidden bg-[#f8f5ef] dark:bg-[#0b1424] border-t border-gold-500/20 shadow-2xl px-6 py-6 space-y-4">
          {allLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              onClick={() => setOpen(false)}
              className="block font-caps text-navy-800 hover:text-gold-700 dark:text-cream/80 dark:hover:text-gold-400 text-sm tracking-widest uppercase transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setOpen(false)}
            className="block btn-gold text-center text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm mt-4"
          >
            Get In Touch
          </a>
        </div>
      )}
    </nav>
  )
}
