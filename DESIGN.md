# Zavari — Design System
*Derived from Claude Design output on 2026-06-25 · Phase 3 · Skill: 3-concept v2.0*

> Machine-readable design system for Phase 6 implementation. **Derived from** the Claude Design system synced to `design-system/` (Project 1: `bb939380-72d9-4244-8de9-89dfd66eb43f`) — not speculated. The authoritative token source is [`design-system/colors_and_type.css`](design-system/colors_and_type.css); the human-readable rendering is [`design-system/brand.html`](design-system/brand.html). Token values below are copied from that output — if they ever diverge, the synced CSS wins.
>
> **Stack note:** product UI is built in **Tailwind CSS** (Phase 6). The token set is flat and semantic so it maps directly onto a Tailwind theme (`theme.colors.brand.*`, `theme.colors.neutral.*`, `theme.colors.status.*`, plus semantic aliases). Prefer the semantic aliases (`--color-*`) in product code over raw brand values.

## Color tokens

```css
:root {
  /* Brand */
  --zv-navy:            #0A1F44;   /* dominant structure/brand (60–70%); dark bg; headings on light. NOT body text */
  --zv-navy-deep:       #07101E;   /* gradient partner — hero depth */
  --zv-cyan:            #00D4FF;   /* expressive accent — graphic only; NEVER type on light (~1.8:1) */
  --zv-azure:           #0099FF;   /* functional accent — links, interactive */

  /* Neutral (warm) */
  --zv-document-black:  #1C1714;   /* primary body text on light */
  --zv-soft-white:      #F6F5F1;   /* primary light background */
  --zv-white:           #FFFFFF;   /* card surface; reversed text on navy */
  --zv-cool-gray:       #E0E6ED;   /* dividers, borders, inactive */
  --zv-accent-gray:     #808A9B;   /* secondary text, captions */
  --zv-cool-gray-soft:  #EDF0F4;   /* subtle fill, zebra row */

  /* Semantic / status (separate group — NOT brand color) */
  --zv-success:         #38A169;
  --zv-warning:         #D69E2E;
  --zv-error:           #E53E3E;
  --zv-info:            #0099FF;    /* = azure */
  /* 8% tints for alert/banner surfaces; --zv-azure-tint #0099FF @15% = table highlight row */

  /* Semantic aliases — USE THESE IN PRODUCT CODE */
  --color-bg:           var(--zv-soft-white);    /* page canvas */
  --color-surface:      var(--zv-white);         /* cards, panels */
  --color-surface-sunken: var(--zv-cool-gray-soft);
  --color-ink:          var(--zv-document-black); /* body text */
  --color-heading:      var(--zv-navy);           /* headings, structure */
  --color-secondary:    var(--zv-accent-gray);    /* captions, meta */
  --color-border:       var(--zv-cool-gray);      /* dividers, borders */
  --color-link:         var(--zv-azure);          /* links */
  --color-link-hover:   #007ACC;
  --color-accent:       var(--zv-cyan);           /* graphic accent only */
  --color-focus:        var(--zv-azure);          /* focus ring */
  /* dark-surface: --color-bg-dark=navy, --color-ink-dark=white, --color-secondary-dark=cool-gray */

  --gradient-navy:      linear-gradient(160deg, #0A1F44 0%, #07101E 100%);
  --focus-ring:         0 0 0 2px var(--zv-soft-white), 0 0 0 4px var(--zv-azure);
}
```

## Typography

**Display/Heading:** IBM Plex Serif — Google Fonts.
**Body/UI:** IBM Plex Sans — Google Fonts.
**Mono/Data:** IBM Plex Mono — Google Fonts.
Single source: `@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@300;400;600&family=IBM+Plex+Serif:wght@500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');`
Weights: light 300 · regular 400 · medium 500 · semibold 600.

### Type scale (document / web, desktop px)
| Role | Family | Weight | Size | Line height | Usage |
|---|---|---|---|---|---|
| display / h1 | Serif | 600 | 40px | 1.15 | Page title, brief question |
| h2 | Serif | 600 | 30px | 1.2 | Section heading |
| h3 | Serif | 500 | 22px | 1.3 | Sub-section, card title |
| subhead | Sans | 600 | 18px | 1.4 | Subheading above body |
| body-lg | Sans | 400 | 18px | 1.6 | Long-form reading |
| body | Sans | 400 | 16px | 1.6 | Default UI/body |
| label / button | Sans | 600 | 14px | 1 | UI label, button |
| caption / source | Mono | 400 | 12px | 1.45 | Source/metadata (Sans Light 300 for prose footnotes) |
| stat callout | **Serif** | 500 | 56px | 1 | Big-number metric figure |
| data label | Mono | 400 | 16px | — | Metric label |
| code | Mono | 400 | 14px | — | Code / technical strings |

Eyebrow/uppercase tracked label: Sans 600, 12px, `letter-spacing: 0.08em`, uppercase, `--color-secondary`.

> **Intentional deviation from the brand guide:** the Stat Callout figure is **IBM Plex Serif Medium**, not Mono. Claude Design chose an editorial Serif number ("a confident figure, not cold telemetry") to serve the *authoritative-yet-warm* register. The Mono **data label** beneath it preserves precision. This is deliberate and approved as the system's choice.

