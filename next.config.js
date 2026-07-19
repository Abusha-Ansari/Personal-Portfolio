/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  async redirects() {
    return [
      {
        source: '/meet',
        destination: 'https://meet.google.com/rtb-muoq-vjh',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
