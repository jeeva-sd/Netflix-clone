import { memo } from 'react';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Netflix India',
  description: 'A Landing page for Netflix India',
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {

  return (
    <html lang='en'>
      <body className={inter.className}>
          {children}
      </body>
    </html>
  );
};

export default memo(RootLayout);