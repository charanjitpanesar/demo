/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        SMTP_USER: process.env.SMTP_USER,
        SMTP_PASS: process.env.SMTP_PASS,
        SMTP_EMAIL: process.env.SMTP_EMAIL,
        TO_EMAIL: process.env.TO_EMAIL,
    }
};

export default nextConfig;
