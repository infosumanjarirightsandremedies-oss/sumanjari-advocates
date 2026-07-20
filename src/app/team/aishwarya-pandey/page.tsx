import Link from 'next/link'
import { ArrowLeft, Phone, Mail, GraduationCap } from 'lucide-react'

const expertise = [
  'Family & Matrimonial Matters',
  'Consumer Matters',
  'Constitutional & Writ Matters',
  'Company & Corporate Matters',
  'Criminal Matters',
  'Drafting & Legal Opinions',
]

export default function AishwaryaPandeyPage() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          href="/#team"
          className="inline-flex items-center gap-2 font-caps text-xs tracking-widest uppercase text-navy-700/70 dark:text-cream/45 hover:text-gold-600 dark:hover:text-gold-400 transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Team
        </Link>

        <div className="mb-10">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-2">
            Aishwarya Pandey <span className="text-navy-500/60 dark:text-cream/40 text-2xl font-normal">, Lucknow</span>
          </h1>
          <p className="font-body text-gold-700 dark:text-gold-400 text-lg">
            Advocate · Family, Matrimonial &amp; Constitutional Matters
          </p>
        </div>

        <div className="glass-card rounded-sm border border-gold-500/25 dark:border-gold-500/20 p-6 md:p-8 mb-12 grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <div>
                <div className="font-caps text-[11px] tracking-widest uppercase text-navy-600/60 dark:text-cream/40 mb-0.5">Phone</div>
                <a href="tel:+918302471764" className="font-body text-navy-800 dark:text-cream/85 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                  +91 83024 71764
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <div>
                <div className="font-caps text-[11px] tracking-widest uppercase text-navy-600/60 dark:text-cream/40 mb-0.5">Email</div>
                <a href="mailto:info.sumanjarirightsandremedies@gmail.com" className="font-body text-navy-800 dark:text-cream/85 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                  info.sumanjarirightsandremedies@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-3">
              <GraduationCap className="w-4 h-4 mt-0.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <div>
                <div className="font-caps text-[11px] tracking-widest uppercase text-navy-600/60 dark:text-cream/40 mb-1">Education</div>
                <ul className="font-body text-navy-800 dark:text-cream/85 text-sm space-y-1">
                  <li>BBA-LL.B., Banasthali Vidyapith</li>
                  <li>LL.M. (Constitutional &amp; Administrative Law), Ram Swaroop Memorial University</li>
                  <li>MBA (HR &amp; Marketing)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-14">
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Aishwarya Pandey is an Advocate with over 4 years of practice before the Allahabad High Court, Lucknow Bench, with a focus on family, constitutional, and corporate law matters.
          </p>
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Aishwarya advises clients on a range of family and matrimonial matters, including divorce, maintenance, and domestic relations disputes, along with consumer protection matters. She regularly undertakes legal drafting and legal opinions across civil and commercial matters.
          </p>
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Aishwarya also handles constitutional and writ matters before the High Court, and advises on company and corporate law matters. Her practice further extends to criminal matters, including representation and advisory work at various stages of proceedings.
          </p>
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Aishwarya combines her legal training with an MBA in HR &amp; Marketing, bringing a practical, business-oriented perspective to corporate and employment-adjacent client work.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-6">Expertise</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {expertise.map((item) => (
              <div
                key={item}
                className="glass-card rounded-sm border border-gold-500/20 dark:border-gold-500/15 px-4 py-3 flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                <span className="font-body text-navy-800 dark:text-cream/80 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-4">Professional Affiliations</h2>
          <ul className="space-y-2">
            <li className="font-body text-navy-700/85 dark:text-cream/65 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Bar Council of Uttar Pradesh
            </li>
            <li className="font-body text-navy-700/85 dark:text-cream/65 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500" /> Awadh Bar Association, High Court, Lucknow
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
