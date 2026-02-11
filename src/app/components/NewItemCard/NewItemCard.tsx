import './NewItemCard.scss'

interface newItemCard {
  id: number
  imageUrl: string
  label: string
  title: string
}

interface newItemCardProps {
  item: newItemCard
}

export default function NewItemCard({ item }: newItemCardProps) {
  return (
    <div className="new-item">
      <picture className="new-item__picture">
        <source srcSet={`${item.imageUrl}.webp`} type="image/webp" />
        <img
          className="new-item__picture-image"
          src={`${item.imageUrl}.png`}
          width="114"
          height="98"
          alt=""
        />
      </picture>
      <span className="new-item__label">{item.label}</span>
      <span className="new-item__title">{item.title}</span>
    </div>
  )
}
