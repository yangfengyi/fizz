import type { UserConfig } from "vite";

// vite插件体系
// 1. vite当中解析vue的插件
import vue from '@vitejs/plugin-vue'


import { resolve } from "path";

const config: UserConfig = {
  resolve: {
    // 定义别名
    alias: [{ find: "@/", replacement: `${resolve(__dirname, "src")}/` }],
  },
  plugins: [vue()]
};

export default config;