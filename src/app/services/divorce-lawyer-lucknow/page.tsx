import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Phone, HeartCrack, HeartHandshake, HandCoins, Baby, ShieldCheck, Scale, ScrollText } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ServiceSelection from '@/components/ServiceSelection'
import { serviceSearchContent, serviceSelectionQuestion } from '@/lib/serviceSearch'
import LucknowChambers from '@/components/LucknowChambers'
import FirmCredentials from '@/components/FirmCredentials'
import ServiceStats from '@/components/ServiceStats'
import ServiceBlogs from '@/components/DeferredServiceBlogs'
import TeamCarousel from '@/components/TeamCarousel'
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { divorceStages, divorceStatutes, divorceToc } from '@/lib/guides/divorceLucknow'
import { getBlogPostsBySlugs } from '@/lib/blogs'
import { teamMembers } from '@/lib/team'
import { CHAMBER_TEL, HIGH_COURT_CHAMBER_ADDRESS, LUCKNOW_SERVICE_LOCATION } from '@/lib/contactLinks'

const SITE_URL = 'https://www.sumanjariadvocates.com'
const searchContent = serviceSearchContent['divorce-lawyer-lucknow']
const PAGE_PATH = '/services/divorce-lawyer-lucknow'
const PAGE_URL = `${SITE_URL}${PAGE_PATH}`
const divorceLead = teamMembers.find((member) => member.slug === 'aishwarya-pandey')
const divorceTeam = ['jitendra-tiwari', 'akhilesh-yadav', 'prerna-yaduvanshi']
  .flatMap((slug) => teamMembers.filter((member) => member.slug === slug))

export const metadata: Metadata = {
  title: { absolute: searchContent.title },
  description: searchContent.description,
  keywords: [searchContent.attorneyKeyword, 'Divorce Advocate in Lucknow', 'Divorce Lawyer in Lucknow', 'Mutual Consent Divorce Lawyer Lucknow', 'Contested Divorce Lawyer Lucknow', 'Alimony Lawyer Lucknow', 'Child Custody Lawyer Lucknow', 'Family Court Advocate Lucknow'],
  alternates: { canonical: PAGE_PATH },
  openGraph: {
    title: 'Divorce Advocate & Lawyer in Lucknow | Sumanjari & Co.',
    description: 'Divorce and matrimonial representation led by Adv. Aishwarya Pandey: mutual consent divorce, contested proceedings, maintenance, and child custody in Lucknow.',
    url: PAGE_PATH,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divorce Lawyer in Lucknow | Mutual & Contested Divorce',
    description: 'Aishwarya Pandey leads advice on divorce, alimony, parenting arrangements and connected matrimonial proceedings.',
  },
}

const services = [
  {
    icon: HeartHandshake,
    title: 'Mutual Consent Divorce',
    text: 'When both spouses agree to separate, a clear settlement can reduce uncertainty. We assist with joint petitions, first and second motion proceedings, and applications for waiver of the cooling-off period where legally available.',
    points: ['Documenting voluntary consent and the terms of separation', 'Recording alimony, custody, visitation, and return of belongings', 'Coordinating settlement obligations with connected proceedings'],
  },
  {
    icon: HeartCrack,
    title: 'Contested Divorce',
    text: 'When consent or settlement is not possible, the petition must establish a ground recognised by the applicable marriage law. We prepare and defend petitions, assess evidence, and represent clients through interim applications, hearings, and trial.',
    points: ['Advice on grounds such as cruelty, desertion, or adultery', 'Petitions, replies, evidence, and cross-examination', 'Defence against disputed allegations and unsupported claims'],
  },
  {
    icon: HandCoins,
    title: 'Maintenance & Alimony',
    text: 'Financial arrangements need to account for actual income, reasonable needs, dependants, and existing orders. We assist with interim support, litigation expenses, permanent alimony, and settlement structures suited to the facts.',
    points: ['Income and asset disclosures and supporting records', 'Applications and responses under applicable maintenance provisions', 'Enforcement, variation, and adjustment of overlapping awards'],
  },
  {
    icon: Baby,
    title: 'Child Custody & Parenting Arrangements',
    text: 'The welfare of the child is central to custody decisions. We help parents seek workable arrangements for care, schooling, holidays, communication, and access, including interim relief while the divorce remains pending.',
    points: ['Custody, guardianship, and visitation applications', 'Parenting schedules and child-support arrangements', 'Relocation, access disputes, and changing circumstances'],
  },
  {
    icon: ShieldCheck,
    title: 'Domestic Violence & Connected Proceedings',
    text: 'A divorce may run alongside protection, residence, maintenance, or criminal proceedings. We assess each case separately and coordinate the strategy so that pleadings, disclosures, and settlement steps remain consistent.',
    points: ['Protection and residence relief under the Domestic Violence Act', 'Representation in connected matrimonial cruelty proceedings', 'Lawful settlement, withdrawal, or quashing steps where permissible'],
  },
  {
    icon: Scale,
    title: 'Judicial Separation & Annulment',
    text: 'Divorce is not the only matrimonial remedy. Judicial separation does not dissolve the marriage, while annulment concerns a marriage that is void or voidable on statutory grounds. We assess which remedy is legally appropriate.',
    points: ['Distinguishing separation from dissolution of marriage', 'Review of grounds, limitation, and supporting evidence', 'Petitions and defence under the governing marriage law'],
  },
]

const grounds = [
  { title: 'Cruelty', text: 'Physical or mental cruelty may be a divorce ground under the governing law. The court examines the conduct and its context; ordinary disagreements do not automatically establish cruelty. A careful chronology and reliable supporting material are important.' },
  { title: 'Desertion', text: 'Under the Hindu Marriage Act, desertion must ordinarily continue for at least two years immediately before the petition. Separation alone is not sufficient: intention, consent, reasonable cause, and the surrounding facts matter.' },
  { title: 'Adultery & Other Statutory Grounds', text: 'Adultery remains a civil divorce ground under relevant marriage laws even though it is no longer a criminal offence. Other grounds depend on the applicable statute and must meet its conditions. Evidence must be obtained lawfully, without unauthorised access to accounts or devices.' },
]

const documents = [
  'Marriage certificate, if available, and other evidence of the marriage such as photographs or invitations.',
  'Identity and address documents, and details of the marriage location, residence, and last shared home.',
  'A dated account of significant events, separation, reconciliation attempts, and earlier proceedings.',
  'Income records, salary slips, tax returns, bank statements, assets, liabilities, and relevant expenses.',
  'Children\'s birth certificates, school records, care arrangements, and education or medical expenses.',
  'Copies of notices, complaints, petitions, court orders, and existing settlement agreements.',
  'Lawfully obtained communications, medical records, or evidence relevant to the pleaded grounds.',
  'Details of stridhan, jewellery, belongings, and jointly held property relevant to settlement terms.',
]

