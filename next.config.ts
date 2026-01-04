import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/simples',
  assetPrefix: '/simples/',
  images: {
    unoptimized: true,
  },
}

export default nextConfig
