// https://github.com/antfu/unplugin-auto-import

import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "pinia", "vitest"],
      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: ["./components", "./components/**"],
      vueTemplate: true,
      // 타입 파일 생성 false or "경로"
      dts: "vitest-setup/vitest.types.d.ts",
    }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./vitest-setup/nuxt-autoImports.ts"],
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__dirname, "/") },
      { find: "~", replacement: resolve(__dirname, "") },
      { find: "~/*", replacement: resolve(__dirname, "/*") },
      { find: "@", replacement: resolve(__dirname, "") },
      { find: "@/*", replacement: resolve(__dirname, "/*") },
      { find: "~~", replacement: resolve(__dirname, "") },
      { find: "~~/*", replacement: resolve(__dirname, "/*") },
      { find: "@@", replacement: resolve(__dirname, "") },
      { find: "@@/*", replacement: resolve(__dirname, "/*") },
      { find: "assets", replacement: resolve(__dirname, "/assets") },
      { find: "assets/*", replacement: resolve(__dirname, "/assets/*") },
      { find: "public", replacement: resolve(__dirname, "/public") },
      { find: "public/*", replacement: resolve(__dirname, "/public/*") },
    ],
  },
});
