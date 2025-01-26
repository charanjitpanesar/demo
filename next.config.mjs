/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URI: 'mongodb://localhost:27017/demo',
        SALT_ROUNDS: '10',
        SALT_SECRET: 'saynt',
        SMTP_USER: "ak669212@gmail.com",
        SMTP_PASS: "lolb oxaz xgow",
        SMTP_EMAIL: "ak669212@gmail.com",
    }
};

export default nextConfig;
