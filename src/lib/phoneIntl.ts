import {
  getCountries,
  getCountryCallingCode,
  isValidPhoneNumber,
  type CountryCode,
} from 'libphonenumber-js'

/**
 * Multi-country phone validation for the forms that keep a country dropdown
 * (publications, internship). Isolated in its own module so libphonenumber-js
 * only lands in those bundles — not in the high-traffic home/blog pages, which
 * use the lightweight Indian-only validator in validation.ts.
 *
 * @param nationalNumber the number as typed, without the country's dial code
 * @param country ISO 3166-1 alpha-2 country code (e.g. "IN", "US", "GB")
 */
export function isValidPhoneIntl(nationalNumber: string, country: CountryCode = 'IN'): boolean {
  const digits = nationalNumber.replace(/\D/g, '')
  if (!digits) return false
  try {
    return isValidPhoneNumber(digits, country)
  } catch {
    return false
  }
}

// The country's dial code, e.g. "+91".
export function getDialCode(country: CountryCode): string {
  return `+${getCountryCallingCode(country)}`
}

// Converts an ISO 3166-1 alpha-2 code (e.g. "IN") into its flag emoji.
function isoToFlag(iso: string): string {
  return iso
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
}

export type Country = {
  iso: CountryCode
  dialCode: string
  name: string
  flag: string
}

// Full list of countries (dial code + display name + flag), straight from
// libphonenumber-js's metadata. Shared by the multi-country contact forms.
export function buildCountryList(): Country[] {
  const regionNames =
    typeof Intl !== 'undefined' && 'DisplayNames' in Intl
      ? new Intl.DisplayNames(['en'], { type: 'region' })
      : null

  return getCountries()
    .map((iso) => ({
      iso: iso as CountryCode,
      dialCode: `+${getCountryCallingCode(iso as CountryCode)}`,
      name: regionNames?.of(iso) ?? iso,
      flag: isoToFlag(iso),
    }))
    .sort((a, b) => a.name.localeCompare(b.name))
}
