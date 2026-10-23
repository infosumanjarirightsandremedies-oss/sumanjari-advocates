# Runtime Validation Report

Updated: 2026-10-23T18:48:49Z

## Release Verdict

**PASS for the exercised code/runtime gates. External delivery and deployment configuration still require sign-off.**

Both reported code findings are fixed: the initial theme render is deterministic, and the RERA appeal card now distinguishes penalty deposits from the amount payable to an allottee. The optimized build and all 212 automated checks pass. Twelve production-browser scenarios covering saved light/dark preferences across mobile and desktop reloads produce no page errors.

## Target and Environment

- Target: the current release worktree, including the service, routing, SEO and focused theme/RERA fixes.
- Build ID: `4cHrpipUCBQTbFn1c85Cu`.
- Production server: `npm run start -- --port 3100`; restarted with the corrected build, ready in 170 ms.
- Preview: <http://localhost:3100>.
- Node.js: v22.14.0.
- Browser: VS Code Playwright browser tools, using the production server, not the development server.
- Docker: unavailable; no container-managed services are required by this application. Hosted integrations were not replaced by an in-memory database.
- Existing automated test suite: none found before validation. Four runnable Node test files now cover release journeys and the theme regression without adding dependencies.
- Application source changed after the validated build: none.

## Resolved Findings

### Resolved P1: Saved light theme caused production hydration errors

