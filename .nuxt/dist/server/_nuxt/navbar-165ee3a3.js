import { i as useNuxtApp } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "klona";
function parseMenuTitle(title) {
  console.log("beforegtag");
  return typeof title === "function" ? title(useNuxtApp()) : title || "";
}
function parseMenuRoute(to) {
  return typeof to === "function" ? to(useNuxtApp()) : to;
}
export {
  parseMenuRoute as a,
  parseMenuTitle as p
};
//# sourceMappingURL=navbar-165ee3a3.js.map
