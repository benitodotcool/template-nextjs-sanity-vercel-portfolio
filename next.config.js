/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    remotePatterns: [
      {hostname: 'cdn.sanity.io'},
      {hostname: 'source.unsplash.com'},
    ],
  },
  typescript: {
    ignoreBuildErrors: process.env.VERCEL_ENV === 'production',
  },
  eslint: {
    ignoreDuringBuilds: process.env.VERCEL_ENV === 'production',
  },
}
