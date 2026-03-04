import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      icon: '🔊',
      title: 'Car Audio',
      description: 'Premium speaker systems, head units, subwoofers, and amplifiers for cars and trucks'
    },
    {
      icon: '🏍️',
      title: 'Motorcycle Audio',
      description: 'Custom audio solutions designed for motorcycles — ride with sound'
    },
    {
      icon: '⛵',
      title: 'Marine Audio',
      description: 'Weatherproof audio installations for boats and watercraft'
    },
    {
      icon: '🚨',
      title: 'Security Systems',
      description: 'Advanced alarm systems, remote start, GPS tracking, and dash cameras'
    },
    {
      icon: '💡',
      title: 'Custom LED Lighting',
      description: 'Interior, exterior, and underglow LED lighting to customize your vehicle'
    },
  ]

  const whyChoose = [
    {
      title: 'Expert Technicians',
      description: 'Professional installations for cars, motorcycles, and marine vessels'
    },
    {
      title: 'Mobile Service',
      description: 'We come to you — serving Prosper, McKinney, Celina, Anna & surrounding areas'
    },
    {
      title: 'Call or Text',
      description: 'Easy to reach — just call or text (214) 489-5107 to get started'
    },
  ]

  const reviews = [
    {
      name: 'Jake R.',
      rating: 5,
      text: 'Amazing install on my truck! The sound quality is outstanding. Very professional and quick. Highly recommend!'
    },
    {
      name: 'Maria L.',
      rating: 5,
      text: 'Had LED lighting installed on my car and it looks incredible. Great communication and fair pricing.'
    },
    {
      name: 'Chris T.',
      rating: 5,
      text: 'Best audio shop in the area. They did my boat stereo and it sounds perfect on the water. Will be back!'
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white py-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/brand/ddf79540-d751-4829-8f16-d55ea8e2be05.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-pro-dark/80 to-pro-blue/80" />

        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-10 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Audio, Security &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-red-300">
                LED Lighting
              </span>{' '}
              in North Texas
            </h1>

            <p className="text-lg md:text-xl text-gray-200 max-w-xl mb-8">
              Pro Car Security & Audio specializes in car, motorcycle & marine audio installations, advanced security
              systems, and custom LED lighting. Serving Anna, McKinney, Prosper, Celina & the surrounding area.
              Mobile service available!
            </p>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 max-w-md md:max-w-none">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm uppercase tracking-wide text-gray-300 mb-1">Call or Text</div>
                <div className="text-lg font-semibold">(214) 489-5107</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm uppercase tracking-wide text-gray-300 mb-1">Hours</div>
                <div className="text-lg font-semibold">Mon–Sat 10AM–5PM</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-sm uppercase tracking-wide text-gray-300 mb-1">Mobile Service</div>
                <div className="text-lg font-semibold">We Come to You</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:2144895107" className="btn-primary text-base">
                📞 Call or Text Now
              </a>
              <Link href="/quote" className="btn-secondary text-base">
                Get a Quote
              </Link>
              <a href="#services" className="bg-white/90 text-pro-dark px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors text-base border-0">
                Our Services
              </a>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c5d1f976c4-da043ecf6f118c0f43eb.png"
                alt="Professional car audio and security installation"
                width={640}
                height={420}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-gray-100">
                <span>Cars, motorcycles & marine audio, security & LED lighting.</span>
                <span className="px-2 py-1 rounded-full bg-black/50 border border-white/10">
                  Anna, TX
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Our Services</h2>
          <p className="section-subtitle text-center">Professional installations for cars, motorcycles, marine vessels & more</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mb-4">
                  <span>{service.icon}</span>
                </div>
                <h3 className="font-bold text-lg mb-2 text-pro-dark">{service.title}</h3>
                <p className="text-pro-gray text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">Why Choose Pro Car Security & Audio</h2>
          <p className="section-subtitle text-center">Your local North Texas specialist for audio, security & lighting</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-pro-blue/10 to-pro-red/10 rounded-lg p-8 border border-pro-blue/20">
                <h3 className="text-2xl font-bold text-pro-blue mb-3">{item.title}</h3>
                <p className="text-pro-gray">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title text-center">Service Area</h2>
          <p className="section-subtitle text-center mb-8">We serve the following North Texas communities</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Anna', 'McKinney', 'Prosper', 'Celina', 'Melissa', 'Denton', 'Van Alstyne'].map((city) => (
              <span key={city} className="px-5 py-2 bg-white border border-pro-blue/30 rounded-full text-pro-dark font-medium shadow-sm">
                {city}, TX
              </span>
            ))}
          </div>
          <p className="mt-6 text-pro-gray">
            Not on the list?{' '}
            <a href="tel:2144895107" className="text-pro-blue font-semibold hover:text-pro-red transition-colors">
              Call or text us
            </a>{' '}
            — mobile service may be available in your area.
          </p>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center">What Our Customers Say</h2>
          <p className="section-subtitle text-center">Trusted by North Texas vehicle owners</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {reviews.map((review, idx) => (
              <div key={idx} className="bg-gray-50 rounded-lg shadow-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-pro-dark">{review.name}</h4>
                  <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-amber-500">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-pro-gray">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/reviews" className="btn-primary">
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-r from-pro-blue to-pro-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Upgrade Your Ride?
          </h2>
          <p className="text-lg mb-8">Get a free quote from our experts today. Call, text, or fill out our quote form.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-pro-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold text-lg">
              Get Free Quote
            </Link>
            <a href="tel:2144895107" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-pro-blue transition-colors font-bold text-lg">
              Call/Text (214) 489-5107
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
