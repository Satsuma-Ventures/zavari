import React from 'react';

/**
 * Zavari Card — white surface, 1px Cool Gray border + soft navy shadow,
 * 24px padding, 6px radius. No colored card backgrounds: color lives in
 * accents and icons within the card, never the card itself.
 */
export function Card({
  title = null,
  eyebrow = null,
  children,
  footer = null,
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-card)',
        padding: 'var(--space-3)',
        boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
        transition: 'box-shadow var(--dur-base) var(--ease-standard)',
        cursor: interactive ? 'pointer' : 'default',
        ...style,
      }}
      {...rest}
    >
      {eyebrow && (
        <div style={{
          fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-caption)', letterSpacing: 'var(--tracking-label)',
          textTransform: 'uppercase', color: 'var(--color-secondary)',
          marginBottom: 'var(--space-1)',
        }}>
          {eyebrow}
        </div>
      )}
      {title && (
        <h3 style={{
          fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-semibold)',
          fontSize: 'var(--text-h3)', lineHeight: 'var(--text-h3-lh)',
          color: 'var(--color-heading)', margin: 0, marginBottom: 'var(--space-1)',
        }}>
          {title}
        </h3>
      )}
      <div style={{
        fontFamily: 'var(--font-sans)', fontSize: 'var(--text-body)',
        lineHeight: 'var(--text-body-lh)', color: 'var(--color-ink)',
      }}>
        {children}
      </div>
      {footer && (
        <div style={{ marginTop: 'var(--space-3)', paddingTop: 'var(--space-2)', borderTop: '1px solid var(--color-border)' }}>
          {footer}
        </div>
      )}
    </div>
  );
}
