/** @type {import('next').NextConfig} */
const nextConfig = {
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
        source: '/services/rera',
        destination: '/services/rera-lawyer',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
