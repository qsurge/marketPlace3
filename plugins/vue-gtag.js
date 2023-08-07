import { defineNuxtPlugin } from "nuxt/app";
import VueGtag from "vue-gtag";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueGtag, {
    config: { id: "G-2LMS6D5WM8" },
  });
});
