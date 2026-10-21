# Code Review Report

Reviewed: 2026-10-21

Scope: all tracked application files under `src/`, `index.html`, Vite configuration, and package metadata. The review was read-only; no application code was changed.

## Summary

| Priority | Confirmed issues |
| --- | ---: |
| P0 — Critical | 0 |
| P1 — High | 0 |
| P2 — Medium | 2 |

The repository is a small static React/Vite landing page. It contains no backend, API routes, authentication, authorization, database access, persistence, or server-side validation to review. Therefore no P0/P1 findings are reported for those categories.

## P2 findings

### P2-001 — Home link breaks when the app is deployed below the origin root

- **Priority:** P2
- **File/lines:** `src/components/Brand.jsx:3`
- **Root cause:** The brand link uses the absolute-root URL `/`. Vite is not configured with a base path, and the component does not derive the app base URL or use a deployment-aware URL.
- **Reproduction:**
  1. Deploy the built app under a subpath such as `https://example.test/starter/` without serving the whole origin root as this app.
  2. Open `/starter/` and click `React Starter`.
  3. The browser navigates to `https://example.test/` instead of `/starter/`.
- **Expected:** The home link returns to the current application’s entry point (`/starter/` in the example).
- **Actual:** It navigates to the origin root, which can produce a 404 or open a different application.
- **Suggested fix:** Make the deployment base explicit and use it consistently, for example by configuring Vite’s `base` and generating the link from the configured base, or by using a relative link appropriate to the deployment model.
- **Confirming test:** Render `Brand` with the app configured for `/starter/`, click the link, and assert that the destination is `/starter/` rather than `/`.
- **Status:** Confirmed for any supported subpath deployment; not applicable when the app is guaranteed to be hosted at the origin root.

### P2-002 — Meaningful visible illustration text is hidden from assistive technology

- **Priority:** P2
- **File/lines:** `src/components/HeroArt.jsx:3-10`
- **Root cause:** The entire illustration is exposed as a single `role="img"` with `aria-label="Abstract colorful illustration"`. In this pattern, descendant content is treated as presentational for accessibility, so the visible text `your idea` / `starts here.` is not separately available to screen readers.
- **Reproduction:**
  1. Open the page with a screen reader enabled.
  2. Navigate to the illustration.
  3. Inspect or listen to its accessible representation.
- **Expected:** The accessible representation either includes the meaningful visible card text or clearly marks that text as intentionally decorative.
- **Actual:** The accessible representation is only `Abstract colorful illustration`; the visible card copy is omitted.
- **Suggested fix:** If the card copy is meaningful, expose it through a labelled element or a descriptive relationship and use appropriate semantics for the artwork. If it is decorative, explicitly mark the artwork/card as decorative and ensure no user-relevant information is conveyed only visually.
- **Confirming test:** Run an accessibility-tree assertion with Testing Library/axe or a browser accessibility inspector and verify that `your idea` and `starts here.` are available when they are intended as content.

## Areas with no supported findings

- **P0:** No critical security, data-loss, or core-application failure was found. The project has no authentication, persistence, or server-side surface.
- **P1:** No serious API, database, authorization, or core functionality failure was found. The only stateful interaction is the local button label change in `src/App.jsx:26-29`.
- **Backend/API/database/authentication:** None are implemented in this repository, so there are no corresponding defects to report.

## Potential risks not counted as confirmed bugs

- `src/styles.css:1` depends on Google Fonts at runtime. Offline or blocked requests fall back to generic fonts; this is a resilience/design risk, not a confirmed functional failure.
- There is no error boundary, automated test suite, or runtime input validation. The current static component/data paths do not provide a reproducible failure from those omissions, so they are not classified as confirmed issues.

