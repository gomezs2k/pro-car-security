'use client'

import { useEffect, useRef, useState } from 'react'
import { HERO_BG_VIDEO } from '@/lib/site-content'

export default function HeroBackgroundVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [motionOk, setMotionOk] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setMotionOk(!mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video || !motionOk) return

    const tryPlay = () => {
      video.play().catch(() => {})
    }

    tryPlay()
    video.addEventListener('canplay', tryPlay)
    return () => video.removeEventListener('canplay', tryPlay)
  }, [motionOk])

  if (!motionOk) {
    return <div className="bg-shell" aria-hidden />
  }

  return (
    <div className="bg-motion" id="motion-bg" aria-hidden>
      <video
        ref={videoRef}
        id="bg-motion"
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        src={HERO_BG_VIDEO}
      />
      <div className="bg-tint" />
      <div className="bg-fade" />
    </div>
  )
}