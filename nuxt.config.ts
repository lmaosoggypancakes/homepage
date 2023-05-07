// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig(<any>{
  modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt/", "nuxt-icon"],
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
