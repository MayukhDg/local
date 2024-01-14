import { Inter, Space_Grotesk } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/footer';

import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const grotesk = Space_Grotesk({ subsets: ['latin'], 
weight:["300","400","500","600","700"]
})

export const metadata = {
  title: 'Get Local - A walking tour company from Kolkata',
  description: 'Get Local - A walking tour company from Kolkata',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
        </body>
    </html>
  )
}
