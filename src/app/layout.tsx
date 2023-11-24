import { memo } from 'react';
import { Inter } from 'next/font/google';
import Header from '~/components/layout/Header';
import Footer from '~/components/layout/Footer';
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
        <Header />
          {children}
        <Footer />
      </body>
    </html>
  );
};

export default memo(RootLayout);