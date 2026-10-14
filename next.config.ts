import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray package-lock.json higher up the tree otherwise confuses root detection.
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
