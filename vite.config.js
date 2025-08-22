import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./", // Importante para rutas relativas
  build: {
    outDir: "dist", // Vercel buscará aquí los archivos
  },
});
