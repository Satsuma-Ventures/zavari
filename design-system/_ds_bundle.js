/* @ds-bundle: {"format":3,"namespace":"ZavariDesignSystem_bb9393","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"StatCallout","sourcePath":"components/data/StatCallout.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"CoherenceFlag","sourcePath":"components/intelligence/CoherenceFlag.jsx"},{"name":"SourceTag","sourcePath":"components/intelligence/SourceTag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fab54dc74f36","components/core/Button.jsx":"64f9ad8bf610","components/core/Card.jsx":"52140cf2a3cf","components/core/Input.jsx":"1fffe574846d","components/data/StatCallout.jsx":"0ad2df8e1d62","components/feedback/Alert.jsx":"28e7d8e9eea5","components/intelligence/CoherenceFlag.jsx":"600263f79f22","components/intelligence/SourceTag.jsx":"573128fb8269"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ZavariDesignSystem_bb9393 = window.ZavariDesignSystem_bb9393 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zavari Badge — small pill label. Neutral by default; status tones use a
 * label + tint (never color alone). For status, an optional dot/icon precedes.
 */
function Badge({
  tone = 'neutral',
  children,
  icon = null,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      color: 'var(--color-heading)',
      background: 'var(--zv-cool-gray-soft)',
      border: 'var(--color-border)'
    },
    success: {
      color: '#276749',
      background: 'var(--zv-success-tint)',
      border: 'rgba(56,161,105,0.25)'
    },
    warning: {
      color: '#946A12',
      background: 'var(--zv-warning-tint)',
      border: 'rgba(214,158,46,0.25)'
    },
    error: {
      color: '#C53030',
      background: 'var(--zv-error-tint)',
      border: 'rgba(229,62,62,0.25)'
    },
    info: {
      color: '#0A4F86',
      background: 'var(--zv-info-tint)',
      border: 'rgba(0,153,255,0.25)'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-caption)',
      padding: '3px 10px',
      borderRadius: 'var(--radius-pill)',
      color: tones.color,
      background: tones.background,
      border: `1px solid ${tones.border}`,
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zavari Button — restrained, 4px radius, IBM Plex Sans SemiBold 14px.
 * Variants: primary (Cyan/Navy), secondary (outline), ghost, destructive.
 */
function Button({
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
    primary: {
      background: 'var(--zv-cyan)',
      color: 'var(--zv-navy)',
      border: '1.5px solid transparent',
      hover: '#00BEE6'
    },
    secondary: {
      background: 'var(--zv-white)',
      color: 'var(--zv-navy)',
      border: '1.5px solid var(--zv-navy)',
      hover: 'var(--zv-cool-gray-soft)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--zv-navy)',
      border: '1.5px solid currentColor',
      hover: 'var(--zv-navy-080)'
    },
    destructive: {
      background: 'var(--zv-error)',
      color: 'var(--zv-white)',
      border: '1.5px solid transparent',
      hover: '#C53030'
    }
  }[variant] || {};
  const pad = size === 'sm' ? '8px 16px' : size === 'lg' ? '14px 28px' : '12px 24px';
  const fontSize = size === 'sm' ? '13px' : 'var(--text-label)';
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
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
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zavari Card — white surface, 1px Cool Gray border + soft navy shadow,
 * 24px padding, 6px radius. No colored card backgrounds: color lives in
 * accents and icons within the card, never the card itself.
 */
function Card({
  title = null,
  eyebrow = null,
  children,
  footer = null,
  interactive = false,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-card)',
      padding: 'var(--space-3)',
      boxShadow: hover ? 'var(--shadow-raised)' : 'var(--shadow-card)',
      transition: 'box-shadow var(--dur-base) var(--ease-standard)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-caption)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--color-secondary)',
      marginBottom: 'var(--space-1)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-h3)',
      lineHeight: 'var(--text-h3-lh)',
      color: 'var(--color-heading)',
      margin: 0,
      marginBottom: 'var(--space-1)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--text-body-lh)',
      color: 'var(--color-ink)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-3)',
      paddingTop: 'var(--space-2)',
      borderTop: '1px solid var(--color-border)'
    }
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zavari Input — labelled text field. 1px Cool Gray border, 4px radius,
 * azure focus ring. Pair with `label` for an accessible field.
 */
function Input({
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
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-label)',
      color: 'var(--color-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: type,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-body)',
      color: 'var(--color-ink)',
      background: 'var(--color-surface)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-input)',
      padding: '10px 12px',
      width: '100%',
      outline: 'none',
      boxShadow: focus && !error ? '0 0 0 3px var(--zv-info-tint)' : error ? '0 0 0 3px var(--zv-error-tint)' : 'none',
      transition: 'border-color var(--dur-base) var(--ease-standard), box-shadow var(--dur-base) var(--ease-standard)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      color: error ? 'var(--zv-error)' : 'var(--color-secondary)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCallout.jsx
try { (() => {
/**
 * Zavari StatCallout — large-format metric. The figure is IBM Plex Serif so it
 * reads as a confident, editorial number rather than technical telemetry; the
 * data label beneath stays Mono for precision. Optional unit (Sans SemiBold).
 */
function StatCallout({
  value,
  unit = null,
  label = null,
  trend = null,
  // e.g. "+12%"
  align = 'left',
  onDark = false,
  style = {}
}) {
  const numColor = onDark ? 'var(--zv-white)' : 'var(--color-heading)';
  const labelColor = onDark ? 'var(--zv-cool-gray)' : 'var(--color-secondary)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: '8px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-stat)',
      lineHeight: 1,
      letterSpacing: '-0.01em',
      color: numColor
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '24px',
      color: numColor
    }
  }, unit), trend && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '16px',
      color: 'var(--zv-success)'
    }
  }, trend)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-data-label)',
      color: labelColor,
      marginTop: 'var(--space-1)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCallout.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zavari Alert — notification banner. 4px left accent border + 8% tint,
 * no full-color fill. State is paired with a label/title, never color alone.
 */
