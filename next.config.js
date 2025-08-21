/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/**',
      },
    ],
    domains: [
      'www.google.com',
      'img.icons8.com',
      'cdn.worldvectorlogo.com',
      'upload.wikimedia.org'
    ],
  },
}

module.exports = nextConfig 