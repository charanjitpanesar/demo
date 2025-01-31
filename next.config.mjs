/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: "http://localhost:3000",
        MONGO_URI: 'mongodb://localhost:27017/demo',
        SALT_ROUNDS: '10',
        SALT_SECRET: 'saynt',
        SMTP_USER: "ak669212@gmail.com",
        SMTP_PASS: "oqui gkqc aseu ", //fezp
        SMTP_EMAIL: "ak669212@gmail.com",
    }
};

export default nextConfig;
