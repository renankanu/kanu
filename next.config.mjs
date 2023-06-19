/** @type {import('next').NextConfig} */
import nextMDX from '@next/mdx'
import rehypePrismPlus from 'rehype-prism-plus'
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
}

const withMDX = nextMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [rehypePrismPlus],
    providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig)
