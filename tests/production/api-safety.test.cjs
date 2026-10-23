const assert = require('node:assert/strict')
const test = require('node:test')

const origin = new URL(process.env.PRODUCTION_BASE_URL || 'http://localhost:3100')
assert.ok(['localhost', '127.0.0.1', '[::1]'].includes(origin.hostname), 'Use a local production server')

async function request(route, options = {}) {
  return fetch(new URL(route, origin), { signal: AbortSignal.timeout(30000), ...options })
}

test('cache invalidation fails closed for missing or incorrect credentials without changing readable pages', async () => {
  const before = await request('/services/rera-lawyer-lucknow')
  assert.equal(before.status, 200)
  const original = await before.text()
  for (const route of ['/api/revalidate', '/api/revalidate?secret=release-validation-invalid-secret']) {
    const response = await request(route)
    assert.equal(response.status, 401)
    assert.deepEqual(await response.json(), { ok: false })
  }
  const after = await request('/services/rera-lawyer-lucknow')
  assert.equal(after.status, 200)
  assert.equal(await after.text(), original, 'Unauthorized requests do not change the page')
})

test('all public form types reject missing fields before any email, upload or lead write', async context => {
  for (const formType of ['contact', 'callback', 'internship', 'publication']) {
    await context.test(formType, async () => {
      const form = new FormData()
      form.set('formType', formType)
      const response = await request('/api/contact', { method: 'POST', body: form })
      assert.equal(response.status, 400)
      assert.equal((await response.json()).error, 'Missing required fields')
      const page = await request(formType === 'internship' ? '/internship' : formType === 'publication' ? '/publications' : '/')
      assert.equal(page.status, 200, 'Validation failure does not break the associated form page')
    })
  }
})

test('invalid email and callback telephone are rejected before external side effects', async () => {
  const contact = new FormData()
  contact.set('formType', 'contact')
  contact.set('name', 'Release validation')
  contact.set('email', 'not-an-email')
  const emailResponse = await request('/api/contact', { method: 'POST', body: contact })
  assert.equal(emailResponse.status, 400)
  assert.equal((await emailResponse.json()).error, 'Invalid email address')

  const callback = new FormData()
  callback.set('formType', 'callback')
  callback.set('name', 'Release validation')
  callback.set('phone', 'invalid')
  const phoneResponse = await request('/api/contact', { method: 'POST', body: callback })
  assert.equal(phoneResponse.status, 400)
  assert.equal((await phoneResponse.json()).error, 'Invalid phone number')
})

test('invalid image identifiers and missing routes return safe error responses', async () => {
  const image = await request('/api/drive-image/invalid')
  assert.equal(image.status, 404)
  assert.equal((await image.json()).error, 'Image not found')
  const missing = await request('/__production-validation-missing-route__')
  assert.equal(missing.status, 404)
  const home = await request('/')
  assert.equal(home.status, 200)
})