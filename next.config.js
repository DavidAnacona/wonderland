/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en-US', 'es-ES', 'nl-NL'],
    defaultLocale: 'en-US'
  },
  reactStrictMode: true,
  swcMinify: true
}

module.exports = nextConfig
