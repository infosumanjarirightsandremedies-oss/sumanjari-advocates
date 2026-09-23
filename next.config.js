/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hzfhnbmylsiuvezmxgkk.supabase.co'],
  },
  // Blog pages fetch content from a Google Apps Script backend at build time.
  // That call can run close to (or past) Next's default 60s page-data limit,
  // which fails the Vercel build. Give it headroom until the Apps Script
  // runtime is brought down (see google-apps-script/). One deduped fetch feeds
  // all blog pages, so this covers the whole blog corpus.
  staticPageGenerationTimeout: 180,
}

module.exports = nextConfig
