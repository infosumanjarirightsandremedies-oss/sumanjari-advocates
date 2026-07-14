import { isValidPhoneNumber, type CountryCode } from 'libphonenumber-js'

export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Validates a national phone number against the selected country using
 * libphonenumber-js -- the same metadata Google's libphonenumber uses,
 * covering length, prefix, and formatting rules per ITU-T E.164 for
 * every country, not just a hardcoded few.
 *
 * @param nationalNumber the number as typed, without the country's dial code (e.g. "9876543210")
 * @param country ISO 3166-1 alpha-2 country code (e.g. "IN", "US", "GB")
 */
export function isValidPhone(nationalNumber: string, country: CountryCode = 'IN'): boolean {
  const digits = nationalNumber.replace(/\D/g, '')
  if (!digits) return false
  try {
    return isValidPhoneNumber(digits, country)
  } catch {
    return false
  }
}
