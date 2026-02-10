'use client';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import './Countdown.scss';

dayjs.extend(duration);

type CountdownTarget = string | Date | number;

interface CountdownProps {
  target: CountdownTarget;
}

type Digits = {
  days: string[];
  hours: string[];
  mins: string[];
  secs: string[];
};

export default function Countdown({ target }: CountdownProps) {
  const [digits, setDigits] = useState<Digits>({
    days: ['0', '0'],
    hours: ['0', '0'],
    mins: ['0', '0'],
    secs: ['0', '0'],
  });

  useEffect(() => {
    const end = dayjs(target);

    const tick = () => {
      const diff = dayjs.duration(end.diff(dayjs()));

      if (diff.asMilliseconds() <= 0) return;

      const split = (value: number) => String(value).padStart(2, '0').split('');

      setDigits({
        days: split(diff.days()),
        hours: split(diff.hours()),
        mins: split(diff.minutes()),
        secs: split(diff.seconds()),
      });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [target]);

  return (
    <div className="countdown">
      <div className="countdown__wrapper">
        <div className="countdown__block countdown__block--days">
          {digits.days.map((d, i) => (
            <span key={i} className={`countdown__item countdown__item--${i}`}>
              {d}
            </span>
          ))}
        </div>
        <span className="countdown__period">DAYS</span>
      </div>
      <div className="countdown__separator">:</div>
      <div className="countdown__wrapper">
        <div className="countdown__block countdown__block--hours">
          {digits.hours.map((d, i) => (
            <span key={i} className={`countdown__item countdown__item--${i}`}>
              {d}
            </span>
          ))}
        </div>
        <span className="countdown__period">HOURS</span>
      </div>
      <div className="countdown__separator">:</div>
      <div className="countdown__wrapper">
        <div className="countdown__block countdown__block--minutes">
          {digits.mins.map((d, i) => (
            <span key={i} className={`countdown__item countdown__item--${i}`}>
              {d}
            </span>
          ))}
        </div>
        <span className="countdown__period">MINUTES</span>
      </div>
    </div>
  );
}
