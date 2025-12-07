/**
 * @type {import('next').NextConfig}
 */

// This constant is used to determine if the app is in production
const isProd = process.env.NODE_ENV === 'production'

// If this is a project site (e.g., username.github.io/repoName),
// update this with your repository name.
// If it's a user/organization site (e.g., username.github.io), leave it as an empty string.
const repoName = 'kranthi-protfolio' 

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
  basePath: isProd ? `/${repoName}` : '',
  assetPrefix: isProd ? `/${repoName}/` : '',
  
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
