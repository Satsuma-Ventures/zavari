/* @ds-bundle: {"format":4,"namespace":"ZavariDesignSystem_bb9393","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"StatCallout","sourcePath":"components/data/StatCallout.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"CoherenceFlag","sourcePath":"components/intelligence/CoherenceFlag.jsx"},{"name":"SourceTag","sourcePath":"components/intelligence/SourceTag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"fab54dc74f36","components/core/Button.jsx":"64f9ad8bf610","components/core/Card.jsx":"52140cf2a3cf","components/core/Input.jsx":"1fffe574846d","components/data/StatCallout.jsx":"0ad2df8e1d62","components/feedback/Alert.jsx":"28e7d8e9eea5","components/intelligence/CoherenceFlag.jsx":"600263f79f22","components/intelligence/SourceTag.jsx":"573128fb8269","concepts/act1.jsx":"158db2938d47","concepts/act2.jsx":"c3059b6aceeb","concepts/act3.jsx":"8ad3fd40d8ef","concepts/act4.jsx":"8be1b8423fa4","concepts/act5.jsx":"92c3a30fcbba","concepts/data.jsx":"0f579fadb192","concepts/kit.jsx":"00d2a3ca0493","concepts/shell.jsx":"e293ffa17cad"},"inlinedExternals":[],"unexposedExports":[]} */

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
  }, "\xB7", '\u200a', count), conf && /*#__PURE__*/React.createElement("span", {
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

// concepts/act1.jsx
try { (() => {
/* ============================================================================
   ACT 1 — Proactive intelligence
   CommandLayer (Briefing / Console) · OpportunityBrief (Memo / Decision desk)
   Spine scenario: the Opportunity (E) — customers pointing at the next product.
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const {
    Icon,
    Eyebrow,
    Mono,
    ScreenHeader,
    Panel,
    PanelLabel,
    Confidence,
    Divider,
    SourceTag
  } = K;
  const {
    CoherenceFlag,
    StatCallout,
    Button
  } = K.DS;
  const D = window.ZV;

  // tone per approach — calm, never a warning light
  const APPROACH = {
    opportunity: 'var(--zv-cyan)',
    risk: 'var(--zv-azure)',
    scale: 'var(--zv-navy)'
  };

  // --- positive coherence chip (converge motif), usable on dark --------------
  function CoherenceChip({
    dark
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 9,
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 13,
        color: dark ? '#fff' : 'var(--color-heading)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "24",
      height: "18",
      viewBox: "0 0 24 22",
      fill: "none",
      stroke: "var(--zv-cyan)",
      strokeWidth: "1.75",
      strokeLinecap: "round"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "4",
      x2: "22",
      y2: "11"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "11",
      x2: "22",
      y2: "11"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "18",
      x2: "22",
      y2: "11"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "22",
      cy: "11",
      r: "1.8",
      fill: "var(--zv-cyan)",
      stroke: "none"
    })), "On-strategy \xB7 Extends the core");
  }

  // --- the marquee proactive output, as a hero card -------------------------
  function BriefHero({
    go,
    compact
  }) {
    const b = D.brief;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gradient-navy)',
        borderRadius: 8,
        padding: compact ? 28 : 36,
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-raised)'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "320",
      height: "320",
      viewBox: "0 0 100 100",
      style: {
        position: 'absolute',
        right: -40,
        top: -60,
        opacity: 0.10
      },
      fill: "none",
      stroke: "var(--zv-cyan)",
      strokeWidth: "0.7"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "20",
      x2: "80",
      y2: "50"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "50",
      x2: "80",
      y2: "50"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "80",
      x2: "80",
      y2: "50"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "80",
      cy: "50",
      r: "2",
      fill: "var(--zv-cyan)",
      stroke: "none"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 18,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        letterSpacing: '0.06em',
        color: 'var(--zv-cyan)'
      }
    }, b.kicker), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.3)'
      }
    }), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'rgba(224,230,237,0.65)'
      }
    }, b.generated)), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: compact ? 26 : 32,
        lineHeight: 1.2,
        margin: 0,
        maxWidth: 720,
        letterSpacing: '-0.01em'
      }
    }, b.title), !compact && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 16,
        lineHeight: 1.6,
        color: 'rgba(224,230,237,0.86)',
        margin: '16px 0 0',
        maxWidth: 660
      }
    }, b.standfirst), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20,
        marginTop: 22,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(CoherenceChip, {
      dark: true
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 1,
        height: 22,
        background: 'rgba(255,255,255,0.14)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'rgba(224,230,237,0.55)'
      }
    }, "TRIANGULATED FROM"), /*#__PURE__*/React.createElement(SourceTag, {
      source: "Zavari Research",
      kind: "owned"
    }), /*#__PURE__*/React.createElement(SourceTag, {
      source: "Amplitude",
      kind: "connected"
    }), /*#__PURE__*/React.createElement(SourceTag, {
      source: "Support",
      kind: "connected"
    }), /*#__PURE__*/React.createElement(SourceTag, {
      source: "Market Intelligence",
      kind: "market"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        marginTop: 26
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('brief'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "Open the brief"), /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('coherence'),
      style: {
        color: '#fff',
        borderColor: 'rgba(255,255,255,0.35)'
      }
    }, "See where it fits")));
  }

  // --- surfaced item card — labeled by approach -----------------------------
  function SurfacedCard({
    item,
    go,
    compact
  }) {
    const tone = APPROACH[item.tone];
    return /*#__PURE__*/React.createElement(Panel, {
      hover: true,
      onClick: () => go(item.to),
      pad: compact ? 20 : 22,
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: tone,
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        letterSpacing: '0.08em',
        color: 'var(--color-secondary)'
      }
    }, item.approach.toUpperCase())), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 1.32,
        color: 'var(--color-heading)',
        marginBottom: 8
      }
    }, item.headline), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        lineHeight: 1.55,
        color: 'var(--color-ink)',
        margin: '0 0 16px'
      }
    }, item.meta), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, item.sources.slice(0, 2).map((s, i) => /*#__PURE__*/React.createElement(SourceTag, {
      key: i,
      source: s.source,
      kind: s.kind
    }))), /*#__PURE__*/React.createElement(Confidence, {
      level: item.confidence
    })));
  }

  // --- active bets mini list ------------------------------------------------
  function BetsPanel() {
    return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelLabel, {
      icon: "coherence",
      right: /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          color: 'var(--color-secondary)'
        }
      }, D.bets.length, " active")
    }, "Where it lands on the roadmap"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column'
      }
    }, D.bets.slice(0, 5).map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
        padding: '10px 0',
        borderTop: i ? '1px solid var(--color-border)' : 'none'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 500,
        color: 'var(--color-heading)',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, b.name), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, b.quarter, " \xB7 ", b.tag)), /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: b.state,
      size: "sm"
    })))));
  }
  function SourcesFeeding() {
    const group = (label, list, kind) => /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'var(--color-secondary)',
        display: 'block',
        marginBottom: 8,
        letterSpacing: '0.05em'
      }
    }, label), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, list.map(s => /*#__PURE__*/React.createElement(SourceTag, {
      key: s,
      source: s,
      kind: kind
    }))));
    return /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelLabel, {
      icon: "ecosystem"
    }, "Sources feeding this"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 14
      }
    }, group("ZAVARI'S TOOLS", D.sources.owned, 'owned'), group('MARKET INTELLIGENCE', D.sources.market, 'market'), group('YOUR CONNECTED STACK', D.sources.connected, 'connected'), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)',
        lineHeight: 1.5,
        borderTop: '1px solid var(--color-border)',
        paddingTop: 12
      }
    }, "Every source is weighed as a peer \u2014 no single vendor decides a conclusion.")));
  }
  function GreetingHead() {
    return /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "Strategic Command Layer \xB7 since you last looked",
      title: `Good morning, ${D.tenant.user.name.split(' ')[0]}. Zavari has been working.`,
      lede: `Three things surfaced since ${D.tenant.lastSeen} — generated proactively, not in response to a query.`,
      right: /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'right'
        }
      }, /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          color: 'var(--color-secondary)'
        }
      }, "NORTH STAR \xB7 THIS WEEK"), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 4
        }
      }, /*#__PURE__*/React.createElement(StatCallout, {
        value: D.northStar.value,
        trend: D.northStar.trend,
        label: "WEEKLY ACTIVATED ACCOUNTS",
        align: "left"
      })))
    });
  }
  function CommandLayer({
    variant,
    go
  }) {
    if (variant === 'console') {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GreetingHead, null), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          marginBottom: 16
        }
      }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(StatCallout, {
        value: "6 / 10",
        label: "LARGEST ACCOUNTS EXPORTING DATA"
      }), /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          color: 'var(--color-secondary)',
          marginTop: 6,
          display: 'block'
        }
      }, "independently \xB7 no prompting")), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(StatCallout, {
        value: "3.4\xD7",
        label: "EXPANSION RATE OF THOSE ACCOUNTS"
      }), /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          color: 'var(--color-secondary)',
          marginTop: 6,
          display: 'block'
        }
      }, "vs. the rest of the base")), /*#__PURE__*/React.createElement(Panel, {
        accent: true
      }, /*#__PURE__*/React.createElement(StatCallout, {
        value: "1",
        label: "STRATEGIC OPPORTUNITY OPEN"
      }), /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          color: 'var(--color-secondary)',
          marginTop: 6,
          display: 'block'
        }
      }, "extends the core"))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr',
          gap: 16,
          alignItems: 'start'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement(BriefHero, {
        go: go,
        compact: true
      }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Divider, null, "Also surfaced"), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 12
        }
      }, D.surfaced.slice(1).map(it => /*#__PURE__*/React.createElement(SurfacedCard, {
        key: it.id,
        item: it,
        go: go,
        compact: true
      }))))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement(BetsPanel, null), /*#__PURE__*/React.createElement(SourcesFeeding, null))));
    }
    // briefing (editorial)
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(GreetingHead, null), /*#__PURE__*/React.createElement(BriefHero, {
      go: go
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 28
      }
    }, /*#__PURE__*/React.createElement(Divider, null, "Also surfaced since ", D.tenant.lastSeen), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16
      }
    }, D.surfaced.slice(1).map(it => /*#__PURE__*/React.createElement(SurfacedCard, {
      key: it.id,
      item: it,
      go: go
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(BetsPanel, null), /*#__PURE__*/React.createElement(SourcesFeeding, null)));
  }

  // ==========================================================================
  // OPPORTUNITY BRIEF — the marquee surface
  // ==========================================================================
  function RecBlock({
    go,
    boxed
  }) {
    const b = D.brief;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: boxed ? 'var(--zv-cool-gray-soft)' : 'transparent',
        border: boxed ? '1px solid var(--color-border)' : 'none',
        borderLeft: '3px solid var(--zv-azure)',
        borderRadius: boxed ? 6 : 0,
        padding: boxed ? '20px 24px' : '4px 0 4px 20px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: 'var(--color-link)',
        marginBottom: 8
      }
    }, "Recommendation"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 20,
        lineHeight: 1.4,
        color: 'var(--color-heading)'
      }
    }, b.recommendation), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginTop: 16,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('decision'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "Open as Decision Record"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('coherence')
    }, "See the coherence read")));
  }
  function Finding({
    f,
    memo
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        gap: memo ? 20 : 16,
        padding: '22px 0',
        borderTop: '1px solid var(--color-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 26,
        color: 'var(--color-heading)',
        lineHeight: 1
      }
    }, String(f.n).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: memo ? 21 : 19,
        lineHeight: 1.4,
        color: 'var(--color-heading)'
      }
    }, f.claim), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15.5,
        lineHeight: 1.6,
        color: 'var(--color-ink)',
        margin: '10px 0 14px',
        maxWidth: 640
      }
    }, f.detail), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Confidence, {
      level: f.confidence
    }), f.coherent && /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: "coherent",
      label: "Extends the core",
      size: "sm"
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, f.sources.map((s, i) => /*#__PURE__*/React.createElement(SourceTag, {
      key: i,
      source: s.source,
      kind: s.kind,
      count: s.count
    }))))));
  }

  // positive knock-on effect — an upside, not a warning
  function KnockOn({
    boxed
  }) {
    const k = D.brief.knockOn;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        gap: boxed ? 20 : 16,
        padding: '22px 0 4px',
        borderTop: '1px solid var(--color-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        color: 'var(--zv-navy)',
        paddingTop: 2
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "coherence",
      size: 22
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        color: 'var(--color-secondary)',
        marginBottom: 8
      }
    }, k.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: boxed ? 21 : 19,
        lineHeight: 1.4,
        color: 'var(--color-heading)'
      }
    }, k.claim), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15.5,
        lineHeight: 1.6,
        color: 'var(--color-ink)',
        margin: '10px 0 14px',
        maxWidth: 640
      }
    }, k.detail), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, k.sources.map((s, i) => /*#__PURE__*/React.createElement(SourceTag, {
      key: i,
      source: s.source,
      kind: s.kind
    })))));
  }
  function BriefMeta() {
    const b = D.brief;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        flexWrap: 'wrap',
        marginBottom: 18
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        letterSpacing: '0.05em',
        color: 'var(--color-link)'
      }
    }, b.kicker), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 4,
        height: 4,
        borderRadius: '50%',
        background: 'var(--color-border)'
      }
    }), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, b.id, " \xB7 ", b.generated));
  }
  function OpportunityBrief({
    variant,
    go
  }) {
    const b = D.brief;
    if (variant === 'desk') {
      // decision desk — structured, scannable
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(BriefMeta, null), /*#__PURE__*/React.createElement(ScreenHeader, {
        title: b.title
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'grid',
          gridTemplateColumns: '1fr 320px',
          gap: 20,
          alignItems: 'start'
        }
      }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Panel, {
        style: {
          marginBottom: 16
        }
      }, /*#__PURE__*/React.createElement(RecBlock, {
        go: go
      })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelLabel, {
        icon: "brief",
        right: /*#__PURE__*/React.createElement(Mono, {
          style: {
            fontSize: 11,
            color: 'var(--color-secondary)'
          }
        }, b.findings.length, " findings")
      }, "The evidence"), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: -6
        }
      }, b.findings.map(f => /*#__PURE__*/React.createElement(Finding, {
        key: f.n,
        f: f
      })), /*#__PURE__*/React.createElement(KnockOn, null)))), /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
          position: 'sticky',
          top: 76
        }
      }, /*#__PURE__*/React.createElement(Panel, {
        style: {
          background: 'var(--gradient-navy)',
          border: 'none'
        }
      }, /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 10.5,
          color: 'var(--zv-cyan)',
          letterSpacing: '0.06em'
        }
      }, b.projected.label), /*#__PURE__*/React.createElement("div", {
        style: {
          marginTop: 10
        }
      }, /*#__PURE__*/React.createElement(StatCallout, {
        value: b.projected.value,
        unit: b.projected.unit,
        onDark: true
      })), /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 12,
          color: 'rgba(224,230,237,0.7)',
          display: 'block',
          marginTop: 12,
          lineHeight: 1.5
        }
      }, "These accounts are already expanding faster than the rest of the base.")), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelLabel, {
        icon: "coherence"
      }, "Coherence read-out"), /*#__PURE__*/React.createElement(CoherenceFlag, {
        state: "coherent",
        label: "On-strategy",
        detail: "Extends what customers already value"
      }), /*#__PURE__*/React.createElement("div", {
        style: {
          height: 12
        }
      }), /*#__PURE__*/React.createElement(CoherenceFlag, {
        state: "coherent",
        label: "Deepens O3",
        detail: "Feeds \u201CBecome the system of record\u201D"
      })), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelLabel, {
        icon: "spark"
      }, "Why now"), /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 12.5,
          color: 'var(--color-ink)',
          lineHeight: 1.6
        }
      }, "The behavior is accelerating and no competitor has planted a flag. Move first and you define the category.")))));
    }
    // memo — editorial long-form
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 940,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(BriefMeta, null), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: 38,
        lineHeight: 1.18,
        color: 'var(--color-heading)',
        margin: '0 0 18px',
        letterSpacing: '-0.01em'
      }
    }, b.title), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 19,
        lineHeight: 1.6,
        color: 'var(--color-ink)',
        margin: '0 0 22px'
      }
    }, b.standfirst), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        padding: '14px 0',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: "coherent",
      label: b.coherence.label,
      detail: b.coherence.detail
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'var(--color-secondary)'
      }
    }, b.projected.label), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 2
      }
    }, /*#__PURE__*/React.createElement(StatCallout, {
      value: b.projected.value,
      unit: b.projected.unit
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        margin: '8px 0 28px'
      }
    }, b.findings.map(f => /*#__PURE__*/React.createElement(Finding, {
      key: f.n,
      f: f,
      memo: true
    })), /*#__PURE__*/React.createElement(KnockOn, {
      boxed: true
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '2px solid var(--zv-navy)',
        paddingTop: 24
      }
    }, /*#__PURE__*/React.createElement(RecBlock, {
      go: go,
      boxed: true
    })));
  }
  window.CommandLayer = CommandLayer;
  window.OpportunityBrief = OpportunityBrief;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/act1.jsx", error: String((e && e.message) || e) }); }

