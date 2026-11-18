import type { Metadata } from 'next'
import { Archivo, Archivo_Black, Barlow_Semi_Condensed } from 'next/font/google'
import './globals.css'
import './landing-theme.css'
import 'leaflet/dist/leaflet.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import MobileCtaBar from '@/components/MobileCtaBar'

const archivo = Archivo({
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
})

const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo-black',
  display: 'swap',
})

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-barlow',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Pro Car Security & Audio | Mobile Install | DFW & North Texas',
  description:
    'Mobile car, motorcycle & marine audio, security, and LED installs across DFW & North Texas. Clear price ranges and 50-mile service area. Call or text (214) 489-5107.',
  keywords:
    'car audio, car security, LED lighting, marine audio, motorcycle audio, remote start, dash cam, DFW, Dallas Fort Worth, McKinney TX, Prosper TX, North Texas',
  openGraph: {
    title: 'Pro Car Security & Audio',
    description: 'Mobile pro installs across North Texas — call or text to book.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${archivo.variable} ${archivoBlack.variable} ${barlow.variable}`}>
      <body className={`${archivo.className} landing-body`}>
        <div className="bg-shell" aria-hidden />
        <div className="page">
          <Header />
          {children}
          <Footer />
        </div>
        <MobileCtaBar />
      </body>
    </html>
  )
}