import Link from 'next/link'
import { ArrowLeft, Phone, Mail, GraduationCap } from 'lucide-react'

const expertise = [
  {
    title: 'Property & Land Matters',
    items: [
      'Sale, purchase & transfer of immovable property',
      'Property title verification & due diligence',
      'Partition suits (ancestral & self-acquired)',
      'Possession disputes & injunction matters',
      'Specific performance of sale agreements',
      'Property mutation (dakhil-kharij)',
      'Boundary disputes & demarcation',
      'Benami property matters',
      'Gift deed, sale deed & will drafting',
      'UP Zamindari Abolition & Land Reforms Act matters',
      'Land acquisition compensation cases',
      'Revenue court proceedings (Tehsildar/SDM/Collector)',
    ],
  },
  {
    title: 'Rent & Tenancy Matters',
    items: [
      'UP Urban Buildings (Regulation of Letting, Rent & Eviction) Act, 1972',
      'Landlord-tenant disputes',
      'Eviction suits (bonafide need, default, subletting)',
      'Rent agreement drafting & registration',
      'Rent enhancement/revision disputes',
      'Tenancy termination notices',
    ],
  },
  {
    title: 'Tax & Revenue Matters',
    items: [
      'Stamp duty & registration matters',
      'Property tax assessment disputes',
      'Income tax advisory (compliance-linked, with CAs)',
      'GST-related legal disputes',
      'Circle rate/valuation disputes',
    ],
  },
  {
    title: 'Civil Matters',
    items: [
      'Civil suits & recovery of money',
      'Injunction & declaratory suits',
      'Execution & recovery proceedings',
      'Civil appellate work (District Court to High Court)',
      'Contractual disputes',
      'Easementary rights disputes',
    ],
  },
  {
    title: 'Criminal Matters',
    items: [
      'FIR quashing petitions',
      'Bail matters (regular, anticipatory, interim)',
      'Criminal trial defense (Sessions & Magistrate Court)',
      'Criminal appeals & revisions',
      'Cheque bounce cases (Section 138 NI Act)',
      'Domestic violence & 498A matters',
    ],
  },
  {
    title: 'Family & Matrimonial Matters',
    items: [
      'Divorce (mutual consent & contested)',
      'Maintenance & alimony (Sec 125 CrPC/BNSS)',
      'Child custody & guardianship',
      'Domestic violence protection orders',
      'Restitution of conjugal rights',
      'Succession & inheritance disputes',
    ],
  },
  {
    title: 'Service & Employment Matters',
    items: [
      'Wrongful termination & reinstatement',
      'Departmental inquiry representation',
      'Service tribunal matters',
      'Pension & retirement benefit disputes',
      'POSH Act compliance & inquiry matters',
    ],
  },
  {
    title: 'Consumer & Motor Accident Matters',
    items: [
      'Consumer forum complaints',
      'Motor Accident Claims Tribunal (MACT) cases',
      'Insurance claim disputes',
    ],
  },
  {
    title: 'Company & Corporate Matters',
    items: [
      'Company registration & compliance advisory',
      'Shareholder & partnership disputes',
      'Corporate litigation',
      'LLP-related matters',
    ],
  },
  {
    title: 'Constitutional & Writ Matters',
    items: [
      'Writ petitions (Article 226 - High Court)',
      'Public Interest Litigation (PIL) support',
      'Fundamental rights violation matters',
      'Service-related writs',
    ],
  },
  {
    title: 'Drafting & Legal Opinions',
    items: [
      'Agreement & contract drafting',
      'Legal notices',
      'Wills & power of attorney',
      'Legal opinion on property/business matters',
      'MoU drafting',
    ],
  },
]

export default function JitendraTiwariPage() {
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
            Jitendra Tiwari <span className="text-navy-500/60 dark:text-cream/40 text-2xl font-normal">, Lucknow &amp; Allahabad</span>
          </h1>
          <p className="font-body text-gold-700 dark:text-gold-400 text-lg">
            Advocate · Property, Civil &amp; Revenue Matters
          </p>
        </div>

        <div className="glass-card rounded-sm border border-gold-500/25 dark:border-gold-500/20 p-6 md:p-8 mb-12 grid sm:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-gold-600 dark:text-gold-400 flex-shrink-0" />
              <div>
                <div className="font-caps text-[11px] tracking-widest uppercase text-navy-600/60 dark:text-cream/40 mb-0.5">Phone</div>
                <a href="tel:+918299086204" className="font-body text-navy-800 dark:text-cream/85 hover:text-gold-600 dark:hover:text-gold-400 transition-colors">
                  +91 82990 86204
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
                <p className="font-body text-navy-800 dark:text-cream/85 text-sm">BA LL.B., Lucknow University</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-14">
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Jitendra Tiwari is an Advocate with over 8 years of practice before the Allahabad High Court and its Lucknow Bench. He brings deep, hands-on experience in property, civil, and revenue litigation, having handled a wide range of matters spanning title disputes, partition suits, tenancy law, and revenue court proceedings.
          </p>
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Jitendra has advised clients on property title verification, due diligence, and drafting of sale deeds, gift deeds, and wills, along with representation in mutation (dakhil-kharij) and boundary dispute proceedings before revenue authorities. His civil litigation practice covers recovery suits, injunctions, declaratory suits, and appellate work from the District Court to the High Court.
          </p>
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            He also regularly handles criminal defense matters, including bail applications, FIR quashing petitions, and trial representation, alongside family, matrimonial, and consumer disputes. Jitendra&rsquo;s practice further extends to service and employment matters, company and corporate advisory, and constitutional writ petitions under Article 226.
          </p>
          <p className="font-body text-navy-800 dark:text-cream/75 leading-relaxed">
            Known for his meticulous approach to civil and property law, Jitendra is often entrusted with the firm&rsquo;s most complex and long-running civil matters.
          </p>
        </div>

        <div className="mb-14">
          <h2 className="font-display text-2xl font-bold text-navy-900 dark:text-cream mb-6">Areas of Expertise</h2>
          <div className="divide-y divide-gold-500/15 dark:divide-gold-500/10 border-t border-b border-gold-500/15 dark:border-gold-500/10">
            {expertise.map((group) => (
              <details key={group.title} className="group py-1">
                <summary className="flex items-center justify-between cursor-pointer list-none py-3 font-display text-navy-900 dark:text-cream font-semibold [&::-webkit-details-marker]:hidden">
                  {group.title}
                  <span className="text-gold-600 dark:text-gold-400 text-xl font-normal group-open:hidden">+</span>
                  <span className="text-gold-600 dark:text-gold-400 text-xl font-normal hidden group-open:inline">–</span>
                </summary>
                <ul className="pb-4 pl-1 columns-1 sm:columns-2 gap-x-8 [&>li]:break-inside-avoid">
                  {group.items.map((item) => (
                    <li key={item} className="font-body text-navy-700/85 dark:text-cream/65 text-sm leading-7 flex gap-2">
                      <span className="text-gold-500 flex-shrink-0">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </details>
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
