/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/:any*",
        destination: "/",
      },
    ];
  },
};

module.exports = {
  ...nextConfig,
  images: {
    //domains: ["assets.scrimba.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.scrimba.com",
        port: "", // Empty string means any port
        pathname: "/**", // '**' allows any subpath
      },
    ],
  },
};
