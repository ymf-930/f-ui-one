<template>
  <transition mode="out-in" v-on="on">
    <slot></slot>
  </transition>
</template>

<script>
import { addClass, removeClass, hasClass } from '../../utils/dom'

export default {
  name: 'FMenuCollapseTransition',
  setup() {
    return {
      on: {
        beforeEnter(el) {
          el.style.opacity = 0.2
        },

        enter(el) {
          addClass(el, 'fei-opacity-transition')
          el.style.opacity = 1
        },

        afterEnter(el) {
          removeClass(el, 'fei-opacity-transition')
          el.style.opacity = ''
        },

        beforeLeave(el) {
          if (!el.dataset) el.dataset = {}

          if (hasClass(el, 'fei-menu--collapse')) {
            removeClass(el, 'fei-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            addClass(el, 'fei-menu--collapse')
          } else {
            addClass(el, 'fei-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            removeClass(el, 'fei-menu--collapse')
          }

          el.style.width = el.scrollWidth + 'px'
          el.style.overflow = 'hidden'
        },

        leave(el) {
          addClass(el, 'horizontal-collapse-transition')
          el.style.width = el.dataset.scrollWidth + 'px'
        },
      },
    }
  },
}
</script>
