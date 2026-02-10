import Image from 'next/image';
import Link from 'next/link';
import './GiveawayCard.scss';

interface giveawayItem {
  id: number;
  order: number;
  imageUrl: string;
  title: string;
  description?: string;
  points?: number;
  buttonLabel?: string;
  label?: string;
  participating?: string;
  type: string;
}

interface giveawayCardProps {
  item: giveawayItem;
  isLast: boolean;
}

export default function GiveawayCard({ item, isLast }: giveawayCardProps) {
  return (
    <div
      className={`giveaway-card giveaway-card--${item.type.toLowerCase()} ${isLast ? 'giveaway-card--last' : ''}`}
    >
      <span className="giveaway-card__order">{item.order}</span>
      <picture>
        <source srcSet={`${item.imageUrl}.webp`} type="image/webp" />
        <img
          className="giveaway-card__image"
          src={`${item.imageUrl}.png`}
          width="80"
          height="80"
          alt=""
        />
      </picture>
      {item.type === 'RECEIVED' && (
        <div className="giveaway-card__content giveaway-card__content--received">
          <h2 className="giveaway-card__title">{item.title}</h2>
          <span className="giveaway-card__received">RECEIVED</span>
        </div>
      )}
      {item.type === 'FUTURE' && (
        <div className="giveaway-card__content giveaway-card__content--future">
          <h2 className="giveaway-card__title">{item.title}</h2>
          <div className="giveaway-card__info">
            <span className="giveaway-card__description">
              {item.description}
            </span>
            <div className="giveaway-card__points">
              <Image src="/icons/point.svg" width="20" height="20" alt="" />
              <span className="giveaway-card__points-value">{item.points}</span>
            </div>
          </div>
        </div>
      )}
      {item.type === 'ENDED' && (
        <div className="giveaway-card__content giveaway-card__content--ended">
          <h2 className="giveaway-card__title">{item.title}</h2>
          <div className="giveaway-card__info">
            <span className="giveaway-card__description">
              {item.description}
            </span>
            <Link href="/completed-task" className="giveaway-card__button">
              {item.buttonLabel}
            </Link>
          </div>
        </div>
      )}
      {item.type === 'HOT' && (
        <>
          <span className="giveaway-card__label">{item.label}</span>
          <div className="giveaway-card__content giveaway-card__content--hot">
            <h2 className="giveaway-card__title">{item.title}</h2>
            <div className="giveaway-card__info">
              {item.description && (
                <span className="giveaway-card__description">
                  {item.description}
                </span>
              )}
              {item.points && (
                <div className="giveaway-card__points">
                  <Image src="/icons/point.svg" width="20" height="20" alt="" />
                  <span className="giveaway-card__points-value">
                    {item.points}
                  </span>
                </div>
              )}
              {item.buttonLabel && (
                <Link href="/" className="giveaway-card__button">
                  {item.buttonLabel}
                </Link>
              )}
              {item.participating && (
                <span className="giveaway-card__participating">
                  {item.participating}
                </span>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
