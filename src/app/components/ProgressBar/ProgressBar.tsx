import './ProgressBar.scss';

export default function ProgressBar({ value }) {
  return (
    <div
      className="progress"
      style={{ '--app-progress-percentage-value': value }}
    ></div>
  );
}
