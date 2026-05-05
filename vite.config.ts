import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        // При новой сборке — сразу берём управление (без ожидания)
        skipWaiting: true,
        clientsClaim: true,
        // Кэшируем только код и стили; картинки (bottle-images) не трогаем
        globPatterns: ["**/*.{js,css,html}"],
        // Исключаем папку с бутылками из precache
        globIgnores: ["**/bottle-images/**"],
      },
      manifest: {
        name: "Vinaria Explorer Moldova",
        short_name: "WineExplorer",
        theme_color: "#6b1f2c",
        background_color: "#0d0d10",
        display: "standalone",
        start_url: "/WineExplorerMd/",
        icons: [],
      },
    }),
  ],
  base: "/WineExplorerMd/",
});
