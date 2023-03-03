<template>
  <div :class="[
        'fei-divider',
        `fei-divider-${type}`,
        {
          ['fei-divider-dashed']: !!dashed
        }
      ]">
    <span v-if="$slots.default" :class="[
        'fei-divider-inner-text', `is-${align}`
      ]">
      <slot></slot>
    </span>
  </div>
</template>

<script>
export default {
  name: 'FDivider',
  props: {
    type: {
      type: String,
      default: 'horizontal',// 'horizontal', 'vertical'
      validator(val) {
        return ['horizontal', 'vertical'].includes(val)
      },
    },
    align: {
      type: String,
      default: 'center', // 'left', 'right', 'center'
      validator(val) {
        return ['left', 'center', 'right'].includes(val)
      },
    },
    dashed: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
