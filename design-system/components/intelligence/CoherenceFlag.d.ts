export interface CoherenceFlagProps {
  /** Whether a bet ladders to the north star. Drives the triangulation mark + label. @default "coherent" */
  state?: 'coherent' | 'drifting' | 'conflict';
  /** Override the default state label ("Coherent" / "Drifting" / "Conflict"). */
  label?: string;
  /** Optional one-line explanation beneath the label (Accent Gray caption). */
  detail?: string;
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/**
 * Signature coherence indicator — strategy alignment legible at a glance.
 * @startingPoint section="Intelligence" subtitle="Coherent, drifting & conflict" viewport="700x200"
 */
export function CoherenceFlag(props: CoherenceFlagProps): JSX.Element;
