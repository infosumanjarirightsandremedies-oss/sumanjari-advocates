import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Landmark, MessageSquareWarning, ShieldCheck, ScrollText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceLanguageSwitch from '@/components/ServiceLanguageSwitch'
import ServiceContactLinks from '@/components/ServiceContactLinks'
import ServiceStats from '@/components/ServiceStats'
import TranslatedFaqs, { type TranslatedFaq } from '@/components/TranslatedFaqs'
import LucknowChambers from '@/components/LucknowChambers'
import FirmCredentials from '@/components/FirmCredentials'
import TeamCarousel from '@/components/TeamCarousel'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import { GuideToc, GuideStages, StatuteTable } from '@/components/LucknowGuide'
import {
  criminalHindiSearch, criminalHindiUrgent, criminalHindiMatters, criminalHindiWhyIssues,
  criminalHindiApproach, criminalHindiJurisdiction, criminalHindiStatutes, criminalHindiStatuteFootnote,
  criminalHindiCrossReferences, criminalHindiSpecial, criminalHindiDocuments, criminalHindiCheque,
  criminalHindiNoticeReview, criminalHindiFaqs, criminalHindiStages,
} from '@/lib/guides/criminalHindi'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, LUCKNOW_SERVICE_LOCATION, whatsappUrl } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const ENGLISH_PATH = '/services/criminal-lawyer-lucknow'
const PAGE_PATH = `${ENGLISH_PATH}/hindi`
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const BAIL_HINDI_PATH = '/services/bail-lawyer-lucknow/hindi'
const criminalLead = teamMembers.find(member => member.slug === 'aditya-narayan-shukla')
const criminalTeam = ['jitendra-tiwari', 'abhishek-mishra', 'shishir-pandey', 'priyesh-dwivedi']
  .flatMap(slug => teamMembers.filter(member => member.slug === slug))
const headingClass = 'mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'

export const metadata: Metadata = {
  title: { absolute: criminalHindiSearch.title },
  description: criminalHindiSearch.description,
  keywords: [
    'लखनऊ में आपराधिक वकील', 'FIR रद्दीकरण वकील लखनऊ', 'आपराधिक बचाव वकील लखनऊ', 'चेक बाउंस वकील लखनऊ',
    'Criminal Lawyer Lucknow', 'Lucknow mein criminal vakil', 'BNSS vakil Lucknow', 'धारा 528 BNSS',
  ],
  alternates: { canonical: PAGE_PATH, languages: { en: ENGLISH_PATH, hi: PAGE_PATH, 'x-default': ENGLISH_PATH } },
  openGraph: { title: criminalHindiSearch.title, description: criminalHindiSearch.description, url: PAGE_PATH, locale: 'hi_IN', alternateLocale: ['en_IN'] },
  twitter: { card: 'summary_large_image', title: criminalHindiSearch.title, description: criminalHindiSearch.description },
}

const faqItems: TranslatedFaq[] = [
  ...criminalHindiFaqs,
  { ...criminalHindiSearch, id: 'choosing-an-advocate' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: criminalHindiSearch.title, inLanguage: 'hi', translationOfWork: { '@id': `${SITE_URL}${ENGLISH_PATH}#webpage` } },
    {
      '@type': 'LegalService', '@id': `${PAGE_URL}#legal-service`, ...LUCKNOW_SERVICE_LOCATION,
      name: 'Sumanjari & Co. Advocates — लखनऊ में आपराधिक वकील', url: PAGE_URL,
      description: criminalHindiSearch.description, telephone: CHAMBER_TEL.replace('tel:', ''),
      branchOf: { '@id': `${SITE_URL}/#organization` }, serviceType: 'Criminal Lawyer Services',
      areaServed: [{ '@type': 'City', name: 'Lucknow' }, { '@type': 'State', name: 'Uttar Pradesh' }],
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#criminal-faqs`, inLanguage: 'hi',
      mainEntity: faqItems.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    },
    {
      '@type': 'HowTo', '@id': `${PAGE_URL}#criminal-procedure`, name: 'लखनऊ में आपराधिक मामले की प्रक्रिया: Stage 1 से Stage 10 तक', inLanguage: 'hi',
      description: 'सामान्य प्रक्रिया की जानकारी; हर मामले में हर चरण जरूरी नहीं। तथ्यों, लागू कानून, अधिकार-क्षेत्र और अदालत के आदेशों के अनुसार रास्ता बदलता है।',
      step: criminalHindiStages.map((stage, index) => ({ '@type': 'HowToStep', position: index + 1, name: stage.title, text: stage.body.join(' '), url: `${PAGE_URL}#${stage.id}` })),
    },
    {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'मुख्य पृष्ठ', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'आपराधिक मामले', item: `${SITE_URL}${ENGLISH_PATH}` },
        { '@type': 'ListItem', position: 3, name: 'आपराधिक मामले — हिंदी', item: PAGE_URL },
      ],
    },
  ],
}

