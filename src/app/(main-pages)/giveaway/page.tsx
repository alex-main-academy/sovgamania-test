import { giveawayItems } from './giveawayItems';
import Countdown from '@/app/components/Countdown/Countdown';
import GiveawayCard from '@/app/components/GiveawayCard/GiveawayCard';
import Image from 'next/image';
import './giveaway.scss';

export default function Giveaway() {
  return (
    <div className="page giveaway">
      <div className="giveaway__animation">
        <Image
          className="giveaway__animation-image"
          src="/images/light-background-animated.svg"
          width="440"
          height="350"
          alt=""
        />
      </div>
      <div className="giveaway__header">
        <h1 className="giveaway__title">
          yangi level
          <span className="giveaway__title--big">chances x3</span>
        </h1>
        <Countdown target="2026-03-01T12:00:00" />
      </div>
      <div className="giveaway__gift">
        <div className="container">
          <ul className="giveaway__list">
            {giveawayItems.map((item, index) => (
              <li key={item.id} className="giveaway__item">
                <GiveawayCard
                  item={item}
                  isLast={index === giveawayItems.length - 1}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="giveaway__participants">
        <span className="giveaway__name">B</span>
        <span className="giveaway__description">
          I PARTICIPATE IN GIVEAWAYS
        </span>
        <span className="giveaway__members">31 / 46</span>
      </div>
    </div>
  );
}
