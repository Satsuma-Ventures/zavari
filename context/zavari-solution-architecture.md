# Zavari: Solution Architecture

*Internal document — co-founder alignment & prospect evaluation*
*Last updated: March 2026*

---

## How Zavari Works

Zavari functions as the operating system beneath a product organization's existing tool ecosystem. It does not ask teams to replace their tools or rebuild their workflows. It connects what's already there — ingesting signals from across the stack, synthesizing them through the Triangulation Engine, and producing structured intelligence and execution artifacts that flow back into the tools teams already use.

The central architectural principle is an **unbroken chain from strategic intelligence to product delivery**. Most strategic intelligence systems stop at the recommendation — they produce a brief or a report and hand it off. Zavari maintains the thread: intelligence produces a recommendation, the recommendation informs an OKR structure, the OKR structure generates execution artifacts, execution produces outcomes, and outcomes feed back into the next strategic question. At every link in that chain, the reasoning is preserved and traceable. This is what makes Zavari an OS rather than a planning tool — it doesn't just help organizations make better decisions; it ensures those decisions connect to what actually gets built.

The architecture operates across three layers: **Signal Ingestion**, **Intelligence Synthesis**, and **Output & Orchestration**. Each layer is described below, along with the integration category model that defines how Zavari connects to the broader ecosystem.

---

## The Integration Category Model

Zavari integrates with tools by category, not by specific vendor. A product organization might use Dovetail or Condens or UserTesting for qualitative research — the category is what matters, not the tool. This means Zavari's architecture is durable as companies swap tools within a category, and it respects the BYO processes principle: bring your stack, Zavari coordinates it.

Eight integration categories form the ecosystem:

---

### 1. Qualitative Research Platforms
*Examples: Dovetail, Condens, UserTesting, Maze, Lookback*

**What Zavari reads:** Interview transcripts, tagged insights, research themes, session recordings metadata, participant cohort definitions.

**Signal type:** First-party qualitative — what customers say, feel, and experience. The richest signal for surfacing unmet needs and validating strategic assumptions at the human level.

**Integration model:** Read-only API or export ingestion. Zavari pulls tagged research repositories on a defined cadence or in response to a triggered workflow (e.g., a new research study is marked complete).

**Key tension:** Qualitative research is inherently unstructured. Zavari's intelligence layer must normalize themes and insights across different tagging taxonomies and research methodologies — this is a non-trivial NLP problem and a core part of the Triangulation Engine's value.

---

### 2. Quantitative Analytics Platforms
*Examples: Amplitude, Mixpanel, Heap, Pendo, FullStory*

**What Zavari reads:** Feature adoption metrics, retention curves, funnel conversion data, user segment behavior, A/B test results.

**Signal type:** First-party quantitative — what customers actually do. The ground truth signal that either confirms or contradicts what qualitative research surfaces.

**Integration model:** Read-only API. Most analytics platforms expose rich query APIs. Zavari pulls pre-defined metric sets relevant to active strategic questions, rather than ingesting the full data warehouse.

**Key tension:** The volume of available quantitative data is enormous. Zavari must be opinionated about which metrics are strategically relevant — pulling everything creates noise, not signal. Metric selection logic is part of the Triangulation Engine configuration.

---

### 3. Market & Industry Intelligence
*Sources: Open web, news and media, earnings calls, job postings, patent filings, regulatory filings, G2 and review platforms, competitive intelligence tools (Crayon, Klue), social signals, analyst summaries*

**What Zavari synthesizes:** Category trend signals, competitive movement, market sentiment, share of voice patterns, hiring signals (leading indicators of competitor investment), product review themes, pricing changes, partnership announcements.

**Signal type:** Third-party market data — what's happening outside the organization. The external reference point that contextualizes internal signals and surfaces category-level shifts before they show up in product metrics.

**Integration model:** This category is powered by Zavari's AI synthesis layer rather than third-party licensing. Rather than depending on Gartner or Forrester subscriptions — which most Series B companies don't have, and which operate on content licensing models rather than open APIs — Zavari actively synthesizes market intelligence from open sources in response to a strategic question or on a continuous monitoring basis. Review platforms (G2, Trustpilot) and competitive intelligence tools (Crayon, Klue) offer API access for structured signal ingestion. For deeper analyst content a customer already licenses, structured import workflows allow that content to be fed into the Triangulation Engine.

