import { SITE } from '@/lib/site-content'

export default function MobileCtaBar() {
  const tel = `tel:${SITE.phone}`
  const sms = `sms:${SITE.phone}`

  return (
    <div className="cta-bar">
      <div className="cta-bar-inner">
        <div className="cta-bar-actions">
          <a className="call" href={tel}>
            Call {SITE.phoneDisplay}
          </a>
          <a className="book" href={sms}>
            Text to book
          </a>
        </div>
      </div>
    </div>
  )
}