- Source: [src/components/ThemeProvider.tsx](src/components/ThemeProvider.tsx#L23), particularly the state initializer at line 35; [src/components/ThemeToggle.tsx](src/components/ThemeToggle.tsx#L17) renders theme-dependent markup.
- Reproduction: open the production site, accept the disclaimer, switch to light mode, and reload. Equivalently, set `localStorage.theme` to `light` and reload.
- Before the fix: five React errors 418 and one error 423, indicating a server/client hydration mismatch and client-side recovery. Reload with a saved dark theme produced no page errors.
- Original cause: the server initialized the theme as dark while the first client render read the saved light theme. Theme-dependent button markup differed during hydration. Suppressing hydration warnings on the body did not make descendant markup identical.
- Fix: initialize state to dark on both the server and first client render, then restore both context state and the DOM class from storage in an effect. The saved preference and toggle behavior are retained.
- Verification: five isolated initial-markup regressions pass; all 12 saved-theme reload scenarios pass on home, NRI and canonical RERA at 375 px and 1440 px. The hydrated toggle and subsequent reload also pass, with zero page errors.

### Resolved P2: RERA page contradicted its own promoter pre-deposit explanation

- Source: [src/app/services/rera-lawyer/page.tsx](src/app/services/rera-lawyer/page.tsx#L236).
- Before the fix, the matters card described a generic mandatory 30% promoter pre-deposit. The rights card at line 114 and the expanded guide distinguished a penalty percentage from the total amount payable to an allottee, as applicable.
- Fix: the short card now states at least 30% of a penalty, or a higher percentage set by the Tribunal; the total amount payable to the allottee including interest and compensation; or both, as applicable.
- Verification: a live production HTTP regression checks these distinctions within the rendered appeal card and rejects the former generic wording.

### Deployment and Maintainability Warnings

- `MAIL_FROM_DOMAIN` is unset in the local environment. The route therefore uses the Resend sandbox sender. Verify a sender domain and the actual Vercel production settings before relying on client confirmation emails or office delivery. Provider delivery and mailbox receipt were not tested.
- [google-apps-script/Code.gs](google-apps-script/Code.gs#L193) still maps RERA to `rera-lawyer`, whereas the app uses `rera-lawyer-lucknow`. The old URL successfully redirects, so the route is not broken, but the documented mapping mirror should be synchronized when deploying the Apps Script.
- Corporate FAQ schema and visible insight cards are maintained separately and have different wording for the commercial-dispute question. Their meaning is similar; consolidation is recommended to prevent drift. See [src/app/services/company-corporate-lawyer-lucknow/page.tsx](src/app/services/company-corporate-lawyer-lucknow/page.tsx#L120).
- Apps Script changes are local source changes only; this validation did not deploy them to Google.

## Build and Static Evidence

| Check | Result |
| --- | --- |
| `npm run build` | PASS, exit code 0; 81 pages generated |
| Next.js build lint/type gates | PASS |
| `git -c core.whitespace=cr-at-eol diff --check HEAD` | PASS, exit code 0; preserves the theme file's existing CRLF style |
| Source/build freshness check | PASS; no application edits after build |

## Runnable HTTP Integration Tests

Command:

```sh
npm run build
npm run start -- --port 3100
# In another terminal:
PRODUCTION_BASE_URL=http://localhost:3100 npm test
```

Final result: **212 passed, 0 failed, 0 skipped; exit code 0**. This comprises 207 HTTP integration checks and five isolated theme initial-render regressions.

- [tests/production/routes.test.cjs](tests/production/routes.test.cjs): all 23 service routes, canonical URLs, one H1, team-first contents, unique anchors, FAQ JSON-LD, firm credentials, 20 legacy redirects with query preservation, sitemap and robots.
- [tests/production/blog-and-links.test.cjs](tests/production/blog-and-links.test.cjs): published archive-to-article journeys, direct service links, primary internal navigation, and LLM discovery documents.
- [tests/production/api-safety.test.cjs](tests/production/api-safety.test.cjs): missing/incorrect cache-revalidation credentials, all four form types rejecting incomplete data, invalid email/phone rejection, invalid image IDs, and missing routes.
- [tests/production/theme-hydration.test.cjs](tests/production/theme-hydration.test.cjs): identical initial server/client markup for light, dark, invalid and absent preferences, plus initial rendering with unavailable browser storage. These component checks complement, rather than replace, the actual production-browser reload checks.
- The first run incorrectly assumed FAQ JSON-LD must be a standalone object. Divorce and High Court use valid arrays. The test parser was corrected to support arrays and `@graph`, and the same suite was rerun successfully. No page/schema change was necessary.

## Browser Evidence

- Initial release validation checked all 17 canonical service pages at 375 px and 1440 px: **34/34 layout and lead-photo checks passed** after waiting for responsive image selection and loading. The focused remediation changed no page layout or asset code.
- All service pages: one H1, no horizontal page overflow, working contents targets, and Our Team as item 1.
- FAQ questions/answers match schema literally on 16 pages; corporate has the wording difference noted above, not a missing schema.
- Passed: disclaimer acceptance and persistence across reload; mobile menu open/close; RERA blog filtering; article-to-new-canonical-service navigation; team jump clearing the sticky header; NRI FAQ open/close; and empty contact form rejection without a submission request.
- Post-fix saved-theme matrix: home, NRI and canonical RERA, each with light and dark preferences at 375 px and 1440 px: **12/12 passed**, including a full reload in every scenario. Stored preferences, hydrated toggle labels, DOM theme and viewport fit agree; page errors: **0**.
- Post-fix hydrated toggle event, persistence and reload: **PASS**. The check waits for the control to hydrate before invoking it.
- Screenshots captured in the VS Code browser include mobile NRI contents, the desktop canonical RERA hero, and the decoded RERA lead photo in restored light mode.
- Browser writes were blocked before transport. No lead, publication, email, or disclaimer-log record was intentionally created.

Browser assertions ran through the VS Code Playwright tool, which reports assertion errors rather than a shell exit code. The earlier light-theme failure is resolved, not waived. An initial rerun paused on animation-frame waits because the editor's browser tab was hidden; the final passing run uses bounded DOM-state polling and explicitly waits for hydration.

## Deliberately Unverified Boundaries

- Successful email delivery, receipt, and customer auto-confirmation.
- Lead-sheet persistence, publication upload/moderation, and external Google Apps Script writes.
- Authorized production cache invalidation; only unauthorized rejection was exercised.
- Deployed Vercel environment variables, Google deployment revisions, CDN behavior, DNS/TLS, Search Console indexing, and live production hosting.
- Independent verification of user-supplied case/experience figures and professional legal sign-off of the service text.

## Final Gate Summary

```text
startup: PASS - corrected production server ready in 170 ms
build: PASS - exit_code: 0
automated_suite: PASS - exit_code: 0; passed: 212; failed: 0; skipped: 0
e2e: PASS - 12 saved-theme reload scenarios and hydrated toggle/reload; zero page errors; browser tool has no process exit code
overall: NEEDS_SIGNOFF - reported code blockers resolved; external delivery/deployment boundaries remain unverified
```

The two reported code findings are corrected and revalidated against the new production build. A controlled delivery/persistence test and confirmation of the actual deployment configuration are still needed for complete form-submission and deployment sign-off. The warning items above are not represented as fixed or independently verified.