**What AI synthesis covers:**
- Competitive moves — product launches, pricing changes, positioning shifts surfaced from news, press releases, and review platforms
- Market category signals — emerging trends, regulatory changes, technology shifts synthesized from open web sources
- Hiring signals — competitor job postings as leading indicators of strategic investment areas
- Earnings and financial signals — public company commentary on market conditions and product direction
- Customer sentiment at the category level — review platform themes aggregated across competitors

**Key advantage:** Zavari's market intelligence capability is native and continuous — not gated behind a licensing relationship. It also means the intelligence is tailored to the specific strategic question being asked, rather than a generic analyst report written for a broad audience.

---

### 4. Product Planning & Roadmapping
*Examples: Productboard, Aha!, airfocus, Craft.io*

**What Zavari reads:** Feature requests, customer feedback scores, prioritization frameworks, current roadmap state, initiative definitions.

**What Zavari writes:** Strategic recommendations translated into initiative-level priorities, updated roadmap inputs informed by Triangulation Engine output.

**Signal type:** Internal planning state — the organization's current strategic bets and the customer demand signals that have been captured through the product management workflow.

**Integration model:** Bidirectional. This is the category with the most overlap with Zavari's own intelligence layer — and the category Zavari is positioned to replace over time as its planning capabilities mature. In the near term, Zavari reads from these tools as a signal source and writes back strategic prioritization inputs. As Zavari's roadmapping output matures, this category becomes redundant.

**Replacement arc:** Near term — signal source and output target. Medium term — Zavari's strategic planning layer handles prioritization with richer context than standalone roadmapping tools. Long term — product planning consolidates into Zavari.

---

### 5. Project & Delivery Management
*Examples: Jira, Linear, Asana, Shortcut*

**What Zavari reads:** Current sprint state, epic and story definitions, delivery velocity, ticket patterns, backlog health.

**What Zavari writes:** Epics and stories generated from strategic decisions, with the originating intelligence embedded so context doesn't degrade at the handoff from strategy to execution.

**Signal type:** Execution reality — what the team is actually building and how fast. The most reliable signal for detecting execution drift — when what's being delivered no longer maps to what was decided strategically.

**Integration model:** Bidirectional. Reading delivery state is straightforward via standard APIs. Writing back structured artifacts (epics, stories, acceptance criteria) requires more careful schema mapping to the organization's existing project structure.

**Key tension:** Writing into project management tools without human review creates risk — a strategic recommendation that auto-generates poorly scoped tickets creates more work than it saves. Zavari's v1 approach should treat write-back as a draft-and-review workflow, not autonomous generation.

---

### 6. Documentation & Knowledge Management
*Examples: Confluence, Notion, Guru, Tettra*

**What Zavari reads:** Existing strategy documents, decision logs, product briefs, competitive research, historical planning artifacts.

**What Zavari writes:** Strategic opportunity briefs, Triangulation Engine outputs, decision records with embedded reasoning.

**Signal type:** Institutional context — the organization's accumulated strategic knowledge. Critical for understanding historical decisions, prior research, and the reasoning that produced current strategic bets.

**Integration model:** Bidirectional. Documentation platforms are typically the most accessible integration — most offer well-documented APIs or webhook support. Zavari reads existing content to build organizational context, and writes synthesized outputs back as the strategic system of record.

**Key tension:** Documentation platforms accumulate noise over time — outdated strategies, superseded decisions, abandoned initiatives. Zavari needs recency weighting and document relevance scoring to avoid treating stale institutional content as current signal.

---

### 7. CRM & Sales Signal Platforms
*Examples: Salesforce, HubSpot, Gong, Chorus*

**What Zavari reads:** Deal blockers, feature requests surfaced in sales conversations, lost deal reasons, customer segment patterns, conversation intelligence themes.

**Signal type:** Market-facing demand signal — what prospects and customers are saying in commercial contexts. Often the earliest leading indicator of product-market fit gaps, competitive displacement risk, and unmet need patterns that haven't yet surfaced in product analytics or formal research.

