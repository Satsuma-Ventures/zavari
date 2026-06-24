# Zavari Brand Guide
*Project artifact — design, development, and communications reference*
*Last updated: March 2026*

---

## Brand Identity

### Name and Usage

**Zavari** — always capitalized, always singular. No articles, no modifiers.

- ✅ Zavari
- ✅ Zavari's Triangulation Engine
- ❌ the Zavari
- ❌ Zavari OS
- ❌ Zavari platform
- ❌ Zavari system
- ❌ zavari

**Proper nouns within the product** — capitalize these consistently:
- Triangulation Engine (locked name — always capitalized)
- Strategic Opportunity Brief
- Strategic Command Layer
- Integration Maturity Model

---

### Brand Personality

Zavari speaks from the position of a practitioner, not a vendor. The brand personality reflects the CPO it was built for — someone who has run product organizations, earned credibility through results, and thinks in systems rather than features.

**Precise.** Zavari uses specific language over superlatives. "Defensible" and "auditable" over "breakthrough" and "transformative." Exact claims with sourced evidence over impressionistic marketing language.

**Peer-to-peer.** Zavari talks with product leaders, not at them. The voice assumes competence and respects time. No unnecessary context-setting, no explaining things the audience already knows.

**Multiplier-oriented.** Zavari is a leverage play, not an efficiency play. The language reflects this: "enabled," "multiplied," "unlocked" — not "reduced," "improved," "saved." What matters is what Zavari makes possible for the teams using it, not what it eliminates.

**Honest about stage.** Zavari is a seed-stage company building in public. The brand doesn't overclaim — it earns confidence through precision, evidence, and candor about what's proven vs. what's being proven.

---

## Color System

### Primary Palette

| Name | Hex | Role |
|------|-----|------|
| **Zavari Navy** | `#0A1F44` | Dominant color — 60–70% visual weight across all surfaces. Primary background for dark screens, primary text color on light screens. |
| **Zavari Cyan** | `#00D4FF` | Accent only — highlights, icons, active states, data callouts. Never used as background for body text. See accessibility note below. |
| **Zavari Azure** | `#0099FF` | Supporting — links, secondary interactive elements, gradient partner with Cyan. |

### Neutral Palette

| Name | Hex | Role |
|------|-----|------|
| **Document Black** | `#1C1714` | Primary body text on all light surfaces. A warm near-black — the dark complement to Soft White. Use wherever running text appears in documents, UI, and web. |
| **Soft White** | `#F6F5F1` | Primary light background. Warmer than pure white — reduces eye strain on long-form content surfaces. |
| **Cool Gray** | `#E0E6ED` | Dividers, borders, inactive states, subtle backgrounds. |
| **Accent Gray** | `#808A9B` | Secondary text, captions, labels, placeholder content. |

**The Navy / Document Black distinction:**
- **Zavari Navy (`#0A1F44`)** — headings, display text, and structural elements on light surfaces. Also the dominant background color on dark surfaces.
- **Document Black (`#1C1714`)** — body text, running copy, table content, descriptions, and any text that needs to be read at length. Never use Navy for body text in documents or UI — it reads as branded rather than legible.

This distinction matters most in documents and product interfaces. In presentations, where text density is lower and Navy backgrounds are common, the contrast between heading (Navy) and body (Document Black) is less relevant and Navy can carry more of the text weight.

### Accessibility

**Critical note — Zavari Cyan fails WCAG AA contrast for text on white backgrounds.**

Cyan (`#00D4FF`) on Soft White (`#F6F5F1`) produces a contrast ratio of approximately 1.8:1 — far below the 4.5:1 minimum required for body text and 3:1 for large text. **Never use Cyan as a text color on light backgrounds.**

| Combination | Contrast Ratio | Use |
|-------------|---------------|-----|
| Document Black on Soft White | ~18:1 | ✅ Body text, running copy, table content |
| Navy on Soft White | ~14:1 | ✅ Headings, display text, structural labels |
| Navy on Cool Gray | ~11:1 | ✅ Headings on gray backgrounds |
| White on Navy | ~14:1 | ✅ Reversed text on dark backgrounds |
| Cyan on Navy | ~3.5:1 | ✅ Large text / icons on dark backgrounds only |
| Cyan on Soft White | ~1.8:1 | ❌ Never for text |
| Accent Gray on Soft White | ~3.9:1 | ⚠️ Captions and non-essential labels only |