// concepts/act2.jsx
try { (() => {
/* ============================================================================
   ACT 2 — Why the intelligence is uniquely good
   CoherenceMap (Constellation / Ledger) · DecisionRecord
   Coherence is shown as insight, calmly — never an alarm. Most bets hold
   together; one has come loose (an opportunity to realign).
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const {
    Icon,
    Eyebrow,
    Mono,
    ScreenHeader,
    Panel,
    PanelLabel,
    Confidence,
    Divider,
    cohColor,
    cohInk,
    SourceTag,
    sourceKind
  } = K;
  const {
    CoherenceFlag,
    StatCallout,
    Button
  } = K.DS;
  const D = window.ZV;
  const objX = {
    'OBJ-1': 180,
    'OBJ-2': 540,
    'OBJ-3': 900
  };
  const betX = {
    B1: 90,
    B2: 270,
    B3: 450,
    B4: 630,
    B5: 810,
    B6: 990
  };

  // ---- Constellation: spatial ladder map -----------------------------------
  function Constellation() {
    const W = 1080,
      H = 520;
    const nsY = 46,
      objY = 215,
      betY = 430;
    const lines = D.bets.map(b => {
      const x1 = betX[b.id],
        y1 = betY - 26;
      if (!b.ladder) return {
        id: b.id,
        x1,
        y1,
        x2: x1,
        y2: y1 - 70,
        state: 'drifting',
        dash: true
      };
      return {
        id: b.id,
        x1,
        y1,
        x2: objX[b.ladder],
        y2: objY + 30,
        state: b.state,
        dash: b.state !== 'coherent'
      };
    });
    const objLines = D.objectives.map(o => ({
      x1: objX[o.id],
      y1: objY - 26,
      x2: 540,
      y2: nsY + 26
    }));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto',
        paddingBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: W,
        height: H,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: W,
      height: H,
      style: {
        position: 'absolute',
        inset: 0
      },
      fill: "none"
    }, objLines.map((l, i) => /*#__PURE__*/React.createElement("line", {
      key: i,
      x1: l.x1,
      y1: l.y1,
      x2: l.x2,
      y2: l.y2,
      stroke: "var(--zv-cool-gray)",
      strokeWidth: "1.5"
    })), lines.map(l => /*#__PURE__*/React.createElement("line", {
      key: l.id,
      x1: l.x1,
      y1: l.y1,
      x2: l.x2,
      y2: l.y2,
      stroke: cohColor(l.state),
      strokeWidth: "1.8",
      strokeDasharray: l.dash ? '5 5' : 'none',
      strokeLinecap: "round",
      opacity: l.state === 'coherent' ? 0.55 : 0.9
    })), D.objectives.map(o => /*#__PURE__*/React.createElement("circle", {
      key: o.id,
      cx: objX[o.id],
      cy: objY + 30,
      r: "3",
      fill: "var(--zv-cyan)"
    })), /*#__PURE__*/React.createElement("circle", {
      cx: 540,
      cy: nsY + 26,
      r: "3.5",
      fill: "var(--zv-navy)"
    })), /*#__PURE__*/React.createElement("div", {
      style: nodeStyle(540, nsY, 300)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gradient-navy)',
        borderRadius: 8,
        padding: '14px 20px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10,
        color: 'var(--zv-cyan)',
        letterSpacing: '0.08em'
      }
    }, "NORTH STAR"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: 18,
        color: '#fff',
        marginTop: 3
      }
    }, "Weekly Activated Accounts"))), D.objectives.map(o => /*#__PURE__*/React.createElement("div", {
      key: o.id,
      style: nodeStyle(objX[o.id], objY, 232)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 6,
        padding: '12px 16px',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'var(--color-secondary)'
      }
    }, o.id), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 16,
        color: 'var(--color-heading)',
        lineHeight: 1.25,
        marginTop: 2
      }
    }, o.name)))), D.bets.map(b => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: nodeStyle(betX[b.id], betY, 158)
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface)',
        border: `1px solid ${b.state === 'coherent' ? b.lead ? 'var(--zv-azure)' : 'var(--color-border)' : cohColor(b.state)}`,
        borderRadius: 6,
        padding: '10px 12px',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        marginBottom: 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: cohColor(b.state),
        flexShrink: 0
      }
    }), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 9.5,
        color: 'var(--color-secondary)',
        letterSpacing: '0.04em'
      }
    }, b.lead ? 'NEXT BET' : b.state.toUpperCase())), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 13,
        color: 'var(--color-heading)',
        lineHeight: 1.25
      }
    }, b.name))))));
  }
  function nodeStyle(cx, cy, w) {
    return {
      position: 'absolute',
      left: cx,
      top: cy,
      width: w,
      transform: 'translate(-50%, -50%)'
    };
  }

  // ---- insight read-outs (always words, never an alarm) --------------------
  function ReadOuts() {
    const outs = [{
      state: 'coherent',
      t: 'Five bets ladder cleanly to the north star',
      d: 'Onboarding Copilot, Template Marketplace, enterprise sign-on and Salesforce sync each trace to an objective and to the metric.',
      tag: 'Holding together'
    }, {
      state: 'coherent',
      t: 'A customer pattern points to your next bet',
      d: 'Native data export & reporting — the step several accounts already improvised — deepens the system-of-record objective. It extends the core rather than stretching away from it.',
      tag: 'New · extends the core'
    }, {
      state: 'drifting',
      t: 'One bet no longer ladders anywhere',
      d: 'The mobile approver app stopped mapping to an active objective when the plan changed. Not a problem — an opportunity to realign: worth a deliberate keep-or-cut.',
      tag: 'Come loose'
    }];
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16
      }
    }, outs.map((o, i) => /*#__PURE__*/React.createElement(Panel, {
      key: i,
      style: {
        borderTop: `3px solid ${cohColor(o.state)}`
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: cohInk(o.state),
        letterSpacing: '0.05em'
      }
    }, o.tag.toUpperCase()), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 17,
        lineHeight: 1.3,
        color: 'var(--color-heading)',
        margin: '8px 0 8px'
      }
    }, o.t), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        lineHeight: 1.55,
        color: 'var(--color-ink)',
        margin: 0
      }
    }, o.d))));
  }

  // ---- Ledger: analytical matrix -------------------------------------------
  function Ledger() {
    const counts = D.bets.reduce((a, b) => {
      a[b.state] = (a[b.state] || 0) + 1;
      return a;
    }, {});
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2,1fr)',
        gap: 16,
        marginBottom: 20
      }
    }, [['coherent', counts.coherent, 'ladder cleanly to the north star'], ['drifting', counts.drifting, 'has come loose — worth a deliberate decision']].map(([st, n, lbl]) => /*#__PURE__*/React.createElement(Panel, {
      key: st,
      style: {
        borderLeft: `3px solid ${cohColor(st)}`
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'baseline',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 40,
        color: 'var(--color-heading)',
        lineHeight: 1
      }
    }, n), /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: st
    })), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 12,
        color: 'var(--color-secondary)',
        marginTop: 8,
        display: 'block'
      }
    }, n === 1 ? '1 bet ' : n + ' bets ', lbl)))), /*#__PURE__*/React.createElement(Panel, {
      pad: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1.6fr 130px 70px',
        gap: 0,
        padding: '14px 24px',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--zv-cool-gray-soft)'
      }
    }, ['Active bet', 'Ladders to', 'Coherence', 'ROI'].map((h, i) => /*#__PURE__*/React.createElement(Mono, {
      key: i,
      style: {
        fontSize: 10.5,
        letterSpacing: '0.06em',
        color: 'var(--color-secondary)',
        textAlign: i === 3 ? 'right' : 'left'
      }
    }, h.toUpperCase()))), D.bets.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1.6fr 130px 70px',
        gap: 0,
        alignItems: 'center',
        padding: '16px 24px',
        borderTop: i ? '1px solid var(--color-border)' : 'none',
        background: b.lead ? 'var(--zv-azure-tint)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--color-heading)'
      }
    }, b.name), b.lead && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 10.5,
        color: 'var(--color-link)',
        border: '1px solid var(--zv-azure-200)',
        borderRadius: 999,
        padding: '1px 8px'
      }
    }, "NEXT BET")), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, b.id, " \xB7 ", b.quarter, " \xB7 ", b.tag)), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: b.ladder ? 'var(--color-ink)' : 'var(--color-secondary)'
      }
    }, b.laddersTo ? b.laddersTo : /*#__PURE__*/React.createElement("em", {
      style: {
        color: 'var(--color-secondary)'
      }
    }, "\u2014 no active objective yet")), /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: b.state,
      size: "sm"
    }), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 14,
        color: 'var(--color-heading)',
        textAlign: 'right'
      }
    }, b.roi)))));
  }
  function CoherenceMap({
    variant,
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "Coherence Map \xB7 across your whole strategy",
      title: "Here's how your bets read against the strategy.",
      lede: "Every active bet, traced to the north star \u2014 from owned tools, connected delivery and market signal. Most of it holds together. A new customer pattern points to your next bet, and one older bet has come loose."
    }), /*#__PURE__*/React.createElement(Panel, {
      style: {
        marginBottom: 20,
        padding: '20px 24px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, "READING"), [['coherent', 'Ladders to the north star'], ['drifting', 'Come loose — worth a deliberate decision']].map(([s, l]) => /*#__PURE__*/React.createElement("span", {
      key: s,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "26",
      height: "14",
      viewBox: "0 0 26 14"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "2",
      x2: "24",
      y2: "7",
      stroke: cohColor(s),
      strokeWidth: "1.8",
      strokeDasharray: s === 'coherent' ? 'none' : '4 4',
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "2",
      y1: "12",
      x2: "24",
      y2: "7",
      stroke: cohColor(s),
      strokeWidth: "1.8",
      strokeDasharray: s === 'coherent' ? 'none' : '4 4',
      strokeLinecap: "round"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "24",
      cy: "7",
      r: "2",
      fill: cohColor(s)
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--color-ink)'
      }
    }, l))))), variant === 'ledger' ? /*#__PURE__*/React.createElement(Ledger, null) : /*#__PURE__*/React.createElement(Panel, {
      style: {
        marginBottom: 20,
        padding: '28px 24px'
      }
    }, /*#__PURE__*/React.createElement(Constellation, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 4
      }
    }, /*#__PURE__*/React.createElement(Divider, null, "What this means \u2014 read in words, never color alone"), /*#__PURE__*/React.createElement(ReadOuts, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        display: 'flex',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => go('brief'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "Open the opportunity brief"), /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('decision')
    }, "How this was decided")));
  }

  // ==========================================================================
  // DECISION RECORD — the auditable chain
  // ==========================================================================
  function DecisionRecord({
    go
  }) {
    const dec = D.decision;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 920,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "Decision Record \xB7 strategy \u2192 execution",
      title: dec.title,
      lede: "One unbroken, auditable chain \u2014 from the metric, through the insight and its sources, to the epic now carrying its reasoning into delivery.",
      right: /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          gap: 8,
          alignItems: 'flex-end'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: 12,
          color: '#276749',
          background: 'var(--zv-success-tint)',
          border: '1px solid rgba(56,161,105,0.25)',
          borderRadius: 999,
          padding: '4px 12px'
        }
      }, "\u25CF ", dec.status), /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          color: 'var(--color-secondary)'
        }
      }, dec.owner, " \xB7 ", dec.date))
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative'
      }
    }, dec.chain.map((step, i) => {
      const last = i === dec.chain.length - 1;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        style: {
          display: 'grid',
          gridTemplateColumns: '150px 1fr',
          gap: 24,
          position: 'relative'
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          textAlign: 'right',
          paddingTop: 20
        }
      }, /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          letterSpacing: '0.05em',
          color: step.byo ? 'var(--color-secondary)' : 'var(--color-heading)'
        }
      }, step.kind.toUpperCase())), /*#__PURE__*/React.createElement("div", {
        style: {
          position: 'relative',
          paddingLeft: 32,
          paddingBottom: last ? 0 : 18
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          left: 7,
          top: 26,
          width: 2,
          bottom: last ? 'auto' : -4,
          height: last ? 0 : 'auto',
          background: 'var(--color-border)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          left: 0,
          top: 22,
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: step.byo ? 'var(--color-surface)' : 'var(--zv-navy)',
          border: step.byo ? '2px solid var(--zv-accent-gray)' : '2px solid var(--zv-navy)',
          boxShadow: step.byo ? 'none' : '0 0 0 4px var(--zv-info-tint)'
        }
      }), /*#__PURE__*/React.createElement(Panel, {
        pad: 18,
        accent: step.byo,
        style: {
          marginTop: 8
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 16
        }
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          fontFamily: i <= 1 ? 'var(--font-serif)' : 'var(--font-sans)',
          fontWeight: i <= 1 ? 500 : 600,
          fontSize: i === 0 ? 22 : 17,
          lineHeight: 1.35,
          color: 'var(--color-heading)'
        }
      }, step.body), step.byo && /*#__PURE__*/React.createElement("span", {
        style: {
          flexShrink: 0,
          fontFamily: 'var(--font-mono)',
          fontSize: 10.5,
          color: 'var(--color-secondary)',
          border: '1px solid var(--color-border)',
          borderRadius: 999,
          padding: '2px 9px'
        }
      }, "CONNECTED \xB7 JIRA")), /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 12.5,
          color: 'var(--color-secondary)',
          marginTop: 7,
          display: 'block'
        }
      }, step.meta), step.src.length > 0 && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          gap: 6,
          flexWrap: 'wrap',
          marginTop: 12
        }
      }, step.src.map(s => /*#__PURE__*/React.createElement(SourceTag, {
        key: s,
        source: s,
        kind: sourceKind(s)
      }))), step.byo && /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 12,
          color: 'var(--color-link)',
          marginTop: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 6
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "check",
        size: 14
      }), " Carries the objective + insight into the dev backlog"))));
    })));
  }
  window.CoherenceMap = CoherenceMap;
  window.DecisionRecord = DecisionRecord;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/act2.jsx", error: String((e && e.message) || e) }); }

