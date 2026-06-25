import React from 'react';

/**
 * Zavari Badge — small pill label. Neutral by default; status tones use a
 * label + tint (never color alone). For status, an optional dot/icon precedes.
 */
export function Badge({ tone = 'neutral', children, icon = null, style = {}, ...rest }) {
  const tones = {
    neutral: { color: 'var(--color-heading)', background: 'var(--zv-cool-gray-soft)', border: 'var(--color-border)' },
    success: { color: '#276749', background: 'var(--zv-success-tint)', border: 'rgba(56,161,105,0.25)' },
    warning: { color: '#946A12', background: 'var(--zv-warning-tint)', border: 'rgba(214,158,46,0.25)' },
    error:   { color: '#C53030', background: 'var(--zv-error-tint)',   border: 'rgba(229,62,62,0.25)' },
    info:    { color: '#0A4F86', background: 'var(--zv-info-tint)',    border: 'rgba(0,153,255,0.25)' },
  }[tone] || {};

  return (
    <span
      style={{
        display: 'inline-flex', alignItems: 'center', gap: '6px',
        fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
        fontSize: 'var(--text-caption)', padding: '3px 10px',
        borderRadius: 'var(--radius-pill)',
        color: tones.color, background: tones.background,
        border: `1px solid ${tones.border}`,
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </span>
  );
}
