import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Script from 'next/script';
import './globals.scss';
import AppClient from './AppClient';

const NunitoFont = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Sovgamania',
  description: 'Telegram Gifts App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          id="telegram-sdk"
          src="https://telegram.org/js/telegram-web-app.js?59"
          strategy="beforeInteractive"
        />
      </head>
      <body className={`${NunitoFont.variable} antialiased`}>
        <AppClient>{children}</AppClient>
      </body>
    </html>
  );
}
