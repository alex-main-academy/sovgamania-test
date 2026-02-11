'use client'

import { useState, useEffect } from 'react'
import { BuildItems } from './BuildItems'
import PlayerStats from '@/app/components/PlayerStats/PlayerStats'
import Image from 'next/image'
import BuildCard from '@/app/components/BuildCard/BuildCard'
import './Build.scss'

interface buildProps {
  onClose: () => void
}

export default function Build({ onClose }: buildProps) {
  const [active, setActive] = useState('residental')
  const [showTile, setShowTile] = useState(false)

  const filteredItems = BuildItems.filter((item) => item.type === active)

  const handleLockedClick = (item: (typeof BuildItems)[number]) => {
    if (item.isLocked) {
      setShowTile(true)
    }
  }

  useEffect(() => {
    if (!showTile) return

    const timer = setTimeout(() => {
      setShowTile(false)
    }, 4000)

    return () => clearTimeout(timer)
  }, [showTile])

  return (
    <div className="overlay">
      <div className="build container">
        <div className="build__content">
          <button onClick={onClose} className="build__close">
            <Image src="/icons/close.svg" width="12" height="12" alt="" />
          </button>
          <div className="build__header">
            <PlayerStats />
            <span className="build__title">Жилые здания (24)</span>
          </div>
          <ul className="build__list">
            {filteredItems.map((item) => (
              <li key={item.id} className="build__item">
                <BuildCard item={item} onLockedClick={handleLockedClick} />
              </li>
            ))}
          </ul>
          <div className={`build-tile ${showTile ? 'active' : ''}`}>
            Вам нужно достичь уровня - 24
          </div>
        </div>
        <div className="build-menu">
          <button
            className={`build-menu__button ${active === 'residental' ? 'active' : ''}`}
            onClick={() => setActive('residental')}
          >
            <Image
              className="build-menu__icon"
              src="/icons/residental.png"
              width={34}
              height={34}
              alt=""
            />
            <span className="build-menu__label">Жилые</span>
          </button>

          <button
            className={`build-menu__button ${active === 'business' ? 'active' : ''}`}
            onClick={() => setActive('business')}
          >
            <Image
              className="build-menu__icon"
              src="/icons/business.png"
              width={34}
              height={34}
              alt=""
            />
            <span className="build-menu__label">Бизнес</span>
          </button>

          <button
            className={`build-menu__button ${active === 'decor' ? 'active' : ''}`}
            onClick={() => setActive('decor')}
          >
            <Image
              className="build-menu__icon"
              src="/icons/decor.png"
              width={34}
              height={34}
              alt=""
            />
            <span className="build-menu__label">Декор</span>
          </button>
        </div>
      </div>
    </div>
  )
}
