import _sfc_main$1 from "./Navbar-20deaaeb.js";
import __nuxt_component_1 from "./Content-21a6cbaa.js";
import _sfc_main$2 from "./Footer-a3a5096e.js";
import { mergeProps, withCtx, renderSlot, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./nuxt-link-f805a121.js";
import "ufo";
import "hookable";
import "../server.mjs";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "@vue/devtools-api";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "ohash";
import "cookie-es";
import "vue-gtag";
import "defu";
import "./Icon-751c8332.js";
import "@iconify/vue/dist/offline";
import "@iconify/vue";
import "./Wrapper-c644a052.js";
import "./Item-3e5d7422.js";
import "./index-501dfedf.js";
import "./navbar-a0b107f8.js";
import "./open-closed-6ea9de77.js";
import "./hidden-6a6c0b28.js";
import "./ThemeSwitcher-68b801b9.js";
import "./index-3da0c46b.js";
import "./index-5292284a.js";
import "./Group-e341acbd.js";
import "./ItemButton-d54c665d.js";
import "./Header-696a5af6.js";
import "./HeaderTitle-4bb2c823.js";
import "./Item-5425658b.js";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutPageNavbar = _sfc_main$1;
  const _component_LayoutPageContent = __nuxt_component_1;
  const _component_LayoutPageFooter = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "overflow-x-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_LayoutPageNavbar, { class: "h-[64px] max-h-[64px]" }, null, _parent));
  _push(ssrRenderComponent(_component_LayoutPageContent, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
  _push(ssrRenderComponent(_component_LayoutPageFooter, { class: "h-[52px] md:h-[42px]" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/page.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const page = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  page as default
};
//# sourceMappingURL=page-b8a1f6af.js.map
