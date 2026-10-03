// Curated dial codes: India first (the default), then the main NRI destinations
// this firm serves. A short list avoids the giant 240-country dropdown (which
// used to open on Afghanistan) while still letting overseas clients enter their
// own number — important given the site's NRI / cross-border content.
export const DIAL_CODES = [
  { code: '+91', label: '🇮🇳 +91' },
  { code: '+1', label: '🇺🇸 +1' },
  { code: '+44', label: '🇬🇧 +44' },
  { code: '+971', label: '🇦🇪 +971' },
  { code: '+65', label: '🇸🇬 +65' },
  { code: '+61', label: '🇦🇺 +61' },
  { code: '+966', label: '🇸🇦 +966' },
  { code: '+974', label: '🇶🇦 +974' },
  { code: '+965', label: '🇰🇼 +965' },
  { code: '+968', label: '🇴🇲 +968' },
] as const

export const DEFAULT_DIAL_CODE = '+91'
