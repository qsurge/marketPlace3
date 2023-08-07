import { RouteLocationRaw } from '#vue-router'

export function parseMenuTitle(title?: string | ((nuxt: any) => string)) {
  console.log('beforegtag')
  this.$gtag('event', 'button_click', {
    event_category: 'Engagement',
    event_label: title,
  });
    return typeof title === 'function' ? title(useNuxtApp()) : title || ''
}
export function parseMenuRoute(
  to?: RouteLocationRaw | ((nuxt: any) => RouteLocationRaw)
) {
  return typeof to === 'function' ? to(useNuxtApp()) : to
}
