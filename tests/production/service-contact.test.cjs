const assert = require('node:assert/strict')
const { readdirSync, existsSync } = require('node:fs')
const path = require('node:path')
const test = require('node:test')

const origin = new URL(process.env.PRODUCTION_BASE_URL || 'http://localhost:3100')
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname), 'Use a local server')
const services = path.join(__dirname, '../../src/app/services')
const routes = readdirSync(services, { withFileTypes: true })
  .filter(entry => entry.isDirectory() && existsSync(path.join(services, entry.name, 'page.tsx')))
  .map(entry => `/services/${entry.name}`)
const text = value => value.replace(/<[^>]*>/g, '').replace(/<!--.*?-->/g, '').trim()
const load = async route => {
  const response = await fetch(new URL(route, origin), { signal: AbortSignal.timeout(60000) })
  assert.equal(response.status, 200, route)
  return response.text()
}

test('every service page uses shared readable phone buttons and exactly one mobile contact bar', async t => {
  assert.ok(routes.length >= 18, 'Cover every existing service page')
  for (const route of routes) {
    await t.test(route, async () => {
      const html = await load(route)
      const buttons = Array.from(html.matchAll(/<a\b(?=[^>]*\bdata-service-phone)[^>]*>[\s\S]*?<\/a>/g), match => match[0])
      assert.ok(buttons.length > 0, 'Shared phone button renders')
      const groups = Array.from(html.matchAll(/<div\b(?=[^>]*\bdata-service-contact-links)[^>]*>[\s\S]*?<\/div>/g), match => match[0])
      assert.equal(groups.length, buttons.length, 'Every boxed call button has a paired WhatsApp button')
      for (const group of groups) {
        assert.equal((group.match(/\bdata-service-phone=/g) || []).length, 1)
        assert.equal((group.match(/\bdata-service-whatsapp=/g) || []).length, 1, 'No duplicate WhatsApp buttons')
        assert.ok(group.indexOf('data-service-whatsapp') > group.indexOf('data-service-phone'), 'WhatsApp follows Call')
        assert.match(group, /href="https:\/\/wa\.me\/918299086204\?text=/)
        assert.match(group, /target="_blank" rel="noopener noreferrer"/)
      }
      const expectedNumber = route.endsWith('/rera-lawyer-lucknow') ? '+91 82990 86204' : '+91 83024 71764'
      const expectedTel = route.endsWith('/rera-lawyer-lucknow') ? 'tel:+918299086204' : 'tel:+918302471764'
      for (const button of buttons) {
        assert.ok(button.includes(`href="${expectedTel}"`), 'Preserves the existing call destination')
        assert.equal(text(button), expectedNumber)
        assert.match(button, /font-family:Arial,Helvetica,sans-serif/)
        assert.match(button, /tabular-nums/)
        assert.match(button, /tracking-normal/)
        assert.match(button, /text-sm/)
        assert.match(button, /sm:text-base/)
        assert.match(button, /whitespace-nowrap/)
      }
      const bars = Array.from(html.matchAll(/<nav\b[^>]*aria-label="Mobile service contact"[^>]*>[\s\S]*?<\/nav>/g), match => match[0])
      assert.equal(bars.length, 1, 'No duplicate sticky bar')
      assert.ok(!html.includes('Mobile corporate contact'), 'Corporate page also uses the shared bar')
      assert.match(bars[0], /fixed inset-x-0 bottom-0/)
      assert.match(bars[0], /md:hidden/)
      assert.match(bars[0], /safe-area-inset-bottom/)
      assert.match(bars[0], /href="tel:\+918302471764"/)
      assert.match(bars[0], /href="https:\/\/wa\.me\/918299086204\?text=/)
      assert.match(bars[0], /rel="noopener noreferrer"/)
      assert.match(html, /class="pb-\[calc\(4rem\+env\(safe-area-inset-bottom\)\)\] md:pb-0" data-service-content/)
      assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Page content remains intact')
    })
  }
})

test('the service contact bar does not appear on non-service pages', async () => {
  for (const route of ['/law-firm-in-lucknow', '/blog']) {
    const html = await load(route)
    assert.ok(!html.includes('aria-label="Mobile service contact"'), route)
    assert.ok(!html.includes('data-service-content'), route)
  }
})
