const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const origin = new URL(process.env.PRODUCTION_BASE_URL || 'http://localhost:3100')
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname), 'Use a local production server')
const config = require('../../next.config.js')
const servicesDirectory = path.resolve(__dirname, '../../src/app/services')
const serviceRoutes = fs.readdirSync(servicesDirectory)
  .filter(route => fs.existsSync(path.join(servicesDirectory, route, 'page.tsx')))
  .map(route => `/services/${route}`)

async function request(route, options = {}) {
  return fetch(new URL(route, origin), { signal: AbortSignal.timeout(30000), ...options })
}

function structuredData(html) {
  const flatten = value => Array.isArray(value) ? value.flatMap(flatten) : value['@graph'] ? [value, ...flatten(value['@graph'])] : [value]
  return Array.from(html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g), match => JSON.parse(match[1])).flatMap(flatten)
}

test('every service route resolves to its canonical page with intact guide navigation', async context => {
  for (const route of serviceRoutes) {
    await context.test(route, async () => {
      const response = await request(route)
      assert.equal(response.status, 200)
      const html = await response.text()
      const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1]
      assert.ok(canonical, 'Canonical URL is present')
      assert.equal(new URL(canonical).origin, 'https://www.sumanjariadvocates.com')
      assert.equal(new URL(canonical).pathname, new URL(response.url).pathname)
      assert.equal((html.match(/<h1\b/g) || []).length, 1)

      const toc = html.match(/<nav\b[^>]*aria-label="Table of contents"[^>]*>[\s\S]*?<\/nav>/)?.[0]
      assert.ok(toc, 'Table of contents is rendered')
      const first = toc.match(/<a\b[^>]*href="(#[^"]+)"[^>]*>([^<]+)<\/a>/)
      assert.equal(first?.[2], 'Our Team')
      const ids = Array.from(html.matchAll(/\bid="([^"]+)"/g), match => match[1])
      assert.equal(ids.length, new Set(ids).size, 'No duplicate section IDs')
      for (const anchor of toc.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(anchor[1]), anchor[1])
      const schemas = structuredData(html)
      const faq = schemas.find(schema => schema['@type'] === 'FAQPage')
      assert.ok(faq?.mainEntity?.length > 0, 'FAQ schema is populated')
      for (const question of faq.mainEntity) assert.ok(question.name && question.acceptedAnswer?.text)
      assert.ok(html.includes('10,000+') && html.includes('Cases solved by our team'))

      const direct = await request(new URL(canonical).pathname, { redirect: 'manual' })
      assert.equal(direct.status, 200, 'Canonical has no redirect chain')
    })
  }
})

test('RERA appeal card distinguishes penalty deposits from the total allottee amount', async () => {
  const response = await request('/services/rera-lawyer-lucknow')
  assert.equal(response.status, 200)
  const html = await response.text()
  const card = html.match(/RERA Appeals &amp; Dispute Resolution[\s\S]*?<\/ul>/)?.[0]
  assert.ok(card, 'RERA appeal card is rendered')
  assert.ok(card.includes('at least 30% of a penalty (or a higher percentage set by the Tribunal)'))
  assert.ok(card.includes('the total amount payable to the allottee including interest and compensation'))
  assert.ok(card.includes('or both, as applicable'))
  assert.ok(!card.includes('mandatory 30% pre-deposit'))
})

test('legacy URLs permanently redirect to working canonical destinations and preserve query strings', async context => {
  const redirects = await config.redirects()
  const legacyRoutes = redirects.filter(entry => entry.source.startsWith('/services/'))
  legacyRoutes.push(
    { source: '/team/Adarsh-Pratap_Singh', destination: '/team/adarsh-pratap-singh' },
    { source: '/team/Devesh-Tiwari', destination: '/team/devesh-tiwari' }
  )
  for (const redirect of legacyRoutes) {
    await context.test(redirect.source, async () => {
      const response = await request(`${redirect.source}?release-check=1`, { redirect: 'manual' })
      assert.equal(response.status, 308)
      const destination = new URL(response.headers.get('location'), origin)
      assert.equal(destination.pathname, redirect.destination)
      assert.equal(destination.searchParams.get('release-check'), '1')
      const final = await request(destination.pathname, { redirect: 'manual' })
      assert.equal(final.status, 200, 'Destination has no loop or second redirect')
      assert.ok((await final.text()).includes('rel="canonical"'))
    })
  }
})

test('sitemap and robots advertise the canonical public pages', async () => {
  const sitemap = await request('/sitemap.xml')
  assert.equal(sitemap.status, 200)
  const xml = await sitemap.text()
  const urls = Array.from(xml.matchAll(/<loc>([^<]+)<\/loc>/g), match => match[1])
  assert.equal(urls.length, new Set(urls).size)
  const paths = new Set(urls.map(url => new URL(url).pathname))
  assert.ok(paths.has('/services/rera-lawyer-lucknow'))
  assert.ok(!paths.has('/services/rera-lawyer'))
  for (const route of serviceRoutes) {
    const response = await request(route)
    assert.ok(paths.has(new URL(response.url).pathname), route)
  }
  const robots = await request('/robots.txt')
  assert.equal(robots.status, 200)
  assert.ok((await robots.text()).includes('https://www.sumanjariadvocates.com/sitemap.xml'))
})