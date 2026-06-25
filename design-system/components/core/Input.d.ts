export interface InputProps {
  /** Field label, rendered above the control (Sans SemiBold 14px, Navy). */
  label?: string;
  /** Helper text below the field (Accent Gray caption). */
  hint?: string;
  /** Error message — turns border/ring red and replaces the hint. State is never color-only: the message carries the meaning. */
  error?: string;
  id?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Labelled text field with azure focus ring and explicit error messaging.
 * @startingPoint section="Core" subtitle="Default, focus, hint & error" viewport="700x200"
 */
export function Input(props: InputProps): JSX.Element;
