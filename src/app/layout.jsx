import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ToastContainer } from 'react-toastify';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'SmartMart | Online Product Catalog',
  description: 'Discover smart shopping with SmartMart',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="grow">
          {children}
          <ToastContainer />
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
