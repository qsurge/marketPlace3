import { defineComponent, mergeProps, useSSRContext } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace3/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate } from 'file:///home/agile/Downloads/GA-Nuxt/marketPlace3/node_modules/vue/server-renderer/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "HeaderMessage",
  __ssrInlineRender: true,
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-xs text-center text-gray-700 dark:text-gray-500" }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`<span>${ssrInterpolate(__props.text)}</span>`);
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/awesome/ActionSheet/HeaderMessage.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=HeaderMessage-e0b1fbee.mjs.map
