/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/LandingPage_MTRP',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
