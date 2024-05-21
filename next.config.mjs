/** @type {import('next').NextConfig} */
const nextConfig = {};
const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/
  });
  
  module.exports = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  });
export default nextConfig;
