import Image from 'next/image'
import ShopCard from '../../components/ShopCard/ShopCard'
import Button from '../../components/Button/Button'
import './presents.scss'

export default function Presents() {
  const presentsGiftItem = [
    {
      id: 1,
      title: 'lucky giftbox',
      value: '1 pcs',
      label: '2m sõm',
      imageUrl: '/images/shop/lucky-giftbox',
    },
  ]

  return (
    <div className="page presents">
      <h1 className="presents__title">presents</h1>
      <div className="presents__block">
        <h2 className="presents__subtitle">gift boxes</h2>
        <ul className="presents__list">
          {presentsGiftItem.map((item) => (
            <li key={item.id}>
              <ShopCard item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="container">
        <div className="coupon">
          <h2 className="coupon__title">coupons</h2>
          <div className="coupon__block">
            <Image
              className="coupon__image"
              src="/icons/star.svg"
              width="80"
              height="80"
              alt=""
            />
            <div className="coupon__content">
              <span className="coupon__name">
                kinopoisk - free for up to a year
              </span>
              <button className="coupon__button">activate</button>
            </div>
          </div>
        </div>
        <div className="promo">
          <picture>
            <source srcSet="/images/presents/promo.webp" type="image/webp" />
            <img
              className="promo__image"
              src="/images/presents/promo.png"
              width="158"
              height="116"
              alt=""
            />
          </picture>
          <h2 className="promo__title">enter promo code</h2>
          <form className="promo__form">
            <input className="promo__input" type="number" placeholder="code" />
            <Button label="apply" type="primary" />
          </form>
        </div>
      </div>
    </div>
  )
}
