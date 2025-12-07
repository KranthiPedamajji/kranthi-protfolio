
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enables static export
  output: 'export',
  // Disables image optimization for static hosts
  images: { 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // Ensures routes like /about/ become about/index.html for GH Pages
  trailingSlash: true,

  // Sets the base path and asset prefix for project pages on GitHub
  basePath: '/kranthi-protfolio',
  assetPrefix: '/kranthi-protfolio/',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
