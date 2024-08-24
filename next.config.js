/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        // hostname: "fakestoreapi.com",
        hostname:"res.cloudinary.com"
      },
    ],
  },
};

module.exports = nextConfig;
