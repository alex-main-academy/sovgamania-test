'use client';

import { Telegram } from 'telegram-web-app';

export const telegramWebApp: Telegram['WebApp'] | null =
  typeof window !== 'undefined' && window.Telegram?.WebApp
    ? window.Telegram.WebApp
    : null;
