import React from 'react';

/**
 * Zavari Input — labelled text field. 1px Cool Gray border, 4px radius,
 * azure focus ring. Pair with `label` for an accessible field.
 */
export function Input({
  label = null,
  hint = null,
  error = null,
  id,
  type = 'text',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const borderColor = error ? 'var(--zv-error)' : focus ? 'var(--zv-azure)' : 'var(--color-border)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-1)' }}>
      {label && (
        <label
          htmlFor={fieldId}
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 'var(--weight-semibold)',
            fontSize: 'var(--text-label)',
            color: 'var(--color-heading)',
          }}
        >
          {label}
        </label>
      )}
      <input
        id={fieldId}
        type={type}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-sans)',
          fontSize: 'var(--text-body)',
          color: 'var(--color-ink)',
          background: 'var(--color-surface)',
          border: `1px solid ${borderColor}`,
          borderRadius: 'var(--radius-input)',
          padding: '10px 12px',
          width: '100%',
          outline: 'none',
          boxShadow: focus && !error ? '0 0 0 3px var(--zv-info-tint)'
            : error ? '0 0 0 3px var(--zv-error-tint)' : 'none',
          transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-caption)',
            color: error ? 'var(--zv-error)' : 'var(--color-secondary)',
          }}
        >
          {error || hint}
        </span>
      )}
    </div>
  );
}
