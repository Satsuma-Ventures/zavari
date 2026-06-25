import React from 'react';

/**
 * Zavari Button — restrained, 4px radius, IBM Plex Sans SemiBold 14px.
 * Variants: primary (Cyan/Navy), secondary (outline), ghost, destructive.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  type = 'button',
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const palette = {
    primary:     { background: 'var(--zv-cyan)',  color: 'var(--zv-navy)',  border: '1.5px solid transparent', hover: '#00BEE6' },
    secondary:   { background: 'var(--zv-white)',  color: 'var(--zv-navy)',  border: '1.5px solid var(--zv-navy)', hover: 'var(--zv-cool-gray-soft)' },
    ghost:       { background: 'transparent',      color: 'var(--zv-navy)',  border: '1.5px solid currentColor', hover: 'var(--zv-navy-080)' },
    destructive: { background: 'var(--zv-error)',  color: 'var(--zv-white)', border: '1.5px solid transparent', hover: '#C53030' },
  }[variant] || {};

  const pad = size === 'sm' ? '8px 16px' : size === 'lg' ? '14px 28px' : '12px 24px';
  const fontSize = size === 'sm' ? '13px' : 'var(--text-label)';

  const [hover, setHover] = React.useState(false);

  return (
    <button
      type={type}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        fontSize,
        lineHeight: 1,
        padding: pad,
        borderRadius: 'var(--radius-button)',
        border: palette.border,
        background: hover && !disabled ? palette.hover : palette.background,
        color: palette.color,
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.45 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-1)',
        transition: 'background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}
