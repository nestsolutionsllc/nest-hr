/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    loader: 'imgix',
    path: '',
    domains: ['firebasestorage.googleapis.com'],
  },
  tralingSlash: true,
};

module.exports = nextConfig;

