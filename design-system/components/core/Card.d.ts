export interface CardProps {
  /** Serif SemiBold Navy heading. */
  title?: string;
  /** Uppercase tracked eyebrow above the title (Accent Gray). */
  eyebrow?: string;
  /** Footer node, separated by a Cool Gray rule. */
  footer?: React.ReactNode;
  /** Adds hover elevation + pointer when the whole card is clickable. */
  interactive?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Container surface for grouped content — never colored, color lives in its contents.
 * @startingPoint section="Core" subtitle="Eyebrow, title, body & footer" viewport="700x240"
 */
export function Card(props: CardProps): JSX.Element;
