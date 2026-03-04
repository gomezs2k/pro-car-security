import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-pro-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/c5d1f976c4-da043ecf6f118c0f43eb.png"
                alt="Pro Car Security & Audio"
                width={40}
                height={40}
                className="w-10 h-10 rounded-full"
                unoptimized
              />
              <span className="font-bold text-lg">Pro Car Security & Audio</span>
            </div>
            <p className="text-gray-300 text-sm">Car, motorcycle & marine audio, advanced security systems, and custom LED lighting in North Texas.</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services" className="hover:text-pro-blue transition-colors">Car Audio</Link></li>
              <li><Link href="/services" className="hover:text-pro-blue transition-colors">Motorcycle Audio</Link></li>
              <li><Link href="/services" className="hover:text-pro-blue transition-colors">Marine Audio</Link></li>
              <li><Link href="/services" className="hover:text-pro-blue transition-colors">Security Systems</Link></li>
              <li><Link href="/services" className="hover:text-pro-blue transition-colors">Custom LED Lighting</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-pro-blue transition-colors">About Us</Link></li>
              <li><Link href="/reviews" className="hover:text-pro-blue transition-colors">Reviews</Link></li>
              <li><Link href="/gallery" className="hover:text-pro-blue transition-colors">Gallery</Link></li>
              <li><Link href="/quote" className="hover:text-pro-blue transition-colors">Get Quote</Link></li>
              <li>
                <a
                  href="https://www.facebook.com/people/PRO-CAR-Security/61584526415676/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pro-blue transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="tel:2144895107" className="hover:text-pro-blue transition-colors">
                  📞 (214) 489-5107
                </a>
              </li>
              <li>📍 725 Peach Tree Ln, Anna, TX 75409</li>
              <li>⏰ Mon–Sat: 10AM–5PM</li>
              <li>🚗 Mobile Service Available</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2026 Pro Car Security & Audio. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-pro-blue transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-pro-blue transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