function Alert({
  type = 'info',
  title = null,
  children,
  style = {},
  ...rest
}) {
  const tones = {
    info: {
      border: 'var(--zv-info)',
      bg: 'var(--zv-info-tint)'
    },
    success: {
      border: 'var(--zv-success)',
      bg: 'var(--zv-success-tint)'
    },
    warning: {
      border: 'var(--zv-warning)',
      bg: 'var(--zv-warning-tint)'
    },
    error: {
      border: 'var(--zv-error)',
      bg: 'var(--zv-error-tint)'
    }
  }[type] || {};
  return /*#__PURE__*/React.createElement("div", _extends({
    role: type === 'error' || type === 'warning' ? 'alert' : 'status',
    style: {
      padding: 'var(--space-2)',
      borderLeft: `4px solid ${tones.border}`,
      background: tones.bg,
      borderRadius: '0 var(--radius-input) var(--radius-input) 0',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-subhead)',
      color: 'var(--color-heading)',
      marginBottom: '4px'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-body)',
      lineHeight: 'var(--text-body-lh)',
      color: 'var(--color-ink)'
    }
  }, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/intelligence/CoherenceFlag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zavari CoherenceFlag — the signature insight made obvious at a glance:
 * whether a bet ladders to the north star (coherent), is drifting, or
 * conflicts. Built from the triangulation motif — three signal lines that
 * resolve to a single point when coherent and split apart in conflict.
 * Calm and reassuring, never alarming. State is always paired with a label.
 */
function CoherenceFlag({
  state = 'coherent',
  // 'coherent' | 'drifting' | 'conflict'
  label = null,
  detail = null,
  size = 'md',
  style = {},
  ...rest
}) {
  const spec = {
    coherent: {
      color: 'var(--zv-cyan)',
      ink: 'var(--color-heading)',
      text: 'Coherent',
      // three lines converge to one point on the right
      lines: [[2, 4], [2, 11], [2, 18]],
      tip: [22, 11]
    },
    drifting: {
      color: 'var(--zv-azure)',
      ink: 'var(--color-heading)',
      text: 'Drifting',
      lines: [[2, 4], [2, 11], [2, 18]],
      tip: [22, 11],
      spread: 3
    },
    conflict: {
      color: 'var(--zv-warning)',
      ink: 'var(--color-heading)',
      text: 'Conflict',
      lines: [[2, 4], [2, 11], [2, 18]],
      tip: [22, 11],
      spread: 8
    }
  }[state] || {};
  const px = size === 'sm' ? 18 : size === 'lg' ? 28 : 22;
  const spread = spec.spread || 0;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: px + 8,
      height: px + 4,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: px + 6,
    height: px,
    viewBox: "0 0 24 22",
    fill: "none",
    stroke: spec.color,
    strokeWidth: "1.75",
    strokeLinecap: "round"
  }, spec.lines.map(([x, y], i) => {
    const off = (i - 1) * spread;
    return /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: x,
      y1: y,
      x2: spec.tip[0],
      y2: spec.tip[1] + off
    });
  }), /*#__PURE__*/React.createElement("circle", {
    cx: spec.tip[0],
    cy: spec.tip[1],
    r: "1.6",
    fill: spec.color,
    stroke: "none",
    opacity: state === 'coherent' ? 1 : 0.5
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-label)',
      color: spec.ink,
      lineHeight: 1.3
    }
  }, label || spec.text), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      color: 'var(--color-secondary)',
      lineHeight: 1.4
    }
  }, detail)));
}
Object.assign(__ds_scope, { CoherenceFlag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/intelligence/CoherenceFlag.jsx", error: String((e && e.message) || e) }); }

// components/intelligence/SourceTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Zavari SourceTag — provenance chip. Every conclusion traces to its sources;
 * this makes that lineage native and reassuring rather than bolted on.
 * Vendor-neutral: no source dominates. First-party sources are marked as a
 * first-class peer (cyan dot), never a lesser tier.
 */
function SourceTag({
  source,
  kind = 'connected',
  // 'connected' = third-party stack · 'first-party' = Zavari's own tools
  confidence = null,
  // 'high' | 'medium' | 'low'
  count = null,
  style = {},
  ...rest
}) {
  const isFirstParty = kind === 'first-party';
  const dot = isFirstParty ? 'var(--zv-cyan)' : 'var(--zv-accent-gray)';
  const conf = confidence && {
    high: {
      label: 'High confidence',
      color: '#276749'
    },
    medium: {
      label: 'Medium confidence',
      color: '#946A12'
    },
    low: {
      label: 'Low confidence',
      color: 'var(--color-secondary)'
    }
  }[confidence];
  return /*#__PURE__*/React.createElement("span", _extends({
    title: isFirstParty ? 'First-party source' : 'Connected source',
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '7px',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--color-heading)',
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-pill)',
      padding: '3px 10px 3px 8px',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '7px',
      height: '7px',
      borderRadius: '50%',
      background: dot,
      flexShrink: 0,
      boxShadow: isFirstParty ? '0 0 0 3px var(--zv-info-tint)' : 'none'
    }
  }), /*#__PURE__*/React.createElement("span", null, source), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--color-secondary)',
      fontWeight: 400
    }
  }, "\xB7", ' ', count), conf && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: '11px',
      color: conf.color,
      paddingLeft: '6px',
      marginLeft: '1px',
      borderLeft: '1px solid var(--color-border)'
    }
  }, conf.label));
}
Object.assign(__ds_scope, { SourceTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/intelligence/SourceTag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.CoherenceFlag = __ds_scope.CoherenceFlag;

__ds_ns.SourceTag = __ds_scope.SourceTag;

})();
