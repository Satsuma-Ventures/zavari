# Concept Screens — Regeneration Brief
*2026-07-07 · Skill: 3-concept v2.2 · Supersedes `EXAMPLE_UPDATE.md`. A content + de-clutter + accessibility pass on the existing concept screens (`concepts/act1–5.jsx`, `data.jsx`, `shell.jsx`, `kit.jsx`). Keep the design system, component set, screen inventory, and overall visual language — this is a **moderate trim and re-content pass, not a redesign.***

> The concept screens were generated before the marketing-landing review. Everything we learned there now applies here. This brief is the single source of truth for the regen. Match the reworked landing (`docs/index.html`) in tone, examples, and accessibility.

---

## ★ Priority for this pass — layout & data-visualization

The content and framing are right; **the layouts are too dense.** This iteration is a **layout / information-design pass** guided by data-viz best practice (the "3 Cs": Clear, Concise, Compelling), adapted for a logged-in product UI. **Not** decoration or stylization — clarity through structure and restraint.

**The fix is mostly SUBTRACTIVE.** The screens already have good data-viz (coherence constellation, funnels, KR bars, survey bars). The problem is density: too many panels, nested boxes, and prose competing at once. Do **not** add more infographic elements — remove, group, and let the existing charts breathe and lead.

- **Clear (hierarchy):** every screen has **one focal point** — the most important thing, made largest / highest / boldest. Everything else is visibly secondary. Guide the eye top→down, with a consistent grid, gutters, and vertical rhythm across screens.
- **Concise (subtract):** fewer elements per screen. Merge redundant blocks; collapse panel-in-panel nesting (group with white space and light rules, not boxes-in-boxes); cut copy to short phrases and labels; let visuals carry the narrative. Prefer **progressive disclosure** (secondary detail on hover / expand / a secondary view) over showing everything at once.
- **Compelling (right viz, made to breathe):** where data compares, trends, or is part-of-a-whole, feature **one clean chart** rather than a table + prose + panel. Match chart to data (bar = compare, line = trend, part-to-whole for composition). Ensure charts scale accurately; keep sources on the surface (via `SourceTag`).

**Concrete rules:**
- **White space is the #1 lever** — increase padding and inter-group spacing; err toward emptier. Density is the problem being solved.
- **One dominant primary action per screen** (the product equivalent of a CTA); demote secondary actions.
- **Palette/type restraint** — stay within the design system (navy / cyan / azure + neutrals; serif display · sans · mono). No new colors; use color to **encode meaning**, not to decorate. Keep the AA-safe tokens.
- **Keep the variant toggles** — they are the "interactive" dimension; just make each variant cleaner and more distinct, not busier.
- **Mobile & contrast** — legible at small widths; maintain contrast.

**Scope:** all screens; lead with the densest — **Command Layer, Coherence Map, Planning/Roadmap, Research**. Everything below (spine, framing, accessibility) is already achieved — **maintain it** while re-laying-out.

---

## Order of work (regenerate data-heavy screens first)

1. **Strategic Command Layer (home)** — Act 1
2. **Strategic Opportunity Brief** — Act 1/2
3. **Coherence map** — Act 2
4. **Ecosystem map** — Act 3
Then, in a second pass: **Decision Record** (Act 2), **owned-tool screens** (Strategy / Planning / Research, Act 4), **onboarding/entry** (Act 5).

---

## The five rules

### 1. Intelligence, not insurance (generative, never corrective)
Every surface reads as *"Zavari showed me something I couldn't see"* — an opening, a strength, a move to make. **Never** "Zavari caught your mistake." Coherence is shown as **insight**, calmly — never an alarm or warning light. No red/warning treatments for coherence. A "drifting" read is rare and framed as an *opportunity to realign*.

### 2. Substance over headlines
These are product surfaces, so every surfaced item must read like real intelligence: a **concrete observation with specifics** (numbers, what exactly, which signals) + the implication + sources. Not punchy teaser copy. (E.g. *"A top account's weekly usage is down 22% while its health score still reads green"* — not *"A risk is forming."*)

### 3. Customer-facing language only — no internal/GTM framing, no shorthand
Cut entirely: **MVP wedge**, "buildable MVP," "ships first," named-architecture bridges ("ROI / investment-weighing," "Continuous feedback / VoC," "Strategy ↔ Planning"). No abbreviations — spell everything out (no "Doc"/"Docs"/"Quant"; use "Documents," "Product metrics"). Reframe the ownership taxonomy as **"Zavari's tools / Market intelligence / Your connected stack."** Strip jargon: *activation, north star (except as a literal OKR field), self-serve/sales-led, VoC, ladder/laddering, second-order* (say "knock-on" or just show it).

