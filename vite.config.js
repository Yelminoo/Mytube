import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    defaultIsRelative: true,
    alias: {
      "@": "/src", // You can add more aliases as needed
    },
  },
});
