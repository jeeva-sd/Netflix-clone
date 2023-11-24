import { memo } from 'react';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '~/state/store/Provider';
import Header from '~/components/layout/Header';
import Footer from '~/components/layout/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Netflix India',
  description: 'A Landing page for Netflix India',
  icons: [
    {
        url: '/favicon.ico',
        type: 'image/png',
        sizes: '32x32',
        fetchPriority: 'auto',
    },
    {
        url: '/favicon.ico',
        type: 'image/png',
        sizes: '16x16',
        fetchPriority: 'auto',
    },
    {
        url: '/favicon.ico',
        type: 'image/png',
        sizes: '512x512',
        fetchPriority: 'auto',
    }
],
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <Providers>
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
};

export default memo(RootLayout);