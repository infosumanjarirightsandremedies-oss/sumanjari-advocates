export type TranslatedFaq = {
  question: string
  answer: string
  id?: string
  language?: 'hi' | 'hi-Latn'
}

export default function TranslatedFaqs({ id, title, items }: { id: string; title: string; items: TranslatedFaq[] }) {
  return (
    <section id={id} lang="hi" data-translated-faqs aria-labelledby={`${id}-heading`} className="mb-16 scroll-mt-28">
      <h2 id={`${id}-heading`} className="mb-5 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">{title}</h2>
      <p className="mb-6 font-body leading-relaxed text-navy-700 dark:text-cream/65">यह सामान्य कानूनी जानकारी है, किसी विशेष मामले की सलाह नहीं। लागू कानून, तथ्यों और अदालत के आदेश के अनुसार प्रक्रिया बदल सकती है। किसी परिणाम या समय-सीमा की गारंटी नहीं है।</p>
      <div className="divide-y divide-gold-500/20 border-y border-gold-500/20">
        {items.map(item => (
          <details key={item.question} id={item.id} lang={item.language} className="scroll-mt-28 py-5">
            <summary className="cursor-pointer font-display text-lg font-semibold leading-relaxed text-navy-900 dark:text-cream">{item.question}</summary>
            <p className="mt-3 font-body leading-relaxed text-navy-700 dark:text-cream/65">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
