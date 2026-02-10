import Image from 'next/image';
import './CompletedTaskCard.scss';

interface completedCardItems {
  id: number;
  imageUrl: string;
  title: string[];
  label?: string;
}

interface completedCardProps {
  item: completedCardItems;
}

export default function CompletedTaskCard({ item }: completedCardProps) {
  return (
    <div className="completed-card">
      <div className="completed-card__wrapper">
        <Image
          className="completed-card__image"
          src={item.imageUrl}
          width="95"
          height="95"
          alt=""
        />
        {item.label && (
          <span className="completed-card__label">{item.label}</span>
        )}
      </div>
      <span className="completed-card__title">
        {item.title[0]}
        <span className="completed-card__title--bottom">{item.title[1]}</span>
      </span>
    </div>
  );
}
