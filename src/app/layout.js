import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import BootstrapClient from '@/app/_components/BootstrapClient.js';
import Navbar from '@/app/_components/navbar/Navbar';
import Footer from '@/app/_components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Terra Bella Landscaping - Landscaping Services',
  description:
    'Terra Bella Landscaping offers professional landscaping services including sodding, planting, interlocking, retaining wall construction, deck & fence installation, and french drainage in Richmond Hill, Newmarket, Aurora, Vaughan, Markham, GTA, North York, Toronto, King, Bradford, East Gwillimbury, West Gwillimbury, Stouffville, Ontario, Canada. Contact us for a free quote.',
  keywords:
    'Terra Bella Landscaping, Terrabella Landscaping, landscaping, Richmond Hill, Newmarket, Aurora, Vaughan, Markham, GTA, North York, Toronto, King, Bradford, East Gwillimbury, West Gwillimbury, Stouffville, Ontario, Canada, sodding, planting, interlocking, retaining wall, deck, fence, french drainage',
  author: 'Terra Bella Landscaping',
  robots: 'index,follow',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={'d-flex flex-column min-vh-100 ' + inter.className}>
        <Navbar />
        {children}
        <Footer />
        <BootstrapClient />
      </body>
    </html>
  );
}
