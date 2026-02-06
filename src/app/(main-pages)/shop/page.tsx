import { ShopPopularItems, ShopStarSetItems } from './shopItems';
import ShopCard from '../../components/ShopCard/ShopCard';
import './shop.scss';

export default function Shop() {
  return (
    <div className="page shop">
      <h1 className="title shop__title">bazar</h1>
      <div className="shop__content">
        <div className="shop__block">
          <h2 className="shop__subtitle">popular</h2>
          <ul className="shop__list">
            {ShopPopularItems.map((item) => (
              <li key={item.id}>
                <ShopCard item={item} />
              </li>
            ))}
          </ul>
        </div>
        <div className="shop__block">
          <h2 className="shop__subtitle">star sets</h2>
          <ul className="shop__list">
            {ShopStarSetItems.map((item) => (
              <li key={item.id}>
                <ShopCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
