import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.orthodontiemuseumplein.nl",
      },
    ],
  },
};

export default nextConfig;
