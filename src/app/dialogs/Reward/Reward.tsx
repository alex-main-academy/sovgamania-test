'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import './Reward.scss'
import Button from '@/app/components/Button/Button'

interface rewardProps {
  onClose: () => void
}

export default function Reward({ onClose }: rewardProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsOpen(true)
    })
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(onClose, 250)
  }

  return (
    <div
      className={`overlay ${isOpen ? 'overlay--show' : ''}`}
      onClick={handleClose}
    >
      <div
        className={`reward ${isOpen ? 'reward--show' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="reward__close" onClick={handleClose}>
          <Image src="/icons/close.svg" width={12} height={12} alt="" />
        </button>

        <picture>
          <source srcSet="/images/shared/lootbox.webp" />
          <img
            className="reward__image"
            src="/images/shared/lootbox.png"
            width="131"
            height="131"
            alt=""
          />
        </picture>

        <h1 className="reward__title title">OPEN 150 ANY GIFTBOXES</h1>
        <p className="reward__description">
          Each giftbox you open brings rewards and gets you closer to even
          bigger prizes!
        </p>

        <div className="reward__block">
          <h2 className="reward__subtitle">reward</h2>
          <ul className="reward__list">
            <li className="reward__item">
              <Image src="/icons/energy.svg" width={29} height={29} alt="" />
              <span className="reward__name">+150 energy</span>
            </li>
            <li className="reward__item">
              <Image src="/icons/lootbox.png" width={29} height={29} alt="" />
              <span className="reward__name">lootbox</span>
            </li>
          </ul>
        </div>

        <div className="reward__buttons">
          <Button label="lets go" type="primary" />
          <Button label="check" type="secondary" />
        </div>
      </div>
    </div>
  )
}
