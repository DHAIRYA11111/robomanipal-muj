/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Emit a fully static site to ./out on `npm run build`, so it can be hosted
  // on any static server (or the AIPPISTONS Google domain / company server)
  // with no Node.js runtime required. Comment this out to use `next start`.
  output: "export",
  images: {
    // required when output: 'export' (no Image Optimization server)
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
