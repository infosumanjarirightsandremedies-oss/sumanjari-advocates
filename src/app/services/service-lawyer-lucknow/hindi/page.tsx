import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Briefcase, ScrollText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceLanguageSwitch from '@/components/ServiceLanguageSwitch'
import ServiceContactLinks from '@/components/ServiceContactLinks'
import ServiceStats from '@/components/ServiceStats'
import TranslatedFaqs, { type TranslatedFaq } from '@/components/TranslatedFaqs'
import LucknowChambers from '@/components/LucknowChambers'
import TeamCarousel from '@/components/TeamCarousel'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import { GuideToc, GuideStages, StatuteTable } from '@/components/LucknowGuide'
import { getBlogPostsByCategory } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, LUCKNOW_SERVICE_LOCATION, whatsappUrl } from '@/lib/contactLinks'
import {
  serviceHindiSearch, serviceHindiMatters, serviceHindiForums, serviceHindiLocalities,
  serviceHindiStages, serviceHindiStatutes, serviceHindiForumRows, serviceHindiDocuments,
  serviceHindiInsights, serviceHindiFaqs,
} from '@/lib/guides/serviceHindi'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const ENGLISH_PATH = '/services/service-lawyer-lucknow'
const PAGE_PATH = `${ENGLISH_PATH}/hindi`
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const serviceLead = teamMembers.find(member => member.slug === 'jitendra-tiwari')
const serviceTeam = ['aditya-narayan-shukla', 'devesh-tiwari', 'abhishek-mishra']
  .flatMap(slug => teamMembers.filter(member => member.slug === slug))
const headingClass = 'mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'

export const metadata: Metadata = {
  title: { absolute: serviceHindiSearch.title },
  description: serviceHindiSearch.description,
  keywords: ['लखनऊ में सेवा मामलों के वकील', 'सरकारी कर्मचारी सेवा विवाद', 'निलंबन विभागीय जाँच', 'पेंशन विवाद लखनऊ', 'पदोन्नति वरिष्ठता विवाद', 'CAT लखनऊ के वकील', 'UPPST लखनऊ के वकील', 'सेवा विवाद के वकील लखनऊ', 'नौकरी के मामलों में कानूनी सलाह', 'POSH कानूनी सलाह'],
  alternates: { canonical: PAGE_PATH, languages: { en: ENGLISH_PATH, hi: PAGE_PATH, 'x-default': ENGLISH_PATH } },
  openGraph: { title: serviceHindiSearch.title, description: serviceHindiSearch.description, url: PAGE_PATH, locale: 'hi_IN', alternateLocale: ['en_IN'] },
  twitter: { card: 'summary_large_image', title: serviceHindiSearch.title, description: serviceHindiSearch.description },
}

