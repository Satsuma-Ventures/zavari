/* ============================================================================
   ACT 4 — The owned stack (foundation / where you start)
   StrategyOKR · PlanningRoadmap (ROI bridge) · ResearchScreen (VoC bridge)
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const { Icon, Eyebrow, Mono, MvpTag, ScreenHeader, Panel, PanelLabel, SourceCluster, Confidence, Divider, BarRow, cohColor } = K;
  const { CoherenceFlag, StatCallout, Button, Badge } = K.DS;
  const { SourceTag } = K;
  const D = window.ZV;

  function KRrow({ kr }) {
    return (
      <div style={{ padding: '10px 0', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 7 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-ink)' }}>{kr.kr}</span>
          <Mono style={{ fontSize: 12.5, color: 'var(--color-heading)' }}>{kr.now} <span style={{ color: 'var(--color-secondary)' }}>/ {kr.target}</span></Mono>
        </div>
        <div style={{ height: 6, background: 'var(--zv-cool-gray-soft)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: kr.pct + '%', height: '100%', background: 'var(--zv-navy)', borderRadius: 3 }} />
        </div>
      </div>
    );
  }

  // ---- O1 Strategy / OKR ---------------------------------------------------
  function StrategyOKR({ go }) {
    const ns = D.northStar;
    return (
      <div>
        <ScreenHeader
          eyebrow="Strategy / OKR · Zavari's strategic surface"
          title="The strategy, in one canonical shape."
          lede="A north star, the objectives that ladder to it, and the key results that move it — light to keep current, structured enough for the intelligence layer to reason about."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 16, alignItems: 'start' }}>
          <Panel style={{ background: 'var(--gradient-navy)', border: 'none', position: 'sticky', top: 76 }}>
            <Mono style={{ fontSize: 10.5, color: 'var(--zv-cyan)', letterSpacing: '0.07em' }}>NORTH STAR</Mono>
            <div style={{ marginTop: 14 }}><StatCallout value={ns.value} trend={ns.trend} label={ns.label} onDark /></div>
            <Mono style={{ fontSize: 12.5, color: 'rgba(224,230,237,0.78)', display: 'block', marginTop: 14, lineHeight: 1.5 }}>{ns.sub}</Mono>
            <div style={{ borderTop: '1px solid rgba(255,255,255,0.12)', marginTop: 18, paddingTop: 16 }}>
              <Mono style={{ fontSize: 10.5, color: 'rgba(224,230,237,0.5)', display: 'block', marginBottom: 10 }}>EVERY OBJECTIVE LADDERS HERE</Mono>
              {D.objectives.map(o => (
                <div key={o.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--zv-cyan)' }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: '#fff' }}>{o.name}</span>
                </div>
              ))}
            </div>
          </Panel>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {D.objectives.map(o => (
              <Panel key={o.id}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, marginBottom: 4 }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#fff', background: 'var(--zv-navy)', borderRadius: 4, padding: '2px 8px' }}>{o.id}</span>
                      <CoherenceFlag state={o.state} size="sm" />
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 21, color: 'var(--color-heading)', margin: 0 }}>{o.name}</h3>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--color-ink)', margin: '6px 0 0' }}>{o.detail}</p>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <Mono style={{ fontSize: 10.5, color: 'var(--color-secondary)' }}>OWNER</Mono>
                    <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 600, color: 'var(--color-heading)' }}>{o.owner}</div>
                  </div>
                </div>
                <div style={{ marginTop: 12 }}>{o.krs.map((kr, i) => <KRrow key={i} kr={kr} />)}</div>
              </Panel>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ---- O2 Planning / Roadmap (ROI bridge) ----------------------------------
  function PlanningRoadmap({ go }) {
    const eff = { S: 'Small', M: 'Medium', L: 'Large' };
    return (
      <div>
        <ScreenHeader
          eyebrow="Planning / Roadmap · initiatives, weighed against strategy"
          title="Initiatives, weighed against the strategy."
          lede="The backlog with a spine. Every initiative carries the objective it ladders to and a weighted return — so the roadmap reads against the strategy, not beside it."
        />
        <Panel style={{ marginBottom: 16, borderLeft: '3px solid var(--zv-azure)', padding: '16px 22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ color: 'var(--zv-azure)', display: 'flex', flexShrink: 0 }}><Icon name="coherence" size={20} /></span>
            <div>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, color: 'var(--color-heading)' }}>Every row reads against the strategy.</span>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--color-ink)' }}> {' '}Does this initiative ladder to an objective — and what's the weighted return?</span>
            </div>
          </div>
        </Panel>
        <Panel pad={0}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.7fr 150px 90px 70px', padding: '13px 24px', borderBottom: '1px solid var(--color-border)', background: 'var(--zv-cool-gray-soft)' }}>
            {['Initiative', 'Ladders to', 'Coherence', 'Effort', 'ROI'].map((h, i) => <Mono key={i} style={{ fontSize: 10.5, letterSpacing: '0.06em', color: 'var(--color-secondary)', textAlign: i === 4 ? 'right' : 'left' }}>{h.toUpperCase()}</Mono>)}
          </div>
          {D.bets.map((b, i) => (
            <div key={b.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.7fr 150px 90px 70px', alignItems: 'center', padding: '15px 24px', borderTop: i ? '1px solid var(--color-border)' : 'none', background: b.state === 'conflict' ? 'var(--zv-warning-tint)' : 'transparent' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14.5, color: 'var(--color-heading)' }}>{b.name}</div>
                <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{b.id} · {b.quarter}</Mono>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                {b.ladder ? (
                  <>
                    <span style={{ color: 'var(--zv-azure)', display: 'flex', flexShrink: 0 }}><Icon name="arrow" size={14} /></span>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--color-link)', fontWeight: 500 }}>{b.laddersTo}</span>
                  </>
                ) : <em style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--color-secondary)' }}>— not laddered</em>}
              </div>
              <CoherenceFlag state={b.state} size="sm" />
              <Mono style={{ fontSize: 13, color: 'var(--color-ink)' }}>{eff[b.effort]}</Mono>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 20, color: b.roi >= 70 ? 'var(--color-heading)' : 'var(--color-secondary)' }}>{b.roi}</span>
              </div>
            </div>
          ))}
        </Panel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 16 }}>
          <Panel>
            <PanelLabel icon="planning" right={<Badge tone="neutral">Product metrics · embedded</Badge>}>Activation funnel</PanelLabel>
            {D.funnel.map((f, i) => <BarRow key={i} label={f.step} pct={f.pct} accent={i === D.funnel.length - 1} />)}
            <Mono style={{ fontSize: 11.5, color: 'var(--color-secondary)', lineHeight: 1.55, display: 'block', marginTop: 12, borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>Thin product-metric capture, in context — where accounts drop off, and where they start reaching for their own workarounds.</Mono>
          </Panel>
          <Panel accent>
            <PanelLabel icon="spark">Zavari's read on this plan</PanelLabel>
            <CoherenceFlag state="coherent" label="New bet surfaced" detail="Native data export & reporting — customers already improvised it" />
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--color-ink)', margin: '14px 0 0' }}>The clearest new signal: <strong>Native data export & reporting</strong>. Several accounts already export data by hand — bringing it inside the product extends the system-of-record objective.</p>
            <div style={{ marginTop: 16 }}><Button variant="secondary" onClick={() => go('brief')} iconRight={<Icon name="arrow" size={15} />}>Read the full brief</Button></div>
          </Panel>
        </div>
      </div>
    );
  }

  // ---- O3 Research (VoC bridge) --------------------------------------------
  function InsightCard({ r, go }) {
    const strong = r.strength >= 7;
    return (
      <Panel style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <Badge tone="neutral">{r.theme}</Badge>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Mono style={{ fontSize: 10.5, color: 'var(--color-secondary)' }}>SIGNAL</Mono>
            {[...Array(5)].map((_, i) => <span key={i} style={{ width: 5, height: 12, borderRadius: 1, background: i < Math.round(r.strength / 2) ? 'var(--zv-navy)' : 'var(--zv-cool-gray)' }} />)}
          </span>
        </div>
        <blockquote style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 18, lineHeight: 1.4, color: 'var(--color-heading)', margin: 0, fontStyle: 'italic' }}>“{r.quote}”</blockquote>
        <Mono style={{ fontSize: 12, color: 'var(--color-secondary)', marginTop: 10 }}>{r.who}</Mono>
        <div style={{ marginTop: 'auto', paddingTop: 16, borderTop: '1px solid var(--color-border)' }}>
          {r.feeds ? (
            <button onClick={() => go('planning')} style={{ display: 'flex', alignItems: 'center', gap: 9, background: 'var(--zv-info-tint)', border: '1px solid rgba(0,153,255,0.25)', borderRadius: 6, padding: '9px 12px', width: '100%', cursor: 'pointer', textAlign: 'left' }}>
              <span style={{ color: 'var(--zv-azure)', display: 'flex' }}><Icon name="arrow" size={15} /></span>
              <span style={{ lineHeight: 1.3 }}>
                <Mono style={{ fontSize: 10, color: 'var(--zv-azure)', letterSpacing: '0.05em', display: 'block' }}>FEEDS PLANNING</Mono>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 600, color: 'var(--color-heading)' }}>Prioritizes “{r.feedsName}”</span>
              </span>
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 9, padding: '9px 12px', borderRadius: 6, border: '1px dashed var(--color-border)' }}>
              <CoherenceFlag state="drifting" size="sm" label="No bet yet" detail="Strong feeling, weak strategic ladder" />
            </div>
          )}
        </div>
      </Panel>
    );
  }

  function ResearchScreen({ go }) {
    const s = D.research.survey;
    return (
      <div>
        <ScreenHeader
          eyebrow="Research · qualitative + survey"
          title="From a customer's words to a prioritized bet."
          lede="Capture qualitative insight and survey data in one place. The strongest signals carry straight into Planning — so the path from an interview to a roadmap decision stays visible."
        />
        <Divider>Qualitative insights</Divider>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 24 }}>
          {D.research.insights.map(r => <InsightCard key={r.id} r={r} go={go} />)}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 16 }}>
          <Panel>
            <PanelLabel icon="research" right={<Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>n = {s.n}</Mono>}>Survey · {s.q}</PanelLabel>
            {s.bars.map((b, i) => <BarRow key={i} label={b.label} pct={b.pct} accent={i === 0} />)}
            <Mono style={{ fontSize: 11.5, color: 'var(--color-secondary)', lineHeight: 1.55, display: 'block', marginTop: 12, borderTop: '1px solid var(--color-border)', paddingTop: 12 }}>Qualitative and survey agree: the data leaves the product by hand — exactly what the recommended bet brings inside.</Mono>
          </Panel>
          <Panel accent>
            <PanelLabel icon="spark">What Zavari did with this</PanelLabel>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, lineHeight: 1.6, color: 'var(--color-ink)', margin: 0 }}>It triangulated these signals with Amplitude usage and support tickets, and generated the opportunity brief on native export & reporting — proactively, before anyone asked.</p>
            <div style={{ marginTop: 14, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              <SourceTag source="Zavari Research" kind="owned" />
              <SourceTag source="Amplitude" kind="connected" />
              <SourceTag source="Support" kind="connected" />
            </div>
            <div style={{ marginTop: 16 }}><Button variant="secondary" onClick={() => go('brief')} iconRight={<Icon name="arrow" size={15} />}>See the brief it produced</Button></div>
          </Panel>
        </div>
      </div>
    );
  }

  window.StrategyOKR = StrategyOKR;
  window.PlanningRoadmap = PlanningRoadmap;
  window.ResearchScreen = ResearchScreen;
})();
