import Image from 'next/image';
import './LootboxCard.scss';

interface lootboxItem {
  id: number;
  imageUrl: string;
  title: string[];
  value: number;
  type: string;
  isButtonIcon?: boolean;
}

interface lootboxCardProps {
  item: lootboxItem;
}

export default function LootboxCard({ item }: lootboxCardProps) {
  return (
    <li className={`loot-card loot-card--${item.type}`}>
      <Image
        className="loot-card__image"
        src={item.imageUrl}
        width="60"
        height="60"
        alt=""
      />
      <h3 className="loot-card__title">
        {item.title[0]}
        <span className="loot-card__title--bottom">{item.title[1]}</span>
      </h3>
      <span className="loot-card__label">{item.value}</span>
    </li>
  );
}
