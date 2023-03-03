<template>
  <ul :class="cpClasses">
    <slot></slot>
  </ul>
</template>

<script>
const prefixCls = 'fei-timeline'

export default {
  name: 'FTimeline',
  props: {
    pending: Boolean,
  },
  computed: {
    cpClasses() {
      return [
        `${prefixCls}`,
        {
          [`${prefixCls}-pending`]: this.pending,
        },
      ]
    },
  },
}
</script>
