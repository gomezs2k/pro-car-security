'use client'

import { useState } from 'react'
import Image from 'next/image'

const BASE = '/brand/review_images/pro_car_security'

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = ['all', 'audio', 'dashCams', 'alarms']

  const images = [
    // ── Audio Installs ──────────────────────────────────────────────────
    {
      id: 1,
      category: 'audio',
      image: `${BASE}/review_01.jpg`,
      alt: 'Dual subwoofer box installed in trunk — custom audio install',
    },
    {
      id: 2,
      category: 'audio',
      image: `${BASE}/review_02.jpg`,
      alt: 'Kicker 1600W amp and wiring kit — ready for install',
    },
    {
      id: 3,
      category: 'audio',
      image: `${BASE}/review_03.jpg`,
      alt: 'Kicker dual 10" subwoofer box in SUV cargo area',
    },
    {
      id: 4,
      category: 'audio',
      image: `${BASE}/review_04.jpg`,
      alt: 'Rockford Fosgate amplifier installed under seat with wiring',
    },
    {
      id: 5,
      category: 'audio',
      image: `${BASE}/review_05.jpg`,
      alt: 'Customer F-150 after audio upgrade',
    },
    {
      id: 6,
      category: 'audio',
      image: `${BASE}/review_06.jpg`,
      alt: 'Sony large-screen head unit showing vehicle gauges via OBD',
    },
    {
      id: 7,
      category: 'audio',
      image: `${BASE}/review_08.jpg`,
      alt: 'Sony head unit menu — Radio, SiriusXM, Bluetooth, RearCam, dual cameras',
    },
    {
      id: 8,
      category: 'audio',
      image: `${BASE}/review_09.jpg`,
      alt: 'Sony head unit showing Android Auto home screen',
    },
    {
      id: 9,
      category: 'audio',
      image: `${BASE}/review_10.jpg`,
      alt: 'Sony head unit installed and booting up in dashboard',
    },
    {
      id: 10,
      category: 'audio',
      image: `${BASE}/review_11.jpg`,
      alt: 'Sony head unit — full dash view after clean installation',
    },
    {
      id: 11,
      category: 'audio',
      image: `${BASE}/review_17.jpg`,
      alt: 'Technician wiring a new head unit in a Toyota Tundra — mobile install',
    },
    {
      id: 12,
      category: 'audio',
      image: `${BASE}/review_18.jpg`,
      alt: 'Android head unit installed showing home screen with Bluetooth and Radio',
    },
    // ── Dash Cams & Backup Cameras ──────────────────────────────────────
    {
      id: 13,
      category: 'dashCams',
      image: `${BASE}/review_07.jpg`,
      alt: 'Sony head unit displaying live backup camera feed',
    },
    {
      id: 14,
      category: 'dashCams',
      image: `${BASE}/review_12.jpg`,
      alt: 'Backup camera installed cleanly at rear license plate area',
    },
    {
      id: 15,
      category: 'dashCams',
      image: `${BASE}/review_14.jpg`,
      alt: 'GMC truck interior — head unit showing backup camera in reverse',
    },
    {
      id: 16,
      category: 'dashCams',
      image: `${BASE}/review_15.jpg`,
      alt: 'Alpine head unit with backup camera and parking guidelines',
    },
    // ── Alarms & Security ───────────────────────────────────────────────
    {
      id: 17,
      category: 'alarms',
      image: `${BASE}/review_16.jpg`,
      alt: 'Porsche in for security and remote start installation',
    },
  ]

  const filtered = activeFilter === 'all' ? images : images.filter(i => i.category === activeFilter)

  const filterLabels: Record<string, string> = {
    all: 'All Work',
    audio: 'Audio Installs',
    dashCams: 'Backup Cameras',
    alarms: 'Alarms & Security',
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('${BASE}/review_03.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-pro-dark/80 to-pro-blue/70" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Installation Gallery</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Real installs from real customers — audio systems, backup cameras, security & more across North Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                  activeFilter === filter
                    ? 'bg-pro-blue text-white'
                    : 'bg-gray-200 text-pro-dark hover:bg-gray-300'
                }`}
              >
                {filterLabels[filter]}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((image) => (
              <div
                key={image.id}
                className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <Image
                  src={image.image}
                  alt={image.alt}
                  width={500}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-end">
                  <span className="text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity font-medium p-3 leading-snug">
                    {image.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pro-dark mb-4">Want Results Like These?</h2>
          <p className="text-lg text-pro-gray mb-8">Contact us for a free quote — mobile service across North Texas.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/quote" className="btn-primary">
              Get Free Quote
            </a>
            <a href="tel:2144895107" className="btn-outline">
              Call/Text (214) 489-5107
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
