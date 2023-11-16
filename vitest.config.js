import { defineConfig } from "vitest/config";
import path from "path";
import { fileURLToPath } from "url";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
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
