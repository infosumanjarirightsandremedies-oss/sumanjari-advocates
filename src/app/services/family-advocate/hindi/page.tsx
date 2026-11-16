import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, HeartHandshake, ScrollText } from 'lucide-react'
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
  familyHindiSearch, familyHindiMatters, familyHindiForums, familyHindiCourtRows,
  familyHindiStatutes, familyHindiStages, familyHindiInsights, familyHindiDetailedFaqs,
  familyOriginalHindiFaqs,
} from '@/lib/guides/familyHindi'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const ENGLISH_PATH = '/services/family-advocate'
const PAGE_PATH = `${ENGLISH_PATH}/hindi`
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const DIVORCE_PATH = '/services/divorce-lawyer-lucknow/hindi'
const familyLead = teamMembers.find(member => member.slug === 'aishwarya-pandey')
const familyTeam = ['akhilesh-yadav', 'namrata-pandey', 'prerna-yaduvanshi'].flatMap(slug => teamMembers.filter(member => member.slug === slug))
const headingClass = 'mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'

export const metadata: Metadata = {
  title: { absolute: familyHindiSearch.title },
  description: familyHindiSearch.description,
  keywords: ['लखनऊ में फैमिली कोर्ट के वकील', 'भरण-पोषण लखनऊ', 'बच्चे की अभिरक्षा', 'घरेलू हिंसा कानूनी सहायता', 'Family Court Lawyer Lucknow', 'Family vakil Lucknow', 'Child Custody Lucknow', 'Maintenance BNSS 144'],
  alternates: { canonical: PAGE_PATH, languages: { en: ENGLISH_PATH, hi: PAGE_PATH, 'x-default': ENGLISH_PATH } },
  openGraph: { title: familyHindiSearch.title, description: familyHindiSearch.description, url: PAGE_PATH, locale: 'hi_IN', alternateLocale: ['en_IN'] },
  twitter: { card: 'summary_large_image', title: familyHindiSearch.title, description: familyHindiSearch.description },
}

const faqItems: TranslatedFaq[] = [
  ...familyHindiInsights,
  ...familyHindiDetailedFaqs.map((item, index) => ({ ...item, id: index === 0 ? 'detailed-faqs' : undefined })),
  ...familyOriginalHindiFaqs.map((item, index) => ({ ...item, id: index === 0 ? 'hindi-faqs' : undefined })),
  { ...familyHindiSearch, id: 'choosing-an-advocate' },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebPage', '@id': `${PAGE_URL}#webpage`, url: PAGE_URL, name: familyHindiSearch.title, inLanguage: 'hi', translationOfWork: { '@id': `${SITE_URL}${ENGLISH_PATH}#webpage` } },
    {
      '@type': 'LegalService', '@id': `${PAGE_URL}#legal-service`, ...LUCKNOW_SERVICE_LOCATION,
      name: 'Sumanjari & Co. Advocates — लखनऊ में पारिवारिक मामले', url: PAGE_URL,
      description: familyHindiSearch.description, telephone: CHAMBER_TEL.replace('tel:', ''),
      branchOf: { '@id': `${SITE_URL}/#organization` }, serviceType: 'Family & Matrimonial Legal Services',
      areaServed: [{ '@type': 'City', name: 'Lucknow' }, { '@type': 'State', name: 'Uttar Pradesh' }],
    },
    {
      '@type': 'FAQPage', '@id': `${PAGE_URL}#family-faqs`, inLanguage: 'hi',
      mainEntity: faqItems.map(({ question, answer }) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
    },
    {
      '@type': 'HowTo', '@id': `${PAGE_URL}#family-procedure`, name: 'लखनऊ में पारिवारिक मामले की प्रक्रिया: सात चरण', inLanguage: 'hi',
      description: 'सामान्य प्रक्रिया की जानकारी; हर मामले में हर चरण जरूरी नहीं। तथ्यों, लागू कानून, अधिकार-क्षेत्र और आदेशों के अनुसार रास्ता बदलता है।',
      step: familyHindiStages.map((stage, index) => ({ '@type': 'HowToStep', position: index + 1, name: stage.title, text: stage.body.join(' '), url: `${PAGE_URL}#${stage.id}` })),
    },
    {
      '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'मुख्य पृष्ठ', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'पारिवारिक सेवाएँ', item: `${SITE_URL}${ENGLISH_PATH}` },
        { '@type': 'ListItem', position: 3, name: 'पारिवारिक मामले — हिंदी', item: PAGE_URL },
      ],
    },
  ],
}

