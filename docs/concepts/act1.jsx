/* ============================================================================
   ACT 1 — Proactive intelligence
   CommandLayer (Briefing / Console) · OpportunityBrief (Memo / Decision desk)
   Spine scenario: the Opportunity (E) — customers pointing at the next product.
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const { Icon, Eyebrow, Mono, ScreenHeader, Panel, PanelLabel, Confidence, Divider, SourceTag } = K;
  const { CoherenceFlag, StatCallout, Button } = K.DS;
  const D = window.ZV;

  // tone per approach — calm, never a warning light
  const APPROACH = {
    opportunity: 'var(--zv-cyan)',
    risk: 'var(--zv-azure)',
    scale: 'var(--zv-navy)',
  };

  // --- positive coherence chip (converge motif), usable on dark --------------
  function CoherenceChip({ dark }) {
    return (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 9, fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: dark ? '#fff' : 'var(--color-heading)' }}>
        <svg width="24" height="18" viewBox="0 0 24 22" fill="none" stroke="var(--zv-cyan)" strokeWidth="1.75" strokeLinecap="round"><line x1="2" y1="4" x2="22" y2="11" /><line x1="2" y1="11" x2="22" y2="11" /><line x1="2" y1="18" x2="22" y2="11" /><circle cx="22" cy="11" r="1.8" fill="var(--zv-cyan)" stroke="none" /></svg>
        On-strategy · Extends the core
      </span>
    );
  }

  // --- the marquee proactive output, as a hero card -------------------------
  function BriefHero({ go, compact }) {
    const b = D.brief;
    return (
      <div style={{ background: 'var(--gradient-navy)', borderRadius: 8, padding: compact ? 28 : 36, color: '#fff', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-raised)' }}>
        {/* triangulation motif, faint */}
        <svg width="320" height="320" viewBox="0 0 100 100" style={{ position: 'absolute', right: -40, top: -60, opacity: 0.10 }} fill="none" stroke="var(--zv-cyan)" strokeWidth="0.7"><line x1="5" y1="20" x2="80" y2="50" /><line x1="5" y1="50" x2="80" y2="50" /><line x1="5" y1="80" x2="80" y2="50" /><circle cx="80" cy="50" r="2" fill="var(--zv-cyan)" stroke="none" /></svg>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, flexWrap: 'wrap' }}>
          <Mono style={{ fontSize: 11, letterSpacing: '0.06em', color: 'var(--zv-cyan)' }}>{b.kicker}</Mono>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.3)' }} />
          <Mono style={{ fontSize: 11, color: 'rgba(224,230,237,0.65)' }}>{b.generated}</Mono>
        </div>
        <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: compact ? 26 : 32, lineHeight: 1.2, margin: 0, maxWidth: 720, letterSpacing: '-0.01em' }}>{b.title}</h2>
        {!compact && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 16, lineHeight: 1.6, color: 'rgba(224,230,237,0.86)', margin: '16px 0 0', maxWidth: 660 }}>{b.standfirst}</p>}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 22, flexWrap: 'wrap' }}>
          <CoherenceChip dark />
          <span style={{ width: 1, height: 22, background: 'rgba(255,255,255,0.14)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
            <Mono style={{ fontSize: 11, color: 'rgba(224,230,237,0.55)' }}>TRIANGULATED FROM</Mono>
            <SourceTag source="Zavari Research" kind="owned" />
            <SourceTag source="Amplitude" kind="connected" />
            <SourceTag source="Support" kind="connected" />
            <SourceTag source="Market Intelligence" kind="market" />
          </div>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 26 }}>
          <Button variant="primary" onClick={() => go('brief')} iconRight={<Icon name="arrow" size={15} />}>Open the brief</Button>
          <Button variant="ghost" onClick={() => go('coherence')} style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.35)' }}>See where it fits</Button>
        </div>
      </div>
    );
  }

  // --- surfaced item card — labeled by approach -----------------------------
  function SurfacedCard({ item, go, compact }) {
    const tone = APPROACH[item.tone];
    return (
      <Panel hover onClick={() => go(item.to)} pad={compact ? 20 : 22} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: tone, flexShrink: 0 }} />
          <Mono style={{ fontSize: 10.5, letterSpacing: '0.08em', color: 'var(--color-secondary)' }}>{item.approach.toUpperCase()}</Mono>
        </div>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 17, lineHeight: 1.32, color: 'var(--color-heading)', marginBottom: 8 }}>{item.headline}</div>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, lineHeight: 1.55, color: 'var(--color-ink)', margin: '0 0 16px' }}>{item.meta}</p>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{item.sources.slice(0, 2).map((s, i) => <SourceTag key={i} source={s.source} kind={s.kind} />)}</div>
          <Confidence level={item.confidence} />
        </div>
      </Panel>
    );
  }

  // --- active bets mini list ------------------------------------------------
  function BetsPanel() {
    return (
      <Panel>
        <PanelLabel icon="coherence" right={<Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{D.bets.length} active</Mono>}>Where it lands on the roadmap</PanelLabel>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {D.bets.slice(0, 5).map((b, i) => (
            <div key={b.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '10px 0', borderTop: i ? '1px solid var(--color-border)' : 'none' }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 500, color: 'var(--color-heading)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{b.name}</div>
                <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{b.quarter} · {b.tag}</Mono>
              </div>
              <CoherenceFlag state={b.state} size="sm" />
            </div>
          ))}
        </div>
      </Panel>
    );
  }

  function SourcesFeeding() {
    const group = (label, list, kind) => (
      <div>
        <Mono style={{ fontSize: 10.5, color: 'var(--color-secondary)', display: 'block', marginBottom: 8, letterSpacing: '0.05em' }}>{label}</Mono>
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{list.map(s => <SourceTag key={s} source={s} kind={kind} />)}</div>
      </div>
    );
    return (
      <Panel>
        <PanelLabel icon="ecosystem">Sources feeding this</PanelLabel>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {group("ZAVARI'S TOOLS", D.sources.owned, 'owned')}
          {group('MARKET INTELLIGENCE', D.sources.market, 'market')}
          {group('YOUR CONNECTED STACK', D.sources.connected, 'connected')}
          <Mono style={{ fontSize: 11, color: 'var(--color-secondary)', lineHeight: 1.5, borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>Every source is weighed as a peer — no single vendor decides a conclusion.</Mono>
        </div>
      </Panel>
    );
  }

  function GreetingHead() {
    return (
      <ScreenHeader
        eyebrow="Strategic Command Layer · since you last looked"
        title={`Good morning, ${D.tenant.user.name.split(' ')[0]}. Zavari has been working.`}
        lede={`Three things surfaced since ${D.tenant.lastSeen} — generated proactively, not in response to a query.`}
        right={<div style={{ textAlign: 'right' }}><Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>NORTH STAR · THIS WEEK</Mono><div style={{ marginTop: 4 }}><StatCallout value={D.northStar.value} trend={D.northStar.trend} label="WEEKLY ACTIVATED ACCOUNTS" align="left" /></div></div>}
      />
    );
  }

  function CommandLayer({ variant, go }) {
    if (variant === 'console') {
      return (
        <div>
          <GreetingHead />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 16 }}>
            <Panel><StatCallout value="6 / 10" label="LARGEST ACCOUNTS EXPORTING DATA" /><Mono style={{ fontSize: 11, color: 'var(--color-secondary)', marginTop: 6, display: 'block' }}>independently · no prompting</Mono></Panel>
            <Panel><StatCallout value="3.4×" label="EXPANSION RATE OF THOSE ACCOUNTS" /><Mono style={{ fontSize: 11, color: 'var(--color-secondary)', marginTop: 6, display: 'block' }}>vs. the rest of the base</Mono></Panel>
            <Panel accent><StatCallout value="1" label="STRATEGIC OPPORTUNITY OPEN" /><Mono style={{ fontSize: 11, color: 'var(--color-secondary)', marginTop: 6, display: 'block' }}>extends the core</Mono></Panel>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 16, alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <BriefHero go={go} compact />
              <div>
                <Divider>Also surfaced</Divider>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {D.surfaced.slice(1).map(it => <SurfacedCard key={it.id} item={it} go={go} compact />)}
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <BetsPanel />
              <SourcesFeeding />
            </div>
          </div>
        </div>
      );
    }
    // briefing (editorial)
    return (
      <div>
        <GreetingHead />
        <BriefHero go={go} />
        <div style={{ marginTop: 28 }}>
          <Divider>Also surfaced since {D.tenant.lastSeen}</Divider>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {D.surfaced.slice(1).map(it => <SurfacedCard key={it.id} item={it} go={go} />)}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
          <BetsPanel />
          <SourcesFeeding />
        </div>
      </div>
    );
  }

  // ==========================================================================
  // OPPORTUNITY BRIEF — the marquee surface
  // ==========================================================================
  function RecBlock({ go, boxed }) {
    const b = D.brief;
    return (
      <div style={{ background: boxed ? 'var(--zv-cool-gray-soft)' : 'transparent', border: boxed ? '1px solid var(--color-border)' : 'none', borderLeft: '3px solid var(--zv-azure)', borderRadius: boxed ? 6 : 0, padding: boxed ? '20px 24px' : '4px 0 4px 20px' }}>
        <Eyebrow style={{ color: 'var(--color-link)', marginBottom: 8 }}>Recommendation</Eyebrow>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 20, lineHeight: 1.4, color: 'var(--color-heading)' }}>{b.recommendation}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16, flexWrap: 'wrap' }}>
          <Button variant="primary" onClick={() => go('decision')} iconRight={<Icon name="arrow" size={15} />}>Open as Decision Record</Button>
          <Button variant="secondary" onClick={() => go('coherence')}>See the coherence read</Button>
        </div>
      </div>
    );
  }

  function Finding({ f, memo }) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: memo ? 20 : 16, padding: '22px 0', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 26, color: 'var(--color-heading)', lineHeight: 1 }}>{String(f.n).padStart(2, '0')}</div>
        <div>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: memo ? 21 : 19, lineHeight: 1.4, color: 'var(--color-heading)' }}>{f.claim}</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--color-ink)', margin: '10px 0 14px', maxWidth: 640 }}>{f.detail}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <Confidence level={f.confidence} />
            {f.coherent && <CoherenceFlag state="coherent" label="Extends the core" size="sm" />}
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{f.sources.map((s, i) => <SourceTag key={i} source={s.source} kind={s.kind} count={s.count} />)}</div>
          </div>
        </div>
      </div>
    );
  }

  // positive knock-on effect — an upside, not a warning
  function KnockOn({ boxed }) {
    const k = D.brief.knockOn;
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '40px 1fr', gap: boxed ? 20 : 16, padding: '22px 0 4px', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ color: 'var(--zv-navy)', paddingTop: 2 }}><Icon name="coherence" size={22} /></div>
        <div>
          <Eyebrow style={{ color: 'var(--color-secondary)', marginBottom: 8 }}>{k.label}</Eyebrow>
          <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: boxed ? 21 : 19, lineHeight: 1.4, color: 'var(--color-heading)' }}>{k.claim}</div>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15.5, lineHeight: 1.6, color: 'var(--color-ink)', margin: '10px 0 14px', maxWidth: 640 }}>{k.detail}</p>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>{k.sources.map((s, i) => <SourceTag key={i} source={s.source} kind={s.kind} />)}</div>
        </div>
      </div>
    );
  }

  function BriefMeta() {
    const b = D.brief;
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap', marginBottom: 18 }}>
        <Mono style={{ fontSize: 11, letterSpacing: '0.05em', color: 'var(--color-link)' }}>{b.kicker}</Mono>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-border)' }} />
        <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{b.id} · {b.generated}</Mono>
      </div>
    );
  }

  function OpportunityBrief({ variant, go }) {
    const b = D.brief;
    if (variant === 'desk') {
      // decision desk — structured, scannable
      return (
        <div>
          <BriefMeta />
          <ScreenHeader title={b.title} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 20, alignItems: 'start' }}>
            <div>
              <Panel style={{ marginBottom: 16 }}><RecBlock go={go} /></Panel>
              <Panel>
                <PanelLabel icon="brief" right={<Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{b.findings.length} findings</Mono>}>The evidence</PanelLabel>
                <div style={{ marginTop: -6 }}>{b.findings.map(f => <Finding key={f.n} f={f} />)}<KnockOn /></div>
              </Panel>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, position: 'sticky', top: 76 }}>
              <Panel style={{ background: 'var(--gradient-navy)', border: 'none' }}>
                <Mono style={{ fontSize: 10.5, color: 'var(--zv-cyan)', letterSpacing: '0.06em' }}>{b.projected.label}</Mono>
                <div style={{ marginTop: 10 }}><StatCallout value={b.projected.value} unit={b.projected.unit} onDark /></div>
                <Mono style={{ fontSize: 12, color: 'rgba(224,230,237,0.7)', display: 'block', marginTop: 12, lineHeight: 1.5 }}>These accounts are already expanding faster than the rest of the base.</Mono>
              </Panel>
              <Panel>
                <PanelLabel icon="coherence">Coherence read-out</PanelLabel>
                <CoherenceFlag state="coherent" label="On-strategy" detail="Extends what customers already value" />
                <div style={{ height: 12 }} />
                <CoherenceFlag state="coherent" label="Deepens O3" detail="Feeds “Become the system of record”" />
              </Panel>
              <Panel>
                <PanelLabel icon="spark">Why now</PanelLabel>
                <Mono style={{ fontSize: 12.5, color: 'var(--color-ink)', lineHeight: 1.6 }}>The behavior is accelerating and no competitor has planted a flag. Move first and you define the category.</Mono>
              </Panel>
            </div>
          </div>
        </div>
      );
    }
    // memo — editorial long-form
    return (
      <div style={{ maxWidth: 940, margin: '0 auto' }}>
        <BriefMeta />
        <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 38, lineHeight: 1.18, color: 'var(--color-heading)', margin: '0 0 18px', letterSpacing: '-0.01em' }}>{b.title}</h1>
        <p style={{ fontFamily: 'var(--font-sans)', fontSize: 19, lineHeight: 1.6, color: 'var(--color-ink)', margin: '0 0 22px' }}>{b.standfirst}</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, padding: '14px 0', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)', flexWrap: 'wrap' }}>
          <CoherenceFlag state="coherent" label={b.coherence.label} detail={b.coherence.detail} />
          <span style={{ flex: 1 }} />
          <div style={{ textAlign: 'right' }}>
            <Mono style={{ fontSize: 10.5, color: 'var(--color-secondary)' }}>{b.projected.label}</Mono>
            <div style={{ marginTop: 2 }}><StatCallout value={b.projected.value} unit={b.projected.unit} /></div>
          </div>
        </div>
        <div style={{ margin: '8px 0 28px' }}>
          {b.findings.map(f => <Finding key={f.n} f={f} memo />)}
          <KnockOn boxed />
        </div>
        <div style={{ borderTop: '2px solid var(--zv-navy)', paddingTop: 24 }}>
          <RecBlock go={go} boxed />
        </div>
      </div>
    );
  }

  window.CommandLayer = CommandLayer;
  window.OpportunityBrief = OpportunityBrief;
})();