// concepts/act3.jsx
try { (() => {
/* ============================================================================
   ACT 3 — The platform
   EcosystemMap (Layered / Orbit) — Zavari's tools · market intelligence ·
   your connected stack, with the intelligence layer on top.
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const {
    Icon,
    Eyebrow,
    Mono,
    ScreenHeader,
    Panel,
    Divider
  } = K;
  const {
    Button
  } = K.DS;
  const D = window.ZV;
  const E = D.ecosystem;
  const KIND_DOT = {
    owned: 'var(--zv-navy)',
    market: 'var(--zv-azure)',
    connected: 'var(--zv-accent-gray)'
  };
  function Legend() {
    const item = (kind, label) => /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 9,
        height: 9,
        borderRadius: '50%',
        background: KIND_DOT[kind],
        boxShadow: kind === 'owned' ? '0 0 0 3px var(--zv-info-tint)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--color-ink)'
      }
    }, label));
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 22,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, "LEGEND"), item('owned', "Zavari's tools"), item('market', 'Market intelligence'), item('connected', 'Your connected stack'));
  }

  // tool / node tile
  function Tile({
    mono,
    name,
    note,
    kind,
    small
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 6,
        padding: small ? '11px 13px' : '14px 16px',
        boxShadow: 'var(--shadow-card)',
        minWidth: small ? 140 : 160,
        flex: '0 0 auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        marginBottom: note ? 6 : 0
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 26,
        height: 26,
        borderRadius: 5,
        background: 'var(--zv-navy)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 500,
        flexShrink: 0
      }
    }, mono), /*#__PURE__*/React.createElement("div", {
      style: {
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: KIND_DOT[kind],
        flexShrink: 0,
        boxShadow: kind === 'owned' ? '0 0 0 2.5px var(--zv-info-tint)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 14,
        color: 'var(--color-heading)',
        whiteSpace: 'nowrap'
      }
    }, name)))), note && /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)',
        display: 'block',
        paddingLeft: 35
      }
    }, note));
  }

  // ---- Layered stack -------------------------------------------------------
  function Layered() {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gradient-navy)',
        borderRadius: 8,
        padding: '20px 24px',
        boxShadow: 'var(--shadow-raised)',
        position: 'relative',
        zIndex: 2
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--zv-cyan)',
        letterSpacing: '0.07em',
        display: 'block',
        marginBottom: 14
      }
    }, "THE INTELLIGENCE LAYER \xB7 READS ACROSS THE WHOLE STACK"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, E.intelligence.map(n => /*#__PURE__*/React.createElement("div", {
      key: n.id,
      style: {
        flex: '1 1 200px',
        background: 'rgba(255,255,255,0.06)',
        border: '1px solid rgba(0,212,255,0.22)',
        borderRadius: 6,
        padding: '12px 14px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--zv-cyan)',
        boxShadow: '0 0 0 3px rgba(0,212,255,0.18)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 14,
        color: '#fff'
      }
    }, n.name)))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 60,
        height: 26
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 2,
        background: 'linear-gradient(var(--zv-cyan), var(--color-border))'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 240px',
        gap: 16,
        alignItems: 'stretch'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        padding: 22,
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 16
      }
    }, "Zavari's tools \xB7 the capable middle"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'stretch',
        gap: 12,
        flexWrap: 'wrap'
      }
    }, E.owned.map(t => /*#__PURE__*/React.createElement(Tile, {
      key: t.id,
      mono: t.mono,
      name: t.name,
      note: t.note,
      kind: "owned",
      small: true
    }))), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11.5,
        color: 'var(--color-secondary)',
        lineHeight: 1.6,
        display: 'block',
        marginTop: 16,
        borderTop: '1px solid var(--color-border)',
        paddingTop: 14
      }
    }, "Light to use, structured underneath \u2014 the same structure that makes each tool feel simple makes it legible to the intelligence layer above.")), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        padding: 20,
        boxShadow: 'var(--shadow-card)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 14
      }
    }, "Market intelligence"), /*#__PURE__*/React.createElement(Tile, {
      mono: E.market[0].mono,
      name: E.market[0].name,
      kind: "market"
    }), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11.5,
        color: 'var(--color-secondary)',
        lineHeight: 1.55,
        marginTop: 12,
        display: 'block'
      }
    }, E.market[0].note, "."))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        gap: 120,
        height: 26
      }
    }, [0, 1].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 2,
        background: 'linear-gradient(var(--color-border), var(--zv-cool-gray))'
      }
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--zv-cool-gray-soft)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        padding: '18px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 14,
        flexWrap: 'wrap',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, "Your connected stack"), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, "connect when ready")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        flexWrap: 'wrap'
      }
    }, E.connected.map(n => /*#__PURE__*/React.createElement(Tile, {
      key: n.id,
      mono: n.mono,
      name: n.name,
      note: n.note,
      kind: "connected",
      small: true
    })))));
  }

  // ---- Orbit ---------------------------------------------------------------
  function Orbit() {
    const W = 1080,
      H = 600,
      cx = 540,
      cy = 300;
    const owned = E.owned;
    const r1 = 175;
    const ownedPos = owned.map((t, i) => {
      const a = -Math.PI / 2 + i / owned.length * Math.PI * 2;
      return {
        ...t,
        x: cx + r1 * Math.cos(a),
        y: cy + r1 * Math.sin(a)
      };
    });
    const outer = [{
      ...E.market[0],
      kind: 'market'
    }, ...E.connected.map(b => ({
      ...b,
      kind: 'connected'
    }))];
    const r2 = 290;
    const outerPos = outer.map((t, i) => {
      const a = -Math.PI / 2 + (i + 0.5) / outer.length * Math.PI * 2;
      return {
        ...t,
        x: cx + r2 * Math.cos(a),
        y: cy + r2 * 0.78 * Math.sin(a)
      };
    });
    return /*#__PURE__*/React.createElement("div", {
      style: {
        overflowX: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: W,
        height: H,
        margin: '0 auto'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: W,
      height: H,
      style: {
        position: 'absolute',
        inset: 0
      },
      fill: "none"
    }, outerPos.map((t, i) => /*#__PURE__*/React.createElement("line", {
      key: 'o' + i,
      x1: cx,
      y1: cy,
      x2: t.x,
      y2: t.y,
      stroke: "var(--zv-cool-gray)",
      strokeWidth: "1.4",
      strokeDasharray: "4 4"
    })), ownedPos.map((t, i) => /*#__PURE__*/React.createElement("line", {
      key: 'i' + i,
      x1: cx,
      y1: cy,
      x2: t.x,
      y2: t.y,
      stroke: "var(--zv-cyan)",
      strokeWidth: "1.6",
      opacity: "0.5"
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        left: cx,
        top: cy,
        transform: 'translate(-50%,-50%)',
        width: 220
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--gradient-navy)',
        borderRadius: 10,
        padding: '18px 18px',
        textAlign: 'center',
        boxShadow: 'var(--shadow-overlay)',
        border: '1px solid rgba(0,212,255,0.25)'
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10,
        color: 'var(--zv-cyan)',
        letterSpacing: '0.08em'
      }
    }, "INTELLIGENCE LAYER"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
        marginTop: 10
      }
    }, E.intelligence.map(n => /*#__PURE__*/React.createElement("span", {
      key: n.id,
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        color: '#fff',
        fontWeight: 500
      }
    }, n.name))))), ownedPos.map(t => /*#__PURE__*/React.createElement("div", {
      key: t.id,
      style: {
        position: 'absolute',
        left: t.x,
        top: t.y,
        transform: 'translate(-50%,-50%)'
      }
    }, /*#__PURE__*/React.createElement(Tile, {
      mono: t.mono,
      name: t.name,
      kind: "owned",
      small: true
    }))), outerPos.map((t, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        position: 'absolute',
        left: t.x,
        top: t.y,
        transform: 'translate(-50%,-50%)'
      }
    }, /*#__PURE__*/React.createElement(Tile, {
      mono: t.mono,
      name: t.name,
      kind: t.kind,
      small: true
    })))));
  }
  function EcosystemMap({
    variant,
    go
  }) {
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "The platform \xB7 one operating system for strategy",
      title: "An ecosystem \u2014 not a feature.",
      lede: "The intelligence layer sits atop Zavari's own lightweight tools and the ones you already use. The value lives in the connections between them."
    }), /*#__PURE__*/React.createElement(Panel, {
      style: {
        marginBottom: 20,
        padding: '16px 24px'
      }
    }, /*#__PURE__*/React.createElement(Legend, null)), /*#__PURE__*/React.createElement(Panel, {
      style: {
        padding: 26,
        marginBottom: 20
      }
    }, variant === 'orbit' ? /*#__PURE__*/React.createElement(Orbit, null) : /*#__PURE__*/React.createElement(Layered, null)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      accent: true
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 8
      }
    }, "Where a team starts"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--color-ink)',
        margin: 0
      }
    }, "Turn on Zavari's own tools \u2014 Strategy, Planning, Research and Product metrics. Useful on day one, and the intelligence layer reads them immediately. No integration required.")), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 8
      }
    }, "Where it grows"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 15,
        lineHeight: 1.6,
        color: 'var(--color-ink)',
        margin: 0
      }
    }, "Add Documents, fold in market intelligence, then connect the analytics, delivery and documents you already use. Every connection makes the coherence reads sharper."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('onboarding'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "See how a team starts")))));
  }
  window.EcosystemMap = EcosystemMap;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/act3.jsx", error: String((e && e.message) || e) }); }

// concepts/act4.jsx
try { (() => {
/* ============================================================================
   ACT 4 — The owned stack (foundation / where you start)
   StrategyOKR · PlanningRoadmap (ROI bridge) · ResearchScreen (VoC bridge)
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const {
    Icon,
    Eyebrow,
    Mono,
    MvpTag,
    ScreenHeader,
    Panel,
    PanelLabel,
    SourceCluster,
    Confidence,
    Divider,
    BarRow,
    cohColor
  } = K;
  const {
    CoherenceFlag,
    StatCallout,
    Button,
    Badge
  } = K.DS;
  const {
    SourceTag
  } = K;
  const D = window.ZV;
  function KRrow({
    kr
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '10px 0',
        borderTop: '1px solid var(--color-border)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 7
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--color-ink)'
      }
    }, kr.kr), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 12.5,
        color: 'var(--color-heading)'
      }
    }, kr.now, " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--color-secondary)'
      }
    }, "/ ", kr.target))), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 6,
        background: 'var(--zv-cool-gray-soft)',
        borderRadius: 3,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: kr.pct + '%',
        height: '100%',
        background: 'var(--zv-navy)',
        borderRadius: 3
      }
    })));
  }

  // ---- O1 Strategy / OKR ---------------------------------------------------
  function StrategyOKR({
    go
  }) {
    const ns = D.northStar;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "Strategy / OKR \xB7 Zavari's strategic surface",
      title: "The strategy, in one canonical shape.",
      lede: "A north star, the objectives that ladder to it, and the key results that move it \u2014 light to keep current, structured enough for the intelligence layer to reason about."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '320px 1fr',
        gap: 16,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      style: {
        background: 'var(--gradient-navy)',
        border: 'none',
        position: 'sticky',
        top: 76
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'var(--zv-cyan)',
        letterSpacing: '0.07em'
      }
    }, "NORTH STAR"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14
      }
    }, /*#__PURE__*/React.createElement(StatCallout, {
      value: ns.value,
      trend: ns.trend,
      label: ns.label,
      onDark: true
    })), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 12.5,
        color: 'rgba(224,230,237,0.78)',
        display: 'block',
        marginTop: 14,
        lineHeight: 1.5
      }
    }, ns.sub), /*#__PURE__*/React.createElement("div", {
      style: {
        borderTop: '1px solid rgba(255,255,255,0.12)',
        marginTop: 18,
        paddingTop: 16
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'rgba(224,230,237,0.5)',
        display: 'block',
        marginBottom: 10
      }
    }, "EVERY OBJECTIVE LADDERS HERE"), D.objectives.map(o => /*#__PURE__*/React.createElement("div", {
      key: o.id,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '5px 0'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--zv-cyan)'
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#fff'
      }
    }, o.name))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, D.objectives.map(o => /*#__PURE__*/React.createElement(Panel, {
      key: o.id
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        marginBottom: 4
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: '#fff',
        background: 'var(--zv-navy)',
        borderRadius: 4,
        padding: '2px 8px'
      }
    }, o.id), /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: o.state,
      size: "sm"
    })), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 21,
        color: 'var(--color-heading)',
        margin: 0
      }
    }, o.name), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        color: 'var(--color-ink)',
        margin: '6px 0 0'
      }
    }, o.detail)), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'var(--color-secondary)'
      }
    }, "OWNER"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--color-heading)'
      }
    }, o.owner))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 12
      }
    }, o.krs.map((kr, i) => /*#__PURE__*/React.createElement(KRrow, {
      key: i,
      kr: kr
    }))))))));
  }

  // ---- O2 Planning / Roadmap (ROI bridge) ----------------------------------
  function PlanningRoadmap({
    go
  }) {
    const eff = {
      S: 'Small',
      M: 'Medium',
      L: 'Large'
    };
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "Planning / Roadmap \xB7 initiatives, weighed against strategy",
      title: "Initiatives, weighed against the strategy.",
      lede: "The backlog with a spine. Every initiative carries the objective it ladders to and a weighted return \u2014 so the roadmap reads against the strategy, not beside it."
    }), /*#__PURE__*/React.createElement(Panel, {
      style: {
        marginBottom: 16,
        borderLeft: '3px solid var(--zv-azure)',
        padding: '16px 22px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--zv-azure)',
        display: 'flex',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "coherence",
      size: 20
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 14.5,
        color: 'var(--color-heading)'
      }
    }, "Every row reads against the strategy."), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        color: 'var(--color-ink)'
      }
    }, " ", ' ', "Does this initiative ladder to an objective \u2014 and what's the weighted return?")))), /*#__PURE__*/React.createElement(Panel, {
      pad: 0
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1.7fr 150px 90px 70px',
        padding: '13px 24px',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--zv-cool-gray-soft)'
      }
    }, ['Initiative', 'Ladders to', 'Coherence', 'Effort', 'ROI'].map((h, i) => /*#__PURE__*/React.createElement(Mono, {
      key: i,
      style: {
        fontSize: 10.5,
        letterSpacing: '0.06em',
        color: 'var(--color-secondary)',
        textAlign: i === 4 ? 'right' : 'left'
      }
    }, h.toUpperCase()))), D.bets.map((b, i) => /*#__PURE__*/React.createElement("div", {
      key: b.id,
      style: {
        display: 'grid',
        gridTemplateColumns: '1.5fr 1.7fr 150px 90px 70px',
        alignItems: 'center',
        padding: '15px 24px',
        borderTop: i ? '1px solid var(--color-border)' : 'none',
        background: b.state === 'conflict' ? 'var(--zv-warning-tint)' : 'transparent'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 14.5,
        color: 'var(--color-heading)'
      }
    }, b.name), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, b.id, " \xB7 ", b.quarter)), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, b.ladder ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--zv-azure)',
        display: 'flex',
        flexShrink: 0
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 14
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        color: 'var(--color-link)',
        fontWeight: 500
      }
    }, b.laddersTo)) : /*#__PURE__*/React.createElement("em", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        color: 'var(--color-secondary)'
      }
    }, "\u2014 not laddered")), /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: b.state,
      size: "sm"
    }), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 13,
        color: 'var(--color-ink)'
      }
    }, eff[b.effort]), /*#__PURE__*/React.createElement("div", {
      style: {
        textAlign: 'right'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 20,
        color: b.roi >= 70 ? 'var(--color-heading)' : 'var(--color-secondary)'
      }
    }, b.roi))))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 16,
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelLabel, {
      icon: "planning",
      right: /*#__PURE__*/React.createElement(Badge, {
        tone: "neutral"
      }, "Product metrics \xB7 embedded")
    }, "Activation funnel"), D.funnel.map((f, i) => /*#__PURE__*/React.createElement(BarRow, {
      key: i,
      label: f.step,
      pct: f.pct,
      accent: i === D.funnel.length - 1
    })), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11.5,
        color: 'var(--color-secondary)',
        lineHeight: 1.55,
        display: 'block',
        marginTop: 12,
        borderTop: '1px solid var(--color-border)',
        paddingTop: 12
      }
    }, "Thin product-metric capture, in context \u2014 where accounts drop off, and where they start reaching for their own workarounds.")), /*#__PURE__*/React.createElement(Panel, {
      accent: true
    }, /*#__PURE__*/React.createElement(PanelLabel, {
      icon: "spark"
    }, "Zavari's read on this plan"), /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: "coherent",
      label: "New bet surfaced",
      detail: "Native data export & reporting \u2014 customers already improvised it"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--color-ink)',
        margin: '14px 0 0'
      }
    }, "The clearest new signal: ", /*#__PURE__*/React.createElement("strong", null, "Native data export & reporting"), ". Several accounts already export data by hand \u2014 bringing it inside the product extends the system-of-record objective."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('brief'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "Read the full brief")))));
  }

  // ---- O3 Research (VoC bridge) --------------------------------------------
  function InsightCard({
    r,
    go
  }) {
    const strong = r.strength >= 7;
    return /*#__PURE__*/React.createElement(Panel, {
      style: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: "neutral"
    }, r.theme), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 5
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'var(--color-secondary)'
      }
    }, "SIGNAL"), [...Array(5)].map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 5,
        height: 12,
        borderRadius: 1,
        background: i < Math.round(r.strength / 2) ? 'var(--zv-navy)' : 'var(--zv-cool-gray)'
      }
    })))), /*#__PURE__*/React.createElement("blockquote", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 18,
        lineHeight: 1.4,
        color: 'var(--color-heading)',
        margin: 0,
        fontStyle: 'italic'
      }
    }, "\u201C", r.quote, "\u201D"), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 12,
        color: 'var(--color-secondary)',
        marginTop: 10
      }
    }, r.who), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        paddingTop: 16,
        borderTop: '1px solid var(--color-border)'
      }
    }, r.feeds ? /*#__PURE__*/React.createElement("button", {
      onClick: () => go('planning'),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        background: 'var(--zv-info-tint)',
        border: '1px solid rgba(0,153,255,0.25)',
        borderRadius: 6,
        padding: '9px 12px',
        width: '100%',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--zv-azure)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow",
      size: 15
    })), /*#__PURE__*/React.createElement("span", {
      style: {
        lineHeight: 1.3
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10,
        color: 'var(--zv-azure)',
        letterSpacing: '0.05em',
        display: 'block'
      }
    }, "FEEDS PLANNING"), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        fontWeight: 600,
        color: 'var(--color-heading)'
      }
    }, "Prioritizes \u201C", r.feedsName, "\u201D"))) : /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 9,
        padding: '9px 12px',
        borderRadius: 6,
        border: '1px dashed var(--color-border)'
      }
    }, /*#__PURE__*/React.createElement(CoherenceFlag, {
      state: "drifting",
      size: "sm",
      label: "No bet yet",
      detail: "Strong feeling, weak strategic ladder"
    }))));
  }
  function ResearchScreen({
    go
  }) {
    const s = D.research.survey;
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "Research \xB7 qualitative + survey",
      title: "From a customer's words to a prioritized bet.",
      lede: "Capture qualitative insight and survey data in one place. The strongest signals carry straight into Planning \u2014 so the path from an interview to a roadmap decision stays visible."
    }), /*#__PURE__*/React.createElement(Divider, null, "Qualitative insights"), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
        marginBottom: 24
      }
    }, D.research.insights.map(r => /*#__PURE__*/React.createElement(InsightCard, {
      key: r.id,
      r: r,
      go: go
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.3fr 1fr',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement(PanelLabel, {
      icon: "research",
      right: /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 11,
          color: 'var(--color-secondary)'
        }
      }, "n = ", s.n)
    }, "Survey \xB7 ", s.q), s.bars.map((b, i) => /*#__PURE__*/React.createElement(BarRow, {
      key: i,
      label: b.label,
      pct: b.pct,
      accent: i === 0
    })), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11.5,
        color: 'var(--color-secondary)',
        lineHeight: 1.55,
        display: 'block',
        marginTop: 12,
        borderTop: '1px solid var(--color-border)',
        paddingTop: 12
      }
    }, "Qualitative and survey agree: the data leaves the product by hand \u2014 exactly what the recommended bet brings inside.")), /*#__PURE__*/React.createElement(Panel, {
      accent: true
    }, /*#__PURE__*/React.createElement(PanelLabel, {
      icon: "spark"
    }, "What Zavari did with this"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        lineHeight: 1.6,
        color: 'var(--color-ink)',
        margin: 0
      }
    }, "It triangulated these signals with Amplitude usage and support tickets, and generated the opportunity brief on native export & reporting \u2014 proactively, before anyone asked."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 14,
        display: 'flex',
        gap: 6,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement(SourceTag, {
      source: "Zavari Research",
      kind: "owned"
    }), /*#__PURE__*/React.createElement(SourceTag, {
      source: "Amplitude",
      kind: "connected"
    }), /*#__PURE__*/React.createElement(SourceTag, {
      source: "Support",
      kind: "connected"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 16
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: () => go('brief'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "See the brief it produced")))));
  }
  window.StrategyOKR = StrategyOKR;
  window.PlanningRoadmap = PlanningRoadmap;
  window.ResearchScreen = ResearchScreen;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/act4.jsx", error: String((e && e.message) || e) }); }

