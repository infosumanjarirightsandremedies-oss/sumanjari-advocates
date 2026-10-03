
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { isValidEmail, isValidIntlPhone } from '@/lib/validation'
import { supabase } from '@/lib/supabase'

const resend = new Resend(process.env.RESEND_API_KEY)

// Office notification email — comes from CONTACT_EMAIL in .env.local / Vercel env vars.
// Change the email there (no code edit needed) and redeploy.
const OFFICE_EMAIL = process.env.CONTACT_EMAIL || 'info.sumanjarirightsandremedies@gmail.com'

// ---- Sender address ----
// Resend can only send FROM a domain you have verified at resend.com/domains.
// Until you own & verify a domain, this MUST stay on the sandbox address
// onboarding@resend.dev — which Resend restricts to only deliver to the
// email you signed up to Resend with (i.e. OFFICE_EMAIL above). It can never
// reach an arbitrary visitor's inbox — that includes the client
// auto-confirmation email below, which will keep failing (silently, it
// won't break the form) until this is set.
//
// Once you buy a domain and verify it on Resend:
//   1. Add env var MAIL_FROM_DOMAIN = yourdomain.com   (Vercel + .env.local)
//   2. Redeploy — no code changes needed, both senders below pick it up.
const MAIL_FROM_DOMAIN = process.env.MAIL_FROM_DOMAIN
const SENDER_ADDRESS = MAIL_FROM_DOMAIN ? `noreply@${MAIL_FROM_DOMAIN}` : 'onboarding@resend.dev'

const MAX_FILE_SIZE = 8 * 1024 * 1024 // 8MB — safe ceiling for a single PDF/DOC

type FormType = 'contact' | 'internship' | 'publication' | 'callback'

// Appends one row per submission via the separate Leads Apps Script (Leads.gs).
// Best-effort: a logging failure never blocks the email or the response.
async function logLeadToSheet(row: Record<string, string>): Promise<void> {
  const url = process.env.LEADS_SCRIPT_URL
  if (!url) return
  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), 8000)
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        ...row,
        timestamp: new Date().toISOString(),
        token: process.env.LEADS_SCRIPT_TOKEN || '',
      }),
      signal: controller.signal,
    })
    const data = await res.json().catch(() => null)
    if (!data?.ok) {
      console.error('Lead sheet logging rejected:', res.status, data?.error || 'bad token or non-JSON reply')
    }
  } catch (err) {
    console.error('Lead sheet logging failed:', err instanceof Error ? err.message : err)
  } finally {
    clearTimeout(timer)
  }
}

// ---------------------------------------------------------------------------
// EMAIL THEME NOTE
// ---------------------------------------------------------------------------
// This template is deliberately LIGHT-themed with everything inlined.
// Earlier versions used a dark canvas (near-black body/container background)
// with near-white text, set via a <style> block in <head>. Many mail clients
// (Gmail's app included) ignore/strip background-color declared on
// <body>/<html> — they let their own light/dark theme own that surface — but
// they do NOT ignore the text colors you set. The result was near-white text
// rendered on the client's default white background: invisible.
//
// Fix: don't rely on a background color for contrast. Use a light background
// and dark text everywhere (readable on white regardless of client theme),
// keep gold only as an accent, and set every background/border color inline
// (not just in a <head><style> block) using table cells with bgcolor + inline
// style, which is the combination email clients respect most consistently.
// ---------------------------------------------------------------------------

const GOLD = '#a8842c'
const GOLD_BG = '#fbf6ea'
const INK = '#1c1a16'
const MUTED = '#6b6558'
const BORDER = '#e6ddc6'
const CARD_BG = '#faf8f3'

function wrapperOpen(subtitle: string) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="color-scheme" content="light">
    <meta name="supported-color-schemes" content="light">
  </head>
  <body style="margin:0; padding:0; background-color:#f2efe7; font-family:Georgia, 'Times New Roman', serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2efe7; padding:24px 0;">
      <tr>
        <td align="center">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid ${BORDER}; border-radius:6px;">
            <tr>
              <td style="padding:32px 32px 20px 32px; border-bottom:1px solid ${BORDER};">
                <div style="font-size:22px; font-weight:700; color:${GOLD}; letter-spacing:1px;">Sumanjari &amp; Co.</div>
                <div style="font-size:11px; color:${MUTED}; letter-spacing:2px; text-transform:uppercase; margin-top:4px;">Advocates &middot; ${subtitle}</div>
              </td>
            </tr>
            <tr>
              <td style="padding:24px 32px 8px 32px;">
