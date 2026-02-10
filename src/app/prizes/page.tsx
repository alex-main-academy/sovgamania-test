import Link from 'next/link';
import CompletedTaskCard from '../components/CompletedTaskCard/CompletedTaskCard';
import { prizesItems } from './prizesItem';
import './prizes.scss';

export default function Prizes() {
  return (
    <div className="page prizes">
      <div className="container">
        <h1 className="prizes__title">
          <span className="prizes__title--top">congratulations!</span>
          <span className="prizes__title--bottom">here is your prize.</span>
        </h1>
        <ul className="prizes__list">
          {prizesItems.map((item) => {
            return (
              <li key={item.id} className="prizes__item">
                <CompletedTaskCard item={item} />
              </li>
            );
          })}
        </ul>
      </div>
      <Link href="/shop" className="prizes__link">
        claim your prize
      </Link>
    </div>
  );
}
