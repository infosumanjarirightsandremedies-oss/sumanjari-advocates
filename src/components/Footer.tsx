'use client'
import { Scale, Instagram, Phone, Mail, MapPin } from 'lucide-react'

// lucide-react has no Reddit icon, so the mark is inlined here (matches the
// official Reddit logo; uses currentColor so it inherits the same
// hover/theme colors as the lucide icons around it).
function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <title>Reddit</title>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z" />
    </svg>
  )
}

const services = [
  { label: 'Property & Land Matters', href: '/services/property-land-matters' },
  { label: 'Civil Matters', href: '/services/civil-matters' },
  { label: 'Criminal Matters', href: '/services/criminal-matters' },
  { label: 'Tax & Revenue Matters', href: '/services/tax-revenue-matters' },
  { label: 'Family & Matrimonial Matters', href: '/services/family-matrimonial-matters' },
  { label: 'Service & Employment Matters', href: '/services/service-employment-matters' },
  { label: 'Consumer & Motor Accident Matters', href: '/services/consumer-motor-accident-matters' },
  { label: 'Constitutional & Writ Matters', href: '/services/constitutional-writ-matters' },
  { label: 'Drafting & Legal Opinions', href: '/#services' },
  { label: 'Company & Corporate Matters', href: '/services/company-corporate-matters' },
  { label: 'RERA Matters', href: '/services/rera' },
  { label: 'Banking & Recovery (DRT) Matters', href: '/services/banking-recovery-matters' },
  { label: 'Armed Forces Tribunal & Mining Matters', href: '/#services' },
]

const links = [
  { label: 'About Us', href: '/#about' },
  { label: 'Our Team', href: '/#team' },
  { label: 'Services', href: '/#services' },
  { label: 'Contact Us', href: '/#contact' },
  { label: 'Publications', href: '/publications' },
  { label: 'Internship', href: '/internship' },
  { label: 'Our Journey', href: '/our-journey' },
]

const WEBSITE = 'https://www.sumanjariadvocates.com'

const social = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/thelastvedict",
    label: "Instagram",
  },
  {
    icon: RedditIcon,
    href: "https://www.reddit.com/user/Mean-Bicycle-5947/",
    label: "Reddit",
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
                key={label}
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
            {services.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="font-body text-navy-700/75 dark:text-cream/60 text-sm hover:text-gold-600 dark:hover:text-gold-400 transition-colors flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-gold-500/45 dark:bg-gold-500/55" />
                  {label}
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