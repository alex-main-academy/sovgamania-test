'use client';

import { useState } from 'react';
import Image from 'next/image';
import Reward from '@/app/dialogs/Reward/Reward';
import './tasks.scss';
import Link from 'next/link';

export default function Tasks() {
  const [isRewardOpen, setIsRewardOpen] = useState(false);

  const openReward = () => {
    setIsRewardOpen(true);
  };

  const closeReward = () => {
    setIsRewardOpen(false);
  };

  return (
    <div className="page tasks">
      <div className="container">
        <h1 className="tasks__title">Tasks</h1>
        <h2 className="tasks__subtitle">daily</h2>
        <ul className="tasks__list">
          <li className="tasks__item">
            <div className="tasks__header">
              <Image
                src="/icons/arrow-right-curve.svg"
                width="36"
                height="36"
                alt=""
              />
              <h3 className="tasks__name">
                tell your friends about sovga mania
              </h3>
            </div>
            <div className="tasks__content">
              <div className="tasks__mission">
                <Image src="/icons/energy.svg" width="21" height="21" alt="" />
                <span className="tasks__submission">+75 energy</span>
              </div>
              <div className="tasks__mission">
                <Image src="/icons/lootbox.png" width="21" height="21" alt="" />
                <span className="tasks__submission">lootbox</span>
              </div>
              <button
                className="tasks__button tasks__button--dark tasks__mission--last"
                type="button"
                onClick={openReward}
              >
                LETS GO
              </button>
            </div>
          </li>
          <li className="tasks__item">
            <div className="tasks__header">
              <Image src="/icons/energy.svg" width="32" height="32" alt="" />
              <h3 className="tasks__name">DAILY BONUS</h3>
            </div>
            <div className="tasks__content">
              <div className="tasks__mission">
                <Image src="/icons/energy.svg" width="21" height="21" alt="" />
                <span className="tasks__submission">+100 energy</span>
              </div>
              <span className="tasks__submission tasks__mission--last">
                REWARD RECEIVED
              </span>
            </div>
          </li>
          <li className="tasks__item tasks__item--done">
            <div className="tasks__header">
              <Image src="/icons/brick.svg" width="36" height="36" alt="" />
              <h3 className="tasks__name">build 10 towers</h3>
            </div>
            <div className="tasks__content">
              <div className="tasks__mission">
                <Image src="/icons/energy.svg" width="21" height="21" alt="" />
                <span className="tasks__submission">+100 energy</span>
              </div>
              <Link
                href="/completed-task"
                className="tasks__button tasks__button--light tasks__mission--last"
                type="button"
              >
                claim
              </Link>
            </div>
          </li>
        </ul>
      </div>
      {isRewardOpen && <Reward onClose={closeReward} />}
    </div>
  );
}
