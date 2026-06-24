# DESIGN.md — Zavari

> Machine-readable design system. Source of truth for all AI agents (Claude Code, Claude Design) from Phase 3 onward.
> Human-readable rendering: `brand.html`. Authoritative brand reference: `context/zavari-brand-guide.md`.
> *Generated: 2026-06-24 · Phase 3 — Concept · Distilled from the Zavari Brand Guide (March 2026) and the Phase 2 Thesis.*

---

## 1. Design POV

Zavari is a **vendor-neutral, cross-ecosystem strategic coherence layer** for product leaders. It works across the tools a company already uses — plus a set of lightweight first-party tools — to surface where strategy is *incoherent*: where initiatives conflict, where they don't ladder to the north star, and where a decision carries second-order consequences (tradeoffs, opportunity cost, downstream effects) no one has reasoned through. The durable value is **coherence and forward-looking judgment** — not signal synthesis, which is commoditizing. The design system exists to make that intelligence **legible, defensible, and traceable**.

*(Grounding note: this POV is derived from the validated `artifacts/` — the Thesis and Signal Brief — and the elevated brand guide. The `context/` solution-architecture and pitch-narrative docs are prior art: useful color, but provisional, and they do not override the artifacts.)*

Five design principles, each derived from the thesis and brand:

1. **Authoritative, not loud.** The audience is senior product leaders who think in systems. Precision earns trust; superlatives erode it. Whitespace, restraint, and exact data over decoration.
2. **Density with calm.** This is a high-information-density product (briefs, findings, OKR health, decision records). Density is achieved through hierarchy and rhythm — not crowding. Breathing room is a feature, not wasted space.
3. **Traceability is visible.** Every conclusion shows its provenance. Confidence scores, source attribution, convergence/contradiction framing, and "why this exists" links are first-class UI patterns, not afterthoughts.
4. **Vendor-neutral by design.** Signal-source attribution treats every connected tool as a peer. No single ecosystem's brand dominates. The UI itself should read as the neutral layer above the stack.
5. **Proactive, not just responsive.** The unprompted, "surfaced-for-you" alert — Zavari raising a cross-source pattern the leader didn't think to ask for — is the north-star moment. These patterns must feel earned and high-signal, never noisy notification spam.

**Personality:** Precise · Peer-to-peer · Multiplier-oriented · Honest about stage. (Per brand guide.) The interface feels built *by* a CPO *for* CPOs.

---

## 2. Color

All values are authoritative. Accessibility rules are **hard constraints** — do not violate.

### Brand palette

| Token | Hex | Role |
|---|---|---|
| `--navy` | `#0A1F44` | Dominant structural/brand color (60–70% weight). Dark-surface backgrounds; headings & structural elements on light surfaces. **Never body text.** |
| `--cyan` | `#00D4FF` | Expressive accent only — icons, highlights, active states, data callouts. **Never a text color on light backgrounds.** |
| `--azure` | `#0099FF` | Functional accent — links, hover/interactive states, secondary data. Gradient partner with cyan. |

### Neutrals

| Token | Hex | Role |
|---|---|---|
| `--document-black` | `#1C1714` | **Primary body text** on all light surfaces. Warm near-black. Running copy, tables, descriptions. |
| `--soft-white` | `#F6F5F1` | Primary light background. Warmer than pure white. |
| `--cool-gray` | `#E0E6ED` | Dividers, borders, inactive states, subtle fills. |
| `--accent-gray` | `#808A9B` | Secondary text, captions, labels, placeholders. (AA only for large/non-essential text.) |

### Semantic / functional (separate group — NOT brand colors)

| Token | Hex | Use |
|---|---|---|
| `--info` | `#0099FF` | Informational state (reuses azure) |
| `--warning` | `#D69E2E` | Warning / "drifting" status |
| `--error` | `#E53E3E` | Error / destructive / "at-risk" status |
| `--success` | `#38A169` | Success / "on-track" status |

### Gradient

- Hero/title dark surfaces: `linear-gradient(#0A1F44, #07101E)` (dark→darker; adds depth without new hue).

### Accessibility — hard rules

- Body text on light = `--document-black`. Headings on light = `--navy`. Reversed text on dark = white/`--soft-white`.
- **`--cyan` is never type.** Cyan on Soft White ≈ 1.8:1 — fails AA. Cyan is icons/graphics/large-on-dark only.
- `--accent-gray` on Soft White ≈ 3.9:1 — captions and non-essential labels only, never body.
- Never convey state by color alone — pair every color-coded status with a label, icon, or shape.
- All interactive elements have a visible focus state.

### Application

- **Dark surfaces (Navy):** headings white; body white; accents/icons/active = cyan; supporting labels = azure or cool-gray.
- **Light surfaces (Soft White/white):** headings navy; body document-black; accents/icons = cyan (graphic only); secondary text = accent-gray; borders = cool-gray.
- **Cyan sparing rule:** cyan appears the way punctuation appears in prose — frequent enough to guide the eye, rare enough to retain force.

---