const faqs = [
  { question: 'How do I choose between mutual consent and contested divorce?', answer: 'Mutual consent divorce requires both spouses to agree to dissolve the marriage and maintain consent through the required proceedings. A contested divorce may be appropriate when one spouse does not agree or key issues remain unresolved, but a recognised statutory ground must be established. We assess the applicable law and evidence before recommending a route.' },
  { question: 'How long does a divorce take in Lucknow?', answer: 'There is no fixed completion time for every case. The applicable statute, service of notice, settlement, evidence, connected applications, and the court\'s schedule all affect duration. Mutual consent proceedings are generally less extensive than a contested trial, but no decree date can be guaranteed.' },
  { question: 'Can the six-month cooling-off period be waived in Lucknow Family Court?', answer: 'Yes, in appropriate mutual consent cases under Section 13B(2) of the Hindu Marriage Act. Under Amardeep Singh v. Harveen Kaur (2017), the court considers separation, unsuccessful reconciliation efforts, genuine settlement of alimony, custody and connected issues, and whether further waiting serves any purpose. Amit Kumar v. Suman Beniwal (2021) explains that these factors are not a rigid checklist. Waiver is discretionary, not automatic, and continuing consent remains necessary.' },
  { question: 'Is one year of separation necessary for mutual consent divorce?', answer: 'Section 13B of the Hindu Marriage Act ordinarily requires the spouses to have lived separately for at least one year, to be unable to live together, and to agree to dissolve the marriage. Living separately concerns the marital relationship and does not always mean different addresses. Requirements under other laws must be checked separately.' },
  { question: 'Can I file in Lucknow if my spouse lives elsewhere?', answer: 'Possibly, depending on the applicable jurisdiction provisions. Under the Hindu Marriage Act, relevant connections can include where the marriage was solemnised, where the respondent resides, where the spouses last resided together, and, for a wife filing a petition, where she resides when filing. Special situations and other marriage laws require a separate assessment.' },
  { question: 'How are maintenance and permanent alimony decided?', answer: 'Courts consider factors such as income, earning capacity, assets, reasonable needs, dependants, and the circumstances of the parties. There is no universal percentage or automatic entitlement to a particular amount. Existing maintenance orders and financial disclosures are important to the assessment.' },
  { question: 'Who gets custody of the children after divorce?', answer: 'The child\'s welfare is the paramount consideration. Courts examine care, stability, education, safety, and other relevant circumstances, including the child\'s wishes where appropriate. Custody is not determined solely by a parent\'s gender or income. Visitation and child support may be addressed separately.' },
  { question: 'Does divorce automatically divide property equally?', answer: 'No general rule automatically divides all property equally on divorce in India. Title, contributions, the nature of the asset, applicable law, and negotiated terms matter. Stridhan is distinct from jointly held assets. A settlement should identify each asset and the steps needed to transfer or return it.' },
  { question: 'What if my spouse withdraws consent or refuses to attend?', answer: 'A mutual consent decree ordinarily requires continuing consent at the relevant stages. If consent is withdrawn or attendance becomes an issue, the available procedural options must be assessed. A contested petition is not an automatic substitute and requires its own legal basis.' },
  { question: 'Do connected criminal cases end with a divorce settlement?', answer: 'A settlement may provide for lawful steps in connected cases, but a divorce decree does not automatically close a criminal complaint or domestic violence proceeding. Withdrawal, compounding, or High Court quashing depends on the nature of the case and the court\'s approval where required.' },
  { question: 'What does divorce representation cost?', answer: 'Fees depend on the scope of advice, drafting, hearings, interim applications, evidence, and any appeal. After reviewing the matter, the team can explain the proposed scope and fee arrangement. Court fees and other expenses should be distinguished from professional fees.' },
  { question: 'Where is the Family Court in Lucknow and which cases does it hear?', answer: 'The Family Court, Lucknow is at 430, Wala Qadar Road, Kaiserbagh (also spelled Qaiserbagh), Lucknow, Uttar Pradesh 226001, near Parivartan Chowk. Under the Family Courts Act, 1984, it hears dissolution of marriage, judicial separation, restitution of conjugal rights, maintenance, custody and guardianship matters where it has jurisdiction. Confirm the assigned courtroom and current venue with the registry before travelling; residence in Lucknow alone does not establish jurisdiction for every petition.' },
  { question: 'Can an NRI spouse take part in a Lucknow divorce by video-conference?', answer: 'Courts have increasingly permitted appearance and evidence by video-conference where travel is impractical, but this is allowed at the court\'s discretion and is not an automatic right. We assess whether video-conference participation is realistic for a given hearing, and coordinate service and representation where one spouse lives abroad. Our NRI legal services team can also assist with related cross-border issues.' },
  { question: 'Where do appeals from the Lucknow Family Court lie?', answer: 'Appeals from appealable judgments and orders of the Family Court, Lucknow lie before a Division Bench of the Allahabad High Court, Lucknow Bench at Gomti Nagar under Section 19 of the Family Courts Act, 1984. Consent decrees and interlocutory orders are excluded; certain maintenance orders have a different review route. Confirm maintainability and the applicable limitation period promptly from the certified copy rather than assuming that every order can be appealed.' },
  { question: 'What should I check before my first Family Court hearing in Lucknow?', answer: 'Check the case number, cause list, assigned courtroom, hearing date and current venue. Confirm working hours, filing-counter cut-off times and any mediation referral with the Family Court registry; these can change with notices and holidays. Carry original government-issued photo identification, copies of filed papers and court orders, and photographs or other documents if directed. Statutory court fees are separate from professional fees and other expenses.' },
]