**Rule of thumb:** Body text is Document Black. Headings are Navy. Reversed text on dark backgrounds is white. Cyan is never type.

### Color Application

**Dark surfaces (Navy background):**
- Headings: White or Soft White
- Body text: White
- Accent elements, icons, active states: Cyan
- Supporting data or labels: Azure or Cool Gray

**Light surfaces (Soft White or white background):**
- Headings: Zavari Navy
- Body text: Document Black (`#1C1714`)
- Accent elements, icons, highlights: Cyan (graphic only, not text)
- Secondary text, captions: Accent Gray
- Dividers, borders: Cool Gray

**Gradient usage:**
Navy gradient for hero and title surfaces: `#0A1F44 → #07101E` (dark to darker — adds depth without introducing new colors)

**Color roles at a glance:**
- **Navy** — the dominant *structural and brand* color. Backgrounds, headers, borders, decorative elements. Not for running body text on light surfaces.
- **Document Black** — the dominant *reading* color. Body copy, table content, descriptions, anything read at length on a light surface.
- **Cyan** — the *expressive* accent. Icons, callout highlights, visual emphasis. Earns attention through visual weight. Used sparingly so it retains meaning.
- **Azure** — the *functional* accent. Links, interactive states, hover effects. Earns attention through interaction. Never use Cyan where Azure belongs, or vice versa.

**Sparing rule for Cyan:** When everything is accented, nothing is. Cyan should appear in a composition the way punctuation appears in prose — frequently enough to guide the eye, infrequently enough to retain force.

---

## Typography

### Type Scale

The type scale splits into two contexts. Sizes are in pixels (screen) — these correspond 1:1 with points in standard design tools (Figma, Sketch) at 1× resolution.

**Document / Web**

| Role | Typeface | Weight | Desktop | Mobile |
|------|----------|--------|---------|--------|
| Display / H1 | IBM Plex Serif | SemiBold | 40px | 28px |
| H2 | IBM Plex Serif | SemiBold | 30px | 22px |
| H3 | IBM Plex Serif | Medium | 22px | 18px |
| Subheading | IBM Plex Sans | SemiBold | 18px | 16px |
| Body | IBM Plex Sans | Regular | 16px | 15px |
| Body Large | IBM Plex Sans | Regular | 18px | 16px |
| UI Label / Button | IBM Plex Sans | SemiBold | 14px | 14px |
| Caption / Footnote | IBM Plex Sans | Regular | 12px | 12px |
| Stat Callout | IBM Plex Mono | Regular | 56px | 36px |
| Data Label | IBM Plex Mono | Regular | 16px | 14px |
| Code / Technical | IBM Plex Mono | Regular | 14px | 13px |

Notes on Document/Web scale:
- **H1 and H2 use SemiBold** — Plex Serif's SemiBold weight at display sizes reads as authoritative without becoming heavy. Regular would be too thin at 30–40px.
- **H3 steps down to Medium** — creates a visible weight distinction between section headers (H2 SemiBold) and sub-section headers (H3 Medium) within the same typeface.
- **Subheading (18px IBM Plex Sans SemiBold)** sits clearly above body (16px Regular). The typeface shift from Serif to Sans reinforces the hierarchy at smaller sizes where weight alone could blur.
- **Body (16px)** is the standard readable default. Use Body Large (18px) for long-form reading contexts like the Strategic Command Layer or document views.
- **Stat Callout (56px)** is for large-format metric display — ACV figures, market sizing numbers, dashboard KPIs. At 56px in IBM Plex Mono, the number reads as data, not headline.

---

**Presentation / Deck**

| Role | Typeface | Weight | Size |
|------|----------|--------|------|
| Title / H1 | IBM Plex Serif | SemiBold | 44–56pt |
| Section Heading / H2 | IBM Plex Serif | SemiBold | 32–40pt |
| H3 | IBM Plex Serif | Medium | 26–32pt |
| Subheading | IBM Plex Sans | SemiBold | 22–26pt |
| Body | IBM Plex Sans | Regular | 20–22pt |
| Caption / Source | IBM Plex Sans | Light | 14–16pt |
| Stat Callout | IBM Plex Mono | Regular | 56–72pt |
| Data Label | IBM Plex Mono | Regular | 18–20pt |

