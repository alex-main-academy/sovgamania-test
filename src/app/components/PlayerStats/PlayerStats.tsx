import './PlayerStats.scss';

export default function PlayerStats() {
  const playerStatsItems = [
    { label: '25/800', icon: '/images/game/energy-icon', type: 'energy' },
    { label: '1986900112', icon: '/images/game/coin-icon', type: 'coins' },
    { label: '9 123', icon: '/images/game/users-icon', type: 'users' },
  ];

  function formatNumber(value: number): string {
    if (value < 1000) {
      return value.toString();
    }

    const units = [
      { value: 1_000_000_000, suffix: 'b' },
      { value: 1_000_000, suffix: 'm' },
      { value: 1_000, suffix: 'k' },
    ];

    for (const unit of units) {
      if (value >= unit.value) {
        const num = value / unit.value;
        return formatWithPrecision(num) + unit.suffix;
      }
    }

    return value.toString();
  }

  function formatWithPrecision(num: number): string {
    if (num >= 100) {
      return Math.round(num).toString();
    }

    if (num >= 10) {
      return num.toFixed(1).replace(/\.0$/, '');
    }

    return num
      .toFixed(2)
      .replace(/\.0+$/, '')
      .replace(/(\.\d)0$/, '$1');
  }

  return (
    <ul className="player-stats__list">
      {playerStatsItems.map((item) => (
        <li key={item.label} className="player-stats__item">
          <picture>
            <source srcSet={`${item.icon}.webp`} type="image/webp" />
            <img src={`${item.icon}.png`} width={23} height={23} alt="" />
          </picture>
          <span className="player-stats__text">
            {item.type === 'coins'
              ? formatNumber(Number(item.label))
              : item.label}
          </span>
        </li>
      ))}
    </ul>
  );
}
