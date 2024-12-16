import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};
module.exports = {
  productionBrowserSourceMaps: true,
}
module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["@locator/babel-jsx/dist", {
      env: "development",
    }]
  ]
};

export default nextConfig
