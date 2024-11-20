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
      },
      {
        source: '/auth/:path*',
        destination: 'http://localhost:3003/auth/:path*'
      }
    ];
  }
};

export default nextConfig;
