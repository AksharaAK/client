// next.config.js
const dotenv = require("dotenv");
dotenv.config();

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
