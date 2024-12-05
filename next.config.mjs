/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '6ndnl52hy48rrhe4.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
