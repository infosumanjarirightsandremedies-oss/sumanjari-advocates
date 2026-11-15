import { MapPin, Phone, ArrowUpRight } from 'lucide-react'
import { CHAMBER_CALL_DISPLAY, CHAMBER_TEL, LUCKNOW_CHAMBERS } from '@/lib/contactLinks'

export default function LucknowChambers({ language = 'en' }: { language?: 'en' | 'hi' }) {
  return (
    <section id="lucknow-chambers" aria-labelledby="lucknow-chambers-heading" className="mb-12 scroll-mt-28">
      <h2 id="lucknow-chambers-heading" className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">
        {language === 'hi' ? 'लखनऊ में हमारे Chambers' : 'Our Lucknow Chambers'}
      </h2>
      <p className="mb-5 font-body leading-relaxed text-navy-700 dark:text-cream/60">
        {language === 'hi' ? 'Shushant Golf City या Gomti Nagar में Allahabad High Court, Lucknow Bench के हमारे chamber पर मिल सकते हैं। आने से पहले फोन करके सही chamber और appointment सुनिश्चित करें।' : 'Reach our Lucknow team at Shushant Golf City or our chamber at the Allahabad High Court, Lucknow Bench in Gomti Nagar. Please call to confirm the appropriate chamber and arrange your consultation before visiting.'}
      </p>
      <div className="grid gap-5 sm:grid-cols-2">
        {LUCKNOW_CHAMBERS.map(({ name, street, city }) => (
          <div key={name} className="glass-card rounded-sm border border-gold-500/30 p-6 dark:border-gold-500/25">
            <div className="mb-3 flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-gold-600 dark:text-gold-400" />
              <h3 className="font-display text-lg font-bold text-navy-900 dark:text-cream">{name}</h3>
            </div>
            <address className="mb-4 font-body text-base not-italic leading-relaxed text-navy-800 dark:text-cream/80">
              {street}<br />
              {city}, Uttar Pradesh, India
            </address>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${street}, ${city}, Uttar Pradesh, India`)}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={language === 'hi' ? `${name} का रास्ता देखें` : `Get directions to ${name}`}
              className="inline-flex items-center gap-2 font-body text-sm font-semibold text-gold-700 underline-offset-4 hover:underline dark:text-gold-400"
            >
              {language === 'hi' ? 'रास्ता देखें · Directions' : 'Get Directions'} <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>
      <a href={CHAMBER_TEL} className="mt-5 inline-flex items-center gap-2 font-body font-semibold text-navy-800 underline-offset-4 hover:underline dark:text-cream/85">
        <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-gold-600 dark:text-gold-400" />
        {language === 'hi' ? 'लखनऊ टीम को फोन करें:' : 'Call our Lucknow team:'} +91 {CHAMBER_CALL_DISPLAY}
      </a>
    </section>
  )
}
