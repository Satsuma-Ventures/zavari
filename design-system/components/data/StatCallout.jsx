import React from 'react';

/**
 * Zavari StatCallout — large-format metric. The figure is IBM Plex Serif so it
 * reads as a confident, editorial number rather than technical telemetry; the
 * data label beneath stays Mono for precision. Optional unit (Sans SemiBold).
 */
export function StatCallout({
  value,
  unit = null,
  label = null,
  trend = null,        // e.g. "+12%"
  align = 'left',
  onDark = false,
  style = {},
}) {
  const numColor = onDark ? 'var(--zv-white)' : 'var(--color-heading)';
  const labelColor = onDark ? 'var(--zv-cool-gray)' : 'var(--color-secondary)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: align === 'center' ? 'center' : 'flex-start', ...style }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-serif)', fontWeight: 'var(--weight-medium)',
          fontSize: 'var(--text-stat)', lineHeight: 1, letterSpacing: '-0.01em',
          color: numColor,
        }}>
          {value}
        </span>
        {unit && (
          <span style={{
            fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)',
            fontSize: '24px', color: numColor,
          }}>
            {unit}
          </span>
        )}
        {trend && (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '16px',
            color: 'var(--zv-success)',
          }}>
            {trend}
          </span>
        )}
      </div>
      {label && (
        <div style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-data-label)',
          color: labelColor, marginTop: 'var(--space-1)',
        }}>
          {label}
        </div>
      )}
    </div>
  );
}
