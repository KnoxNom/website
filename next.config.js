const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/website',
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig