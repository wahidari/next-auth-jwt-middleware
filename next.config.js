/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    //go to https://generate-secret.now.sh/32
    JWT_SECRET: "c1563883a2dd7172282488e1bf66a3d5",
  },
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
}

module.exports = nextConfig

