export interface ButtonProps {
  /** Visual weight. primary = Cyan/Navy CTA (one per section). @default "primary" */
  variant?: 'primary' | 'secondary' | 'ghost' | 'destructive';
  /** @default "md" */
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  /** Single-weight line icon node, placed before the label. */
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * Primary action control for Zavari surfaces.
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost & destructive" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
