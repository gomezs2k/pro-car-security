import Link from 'next/link'

export default function Pricing() {
  const serviceCategories = [
    {
      name: 'Car Audio',
      icon: '🔊',
      items: [
        { service: 'Speaker System Upgrade', price: 'Starting at $149', note: 'Includes installation' },
        { service: 'Head Unit / Stereo Install', price: 'Starting at $99', note: 'Labor only; product extra' },
        { service: 'Subwoofer & Amp Package', price: 'Starting at $299', note: 'Includes installation' },
        { service: 'Full Audio System Build', price: 'Custom Quote', note: 'Contact us for pricing' },
      ]
    },
    {
      name: 'Motorcycle Audio',
      icon: '🏍️',
      items: [
        { service: 'Motorcycle Speaker Install', price: 'Starting at $149', note: 'Includes installation' },
        { service: 'Motorcycle Audio Package', price: 'Custom Quote', note: 'Contact us for pricing' },
      ]
    },
    {
      name: 'Marine Audio',
      icon: '⛵',
      items: [
        { service: 'Marine Speaker Install', price: 'Starting at $199', note: 'Includes installation' },
        { service: 'Marine Stereo Package', price: 'Custom Quote', note: 'Contact us for pricing' },
        { service: 'Full Boat Audio Build', price: 'Custom Quote', note: 'Contact us for pricing' },
      ]
    },
    {
      name: 'Security Systems',
      icon: '🚨',
      items: [
        { service: 'Car Alarm Installation', price: 'Starting at $149', note: 'Includes installation' },
        { service: 'Remote Start System', price: 'Starting at $249', note: 'Includes installation' },
        { service: 'GPS Tracker Install', price: 'Starting at $199', note: 'Hardware + installation' },
        { service: 'Dash Cam Installation', price: 'Starting at $129', note: 'Includes installation' },
      ]
    },
    {
      name: 'Custom LED Lighting',
      icon: '💡',
      items: [
        { service: 'Interior LED Upgrade', price: 'Starting at $99', note: 'Includes installation' },
        { service: 'Exterior LED Accents', price: 'Starting at $149', note: 'Includes installation' },
        { service: 'Underglow / RGB Lighting', price: 'Starting at $199', note: 'Includes installation' },
        { service: 'Full Custom Lighting Package', price: 'Custom Quote', note: 'Contact us for pricing' },
      ]
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] bg-gradient-to-r from-pro-blue to-blue-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container mx-auto px-4">
          <div className="h-[300px] flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing & Services</h1>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl">
              Transparent starting prices for car, motorcycle & marine audio, security, and custom LED lighting.
              Mobile service available across North Texas.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-pro-gray max-w-2xl mx-auto">
            Prices shown are starting rates and vary based on vehicle type, product selection, and installation complexity.
            For an accurate quote tailored to your vehicle, call or text us at{' '}
            <a href="tel:2144895107" className="text-pro-blue font-semibold hover:text-pro-red transition-colors">
              (214) 489-5107
            </a>{' '}
            or use our{' '}
            <Link href="/quote" className="text-pro-blue font-semibold hover:text-pro-red transition-colors">
              online quote form
            </Link>.
          </p>
        </div>
      </section>

      {/* Service Pricing by Category */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat.name}>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{cat.icon}</span>
                <h2 className="text-3xl font-bold text-pro-dark">{cat.name}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex justify-between items-center hover:shadow-md transition-shadow">
                    <div>
                      <h3 className="font-semibold text-pro-dark">{item.service}</h3>
                      <p className="text-xs text-pro-gray mt-1">{item.note}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-xl font-bold text-pro-red whitespace-nowrap">{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Get a Custom Quote */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-title mb-6">Get an Accurate Quote</h2>
            <p className="text-pro-gray mb-8">
              Every vehicle and installation is different. Contact us to discuss your specific vehicle, the products
              you want, and we&apos;ll give you an exact price — no surprises.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">📞</div>
                <h3 className="font-bold text-pro-dark mb-2">Call or Text</h3>
                <a href="tel:2144895107" className="text-pro-blue font-semibold hover:text-pro-red transition-colors">
                  (214) 489-5107
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">📝</div>
                <h3 className="font-bold text-pro-dark mb-2">Online Quote</h3>
                <Link href="/quote" className="text-pro-blue font-semibold hover:text-pro-red transition-colors">
                  Fill out our form →
                </Link>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="text-3xl mb-3">⏰</div>
                <h3 className="font-bold text-pro-dark mb-2">Business Hours</h3>
                <p className="text-pro-gray text-sm">Mon–Sat: 10AM–5PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pro-dark to-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-pro-blue to-blue-600 rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-4">Get a Free Quote</h3>
              <p className="text-blue-100 mb-6">
                Tell us about your vehicle and what you&apos;re looking for — we&apos;ll give you an accurate price.
              </p>
              <Link
                href="/quote"
                className="block w-full text-center bg-white text-pro-blue py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Request My Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