### 4. Moderate trim — fewer words, let the product carry it
Tighten copy hard; the screens read as busy and prose-heavy. Reduce caption/paragraph volume and let the real **product surfaces and data visualization** carry the story. "More graphics" here means richer, clearer product UI and data — charts, maps, the Brief and Command Layer surfaces — **not** photography. These are **logged-in product screens**: no editorial / stock / human imagery, and **no image placeholders** (that belongs on the marketing homepage, not the product UI).

### 5. Accessibility — use the corrected tokens (now in `colors_and_type.css` / `DESIGN.md`)
The design system was fixed since these screens were made. Regenerate from the updated tokens and follow these rules:
- **Secondary/caption text** → `--color-secondary` (neutral-600 `#5D6675`). Never the light gray as small text.
- **Links / interactive text** → `--color-link` (azure-700 `#0A5FA0`). **Never** `--zv-azure` (500) as text on light (~3.5:1).
- **Accent numbers / step labels / ranks** → `--color-heading` (navy). **Not** azure.
- **Cyan is graphic-only** (dots, bars, on-dark accents) — never type on light (~1.8:1).
- **Owned / first-party source dots** → **navy**, not cyan, on light surfaces (cyan dots vanish on white). Legend/`SourceTag`: navy = Zavari's tools, azure = market intelligence, gray = your stack.
- On **dark surfaces**, the bright brand values (cyan-400, azure-500) are fine and preferred.

---

## The single-scenario spine (thread ONE story through the walkthrough)

Anchor **Command Layer → Opportunity Brief → Coherence map → Decision Record** on one scenario so the concept reads as a coherent story, not disconnected mockups. Use the **Opportunity (E)** below. The Command Layer additionally teases the **Risk (C)** and **Scale (B+)** items to show Zavari's range.

### Opportunity (E) — the spine. *"Your customers are pointing at your next product."*
Several of your largest accounts **independently** started doing the same new thing (e.g. exporting data into outside tools) — reaching for a capability that's a natural next step from what you already do. No prompting, no feature request; the pattern is accelerating.
- **Finding 1:** the same new behavior across several accounts, accelerating. · *Zavari Research · usage · support* · High
- **Finding 2:** validated demand before you've built anything — customers voting with behavior. Coherence read **"Extends the core"** (positive).
- **Finding 3:** the market is only just forming here — move first and you define it. · *market* · Medium
- **Knock-on (positive):** the accounts already doing this are your fastest-expanding ones — leading here deepens your best relationships, not just opens a market.
- **Recommendation:** make it your next bet; move before the market names it.
- **Coherence read:** **On-strategy · Extends what customers already value.**
- **Decision Record:** show the auditable chain from these signals → recommendation for *this* opportunity.

### Risk (C) — Command Layer teaser only. *"A shift is forming in a key account."*
A leading signal (e.g. weekly usage down 22%) is weeks ahead of the still-green health score. Framed as *proactive peripheral vision — reach out now, a conversation not a renewal*. Not "you failed to notice."

### Scale (B+) — Command Layer teaser only. *"A capability you under-tell is quietly driving expansion."*
One under-told strength drives retention/expansion. Leaning in **compounds** the advantage you already have. Coherence read positive.

---

## Per-screen notes (content swap + trim only)

- **Strategic Command Layer (home):** the "surfaced for you" feed = the three above, **labeled by approach — Opportunity / Risk / Scale**, each substantive (observation + implication + sources), Opportunity as the lead item. Trim any surrounding prose.
- **Strategic Opportunity Brief:** the Opportunity (E) in full — ranked findings with source + confidence, the positive knock-on, the positive coherence flag, the recommendation, full source lineage. This is the marquee surface — most design care here.
- **Coherence map:** bets shown reinforcing the strategy as **insight**; if one is off-track, framed calmly as an opportunity to realign. No alarm styling. Tie it to the E scenario.
- **Ecosystem map:** owned tools + market intelligence + connected stack + the intelligence layer on top. Legend **Zavari's tools / Market intelligence / Your connected stack**. **No MVP-wedge tags, no named bridges.** Spell out tool names (Documents, Product metrics). This is the busiest screen — trim hardest.
- **Decision Record:** the auditable reasoning chain behind the E recommendation.
- **Owned tools (Strategy / Planning / Research / Product metrics):** align sample content to the E scenario so the story is continuous. Spell out names.
- **Onboarding/entry:** unchanged in substance — first-party-led ("start with Zavari's tools; connect your stack when ready").

## What NOT to change
Design tokens, components (`SourceTag`, `CoherenceFlag`, Brief layout, etc.), navigation, screen inventory, and the overall visual design. This is a content/data + de-clutter + accessibility pass. Match the reworked landing (`docs/index.html`).
