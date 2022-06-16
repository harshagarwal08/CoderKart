/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['m.media-amazon.com'],
  },
  reactStrictMode: true,
  env: {
    MONGO_URI: 'mongodb+srv://coderkart:hC4A2jYjz80j2lV6@cluster0.ybgkzzt.mongodb.net/?retryWrites=true&w=majority',
    NEXT_PUBLIC_HOST: 'https://coderkart.vercel.app/',
    NEXT_PUBLIC_KEY: 'rzp_test_e2nmbumusvMsas',
    KEY_SECRET: 'xZS2I7ZjpcnWnAcnag4u04we',
    SECRET_KEY_USER: 'mysecret123',
    JWT_SECRET: 'jwtsecret'
  },
}

module.exports = nextConfig
