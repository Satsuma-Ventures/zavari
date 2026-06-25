# Design System Brief: Zavari
*2026-06-24 · Skill: 3-concept v2.0*

> Creative direction for Claude Design (claude.ai/design) to generate Zavari's design system. Pushed to the "Zavari Design System" project as `BRIEF.md`, alongside `BRAND_GUIDE.md` (background reference) and the venture logo SVGs in `assets/`.

---

## Venture context

Zavari is a **vendor-neutral, cross-ecosystem strategic coherence layer** for senior product leaders (CPO, VP Product, Head of Strategy at growth-stage product orgs). It triangulates qualitative, quantitative, and market signal across a company's tools to surface where strategy is **incoherent** — bets that conflict or don't ladder to the north star — and to reason about the **second-order consequences** of a decision, with every conclusion traceable to its sources.

Zavari meets companies **two ways, and both matter equally**:
1. **Connect what you already use** — vendor-neutral integration with the existing stack (Jira, Amplitude, Dovetail, Condens, Notion, and so on).
2. **Use Zavari's own tools** — aggressively-priced, lightweight first-party tools for **research, roadmap, and planning** that a team can adopt directly, then "turn on the strategic intelligence when ready."

These first-party tools are *lightweight, but not a backseat add-on*. They are a genuine, invitingly-easy product surface and a real reason a team chooses Zavari — they own canonical data and reduce dependence on competitor APIs. Treat the "use ours" prong as a first-class citizen of the experience, not a footnote to integration.

It should feel like an instrument built by a CPO for CPOs — but one that requires no manual: **authoritative and trustworthy, yet genuinely intuitive and approachable.**

---

## A note on creative latitude — this is a brownfield brand

Zavari is further along than a greenfield venture: it already has a finished logo set, an established color palette, and an established typographic choice. **Honor these as the brand's anchor — but treat them as an anchor, not a cage.** You have real creative latitude on layout, interaction, information design, motion, and especially the product surfaces. If an established choice and the emotional goals below seem to pull against each other, **raise it** — don't silently override, and don't ignore it.

**What's locked:**
- **Logos** — use the provided SVGs as-is; never redraw, recolor, distort, or invert. Light-bg lockup on light surfaces, dark-bg lockup on Navy, icon-only below ~120px.
- **Color palette** — the hex values and their semantic roles below. (The role rules exist for accessibility — see "still-true constraints.")

**Strong default, but flexible:**
- **Typography** — IBM Plex (Serif / Sans / Mono) is the established choice and the recommended default. If you believe a different pairing materially better serves the *authoritative-yet-intuitive* goal, propose it with rationale rather than swapping silently.

**Flexible:** everything else — component design, spacing rhythm, radii, density, layout, interaction.

**Implementation target:** the product is built in **Tailwind CSS** (Phase 6). Express tokens so they map cleanly to a Tailwind theme/config — a flat, semantic token set that becomes Tailwind theme values.

### Locked inputs

**Color**
| Token | Hex | Role |
|---|---|---|
| Navy | `#0A1F44` | Dominant structural/brand color; dark-surface backgrounds; headings & structure on light. Not running body text. |
| Cyan | `#00D4FF` | Expressive accent — icons, highlights, active states, data callouts. Not a text color on light backgrounds (≈1.8:1). |
| Azure | `#0099FF` | Functional accent — links, hover/interactive, secondary data. |
| Document Black | `#1C1714` | Primary body text on light surfaces (warm near-black). |
| Soft White | `#F6F5F1` | Primary light background. |
| Cool Gray | `#E0E6ED` | Dividers, borders, inactive states. |
| Accent Gray | `#808A9B` | Secondary text, captions. |
| semantic *(separate group)* | success `#38A169` · warning `#D69E2E` · error `#E53E3E` · info = azure | status only |

**Typography (default — IBM Plex)** — Serif for headings/display, Sans for body/UI, Mono for data/metrics. Google Fonts: `https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Serif:wght@500;600&family=IBM+Plex+Mono:wght@400&display=swap`

### Still-true constraints (keep these — they protect accessibility and brand integrity)
- Cyan is not used as type on light backgrounds; Navy is not used as running body text (use Document Black).
- State is never communicated by color alone — pair with a label, icon, or shape.
- All interactive elements have a visible focus state; maintain AA contrast.
- Logo integrity as above.

*(The brand guide also documents current conventions — 8px spacing base, 4px button radius, no colored card backgrounds, whitespace instead of rule-lines under headings. Treat these as the established starting point you may evolve thoughtfully in service of the goals below, not as hard locks.)*

---

## Emotional register

**Authoritative · Intuitive · Approachable · Confident · Clear · Trustworthy · Effortless.**

The defining tension to resolve: **authoritative while being genuinely intuitive.** A busy senior leader should trust it on sight (authority, precision, traceability) *and* feel oriented instantly, with no manual and no intimidation (intuitive, warm, human). Lean warmer and more approachable than a typical enterprise-intelligence tool — serious depth that feels effortless to use, not technical or clinical.

---

## What it should NOT feel like

