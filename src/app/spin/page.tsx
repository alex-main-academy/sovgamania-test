import Link from 'next/link';
import Roulette from '../components/Roulette/Roulette';
import './spin.scss';

export default function Spin() {
  return (
    <div className="page spin">
      <div className="container">
        <picture>
          <source srcSet="/images/shared/lootbox.webp" type="image/webp" />
          <img
            className="spin__image"
            src="/images/shared/lootbox.png"
            width="187"
            height="187"
            alt=""
          />
        </picture>
        <div className="spin__info">
          <h1 className="spin__title">energetic giftbox</h1>
          <span className="spin__description">
            you can never have too much energy, this box is made to give you a
            generous boost: <br />{' '}
            <span className="spin__description--value">1</span>
            from 3 pcs.
          </span>
        </div>
      </div>
      <Roulette />
      <Link href="/prizes" className="spin__link">
        open all
      </Link>
    </div>
  );
}
