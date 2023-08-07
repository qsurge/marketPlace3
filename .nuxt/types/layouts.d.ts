import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "page"
declare module "/home/agile/Downloads/GA-Nuxt/marketPlace3/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}