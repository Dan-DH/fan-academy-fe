/** @type {import('next').NextConfig} */

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/users/:path*',
        destination: 'http://localhost:3003/users/:path*'
      },
      {
        source: '/games/:path*',
        destination: 'http://localhost:3003/games/:path*'
      }
    ];
  }
};

export default nextConfig;
