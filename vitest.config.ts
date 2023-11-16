/// <reference types="vitest" />
import { defineConfig } from "vitest/config";
import path from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  plugins: [vanillaExtractPlugin()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: [path.resolve(__dirname, "./src/shared/test/vitest-setup.ts")],
  },
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },
});
