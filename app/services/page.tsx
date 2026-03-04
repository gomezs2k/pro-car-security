import Link from 'next/link'

export default function Services() {
  const serviceCategories = [
    {
      category: 'Car Audio',
      icon: '🔊',
      services: [
        {
          id: 'speakers',
          title: 'Speaker Systems',
          description: 'Component and coaxial speaker upgrades for crisp, clear sound in any vehicle'
        },
        {
          id: 'headUnits',
          title: 'Head Units & Stereos',
          description: 'Single and double-DIN head unit installations with Apple CarPlay, Android Auto, and Bluetooth'
        },
        {
          id: 'subwoofers',
          title: 'Subwoofers & Amplifiers',
          description: 'Custom subwoofer and amp installs for powerful, deep bass in cars and trucks'
        },
      ]
    },
    {
      category: 'Motorcycle Audio',
      icon: '🏍️',
      services: [
        {
          id: 'motoAudio',
          title: 'Motorcycle Speaker Systems',
          description: 'Weatherproof speakers and audio solutions built for motorcycles and fairings'
        },
        {
          id: 'motoAmp',
          title: 'Motorcycle Amplifiers',
          description: 'Compact amp installs to power your ride with great sound on the road'
        },
      ]
    },
    {
      category: 'Marine Audio',
      icon: '⛵',
      services: [
        {
          id: 'marineSpeakers',
          title: 'Marine Speakers',
          description: 'UV- and water-resistant speakers designed for boats and watercraft'
        },
        {
          id: 'marineHead',
          title: 'Marine Head Units',
          description: 'Waterproof marine stereos with Bluetooth, USB, and satellite radio'
        },
        {
          id: 'marineSub',
          title: 'Marine Subwoofers & Amps',
          description: 'Weatherproof subwoofer and amplifier systems for full-range boat audio'
        },
      ]
    },
    {
      category: 'Security Systems',
      icon: '🚨',
      services: [
        {
          id: 'alarm',
          title: 'Car Alarm Systems',
          description: 'Advanced alarm systems with smartphone integration and instant notifications'
        },
        {
          id: 'remoteStart',
          title: 'Remote Start',
          description: 'Start your vehicle remotely — warm up or cool down before you get in'
        },
        {
          id: 'gps',
          title: 'GPS Tracking',
          description: 'Real-time vehicle location tracking for personal or fleet vehicles'
        },
        {
          id: 'dashCam',
          title: 'Dash Cameras',
          description: 'Front and rear dash cam installations with HD recording and loop storage'
        },
      ]
    },
    {
      category: 'Custom LED Lighting',
      icon: '💡',
      services: [
        {
          id: 'interiorLED',
          title: 'Interior LED Lighting',
          description: 'Ambient interior lighting upgrades to personalize your cabin'
        },
        {
          id: 'exteriorLED',
          title: 'Exterior LED Lighting',
          description: 'Custom exterior LED accents for a unique look on the road'
        },
        {
          id: 'underglow',
          title: 'Underglow & Accent Lighting',
          description: 'RGB underglow and wheel well lighting for cars, trucks, and motorcycles'
        },
      ]
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[300px] text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=2070&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-pro-dark/80 to-pro-blue/70" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Car, motorcycle & marine audio installations, advanced security systems, and custom LED lighting —
              serving North Texas from Anna, TX.
            </p>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 space-y-16">
          {serviceCategories.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-4xl">{cat.icon}</span>
                <h2 className="text-3xl font-bold text-pro-dark">{cat.category}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service) => (
                  <div key={service.id} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all p-6 group">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-xl text-white mb-4 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-pro-dark">{service.title}</h3>
                    <p className="text-pro-gray text-sm">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mobile Service Note */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto bg-gradient-to-br from-pro-blue/10 to-pro-red/10 border border-pro-blue/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-pro-dark mb-3">Mobile Service Available</h3>
            <p className="text-pro-gray mb-4">
              We serve Anna, McKinney, Prosper, Celina, Melissa, Denton, Van Alstyne, and surrounding areas.
              Can&apos;t make it to us? We&apos;ll come to you.
            </p>
            <a href="tel:2144895107" className="text-pro-blue font-bold text-lg hover:text-pro-red transition-colors">
              📞 (214) 489-5107 — Call or Text
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-pro-blue to-pro-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-lg mb-8">Our experts can help you find the perfect solution for your vehicle.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-pro-red text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold">
              Get a Free Quote
            </Link>
            <a href="tel:2144895107" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-pro-blue transition-colors font-bold">
              Call/Text (214) 489-5107
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
