'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import './Menu.scss';

export default function Menu() {
  const pathname = usePathname();
  const normalizedPathname = pathname === '/' ? '/game' : pathname;
  const navRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  const menuItems = [
    { href: '/game', label: 'game', icon: '/images/menu/game' },
    { href: '/tasks', label: 'tasks', icon: '/images/menu/tasks' },
    { href: '/shop', label: 'shop', icon: '/images/menu/shop' },
    { href: '/presents', label: 'presents', icon: '/images/menu/presents' },
    { href: '/leaders', label: 'leaders', icon: '/images/menu/leaders' },
    { href: '/friends', label: 'friends', icon: '/images/menu/friends' },
  ];

  useEffect(() => {
    const navIndicatorWidth = 26;
    const nav = navRef.current;
    if (!nav) return;

    const activeItem = nav.querySelector<HTMLLIElement>('[data-active="true"]');
    if (!activeItem) return;

    const navRect = nav.getBoundingClientRect();
    const itemRect = activeItem.getBoundingClientRect();

    const x = itemRect.left - navRect.left - navIndicatorWidth / 2;

    if (isFirstRender.current) {
      nav.style.setProperty('--indicator-transition', 'none');
      isFirstRender.current = false;
    } else {
      nav.style.setProperty(
        '--indicator-transition',
        'left 0.3s ease, width 0.3s ease',
      );
    }

    nav.style.setProperty('--indicator-x', `${x}px`);
    nav.style.setProperty(
      '--indicator-width',
      `${itemRect.width + navIndicatorWidth}px`,
    );
  }, [normalizedPathname]);

  return (
    <nav className="navigation" ref={navRef}>
      <ul className="navigation__list">
        {menuItems.map((item) => {
          const isActive = normalizedPathname === item.href;

          return (
            <li
              key={item.href}
              className="navigation__item"
              data-active={isActive}
            >
              <Link href={item.href} className="navigation__link">
                <picture>
                  <source srcSet={`${item.icon}.webp`} type="image/webp" />
                  <img src={`${item.icon}.png`} width={38} height={38} alt="" />
                </picture>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
