/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'
const useBasePath = process.env.USE_BASEPATH === 'true'

const nextConfig = {
  // Only use static export in production (GitHub Pages deployment)
  output: isProduction ? 'export' : undefined,
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  trailingSlash: true,
  // Only use basePath for GitHub Pages deployment
  ...(useBasePath && {
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: useBasePath ? '/portfolio' : '',
  },
}

module.exports = nextConfig