## 3. Typography

**Single family: IBM Plex** (open source, SIL OFL; load via Google Fonts). Serif for headings, Sans for body/UI, Mono for data/code. Do not introduce a fourth typeface.

| Family | Token | Use |
|---|---|---|
| IBM Plex Serif | `--font-serif` | Headings & display only. Never body, labels, or UI. |
| IBM Plex Sans | `--font-sans` | Body, subheadings, labels, UI, navigation. |
| IBM Plex Mono | `--font-mono` | Data, metrics, code, technical strings, confidence scores. Used sparingly. |

### Scale (Document / Web — desktop / mobile)

| Role | Family | Weight | Desktop | Mobile |
|---|---|---|---|---|
| Display / H1 | Serif | SemiBold | 40 | 28 |
| H2 | Serif | SemiBold | 30 | 22 |
| H3 | Serif | Medium | 22 | 18 |
| Subheading | Sans | SemiBold | 18 | 16 |
| Body | Sans | Regular | 16 | 15 |
| Body Large | Sans | Regular | 18 | 16 |
| UI Label / Button | Sans | SemiBold | 14 | 14 |
| Caption / Footnote | Sans | Regular | 12 | 12 |
| Stat Callout | Mono | Regular | 56 | 36 |
| Data Label | Mono | Regular | 16 | 14 |
| Code / Technical | Mono | Regular | 14 | 13 |

### Typography rules

- H1/H2 SemiBold; H3 steps down to Medium (weight as a hierarchy lever alongside size).
- A heading is ≥ 2× body size — hierarchy must be obvious without reading content.
- **Left-align** body, lists, labels, tables. Center reserved for isolated display headlines on dark hero surfaces only.
- **No underlines except links.** Emphasis = weight (SemiBold) or Serif/Sans contrast.
- **No accent/rule lines under headings.** Separate heading from body with whitespace — never a decorative border. (This is the most common AI-generated tell; avoid it.)
- Body text ≥ 16px on any digital UI surface.
- Numbers that signal precision (ACV, confidence %, metric deltas, market sizing) render in Mono so they read as data, not prose.

---

## 4. Spacing & Layout

**Base unit: 8px. All spacing is a multiple of 8.**

| Use | Value |
|---|---|
| Min margin from screen/page edge | 48px |
| Between content sections | 64px |
| Between elements within a section | 24–32px |
| Between label and content | 8px |
| Card internal padding | 24px |

- **Grid:** 12-col web · 8-col tablet · 4-col mobile · gutter 24px · max content width 1200px (centered on wider viewports). Dense product surfaces (dashboards, briefs) may use a wider working canvas, but reading columns stay ≤ ~720px.
- **Dark/light alternation ("sandwich"):** dark Navy for title/hero/CTA surfaces (high impact, low density); light Soft White for content surfaces (high density, sustained reading). Applies to marketing/brand surfaces; product UI is predominantly light for reading endurance, with Navy reserved for the top-level chrome/nav.
- Breathing room reduces cognitive load and signals quality. Resist filling every inch.

---

## 5. Components

### Buttons
| Variant | Background | Text | Border |
|---|---|---|---|
| Primary | `--cyan` | `--navy` | none |
| Secondary | `--soft-white` | `--navy` | navy 1.5px |
| Ghost | transparent | navy or white | current text color 1.5px |
| Destructive | `--error` | white | none |

Text: Sans SemiBold 14px, no uppercase transform. Padding: 12px vertical / 24px horizontal min. Radius: **4px** (restrained, not pill). One primary CTA per screen section.

### Cards
White or Soft White bg · heading Navy Serif SemiBold · body Document-Black Sans Regular · border Cool-Gray 1px **or** shadow `0 2px 8px rgba(10,31,68,0.08)` · padding 24px. **No colored card backgrounds** — color lives in accents/icons within the card.

### Data callouts
Number: Mono Regular 48–72px Navy (white on dark). Label: Sans Regular 14–16px Accent-Gray. Unit: Sans SemiBold 24px adjacent. No border — whitespace separates.

### Tables
Header row: Navy bg, white Sans SemiBold. Body: white or subtle zebra (Soft White / white), Cool-Gray row borders, Document-Black 14–16px. Highlight row: Azure at 15% opacity (never cyan).

### Notification / alert banners
4px solid left border + tinted bg (8% opacity), no full color fill:
- Informational → azure · Warning → `#D69E2E` · Error → `#E53E3E` · Success → `#38A169`.

### Icons
Clean single-weight line icons, consistent stroke. On light: cyan icon inside a cyan-tinted circle. On Navy: white icon, no circle. Min 24px UI / 48px illustrative. No filled/solid style.

---

## 6. Product-specific patterns

*These extend the brand guide for Zavari's data-dense intelligence UI. They are the design translation of the thesis — make them consistent across all concept screens.*

