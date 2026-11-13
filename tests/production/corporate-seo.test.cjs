const assert = require('node:assert/strict')
const test = require('node:test')

const origin = new URL(process.env.PRODUCTION_BASE_URL || 'http://localhost:3100')
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname), 'Use a local server')
const path = '/services/company-corporate-lawyer-lucknow'
const text = value => value.replace(/<[^>]*>/g, '').replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/<!--.*?-->/g, '')
const load = async () => {
  const response = await fetch(new URL(path, origin), { signal: AbortSignal.timeout(60000) })
  assert.equal(response.status, 200)
  return response.text()
}
const schemas = html => Array.from(html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g), match => JSON.parse(match[1])).flat()

test('corporate pillar aligns metadata, local entities and factual schema', async () => {
  const html = await load()
  const title = 'Corporate Lawyers in Lucknow — NCLT, M&A & Company Law | Sumanjari & Co.'
  assert.equal(text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || ''), title)
  for (const property of ['og:title', 'twitter:title']) {
    assert.equal(text(html.match(new RegExp(`<meta (?:property|name)="${property}" content="([^"]+)"`))?.[1] || ''), title)
  }
  assert.match(html, /<link rel="canonical" href="https:\/\/www\.sumanjariadvocates\.com\/services\/company-corporate-lawyer-lucknow"/)
  assert.equal((html.match(/<h1\b/g) || []).length, 1)
  assert.equal(text(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] || ''), 'Corporate & Company Lawyers in Lucknow: NCLT, Advisory & Commercial Disputes')
  const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1])
  assert.equal(ids.length, new Set(ids).size)
  const toc = html.match(/<nav\b[^>]*aria-label="Table of contents"[^>]*>[\s\S]*?<\/nav>/)?.[0]
  assert.ok(toc)
  for (const anchor of toc.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(anchor[1]), anchor[1])
  const service = schemas(html).find(item => item['@id']?.endsWith(`${path}#legalservice`))
  assert.ok(service)
  assert.equal(service.branchOf['@id'], 'https://www.sumanjariadvocates.com/#organization')
  assert.equal(service.hasMap.length, 2)
  assert.ok(service.hasMap.every(url => url.startsWith('https://www.google.com/maps/search/')))
  assert.ok(service.sameAs.includes('https://www.linkedin.com/company/sumanjari-co-advocate/about/'))
  assert.deepEqual(service.areaServed.map(item => item.name), ['Lucknow', 'Uttar Pradesh'])
  assert.ok(!service.aggregateRating && !service.review, 'Do not manufacture review evidence')
  assert.ok(!html.includes('<iframe'), 'Our Lucknow Chambers section no longer embeds a map')
  const portraits = Array.from(html.matchAll(/<img\b(?=[^>]*src="[^"]*%2Fimages%2F)[^>]*>/g), match => match[0])
  assert.ok(portraits.length > 0)
  for (const portrait of portraits) assert.match(portrait, /loading="lazy"/)
})

test('corporate content has eight service groups and ten FAQs identical to JSON-LD', async () => {
  const html = await load()
  const matters = html.slice(html.indexOf('id="corporate-matters"'), html.indexOf('id="corporate-advisory"'))
  assert.equal((matters.match(/<h3\b/g) || []).length, 8)
  const headings = Array.from(html.matchAll(/<h3\b[^>]*>([\s\S]*?)<\/h3>/g), match => text(match[1]))
  for (const heading of ['M&A, Joint Ventures & Restructuring', 'Commercial Contract Drafting & Vetting', 'Startup, Seed/PE/VC & India Entry Advisory', 'ROC / Secretarial & Director Compliance', 'Corporate IP & Employment/POSH']) {
    assert.ok(headings.includes(heading), heading)
  }
  const visible = Array.from(html.matchAll(/<details\b[^>]*>\s*<summary\b[^>]*>([\s\S]*?)<\/summary>\s*<p\b[^>]*>([\s\S]*?)<\/p>\s*<\/details>/g), match => ({
    question: text(match[1]), answer: text(match[2]),
  }))
  assert.equal(visible.length, 10)
  const faqSection = html.slice(html.indexOf('id="corporate-faqs"'), html.indexOf('id="corporate-examples"'))
  assert.ok(faqSection.includes('divide-y divide-gold-500/20 border-y border-gold-500/20'))
  assert.ok(!faqSection.includes('glass-card'), 'FAQs use a simple list, not boxed cards')
  assert.ok(!faqSection.includes('sm:grid-cols-2'), 'FAQs remain single-column on desktop')
  assert.equal((faqSection.match(/<details\b/g) || []).length, 10)
  const faq = schemas(html).find(item => item['@type'] === 'FAQPage')
  assert.equal(faq.mainEntity.length, 11, 'Includes the separately visible service-selection FAQ')
  assert.deepEqual(faq.mainEntity.slice(0, 10).map(item => ({ question: item.name, answer: item.acceptedAnswer.text })), visible)
  for (const item of faq.mainEntity) {
    assert.ok(text(html).includes(item.name), item.name)
    assert.ok(text(html).includes(item.acceptedAnswer.text), item.name)
  }
  for (const term of ['Gomti Nagar', 'Hazratganj', 'Vibhuti Khand', 'Sushant Golf City', 'Amausi', 'Chinhat', 'Panna Lal Road', '211002', 'Westcott Building', '208001', 'University Road', '226007']) {
    assert.ok(html.includes(term), term)
  }
  assert.ok(html.includes('not a confirmed Commercial Court hearing address'))
  assert.ok(html.includes('not client case histories'))
  assert.equal((html.match(/<dt class="font-semibold">Facts<\/dt>/g) || []).length, 3)
})

test('hero and mobile contact links are direct and corporate articles link back', async () => {
  const html = await load()
  const hero = html.slice(html.indexOf('<h1'), html.indexOf('aria-label="Table of contents"'))
  const statsPosition = hero.indexOf('aria-label="Lead advocate experience and team cases handled"')
  const consultationPosition = hero.indexOf('Consult Now')
  assert.ok(statsPosition >= 0 && consultationPosition > statsPosition, 'Experience and case figures appear above the consultation buttons')
  assert.match(hero, /class="[^"]*mt-8 hidden md:flex"/, 'Desktop buttons remain below the statistics')
  const mobileButtonsPosition = hero.indexOf('flex md:hidden')
  assert.ok(mobileButtonsPosition > hero.indexOf('View Profile'), 'Mobile buttons follow the lead photo and profile')
  assert.ok(hero.includes('href="tel:+918302471764"'))
  assert.ok(hero.includes('https://wa.me/918299086204'))
  const bar = html.match(/<nav\b[^>]*aria-label="Mobile service contact"[^>]*>[\s\S]*?<\/nav>/)?.[0]
  assert.ok(bar)
  assert.ok(bar.includes('href="tel:+918302471764"'))
  assert.ok(bar.includes('https://wa.me/918299086204'))

  const related = Array.from(html.matchAll(/Related reading:[\s\S]*?<\/p>/g), match => match[0])
  assert.ok(related.length > 0, 'Published articles are linked contextually, not just in the footer carousel')
  const links = Array.from(new Set(related.flatMap(block => Array.from(block.matchAll(/href="(\/blog\/[^"]+)"/g), match => match[1]))))
  assert.ok(links.length > 0)
  const response = await fetch(new URL(links[0], origin), { signal: AbortSignal.timeout(60000) })
  assert.equal(response.status, 200)
  const article = await response.text()
  assert.ok(article.includes(`href="${path}"`))
  assert.ok(article.includes('The correct forum and remedy depend on the facts'))
})