// concepts/act5.jsx
try { (() => {
/* ============================================================================
   ACT 5 — Entry
   Onboarding — two-pronged, first-party-led
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const {
    Icon,
    Eyebrow,
    Mono,
    ScreenHeader,
    Panel,
    Divider
  } = K;
  const {
    Button
  } = K.DS;
  const D = window.ZV;
  const E = D.ecosystem;
  function OwnedRow({
    t,
    on,
    toggle
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: toggle,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 13,
        width: '100%',
        textAlign: 'left',
        padding: '13px 15px',
        borderRadius: 7,
        cursor: 'pointer',
        border: `1.5px solid ${on ? 'var(--zv-azure)' : 'var(--color-border)'}`,
        background: on ? 'var(--zv-info-tint)' : 'var(--color-surface)',
        transition: 'all 140ms'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 34,
        height: 34,
        borderRadius: 6,
        background: 'var(--zv-navy)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 13,
        flexShrink: 0
      }
    }, t.mono), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 15,
        color: 'var(--color-heading)'
      }
    }, t.name)), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11.5,
        color: 'var(--color-secondary)'
      }
    }, t.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        width: 22,
        height: 22,
        borderRadius: '50%',
        flexShrink: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: on ? 'var(--zv-azure)' : 'transparent',
        border: on ? 'none' : '1.5px solid var(--color-border)',
        color: '#fff'
      }
    }, on && /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 14
    })));
  }
  function ByoRow({
    t,
    on,
    toggle
  }) {
    return /*#__PURE__*/React.createElement("button", {
      onClick: toggle,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 11,
        width: '100%',
        textAlign: 'left',
        padding: '11px 13px',
        borderRadius: 6,
        cursor: 'pointer',
        border: `1px solid ${on ? 'var(--zv-accent-gray)' : 'var(--color-border)'}`,
        background: on ? 'var(--color-surface)' : 'transparent',
        transition: 'all 140ms'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 28,
        height: 28,
        borderRadius: 5,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        color: 'var(--color-secondary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        flexShrink: 0
      }
    }, t.mono), /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        fontSize: 14,
        color: 'var(--color-heading)'
      }
    }, t.name), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)',
        display: 'block'
      }
    }, t.note)), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12.5,
        color: on ? '#276749' : 'var(--zv-azure)'
      }
    }, on ? 'Connected' : 'Connect'));
  }
  function Onboarding({
    go
  }) {
    const [owned, setOwned] = React.useState({
      strategy: true,
      planning: true,
      research: true,
      metrics: true,
      documents: false
    });
    const [byo, setByo] = React.useState({
      analytics: false,
      delivery: false,
      docs: false
    });
    const ownedCount = Object.values(owned).filter(Boolean).length;
    const byoCount = Object.values(byo).filter(Boolean).length;
    const coherenceLevel = Math.min(100, ownedCount * 18 + byoCount * 8);
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(ScreenHeader, {
      eyebrow: "Get started \xB7 two ways in",
      title: "Start with Zavari's own tools. Connect the rest when you're ready.",
      lede: "The owned tools are useful on day one and natively wired to the intelligence layer \u2014 no integration required. Your existing stack plugs in later, sharpening the picture as you go."
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '1.55fr 1fr',
        gap: 20,
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement(Panel, {
      accent: true,
      style: {
        padding: 28,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("svg", {
      width: "240",
      height: "240",
      viewBox: "0 0 100 100",
      style: {
        position: 'absolute',
        right: -30,
        top: -50,
        opacity: 0.05
      },
      fill: "none",
      stroke: "var(--zv-navy)",
      strokeWidth: "0.8"
    }, /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "20",
      x2: "80",
      y2: "50"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "50",
      x2: "80",
      y2: "50"
    }), /*#__PURE__*/React.createElement("line", {
      x1: "5",
      y1: "80",
      x2: "80",
      y2: "50"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: '0.06em',
        textTransform: 'uppercase',
        color: 'var(--color-link)'
      }
    }, "Recommended \xB7 start here")), /*#__PURE__*/React.createElement("h2", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: 24,
        color: 'var(--color-heading)',
        margin: '0 0 4px'
      }
    }, "Turn on Zavari's tools"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        color: 'var(--color-ink)',
        margin: '0 0 20px',
        maxWidth: 480
      }
    }, "Each is light to adopt and structured underneath \u2014 the intelligence layer reads them from the first entry. Pre-selected: the tools most teams start with."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10
      }
    }, E.owned.map(t => /*#__PURE__*/React.createElement(OwnedRow, {
      key: t.id,
      t: t,
      on: !!owned[t.id],
      toggle: () => setOwned(o => ({
        ...o,
        [t.id]: !o[t.id]
      }))
    }))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginTop: 22
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "Set up my workspace"), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 12,
        color: 'var(--color-secondary)'
      }
    }, ownedCount, " tool", ownedCount === 1 ? '' : 's', " \xB7 useful standalone today"))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        background: 'var(--zv-cool-gray-soft)',
        border: '1px solid var(--color-border)',
        borderRadius: 8,
        padding: 22
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 4
      }
    }, "Optional \xB7 expand when ready"), /*#__PURE__*/React.createElement("h3", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 500,
        fontSize: 19,
        color: 'var(--color-heading)',
        margin: '0 0 4px'
      }
    }, "Connect your stack"), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13.5,
        color: 'var(--color-ink)',
        margin: '0 0 16px'
      }
    }, "Bring in the tools you already use. Every connection makes the coherence reads sharper \u2014 but none are required to start."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }
    }, E.connected.map(t => /*#__PURE__*/React.createElement(ByoRow, {
      key: t.id,
      t: t,
      on: !!byo[t.id],
      toggle: () => setByo(b => ({
        ...b,
        [t.id]: !b[t.id]
      }))
    }))), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)',
        display: 'block',
        marginTop: 12
      }
    }, "CRM & data warehouse \u2014 coming later")), /*#__PURE__*/React.createElement(Panel, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
      }
    }, /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 10.5,
        color: 'var(--color-secondary)',
        letterSpacing: '0.05em'
      }
    }, "INTELLIGENCE COVERAGE"), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 12,
        color: 'var(--color-heading)'
      }
    }, coherenceLevel, "%")), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 8,
        background: 'var(--zv-cool-gray-soft)',
        borderRadius: 4,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: coherenceLevel + '%',
        height: '100%',
        background: 'linear-gradient(90deg, var(--zv-azure), var(--zv-cyan))',
        borderRadius: 4,
        transition: 'width 240ms cubic-bezier(0.2,0,0,1)'
      }
    })), /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--color-ink)',
        margin: '12px 0 0',
        lineHeight: 1.5
      }
    }, "The owned tools alone already power proactive briefs and coherence reads. Connecting your stack widens what Zavari can triangulate.")))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => go('command'),
      iconRight: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })
    }, "Skip the tour \u2014 go to the Command Layer")));
  }
  window.Onboarding = Onboarding;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/act5.jsx", error: String((e && e.message) || e) }); }