**Integration model:** Read-only API. CRM data requires careful scoping — Zavari is not a sales analytics tool. The specific signals Zavari extracts are strategic: recurring themes across deals, not individual opportunity management.

**Key tension:** CRM data quality varies enormously. Zavari's intelligence layer is only as good as the sales team's discipline in logging deal context. This category may require a data quality filter before signals are weighted in the Triangulation Engine.

---

### 8. Data Warehouse
*Examples: Snowflake, BigQuery, Databricks, Redshift*

**What Zavari reads:** Cleaned, modeled versions of any of the above signal categories — behavioral data, financial metrics, product telemetry, customer data.

**Signal type:** Structured organizational intelligence — the canonical data layer for organizations that have invested in a modern data stack.

**Integration model:** Read-only query interface. For organizations with a mature data warehouse, this is the most efficient integration path — rather than connecting to each source system individually, Zavari queries the already-modeled data that the data team maintains. This is the preferred integration pattern for quantitative signals at organizations with dedicated data infrastructure.

**Key tension:** The data warehouse reflects what the data team has chosen to model. Signals that haven't been prioritized by the data team — certain qualitative data, unstructured content — won't be available here and require direct source integrations.

---

## Layer 1: Signal Ingestion

Zavari continuously reads from connected categories, normalizing signals into a unified intelligence store. This is not a data warehouse — Zavari does not replicate or own the organization's data. It holds structured representations of signals relevant to active strategic questions, enriched with metadata about source, recency, confidence, and category.

**How signals flow in:**
- **Scheduled pulls** — Zavari queries connected platforms on a defined cadence (daily, weekly, or per planning cycle)
- **Event-driven triggers** — a completed research study, a closed sprint, a new competitive alert — triggers an immediate signal ingestion
- **Manual ingestion** — for licensed analyst content or one-off research inputs that don't have API access, structured upload workflows allow teams to bring signals in without API dependency

The signal store is organized by strategic question, not by source tool. When the Triangulation Engine is working on a strategic question, it draws from all relevant signals across categories — not from any single integration.

---

## Layer 2: The Triangulation Engine

The Triangulation Engine is Zavari's core intelligence mechanism. It resolves across signal categories to produce validated strategic intelligence — surfacing not just what the signals say individually, but where they converge, where they conflict, and what those patterns mean for a specific strategic question.

**The three signal streams it resolves across:**
1. **First-party qualitative** — what customers say (research platforms, CRM conversation intelligence)
2. **First-party quantitative** — what customers do (analytics platforms, data warehouse behavioral data)
3. **Third-party market** — what the market is doing (market intelligence, competitive platforms, analyst content)

**What the engine produces:**
- **Convergence findings** — where signals across all three streams align, producing high-confidence strategic conclusions
- **Contradiction findings** — where signals diverge, surfacing the tension as a strategic question requiring attention rather than silently averaging it away
- **Confidence scoring** — each finding is weighted by the recency, volume, and source reliability of the signals that produced it
- **Gap identification** — where signal coverage is insufficient to support a conclusion, the engine flags the gap and can trigger a research workflow to fill it

The engine is not a black box. Every output is traceable to its source signals — a product leader should be able to follow the reasoning from recommendation back to the underlying data.

---

### Triangulation Engine: Agent Architecture

The Triangulation Engine is implemented as a coordinated cluster of specialized AI agents, each responsible for a specific function in the intelligence workflow. This section documents the agent design for co-founder and technical alignment purposes.

**Research & Intelligence Agent Cluster**

