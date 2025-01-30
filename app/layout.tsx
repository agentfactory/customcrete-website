import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { DiscountPopup } from '@/components/discount-popup';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Custom Crete Ltd - Professional Concrete Services in Belleville',
  description: 'Custom Crete Ltd provides professional concrete services in Belleville, ON. Get 10% off your next project and a free quote today!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head />
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <DiscountPopup />
        <Toaster />
      </body>
    </html>
  );
}