const faqItems: TranslatedFaq[] = [
  ...serviceHindiInsights,
  ...serviceHindiFaqs.map((item, index) => ({ ...item, id: index === 0 ? 'hindi-faqs' : undefined })),
  { ...serviceHindiSearch, id: 'choosing-an-advocate' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL,
      name: serviceHindiSearch.title, inLanguage: 'hi',
      translationOfWork: { '@id': `${SITE_URL}${ENGLISH_PATH}#webpage` },
    },
    {
      '@type': 'LegalService', '@id': `${PAGE_URL}#legal-service`,
      ...LUCKNOW_SERVICE_LOCATION, branchOf: { '@id': `${SITE_URL}/#organization` },
      name: 'Sumanjari & Co. Advocates — सेवा और रोजगार मामले',
      url: PAGE_URL, description: serviceHindiSearch.description,
      telephone: CHAMBER_TEL.replace('tel:', ''),
      areaServed: [{ '@type': 'City', name: 'Lucknow' }, { '@type': 'State', name: 'Uttar Pradesh' }],
      serviceType: 'सेवा और रोजगार मामलों में कानूनी सहायता',
    },
    ...(serviceLead ? [{
      '@type': 'Person', '@id': `${SITE_URL}/#${serviceLead.slug}`,
      name: serviceLead.name, url: `${SITE_URL}/team/${serviceLead.slug}`, jobTitle: serviceLead.role,
      worksFor: { '@id': `${SITE_URL}/#organization` },
      hasCredential: { '@type': 'EducationalOccupationalCredential', name: serviceLead.credentials },
    }] : []),
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#service-faqs`, inLanguage: 'hi',
      mainEntity: faqItems.map(({ question, answer }) => ({
        '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
    {
      '@type': 'HowTo', '@id': `${PAGE_URL}#service-procedure`,
      name: 'लखनऊ में सेवा विवाद की प्रक्रिया: सात चरण',
      description: 'विभागीय, अधिकरण, श्रम और रिट प्रक्रियाओं की सामान्य जानकारी। हर मामले में हर चरण जरूरी नहीं; कानून के दायरे, नियमों और संबंधित मंच के निर्देशों के अनुसार प्रक्रिया तय होती है।',
      inLanguage: 'hi',
      step: serviceHindiStages.map((stage, index) => ({
        '@type': 'HowToStep', position: index + 1, name: stage.title,
        text: stage.body.join(' '), url: `${PAGE_URL}#${stage.id}`,
      })),
    },
    {
      '@type': 'BreadcrumbList', '@id': `${PAGE_URL}#breadcrumbs`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'मुख्य पृष्ठ', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'सेवा और रोजगार मामले', item: `${SITE_URL}${ENGLISH_PATH}` },
        { '@type': 'ListItem', position: 3, name: 'सेवा मामलों की जानकारी — हिंदी', item: PAGE_URL },
      ],
    },
  ],
}

function ConsultationActions({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-4 py-3.5 font-body text-base font-semibold text-navy-900">सलाह के लिए संपर्क करें</Link>
      <ServiceContactLinks whatsappHref={whatsappUrl('नमस्ते, मुझे लखनऊ में सेवा, नौकरी या पेंशन विवाद पर हिंदी में कानूनी सलाह चाहिए।')} />
    </div>
  )
}

