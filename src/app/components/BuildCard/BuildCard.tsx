import Image from 'next/image'
import './BuildCard.scss'

interface buildItem {
  id: number
  imageUrl: string
  size: string
  title: string
  price: string
  type: string
  isLocked: boolean
}

interface buildCardProps {
  item: buildItem
  onLockedClick: (item: buildItem) => void
}

export default function BuildCard({ item, onLockedClick }: buildCardProps) {
  return (
    <div className={`build-card ${item.isLocked ? 'build-card--locked' : ''}`}>
      <div className="build-card__content">
        <div className="build-card__wrapper">
          <picture>
            <source srcSet={`${item.imageUrl}.webp`} type="image/webp" />
            <img
              className="build-card__image"
              src={`${item.imageUrl}.png`}
              width="90"
              height="90"
              alt=""
            />
          </picture>
        </div>
        <div className="build-card__info">
          <span className="build-card__size">{item.size}</span>
          <span className="build-card__title">{item.title}</span>
        </div>
      </div>
      <button
        onClick={() => onLockedClick(item)}
        className="build-card__button"
      >
        <Image src="/icons/coin.png" width="16" height="19" alt="" />
        <span className="build-card__price">{item.price}</span>
      </button>
    </div>
  )
}
