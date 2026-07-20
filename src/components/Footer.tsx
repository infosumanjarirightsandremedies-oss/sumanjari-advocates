'use client'
import { Scale, Instagram, Phone, Mail, MapPin } from 'lucide-react'

const services = [
  'Property & Land Matters',
  'Civil Matters',
  'Criminal Matters',
  'Family & Matrimonial Matters',
  'Service & Employment Matters',
  'Consumer & Motor Accident Matters',
  'Constitutional & Writ Matters',
  'Drafting & Legal Opinions',
]

const links = [
  { label: 'About Us', href: '#about' },
  { label: 'Our Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Contact Us', href: '#contact' },
]

const WEBSITE = 'https://www.sumanjaririadvocates.com'

const social = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/thelastvedict",
    label: "Instagram",
  },
  {
    icon: Mail,
    href: "mailto:info.sumanjarirightsandremedies@gmail.com",
    label: "Email",
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-gold-500/18 bg-[#f0ebe3]/90 dark:bg-transparent dark:border-gold-500/10">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full border border-gold-500/55 dark:border-gold-500/60 flex items-center justify-center">
              <Scale className="w-5 h-5 text-gold-600 dark:text-gold-400" />
            </div>
            <div>
              <div className="font-display text-gold-700 dark:text-gold-300 text-sm font-semibold leading-tight">Sumanjari & Co.</div>
              <div className="font-caps text-gold-600/75 dark:text-gold-500/60 text-[10px] tracking-widest uppercase">Advocates</div>
            </div>
          </div>
          <p className="font-body text-navy-700/70 dark:text-cream/60 text-sm leading-relaxed mb-6">
            Trusted legal counsel with integrity, dedication, and excellence.
            <br />
            Representing clients before the Allahabad High Court (Principal Bench &amp; Lucknow Bench) and courts across Uttar Pradesh.
            <br />
            <span className="font-semibold tracking-wide uppercase text-navy-800 dark:text-cream/85">
              Your Right. Our Resolve.
            </span>
          </p>
          {/* Social */}
          <div className="flex flex-wrap gap-2">
            {social.map(({ icon: Icon, href, label }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-sm border border-gold-500/30 flex items-center justify-center text-gold-600/70 hover:text-gold-600 hover:border-gold-500/50 hover:bg-gold-500/10 dark:border-gold-500/25 dark:text-gold-400/80 dark:hover:text-gold-400 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-caps text-navy-900 dark:text-cream text-xs tracking-widest uppercase mb-5 pb-2 border-b border-gold-500/22 dark:border-gold-500/15">
            Practice Areas
          </h4>
          <ul className="space-y-3">
            {services.map(s => (
              <li key={s}>
                <a href="#services" className="font-body text-navy-700/75 dark:text-cream/60 text-sm hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-500/45 dark:bg-gold-500/55" />
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-caps text-navy-900 dark:text-cream text-xs tracking-widest uppercase mb-5 pb-2 border-b border-gold-500/22 dark:border-gold-500/15">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {links.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="font-body text-navy-700/75 dark:text-cream/60 text-sm hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-500/45 dark:bg-gold-500/55" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-caps text-navy-900 dark:text-cream text-xs tracking-widest uppercase mb-5 pb-2 border-b border-gold-500/22 dark:border-gold-500/15">
            Contact
          </h4>
          <ul className="space-y-4">
            <li>
              <a href="tel:+918299086204" className="flex items-start gap-3 text-navy-700/75 dark:text-cream/60 hover:text-gold-600 dark:hover:text-gold-400 transition-colors group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold-600 dark:group-hover:text-gold-400" />
                <span className="font-body text-sm">+91 82990 86204 · Adv Jitendra Tiwari</span>
              </a>
            </li>
            <li>
              <a href="tel:+918302471764" className="flex items-start gap-3 text-navy-700/75 dark:text-cream/60 hover:text-gold-600 dark:hover:text-gold-400 transition-colors group">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold-600 dark:group-hover:text-gold-400" />
                <span className="font-body text-sm">+91 83024 71764 · Aishwarya Pandey</span>
              </a>
            </li>
            <li>
              <a href="mailto:info.sumanjarirightsandremedies@gmail.com" className="flex items-start gap-3 text-navy-700/75 dark:text-cream/60 hover:text-gold-600 dark:hover:text-gold-400 transition-colors group">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:text-gold-600 dark:group-hover:text-gold-400" />
                <span className="font-body text-sm">info.sumanjarirightsandremedies@gmail.com</span>
              </a>
            </li>
            <li>
              <div className="flex items-start gap-3 text-navy-700/75 dark:text-cream/60">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-gold-600 dark:text-gold-400" />
                <span className="font-body text-sm">High Court Lucknow · Chamber Block D · D-311</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mandatory Disclaimer bar */}
      <div className="border-t border-gold-500/15 dark:border-gold-500/12 bg-gold-500/5 dark:bg-gold-500/8">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center">
          <p className="font-body text-navy-900 dark:text-cream/85 text-xs leading-relaxed">
            <span className="font-semibold text-navy-700/80 dark:text-cream/70">Mandatory Disclaimer: </span>
            This website is for informational purposes only and does not constitute solicitation or advertisement.
            As per Bar Council of India Rules, advocates are not permitted to solicit work or advertise.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold-500/18 dark:border-gold-500/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-caps text-navy-600/65 dark:text-cream/50 text-[10px] tracking-widest">
            © 2026 Sumanjari & Co. Advocates. All rights reserved.
          </p>
          <div className="flex gap-5 font-caps text-navy-600/65 dark:text-cream/50 text-[10px] tracking-widest">
            <a href="#" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold-600 dark:hover:text-gold-400 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}