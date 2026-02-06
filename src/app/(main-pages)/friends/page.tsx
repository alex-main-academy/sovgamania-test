import Link from 'next/link';
import './friends.scss';
import Image from 'next/image';
import Button from '../../components/Button/Button';

export default function Friends() {
  return (
    <div className="page friends">
      <div className="container friends__container">
        <h1 className="friends__title">friends</h1>
        <div className="friends__content">
          <picture>
            <source srcSet="/images/shared/lootbox.webp" type="image/webp" />
            <img
              className="friends__image"
              src="/images/shared/lootbox.png"
              width="187"
              height="187"
              alt=""
            />
          </picture>
          <span className="friends__subtitle">friendbox</span>
          <span className="friends__description">
            for each friend who reaches level 15 and claims the reward
          </span>
          <Link href="" className="friends__link">
            what’s inside
            <Image src="/icons/arrow-right.svg" width="5" height="10" alt="" />
          </Link>
          <div className="friends__additional">
            <p className="friends__additional-title">AND ALSO:</p>
            <ul className="friends__additional-list">
              <li className="friends__additional-item">
                <div className="friends__additional-avatar"></div>
                <span className="friends__additional-description">
                  MORE CELLS ON THE PLAYING FIELD
                </span>
              </li>
              <li className="friends__additional-item">
                <div className="friends__additional-avatar"></div>
                <span className="friends__additional-description">
                  INCREASE IN ENERGY LIMIT
                </span>
              </li>
            </ul>
          </div>
          <div className="friends__invite">
            <Button type="primary" label="invite a friend" />
            <button className="friends__copy">
              <Image src="/icons/copy.svg" width="24" height="24" alt="" />
            </button>
          </div>
        </div>

        <div className="bonus">
          <h2 className="bonus__title">bonus for 15 lvl</h2>
          <ul className="bonus__list">
            <li className="bonus__item">
              <div className="user">
                <div className="user__avatar">B</div>
                <div className="user__info">
                  <span className="user__name">Это наш админ</span>
                  <div className="user__rate">
                    <span className="user__level">8 LVL</span>
                    <span className="user__stars">
                      <Image
                        src="/icons/star.png"
                        width="14"
                        height="14"
                        alt=""
                      />
                      3590
                    </span>
                  </div>
                </div>
              </div>
              <div className="bonus__locked">
                <span className="bonus__label">
                  <Image src="/icons/lock.svg" width="14" height="14" alt="" />
                </span>
                <picture>
                  <source
                    srcSet="/images/shared/lootbox.webp"
                    type="image/webp"
                  />
                  <img
                    src="/images/shared/lootbox.png"
                    width="48"
                    height="48"
                    alt=""
                  />
                </picture>
              </div>
            </li>
            <li className="bonus__item bonus__item--active">
              <div className="user">
                <div className="user__avatar">B</div>
                <div className="user__info">
                  <span className="user__name">BF</span>
                  <div className="user__rate">
                    <span className="user__level">126 LVL</span>
                    <span className="user__stars">
                      <Image
                        src="/icons/star.png"
                        width="14"
                        height="14"
                        alt=""
                      />
                      171440
                    </span>
                  </div>
                </div>
              </div>
              <button className="bonus__button">take</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
