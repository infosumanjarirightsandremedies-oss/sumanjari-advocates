'use client'
import { useState } from 'react'
import {
  Scale,
  Building2,
  Heart,
  ShoppingBag,
  FileText,
  Briefcase,
  Home,
  Landmark,
  Users,
  ChevronRight,
} from 'lucide-react'

const services = [
  {
    id: 'civil',
    icon: Building2,
    title: 'Civil Matters',
    description: 'Comprehensive representation in civil disputes, suits, appeals, and related proceedings.',
    items: ['Civil suits', 'Injunction matters', 'Execution & recovery', 'Civil appellate work', 'Possession disputes'],
  },
  {
    id: 'criminal',
    icon: Scale,
    title: 'Criminal Matters',
    description: 'Defense strategy, trial advocacy, appeals, and High Court briefing for criminal offences.',
    items: ['Criminal defence & trial', 'Criminal appeals & revision', 'FIR quashing (where warranted)', 'Criminal petitions', 'Cyber-related offences'],
  },
  {
    id: 'family',
    icon: Heart,
    title: 'Family & Divorce Matters',
    description: 'Discreet advocacy for matrimonial, custody, maintenance, and family-related disputes.',
    items: ['Divorce & matrimonial petitions', 'Child custody', 'Maintenance & alimony', 'Domestic relations', 'Negotiated settlements'],
  },
  {
    id: 'property',
    icon: Home,
    title: 'Property Matters',
    description: 'Title disputes, injunctions, partition, tenancy, agreements, and property-related litigation.',
    items: ['Property disputes', 'Partition suits', 'Title & possession', 'Agreement drafting', 'RERA-aligned advisories'],
  },
  {
    id: 'employment',
    icon: Users,
    title: 'Service & Employment Matters',
    description: 'Service law, departmental proceedings, tribunal matters, employment contracts & disputes.',
    items: ['Service matters', 'Suspension/disciplinary hearings', 'Pension & pay disputes', 'Employment grievances', 'Contract review'],
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    title: 'Consumer & Motor Accident Matters',
    description: 'Consumer grievances alongside motor accident compensation and insurance-linked claims.',
    items: ['Consumer forum litigation', 'Service deficiency disputes', 'Product liability complaints', 'Motor accident claims', 'Negotiation & settlement'],
  },
  {
    id: 'drafting',
    icon: FileText,
    title: 'Drafting & Legal Opinions',
    description: 'Clear opinions, pleadings, agreements, affidavits, and transactional documentation tailored to litigation risk.',
    items: ['Legal opinions', 'Agreement & deed drafting', 'Notices & replies', 'Vetting & compliance memoranda'],
  },
  {
    id: 'writ',
    icon: Landmark,
    title: 'Writ Petitions',
    description: 'Constitutional remedies and writ jurisdiction before constitutional courts.',
    items: ['Writ of mandamus / certiorari / prohibition', 'Public law remedies', 'Quashing & directions', 'Allied relief'],
  },
  {
    id: 'company-bail-misc',
    icon: Briefcase,
    title: 'Company Matters, Bail & Other Litigation',
    description: 'Company-related disputes alongside bail briefing and miscellaneous civil-criminal mandates.',
    items: ['Company / corporate-linked disputes', 'Bail Applications', 'Negotiable Instruments & allied offences', 'All other allied legal mandates'],
  },

  {
    id: 'tax-compliance',
    icon: FileText,  // or import a relevant icon
    title: 'Tax & Compliance Matters',
    description: 'End-to-end tax compliance, statutory registrations, and personal compliance services for individuals and businesses.',
    items: [
      'Complete Tax Compliances (GST, Income Tax, TDS)',
      'Various Statutory Registrations (Legal Metrology, FSSAI, Drug License, Trade License)',
      'Trademark Registration',
      'Shops & Establishment, Import Export Code',
      'GST Registration, Guest House License, MSME Registration, BNB License',
      'Other Personal Compliance (PAN Card, Aadhar Card, Visa etc.)',
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState('civil')
  const current = services.find(s => s.id === active)!

  return (
    <section id="services" className="py-24 md:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold-500" />
            <span className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Practice Areas</span>
            <div className="w-12 h-px bg-gold-500" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4 tracking-tight">
            Our Litigation <em className="text-gold-gradient">Services</em>
          </h2>
          <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/55">
            Dedicated legal representation practising before Allahabad High Court, Lucknow Bench—rooted in law, rising with you.
          </p>
        </div>

         
        <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
          {services.map(s => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => setActive(s.id)}
                className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-caps tracking-widest uppercase transition-all duration-300 ${
                  active === s.id
                    ? 'bg-gold-500 text-navy-900 font-semibold shadow-sm'
                    : 'border border-navy-900/10 bg-white/90 text-navy-800 hover:border-gold-500/50 hover:text-gold-700 dark:border-gold-500/20 dark:bg-transparent dark:text-cream/55 dark:hover:border-gold-500/45 dark:hover:text-gold-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {s.title}
              </button>
            )
          })}
        </div>

        {/* Active service panel */}
        <div className="glass-card rounded-sm p-8 md:p-12 grid md:grid-cols-2 gap-10">
          <div>
            {(() => {
              const Icon = current.icon
              return (
                <div className="w-14 h-14 rounded-sm border border-gold-500/40 flex items-center justify-center mb-6 dark:border-gold-500/30">
                  <Icon className="w-7 h-7 text-gold-600 dark:text-gold-400" />
                </div>
              )
            })()}
            <h3 className="font-display text-3xl font-bold text-navy-900 dark:text-cream mb-4 tracking-tight">{current.title}</h3>
            <p className="font-body text-navy-700 text-lg leading-relaxed mb-8 dark:text-cream/60">{current.description}</p>
            <a href="#contact" className="btn-gold inline-flex items-center gap-2 text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm">
              Consult Now <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 gap-2">
            {current.items.map(item => (
              <div key={item} className="flex items-center gap-3 py-3 border-b border-gold-500/15 dark:border-gold-500/10 last:border-0 group">
                <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 group-hover:scale-150 transition-transform" />
                <span className="font-body text-navy-800 group-hover:text-navy-900 dark:text-cream/75 dark:group-hover:text-cream transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

