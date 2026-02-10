'use client';

import React from 'react';
import { telegramWebApp } from '@/shared/utils/telegramWebApp';
import PlayerStats from '../../components/PlayerStats/PlayerStats';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import './game.scss';
import Link from 'next/link';

export default function Game() {
  const [user, setUser] = React.useState<any>(null);

  React.useEffect(() => {
    if (typeof window !== 'undefined' && telegramWebApp) {
      telegramWebApp.ready?.();
      telegramWebApp.expand?.();

      if (telegramWebApp.initDataUnsafe?.user) {
        setUser(telegramWebApp.initDataUnsafe.user);
      }
    }
  }, []);

  const imageSize = 66;

  return (
    <div className="page game">
      <div className="container">
        <h1 className="game__title">Sovğa Mania</h1>
        <div className="game__header">
          <Link className="game__link" href="/giveaway">
            <span className="game__description">HOLIDAY GIVEAWAY $1000</span>
            <span className="game__level">0 LVL</span>
            <div className="game__state">
              <ProgressBar value={20} />
              <span className="game__state-value">171,440 / 174,400</span>
            </div>
          </Link>
        </div>
        <div className="game__message">
          <div className="game__avatar">
            <picture>
              <source srcSet="/images/game/avatar.webp" type="image/webp" />
              <img
                src="/images/game/avatar.png"
                width="62"
                height="60"
                alt=""
              />
            </picture>
          </div>
          <div className="game__plate">
            <span className="game__plate-name">abu aka</span>
            <span className="game__plate-text">
              This is your city, Tashkent #1823934. But it is not yet developed.
              Click on the territory to clear it of unnecessary elements for
              construction.
            </span>
          </div>
        </div>
      </div>
      <div className="game__menu">
        <ul className="game__menu-list">
          <li className="game__menu-item">
            <button className="game__menu-button">
              <picture>
                <source
                  srcSet="/images/game/home-icon.webp"
                  type="image/webp"
                />
                <img
                  src="/images/game/home-icon.png"
                  width={imageSize}
                  height={imageSize}
                  alt=""
                />
              </picture>
            </button>
          </li>
          <li className="game__menu-item">
            <button className="game__menu-button">
              <picture>
                <source
                  srcSet="/images/game/road-icon.webp"
                  type="image/webp"
                />
                <img
                  src="/images/game/road-icon.png"
                  width={imageSize}
                  height={imageSize}
                  alt=""
                />
              </picture>
            </button>
          </li>
        </ul>
        <PlayerStats />
      </div>
    </div>
  );
}
