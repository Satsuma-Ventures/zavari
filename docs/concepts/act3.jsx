/* ============================================================================
   ACT 3 — The platform
   EcosystemMap (Layered / Orbit) — Zavari's tools · market intelligence ·
   your connected stack, with the intelligence layer on top.
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const { Icon, Eyebrow, Mono, ScreenHeader, Panel, Divider } = K;
  const { Button } = K.DS;
  const D = window.ZV;
  const E = D.ecosystem;

  const KIND_DOT = { owned: 'var(--zv-navy)', market: 'var(--zv-azure)', connected: 'var(--zv-accent-gray)' };

  function Legend() {
    const item = (kind, label) => (
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 9, height: 9, borderRadius: '50%', background: KIND_DOT[kind], boxShadow: kind === 'owned' ? '0 0 0 3px var(--zv-info-tint)' : 'none' }} />
        <span style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-ink)' }}>{label}</span>
      </span>
    );
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap' }}>
        <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>LEGEND</Mono>
        {item('owned', "Zavari's tools")}
        {item('market', 'Market intelligence')}
        {item('connected', 'Your connected stack')}
      </div>
    );
  }

  // tool / node tile
  function Tile({ mono, name, note, kind, small }) {
    return (
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: small ? '11px 13px' : '14px 16px', boxShadow: 'var(--shadow-card)', minWidth: small ? 140 : 160, flex: '0 0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: note ? 6 : 0 }}>
          <span style={{ width: 26, height: 26, borderRadius: 5, background: 'var(--zv-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, flexShrink: 0 }}>{mono}</span>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: KIND_DOT[kind], flexShrink: 0, boxShadow: kind === 'owned' ? '0 0 0 2.5px var(--zv-info-tint)' : 'none' }} />
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: 'var(--color-heading)', whiteSpace: 'nowrap' }}>{name}</span>
            </div>
          </div>
        </div>
        {note && <Mono style={{ fontSize: 11, color: 'var(--color-secondary)', display: 'block', paddingLeft: 35 }}>{note}</Mono>}
      </div>
    );
  }

  // ---- Layered stack -------------------------------------------------------
  function Layered() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {/* intelligence layer */}
        <div style={{ background: 'var(--gradient-navy)', borderRadius: 8, padding: '20px 24px', boxShadow: 'var(--shadow-raised)', position: 'relative', zIndex: 2 }}>
          <Mono style={{ fontSize: 11, color: 'var(--zv-cyan)', letterSpacing: '0.07em', display: 'block', marginBottom: 14 }}>THE INTELLIGENCE LAYER · READS ACROSS THE WHOLE STACK</Mono>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {E.intelligence.map(n => (
              <div key={n.id} style={{ flex: '1 1 200px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(0,212,255,0.22)', borderRadius: 6, padding: '12px 14px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--zv-cyan)', boxShadow: '0 0 0 3px rgba(0,212,255,0.18)' }} />
                  <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 14, color: '#fff' }}>{n.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* connective tissue */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 60, height: 26 }}>
          {[0, 1, 2].map(i => <span key={i} style={{ width: 2, background: 'linear-gradient(var(--zv-cyan), var(--color-border))' }} />)}
        </div>

        {/* owned middle + market side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 16, alignItems: 'stretch' }}>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: 22, boxShadow: 'var(--shadow-card)' }}>
            <Eyebrow style={{ marginBottom: 16 }}>Zavari's tools · the capable middle</Eyebrow>
            <div style={{ display: 'flex', alignItems: 'stretch', gap: 12, flexWrap: 'wrap' }}>
              {E.owned.map(t => <Tile key={t.id} mono={t.mono} name={t.name} note={t.note} kind="owned" small />)}
            </div>
            <Mono style={{ fontSize: 11.5, color: 'var(--color-secondary)', lineHeight: 1.6, display: 'block', marginTop: 16, borderTop: '1px solid var(--color-border)', paddingTop: 14 }}>Light to use, structured underneath — the same structure that makes each tool feel simple makes it legible to the intelligence layer above.</Mono>
          </div>

          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: 20, boxShadow: 'var(--shadow-card)', display: 'flex', flexDirection: 'column' }}>
            <Eyebrow style={{ marginBottom: 14 }}>Market intelligence</Eyebrow>
            <Tile mono={E.market[0].mono} name={E.market[0].name} kind="market" />
            <Mono style={{ fontSize: 11.5, color: 'var(--color-secondary)', lineHeight: 1.55, marginTop: 12, display: 'block' }}>{E.market[0].note}.</Mono>
          </div>
        </div>

        {/* connected */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 120, height: 26 }}>
          {[0, 1].map(i => <span key={i} style={{ width: 2, background: 'linear-gradient(var(--color-border), var(--zv-cool-gray))' }} />)}
        </div>
        <div style={{ background: 'var(--zv-cool-gray-soft)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '18px 22px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 10 }}>
            <Eyebrow>Your connected stack</Eyebrow>
            <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>connect when ready</Mono>
          </div>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            {E.connected.map(n => <Tile key={n.id} mono={n.mono} name={n.name} note={n.note} kind="connected" small />)}
          </div>
        </div>
      </div>
    );
  }

  // ---- Orbit ---------------------------------------------------------------
  function Orbit() {
    const W = 1080, H = 600, cx = 540, cy = 300;
    const owned = E.owned;
    const r1 = 175;
    const ownedPos = owned.map((t, i) => {
      const a = -Math.PI / 2 + (i / owned.length) * Math.PI * 2;
      return { ...t, x: cx + r1 * Math.cos(a), y: cy + r1 * Math.sin(a) };
    });
    const outer = [{ ...E.market[0], kind: 'market' }, ...E.connected.map(b => ({ ...b, kind: 'connected' }))];
    const r2 = 290;
    const outerPos = outer.map((t, i) => {
      const a = -Math.PI / 2 + ((i + 0.5) / outer.length) * Math.PI * 2;
      return { ...t, x: cx + r2 * Math.cos(a), y: cy + (r2 * 0.78) * Math.sin(a) };
    });
    return (
      <div style={{ overflowX: 'auto' }}>
        <div style={{ position: 'relative', width: W, height: H, margin: '0 auto' }}>
          <svg width={W} height={H} style={{ position: 'absolute', inset: 0 }} fill="none">
            {outerPos.map((t, i) => <line key={'o' + i} x1={cx} y1={cy} x2={t.x} y2={t.y} stroke="var(--zv-cool-gray)" strokeWidth="1.4" strokeDasharray="4 4" />)}
            {ownedPos.map((t, i) => <line key={'i' + i} x1={cx} y1={cy} x2={t.x} y2={t.y} stroke="var(--zv-cyan)" strokeWidth="1.6" opacity="0.5" />)}
          </svg>
          {/* core */}
          <div style={{ position: 'absolute', left: cx, top: cy, transform: 'translate(-50%,-50%)', width: 220 }}>
            <div style={{ background: 'var(--gradient-navy)', borderRadius: 10, padding: '18px 18px', textAlign: 'center', boxShadow: 'var(--shadow-overlay)', border: '1px solid rgba(0,212,255,0.25)' }}>
              <Mono style={{ fontSize: 10, color: 'var(--zv-cyan)', letterSpacing: '0.08em' }}>INTELLIGENCE LAYER</Mono>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10 }}>
                {E.intelligence.map(n => <span key={n.id} style={{ fontFamily: 'var(--font-sans)', fontSize: 12.5, color: '#fff', fontWeight: 500 }}>{n.name}</span>)}
              </div>
            </div>
          </div>
          {ownedPos.map(t => (
            <div key={t.id} style={{ position: 'absolute', left: t.x, top: t.y, transform: 'translate(-50%,-50%)' }}>
              <Tile mono={t.mono} name={t.name} kind="owned" small />
            </div>
          ))}
          {outerPos.map((t, i) => (
            <div key={i} style={{ position: 'absolute', left: t.x, top: t.y, transform: 'translate(-50%,-50%)' }}><Tile mono={t.mono} name={t.name} kind={t.kind} small /></div>
          ))}
        </div>
      </div>
    );
  }

  function EcosystemMap({ variant, go }) {
    return (
      <div>
        <ScreenHeader
          eyebrow="The platform · one operating system for strategy"
          title="An ecosystem — not a feature."
          lede="The intelligence layer sits atop Zavari's own lightweight tools and the ones you already use. The value lives in the connections between them."
        />
        <Panel style={{ marginBottom: 20, padding: '16px 24px' }}><Legend /></Panel>
        <Panel style={{ padding: 26, marginBottom: 20 }}>
          {variant === 'orbit' ? <Orbit /> : <Layered />}
        </Panel>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <Panel accent>
            <Eyebrow style={{ marginBottom: 8 }}>Where a team starts</Eyebrow>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--color-ink)', margin: 0 }}>Turn on Zavari's own tools — Strategy, Planning, Research and Product metrics. Useful on day one, and the intelligence layer reads them immediately. No integration required.</p>
          </Panel>
          <Panel>
            <Eyebrow style={{ marginBottom: 8 }}>Where it grows</Eyebrow>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 15, lineHeight: 1.6, color: 'var(--color-ink)', margin: 0 }}>Add Documents, fold in market intelligence, then connect the analytics, delivery and documents you already use. Every connection makes the coherence reads sharper.</p>
            <div style={{ marginTop: 16 }}><Button variant="secondary" onClick={() => go('onboarding')} iconRight={<Icon name="arrow" size={15} />}>See how a team starts</Button></div>
          </Panel>
        </div>
      </div>
    );
  }

  window.EcosystemMap = EcosystemMap;
})();
