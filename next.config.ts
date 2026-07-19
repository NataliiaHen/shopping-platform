import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  ignoreBuildErrors: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
        port: '',
      },
      {
        protocol: 'https',
        hostname: '*.ufs.sh',
        port: '',
        pathname: '/f/*',
      },
    ],
  },
};

export default nextConfig;