function ConsultationActions({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <Link href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-4 py-3.5 font-body text-base font-semibold text-navy-900">सलाह के लिए संपर्क करें</Link>
      <ServiceContactLinks whatsappHref={whatsappUrl('नमस्ते, मुझे लखनऊ में पारिवारिक मामले, भरण-पोषण या बच्चों की कस्टडी पर हिंदी में कानूनी सलाह चाहिए।')} />
    </div>
  )
}

export default function HindiFamilyPage() {
  const blogPosts = getBlogPostsByCategory('Family & Matrimonial Matters')
  return (
    <main lang="hi" className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <div lang="en"><Navbar /></div>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/#services" className="inline-flex items-center gap-2 font-body text-sm text-navy-700/70 hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" /> हमारी सेवाओं पर वापस जाएँ</Link>
            <ServiceLanguageSwitch basePath={ENGLISH_PATH} language="hi" />
          </div>
          <header className="mb-12 grid gap-10 md:grid-cols-[minmax(0,1fr)_252px]">
            <div className="min-w-0">
              <p className="mb-4 font-body text-base font-semibold text-gold-700 dark:text-gold-400">पारिवारिक कानून · सरल हिंदी में जानकारी</p>
              <h1 className="mb-4 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">लखनऊ में फैमिली कोर्ट और पारिवारिक मामलों के वकील — <em className="text-gold-gradient">भरण-पोषण, बच्चों की कस्टडी और वैवाहिक विवाद</em></h1>
              <p className={`text-lg ${bodyClass}`}>अधिवक्ता ऐश्वर्या पांडेय के नेतृत्व में तलाक, भरण-पोषण, बच्चों की कस्टडी, घरेलू हिंसा और संबंधित पारिवारिक विवादों पर कानूनी सलाह तथा उचित प्रतिनिधित्व। सही उपाय फैमिली कोर्ट, जिला न्यायालय या इलाहाबाद हाईकोर्ट की लखनऊ बेंच के अधिकार-क्षेत्र के अनुसार चुना जाता है।</p>
              <ServiceStats service="family" language="hi" />
              <div className="mt-8 hidden md:block"><ConsultationActions /></div>
            </div>
            {familyLead && <div className="min-w-0 border-l border-gold-500/30 pl-6">
              {familyLead.img && <Image src={familyLead.img} alt={familyLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: familyLead.focus }} />}
              <p className="font-body text-sm font-semibold text-gold-700 dark:text-gold-400">पारिवारिक और वैवाहिक मामलों की प्रमुख वकील</p>
              <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{familyLead.name}</h2>
              <p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{familyLead.role}</p><p lang="en" className={`mt-2 text-sm ${bodyClass}`}>{familyLead.credentials}</p>
              <Link href={`/team/${familyLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">प्रोफाइल देखें <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
            </div>}
            <div className="md:hidden"><ConsultationActions /></div>
          </header>
          <GuideToc language="hi" items={[
            { id: 'family-team', label: 'हमारी टीम' }, { id: 'lucknow-chambers', label: 'चैंबर और रास्ता' },
            { id: 'choosing-an-advocate', label: 'वकील कैसे चुनें' }, { id: 'family-advice', label: 'परिवार के अलग मुद्दे और कानूनी उपाय' },
            { id: 'family-forums', label: 'फैमिली कोर्ट और दूसरी अदालतें' }, { id: 'family-court-jurisdiction-table', label: 'कौन-सा मामला किस अदालत में' },
            { id: 'family-matters', label: 'हम किन मामलों में मदद करते हैं' }, { id: 'family-statutes', label: 'लागू कानून' },
            { id: 'family-procedure', label: 'पारिवारिक मामले के सात चरण', children: familyHindiStages.map(stage => ({ id: stage.id, label: stage.title })) },
            { id: 'family-documents', label: 'सलाह के लिए जरूरी दस्तावेज' }, { id: 'family-interim-relief-review', label: 'अंतरिम कस्टडी और आर्थिक सहायता' },
            { id: 'family-faqs', label: 'अक्सर पूछे जाने वाले सवाल' },
          ]} />
          <section id="family-team" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>पारिवारिक और वैवाहिक मामलों की टीम</h2><p className={`mb-8 ${bodyClass}`}>अधिवक्ता ऐश्वर्या पांडेय पारिवारिक मामलों का नेतृत्व करती हैं। अधिवक्ता अखिलेश यादव, अधिवक्ता नम्रता पांडेय और अधिवक्ता प्रेरणा यदुवंशी सहयोग करते हैं। हर वकील की प्रोफाइल में उनके अपने कार्यक्षेत्र दिए गए हैं।</p>
            <div lang="en"><TeamCarousel members={familyTeam} label="Family and matrimonial team members" /></div>
          </section>
          <LucknowChambers language="hi" />
          <section id="family-advice" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>पारिवारिक कानून की सलाह और सही राहत की पहचान</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>एक विवाद में आर्थिक सहायता, बच्चा कहाँ रहेगा, साझा घर में रहने का अधिकार और विवाह में मेल-मिलाप या तलाक जैसे कई मुद्दे हो सकते हैं। हर मुद्दे का उपाय, जरूरी दस्तावेज और सक्षम अदालत अलग जाँचें। दावा करने वाले और नोटिस, याचिका या पुराने आदेश का जवाब देने वाले, दोनों को अपने मामले के अनुसार सलाह चाहिए हो सकती है। लखनऊ की वैवाहिक याचिकाएँ 430, वाला कदर रोड, कैसरबाग के फैमिली कोर्ट में जाती हैं जहाँ अधिकार-क्षेत्र हो; महिला थाना, हजरतगंज की काउंसलिंग अलग प्रक्रिया है।</p>
              <p>HMA, विशेष विवाह अधिनियम या लागू व्यक्तिगत कानून उपाय निर्धारित करता है। फैमिली कोर्ट्स एक्ट अधिकार-क्षेत्र और प्रक्रिया देता है, पर रिश्तेदारों का हर विवाद वहाँ नहीं जाता। भरण-पोषण, संरक्षण, कस्टडी और संपत्ति को अलग देखें। विवाह समाप्त करने के लिए <Link href={DIVORCE_PATH} className="text-gold-700 underline dark:text-gold-400">तलाक की हिंदी जानकारी</Link> में आपसी सहमति और विवादित रास्ते देखें।</p>
              <p>बच्चों की देखभाल की सलाह में अंतरिम कस्टडी, स्कूल, छुट्टियाँ, यात्रा और आर्थिक सहायता शामिल हैं। आर्थिक विवाद में आय, खर्च और पहले के आदेश देखें। सुरक्षा का खतरा हो तो समझौते से पहले तत्काल संरक्षण जरूरी हो सकता है। समझौता स्वेच्छा से हो और निभाया जा सके; हर कार्यवाही को कानून के अनुसार समाप्त करने के लिए जरूरी आदेश या कदम अलग पूरे करें।</p>
              <p className="text-sm">यह सामान्य जानकारी है, व्यक्तिगत कानूनी सलाह या परिणाम की गारंटी नहीं। कानूनों के मूल पाठ के लिए <a href="https://www.indiacode.nic.in/" className="text-gold-700 underline dark:text-gold-400">इंडिया कोड</a> और मामले की स्थिति या सुनवाई की सूची के लिए <a href="https://services.ecourts.gov.in/" className="text-gold-700 underline dark:text-gold-400">ई-कोर्ट सेवाएँ</a> देखें।</p>
            </div>
          </section>
          <section id="family-forums" className="mb-16 scroll-mt-28"><h2 className={headingClass}>कौन-सी अदालत सुनवाई कर सकती है?</h2><div className="grid gap-5 sm:grid-cols-2">{familyHindiForums.map(item => <article key={item.title} className="glass-card rounded-sm border border-gold-500/20 p-6"><h3 className="mb-2 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.title}</h3><p className={bodyClass}>{item.text}</p></article>)}</div></section>
          <section id="family-court-jurisdiction-table" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>कौन-सा पारिवारिक मामला लखनऊ की किस अदालत में जाता है?</h2>
            <div className="overflow-x-auto"><table className="w-full min-w-[640px] text-left font-body text-sm"><caption className={`mb-3 text-left ${bodyClass}`}>माँगी गई राहत, अधिकार-क्षेत्र और किस अदालत को मामला सौंपा गया है, उसके अनुसार सामान्य मार्ग</caption><thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">{['मामला', 'कानून', 'अदालत / मंच'].map(label => <th key={label} scope="col" className="p-3">{label}</th>)}</tr></thead><tbody className="text-navy-800 dark:text-cream/75">{familyHindiCourtRows.map(([matter, law, forum]) => <tr key={matter} className="border-b border-gold-500/15 align-top"><th scope="row" className="p-3 font-semibold">{matter}</th><td className="p-3">{law}</td><td className="p-3">{forum}</td></tr>)}</tbody></table></div>
            <p className={`mt-5 ${bodyClass}`}>वर्तमान स्थान, मामले की अदालत और उपलब्ध अपील या आदेश लागू कराने की प्रक्रिया रजिस्ट्री तथा आदेश से जाँचें। चैंबर में सलाह, अदालत की सुनवाई और पुलिस की काउंसलिंग अलग हैं।</p>
          </section>
          <section id="family-matters" className="mb-16 scroll-mt-28"><h2 className={headingClass}>पारिवारिक और वैवाहिक मामलों में सहायता</h2><div className="grid gap-5 sm:grid-cols-2">{familyHindiMatters.map(item => <article key={item.title} className={`glass-card relative rounded-sm border border-gold-500/20 p-6 ${item.href ? 'hover:border-gold-500/60 focus-within:ring-2 focus-within:ring-gold-500' : ''}`}><HeartHandshake aria-hidden="true" className="mb-4 h-5 w-5 text-gold-600 dark:text-gold-400" /><h3 className="mb-3 font-display text-lg font-bold text-navy-900 dark:text-cream">{item.href ? <Link href={item.href} className="inline-flex items-center gap-2 focus:outline-none"><span aria-hidden="true" className="absolute inset-0" />{item.title}<ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link> : item.title}</h3><ul className={`list-disc space-y-2 pl-5 text-sm ${bodyClass}`}>{item.points.map(point => <li key={point}>{point}</li>)}</ul></article>)}</div></section>
          <div className="mb-16 grid gap-10 md:grid-cols-2"><div><h2 className={headingClass}>महत्वपूर्ण मुद्दे</h2><ul className={`list-disc space-y-3 pl-5 ${bodyClass}`}>{['विवाह में अलगाव और तलाक के सही कानूनी आधार', 'भरण-पोषण और गुजारा भत्ते का उचित आकलन', 'बच्चे की भलाई और स्थिरता के अनुसार कस्टडी', 'घरेलू हिंसा और क्रूरता से संरक्षण', 'साथ रहने के अधिकार और संबंधित उपाय', 'संपत्ति, उत्तराधिकार और विरासत के विवाद'].map(item => <li key={item}>{item}</li>)}</ul></div><div><h2 className={headingClass}>हमारा तरीका</h2><p className={bodyClass}>रिश्ते की स्थिति, दस्तावेज और तत्काल चिंताओं की गोपनीय समीक्षा से शुरू करते हैं। लागू कानून, मध्यस्थता की उपयुक्तता और सक्षम अदालत समझाते हैं। प्रतिनिधित्व, समझौते और साथ चल रही कार्यवाही की तैयारी तथ्यों तथा कानूनी निर्देशों के अनुसार होती है; परिणाम निश्चित नहीं है।</p></div></div>
          <StatuteTable language="hi" id="family-statutes" heading="पारिवारिक और वैवाहिक मामलों के कानून" intro="विवाह कानून, दावे, पात्रता और अधिकार-क्षेत्र के अनुसार प्रावधान चुनें। भरण-पोषण, कस्टडी, घरेलू हिंसा और संपत्ति के उपाय एक-दूसरे की जगह नहीं लेते।" rows={familyHindiStatutes} />
          <GuideStages language="hi" id="family-procedure" heading="लखनऊ में पारिवारिक मामले के सात चरण" intro="काउंसलिंग से आदेश के पालन या अपील तक अलग रास्ते। हर मामले में हर चरण जरूरी नहीं; सुरक्षा, सबूत, लागू कानून और अदालत के निर्देश देखें।" stages={familyHindiStages} />
          <section id="family-documents" className="mb-16 scroll-mt-28"><h2 className={headingClass}>पहली सलाह के लिए जरूरी दस्तावेज</h2><p className={`mb-4 ${bodyClass}`}>रिश्ते और तत्काल मुद्दे की तथ्यात्मक जानकारी तैयार करें। जो कागजात न हों उन्हें पहचानें, लेकिन सुरक्षा, आर्थिक सहायता या बच्चे की चिंता में सलाह लेने में देरी न करें।</p><ul className={`list-disc space-y-3 pl-5 ${bodyClass}`}>{['विवाह का प्रमाण, लागू व्यक्तिगत कानून की जानकारी, पहचान, निवास और तारीखवार घटनाएँ।', 'याचिकाएँ, शिकायतें, समन, अंतरिम आदेश, समझौते, जुड़े या विदेश के मामले तथा भुगतान का प्रमाण।', 'आय, कर, बैंक, संपत्ति, देनदारियाँ, घर के खर्च और खुलासे का शपथपत्र।', 'बच्चे की शिक्षा, स्वास्थ्य, रोज की देखभाल, खर्च, मौजूदा संपर्क और सुरक्षा या यात्रा की चिंताएँ।', 'मूल संदेश और वैध तरीके से प्राप्त सबूत। विदेश से भाग लेने के लिए यात्रा की बाधाएँ और अधिकार देने वाले दस्तावेज रखें; वीडियो से उपस्थिति अदालत की अनुमति पर निर्भर है।'].map(item => <li key={item}>{item}</li>)}</ul></section>
          <section id="family-interim-relief-review" className="mb-16 scroll-mt-28 border-t border-gold-500/20 pt-10"><h2 className={headingClass}>अंतरिम कस्टडी, मुलाकात और आर्थिक सहायता की योजना</h2><p className={`mb-5 ${bodyClass}`}>अंतिम निर्णय से पहले ऐसी अंतरिम व्यवस्था चाहिए हो सकती है जिसे निभाया जा सके। स्कूल, स्वास्थ्य, देखभाल, सुरक्षा और मौजूदा संपर्क की बच्चे पर केंद्रित जानकारी रखें। बच्चे की भलाई सबसे जरूरी है; लिंग, आय या आरोपों से कस्टडी अपने आप नहीं मिलती। यात्रा और मुलाकात की माँग पुराने आदेश के अनुसार देखें।</p><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">आर्थिक खुलासा और साथ चल रहे मामले</h3><p className={bodyClass}>आय, संपत्ति, बैंक, जरूरी खर्च और सभी लंबित भरण-पोषण या संरक्षण आदेश बताएँ। जुड़े मामलों में राहत और भुगतान का सही समायोजन रखें; हर मामले का एक निश्चित प्रतिशत नहीं है। विवाह समाप्त करने और समझौते के लिए <Link href={DIVORCE_PATH} className="text-gold-700 underline dark:text-gold-400">तलाक की हिंदी जानकारी</Link> देखें।</p></section>
          <TranslatedFaqs id="family-faqs" title="पारिवारिक और वैवाहिक मामले: अक्सर पूछे जाने वाले सवाल" items={faqItems} />
          <div lang="en"><ServiceBlogs posts={blogPosts} fallbackIcon={<ScrollText aria-hidden="true" className="h-5 w-5 text-gold-600" />} heading="पारिवारिक और वैवाहिक मामलों के लेख (अंग्रेजी में)" viewAllHref={`/blog?category=${encodeURIComponent('Family & Matrimonial Matters')}`} /></div>
          <section className="glass-card rounded-sm border border-gold-500/25 p-8 text-center md:p-12"><h2 className={headingClass}>पारिवारिक या वैवाहिक मामले पर सलाह चाहिए?</h2><p className={`mx-auto mb-8 max-w-xl ${bodyClass}`}>तलाक, कस्टडी, भरण-पोषण या अन्य पारिवारिक मामले के दस्तावेज हमारी टीम से गोपनीय रूप से जाँचवाएँ। सक्षम अदालत और उपलब्ध राहत तथ्यों तथा कानून पर निर्भर है।</p><ConsultationActions className="justify-center" /></section>
        </div>
      </section>
      <div lang="en"><FirmCredentials /><Footer /></div>
    </main>
  )
}
