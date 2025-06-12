/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/coming-soon',
  assetPrefix: '/coming-soon/',
}

module.exports = nextConfig
