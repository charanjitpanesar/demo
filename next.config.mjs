/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        MONGO_URI: 'mongodb://localhost:27017/demo',
        SALT_ROUNDS: 10,
        SALT_SECRET: "saynt"
    },
};

export default nextConfig;