`
}

const wrapperClose = `
              </td>
            </tr>
            <tr>
              <td style="padding:20px 32px 28px 32px;">
                <div style="border-top:1px solid ${BORDER}; padding-top:16px; font-size:12px; color:${MUTED}; text-align:center;">
                  __FOOTER__
                </div>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
  </html>
`

function badge(text: string) {
  return `
    <span style="display:inline-block; background-color:${GOLD_BG}; border:1px solid ${BORDER}; color:${GOLD}; font-size:11px; letter-spacing:1.5px; text-transform:uppercase; padding:5px 14px; border-radius:20px; margin-bottom:20px;">${text}</span>
    <div style="height:20px; line-height:20px; font-size:0;">&nbsp;</div>
  `
}

function field(label: string, value: string) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:14px; background-color:${CARD_BG}; border:1px solid ${BORDER}; border-radius:4px;">
      <tr>
        <td style="padding:14px 16px;">
          <div style="font-size:10px; letter-spacing:2px; text-transform:uppercase; color:${MUTED}; margin-bottom:5px;">${label}</div>
          <div style="font-size:15px; color:${INK};">${value}</div>
        </td>
      </tr>
    </table>
  `
}

function messageBox(label: string, value: string) {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px; background-color:${CARD_BG}; border:1px solid ${BORDER}; border-radius:4px;">
      <tr>
        <td style="padding:16px;">
          <div style="font-size:10px; letter-spacing:2px; text-transform:uppercase; color:${MUTED}; margin-bottom:8px;">${label}</div>
          <div style="font-size:15px; color:${INK}; line-height:1.7;">${value}</div>
        </td>
      </tr>
    </table>
  `
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()

    const formType = (formData.get('formType')?.toString() || 'contact') as FormType

    const name = escapeHtml(formData.get('name')?.toString() || '')
    const email = formData.get('email')?.toString() || ''
    const phone = escapeHtml(formData.get('phone')?.toString() || '')

    // Type-specific fields
    const area = escapeHtml(formData.get('area')?.toString() || '')
    const message = escapeHtml(formData.get('message')?.toString() || '')
    const college = escapeHtml(formData.get('college')?.toString() || '')
    const pubType = escapeHtml(formData.get('type')?.toString() || '')
    const title = escapeHtml(formData.get('title')?.toString() || '')
    const outlet = escapeHtml(formData.get('outlet')?.toString() || '')
    const link = escapeHtml(formData.get('link')?.toString() || '')
    const description = escapeHtml(formData.get('description')?.toString() || '')
    const urgency = escapeHtml(formData.get('urgency')?.toString() || '')
    const blogUrl = escapeHtml(formData.get('blogUrl')?.toString() || '')
    const file = formData.get('file') as File | null

    // ---- Validation per form type ----
    // The blog callback card collects only name + phone (no email), so email is
    // required for every type EXCEPT callback.
    if (!name) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (formType === 'callback') {
      if (!phone) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }
    } else {
      if (!email) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
      }
      if (!isValidEmail(email)) {
        return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
      }
    }
    if (formType === 'contact' && (!phone || !message)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (formType === 'internship' && (!phone || !college || !area || !file || file.size === 0)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    if (formType === 'publication' && (!pubType || !title || !description)) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }
    // Phone is required on contact/internship, optional on publication —
    // but whenever a phone value IS present, it must be plausible. Loose here
    // (Indian + international) since the client enforces the per-country rule.
    if (phone && !isValidIntlPhone(phone)) {
      return NextResponse.json({ error: 'Invalid phone number' }, { status: 400 })
    }

    // ---- Attachments (internship resume, or publication file) ----
    const attachments: { filename: string; content: string }[] = []
    if (file && file.size > 0) {
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: 'File is too large. Please keep it under 8MB.' },
          { status: 400 }
        )
      }
      const bytes = await file.arrayBuffer()
      const base64 = Buffer.from(bytes).toString('base64')
      attachments.push({ filename: file.name, content: base64 })
    }

    // ---- Persist the lead to the spreadsheet (best-effort, raw values) ----
    // Logged before the email so a lead is captured even if delivery fails.
    if (formType === 'contact' || formType === 'callback') {
      await logLeadToSheet({
        formType,
        name: formData.get('name')?.toString() || '',
        email: formData.get('email')?.toString() || '',
        phone: formData.get('phone')?.toString() || '',
        practiceArea: formData.get('area')?.toString() || '',
        urgency: formData.get('urgency')?.toString() || '',
        message: formData.get('message')?.toString() || '',
        blogUrl: formData.get('blogUrl')?.toString() || '',
      })
    }

    // ---- Build office notification email ----
    let subject = ''
    let subtitle = ''
    let badgeText = ''
    let bodyFields = ''

    if (formType === 'callback') {
      subject = `New Callback Request — ${name}`
      subtitle = 'New Callback Request'
      badgeText = urgency || 'Callback'
      bodyFields =
        field('Full Name', name) +
        field('Phone', phone) +
        (urgency ? field('Urgency', urgency) : '') +
        (blogUrl ? field('Read Article', `<a href="${blogUrl}" style="color:${GOLD};">${blogUrl}</a>`) : '')
    } else if (formType === 'contact') {
      subject = `New Consultation Request — ${name}`
      subtitle = 'New Consultation Request'
      badgeText = area || 'General Enquiry'
      bodyFields =
        field('Full Name', name) +
        field('Email', email) +
        field('Phone', phone) +
        (area ? field('Practice Area', area) : '') +
        messageBox('Description', message.replace(/\n/g, '<br>'))
    } else if (formType === 'internship') {
      subject = `New Internship Application — ${name}`
      subtitle = 'New Internship Application'
      badgeText = area || 'Internship'
      bodyFields =
        field('Full Name', name) +
        field('Email', email) +
        field('Phone', phone) +
        field('College / University', college) +
        field('Area of Interest', area)
    } else {
      subject = `New Publication Submission — ${pubType} | ${name}`
      subtitle = 'New Publication Submission'
      badgeText = pubType
      bodyFields =
        field('Submitted By', name) +
        field('Email', email) +
        (phone ? field('Phone', phone) : '') +
        field('Title', title) +
        (outlet ? field('Journal / Publisher / Institution', outlet) : '') +
        (link ? field('Link', `<a href="${link}" style="color:${GOLD};">${link}</a>`) : '') +
        messageBox('Abstract / Description', description.replace(/\n/g, '<br>'))
    }

    const officeFooter = `
      ${attachments.length ? 'A file was attached to this submission.<br>' : ''}
      Reply directly to this email to reach the submitter.
    `

    const officeHtml =
      wrapperOpen(subtitle) +
      badge(badgeText) +
      bodyFields +
      wrapperClose.replace('__FOOTER__', officeFooter)

    // ---- Persist publication submissions so they can be approved later ----
    // (contact/internship stay email-only — no gallery to publish them into)
    if (formType === 'publication') {
      const { error: dbError } = await supabase.from('publications').insert({
        title,
        author: name,
        email,
        type: pubType,
        outlet: outlet || null,
        href: link || null,
        // Note: an uploaded file only reaches you as an email attachment —
        // it has no public URL yet, so file_url stays null. To feature a
        // work that arrived as a file rather than a link, upload it to
        // Supabase Storage yourself and paste the public URL into this
        // column when you approve the row.
        file_url: null,
        excerpt: description,
        status: 'pending',
      })
      if (dbError) {
        // Don't fail the whole request over this — the email notification
        // below still goes out, so the submission isn't lost either way.
        console.error('Supabase publication insert error:', dbError)
      }
    }

    const officeResult = await resend.emails.send({
      from: `Sumanjari & Co. Website <${SENDER_ADDRESS}>`,
      to: [OFFICE_EMAIL],
      // Callback requests carry no email, so there's nothing to reply to.
      ...(email ? { reply_to: email } : {}),
      subject,
      attachments,
      html: officeHtml,
    })

    if (officeResult.error) {
      console.error('Resend office email error:', officeResult.error)
      throw new Error(officeResult.error.message || 'Failed to send office notification email')
    }

    // ---- Confirmation email to submitter ----
    let confirmSubject = 'Submission Received — Sumanjari & Co. Advocates'
    let confirmIntro = 'Your submission has been received. Our team will review it and get back to you shortly.'
    if (formType === 'contact') {
      confirmSubject = 'Consultation Request Received — Sumanjari & Co. Advocates'
      confirmIntro = 'Your consultation request has been received. Our team will contact you within 24 hours.'
    } else if (formType === 'internship') {
      confirmSubject = 'Application Received — Sumanjari & Co. Advocates'
      confirmIntro = 'Your internship application has been received. Our team will review it and reach out shortly.'
    } else if (formType === 'publication') {
      confirmSubject = 'Submission Received — Sumanjari & Co. Advocates'
      confirmIntro = 'Your submission has been received. Our editorial team will review it and reach out if it is selected to be featured.'
    }

    const confirmHtml = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="color-scheme" content="light">
        <meta name="supported-color-schemes" content="light">
      </head>
      <body style="margin:0; padding:0; background-color:#f2efe7; font-family:Georgia, 'Times New Roman', serif;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f2efe7; padding:24px 0;">
          <tr>
            <td align="center">
              <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px; width:100%; background-color:#ffffff; border:1px solid ${BORDER}; border-radius:6px;">
                <tr>
                  <td align="center" style="padding:36px 32px 24px 32px; border-bottom:1px solid ${BORDER};">
                    <div style="font-size:24px; font-weight:700; color:${GOLD};">Sumanjari &amp; Co.</div>
                    <div style="font-size:11px; letter-spacing:2px; text-transform:uppercase; color:${MUTED}; margin-top:4px;">Advocates &middot; Rooted in Law. Rising with You.</div>
                  </td>
                </tr>
                <tr>
                  <td style="padding:32px;">
                    <h2 style="font-size:26px; font-weight:700; color:${INK}; text-align:center; margin:0 0 14px;">Thank You, ${name.split(' ')[0]}</h2>
                    <p style="font-size:15px; color:${MUTED}; line-height:1.8; text-align:center; margin:0 0 18px;">${confirmIntro}</p>
                    <p style="font-size:13px; color:${MUTED}; text-align:center; margin:0;">
                      &#9993; info.sumanjarirightsandremedies@gmail.com
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:20px 32px 28px 32px;">
                    <div style="border-top:1px solid ${BORDER}; padding-top:16px; text-align:center;">
                      <p style="font-size:12px; color:${MUTED}; margin:0; line-height:1.6;">Sumanjari &amp; Co. Advocates<br>Chamber No. Block D &ndash; 311, Allahabad High Court, Lucknow Bench</p>
                      <p style="font-size:11px; color:#9a9384; margin:8px 0 0;">This is an automated confirmation. Please do not reply to this email.</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `

    // Without a verified domain, Resend's sandbox sender can only deliver to
    // OFFICE_EMAIL — never to an arbitrary visitor's address — so skip the
    // call outright rather than let it fail on every single submission.
    // Callback requests have no email to confirm to, so skip them too.
    const confirmResult = !MAIL_FROM_DOMAIN || !email
      ? { error: { message: 'Skipped: MAIL_FROM_DOMAIN not set or no submitter email' } }
      : await resend.emails.send({
          from: `Sumanjari & Co. Advocates <${SENDER_ADDRESS}>`,
          to: [email],
          subject: confirmSubject,
          html: confirmHtml,
        })

    if (confirmResult.error) {
      // Office was notified successfully, so don't fail the whole request —
      // just log it. Submitter confirmation is nice-to-have, not critical.
      console.error('Resend confirmation email error:', confirmResult.error)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Form submission email error:', error instanceof Error ? error.message : error)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}