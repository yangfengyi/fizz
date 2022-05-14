import type { UserConfig } from "vite";
import { resolve } from "path";

const config: UserConfig = {
  resolve: {
    // 定义别名
    alias: [{ find: "@/", replacement: `${resolve(__dirname, "src")}/` }],
  },
};
