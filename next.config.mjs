/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn-icons-png.flaticon.com",
      },
      {
        hostname: "cdn4.iconfinder.com",
      },
      {
        hostname: "dev-to-uploads.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
