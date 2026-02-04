import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Script from 'next/script';
import Menu from './components/Menu/Menu';
import './globals.scss';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script
        id="telegram-sdk"
        src="https://telegram.org/js/telegram-web-app.js?59"
      />
      <body className={`${NunitoFont.variable} antialiased `}>
        {children}
        <Menu />
      </body>
    </html>
  );
}
