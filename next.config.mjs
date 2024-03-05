// next.config.mjs
import withVideos from "next-videos";

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default {
    ...nextConfig,
    ...withVideos(),
};
