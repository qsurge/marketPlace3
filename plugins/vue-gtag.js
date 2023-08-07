import { defineNuxtPlugin } from "nuxt/app";
import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: { id: "UA-174146361-1" },
  });
});
