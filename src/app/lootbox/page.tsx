import { lootboxItem } from './lootboxItem';
import Image from 'next/image';
import Link from 'next/link';
import './lootbox.scss';
import LootboxCard from '../components/LootboxCard/LootboxCard';

export default function Lootbox() {
  return (
    <div className="page lootbox">
      <div className="container">
        <picture>
          <source srcSet="/images/shared/lootbox.webp" />
          <img
            className="lootbox__logo"
            src="/images/shared/lootbox.png"
            width="202"
            height="202"
            alt=""
          />
        </picture>
        <div className="lootbox__header">
          <h1 className="lootbox__title">lucky giftbox</h1>
          <span className="lootbox__type">rarity: epic</span>
          <span className="lootbox__value">1 pcs</span>
        </div>
        <ul className="lootbox__list">
          {lootboxItem.map((item) => (
            <LootboxCard key={item.id} item={item} />
          ))}
        </ul>
        <Link href="/shop" className="lootbox__link">
          OPEN FOR <Image src="/icons/star.svg" width="20" height="20" alt="" />
          50
        </Link>
      </div>
    </div>
  );
}
