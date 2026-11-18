'use client'

import { useEffect, useRef } from 'react'
import { SERVICE_AREA_CENTER, SITE } from '@/lib/site-content'

const MILES_TO_METERS = 1609.344

export default function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<import('leaflet').Map | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    let cancelled = false
    let map: import('leaflet').Map | null = null

    ;(async () => {
      try {
        const L = (await import('leaflet')).default
        if (cancelled || !containerRef.current) return

        map = L.map(el, {
          center: [SERVICE_AREA_CENTER.lat, SERVICE_AREA_CENTER.lng],
          zoom: 8,
          scrollWheelZoom: false,
          attributionControl: true,
        })

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          subdomains: 'abc',
          maxZoom: 19,
        }).addTo(map)

        const radiusM = SITE.serviceRadiusMiles * MILES_TO_METERS

        const zone = L.circle([SERVICE_AREA_CENTER.lat, SERVICE_AREA_CENTER.lng], {
          radius: radiusM,
          color: '#2f6bff',
          weight: 2,
          opacity: 0.9,
          fillColor: '#2f6bff',
          fillOpacity: 0.12,
        }).addTo(map)

        L.circleMarker([SERVICE_AREA_CENTER.lat, SERVICE_AREA_CENTER.lng], {
          radius: 9,
          color: '#ff5b1a',
          weight: 3,
          fillColor: '#ff5b1a',
          fillOpacity: 1,
        })
          .addTo(map)
          .bindTooltip('Frisco — service radius center', { permanent: false, direction: 'top' })

        map.fitBounds(zone.getBounds(), { padding: [24, 24] })
        mapRef.current = map

        requestAnimationFrame(() => map?.invalidateSize())
        window.setTimeout(() => map?.invalidateSize(), 150)
      } catch (err) {
        console.error('Service area map failed to load', err)
      }
    })()

    return () => {
      cancelled = true
      map?.remove()
      mapRef.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="area-map-leaflet"
      role="img"
      aria-label={`${SITE.serviceRadiusMiles}-mile mobile service radius centered on Frisco`}
    />
  )
}