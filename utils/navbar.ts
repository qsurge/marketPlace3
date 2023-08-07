import { RouteLocationRaw } from "#vue-router";
import { useNuxtApp } from "nuxt/app";

export function parseMenuTitle(
  this: any,
  title?: string | ((nuxt: any) => string)
) {
  console.log("beforegtag");

  if (process.client) {
    alert('Hello')
    this.$gtag.event("button_click", {
      event_category: "Engagement",
      event_label: title,
    });
  }
  return typeof title === "function" ? title(useNuxtApp()) : title || "";
}
export function parseMenuRoute(
  to?: RouteLocationRaw | ((nuxt: any) => RouteLocationRaw)
) {
  return typeof to === "function" ? to(useNuxtApp()) : to;
}