Notes on Presentation scale:
- Presentation body text (20–22pt) is larger than document body text because slides are read from a distance on a projected surface, not at arm's length on a screen.
- Caption / Source uses IBM Plex Sans Light — the lightest weight in the family creates clear visual separation from body text without needing a size reduction.
- The Stat Callout (56–72pt) should be used for the big-number moments: market size, ACV figures, key proof points. At this size in IBM Plex Mono, the number is the slide.

### Typeface Roles

Zavari uses the IBM Plex type family exclusively — IBM Plex Serif for headings, IBM Plex Sans for body and UI, IBM Plex Mono for data and code. This is a deliberate single-family system: all three variants were designed to work together, share proportions and spacing rhythms, and create coherent hierarchy without the visual tension that comes from mixing type families.

**IBM Plex Serif** — headings and display text only. Plex Serif signals precision, institutional authority, and considered intelligence. Its letterforms are sharp and structured without being cold — it reads as something written by someone who takes ideas seriously. The family spans seven weights (ExtraLight through ExtraBold), which solves the hierarchy problem directly: H1 and H2 use SemiBold; H3 steps down to Medium; the weight variation creates clear structure without size changes alone having to carry the full load. Never use IBM Plex Serif for body copy, labels, or UI elements.

**IBM Plex Sans** — the working typeface for all body text, subheadings, labels, UI copy, and navigation. Plex Sans has a humanist quality that adds warmth alongside Plex Serif's more formal character. The combination feels like a product made by people who think carefully and communicate clearly — not like a template. Plex Sans SemiBold for hierarchy and emphasis; Plex Sans Regular for running text; Plex Sans Light for captions and de-emphasized supporting content.

**IBM Plex Mono** — data, metrics, code, and technical strings exclusively. Whenever a number needs to signal precision — a stat callout, an ACV figure, a metric label, a product code, an API reference — Plex Mono makes it read as data rather than prose. Because Plex Mono was designed within the same family, it shares proportions with Plex Sans and sits comfortably in mixed text without the visual interruption that cross-family mono fonts often create. Used sparingly, it adds authority. Used everywhere, it becomes noise.

**On licensing:** The IBM Plex family is open source and free under the SIL Open Font License. Available through Google Fonts and directly from IBM's GitHub repository. No licensing cost or restrictions for commercial use.

### Typography Principles

**Left-align body text.** Center alignment is reserved for isolated display headlines on dark hero backgrounds. Body copy, lists, labels, and table content are always left-aligned.

**Size contrast matters.** A heading needs to be at least 2× the body text size to create clear visual hierarchy. Never let a subheading drift close to body size — the distinction should be obvious without reading the content. IBM Plex Serif's multiple weights give you weight contrast as a second lever alongside size.

**No underlines except links.** Emphasis is handled with weight (SemiBold) or with the Serif vs. Sans typeface contrast, not with underlines in running text.

**No accent lines under headings.** A common default in AI-generated and template-based design. Zavari uses whitespace to separate heading from body — never a decorative rule or border beneath a title.

**Stay in the family.** Resist the temptation to introduce a third typeface for a special use case. The IBM Plex family has enough variation in weight and variant (Serif / Sans / Mono) to handle every typographic need Zavari will encounter. Adding a fourth typeface almost always creates visual noise without adding communication value.

---

## Visual Identity

### Logo

The Zavari logo exists in the following variants, each designed for a specific background context:

| File | Background | Wordmark | Use on |
|------|-----------|----------|--------|
| `zavarilogoltbg` | Soft White (`#F5F4F0`) | Navy | Documents, web pages, light UI surfaces |
| `zavarilogodkbg` | Navy (`#12172B`) | White | Dark slides, Navy hero sections, dark UI surfaces |
| `zavariicon` | Navy | — (icon only) | Favicons, app icons, avatar thumbnails, small-format usage below 120px |

**1x vs 4x:** Use 1x files for standard screen/web contexts. Use 4x files for print and high-resolution production output.

**Never substitute across contexts.** The light-background logo has a Navy wordmark that disappears on dark backgrounds. The dark-background logo has a white wordmark that washes out on light backgrounds. Use the correct variant — do not attempt to recolor or invert either file.

