// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ["./app/assets/css/main.css"],
  srcDir: ".",
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  routeRules: {
    "/": { isr: 600 },
    "/houses/**": { ssr: true },
  },
  tailwindcss: {
    config: {
      content: [
        "./app/**/*.{vue,js,ts,jsx,tsx}",
        "./components/**/*.{vue,js,ts,jsx,tsx}",
        "./layouts/**/*.{vue,js,ts,jsx,tsx}",
        "./pages/**/*.{vue,js,ts,jsx,tsx}",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
      ],
      theme: {
        extend: {
          colors: {
            "dark-border": "#2d2d2d",
            "dark-card": "#222222",
          },
        },
      },
    },
  },
});
