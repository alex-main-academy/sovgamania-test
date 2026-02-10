'use client';

import { useEffect } from 'react';
import { telegramWebApp } from '@/shared/utils/telegramWebApp';

export function useTelegramInit() {
  useEffect(() => {
    if (!telegramWebApp) return;

    telegramWebApp.ready();
    telegramWebApp.expand();

    const version = parseFloat(telegramWebApp.version);

    if (version >= 6.1 && telegramWebApp.requestFullscreen) {
      telegramWebApp.requestFullscreen();
    }
  }, []);
}
