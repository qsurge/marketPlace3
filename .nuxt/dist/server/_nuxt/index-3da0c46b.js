import { _ as __nuxt_component_0 } from "./nuxt-link-f805a121.js";
import { defineComponent, toRef, unref, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    },
    to: {
      type: [String, Object],
      default: void 0
    },
    href: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    const props = __props;
    const href = toRef(props, "href");
    const to = toRef(props, "to");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      if (unref(to)) {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          tag: "a",
          to: unref(to),
          class: `transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "default", {}, () => {
                _push2(`${ssrInterpolate(__props.text)}`);
              }, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "default", {}, () => [
                  createTextVNode(toDisplayString(__props.text), 1)
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (!unref(href)) {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: `transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`,
          href: "#"
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.text)}`);
        }, _push, _parent);
        _push(`</a>`);
      } else {
        _push(`<a${ssrRenderAttrs(mergeProps({
          class: `transition-colors duration-300 dark:hover:text-white hover:text-gray-900 hover:underline`,
          href: unref(href)
        }, _attrs))}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`${ssrInterpolate(__props.text)}`);
        }, _push, _parent);
        _push(`</a>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awesome/Link/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-3da0c46b.js.map