| Agent | Role |
|-------|------|
| **Research Orchestrator** | Central coordination hub — manages the full intelligence lifecycle for a given strategic question. Sequences the other agents, tracks completeness, and identifies when sufficient signal has been gathered to proceed to synthesis. |
| **Survey Intelligence Agent** | Designs, deploys, and analyzes quantitative research. Handles statistical pattern recognition, longitudinal trend tracking, and cohort analysis across survey-based first-party data. |
| **Interview Conductor** | Facilitates and analyzes qualitative research sessions. Manages transcription ingestion, thematic analysis, and insight extraction across interview and focus group data. |
| **Transcript Analyzer** | Processes and codes qualitative data for insights — speaker identification, theme tagging, sentiment analysis, and cross-interview pattern recognition. Outputs normalized insight structures for the Triangulation Engine. |
| **Market Intelligence Agent** | Continuously synthesizes external data sources — open web, news, earnings calls, job postings, patent filings, review platforms, competitive intelligence tools. Structures findings into the third-party signal stream. |
| **Competitive Monitor** | Tracks competitor activities, pricing, positioning shifts, and product launches. Surfaces leading indicators (hiring patterns, job postings) as well as lagging indicators (press releases, product announcements). |
| **Analogous Market Scanner** | Identifies relevant strategic insights from adjacent industries and analogous market situations — pattern-matching from markets where similar dynamics have played out, informing strategic timing and sequencing recommendations. |
| **Triangulation Engine** | The synthesis core. Resolves across all three signal streams (qualitative, quantitative, market) to produce convergence findings, contradiction findings, confidence scores, and gap identifications. Operates on normalized signal structures from all upstream agents. |
| **Research Gap Identifier** | Evaluates signal coverage for a given strategic question and recommends additional research when coverage is insufficient to support a high-confidence conclusion. Can trigger a new research workflow automatically. |
| **Insight Validator** | Cross-references findings across agents for consistency and reliability. Flags where the same claim appears with conflicting confidence across sources, and applies source reliability weighting based on the organization's historical signal accuracy record. |

**Model strategy:** The Research Orchestrator and Triangulation Engine agents use Claude Opus — the highest-reasoning model in the stack — because they are responsible for the synthesis quality that is Zavari's core differentiator. All other agents in this cluster use Claude Sonnet, which handles the volume of ingestion, coding, and pattern recognition tasks at lower cost without sacrificing accuracy on well-defined subtasks. Approximately 85% of agent compute runs on Sonnet; Opus is reserved for the critical strategic reasoning nodes.

**Orchestration framework:** CrewAI manages agent coordination, task sequencing, inter-agent communication, and state management across the intelligence workflow. The Research Orchestrator is the primary CrewAI orchestrator agent; specialized agents are spawned as tasks within its workflow.

---

Zavari produces three classes of output, each mapped to a different workflow and audience:

---

### Output 1: Strategic Opportunity Brief
**What it is:** A synthesized intelligence document that frames a strategic question, presents the triangulated findings, surfaces the key convergences and contradictions, and makes a defensible recommendation.

**Who sees it:** CPO, VP of Product, Head of Strategy — the decision-makers who need to act on strategic intelligence before a planning cycle, board meeting, or investment decision.

**Where it lives:** Writes back to the documentation platform (Confluence, Notion) as the strategic system of record. Every brief is versioned and traceable — future decisions can reference the intelligence that informed prior ones.

**When it's triggered:** On-demand (a strategic question is posed), scheduled (quarterly planning cycle), or event-driven (a significant market or product signal triggers a brief generation).

---

### Output 2: Roadmap & Prioritization Update
**What it is:** A translation of a strategic decision into structured execution artifacts — initiative definitions, prioritized feature areas, epic-level story frameworks — with the strategic reasoning embedded.

**Who sees it:** Product managers, engineering leads, delivery teams — the people who turn strategic decisions into shipped product.

**Where it lives:** Writes back to the project management platform (Jira, Linear) and/or product planning platform (Productboard, Aha!) as draft artifacts for human review before activation.

**When it's triggered:** Following a strategic decision — either from a completed Opportunity Brief review or from a planning cycle checkpoint.

**Critical design principle:** Write-back is always draft-and-review in v1. Zavari generates the artifacts; a human activates them. Autonomous write-back without review is a later-stage capability gated on trust and accuracy validation.

---

### Output 3: Unprompted Signal Alert
**What it is:** A proactive notification surfacing a signal pattern the team didn't ask for — a competitive move that conflicts with a current strategic bet, a customer sentiment shift that contradicts a product assumption, a market trend that changes the context of a roadmap decision.

**Who sees it:** Whoever has configured alert routing — typically the VP of Product or a designated strategic intelligence lead.

**Where it lives:** Delivered via the team's existing communication layer (Slack, email, or the documentation platform as a flagged note). The alert links to the full signal context in Zavari.