const hindiFaqs = [
  {
    question: 'लखनऊ फैमिली कोर्ट में आपसी सहमति से तलाक की क्या प्रक्रिया है?',
    answer: 'हिंदू विवाह अधिनियम की धारा 13B के तहत सामान्यतः कम से कम एक वर्ष से अलग रह रहे पति-पत्नी संयुक्त याचिका और समझौते की शर्तें प्रस्तुत करते हैं। पहले मोशन में बयान दर्ज होते हैं। दूसरा मोशन सामान्यतः याचिका प्रस्तुत होने के छह महीने बाद और अठारह महीने के भीतर होता है। अमरदीप सिंह बनाम हरवीन कौर (2017) के अनुसार अदालत उचित मामलों में छह महीने की अवधि से छूट दे सकती है। अलगाव, सुलह के प्रयास, भरण-पोषण, बच्चों की देखभाल और संबंधित विवादों के वास्तविक समझौते पर विचार होता है। छूट स्वतः नहीं मिलती; डिक्री तक दोनों की स्वैच्छिक सहमति बनी रहनी चाहिए।',
  },
  {
    question: 'क्या भरण-पोषण तय करने के लिए आय का शपथ पत्र देना अनिवार्य है?',
    answer: 'रजनेश बनाम नेहा (2020) में सर्वोच्च न्यायालय ने भरण-पोषण मामलों में दोनों पक्षों से निर्धारित प्रारूप में संपत्ति और देनदारियों का विस्तृत शपथ पत्र दाखिल करने का निर्देश दिया है। इसमें आय, खर्च, संपत्ति, ऋण और आश्रितों का सही विवरण तथा उपलब्ध दस्तावेज दिए जाते हैं। पहले से मिले भरण-पोषण आदेश भी बताने चाहिए। अदालत के निर्देश और लागू प्रारूप की जाँच करें; हर तलाक याचिका में अपने आप ऐसा दावा नहीं होता।',
  },
  {
    question: 'फैमिली कोर्ट के आदेश के खिलाफ अपील कहाँ होती है?',
    answer: 'लखनऊ फैमिली कोर्ट के अपील योग्य निर्णय और आदेश के विरुद्ध फैमिली कोर्ट्स एक्ट, 1984 की धारा 19 के तहत इलाहाबाद हाईकोर्ट की लखनऊ बेंच, गोमती नगर में दो न्यायाधीशों की पीठ के समक्ष अपील होती है। सहमति की डिक्री और अंतरिम प्रकृति के आदेशों पर धारा 19 की अपील नहीं होती; कुछ भरण-पोषण आदेशों के लिए अलग समीक्षा प्रक्रिया है। प्रमाणित प्रति लेकर अपील की उपलब्धता और समय-सीमा तुरंत जाँचें।',
  },
  {
    question: 'लखनऊ का फैमिली कोर्ट कहाँ है और वहाँ कौन-से मामले सुने जाते हैं?',
    answer: 'लखनऊ का फैमिली कोर्ट 430, वाला कदर रोड, कैसरबाग, लखनऊ, उत्तर प्रदेश 226001 में परिवर्तन चौक के पास स्थित है। फैमिली कोर्ट्स एक्ट, 1984 के तहत यहाँ विवाह-विच्छेद, न्यायिक पृथक्करण, दाम्पत्य अधिकारों की पुनर्स्थापना, भरण-पोषण, बच्चों की अभिरक्षा और संरक्षकता जैसे मामले सुने जाते हैं, जहाँ अदालत को क्षेत्राधिकार हो। अदालत जाने से पहले वर्तमान पता, कक्ष संख्या और कार्य समय रजिस्ट्री या वाद-सूची से सुनिश्चित करें।',
  },
  {
    question: 'क्या लखनऊ में रहने भर से मैं वहाँ तलाक की याचिका दायर कर सकता या सकती हूँ?',
    answer: 'हमेशा नहीं। हिंदू विवाह अधिनियम की धारा 19 के अनुसार याचिका वहाँ दायर हो सकती है जहाँ विवाह संपन्न हुआ, जहाँ प्रतिवादी रहता है, जहाँ पति-पत्नी अंतिम बार साथ रहे, और पत्नी द्वारा याचिका दायर करने पर जहाँ वह याचिका के समय रह रही है। विशेष विवाह अधिनियम की धारा 31 में अलग प्रावधान है। लखनऊ जिले के पते के साथ भी अधिकार-क्षेत्र का वैधानिक आधार होना चाहिए। अन्य जिलों के निवासी प्रायः अपने जिले के फैमिली कोर्ट में जाते हैं।',
  },
  {
    question: 'आपसी सहमति से तलाक में क्या एक वर्ष अलग रहना ज़रूरी है?',
    answer: 'हिंदू विवाह अधिनियम की धारा 13B के अनुसार सामान्यतः पति-पत्नी को याचिका प्रस्तुत करने से पहले कम से कम एक वर्ष से अलग रह रहा होना चाहिए, साथ रहना संभव न होना चाहिए और तलाक के लिए आपसी सहमति होनी चाहिए। "अलग रहना" का अर्थ वैवाहिक संबंध की स्थिति से है और हर मामले में अलग पते का होना आवश्यक नहीं। विवाह के पहले वर्ष में धारा 14 की रोक भी जाँचनी होती है। अन्य विवाह कानूनों की शर्तें अलग से देखी जाती हैं।',
  },
  {
    question: 'अगर पति या पत्नी बीच में सहमति वापस ले ले या अदालत न आए तो क्या होगा?',
    answer: 'आपसी सहमति की डिक्री के लिए डिक्री पारित होने तक सहमति बनी रहनी चाहिए। सुरेष्टा देवी बनाम ओम प्रकाश (1991) के अनुसार कोई भी पक्ष डिक्री से पहले सहमति वापस ले सकता है, और केवल संयुक्त याचिका के आधार पर किसी को तलाक के लिए बाध्य नहीं किया जा सकता। ऐसी स्थिति में उपलब्ध प्रक्रियात्मक विकल्पों का आकलन करना होता है। विवादित (कंटेस्टेड) याचिका अपने आप विकल्प नहीं बनती; उसके लिए धारा 13 के तहत वैधानिक आधार सिद्ध करना आवश्यक है।',
  },
  {
    question: 'विवादित तलाक के मुख्य आधार क्या हैं?',
    answer: 'हिंदू विवाह अधिनियम की धारा 13 के तहत क्रूरता, परित्याग और जारकर्म (एडल्टरी) जैसे आधार हैं। परित्याग में सामान्यतः याचिका से ठीक पहले कम से कम दो वर्ष की निरंतर अवधि आवश्यक होती है; केवल अलग रहना पर्याप्त नहीं है, इरादा, सहमति और उचित कारण भी देखे जाते हैं। क्रूरता में आचरण और उसके संदर्भ को परखा जाता है; साधारण मतभेद स्वतः क्रूरता नहीं होते। केवल लंबे समय का अलगाव सामान्य फैमिली कोर्ट में "असुधार्य विघटन" का स्वतंत्र आधार नहीं है। साक्ष्य वैध तरीके से जुटाए जाने चाहिए।',
  },
  {
    question: 'स्थायी गुजारा भत्ता (एलिमनी) और अंतरिम भरण-पोषण कैसे तय होता है?',
    answer: 'अदालत दोनों पक्षों की आय, कमाने की क्षमता, संपत्ति, उचित आवश्यकताओं, आश्रितों और परिस्थितियों को देखती है; कोई निश्चित प्रतिशत या स्वतः अधिकार नहीं है। मुकदमा लंबित रहने पर धारा 24 के तहत अंतरिम भरण-पोषण और मुकदमे का खर्च माँगा जा सकता है, जबकि स्थायी गुजारा भत्ता धारा 25 के तहत तय होता है, जो एकमुश्त या किस्तों में हो सकता है। पहले से चल रहे भरण-पोषण के आदेश अदालत को बताने चाहिए।',
  },
  {
    question: 'तलाक के बाद बच्चों की कस्टडी किसे मिलती है?',
    answer: 'बच्चे का कल्याण सबसे महत्वपूर्ण कारक है। अदालत देखभाल, स्थिरता, शिक्षा, सुरक्षा और उचित मामलों में बच्चे की इच्छा जैसे तथ्यों पर विचार करती है। कस्टडी केवल माता-पिता के लिंग या आय से तय नहीं होती। मुकदमे के दौरान अंतरिम कस्टडी और मुलाकात की व्यवस्था धारा 26 जैसे प्रावधानों के तहत माँगी जा सकती है। मुलाकात का अधिकार और बच्चे का खर्च अलग से भी तय हो सकता है।',
  },
  {
    question: 'क्या तलाक में संपत्ति अपने आप बराबर बँट जाती है? स्त्रीधन का क्या होता है?',
    answer: 'नहीं, भारत में तलाक पर सारी संपत्ति अपने आप बराबर नहीं बँटती। स्वामित्व, योगदान, संपत्ति की प्रकृति, लागू कानून और आपसी समझौते की शर्तें महत्वपूर्ण होती हैं। स्त्रीधन संयुक्त संपत्ति से अलग माना जाता है, और समझौते में उसकी वापसी तथा हर संपत्ति के हस्तांतरण के चरण स्पष्ट लिखे जाने चाहिए। विवाह के समय या उसके आसपास दी गई संपत्ति पर धारा 27 के तहत आदेश माँगा जा सकता है; संयुक्त रूप से खरीदी गई संपत्ति के लिए प्रायः अलग समाधान चाहिए।',
  },
  {
    question: 'क्या एनआरआई पति या पत्नी वीडियो कॉन्फ्रेंसिंग से लखनऊ की तलाक कार्यवाही में शामिल हो सकते हैं?',
    answer: 'अदालतें यात्रा कठिन होने पर कई मामलों में वीडियो कॉन्फ्रेंसिंग से उपस्थिति या साक्ष्य की अनुमति देती हैं, लेकिन यह अदालत के विवेक पर है, स्वतः अधिकार नहीं। नोटिस की तामील, वकील के माध्यम से प्रतिनिधित्व और सुनवाई की तारीख की व्यावहारिकता का पहले आकलन करना चाहिए। अनुमति और सुनवाई के निर्देश रजिस्ट्री या अदालत के आदेश से पुष्टि करें।',
  },
  {
    question: 'क्या तलाक के समझौते से जुड़े आपराधिक मामले अपने आप खत्म हो जाते हैं?',
    answer: 'नहीं। तलाक की डिक्री या निजी समझौता किसी आपराधिक शिकायत या घरेलू हिंसा की कार्यवाही को स्वतः समाप्त नहीं करता। मामले की प्रकृति के अनुसार समझौता, वापसी या हाईकोर्ट में धारा 528 BNSS (पूर्व में धारा 482 CrPC) के तहत निरस्तीकरण जैसे वैधानिक उपाय अपनाने पड़ सकते हैं, जो अदालत की अनुमति और कानून की उपलब्धता पर निर्भर हैं। पुलिस को केवल निजी वापसी-पत्र देने से मामला समाप्त नहीं होता।',
  },
  {
    question: 'पहली परामर्श बैठक में कौन-से दस्तावेज़ लेकर आना चाहिए?',
    answer: 'विवाह प्रमाणपत्र या विवाह का अन्य प्रमाण, पहचान और पते के दस्तावेज़, अलगाव की तारीखों का क्रमवार विवरण, आय के कागज़ात (वेतन पर्ची, आयकर रिटर्न, बैंक विवरण), संपत्ति और देनदारियों की जानकारी, बच्चों के जन्म प्रमाणपत्र और स्कूल रिकॉर्ड, तथा पहले से मिले नोटिस, शिकायतें, याचिकाएँ और अदालती आदेश साथ लाएँ। सभी साक्ष्य वैध तरीके से प्राप्त किए गए होने चाहिए, और मूल दस्तावेज़ सुरक्षित रखें। कोई दस्तावेज़ उपलब्ध न हो तो परामर्श में उस पर चर्चा हो सकती है।',
  },
]

