// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // keep whatever you already have here…
  async redirects() {
    return [
      {
        source: "/resources/wikis/20fafcab83d780eda9dcee1f02bdb5d3",
        destination: "/resources/wikis/literature-review",
        permanent: true, // 308
      },
    ];
  },
};

export default nextConfig;
