import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA, type ManifestOptions } from "vite-plugin-pwa";

const manifest: false | Partial<ManifestOptions> | undefined = {
  theme_color: "#8936FF",
  background_color: "#2EC6FE",
  icons: [
    {
      purpose: "maskable",
      sizes: "512x512",
      src: "icon512_maskable.png",
      type: "image/png",
    },
    {
      purpose: "any",
      sizes: "512x512",
      src: "icon512_rounded.png",
      type: "image/png",
    },
  ],
  screenshots: [
    {
      src: "screenshot/desktop.png",
      sizes: "1280x720",
      type: "image/png",
      form_factor: "wide",
    },
    {
      src: "screenshot/mobile.png",
      sizes: "1080x1920",
      type: "image/png",
    },
  ],
  orientation: "any",
  display: "standalone",
  //dir: "auto",
  lang: "ru-RU",
  name: "pwa",
  short_name: "pwa",
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "prompt",
      manifest,
      workbox: {
        runtimeCaching: [
          {
            // urlPattern: ({ request }) => request.destination === "image",
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: "CacheFirst",
            options: {
              cacheName: "images-cache",
              expiration: {
                maxEntries: 100,
                //maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
          {
            urlPattern: /^https:\/\/jsonplaceholder\.typicode\.com\/posts.*/,
            handler: "NetworkFirst",
            options: {
              cacheName: "api-cache",
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60, // 1 hour
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
              matchOptions: {
                ignoreSearch: true,
              },
            },
          },
        ],
      },
    }),
  ],
});
