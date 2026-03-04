'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing & Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/reviews', label: 'Reviews' },
    { href: '/about', label: 'About & Contact' },
    { href: '/quote', label: 'Get a Quote' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-pro-dark text-white py-2 px-4 sm:px-0">
        <div className="container flex flex-col sm:flex-row justify-between text-xs sm:text-sm gap-2 sm:gap-0">
          <div className="flex items-center gap-2">
            <span className="text-pro-red">📞</span>
            <a href="tel:2144895107" className="hover:text-pro-red transition-colors">(214) 489-5107</a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pro-red">⏰</span>
            <span>Mon-Sat 10AM-5PM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-pro-red">📍</span>
            <span>Anna, TX – Mobile Service Available</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c5d1f976c4-da043ecf6f118c0f43eb.png"
            alt="Pro Car Security high-end vehicle"
            width={50}
            height={50}
            className="w-12 h-12 rounded-full"
            unoptimized
          />
          <span className="font-bold text-xl text-pro-blue hidden sm:inline">Pro Car Security & Audio</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-pro-dark hover:text-pro-blue transition-colors font-medium text-sm"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/quote" className="btn-primary">
            Call Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-pro-dark hover:text-pro-blue"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="lg:hidden bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-pro-dark hover:text-pro-blue transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:2144895107" className="btn-primary block text-center">
              Call Now
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
