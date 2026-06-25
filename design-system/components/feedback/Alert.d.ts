export interface AlertProps {
  /** @default "info". Drives the left border + tint; the title/body carry the meaning too. */
  type?: 'info' | 'success' | 'warning' | 'error';
  /** Optional bold title (Sans SemiBold, Navy). */
  title?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/** Inline notification banner — tinted background with a 4px accent border, never a full color fill. */
export function Alert(props: AlertProps): JSX.Element;