**When it's triggered:** Continuously. The environmental scanning layer monitors connected signal sources on an ongoing basis and fires alerts when a pattern crosses a defined significance threshold.

**This is the north star output.** It's what separates Zavari as an OS from Zavari as a query tool. The team didn't ask for it. Zavari surfaced it because the signals said something mattered.

---

## How Teams Interact With Zavari

Zavari is a SaaS product with two distinct interaction surfaces, each designed for a different audience and job to be done. They share the same underlying intelligence layer — the same Triangulation Engine, the same strategic record, the same OKR structure — but surface it differently depending on who's looking and what they need to do.

---

### Surface 1: The Strategic Command Layer
*Primary audience: CPO, VP of Product, Head of Strategy*

The command layer is Zavari's primary product UI — a purpose-built interface where senior product leaders run the strategic operating system. This is where strategic questions are opened, Briefs are reviewed and accepted, the quarterly OKR structure is drafted and managed, outcome health is monitored across active bets, and the decision record is maintained.

**Key interactions:**
- **Open a strategic question** — pose a question to the Triangulation Engine, configure the signal sources and timeframe, and receive a structured Brief
- **Review and accept Briefs** — read the triangulated findings, convergences, contradictions, and recommendation; annotate, adjust, and accept or reject
- **Manage the OKR structure** — review Zavari's draft company-level OKRs ahead of the planning cycle, adjust, approve, and cascade to team level
- **Monitor strategic health** — a continuous dashboard showing the status of active OKRs, leading and lagging indicators, and at-risk signals across all live strategic bets
- **Review the decision record** — an auditable, searchable history of every strategic decision, the intelligence that drove it, and the outcome it produced
- **Respond to alerts** — review Unprompted Signal Alerts, assess their relevance, and decide whether to escalate, adjust an active OKR, or open a new strategic question

**Design principle:** This surface is built for depth, not frequency. A CPO might spend focused time here weekly — reviewing health signals, preparing for planning cycles, responding to alerts — rather than living in it daily. The interface should reflect that: high information density, low friction for the decisions that matter.

---

### Surface 2: Lightweight Execution Surfaces
*Primary audience: Product managers, engineering leads, delivery teams*

Teams working in Jira, Confluence, or Slack should not need to open Zavari to understand the strategic context behind their work. The lightweight execution surfaces bring relevant intelligence to where teams already operate — as embedded context, not a separate destination.

**Key surfaces:**
- **Jira / project management** — each epic and story generated by Zavari carries an embedded link to the originating Strategic Opportunity Brief and the OKR it serves. A PM reviewing a ticket can see in one click why this work exists and what outcome it's supposed to produce
- **Confluence / documentation** — Strategic Opportunity Briefs, OKR structures, and decision records write back to Confluence as versioned, linked documents. Teams can navigate from any strategic artifact to its supporting intelligence and back
- **Slack / communication** — Unprompted Signal Alerts and OKR health notifications are delivered to configured Slack channels, with a link back to the full context in the command layer. The alert surface in Slack is read-only and action-prompting — it tells you something matters, not what to do about it

**Design principle:** The execution surfaces are read-only and context-providing, not input-capturing. Teams consume strategic intelligence through these surfaces; they don't manage strategy through them. The command layer is where strategic work happens. The execution surfaces ensure that work is visible to everyone it affects.

---

### The Relationship Between the Two Surfaces

The command layer and execution surfaces are not separate products — they are two views of the same system. A decision made in the command layer propagates immediately to the execution surfaces. A signal detected by the execution layer (an at-risk sprint, an anomalous metric) feeds back up to the command layer as an input to outcome tracking.

This bidirectional flow is what makes Zavari an OS rather than two disconnected tools. The command layer sets direction; the execution surfaces maintain alignment; and the intelligence layer runs continuously beneath both.

---

**A note on mid-cycle pivots:** The quarterly OKR cadence is a default rhythm, not a constraint. When the Triangulation Engine surfaces a significant signal mid-quarter — a competitor move, a market shift, a pattern that invalidates a strategic assumption — Zavari flags it immediately via the Unprompted Alert surface. Good teams don't wait for the next planning ceremony to respond to material changes in strategic context, and Zavari is designed to support that. The OKR structure can be updated mid-cycle; the change and its rationale are versioned in the strategic record.