### Signal-source attribution (vendor-neutral)
Every triangulated finding shows which categories/tools fed it. Render connected sources as **neutral peer chips** — equal size, monochrome label, small category icon, optional cyan-dot "active" indicator. No source's own brand color dominates. This is where vendor-neutrality becomes *visible*. Group by the eight categories: Qual Research · Quant Analytics · Market Intel · Product Planning · Delivery · Docs · CRM/Sales · Data Warehouse. First-party Zavari sources carry a subtle cyan accent to distinguish "use ours" from "BYO."

### Confidence indicator
Confidence is always Mono and always paired with a non-color cue. Use a 0–100 score or a three-step scale (High / Medium / Low) with a filled-segment glyph. Never a bare colored dot.

### Finding types — coherence, convergence/contradiction, second-order
The Triangulation Engine's output. Per the thesis, the *differentiated* finding types are coherence and second-order reasoning — synthesis (convergence/contradiction) is table stakes. All findings always cite their underlying sources (traceability).
- **Coherence finding** *(differentiated wedge)* — surfaces where initiatives **conflict** or **don't ladder to the north star**. The signature cross-ecosystem output no single-ecosystem incumbent can produce. Treatment: navy structural frame, lineage glyph linking the misaligned initiatives.
- **Second-order finding** *(differentiated wedge)* — reasons about what a decision *forecloses*: tradeoffs, opportunity cost, downstream product/user effects. Forward-looking, framed as consequences-to-weigh, not predictions-to-trust.
- **Convergence** — signals align → success/azure accent, "↑ converging" label, lists agreeing sources.
- **Contradiction** — signals diverge → warning accent, "⚠ in tension" label; surfaces the tension as a question rather than averaging it away.

### OKR / strategic health status
Three states, each with label + icon + color (never color alone): **On track** (success) · **Drifting** (warning) · **At risk** (error). Used in dashboards and the strategic health monitor.

### Strategic Opportunity Brief layout
Document-grade reading surface: Serif H1 question → triangulated findings (convergence/contradiction blocks) → confidence-scored recommendation → traceable source appendix. Reading column ≤ 720px. This is the product's marquee artifact — treat typography with document-level care.

### Unprompted alert ("surfaced for you")
The north-star moment. *(Capability validated by the artifacts; the prior-art name "Strategic Instinct" is not locked — describe the behavior, don't enshrine the name.)* A distinct card: cyan signal-motif marker, "Surfaced for you — you didn't ask for this" framing, the cross-source pattern stated plainly, the active strategic bet it bears on, and a one-click path to full context. Must feel high-signal and rare — never notification noise.

### Provenance / "why this exists" link
On execution artifacts (epics, OKRs), a persistent inline link back to the originating Brief + OKR. Renders as an azure link with a small chain/lineage icon. Embodies the unbroken-chain principle.

---

## 7. Visual motif

Abstract **signal/triangulation** pattern — three converging lines/pulses resolving to a single point of clarity (from the GPS-triangulation founding story). Use as: subtle depth texture on Navy hero surfaces; structural diagram element for the Triangulation Engine; section divider in long documents. **Never** literal GPS pins, radar circles, maps, or satellites — the reference is conceptual, not literal.

---

## 8. Voice in UI

**Use:** defensible, auditable, triangulated, converging, in tension, surfaced, multiplied, unlocked, enabled.
**Avoid:** breakthrough, transformative, revolutionary, streamlined, powerful, robust, seamless.

- Lead with what Zavari *enables the leader to do*, not what it does itself ("You can defend this decision" > "Our AI decided").
- Peer-to-peer: assume competence, respect time, no over-explaining.
- **Validated proper nouns** (brand guide — always capitalized, locked): **Triangulation Engine**, **Strategic Opportunity Brief**, **Strategic Command Layer**, **Integration Maturity Model**.
- **Not yet locked** — capability names carried over from prior-art pitch material ("Strategic Instinct", "Execution Bridge", "Decision Record", "Signal Architecture", "Strategic Learning Layer"). Describe the capability; do not enshrine the name until validated against the artifacts.
- Never "Zavari OS / platform / system" as a product name (brand guide).

---

## 9. Anti-patterns (do not do)

- ❌ Cyan as text on light backgrounds.
- ❌ Navy for running body text.
- ❌ Decorative rule/accent lines under headings.
- ❌ Underlines on non-link text.
- ❌ Colored card backgrounds.
- ❌ A fourth typeface.
- ❌ State communicated by color alone.
- ❌ Pill-radius buttons (radius is 4px).
- ❌ A single source's brand dominating the signal-source UI (breaks vendor-neutrality).
- ❌ Alert/notification noise that cheapens the Strategic Instinct moment.
- ❌ Findings or recommendations shown without traceable source attribution.

---

*Authoritative inputs: `artifacts/1-2-thesis.md` and `artifacts/1-1-signal-brief.md` (validated source of truth), and `context/zavari-brand-guide.md` (elevated to validated). Prior-art color, provisional: `context/zavari-solution-architecture.md`, `context/zavari-pitch-narrative.md`, `context/zavari-positioning-messaging.md` — useful but subordinate to the artifacts. Extended at Phase 5 with the full screen-inventory component set.*
