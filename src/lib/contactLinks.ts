// Chamber contact numbers, kept in one place so every call/WhatsApp affordance
// (Footer, Contact, WhatsAppFloat, blog CTAs) stays in sync instead of
// duplicating the digits. WhatsApp stays on Adv. Jitendra Tiwari's number; the
// "call the chamber" affordances dial Adv. Aishwarya Pandey.
export const CHAMBER_DIGITS = '8299086204'
export const CHAMBER_DISPLAY = '82990 86204' // grouped for display
export const CHAMBER_CALL_DIGITS = '8302471764'
export const CHAMBER_CALL_DISPLAY = '83024 71764' // grouped for display
export const CHAMBER_TEL = `tel:+91${CHAMBER_CALL_DIGITS}`

export const GENERIC_WHATSAPP_MESSAGE =
  'Hello, I need legal consultation. Please connect me with an advocate.'

// Builds a wa.me deep-link with a pre-filled message.
export function whatsappUrl(message: string = GENERIC_WHATSAPP_MESSAGE): string {
  return `https://wa.me/91${CHAMBER_DIGITS}?text=${encodeURIComponent(message)}`
}

// Deep-links WhatsApp with the article the reader just finished, so they don't
// have to describe their matter from scratch.
export function buildArticleWhatsAppUrl(title: string, category: string): string {
  return whatsappUrl(
    `Hi Adv. Jitendra, I just read your article "${title}" on ${category} and need advice on my case.`
  )
}
