export interface BadgeProps {
  /** @default "neutral". Status tones always render alongside their label text — never color alone. */
  tone?: 'neutral' | 'success' | 'warning' | 'error' | 'info';
  /** Optional leading dot or line icon. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Compact pill label for status, counts, and metadata. */
export function Badge(props: BadgeProps): JSX.Element;
