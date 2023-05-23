/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async rewrites() {
        return [
            {
                source: "/api/products",
                destination: "http://localhost:5000/api/products",
            },
            {
                source: "/api/products/:id",
                destination: "http://localhost:5000/api/products/:id",
            },
        ];
    },
};

module.exports = nextConfig;