const localityGroups = [
  { region: 'Trans-Gomti', localities: ['Gomti Nagar', 'Gomti Nagar Extension', 'Vibhuti Khand', 'Indira Nagar', 'Aliganj', 'Jankipuram', 'Vikas Nagar', 'Mahanagar'] },
  { region: 'Central & Cis-Gomti', localities: ['Hazratganj', 'Kaiserbagh', 'Lalbagh', 'Mall Avenue', 'Raj Bhavan vicinity'] },
  { region: 'South & Industrial Lucknow', localities: ['Ashiyana', 'LDA Colony', 'Alambagh', 'Transport Nagar', 'Telibagh', 'Sushant Golf City (Amar Shaheed Path)'] },
  { region: 'Western Lucknow', localities: ['Rajajipuram', 'Chowk', 'Thakurganj', 'Dubagga'] },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
  {
    '@type': 'LegalService',
    '@id': `${PAGE_URL}#legal-service`,
    ...LUCKNOW_SERVICE_LOCATION,
    branchOf: { '@id': `${SITE_URL}/#organization` },
    name: 'Sumanjari & Co. Advocates - Divorce Advocate & Lawyer in Lucknow',
    url: PAGE_URL, description: metadata.description,
    logo: `${SITE_URL}/favicon.png`,
    telephone: CHAMBER_TEL.replace('tel:', ''),
    email: 'info.sumanjarirightsandremedies@gmail.com',
    areaServed: [
      { '@type': 'City', name: 'Lucknow' },
      { '@type': 'State', name: 'Uttar Pradesh' },
      ...localityGroups.flatMap(({ localities }) => localities.map((name) => ({
        '@type': 'Place', name, containedInPlace: { '@type': 'City', name: 'Lucknow' },
      }))),
    ],
    serviceType: 'Divorce and Matrimonial Legal Services',
  },
  ...(divorceLead ? [{
    '@type': 'Person',
    '@id': `${SITE_URL}/#aishwarya-pandey`,
    name: divorceLead.name,
    url: `${SITE_URL}/team/${divorceLead.slug}`,
    jobTitle: divorceLead.role,
    worksFor: { '@id': `${SITE_URL}/#organization` },
    memberOf: { '@type': 'Organization', name: 'Bar Council of Uttar Pradesh' },
    hasCredential: { '@type': 'EducationalOccupationalCredential', name: divorceLead.credentials },
    alumniOf: [
      { '@type': 'CollegeOrUniversity', name: 'Banasthali Vidyapith' },
      { '@type': 'CollegeOrUniversity', name: 'Ram Swaroop Memorial University' },
    ],
    knowsAbout: ['Family Law', 'Mutual Consent Divorce', 'Contested Divorce', 'Child Custody', 'Maintenance & Alimony'],
  }] : []),
  {
    '@type': 'FAQPage',
    '@id': `${PAGE_URL}#faqs`,
    inLanguage: ['en-IN', 'hi-IN'],
    mainEntity: [
      ...faqs.map(({ question, answer }) => ({ '@type': 'Question', inLanguage: 'en-IN', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      ...hindiFaqs.map(({ question, answer }) => ({ '@type': 'Question', inLanguage: 'hi-IN', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })),
      serviceSelectionQuestion(searchContent),
    ],
  },
  {
    '@type': 'HowTo',
    '@id': `${PAGE_URL}#divorce-procedure`,
    name: 'Divorce Procedure in Lucknow: Stage 1 to Stage 10',
    description: 'An informational overview of alternative mutual consent and contested routes, from assessment to decree, appeal and enforcement. Not every stage applies to every case; court directions and the applicable marriage law govern.',
    inLanguage: 'en-IN',
    step: divorceStages.map((stage, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: stage.title,
      text: stage.body.join(' '),
      url: `${PAGE_URL}#${stage.id}`,
    })),
  },
  {
    '@type': 'BreadcrumbList',
    '@id': `${PAGE_URL}#breadcrumbs`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Family Advocate & Lawyer in Lucknow', item: `${SITE_URL}/services/family-advocate` },
      { '@type': 'ListItem', position: 3, name: 'Divorce Advocate & Lawyer in Lucknow', item: `${SITE_URL}${PAGE_PATH}` },
    ],
  },
  ],
}

function ConsultationActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Link href="/#contact" className="btn-gold inline-flex items-center justify-center rounded-sm px-6 py-3.5 font-caps text-xs font-semibold uppercase tracking-widest text-navy-900">Consult Now</Link>
      <a href={CHAMBER_TEL} className="inline-flex items-center justify-center gap-2 rounded-sm border border-gold-500/40 px-6 py-3.5 font-caps text-xs font-semibold uppercase tracking-widest text-navy-800 transition-colors hover:border-gold-500 dark:text-cream/85"><Phone aria-hidden="true" className="h-4 w-4 shrink-0" /> Call Now</a>
    </div>
  )
}

const divorceBlogSlugs = [
  'cruelty-as-ground-divorce-mental-physical',
  'irretrievable-breakdown-marriage-article-142-dissolution',
  'desertion-adultery-hindu-marriage-act-evidentiary-standards',
  'mutual-consent-divorce-strategy-section-13b-hma-28-special',
  'annulment-void-voidable-marriages-section-11-12-hma',
  'permanent-alimony-computation-lumpsum-vs-monthly',
  'matrimonial-property-joint-assets-benami-transactions',
  'master-settlement-agreements-clean-slate-exits',
  'high-court-writs-quashing-tactics-section-482-crpc-528',
  'rajnesh-v-neha-masterclass-affidavits-assets-liabilities',
  'quantum-determination-interim-maintenance-aditi-jitesh-sharma',
  'nri-marriages-cross-border-matrimonial-abandonment',
]

