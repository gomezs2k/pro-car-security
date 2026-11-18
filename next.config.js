/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['squarespace-cdn.com', 'images.unsplash.com', 'storage.googleapis.com'],
  },
  async redirects() {
    return [
      { source: '/services', destination: '/#services', permanent: false },
      { source: '/services/:path*', destination: '/#services', permanent: false },
      { source: '/pricing', destination: '/#prices', permanent: false },
      { source: '/gallery', destination: '/', permanent: false },
      { source: '/reviews', destination: '/', permanent: false },
      { source: '/about', destination: '/#contact', permanent: false },
      { source: '/quote', destination: '/#contact', permanent: false },
      { source: '/ai-assistant', destination: '/', permanent: false },
    ]
  },
}

module.exports = nextConfig
