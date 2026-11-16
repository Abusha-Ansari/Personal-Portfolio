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
      {
        source: '/insta',
        destination: 'https://www.instagram.com/abusha_2103',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://www.github.com/Abusha-Ansari',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/abusha-ansari',
        permanent: true,
      }
    ];
  },
};

module.exports = nextConfig;
