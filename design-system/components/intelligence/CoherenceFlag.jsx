import React from 'react';

/**
 * Zavari CoherenceFlag — the signature insight made obvious at a glance:
 * whether a bet ladders to the north star (coherent), is drifting, or
 * conflicts. Built from the triangulation motif — three signal lines that
 * resolve to a single point when coherent and split apart in conflict.
 * Calm and reassuring, never alarming. State is always paired with a label.
 */
export function CoherenceFlag({
  state = 'coherent',   // 'coherent' | 'drifting' | 'conflict'
  label = null,
  detail = null,
  size = 'md',
  style = {},
  ...rest
}) {
  const spec = {
    coherent: { color: 'var(--zv-cyan)',    ink: 'var(--color-heading)', text: 'Coherent',
      // three lines converge to one point on the right
      lines: [[2,4],[2,11],[2,18]], tip: [22, 11] },
    drifting: { color: 'var(--zv-azure)',   ink: 'var(--color-heading)', text: 'Drifting',
      lines: [[2,4],[2,11],[2,18]], tip: [22, 11], spread: 3 },
    conflict: { color: 'var(--zv-warning)', ink: 'var(--color-heading)', text: 'Conflict',
      lines: [[2,4],[2,11],[2,18]], tip: [22, 11], spread: 8 },
  }[state] || {};

  const px = size === 'sm' ? 18 : size === 'lg' ? 28 : 22;
  const spread = spec.spread || 0;

  return (
    <span
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', ...style }}
      {...rest}
    >
      <span aria-hidden="true" style={{
        width: px + 8, height: px + 4, display: 'inline-flex',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        <svg width={px + 6} height={px} viewBox="0 0 24 22" fill="none" stroke={spec.color}
             strokeWidth="1.75" strokeLinecap="round">
          {spec.lines.map(([x, y], i) => {
            const off = (i - 1) * spread;
            return <line key={i} x1={x} y1={y} x2={spec.tip[0]} y2={spec.tip[1] + off} />;
          })}
          <circle cx={spec.tip[0]} cy={spec.tip[1]} r="1.6" fill={spec.color} stroke="none"
                  opacity={state === 'coherent' ? 1 : 0.5} />
        </svg>
      </span>
      <span style={{ display: 'inline-flex', flexDirection: 'column' }}>
        <span style={{
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-label)', color: spec.ink, lineHeight: 1.3,
        }}>
          {label || spec.text}
        </span>
        {detail && (
          <span style={{
            fontFamily: 'var(--font-sans)', fontSize: 'var(--text-caption)',
            color: 'var(--color-secondary)', lineHeight: 1.4,
          }}>
            {detail}
          </span>
        )}
      </span>
    </span>
  );
}
