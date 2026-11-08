# Sumanjari & Co. — Website

A premium law firm website built with **Next.js 14**, **Tailwind CSS**, and **Resend** for email.

## ✅ Features

- Luxury dark theme with gold accents (Playfair Display + EB Garamond typography)
- Fully responsive (mobile-first)
- Animated hero, services tabs, testimonials, team section
- Contact form with **Resend email** — sends notification to office + auto-confirmation to client
- WhatsApp float button with popup
- SEO-ready metadata
- Ready to deploy on Vercel in minutes

### Divorce page SEO content

The [divorce page](src/app/services/divorce-lawyer-lucknow/page.tsx) renders a linked
JSON-LD graph for its LegalService, advocate profile, visible English/Hindi FAQs,
ten-stage procedural overview and breadcrumbs. Its service entity references the
site-wide organization without replacing the firm's shared contact details.
The graph is server-rendered in the page using Next.js's JSON-LD pattern.
Schema markup does not guarantee rankings or rich results; Google has discontinued
FAQ and HowTo rich results.

Hindi information is an on-page section (`#hindi-faqs`), not a separate translated
route. Locality coverage is subject to statutory jurisdiction, and court hours,
filing arrangements and assignments must be checked with the registry.
The [stage data](src/lib/guides/divorceLucknow.ts) keeps plain-text paragraphs for
structured data and optional inline links to published blog URLs. Update a link's
text and paragraph index together when changing its source paragraph.
Run the focused rendering regression tests with
`node --test tests/production/divorce-seo.test.cjs`.
Informational wording and disclaimers do not constitute certification of BCI Rule
36 compliance; publication should be reviewed by the responsible advocate.

### Service Matters page

The [Service Matters page](src/app/services/service-lawyer-lucknow/page.tsx) uses
the same server-rendered JSON-LD graph pattern for the service, existing practice
lead, visible English/Hindi FAQs, seven-stage overview and breadcrumbs. Hindi
information includes 15 FAQs on-page at `#hindi-faqs`, covering forums, disciplinary
proceedings, transfers, benefits and employment remedies. Locality coverage is not a list
of branch offices or a guarantee of tribunal jurisdiction.
The [procedure data](src/lib/guides/serviceLucknow.ts) distinguishes employer
coverage, suspension rules, pension withholding and excess-payment recovery.
Verify current rules, labour-law transitions and registry directions for each
case. These pages provide general information, not individual legal advice.
Run the rendering regressions for both pages with
`node --test tests/production/divorce-seo.test.cjs`.

---

## 🚀 Deploy to Vercel (Step-by-Step)

### Option A — GitHub + Vercel (Recommended)

1. **Upload this folder to GitHub:**
   - Create a new repo at [github.com/new](https://github.com/new)
   - Upload all files OR run:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
     git push -u origin main
     ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com) → New Project
   - Import your GitHub repo
   - Framework: **Next.js** (auto-detected)
   - Add these **Environment Variables**:
     ```
     CONTACT_EMAIL  = info.sumanjarirightsandremedies@gmail.com
     ```
   - Click **Deploy** ✅

### Option B — Vercel CLI

```bash
npm install -g vercel
cd law-firm
npm install
vercel
# Follow prompts, add env vars when asked
```

---

## 💻 Run Locally

```bash
cd law-firm
npm install
npm run dev
# Open http://localhost:3000
```

---

## 📧 Email Setup (Resend)

The contact form sends two emails:
1. **To your office** (`sslawoffice01@gmail.com`) — full client details
2. **To the client** — professional confirmation with WhatsApp CTA

> **Important:** Resend's free plan sends from `onboarding@resend.dev`. To send from your own domain (e.g. `(https://www.sumanjariadvocates.com/#home)`), add your domain at [resend.com/domains](https://resend.com/domains) and update the `from` field in `src/app/api/contact/route.ts`.

---

## 📁 Project Structure

```
law-firm/
├── src/
│   ├── app/
│   │   ├── api/contact/route.ts   ← Email API (Resend)
│   │   ├── globals.css            ← Luxury theme styles
│   │   ├── layout.tsx             ← Root layout + fonts
│   │   └── page.tsx               ← Main page
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Ticker.tsx
│       ├── Services.tsx
│       ├── About.tsx
│       ├── Team.tsx
│       ├── Testimonials.tsx
│       ├── Contact.tsx
│       ├── Footer.tsx
│       └── WhatsAppFloat.tsx
├── .env.local                     ← Local env vars (not committed)
├── .env.example                   ← Reference for Vercel env vars
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

---

## 🎨 Customization

- **Colors:** Edit CSS variables in `globals.css`
- **Team photos:** Replace `img src` URLs in `Team.tsx` with real photos
- **Office info:** Update address/phone in `Contact.tsx` and `Footer.tsx`
- **Services:** Edit the `services` array in `Services.tsx`
- **Testimonials:** Edit the `testimonials` array in `Testimonials.tsx`

---

## 📞 Support

WhatsApp: +91 9336065812  
Email: info.sumanjarirightsandremedies@gmail.com
