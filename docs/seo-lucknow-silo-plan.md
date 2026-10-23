# SEO Plan: Disclaimer DOM order, Lucknow URL slugs, Stage-by-Stage Lucknow Guides

Status: PLAN ONLY. No code has been changed. Execute the phases in order. Each phase is a separate PR/commit and can be deployed by itself.

Stack facts this plan relies on (checked in the repo):
- Next.js 14.2.35 App Router, React 18, Tailwind. Scripts: `npm run build`, `npm run lint`, `npm run start`.
- Service pages are server components. The page copy is inline JSX plus data arrays at the top of each `page.tsx`.
- Alias pattern already in use: the implementation lives in an old folder (e.g. `src/app/services/criminal-matters/page.tsx`). The public slug folder only re-exports it (`src/app/services/criminal-lawyer/page.tsx` → `export { default, metadata } from '../criminal-matters/page'`). Old slugs are 308-redirected in `next.config.js` → `redirects()`.
- `/llms*.txt` builds service sections by fetching the live HTML (`src/lib/llms/sections.ts` → `fetchPageMarkdown`). New page copy appears there automatically. Only the path lists need updating.
- The fixed navbar (`src/components/Navbar.tsx`, `fixed top-0 z-50`) is why existing anchor sections use the `scroll-mt-28` class. New anchors must use it too.

---

## 0. Evidence gathered (why each change matters)

### 0.1 Disclaimer position (measured 2026-10-21)

| Page | Raw SSR HTML (no JS) | Rendered DOM (JS executed, 5 s wait) |
|---|---|---|
| `/services/criminal-lawyer` | Disclaimer not present. `<h1>` at byte 21,496 | `Important Notice` at byte **8,963**, `<h1>` at byte **25,957** → disclaimer comes first |
| `/our-journey`, `/team`, `/services/rera-lawyer` | Disclaimer not present. The only "Bar Council of India" text is the footer, after the H1 | Same pattern as above (the modal is the first child of `<body>`) |
| dschaube.com (competitor) | n/a (mod_security blocks curl) | `Disclaimer` at byte **90,677 of 91,677**, at the very end |

Root cause: `src/app/layout.tsx` renders `<Disclaimer />` **before** `{children}` inside `<ThemeProvider>`. `Disclaimer` is a client component. It returns `null` on the server, so raw HTML is clean. After hydration plus the 3 s timer, React inserts the modal as the first node in `<body>`. Googlebot's rendering pass and every JS-rendering SEO auditor then read the 100-word BCI notice before the navbar and H1.

### 0.2 Competitor: B&B Associates LLP (bnblegal.com)

URL silo: `https://bnblegal.com/lucknow/<practice>-lawyers-in-lucknow/` (exact-match keywords in the slug). Pages found:
`/lucknow/criminal-lawyers-in-lucknow/`, `/lucknow/divorce-lawyers-in-lucknow/`, `/lucknow/civil-lawyers-in-lucknow/`, `/lucknow/familylaw-and-familylawyers-in-lucknow/`, `/lucknow/land-property-lawyers-in-lucknow/`, `/lucknow/constitutional-law-and-constitutional-lawyers-in-lucknow/`, and others. **`/lucknow/high-court-lawyers-in-lucknow/` returns 404**, so a dedicated High Court page is an open gap.

Shared format (all three pages): H1, then a clickable "TABLE OF CONTENTS" with `#anchors`, then PROLOGUE ("Swamp anecdote"), Scope list, "THE CORE BODY OF LAW", "PROCEDURAL STAGES" (Stage 1…N), "Guide on finding & hiring", and FAQs. About 4,800–6,300 words including site chrome.

Weaknesses we will beat (verified in the scraped text):

| Page | B&B weakness |
|---|---|
| Criminal | Only 7 stages. Lucknow courts are named once in the intro ("District and Session Courts of Lucknow, the Hon'ble High Court of Allahabad"). Everywhere else it says "the state High Court" or "the High Court". No mention of the Lucknow Bench, Gomti Nagar, Section 528 BNSS, the Allahabad HC practice of using an Art. 226 writ before the chargesheet, or the UP anticipatory-bail history. 8 generic FAQs. |
| Divorce | The stage list is cloned from the civil-suit template (Legal Notice → Summons → Written Response → Framing Issues → …). Stages 8–12 all link to the **same** "maintenance under Section 125 CrPC" article. It says "the appropriate family court" and never names the Lucknow Family Court. Alimony links point to **Punjab & Haryana High Court** news. It says "Supreme Court of India in Delhi". |
| Civil | 13 stages, identical template. No Lucknow forum is named: no Civil Court at Kaiserbagh, no Commercial Court, no revenue courts / UP Revenue Code, no Lucknow Bench. |
| Lucknow hub `/lucknow/` | "Rooted in Chandigarh". Partner bios read "Advocate, Punjab and Haryana High Court, Chandigarh". The office dropdown lists Chandigarh first. |

### 0.3 Current Sumanjari pages (live word count, H1 → end of page incl. team/blog cards)

| URL | Words | Procedure section today |
|---|---|---|
| `/services/criminal-lawyer` | ~2,200 | `workSteps` = 5 short steps |
| `/services/divorce-lawyer` | ~3,300 | `process` = 5 short steps |
| `/services/civil-advocate` | ~1,190 | short numbered steps |
| (no High Court page) | – | – |

Titles and H1s already say "in Lucknow". Only the URLs are city-neutral, and no page has a TOC or a 10-stage roadmap.

### 0.4 Verified Lucknow forum facts to use in copy

| Forum | Verified detail | Source |
|---|---|---|
| High Court of Judicature at Allahabad, **Lucknow Bench** | Vibhuti Khand, Gomti Nagar, Lucknow (new campus on Faizabad Road). The firm's chamber is Block D-311 there. | hclko.allahabadhighcourt.in contact page; public notices |
| Lucknow Bench jurisdiction | 16 of 75 UP districts: Lucknow, Hardoi, Lakhimpur Kheri, Rae Bareli, Sitapur, Unnao, Ayodhya (Faizabad), Ambedkar Nagar, Bahraich, Shravasti, Barabanki, Gonda, Balrampur, Pratapgarh, Sultanpur, Amethi. **VERIFY** this list with the firm before publishing. | Hindustan Times (16 districts); High Court Lucknow Bench LinkedIn |
| Lucknow Bench history | The Chief Court of Oudh was amalgamated with the Allahabad High Court in 1948 (United Provinces High Courts (Amalgamation) Order, 1948), and the Lucknow Bench was created. | allahabadhighcourt.in history PDF |
| **District & Sessions Court, Lucknow** (Civil Court) | Civil Court premises, Kaiserbagh/Qaiserbagh, P.S. Wazirganj, Lucknow 226001. North and South blocks, on the Gomti bank. | lucknow.dcourts.gov.in/contact-us |
| **Family Court, Lucknow** (Principal Judge + Additional Principal Judges) | Family Court Campus, Wala Qadar Road, Qaiserbagh, Lucknow 226001 (near Parivartan Chowk / old Tulsi cinema) | Central Bar Association court-location page; allahabadhighcourt.in district officer list |
| Lucknow Police | Police Commissionerate system (since January 2020), so FIR escalation goes to the DCP / Police Commissionerate. | public record |
| UP anticipatory bail | S.438 CrPC was not available in UP from 1976 until the CrPC (UP Amendment) Act, 2018 came into force in June 2019. Today: S.482 BNSS. | lawstreet.co; indianlawwatch.com; Allahabad HC judgments |
| 498A / BNS 85-86 safeguards | Allahabad HC, *Mukesh Bansal v. State of UP* (2022): 2-month "cooling period" and Family Welfare Committee referral. The Supreme Court endorsed it in *Shivangi Bansal v. Sahib Bansal* (2025). | dhyeyalaw.in; lawandotherthings.com |

Items marked **VERIFY** in this plan must be confirmed by an advocate of the firm before they go live. Where a fact is uncertain, the copy must use the hedged wording given in this plan.

---

## Phase 1: Move the BCI Disclaimer modal to the end of the DOM (≈5 min, zero visual change)

### 1.1 Edit `src/app/layout.tsx`

Find:
```tsx
      <body suppressHydrationWarning>
        <ThemeProvider>
          <Disclaimer />
          {children}
        </ThemeProvider>
      </body>
```
Replace with:
```tsx
      <body suppressHydrationWarning>
        <ThemeProvider>
          {children}
          {/* Last in the DOM so crawlers read the H1 first; it's position:fixed so placement is invisible. */}
          <Disclaimer />
        </ThemeProvider>
      </body>
```

Nothing else changes. `src/components/Disclaimer.tsx` already renders `fixed inset-0 z-[9999]`, so it still covers the viewport. The 3 s delay, localStorage acceptance, scroll lock and Google-Sheets logging are unchanged.

