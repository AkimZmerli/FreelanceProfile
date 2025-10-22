/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
  },
  // Suppress development overlay for known Next.js 15 issues
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Suppress hot reload console warnings in development
      config.infrastructureLogging = {
        level: 'error',
      }
    }
    return config
  }
}

module.exports = nextConfig