---

## Strategic Alignment & Continuity

The three output classes above are point-in-time — they produce intelligence, artifacts, and alerts at specific moments in the strategic workflow. But the OS metaphor only holds if Zavari maintains the thread between what was decided and what actually happened. That longitudinal layer is what this section covers.

Most strategic intelligence systems stop at the recommendation. Zavari doesn't. Once a decision is made and execution begins, Zavari maintains a continuous connection between the original strategic intent, the execution underway, and the outcomes materializing — surfacing drift, compounding learning, and building the organizational intelligence moat that makes Zavari increasingly valuable over time.

---

### Strategic Coordination: Cascading OKRs

**What it is:** Strategic coordination in Zavari follows the model that practitioners like Marty Cagan (SVPG) and John Doerr (*Measure What Matters*) have established as best practice: the cascade flows top-down, from company vision to product strategy to company-level OKRs to team-level objectives — with key results proposed bottom-up by the teams themselves. Zavari's role is to surface the intelligence that makes each level of that cascade more defensible, and to maintain the thread of reasoning from vision through to execution.

**The correct sequence:**
1. **Vision** — The multi-year north star, set by senior leadership. Zavari informs but does not generate this; it's a human leadership responsibility.
2. **Product strategy** — The quarterly focus derived from the vision. Zavari's Triangulation Engine surfaces the critical problems worth solving, with supporting intelligence. Leadership makes the strategic choices.
3. **Company-level OKRs** — Set by the CPO and senior product leaders 4-6 weeks before the quarter, informed by Zavari's active strategic decisions. Zavari consolidates the accepted Strategic Opportunity Briefs into a draft company OKR structure for leadership review. Objectives are leadership's responsibility; Zavari proposes, leadership decides.
4. **Team-level objectives** — Leadership assigns problem statements to specific product teams based on the product strategy and team topology. Following SVPG's empowerment model, leadership sets the objectives; teams propose their own key results. Zavari captures and links the full structure — company to team level — so context never degrades in the cascade.
5. **Active management** — Zavari monitors execution against the OKR structure throughout the quarter, surfacing drift, dependency conflicts, and at-risk objectives to the relevant leaders before they become problems.

**Why it matters:** OKRs at most organizations are set in a planning offsite and then disconnected from both the intelligence that should inform them and the execution that should serve them. Teams optimize for the metric without understanding the strategic reasoning behind it. Zavari keeps the reasoning alive at every level — a team working on SSO implementation can see the Strategic Opportunity Brief that produced the enterprise tier bet their work is serving.

**Where it lives:** OKR structures write back to the documentation platform as the strategic system of record, and sync to the project management platform so delivery teams see their work in the context of the strategic outcome it's serving. The structure is versioned — when objectives shift mid-quarter, the change and its rationale are captured.

---

### Outcome Visibility: Strategic Performance Tracking

**What it is:** Once OKRs are set and execution is underway, Zavari monitors whether the strategic outcomes are materializing — not just whether tickets are closing or sprints are completing. It draws continuously on the quantitative analytics, project management, and CRM integrations to surface whether the strategic bet is paying off, and flags divergence between predicted and actual outcomes before the next planning cycle discovers it manually.

**Why it matters:** The gap between "we made a decision" and "we know if it was the right decision" is typically a full planning cycle — three months of compounding execution in a direction that may already be wrong. Zavari closes that gap by making strategic outcome tracking continuous rather than retrospective.

**How it works:** Each accepted strategic decision produces a set of leading and lagging outcome indicators — the metrics that should move if the bet is correct, and the timeline over which they should move. Zavari monitors these indicators against the connected analytics and project management platforms, and surfaces a strategic health signal: on track, drifting, or at risk. Drifting or at-risk signals trigger an Unprompted Signal Alert to the relevant decision-maker.

**What it surfaces:**
- **Leading indicators** — early signals that the strategic direction is gaining traction (e.g., feature adoption in the target segment, deal velocity in the target market)
- **Lagging indicators** — outcome confirmation that the bet produced the intended result (e.g., retention improvement, revenue growth in the target tier)
- **Execution drift** — where what's being built has diverged from what was decided, detected by monitoring the gap between the strategic OKR structure and the actual work in the delivery pipeline

