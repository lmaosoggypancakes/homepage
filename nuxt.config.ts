// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@vueuse/motion/nuxt",
    "nuxt-icon",
  ],
  css: ["@/assets/global.css"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
});
