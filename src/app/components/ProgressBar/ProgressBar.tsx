import { CSSProperties } from 'react';
import './ProgressBar.scss';

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({ value }: ProgressBarProps) {
  const style: CSSProperties & { [key: `--${string}`]: string | number } = {
    '--app-progress-percentage-value': value,
  };

  return <div className="progress" style={style}></div>;
}
