import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, HeartCrack, HeartHandshake, HandCoins, Baby, ShieldCheck, Scale, ScrollText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceLanguageSwitch from '@/components/ServiceLanguageSwitch'
import ServiceContactLinks from '@/components/ServiceContactLinks'
import LucknowChambers from '@/components/LucknowChambers'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import TranslatedFaqs, { type TranslatedFaq } from '@/components/TranslatedFaqs'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import {
  divorceHindiSearch, divorceHindiStages, divorceHindiStatutes, divorceHindiToc,
  divorceOriginalHindiFaqs, divorceTranslatedFaqs, divorceHindiLocalities,
  divorceHindiServices, divorceHindiDocuments, divorceHindiGrounds, divorceBlogSlugs,
} from '@/lib/guides/divorceHindi'
import { getBlogPostsBySlugs } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, HIGH_COURT_CHAMBER_ADDRESS, LUCKNOW_SERVICE_LOCATION, whatsappUrl } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const ENGLISH_PATH = '/services/divorce-lawyer-lucknow'
const PAGE_PATH = `${ENGLISH_PATH}/hindi`
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const divorceLead = teamMembers.find(member => member.slug === 'aishwarya-pandey')
const divorceTeam = ['jitendra-tiwari', 'akhilesh-yadav', 'prerna-yaduvanshi']
  .flatMap(slug => teamMembers.filter(member => member.slug === slug))
const serviceIcons = [HeartHandshake, HeartCrack, HandCoins, Baby, ShieldCheck, Scale]
const headingClass = 'mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'

export const metadata: Metadata = {
  title: { absolute: divorceHindiSearch.title },
  description: divorceHindiSearch.description,
  keywords: ['लखनऊ में तलाक के वकील', 'आपसी सहमति से तलाक', 'विवादित तलाक लखनऊ', 'भरण-पोषण और गुजारा भत्ता', 'बच्चों की अभिरक्षा', 'Divorce Advocate Lucknow', 'Mutual Consent Divorce', 'Family Court Lucknow'],
  alternates: { canonical: PAGE_PATH, languages: { en: ENGLISH_PATH, hi: PAGE_PATH, 'x-default': ENGLISH_PATH } },
  openGraph: { title: divorceHindiSearch.title, description: divorceHindiSearch.description, url: PAGE_PATH, locale: 'hi_IN', alternateLocale: ['en_IN'] },
  twitter: { card: 'summary_large_image', title: divorceHindiSearch.title, description: divorceHindiSearch.description },
}

const faqItems: TranslatedFaq[] = [
  ...divorceTranslatedFaqs,
  ...divorceOriginalHindiFaqs.map((item, index) => ({ ...item, id: index === 0 ? 'hindi-faqs' : undefined })),
  { ...divorceHindiSearch, id: 'choosing-an-advocate' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: divorceHindiSearch.title, inLanguage: 'hi',
      translationOfWork: { '@id': `${SITE_URL}${ENGLISH_PATH}#webpage` },
    },
    {
      '@type': 'LegalService', '@id': `${PAGE_URL}#legal-service`,
      ...LUCKNOW_SERVICE_LOCATION, branchOf: { '@id': `${SITE_URL}/#organization` },
      name: 'Sumanjari & Co. Advocates — लखनऊ में तलाक और वैवाहिक मामले',
      url: PAGE_URL, description: divorceHindiSearch.description,
      logo: `${SITE_URL}/favicon.png`,
      telephone: CHAMBER_TEL.replace('tel:', ''),
      email: 'info.sumanjarirightsandremedies@gmail.com',
      areaServed: [
        { '@type': 'City', name: 'Lucknow' }, { '@type': 'State', name: 'Uttar Pradesh' },
        ...divorceHindiLocalities.flatMap(({ localities }) => localities.map(name => ({
          '@type': 'Place', name, containedInPlace: { '@type': 'City', name: 'Lucknow' },
        }))),
      ],
      serviceType: 'तलाक और वैवाहिक मामलों में कानूनी सहायता',
    },
    ...(divorceLead ? [{
      '@type': 'Person', '@id': `${SITE_URL}/#aishwarya-pandey`,
      name: divorceLead.name, url: `${SITE_URL}/team/${divorceLead.slug}`, jobTitle: divorceLead.role,
      worksFor: { '@id': `${SITE_URL}/#organization` },
      memberOf: { '@type': 'Organization', name: 'Bar Council of Uttar Pradesh' },
      hasCredential: { '@type': 'EducationalOccupationalCredential', name: divorceLead.credentials },
      alumniOf: [
        { '@type': 'CollegeOrUniversity', name: 'Banasthali Vidyapith' },
        { '@type': 'CollegeOrUniversity', name: 'Ram Swaroop Memorial University' },
      ],
      knowsAbout: ['पारिवारिक कानून', 'आपसी सहमति से तलाक', 'विवादित तलाक', 'बच्चों की अभिरक्षा', 'भरण-पोषण और गुजारा भत्ता'],
    }] : []),
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#faqs`, inLanguage: 'hi',
      mainEntity: faqItems.map(({ question, answer }) => ({
        '@type': 'Question', inLanguage: 'hi', name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    {
      '@type': 'HowTo', '@id': `${PAGE_URL}#divorce-procedure`,
      name: 'लखनऊ में तलाक की प्रक्रिया: चरण 1 से 10',
      description: 'आपसी सहमति और विवादित तलाक के वैकल्पिक रास्तों की सामान्य जानकारी: आकलन से डिक्री, अपील और आदेश लागू कराने तक। हर मामले में हर चरण लागू नहीं; अदालती निर्देश और लागू विवाह कानून प्रक्रिया तय करते हैं।',
      inLanguage: 'hi',
      step: divorceHindiStages.map((stage, index) => ({
        '@type': 'HowToStep', position: index + 1, name: stage.title,
        text: stage.body.join(' '), url: `${PAGE_URL}#${stage.id}`,
      })),
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'मुख्य पृष्ठ', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'लखनऊ में पारिवारिक मामलों के वकील', item: `${SITE_URL}/services/family-advocate` },
        { '@type': 'ListItem', position: 3, name: 'लखनऊ में तलाक के वकील', item: `${SITE_URL}${ENGLISH_PATH}` },
        { '@type': 'ListItem', position: 4, name: 'तलाक की जानकारी — हिंदी', item: PAGE_URL },
      ],
    },
  ],
}

function ConsultationActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-6 py-3.5 font-body text-base font-semibold text-navy-900">सलाह के लिए संपर्क करें</Link>
      <ServiceContactLinks whatsappHref={whatsappUrl('नमस्ते, मुझे लखनऊ में तलाक, भरण-पोषण या बच्चों की अभिरक्षा पर हिंदी में कानूनी सलाह चाहिए।')} />
    </div>
  )
}

export default function HindiDivorceLawyerPage() {
  const divorceBlogPosts = getBlogPostsBySlugs(divorceBlogSlugs)
  return (
    <main lang="hi" className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div lang="en"><Navbar /></div>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/services/family-advocate" className="inline-flex items-center gap-2 font-body text-sm text-navy-700/70 hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /> पारिवारिक और वैवाहिक मामलों पर वापस जाएँ</Link>
            <ServiceLanguageSwitch basePath={ENGLISH_PATH} language="hi" />
          </div>
          <header className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1fr)_252px]">
            <div className="min-w-0">
              <p className="mb-4 font-body text-base font-semibold text-gold-700 dark:text-gold-400">पारिवारिक कानून · तलाक की पूरी जानकारी हिंदी में</p>
              <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">लखनऊ में तलाक के वकील — <em className="text-gold-gradient">आपसी सहमति और विवादित तलाक</em></h1>
              <p className={`mb-6 text-lg ${bodyClass}`}>पारिवारिक न्यायालय, लखनऊ और उचित अपीलीय अदालतों में आपसी सहमति से तलाक, विवादित कार्यवाही, भरण-पोषण और बच्चों की अभिरक्षा के लिए गोपनीयता के साथ कानूनी प्रतिनिधित्व।</p>
              <p className={`mb-8 ${bodyClass}`}>हमारी तलाक और वैवाहिक मामलों की कानूनी सेवा का नेतृत्व Sumanjari &amp; Co. Advocates की सहयोगी साझेदार <strong className="text-navy-900 dark:text-cream">अधिवक्ता ऐश्वर्या पांडेय</strong> करती हैं। हम उपलब्ध कानूनी उपाय समझने, मामला तैयार करने और अलगाव के साथ जुड़े आर्थिक तथा बच्चों की परवरिश के फैसलों में सहायता करते हैं।</p>
              <p className={`mb-8 ${bodyClass}`}>लखनऊ की तलाक याचिकाएँ पारिवारिक न्यायालय, वाला कदर रोड, कैसरबाग में प्रधान न्यायाधीश और अतिरिक्त प्रधान न्यायाधीश सुनते हैं। अपील गोमती नगर स्थित इलाहाबाद उच्च न्यायालय की लखनऊ पीठ में जाती है। नीचे दस चरणों में पूरी प्रक्रिया समझें।</p>
              <ServiceStats service="divorce" language="hi" />
              <div className="hidden md:block"><ConsultationActions /></div>
            </div>
            {divorceLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {divorceLead.img && <Image src={divorceLead.img} alt={divorceLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: divorceLead.focus }} />}
                <p className="font-body text-sm font-semibold text-gold-700 dark:text-gold-400">तलाक और वैवाहिक मामलों की मुख्य वकील</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{divorceLead.name}</h2>
                <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{divorceLead.role}</p>
                <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{divorceLead.credentials}</p>
                <Link href={`/team/${divorceLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">प्रोफाइल देखें <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
              </div>
            )}
            <div className="md:hidden"><ConsultationActions /></div>
          </header>
          <GuideToc items={divorceHindiToc} language="hi" />

          <section id="divorce-team" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>तलाक और वैवाहिक मामलों की सहयोगी टीम</h2>
            <p className={`mb-8 ${bodyClass}`}>अधिवक्ता ऐश्वर्या पांडेय हमारी तलाक संबंधी कानूनी सेवा का नेतृत्व करती हैं। सहयोगी वकीलों का पारिवारिक, वैवाहिक और जुड़ी दीवानी कार्यवाहियों में दर्ज अनुभव है। मामले की जरूरत के अनुसार काम का आवंटन होता है।</p>
            <div lang="en"><TeamCarousel members={divorceTeam} label="तलाक और वैवाहिक मामलों की टीम के सदस्य" /></div>
          </section>
          <LucknowChambers language="hi" />

          <section className="mb-16">
            <h2 className={headingClass}>मुश्किल मोड़ पर स्पष्ट कानूनी सलाह</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>विवाह समाप्त करना केवल डिक्री लेना नहीं है। बच्चों, आर्थिक सहायता, घर, सामान और लंबित विवादों के फैसले कार्यवाही के बाद भी लंबे समय तक रोजमर्रा के जीवन को प्रभावित करते हैं। हम आपकी परिस्थिति और तत्काल चिंताएँ समझकर, विवाह पर लागू कानून के उपाय समझाने से शुरुआत करते हैं।</p>
              <p>हम शांति से अलग होना चाहने वाले पति-पत्नी और विवादित कार्यवाही दाखिल करने या उसका बचाव करने वाले पक्षों, दोनों की मदद करते हैं। बातचीत व्यावहारिक हो तो सटीक, निभाई जा सकने वाली समझौते की शर्तें बनाते हैं। मुकदमा जरूरी हो तो किसी खास परिणाम का वादा करने के बजाय सही लिखित दावों और जवाबों, भरोसेमंद साक्ष्य और अदालती तैयारी पर ध्यान देते हैं।</p>
            </div>
          </section>
          <section className="mb-16">
            <h2 className={headingClass}>हम किन तलाक और वैवाहिक मामलों में सहायता करते हैं</h2>
            <div className="grid gap-5 sm:grid-cols-2">{divorceHindiServices.map(({ title, text, points }, index) => {
              const Icon = serviceIcons[index]
              return (
                <article key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40"><Icon aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" /></div>
                  <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{title}</h3>
                  <p className={`mb-4 text-sm ${bodyClass}`}>{text}</p>
                  <ul className="space-y-2">{points.map(point => <li key={point} className={`flex gap-2.5 text-sm ${bodyClass}`}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" /><span>{point}</span></li>)}</ul>
                </article>
              )
            })}</div>
          </section>

          <section id="mutual-vs-contested" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>आपसी सहमति या विवादित तलाक?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">सहमति से अलग होना</h3><p className={bodyClass}>आपसी सहमति से तलाक विवाह खत्म करने का साझा फैसला है। याचिका दाखिल करने से पहले आर्थिक सहायता, बच्चों की परवरिश, सामान की वापसी और जुड़े मुकदमों के कदम तय होने चाहिए। भुगतान के स्पष्ट चरण और शर्तें पूरी करने की व्यवस्था आगे के विवाद रोकने में मदद करते हैं। कानून के जरूरी चरणों तक सहमति स्वैच्छिक रहनी चाहिए।</p></div>
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">विवादित याचिका</h3><p className={bodyClass}>विवादित तलाक में अदालत तय करती है कि वैधानिक आधार साबित हुआ या नहीं। दूसरा पक्ष जवाब दे सकता है और साक्ष्य को चुनौती दे सकता है। मुकदमा चलते समय अंतरिम भरण-पोषण या बच्चों की अभिरक्षा की व्यवस्था जरूरी हो सकती है। मुकदमा शुरू होने के बाद भी कानूनी और स्वतंत्र सहमति होने पर मध्यस्थता या समझौता संभव है।</p></div>
            </div>
          </section>
          <section id="mutual-contested-comparison" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>पारिवारिक न्यायालय, लखनऊ (430, वाला कदर रोड, कैसरबाग) में दोनों रास्तों की तुलना</h2>
            <p className={`mb-6 ${bodyClass}`}>पूर्वशर्त, प्रक्रिया और अपील की संभावना में दोनों रास्ते मूलतः अलग हैं। नीचे प्रधान न्यायाधीश, पारिवारिक न्यायालय, लखनऊ, 430, वाला कदर रोड, कैसरबाग के सामने उनकी प्रक्रिया की तुलना है।</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left font-body text-sm">
                <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">
                  <th scope="col" className="py-3 pr-4">पहलू</th>
                  <th scope="col" className="py-3 pr-4">आपसी सहमति (धारा 13B HMA, 1955 / धारा 28 SMA, 1954 / मुबारात)</th>
                  <th scope="col" className="py-3">विवादित तलाक (धारा 13(1) HMA / धारा 27 SMA / धारा 2 मुस्लिम विवाह-विच्छेद अधिनियम, 1939)</th>
                </tr></thead>
                <tbody className="text-navy-800 dark:text-cream/75">
                  <tr className="border-b border-gold-500/10 align-top"><th scope="row" className="py-3 pr-4">अलगाव की वैधानिक पूर्वशर्त</th><td className="py-3 pr-4">धारा 13B HMA में संयुक्त याचिका सुनवाई योग्य होने से पहले एक वर्ष अलग रहना।</td><td className="py-3">क्रूरता या विवाह से बाहर यौन संबंध जैसे आधारों पर याचिका, या धारा 13(1) HMA में दो वर्ष के परित्याग के बाद; विवाह के पहले वर्ष की धारा 14 की रोक भी जाँचें।</td></tr>
                  <tr className="border-b border-gold-500/10 align-top"><th scope="row" className="py-3 pr-4">पारिवारिक न्यायालय, कैसरबाग के मुख्य चरण</th><td className="py-3 pr-4">संयुक्त याचिका और समझौता पत्र → पहले चरण का बयान → छह महीने की प्रतीक्षा या Amardeep Singh v. Harveen Kaur के अनुसार छूट का आवेदन → दूसरे चरण की सुनवाई → तलाक की डिक्री।</td><td className="py-3">याचिका → नोटिस और मध्यस्थता केंद्र को भेजना → लिखित जवाब और Rajnesh v. Neha के अनुसार आय के शपथपत्र → मुद्दे और जिरह → अंतिम बहस और डिक्री।</td></tr>
                  <tr className="border-b border-gold-500/10 align-top"><th scope="row" className="py-3 pr-4">अपील की अदालत</th><td className="py-3 pr-4">धारा 19 सहमति की डिक्री को अपील से बाहर रखती है। धोखाधड़ी या दबाव के आरोपों के लिए उचित कानूनी उपाय का अलग आकलन जरूरी है।</td><td className="py-3">पारिवारिक न्यायालय अधिनियम, 1984 की धारा 19 की प्रथम अपील इलाहाबाद उच्च न्यायालय की लखनऊ पीठ में दो न्यायाधीशों की खंडपीठ के समक्ष, लागू 30/90 दिनों की समय-सीमा की पुष्टि के साथ।</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <section id="mutual-consent-steps" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>लखनऊ में आपसी सहमति से तलाक: चरण 1 से 6</h2>
            <ol className="space-y-6">
              <li className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">चरण 1: पूरा समझौता पत्र</h3><p className={bodyClass}>पूरे समझौता पत्र में धारा 25 HMA का एकमुश्त स्थायी गुजारा भत्ता, स्त्रीधन की सूची और वापसी, बच्चों की अभिरक्षा और मुलाकात तथा समानांतर आपराधिक मामलों की वापसी या निरस्तीकरण तय करें: धारा 498A IPC / धारा 85 BNS, धारा 125 CrPC / धारा 144 BNSS और PWDVA की धारा 12 की कार्यवाही।</p></li>
              <li className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">चरण 2: अधिकार क्षेत्र और याचिका दाखिल करना</h3><p className={bodyClass}>धारा 19 HMA में विवाह का स्थान, लखनऊ में आखिरी साझा घर या प्रतिवादी / पत्नी का वर्तमान निवास, लागू शर्तों के अनुसार जाँचें। संयुक्त याचिका प्रधान न्यायाधीश, पारिवारिक न्यायालय, कैसरबाग, लखनऊ के सामने दाखिल होती है।</p></li>
              <li className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">चरण 3: पहली सुनवाई और बयान</h3><p className={bodyClass}>दोनों पति-पत्नी के पहले चरण के बयान दर्ज होते हैं और पारिवारिक न्यायालय मामले को मध्यस्थता केंद्र भेजने का निर्देश दर्ज करता है।</p></li>
              <li className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">चरण 4: प्रतीक्षा अवधि से छूट</h3><p className={bodyClass}>Amardeep Singh v. Harveen Kaur (2017) के अनुसार विवेकाधीन छूट माँगते समय अलगाव, असफल सुलह, गुजारा भत्ते, बच्चों की देखभाल और जुड़े मुद्दों का वास्तविक समझौता और आगे प्रतीक्षा के उद्देश्य को देखें। Amit Kumar v. Suman Beniwal (2021) के अनुसार ये कारक कठोर जाँच-सूची नहीं; छूट स्वतः नहीं मिलती।</p></li>
              <li className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">चरण 5: समानांतर आपराधिक मामलों का निरस्तीकरण</h3><p className={bodyClass}>गुजारा भत्ते की आखिरी किस्त जारी करने से पहले इलाहाबाद उच्च न्यायालय की लखनऊ पीठ में धारा 528 BNSS (पहले धारा 482 CrPC) के तहत समानांतर FIR या आरोपपत्र का समझौते के आधार पर निरस्तीकरण कराने के कदमों का समन्वय करें, जहाँ कानून और अदालत अनुमति दें।</p></li>
              <li className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">चरण 6: दूसरे चरण की सुनवाई और डिक्री</h3><p className={bodyClass}>दूसरे चरण के बयान दर्ज होने और वैधानिक शर्तों तथा लगातार सहमति के स्थापित होने पर अंतिम तलाक की डिक्री होती है। विदेश में रहने वाला पति या पत्नी वीडियो कॉन्फ्रेंसिंग से उपस्थिति की अनुमति माँग सकता है; अदालत की मंजूरी और लागू सुनवाई निर्देशों की पुष्टि जरूरी है।</p></li>
            </ol>
          </section>

          <StatuteTable id="statutory-framework" language="hi" heading="आपके विवाह पर कौन-सा कानून लागू है?" intro="विवाह पर लागू कानून से आधार, पात्रता, प्रक्रिया और कानूनी सहायता तय होते हैं। विवाह प्रमाणपत्र और विवाह की रस्मों या पंजीकरण की जानकारी सही शुरुआत पहचानने में मदद करती है।" rows={divorceHindiStatutes} />
          <section id="grounds" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>विवादित तलाक के आधार</h2>
            <div className="space-y-6">{divorceHindiGrounds.map(({ title, text }) => <div key={title} className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{title}</h3><p className={bodyClass}>{text}</p></div>)}</div>
            <p className={`mt-6 text-sm ${bodyClass}`}>लंबे अलगाव या रिश्ता टूटने से अपने आप हिंदू विवाह अधिनियम में सामान्य पारिवारिक न्यायालय के लिए विवाह का असुधार्य विघटन एक स्वतंत्र आधार नहीं बनता। सर्वोच्च न्यायालय की असाधारण शक्तियाँ नियमित तलाक याचिका के वैधानिक आधारों से अलग हैं।</p>
          </section>
          <section id="contested-alimony-annulment" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>विवादित आधार, Rajnesh v. Neha में गुजारा भत्ता और धारा 11–12 HMA के तहत विवाह निरस्त करना</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>मानसिक और शारीरिक क्रूरता सबसे अधिक विवादित आधारों में हैं, जिनका आकलन <strong>Samar Ghosh v. Jaya Ghosh</strong> के मानकों पर होता है; लगातार झूठे आपराधिक मुकदमे चलाने को भी क्रूरता माना गया है। परित्याग का आधार स्थापित करने के लिए बिना उचित कारण दो वर्ष लगातार छोड़कर रहना आवश्यक है। विवाह से बाहर यौन संबंध साबित करने के लिए फोन कॉल का विवरण, संदेश, तस्वीरें और स्थान का डेटा जैसे इलेक्ट्रॉनिक साक्ष्य अक्सर उपयोग होते हैं; भारतीय साक्ष्य अधिनियम, 2023 की धारा 63 (पहले साक्ष्य अधिनियम की धारा 65B) का प्रमाणन जहाँ लागू हो जरूरी है। साक्ष्य वैध तरीके से प्राप्त होना चाहिए।</p>
              <p>विवाह निरस्त करना अलग उपाय है: धारा 11 HMA का अमान्य विवाह किसी भी समय ऐसा घोषित किया जा सकता है। नपुंसकता या धोखाधड़ी जैसे आधारों पर निरस्त किए जा सकने वाले विवाह के लिए धारा 12 HMA की याचिका होती है। धोखाधड़ी पता चलने से एक वर्ष की सीमा जैसी लागू शर्तें जाँचें; हर आधार पर एक ही समय-सीमा नहीं मानें। आर्थिक पक्ष में बढ़ा-चढ़ाकर माँगे गए भरण-पोषण का बचाव और <strong>Rajnesh v. Neha</strong> के संपत्ति और देनदारियों के शपथपत्रों के आधार पर सही गणना करते हैं, ताकि अंतरिम भरण-पोषण और स्थायी गुजारा भत्ता बताई गई वास्तविक आय पर हों, अनुमान पर नहीं।</p>
            </div>
          </section>
          <GuideStages id="divorce-procedure" language="hi" heading="लखनऊ में तलाक की प्रक्रिया: चरण 1 से 10" intro="पहली सलाह से डिक्री, आदेश लागू कराने और इलाहाबाद उच्च न्यायालय की लखनऊ पीठ में अपील तक पारिवारिक न्यायालय, लखनऊ में मामला कैसे बढ़ता है। आपसी सहमति और विवादित तलाक वैकल्पिक रास्ते हैं; हर मामले में सभी चरण जरूरी नहीं।" stages={divorceHindiStages} />
          <section id="documents" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>सलाह के लिए कौन-से दस्तावेज तैयार करें</h2>
            <p className={`mb-6 ${bodyClass}`}>याचिका दाखिल करने की सटीक जरूरतें मामले पर निर्भर हैं। उपलब्ध दस्तावेज साथ लाएँ; जो दस्तावेज नहीं मिल रहे, उन पर सलाह में चर्चा हो सकती है। मूल कागजात बचाएँ और संदेश या अन्य साक्ष्य न बदलें।</p>
            <ul className="grid gap-4 md:grid-cols-2">{divorceHindiDocuments.map(document => <li key={document} className={`flex gap-3 text-sm ${bodyClass}`}><ScrollText aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" /><span>{document}</span></li>)}</ul>
          </section>
          <section id="settlement-children" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>आर्थिक समझौता और बच्चे का कल्याण</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>व्यावहारिक समझौते में पति या पत्नी की आर्थिक सहायता और बच्चे का भरण-पोषण अलग होते हैं। भुगतान एकमुश्त, समय-समय पर या खास खर्च से जुड़ा है, यह दर्ज हो। भुगतान की तारीखें, संपत्ति का हस्तांतरण या वापसी, पुराने ऋण और शर्तें न निभाने के परिणाम लिखें। तलाक अपने आप संयुक्त स्वामित्व वाली संपत्ति हस्तांतरित नहीं करता और ऋणदाता के प्रति जिम्मेदारियाँ समाप्त नहीं करता। बच्चे के भरण-पोषण को अस्पष्ट मौखिक आश्वासन पर न छोड़ें।</p>
              <p>बच्चों के लिए स्कूल के दिनों की देखभाल, छुट्टियाँ, यात्रा, चिकित्सा के फैसले, बातचीत और एक अभिभावक से दूसरे के पास जाने का समय जैसी निभाई जा सकने वाली व्यवस्था पर ध्यान देते हैं। आर्थिक विवाद में बच्चे से मुलाकात को दबाव का साधन न बनाएँ। परिस्थितियाँ बदलें और कानून अनुमति दे तो अदालत अभिरक्षा या भरण-पोषण पर दोबारा विचार कर सकती है।</p>
              <p>सुरक्षा या दबाव की चिंता हो तो समझौता जरूरी कानूनी सुरक्षा का विकल्प नहीं है। तत्काल जोखिम, पुराने सुरक्षा आदेश या मध्यस्थता और दूसरे पक्ष से संपर्क को प्रभावित करने वाली पाबंदियाँ वकील को बताएँ।</p>
            </div>
          </section>
          <section id="courts" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>अदालत, अधिकार क्षेत्र और कानूनी प्रतिनिधित्व</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">पारिवारिक न्यायालय, लखनऊ</h3><p className={bodyClass}>अधिकार क्षेत्र होने पर पारिवारिक न्यायालय में तलाक याचिकाओं, वैवाहिक कानूनी उपायों, भरण-पोषण और बच्चों की अभिरक्षा में सहायता करते हैं। केवल लखनऊ में रहने से हर मामला यहाँ सुनवाई योग्य नहीं होता; याचिका दाखिल करने से पहले वैधानिक संबंध और तथ्य जाँचें।</p></div>
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">उच्च न्यायालय और जुड़ी अदालतें</h3><p className={bodyClass}>अधिकार क्षेत्र और सुनवाई की पात्रता के अनुसार अपील तथा अन्य उचित कार्यवाहियाँ इलाहाबाद उच्च न्यायालय की लखनऊ पीठ में हो सकती हैं। घरेलू हिंसा और जुड़ी आपराधिक कार्यवाहियाँ दूसरी अदालतों में हो सकती हैं। हर मामले की सही अदालत, कानूनी उपाय और समय-सीमा अलग जाँचते हैं।</p></div>
            </div>
          </section>
          <section id="lucknow-localities" aria-labelledby="lucknow-localities-heading" className="mb-16 scroll-mt-28">
            <h2 id="lucknow-localities-heading" className={headingClass}>लखनऊ के इलाकों से याचिका दाखिल करना और अधिकार क्षेत्र</h2>
            <p className={`mb-6 ${bodyClass}`}>हिंदू विवाह अधिनियम, 1955 की धारा 19 और विशेष विवाह अधिनियम, 1954 की धारा 31 में लागू शर्तों के अनुसार विवाह का स्थान, प्रतिवादी का निवास, आखिरी साझा वैवाहिक घर और पत्नी के याचिका देने पर उसका वर्तमान निवास अधिकार क्षेत्र बना सकते हैं। केवल लखनऊ का पता हर याचिकाकर्ता को यहाँ याचिका दाखिल करने का अधिकार नहीं देता।</p>
            <p className={`mb-6 ${bodyClass}`}>लखनऊ से जरूरी कानूनी संबंध होने पर नीचे के इलाकों के निवासी सामान्यतः पारिवारिक न्यायालय, कैसरबाग में याचिका देते हैं। रजिस्ट्री मामला प्रधान न्यायाधीश या अतिरिक्त प्रधान न्यायाधीश को देती है; मोहल्ले के हिसाब से अलग तलाक की अदालत नहीं है।</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left font-body text-sm">
                <caption className={`mb-3 text-left ${bodyClass}`}>अधिकार क्षेत्र होने पर लखनऊ के इलाके और याचिका दाखिल करने की सामान्य अदालत</caption>
                <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream"><th scope="col" className="py-3 pr-4">क्षेत्र</th><th scope="col" className="py-3 pr-4">इलाके</th><th scope="col" className="py-3">याचिका दाखिल करने की अदालत</th></tr></thead>
                <tbody className="text-navy-800 dark:text-cream/75">{divorceHindiLocalities.map(({ region, localities }) => (
                  <tr key={region} className="border-b border-gold-500/10 align-top"><th scope="row" className="py-3 pr-4">{region}</th><td className="py-3 pr-4">{localities.join(', ')}</td><td className="py-3">पारिवारिक न्यायालय, लखनऊ, कैसरबाग — वैधानिक अधिकार क्षेत्र स्थापित होने पर</td></tr>
                ))}</tbody>
              </table>
            </div>
            <p className={`mt-6 ${bodyClass}`}>पारिवारिक न्यायालय के अपील योग्य निर्णय और आदेश पारिवारिक न्यायालय अधिनियम की धारा 19 के अनुसार इलाहाबाद उच्च न्यायालय की लखनऊ पीठ में जाते हैं। गोमती नगर और इंदिरा नगर समेत अन्य निवासियों की वकील के कक्ष में सलाह पहले से समय लेकर {HIGH_COURT_CHAMBER_ADDRESS.street} पर हो सकती है। सलाह की बैठक पारिवारिक न्यायालय में याचिका दाखिल करने या सुनवाई में उपस्थित होने से अलग है।</p>
          </section>
          <section id="family-court-logistics" aria-labelledby="family-court-logistics-heading" className="mb-16 scroll-mt-28">
            <h2 id="family-court-logistics-heading" className={headingClass}>पारिवारिक न्यायालय, लखनऊ (कैसरबाग) जाने की व्यावहारिक तैयारी</h2>
            <dl className={`space-y-5 ${bodyClass}`}>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">पता और निर्धारित अदालत</dt><dd>430, वाला कदर रोड, कैसरबाग, लखनऊ, उत्तर प्रदेश 226001, परिवर्तन चौक के पास। वाद-सूची या रजिस्ट्री से वर्तमान स्थल और कक्ष जाँचें। प्रधान न्यायाधीश और अतिरिक्त प्रधान न्यायाधीश हैं; मामलों का आवंटन बदल सकता है।</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">परामर्श और मध्यस्थता</dt><dd>पारिवारिक न्यायालय अधिनियम, 1984 की धारा 9 उचित मामलों में समझौते का प्रयास कहती है। अदालत मामला परामर्शदाताओं या दीवानी न्यायालय परिसर, कैसरबाग के मध्यस्थता और सुलह केंद्र को भेज सकती है। सही स्थान और बैठक के समय के लिए भेजने के आदेश का पालन करें; हर सुनवाई मध्यस्थता की बैठक नहीं है।</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">कार्य समय और याचिका दाखिल करना</dt><dd>यात्रा से पहले पारिवारिक न्यायालय की रजिस्ट्री से वर्तमान कार्य समय, दाखिला काउंटर की अंतिम दैनिक समय-सीमा, छुट्टियाँ और ऑनलाइन दाखिले के निर्देश जाँचें। सुनवाई की तारीख और वाद-सूची देखें; कार्यालय खुलने का समय आपके मुकदमे के बुलाए जाने की गारंटी नहीं।</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">पहचान और तैयारी</dt><dd>मूल सरकारी फोटो पहचान-पत्र जैसे आधार, पासपोर्ट या मतदाता पहचान-पत्र, दाखिल कागजात और संबंधित आदेशों की प्रतियाँ लाएँ। अदालत या रजिस्ट्री कहे तो पासपोर्ट आकार के फोटो और अन्य मूल दस्तावेज, खासकर पहले या दूसरे चरण के बयान के लिए, लाएँ। सम्मानजनक पहनावा रखें और सुरक्षा तथा अदालत के कक्ष के निर्देश मानें।</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">अदालती फीस</dt><dd>उत्तर प्रदेश में लागू न्यायालय फीस अधिनियम, 1870 की वैधानिक अदालती फीस, वकील की फीस, प्रतिलिपि शुल्क और अन्य खर्च अलग हैं। खास याचिका और माँगी गई राहत की फीस दाखिला काउंटर से जाँचें; हर वैवाहिक मामले के लिए यहाँ एक समान प्रकाशित राशि नहीं है।</dd></div>
            </dl>
            <p className={`mt-6 text-sm ${bodyClass}`}>वर्तमान सूचनाएँ, वाद-सूचियाँ और मुकदमे की स्थिति के लिंक <a href="https://lucknow.dcourts.gov.in/" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">लखनऊ जिला न्यायालय की आधिकारिक वेबसाइट</a> पर देखें। यह जानकारी रजिस्ट्री के निर्देशों या आपके मुकदमे के आदेश का विकल्प नहीं है।</p>
          </section>
          <section className="mb-16">
            <h2 className={headingClass}>तलाक के मामले में हमारी कानूनी सहायता का तरीका</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>अधिवक्ता ऐश्वर्या पांडेय के नेतृत्व में टीम विकल्प और उनके व्यावहारिक असर समझाती है, खासकर तत्काल अंतरिम राहत और अंतिम तलाक की डिक्री का फर्क। मामला देखने के बाद प्रतिनिधित्व और फीस का दायरा बताते हैं, ताकि सलाह, दस्तावेजों के मसौदे, सुनवाई और जुड़ी कार्यवाहियाँ अलग समझ में आएँ।</p>
              <p>तैयारी में मामले के घटनाक्रम की संगति, साक्ष्य की कमियाँ और नए आवेदन से पहले पुराने आदेशों की समीक्षा शामिल है। समझौता सावधानी से देखते हैं, लेकिन हर मामला मध्यस्थता से सुलझ सकता या सुलझना चाहिए, यह नहीं मानते। मुवक्किल के निर्देश और अधिकारों की कानूनी सुरक्षा केंद्रीय हैं।</p>
            </div>
          </section>
          <TranslatedFaqs id="faqs" title="तलाक और वैवाहिक मामले: अक्सर पूछे जाने वाले सवाल" items={faqItems} />
          <p className={`mb-16 text-sm ${bodyClass}`}>Sumanjari &amp; Co. Advocates दूसरी पीढ़ी की कानूनी फर्म है, 30+ वर्षों का कानूनी अनुभव और टीम द्वारा 10,000+ मामले सुलझाने का रिकॉर्ड है। हर वकील के अपने कार्यक्षेत्र उनके परिचय पृष्ठ पर दिए हैं; किसी परिणाम की गारंटी नहीं है।</p>
          <section aria-labelledby="divorce-settlement-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="divorce-settlement-review" className={headingClass}>तलाक के समझौते में क्या शामिल होना चाहिए?</h2>
            <p className={`mb-5 ${bodyClass}`}>आपसी सहमति का समझौता केवल तलाक याचिका तक सीमित न हो। आर्थिक सहायता की राशि और समय, सामान और स्त्रीधन की वापसी, साझा देनदारियों की जिम्मेदारी, बच्चों की परवरिश की व्यवस्था और जुड़े मामलों के कानूनी कदम देखें। निजी समझौता अपने आप आपराधिक या घरेलू हिंसा की कार्यवाहियाँ बंद नहीं करता, संपत्ति हस्तांतरित नहीं करता और विवाह समाप्त नहीं करता। हर जिम्मेदारी के लिए उचित दस्तावेज, आदेश या उसे पूरा करने का कदम चाहिए।</p>
            <p className={bodyClass}>पहली समीक्षा में विवाह और पहचान के दस्तावेज, पते, अलगाव का तारीखवार विवरण, आय का खुलासा और सभी पुराने नोटिस, याचिकाएँ और आदेश लाएँ। पात्रता या याचिका दाखिल करने का समय मानने से पहले लागू विवाह कानून और विदेश से संबंध पहचानें। सहमति स्वैच्छिक रहनी चाहिए; प्रतीक्षा अवधि से छूट कानूनी शर्तों और अदालत के निर्णय पर है। व्यापक सहायता और सुरक्षा के लिए हमारी <Link href="/services/family-advocate" className="text-gold-700 underline dark:text-gold-400">पारिवारिक मामलों की कानूनी सेवा</Link> देखें।</p>
          </section>
          <div lang="en"><ServiceBlogs posts={divorceBlogPosts} fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />} eyebrow="हमारी लेखनी से" heading="तलाक और गुजारा भत्ते के लेख" description="आपसी सहमति की रणनीति, विवादित आधारों, गुजारा भत्ते की गणना, विवाह निरस्त करने और समझौते पर विस्तृत लेख (अंग्रेजी में)।" viewAllHref="/blog?category=Family%20%26%20Matrimonial%20Matters" /></div>
          <section id="contact" className="scroll-mt-28 border-t border-gold-500/25 pt-10 text-center">
            <h2 className={headingClass}>लखनऊ में तलाक के वकील से बात करें</h2>
            <p className={`mx-auto mb-8 max-w-2xl ${bodyClass}`}>अलगाव सोच रहे हों, सहमति से तलाक चाहते हों या वैवाहिक याचिका का जवाब दे रहे हों, अधिवक्ता ऐश्वर्या पांडेय के नेतृत्व वाली टीम से अपनी परिस्थिति पर चर्चा करें।</p>
            <div className="flex justify-center"><ConsultationActions /></div>
            <p className={`mx-auto mt-8 max-w-2xl text-xs ${bodyClass}`}>यह पृष्ठ सामान्य कानूनी जानकारी है, खास मामले की सलाह नहीं। जरूरतें और कानूनी उपाय लागू कानून, तथ्यों और अदालती आदेशों पर निर्भर हैं। किसी परिणाम या काम पूरा होने के समय की गारंटी नहीं है।</p>
          </section>
        </div>
      </section>
      <div lang="en"><FirmCredentials /><Footer /></div>
    </main>
  )
}
