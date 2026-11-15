import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, KeyRound, ShieldCheck } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceLanguageSwitch from '@/components/ServiceLanguageSwitch'
import ServiceContactLinks from '@/components/ServiceContactLinks'
import ServiceStats from '@/components/ServiceStats'
import TranslatedFaqs, { type TranslatedFaq } from '@/components/TranslatedFaqs'
import LucknowChambers from '@/components/LucknowChambers'
import TeamCarousel from '@/components/TeamCarousel'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import { GuideToc } from '@/components/LucknowGuide'
import { getBlogPostsBySlugs } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, LUCKNOW_SERVICE_LOCATION, whatsappUrl } from '@/lib/contactLinks'
import {
  bailHindiSearch, bailHindiUrgent, bailHindiRemedies, bailHindiSpecial,
  bailHindiAssessment, bailHindiNotice, bailHindiCourts, bailHindiCrossReferences,
  bailHindiDeadlines, bailHindiDocuments, bailHindiProcessSteps, bailHindiRelease,
  bailHindiTranslatedFaqs, hindiFaqs, hinglishFaqs, type BailHindiSection,
} from '@/lib/guides/bailHindi'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const ENGLISH_PATH = '/services/bail-lawyer-lucknow'
const PAGE_PATH = `${ENGLISH_PATH}/hindi`
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const bailLead = teamMembers.find(member => member.slug === 'aditya-narayan-shukla')
const bailTeam = ['jitendra-tiwari', 'abhishek-mishra', 'shishir-pandey', 'priyesh-dwivedi']
  .flatMap(slug => teamMembers.filter(member => member.slug === slug))
const blogSlugs = ['pre-arrest-rights-police-investigation-anticipatory-bail', 'regular-bail-default-statutory-bail-lucknow-bench']
const headingClass = 'mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'

export const metadata: Metadata = {
  title: { absolute: bailHindiSearch.title },
  description: bailHindiSearch.description,
  keywords: ['लखनऊ में जमानत के वकील', 'अग्रिम जमानत लखनऊ', 'नियमित जमानत लखनऊ', 'डिफॉल्ट जमानत', 'लखनऊ हाईकोर्ट जमानत', 'Bail Lawyer Lucknow', 'Anticipatory Bail Lucknow', 'Lucknow mein zamanat ka vakil', 'NBW recall Lucknow'],
  alternates: { canonical: PAGE_PATH, languages: { en: ENGLISH_PATH, hi: PAGE_PATH, 'x-default': ENGLISH_PATH } },
  openGraph: { title: bailHindiSearch.title, description: bailHindiSearch.description, url: PAGE_PATH, locale: 'hi_IN', alternateLocale: ['en_IN'] },
  twitter: { card: 'summary_large_image', title: bailHindiSearch.title, description: bailHindiSearch.description },
}

const faqItems: TranslatedFaq[] = [
  ...bailHindiTranslatedFaqs,
  ...hindiFaqs.map((item, index) => ({ ...item, id: index === 0 ? 'hindi-faqs' : undefined })),
  ...hinglishFaqs.map<TranslatedFaq>((item, index) => ({ ...item, language: 'hi-Latn', id: index === 0 ? 'hinglish-faqs' : undefined })),
  { ...bailHindiSearch, id: 'choosing-an-advocate' },
]

