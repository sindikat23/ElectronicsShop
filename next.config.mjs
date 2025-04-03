/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        
// "https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/thumbnail.png"
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.dummyjson.com",
                pathname: "/products/images/**"
            }
        ]
    }
};

export default nextConfig;
