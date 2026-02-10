import { leadersItems } from './leadersItems';
import Image from 'next/image';
import './leaders.scss';
import LeaderCard from '@/app/components/LeaderCard/LeaderCard';

export default function Leaders() {
  return (
    <div className="page leaders">
      <div className="container">
        <h1 className="leaders__title">leaders</h1>
        <div className="winners">
          {leadersItems.map((item) => (
            <div className="winners__block" key={item.id}>
              {item.place === 1 && (
                <Image
                  className="winners__crown"
                  src="/images/leaders/crown.svg"
                  width="84"
                  height="54"
                  alt=""
                />
              )}
              <div className="winners__avatar">
                <div className="winners__place">{item.place}</div>
                <picture>
                  <source
                    srcSet={`${item.avatarImageUrl}.webp`}
                    type="image/webp"
                  />
                  <img
                    className="winners__avatar-image"
                    src={`${item.avatarImageUrl}.jpg`}
                    width="130"
                    height="130"
                    alt=""
                  />
                </picture>
              </div>
              <span className="winners__name">{item.name}</span>
              <span className="winners__city">{item.city}</span>
              <div className="winners__point">
                <Image src="/icons/point.svg" width="14" height="14" alt="" />
                <span className="winners__point-value">{item.points}</span>
              </div>
            </div>
          ))}
        </div>
        <ul className="leaders__list">
          {leadersItems.map((item) => (
            <li key={item.id}>
              <LeaderCard item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
