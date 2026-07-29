---
name: zavari-design
description: Generate well-branded interfaces and assets for Zavari. Brand colors, type tokens, fonts, logo assets, and component patterns.
user-invocable: true
---

# Zavari Design System

**Zavari** is a strategy-intelligence product for senior product leaders. It triangulates qualitative, quantitative, and market signal across a team's stack to surface where strategy is *incoherent* — bets that conflict or don't ladder to the north star — with every conclusion traceable to its sources. It meets teams two ways, both first-class: connect the existing stack, or adopt Zavari's own lightweight research / roadmap / planning tools.

## Brand personality

The clear-eyed practitioner — an instrument built by a CPO, for CPOs, that needs no manual.

- **Precise** — specific language over superlatives; *defensible* and *auditable*, not *breakthrough* and *transformative*.
- **Peer-to-peer** — talks with product leaders, not at them. Assumes competence, respects time.
- **Multiplier-oriented** — leads with what Zavari *enables*, not what it eliminates.
- **Honest about stage** — seed-stage, building in public; earns confidence through evidence, not volume.
- **Authoritative yet intuitive** — the core tension: trustworthy on sight, oriented instantly. Lean warmer and more approachable than typical enterprise-intelligence tools — Stripe's trust × Notion's approachability × Linear's effortlessness.

## Still-true constraints (hard rules)

- **Logo** — use the SVGs in `assets/` as-is. Never redraw, recolor, distort, or invert. Light lockup on light, dark lockup on Navy, icon-only below ~120px. Stacked and horizontal lockups are both available — the horizontal places the mark left of the wordmark for headers and wide spaces.
- **Color roles** — Cyan (`#00D4FF`) is never type on a light background (~1.8:1, fails AA). Navy (`#0A1F44`) is never running body text — use Document Black (`#1C1714`). Cyan is sparing: an accent, like punctuation in prose.
- **State is never color alone** — always pair with a label, icon, or shape.
- **All interactive elements have a visible focus state**; maintain AA contrast throughout.
- **Form** — 8px spacing base; 4px radius on controls, 6px on cards; no colored card backgrounds; whitespace (never a rule-line) separates a heading from its body.
- **Type stays in the IBM Plex family** — Serif for headings *and the large stat figure*, Sans for body/UI, Mono for data labels, code, and metadata captions. No fourth typeface.

## File inventory

| File | Purpose |
|---|---|
| `styles.css` | Single entry point — `@import`s fonts, tokens, and component utilities |
| `colors_and_type.css` | All design tokens as CSS custom properties (maps cleanly to a Tailwind theme) |
| `fonts.css` | IBM Plex webfont loading (Google Fonts) |
| `tokens/components.css` | Plain-CSS component utility classes for static HTML |
| `brand.html` | The branded brand & design-system page — logo, color, type, space, component gallery |
| `components/<group>/<Name>.{jsx,d.ts,prompt.md}` | React components + types + usage docs |
| `preview/*.html`, `components/**/<Name>.html` | Design System tab specimen cards (`@dsCard`) |
| `assets/` | Logo lockups (`zavari-logo-ltbg.svg`, `zavari-logo-dkbg.svg`), horizontal lockups (`zavari-logo-horizontal-ltbg.svg`, `zavari-logo-horizontal-dkbg.svg`), and `zavari-icon.svg` |
| `readme.md` | Overall guidance for consuming the system |

## Photo credits — the `pexels-link` class

Where photography is sourced from Pexels (via the `pexels_search_photos` tool), the delivered HTML must credit it inline, adjacent to the image: "Photo by [Photographer] on Pexels", linked to the photo page.

A photo credit is a metadata caption, so it follows the metadata rule — **IBM Plex Mono at `--text-caption`, in `--color-secondary`**. It should read as quiet text, not as an interactive element: no link color and no underline at rest, an arrow on hover only. Never Cyan.

```css
.pexels-link{font-family:var(--font-mono);font-size:var(--text-caption);
  line-height:var(--text-caption-lh);color:inherit;text-decoration:none;
  transition:color var(--dur-fast) var(--ease-standard)}
.pexels-link::after{content:" ↗";opacity:0;
  transition:opacity var(--dur-fast) var(--ease-standard)}
.pexels-link:hover{color:var(--color-link)}
.pexels-link:hover::after{opacity:1}
.pexels-link:focus-visible{outline:2px solid var(--color-focus);outline-offset:3px}
```

## Components

`Button`, `Input`, `Card`, `Badge` (core) · `Alert` (feedback) · `StatCallout` (data) · `SourceTag` and `CoherenceFlag` (intelligence — the signature patterns expressing traceable trust and strategic coherence). Read each component's `.prompt.md` for usage and `.d.ts` for its prop API.
