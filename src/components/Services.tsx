'use client'

import { useEffect, useState } from 'react'
import {
  Home,
  Key,
  Receipt,
  Scale,
  Gavel,
  Heart,
  Users,
  ShoppingBag,
  Briefcase,
  Landmark,
  ScrollText,
  X,
} from 'lucide-react'

const services = [
  {
    id: 'property-land',
    icon: Home,
    title: 'Property & Land Matters',
    description: 'Comprehensive legal assistance in property ownership, transfers, title verification, land disputes, revenue proceedings, and documentation.',
    items: [
      'Sale, purchase & transfer of immovable property',
      'Property title verification & due diligence',
      'Partition suits (ancestral & self-acquired property)',
      'Possession disputes & injunction matters',
      'Specific performance of sale agreements',
      'Property mutation (dakhil-kharij) in revenue records',
      'Boundary disputes & demarcation',
      'Benami property matters',
      'Gift deed, sale deed & will drafting related to property',
      'UP Zamindari Abolition & Land Reforms Act matters',
      'Land acquisition compensation cases',
      'Revenue court proceedings (Tehsildar/SDM/Collector level)',
    ],
  },
  {
    id: 'rent-tenancy',
    icon: Key,
    title: 'Rent & Tenancy Matters',
    description: 'Representation in landlord-tenant disputes, eviction proceedings, rent agreements, and tenancy matters.',
    items: [
      'UP Urban Buildings (Regulation of Letting, Rent & Eviction) Act, 1972 matters',
      'Landlord-tenant disputes',
      'Eviction suits (bonafide need, default in rent, subletting)',
      'Rent agreement drafting & registration',
      'Rent enhancement/revision disputes',
      'Tenancy termination notices',
    ],
  },
  {
    id: 'tax-revenue',
    icon: Receipt,
    title: 'Tax & Revenue Matters',
    description: 'Legal assistance in stamp duty, registration, taxation, valuation disputes, and revenue matters.',
    items: [
      'Stamp duty & registration matters',
      'Property tax assessment disputes',
      'Income tax advisory',
      'GST-related legal disputes',
      'Circle rate / valuation disputes',
    ],
  },
  {
    id: 'civil',
    icon: Scale,
    title: 'Civil Matters',
    description: 'Representation in civil litigation, recovery proceedings, contractual disputes, and appeals.',
    items: [
      'Civil suits & recovery of money',
      'Injunction & declaratory suits',
      'Execution & recovery proceedings',
      'Civil appellate work',
      'Contractual disputes',
      'Easementary rights disputes',
    ],
  },
  {
    id: 'criminal',
    icon: Gavel,
    title: 'Criminal Matters',
    description: 'Strategic criminal defence, bail, trial representation, and appellate advocacy.',
    items: [
      'FIR quashing petitions',
      'Bail matters',
      'Criminal trial defence',
      'Criminal appeals & revisions',
      'Cheque bounce cases (Section 138 NI Act)',
      'Domestic violence & 498A matters',
    ],
  },
  {
    id: 'family',
    icon: Heart,
    title: 'Family & Matrimonial Matters',
    description: 'Legal support for matrimonial, custody, maintenance, and succession disputes.',
    items: [
      'Divorce (mutual consent & contested)',
      'Maintenance & alimony',
      'Child custody & guardianship',
      'Domestic violence protection orders',
      'Restitution of conjugal rights',
      'Succession & inheritance disputes',
    ],
  },
  {
    id: 'employment',
    icon: Users,
    title: 'Service & Employment Matters',
    description: 'Representation in service disputes, tribunals, and employment litigation.',
    items: [
      'Wrongful termination & reinstatement',
      'Departmental inquiry representation',
      'Service tribunal matters',
      'Pension & retirement benefit disputes',
      'POSH Act compliance & inquiry matters',
    ],
  },
  {
    id: 'consumer',
    icon: ShoppingBag,
    title: 'Consumer & Motor Accident Matters',
    description: 'Consumer litigation, MACT claims, and insurance dispute resolution.',
    items: [
      'Consumer forum complaints',
      'Motor Accident Claims Tribunal (MACT) cases',
      'Insurance claim disputes',
    ],
  },
  {
    id: 'company',
    icon: Briefcase,
    title: 'Company & Corporate Matters',
    description: 'Corporate advisory, compliance, shareholder disputes, and commercial litigation.',
    items: [
      'Company registration & compliance advisory',
      'Shareholder & partnership disputes',
      'Corporate litigation',
      'LLP-related matters',
    ],
  },
  {
    id: 'constitutional',
    icon: Landmark,
    title: 'Constitutional & Writ Matters',
    description: 'Representation before the High Court in constitutional and writ jurisdiction.',
    items: [
      'Writ petitions (Article 226 - High Court)',
      'Public Interest Litigation (PIL) support',
      'Fundamental rights violation matters',
      'Service-related writs',
    ],
  },
  {
    id: 'drafting',
    icon: ScrollText,
    title: 'Drafting & Legal Opinions',
    description: 'Professional drafting of legal documents, contracts, notices, and opinions.',
    items: [
      'Agreement & contract drafting',
      'Legal notices',
      'Wills & Power of Attorney',
      'Legal opinion on property/business matters',
      'MoU drafting',
    ],
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState<(typeof services)[number] | null>(null)

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedService])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [])

  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-bold md:text-5xl">
            Our <em className="text-gold-gradient">Litigation Services</em>
          </h2>
        </div>

        <div className={`${selectedService ? 'pointer-events-none blur-sm' : ''} grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3`}>
          {services.map((service) => {
            const Icon = service.icon
            return (
              <button key={service.id} onClick={() => setSelectedService(service)} className="glass-card rounded-sm border p-6 text-left transition hover:-translate-y-2 hover:border-gold-500">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                  <Icon className="h-5 w-5 text-gold-600" />
                </div>
                <h3 className="mb-2 font-display text-lg font-bold">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </button>
            )
          })}
        </div>
      </div>

      {selectedService && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4" onClick={() => setSelectedService(null)}>
          <div onClick={(e)=>e.stopPropagation()} className="glass-card w-full max-w-5xl rounded-lg bg-white">
            <div className="flex justify-between border-b p-8">
              <div>
                <selectedService.icon className="mb-4 h-8 w-8 text-gold-600" />
                <h2 className="font-display text-3xl font-bold">{selectedService.title}</h2>
                <p className="mt-3">{selectedService.description}</p>
              </div>
              <button onClick={()=>setSelectedService(null)}><X/></button>
            </div>
            <div className="max-h-[60vh] overflow-y-auto p-8">
              <div className="grid gap-4 md:grid-cols-2">
                {selectedService.items.map(item=>(
                  <div key={item} className="flex gap-3">
                    <div className="mt-2 h-2 w-2 rounded-full bg-gold-500"/>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" onClick={()=>setSelectedService(null)} className="btn-gold mt-10 inline-flex rounded-sm px-6 py-3">
                Consult Now
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

//Part I deployed to Prod.
// 'use client'
// import { useState } from 'react'
// import {
//   Scale,
//   Building2,
//   Heart,
//   ShoppingBag,
//   FileText,
//   Briefcase,
//   Home,
//   Landmark,
//   Users,
//   ChevronRight,
// } from 'lucide-react'

// const services = [
//   {
//     id: 'civil',
//     icon: Building2,
//     title: 'Civil Matters',
//     description: 'Comprehensive representation in civil disputes, suits, appeals, and related proceedings.',
//     items: ['Civil suits', 'Injunction matters', 'Execution & recovery', 'Civil appellate work', 'Possession disputes'],
//   },
//   {
//     id: 'criminal',
//     icon: Scale,
//     title: 'Criminal Matters',
//     description: 'Defense strategy, trial advocacy, appeals, and High Court briefing for criminal offences.',
//     items: ['Criminal defence & trial', 'Criminal appeals & revision', 'FIR quashing (where warranted)', 'Criminal petitions', 'Cyber-related offences'],
//   },
//   {
//     id: 'family',
//     icon: Heart,
//     title: 'Family & Divorce Matters',
//     description: 'Discreet advocacy for matrimonial, custody, maintenance, and family-related disputes.',
//     items: ['Divorce & matrimonial petitions', 'Child custody', 'Maintenance & alimony', 'Domestic relations', 'Negotiated settlements'],
//   },
//   {
//     id: 'property',
//     icon: Home,
//     title: 'Property Matters',
//     description: 'Title disputes, injunctions, partition, tenancy, agreements, and property-related litigation.',
//     items: ['Property disputes', 'Partition suits', 'Title & possession', 'Agreement drafting', 'RERA-aligned advisories'],
//   },
//   {
//     id: 'employment',
//     icon: Users,
//     title: 'Service & Employment Matters',
//     description: 'Service law, departmental proceedings, tribunal matters, employment contracts & disputes.',
//     items: ['Service matters', 'Suspension/disciplinary hearings', 'Pension & pay disputes', 'Employment grievances', 'Contract review'],
//   },
//   {
//     id: 'consumer',
//     icon: ShoppingBag,
//     title: 'Consumer & Motor Accident Matters',
//     description: 'Consumer grievances alongside motor accident compensation and insurance-linked claims.',
//     items: ['Consumer forum litigation', 'Service deficiency disputes', 'Product liability complaints', 'Motor accident claims', 'Negotiation & settlement'],
//   },
//   {
//     id: 'drafting',
//     icon: FileText,
//     title: 'Drafting & Legal Opinions',
//     description: 'Clear opinions, pleadings, agreements, affidavits, and transactional documentation tailored to litigation risk.',
//     items: ['Legal opinions', 'Agreement & deed drafting', 'Notices & replies', 'Vetting & compliance memoranda'],
//   },
//   {
//     id: 'writ',
//     icon: Landmark,
//     title: 'Writ Petitions',
//     description: 'Constitutional remedies and writ jurisdiction before constitutional courts.',
//     items: ['Writ of mandamus / certiorari / prohibition', 'Public law remedies', 'Quashing & directions', 'Allied relief'],
//   },
//   {
//     id: 'company-bail-misc',
//     icon: Briefcase,
//     title: 'Company Matters, Bail & Other Litigation',
//     description: 'Company-related disputes alongside bail briefing and miscellaneous civil-criminal mandates.',
//     items: ['Company / corporate-linked disputes', 'Bail Applications', 'Negotiable Instruments & allied offences', 'All other allied legal mandates'],
//   },

//   {
//     id: 'tax-compliance',
//     icon: FileText,  // or import a relevant icon
//     title: 'Tax & Compliance Matters',
//     description: 'End-to-end tax compliance, statutory registrations, and personal compliance services for individuals and businesses.',
//     items: [
//       'Complete Tax Compliances (GST, Income Tax, TDS)',
//       'Various Statutory Registrations (Legal Metrology, FSSAI, Drug License, Trade License)',
//       'Trademark Registration',
//       'Shops & Establishment, Import Export Code',
//       'GST Registration, Guest House License, MSME Registration, BNB License',
//       'Other Personal Compliance (PAN Card, Aadhar Card, Visa etc.)',
//     ],
//   },
// ]

// export default function Services() {
//   const [active, setActive] = useState('civil')
//   const current = services.find(s => s.id === active)!

//   return (
//     <section id="services" className="py-24 md:py-32 relative">
//       {/* Background accent */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-12 h-px bg-gold-500" />
//             <span className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Practice Areas</span>
//             <div className="w-12 h-px bg-gold-500" />
//           </div>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4 tracking-tight">
//             Our Litigation <em className="text-gold-gradient">Services</em>
//           </h2>
//           <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/55">
//             Dedicated legal representation practising before Allahabad High Court, Lucknow Bench—rooted in law, rising with you.
//           </p>
//         </div>

         
//         <div className="flex gap-2 overflow-x-auto pb-2 mb-10 scrollbar-hide">
//           {services.map(s => {
//             const Icon = s.icon
//             return (
//               <button
//                 key={s.id}
//                 onClick={() => setActive(s.id)}
//                 className={`flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-sm text-xs font-caps tracking-widest uppercase transition-all duration-300 ${
//                   active === s.id
//                     ? 'bg-gold-500 text-navy-900 font-semibold shadow-sm'
//                     : 'border border-navy-900/10 bg-white/90 text-navy-800 hover:border-gold-500/50 hover:text-gold-700 dark:border-gold-500/20 dark:bg-transparent dark:text-cream/55 dark:hover:border-gold-500/45 dark:hover:text-gold-400'
//                 }`}
//               >
//                 <Icon className="w-3.5 h-3.5" />
//                 {s.title}
//               </button>
//             )
//           })}
//         </div>

//         {/* Active service panel */}
//         <div className="glass-card rounded-sm p-8 md:p-12 grid md:grid-cols-2 gap-10">
//           <div>
//             {(() => {
//               const Icon = current.icon
//               return (
//                 <div className="w-14 h-14 rounded-sm border border-gold-500/40 flex items-center justify-center mb-6 dark:border-gold-500/30">
//                   <Icon className="w-7 h-7 text-gold-600 dark:text-gold-400" />
//                 </div>
//               )
//             })()}
//             <h3 className="font-display text-3xl font-bold text-navy-900 dark:text-cream mb-4 tracking-tight">{current.title}</h3>
//             <p className="font-body text-navy-700 text-lg leading-relaxed mb-8 dark:text-cream/60">{current.description}</p>
//             <a href="#contact" className="btn-gold inline-flex items-center gap-2 text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-6 py-3 rounded-sm">
//               Consult Now <ChevronRight className="w-4 h-4" />
//             </a>
//           </div>

//           <div className="grid grid-cols-1 gap-2">
//             {current.items.map(item => (
//               <div key={item} className="flex items-center gap-3 py-3 border-b border-gold-500/15 dark:border-gold-500/10 last:border-0 group">
//                 <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 group-hover:scale-150 transition-transform" />
//                 <span className="font-body text-navy-800 group-hover:text-navy-900 dark:text-cream/75 dark:group-hover:text-cream transition-colors">{item}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





// //----------------------------------------------------------------------------------






// Part 2 Testing on Hover functionality which was not working as expected. So, I have commented the code and will try to implement it in a different way.
// 'use client'
// import {
//   Home,
//   Key,
//   Receipt,
//   Scale,
//   Gavel,
//   Heart,
//   Users,
//   ShoppingBag,
//   Briefcase,
//   Landmark,
//   ScrollText,
// } from 'lucide-react'

// const services = [
//   {
//     id: 'property',
//     icon: Home,
//     title: 'Property & Land Matters',
//     description: 'Title, transfer, partition, and possession disputes over immovable property.',
//     items: [
//       'Sale, purchase & transfer of immovable property',
//       'Property title verification & due diligence',
//       'Partition suits (ancestral & self-acquired property)',
//       'Possession disputes & injunction matters',
//       'Specific performance of sale agreements',
//       'Property mutation (dakhil-kharij) in revenue records',
//       'Boundary disputes & demarcation',
//       'Benami property matters',
//       'Gift deed, sale deed, and will drafting related to property',
//       'UP Zamindari Abolition & Land Reforms Act matters',
//       'Land acquisition compensation cases',
//       'Revenue court proceedings (Tehsildar/SDM/Collector level)',
//     ],
//   },
//   {
//     id: 'rent-tenancy',
//     icon: Key,
//     title: 'Rent & Tenancy Matters',
//     description: 'Landlord-tenant disputes, eviction, and rent agreement matters under UP law.',
//     items: [
//       'UP Urban Buildings (Regulation of Letting, Rent & Eviction) Act, 1972 matters',
//       'Landlord-tenant disputes',
//       'Eviction suits (bonafide need, default in rent, subletting)',
//       'Rent agreement drafting & registration',
//       'Rent enhancement/revision disputes',
//       'Tenancy termination notices',
//     ],
//   },
//   {
//     id: 'tax-revenue',
//     icon: Receipt,
//     title: 'Tax & Revenue Matters',
//     description: 'Stamp duty, registration, valuation, and compliance-linked tax advisory.',
//     items: [
//       'Stamp duty & registration matters (UP Stamp Act, Registration Act 1908)',
//       'Property tax assessment disputes',
//       'Income tax advisory (basic compliance-linked matters, coordination with CAs)',
//       'GST-related legal disputes (for business clients)',
//       'Circle rate/valuation disputes',
//     ],
//   },
//   {
//     id: 'civil',
//     icon: Scale,
//     title: 'Civil Matters',
//     description: 'Suits, recovery, injunctions, and civil appellate representation.',
//     items: [
//       'Civil suits & recovery of money',
//       'Injunction & declaratory suits',
//       'Execution & recovery proceedings',
//       'Civil appellate work (District Court to High Court)',
//       'Contractual disputes',
//       'Easementary rights disputes',
//     ],
//   },
//   {
//     id: 'criminal',
//     icon: Gavel,
//     title: 'Criminal Matters',
//     description: 'Trial defense, bail, quashing, and criminal appellate work.',
//     items: [
//       'FIR quashing petitions',
//       'Bail matters (regular, anticipatory, interim)',
//       'Criminal trial defense (Sessions & Magistrate Court)',
//       'Criminal appeals & revisions',
//       'Cheque bounce cases (Section 138 NI Act)',
//       'Domestic violence & 498A matters',
//     ],
//   },
//   {
//     id: 'family',
//     icon: Heart,
//     title: 'Family & Matrimonial Matters',
//     description: 'Divorce, custody, maintenance, and succession disputes handled discreetly.',
//     items: [
//       'Divorce (mutual consent & contested)',
//       'Maintenance & alimony (Section 125 CrPC/BNSS)',
//       'Child custody & guardianship',
//       'Domestic violence protection orders',
//       'Restitution of conjugal rights',
//       'Succession & inheritance disputes',
//     ],
//   },
//   {
//     id: 'employment',
//     icon: Users,
//     title: 'Service & Employment Matters',
//     description: 'Departmental inquiries, tribunal matters, and service-related disputes.',
//     items: [
//       'Wrongful termination & reinstatement',
//       'Departmental inquiry representation',
//       'Service tribunal matters',
//       'Pension & retirement benefit disputes',
//       'POSH Act compliance & inquiry matters',
//     ],
//   },
//   {
//     id: 'consumer-mact',
//     icon: ShoppingBag,
//     title: 'Consumer & Motor Accident Matters',
//     description: 'Consumer forum complaints, MACT claims, and insurance disputes.',
//     items: [
//       'Consumer forum complaints (deficiency of service, builder disputes)',
//       'Motor Accident Claims Tribunal (MACT) cases',
//       'Insurance claim disputes',
//     ],
//   },
//   {
//     id: 'company-corporate',
//     icon: Briefcase,
//     title: 'Company & Corporate Matters',
//     description: 'Registration, compliance advisory, and corporate/partnership litigation.',
//     items: [
//       'Company registration & compliance advisory',
//       'Shareholder & partnership disputes',
//       'Corporate litigation',
//       'LLP-related matters',
//     ],
//   },
//   {
//     id: 'constitutional-writ',
//     icon: Landmark,
//     title: 'Constitutional & Writ Matters',
//     description: 'Writ jurisdiction, PIL support, and fundamental rights matters.',
//     items: [
//       'Writ petitions (Article 226 - High Court)',
//       'Public Interest Litigation (PIL) support',
//       'Fundamental rights violation matters',
//       'Service-related writs',
//     ],
//   },
//   {
//     id: 'drafting-opinions',
//     icon: ScrollText,
//     title: 'Drafting & Legal Opinions',
//     description: 'Agreements, notices, wills, and legal opinions drafted precisely.',
//     items: [
//       'Agreement & contract drafting',
//       'Legal notices',
//       'Wills & power of attorney',
//       'Legal opinion on property/business matters',
//       'MoU drafting',
//     ],
//   },
// ]

// export default function Services() {
//   return (
//     <section id="services" className="py-24 md:py-32 relative">
//       {/* Background accent */}
//       <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/8 dark:bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

//       <div className="max-w-7xl mx-auto px-6">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <div className="flex items-center justify-center gap-4 mb-4">
//             <div className="w-12 h-px bg-gold-500" />
//             <span className="font-caps text-gold-700 dark:text-gold-400 text-xs tracking-[0.3em] uppercase">Practice Areas</span>
//             <div className="w-12 h-px bg-gold-500" />
//           </div>
//           <h2 className="font-display text-4xl md:text-5xl font-bold text-navy-900 dark:text-cream mb-4 tracking-tight">
//             Our Litigation <em className="text-gold-gradient">Services</em>
//           </h2>
//           <p className="font-body text-navy-700 text-lg max-w-xl mx-auto leading-relaxed dark:text-cream/55">
//             Dedicated legal representation practising before Allahabad High Court, Lucknow Bench—rooted in law, rising with you.
//           </p>
//         </div>

//         {/* Hover-expand grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//           {services.map(s => {
//             const Icon = s.icon
//             return (
//               <div key={s.id} className="relative group" style={{ zIndex: 0 }}>
//                 {/* Base card — always visible, defines grid footprint */}
//                 <div className="glass-card rounded-sm border border-navy-900/10 dark:border-gold-500/15 p-6 h-full transition-colors duration-300 group-hover:border-gold-500/50">
//                   <div className="w-11 h-11 rounded-sm border border-gold-500/40 flex items-center justify-center mb-4 dark:border-gold-500/30">
//                     <Icon className="w-5 h-5 text-gold-600 dark:text-gold-400" />
//                   </div>
//                   <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream mb-2 tracking-tight">
//                     {s.title}
//                   </h3>
//                   <p className="font-body text-navy-700/80 dark:text-cream/55 text-sm leading-relaxed">
//                     {s.description}
//                   </p>
//                 </div>

//                 {/* Expanded overlay — pops out on hover, sits above neighboring cards */}
//                 <div
//                   className="absolute left-0 top-0 w-full opacity-0 invisible translate-y-1
//                              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
//                              group-hover:z-30 transition-all duration-300 ease-out pointer-events-none
//                              group-hover:pointer-events-auto"
//                 >
//                   <div className="glass-card rounded-sm border border-gold-500/60 shadow-2xl p-6 bg-white dark:bg-navy-950">
//                     <div className="w-11 h-11 rounded-sm border border-gold-500/40 flex items-center justify-center mb-4 dark:border-gold-500/30">
//                       <Icon className="w-5 h-5 text-gold-600 dark:text-gold-400" />
//                     </div>
//                     <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream mb-3 tracking-tight">
//                       {s.title}
//                     </h3>
//                     <div className="max-h-72 overflow-y-auto pr-2 scrollbar-thin space-y-2">
//                       {s.items.map(item => (
//                         <div key={item} className="flex items-start gap-2.5">
//                           <div className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0 mt-1.5" />
//                           <span className="font-body text-navy-800 dark:text-cream/75 text-sm leading-relaxed">
//                             {item}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
                    
//                      <a href="#contact"
//                       className="btn-gold inline-flex items-center gap-2 text-navy-900 font-caps font-semibold text-xs tracking-widest uppercase px-5 py-2.5 rounded-sm mt-5"   >
//                       Consult Now
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             )
//           })}
//         </div>
//       </div>
//     </section>
//   )
// }