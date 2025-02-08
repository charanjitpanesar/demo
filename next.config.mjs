/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: process.env.BASE_URL,
        MONGO_URI: process.env.MONGO_URI,
        SALT_ROUNDS: process.env.SALT_ROUNDS,
        SALT_SECRET: process.env.SALT_SECRET,
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        SMTP_EMAIL: process.env.SMTP_EMAIL,
    },
    images: {
        remotePatterns: [
            {
                protocol: process.env.BASE_URL.startsWith('https') ? 'https' : 'http',
                hostname: new URL(process.env.BASE_URL).hostname,
                pathname: '/uploads/**',
            },
        ],
        domains: ['localhost'],
    }
};

export default nextConfig;