## Spacing scale
Base unit **8px**, multiples only: `--space-half 4` · `--space-1 8` · `--space-2 16` · `--space-3 24` (card padding / gutter) · `--space-4 32` · `--space-6 48` (min page-edge margin) · `--space-8 64` (between sections). Grid: `--gutter 24px`, `--max-content 1200px`.

## Border radius
`--radius-button 4px` · `--radius-input 4px` · `--radius-card 6px` · `--radius-pill 999px` (tags/chips only).

## Elevation & motion
Soft navy-tinted shadows: card `0 2px 8px rgba(10,31,68,.08)` · raised `0 6px 20px rgba(10,31,68,.12)` · overlay `0 16px 40px rgba(10,31,68,.18)`. Motion calm, no bounce: ease `cubic-bezier(0.2,0,0,1)`; durations 120/180/260ms.

## Component definitions
Plain-CSS utility classes live in [`design-system/tokens/components.css`](design-system/tokens/components.css); React components + prop APIs in [`design-system/components/`](design-system/components/) (`.jsx` + `.d.ts` + `.prompt.md` per component). Summary:

### Button (`.zv-btn`) — Core
Sans 600 / 14px · padding 12px 24px · radius 4px · 1.5px border · focus ring on `:focus-visible`. Variants: **primary** (cyan bg / navy text), **secondary** (white bg / navy text / navy border), **ghost** (transparent / navy / current-color border), **destructive** (error bg / white). Disabled: opacity .45. One primary per section.

### Input (`.zv-input`) + label (`.zv-label`) — Core
White surface, 1px border, radius 4px, padding 10px 12px. Focus: azure border + `0 0 0 3px` info-tint ring. Error: error border + error-tint ring **and** a message string (never color alone).

### Card (`.zv-card`) — Core
`--color-surface`, 1px `--color-border`, radius 6px, padding 24px, card shadow. Title: Serif 600 22px navy. Body: Sans 16px document-black. **Never a colored background** — color lives in the contents.

### Badge (`.zv-badge`) — Core
Sans 600 12px, pill radius, 1px border. Neutral default; success/warning/error/info variants use tinted bg + darkened text (state always carries a word/icon, not color alone).

### Alert (`.zv-alert`) — Feedback
4px left accent border over an 8%-opacity tint (never full-fill). Variants info/success/warning/error.

### StatCallout (`.zv-stat`) — Data
Serif Medium 56px figure (`.zv-stat__num`; white on navy via `.on-dark`) + Mono `.zv-stat__label`. Optional Sans 600 24px unit, Mono trend.

### SourceTag (`.stag`) — Intelligence *(signature)*
Provenance chip tying a conclusion to its source — vendor-neutral. Gray dot = connected third-party source; **cyan dot = Zavari first-party**, a first-class peer (never a lesser tier). Optional confidence segment is labelled in words. Use in clusters under a conclusion; keep no single vendor dominant. Props: `source`, `count?`, `confidence?`, `kind?`.

### CoherenceFlag (`.cflag`) — Intelligence *(signature)*
Zavari's signature insight: does this bet ladder to the north star? Built from the **triangulation motif** — three signal lines that converge to one point when coherent and split as conflict grows. States: `coherent` (cyan, converge) · `drifting` (azure) · `conflict` (warning, split). State is **always paired with a word**. Use inline in roadmap rows, brief headers, coherence views. Props: `state`, `detail?`, `label?`.

## Hard rules (copied from `design-system/SKILL.md` — never violate)
- **Logo** — use `assets/` SVGs as-is; never redraw, recolor, distort, invert. Light lockup on light, dark on Navy, icon-only below ~120px. Stacked + horizontal lockups both available.
- **Color roles** — Cyan never type on light (fails AA); Navy never running body text (use Document Black); Cyan sparing, like punctuation.
- **State is never color alone** — always a label, icon, or shape too.
- **Every interactive element has a visible focus state**; maintain AA contrast.
- **Form** — 8px spacing base; 4px radius controls / 6px cards; no colored card backgrounds; whitespace (never a rule-line) separates a heading from its body.
- **Type stays in IBM Plex** — Serif for headings + the stat figure, Sans for body/UI, Mono for data/code/captions. No fourth typeface.

## Phase 6 implementation notes
- Always use CSS custom properties / Tailwind theme tokens — never hardcode hex.
- Link `design-system/styles.css` (it imports `fonts.css` → `colors_and_type.css` → `tokens/components.css`), or map `colors_and_type.css` into the Tailwind theme.
- Reference `design-system/components/**` (React) and `design-system/preview/**` (specimen cards) as implementation targets.
- `SourceTag` and `CoherenceFlag` are the signature patterns — make traceable trust and strategic coherence native to product surfaces.
- **Asset placement:** `design-system/assets/` currently holds web-deploy assets Claude Design generated (`site.webmanifest`, favicons, `favicon.svg`, PWA icons). These belong at the **web root / `public/`** of the Phase 6 app (or the concept deploy), not in the design system long-term. Relocate when an app/deploy exists. Logo SVGs (stacked + horizontal, light/dark + icon) are design-system assets and stay.
