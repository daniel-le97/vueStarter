import vue from "@vitejs/plugin-vue";
import { defineConfig, UserConfig } from "vite";

export default defineConfig((config: UserConfig) => {
  config.plugins = [vue()];
  config.build = {
    outDir: "docs",
    sourcemap: false,
  };
  config.server = {
    port: 8080,
  };
  return config;
});