export default function HindiServiceMattersPage() {
  const blogPosts = getBlogPostsByCategory('Service & Employment Matters')
  return (
    <main lang="hi" className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div lang="en"><Navbar /></div>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/#services" className="inline-flex items-center gap-2 font-body text-sm text-navy-700/70 hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> कानूनी सेवाओं पर वापस जाएँ</Link>
            <ServiceLanguageSwitch basePath={ENGLISH_PATH} language="hi" />
          </div>
          <header className="mb-12 grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_280px]">
            <div className="min-w-0">
              <p className="mb-4 font-body text-base font-semibold text-gold-700 dark:text-gold-400">सेवा कानून · सेवा और रोजगार की जानकारी हिंदी में</p>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">लखनऊ में सेवा और रोजगार मामलों के वकील — <em className="text-gold-gradient">CAT, UPPST और उच्च न्यायालय (Writ-A)</em></h1>
              <p className={`text-lg ${bodyClass}`}>हमारी सेवा मामलों की टीम सरकारी कर्मचारियों, सार्वजनिक क्षेत्र के कर्मचारियों, शिक्षकों और निजी कर्मचारियों को निलंबन, विभागीय जाँच, बर्खास्तगी, पदोन्नति, वेतन और पेंशन विवादों पर सलाह देती है। सेवा नियम और उपलब्ध उपाय देखकर CAT लखनऊ पीठ, UPPST, श्रम मंच या इलाहाबाद उच्च न्यायालय, लखनऊ पीठ का रास्ता चुना जाता है।</p>
              <ServiceStats service="service" language="hi" />
              <div className="mt-8 hidden md:block"><ConsultationActions /></div>
            </div>
            {serviceLead && <div className="min-w-0 border-l border-gold-500/30 pl-6">
              {serviceLead.img && <Image src={serviceLead.img} alt={serviceLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: serviceLead.focus }} />}
              <p className="font-body text-sm font-semibold text-gold-700 dark:text-gold-400">सेवा और रोजगार मामलों के प्रमुख वकील</p>
              <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{serviceLead.name}</h2>
              <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{serviceLead.role}</p>
              <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{serviceLead.credentials}</p>
              <Link href={`/team/${serviceLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">परिचय देखें <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>}
            <div className="md:hidden"><ConsultationActions /></div>
          </header>
          <GuideToc language="hi" items={[
            { id: 'service-team', label: 'हमारी टीम' }, { id: 'lucknow-chambers', label: 'चैंबर और रास्ता' },
            { id: 'choosing-an-advocate', label: 'वकील कैसे चुनें' }, { id: 'service-forums', label: 'सही अधिकारी, अधिकरण या न्यायालय' },
            { id: 'service-localities', label: 'लखनऊ में कानूनी सलाह' }, { id: 'service-forum-logistics', label: 'न्यायालय जाने की तैयारी' },
            { id: 'service-statutory-framework', label: 'लागू कानून और उनका दायरा' }, { id: 'service-forum-jurisdiction', label: 'नियोक्ता के अनुसार कानूनी मंच' },
            { id: 'service-matters', label: 'किस प्रकार के मामले' }, { id: 'service-deadlines', label: 'आदेश और समय-सीमाएँ' },
            { id: 'service-documents', label: 'जरूरी दस्तावेज' },
            { id: 'service-procedure', label: 'सेवा विवाद के सात चरण', children: serviceHindiStages.map((stage, index) => ({ id: stage.id, label: `चरण ${index + 1}: ${stage.title}` })) },
            { id: 'service-faqs', label: 'अक्सर पूछे जाने वाले सवाल' },
            { id: 'service-disciplinary-record-review', label: 'आरोप पत्र और प्रतिकूल आदेश की समीक्षा' }, { id: 'service-consultation', label: 'संपर्क करें' },
          ]} />
          <section id="service-team" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>सेवा और रोजगार कानून की टीम</h2>
            <p className={`mb-8 ${bodyClass}`}>अधिवक्ता जितेंद्र तिवारी इन मामलों का नेतृत्व करते हैं। अधिवक्ता आदित्य नारायण शुक्ला, अधिवक्ता देवेश तिवारी और अधिवक्ता अभिषेक मिश्रा सहयोग करते हैं। नीचे हर सदस्य के परिचय में उनके अपने कार्यक्षेत्र दिए गए हैं।</p>
            <div lang="en"><TeamCarousel members={serviceTeam} label="सेवा और रोजगार मामलों की टीम के सदस्य" /></div>
          </section>
          <LucknowChambers language="hi" />
          <div className={`mb-16 space-y-4 ${bodyClass}`}>
            <p>सेवा कानून, कानूनी नियमों, सेवा विनियमों और प्रशासनिक निर्देशों से बने रोजगार संबंधों को देखता है। सरकारी कर्मचारियों, सार्वजनिक क्षेत्र के कर्मचारियों, शिक्षकों, कानून से बने निकायों के कर्मचारियों और कानून के दायरे में आने वाले निजी श्रमिकों की भर्ती, पदोन्नति, अनुशासन, छँटनी या सेवानिवृत्ति के लाभों के विवाद नौकरी और आजीविका को प्रभावित कर सकते हैं।</p>
            <p>Sumanjari &amp; Co. कर्मचारियों और निर्देश मिलने पर विभागों को विभागीय जाँच से लेकर अपील और उपलब्ध अधिकरण या न्यायालय की कार्यवाही तक सलाह देता है। नियोक्ता की कानूनी स्थिति, पद, लागू नियम और विवाद का कारण जहाँ पैदा हुआ, वह स्थान सही रास्ता तय करते हैं। केंद्रीय या राज्य सेवा, सहायता प्राप्त संस्थाओं और निजी रोजगार की प्रक्रिया एक जैसी नहीं है।</p>
          </div>
          <section id="service-forums" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>आपका सेवा विवाद कौन-सा कानूनी मंच सुन सकता है?</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{serviceHindiForums.map(item => <article key={item.title} className="glass-card rounded-sm border border-gold-500/20 p-6"><h3 className="mb-2 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={`text-sm ${bodyClass}`}>{item.text}</p></article>)}</div>
          </section>
          <section id="service-localities" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>लखनऊ के अलग क्षेत्रों में सेवा मामलों की कानूनी सलाह</h2>
            <p className={`mb-6 ${bodyClass}`}>इन क्षेत्रों के कर्मचारियों के लिए पहले समय लेकर सलाह तय हो सकती है। ये सेवा देने के क्षेत्र हैं, अलग शाखा कार्यालय नहीं। लखनऊ का पता अकेले अधिकार-क्षेत्र नहीं बनाता; नियोक्ता का कानूनी दायरा, चुनौती दिया गया आदेश और क्षेत्रीय नियम आवेदन का मंच तय करते हैं।</p>
            <ul className="grid gap-5 sm:grid-cols-2">{serviceHindiLocalities.map(item => <li key={item.region} className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{item.region}</h3><p lang="en" className={bodyClass}>{item.localities.join(', ')}</p></li>)}</ul>
          </section>
          <section id="service-forum-logistics" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>अधिकरण या न्यायालय जाने की तैयारी</h2>
            <dl className={`space-y-5 ${bodyClass}`}>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">सुनवाई का स्थान और निर्धारित पीठ</dt><dd>सुनवाई सूची, मुकदमा संख्या, वर्तमान स्थान और पीठ की जानकारी रजिस्ट्री से जाँचें। CAT Vipin Khand, Gomti Nagar और UPPST Indira Bhawan, Hazratganj में है। श्रम मामलों का आवंटन और क्षेत्रीय अधिकार अलग जाँचें। उच्च न्यायालय के चैंबर में सलाह लेना, अधिकरण में आवेदन दाखिल करना या सुनवाई नहीं है।</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">काम का समय और आवेदन दाखिल करना</dt><dd>रजिस्ट्री से वर्तमान समय, आवेदन लेने की अंतिम घड़ी, छुट्टियाँ, ऑनलाइन दाखिले, प्रपत्र, संलग्न दस्तावेज, प्रतियाँ, शपथपत्र और फीस सुनिश्चित करें। वकील की फीस, न्यायालय या अधिकरण की फीस और प्रतियों के खर्च अलग हैं; हर सेवा विवाद की एक ही फीस या पूरा होने का समय नहीं है।</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">रिकॉर्ड और उपस्थिति</dt><dd>फोटो वाला पहचान पत्र, दाखिल कागज, आदेश और माँगे गए नौकरी के रिकॉर्ड लाएँ। मूल दस्तावेज और चुनौती दिए गए आदेश की सूचना मिलने का प्रमाण रखें। व्यक्तिगत उपस्थिति के निर्देश मानें; वकील नियुक्त करने से जरूरी न्यायालय उपस्थिति माफ नहीं होती।</dd></div>
            </dl>
          </section>
          <StatuteTable language="hi" id="service-statutory-framework" heading="सेवा और रोजगार कानून: पहले दायरा जाँचें" intro="नियोक्ता, पद, वास्तविक काम और नियमों से उपाय तय होता है। वर्तमान अधिसूचनाएँ, श्रम कानून लागू होने और बदलाव के प्रावधान, अधिकरण का दायरा और समय-सीमा जाँचें; सरकारी और निजी रोजगार की एक ही प्रक्रिया नहीं है।" rows={serviceHindiStatutes} />
          <StatuteTable language="hi" id="service-forum-jurisdiction" heading="नियोक्ता, लागू नियम और लखनऊ का सही कानूनी मंच" intro="नियोक्ता के प्रकार के अनुसार कानून, अनुशासनात्मक नियम और कानूनी मंच बदल सकते हैं। UPPST, CAT, श्रम मंच या Writ-A चुनने से पहले वर्तमान कानूनी दायरा और समय-सीमा जाँचें।" rows={serviceHindiForumRows} />
          <section id="service-matters" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>हम किन सेवा और रोजगार मामलों में मदद करते हैं?</h2>
            <div className="grid gap-5 sm:grid-cols-2">{serviceHindiMatters.map(item => <article key={item.title} className="glass-card rounded-sm border border-gold-500/20 p-6"><Briefcase aria-hidden="true" className="mb-4 h-5 w-5 text-gold-600 dark:text-gold-400" /><h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.title}</h3><ul className={`list-disc space-y-2 pl-5 text-sm ${bodyClass}`}>{item.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div>
          </section>
          <section id="service-deadlines" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>सेवा आदेश मिला है? समय-सीमा और तत्काल कदम</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>पूरा आदेश, नोटिस, लिफाफा या ईमेल रखें जो मिलने की तारीख दिखाता है। आरोप पत्र के जवाब, अपील, अधिकरण के आवेदन और रिट की अलग प्रक्रिया है। विभाग के अनौपचारिक आश्वासन या नए निवेदन को समय बढ़ना न मानें।</p>
              <p>केंद्रीय मामलों में Sections 20 और 21 Administrative Tribunals Act विभागीय उपायों और समय-सीमा से जुड़े हैं। राज्य अधिकरण के दावे U.P. Act, 1976 और उसकी समय-सीमा से चलते हैं। अपील की अवधि अनुशासनात्मक नियमों पर निर्भर है। तय अवधि न होने पर भी बिना उचित कारण की देरी से रिट खारिज हो सकती है।</p>
              <p>तुरंत असर हो तो उपलब्ध अंतरिम राहत के आवेदन की सलाह लें। सक्षम अधिकारी या न्यायालय राहत न दे तब तक निवेदन या आवेदन दाखिल करने से आदेश अपने आप नहीं रुकता। उसे अनदेखा कर सकते हैं, ऐसा न मानें।</p>
            </div>
          </section>
          <section id="service-documents" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>सेवा मामलों की सलाह के लिए जरूरी दस्तावेज</h2>
            <ul className={`list-disc space-y-3 pl-5 ${bodyClass}`}>{serviceHindiDocuments.map(item => <li key={item}>{item}</li>)}</ul>
            <p className={`mt-5 ${bodyClass}`}>जो रिकॉर्ड उपलब्ध हों उन्हें लाएँ; केवल किसी दस्तावेज के न होने के कारण सलाह में देरी न करें। पहली समीक्षा में उपलब्ध उपाय, अधूरे साक्ष्य, तात्कालिक जरूरत और प्रस्तावित काम का दायरा समझना चाहिए, किसी निश्चित परिणाम का वादा नहीं।</p>
          </section>
          <div className="mb-16 grid gap-10 md:grid-cols-2">
            <div><h2 className={headingClass}>महत्वपूर्ण मुद्दे</h2><ul className={`list-disc space-y-3 pl-5 ${bodyClass}`}>{['पदोन्नति और वरिष्ठता में देरी या विवाद', 'निलंबन, कारण बताओ नोटिस और विभागीय जाँच', 'नौकरी समाप्त करना, सेवा से हटाना या अनिवार्य सेवानिवृत्ति', 'पेंशन, ग्रेच्युटी और सेवानिवृत्ति के लाभ', 'तबादला और तैनाती', 'POSH शिकायतें और आंतरिक समिति की प्रक्रिया'].map(item => <li key={item}>{item}</li>)}</ul></div>
            <div><h2 className={headingClass}>हमारा तरीका</h2><p className={bodyClass}>सेवा रिकॉर्ड, आरोप पत्र या चुनौती दिए गए आदेश की गोपनीय समीक्षा से शुरू करते हैं। फिर जोखिम, संभव परिणाम और सही कानूनी मंच समझाते हैं। लागू नियम जहाँ अनुमति दें वहाँ विभागीय चरण में सहायता और आगे CAT, UPPST, CGIT या उच्च न्यायालय, लखनऊ पीठ में उपलब्ध उपाय की तैयारी की जाती है।</p></div>
          </div>
          <GuideStages language="hi" id="service-procedure" heading="लखनऊ में सेवा विवाद की प्रक्रिया: सात चरण" intro="निलंबन की समीक्षा से मिली राहत लागू कराने तक हर चरण संबंधित नियम और कानूनी मंच दिखाता है। हर मामले में हर चरण जरूरी नहीं; नौकरी के प्रकार और चुनौती दिए गए आदेश के अनुसार रास्ता बदलता है।" stages={serviceHindiStages} />
          <TranslatedFaqs id="service-faqs" title="सेवा और रोजगार: अक्सर पूछे जाने वाले सवाल" items={faqItems} />
          <section id="service-disciplinary-record-review" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10">
            <h2 className={headingClass}>आरोप पत्र, निलंबन या प्रतिकूल आदेश मिला है?</h2>
            <p className={`mb-5 ${bodyClass}`}>नियोक्ता, नियुक्ति की शर्तें, सेवा नियम और कार्यवाही का चरण पहले पहचानें। जाँच, अपील, CAT आवेदन, UPPST दावा, औद्योगिक विवाद और उच्च न्यायालय की रिट एक-दूसरे के बदले नहीं अपनाए जा सकते। सशस्त्र बलों के मामलों में कानून के दायरे और बाहर रखे गए मामलों के अनुसार <Link href="/services/armed-forces-tribunal-mining-lawyer-lucknow" className="text-gold-700 underline dark:text-gold-400">सशस्त्र बल अधिकरण</Link> उपयुक्त हो सकता है। निजी दावों में अनुबंध, वास्तविक काम और श्रम कानून अलग देखें।</p>
            <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">नौकरी और अनुशासनात्मक कार्यवाही का पूरा रिकॉर्ड तैयार करें</h3>
            <p className={bodyClass}>नियुक्ति पत्र, नियम, आरोप पत्र और संलग्न दस्तावेज, जाँच के नोटिस, जवाब, रिपोर्ट, चुनौती दिया गया आदेश और उसकी सूचना मिलने का प्रमाण दें। वेतन या पेंशन में सेवा पुस्तिका के अंश, वेतन तय करने के आदेश और सेवानिवृत्ति के कागज जोड़ें। जवाब, अपील और सुनवाई की अंतिम तारीखें लिखें। बार-बार निवेदन देने से समय-सीमा नहीं बढ़ती और आदेश नहीं रुकते। निष्पक्ष सुनवाई, विभागीय उपायों और अंतरिम राहत का आधार जाँचा जाता है; रोक या नौकरी में बहाली की गारंटी नहीं है।</p>
          </section>
          <div lang="en"><ServiceBlogs posts={blogPosts} fallbackIcon={<ScrollText aria-hidden="true" className="h-5 w-5 text-gold-600" />} heading="सेवा और रोजगार के लेख (अंग्रेज़ी में)" description="सेवा कानून और विभागीय कार्यवाही पर संबंधित लेख।" viewAllHref={`/blog?category=${encodeURIComponent('Service & Employment Matters')}`} /></div>
          <section id="service-consultation" className="glass-card scroll-mt-28 rounded-sm border border-gold-500/25 p-8 text-center md:p-12">
            <h2 className={headingClass}>सेवा या रोजगार विवाद पर सलाह चाहिए?</h2>
            <p className={`mx-auto mb-8 max-w-xl ${bodyClass}`}>भर्ती, पदोन्नति, अनुशासन, पेंशन या औद्योगिक विवाद के रिकॉर्ड की हमारी टीम से समीक्षा कराएँ। उपलब्ध उपाय CAT, UPPST, CGIT या इलाहाबाद उच्च न्यायालय, लखनऊ पीठ के अधिकार-क्षेत्र पर निर्भर है। यह सामान्य जानकारी है, व्यक्तिगत कानूनी सलाह या परिणाम की गारंटी नहीं।</p>
            <ConsultationActions className="justify-center" />
          </section>
        </div>
      </section>
      <div lang="en"><FirmCredentials /><Footer /></div>
    </main>
  )
}
