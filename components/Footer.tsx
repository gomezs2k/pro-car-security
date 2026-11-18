import { SITE } from '@/lib/site-content'

export default function Footer() {
  const tel = `tel:${SITE.phone}`

  return (
    <footer className="site-footer">
      <p>
        <strong className="site-footer-brand">{SITE.name}</strong>
      </p>
      <p>
        <a href={tel}>{SITE.phoneDisplay}</a> · {SITE.hours}
      </p>
      <p>{SITE.address}</p>
      <p className="site-footer-nav">
        <a href="#services">Services</a>
        {' · '}
        <a href="#prices">Pricing</a>
        {' · '}
        <a href="#area">Service area</a>
      </p>
      <p className="site-footer-copy">© {new Date().getFullYear()} {SITE.name}</p>
    </footer>
  )
}