import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pro Car Security & Audio | Car Audio, Security & LED Lighting – Anna, TX',
  description: 'Professional car, motorcycle & marine audio installations, advanced security systems, and custom LED lighting. Serving Anna, McKinney, Prosper, Celina & surrounding North Texas. Call or text (214) 489-5107.',
  keywords: 'car audio, car security, LED lighting, marine audio, motorcycle audio, remote start, dash cam, GPS tracking, Anna TX, McKinney TX, Prosper TX, Celina TX, North Texas',
  openGraph: {
    title: 'Pro Car Security & Audio',
    description: 'Car, motorcycle & marine audio, security systems, and custom LED lighting in Anna, TX.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
