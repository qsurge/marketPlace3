import { defineNuxtPlugin } from "nuxt/app";
export default defineNuxtPlugin((nuxtApp) => {
  // plugins/google-analytics.js
  // Load Google Analytics script
  if (process.client) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-2LMS6D5WM8`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-2LMS6D5WM8");
      module.exports = ({ app }, inject) => {
        inject('gtag', gtag)
      }    };
  } else {
    console.log("ssr");
  }
  
});
