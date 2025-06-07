/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  transpilePackages: ['@mantine/core', '@mantine/hooks', '@mantinex/mantine-logo'],
};

export default nextConfig;