---

### Decision Retrospective: Strategic Learning

**What it is:** Over time, Zavari builds an auditable record of what was decided, what intelligence drove each decision, what execution followed, and what the outcome was. This institutional memory compounds — future strategic questions benefit from the organization's own decision history, not just external signals. It is the capability that makes Zavari increasingly hard to replace the longer a team uses it.

**Why it matters:** Most organizations make the same strategic mistakes repeatedly because there is no structured record of prior decisions and their outcomes. A new CPO inherits a roadmap with no traceable reasoning. A team debates a market expansion that was evaluated and rejected two years ago, with no record of why. Zavari makes organizational strategic learning explicit and searchable rather than tacit and perishable.

**How it works:** Every Strategic Opportunity Brief, every accepted OKR structure, every outcome tracking record, and every Unprompted Signal Alert is versioned and stored in Zavari's strategic record. When a new strategic question is opened, the Triangulation Engine queries the decision history for analogous prior questions — surfacing what was decided, what intelligence supported it, and what the outcome was. This prior context is weighted alongside current signals in producing the new recommendation.

**What compounds over time:**
- **Decision patterns** — which types of strategic bets have produced outcomes, which haven't, and under what market conditions
- **Signal reliability** — which signal sources have historically predicted outcomes accurately for this organization, informing how the Triangulation Engine weights future inputs
- **Strategic vocabulary** — the organization's own strategic frameworks, terminology, and evaluation criteria, encoded into Zavari's intelligence layer through accumulated use
- **Competitive history** — a running record of competitive moves and their outcomes, making the market intelligence layer progressively more accurate for the specific competitive context the organization operates in

**The moat this creates:** Strategic learning is organizational — it belongs to the company, not to any individual. When a VP of Product leaves, the strategic institutional memory stays. When a new CPO joins, they inherit a structured record of why the organization is where it is. This is the capability that transforms Zavari from a planning tool into a genuine organizational asset.

---

## The Data Flow in Practice

A concrete walk-through using the category model:

> A Series B SaaS company is deciding whether to invest in a new enterprise tier. The VP of Product opens a strategic question in Zavari: *"Is there sufficient demand and market readiness to justify an enterprise tier in the next two quarters?"*

1. **Signal Ingestion** — Zavari pulls: interview transcripts tagged "enterprise" or "security/compliance" from the qualitative research platform; feature adoption data segmented by company size from the analytics platform; analyst commentary on enterprise SaaS buying behavior synthesized from open sources, earnings calls, and review platforms; deal notes mentioning "SSO", "SAML", or "admin controls" from CRM; any prior strategy docs on enterprise positioning from the documentation platform.

2. **Triangulation Engine** — resolves across streams: qualitative says enterprise customers want compliance features before committing; quantitative shows power users cluster in mid-market, not enterprise; market intelligence shows the category is moving upmarket; CRM shows 4 lost deals in the last quarter cited missing SSO. Convergence: compliance features are a real blocker. Contradiction: current user base skews smaller than the target enterprise segment — adoption data may not predict enterprise behavior.

3. **Output** — Zavari produces a Strategic Opportunity Brief: enterprise tier is viable but sequencing matters — compliance and SSO investment gates enterprise acquisition, not packaging. Recommends a phased approach: ungate compliance features first, validate enterprise conversion, then formalize the tier. Brief writes to Confluence as a versioned strategic record, available to leadership as active input into the quarterly planning cycle. No execution artifacts are generated yet — those come after the OKR structure is established.

