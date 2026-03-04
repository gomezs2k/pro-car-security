'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function AlarmDetail() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const features = [
    { title: 'Smartphone Integration', description: 'Control and monitor your alarm from anywhere using our mobile app' },
    { title: 'GPS Tracking', description: 'Real-time location tracking with emergency alerts' },
    { title: 'Instant Alerts', description: 'Receive immediate notifications if your vehicle is tampered with' },
    { title: 'Two-Way Pager', description: 'Get confirmation that your alarm is armed/disarmed' },
    { title: 'Shock Sensor', description: 'Detects impacts and attempted break-ins' },
    { title: 'Remote Start Compatible', description: 'Works seamlessly with our remote start systems' },
  ]

  const faqs = [
    {
      id: 'faq1',
      question: 'How does the smartphone app work?',
      answer: 'Our app connects to your alarm system via cloud technology, allowing you to arm/disarm, receive alerts, and track your vehicle in real-time from anywhere in the world.'
    },
    {
      id: 'faq2',
      question: 'Is installation difficult?',
      answer: 'No, our certified technicians handle all installation. We typically complete installations in 2-4 hours depending on your vehicle and system configuration.'
    },
    {
      id: 'faq3',
      question: 'What if my phone battery dies?',
      answer: 'Your alarm system works independently - it will still detect and alert on tampering. The app just gives you remote access and notifications.'
    },
    {
      id: 'faq4',
      question: 'Can I upgrade later?',
      answer: 'Yes! All our systems are modular. You can add features like GPS tracking or dash cameras at any time.'
    },
    {
      id: 'faq5',
      question: 'What warranty do you offer?',
      answer: 'Our warranty depends on your package: Essential (1-year), Smart Pro (2-year), Complete (lifetime). Warranty covers parts and labor.'
    },
  ]

  const packages = [
    {
      name: 'Essential',
      price: '$599',
      features: ['Basic Car Alarm', 'Mobile Alerts', '1-Year Warranty', 'Basic Remote Start Option']
    },
    {
      name: 'Smart Pro',
      price: '$899',
      popular: true,
      features: ['Smart Alarm System', 'GPS Tracking', 'Remote Start with App', 'Dash Cam Integration', 'Smartphone App', '2-Year Warranty']
    },
    {
      name: 'Complete',
      price: '$1,299',
      features: ['Complete Smart Alarm', 'Advanced GPS Tracking', 'Premium Remote Start', 'Dual Dash Cam System', 'Window Tinting', 'Priority Support', 'Lifetime Warranty']
    },
  ]

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 text-sm text-pro-gray">
            <Link href="/" className="hover:text-pro-blue">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-pro-blue">Services</Link>
            <span>/</span>
            <span className="text-pro-dark font-semibold">Smart Alarm System</span>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[300px] bg-gradient-to-r from-pro-blue to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Smart Alarm System</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
              Advanced protection with smartphone app control and real-time alerts.
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-pro-dark mb-4">Service Overview</h2>
              <p className="text-pro-gray mb-4">
                Our Smart Alarm System provides comprehensive vehicle protection with cutting-edge technology. Monitor and
                control your vehicle&apos;s security remotely through our intuitive smartphone app.
              </p>
              <ul className="space-y-3">
                {features.slice(0, 3).map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="text-pro-blue font-bold">✓</span>
                    <div>
                      <div className="font-semibold text-pro-dark">{feature.title}</div>
                      <div className="text-sm text-pro-gray">{feature.description}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-pro-blue/20 to-pro-red/20 rounded-xl h-80 flex items-center justify-center border-2 border-pro-blue/30">
              <div className="text-center">
                <div className="text-6xl mb-4">🚨</div>
                <p className="text-pro-gray">Professional alarm installation with clean, hidden wiring.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Key Features</h2>
          <p className="section-subtitle text-center">Everything you need for complete peace of mind.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg text-pro-dark mb-2">{feature.title}</h3>
                <p className="text-pro-gray text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Choose Your Package</h2>
          <p className="section-subtitle text-center">Flexible options for every budget and need.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, idx) => (
              <div key={idx} className={`rounded-lg transition-all ${pkg.popular ? 'ring-2 ring-pro-red scale-105 shadow-2xl' : 'shadow-lg'}`}>
                <div className={`${pkg.popular ? 'bg-pro-red text-white' : 'bg-pro-dark text-white'} p-6 rounded-t-lg relative`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pro-red text-white px-4 py-1 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold">{pkg.price}</div>
                </div>
                <div className="bg-white p-6 rounded-b-lg">
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, fidx) => (
                      <li key={fidx} className="flex gap-2 text-pro-gray text-sm">
                        <span className="text-pro-blue font-bold">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-2 rounded-lg font-bold transition-colors ${pkg.popular ? 'bg-pro-red text-white hover:bg-red-700' : 'border-2 border-pro-blue text-pro-blue hover:bg-pro-blue hover:text-white'}`}>
                    Choose Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compatibility & Installation Examples */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Compatibility */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-pro-dark mb-6">Compatible Vehicles</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center text-sm text-pro-gray">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🚗</div>
                  <h4 className="font-semibold text-pro-dark mb-1">Sedans &amp; Coupes</h4>
                  <p>Most 2010+ models supported.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🚙</div>
                  <h4 className="font-semibold text-pro-dark mb-1">SUVs &amp; Trucks</h4>
                  <p>Full-size and compact models.</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-3xl mb-2">🚐</div>
                  <h4 className="font-semibold text-pro-dark mb-1">Vans &amp; Commercial</h4>
                  <p>Fleet installation available.</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg text-xs text-pro-gray">
                <strong>Note:</strong> Compatibility varies by vehicle year and model. Our technicians will verify
                compatibility during consultation.
              </div>
            </div>

            {/* Booking Module (summary style) */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-pro-dark mb-4">Book Your Installation</h3>
              <p className="text-sm text-pro-gray mb-6">
                Typical installation time is 2–4 hours depending on the vehicle and selected features.
              </p>
              <div className="space-y-4 text-sm">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Vehicle Year"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                  />
                  <input
                    type="text"
                    placeholder="Make & Model"
                    className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                />
                <button className="w-full bg-pro-blue text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Request Booking
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="tel:2144895107"
                    className="flex items-center justify-center gap-2 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <span>Call Now</span>
                  </a>
                  <a
                    href="sms:2144895107"
                    className="flex items-center justify-center gap-2 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <span>Text Us</span>
                  </a>
                </div>
                <p className="text-xs text-pro-gray text-center">
                  Fully licensed &amp; insured. Same-day and mobile installation available in most cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>

          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === faq.id ? null : faq.id)}
                  className="w-full p-6 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <h3 className="font-bold text-pro-dark text-left">{faq.question}</h3>
                  <span className={`text-pro-blue text-xl transition-transform ${expandedFAQ === faq.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {expandedFAQ === faq.id && (
                  <div className="px-6 pb-6 text-pro-gray border-t">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pro-blue to-pro-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Protect Your Vehicle?</h2>
          <p className="text-lg mb-8">Get a free quote and expert consultation from our certified technicians.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-pro-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold">
              Get Free Quote
            </Link>
            <a href="tel:2144895107" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-pro-blue transition-colors font-bold">
              Call/Text (214) 489-5107
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
