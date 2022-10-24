/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['drive.google.com', 's.dou.ua',"lh3.googleusercontent.com"]
  },
  swcMinify: true,
}

module.exports = nextConfig
