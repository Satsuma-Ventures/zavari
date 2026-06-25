export interface SourceTagProps {
  /** Source name — a connected tool (Amplitude, Dovetail) or a Zavari first-party tool. */
  source: string;
  /** "first-party" marks a Zavari-owned source as a first-class peer (cyan dot). @default "connected" */
  kind?: 'connected' | 'first-party';
  /** Optional sourcing confidence — adds a labelled segment (never color alone). */
  confidence?: 'high' | 'medium' | 'low';
  /** Optional count of supporting signals, shown in Mono. */
  count?: number;
  style?: React.CSSProperties;
}

/**
 * Provenance chip making a conclusion's lineage native and reassuring.
 * @startingPoint section="Intelligence" subtitle="Connected, first-party & confidence" viewport="700x160"
 */
export function SourceTag(props: SourceTagProps): JSX.Element;
