const assert = require('node:assert/strict')
const fs = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const origin = new URL(process.env.PRODUCTION_BASE_URL || 'http://localhost:3100')
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname), 'Use a local production server')

async function get(route) {
  const response = await fetch(new URL(route, origin), { signal: AbortSignal.timeout(30000) })
  assert.equal(response.status, 200, route)
  return { response, html: await response.text() }
}

test('blog archive entries open complete articles and return to valid service pages', async context => {
  const { html: sitemap } = await get('/sitemap.xml')
  const articles = Array.from(sitemap.matchAll(/<loc>([^<]+\/blog\/[^<]+)<\/loc>/g), match => new URL(match[1]).pathname)
  const { html: archive } = await get('/blog')
  assert.ok(articles.length > 0)
  for (const article of articles) {
    await context.test(article, async () => {
      assert.ok(archive.includes(`href="${article}"`), 'Published article appears in archive')
      const { html } = await get(article)
      assert.equal((html.match(/<h1\b/g) || []).length, 1)
      const schemas = Array.from(html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g), match => JSON.parse(match[1]))
      assert.ok(schemas.some(schema => ['Article', 'BlogPosting'].includes(schema['@type'])))
      const serviceLinks = Array.from(html.matchAll(/href="(\/services\/[^"#?]+)"/g), match => match[1])
      assert.ok(serviceLinks.length > 0, 'Article links to a service')
      for (const route of new Set(serviceLinks)) {
        const { response } = await get(route)
        assert.equal(new URL(response.url).pathname, route, 'Service links use canonical paths directly')
      }
    })
  }
})

test('primary navigation and service links resolve without missing pages', async () => {
  const serviceRoot = path.resolve(__dirname, '../../src/app/services')
  const routes = ['/', '/law-firm-in-lucknow', '/team', '/blog', '/internship', '/publications', '/our-journey']
  routes.push(...fs.readdirSync(serviceRoot).filter(route => fs.existsSync(path.join(serviceRoot, route, 'page.tsx'))).map(route => `/services/${route}`))
  const internal = new Set()
  for (const route of routes) {
    const { html } = await get(route)
    for (const match of html.matchAll(/href="(\/[^"<>]*)"/g)) {
      const target = new URL(match[1].replace(/&amp;/g, '&'), origin)
      if (target.origin === origin.origin && !target.pathname.startsWith('/_next/') && !target.pathname.startsWith('/api/')) {
        target.hash = ''
        internal.add(`${target.pathname}${target.search}`)
      }
    }
  }
  for (const route of internal) await get(route)
})

test('LLM discovery documents contain the new RERA URL and valid service links', async () => {
  for (const route of ['/llms.txt', '/llms-full.txt', '/llms/rera.txt']) {
    const { html } = await get(route)
    assert.ok(html.includes('/services/rera-lawyer-lucknow'), route)
    assert.ok(!/\/services\/rera-lawyer(?:\s|$|[)"'])/.test(html), 'No obsolete exact RERA URL')
    const serviceLinks = new Set(Array.from(html.matchAll(/\/services\/[a-z0-9-]+/g), match => match[0]))
    for (const service of serviceLinks) await get(service)
  }
})