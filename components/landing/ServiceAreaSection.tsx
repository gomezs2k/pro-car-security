'use client'

import { useState } from 'react'
import { SITE, includedAreaCities, SERVICE_AREA_CENTER } from '@/lib/site-content'
import dynamic from 'next/dynamic'
import { milesBetween } from '@/lib/distance'

const ServiceAreaMap = dynamic(() => import('./ServiceAreaMap'), {
  ssr: false,
  loading: () => (
    <div className="area-map-leaflet area-map-loading" aria-busy="true">
      Loading map…
    </div>
  ),
})

type CheckResult = 'in' | 'out' | 'error' | null

export default function ServiceAreaSection() {
  const [zip, setZip] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<CheckResult>(null)
  const [distance, setDistance] = useState<number | null>(null)

  const tel = `tel:${SITE.phone}`
  const cityList = includedAreaCities.slice(0, 18).join(' · ')

  async function handleCheck(e: React.FormEvent) {
    e.preventDefault()
    const cleaned = zip.replace(/\D/g, '').slice(0, 5)
    if (cleaned.length !== 5) {
      setResult('error')
      setDistance(null)
      return
    }

    setLoading(true)
    setResult(null)
    setDistance(null)

    try {
      const res = await fetch(`https://api.zippopotam.us/us/${cleaned}`)
      if (!res.ok) {
        setResult('error')
        return
      }
      const data = await res.json()
      const lat = parseFloat(data.places[0].latitude)
      const lng = parseFloat(data.places[0].longitude)
      const miles = milesBetween(SERVICE_AREA_CENTER.lat, SERVICE_AREA_CENTER.lng, lat, lng)
      setDistance(Math.round(miles * 10) / 10)
      setResult(miles <= SITE.serviceRadiusMiles ? 'in' : 'out')
    } catch {
      setResult('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section bg-soft" id="area">
      <h2 className="section-title">Mobile service area</h2>
      <div className="section-rule" />
      <p className="section-lead">
        We cover DFW and North Texas with mobile installs.{' '}
        <strong>No travel charge within {SITE.serviceRadiusMiles} miles of Frisco</strong>; beyond that, we quote a
        custom travel fee upfront.
      </p>

      <div className="area-grid">
        <div className="area-map">
          <div className="area-map-img area-map-dfw">
            <ServiceAreaMap />
          </div>
          <div className="area-cities">
            <b>{SITE.serviceRadiusMiles}-mile radius from Frisco</b>
            <p>
              {cityList} · and surrounding areas within the blue zone on the map.
            </p>
          </div>
        </div>

        <div className="area-side">
          <div className="zones">
            <div className="zone">
              <span className="zone-dot g" />
              <div className="zone-body">
                <b>0–{SITE.serviceRadiusMiles} mi from Frisco</b>
                <span>Standard zone · no travel charge</span>
              </div>
              <div className="zone-price g">Included</div>
            </div>
            <div className="zone">
              <span className="zone-dot o" />
              <div className="zone-body">
                <b>{SITE.serviceRadiusMiles + 1}+ mi from Frisco</b>
                <span>Extended travel · custom fee quoted upfront</span>
              </div>
              <div className="zone-price o">Custom fee</div>
            </div>
          </div>

          <div className="zipbox">
            <div className="zipbox-eyebrow">Not sure? Check your ZIP</div>
            <div className="zipbox-title">See your zone instantly</div>
            <form className="zip-form" onSubmit={handleCheck}>
              <input
                inputMode="numeric"
                maxLength={5}
                placeholder="Your ZIP"
                autoComplete="postal-code"
                value={zip}
                onChange={(e) => {
                  setZip(e.target.value)
                  setResult(null)
                }}
                aria-label="Your ZIP code"
              />
              <button type="submit" disabled={loading}>
                {loading ? '…' : 'Check'}
              </button>
            </form>

            {result === 'in' && distance !== null && (
              <div className="zip-result show in-zone">
                <b>You&apos;re in the zone</b>
                <span>
                  About {distance} miles from Frisco — inside our {SITE.serviceRadiusMiles}-mile zone (no travel charge).{' '}
                  <a href={tel} style={{ color: 'var(--accent)' }}>
                    Call or text to book
                  </a>
                  .
                </span>
              </div>
            )}
            {result === 'out' && distance !== null && (
              <div className="zip-result show out-zone">
                <b>Extended travel zone</b>
                <span>
                  About {distance} miles from Frisco — past {SITE.serviceRadiusMiles} miles. We may still come out with a
                  custom travel fee.{' '}
                  <a href={tel} style={{ color: 'var(--accent)' }}>
                    Call or text {SITE.phoneDisplay}
                  </a>{' '}
                  for a quote before you book.
                </span>
              </div>
            )}
            {result === 'error' && (
              <div className="zip-result show">
                <b>Could not verify</b>
                <span>
                  Try again or{' '}
                  <a href={tel} style={{ color: 'var(--accent)' }}>
                    text us your address
                  </a>{' '}
                  at {SITE.phoneDisplay}.
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="callout">
        <b>Outside the {SITE.serviceRadiusMiles}-mile Frisco zone?</b>
        <p>
          We may still drive to you — custom travel fee quoted before we book.{' '}
          <a href={tel} style={{ color: 'var(--accent)' }}>
            Call or text {SITE.phoneDisplay}
          </a>{' '}
          with your ZIP.
        </p>
      </div>
    </section>
  )
}