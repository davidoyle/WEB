import type { Config } from "open-next";

const config: Config = {
  outDir: ".vercel/output",
  nextjs: {
    // IMPORTANT: enable pages router support
    usePagesRouter: true,
  },
  middleware: false,
};

export default config;
