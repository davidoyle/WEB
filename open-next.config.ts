import type { Config } from "open-next";

const config: Config = {
  outDir: ".vercel/output",
  nextjs: {
    usePagesRouter: true,
  },
  middleware: false,
};

export default config;
