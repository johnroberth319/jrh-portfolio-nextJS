/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
      BASE_URL: process.env.BASE_URL || "http://localhost:3000" || 'http://irvinfavors.vercel.app',
    },
    images: {
      domains: [
        "localhost",
        "irvinfavors.vercel.app",
        "irvinfavorsjr-portfolio-8fp63axyj-irvinfavors.vercel.app",
        "irvinfavorsjr-portfolio-irvinfavors.vercel.app",
        "irvinfavorsjr-portfolio-git-main-irvinfavors.vercel.app",
      ],
    },
  };
  
  module.exports = nextConfig;