### 1.2 Optional (accessibility, same PR, no SEO effect)
In `src/components/Disclaimer.tsx`, on the outer `<div className="fixed inset-0 z-[9999] …">`, add `role="dialog" aria-modal="true" aria-labelledby="bci-disclaimer-title"`, and add `id="bci-disclaimer-title"` to the `<h2>Disclaimer — Sumanjari & Co.</h2>`. Do not change anything else in that file.

### 1.3 Verify
1. `npm run build` succeeds.
2. `npm run start`. Open `http://localhost:3000/services/criminal-lawyer` in a fresh private window and wait 4 s. The modal appears exactly as before, and the "I Agree & Proceed" button works.
3. In DevTools Console after the modal shows:
   ```js
   const t = document.body.innerHTML; t.indexOf('Important Notice') > t.indexOf('<h1')   // must be true
   ```
4. After deploy, re-run the rendered check (optional, uses the Firecrawl CLI):
   ```bash
   firecrawl scrape https://www.sumanjariadvocates.com/services/criminal-lawyer --format rawHtml --wait-for 5000 -o /tmp/r.html
   grep -bo -E "<h1|Important Notice" /tmp/r.html   # <h1 offset must be smaller than Important Notice
   ```

### 1.4 Out of scope, noted only
Before the H1, the rendered DOM still contains about 20 navbar link labels: `Navbar.tsx` maps `allLinks` at line ~93 plus `primaryLinks` and `secondaryLinks`, so the labels appear twice. Changing the navbar is not required for this task, so leave it.

---

## Phase 2: Lucknow exact-match slugs (rename + 308 redirects, no content change)

### 2.1 Decision: rename, don't duplicate
- The criminal, divorce and civil pages are already 100% Lucknow-specific in title, H1, schema `areaServed` and copy. Nothing on them targets NCR, so renaming loses no NCR relevance.
- Keeping both `/criminal-lawyer` and `/criminal-lawyer-lucknow` live would split signals and cause keyword cannibalisation. Use a **single canonical `-lucknow` URL** and permanently redirect the old URL.
- NCR expansion later follows the existing `rera-lawyer-noida-ghaziabad` pattern, e.g. `/services/criminal-lawyer-noida` as a separate page with its own NCR content.
- The redirect must be permanent and kept forever. Do not plan to roll back after deploy: reversing a processed 308 hurts rankings twice.

### 2.2 Final URL map

| Old URL(s) | New canonical URL | Implementation file (unchanged location unless stated) |
|---|---|---|
| `/services/criminal-lawyer`, `/services/criminal-matters` | `/services/criminal-lawyer-lucknow` | `src/app/services/criminal-matters/page.tsx` |
| `/services/divorce-lawyer` | `/services/divorce-lawyer-lucknow` | moved: `src/app/services/divorce-lawyer-lucknow/page.tsx` |
| `/services/civil-advocate`, `/services/civil-matters` | `/services/civil-lawyer-lucknow` | `src/app/services/civil-matters/page.tsx` |
| (new) | `/services/high-court-lawyer-lucknow` | new: `src/app/services/high-court-lawyer-lucknow/page.tsx` (Phase 7) |

Each old URL redirects in **one hop** with no chains: `criminal-matters` goes straight to `criminal-lawyer-lucknow`, not via `criminal-lawyer`.

### 2.3 File operations (use `git mv` so history is kept)
```bash
git mv src/app/services/criminal-lawyer src/app/services/criminal-lawyer-lucknow
git mv src/app/services/civil-advocate  src/app/services/civil-lawyer-lucknow
git mv src/app/services/divorce-lawyer  src/app/services/divorce-lawyer-lucknow
```
After this:
- `criminal-lawyer-lucknow/page.tsx` still contains `export { default, metadata } from '../criminal-matters/page'`. No edit is needed.
- `civil-lawyer-lucknow/page.tsx` still contains `export { default, metadata } from '../civil-matters/page'`. No edit is needed.
- `divorce-lawyer-lucknow/page.tsx` is the full page. Edit line 15 as in 2.5.

### 2.4 `next.config.js`, inside `redirects()`
Change two existing entries and add three. The final relevant entries are:
```js
      {
        source: '/services/civil-matters',
        destination: '/services/civil-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/civil-advocate',
        destination: '/services/civil-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/criminal-matters',
        destination: '/services/criminal-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/criminal-lawyer',
        destination: '/services/criminal-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/divorce-lawyer',
        destination: '/services/divorce-lawyer-lucknow',
        permanent: true,
      },
```
Leave all other entries (tax, family, service, rera) as they are. The sources are exact paths with no `:path*`, so `/services/criminal-lawyer` does **not** match `/services/criminal-lawyer-lucknow`. The case-insensitivity loop described in `src/middleware.ts` does not apply here.

### 2.5 Canonical, OG and JSON-LD URLs inside the page files

`src/app/services/criminal-matters/page.tsx`, three occurrences:
- `canonical: '/services/criminal-lawyer'` → `canonical: '/services/criminal-lawyer-lucknow'`
- openGraph `url: '/services/criminal-lawyer'` → `url: '/services/criminal-lawyer-lucknow'`
- `criminalMattersJsonLd.url: \`${SITE_URL}/services/criminal-lawyer\`` → `` `${SITE_URL}/services/criminal-lawyer-lucknow` ``
- Also check any `BreadcrumbList` `item:` in the file with `grep -n "criminal-lawyer" src/app/services/criminal-matters/page.tsx`.

`src/app/services/civil-matters/page.tsx`:
- Lines 63, 69 and 82: replace `/services/civil-advocate` with `/services/civil-lawyer-lucknow`.
- Title line 46 (optional, to match the slug): `'Civil Lawyer in Lucknow | Suits, Injunctions & Appeals | Sumanjari'`. Keep the existing keywords and add `'Civil Lawyer in Lucknow'` if missing.
- H1 line ~313 (optional): `Civil Lawyer &amp; Advocate <em className="text-gold-gradient">in Lucknow</em>`.

`src/app/services/divorce-lawyer-lucknow/page.tsx`:
- Line 15: `const PAGE_PATH = '/services/divorce-lawyer-lucknow'`. All metadata and JSON-LD already derive from `PAGE_PATH`.

### 2.6 Internal links, updated so no internal link hits a redirect

| File | Line (approx) | Change |
|---|---|---|
| `src/components/Services.tsx` | 105 | `href: '/services/civil-lawyer-lucknow'` |
| `src/components/Services.tsx` | 120 | `href: '/services/criminal-lawyer-lucknow'` |
| `src/components/Footer.tsx` | 20 | `{ label: 'Civil Lawyer in Lucknow', href: '/services/civil-lawyer-lucknow' }` |
| `src/components/Footer.tsx` | 21 | `{ label: 'Criminal Lawyer in Lucknow', href: '/services/criminal-lawyer-lucknow' }` |
| `src/components/Footer.tsx` | after 21 | add `{ label: 'Divorce Lawyer in Lucknow', href: '/services/divorce-lawyer-lucknow' }` |
| `src/components/Footer.tsx` | after the constitutional entry | add `{ label: 'High Court Lawyer in Lucknow', href: '/services/high-court-lawyer-lucknow' }` **(only in Phase 7, once the page exists)** |
| `src/lib/blogs.ts` | 200–201 | `'Civil Matters': 'civil-lawyer-lucknow'`, `'Criminal Matters': 'criminal-lawyer-lucknow'` |
| `src/lib/llms/index.ts` | 50, 55, 71 | the three `path:` values become the new URLs. Titles: `'Civil Lawyer in Lucknow'`, `'Criminal Lawyer in Lucknow'`, `'Divorce Lawyer in Lucknow'` |
| `src/lib/llms/index.ts` | 151, 152, 157 | `servicePaths` → new URLs. **Do not** change the `slug:` values (`civil-matters`, `criminal-matters`): they are `/llms/<slug>.txt` file names, not page URLs. |
| `src/app/sitemap.ts` | 67, 77, 92 | the three URLs → new URLs. The old URLs must not appear in the sitemap. |
| `src/app/services/property-land-matters/page.tsx` | 624 | `href="/services/civil-lawyer-lucknow"` |
| `src/app/services/banking-recovery-matters/page.tsx` | 581 | `href="/services/civil-lawyer-lucknow"` |
| `src/app/services/cyber-crime-lawyer/page.tsx` | 529 | `href="/services/criminal-lawyer-lucknow"` |
| `src/app/services/family-matrimonial-matters/page.tsx` | 122, 416 | `/services/divorce-lawyer-lucknow` (also check 613 with grep) |
| `google-apps-script/Code.gs` | 194–195 | `'Civil Matters': 'civil-lawyer-lucknow'`, `'Criminal Matters': 'criminal-lawyer-lucknow'`. The script pre-warms these pages, and warming a redirect warms nothing. While editing, also align the stale entries with `src/lib/blogs.ts`: `'RERA': 'rera-lawyer'`, `'Family & Matrimonial Matters': 'family-advocate'`, `'Service & Employment Matters': 'service-advocate'`, `'Tax & Revenue Matters': 'tax-revenue-advocate'`. **Manual step:** paste the updated file into the Apps Script editor and deploy. Git does not deploy it. |

