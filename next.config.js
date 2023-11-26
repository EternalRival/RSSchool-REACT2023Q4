/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  images: { remotePatterns: [{ protocol: 'https', hostname: 'media.myshows.me' }] },
}

module.exports = nextConfig
