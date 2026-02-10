import Image from 'next/image';
import './LeaderCard.scss';

interface leaderItem {
  id: number;
  place: number;
  avatarImageUrl: string;
  coinValue: number;
  name: string;
  nameShort: string;
  city: string;
  points: number;
}

interface leaderCardProps {
  item: leaderItem;
}

export default function LeaderCard({ item }: leaderCardProps) {
  return (
    <div className="leader-card">
      <span className="leader-card__coins">{item.coinValue}</span>
      <span className="leader-card__name">{item.nameShort}</span>
      <span className="leader-card__city">{item.city}</span>
      <div className="leader-card__points">
        <Image src="/icons/point.svg" width="22" height="22" alt="" />
        <span className="leader-card__points-value">{item.points}</span>
      </div>
    </div>
  );
}
