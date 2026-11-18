import Link from 'next/link'
import Image from 'next/image'

export default function About() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Pro Car Security & Audio</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              North Texas&apos; specialist for car, motorcycle & marine audio, advanced security systems, and custom LED lighting.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-pro-dark mb-4">Who We Are</h2>
              <p className="text-pro-gray mb-4">
                Pro Car Security & Audio is a North Texas-based mobile installer specializing in car, motorcycle, and
                marine audio, advanced security systems, and custom LED lighting. We are passionate about enhancing
                your vehicle&apos;s aesthetics and functionality — whether it&apos;s a car, truck, motorcycle, or boat.
              </p>
              <p className="text-pro-gray mb-4">
                Based in Anna, TX, we proudly serve Prosper, Celina, McKinney, Melissa, Denton, Van Alstyne, and
                surrounding communities throughout North Texas. Our mobile service means we can come to your home,
                workplace, or anywhere that&apos;s convenient for you.
              </p>
              <p className="text-pro-gray">
                Whether you&apos;re looking to upgrade your sound system, add security to your vehicle, or customize your
                ride with LED lighting, our team is here to help. Call or text us at (214) 489-5107.
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-pro-blue/30 h-80">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c5d1f976c4-da043ecf6f118c0f43eb.png"
                alt="Professional audio and security installation"
                width={640}
                height={320}
                className="w-full h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-xs text-gray-100">
                <span>Serving North Texas — Anna, McKinney, Prosper, Celina & more.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Why Choose Pro Car Security & Audio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">🔊</div>
              <h3 className="font-bold text-lg text-pro-dark mb-2">Audio Specialists</h3>
              <p className="text-pro-gray text-sm">Expert installations for cars, motorcycles, and marine vessels</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">💡</div>
              <h3 className="font-bold text-lg text-pro-dark mb-2">Custom LED Lighting</h3>
              <p className="text-pro-gray text-sm">Interior, exterior, and underglow lighting to make your vehicle stand out</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">🚨</div>
              <h3 className="font-bold text-lg text-pro-dark mb-2">Security Systems</h3>
              <p className="text-pro-gray text-sm">Advanced alarms, remote start, GPS tracking, and dash cams</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">🚗</div>
              <h3 className="font-bold text-lg text-pro-dark mb-2">Mobile Service</h3>
              <p className="text-pro-gray text-sm">We come to you across North Texas — no shop visit required</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Info Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Contact & Hours</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-8 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">📞</div>
              <h3 className="font-bold text-pro-dark mb-2">Phone</h3>
              <a href="tel:2144895107" className="text-pro-blue hover:text-pro-red transition-colors font-semibold">
                (214) 489-5107
              </a>
              <p className="text-pro-gray text-sm mt-1">Call or Text</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">📍</div>
              <h3 className="font-bold text-pro-dark mb-2">Location</h3>
              <p className="text-pro-gray text-sm">Based in Anna, TX<br/>Mobile service — we come to you</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">🕐</div>
              <h3 className="font-bold text-pro-dark mb-2">Hours</h3>
              <p className="text-pro-gray text-sm">Mon–Sat: 10AM–5PM<br/>Sunday: Closed</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 shadow-md text-center">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pro-blue to-pro-red flex items-center justify-center text-2xl text-white mx-auto mb-4">📍</div>
              <h3 className="font-bold text-pro-dark mb-2">Service Area</h3>
              <p className="text-pro-gray text-sm">Anna · McKinney · Prosper<br/>Celina · Melissa · Denton<br/>Van Alstyne & more</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?kgmid=/g/11wxz92gtw&q=pro+car+security"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-block"
            >
              View our Google Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Get In Touch</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-bold text-lg text-pro-dark mb-4">Send Us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                />
                <input
                  type="tel"
                  placeholder="Your Phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pro-blue resize-none"
                ></textarea>
                <button className="btn-primary w-full">Send Message</button>
              </form>
            </div>
            <div>
              <h3 className="font-bold text-lg text-pro-dark mb-4">Why Contact Us?</h3>
              <ul className="space-y-3 text-pro-gray">
                <li className="flex gap-3">
                  <span className="text-pro-blue">✓</span>
                  <span>Free consultation on audio & security needs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pro-blue">✓</span>
                  <span>Fast response — call or text anytime during business hours</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pro-blue">✓</span>
                  <span>Flexible scheduling, including mobile appointments</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pro-blue">✓</span>
                  <span>Transparent, honest pricing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pro-blue">✓</span>
                  <span>Expert recommendations for your specific vehicle</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-pro-blue">✓</span>
                  <span>Cars, motorcycles, boats & more</span>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-white rounded-lg border border-pro-blue/20">
                <p className="font-bold text-pro-dark mb-2">Follow Us</p>
                <a
                  href="https://www.facebook.com/people/PRO-CAR-Security/61584526415676/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pro-blue hover:text-pro-red transition-colors font-semibold"
                >
                  Facebook: PRO CAR Security →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-pro-blue to-pro-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Vehicle?</h2>
          <p className="text-lg mb-8">Contact us today for a free quote and expert consultation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="bg-pro-red text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-bold">
              Get Free Quote
            </Link>
            <a href="tel:2144895107" className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-pro-blue transition-colors font-bold">
              Call/Text (214) 489-5107
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
