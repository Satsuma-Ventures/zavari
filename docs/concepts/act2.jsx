/* ============================================================================
   ACT 2 — Why the intelligence is uniquely good
   CoherenceMap (Constellation / Ledger) · DecisionRecord
   Coherence is shown as insight, calmly — never an alarm. Most bets hold
   together; one has come loose (an opportunity to realign).
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const { Icon, Eyebrow, Mono, ScreenHeader, Panel, PanelLabel, Confidence, Divider, cohColor, cohInk, SourceTag, sourceKind } = K;
  const { CoherenceFlag, StatCallout, Button } = K.DS;
  const D = window.ZV;

  const objX = { 'OBJ-1': 180, 'OBJ-2': 540, 'OBJ-3': 900 };
  const betX = { B1: 90, B2: 270, B3: 450, B4: 630, B5: 810, B6: 990 };

  // ---- Constellation: spatial ladder map -----------------------------------
  function Constellation() {
    const W = 1080, H = 520;
    const nsY = 46, objY = 215, betY = 430;
    const lines = D.bets.map(b => {
      const x1 = betX[b.id], y1 = betY - 26;
      if (!b.ladder) return { id: b.id, x1, y1, x2: x1, y2: y1 - 70, state: 'drifting', dash: true };
      return { id: b.id, x1, y1, x2: objX[b.ladder], y2: objY + 30, state: b.state, dash: b.state !== 'coherent' };
    });
    const objLines = D.objectives.map(o => ({ x1: objX[o.id], y1: objY - 26, x2: 540, y2: nsY + 26 }));

    return (
      <div style={{ overflowX: 'auto', paddingBottom: 4 }}>
        <div style={{ position: 'relative', width: W, height: H, margin: '0 auto' }}>
          <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }} fill="none">
            {objLines.map((l, i) => <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} stroke="var(--zv-cool-gray)" strokeWidth="1.5" />)}
            {lines.map(l => (
              <line key={l.id} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
                stroke={cohColor(l.state)} strokeWidth="1.8"
                strokeDasharray={l.dash ? '5 5' : 'none'} strokeLinecap="round"
                opacity={l.state === 'coherent' ? 0.55 : 0.9} />
            ))}
            {D.objectives.map(o => <circle key={o.id} cx={objX[o.id]} cy={objY + 30} r="3" fill="var(--zv-cyan)" />)}
            <circle cx={540} cy={nsY + 26} r="3.5" fill="var(--zv-navy)" />
          </svg>

          {/* North star */}
          <div style={nodeStyle(540, nsY, 300)}>
            <div style={{ background: 'var(--gradient-navy)', borderRadius: 8, padding: '14px 20px', textAlign: 'center', boxShadow: 'var(--shadow-card)' }}>
              <Mono style={{ fontSize: 10, color: 'var(--zv-cyan)', letterSpacing: '0.08em' }}>NORTH STAR</Mono>
              <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 18, color: '#fff', marginTop: 3 }}>Weekly Activated Accounts</div>
            </div>
          </div>

          {/* Objectives */}
          {D.objectives.map(o => (
            <div key={o.id} style={nodeStyle(objX[o.id], objY, 232)}>
              <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '12px 16px', boxShadow: 'var(--shadow-card)' }}>
                <Mono style={{ fontSize: 10.5, color: 'var(--color-secondary)' }}>{o.id}</Mono>
                <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 16, color: 'var(--color-heading)', lineHeight: 1.25, marginTop: 2 }}>{o.name}</div>
              </div>
            </div>
          ))}

          {/* Bets */}
          {D.bets.map(b => (
            <div key={b.id} style={nodeStyle(betX[b.id], betY, 158)}>
              <div style={{ background: 'var(--color-surface)', border: `1px solid ${b.state === 'coherent' ? (b.lead ? 'var(--zv-azure)' : 'var(--color-border)') : cohColor(b.state)}`, borderRadius: 6, padding: '10px 12px', boxShadow: 'var(--shadow-card)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: cohColor(b.state), flexShrink: 0 }} />
                  <Mono style={{ fontSize: 9.5, color: 'var(--color-secondary)', letterSpacing: '0.04em' }}>{b.lead ? 'NEXT BET' : b.state.toUpperCase()}</Mono>
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 13, color: 'var(--color-heading)', lineHeight: 1.25 }}>{b.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  function nodeStyle(cx, cy, w) {
    return { position: 'absolute', left: cx, top: cy, width: w, transform: 'translate(-50%, -50%)' };
  }

  // ---- insight read-outs (always words, never an alarm) --------------------
  function ReadOuts() {
    const outs = [
      { state: 'coherent', t: 'Five bets ladder cleanly to the north star', d: 'Onboarding Copilot, Template Marketplace, enterprise sign-on and Salesforce sync each trace to an objective and to the metric.', tag: 'Holding together' },
      { state: 'coherent', t: 'A customer pattern points to your next bet', d: 'Native data export & reporting — the step several accounts already improvised — deepens the system-of-record objective. It extends the core rather than stretching away from it.', tag: 'New · extends the core' },
      { state: 'drifting', t: 'One bet no longer ladders anywhere', d: 'The mobile approver app stopped mapping to an active objective when the plan changed. Not a problem — an opportunity to realign: worth a deliberate keep-or-cut.', tag: 'Come loose' },
    ];
    return (
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        {outs.map((o, i) => (
          <Panel key={i} style={{ borderTop: `3px solid ${cohColor(o.state)}` }}>
            <Mono style={{ fontSize: 10.5, color: cohInk(o.state), letterSpacing: '0.05em' }}>{o.tag.toUpperCase()}</Mono>
            <div style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 17, lineHeight: 1.3, color: 'var(--color-heading)', margin: '8px 0 8px' }}>{o.t}</div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14, lineHeight: 1.55, color: 'var(--color-ink)', margin: 0 }}>{o.d}</p>
          </Panel>
        ))}
      </div>
    );
  }

  // ---- Ledger: analytical matrix -------------------------------------------
  function Ledger() {
    const counts = D.bets.reduce((a, b) => { a[b.state] = (a[b.state] || 0) + 1; return a; }, {});
    return (
      <div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16, marginBottom: 20 }}>
          {[['coherent', counts.coherent, 'ladder cleanly to the north star'], ['drifting', counts.drifting, 'has come loose — worth a deliberate decision']].map(([st, n, lbl]) => (
            <Panel key={st} style={{ borderLeft: `3px solid ${cohColor(st)}` }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                <span style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 40, color: 'var(--color-heading)', lineHeight: 1 }}>{n}</span>
                <CoherenceFlag state={st} />
              </div>
              <Mono style={{ fontSize: 12, color: 'var(--color-secondary)', marginTop: 8, display: 'block' }}>{n === 1 ? '1 bet ' : n + ' bets '}{lbl}</Mono>
            </Panel>
          ))}
        </div>
        <Panel pad={0}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.6fr 130px 70px', gap: 0, padding: '14px 24px', borderBottom: '1px solid var(--color-border)', background: 'var(--zv-cool-gray-soft)' }}>
            {['Active bet', 'Ladders to', 'Coherence', 'ROI'].map((h, i) => <Mono key={i} style={{ fontSize: 10.5, letterSpacing: '0.06em', color: 'var(--color-secondary)', textAlign: i === 3 ? 'right' : 'left' }}>{h.toUpperCase()}</Mono>)}
          </div>
          {D.bets.map((b, i) => (
            <div key={b.id} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.6fr 130px 70px', gap: 0, alignItems: 'center', padding: '16px 24px', borderTop: i ? '1px solid var(--color-border)' : 'none', background: b.lead ? 'var(--zv-azure-tint)' : 'transparent' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--color-heading)' }}>{b.name}</span>
                  {b.lead && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 10.5, color: 'var(--color-link)', border: '1px solid var(--zv-azure-200)', borderRadius: 999, padding: '1px 8px' }}>NEXT BET</span>}
                </div>
                <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{b.id} · {b.quarter} · {b.tag}</Mono>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: b.ladder ? 'var(--color-ink)' : 'var(--color-secondary)' }}>
                {b.laddersTo ? b.laddersTo : <em style={{ color: 'var(--color-secondary)' }}>— no active objective yet</em>}
              </div>
              <CoherenceFlag state={b.state} size="sm" />
              <Mono style={{ fontSize: 14, color: 'var(--color-heading)', textAlign: 'right' }}>{b.roi}</Mono>
            </div>
          ))}
        </Panel>
      </div>
    );
  }

  function CoherenceMap({ variant, go }) {
    return (
      <div>
        <ScreenHeader
          eyebrow="Coherence Map · across your whole strategy"
          title="Here's how your bets read against the strategy."
          lede="Every active bet, traced to the north star — from owned tools, connected delivery and market signal. Most of it holds together. A new customer pattern points to your next bet, and one older bet has come loose."
        />
        <Panel style={{ marginBottom: 20, padding: '20px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
            <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>READING</Mono>
            {[['coherent', 'Ladders to the north star'], ['drifting', 'Come loose — worth a deliberate decision']].map(([s, l]) => (
              <span key={s} style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                <svg width="26" height="14" viewBox="0 0 26 14"><line x1="2" y1="2" x2="24" y2="7" stroke={cohColor(s)} strokeWidth="1.8" strokeDasharray={s === 'coherent' ? 'none' : '4 4'} strokeLinecap="round" /><line x1="2" y1="12" x2="24" y2="7" stroke={cohColor(s)} strokeWidth="1.8" strokeDasharray={s === 'coherent' ? 'none' : '4 4'} strokeLinecap="round" /><circle cx="24" cy="7" r="2" fill={cohColor(s)} /></svg>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-ink)' }}>{l}</span>
              </span>
            ))}
          </div>
        </Panel>
        {variant === 'ledger' ? <Ledger /> : (
          <Panel style={{ marginBottom: 20, padding: '28px 24px' }}><Constellation /></Panel>
        )}
        <div style={{ marginTop: 4 }}>
          <Divider>What this means — read in words, never color alone</Divider>
          <ReadOuts />
        </div>
        <div style={{ marginTop: 20, display: 'flex', gap: 12 }}>
          <Button variant="primary" onClick={() => go('brief')} iconRight={<Icon name="arrow" size={15} />}>Open the opportunity brief</Button>
          <Button variant="secondary" onClick={() => go('decision')}>How this was decided</Button>
        </div>
      </div>
    );
  }

  // ==========================================================================
  // DECISION RECORD — the auditable chain
  // ==========================================================================
  function DecisionRecord({ go }) {
    const dec = D.decision;
    return (
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <ScreenHeader
          eyebrow="Decision Record · strategy → execution"
          title={dec.title}
          lede="One unbroken, auditable chain — from the metric, through the insight and its sources, to the epic now carrying its reasoning into delivery."
          right={<div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, color: '#276749', background: 'var(--zv-success-tint)', border: '1px solid rgba(56,161,105,0.25)', borderRadius: 999, padding: '4px 12px' }}>● {dec.status}</span>
            <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{dec.owner} · {dec.date}</Mono>
          </div>}
        />
        <div style={{ position: 'relative' }}>
          {dec.chain.map((step, i) => {
            const last = i === dec.chain.length - 1;
            return (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 24, position: 'relative' }}>
                <div style={{ textAlign: 'right', paddingTop: 20 }}>
                  <Mono style={{ fontSize: 11, letterSpacing: '0.05em', color: step.byo ? 'var(--color-secondary)' : 'var(--color-heading)' }}>{step.kind.toUpperCase()}</Mono>
                </div>
                <div style={{ position: 'relative', paddingLeft: 32, paddingBottom: last ? 0 : 18 }}>
                  <span style={{ position: 'absolute', left: 7, top: 26, width: 2, bottom: last ? 'auto' : -4, height: last ? 0 : 'auto', background: 'var(--color-border)' }} />
                  <span style={{ position: 'absolute', left: 0, top: 22, width: 16, height: 16, borderRadius: '50%', background: step.byo ? 'var(--color-surface)' : 'var(--zv-navy)', border: step.byo ? '2px solid var(--zv-accent-gray)' : '2px solid var(--zv-navy)', boxShadow: step.byo ? 'none' : '0 0 0 4px var(--zv-info-tint)' }} />
                  <Panel pad={18} accent={step.byo} style={{ marginTop: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16 }}>
                      <div style={{ fontFamily: i <= 1 ? 'var(--font-serif)' : 'var(--font-sans)', fontWeight: i <= 1 ? 500 : 600, fontSize: i === 0 ? 22 : 17, lineHeight: 1.35, color: 'var(--color-heading)' }}>{step.body}</div>
                      {step.byo && <span style={{ flexShrink: 0, fontFamily: 'var(--font-mono)', fontSize: 10.5, color: 'var(--color-secondary)', border: '1px solid var(--color-border)', borderRadius: 999, padding: '2px 9px' }}>CONNECTED · JIRA</span>}
                    </div>
                    <Mono style={{ fontSize: 12.5, color: 'var(--color-secondary)', marginTop: 7, display: 'block' }}>{step.meta}</Mono>
                    {step.src.length > 0 && <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 12 }}>{step.src.map(s => <SourceTag key={s} source={s} kind={sourceKind(s)} />)}</div>}
                    {step.byo && <Mono style={{ fontSize: 12, color: 'var(--color-link)', marginTop: 12, display: 'flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={14} /> Carries the objective + insight into the dev backlog</Mono>}
                  </Panel>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  window.CoherenceMap = CoherenceMap;
  window.DecisionRecord = DecisionRecord;
})();
