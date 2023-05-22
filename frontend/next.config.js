/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/products",
                destination: "http://localhost:5000/api/products",
            },
        ];
    },
};

module.exports = nextConfig;
