export interface StatCalloutProps {
  /** The figure itself, rendered in IBM Plex Serif — a confident editorial number. */
  value: string | number;
  /** Adjacent unit (Sans SemiBold 24px) — e.g. "M", "%", "ARR". */
  unit?: string;
  /** Accent Gray label beneath the number. */
  label?: string;
  /** Optional delta string, shown in success green — e.g. "+12%". */
  trend?: string;
  /** @default "left" */
  align?: 'left' | 'center';
  /** Render white for use on Navy surfaces. */
  onDark?: boolean;
  style?: React.CSSProperties;
}

/**
 * Big-number metric display — Mono numeral reads as data, not headline.
 * @startingPoint section="Data" subtitle="Value, unit, label & trend" viewport="700x180"
 */
export function StatCallout(props: StatCalloutProps): JSX.Element;
