/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    env: {
      NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: 'dh4enklg7',
      NEXT_PUBLIC_CLOUDINARY_PRESET_NAME: 'sbcasdfa',
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
  };
  
module.exports = nextConfig;