Final grep, which must print nothing:
```bash
grep -rn -E "/services/(criminal-lawyer|civil-advocate|divorce-lawyer|criminal-matters|civil-matters)(['\"\`/#?]|$)" src google-apps-script
```
The character class excludes `-lucknow` URLs. The only allowed hits are the `source:` lines in `next.config.js`, which this grep does not scan.

### 2.7 Verify
```bash
npm run build && npm run start
for p in criminal-lawyer criminal-matters civil-advocate civil-matters divorce-lawyer; do
  printf "%s -> " $p; curl -s -o /dev/null -w "%{http_code} %{redirect_url}\n" http://localhost:3000/services/$p
done
# expect: 308 http://localhost:3000/services/<new>-lucknow  (single hop each)
for p in criminal-lawyer-lucknow civil-lawyer-lucknow divorce-lawyer-lucknow; do
  curl -s http://localhost:3000/services/$p | grep -o '<link rel="canonical" href="[^"]*"'
done
# expect canonical == https://www.sumanjariadvocates.com/services/<same slug>
curl -s http://localhost:3000/sitemap.xml | grep -E "criminal|civil|divorce"
```

### 2.8 Post-deploy (manual, owner)
1. Google Search Console: resubmit `sitemap.xml`. Use URL Inspection → "Request indexing" for the 3 new URLs, and for the High Court page after Phase 7.
2. Existing indexing script (key file is git-ignored):
   ```bash
   cd scripts/google-indexing-api
   python3 bulk_index.py --key-file sumanjari_indexer_key.json \
     --url https://www.sumanjariadvocates.com/services/criminal-lawyer-lucknow \
     --url https://www.sumanjariadvocates.com/services/divorce-lawyer-lucknow \
     --url https://www.sumanjariadvocates.com/services/civil-lawyer-lucknow
   ```
   Do **not** send `URL_DELETED` for the old URLs. They redirect; they are not gone.
3. Update external profiles that link to the old URLs: Google Business Profile service/appointment links, Justdial/LinkedIn/Facebook "website" fields if they deep-link. Redirects cover them, but direct links are better.
4. Expect 2–6 weeks of ranking fluctuation on these three URLs. This is normal for a 308.

---

## Phase 3: Shared, server-only guide building blocks

These are reused by the 3 guides (criminal, divorce, civil). There is no client JS. The TOC uses plain `<a href="#id">` links, and smooth scroll already exists in `globals.css`.

### 3.1 New file `src/lib/guides/types.ts`
```ts
export type GuideTocItem = { id: string; label: string; children?: GuideTocItem[] }

export type GuideStage = {
  id: string // 'stage-1' … 'stage-10'; must be unique on the page
  title: string
  forum: string // the real Lucknow forum where this stage happens
  body: string[] // 2–3 paragraphs, 60–110 words each
  provisions: string[] // e.g. 'Section 173 BNSS (formerly s.154 CrPC)'
  checklist?: string[] // optional practical points / documents
}

export type StatuteRow = { law: string; provisions: string; relevance: string }
```

