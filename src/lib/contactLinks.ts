// Chamber contact numbers, kept in one place so every call/WhatsApp affordance
// (Footer, Contact, WhatsAppFloat, blog CTAs) stays in sync instead of
// duplicating the digits. WhatsApp stays on Adv. Jitendra Tiwari's number; the
// "call the chamber" affordances dial Adv. Aishwarya Pandey.
export const CHAMBER_DIGITS = '8299086204'
export const CHAMBER_DISPLAY = '82990 86204' // grouped for display
export const CHAMBER_CALL_DIGITS = '8302471764'
export const CHAMBER_CALL_DISPLAY = '83024 71764' // grouped for display
export const CHAMBER_TEL = `tel:+91${CHAMBER_CALL_DIGITS}`

export const NCR_CHAMBER_ADDRESS = {
  street: 'A-247, Defence Colony',
  city: 'New Delhi',
} as const

export const LUCKNOW_CHAMBER_ADDRESS = {
  street: 'Block C 105, Santushti Enclave-1, Shushant Golf City',
  city: 'Lucknow',
} as const

export const HIGH_COURT_CHAMBER_ADDRESS = {
  street: 'Chamber Block D-311, Allahabad High Court, Lucknow Bench, Vibhuti Khand, Gomti Nagar',
  city: 'Lucknow',
} as const

export const LUCKNOW_CHAMBERS = [
  { name: 'Lucknow Chamber', ...LUCKNOW_CHAMBER_ADDRESS },
  { name: 'High Court Chamber, Lucknow Bench', ...HIGH_COURT_CHAMBER_ADDRESS },
] as const

const lucknowChamberLocations = LUCKNOW_CHAMBERS.map(({ name, street, city }) => ({
  '@type': 'Place',
  name,
  address: {
    '@type': 'PostalAddress',
    streetAddress: street,
    addressLocality: city,
    addressRegion: 'Uttar Pradesh',
    addressCountry: 'IN',
  },
}))

export const LUCKNOW_SERVICE_LOCATION = {
  address: lucknowChamberLocations[0].address,
  location: lucknowChamberLocations,
}

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
