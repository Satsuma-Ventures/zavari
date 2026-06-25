import React from 'react';

/**
 * Zavari Alert — notification banner. 4px left accent border + 8% tint,
 * no full-color fill. State is paired with a label/title, never color alone.
 */
export function Alert({ type = 'info', title = null, children, style = {}, ...rest }) {
  const tones = {
    info:    { border: 'var(--zv-info)',    bg: 'var(--zv-info-tint)' },
    success: { border: 'var(--zv-success)', bg: 'var(--zv-success-tint)' },
    warning: { border: 'var(--zv-warning)', bg: 'var(--zv-warning-tint)' },
    error:   { border: 'var(--zv-error)',   bg: 'var(--zv-error-tint)' },
  }[type] || {};

  return (
    <div
      role={type === 'error' || type === 'warning' ? 'alert' : 'status'}
      style={{
        padding: 'var(--space-2)',
        borderLeft: `4px solid ${tones.border}`,
        background: tones.bg,
        borderRadius: '0 var(--radius-input) var(--radius-input) 0',
        fontFamily: 'var(--font-sans)',
        ...style,
      }}
      {...rest}
    >
      {title && (
        <div style={{
          fontWeight: 'var(--weight-semibold)', fontSize: 'var(--text-subhead)',
          color: 'var(--color-heading)', marginBottom: '4px',
        }}>
          {title}
        </div>
      )}
      <div style={{
        fontSize: 'var(--text-body)', lineHeight: 'var(--text-body-lh)',
        color: 'var(--color-ink)',
      }}>
        {children}
      </div>
    </div>
  );
}
