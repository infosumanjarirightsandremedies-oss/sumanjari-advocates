'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Scale } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const navLinks: { label: string; href: string; target: '_self' | '_blank' }[] = [
  { label: 'Home', href: '#home', target: '_self' },
  { label: 'Services', href: '#services', target: '_self' },
  { label: 'About', href: '#about', target: '_self' },
  { label: 'Team', href: '#team', target: '_self' },
  { label: 'Contact', href: '#contact', target: '_self' },
  { label: 'Internship', href: '/internship', target: '_self' },
  { label: 'Publications', href: '/publications', target:'_self' },
  { label: 'Journey', href: '/our-journey', target: '_self' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
        <Link href="#home" className="flex items-center gap-3 group">
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

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.target}
                rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
                className="border-gold-animated pb-1 font-caps text-sm uppercase tracking-widest text-[#0a0f18] transition-colors duration-300 hover:text-gold-700 dark:text-cream/95 dark:hover:text-gold-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-gold text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile: theme + menu */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button type="button" onClick={() => setOpen(!open)} className="text-gold-600 dark:text-gold-400 p-1" aria-expanded={open} aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
  <div className="md:hidden bg-[#f8f5ef] dark:bg-[#0b1424] border-t border-gold-500/20 shadow-2xl px-6 py-6 space-y-4">
          {navLinks.map(link => (
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
            href="#contact"
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