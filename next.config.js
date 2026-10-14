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
        destination: '/services/tax-revenue-advocate',
        permanent: true,
      },
      {
        source: '/services/civil-matters',
        destination: '/services/civil-advocate',
        permanent: true,
      },
      {
        source: '/services/family-matrimonial-matters',
        destination: '/services/family-advocate',
        permanent: true,
      },
      {
        source: '/services/service-employment-matters',
        destination: '/services/service-advocate',
        permanent: true,
      },
      {
        source: '/services/criminal-matters',
        destination: '/services/criminal-lawyer',
        permanent: true,
      },
      {
        source: '/services/rera',
        destination: '/services/rera-lawyer',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
