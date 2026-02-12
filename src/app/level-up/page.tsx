'use client'

import { useEffect, useRef } from 'react'
import { levelUpNewItems } from './levelUpNewItems'
import Link from 'next/link'
import NewItemCard from '../components/NewItemCard/NewItemCard'
import './level-up.scss'

export default function LevelUp() {
  const listRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    const el = listRef.current
    if (!el) return

    const track = el.querySelector<HTMLDivElement>('.level-up__track')
    if (!track) return

    let raf: number
    let direction = 1
    let userInteracting = false
    let pos = el.scrollLeft

    const SPEED = 0.35

    const max = () => track.scrollWidth - el.clientWidth

    const animate = () => {
      if (!userInteracting) {
        pos += SPEED * direction

        if (pos >= max()) {
          pos = max()
          direction = -1
        }

        if (pos <= 0) {
          pos = 0
          direction = 1
        }

        el.scrollLeft = pos
      }

      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)

    const start = () => {
      userInteracting = true
    }

    const end = () => {
      pos = el.scrollLeft
      userInteracting = false
    }

    const onScroll = () => {
      if (userInteracting) {
        pos = el.scrollLeft
      }
    }

    el.addEventListener('touchstart', start, { passive: true })
    el.addEventListener('mousedown', start)

    el.addEventListener('touchend', end)
    el.addEventListener('mouseup', end)
    el.addEventListener('mouseleave', end)

    el.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener('touchstart', start)
      el.removeEventListener('mousedown', start)
      el.removeEventListener('touchend', end)
      el.removeEventListener('mouseup', end)
      el.removeEventListener('mouseleave', end)
      el.removeEventListener('scroll', onScroll)
    }
  }, [])

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
      <ul className="level-up__list" ref={listRef}>
        <div className="level-up__track">
          {levelUpNewItems.map((item) => (
            <li key={item.id}>
              <NewItemCard item={item} />
            </li>
          ))}
        </div>
      </ul>
      <Link href="/game" className="level-up__link">
        tap to continue
      </Link>
    </div>
  )
}
