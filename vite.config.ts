import react from "@vitejs/plugin-react"
import * as path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