### 3.2 New file `src/components/LucknowGuide.tsx`
```tsx
import type { GuideStage, GuideTocItem, StatuteRow } from '@/lib/guides/types'

const linkClass = 'underline-offset-4 hover:text-gold-700 hover:underline dark:hover:text-gold-400'

export function GuideToc({ items }: { items: GuideTocItem[] }) {
  return (
    <nav aria-label="Table of contents" className="glass-card mb-16 rounded-sm border border-gold-500/20 p-6 md:p-8">
      <p className="mb-4 font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">Table of Contents</p>
      <ol className="list-decimal space-y-2 pl-5 font-body text-navy-800 dark:text-cream/75">
        {items.map((item) => (
          <li key={item.id}>
            <a href={`#${item.id}`} className={linkClass}>{item.label}</a>
            {item.children && (
              <ol className="mt-2 grid gap-1.5 pl-4 text-sm sm:grid-cols-2">
                {item.children.map((child) => (
                  <li key={child.id}>
                    <a href={`#${child.id}`} className={linkClass}>{child.label}</a>
                  </li>
                ))}
              </ol>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function GuideStages({ id, heading, intro, stages }: { id: string; heading: string; intro: string; stages: GuideStage[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16 scroll-mt-28">
      <h2 id={`${id}-heading`} className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">{heading}</h2>
      <p className="mb-10 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">{intro}</p>
      <ol className="space-y-10 border-l border-gold-500/30 pl-6 md:pl-8">
        {stages.map((stage, index) => (
          <li key={stage.id} id={stage.id} className="scroll-mt-28">
            <p className="font-caps text-xs uppercase tracking-[0.3em] text-gold-700 dark:text-gold-400">Stage {index + 1}</p>
            <h3 className="mb-2 mt-1 font-display text-xl font-bold text-navy-900 dark:text-cream">{stage.title}</h3>
            <p className="mb-3 font-body text-sm text-navy-700 dark:text-cream/60"><strong>Forum:</strong> {stage.forum}</p>
            {stage.body.map((paragraph, i) => (
              <p key={i} className="mb-3 font-body leading-relaxed text-navy-800 dark:text-cream/75">{paragraph}</p>
            ))}
            <p className="font-body text-sm text-navy-700 dark:text-cream/60"><strong>Key provisions:</strong> {stage.provisions.join('; ')}</p>
            {stage.checklist && (
              <ul className="mt-3 list-disc space-y-1 pl-5 font-body text-sm text-navy-700 dark:text-cream/60">
                {stage.checklist.map((point) => <li key={point}>{point}</li>)}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  )
}

export function StatuteTable({ id, heading, intro, rows }: { id: string; heading: string; intro: string; rows: StatuteRow[] }) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="mb-16 scroll-mt-28">
      <h2 id={`${id}-heading`} className="mb-3 font-display text-2xl font-bold text-navy-900 dark:text-cream md:text-3xl">{heading}</h2>
      <p className="mb-6 max-w-3xl font-body leading-relaxed text-navy-700 dark:text-cream/60">{intro}</p>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left font-body text-sm">
          <thead>
            <tr className="border-b border-gold-500/30 text-navy-900 dark:text-cream">
              <th scope="col" className="py-3 pr-4 font-semibold">Law</th>
              <th scope="col" className="py-3 pr-4 font-semibold">Key provisions</th>
              <th scope="col" className="py-3 font-semibold">Where it matters</th>
            </tr>
          </thead>
          <tbody className="text-navy-800 dark:text-cream/75">
            {rows.map((row) => (
              <tr key={row.law} className="border-b border-gold-500/10 align-top">
                <th scope="row" className="py-3 pr-4 font-semibold">{row.law}</th>
                <td className="py-3 pr-4">{row.provisions}</td>
                <td className="py-3">{row.relevance}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
```
All class names above are already used elsewhere in the repo (`glass-card`, `font-caps`, `gold-*`, `navy-*`, `cream/*`), so Tailwind will generate them.

### 3.3 Guide content files (one per guide)
- `src/lib/guides/criminalLucknow.ts` exports `criminalToc`, `criminalStatutes`, `criminalStages`
- `src/lib/guides/divorceLucknow.ts` exports `divorceToc`, `divorceStatutes`, `divorceStages`
- `src/lib/guides/civilLucknow.ts` exports `civilToc`, `civilStatutes`, `civilStages`

Keeping long copy out of `page.tsx` keeps the page files readable and the diff reviewable.

### 3.4 Content rules (apply to every guide; reviewer checklist)
1. **BCI Rule 36:** informational tone only. No "best", "top", "No. 1", "guaranteed", "100%", success rates, or fee promises. Use "we advise / we assess / we represent".
2. Every stage names a **real Lucknow forum** from §0.4 in its `forum` field and at least once in its body.
3. Every BNSS/BNS/BSA section is given with its old CrPC/IPC/Evidence Act number in brackets the first time it appears, e.g. "Section 528 BNSS (formerly Section 482 CrPC)".
4. Statutory time limits must be phrased as the statute says. Never estimate how long a case takes in Lucknow. Use "listing depends on the roster and cause list".
5. Include **no other city's courts**. The only exception is the Supreme Court of India, named as such, without "in Delhi".
6. Write original prose. Do not copy or paraphrase B&B sentences. Do not use a "prologue" or "anecdote": go straight to substance.
7. Body paragraphs: 60–110 words. Use plain English. Explain Hindi/Urdu court terms where natural (e.g. *vakalatnama*, *peshkar*, *cause list*).
8. Add `VERIFY` comments in the data file next to any item flagged VERIFY in this plan, so the reviewing advocate can find them (`// VERIFY: …`). Remove the comments once confirmed.
9. Target: **≥2,500 words of main content** per guide page. Measure from H1 to the start of `<footer>`, excluding the team carousel and blog cards (§9.3).

---

## Phase 4: Criminal guide on `/services/criminal-lawyer-lucknow`

File to edit: `src/app/services/criminal-matters/page.tsx`. Data goes in the new file `src/lib/guides/criminalLucknow.ts`.

### 4.1 Page skeleton after the change (top → bottom)
1. Navbar (unchanged)
2. Hero: H1 "Criminal Lawyers in Lucknow" + intro paragraph (unchanged) + lead card (unchanged)
3. **NEW** "Quick answer" paragraph directly under the hero `<p>`, 50–70 words, written for a featured snippet:
   > In Lucknow, a criminal case usually moves from FIR or complaint at a police station under the Lucknow Police Commissionerate, through bail and remand before the Magistrate and Sessions Courts at the Civil Court, Kaiserbagh, to trial and appeal. Quashing, anticipatory bail and appeals can be taken to the Allahabad High Court, Lucknow Bench at Gomti Nagar. The ten stages below explain each step.
4. **NEW** `<GuideToc items={criminalToc} />`
5. Team section (unchanged, `aria-labelledby="criminal-team"`)
6. Existing intro text block (unchanged)
7. "Forums We Appear Before" (existing `jurisdiction` array). Add `id="forums"` and `scroll-mt-28` to its wrapping `<div className="mb-16 …">`. Optionally add the Lucknow addresses to the blurbs (Civil Court Kaiserbagh; Vibhuti Khand, Gomti Nagar).
8. **NEW** `<StatuteTable id="statutory-framework" … rows={criminalStatutes} />`
9. **REPLACE** the "Criminal Case Procedure in Lucknow" block (the `workSteps.map(...)` wrapper, around file line 526) with:
   ```tsx
   <GuideStages
     id="criminal-procedure"
     heading="Criminal Case Procedure in Lucknow: Stage 1 to Stage 10"
     intro="How a criminal case actually moves through Lucknow's police stations, the Civil Court at Kaiserbagh and the Allahabad High Court, Lucknow Bench, with the BNSS provisions that govern each step."
     stages={criminalStages}
   />
   ```
   Then delete the `workSteps` array and any lucide icons it alone used, so ESLint stays clean (`npm run lint`).
10. "Types of Criminal Matters We Handle": add `id="matters"` and `scroll-mt-28` to the wrapper.
11. Why/Approach two-column block (unchanged)
12. Documents/consultation section: already has `aria-labelledby="criminal-consultation"`. Add `id="documents"` and `scroll-mt-28` to the `<section>`.
13. FAQs block: add `id="faqs"` and `scroll-mt-28`. Extend `criminalInsights` to **14** items (4.5).
14. Notice-review section (unchanged)
15. Blogs (unchanged)
16. CTA "Facing a Criminal Matter?": add `id="contact"` and `scroll-mt-28` to its wrapper.
17. FirmCredentials, Footer (unchanged)

Imports to add at the top:
```ts
import { GuideStages, GuideToc, StatuteTable } from '@/components/LucknowGuide'
import { criminalStages, criminalStatutes, criminalToc } from '@/lib/guides/criminalLucknow'
```

### 4.2 `criminalToc`
```ts
export const criminalToc: GuideTocItem[] = [
  { id: 'forums', label: 'Criminal Courts in Lucknow' },
  { id: 'statutory-framework', label: 'Statutory Framework: BNS, BNSS, BSA' },
  {
    id: 'criminal-procedure',
    label: 'Criminal Case Procedure: Stage 1 to Stage 10',
    children: criminalStages.map((s, i) => ({ id: s.id, label: `Stage ${i + 1}: ${s.title}` })),
  },
  { id: 'matters', label: 'Criminal Matters We Handle' },
  { id: 'documents', label: 'Documents to Bring' },
  { id: 'faqs', label: 'FAQs' },
  { id: 'contact', label: 'Speak to a Criminal Lawyer in Lucknow' },
]
```
Declare `criminalStages` above `criminalToc` in the file.

### 4.3 `criminalStatutes` (rows)
| law | provisions | relevance |
|---|---|---|
| Bharatiya Nyaya Sanhita, 2023 (BNS), replacing the IPC | Offences and punishments, e.g. s.85–86 (cruelty by husband/relatives, formerly 498A IPC), s.318 (cheating, formerly 420), s.316 (criminal breach of trust, formerly 406) | Decides what offence the FIR alleges, whether it is cognizable/bailable, and the maximum punishment, which drives arrest and bail strategy. |
| Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS), replacing the CrPC | s.35, 47, 48, 58, 173, 175(3), 187, 193, 250–251, 258, 351, 415, 430, 438–442, 479–483, 528 | Procedure from FIR to appeal before the Lucknow Magistrate and Sessions Courts and the Lucknow Bench. |
| Bharatiya Sakshya Adhiniyam, 2023 (BSA), replacing the Evidence Act | s.63 (electronic records certificate, formerly s.65B) | Admissibility of CCTV, call records, WhatsApp chats and other digital evidence at trial. |
| Constitution of India | Art. 21, Art. 22, Art. 226, Art. 227, Art. 136 | Liberty, arrest safeguards, writ petitions to quash FIRs at the Lucknow Bench, and SLP to the Supreme Court. |
| Negotiable Instruments Act, 1881 | s.138, 141, 142, 143A, 148 | Cheque-bounce complaints in Lucknow Magistrate courts; interim compensation; deposit on appeal. |
| Special statutes | NDPS Act 1985, POCSO Act 2012, SC/ST (PoA) Act 1989, Prevention of Corruption Act 1988, IT Act 2000, Dowry Prohibition Act 1961, UP Gangsters Act 1986 | Trials before designated Special Courts at the Civil Court, Lucknow, with special bail conditions. |

Transitional note (one paragraph under the table): BNS, BNSS and BSA apply from 1 July 2024. FIRs and proceedings begun earlier generally continue under the IPC/CrPC per BNSS s.531. Avoid absolutes: "the date of the offence and of registration decide which code applies".

### 4.4 `criminalStages` (10 stages: write prose from these briefs)

Fully written **sample** for Stage 1. Match this length and tone for all stages:
```ts
{
  id: 'stage-1',
  title: 'Complaint, FIR or Police Notice',
  forum: 'Police stations under the Lucknow Police Commissionerate; Magistrate courts at the Civil Court, Kaiserbagh',
  body: [
    'Most criminal cases in Lucknow begin at a police station of the Lucknow Police Commissionerate. Information about a cognizable offence must be recorded as an FIR under Section 173 BNSS (formerly Section 154 CrPC). It can be given at any police station as a "zero FIR", or electronically, and must be signed within three days if sent online.',
    'For offences punishable with three to seven years, the police may first hold a preliminary enquiry of up to 14 days with the permission of a DSP-rank officer. If the police station refuses to register, the complainant can write to the Deputy Commissioner of Police under Section 173(4). After that, the complainant can apply to the Magistrate at the Civil Court, Kaiserbagh under Section 175(3) BNSS, supported by an affidavit.',
    'If you are named in an FIR, do not contact the complainant or witnesses. Obtain a copy of the FIR from the UP Police citizen portal (UPCOP) or the police station, and get advice before giving any statement.',
  ],
  provisions: ['Section 173 BNSS (formerly s.154 CrPC)', 'Section 173(3) and 173(4) BNSS', 'Section 175(3) BNSS (formerly s.156(3) CrPC)', 'Section 223 BNSS (private complaint)'],
  checklist: ['FIR number, police station and date', 'Copy of any complaint or notice served', 'Names of the persons named and of the witnesses'],
},
```
(UPCOP is the UP Police citizen app. **VERIFY** the current name and that FIR download is still available.)

Briefs for stages 2–10. Each needs 2–3 paragraphs, `provisions` and an optional `checklist`.

| # | id / title | forum | Facts that must appear |
|---|---|---|---|
| 2 | `stage-2` Investigation & Notice of Appearance | Investigating police station, Lucknow Commissionerate | s.35(3) BNSS notice of appearance (formerly 41A CrPC) for offences up to 7 years; *Arnesh Kumar v. State of Bihar* (2014) safeguards against routine arrest; s.35(7): no arrest without a DSP-rank officer's permission for offences under 3 years if the person is infirm or over 60; s.180 statements (formerly 161); s.183 statement before Magistrate (formerly 164); s.176 forensic team visit for offences of 7+ years; s.105 audio-video recording of search and seizure. For 498A-type (BNS s.85) FIRs: the Allahabad HC *Mukesh Bansal* (2022) 2-month cooling period and Family Welfare Committee referral, endorsed by the Supreme Court in *Shivangi Bansal v. Sahib Bansal* (2025). **VERIFY** current operational status in Lucknow. |
| 3 | `stage-3` Protection Before Arrest: Anticipatory Bail & Writ | Sessions Court, Civil Court Kaiserbagh; Allahabad High Court, Lucknow Bench, Gomti Nagar | s.482 BNSS (formerly 438 CrPC). UP history: anticipatory bail was unavailable in UP from 1976 until the CrPC (UP Amendment) Act, 2018 took effect in June 2019. Sessions Court and High Court have concurrent jurisdiction, but in practice the Sessions Court is usually approached first (hedge: "ordinarily"). The Allahabad HC route of a **Criminal Misc. Writ Petition under Article 226** to quash the FIR or stay arrest while investigation is pending, which is distinct from s.528. Grounds per *State of Haryana v. Bhajan Lal* (1992). |
| 4 | `stage-4` Arrest, Production & Remand | Remand/duty Magistrate, Civil Court Lucknow | s.47 right to know grounds and right to bail (formerly 50); s.48 intimation to a relative (formerly 50A); production within 24 hours, s.58 (formerly 57); s.187 remand (formerly 167): police custody up to 15 days in total, which may be sought in parts within the first 40 or 60 days; default bail under s.187(3) if no police report in 60/90 days. Free legal aid via DLSA Lucknow and the remand advocate. |
| 5 | `stage-5` Regular Bail: Magistrate → Sessions → High Court | CJM / Magistrate courts and Sessions Court at the Civil Court, Kaiserbagh; Lucknow Bench (Criminal Misc. Bail Application) | s.480 (formerly 437), s.483 (formerly 439), s.479 (undertrial detention, formerly 436A: first-time offender after one-third of the maximum term). The bail ladder in Lucknow; *Satender Kumar Antil v. CBI* (2022) guidelines; sureties and bail bonds; special-statute bars (NDPS s.37, UAPA). |
| 6 | `stage-6` Police Report (Chargesheet) or Closure | Concerned Magistrate court, Civil Court Lucknow | s.193 BNSS (formerly 173): police report; s.193(3)(ii) informant to be told of progress within 90 days; closure report → protest petition by the complainant; s.193(9) further investigation (to be completed within 90 days unless extended). Supply of documents to the accused (s.230). |
| 7 | `stage-7` Cognizance, Summons & Quashing at the Lucknow Bench | Magistrate, Civil Court Lucknow; Allahabad High Court, Lucknow Bench | s.210 cognizance (formerly 190); s.223 proviso: hearing the accused before cognizance on a complaint; s.227 summons. Challenge routes: **Application under s.528 BNSS (formerly s.482 CrPC)** at the Lucknow Bench against chargesheet, summoning order or proceedings; criminal revision (s.438/442). Compromise quashing for private/matrimonial disputes: *Gian Singh v. State of Punjab* (2012) and *Narinder Singh* (2014). Spell out the difference: writ (Art. 226) while investigation is pending vs s.528 after chargesheet/summons. |
| 8 | `stage-8` Discharge & Framing of Charge | Sessions Court / Special Courts (POCSO, SC/ST, NDPS, Anti-Corruption, MP/MLA) at the Civil Court, Lucknow; Magistrate for warrant cases | Sessions: discharge s.250 (application within 60 days of commitment), charge s.251. Magistrate warrant cases: discharge s.262, charge s.263 (60-day windows). Committal from Magistrate to Sessions. Name the Special Courts as categories only. **VERIFY** current designations before naming specific courtrooms. |
| 9 | `stage-9` Trial: Evidence, Statement of Accused & Arguments | Trial court at the Civil Court, Kaiserbagh | Prosecution witnesses, cross-examination; electronic evidence certificate under BSA s.63; s.351 examination of the accused (formerly 313); defence evidence; s.530 trial in electronic mode / video-conference evidence; s.356 trial in absentia of proclaimed offenders; final arguments; judgment within 30 days of arguments, extendable to 45 (s.258 for Sessions). Victim's right to be heard. |
| 10 | `stage-10` Judgment, Sentence, Appeal & Suspension | Sessions Court (appeals from Magistrate); Allahabad High Court, Lucknow Bench (Criminal Appeal/Revision); Supreme Court (SLP, Art. 136) | s.392 judgment; sentencing hearing; probation; s.415 appeals (formerly 374); s.413 victim's appeal against acquittal / inadequate compensation; s.430 suspension of sentence and bail pending appeal (formerly 389); revision s.438–442; limitation for appeals must be checked immediately (do not state numbers without verification); certified copy from the Copying Section. |

Optional "Track B" call-out box after Stage 10 (no extra component needed; a `<div className="glass-card …">`): **Cheque bounce (s.138 NI Act) in Lucknow**. Cover the legal notice within 30 days of the return memo, 15 days to pay, complaint within one month after that (s.142), interim compensation up to 20% (s.143A), 20% deposit on appeal (s.148), and compounding. Forum: Magistrate courts at the Civil Court, Lucknow. **VERIFY** whether designated NI Act courts exist.

### 4.5 FAQs: extend `criminalInsights` to 14 items
Keep the existing 9 and add these 5. Each answer is 60–90 words, Lucknow-specific, hedged. `criminalFaqJsonLd` maps automatically. For the `icon`, reuse already-imported icons (`Gavel`, `Scale`, `Landmark`, `ShieldCheck`, `FileX`).
1. "What is the difference between a writ petition and a Section 528 BNSS application at the Lucknow Bench?"
2. "Is anticipatory bail available in Uttar Pradesh?" (cover the 2019 restoration and s.482 BNSS)
3. "Which court in Lucknow hears my bail application first?"
4. "Can a matrimonial (BNS s.85 / 498A) FIR be quashed after settlement?" (*Gian Singh*, s.528, Lucknow Bench, plus a link to `/services/divorce-lawyer-lucknow`)
5. "What happens if the police do not register my FIR in Lucknow?" (s.173(4) → DCP, s.175(3) → Magistrate)

### 4.6 Metadata tweaks (keep the title unchanged; it already ranks for the exact phrase)
- `description`: `'Criminal lawyer in Lucknow: stage-by-stage guide from FIR and bail to trial and appeal before the Civil Court, Kaiserbagh and the Allahabad High Court, Lucknow Bench.'` (≤160 chars, check length)
- Add keywords: `'Section 528 BNSS Lawyer Lucknow'`, `'Section 482 CrPC Quashing Lucknow'`, `'Anticipatory Bail Lucknow High Court'`, `'Sessions Court Lucknow Lawyer'`.
- Add a `BreadcrumbList` to the existing JSON-LD (Home → Services → Criminal Lawyer in Lucknow), following the divorce page's `structuredData` pattern.

---

## Phase 5: Divorce guide on `/services/divorce-lawyer-lucknow`

File to edit: `src/app/services/divorce-lawyer-lucknow/page.tsx`. Data goes in `src/lib/guides/divorceLucknow.ts`.

### 5.1 Page skeleton changes
The current H2 order (from file): Clear Advice → Services We Handle → Mutual vs Contested → Which Law Applies → Grounds → **The Divorce Process in Lucknow** (`process`, 5 steps) → Documents → Financial Settlements & Child's Welfare → Courts, Jurisdiction & Representation → Our Approach → FAQs → Settlement review → CTA.

Changes:
1. Under the hero intro, add a quick-answer paragraph (50–70 words): "Divorce petitions for Lucknow are heard by the Family Court, Lucknow at Wala Qadar Road, Qaiserbagh (Principal Judge and Additional Principal Judges); appeals go to the Allahabad High Court, Lucknow Bench at Gomti Nagar; the ten stages below explain each step."
2. Directly after the hero (before the team section) add `<GuideToc items={divorceToc} />`.
3. Replace "Which Law Applies to Your Marriage?" (`laws` array) with `<StatuteTable id="statutory-framework" … rows={divorceStatutes} />`. The table supersedes the old `laws` array, so delete the array once it is unused.
4. Replace "The Divorce Process in Lucknow" (`process` array) with `<GuideStages id="divorce-procedure" heading="Divorce Procedure in Lucknow: Stage 1 to Stage 10" … stages={divorceStages} />`. Delete the `process` array.
5. Give the remaining H2 wrappers `id` + `scroll-mt-28` so the TOC can target them: `mutual-vs-contested`, `grounds`, `documents`, `settlement-children`, `courts`, `faqs`, `contact`.
6. Extend `faqs` from 11 to 14 (5.5).

### 5.2 `divorceToc`
`courts` (Family Court Lucknow & jurisdiction), `statutory-framework`, `mutual-vs-contested`, `grounds`, `divorce-procedure` (children = 10 stages), `documents`, `settlement-children`, `faqs`, `contact`.

### 5.3 `divorceStatutes`
| law | provisions | relevance |
|---|---|---|
| Hindu Marriage Act, 1955 | s.9 (restitution), s.10 (judicial separation), s.13 (divorce grounds), s.13B (mutual consent), s.14 (one-year bar), s.15 (remarriage), s.19 (jurisdiction), s.21B (expeditious trial), s.23(2) (reconciliation), s.24 (interim maintenance & litigation costs), s.25 (permanent alimony), s.26 (custody), s.27 (joint property), s.28 (appeal) | Most divorce petitions at the Family Court, Lucknow |
| Special Marriage Act, 1954 | s.27, s.28, s.31, s.36–38 | Court/registered marriages, interfaith marriages |
| Family Courts Act, 1984 | s.7 (jurisdiction), s.9 (duty to attempt settlement), s.10 (procedure), s.13 (legal representation), s.14 (evidence), s.19 (appeal to High Court) | How the Lucknow Family Court runs, and why appeals go to the Lucknow Bench |
| BNSS, 2023 | s.144–147 (maintenance, formerly s.125–128 CrPC); s.528 (quashing connected FIRs) | Maintenance claims; ending connected criminal cases on settlement |
| Protection of Women from Domestic Violence Act, 2005 | s.12, 18, 19, 20, 21, 23 | DV applications before the Judicial Magistrate, Civil Court Lucknow, often running alongside the divorce |
| Guardians and Wards Act, 1890; Hindu Minority and Guardianship Act, 1956 | GWA s.7, 17, 25; HMGA s.6, 13 | Custody and guardianship at the Family Court; child's welfare is paramount |
| Other personal laws | Divorce Act 1869; Parsi Marriage and Divorce Act 1936; Dissolution of Muslim Marriages Act 1939; Muslim Women (Protection of Rights on Marriage) Act 2019 | Which statute governs depends on the parties' religion and marriage form |
| Key Supreme Court rulings | *Amardeep Singh v. Harveen Kaur* (2017): waiver of the 6-month period; *Rajnesh v. Neha* (2020): mandatory affidavit of assets and liabilities; *Shilpa Sailesh v. Varun Sreenivasan* (2023): irretrievable breakdown only under Art. 142 by the Supreme Court; *Sureshta Devi v. Om Prakash* (1991): consent can be withdrawn before decree | Reference points the Lucknow Family Court applies daily |

### 5.4 `divorceStages` briefs
The sequence is genuinely family-court specific. It must not be cloned from the civil template.

| # | id / title | forum | Facts that must appear |
|---|---|---|---|
| 1 | `stage-1` Assessment, Safety & Choosing the Route | Chamber consultation; Family Counselling Centre (Parivar Paramarsh Kendra) of UP Police where a complaint is involved | Which statute applies; mutual vs contested; s.14 HMA: no petition within one year of marriage except for exceptional hardship/depravity; immediate safety and DV options; preserving evidence lawfully; a legal notice is optional, not mandatory. **VERIFY** Parivar Paramarsh Kendra naming in Lucknow. |
| 2 | `stage-2` Jurisdiction: Can You File in Lucknow? | Family Court, Lucknow, Wala Qadar Road, Qaiserbagh | s.19 HMA: where the marriage was solemnised, the respondent resides, the parties last resided together, or the wife resides at filing; SMA s.31; residents of other Lucknow Bench districts file in their own district Family Court. NRI respondents. Transfer petitions: s.24 CPC to the High Court for transfer within UP; s.25 CPC to the Supreme Court for inter-state transfer. |
| 3 | `stage-3` Drafting & Filing the Petition | Filing counter / e-filing, Family Court Lucknow | Contested petition under s.13 (grounds pleaded with dates); joint petition under s.13B for mutual consent (settlement terms annexed: alimony, stridhan, custody, withdrawal of cases); affidavits; marriage proof; court fee; vakalatnama. *Rajnesh v. Neha* disclosure affidavit where maintenance is claimed. |
| 4 | `stage-4` Notice, Service & First Appearance | Family Court Lucknow | Service by court process, registered post, or email/WhatsApp where the court permits; ex parte proceedings if the respondent stays away after service; NRI appearance through video-conference (hedged: "where the court permits"). Mutual consent: both parties' statements recorded at the first motion. |
| 5 | `stage-5` Counselling, Mediation & Reconciliation | Family Court counsellors; Mediation Centre at the Civil Court, Lucknow; Lok Adalat (DLSA Lucknow) | Family Courts Act s.9 duty to attempt settlement; HMA s.23(2); confidentiality of mediation; drafting an enforceable settlement deed; what happens if mediation fails. |
| 6 | `stage-6` Interim Maintenance, Custody & Protection | Family Court Lucknow; Judicial Magistrate (DV Act), Civil Court Lucknow | HMA s.24 pendente lite + litigation costs; BNSS s.144 (formerly 125 CrPC); interim custody/visitation (HMA s.26; GWA); DV Act s.23 interim orders; no double recovery: courts adjust amounts across proceedings (*Rajnesh v. Neha*). |
| 7 | `stage-7` Written Statement, Issues & Evidence (Contested) | Family Court Lucknow | Written statement and counter-claims; framing of issues; evidence by affidavit; cross-examination; Family Courts Act s.14 (court may receive any material it considers helpful); s.13 (legal practitioners appear with the court's leave: hedge "in practice, advocates regularly appear with leave"); HMA s.21B: aim to conclude within 6 months (directory, not a guarantee). |
| 8 | `stage-8` Mutual Consent: Second Motion & Cooling-Off Waiver | Family Court Lucknow | s.13B(2): second motion not earlier than 6 months and not later than 18 months after the first; waiver per *Amardeep Singh* (2017) conditions; consent can be withdrawn before decree (*Sureshta Devi*); personal appearance or video-conference where permitted. |
| 9 | `stage-9` Decree, Alimony, Stridhan & Custody Orders | Family Court Lucknow | HMA s.25 permanent alimony (lump sum vs periodic), s.27 property; return of stridhan; custody/visitation schedule; certified copy of decree; s.15 remarriage only after the appeal period lapses or the appeal is dismissed. |
| 10 | `stage-10` Appeal, Enforcement & Closing Connected Cases | Allahabad High Court, Lucknow Bench (appeal under s.19 Family Courts Act); execution in Family Court Lucknow; s.528 BNSS at the Lucknow Bench to quash connected FIRs on settlement | Appeal to the Lucknow Bench for Lucknow-district decrees. **VERIFY** limitation: s.19(3) FCA says 30 days, s.28(4) HMA says 90 days; the copy must say "strict limitation applies; seek advice immediately" unless the firm confirms the position. Execution of maintenance arrears; quashing BNS s.85 / DV / dowry cases on settlement (*Gian Singh*); withdrawal clauses. |

### 5.5 FAQs: add 3 (total 14)
1. "Where is the Family Court in Lucknow and which cases does it hear?"
2. "Can an NRI spouse take part in a Lucknow divorce by video-conference?" (also link `/services/nri-lawyer`)
3. "Where do I appeal a Lucknow Family Court divorce decree?"

### 5.6 Metadata
Keep the title. Description: `'Divorce lawyer in Lucknow: 10-stage guide to mutual and contested divorce, alimony and custody at the Family Court, Qaiserbagh and appeals at the Lucknow Bench.'` (trim to ≤160 chars). The BreadcrumbList already exists; it uses `PAGE_PATH` automatically.

---

## Phase 6: Civil guide on `/services/civil-lawyer-lucknow`

File to edit: `src/app/services/civil-matters/page.tsx` (≈1,190 words today, so this page needs the most new copy). Data goes in `src/lib/guides/civilLucknow.ts`. Same pattern: quick-answer paragraph, TOC after the hero, StatuteTable, GuideStages replacing the existing short numbered-steps block (around file line 467, the block with the `absolute left-[10%] right-[10%] top-[22px]` connector line), ids on existing sections, FAQs extended to 12.

### 6.1 `civilStatutes`
| law | provisions | relevance |
|---|---|---|
| Code of Civil Procedure, 1908 | s.9, 15–20 (forum), 26 & O.VII (plaint), s.80 (notice to Government), s.89 (ADR), s.96 / s.100 (appeals), s.115 (revision), s.148A (caveat), O.V, VIII, X–XIV, XVIII r.4, XX, XXI, XXVI r.9, XXXVIII r.5, XXXIX r.1–2 & r.3, XL, XLI, XLIII, XLVII | Procedure in every civil suit at the Civil Court, Kaiserbagh |
| Specific Relief Act, 1963 (amended 2018) | s.6 (dispossession within 6 months), s.10 (specific performance), s.34 (declaration), s.38–39 (injunctions) | Property, possession and contract suits |
| Limitation Act, 1963 | Art. 58 (declaration, 3 years), Art. 65 (possession on title, 12 years), Art. 113 (residuary, 3 years); s.5 (does not apply to suits) | Whether the suit is still in time |
| Transfer of Property Act 1882; Registration Act 1908; Indian Stamp Act 1899 (as applicable in UP) | TPA s.53A, 54, 58, 105–106; Registration Act s.17, 49 | Sale deeds, agreements to sell, leases, unregistered documents |
| UP Revenue Code, 2006 | s.24 (boundary disputes), s.34–35 (mutation), s.116 (partition of agricultural land), s.144 (declaration of bhumidhari rights), s.206 (bar on civil courts) | Agricultural land goes to the Tehsildar / SDM / Collector / Commissioner, Lucknow Division, and the Board of Revenue. **VERIFY** section numbers before publishing. |
| Commercial Courts Act, 2015 | s.2(1)(c), s.12 (specified value ₹3 lakh+), s.12A (mandatory pre-institution mediation; *Patil Automation v. Rakheja Engineers*, 2022), s.13 (appeals) | Commercial disputes at the Commercial Court, Lucknow |
| Court Fees Act, 1870 (UP amendments) & Suits Valuation Act, 1887 | Ad valorem vs fixed fees; valuation | Decides court fee and the pecuniary forum |
| Legal Services Authorities Act, 1987 | s.19–21 | Lok Adalat awards are final; DLSA Lucknow and the High Court Legal Services Sub-Committee at Lucknow |
| Constitution of India | Art. 227 | Supervisory petitions at the Lucknow Bench against interlocutory orders of the Lucknow civil courts |

### 6.2 `civilStages` briefs
| # | id / title | forum | Facts that must appear |
|---|---|---|---|
| 1 | `stage-1` Pre-Litigation: Records, Notice & Mediation | Chamber; DLSA Lucknow (pre-institution mediation) | Collect title papers (khatauni, registry, mutation), contracts, correspondence; legal notice; s.80 CPC: 2-month notice before suing Government bodies, e.g. LDA, Lucknow Nagar Nigam, State departments (urgent relief under s.80(2) with leave); s.12A Commercial Courts Act mediation for commercial disputes. |
| 2 | `stage-2` Choosing the Right Forum in Lucknow | Civil Court, Kaiserbagh (Civil Judge Junior Division / Senior Division / District Judge); Commercial Court, Lucknow; revenue courts (Tehsil, SDM, Commissioner, Lucknow Division; Board of Revenue); UP-RERA; District Consumer Commissions, Lucknow | Territorial jurisdiction s.16–20 CPC; pecuniary jurisdiction depends on valuation. **VERIFY** the current UP thresholds under the Bengal, Agra and Assam Civil Courts Act, 1887 as amended in UP; without verification, write "depends on the suit's valuation" and give no numbers. Agricultural land goes to the revenue courts (UP Revenue Code s.206 bar). Builder disputes link `/services/rera-lawyer`; consumer disputes link `/services/consumer-motor-accident-matters`. |
| 3 | `stage-3` Drafting & Filing the Plaint | Civil Court Lucknow (filing section / e-filing) | O.VII contents; valuation and court fee; O.VII r.14 documents list; verification and statement of truth; caveat check (s.148A, valid 90 days); e-filing via the eCourts portal. |
| 4 | `stage-4` Urgent Interim Relief | Civil Court Lucknow | O.XXXIX r.1–2 temporary injunction (prima facie case, balance of convenience, irreparable harm); r.3 ex parte with compliance; r.2A disobedience; O.XL receiver; O.XXXVIII r.5 attachment before judgment; appeal against injunction orders under O.XLIII to the District Judge. |
| 5 | `stage-5` Summons & Written Statement | Civil Court Lucknow | O.V service, including electronic; O.VIII r.1: 30 days, extendable to 90; commercial suits: hard 120-day limit (*SCG Contracts v. K.S. Chamankar*, 2019); counter-claim and set-off; ex parte decree and setting it aside (O.IX r.13). |
| 6 | `stage-6` Admission, Discovery & ADR Referral | Civil Court Lucknow; Mediation Centre, Civil Court Lucknow; National Lok Adalat (DLSA Lucknow) | O.XI discovery/inspection; O.XII admissions; O.X examination of parties; s.89 referral to mediation/Lok Adalat; Lok Adalat award final with no appeal (LSA Act s.21); refund of court fee on settlement (hedge). |
| 7 | `stage-7` Framing of Issues | Civil Court Lucknow | O.XIV; issues of law vs fact; preliminary issues (jurisdiction, limitation) decided first where possible. |
| 8 | `stage-8` Evidence, Commissions & Site Inspection | Civil Court Lucknow; Court Commissioner / Amin | O.XVIII r.4 evidence-in-chief on affidavit; cross-examination before court or commissioner; O.XXVI r.9 local investigation / survey commission for boundary and encroachment disputes; certified revenue records; BSA s.63 for electronic evidence. |
| 9 | `stage-9` Final Arguments, Judgment & Decree | Civil Court Lucknow | Written arguments; O.XX judgment and decree; costs (s.35); review O.XLVII; obtaining the certified copy. |
| 10 | `stage-10` Appeal, Second Appeal & Execution | District Judge, Lucknow / Allahabad High Court, Lucknow Bench | s.96 first appeal (forum by valuation; **VERIFY** UP limits); s.100 second appeal to the Lucknow Bench on a substantial question of law; s.115 revision; Art. 227 petitions; O.XXI execution before the executing court in Lucknow (attachment, delivery of possession, arrest in execution as a last resort); stay of execution (O.XLI r.5). |

### 6.3 FAQs (extend to 12)
Add the Lucknow-specific questions, for example:
- "Should I file in the civil court or the revenue court for land in Lucknow?"
- "Do I need to send a notice to LDA or Nagar Nigam before suing?"
- "What is a commercial suit and where is it filed in Lucknow?"
- "Can a Lucknow civil court order a survey of my plot boundary?"
- "Where does an appeal from a Lucknow civil court decree go?"

---

## Phase 7: New page `/services/high-court-lawyer-lucknow`

This is the competitor gap: B&B has no High Court page (404).

### 7.1 Build
1. Copy `src/app/services/constitutional-writ-matters/page.tsx` to `src/app/services/high-court-lawyer-lucknow/page.tsx` as the structural template. It has the same Navbar/hero/team/sections/FAQ/CTA/FirmCredentials/Footer shape.
2. Set `const PAGE_PATH = '/services/high-court-lawyer-lucknow'` and use it for canonical, OG url and JSON-LD url.
3. Metadata:
   - title absolute: `'High Court Lawyer in Lucknow | Lucknow Bench Advocates | Sumanjari'`
   - description: `'High Court lawyers in Lucknow for writs, bail, Section 528 BNSS quashing, civil and criminal appeals and service matters at the Allahabad High Court, Lucknow Bench.'`
   - keywords: `'High Court Lawyer Lucknow'`, `'Lucknow Bench Advocate'`, `'Allahabad High Court Lucknow Bench Lawyer'`, `'High Court Advocate Gomti Nagar'`, `'Writ Petition Lawyer Lucknow High Court'`, `'Bail Lawyer Lucknow High Court'`
4. H1: `High Court Lawyers <em className="text-gold-gradient">in Lucknow</em>`. Eyebrow: "Allahabad High Court, Lucknow Bench".
5. Lead and team: `jitendra-tiwari` as lead; carousel `['aishwarya-pandey', 'aditya-narayan-shukla', 'priyesh-dwivedi', 'adarsh-pratap-singh', 'devesh-tiwari']`. **VERIFY** with the firm who should appear.
6. Blogs: `getBlogPostsByCategory('Constitutional & Writ Matters')`.
7. JSON-LD: `LegalService` (`areaServed` = the 16 districts as `{ '@type': 'AdministrativeArea', name }` + Uttar Pradesh), `FAQPage`, `BreadcrumbList`.

### 7.2 Sections (≈1,800–2,200 words)
1. Quick answer (50–70 words): the Lucknow Bench sits at Vibhuti Khand, Gomti Nagar, hears cases from 16 Awadh districts, and the firm's chamber is Block D-311.
2. **About the Lucknow Bench**: history (Chief Court of Oudh → 1948 amalgamation → Lucknow Bench); new Gomti Nagar campus; Oudh Bar Association; why the bench matters for residents of these districts.
3. **Districts under the Lucknow Bench**: grid of the 16 districts (**VERIFY**). Note that the rest of UP goes to the Principal Seat at Prayagraj, and the firm also appears at Prayagraj (link `/team` or the home page).
4. **Matters we handle at the Lucknow Bench**, each linking to the relevant service page:
   - Writ petitions under Art. 226/227 → `/services/constitutional-writ-matters`
   - Criminal Misc. bail and anticipatory bail, s.528 BNSS quashing, criminal appeals/revisions → `/services/criminal-lawyer-lucknow#stage-7`
   - First appeals, second appeals, FAFOs, Art. 227 against civil-court orders → `/services/civil-lawyer-lucknow#stage-10`
   - Family Court appeals (s.19 FCA) → `/services/divorce-lawyer-lucknow#stage-10`
   - Service matters → `/services/service-advocate`; tax/revenue → `/services/tax-revenue-advocate`; RERA appeals → `/services/rera-lawyer`; DRT/SARFAESI writs → `/services/banking-recovery-matters`
   - PIL, contempt, arbitration appeals (s.37 Arbitration Act)
5. **How a case moves at the Lucknow Bench: 8 steps** (use `GuideStages` with 8 stages, id `hc-procedure`): case papers and certified copies → drafting petition/appeal + affidavit → e-filing / filing counter, stamp reporting (defects) → listing (fresh cases, cause list on allahabadhighcourt.in) → admission / notice / interim order → counter affidavit and rejoinder → final hearing → judgment, certified copy, compliance or SLP. Hedge all timing.
6. **Mediation & legal aid at the Lucknow Bench**: Mediation and Conciliation Centre; High Court Legal Services Sub-Committee, Lucknow. **VERIFY** official names.
7. FAQs (8–10): "Which High Court bench will hear my case from Sitapur/Barabanki?", "Can I file directly in the High Court without going to the district court?", "What is stamp reporting?", "How do I check my case status and cause list?", "Is video-conference hearing possible?", "What is the difference between a writ and an appeal?", "What documents do I need for a High Court petition?", "How are High Court fees decided?".
8. CTA (same pattern as other pages).

### 7.3 Wire-up
- `src/app/sitemap.ts`: add `{ url: \`${SITE_URL}/services/high-court-lawyer-lucknow\`, changeFrequency: 'weekly', priority: 0.8 }`.
- `src/components/Footer.tsx`: the entry noted in 2.6.
- `src/lib/llms/index.ts`: add to `SERVICE_LINKS` (`title: 'High Court Lawyer in Lucknow (Lucknow Bench)'`) and add the path to the `constitutional-writ` guide's `servicePaths`.
- Link **to** this page from: the criminal Stage 3/7/10 bodies, divorce Stage 10, civil Stage 10, and the constitutional-writ-matters page intro (one inline `<Link>`), so it gets internal links at launch.
- Optional schema fix in `src/app/layout.tsx` `legalServiceJsonLd.address.streetAddress`: `'Chamber No. Block D – 311, Allahabad High Court, Lucknow Bench, Vibhuti Khand, Gomti Nagar'`, plus `postalCode: '226010'`. **VERIFY** the PIN code.

---

## Phase 8: Rollout order

| PR | Contents | Risk | Deploy independently? |
|---|---|---|---|
| 1 | Phase 1 (disclaimer move) | none | yes, ship first |
| 2 | Phase 2 (slugs, redirects, all link/registry updates, Code.gs) | medium (ranking fluctuation) | yes. Run the GSC steps right after deploy |
| 3 | Phase 3 + Phase 4 (components + criminal guide) | low | yes |
| 4 | Phase 5 (divorce guide) | low | yes |
| 5 | Phase 6 (civil guide) | low | yes |
| 6 | Phase 7 (High Court page + wire-up) | low | yes |

Content PRs 3–6 need an advocate's sign-off on every `// VERIFY` before merge.

---

## Phase 9: Verification checklist (run for every PR)

### 9.1 Build and lint
```bash
npm run lint && npm run build
```

### 9.2 Structure (local `npm run start`)
```bash
P=services/criminal-lawyer-lucknow
curl -s http://localhost:3000/$P | grep -c 'id="stage-'              # expect 10
curl -s http://localhost:3000/$P | grep -o 'href="#stage-[0-9]*"' | sort -u | wc -l   # expect 10 (TOC links)
curl -s http://localhost:3000/$P | grep -c '<h1'                     # expect 1
```
In a browser, click every TOC link. The heading must land below the fixed navbar, not hidden under it; that is what `scroll-mt-28` is for.

### 9.3 Word count (main content, excluding footer)
```bash
python3 - <<'EOF'
import re, html, urllib.request
for p in ['services/criminal-lawyer-lucknow','services/divorce-lawyer-lucknow','services/civil-lawyer-lucknow','services/high-court-lawyer-lucknow']:
    s = urllib.request.urlopen('http://localhost:3000/'+p).read().decode()
    seg = s[s.find('<h1'):s.rfind('<footer')]
    seg = re.sub(r'<(script|style)[^>]*>.*?</\1>', '', seg, flags=re.S)
    print(p, len(html.unescape(re.sub(r'<[^>]+>', ' ', seg)).split()))
EOF
```
Targets: criminal, divorce and civil ≥ 3,000 (≈2,500 of guide copy plus existing sections); High Court ≥ 1,800.

### 9.4 Content guardrails
```bash
grep -n -i -E "chandigarh|punjab|haryana|mohali|panchkula|ludhiana|dehradun|tis hazari|saket|in delhi|best |top |no\.? ?1|guarantee|100%|success rate" src/lib/guides/*.ts
# expect: no output
grep -n "VERIFY" src/lib/guides/*.ts src/app/services/high-court-lawyer-lucknow/page.tsx
# expect: no output before merge (all confirmed and comments removed)
```

### 9.5 Structured data
Paste each new URL into https://search.google.com/test/rich-results after deploy. FAQPage, BreadcrumbList and LegalService must parse with no errors.

### 9.6 llms
`curl -s https://www.sumanjariadvocates.com/llms.txt | grep -E "lucknow"` must show the new `-lucknow` URLs. The `llms` routes cache pages for 7 days. To refresh immediately, call `/api/revalidate?secret=…` (existing route, revalidates the `blogs` tag that the llms page fetches use).

---

## Phase 10: What NOT to change (keeps current workflows intact)
- `Disclaimer.tsx` behaviour (delay, localStorage key `sumanjari_disclaimer_response`, Google Sheets logging, scroll lock).
- Blog categories in the Google Sheet. Only the slug mapping values change, in `src/lib/blogs.ts` and `Code.gs`.
- `/llms/<slug>.txt` file slugs (`criminal-matters`, `civil-matters`, `family-matrimonial`).
- Folder names `criminal-matters/` and `civil-matters/`. They stay as the implementation files, as with the existing tax/family/service aliases.
- Homepage `Services.tsx` card layout. Only two `href` values change; no new card.
- `rera-lawyer`, `rera-lawyer-noida-ghaziabad`, `family-advocate`, `nri-lawyer` URLs.

## Appendix A: Files touched (complete list)
- `src/app/layout.tsx` (P1; optional address P7)
- `src/components/Disclaimer.tsx` (P1 optional a11y only)
- `next.config.js` (P2)
- `src/app/services/criminal-lawyer/` → `criminal-lawyer-lucknow/` (P2, git mv)
- `src/app/services/civil-advocate/` → `civil-lawyer-lucknow/` (P2, git mv)
- `src/app/services/divorce-lawyer/` → `divorce-lawyer-lucknow/` (P2 git mv; P5 content)
- `src/app/services/criminal-matters/page.tsx` (P2 URLs; P4 content)
- `src/app/services/civil-matters/page.tsx` (P2 URLs; P6 content)
- `src/app/services/property-land-matters/page.tsx`, `banking-recovery-matters/page.tsx`, `cyber-crime-lawyer/page.tsx`, `family-matrimonial-matters/page.tsx`, `constitutional-writ-matters/page.tsx` (link updates; P7 inline link)
- `src/components/Services.tsx`, `src/components/Footer.tsx` (P2, P7)
- `src/lib/blogs.ts`, `src/lib/llms/index.ts`, `src/app/sitemap.ts` (P2, P7)
- `google-apps-script/Code.gs` (P2, plus a manual redeploy in the Apps Script editor)
- NEW: `src/lib/guides/types.ts`, `src/components/LucknowGuide.tsx` (P3)
- NEW: `src/lib/guides/criminalLucknow.ts` (P4), `divorceLucknow.ts` (P5), `civilLucknow.ts` (P6)
- NEW: `src/app/services/high-court-lawyer-lucknow/page.tsx` (P7)

## Appendix B: Consolidated VERIFY list (advocate sign-off before publishing)
1. The 16 districts under the Lucknow Bench.
2. UP pecuniary limits for Civil Judge (JD/SD) and the first-appeal forum (Bengal, Agra and Assam Civil Courts Act, 1887 as amended in UP).
3. Limitation for appeal from a Family Court decree (s.19(3) FCA, 30 days vs s.28(4) HMA, 90 days) as applied by the Allahabad HC.
4. Current operation of Family Welfare Committees / the *Mukesh Bansal* cooling period in Lucknow after *Shivangi Bansal* (2025).
5. UP Revenue Code 2006 section numbers cited (s.24, 34–35, 116, 144, 206).
6. Official names: Mediation Centre at the Civil Court Lucknow; Mediation and Conciliation Centre and Legal Services Sub-Committee at the Lucknow Bench; Parivar Paramarsh Kendra; UPCOP FIR download.
7. Whether designated NI Act / Special Courts in Lucknow should be named, and their current designations.
8. Lucknow Bench PIN code and the exact chamber address string for schema.
9. Team members to feature on the High Court page.
10. All case-law names and years cited in the guides.
