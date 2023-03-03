<template>
  <div :class="['fei-skeleton__item', `fei-skeleton__${variant}`]">
    <img-placeholder v-if="variant === 'image'" />
  </div>
</template>

<script>
import ImgPlaceholder from './img-placeholder.vue'

export default {
  name: 'FSkeletonItem',
  components: { ImgPlaceholder },
  props: {
    variant: {
      type: String,
      default: 'text',
    },
  },
}
</script>