4. **Strategic Coordination** — The enterprise tier Brief is one of several active strategic decisions Zavari has produced this quarter, alongside a pricing simplification initiative and a platform reliability investment. As the quarterly planning cycle opens — 4-6 weeks before Q2 — Zavari surfaces these decisions as consolidated input for the CPO's company OKR-setting process. The CPO reviews the active Briefs, makes the strategic choices, and works with Zavari to draft company-level OKRs:
   - *Company objective:* Establish the product and commercial foundation for enterprise segment entry
   - *KR1:* SSO and SAML compliance features shipped and available to all plans by end of Q2
   - *KR2:* 3 net-new enterprise logo trials (500+ seat companies) initiated within 60 days of compliance release
   - *KR3:* Enterprise trial-to-paid conversion rate of ≥25% by end of Q3
   The CPO approves the company-level OKRs. Leadership then meets with each product team, shares the strategic context — the why behind each objective, traceable back to the originating Brief — and assigns the team-level problems to solve. Following SVPG's empowerment model, leadership sets the objectives; teams propose their own key results. Once team OKRs are confirmed, Zavari generates draft Jira epics for SSO and SAML implementation, scoped to the team's accepted objectives, pending engineering lead review. The full OKR structure — company to team level, linked to the originating intelligence — is captured in Confluence as the strategic system of record.

5. **Outcome Visibility — Week 6** — SSO ships. Zavari begins monitoring leading indicators against the established OKRs. Analytics platform shows SSO feature adoption is strong among existing mid-market accounts — but enterprise trial signups are not materializing at the expected rate. Zavari surfaces a strategic health signal: *KR2 at risk — trial velocity tracking at 1 of 3 targets with 4 weeks remaining.* The signal is delivered as an Unprompted Alert to the VP of Product before the next planning cycle would have surfaced it.

6. **Unprompted Signal Alert — Week 8** — Independently of the OKR tracking, Zavari's market intelligence layer detects that a direct competitor announced enterprise pricing and SOC 2 Type II certification in the same week. Zavari cross-references this against the active enterprise tier strategic decision and fires an alert: *"Competitor X has moved on enterprise compliance in the same window as your planned tier launch — current differentiation assumption may require reassessment."* The VP of Product didn't ask for this. Zavari surfaced it because the signals said it mattered.

7. **Decision Retrospective — Quarter Close** — The enterprise tier decision, its supporting intelligence, the OKR structure, the outcome tracking record, and both alerts are logged to Zavari's strategic record. When the company evaluates a mid-market expansion six months later, the Triangulation Engine surfaces the enterprise tier decision as prior context — including the insight that compliance features unlocked trial volume but competitive positioning required reassessment mid-cycle. The next strategic question starts smarter than the last one.

---

## Integration Maturity Model

Not all integrations are equal at every stage of Zavari's development. A practical sequencing framework:

**Phase 1 — Seed the intelligence layer**
Manual ingestion workflows for all categories. Teams export from their tools and upload structured inputs. Proves the Triangulation Engine and output quality before building the plumbing. No API dependencies.

**Phase 2 — Connect the highest-signal categories**
API integrations for qualitative research, quantitative analytics, and project management — the three categories with the most mature API ecosystems and the highest signal value. Event-driven ingestion for sprint completions and research study closures.

**Phase 3 — Close the loop**
Bidirectional integrations for documentation and product planning. Write-back workflows for Opportunity Briefs and roadmap artifacts. CRM integration for sales signal ingestion.

**Phase 4 — Full ecosystem + unprompted intelligence**
Data warehouse integration as the primary quantitative data path. Market intelligence feed partnerships. Continuous environmental scanning with proactive alert delivery. Full BYO process flexibility across all categories.

---

## A Note on the BYO Processes Commitment

Every integration in this architecture is category-defined, not tool-locked. A company that switches from Dovetail to Condens, or from Jira to Linear, should be able to reconfigure their Zavari integrations without rebuilding their intelligence workflows. The Triangulation Engine operates on normalized signal types — not on vendor-specific schemas.

This is a north star architectural commitment. It requires abstraction layers between the integration connectors and the intelligence engine. It is the right design decision even when it creates short-term build complexity, because it is what makes Zavari an OS rather than a bundle of point integrations.

---

*This document should be read alongside the Zavari Foundational Philosophy, which establishes the principles that inform these architectural decisions, and the Zavari Business Plan, which documents the go-to-market and financial model. This document supersedes the earlier project knowledge files: "Zavari: End-to-End Strategic Planning System," "Zavari Phase 1–3" technical specs, and "Zavari Development Orchestration." The agent architecture section above extracts and consolidates the relevant technical detail from those files.*
