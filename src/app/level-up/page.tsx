import { levelUpNewItems } from './levelUpNewItems'
import Link from 'next/link'
import NewItemCard from '../components/NewItemCard/NewItemCard'
import './level-up.scss'

export default function LevelUp() {
  return (
    <div className="page level-up">
      <h1 className="level-up__title">
        level <br /> up!
      </h1>
      <div className="level-up__level">
        35
        <span className="level-up__level-label">lvl</span>
      </div>
      <h2 className="level-up__subtitle">unlocked</h2>
      <span className="level-up__label">3 new items</span>
      <ul className="level-up__list">
        {levelUpNewItems.map((item) => (
          <li key={item.id}>
            <NewItemCard item={item} />
          </li>
        ))}
      </ul>
      <Link href="/game" className="level-up__link">
        tap to continue
      </Link>
    </div>
  )
}