function ConsultationActions({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link href="/#contact" className="btn-gold rounded-sm px-5 py-3.5 font-body text-base font-semibold text-navy-900">सलाह के लिए संपर्क करें</Link>
      <ServiceContactLinks whatsappHref={whatsappUrl('नमस्ते, मुझे लखनऊ में FIR, जमानत या आपराधिक मामले पर हिंदी में कानूनी सलाह चाहिए।')} />
    </div>
  )
}

export default function HindiCriminalLawyerPage() {
  const blogPosts = getBlogPostsByCategory('Criminal Matters')
  return (
    <main lang="hi" className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div lang="en"><Navbar /></div>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href={ENGLISH_PATH} className="inline-flex items-center gap-2 font-body text-sm text-navy-700/70 hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> आपराधिक मामलों पर वापस जाएँ</Link>
            <ServiceLanguageSwitch basePath={ENGLISH_PATH} language="hi" />
          </div>
          <header className="mb-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_252px]">
            <div className="min-w-0">
              <p className="mb-4 font-body text-base font-semibold text-gold-700 dark:text-gold-400">आपराधिक कानून · सरल हिंदी में जानकारी</p>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">लखनऊ में आपराधिक वकील व अधिवक्ता — <em className="text-gold-gradient">FIR रद्दीकरण, ट्रायल बचाव और अपील</em></h1>
              <p className={`text-lg ${bodyClass}`}>लखनऊ में FIR, पुलिस नोटिस या गिरफ्तारी का सामना कर रहे हैं? हमारे आपराधिक वकील और अधिवक्ता नियमित व Anticipatory Bail, FIR व आरोपपत्र रद्द कराने, आपराधिक सुनवाई में बचाव और जिला व सत्र न्यायालय, लखनऊ तथा इलाहाबाद हाईकोर्ट, लखनऊ बेंच में अपील पर सलाह देते हैं।</p>
              <p className={`mt-4 ${bodyClass}`}>लखनऊ में एक आपराधिक मामला सामान्यतः Lucknow Police Commissionerate के किसी थाने में FIR या शिकायत से शुरू होकर, सिविल कोर्ट, कैसरबाग के मजिस्ट्रेट और सत्र न्यायालय के सामने जमानत व रिमांड से होते हुए, सुनवाई और अपील तक पहुँचता है। Quashing, Anticipatory Bail और अपील गोमती नगर स्थित इलाहाबाद हाईकोर्ट, लखनऊ बेंच में ले जाई जा सकती हैं। नीचे दिए दस चरण हर कदम समझाते हैं।</p>
              <ServiceStats service="criminal" language="hi" />
              <div className="mt-8 hidden md:block"><ConsultationActions /></div>
            </div>
            {criminalLead && <div className="min-w-0 border-l border-gold-500/30 pl-6">
              {criminalLead.img && <Image src={criminalLead.img} alt={criminalLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: criminalLead.focus }} />}
              <p className="font-body text-sm font-semibold text-gold-700 dark:text-gold-400">आपराधिक प्रैक्टिस के प्रमुख</p>
              <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{criminalLead.name}</h2>
              <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{criminalLead.role}</p>
              <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{criminalLead.credentials}</p>
              <Link href={`/team/${criminalLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">प्रोफाइल देखें <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>}
            <div className="md:hidden"><ConsultationActions /></div>
          </header>

          <GuideToc language="hi" items={[
            { id: 'criminal-team', label: 'हमारी टीम' },
            { id: 'lucknow-chambers', label: 'हमारे लखनऊ Chambers' },
            { id: 'choosing-an-advocate', label: 'वकील कैसे चुनें' },
            { id: 'forums', label: 'जिन अदालतों में हम पेश होते हैं' },
            { id: 'statutory-framework', label: 'कानूनी ढाँचा: BNS, BNSS, BSA' },
            { id: 'bnss-cross-reference', label: 'IPC/CrPC बनाम BNS/BNSS तुलना तालिका' },
            { id: 'special-statute-defence', label: 'NDPS, Gangsters, POCSO, SC/ST व CBI/ED बचाव' },
            { id: 'criminal-procedure', label: 'आपराधिक मामले की प्रक्रिया: Stage 1 से Stage 10 तक', children: criminalHindiStages.map((stage, index) => ({ id: stage.id, label: `Stage ${index + 1}: ${stage.title}` })) },
            { id: 'matters', label: 'हम जिन आपराधिक मामलों में मदद करते हैं' },
            { id: 'documents', label: 'लाने लायक दस्तावेज़' },
            { id: 'faqs', label: 'अक्सर पूछे जाने वाले सवाल' },
            { id: 'contact', label: 'आपराधिक वकील से बात करें' },
          ]} />

          <section id="urgent-situations" aria-labelledby="urgent-situations-heading" className="mb-16 scroll-mt-28">
            <h2 id="urgent-situations-heading" className={headingClass}>लखनऊ में तत्काल आपराधिक बचाव की स्थितियाँ</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {criminalHindiUrgent.map(({ icon: Icon, title, text, href }) => (
                <a key={title} href={href} className="glass-card group flex flex-col gap-2 rounded-sm border border-gold-500/25 p-5 transition-colors hover:border-gold-500/50 dark:border-gold-500/20">
                  <Icon aria-hidden="true" className="h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" />
                  <h3 className="font-display text-base font-bold leading-snug text-navy-900 group-hover:text-gold-700 dark:text-cream dark:group-hover:text-gold-400">{title}</h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{text}</p>
                </a>
              ))}
            </div>
          </section>

          <section id="criminal-team" aria-labelledby="criminal-team-heading" className="mb-16 scroll-mt-28">
            <h2 id="criminal-team-heading" className={headingClass}>आपराधिक कानून की हमारी टीम</h2>
            <p className={`mb-8 ${bodyClass}`}>अधिवक्ता आदित्य नारायण शुक्ल हमारी आपराधिक कानून प्रैक्टिस का नेतृत्व करते हैं, साथ में अधिवक्ता जितेंद्र तिवारी, अधिवक्ता अभिषेक मिश्रा, अधिवक्ता शिशिर पांडेय और अधिवक्ता प्रियेश द्विवेदी सहयोग करते हैं। नीचे हर सदस्य की प्रोफाइल में उनके अपने कार्यक्षेत्र दिए गए हैं।</p>
            <div lang="en"><TeamCarousel members={criminalTeam} label="Criminal law team members" /></div>
          </section>

          <LucknowChambers language="hi" />

          <div id="forums" className="mb-16 scroll-mt-28">
            <div className="mb-8 flex items-center gap-2">
              <Landmark aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" />
              <h2 className={`${headingClass} mb-0`}>जिन अदालतों में हम पेश होते हैं</h2>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {criminalHindiJurisdiction.map(({ title, blurb }) => (
                <div key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <h3 className="mb-2 font-display text-base font-bold text-navy-900 dark:text-cream">{title}</h3>
                  <p className="font-body text-sm leading-relaxed text-navy-700/85 dark:text-cream/60">{blurb}</p>
                </div>
              ))}
            </div>
          </div>

          <StatuteTable
            language="hi" id="statutory-framework" heading="कानूनी ढाँचा: BNS, BNSS और BSA"
            intro="लखनऊ के थानों, सिविल कोर्ट कैसरबाग और इलाहाबाद हाईकोर्ट, लखनऊ बेंच से गुजरते हुए आपराधिक मामले पर लागू होने वाली संहिताएँ और विशेष कानून।"
            rows={criminalHindiStatutes}
          />
          <p className="-mt-10 mb-16 max-w-3xl font-body text-sm leading-relaxed text-navy-700 dark:text-cream/55">{criminalHindiStatuteFootnote}</p>

          <section id="bnss-cross-reference" aria-labelledby="bnss-cross-reference-heading" className="mb-16 scroll-mt-28">
            <h2 id="bnss-cross-reference-heading" className={headingClass}>IPC / CrPC / Evidence Act बनाम BNS / BNSS / BSA (2023): लखनऊ की अदालतों के लिए तुलना तालिका</h2>
            <p className={`mb-6 max-w-3xl ${bodyClass}`}>हमारे आपराधिक वकील लखनऊ में जिन उपायों का सबसे अधिक इस्तेमाल करते हैं, वे पुरानी संहिताओं से भारतीय नागरिक सुरक्षा संहिता, 2023 तक किस तरह मैप होते हैं और हर उपाय किस मंच पर सुना जाता है।</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left font-body text-sm">
                <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">{['उपाय', 'CrPC → BNSS Mapping', 'लखनऊ में मंच'].map(label => <th key={label} scope="col" className="py-3 pr-4 font-semibold">{label}</th>)}</tr></thead>
                <tbody className="text-navy-800 dark:text-cream/75">
                  {criminalHindiCrossReferences.map(([remedy, oldToNew, forum]) => (
                    <tr key={remedy} className="border-b border-gold-500/10 align-top">
                      <th scope="row" className="py-3 pr-4 font-semibold">{remedy}</th>
                      <td className="py-3 pr-4">{oldToNew}</td>
                      <td className="py-3">{forum}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div id="matters" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>हम जिन आपराधिक मामलों में मदद करते हैं</h2>
            <div className="grid gap-5 sm:grid-cols-2">
              {criminalHindiMatters.map(({ icon: Icon, title, points, href }) => (
                <div key={title} className={`glass-card relative rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15 ${href ? 'transition-colors hover:border-gold-500/60 focus-within:ring-2 focus-within:ring-gold-500' : ''}`}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40">
                    <Icon aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                  </div>
                  <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">
                    {href ? (
                      <Link href={href} className="inline-flex items-center gap-2 focus:outline-none">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {title}
                        <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" />
                      </Link>
                    ) : title}
                  </h3>
                  <ul className="space-y-2">
                    {points.map(point => (
                      <li key={point} className="flex gap-2.5 text-sm text-navy-700/85 dark:text-cream/60">
                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />
                        <span className="font-body leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className={`mt-6 ${bodyClass}`}>हिरासत की स्थिति, पुलिस नोटिस, जमानत के आवेदन और surety की जरूरतों के लिए हमारी <Link href={BAIL_HINDI_PATH} className="text-gold-700 underline underline-offset-4 dark:text-gold-400">लखनऊ में Anticipatory और नियमित जमानत वकील</Link> की जानकारी देखें।</p>
          </div>

          <section id="special-statute-defence" aria-labelledby="special-statute-defence-heading" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 id="special-statute-defence-heading" className={headingClass}>विशेष कानून और उच्च-दाँव वाले आपराधिक मामलों का बचाव, लखनऊ (NDPS, Gangsters Act, POCSO, SC/ST Act व CBI/ED)</h2>
            <p className={`mb-8 max-w-3xl ${bodyClass}`}>विशेष कानूनों के अभियोजन में reverse burden, वैधानिक presumption और सख्त जमानत शर्तें होती हैं, जिन्हें सामान्य बचाव रणनीति सँभाल नहीं पाती। हमारी टीम लखनऊ के designated विशेष न्यायालयों और इलाहाबाद हाईकोर्ट, लखनऊ बेंच में ऐसे मामलों में पेश होती है।</p>
            <div className="space-y-8">
              {criminalHindiSpecial.map(item => (
                <div key={item.title} className="border-l-2 border-gold-500/50 pl-5">
                  <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{item.title}</h3>
                  <p className={bodyClass}>
                    {item.text}
                    {item.href && <> <Link href={item.href} className="text-gold-700 underline underline-offset-4 dark:text-gold-400">{item.label}</Link>।</>}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <div className="mb-16 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-cream"><MessageSquareWarning aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" /> महत्वपूर्ण मुद्दे जिन पर हम सलाह देते हैं</h2>
              <ul className="space-y-3">
                {criminalHindiWhyIssues.map(item => <li key={item} className="flex items-start gap-2.5 font-body text-navy-800 dark:text-cream/75"><span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gold-500" />{item}</li>)}
              </ul>
            </div>
            <div>
              <h2 className="mb-5 flex items-center gap-2 font-display text-2xl font-bold text-navy-900 dark:text-cream"><ShieldCheck aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" /> हमारा तरीका</h2>
              <p className="font-body leading-relaxed text-navy-800 dark:text-cream/75">{criminalHindiApproach}</p>
            </div>
          </div>

          <section id="documents" aria-labelledby="criminal-consultation" className="mb-16 grid scroll-mt-28 gap-10 md:grid-cols-2">
            <div>
              <h2 id="criminal-consultation" className={headingClass}>आपराधिक वकील के पास क्या दस्तावेज़ लाएँ</h2>
              <p className={`mb-4 ${bodyClass}`}>जो उपलब्ध हो वह लाएँ; फाइल अधूरी होने की वजह से गिरफ्तारी या नजदीकी सुनवाई पर सलाह लेने में देर न करें।</p>
              <ul className={`list-disc space-y-3 pl-5 ${bodyClass}`}>{criminalHindiDocuments.map(item => <li key={item}>{item}</li>)}</ul>
            </div>
            <div>
              <h2 className={headingClass}>पहली सलाह में हम क्या आकलन करते हैं</h2>
              <p className={`mb-4 ${bodyClass}`}>हम मामले में आपकी भूमिका, आरोपित अपराध, हिरासत की स्थिति, पहले के आदेश और तत्काल समय-सीमाओं की समीक्षा करते हैं। इससे जमानत के आवेदन को आरोपमुक्ति के अनुरोध, quashing याचिका, trial बचाव या अपील से अलग पहचानने में मदद मिलती है। उपाय चुनने से पहले सही अधिकार-क्षेत्र वाली अदालत पहचानना जरूरी है।</p>
              <p className={`mb-4 ${bodyClass}`}>काम का प्रस्तावित scope, professional fees, filing के खर्च और कौन पेश होगा, यह पूछें। इलेक्ट्रॉनिक साक्ष्य से जुड़े मामलों के लिए हमारी <Link href="/services/cyber-crime-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">साइबर अपराध कानूनी सेवाएँ</Link> देखें। संबंधित वैवाहिक मुद्दे हमारी <Link href="/services/family-advocate/hindi" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">पारिवारिक और वैवाहिक प्रैक्टिस</Link> में शामिल हैं।</p>
              <p className="font-body text-sm leading-relaxed text-navy-700 dark:text-cream/60">यह पेज सामान्य जानकारी देता है, व्यक्तिगत मामले की सलाह नहीं। राहत तथ्यों, लागू कानून और अदालत पर निर्भर करती है; किसी परिणाम या समय-सीमा की गारंटी नहीं है।</p>
            </div>
          </section>

          <GuideStages
            language="hi" id="criminal-procedure" heading="लखनऊ में आपराधिक मामले की प्रक्रिया: Stage 1 से Stage 10 तक"
            intro="लखनऊ के थानों, सिविल कोर्ट कैसरबाग और इलाहाबाद हाईकोर्ट, लखनऊ बेंच से गुजरते हुए आपराधिक मामला वास्तव में कैसे आगे बढ़ता है, और हर चरण में लागू BNSS प्रावधान।"
            stages={criminalHindiStages}
          />

          <div id="cheque-bounce" className="glass-card mb-16 scroll-mt-28 rounded-sm border border-gold-500/20 p-6 md:p-8">
            <h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{criminalHindiCheque.title}</h3>
            {criminalHindiCheque.paragraphs.map(paragraph => <p key={paragraph} className="mb-3 font-body leading-relaxed text-navy-800 dark:text-cream/75 last:mb-0">{paragraph}</p>)}
          </div>

          <TranslatedFaqs id="faqs" title="आपराधिक वकील, लखनऊ: अक्सर पूछे जाने वाले सवाल" items={faqItems} />

          <section aria-labelledby="criminal-notice-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="criminal-notice-review" className={headingClass}>{criminalHindiNoticeReview.heading}</h2>
            <p className={`mb-5 ${bodyClass}`}>{criminalHindiNoticeReview.paragraph1}</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{criminalHindiNoticeReview.subheading}</h3>
            <p className={bodyClass}>
              {criminalHindiNoticeReview.paragraph2Before}
              <Link href="/services/cyber-crime-lawyer-lucknow" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">{criminalHindiNoticeReview.paragraph2LinkText}</Link>
              {criminalHindiNoticeReview.paragraph2After}
            </p>
          </section>

          <div lang="en">
            <ServiceBlogs
              posts={blogPosts}
              fallbackIcon={<ScrollText aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" />}
              eyebrow="From Our Desk"
              heading="आपराधिक मामलों के लेख (अंग्रेज़ी में)"
              description="जमानत, आपराधिक बचाव और सुनवाई की प्रक्रिया पर संक्षिप्त लेख।"
              viewAllHref={`/blog?category=${encodeURIComponent('Criminal Matters')}`}
            />
          </div>

          <div id="contact" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center dark:border-gold-500/20 md:p-12">
            <h2 className={`${headingClass} mb-3`}>आपराधिक मामले का सामना कर रहे हैं?</h2>
            <p className={`mx-auto mb-8 max-w-xl ${bodyClass}`}>अपनी FIR, जमानत, सुनवाई या अपील पर हमारी टीम से बात करें — जिला व सत्र न्यायालय और इलाहाबाद हाईकोर्ट, लखनऊ बेंच में प्रतिनिधित्व करने वाली टीम।</p>
            <ConsultationActions className="justify-center" />
          </div>
        </div>
      </section>
      <div lang="en"><FirmCredentials /><Footer /></div>
    </main>
  )
}
