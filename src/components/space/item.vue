<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FSpace',
  props: {
    prefixCls: {
      type: String,
      default: 'fei-space',
    },
  },
  setup(props) {
    return {
      classes: computed(() => `${props.prefixCls}__item`),
    }
  },
}
</script>
