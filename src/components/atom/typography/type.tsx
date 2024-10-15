export interface TypographyProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
  classes?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}
