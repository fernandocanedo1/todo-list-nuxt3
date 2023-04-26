import vuetify from "vite-plugin-vuetify";
// PWA Config
const title = "Todo List";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  // import styles
  css: ["@/assets/main.scss"],
  // enable takeover mode
  build: { transpile: ["vuetify"] },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    "@kevinmarrec/nuxt-pwa",
    async (options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      );
    },
  ],

  app: {
    head: {
      title: "Todo List",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
  },

 
});
