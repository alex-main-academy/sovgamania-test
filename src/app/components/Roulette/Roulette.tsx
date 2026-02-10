'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import './Roulette.scss';

type RouletteItem = {
  id: number;
  label: string;
};

const ITEMS: RouletteItem[] = [
  { id: 1, label: '10' },
  { id: 2, label: '15' },
  { id: 3, label: '20' },
  { id: 4, label: '100' },
  { id: 5, label: '1000' },
  // 👉 можешь добавлять / убирать айтемы — всё будет работать
];

const LOOPS = 20;
const DURATION = 10;

export default function Roulette() {
  const trackRef = useRef<HTMLDivElement>(null);

  // индекс победного элемента в длинной ленте
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const stopIndexRef = useRef<number | null>(null);

  // длинная лента
  const loopedItems = Array.from({ length: LOOPS }, () => ITEMS).flat();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const items = track.children;
    if (items.length < 2) return;

    const firstItem = items[0] as HTMLElement;
    const secondItem = items[1] as HTMLElement;

    // 🔥 реальный шаг между айтемами (учитывает margin / gap)
    const itemStep = secondItem.offsetLeft - firstItem.offsetLeft;

    const container = track.parentElement as HTMLElement;
    const containerWidth = container.getBoundingClientRect().width;

    // случайный победитель из уникальных айтемов
    const winIndex = Math.floor(Math.random() * ITEMS.length);

    // реальный индекс в длинной ленте
    const stopIndex = ITEMS.length * (LOOPS - 2) + winIndex;
    stopIndexRef.current = stopIndex;

    const itemWidth = firstItem.getBoundingClientRect().width;
    const centerOffset = containerWidth / 2 - itemWidth / 2;

    const translateX = -(stopIndex * itemStep) + centerOffset;

    const onTransitionEnd = () => {
      if (stopIndexRef.current !== null) {
        setActiveIndex(stopIndexRef.current);
      }
      track.removeEventListener('transitionend', onTransitionEnd);
    };

    track.addEventListener('transitionend', onTransitionEnd);

    track.style.transition = `transform ${DURATION}s cubic-bezier(0.1, 0.7, 0.1, 1)`;
    track.style.transform = `translateX(${translateX}px)`;

    return () => {
      track.removeEventListener('transitionend', onTransitionEnd);
    };
  }, []);

  return (
    <div className="roulette">
      <div className="roulette__window">
        <div className="roulette__track" ref={trackRef}>
          {loopedItems.map((item, i) => (
            <div
              className={`roulette__item ${
                activeIndex === i ? 'is-active' : ''
              }`}
              key={`${item.id}-${i}`}
            >
              <div className="roulette__wrapper">
                <Image
                  className="roulette__image"
                  src="/icons/energy.svg"
                  width={105}
                  height={105}
                  alt=""
                />
                <span className="roulette__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