**Transparent versions for programmatic use:** When embedding in slides, document headers, or web overlays, strip the background color to create a transparent PNG. The wordmark and icon retain their correct colors and render cleanly on any matching background surface.

**Clear space:** Maintain a minimum clear space of 1× the logo height on all sides. Never crowd the logo against other elements.

**What not to do:**
- Do not stretch, skew, or recolor the logo
- Do not place the logo on low-contrast backgrounds
- Do not use the full wordmark below 120px wide (use icon-only below this threshold)
- Do not add drop shadows, outlines, or decorative effects

### Visual Motif

Zavari's visual identity draws from the GPS triangulation concept at the heart of the product's founding story. The recurring motif is an abstract signal/wave pattern — three converging lines or pulses, suggesting the resolution of multiple signals into a single point of clarity.

**Application:**
- As a background texture on dark (Navy) hero surfaces — subtle, not dominant; should feel like depth, not decoration
- As a structural diagram element in product illustrations showing the Triangulation Engine
- As an abstract divider or section marker in long-form documents

**What it should never look like:** Literal GPS icons, map pins, radar circles, or satellite imagery. The abstraction is intentional — the reference is conceptual, not literal.

### Icon Style

- Icons in **Cyan circles on light backgrounds** — the circle provides contrast ground for the icon and ties it to the brand accent color
- Icons in **white on Navy backgrounds** — no circle needed; the background provides sufficient contrast
- Style: clean, single-weight line icons. No filled/solid icon style. Consistent stroke weight across a set.
- Minimum icon size: 24px at 1× for UI usage; 48px for illustrative/marketing usage

---

## Component Patterns

### Buttons

| Variant | Background | Text | Border | Usage |
|---------|-----------|------|--------|-------|
| Primary | Zavari Cyan | Navy | None | Primary CTA — one per screen section |
| Secondary | Soft White | Navy | Navy 1.5px | Secondary actions, alternatives |
| Ghost | Transparent | Navy or White | Current text color 1.5px | Tertiary actions, de-emphasized choices |
| Destructive | `#E53E3E` | White | None | Destructive or irreversible actions |

Button text: IBM Plex Sans SemiBold, 14px, no uppercase transformation.
Button padding: 12px vertical, 24px horizontal minimum.
Border radius: 4px — restrained, not rounded pill.

**Note on the Destructive color:** `#E53E3E` is a semantic utility color — it signals danger, not brand. It does not belong in Zavari's brand color palette or Figma color styles. Keep it in a separate "Semantic / Functional" style group, not alongside Navy, Cyan, and Azure.

### Cards

- Background: White or Soft White
- Heading: Zavari Navy, IBM Plex Serif SemiBold
- Body: Document Black, IBM Plex Sans Regular
- Border: Cool Gray 1px, or no border with a subtle box shadow (`0 2px 8px rgba(10,31,68,0.08)`)
- Padding: 24px
- No colored card backgrounds — color lives in accents and icons within the card, not the card itself

### Data Callouts

Large-format metric or stat display:

- Number: IBM Plex Mono Regular, 48–72px, Zavari Navy (or white on dark)
- Label: IBM Plex Sans Regular, 14–16px, Accent Gray
- Unit (if applicable): IBM Plex Sans SemiBold, 24px, adjacent to number
- Container: No border needed — whitespace provides sufficient separation

### Tables

- Header row: Zavari Navy background, white IBM Plex Sans SemiBold text
- Body rows: Soft White and White alternating (subtle zebra) or plain white with Cool Gray row borders
- Text: IBM Plex Sans Regular, Document Black, 14–16px
- Highlight row (if needed): Azure `#0099FF` at 15% opacity — not Cyan

### Notification / Alert Banners

| Type | Left border color | Background |
|------|------------------|-----------|
| Informational | Azure `#0099FF` | Azure at 8% opacity |
| Warning | `#D69E2E` | `#D69E2E` at 8% opacity |
| Error | `#E53E3E` | `#E53E3E` at 8% opacity |
| Success | `#38A169` | `#38A169` at 8% opacity |

Left border: 4px solid. No full colored backgrounds — the tinted background with accent border is sufficient and less visually aggressive.

---