export default async function DivorceLawyerPage() {
  const divorceBlogPosts = getBlogPostsBySlugs(divorceBlogSlugs)
  const headingClass = 'mb-6 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl'
  const bodyClass = 'font-body leading-relaxed text-navy-700 dark:text-cream/65'

  return (
    <main className="relative min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <Navbar />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/services/family-advocate" className="mb-10 inline-flex items-center gap-2 font-caps text-xs uppercase tracking-widest text-navy-700/70 transition-colors hover:text-gold-600 dark:text-cream/45 dark:hover:text-gold-400"><ArrowLeft aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /> Family &amp; Matrimonial Matters</Link>

          <header className="mb-16 grid gap-10 md:grid-cols-[minmax(0,1fr)_252px]">
            <div className="min-w-0">
              <p className="mb-4 font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">Family Law</p>
              <h1 className="mb-5 font-display text-4xl font-bold leading-tight text-navy-900 dark:text-cream md:text-5xl">Divorce Lawyer &amp; Advocate in Lucknow — <em className="text-gold-gradient">Mutual Consent &amp; Contested Divorce</em></h1>
              <p className={`mb-6 text-lg ${bodyClass}`}>Discreet representation for mutual consent divorce, contested proceedings, maintenance, and child custody before the Family Court, Lucknow and appropriate appellate forums.</p>
              <p className={`mb-8 ${bodyClass}`}>Our divorce and matrimonial practice is led by <strong className="text-navy-900 dark:text-cream">Adv. Aishwarya Pandey</strong>, Associate Partner at Sumanjari &amp; Co. Advocates. We help you understand the available remedies, prepare your case, and address the financial and parenting decisions that accompany separation.</p>
              <p className={`mb-8 ${bodyClass}`}>Divorce petitions for Lucknow are heard by the Family Court, Lucknow at Wala Qadar Road, Qaiserbagh (Principal Judge and Additional Principal Judges); appeals go to the Allahabad High Court, Lucknow Bench at Gomti Nagar; the ten stages below explain each step.</p>
              <ServiceStats service="divorce" />
              <div className="hidden md:block">
                <ConsultationActions />
              </div>
            </div>
            {divorceLead && (
              <div className="min-w-0 border-l border-gold-500/30 pl-6">
                {divorceLead.img && <Image src={divorceLead.img} alt={divorceLead.name} width={252} height={288} priority sizes="(min-width: 768px) 252px, 280px" className="mb-5 h-72 w-full max-w-[280px] rounded-sm object-cover" style={{ objectPosition: divorceLead.focus }} />}
                <p className="font-caps text-xs uppercase tracking-widest text-gold-700 dark:text-gold-400">Divorce &amp; Matrimonial Lead</p>
                <h2 className="mt-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{divorceLead.name}</h2>
                <p className={`mt-2 text-sm ${bodyClass}`}>{divorceLead.role}</p>
                <p className={`mt-2 text-sm ${bodyClass}`}>{divorceLead.credentials}</p>
                <Link href={`/team/${divorceLead.slug}`} className="mt-4 inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 dark:text-gold-400">View Profile <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></Link>
              </div>
            )}
            <div className="md:hidden">
              <ConsultationActions />
            </div>
          </header>

          <GuideToc items={divorceToc} />

          <section className="mb-16" aria-labelledby="divorce-team">
            <h2 id="divorce-team" className="mb-4 scroll-mt-28 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
              Divorce &amp; Matrimonial Support Team
            </h2>
            <p className="mb-8 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">
              Adv. Aishwarya Pandey leads our divorce practice. Supporting
              advocates bring recorded experience in family, matrimonial and
              connected civil proceedings, with allocation based on the needs
              of the case.
            </p>
            <TeamCarousel members={divorceTeam} label="Divorce and matrimonial team members" />
          </section>

          <LucknowChambers />
          <ServiceSelection content={searchContent} />

          <section className="mb-16">
            <h2 className={headingClass}>Clear Advice at a Difficult Turning Point</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>Ending a marriage involves more than obtaining a decree. Decisions about children, financial support, housing, belongings, and pending disputes can shape everyday life long after proceedings conclude. Our approach begins with understanding your circumstances, identifying immediate concerns, and explaining the remedies under the law governing your marriage.</p>
              <p>We assist spouses seeking an amicable separation as well as clients who need to file or defend contested proceedings. Where negotiation is realistic, we work towards precise and workable settlement terms. Where litigation is necessary, we focus on accurate pleadings, reliable evidence, and preparation for court rather than promises of a particular result.</p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className={headingClass}>Divorce &amp; Matrimonial Services We Handle</h2>
            <div className="grid gap-5 sm:grid-cols-2">{services.map(({ icon: Icon, title, text, points }) => (
              <article key={title} className="glass-card rounded-sm border border-gold-500/20 p-6 dark:border-gold-500/15">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-sm border border-gold-500/40"><Icon aria-hidden="true" className="h-5 w-5 text-gold-600 dark:text-gold-400" /></div>
                <h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">{title}</h3>
                <p className={`mb-4 text-sm ${bodyClass}`}>{text}</p>
                <ul className="space-y-2">{points.map((point) => <li key={point} className={`flex gap-2.5 text-sm ${bodyClass}`}><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" /><span>{point}</span></li>)}</ul>
              </article>
            ))}</div>
          </section>

          <section id="mutual-vs-contested" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>Mutual Consent or Contested Divorce?</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">An Agreed Separation</h3><p className={bodyClass}>Mutual consent divorce is based on a shared decision to end the marriage. Before filing, spouses should settle financial support, parenting arrangements, return of belongings, and how connected proceedings will be addressed. Clear payment milestones and compliance terms help prevent later disputes. Consent must remain voluntary through the legally required stages.</p></div>
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">A Disputed Petition</h3><p className={bodyClass}>Contested divorce requires the court to decide whether a statutory ground has been proved. The other spouse can respond and challenge the evidence. Interim maintenance or custody may need attention while the case continues. Even after litigation begins, mediation or settlement can remain an option if lawful and freely accepted.</p></div>
            </div>
          </section>

          <section id="mutual-contested-comparison" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Mutual Consent Divorce vs. Contested Divorce in Family Court, Lucknow (430, Wala Qadar Road, Kaiserbagh)</h2>
            <p className={`mb-6 ${bodyClass}`}>The two tracks differ fundamentally in prerequisite, procedure and appellate exposure. The comparison below reflects how each proceeds before the Principal Judge, Family Court, Lucknow at 430, Wala Qadar Road, Kaiserbagh.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left font-body text-sm">
                <thead>
                  <tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">
                    <th scope="col" className="py-3 pr-4 font-semibold">Aspect</th>
                    <th scope="col" className="py-3 pr-4 font-semibold">Mutual Consent Divorce (Section 13B Hindu Marriage Act, 1955 / Section 28 Special Marriage Act, 1954 / Mubarat)</th>
                    <th scope="col" className="py-3 font-semibold">Contested Divorce (Section 13(1) HMA / Section 27 SMA / Section 2 Dissolution of Muslim Marriages Act, 1939)</th>
                  </tr>
                </thead>
                <tbody className="text-navy-800 dark:text-cream/75">
                  <tr className="border-b border-gold-500/10 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">Statutory Separation Prerequisite</th>
                    <td className="py-3 pr-4">One year of living separately under Section 13B HMA before the joint petition is maintainable.</td>
                    <td className="py-3">Immediate filing on grounds such as cruelty or adultery, or after two years of desertion under Section 13(1) HMA.</td>
                  </tr>
                  <tr className="border-b border-gold-500/10 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">Key Procedural Stages at Family Court, Kaiserbagh</th>
                    <td className="py-3 pr-4">Joint Petition + Settlement MOU → First Motion Statement → 6-Month Cooling-Off or Waiver Application under Amardeep Singh v. Harveen Kaur → Second Motion → Divorce Decree.</td>
                    <td className="py-3">Petition → Notice &amp; Mediation Center Referral → Written Statement &amp; Rajnesh v. Neha Income Affidavits → Issues &amp; Cross-Examination → Final Arguments &amp; Decree.</td>
                  </tr>
                  <tr className="border-b border-gold-500/10 align-top">
                    <th scope="row" className="py-3 pr-4 font-semibold">Appellate Forum</th>
                    <td className="py-3 pr-4">Section 19 excludes appeals from consent decrees. Allegations of fraud or coercion require advice on the appropriate remedy, not an assumption that an ordinary appeal is available.</td>
                    <td className="py-3">First Appeal under Section 19 of the Family Courts Act, 1984 within 30/90 days before a Division Bench of the Allahabad High Court, Lucknow Bench.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="mutual-consent-steps" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>Step-by-Step Mutual Consent Divorce Process in Lucknow (Stage 1 to Stage 6)</h2>
            <ol className="space-y-6">
              <li className="border-l-2 border-gold-500/50 pl-5">
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Stage 1: Master Settlement Agreement / MOU</h3>
                <p className={bodyClass}>Drafting a comprehensive Master Settlement Agreement covering lumpsum permanent alimony under Section 25 HMA, the Stridhan inventory return, child custody and visitation, and the withdrawal or quashing of parallel criminal cases (Section 498A IPC / Section 85 BNS, Section 125 CrPC / Section 144 BNSS, and PWDVA Section 12 proceedings).</p>
              </li>
              <li className="border-l-2 border-gold-500/50 pl-5">
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Stage 2: Jurisdiction &amp; Filing</h3>
                <p className={bodyClass}>Jurisdictional verification under Section 19 HMA — where the marriage was solemnized, where the parties last resided together in Lucknow, or where the respondent/wife currently resides — and filing of the joint petition before the Principal Judge, Family Court, Kaiserbagh, Lucknow.</p>
              </li>
              <li className="border-l-2 border-gold-500/50 pl-5">
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Stage 3: First Motion</h3>
                <p className={bodyClass}>Recording of the First Motion statements of both spouses and the Family Court&apos;s endorsement referring the matter to the Mediation Center.</p>
              </li>
              <li className="border-l-2 border-gold-500/50 pl-5">
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Stage 4: Cooling-Off Waiver</h3>
                <p className={bodyClass}>Seeking a discretionary cooling-off waiver under Amardeep Singh v. Harveen Kaur (2017), considering separation, unsuccessful reconciliation efforts, genuine settlement of alimony, custody and connected issues, and whether further waiting serves a purpose. Amit Kumar v. Suman Beniwal (2021) clarifies that the factors are not a rigid checklist; waiver is not automatic.</p>
              </li>
              <li className="border-l-2 border-gold-500/50 pl-5">
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Stage 5: Quashing of Parallel Criminal Cases</h3>
                <p className={bodyClass}>Coordinating compromise quashing of the parallel FIR/chargesheet under Section 528 BNSS (formerly Section 482 CrPC) before the Allahabad High Court, Lucknow Bench, before the final alimony tranche is released.</p>
              </li>
              <li className="border-l-2 border-gold-500/50 pl-5">
                <h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">Stage 6: Second Motion &amp; Decree</h3>
                <p className={bodyClass}>Recording of the Second Motion statements and, where the statutory requirements and continuing consent are established, passing of the final decree of divorce. An NRI spouse may seek permission to appear by video-conference; court approval and the applicable hearing directions must be confirmed.</p>
              </li>
            </ol>
          </section>

          <StatuteTable
            id="statutory-framework"
            heading="Which Law Applies to Your Marriage?"
            intro="The marriage framework determines the grounds, eligibility, procedure, and relief. A marriage certificate and details of the ceremony or registration help identify the correct starting point."
            rows={divorceStatutes}
          />

          <section id="grounds" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Grounds for a Contested Divorce</h2>
            <div className="space-y-6">{grounds.map(({ title, text }) => <div key={title} className="border-l-2 border-gold-500/50 pl-5"><h3 className="mb-2 font-display text-xl font-bold text-navy-900 dark:text-cream">{title}</h3><p className={bodyClass}>{text}</p></div>)}</div>
            <p className={`mt-6 text-sm ${bodyClass}`}>Long separation or relationship breakdown does not, by itself, create an ordinary Family Court ground called irretrievable breakdown under the Hindu Marriage Act. The Supreme Court&apos;s exceptional powers are distinct from statutory grounds available in a regular divorce petition.</p>
          </section>

          <section id="contested-alimony-annulment" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Contested Divorce Grounds, Alimony Computation (Rajnesh v. Neha) &amp; Annulment (Sections 11 &amp; 12 HMA)</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>Mental and physical cruelty remain the most-litigated contested ground, assessed on the standards in <strong className="text-navy-900 dark:text-cream">Samar Ghosh v. Jaya Ghosh</strong>, with sustained false criminal prosecution itself recognised as cruelty. Desertion requires two years of continuous abandonment without reasonable cause, while adultery is now proved largely through electronic evidence — call records, chats, photographs and location data — certified under Section 63 of the Bharatiya Sakshya Adhiniyam, 2023 (the successor to Section 65B of the Evidence Act).</p>
              <p>Annulment is a distinct remedy: a void marriage (Section 11 HMA) can be declared so at any time, while a voidable marriage on grounds of impotency or fraud must be annulled under Section 12 HMA within one year of discovering the ground. On the financial side, we defend against inflated maintenance demands and build accurate computations using the Assets &amp; Liabilities Affidavits mandated by <strong className="text-navy-900 dark:text-cream">Rajnesh v. Neha</strong>, so that interim maintenance and permanent alimony reflect disclosed income rather than speculation.</p>
            </div>
          </section>

          <GuideStages
            id="divorce-procedure"
            heading="Divorce Procedure in Lucknow: Stage 1 to Stage 10"
            intro="How a divorce case moves through the Family Court, Lucknow, from first consultation to decree, enforcement, and appeal at the Allahabad High Court, Lucknow Bench."
            stages={divorceStages}
          />

          <section id="documents" className="mb-16 scroll-mt-28 border-y border-gold-500/20 py-10">
            <h2 className={headingClass}>Documents to Prepare for Your Consultation</h2>
            <p className={`mb-6 ${bodyClass}`}>Exact filing requirements depend on your case. Bring the records you already have; missing documents can be discussed at the consultation. Preserve originals and avoid altering messages or other evidence.</p>
            <ul className="grid gap-4 md:grid-cols-2">{documents.map((document) => <li key={document} className={`flex gap-3 text-sm ${bodyClass}`}><ScrollText aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" /><span>{document}</span></li>)}</ul>
          </section>

          <section id="settlement-children" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Financial Settlements &amp; Your Child&apos;s Welfare</h2>
            <div className={`space-y-4 ${bodyClass}`}>
              <p>A workable settlement distinguishes spousal support from child support and records whether payments are lump-sum, periodic, or linked to specific expenses. It should address due dates, transfer or return of assets, outstanding loans, and consequences of non-compliance. Divorce does not automatically transfer jointly held property or cancel obligations to a lender.</p>
              <p>For children, we focus on arrangements that function in practice: school-day care, holidays, travel, medical decisions, communication, and handover times. Parenting arrangements should not use access to a child as leverage over financial disputes. Courts may revisit custody or support when circumstances change and the law permits it.</p>
              <p>Where safety or coercion is a concern, settlement discussions must not replace necessary protective relief. Tell your advocate about urgent risks, existing protection orders, or restrictions that could affect mediation or contact with the other party.</p>
            </div>
          </section>

          <section id="courts" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Courts, Jurisdiction &amp; Representation</h2>
            <div className="grid gap-8 md:grid-cols-2">
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">Family Court, Lucknow</h3><p className={bodyClass}>We assist with divorce petitions, matrimonial relief, maintenance, and custody before the Family Court where it has jurisdiction. Living in Lucknow does not automatically make every matrimonial case maintainable here: the statutory connections and facts must be checked before filing.</p></div>
              <div><h3 className="mb-3 font-display text-xl font-bold text-navy-900 dark:text-cream">High Court &amp; Connected Forums</h3><p className={bodyClass}>Appeals and other appropriate proceedings may lie before the Allahabad High Court, Lucknow Bench, subject to jurisdiction and maintainability. Domestic violence and connected criminal proceedings may be before different courts. We assess the correct forum, remedy, and time limits for each matter.</p></div>
            </div>
          </section>

          <section id="lucknow-localities" aria-labelledby="lucknow-localities-heading" className="mb-16 scroll-mt-28">
            <h2 id="lucknow-localities-heading" className={headingClass}>Jurisdiction &amp; Filing for Lucknow Sub-Localities</h2>
            <p className={`mb-6 ${bodyClass}`}>Under Section 19 of the Hindu Marriage Act, 1955 and Section 31 of the Special Marriage Act, 1954, the place of marriage, the respondent&apos;s residence, the last shared matrimonial home and, for a wife filing a petition, her current residence can establish jurisdiction, subject to the statutory conditions. A Lucknow address alone does not entitle every petitioner to file here.</p>
            <p className={`mb-6 ${bodyClass}`}>For a petition with the required connection to Lucknow, residents of the localities below ordinarily present it before the Family Court, Kaiserbagh. The registry assigns the case to the Principal Judge or an Additional Principal Judge; the neighbourhood does not determine a separate divorce court.</p>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse text-left font-body text-sm">
                <caption className={`mb-3 text-left ${bodyClass}`}>Lucknow locality groups and the ordinary filing forum, subject to jurisdiction</caption>
                <thead><tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream"><th scope="col" className="py-3 pr-4">Area</th><th scope="col" className="py-3 pr-4">Localities</th><th scope="col" className="py-3">Filing forum</th></tr></thead>
                <tbody className="text-navy-800 dark:text-cream/75">{localityGroups.map(({ region, localities }) => (
                  <tr key={region} className="border-b border-gold-500/10 align-top"><th scope="row" className="py-3 pr-4 font-semibold">{region}</th><td className="py-3 pr-4">{localities.join(', ')}</td><td className="py-3">Family Court, Lucknow, Kaiserbagh, where statutory jurisdiction is established</td></tr>
                ))}</tbody>
              </table>
            </div>
            <p className={`mt-6 ${bodyClass}`}>Appealable Family Court judgments and orders go to the Allahabad High Court, Lucknow Bench, subject to Section 19 of the Family Courts Act. Chamber consultations, including for residents of Gomti Nagar and Indira Nagar, can be arranged by prior appointment at {HIGH_COURT_CHAMBER_ADDRESS.street}. A chamber appointment is separate from filing or attending the Family Court.</p>
          </section>

          <section id="family-court-logistics" aria-labelledby="family-court-logistics-heading" className="mb-16 scroll-mt-28">
            <h2 id="family-court-logistics-heading" className={headingClass}>Practical Guide to Attending Family Court, Lucknow (Kaiserbagh)</h2>
            <dl className={`space-y-5 ${bodyClass}`}>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Address &amp; assigned court</dt><dd>430, Wala Qadar Road, Kaiserbagh (Qaiserbagh), Lucknow, Uttar Pradesh 226001, near Parivartan Chowk. Confirm the current venue and courtroom on the cause list or with the registry. The Family Court has a Principal Judge and Additional Principal Judges; assignments can change.</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Counselling &amp; mediation</dt><dd>Section 9 of the Family Courts Act, 1984 requires efforts at settlement where appropriate. The court may refer parties to counsellors or the Mediation and Conciliation Centre at the Civil Court compound, Kaiserbagh. Follow the referral order for the actual location and appointment; do not assume every hearing is a mediation session.</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Working hours &amp; filing</dt><dd>Confirm current working hours, filing-counter cut-off times, holidays and any e-filing directions with the Family Court registry before travelling. Check the hearing date and cause list; an office opening time is not a guarantee of when your case will be called.</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Identification &amp; preparation</dt><dd>Carry original government-issued photo identification, such as Aadhaar, passport or voter ID, and copies of filed papers and relevant orders. Bring passport-size photographs and additional originals if the court or registry directs, particularly for first- or second-motion statements. Wear respectful attire and follow security and courtroom instructions.</dd></div>
              <div><dt className="font-semibold text-navy-900 dark:text-cream">Court fees</dt><dd>Statutory court fees under the Court Fees Act, 1870, as applicable in Uttar Pradesh, are distinct from professional representation fees, copying charges and other expenses. Verify the fee for the particular petition and relief at the filing counter; there is no single published amount here for every matrimonial case.</dd></div>
            </dl>
            <p className={`mt-6 text-sm ${bodyClass}`}>Check current notices, cause lists and case-status links on the <a href="https://lucknow.dcourts.gov.in/" className="text-gold-700 underline underline-offset-4 dark:text-gold-400">official Lucknow District Court website</a>. This guide does not replace registry instructions or an order in your case.</p>
          </section>

          <section className="mb-16">
            <h2 className={headingClass}>Our Approach to Divorce Representation</h2>
            <div className={`space-y-4 ${bodyClass}`}><p>Led by Adv. Aishwarya Pandey, our team explains the options and their practical implications, including the distinction between urgent interim relief and a final divorce decree. We discuss the scope of representation and fees after reviewing the matter, so advice, drafting, hearings, and connected proceedings can be understood separately.</p><p>Preparation includes checking the consistency of the case history, identifying evidence gaps, and reviewing existing orders before filing a new application. We approach settlement with care, but do not assume every matter can or should be resolved through mediation. Client instructions and lawful protection of rights remain central.</p></div>
          </section>

          <section id="faqs" className="mb-16 scroll-mt-28">
            <h2 className={headingClass}>Frequently Asked Questions</h2>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">{faqs.map(({ question, answer }) => <details key={question} className="py-5"><summary className="cursor-pointer font-display text-lg font-bold leading-relaxed text-navy-900 transition-colors hover:text-gold-700 focus-visible:outline-gold-500 dark:text-cream dark:hover:text-gold-400">{question}</summary><p className={`mt-3 ${bodyClass}`}>{answer}</p></details>)}</div>
          </section>

          <section id="hindi-faqs" lang="hi" aria-labelledby="hindi-faqs-heading" className="mb-16 scroll-mt-28">
            <h2 id="hindi-faqs-heading" className={headingClass}>लखनऊ में तलाक और फैमिली कोर्ट: हिंदी में सामान्य प्रश्न</h2>
            <p className={`mb-6 ${bodyClass}`}>यह सामान्य कानूनी जानकारी है, किसी विशेष मामले की सलाह नहीं। लागू विवाह कानून, तथ्यों और अदालत के आदेश के अनुसार प्रक्रिया बदल सकती है। किसी परिणाम या समय-सीमा की गारंटी नहीं है।</p>
            <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">{hindiFaqs.map(({ question, answer }) => <details key={question} className="py-5"><summary className="cursor-pointer font-display text-lg font-bold leading-relaxed text-navy-900 transition-colors hover:text-gold-700 focus-visible:outline-gold-500 dark:text-cream dark:hover:text-gold-400">{question}</summary><p className={`mt-3 ${bodyClass}`}>{answer}</p></details>)}</div>
          </section>

          <section aria-labelledby="divorce-settlement-review" className="mb-16 border-t border-gold-500/20 pt-10">
            <h2 id="divorce-settlement-review" className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream">What Should a Divorce Settlement Cover?</h2>
            <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/70">A mutual consent settlement should address more than the divorce petition. Review the amount and timing of financial support, return of belongings and stridhan, responsibility for joint liabilities, parenting arrangements and the lawful steps required in connected cases. A private agreement does not automatically close criminal or domestic violence proceedings, transfer property or dissolve a marriage. Each obligation needs an appropriate document, order or implementation step.</p>
            <p className="font-body leading-relaxed text-navy-700 dark:text-cream/70">For the first review, bring marriage and identity records, address details, the separation chronology, income disclosures and all existing notices, petitions and orders. Identify the applicable marriage law and any overseas connection before assuming eligibility or a filing timeline. Consent must remain voluntary; a cooling-off waiver is subject to legal conditions and the court&apos;s decision. For broader support and protection issues, visit our <Link href="/services/family-advocate" className="text-gold-700 underline dark:text-gold-400">family law practice</Link>.</p>
          </section>

          <ServiceBlogs posts={divorceBlogPosts} fallbackIcon={<ScrollText className="h-5 w-5 text-gold-600 dark:text-gold-400" />} eyebrow="From Our Desk" heading="Divorce & Alimony Blogs" description="Divorce-specific reads on mutual consent strategy, contested grounds, alimony computation, annulment and settlement exits." viewAllHref="/blog?category=Family%20%26%20Matrimonial%20Matters" />

          <section id="contact" className="scroll-mt-28 border-t border-gold-500/25 pt-10 text-center">
            <h2 className={headingClass}>Speak with a Divorce Advocate in Lucknow</h2>
            <p className={`mx-auto mb-8 max-w-2xl ${bodyClass}`}>Discuss your circumstances with our divorce practice led by Adv. Aishwarya Pandey, whether you are considering separation, seeking an agreed divorce, or responding to a matrimonial petition.</p>
            <div className="flex justify-center"><ConsultationActions /></div>
            <p className={`mx-auto mt-8 max-w-2xl text-xs ${bodyClass}`}>This page provides general legal information, not advice for a specific case. Requirements and remedies depend on the applicable law, facts, and court orders. No result or completion timeline is guaranteed.</p>
          </section>
        </div>
      </section>
      <FirmCredentials />
      <Footer />
    </main>
  )
}