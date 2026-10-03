export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Validates an Indian mobile number. The public contact + blog forms collect
 * +91 numbers only, so a plain regex does the job and — unlike libphonenumber-js
 * — adds nothing to those pages' JS bundles, which matters on slow mobile data.
 *
 * Accepts the number with or without the 91 country code / a leading 0 and with
 * any spacing or dashes; the core must be a 10-digit mobile starting 6–9.
 * Multi-country forms (publications, internship) use phoneIntl.ts instead.
 */
export function isValidPhone(input: string): boolean {
  let digits = input.replace(/\D/g, '')
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)
  return /^[6-9]\d{9}$/.test(digits)
}

/**
 * Loose check for a non-Indian number (still no libphonenumber-js dependency).
 * E.164 caps a full international number at 15 digits; 6 is a safe lower bound.
 * The client picks the strict Indian rule for +91 and this for other codes.
 */
export function isValidIntlPhone(input: string): boolean {
  const digits = input.replace(/\D/g, '')
  return digits.length >= 6 && digits.length <= 15
}
