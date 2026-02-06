import Link from 'next/link';
import Image from 'next/image';
import './ShopCard.scss';

interface shopItem {
  id: number;
  title: string;
  value: string;
  label: string;
  imageUrl: string;
  isButtonIcon?: boolean;
}

interface shopCardProps {
  item: shopItem;
}

export default function ShopCard({ item }: shopCardProps) {
  return (
    <Link href="/lootbox" className="link card">
      <picture>
        <source src={`${item.imageUrl}.webp`} type="image/webp" />
        <img
          className="card__image"
          src={`${item.imageUrl}.png`}
          width="120"
          height="120"
          alt=""
        />
      </picture>
      <h3 className="card__title">{item.title}</h3>
      <span className="card__value">{item.value}</span>
      <button type="button" className="card__button">
        {item.isButtonIcon && (
          <Image src="/icons/star.svg" width="20" height="20" alt="" />
        )}
        {item.label}
      </button>
    </Link>
  );
}
