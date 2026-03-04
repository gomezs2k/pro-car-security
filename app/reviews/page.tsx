import Link from 'next/link'

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: 'Jake R.',
      rating: 5,
      date: 'February 2026',
      text: 'Amazing work on my truck audio. The sound system sounds incredible — much better than I expected. Very professional and came out to my location. Highly recommend!'
    },
    {
      id: 2,
      name: 'Maria L.',
      rating: 5,
      date: 'January 2026',
      text: 'Had custom LED lighting installed on my car and it looks amazing. Came out to my house, was super professional, and the quality is top notch. Will definitely use again!'
    },
    {
      id: 3,
      name: 'Chris T.',
      rating: 5,
      date: 'December 2025',
      text: 'Best audio installer in the area. They did my boat stereo and it sounds perfect on the lake. Fair pricing and excellent work. Will be back for my truck next!'
    },
    {
      id: 4,
      name: 'Derek S.',
      rating: 5,
      date: 'November 2025',
      text: 'Had a security system and remote start installed. Came to my workplace and got it done quickly. Love being able to start the truck before I get in on those cold mornings.'
    },
    {
      id: 5,
      name: 'Brittany M.',
      rating: 5,
      date: 'October 2025',
      text: 'Great experience! Had new speakers and a head unit put in my SUV. The mobile service is so convenient. The install is clean and sounds fantastic.'
    },
    {
      id: 6,
      name: 'Tony V.',
      rating: 5,
      date: 'September 2025',
      text: 'Installed a speaker system on my motorcycle — sounds great on the road! Very knowledgeable about motorcycle audio specifically. Fast and professional.'
    },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative h-[260px] text-white overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-2xl">
              See why North Texas vehicle owners trust Pro Car Security & Audio.
            </p>
          </div>
        </div>
      </section>

      {/* Overall Rating */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <div className="flex justify-center gap-1 mb-4" aria-label="5 stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-3xl text-amber-500">★</span>
              ))}
            </div>
            <p className="text-xl text-pro-gray">Rated 5 stars on Google — see what our customers are saying</p>
            <a
              href="https://www.google.com/search?kgmid=/g/11wxz92gtw&q=pro+car+security"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-pro-blue font-semibold hover:text-pro-red transition-colors"
            >
              View our Google Reviews →
            </a>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">What Our Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {reviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-pro-dark">{review.name}</h3>
                  <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-amber-500 text-lg">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-pro-gray mb-3">{review.date}</p>
                <p className="text-pro-gray">{review.text}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://www.google.com/search?kgmid=/g/11wxz92gtw&q=pro+car+security"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Leave a Google Review
            </a>
          </div>
        </div>
      </section>

      {/* Testimonial Banner */}
      <section className="py-16 bg-gradient-to-r from-pro-blue to-pro-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center text-3xl mx-auto mb-6">💬</div>
            <blockquote className="text-2xl font-semibold mb-4">
              &quot;Best audio installer in the area. Came right to my house, did a clean install, and the sound is incredible. Highly recommend Pro Car Security & Audio!&quot;
            </blockquote>
            <p className="text-lg">— Satisfied Customer, McKinney, TX</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-pro-dark mb-4">Ready to Experience the Difference?</h2>
          <p className="text-lg text-pro-gray mb-8">Join our satisfied customers across North Texas. Call, text, or get a quote online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/quote" className="btn-primary">
              Get Free Quote
            </Link>
            <a href="tel:2144895107" className="btn-outline">
              Call/Text (214) 489-5107
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
