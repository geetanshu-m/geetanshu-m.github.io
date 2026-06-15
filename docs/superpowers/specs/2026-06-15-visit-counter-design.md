# Visit Tracking — Design

**Date:** 2026-06-15 (revised 2026-06-16)
**Status:** Implemented

## Goal
Track visits to the portfolio for analytics. No on-page visible counter badge.

## Constraints
- Site is a **static** Nuxt build deployed to GitHub Pages — no backend available.

## Decision history
- Initial build added a free-counter (Abacus) badge in the top-right corner.
- Revised to **Google Analytics 4 only**: dashboard analytics, no visible badge.
  The Abacus badge component (`components/VisitCounter.vue`) and its layout
  mount were removed.

## Approach: Google Analytics 4
Add the standard GA4 `gtag.js` snippet to the global document head via
`nuxt.config.js` so it loads on every page. Visits are recorded in the GA4
dashboard (analytics.google.com).

- Measurement ID: `G-YTWW4M480V`
- Implemented as `head.script` entries + `__dangerouslyDisableSanitizers: ["script"]`
  so the inline init script is preserved.

## Why no on-page badge
GA4 does not expose a public total-views number for client-side fetch. Reading GA
data requires the Analytics Data API with a service-account credential, which
cannot be safely embedded in a static site — it would need a serverless backend.
That was out of scope, so the visible badge was dropped.

## Out of scope
- On-page live visit count.
- Server-owned counter / GA Data API proxy.
