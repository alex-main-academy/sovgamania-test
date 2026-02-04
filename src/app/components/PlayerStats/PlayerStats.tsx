import './PlayerStats.scss';

export default function PlayerStats() {
  const playerStatsItems = [
    { label: '25/800', icon: '/images/game/energy-icon' },
    { label: '1 000 000', icon: '/images/game/coin-icon' },
    { label: '9 123', icon: '/images/game/users-icon' },
  ];

  return (
    <ul className="player-stats__list">
      {playerStatsItems.map((item) => (
        <li key={item.label} className="player-stats__item">
          <picture>
            <source srcSet={`${item.icon}.webp`} type="image/webp" />
            <img src={`${item.icon}.png`} width={23} height={23} alt="" />
          </picture>
          <span className="player-stats__text">{item.label}</span>
        </li>
      ))}
    </ul>
  );
}
