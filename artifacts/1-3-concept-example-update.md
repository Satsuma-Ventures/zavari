# Concept Screens — Example Content Update
*2026-06-30 · Skill: 3-concept v2.2 · Update to the example DATA in the existing concept screens (`concepts/act1–5.jsx`, `data.jsx`). Design system, layout, and component choices stay exactly as they are.*

> **What this is:** a content-only revision. Do **not** redesign the screens. Swap the example scenarios in `concepts/data.jsx` (and any inline copy in `act1–5.jsx`) for the set below, and make sure every surface reads as **generative**, not corrective. Keep the same components, structure, and visual treatment.

---

## The one rule that was being violated: intelligence, not insurance

Every Zavari surface must feel like **"Zavari showed me something I couldn't see"** — an opening, a strength, a move to make. **Never** "Zavari caught my mistake." Offense, not defense; a multiplier, not a safety net.

The current examples break this. They're (a) too inside-baseball — a tangle of one fictional company's internal mechanics (self-serve vs sales-led activation, pricing-page mismatch, "ladders to the north star," VoC) — and (b) framed negatively ("you're doing X wrong"). Replace them with insights that are **obvious in hindsight to anyone**, growth-stage in posture, and **positively framed**.

Coherence is shown as **insight**, calmly — "here's how this reinforces your strategy" — never as an alarm or a warning light. Avoid red/warning treatments. A coherence read of "Drifting" should be rare and, when shown, framed as an *opportunity to realign*, not a failure.

Strip this jargon entirely: *activation, north star (except as the literal name of an OKR field), self-serve / sales-led, VoC, ladder/laddering, second-order* (say "knock-on" or just show it).

---

## The locked scenario set — three approaches

Frame the surfaced intelligence around **three different approaches**, so the screens show Zavari's *range*:

### Opportunity — *"Your customers are pointing at your next product."* (the marquee / lead)
Several customers **independently** started doing the same new thing — reaching for a capability that's a natural next step from what you already do. No one asked; they're voting with behavior.
- **Finding 1:** the same new behavior across several accounts, accelerating. · *Zavari Research · usage · support* · High
- **Finding 2:** validated demand before you've built anything — coherence read **"Extends the core"** (positive). · *research*
- **Finding 3:** the market is only just forming here — move first and you define it. · *market* · Medium
- **Knock-on (positive):** the accounts already doing this are your fastest-expanding ones — leading here deepens your best relationships, not just opens a market.
- **Recommendation:** make it your next bet; move before the market names it.
- **Coherence:** **On-strategy · Extends what customers already value.**

### Risk — *"A shift is forming in a key account — while it still reads healthy."* (proactive peripheral vision)
A leading signal is weeks ahead of the lagging health score. Framed as *get ahead of it*, a conversation not a renewal — not "you failed to notice."

### Scale — *"Customers quietly choose you for one capability you under-tell — lean in and it compounds."*
One under-told strength drives retention and expansion. Concentrating the story and roadmap there **compounds** the advantage you already have. Coherence read positive (**"Reinforces the goal"**).

---

## Where these go (existing screens — content swap only)

- **Strategic Command Layer (Act 1 home):** the "surfaced for you" items become the three above, **labeled by approach — Opportunity / Risk / Scale** (not by output type). Opportunity is the key/lead item.
- **Strategic Opportunity Brief (Act 1/2 marquee):** the **Opportunity** scenario in full — ranked findings with source + confidence tags, the positive knock-on finding, the positive coherence flag, the recommendation, full source lineage.
- **Coherence map (Act 2):** show bets reinforcing the strategy as insight; if one is off-track, frame it calmly as an opportunity to realign. No alarm styling.
- **Decision Record (Act 2):** the auditable reasoning chain behind the Opportunity recommendation.
- **Owned tools — Strategy/Planning/Research/Quant (Act 4):** where sample content appears, align it to the Opportunity scenario so the screens tell one coherent story end to end.
- **Onboarding/entry (Act 5):** unchanged in substance — keep first-party-led.

## Also apply these (from the marketing-landing review — same issues live in the screens)

- **Surfaced items must carry substance, not headlines.** Each Strategic Command Layer / feed item is a *product surface*, so it must read like real intelligence: a concrete observation **with specifics** (numbers, what exactly, which signals), plus the implication, plus sources — not a punchy teaser. E.g. "A top account's weekly usage is down 22% while its health score still reads green" — not "A risk is forming in a key account."
- **No internal / GTM framing on customer-facing surfaces.** Cut "MVP wedge," "the buildable MVP," "ships first," and the named-architecture bridges ("ROI / investment-weighing," "Continuous feedback / VoC," "Strategy ↔ Planning"). The customer sees value, not our roadmap sequencing or internal taxonomy.
- **No shorthand or abbreviations.** Spell everything out. No "Doc"/"Docs"/"Quant" — use "Documents," "Product metrics," etc. Don't show two near-identical labels (we had both "Doc" and "Docs").
- **Reframe the ownership taxonomy for customers.** Instead of "Owned / AI-native / BYO," say **"Zavari's tools / Market intelligence / Your connected stack."**
- **Less is more — but keep the value components clear.** Reduce visual/content density (the screens read as busy), without dropping the key parts of the value-add story. Favor fewer, clearer elements over a dense architecture map.

## What NOT to change
Design tokens, components (`SourceTag`, `CoherenceFlag`, brief layout, etc.), navigation, screen inventory, and the overall visual design — all stay. This is a copy/data + de-clutter pass to make the examples approachable, generative, and customer-facing. The reworked marketing landing (`docs/index.html`) already applies all of the above — match it.
