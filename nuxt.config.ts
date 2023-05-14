// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@vueuse/motion/nuxt", "nuxt-icon"],
  css: ["@/assets/global.css"],
});
