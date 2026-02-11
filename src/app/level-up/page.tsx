'use client'

import { useEffect, useRef } from 'react'
import { levelUpNewItems } from './levelUpNewItems'
import Link from 'next/link'
import NewItemCard from '../components/NewItemCard/NewItemCard'
import './level-up.scss'

export default function LevelUp() {
  const listRef = useRef<HTMLUListElement | null>(null)

  useEffect(() => {
    let programmaticScroll = false
    const el = listRef.current
    if (!el) return

    let animationId: number
    let direction = 1
    let userInteracting = false
    let resumeTimeout: ReturnType<typeof setTimeout>

    const SPEED = 0.3

    const maxScroll = () => el.scrollWidth - el.clientWidth

    const animate = () => {
      if (!userInteracting) {
        programmaticScroll = true
        el.scrollLeft += SPEED * direction

        if (el.scrollLeft >= maxScroll()) {
          direction = -1
        }

        if (el.scrollLeft <= 0) {
          direction = 1
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    const stopAuto = () => {
      if (programmaticScroll) {
        programmaticScroll = false
        return
      }

      userInteracting = true
      clearTimeout(resumeTimeout)
    }

    const resumeAuto = () => {
      clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => {
        userInteracting = false
      }, 1200)
    }

    el.addEventListener('touchstart', stopAuto, { passive: true })
    el.addEventListener('mousedown', stopAuto)
    el.addEventListener('touchend', resumeAuto)
    el.addEventListener('mouseup', resumeAuto)
    el.addEventListener('mouseleave', resumeAuto)
    el.addEventListener('scroll', stopAuto, { passive: true })
    el.addEventListener('touchmove', stopAuto, { passive: true })

    return () => {
      cancelAnimationFrame(animationId)
      el.removeEventListener('touchstart', stopAuto)
      el.removeEventListener('mousedown', stopAuto)
      el.removeEventListener('touchend', resumeAuto)
      el.removeEventListener('mouseup', resumeAuto)
      el.removeEventListener('mouseleave', resumeAuto)
      el.removeEventListener('scroll', stopAuto)
      el.removeEventListener('touchmove', stopAuto)
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
