import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://fixmyride-backend-80134211de1d.herokuapp.com",
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path, // keep /api
      },
    },
  },
});
