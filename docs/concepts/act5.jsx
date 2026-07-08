/* ============================================================================
   ACT 5 — Entry
   Onboarding — two-pronged, first-party-led
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const { Icon, Eyebrow, Mono, ScreenHeader, Panel, Divider } = K;
  const { Button } = K.DS;
  const D = window.ZV;
  const E = D.ecosystem;

  function OwnedRow({ t, on, toggle }) {
    return (
      <button onClick={toggle} style={{
        display: 'flex', alignItems: 'center', gap: 13, width: '100%', textAlign: 'left',
        padding: '13px 15px', borderRadius: 7, cursor: 'pointer',
        border: `1.5px solid ${on ? 'var(--zv-azure)' : 'var(--color-border)'}`,
        background: on ? 'var(--zv-info-tint)' : 'var(--color-surface)', transition: 'all 140ms',
      }}>
        <span style={{ width: 34, height: 34, borderRadius: 6, background: 'var(--zv-navy)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 13, flexShrink: 0 }}>{t.mono}</span>
        <span style={{ flex: 1 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 15, color: 'var(--color-heading)' }}>{t.name}</span>
          </span>
          <Mono style={{ fontSize: 11.5, color: 'var(--color-secondary)' }}>{t.note}</Mono>
        </span>
        <span style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: on ? 'var(--zv-azure)' : 'transparent', border: on ? 'none' : '1.5px solid var(--color-border)', color: '#fff' }}>{on && <Icon name="check" size={14} />}</span>
      </button>
    );
  }

  function ByoRow({ t, on, toggle }) {
    return (
      <button onClick={toggle} style={{
        display: 'flex', alignItems: 'center', gap: 11, width: '100%', textAlign: 'left',
        padding: '11px 13px', borderRadius: 6, cursor: 'pointer',
        border: `1px solid ${on ? 'var(--zv-accent-gray)' : 'var(--color-border)'}`,
        background: on ? 'var(--color-surface)' : 'transparent', transition: 'all 140ms',
      }}>
        <span style={{ width: 28, height: 28, borderRadius: 5, background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, flexShrink: 0 }}>{t.mono}</span>
        <span style={{ flex: 1 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 500, fontSize: 14, color: 'var(--color-heading)' }}>{t.name}</span>
          <Mono style={{ fontSize: 11, color: 'var(--color-secondary)', display: 'block' }}>{t.note}</Mono>
        </span>
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12.5, color: on ? '#276749' : 'var(--zv-azure)' }}>{on ? 'Connected' : 'Connect'}</span>
      </button>
    );
  }

  function Onboarding({ go }) {
    const [owned, setOwned] = React.useState({ strategy: true, planning: true, research: true, metrics: true, documents: false });
    const [byo, setByo] = React.useState({ analytics: false, delivery: false, docs: false });
    const ownedCount = Object.values(owned).filter(Boolean).length;
    const byoCount = Object.values(byo).filter(Boolean).length;
    const coherenceLevel = Math.min(100, ownedCount * 18 + byoCount * 8);

    return (
      <div>
        <ScreenHeader
          eyebrow="Get started · two ways in"
          title="Start with Zavari's own tools. Connect the rest when you're ready."
          lede="The owned tools are useful on day one and natively wired to the intelligence layer — no integration required. Your existing stack plugs in later, sharpening the picture as you go."
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1.55fr 1fr', gap: 20, alignItems: 'start' }}>
          {/* PRIMARY — owned */}
          <Panel accent style={{ padding: 28, position: 'relative', overflow: 'hidden' }}>
            <svg width="240" height="240" viewBox="0 0 100 100" style={{ position: 'absolute', right: -30, top: -50, opacity: 0.05 }} fill="none" stroke="var(--zv-navy)" strokeWidth="0.8"><line x1="5" y1="20" x2="80" y2="50" /><line x1="5" y1="50" x2="80" y2="50" /><line x1="5" y1="80" x2="80" y2="50" /></svg>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-link)' }}>Recommended · start here</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 24, color: 'var(--color-heading)', margin: '0 0 4px' }}>Turn on Zavari's tools</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: 14.5, color: 'var(--color-ink)', margin: '0 0 20px', maxWidth: 480 }}>Each is light to adopt and structured underneath — the intelligence layer reads them from the first entry. Pre-selected: the tools most teams start with.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {E.owned.map(t => <OwnedRow key={t.id} t={t} on={!!owned[t.id]} toggle={() => setOwned(o => ({ ...o, [t.id]: !o[t.id] }))} />)}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 22 }}>
              <Button variant="primary" iconRight={<Icon name="arrow" size={15} />}>Set up my workspace</Button>
              <Mono style={{ fontSize: 12, color: 'var(--color-secondary)' }}>{ownedCount} tool{ownedCount === 1 ? '' : 's'} · useful standalone today</Mono>
            </div>
          </Panel>

          {/* SECONDARY — BYO */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ background: 'var(--zv-cool-gray-soft)', border: '1px solid var(--color-border)', borderRadius: 8, padding: 22 }}>
              <Eyebrow style={{ marginBottom: 4 }}>Optional · expand when ready</Eyebrow>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontWeight: 500, fontSize: 19, color: 'var(--color-heading)', margin: '0 0 4px' }}>Connect your stack</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13.5, color: 'var(--color-ink)', margin: '0 0 16px' }}>Bring in the tools you already use. Every connection makes the coherence reads sharper — but none are required to start.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {E.connected.map(t => <ByoRow key={t.id} t={t} on={!!byo[t.id]} toggle={() => setByo(b => ({ ...b, [t.id]: !b[t.id] }))} />)}
              </div>
              <Mono style={{ fontSize: 11, color: 'var(--color-secondary)', display: 'block', marginTop: 12 }}>CRM &amp; data warehouse — coming later</Mono>
            </div>

            <Panel>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                <Mono style={{ fontSize: 10.5, color: 'var(--color-secondary)', letterSpacing: '0.05em' }}>INTELLIGENCE COVERAGE</Mono>
                <Mono style={{ fontSize: 12, color: 'var(--color-heading)' }}>{coherenceLevel}%</Mono>
              </div>
              <div style={{ height: 8, background: 'var(--zv-cool-gray-soft)', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: coherenceLevel + '%', height: '100%', background: 'linear-gradient(90deg, var(--zv-azure), var(--zv-cyan))', borderRadius: 4, transition: 'width 240ms cubic-bezier(0.2,0,0,1)' }} />
              </div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: 13, color: 'var(--color-ink)', margin: '12px 0 0', lineHeight: 1.5 }}>The owned tools alone already power proactive briefs and coherence reads. Connecting your stack widens what Zavari can triangulate.</p>
            </Panel>
          </div>
        </div>
        <div style={{ marginTop: 20, display: 'flex', justifyContent: 'center' }}>
          <Button variant="ghost" onClick={() => go('command')} iconRight={<Icon name="arrow" size={15} />}>Skip the tour — go to the Command Layer</Button>
        </div>
      </div>
    );
  }

  window.Onboarding = Onboarding;
})();