// concepts/data.jsx
try { (() => {
/* ============================================================================
   ZAVARI CONCEPTS — Demo tenant data
   Fictional company "Harbor" — the onboarding platform for B2B software.
   ONE strategy world, threaded through every screen. The spine scenario is
   the Opportunity: several large accounts independently started exporting
   onboarding data into outside tools — validated demand for Harbor's next
   product. Command Layer teases a Risk and a Scale item alongside it.

   Source taxonomy (matches the landing legend + accessibility tokens):
     kind 'owned'     → Zavari's tools      (navy dot)
     kind 'market'    → Market intelligence (azure dot)
     kind 'connected' → Your connected stack(gray dot)
   ============================================================================ */

window.ZV = function () {
  const tenant = {
    name: 'Harbor',
    descriptor: 'Onboarding platform for B2B software',
    stage: 'Series B · 184 people',
    user: {
      name: 'Maya Okonkwo',
      role: 'VP Product'
    },
    lastSeen: 'Tuesday, 4:12pm'
  };
  const northStar = {
    label: 'WEEKLY ACTIVATED ACCOUNTS',
    value: '1,940',
    trend: '+6.2%',
    sub: 'Accounts reaching first value within 14 days'
  };

  // Strategic objectives (annual)
  const objectives = [{
    id: 'OBJ-1',
    code: 'O1',
    name: 'Win the mid-market',
    detail: 'Land and expand in 50–500 seat accounts.',
    owner: 'Priya R.',
    state: 'coherent',
    krs: [{
      kr: 'Mid-market ARR',
      now: '$8.4M',
      target: '$14M',
      pct: 60
    }, {
      kr: 'Logos 50–500 seats',
      now: '112',
      target: '180',
      pct: 62
    }]
  }, {
    id: 'OBJ-2',
    code: 'O2',
    name: 'Make onboarding self-guided',
    detail: 'Cut time-to-first-value without adding support headcount.',
    owner: 'Maya O.',
    state: 'coherent',
    krs: [{
      kr: 'Activated within 14 days',
      now: '28%',
      target: '55%',
      pct: 51
    }, {
      kr: 'Support-touched setups',
      now: '71%',
      target: '40%',
      pct: 44
    }]
  }, {
    id: 'OBJ-3',
    code: 'O3',
    name: 'Become the system of record',
    detail: 'Own the canonical onboarding record across the lifecycle.',
    owner: 'Dani L.',
    state: 'coherent',
    krs: [{
      kr: 'Accounts with 2+ workflows',
      now: '34%',
      target: '60%',
      pct: 57
    }, {
      kr: 'Template installs',
      now: '4.1k',
      target: '9k',
      pct: 46
    }]
  }];

  // Active bets / initiatives. Coherence is read as insight, calmly — the story
  // is mostly bets holding together, with one that has come loose (an
  // opportunity to realign, never an alarm). The E opportunity is the lead bet.
  const bets = [{
    id: 'B1',
    name: 'Native data export & reporting',
    tag: 'Customer-pulled',
    ladder: 'OBJ-3',
    laddersTo: 'Become the system of record',
    state: 'coherent',
    roi: 88,
    effort: 'M',
    quarter: 'Next',
    confidence: 'high',
    lead: true,
    note: 'The behavior several accounts already improvised — brought inside the product. Extends the canonical record.'
  }, {
    id: 'B2',
    name: 'Onboarding Copilot',
    tag: 'AI-guided setup',
    ladder: 'OBJ-2',
    laddersTo: 'Make onboarding self-guided',
    state: 'coherent',
    roi: 92,
    effort: 'L',
    quarter: 'Q3',
    confidence: 'high',
    note: 'Guides admins through setup; removes the top time-to-value blocker.'
  }, {
    id: 'B3',
    name: 'Template Marketplace',
    tag: 'Owned surface area',
    ladder: 'OBJ-3',
    laddersTo: 'Become the system of record',
    state: 'coherent',
    roi: 74,
    effort: 'M',
    quarter: 'Q3',
    confidence: 'medium',
    note: 'Pre-built onboarding flows; deepens the canonical record.'
  }, {
    id: 'B4',
    name: 'Enterprise sign-on & provisioning',
    tag: 'Table-stakes up-market',
    ladder: 'OBJ-1',
    laddersTo: 'Win the mid-market',
    state: 'coherent',
    roi: 68,
    effort: 'M',
    quarter: 'Q3',
    confidence: 'high',
    note: 'Unblocks security review in larger deals.'
  }, {
    id: 'B5',
    name: 'Salesforce two-way sync',
    tag: 'Expansion motion',
    ladder: 'OBJ-1',
    laddersTo: 'Win the mid-market',
    state: 'coherent',
    roi: 63,
    effort: 'M',
    quarter: 'Q4',
    confidence: 'medium',
    note: 'Surfaces onboarding health to revenue teams.'
  }, {
    id: 'B6',
    name: 'Mobile approver app',
    tag: 'Net-new surface',
    ladder: null,
    laddersTo: null,
    state: 'drifting',
    roi: 31,
    effort: 'M',
    quarter: 'Q4',
    confidence: 'low',
    note: 'No active objective claims it right now. Popular in a few accounts — worth a deliberate keep-or-cut.'
  }];

  // The marquee proactive output — the Opportunity (E), in full.
  const brief = {
    id: 'SOB-118',
    kicker: 'STRATEGIC OPPORTUNITY BRIEF · GENERATED BY ZAVARI',
    generated: 'Generated proactively · Jul 6',
    title: 'Your customers are pointing at your next product.',
    standfirst: 'Several of your largest accounts independently started exporting onboarding data into outside tools this quarter — reaching for a capability that is a natural next step from what Harbor already does. No feature request, no prompting; the pattern is accelerating. It reads as demand you can see before you have built anything.',
    coherence: {
      state: 'coherent',
      label: 'On-strategy',
      detail: 'Extends what customers already value'
    },
    recommendation: 'Make native data export & reporting your next bet. Bring the behavior these accounts already improvised inside the product — and move before the market names the category.',
    projected: {
      value: '3.4×',
      unit: '',
      label: 'EXPANSION RATE OF ACCOUNTS ALREADY DOING THIS'
    },
    findings: [{
      n: 1,
      confidence: 'high',
      claim: 'The same new behavior, across several accounts — and accelerating.',
      detail: 'Six of your largest accounts independently began exporting onboarding data into outside analysis tools this quarter. None asked for it; each reached for the same missing step on their own, and the volume is climbing month over month.',
      sources: [{
        source: 'Zavari Research',
        kind: 'owned'
      }, {
        source: 'Amplitude',
        kind: 'connected',
        count: 1240
      }, {
        source: 'Support',
        kind: 'connected',
        count: 46
      }]
    }, {
      n: 2,
      confidence: 'high',
      coherent: true,
      claim: 'Validated demand — before you have built a thing.',
      detail: 'This is not a request you can discount. It is customers voting with behavior: the need is real, present, and already costing them a workaround. Zavari reads it as extending the core, not stretching away from it.',
      sources: [{
        source: 'Zavari Research',
        kind: 'owned'
      }]
    }, {
      n: 3,
      confidence: 'medium',
      claim: 'The market is only just forming here.',
      detail: 'No competitor has planted a flag on this yet. Move now and you define the category rather than chase it later.',
      sources: [{
        source: 'Market Intelligence',
        kind: 'market'
      }]
    }],
    // positive knock-on (was "second-order") — an upside, not a warning
    knockOn: {
      label: 'Knock-on effect',
      claim: 'The accounts already doing this are your fastest-expanding ones.',
      detail: 'Leading here deepens your best relationships — it doesn\u2019t just open a new market. The move compounds the advantage you already have.',
      sources: [{
        source: 'Zavari Strategy',
        kind: 'owned'
      }, {
        source: 'Expansion data',
        kind: 'connected'
      }]
    }
  };

  // Things Zavari surfaced since last login (Command Layer) — labeled by
  // approach: Opportunity (lead) · Risk · Scale. Each is a concrete observation.
  const surfaced = [{
    id: 's1',
    approach: 'Opportunity',
    tone: 'opportunity',
    headline: 'Six of your largest accounts independently started exporting onboarding data into outside tools.',
    meta: 'A natural next step from what Harbor already does — validated demand, no feature request. The pattern is accelerating.',
    confidence: 'high',
    sources: [{
      source: 'Zavari Research',
      kind: 'owned'
    }, {
      source: 'Amplitude',
      kind: 'connected'
    }, {
      source: 'Support',
      kind: 'connected'
    }],
    to: 'brief',
    cta: 'Open the opportunity brief'
  }, {
    id: 's2',
    approach: 'Risk',
    tone: 'risk',
    headline: 'A top account\u2019s weekly usage is down 22% — while its health score still reads green.',
    meta: 'It\u2019s tracing the curve that preceded last quarter\u2019s churn. The signal is weeks ahead of the dashboard — a conversation now, not a renewal later.',
    confidence: 'medium',
    sources: [{
      source: 'Amplitude',
      kind: 'connected'
    }, {
      source: 'Support',
      kind: 'connected'
    }],
    to: 'research',
    cta: 'See the signal'
  }, {
    id: 's3',
    approach: 'Scale',
    tone: 'scale',
    headline: 'A capability you under-tell is quietly driving expansion.',
    meta: 'Your guided data-import flow retains better than anything else you ship — but it\u2019s under-told in your story and under-funded on the roadmap. Lean in and it compounds.',
    confidence: 'high',
    sources: [{
      source: 'Expansion data',
      kind: 'connected'
    }, {
      source: 'Zavari Research',
      kind: 'owned'
    }],
    to: 'coherence',
    cta: 'See where it fits'
  }];

  // Source roster — Zavari's tools · market intelligence · your connected stack
  const sources = {
    owned: ['Zavari Strategy', 'Zavari Planning', 'Zavari Research', 'Zavari Product metrics'],
    market: ['Market Intelligence'],
    connected: ['Amplitude', 'Salesforce', 'Jira', 'Support', 'Notion']
  };

  // Decision Record — the auditable chain behind the Opportunity recommendation
  const decision = {
    title: 'Make native data export & reporting Harbor\u2019s next bet',
    status: 'Committed',
    owner: 'Maya O.',
    date: 'Jul 6',
    chain: [{
      kind: 'North star',
      body: 'Weekly Activated Accounts',
      meta: 'The metric everything ladders to',
      src: []
    }, {
      kind: 'Objective',
      body: 'Become the system of record (O3)',
      meta: 'Own the canonical onboarding record across the lifecycle',
      src: ['Zavari Strategy']
    }, {
      kind: 'Insight',
      body: 'Six of your largest accounts independently started exporting onboarding data into outside tools — demand for a step Harbor doesn\u2019t cover yet.',
      meta: 'No feature request; customers voting with behavior',
      src: ['Zavari Research', 'Amplitude', 'Support']
    }, {
      kind: 'Decision',
      body: 'Scope native data export & reporting as the next bet; move before the market names the category.',
      meta: 'Extends the core — deepens the system-of-record objective',
      src: ['Zavari Strategy', 'Zavari Planning']
    }, {
      kind: 'Initiative',
      body: 'Native data export & reporting — discovery',
      meta: 'Planning · next quarter · owner Maya O.',
      src: ['Zavari Planning']
    }, {
      kind: 'Delivery',
      body: 'HAR-512 · Export & reporting discovery epic',
      meta: 'Jira · carries its reasoning forward',
      src: ['Jira'],
      byo: true
    }]
  };

  // Research insights (qual) + survey-quant — aligned to the export opportunity
  const research = {
    insights: [{
      id: 'R1',
      theme: 'Data export',
      quote: 'Every Monday I export the whole onboarding log into a spreadsheet just to build the report my execs actually want.',
      who: 'Ops lead · 240-seat account',
      strength: 9,
      feeds: 'B1',
      feedsName: 'Native data export & reporting'
    }, {
      id: 'R2',
      theme: 'Reporting gap',
      quote: 'The data is all in Harbor. I just can\u2019t get it out in a shape anyone upstairs will read.',
      who: 'Admin · 180-seat account',
      strength: 8,
      feeds: 'B1',
      feedsName: 'Native data export & reporting'
    }, {
      id: 'R3',
      theme: 'Mobile sign-off',
      quote: 'I approve onboarding steps from my phone, but I have to wait until I\u2019m at a laptop.',
      who: 'Director · 90-seat account',
      strength: 4,
      feeds: null,
      feedsName: null
    }],
    survey: {
      q: 'Where does Harbor\u2019s data leave the product today?',
      n: 312,
      bars: [{
        label: 'Exported to a spreadsheet',
        pct: 44
      }, {
        label: 'Rebuilt in a BI tool',
        pct: 27
      }, {
        label: 'Copied into a deck',
        pct: 18
      }, {
        label: 'Stays in Harbor',
        pct: 8
      }, {
        label: 'Other',
        pct: 3
      }]
    }
  };

  // Product metrics — thin capture (onboarding funnel)
  const funnel = [{
    step: 'Signed up',
    pct: 100
  }, {
    step: 'Invited team',
    pct: 71
  }, {
    step: 'Imported data',
    pct: 49
  }, {
    step: 'First customer onboarded',
    pct: 34
  }, {
    step: 'Activated (within 14 days)',
    pct: 28
  }];

  // Ecosystem model for the platform / map screens.
  // Zavari's tools · market intelligence · your connected stack. Names spelled
  // out. No "ships first" markers, no named bridges.
  const ecosystem = {
    intelligence: [{
      id: 'cmd',
      name: 'Strategic Command Layer'
    }, {
      id: 'briefs',
      name: 'Opportunity Briefs'
    }, {
      id: 'coh',
      name: 'Coherence Map'
    }, {
      id: 'rec',
      name: 'Decision Record'
    }],
    owned: [{
      id: 'strategy',
      name: 'Strategy / OKR',
      mono: 'St',
      note: 'North star & objectives'
    }, {
      id: 'planning',
      name: 'Planning / Roadmap',
      mono: 'Pl',
      note: 'Initiatives & specs'
    }, {
      id: 'research',
      name: 'Research',
      mono: 'Re',
      note: 'Qualitative + survey'
    }, {
      id: 'metrics',
      name: 'Product metrics',
      mono: 'Pm',
      note: 'Lightweight metric capture'
    }, {
      id: 'documents',
      name: 'Documents',
      mono: 'Do',
      note: 'Lightweight strategy docs'
    }],
    market: [{
      id: 'market',
      name: 'Market Intelligence',
      mono: 'Mi',
      note: 'Synthesized from the open web, or your own sources'
    }],
    connected: [{
      id: 'analytics',
      name: 'Analytics',
      mono: 'Am',
      note: 'Amplitude'
    }, {
      id: 'delivery',
      name: 'Delivery',
      mono: 'Ji',
      note: 'Jira / Linear'
    }, {
      id: 'docs',
      name: 'Documents',
      mono: 'No',
      note: 'Confluence / Notion'
    }]
  };
  return {
    tenant,
    northStar,
    objectives,
    bets,
    brief,
    surfaced,
    sources,
    decision,
    research,
    funnel,
    ecosystem
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/data.jsx", error: String((e && e.message) || e) }); }

// concepts/kit.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* ============================================================================
   ZAVARI CONCEPTS — Shared kit (primitives, icons, charts)
   ============================================================================ */
(function () {
  const DS = window.ZavariDesignSystem_bb9393 || {};
  const {
    CoherenceFlag,
    Badge
  } = DS;

  // ---- Concept SourceTag -------------------------------------------------
  // Provenance chip with the accessible three-way taxonomy from the landing:
  //   owned  → Zavari's tools       (navy dot — cyan vanishes on white)
  //   market → Market intelligence  (azure dot)
  //   connected → your stack        (gray dot)
  const SRC_KIND = {
    owned: {
      dot: 'var(--zv-navy)',
      ring: true,
      title: "Zavari's tool"
    },
    market: {
      dot: 'var(--zv-azure)',
      ring: false,
      title: 'Market intelligence'
    },
    connected: {
      dot: 'var(--zv-accent-gray)',
      ring: false,
      title: 'Connected source'
    }
  };
  function SourceTag({
    source,
    kind = 'connected',
    confidence = null,
    count = null,
    style = {},
    ...rest
  }) {
    const spec = SRC_KIND[kind] || SRC_KIND.connected;
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
      title: spec.title,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 7,
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 600,
        color: 'var(--color-heading)',
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 999,
        padding: '3px 10px 3px 8px',
        whiteSpace: 'nowrap',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: spec.dot,
        flexShrink: 0,
        boxShadow: spec.ring ? '0 0 0 3px var(--zv-info-tint)' : 'none'
      }
    }), /*#__PURE__*/React.createElement("span", null, source), count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        color: 'var(--color-secondary)',
        fontWeight: 400
      }
    }, "\xB7", '\u200a', count), conf && /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 11,
        color: conf.color,
        paddingLeft: 6,
        marginLeft: 1,
        borderLeft: '1px solid var(--color-border)'
      }
    }, conf.label));
  }
  // resolve kind from a bare source name (Decision Record passes strings)
  function sourceKind(name) {
    const S = window.ZV.sources;
    if (S.owned.includes(name)) return 'owned';
    if (S.market.includes(name)) return 'market';
    return 'connected';
  }

  // ---- tiny geometric icons (line, on currentColor) ----------------------
  function Icon({
    name,
    size = 18,
    style = {}
  }) {
    const s = {
      width: size,
      height: size,
      display: 'block',
      ...style
    };
    const p = {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: 1.6,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    };
    const paths = {
      command: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("line", {
        x1: "3",
        y1: "6",
        x2: "14",
        y2: "6"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "3",
        y1: "11",
        x2: "17",
        y2: "11"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "3",
        y1: "16",
        x2: "11",
        y2: "16"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "19",
        cy: "6",
        r: "1.4",
        fill: "currentColor",
        stroke: "none"
      })),
      brief: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
        d: "M6 3h8l4 4v14H6z"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 3v4h4"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "12",
        x2: "15",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "16",
        x2: "13",
        y2: "16"
      })),
      coherence: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("line", {
        x1: "4",
        y1: "5",
        x2: "19",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "4",
        y1: "12",
        x2: "19",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "4",
        y1: "19",
        x2: "19",
        y2: "12"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "19",
        cy: "12",
        r: "1.6",
        fill: "currentColor",
        stroke: "none"
      })),
      decision: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "5",
        r: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "6",
        cy: "19",
        r: "2"
      }), /*#__PURE__*/React.createElement("circle", {
        cx: "18",
        cy: "12",
        r: "2"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M6 7v4l10 1M6 17v-4"
      })),
      strategy: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3l2.2 6.4H21l-5.4 4 2 6.6L12 16l-5.6 4 2-6.6L3 9.4h6.8z"
      })),
      planning: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("line", {
        x1: "4",
        y1: "6",
        x2: "14",
        y2: "6"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "8",
        y1: "12",
        x2: "20",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "4",
        y1: "18",
        x2: "12",
        y2: "18"
      })),
      research: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("circle", {
        cx: "11",
        cy: "11",
        r: "6"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M7.5 11h7M11 7.5v7",
        opacity: "0.0"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M8.5 10.5l2 2 3.5-3.5"
      })),
      ecosystem: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
        x: "3",
        y: "14",
        width: "18",
        height: "6",
        rx: "1"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "6",
        y: "8",
        width: "12",
        height: "4",
        rx: "1"
      }), /*#__PURE__*/React.createElement("rect", {
        x: "9",
        y: "3",
        width: "6",
        height: "3",
        rx: "1"
      })),
      onboarding: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
        x: "4",
        y: "3",
        width: "9",
        height: "18",
        rx: "1"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "10",
        y1: "12",
        x2: "21",
        y2: "12"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M17 8l4 4-4 4"
      })),
      doc: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("rect", {
        x: "5",
        y: "3",
        width: "14",
        height: "18",
        rx: "1"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "8",
        x2: "15",
        y2: "8"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "12",
        x2: "15",
        y2: "12"
      }), /*#__PURE__*/React.createElement("line", {
        x1: "9",
        y1: "16",
        x2: "12",
        y2: "16"
      })),
      spark: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
        d: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M18 6l-2.5 2.5M8.5 15.5L6 18"
      })),
      arrow: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("line", {
        x1: "4",
        y1: "12",
        x2: "19",
        y2: "12"
      }), /*#__PURE__*/React.createElement("path", {
        d: "M14 7l5 5-5 5"
      })),
      check: /*#__PURE__*/React.createElement("g", p, /*#__PURE__*/React.createElement("path", {
        d: "M5 12.5l4.5 4.5L19 7"
      }))
    };
    return /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      style: s,
      "aria-hidden": "true"
    }, paths[name] || null);
  }

  // ---- eyebrow / kicker --------------------------------------------------
  function Eyebrow({
    children,
    style = {},
    color
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: color || 'var(--color-secondary)',
        ...style
      }
    }, children);
  }
  function Mono({
    children,
    style = {}
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        ...style
      }
    }, children);
  }

  // ---- MVP "Ships first" wedge marker ------------------------------------
  function MvpTag({
    style = {},
    compact = false
  }) {
    return /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.04em',
        color: '#0A4F86',
        background: 'var(--zv-info-tint)',
        border: '1px solid rgba(0,153,255,0.30)',
        borderRadius: 999,
        padding: compact ? '1px 8px' : '2px 10px',
        whiteSpace: 'nowrap',
        ...style
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: 'var(--zv-cyan)',
        boxShadow: '0 0 0 3px var(--zv-info-tint)'
      }
    }), "SHIPS FIRST");
  }

  // ---- Screen header -----------------------------------------------------
  function ScreenHeader({
    eyebrow,
    title,
    lede,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: 24,
        marginBottom: 28,
        flexWrap: 'wrap'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        maxWidth: 760
      }
    }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, {
      style: {
        marginBottom: 10
      }
    }, eyebrow), /*#__PURE__*/React.createElement("h1", {
      style: {
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: 34,
        lineHeight: 1.15,
        color: 'var(--color-heading)',
        margin: 0,
        letterSpacing: '-0.01em'
      }
    }, title), lede && /*#__PURE__*/React.createElement("p", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 17,
        lineHeight: 1.55,
        color: 'var(--color-ink)',
        margin: '12px 0 0',
        maxWidth: 680
      }
    }, lede)), right && /*#__PURE__*/React.createElement("div", {
      style: {
        flexShrink: 0
      }
    }, right));
  }

  // ---- Panel (card surface, never colored) -------------------------------
  function Panel({
    children,
    style = {},
    pad = 24,
    hover = false,
    onClick,
    accent = false
  }) {
    const [h, setH] = React.useState(false);
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 6,
        padding: pad,
        boxShadow: hover && h ? 'var(--shadow-raised)' : 'var(--shadow-card)',
        borderColor: accent ? 'rgba(0,153,255,0.35)' : 'var(--color-border)',
        cursor: onClick ? 'pointer' : 'default',
        transition: 'box-shadow 180ms cubic-bezier(0.2,0,0,1), border-color 180ms',
        ...style
      }
    }, children);
  }
  function PanelLabel({
    children,
    icon,
    right
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 16
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        color: 'var(--color-secondary)'
      }
    }, icon && /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 15
    }), /*#__PURE__*/React.createElement(Eyebrow, null, children)), right);
  }

  // ---- Source cluster ----------------------------------------------------
  function SourceCluster({
    items,
    style = {},
    label = 'Sourced from'
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
        ...style
      }
    }, label && /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)',
        marginRight: 2
      }
    }, label), items.map((s, i) => /*#__PURE__*/React.createElement(SourceTag, {
      key: i,
      source: s.source,
      kind: s.kind,
      count: s.count,
      confidence: s.confidence
    })));
  }

  // ---- Confidence pill (word-led, never color alone) ---------------------
  function Confidence({
    level
  }) {
    const map = {
      high: {
        t: 'High confidence',
        c: '#276749',
        b: 'var(--zv-success-tint)',
        bd: 'rgba(56,161,105,0.25)'
      },
      medium: {
        t: 'Medium confidence',
        c: '#946A12',
        b: 'var(--zv-warning-tint)',
        bd: 'rgba(214,158,46,0.25)'
      },
      low: {
        t: 'Low confidence',
        c: 'var(--color-secondary)',
        b: 'var(--zv-cool-gray-soft)',
        bd: 'var(--color-border)'
      }
    }[level];
    if (!map) return null;
    return /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 11,
        color: map.c,
        background: map.b,
        border: `1px solid ${map.bd}`,
        borderRadius: 999,
        padding: '2px 9px',
        whiteSpace: 'nowrap'
      }
    }, map.t);
  }

  // ---- Horizontal bar (survey / breakdown) -------------------------------
  function BarRow({
    label,
    pct,
    accent = false,
    sub
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '180px 1fr 44px',
        alignItems: 'center',
        gap: 14,
        padding: '7px 0'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 14,
        color: 'var(--color-ink)',
        display: 'flex',
        flexDirection: 'column'
      }
    }, /*#__PURE__*/React.createElement("span", null, label), sub && /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, sub)), /*#__PURE__*/React.createElement("div", {
      style: {
        height: 10,
        background: 'var(--zv-cool-gray-soft)',
        borderRadius: 3,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: pct + '%',
        height: '100%',
        background: accent ? 'var(--zv-azure)' : 'var(--zv-navy)',
        borderRadius: 3
      }
    })), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 13,
        color: 'var(--color-heading)',
        textAlign: 'right'
      }
    }, pct, "%"));
  }

  // ---- Section divider label ---------------------------------------------
  function Divider({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        margin: '4px 0 18px'
      }
    }, /*#__PURE__*/React.createElement(Eyebrow, null, children), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 1,
        background: 'var(--color-border)'
      }
    }));
  }

  // ---- coherence color helper --------------------------------------------
  const cohColor = state => ({
    coherent: 'var(--zv-cyan)',
    drifting: 'var(--zv-azure)',
    conflict: 'var(--zv-warning)'
  })[state] || 'var(--color-border)';
  const cohInk = state => ({
    coherent: '#0A4F86',
    drifting: '#0A4F86',
    conflict: '#946A12'
  })[state] || 'var(--color-ink)';
  window.ZVKit = {
    DS,
    Icon,
    Eyebrow,
    Mono,
    MvpTag,
    ScreenHeader,
    Panel,
    PanelLabel,
    SourceTag,
    sourceKind,
    SourceCluster,
    Confidence,
    BarRow,
    Divider,
    cohColor,
    cohInk
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/kit.jsx", error: String((e && e.message) || e) }); }

// concepts/shell.jsx
try { (() => {
/* ============================================================================
   ZAVARI CONCEPTS — App shell (nav rail, routing, variant toggles, pager)
   ============================================================================ */
(function () {
  const K = window.ZVKit;
  const {
    Icon,
    Mono
  } = K;

  // Screen registry — comp resolved lazily from window
  const GROUPS = [{
    group: 'Intelligence',
    items: [{
      id: 'command',
      label: 'Command Layer',
      icon: 'command',
      comp: () => window.CommandLayer,
      variants: [{
        k: 'briefing',
        l: 'Briefing'
      }, {
        k: 'console',
        l: 'Console'
      }]
    }, {
      id: 'brief',
      label: 'Opportunity Brief',
      icon: 'brief',
      comp: () => window.OpportunityBrief,
      variants: [{
        k: 'memo',
        l: 'Memo'
      }, {
        k: 'desk',
        l: 'Decision desk'
      }]
    }, {
      id: 'coherence',
      label: 'Coherence Map',
      icon: 'coherence',
      comp: () => window.CoherenceMap,
      variants: [{
        k: 'map',
        l: 'Constellation'
      }, {
        k: 'ledger',
        l: 'Ledger'
      }]
    }, {
      id: 'decision',
      label: 'Decision Record',
      icon: 'decision',
      comp: () => window.DecisionRecord
    }]
  }, {
    group: 'Workspace',
    items: [{
      id: 'strategy',
      label: 'Strategy / OKR',
      icon: 'strategy',
      comp: () => window.StrategyOKR
    }, {
      id: 'planning',
      label: 'Planning / Roadmap',
      icon: 'planning',
      comp: () => window.PlanningRoadmap
    }, {
      id: 'research',
      label: 'Research',
      icon: 'research',
      comp: () => window.ResearchScreen
    }]
  }, {
    group: 'Platform',
    items: [{
      id: 'ecosystem',
      label: 'Ecosystem',
      icon: 'ecosystem',
      comp: () => window.EcosystemMap,
      variants: [{
        k: 'stack',
        l: 'Layered'
      }, {
        k: 'orbit',
        l: 'Orbit'
      }]
    }, {
      id: 'onboarding',
      label: 'Get started',
      icon: 'onboarding',
      comp: () => window.Onboarding
    }]
  }];
  const FLAT = GROUPS.flatMap(g => g.items);
  const NARRATIVE = ['command', 'brief', 'coherence', 'decision', 'ecosystem', 'strategy', 'planning', 'research', 'onboarding'];
  const byId = id => FLAT.find(s => s.id === id);
  const LOGO = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODcxLjMiIGhlaWdodD0iMTczLjgiIHZpZXdCb3g9IjAgMCA4NzEuMyAxNzMuOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMjQ0LCA3LjkwMCkiPgogIDxwYXRoIGQ9Ik0zNC43NTAxIDYuMDkxNTdDMzguNTE3OSAyLjE5ODE3IDQzLjcwNDEgMCA0OS4xMjIxIDBIMTc5Ljg0NEMxODUuMTQyIDAgMTg3Ljg0IDYuMzY1MjggMTg0LjE1NiAxMC4xNzI1TDE1OS4yNSAzNS45MDg0QzE1NS40ODIgMzkuODAxOCAxNTAuMjk2IDQyIDE0NC44NzggNDJINjguNjc3NEgxNC4xNTZDOC44NTc4NiA0MiA2LjE1OTk0IDM1LjYzNDcgOS44NDQzOCAzMS44Mjc1TDM0Ljc1MDEgNi4wOTE1N1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzE4KSI+PC9wYXRoPgogIDxwYXRoIGQ9Ik01MC43NTAxIDY0LjA5MTZDNTQuNTE3OSA2MC4xOTgyIDU5LjcwNDEgNTggNjUuMTIyMSA1OEgxOTUuODQ0QzIwMS4xNDIgNTggMjAzLjg0IDY0LjM2NTMgMjAwLjE1NiA2OC4xNzI1TDE3NS4yNSA5My45MDg0QzE3MS40ODIgOTcuODAxOCAxNjYuMjk2IDEwMCAxNjAuODc4IDEwMEg4NC42Nzc0SDMwLjE1NkMyNC44NTc5IDEwMCAyMi4xNTk5IDkzLjYzNDcgMjUuODQ0NCA4OS44Mjc1TDUwLjc1MDEgNjQuMDkxNloiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcl8xXzE4KSI+PC9wYXRoPgogIDxwYXRoIGQ9Ik02Ni43NTAxIDEyMi4wOTJDNzAuNTE3OSAxMTguMTk4IDc1LjcwNDEgMTE2IDgxLjEyMjEgMTE2SDIxMS44NDRDMjE3LjE0MiAxMTYgMjE5Ljg0IDEyMi4zNjUgMjE2LjE1NiAxMjYuMTczTDE5MS4yNSAxNTEuOTA4QzE4Ny40ODIgMTU1LjgwMiAxODIuMjk2IDE1OCAxNzYuODc4IDE1OEgxMTYuNjc3SDQ2LjE1NkM0MC44NTc5IDE1OCAzOC4xNTk5IDE1MS42MzUgNDEuODQ0NCAxNDcuODI3TDY2Ljc1MDEgMTIyLjA5MloiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xXzE4KSI+PC9wYXRoPgo8L2c+CjxwYXRoIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI0NC40NzIsIDE1LjgwMCkgc2NhbGUoMi4xODE1MikgdHJhbnNsYXRlKC04LjE1NiwgLTE3Ni45MDgpIiBkPSJNNjcuMjA4NSAyMjYuNTUyQzY3LjY1NjUgMjI2LjgzMiA2Ny44ODA1IDIyNy4xNjggNjcuODgwNSAyMjcuNTZDNjcuODgwNSAyMjcuNzI4IDY3Ljc5NjUgMjI3Ljk4IDY3LjYyODUgMjI4LjMxNkw2MC45MDg1IDI0MS40MkM2MC42Mjg1IDI0MS44NjggNjAuMjkyNSAyNDIuMDkyIDU5LjkwMDUgMjQyLjA5MkM1OS41NjQ1IDI0Mi4wOTIgNTkuMzEyNSAyNDIuMDA4IDU5LjE0NDUgMjQxLjg0TDU4LjcyNDUgMjQxLjQyQzU4LjUwMDUgMjQxLjE5NiA1OC4yNDg1IDI0MS4wNTYgNTcuOTY4NSAyNDFDNTcuNjg4NSAyNDEgNTcuNDA4NSAyNDEgNTcuMTI4NSAyNDFIOS40MTY0OEM4LjU3NjQ4IDI0MSA4LjE1NjQ4IDI0MC41OCA4LjE1NjQ4IDIzOS43NFYyMzUuMTJDOC4xNTY0OCAyMzQuNTYgOC4zNTI0OCAyMzQgOC43NDQ0OCAyMzMuNDRMNDYuNTQ0NSAxODQuODA0SDMyLjI2NDVDMjkuNzQ0NSAxODQuODA0IDI3LjU4ODUgMTg1LjE5NiAyNS43OTY1IDE4NS45OEMyNC4wNjA1IDE4Ni43MDggMjIuNTIwNSAxODcuNzQ0IDIxLjE3NjUgMTg5LjA4OEMxOS44ODg1IDE5MC4zNzYgMTguNTcyNSAxOTEuODMyIDE3LjIyODUgMTkzLjQ1NkwxNi44OTI1IDE5My44NzZDMTYuNTAwNSAxOTQuMzggMTYuMTY0NSAxOTQuNjMyIDE1Ljg4NDUgMTk0LjYzMkMxNS42NjA1IDE5NC42MzIgMTUuNDA4NSAxOTQuNTQ4IDE1LjEyODUgMTk0LjM4TDExLjYwMDUgMTkyLjQ0OEMxMS4xNTI1IDE5Mi4xNjggMTAuOTI4NSAxOTEuODMyIDEwLjkyODUgMTkxLjQ0QzEwLjkyODUgMTkxLjI3MiAxMS4wMTI1IDE5MS4wMiAxMS4xODA1IDE5MC42ODRMMTcuODE2NSAxNzcuNThDMTguMDQwNSAxNzcuMTMyIDE4LjQwNDUgMTc2LjkwOCAxOC45MDg1IDE3Ni45MDhDMTkuMDc2NSAxNzYuOTA4IDE5LjIxNjUgMTc2LjkzNiAxOS4zMjg1IDE3Ni45OTJDMTkuNDk2NSAxNzcuMDQ4IDE5Ljc0ODUgMTc3LjI0NCAyMC4wODQ1IDE3Ny41OEMyMC4zMDg1IDE3Ny44MDQgMjAuNTYwNSAxNzcuOTQ0IDIwLjg0MDUgMTc4QzIxLjEyMDUgMTc4IDIxLjQwMDUgMTc4IDIxLjY4MDUgMTc4SDY2LjYyMDVDNjYuOTU2NSAxNzggNjcuMTI0NSAxNzguMTQgNjcuMTI0NSAxNzguNDJWMTc4Ljg0QzY3LjEyNDUgMTc5LjAwOCA2Ny4wNjg1IDE3OS4xNzYgNjYuOTU2NSAxNzkuMzQ0QzY2Ljg0NDUgMTc5LjUxMiA2Ni43MzI1IDE3OS42OCA2Ni42MjA1IDE3OS44NDhMMjUuMzc2NSAyMzMuMzU2SDM2LjcxNjVDNDEuOTI0NSAyMzMuMzU2IDQ2LjEyNDUgMjMzLjA3NiA0OS4zMTY1IDIzMi41MTZDNTIuNTY0NSAyMzEuOTU2IDU1LjE0MDUgMjMxLjExNiA1Ny4wNDQ1IDIyOS45OTZDNTguOTQ4NSAyMjguODIgNjAuNDYwNSAyMjcuMzY0IDYxLjU4MDUgMjI1LjYyOEw2MS45MTY1IDIyNS4xMjRDNjIuMTk2NSAyMjQuNjIgNjIuNTMyNSAyMjQuMzY4IDYyLjkyNDUgMjI0LjM2OEM2My4yMDQ1IDIyNC4zNjggNjMuNDU2NSAyMjQuNDUyIDYzLjY4MDUgMjI0LjYyTDY3LjIwODUgMjI2LjU1MlpNMTEzLjg0OCAyMjUuNDZDMTEzLjg0OCAyMjcuNDc2IDExNC4xNTYgMjI5LjI5NiAxMTQuNzcyIDIzMC45MkMxMTUuMzg4IDIzMi40ODggMTE2LjczMiAyMzMuNDEyIDExOC44MDQgMjMzLjY5MkMxMTkuNDc2IDIzMy43NDggMTE5LjgxMiAyMzQuMTEyIDExOS44MTIgMjM0Ljc4NFYyMzcuNTU2QzExOS44MTIgMjM4LjM0IDExOS4zOTIgMjM4LjczMiAxMTguNTUyIDIzOC43MzJDMTE1LjgwOCAyMzguNzMyIDExMy41MTIgMjM4LjkgMTExLjY2NCAyMzkuMjM2QzEwOS44NzIgMjM5LjUxNiAxMDguMzA0IDIzOS45MDggMTA2Ljk2IDI0MC40MTJDMTA1LjY3MiAyNDAuODYgMTA0LjM4NCAyNDEuMzY0IDEwMy4wOTYgMjQxLjkyNEMxMDIuODcyIDI0Mi4wMzYgMTAyLjY3NiAyNDIuMDkyIDEwMi41MDggMjQyLjA5MkgxMDIuMjU2QzEwMi4xNDQgMjQyLjA5MiAxMDIuMDg4IDI0MS45OCAxMDIuMDg4IDI0MS43NTZDMTAyLjA4OCAyNDEuNTMyIDEwMi4xNDQgMjQxIDEwMi4yNTYgMjQwLjE2QzEwMi4zNjggMjM5LjI2NCAxMDIuNDggMjM4LjI4NCAxMDIuNTkyIDIzNy4yMkMxMDIuNzYgMjM2LjEgMTAyLjkgMjM1LjE0OCAxMDMuMDEyIDIzNC4zNjRDMTAyLjczMiAyMzUuMDkyIDEwMi4xMTYgMjM2LjA3MiAxMDEuMTY0IDIzNy4zMDRDMTAwLjI2OCAyMzguNTM2IDk4LjkyNDIgMjM5LjY1NiA5Ny4xMzIyIDI0MC42NjRDOTUuMzk2MiAyNDEuNjE2IDkzLjEwMDIgMjQyLjA5MiA5MC4yNDQyIDI0Mi4wOTJDODguMzQwMiAyNDIuMDkyIDg2LjI5NjIgMjQxLjcgODQuMTEyMiAyNDAuOTE2QzgxLjk4NDIgMjQwLjEzMiA3OS45NjgyIDIzOC44NzIgNzguMDY0MiAyMzcuMTM2Qzc2LjE2MDIgMjM1LjQgNzQuNTkyMiAyMzMuMTMyIDczLjM2MDIgMjMwLjMzMkM3Mi4xODQyIDIyNy40NzYgNzEuNTk2MiAyMjQuMDA0IDcxLjU5NjIgMjE5LjkxNkM3MS41OTYyIDIxNC43MDggNzIuNTIwMiAyMTAuNTA4IDc0LjM2ODIgMjA3LjMxNkM3Ni4yNzIyIDIwNC4wNjggNzguNzA4MiAyMDEuNjg4IDgxLjY3NjIgMjAwLjE3NkM4NC43MDAyIDE5OC42NjQgODcuODkyMiAxOTcuOTA4IDkxLjI1MjIgMTk3LjkwOEM5My45OTYyIDE5Ny45MDggOTYuNTE2MiAxOTguMzI4IDk4LjgxMjIgMTk5LjE2OEMxMDEuMTA4IDIwMC4wMDggMTAzLjEyNCAyMDEuMjEyIDEwNC44NiAyMDIuNzhDMTA2LjMxNiAyMDIuMTY0IDEwNy41NDggMjAxLjYwNCAxMDguNTU2IDIwMS4xQzEwOS42MiAyMDAuNTQgMTEwLjUxNiAxOTkuOTggMTExLjI0NCAxOTkuNDJDMTExLjUyNCAxOTkuMTk2IDExMS44MDQgMTk4Ljk3MiAxMTIuMDg0IDE5OC43NDhDMTEyLjQyIDE5OC41MjQgMTEyLjc4NCAxOTguMyAxMTMuMTc2IDE5OC4wNzZDMTEzLjM0NCAxOTcuOTY0IDExMy40ODQgMTk3LjkwOCAxMTMuNTk2IDE5Ny45MDhIMTEzLjY4QzExMy43OTIgMTk3LjkwOCAxMTMuODQ4IDE5Ny45NjQgMTEzLjg0OCAxOTguMDc2VjIyNS40NlpNMTAyLjA4OCAyMTIuMjcyQzEwMS45MiAyMTEuMTUyIDEwMS41IDIwOS45MiAxMDAuODI4IDIwOC41NzZDMTAwLjIxMiAyMDcuMTc2IDk5LjI2MDIgMjA2IDk3Ljk3MjIgMjA1LjA0OEM5Ni42ODQyIDIwNC4wNCA5NC45NDgyIDIwMy41MzYgOTIuNzY0MiAyMDMuNTM2QzkwLjA3NjIgMjAzLjUzNiA4Ny45NzYyIDIwNC4yMDggODYuNDY0MiAyMDUuNTUyQzg0Ljk1MjIgMjA2Ljg0IDgzLjg4ODIgMjA4LjUyIDgzLjI3MjIgMjEwLjU5MkM4Mi43MTIyIDIxMi42NjQgODIuNDMyMiAyMTQuODc2IDgyLjQzMjIgMjE3LjIyOEM4Mi40MzIyIDIyMi42MDQgODMuNDk2MiAyMjYuODYgODUuNjI0MiAyMjkuOTk2Qzg3LjgwODIgMjMzLjEzMiA5MC42MDgyIDIzNC43IDk0LjAyNDIgMjM0LjdDOTYuMDQwMiAyMzQuNyA5Ny42MDgyIDIzNC4yOCA5OC43MjgyIDIzMy40NEM5OS45MDQyIDIzMi41NDQgMTAwLjc0NCAyMzEuNjQ4IDEwMS4yNDggMjMwLjc1MkMxMDEuNzUyIDIyOS44NTYgMTAyLjAzMiAyMjkuMzI0IDEwMi4wODggMjI5LjE1NlYyMTIuMjcyWk0xNjcuMTc3IDE5OUMxNjguMDE3IDE5OSAxNjguNDM3IDE5OS40MiAxNjguNDM3IDIwMC4yNlYyMDIuNzhDMTY4LjQzNyAyMDMuNjIgMTY4LjAxNyAyMDQuMDQgMTY3LjE3NyAyMDQuMDRIMTY1LjkxN0MxNjUuMDIxIDIwNC4wNCAxNjQuMjA5IDIwNC4zNzYgMTYzLjQ4MSAyMDUuMDQ4QzE2Mi44MDkgMjA1LjcyIDE2MS45OTcgMjA3LjEyIDE2MS4wNDUgMjA5LjI0OEwxNDYuODQ5IDI0MC4wNzZDMTQ2LjU2OSAyNDAuNjkyIDE0Ni4xNDkgMjQxIDE0NS41ODkgMjQxSDE0MC44MDFDMTQwLjE4NSAyNDEgMTM5LjczNyAyNDAuNjkyIDEzOS40NTcgMjQwLjA3NkwxMjUuMzQ1IDIwOS4zMzJDMTI0LjM5MyAyMDcuMjA0IDEyMy42MDkgMjA1LjgwNCAxMjIuOTkzIDIwNS4xMzJDMTIyLjQzMyAyMDQuNDA0IDEyMS41OTMgMjA0LjA0IDEyMC40NzMgMjA0LjA0SDEyMC4zMDVDMTE5LjQ2NSAyMDQuMDQgMTE5LjA0NSAyMDMuNjIgMTE5LjA0NSAyMDIuNzhWMjAwLjI2QzExOS4wNDUgMTk5LjQyIDExOS40NjUgMTk5IDEyMC4zMDUgMTk5SDEzOS43MDlDMTQwLjU0OSAxOTkgMTQwLjk2OSAxOTkuNDIgMTQwLjk2OSAyMDAuMjZWMjAyLjc4QzE0MC45NjkgMjAzLjYyIDE0MC41NDkgMjA0LjA0IDEzOS43MDkgMjA0LjA0SDEzOS41NDFDMTM4LjQ3NyAyMDQuMDQgMTM3LjcyMSAyMDQuMjY0IDEzNy4yNzMgMjA0LjcxMkMxMzYuODgxIDIwNS4xMDQgMTM2LjY4NSAyMDUuNjkyIDEzNi42ODUgMjA2LjQ3NkMxMzYuNjg1IDIwNy4yMDQgMTM2LjgyNSAyMDguMDE2IDEzNy4xMDUgMjA4LjkxMkMxMzcuNDQxIDIwOS44MDggMTM3Ljg4OSAyMTAuODQ0IDEzOC40NDkgMjEyLjAyTDE0Ni4xNzcgMjI4LjRMMTUzLjIzMyAyMTIuMDJDMTUzLjc5MyAyMTAuNzMyIDE1NC4yNjkgMjA5LjU1NiAxNTQuNjYxIDIwOC40OTJDMTU1LjA1MyAyMDcuNDI4IDE1NS4yNDkgMjA2LjUzMiAxNTUuMjQ5IDIwNS44MDRDMTU1LjI0OSAyMDQuNjI4IDE1NC42MzMgMjA0LjA0IDE1My40MDEgMjA0LjA0SDE1MS43MjFDMTUwLjg4MSAyMDQuMDQgMTUwLjQ2MSAyMDMuNjIgMTUwLjQ2MSAyMDIuNzhWMjAwLjI2QzE1MC40NjEgMTk5LjQyIDE1MC44ODEgMTk5IDE1MS43MjEgMTk5SDE2Ny4xNzdaTTIxMS4yMTkgMjI1LjQ2QzIxMS4yMTkgMjI3LjQ3NiAyMTEuNTI3IDIyOS4yOTYgMjEyLjE0MyAyMzAuOTJDMjEyLjc1OSAyMzIuNDg4IDIxNC4xMDMgMjMzLjQxMiAyMTYuMTc1IDIzMy42OTJDMjE2Ljg0NyAyMzMuNzQ4IDIxNy4xODMgMjM0LjExMiAyMTcuMTgzIDIzNC43ODRWMjM3LjU1NkMyMTcuMTgzIDIzOC4zNCAyMTYuNzYzIDIzOC43MzIgMjE1LjkyMyAyMzguNzMyQzIxMy4xNzkgMjM4LjczMiAyMTAuODgzIDIzOC45IDIwOS4wMzUgMjM5LjIzNkMyMDcuMjQzIDIzOS41MTYgMjA1LjY3NSAyMzkuOTA4IDIwNC4zMzEgMjQwLjQxMkMyMDMuMDQzIDI0MC44NiAyMDEuNzU1IDI0MS4zNjQgMjAwLjQ2NyAyNDEuOTI0QzIwMC4yNDMgMjQyLjAzNiAyMDAuMDQ3IDI0Mi4wOTIgMTk5Ljg3OSAyNDIuMDkySDE5OS42MjdDMTk5LjUxNSAyNDIuMDkyIDE5OS40NTkgMjQxLjk4IDE5OS40NTkgMjQxLjc1NkMxOTkuNDU5IDI0MS41MzIgMTk5LjUxNSAyNDEgMTk5LjYyNyAyNDAuMTZDMTk5LjczOSAyMzkuMjY0IDE5OS44NTEgMjM4LjI4NCAxOTkuOTYzIDIzNy4yMkMyMDAuMTMxIDIzNi4xIDIwMC4yNzEgMjM1LjE0OCAyMDAuMzgzIDIzNC4zNjRDMjAwLjEwMyAyMzUuMDkyIDE5OS40ODcgMjM2LjA3MiAxOTguNTM1IDIzNy4zMDRDMTk3LjYzOSAyMzguNTM2IDE5Ni4yOTUgMjM5LjY1NiAxOTQuNTAzIDI0MC42NjRDMTkyLjc2NyAyNDEuNjE2IDE5MC40NzEgMjQyLjA5MiAxODcuNjE1IDI0Mi4wOTJDMTg1LjcxMSAyNDIuMDkyIDE4My42NjcgMjQxLjcgMTgxLjQ4MyAyNDAuOTE2QzE3OS4zNTUgMjQwLjEzMiAxNzcuMzM5IDIzOC44NzIgMTc1LjQzNSAyMzcuMTM2QzE3My41MzEgMjM1LjQgMTcxLjk2MyAyMzMuMTMyIDE3MC43MzEgMjMwLjMzMkMxNjkuNTU1IDIyNy40NzYgMTY4Ljk2NyAyMjQuMDA0IDE2OC45NjcgMjE5LjkxNkMxNjguOTY3IDIxNC43MDggMTY5Ljg5MSAyMTAuNTA4IDE3MS43MzkgMjA3LjMxNkMxNzMuNjQzIDIwNC4wNjggMTc2LjA3OSAyMDEuNjg4IDE3OS4wNDcgMjAwLjE3NkMxODIuMDcxIDE5OC42NjQgMTg1LjI2MyAxOTcuOTA4IDE4OC42MjMgMTk3LjkwOEMxOTEuMzY3IDE5Ny45MDggMTkzLjg4NyAxOTguMzI4IDE5Ni4xODMgMTk5LjE2OEMxOTguNDc5IDIwMC4wMDggMjAwLjQ5NSAyMDEuMjEyIDIwMi4yMzEgMjAyLjc4QzIwMy42ODcgMjAyLjE2NCAyMDQuOTE5IDIwMS42MDQgMjA1LjkyNyAyMDEuMUMyMDYuOTkxIDIwMC41NCAyMDcuODg3IDE5OS45OCAyMDguNjE1IDE5OS40MkMyMDguODk1IDE5OS4xOTYgMjA5LjE3NSAxOTguOTcyIDIwOS40NTUgMTk4Ljc0OEMyMDkuNzkxIDE5OC41MjQgMjEwLjE1NSAxOTguMyAyMTAuNTQ3IDE5OC4wNzZDMjEwLjcxNSAxOTcuOTY0IDIxMC44NTUgMTk3LjkwOCAyMTAuOTY3IDE5Ny45MDhIMjExLjA1MUMyMTEuMTYzIDE5Ny45MDggMjExLjIxOSAxOTcuOTY0IDIxMS4yMTkgMTk4LjA3NlYyMjUuNDZaTTE5OS40NTkgMjEyLjI3MkMxOTkuMjkxIDIxMS4xNTIgMTk4Ljg3MSAyMDkuOTIgMTk4LjE5OSAyMDguNTc2QzE5Ny41ODMgMjA3LjE3NiAxOTYuNjMxIDIwNiAxOTUuMzQzIDIwNS4wNDhDMTk0LjA1NSAyMDQuMDQgMTkyLjMxOSAyMDMuNTM2IDE5MC4xMzUgMjAzLjUzNkMxODcuNDQ3IDIwMy41MzYgMTg1LjM0NyAyMDQuMjA4IDE4My44MzUgMjA1LjU1MkMxODIuMzIzIDIwNi44NCAxODEuMjU5IDIwOC41MiAxODAuNjQzIDIxMC41OTJDMTgwLjA4MyAyMTIuNjY0IDE3OS44MDMgMjE0Ljg3NiAxNzkuODAzIDIxNy4yMjhDMTc5LjgwMyAyMjIuNjA0IDE4MC44NjcgMjI2Ljg2IDE4Mi45OTUgMjI5Ljk5NkMxODUuMTc5IDIzMy4xMzIgMTg3Ljk3OSAyMzQuNyAxOTEuMzk1IDIzNC43QzE5My40MTEgMjM0LjcgMTk0Ljk3OSAyMzQuMjggMTk2LjA5OSAyMzMuNDRDMTk3LjI3NSAyMzIuNTQ0IDE5OC4xMTUgMjMxLjY0OCAxOTguNjE5IDIzMC43NTJDMTk5LjEyMyAyMjkuODU2IDE5OS40MDMgMjI5LjMyNCAxOTkuNDU5IDIyOS4xNTZWMjEyLjI3MlpNMjM4Ljg0MyAyMDcuODJDMjQwLjM1NSAyMDQuNTcyIDI0Mi40NTUgMjAyLjEwOCAyNDUuMTQzIDIwMC40MjhDMjQ3LjgzMSAxOTguNzQ4IDI1MC42NTkgMTk3LjkwOCAyNTMuNjI3IDE5Ny45MDhDMjU2LjI1OSAxOTcuOTA4IDI1OC40OTkgMTk4LjYzNiAyNjAuMzQ3IDIwMC4wOTJDMjYyLjE5NSAyMDEuNTQ4IDI2My4xMTkgMjAzLjcwNCAyNjMuMTE5IDIwNi41NkMyNjMuMTE5IDIwNy43OTIgMjYzLjAwNyAyMDguODg0IDI2Mi43ODMgMjA5LjgzNkMyNjIuNTU5IDIxMC43ODggMjYxLjk0MyAyMTEuNDg4IDI2MC45MzUgMjExLjkzNkwyNTMuMDM5IDIxNS4xMjhDMjUyLjcwMyAyMTUuMjQgMjUyLjQ1MSAyMTUuMjk2IDI1Mi4yODMgMjE1LjI5NkMyNTEuNzc5IDIxNS4yOTYgMjUxLjUyNyAyMTUuMDQ0IDI1MS41MjcgMjE0LjU0QzI1MS41MjcgMjE0LjM3MiAyNTEuNTgzIDIxNC4xMiAyNTEuNjk1IDIxMy43ODRDMjUyLjAzMSAyMTMgMjUyLjIyNyAyMTIuMjQ0IDI1Mi4yODMgMjExLjUxNkMyNTIuMzk1IDIxMC43ODggMjUyLjQ1MSAyMTAuMTQ0IDI1Mi40NTEgMjA5LjU4NEMyNTIuNDUxIDIwOC4wNzIgMjUyLjA1OSAyMDYuOTggMjUxLjI3NSAyMDYuMzA4QzI1MC41NDcgMjA1LjU4IDI0OS42MjMgMjA1LjIxNiAyNDguNTAzIDIwNS4yMTZDMjQ3LjIxNSAyMDUuMjE2IDI0Ni4wMTEgMjA1LjYwOCAyNDQuODkxIDIwNi4zOTJDMjQzLjc3MSAyMDcuMTc2IDI0Mi43OTEgMjA4LjEyOCAyNDEuOTUxIDIwOS4yNDhDMjQxLjExMSAyMTAuMzY4IDI0MC40OTUgMjExLjQ2IDI0MC4xMDMgMjEyLjUyNFYyMjcuOThDMjQwLjEwMyAyMzAuMjIgMjQwLjYwNyAyMzIuMTI0IDI0MS42MTUgMjMzLjY5MkMyNDIuNjIzIDIzNS4yMDQgMjQ0LjE2MyAyMzUuOTYgMjQ2LjIzNSAyMzUuOTZIMjQ2LjQwM0MyNDcuMjQzIDIzNS45NiAyNDcuNjYzIDIzNi4zOCAyNDcuNjYzIDIzNy4yMlYyMzkuNzRDMjQ3LjY2MyAyNDAuNTggMjQ3LjI0MyAyNDEgMjQ2LjQwMyAyNDFIMjIxLjk1OUMyMjEuMTE5IDI0MSAyMjAuNjk5IDI0MC41OCAyMjAuNjk5IDIzOS43NFYyMzcuMjJDMjIwLjY5OSAyMzYuMzggMjIxLjExOSAyMzUuOTYgMjIxLjk1OSAyMzUuOTZIMjIyLjEyN0MyMjQuMTk5IDIzNS45NiAyMjUuNzM5IDIzNS4yMDQgMjI2Ljc0NyAyMzMuNjkyQzIyNy43NTUgMjMyLjEyNCAyMjguMjU5IDIzMC4yMiAyMjguMjU5IDIyNy45OFYyMTcuMzk2QzIyOC4yNTkgMjE1Ljg4NCAyMjguMTQ3IDIxNC40MjggMjI3LjkyMyAyMTMuMDI4QzIyNy43NTUgMjExLjYyOCAyMjcuMzM1IDIxMC40NTIgMjI2LjY2MyAyMDkuNUMyMjUuOTkxIDIwOC40OTIgMjI0Ljg3MSAyMDcuOTA0IDIyMy4zMDMgMjA3LjczNkMyMjIuNjMxIDIwNy42OCAyMjIuMjk1IDIwNy4zMTYgMjIyLjI5NSAyMDYuNjQ0VjIwMy43ODhDMjIyLjI5NSAyMDMuMjI4IDIyMi43MTUgMjAyLjg2NCAyMjMuNTU1IDIwMi42OTZDMjI3LjUzMSAyMDIuMDggMjMxLjAwMyAyMDEuMSAyMzMuOTcxIDE5OS43NTZDMjM2Ljk5NSAxOTguNDEyIDIzOS4wMzkgMTk3LjM0OCAyNDAuMTAzIDE5Ni41NjRDMjQwLjI3MSAxOTYuNDUyIDI0MC40MTEgMTk2LjM5NiAyNDAuNTIzIDE5Ni4zOTZIMjQwLjY5MUMyNDAuODAzIDE5Ni4zOTYgMjQwLjg1OSAxOTYuNDUyIDI0MC44NTkgMTk2LjU2NEMyNDAuODU5IDE5Ni42MiAyNDAuNzc1IDE5Ny4wNCAyNDAuNjA3IDE5Ny44MjRDMjQwLjQ5NSAxOTguNjA4IDI0MC4zMjcgMTk5LjYxNiAyNDAuMTAzIDIwMC44NDhDMjM5LjkzNSAyMDIuMDI0IDIzOS43MTEgMjAzLjI1NiAyMzkuNDMxIDIwNC41NDRDMjM5LjIwNyAyMDUuNzc2IDIzOS4wMTEgMjA2Ljg2OCAyMzguODQzIDIwNy44MlpNMjkwLjYxIDIzNS45NkMyOTEuNDUgMjM1Ljk2IDI5MS44NyAyMzYuMzggMjkxLjg3IDIzNy4yMlYyMzkuNzRDMjkxLjg3IDI0MC41OCAyOTEuMzk0IDI0MSAyOTAuNDQyIDI0MUgyNjYuNjdDMjY1LjcxOCAyNDEgMjY1LjI0MiAyNDAuNTggMjY1LjI0MiAyMzkuNzRWMjM3LjIyQzI2NS4yNDIgMjM2LjM4IDI2NS42NjIgMjM1Ljk2IDI2Ni41MDIgMjM1Ljk2SDI2Ni42N0MyNjguNzQyIDIzNS45NiAyNzAuMjU0IDIzNS4yMDQgMjcxLjIwNiAyMzMuNjkyQzI3Mi4yMTQgMjMyLjEyNCAyNzIuNzE4IDIzMC4yMiAyNzIuNzE4IDIyNy45OFYyMTkuMDc2QzI3Mi43MTggMjE3Ljc4OCAyNzIuNjA2IDIxNi41IDI3Mi4zODIgMjE1LjIxMkMyNzIuMjE0IDIxMy45MjQgMjcxLjc5NCAyMTIuODA0IDI3MS4xMjIgMjExLjg1MkMyNzAuNDUgMjEwLjkgMjY5LjMzIDIxMC4zNCAyNjcuNzYyIDIxMC4xNzJDMjY3LjA5IDIxMC4xMTYgMjY2Ljc1NCAyMDkuNzUyIDI2Ni43NTQgMjA5LjA4VjIwNi4yMjRDMjY2Ljc1NCAyMDUuODg4IDI2Ni44NjYgMjA1LjY2NCAyNjcuMDkgMjA1LjU1MkMyNjcuMzE0IDIwNS4zODQgMjY3LjYyMiAyMDUuMjQ0IDI2OC4wMTQgMjA1LjEzMkMyNzIuNDM4IDIwMy42NzYgMjc1LjgyNiAyMDIuMTkyIDI3OC4xNzggMjAwLjY4QzI4MC41ODYgMTk5LjExMiAyODIuMzUgMTk3Ljc0IDI4My40NyAxOTYuNTY0QzI4My41ODIgMTk2LjQ1MiAyODMuNjk0IDE5Ni4zOTYgMjgzLjgwNiAxOTYuMzk2SDI4NC4wNThDMjg0LjE3IDE5Ni4zOTYgMjg0LjIyNiAxOTYuNDUyIDI4NC4yMjYgMTk2LjU2NFYyMjcuODk2QzI4NC4yMjYgMjMwLjEzNiAyODQuNzMgMjMyLjA0IDI4NS43MzggMjMzLjYwOEMyODYuNzQ2IDIzNS4xNzYgMjg4LjI4NiAyMzUuOTYgMjkwLjM1OCAyMzUuOTZIMjkwLjYxWk0yNzguNTk4IDE3OC44NEMyODAuMDU0IDE3OC44NCAyODEuNDgyIDE3OS41NCAyODIuODgyIDE4MC45NEMyODQuMjgyIDE4Mi4zNCAyODQuOTgyIDE4My43NCAyODQuOTgyIDE4NS4xNEMyODQuOTgyIDE4Ni41NCAyODQuMjgyIDE4Ny45NCAyODIuODgyIDE4OS4zNEMyODEuNDgyIDE5MC43NCAyODAuMDU0IDE5MS40NCAyNzguNTk4IDE5MS40NEMyNzcuMjU0IDE5MS40NCAyNzUuODU0IDE5MC43NCAyNzQuMzk4IDE4OS4zNEMyNzIuOTk4IDE4Ny45OTYgMjcyLjI5OCAxODYuNTk2IDI3Mi4yOTggMTg1LjE0QzI3Mi4yOTggMTgzLjc0IDI3Mi45OTggMTgyLjM0IDI3NC4zOTggMTgwLjk0QzI3NS43OTggMTc5LjU0IDI3Ny4xOTggMTc4Ljg0IDI3OC41OTggMTc4Ljg0WiIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDBfbGluZWFyXzFfMTgiIHgxPSItMTYiIHkxPSIyMSIgeDI9IjE5NCIgeTI9IjIxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiMxQjQ5ODciPjwvc3RvcD4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMkY4MEVEIj48L3N0b3A+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQxX2xpbmVhcl8xXzE4IiB4MT0iMCIgeTE9Ijc5IiB4Mj0iMjEwIiB5Mj0iNzkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzFCNDk4NyI+PC9zdG9wPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMyRjgwRUQiPjwvc3RvcD4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDJfbGluZWFyXzFfMTgiIHgxPSIzMiIgeTE9IjEzNyIgeDI9IjI0MiIgeTI9IjEzNyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjMzI3NjhDIj48L3N0b3A+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU2Q0NGMiI+PC9zdG9wPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPg==';
  function NavRail({
    current,
    go
  }) {
    return /*#__PURE__*/React.createElement("nav", {
      style: {
        width: 248,
        flexShrink: 0,
        background: 'var(--gradient-navy)',
        height: '100vh',
        position: 'sticky',
        top: 0,
        display: 'flex',
        flexDirection: 'column',
        borderRight: '1px solid rgba(255,255,255,0.06)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '22px 22px 18px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: LOGO,
      alt: "Zavari",
      style: {
        height: 26,
        display: 'block'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '4px 14px',
        overflowY: 'auto',
        flex: 1
      }
    }, GROUPS.map(g => /*#__PURE__*/React.createElement("div", {
      key: g.group,
      style: {
        marginBottom: 22
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.08em',
        color: 'rgba(224,230,237,0.45)',
        textTransform: 'uppercase',
        padding: '0 10px 8px'
      }
    }, g.group), g.items.map(it => {
      const active = current === it.id;
      return /*#__PURE__*/React.createElement("button", {
        key: it.id,
        onClick: () => go(it.id),
        style: {
          width: '100%',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'center',
          gap: 11,
          padding: '9px 10px',
          marginBottom: 2,
          borderRadius: 5,
          cursor: 'pointer',
          border: 'none',
          position: 'relative',
          background: active ? 'rgba(0,212,255,0.10)' : 'transparent',
          color: active ? '#FFFFFF' : 'rgba(224,230,237,0.78)',
          fontFamily: 'var(--font-sans)',
          fontSize: 14,
          fontWeight: active ? 600 : 400,
          transition: 'background 160ms, color 160ms'
        },
        onMouseEnter: e => {
          if (!active) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
        },
        onMouseLeave: e => {
          if (!active) e.currentTarget.style.background = 'transparent';
        }
      }, active && /*#__PURE__*/React.createElement("span", {
        style: {
          position: 'absolute',
          left: 0,
          top: 7,
          bottom: 7,
          width: 3,
          borderRadius: 3,
          background: 'var(--zv-cyan)'
        }
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          color: active ? 'var(--zv-cyan)' : 'rgba(224,230,237,0.55)',
          display: 'flex'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: it.icon,
        size: 18
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          flex: 1
        }
      }, it.label));
    })))), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: '14px 22px',
        borderTop: '1px solid rgba(255,255,255,0.07)',
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 30,
        height: 30,
        borderRadius: '50%',
        background: 'rgba(255,255,255,0.12)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 12,
        flexShrink: 0
      }
    }, window.ZV.tenant.user.name.split(' ').map(w => w[0]).join('')), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.25,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: '#fff',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
      }
    }, window.ZV.tenant.user.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'rgba(224,230,237,0.5)'
      }
    }, window.ZV.tenant.user.role))));
  }
  function Segmented({
    options,
    value,
    onChange
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        background: 'var(--zv-cool-gray-soft)',
        border: '1px solid var(--color-border)',
        borderRadius: 6,
        padding: 3,
        gap: 2
      }
    }, options.map(o => {
      const active = value === o.k;
      return /*#__PURE__*/React.createElement("button", {
        key: o.k,
        onClick: () => onChange(o.k),
        style: {
          fontFamily: 'var(--font-sans)',
          fontWeight: 600,
          fontSize: 12.5,
          padding: '5px 13px',
          border: 'none',
          borderRadius: 4,
          cursor: 'pointer',
          background: active ? 'var(--color-surface)' : 'transparent',
          color: active ? 'var(--color-heading)' : 'var(--color-secondary)',
          boxShadow: active ? 'var(--shadow-card)' : 'none',
          transition: 'all 140ms'
        }
      }, o.l);
    }));
  }
  function TopBar({
    screen,
    variant,
    setVariant
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'sticky',
        top: 0,
        zIndex: 20,
        height: 60,
        flexShrink: 0,
        background: 'rgba(246,245,241,0.85)',
        backdropFilter: 'saturate(180%) blur(8px)',
        borderBottom: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        gap: 18,
        padding: '0 36px'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 22,
        height: 22,
        borderRadius: 5,
        background: 'var(--zv-navy)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'var(--font-serif)',
        fontWeight: 600,
        fontSize: 13
      }
    }, "H"), /*#__PURE__*/React.createElement("div", {
      style: {
        lineHeight: 1.2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 14,
        color: 'var(--color-heading)'
      }
    }, window.ZV.tenant.name)), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)',
        borderLeft: '1px solid var(--color-border)',
        paddingLeft: 10,
        marginLeft: 2
      }
    }, window.ZV.tenant.descriptor)), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1
      }
    }), screen.variants && /*#__PURE__*/React.createElement(Segmented, {
      options: screen.variants,
      value: variant,
      onChange: setVariant
    }), /*#__PURE__*/React.createElement("button", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 14px',
        borderRadius: 999,
        border: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        color: 'var(--color-heading)',
        fontWeight: 500
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--zv-azure)',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "spark",
      size: 15
    })), "Ask Zavari"));
  }
  function Pager({
    current,
    go
  }) {
    const i = NARRATIVE.indexOf(current);
    const prev = i > 0 ? NARRATIVE[i - 1] : null;
    const next = i < NARRATIVE.length - 1 ? NARRATIVE[i + 1] : null;
    const btn = (id, dir) => {
      const s = byId(id);
      return /*#__PURE__*/React.createElement("button", {
        onClick: () => go(id),
        style: {
          display: 'flex',
          alignItems: 'center',
          gap: 9,
          padding: '9px 15px',
          borderRadius: 8,
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          cursor: 'pointer',
          boxShadow: 'var(--shadow-card)',
          fontFamily: 'var(--font-sans)',
          fontSize: 13,
          color: 'var(--color-heading)',
          fontWeight: 500,
          flexDirection: dir === 'prev' ? 'row' : 'row-reverse'
        }
      }, /*#__PURE__*/React.createElement("span", {
        style: {
          color: 'var(--color-secondary)',
          display: 'flex',
          transform: dir === 'prev' ? 'scaleX(-1)' : 'none'
        }
      }, /*#__PURE__*/React.createElement(Icon, {
        name: "arrow",
        size: 15
      })), /*#__PURE__*/React.createElement("span", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: dir === 'prev' ? 'flex-start' : 'flex-end',
          lineHeight: 1.2
        }
      }, /*#__PURE__*/React.createElement(Mono, {
        style: {
          fontSize: 10,
          color: 'var(--color-secondary)',
          letterSpacing: '0.05em'
        }
      }, dir === 'prev' ? 'BACK' : 'NEXT'), /*#__PURE__*/React.createElement("span", null, s.label)));
    };
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 16,
        marginTop: 44,
        paddingTop: 24,
        borderTop: '1px solid var(--color-border)'
      }
    }, /*#__PURE__*/React.createElement("div", null, prev && btn(prev, 'prev')), /*#__PURE__*/React.createElement(Mono, {
      style: {
        fontSize: 11,
        color: 'var(--color-secondary)'
      }
    }, String(i + 1).padStart(2, '0'), " / ", String(NARRATIVE.length).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, next && btn(next, 'next')));
  }
  function App() {
    const initial = (location.hash || '').replace('#', '');
    const [current, setCurrent] = React.useState(FLAT.find(s => s.id === initial) ? initial : 'command');
    const [variants, setVariants] = React.useState(() => {
      try {
        return JSON.parse(localStorage.getItem('zv-concepts-variants') || '{}');
      } catch (e) {
        return {};
      }
    });
    const scrollRef = React.useRef(null);
    const go = id => {
      setCurrent(id);
      location.hash = id;
      if (scrollRef.current) scrollRef.current.scrollTop = 0;
    };
    React.useEffect(() => {
      const onHash = () => {
        const h = location.hash.replace('#', '');
        if (byId(h)) setCurrent(h);
      };
      window.addEventListener('hashchange', onHash);
      return () => window.removeEventListener('hashchange', onHash);
    }, []);
    React.useEffect(() => {
      localStorage.setItem('zv-concepts-variants', JSON.stringify(variants));
    }, [variants]);
    const screen = byId(current);
    const variant = variants[current] || (screen.variants ? screen.variants[0].k : null);
    const setVariant = k => setVariants(v => ({
      ...v,
      [current]: k
    }));
    const Comp = screen.comp();
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        minHeight: '100vh',
        background: 'var(--color-bg)'
      }
    }, /*#__PURE__*/React.createElement(NavRail, {
      current: current,
      go: go
    }), /*#__PURE__*/React.createElement("div", {
      ref: scrollRef,
      style: {
        flex: 1,
        height: '100vh',
        overflowY: 'auto',
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement(TopBar, {
      screen: screen,
      variant: variant,
      setVariant: setVariant
    }), /*#__PURE__*/React.createElement("main", {
      style: {
        padding: '36px 36px 28px',
        maxWidth: 1240,
        margin: '0 auto'
      }
    }, Comp ? /*#__PURE__*/React.createElement(Comp, {
      variant: variant,
      go: go
    }) : /*#__PURE__*/React.createElement("div", {
      style: {
        padding: 80,
        textAlign: 'center',
        color: 'var(--color-secondary)',
        fontFamily: 'var(--font-mono)'
      }
    }, "Loading ", screen.label, "\u2026"), /*#__PURE__*/React.createElement(Pager, {
      current: current,
      go: go
    }))));
  }
  window.ZVApp = App;
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(/*#__PURE__*/React.createElement(App, null));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "concepts/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.StatCallout = __ds_scope.StatCallout;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.CoherenceFlag = __ds_scope.CoherenceFlag;

__ds_ns.SourceTag = __ds_scope.SourceTag;

})();
