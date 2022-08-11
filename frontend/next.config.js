/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { layoutRaw: true } },
  images: {
    loader: "imgix",
    path: "",
    domains: ["firebasestorage.googleapis.com"],
  },
  tralingSlash: true,
  env: {
    TICKET_SYSTEM_ENDPOINT_URL: process.env.TICKET_SYSTEM_ENDPOINT_URL,
    DB_HOST: process.env.DB_HOST,
  },
};

module.exports = nextConfig;
