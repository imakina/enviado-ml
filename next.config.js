/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images:{
    domains:['localhost', 'http2.mlstatic.com']
  }
}

module.exports = nextConfig
