import { createResolver } from "@nuxt/kit";
const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // exp
  experimental: {
    localLayerAliases: true,
  },

  // app config
  app: {
    // global transition
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
    head: {
      script: [
        {
          hid: "gtm",
          children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-GP84QRXRXE');`,
          type: "text/javascript",
        },
      ],
    },
  },

  // typescripts
  // todo: feat/strict-type-check
  // typescript: {
  //   strict: true,
  //   typeCheck: true,
  // },

  // modules
  modules: [
    // chore
    // '@nuxtjs/eslint-module',
    // styling & ui
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    // management
    "@pinia/nuxt",
    "@vueuse/nuxt",
    // contents,
    "@nuxt/content",

    // todo: feat/localization
    // '@nuxtjs/i18n'
  ],

  css: [
    resolve("./assets/scss/_variables.scss"),
    resolve("./assets/scss/app.scss"),
  ],

  components: [
    {
      prefix: "Layout",
      path: resolve("./components/layouts"),
      global: true,
    },
    {
      prefix: "Awesome",
      path: resolve("./components/awesome"),
      global: true,
    },
  ],

  imports: {
    dirs: [resolve("./stores"), "~/stores"],
  },

  // module::pinia
  pinia: {
    autoImports: [["defineStore", "definePiniaStore"]],
  },

  // module::headlessui
  headlessui: {
    prefix: "Headless",
  },

  // module::color-mode
  colorMode: {
    classSuffix: "",
  },

  // module::content
  content: {
    documentDriven: true,
    markdown: {
      mdc: true,
    },
    highlight: {
      theme: "github-dark",
    },
  },
  nitro: {
    prerender: { ignore: ["/api"] },
  },
});