- **Cold or clinical** — no "enterprise data terminal," dense-grid, technical-instrument feel. Depth should feel effortless, not heavy.
- A generic AI-SaaS dashboard — purple gradients, "AI sparkle" / magic-wand motifs, glowing orbs.
- A consumer AI chatbot — Zavari is a considered product, not a chat box; don't center an "ask me anything" hero.
- A competitive-intel alert firehose — the unprompted insight is rare and high-signal, not a notification stream.
- An OKR / goal tool with gamification — progress rings, confetti, cheerleading.
- A neon "cyberpunk" dark dashboard — cyan is a sparing accent, never a glow.

---

## Reference points

- **Linear** — effortless, intuitive precision; clarity and confidence without clutter. Reference for how serious software can feel light to use.
- **Notion** — approachable, inviting, low-intimidation; makes complex structure feel friendly and human. Reference for warmth and intuitiveness.
- **Stripe (dashboard + docs)** — authoritative and trustworthy, data treated with care, but warm rather than cold. Reference for credible authority that still feels human.

(Same emotional territory, not identical. The blend we want is *Stripe's trust × Notion's approachability × Linear's effortlessness*.)

---

## User context

**Desktop-first.** High-focus, deliberate decision-making — planning cycles, deep-work sessions, offsites. Surfaces are information-rich (briefs, findings, coherence views, lightweight tools), but the experience must feel unhurried and intuitive. Predominantly a **light reading canvas**, with Navy reserved for top-level chrome and hero/title moments. Strong typographic hierarchy and generous whitespace carry the density.

---

## What the product surfaces need to achieve *(intentions, not a component spec)*

Rather than prescribe components, here is what the surfaces must accomplish — emotionally and functionally. Design whatever components best deliver these outcomes; add, split, or combine freely. None of this is an exhaustive list — if a surface needs something not named here, build it.

- **Trust through traceability** — every conclusion should feel defensible: a leader should see *where it came from* without effort. Provenance, sourcing, and confidence feel native and reassuring, never bolted on.
- **Vendor-neutral by feel** — when the connected stack appears, no single vendor dominates; the company should feel that Zavari sits *above* its tools as a neutral layer — and Zavari's own first-party tools belong as first-class citizens of that stack, not a lesser tier.
- **Coherence made obvious** — the signature insight is showing where strategy is incoherent (conflicts, failure to ladder to the north star). Make misalignment *intuitive at a glance* — clear, even a little reassuring, never alarming or busy.
- **Proactive, earned, rare** — when Zavari surfaces something unprompted, it should feel like a trusted advisor's tap on the shoulder: high-signal and rare.
- **Density that feels effortless** — rich surfaces that still feel intuitive and calm. Authority without intimidation — the core tension to resolve.
- **First-party tools that feel light and inviting** — the research / roadmap / planning tools should be genuinely easy and pleasant to adopt (the reason a team picks "use ours"), while clearly belonging to the same family as the intelligence layer.

---

## Output expectations

Produce a complete design system following the file conventions below. It is consumed by Claude Code in Phase 6 (Tailwind) to implement the product UI — tokens and component definitions are used directly downstream.

### Required files and conventions

**`SKILL.md`** — design system descriptor:
```yaml
---
name: zavari-design
description: Generate well-branded interfaces and assets for Zavari — the vendor-neutral strategic coherence layer for product leaders. Colors, type tokens, fonts, logo assets, and component patterns.
user-invocable: true
---
```
Followed by: brand personality summary, the still-true constraints (hard rules), and a file inventory.

**`brand.html`** — human-readable rendering of the full system: color palette (hex + semantic roles), typography specimens (display, heading, body, caption, label, mono), spacing scale, and a component gallery. Include the product-specific patterns you design — but you decide what they are.

**`colors_and_type.css`** — drop-in CSS variables for all tokens, structured to map cleanly onto a Tailwind theme.

**`preview/_base.css`** — shared base imported by all preview cards:
```css
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;600&family=IBM+Plex+Serif:wght@500;600&family=IBM+Plex+Mono:wght@400&display=swap');
:root { /* all token variables */ }
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html, body { background: var(--soft-white); color: var(--document-black); font-family: var(--font-sans); }
.card { width: 700px; padding: 28px 32px; background: var(--soft-white); }
.card-label { /* uppercase tracked label, Sans SemiBold */ }
```

**`preview/[component-name].html`** — one self-contained file per component linking `_base.css`, first line a `@dsCard` marker:
```html
<!-- @dsCard group="[Group]" name="[Component name]" subtitle="[States shown]" viewport="700x[height]" -->
```
Foundational cards to include: `colors-brand`, `type-scale`, `type-display`, `type-body`, `components-button-primary`, `components-button-secondary`, `components-card`, `components-input`, `spacing-scale`. **Beyond these, add whatever product-specific cards your design calls for** — don't limit yourself to a prescribed list.

**`assets/`** — the provided Zavari logo SVGs: `zavari-logo-ltbg.svg`, `zavari-logo-dkbg.svg`, `zavari-icon.svg`. Use as-is.

**`_ds_manifest.json`** — Design System pane manifest (generated automatically).
