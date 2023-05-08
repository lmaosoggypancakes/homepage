// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(<any>{
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/motion/nuxt",
    "nuxt-icon",
    "@vueuse/nuxt",
  ],
  motions: {
    directives: {
      "pop-bottom": {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100,
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0,
        },
      },
    },
  },
});
