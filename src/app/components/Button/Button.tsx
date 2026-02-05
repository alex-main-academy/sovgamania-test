import './Button.scss';

interface ButtonProps {
  label: string;
  type: string;
}

export default function Button({ label, type }: ButtonProps) {
  return <button className={`button button--${type}`}>{label}</button>;
}
