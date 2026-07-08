/* ============================================================================
   ZAVARI CONCEPTS — Shared kit (primitives, icons, charts)
   ============================================================================ */
(function () {
  const DS = window.ZavariDesignSystem_bb9393 || {};
  const { CoherenceFlag, Badge } = DS;

  // ---- Concept SourceTag -------------------------------------------------
  // Provenance chip with the accessible three-way taxonomy from the landing:
  //   owned  → Zavari's tools       (navy dot — cyan vanishes on white)
  //   market → Market intelligence  (azure dot)
  //   connected → your stack        (gray dot)
  const SRC_KIND = {
    owned:     { dot: 'var(--zv-navy)',       ring: true,  title: "Zavari's tool" },
    market:    { dot: 'var(--zv-azure)',      ring: false, title: 'Market intelligence' },
    connected: { dot: 'var(--zv-accent-gray)', ring: false, title: 'Connected source' },
  };
  function SourceTag({ source, kind = 'connected', confidence = null, count = null, style = {}, ...rest }) {
    const spec = SRC_KIND[kind] || SRC_KIND.connected;
    const conf = confidence && {
      high:   { label: 'High confidence',   color: '#276749' },
      medium: { label: 'Medium confidence', color: '#946A12' },
      low:    { label: 'Low confidence',    color: 'var(--color-secondary)' },
    }[confidence];
    return (
      <span title={spec.title} style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 600, color: 'var(--color-heading)',
        background: 'var(--color-surface)', border: '1px solid var(--color-border)',
        borderRadius: 999, padding: '3px 10px 3px 8px', whiteSpace: 'nowrap', ...style,
      }} {...rest}>
        <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: spec.dot, flexShrink: 0, boxShadow: spec.ring ? '0 0 0 3px var(--zv-info-tint)' : 'none' }} />
        <span>{source}</span>
        {count != null && <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-secondary)', fontWeight: 400 }}>·{'\u200a'}{count}</span>}
        {conf && <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, color: conf.color, paddingLeft: 6, marginLeft: 1, borderLeft: '1px solid var(--color-border)' }}>{conf.label}</span>}
      </span>
    );
  }
  // resolve kind from a bare source name (Decision Record passes strings)
  function sourceKind(name) {
    const S = window.ZV.sources;
    if (S.owned.includes(name)) return 'owned';
    if (S.market.includes(name)) return 'market';
    return 'connected';
  }

  // ---- tiny geometric icons (line, on currentColor) ----------------------
  function Icon({ name, size = 18, style = {} }) {
    const s = { width: size, height: size, display: 'block', ...style };
    const p = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round', strokeLinejoin: 'round' };
    const paths = {
      command: <g {...p}><line x1="3" y1="6" x2="14" y2="6" /><line x1="3" y1="11" x2="17" y2="11" /><line x1="3" y1="16" x2="11" y2="16" /><circle cx="19" cy="6" r="1.4" fill="currentColor" stroke="none" /></g>,
      brief: <g {...p}><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v4h4" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" /></g>,
      coherence: <g {...p}><line x1="4" y1="5" x2="19" y2="12" /><line x1="4" y1="12" x2="19" y2="12" /><line x1="4" y1="19" x2="19" y2="12" /><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none" /></g>,
      decision: <g {...p}><circle cx="6" cy="5" r="2" /><circle cx="6" cy="19" r="2" /><circle cx="18" cy="12" r="2" /><path d="M6 7v4l10 1M6 17v-4" /></g>,
      strategy: <g {...p}><path d="M12 3l2.2 6.4H21l-5.4 4 2 6.6L12 16l-5.6 4 2-6.6L3 9.4h6.8z" /></g>,
      planning: <g {...p}><line x1="4" y1="6" x2="14" y2="6" /><line x1="8" y1="12" x2="20" y2="12" /><line x1="4" y1="18" x2="12" y2="18" /></g>,
      research: <g {...p}><circle cx="11" cy="11" r="6" /><path d="M7.5 11h7M11 7.5v7" opacity="0.0" /><path d="M8.5 10.5l2 2 3.5-3.5" /></g>,
      ecosystem: <g {...p}><rect x="3" y="14" width="18" height="6" rx="1" /><rect x="6" y="8" width="12" height="4" rx="1" /><rect x="9" y="3" width="6" height="3" rx="1" /></g>,
      onboarding: <g {...p}><rect x="4" y="3" width="9" height="18" rx="1" /><line x1="10" y1="12" x2="21" y2="12" /><path d="M17 8l4 4-4 4" /></g>,
      doc: <g {...p}><rect x="5" y="3" width="14" height="18" rx="1" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="12" y2="16" /></g>,
      spark: <g {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18" /></g>,
      arrow: <g {...p}><line x1="4" y1="12" x2="19" y2="12" /><path d="M14 7l5 5-5 5" /></g>,
      check: <g {...p}><path d="M5 12.5l4.5 4.5L19 7" /></g>,
    };
    return <svg viewBox="0 0 24 24" style={s} aria-hidden="true">{paths[name] || null}</svg>;
  }

  // ---- eyebrow / kicker --------------------------------------------------
  function Eyebrow({ children, style = {}, color }) {
    return <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: color || 'var(--color-secondary)', ...style }}>{children}</div>;
  }
  function Mono({ children, style = {} }) {
    return <span style={{ fontFamily: 'var(--font-mono)', ...style }}>{children}</span>;
  }

  // ---- MVP "Ships first" wedge marker ------------------------------------
  function MvpTag({ style = {}, compact = false }) {
    return (
      <span style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
        letterSpacing: '0.04em', color: '#0A4F86',
        background: 'var(--zv-info-tint)', border: '1px solid rgba(0,153,255,0.30)',
        borderRadius: 999, padding: compact ? '1px 8px' : '2px 10px', whiteSpace: 'nowrap', ...style,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--zv-cyan)', boxShadow: '0 0 0 3px var(--zv-info-tint)' }} />
        SHIPS FIRST
      </span>
    );
  }

  // ---- Screen header -----------------------------------------------------
  function ScreenHeader({ eyebrow, title, lede, right }) {
    return (
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 28, flexWrap: 'wrap' }}>
        <div style={{ maxWidth: 760 }}>
          {eyebrow && <Eyebrow style={{ marginBottom: 10 }}>{eyebrow}</Eyebrow>}
          <h1 style={{ fontFamily: 'var(--font-serif)', fontWeight: 600, fontSize: 34, lineHeight: 1.15, color: 'var(--color-heading)', margin: 0, letterSpacing: '-0.01em' }}>{title}</h1>
          {lede && <p style={{ fontFamily: 'var(--font-sans)', fontSize: 17, lineHeight: 1.55, color: 'var(--color-ink)', margin: '12px 0 0', maxWidth: 680 }}>{lede}</p>}
        </div>
        {right && <div style={{ flexShrink: 0 }}>{right}</div>}
      </div>
    );
  }

  // ---- Panel (card surface, never colored) -------------------------------
  function Panel({ children, style = {}, pad = 24, hover = false, onClick, accent = false }) {
    const [h, setH] = React.useState(false);
    return (
      <div
        onClick={onClick}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
          borderRadius: 6, padding: pad,
          boxShadow: (hover && h) ? 'var(--shadow-raised)' : 'var(--shadow-card)',
          borderColor: accent ? 'rgba(0,153,255,0.35)' : 'var(--color-border)',
          cursor: onClick ? 'pointer' : 'default',
          transition: 'box-shadow 180ms cubic-bezier(0.2,0,0,1), border-color 180ms', ...style,
        }}>
        {children}
      </div>
    );
  }

  function PanelLabel({ children, icon, right }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--color-secondary)' }}>
          {icon && <Icon name={icon} size={15} />}
          <Eyebrow>{children}</Eyebrow>
        </div>
        {right}
      </div>
    );
  }

  // ---- Source cluster ----------------------------------------------------
  function SourceCluster({ items, style = {}, label = 'Sourced from' }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', ...style }}>
        {label && <Mono style={{ fontSize: 11, color: 'var(--color-secondary)', marginRight: 2 }}>{label}</Mono>}
        {items.map((s, i) => <SourceTag key={i} source={s.source} kind={s.kind} count={s.count} confidence={s.confidence} />)}
      </div>
    );
  }

  // ---- Confidence pill (word-led, never color alone) ---------------------
  function Confidence({ level }) {
    const map = { high: { t: 'High confidence', c: '#276749', b: 'var(--zv-success-tint)', bd: 'rgba(56,161,105,0.25)' },
      medium: { t: 'Medium confidence', c: '#946A12', b: 'var(--zv-warning-tint)', bd: 'rgba(214,158,46,0.25)' },
      low: { t: 'Low confidence', c: 'var(--color-secondary)', b: 'var(--zv-cool-gray-soft)', bd: 'var(--color-border)' } }[level];
    if (!map) return null;
    return <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: 11, color: map.c, background: map.b, border: `1px solid ${map.bd}`, borderRadius: 999, padding: '2px 9px', whiteSpace: 'nowrap' }}>{map.t}</span>;
  }

  // ---- Horizontal bar (survey / breakdown) -------------------------------
  function BarRow({ label, pct, accent = false, sub }) {
    return (
      <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 44px', alignItems: 'center', gap: 14, padding: '7px 0' }}>
        <div style={{ fontFamily: 'var(--font-sans)', fontSize: 14, color: 'var(--color-ink)', display: 'flex', flexDirection: 'column' }}>
          <span>{label}</span>
          {sub && <Mono style={{ fontSize: 11, color: 'var(--color-secondary)' }}>{sub}</Mono>}
        </div>
        <div style={{ height: 10, background: 'var(--zv-cool-gray-soft)', borderRadius: 3, overflow: 'hidden' }}>
          <div style={{ width: pct + '%', height: '100%', background: accent ? 'var(--zv-azure)' : 'var(--zv-navy)', borderRadius: 3 }} />
        </div>
        <Mono style={{ fontSize: 13, color: 'var(--color-heading)', textAlign: 'right' }}>{pct}%</Mono>
      </div>
    );
  }

  // ---- Section divider label ---------------------------------------------
  function Divider({ children }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, margin: '4px 0 18px' }}>
        <Eyebrow>{children}</Eyebrow>
        <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
      </div>
    );
  }

  // ---- coherence color helper --------------------------------------------
  const cohColor = (state) => ({ coherent: 'var(--zv-cyan)', drifting: 'var(--zv-azure)', conflict: 'var(--zv-warning)' }[state] || 'var(--color-border)');
  const cohInk = (state) => ({ coherent: '#0A4F86', drifting: '#0A4F86', conflict: '#946A12' }[state] || 'var(--color-ink)');

  window.ZVKit = {
    DS, Icon, Eyebrow, Mono, MvpTag, ScreenHeader, Panel, PanelLabel,
    SourceTag, sourceKind, SourceCluster, Confidence, BarRow, Divider,
    cohColor, cohInk,
  };
})();