const structuredData = [
  {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`,
    url: PAGE_URL, name: bailHindiSearch.title, inLanguage: 'hi',
    translationOfWork: { '@id': `${SITE_URL}${ENGLISH_PATH}#webpage` },
  },
  {
    '@context': 'https://schema.org', '@type': 'LegalService', '@id': `${PAGE_URL}#legalservice`,
    ...LUCKNOW_SERVICE_LOCATION,
    name: 'Sumanjari & Co. Advocates — लखनऊ में जमानत और अग्रिम जमानत',
    url: PAGE_URL, description: bailHindiSearch.description, telephone: CHAMBER_TEL.replace('tel:', ''),
    branchOf: { '@id': `${SITE_URL}/#organization` },
    areaServed: [{ '@type': 'City', name: 'Lucknow' }, { '@type': 'State', name: 'Uttar Pradesh' }],
    serviceType: ['Anticipatory bail', 'Regular bail', 'Default bail', 'NBW recall'],
  },
  {
    '@context': 'https://schema.org', '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'मुख्य पृष्ठ', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'आपराधिक मामले', item: `${SITE_URL}/services/criminal-lawyer-lucknow` },
      { '@type': 'ListItem', position: 3, name: 'जमानत गाइड', item: `${SITE_URL}${ENGLISH_PATH}` },
      { '@type': 'ListItem', position: 4, name: 'जमानत की जानकारी — हिंदी', item: PAGE_URL },
    ],
  },
  {
    '@context': 'https://schema.org', '@type': 'FAQPage', inLanguage: ['hi', 'hi-Latn'],
    mainEntity: faqItems.map(({ question, answer }) => ({
      '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  },
]

function ConsultationActions() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Link href="/#contact" className="btn-gold rounded-sm px-5 py-3.5 font-body text-base font-semibold text-navy-900">सलाह के लिए संपर्क करें</Link>
      <ServiceContactLinks whatsappHref={whatsappUrl('नमस्ते, मुझे लखनऊ में जमानत / पुलिस नोटिस के बारे में हिंदी में कानूनी सलाह चाहिए।')} />
    </div>
  )
}

function TextSection({ content }: { content: BailHindiSection }) {
  return (
    <section id={content.id} className="mb-16 scroll-mt-28">
      <h2 className={headingClass}>{content.title}</h2>
      {content.paragraphs && <div className={`mb-7 space-y-5 ${bodyClass}`}>{content.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>}
      {content.articles && <div className="space-y-8">{content.articles.map(article => (
        <article key={article.title} id={article.id} className="scroll-mt-28">
          <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{article.title}</h3>
          <div className={`space-y-4 ${bodyClass}`}>{article.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
        </article>
      ))}</div>}
      {content.steps && <ol className={`list-decimal space-y-4 pl-5 ${bodyClass}`}>{content.steps.map(step => <li key={step.title}><strong className="text-navy-900 dark:text-cream">{step.title}</strong> {step.text}</li>)}</ol>}
      {content.ending && <p className={`mt-6 ${bodyClass}`}>{content.ending}</p>}
    </section>
  )
}

export default function HindiBailLawyerPage() {
  const blogPosts = getBlogPostsBySlugs(blogSlugs)
  return (
    <main lang="hi" className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div lang="en"><Navbar /></div>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/services/criminal-lawyer-lucknow" className="inline-flex items-center gap-2 font-body text-sm text-navy-700/70 hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> आपराधिक मामलों पर वापस जाएँ</Link>
            <ServiceLanguageSwitch basePath={ENGLISH_PATH} language="hi" />
          </div>
          <header className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1fr)_252px]">
            <div className="min-w-0">
              <p className="mb-4 font-body text-base font-semibold text-gold-700 dark:text-gold-400">आपराधिक कानून · जमानत की जानकारी हिंदी में</p>
              <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">लखनऊ में जमानत और अग्रिम जमानत के वकील — <em className="text-gold-gradient">सत्र अदालत और इलाहाबाद हाईकोर्ट (लखनऊ बेंच)</em></h1>
              <p className={`mb-6 text-lg ${bodyClass}`}>{bailHindiSearch.description}</p>
              <p className={bodyClass}>हमारी जमानत संबंधी प्रैक्टिस का नेतृत्व अधिवक्ता आदित्य नारायण शुक्ल करते हैं, जिनके साथ अधिवक्ता जितेंद्र तिवारी और आपराधिक टीम काम करती है। उपलब्ध उपाय अपराध, हिरासत, लागू कानून और अदालत के अधिकार-क्षेत्र पर निर्भर है। ट्रायल, अपील या कार्यवाही की चुनौती के लिए <Link href="/services/criminal-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">आपराधिक बचाव और FIR रद्दीकरण</Link> की जानकारी देखें।</p>
              <ServiceStats service="criminal" language="hi" />
              <div className="hidden md:block"><ConsultationActions /></div>
            </div>
            {bailLead && <div className="min-w-0 border-l border-gold-500/30 pl-6">
              {bailLead.img && <Image src={bailLead.img} alt={bailLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: bailLead.focus }} />}
              <p className="font-body text-sm font-semibold text-gold-700 dark:text-gold-400">आपराधिक मामलों के प्रमुख</p>
              <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{bailLead.name}</h2>
              <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{bailLead.role}</p>
              <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{bailLead.credentials}</p>
              <Link href={`/team/${bailLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">प्रोफाइल देखें <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>}
            <div className="md:hidden"><ConsultationActions /></div>
          </header>
          <GuideToc language="hi" items={[
            { id: 'immediate-bail', label: 'अभी की स्थिति और जरूरी कदम' }, { id: 'bail-remedies', label: 'जमानत के प्रकार' },
            { id: 'special-statutes', label: 'विशेष कानूनों के मामले' }, { id: 'bail-assessment', label: 'जमानत के आधार और साक्ष्य' },
            { id: 'police-notice-remand', label: 'नोटिस, गिरफ्तारी और NBW', children: [{ id: 'nbw-recall', label: 'वारंट रिकॉल' }] },
            { id: 'bail-courts', label: 'सही अदालत' }, { id: 'bail-cross-reference', label: 'BNSS / CrPC की धाराएँ' },
            { id: 'default-bail-deadlines', label: 'डिफ़ॉल्ट जमानत की समय-सीमा' }, { id: 'bail-process', label: 'आवेदन और दस्तावेज़' },
            { id: 'bail-release-conditions', label: 'रिहाई, जमानतदार और शर्तें' }, { id: 'bail-team', label: 'हमारी टीम' },
            { id: 'lucknow-chambers', label: 'चैंबर और रास्ता' }, { id: 'bail-faqs', label: 'जमानत के सामान्य सवाल' },
          ]} />
          <section id="immediate-bail" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>लखनऊ में गिरफ्तारी से पहले और बाद की जरूरी स्थितियाँ</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{bailHindiUrgent.map(item => <Link key={item.title} href={item.href} className="glass-card rounded-sm border border-gold-500/20 p-6 transition-colors hover:border-gold-500/60"><ShieldCheck aria-hidden="true" className="mb-4 h-5 w-5 text-gold-600 dark:text-gold-400" /><h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={`text-sm ${bodyClass}`}>{item.text}</p></Link>)}</div>
          </section>
          <section id="bail-remedies" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>जमानत के प्रकार और उपलब्ध कानूनी उपाय</h2>
            <div className="grid gap-5 sm:grid-cols-2">{bailHindiRemedies.map(item => <article key={item.title} className="glass-card rounded-sm border border-gold-500/20 p-6"><KeyRound aria-hidden="true" className="mb-4 h-5 w-5 text-gold-600 dark:text-gold-400" /><h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={bodyClass}>{item.text}</p></article>)}</div>
          </section>
          <section id="special-statutes" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>विशेष कानूनों और गंभीर अपराधों में जमानत</h2>
            <div className="grid gap-8 sm:grid-cols-2">{bailHindiSpecial.map(item => <article key={item.title}><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={bodyClass}>{item.text}</p><ul className={`mt-4 list-disc space-y-3 pl-5 text-sm ${bodyClass}`}>{item.points.map(point => <li key={point}>{point}</li>)}</ul>{item.href && <Link href={item.href} className="mt-3 inline-block font-body text-gold-700 underline dark:text-gold-400">{item.label}</Link>}</article>)}</div>
          </section>
          <TextSection content={bailHindiAssessment} />
          <p className={`mb-12 ${bodyClass}`}>FIR और कार्यवाही की चुनौती के लिए <Link href="/services/criminal-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">आपराधिक बचाव और FIR रद्दीकरण</Link> देखें।</p>
          <TextSection content={bailHindiNotice} />
          <section id="bail-courts" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>लखनऊ में जमानत आवेदन किस अदालत में जाती है?</h2>
            <div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left font-body text-sm">
              <caption className={`mb-3 text-left ${bodyClass}`}>अपराध, क्षेत्र और वर्तमान अदालत नियुक्ति के अनुसार सामान्य मंच</caption>
              <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">{['मामला / चरण', 'अदालत', 'स्थान', 'लागू प्रावधान'].map(label => <th key={label} scope="col" className="p-3">{label}</th>)}</tr></thead>
              <tbody className="text-navy-800 dark:text-cream/75">{bailHindiCourts.map(([stage, ...cells]) => <tr key={stage} className="border-b border-gold-500/15 align-top"><th scope="row" className="p-3 font-semibold">{stage}</th>{cells.map(cell => <td key={cell} className="p-3">{cell}</td>)}</tr>)}</tbody>
            </table></div>
            <p className={`mt-5 ${bodyClass}`}>आने से पहले रजिस्ट्री, कॉज़ लिस्ट और तय कोर्टरूम जाँचें। चैंबर अपॉइंटमेंट और अदालत सुनवाई अलग हैं। हर FIR का मामला लखनऊ बेंच में नहीं लाया जा सकता।</p>
          </section>
          <section id="bail-cross-reference" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>जमानत की धाराएँ: BNSS 2023 और CrPC 1973</h2>
            <p className={`mb-5 ${bodyClass}`}>BNSS 1 जुलाई 2024 से लागू हुई। धारा 531 की संरक्षण उपबंध और मामले का प्रक्रियागत इतिहास तय करते हैं कि पुरानी कार्यवाही CrPC में जारी रहेगी या नहीं। संबंधित धारा संख्याएँ होने से सभी नियम एक जैसे नहीं हो जाते।</p>
            <div className="overflow-x-auto"><table className="w-full min-w-[400px] text-left font-body text-sm">
              <caption className="sr-only">जमानत और नोटिस की संबंधित धाराएँ</caption>
              <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">{['उपाय', 'BNSS धारा', 'CrPC धारा'].map(label => <th key={label} scope="col" className="p-3">{label}</th>)}</tr></thead>
              <tbody className="text-navy-800 dark:text-cream/75">{bailHindiCrossReferences.map(([remedy, bnss, crpc]) => <tr key={remedy} className="border-b border-gold-500/15"><th scope="row" className="p-3 font-semibold">{remedy}</th><td className="p-3">{bnss}</td><td className="p-3">{crpc}</td></tr>)}</tbody>
            </table></div>
          </section>
          <TextSection content={bailHindiDeadlines} />
          <section id="bail-process" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>जमानत फाइलिंग की प्रक्रिया और दस्तावेज़ सूची</h2>
            <h3 className="mb-4 font-display text-xl font-bold text-navy-900 dark:text-cream">अग्रिम और नियमित जमानत के लिए जरूरी दस्तावेज़</h3>
            <ul className={`mb-8 list-disc space-y-3 pl-5 ${bodyClass}`}>{bailHindiDocuments.map(item => <li key={item}>{item}</li>)}</ul>
            <h3 className="mb-4 font-display text-xl font-bold text-navy-900 dark:text-cream">फाइलिंग, नोटिस, सुनवाई और बॉन्ड सत्यापन के चरण</h3>
            <ol className={`list-decimal space-y-4 pl-5 ${bodyClass}`}>{bailHindiProcessSteps.map(step => <li key={step.title}><strong className="text-navy-900 dark:text-cream">{step.title}</strong> {step.text}</li>)}</ol>
            <p className={`mt-6 ${bodyClass}`}>संबंधित लेख (English): <Link href={`/blog/${blogSlugs[0]}`} className="text-gold-700 underline dark:text-gold-400">गिरफ्तारी से पहले अधिकार और अग्रिम जमानत</Link> तथा <Link href={`/blog/${blogSlugs[1]}`} className="text-gold-700 underline dark:text-gold-400">नियमित और डिफ़ॉल्ट जमानत</Link>।</p>
          </section>
          <TextSection content={bailHindiRelease} />
          <section id="bail-team" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>लखनऊ में जमानत और आपराधिक मामलों की टीम</h2>
            <p className={`mb-8 ${bodyClass}`}>अधिवक्ता आदित्य नारायण शुक्ल आपराधिक मामलों का नेतृत्व करते हैं। अधिवक्ता जितेंद्र तिवारी, अधिवक्ता अभिषेक मिश्रा, अधिवक्ता शिशिर पांडेय और अधिवक्ता प्रियेश द्विवेदी सहयोग करते हैं। नीचे उनकी दर्ज योग्यताएँ और प्रोफाइल देखें; मामलों का आवंटन अदालत और मामले की जरूरत के अनुसार होता है।</p>
            <div lang="en"><TeamCarousel members={bailTeam} label="Bail and criminal practice team members" /></div>
          </section>
          <LucknowChambers language="hi" />
          <TranslatedFaqs id="bail-faqs" title="लखनऊ में जमानत: अक्सर पूछे जाने वाले सवाल" items={faqItems} />
          <div lang="en"><ServiceBlogs posts={blogPosts} heading="जमानत से जुड़े लेख (English)" fallbackIcon={<KeyRound aria-hidden="true" className="h-8 w-8 text-gold-600" />} /></div>
          <section className="mt-12 border-t border-gold-500/20 pt-8">
            <p className={`text-sm ${bodyClass}`}>यह पेज सामान्य कानूनी जानकारी देता है, व्यक्तिगत legal advice या bail की गारंटी नहीं। हर मामले में लागू कानून, वर्तमान फैसले और अदालत निर्देश जाँचें। वकील की फीस वहन करना संभव न हो तो जिला विधिक सेवा प्राधिकरण, लखनऊ से कानूनी सहायता के बारे में पूछें।</p>
            <ConsultationActions />
          </section>
        </div>
      </section>
      <div lang="en"><Footer /></div>
    </main>
  )
}
