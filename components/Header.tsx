import Link from 'next/link'
import { SITE } from '@/lib/site-content'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#prices', label: 'Pricing' },
  { href: '#area', label: 'Service area' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const tel = `tel:${SITE.phone}`

  return (
    <header className="nav">
      <div className="nav-bar">
      <Link href="/" className="brand">
        <span className="brand-badge">
          <span className="brand-dot" aria-hidden />
          <span className="brand-pro">PRO</span>
        </span>
        <span className="brand-text">
          <span className="brand-name">
            Pro Car <span>Security</span>
          </span>
          <span className="brand-tag">Mobile install · DFW</span>
        </span>
      </Link>

      <nav className="nav-links" aria-label="Primary">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="nav-call-icon" href={tel} aria-label={`Call or text ${SITE.phoneDisplay}`}>
          ✆
        </a>
        <a className="nav-call-block" href={tel}>
          <small>Call or text</small>
          <strong>{SITE.phoneDisplay}</strong>
        </a>
        <a className="nav-book" href={tel}>
          Call Now
        </a>
      </div>
      </div>
    </header>
  )
}