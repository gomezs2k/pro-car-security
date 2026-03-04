'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Quote() {
  const [formData, setFormData] = useState({
    selectedPackage: 'smart-pro',
    year: '',
    make: '',
    model: '',
    services: [] as string[],
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const years = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - i)
  
  const serviceOptions = [
    { id: 'car-audio', label: 'Car Audio' },
    { id: 'motorcycle-audio', label: 'Motorcycle Audio' },
    { id: 'marine-audio', label: 'Marine Audio' },
    { id: 'alarm', label: 'Security / Alarm System' },
    { id: 'remote-start', label: 'Remote Start' },
    { id: 'dash-cam', label: 'Dash Cam' },
    { id: 'gps', label: 'GPS Tracking' },
    { id: 'led-lighting', label: 'Custom LED Lighting' },
  ]

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({
          selectedPackage: 'smart-pro',
          year: '',
          make: '',
          model: '',
          services: [],
          name: '',
          phone: '',
          email: '',
          message: '',
        })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[220px] bg-gradient-to-r from-pro-blue to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4 h-full flex items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get Your Quote</h1>
            <p className="text-lg md:text-xl text-blue-100">Fast quote intake optimized for your needs.</p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-10 lg:py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          {submitted && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center">
              ✓ Quote request submitted! We&apos;ll contact you within 2 hours with your personalized quote.
            </div>
          )}

          {!submitted && (
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg overflow-hidden">
              {/* Form Header */}
              <div className="bg-gradient-to-r from-pro-dark to-pro-blue px-6 py-4 text-white">
                <h2 className="text-2xl font-bold">Get Your Free Quote</h2>
                <p className="text-sm text-blue-100">Tell us about your vehicle and what you need — we&apos;ll get back to you fast.</p>
              </div>

              {/* Form Content */}
              <div className="p-6 lg:p-8 space-y-8">
                {/* Service Category */}
                <div>
                  <h3 className="text-lg font-semibold text-pro-dark mb-3">1. What type of service are you interested in?</h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    {[
                      { value: 'audio', label: 'Audio', sub: 'Car, motorcycle, or marine' },
                      { value: 'security', label: 'Security', sub: 'Alarms, remote start, GPS' },
                      { value: 'led', label: 'LED Lighting', sub: 'Interior, exterior, underglow' },
                    ].map(opt => (
                      <label key={opt.value} className="relative">
                        <input
                          type="radio"
                          name="package"
                          value={opt.value}
                          checked={formData.selectedPackage === opt.value}
                          onChange={(e) => setFormData({ ...formData, selectedPackage: e.target.value })}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.selectedPackage === opt.value ? 'border-pro-blue bg-blue-50' : 'border-gray-200 hover:border-gray-300'}`}>
                          <div className="text-center">
                            <div className="font-bold text-pro-dark">{opt.label}</div>
                            <div className="text-xs text-pro-gray mt-1">{opt.sub}</div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Vehicle Information */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-pro-dark mb-3">2. Vehicle Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-pro-gray mb-2">Year</label>
                      <select
                        value={formData.year}
                        onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                        required
                      >
                        <option value="">Select Year</option>
                        {years.map(year => (
                          <option key={year} value={String(year)}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-pro-gray mb-2">Make</label>
                      <input
                        type="text"
                        value={formData.make}
                        onChange={(e) => setFormData({ ...formData, make: e.target.value })}
                        placeholder="e.g., Toyota"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-pro-gray mb-2">Model</label>
                      <input
                        type="text"
                        value={formData.model}
                        onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                        placeholder="e.g., Camry"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Desired Features */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-pro-dark mb-3">3. What services are you interested in?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceOptions.map(service => (
                      <label
                        key={service.id}
                        className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service.id)}
                          onChange={() => handleServiceChange(service.id)}
                          className="w-4 h-4"
                        />
                        <span className="text-pro-dark text-sm font-medium">{service.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget Range (visual only) */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-pro-dark mb-3">4. Budget Range</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <span className="px-3 py-2 border border-gray-200 rounded-lg text-center text-pro-gray">
                      Under $600
                    </span>
                    <span className="px-3 py-2 border border-gray-200 rounded-lg text-center text-pro-gray">
                      $600 - $900
                    </span>
                    <span className="px-3 py-2 border border-gray-200 rounded-lg text-center text-pro-gray">
                      $900 - $1,300
                    </span>
                    <span className="px-3 py-2 border border-gray-200 rounded-lg text-center text-pro-gray">
                      Over $1,300
                    </span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-pro-dark mb-3">5. Contact Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-pro-gray mb-2">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Full Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-pro-gray mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="(214) 555-1234"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-pro-gray mb-2">Email Address</label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-pro-dark mb-3">6. Additional Details</h3>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your vehicle, what you want installed, or any special requirements..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue resize-none text-sm"
                  />
                </div>

                {/* Consent (informational) */}
                <div className="bg-gray-50 p-4 rounded-lg text-xs text-pro-gray">
                  <p>
                    By submitting this form, you consent to being contacted by Pro Car Security & Audio regarding this quote
                    request. Message and data rates may apply, and you can opt out at any time.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-pro-blue to-blue-600 text-white font-bold py-3 rounded-lg hover:from-blue-700 hover:to-blue-700 transition-colors disabled:bg-gray-400 text-lg"
                >
                  {loading ? 'Submitting...' : 'Get My Quote Now'}
                </button>
                <p className="text-center text-pro-gray text-xs">
                  We typically respond within 2 hours during business hours.
                </p>
              </div>
            </form>
          )}

          {/* Confirmation State */}
          {submitted && (
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-3xl">
                ✓
              </div>
              <h2 className="text-3xl font-bold text-pro-dark mb-3">Quote Request Submitted!</h2>
              <p className="text-lg text-pro-gray mb-6">
                We&apos;ll contact you within 2 hours with your personalized quote.
              </p>
              <div className="grid gap-4 sm:grid-cols-3 max-w-2xl mx-auto">
                <a
                  href="tel:2144895107"
                  className="bg-pro-blue text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm"
                >
                  Call/Text Now
                </a>
                <Link
                  href="/ai-assistant"
                  className="bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors text-sm"
                >
                  Chat with AI
                </Link>
                <Link
                  href="/services"
                  className="bg-pro-red text-white py-3 px-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm"
                >
                  Browse Services
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Quick Benefits */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-sm">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                ⏱️
              </div>
              <h3 className="font-bold text-pro-dark mb-1">2-Hour Response</h3>
              <p className="text-pro-gray">Quick turnaround on all quotes.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                💲
              </div>
              <h3 className="font-bold text-pro-dark mb-1">No Obligation</h3>
              <p className="text-pro-gray">Free quotes with no pressure.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                🛡️
              </div>
              <h3 className="font-bold text-pro-dark mb-1">Expert Advice</h3>
              <p className="text-pro-gray">Professional recommendations.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                🚗
              </div>
              <h3 className="font-bold text-pro-dark mb-1">Mobile Service</h3>
              <p className="text-pro-gray">We come to you across North Texas.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
