import Image from 'next/image'
import ServiceAreaSection from '@/components/landing/ServiceAreaSection'
import {
  SITE,
  services,
  installTiers,
  priceCategories,
  trustItems,
} from '@/lib/site-content'

const tel = `tel:${SITE.phone}`

export default function Home() {
  return (
    <>
      <a className="announce" href="#contact">
        <span>
          Mobile service across DFW & North Texas —{' '}
          <u>Call or text {SITE.phoneDisplay}</u>
        </span>
      </a>

      <section className="trust">
        <div className="trust-hatch" />
        <div className="trust-row">
          {trustItems.map((item) => (
            <div className="trust-item" key={item.label}>
              <span aria-hidden>{item.icon}</span>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="hero">
        <HeroPhoto />
        <HeroCopy />
      </section>

      <section className="reliability" id="services">
        <div className="reliability-grid">
          {services.map((svc, i) => (
            <article className="rel-card" key={svc.id}>
              <div className="rel-num">{String(i + 1).padStart(2, '0')}</div>
              <div className="rel-title">
                {svc.icon} {svc.title}
              </div>
              <p>{svc.description}</p>
              <a href={`#${svc.priceAnchor}`} style={{ color: 'var(--accent)', fontSize: 13, fontWeight: 700 }}>
                View price ranges →
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section bg-soft" id="prices">
        <h2 className="section-title">Service tiers</h2>
        <div className="section-rule" />
        <p className="section-lead">
          Labor price ranges by job size — parts are separate unless noted. Call or text for your exact quote on your
          vehicle.
        </p>
        <div className="tiers">
          {installTiers.map((tier) => (
            <div className={`tier${tier.featured ? ' popular' : ''}`} key={tier.name}>
              <div className="tier-kicker">{tier.kicker}</div>
              <div style={{ fontFamily: 'var(--f-black)', fontSize: 22, color: '#fff', textTransform: 'uppercase' }}>
                {tier.name}
              </div>
              <div className="tier-price">{tier.range}</div>
              <div className="tier-for">{tier.forLabel}</div>
              <p>
                {tier.summary}. {tier.examples}
              </p>
              <a className="btn-primary" href={tel}>
                Call to book
              </a>
            </div>
          ))}
        </div>

        <PriceCategories />
      </section>

      <ServiceAreaSection />

      <section className="contact-band section" id="contact" style={{ background: 'var(--bg-alt)' }}>
        <h2>Call or text to book</h2>
        <p>
          {SITE.address} · {SITE.hours}
        </p>
        <a className="btn-primary" href={tel}>
          {SITE.phoneDisplay}
        </a>
      </section>
    </>
  )
}

function HeroPhoto() {
  return (
    <div className="hero-photo">
      <Image
        src="/brand/ddf79540-d751-4829-8f16-d55ea8e2be05.jpeg"
        alt="Mobile vehicle audio and security install"
        fill
        priority
        sizes="(max-width: 900px) 100vw, 58vw"
        style={{ objectFit: 'cover', objectPosition: '78% 20%' }}
      />
      <div className="hero-photo-fade" />
      <div className="hero-badge-live">
        <span className="brand-dot" aria-hidden />
        <span>On the job — your driveway is our shop</span>
      </div>
    </div>
  )
}

function HeroCopy() {
  return (
    <div className="hero-content">
      <div className="hero-tag">Mobile install · DFW & North Texas</div>
      <h1>
        Pro audio, security &amp; lighting.
        <br />
        <span className="accent">We come to you.</span>
      </h1>
      <p className="hero-sub">
        Cars, motorcycles, and marine. See price ranges below, check the map for your ZIP, then call or text — we&apos;ll
        give you the real number for your build.
      </p>
      <div className="hero-cta">
        <a className="btn-primary" href={tel}>
          Call or Text Now
        </a>
        <a className="btn-ghost" href="#prices">
          See Pricing
        </a>
      </div>
      <p className="hero-phone">
        <a href={tel}>{SITE.phoneDisplay}</a>
        <small>Call or text · {SITE.hours}</small>
      </p>
    </div>
  )
}

function PriceCategories() {
  return (
    <div style={{ marginTop: 48 }}>
      {priceCategories.map((cat) => (
        <div id={cat.id} style={{ marginBottom: 32 }} key={cat.id}>
          <div className="cat-head">
            <span style={{ fontSize: 28 }} aria-hidden>
              {cat.icon}
            </span>
            <h3>{cat.name}</h3>
          </div>
          <div className="price-table">
            {cat.items.map((item) => (
              <div className="price-row" key={item.service}>
                <div>
                  <b>{item.service}</b>
                  <span>{item.note}</span>
                </div>
                <div className="price-amt">{item.range}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}