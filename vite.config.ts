import { defineConfig } from "vite"
import WindiCSS from "vite-plugin-windicss"
import vue from "@vitejs/plugin-vue"
const path = require("path")

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
    ],
  },

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "sz-btn",
    },

    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
      },
    },
  },
})
