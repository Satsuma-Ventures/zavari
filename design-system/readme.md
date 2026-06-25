# Zavari Design System

**Zavari** is a strategy-intelligence platform: it triangulates qualitative, quantitative, and market signal across a team's stack and surfaces where strategy is *incoherent* — bets that conflict or don't ladder to the north star. Every conclusion traces back to its sources.

The brand voice is **the clear-eyed strategist**: calm, precise, quietly confident. Never hype, never alarmist. The design system encodes that — restrained color, editorial typography, data shown as data, and trust made visible.

---

## How to use this system

1. **Link the tokens.** Every page loads one file: `styles.css` (it `@import`s `fonts.css`, `colors_and_type.css`, and `tokens/components.css`). All color, type, spacing, radius, elevation, and motion live there as CSS custom properties.
2. **Use the React components** in `/components` for product UI. Read each component's `.prompt.md` for usage rules and the `.d.ts` for its full prop API.
3. **Use the semantic aliases** (`--color-bg`, `--color-ink`, `--color-heading`, `--color-link`, …) in product code rather than raw brand values, so theming stays consistent.

---

## Foundations at a glance

**Color** — Navy `#0A1F44` carries 60–70% of any surface (structure, dark heroes, headings). Cyan `#00D4FF` is the expressive accent: graphic use only, *never* type on light. Azure `#0099FF` is the functional accent for links and interactive states. Neutrals are warm (Document Black `#1C1714`, Soft White `#F6F5F1`). Success/warning/error are a **separate** semantic group — never mixed into brand color, and state is **never signaled by color alone** (always a label, icon, or shape too).

**Type** — IBM Plex superfamily. Serif for headings/display *and the large stat figure* (a confident editorial number, not cold telemetry); Sans for body and UI; Mono for data labels, code, and source/metadata captions.

**Space & form** — 8px base unit; multiples only. 4px radius on controls, 6px on cards, pills reserved for tags. Shadows are soft and navy-tinted, never harsh. Motion is calm and unhurried with no bounce.

**Motif** — triangulation: three signals resolving to one point. Used abstractly (hero depth, the `CoherenceFlag` mark) — never a literal GPS pin or crosshair.

---

## Components

| Component | Group | Role |
|---|---|---|
| `Button` | Core | Primary/secondary/ghost/destructive actions |
| `Input` | Core | Labelled field with azure focus + explicit error messaging |
| `Card` | Core | Default grouping surface — never colored |
| `Badge` | Core | Compact status / metadata pill |
| `Alert` | Feedback | Inline banner; accent border over tint, never full-fill |
| `StatCallout` | Data | Big-number metric — Serif figure, Mono data label |
| `SourceTag` | Intelligence | Provenance chip — trust through traceability, vendor-neutral |
| `CoherenceFlag` | Intelligence | Signature: does this bet ladder to the north star? |

`SourceTag` and `CoherenceFlag` are the signature patterns — they make Zavari's two core promises (traceable trust, strategic coherence) native to the UI.

---

## Files

- `styles.css` — single entry point (imports everything below)
- `colors_and_type.css` — all design tokens
- `fonts.css` — IBM Plex webfont loading
- `tokens/components.css` — plain-CSS component utility classes (for static HTML)
- `components/<group>/<Name>.{jsx,d.ts,prompt.md}` — React components + docs
- `preview/` and `components/**/<Name>.html` — Design System tab specimen cards
- `assets/` — logo lockups (light-bg, dark-bg), horizontal lockups (light-bg, dark-bg), and icon — use as-is, never redraw or recolor