## Layout Principles

### Spacing

Base unit: 8px. All spacing decisions should be multiples of 8.

| Use | Value |
|-----|-------|
| Minimum margin from screen/page edge | 48px (6 units) |
| Between content sections | 64px (8 units) |
| Between elements within a section | 24–32px (3–4 units) |
| Between label and content | 8px (1 unit) |
| Card internal padding | 24px (3 units) |

**Breathing room is not wasted space.** Zavari's audience is reading dense strategic content. Generous whitespace reduces cognitive load and signals quality. Resist the urge to fill every inch.

### Grid

- 12-column grid for web surfaces
- 8-column grid for tablet
- 4-column grid for mobile
- Gutter: 24px
- Max content width: 1200px (centered on wider viewports)

### Dark / Light Surface Alternation

Zavari uses a "sandwich" structure on marketing and presentation surfaces:

- **Dark (Navy):** Title, hero, and closing surfaces — high impact, lower information density
- **Light (Soft White):** Content surfaces — higher information density, easier sustained reading
- **Dark again for close/CTA**

This creates visual rhythm and prevents the brand from feeling either uniformly dark (heavy) or uniformly light (generic).

---

## Voice and Tone Quick Reference

A summary of the principles documented fully in the Positioning & Messaging guide.

**Use:** defensible, auditable, triangulated, institutional, multiplied, unlocked, enabled
**Avoid:** breakthrough, transformative, revolutionary, streamlined, powerful, robust, seamless

**Use:** "Zavari produces..." / "The Triangulation Engine resolves..." / "Product leaders who use Zavari..."
**Avoid:** "Zavari helps you..." / "Our powerful AI..." / "We make it easy to..."

**On outcomes:** Lead with what Zavari enables others to do, not what it does itself. The CPO who used Zavari made a better decision — Zavari didn't make it for them.

**On claims:** If it can't be sourced or attributed to direct founder experience, don't say it. Precision earns more trust than volume. See the Proof Points section of the Positioning & Messaging guide for what's sourced and usable.

---

## Document and File Standards

### File naming

`zavari-[document-type]-[descriptor]-[YYYY-MM].ext`

Examples:
- `zavari-deck-investor-2026-03.pptx`
- `zavari-brief-enterprise-tier-opportunity-2026-Q2.pdf`
- `zavari-brand-guide-2026-03.md`

### Document headers

All Zavari documents open with:
- Document title (IBM Plex Serif SemiBold, or IBM Plex Sans SemiBold in plain text environments)
- Document type in italics (e.g., *Internal — co-founder alignment*)
- Last updated date

All Zavari documents close with a cross-reference footer pointing to related documents in the artifact set.

### Presentation defaults

Slide dimensions: 16:9 widescreen (1920×1080px or 1280×720px)
Background: Soft White for content slides; Navy for title, hook, and close slides
Slide title: IBM Plex Serif SemiBold, 36–44pt, Zavari Navy on light / White on dark
Body text: IBM Plex Sans Regular, 20–22pt, Document Black on light / White on dark
Captions / sources: IBM Plex Sans Light, 14–16pt
Data callouts: IBM Plex Mono Regular, 56–72pt
No bullet points as primary content structure — use visual elements, callout boxes, or two-column layouts instead
No accent lines under slide titles — use whitespace

---

## Accessibility Checklist

Before publishing or sharing any Zavari asset:

- [ ] Body text uses Document Black (`#1C1714`), not Navy, on light backgrounds
- [ ] All body text meets 4.5:1 contrast minimum (AA)
- [ ] All large text (18pt+ regular or 14pt+ bold) meets 3:1 contrast minimum
- [ ] No information conveyed by color alone — icons, labels, or patterns supplement color coding
- [ ] Cyan is not used as a text color on light backgrounds
- [ ] Interactive elements have visible focus states
- [ ] Images have descriptive alt text
- [ ] Document heading hierarchy is logical (H1 → H2 → H3, not skipped)
- [ ] Minimum 16pt body text on any digital UI surface

---

*This document should be read alongside the Zavari Positioning & Messaging guide (voice, tone, and naming standards), the Zavari Pitch Deck Storyboard (applied design specifications for the investor deck), and the Zavari Foundational Philosophy (the principles informing product and brand decisions).*
