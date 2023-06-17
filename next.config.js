/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
}

const withMDX = require('@next/mdx')({
  providerImportSource: '@mdx-js/react',
})
module.exports = withMDX(nextConfig)
