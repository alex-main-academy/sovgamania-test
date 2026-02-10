'use client';

import { useTelegramInit } from '@/shared/hooks/useTelegramInit';

export default function AppClient({ children }: { children: React.ReactNode }) {
  useTelegramInit();
  return <>{children}</>;
}
