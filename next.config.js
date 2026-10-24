/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next-dev' : '.next',
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hzfhnbmylsiuvezmxgkk.supabase.co',
      },
    ],
  },
  // Blog pages fetch content from a Google Apps Script backend at build time.
  // That call can run close to (or past) Next's default 60s page-data limit,
  // which fails the Vercel build. Give it headroom until the Apps Script
  // runtime is brought down (see google-apps-script/). One deduped fetch feeds
  // all blog pages, so this covers the whole blog corpus.
  staticPageGenerationTimeout: 180,
  async redirects() {
    return [
      {
        source: '/services/tax-revenue-matters',
        destination: '/services/tax-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/tax-revenue-advocate',
        destination: '/services/tax-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/civil-matters',
        destination: '/services/civil-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/civil-advocate',
        destination: '/services/civil-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/family-matrimonial-matters',
        destination: '/services/family-advocate',
        permanent: true,
      },
      {
        source: '/services/service-employment-matters',
        destination: '/services/service-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/service-advocate',
        destination: '/services/service-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/criminal-matters',
        destination: '/services/criminal-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/criminal-lawyer',
        destination: '/services/criminal-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/divorce-lawyer',
        destination: '/services/divorce-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/banking-recovery-matters',
        destination: '/services/banking-recovery-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/company-corporate-matters',
        destination: '/services/company-corporate-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/consumer-motor-accident-matters',
        destination: '/services/consumer-motor-accident-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/cyber-crime-lawyer',
        destination: '/services/cyber-crime-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/constitutional-writ-matters',
        destination: '/services/constitutional-writ-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/property-land-matters',
        destination: '/services/property-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/rera-lawyer',
        destination: '/services/rera-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/rera',
        destination: '/services/rera-lawyer-lucknow',
        permanent: true,
      },
      {
        source: '/services/high-court-lawyer',
        destination: '/services/high-court-lawyer-lucknow',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
