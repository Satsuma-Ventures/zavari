import React from 'react';

/**
 * Zavari SourceTag — provenance chip. Every conclusion traces to its sources;
 * this makes that lineage native and reassuring rather than bolted on.
 * Vendor-neutral: no source dominates. First-party sources are marked as a
 * first-class peer (cyan dot), never a lesser tier.
 */
export function SourceTag({
  source,
  kind = 'connected',   // 'connected' = third-party stack · 'first-party' = Zavari's own tools
  confidence = null,    // 'high' | 'medium' | 'low'
  count = null,
  style = {},
  ...rest
}) {
  const isFirstParty = kind === 'first-party';
  const dot = isFirstParty ? 'var(--zv-cyan)' : 'var(--zv-accent-gray)';

  const conf = confidence && {
    high:   { label: 'High confidence',   color: '#276749' },
    medium: { label: 'Medium confidence', color: '#946A12' },
    low:    { label: 'Low confidence',    color: 'var(--color-secondary)' },
  }[confidence];

  return (
    <span
      title={isFirstParty ? 'First-party source' : 'Connected source'}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '7px',
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption)',
        fontWeight: 'var(--weight-semibold)', color: 'var(--color-heading)',
        background: 'var(--color-surface)', border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-pill)', padding: '3px 10px 3px 8px',
        ...style,
      }}
      {...rest}
    >
      <span aria-hidden="true" style={{
        width: '7px', height: '7px', borderRadius: '50%',
        background: dot, flexShrink: 0,
        boxShadow: isFirstParty ? '0 0 0 3px var(--zv-info-tint)' : 'none',
      }} />
      <span>{source}</span>
      {count != null && (
        <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--color-secondary)', fontWeight: 400 }}>
          ·{' '}{count}
        </span>
      )}
      {conf && (
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
          fontSize: '11px', color: conf.color,
          paddingLeft: '6px', marginLeft: '1px',
          borderLeft: '1px solid var(--color-border)',
        }}>
          {conf.label}
        </span>
      )}
    </span>
  );
}
