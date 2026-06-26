# zavari — Status
*Last updated: 2026-06-26*

**Stage:** Planted
**Current phase:** 3 — Concept
**Phase started:** 2026-06-24
**Last gate completed:** Phase 2 gate — Thesis Document (Proceed, 2026-06-24)
**Next gate:** Track 1 terminal gate — Commit / Kill / Defer (Phase 3 close; adversarial review required)
**Blocking issues:** None
**Open backlog items:** 0 (0 high priority)
**Rocks:** None set

## Claude Design projects (DesignSync)
| # | Purpose | Name | Project ID | Type | Status |
|---|---|---|---|---|---|
| 1 | Canonical — design system + concept screens | Zavari Design System | `bb939380-72d9-4244-8de9-89dfd66eb43f` | DESIGN_SYSTEM | **canonical** |
| 2 | Parallel concept experiment | Zavari — Phase 3 Concepts | `562a0859-4967-401e-a589-af9492dcec8a` | PROJECT | superseded |

**Reconciliation (2026-06-26):** Two parallel Phase 3 explorations were run (a separate Concepts project + a concept exercise inside the Design System project). Resolved:
- **Canonical = Project 1 (`bb939380`)** — single project per skill v2.1/v2.2 (design system + concepts in `concepts/`). Project 2 (`562a`) superseded; its A/B-brief idea to be ported in.
- **Design system = Claude Design output** (canonical); `DESIGN.md` derived from it. **Stat figures = Serif** (editorial), overriding the brand guide's Mono — deliberate.
- **Concept direction = v2.0 "intelligence, not insurance" / first-party-led**; modular-React execution (NavRail + Pager + variant toggles + MVP "ships first" markers).

**Latest note:** Phase 3 (Skill 3-concept v2.2).
- **Design system:** fully synced to `design-system/`; `DESIGN.md` derived from real tokens (repo root). Complete (prior commits).
- **`docs/` (GitHub Pages source):** scaffolded; **`docs/brand.html` synced and complete** with its `styles.css` + `@import`ed CSS + `assets/` placed under `docs/` so it serves standalone.
- **Concept screens — pending founder drop-in.** Compiled `zavari-concepts.html` (256.4 KB) exceeds the DesignSync `get_file` 256 KiB cap (truncates). Founder will export the complete file from Claude Design to `docs/concepts/zavari-concepts.html`. (Cause: inlined base64 fonts; a CDN-font re-export would also fit under the cap.)
- **GitHub Pages:** not yet configured (deferred until the marketing landing `index.html` exists, so the served root doesn't 404). Target: serve from `main` `/docs`.
- **Marketing landing:** brief drafted (careerchief-structured, Zavari-grounded); founder to generate it in Claude Design (Project 1), then sync to `docs/` root.
- **Next:** drop in concept page → port A/B brief → generate landing → configure Pages → gate brief + adversarial review (Track 1 terminal gate).
