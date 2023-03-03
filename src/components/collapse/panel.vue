<template>
  <div :class="[ 'fei-collapse-item',{ 'fei-collapse-item-active': isActive } ]">
    <div class="fei-collapse-header" @click="handleHeaderClick">
      <f-icon name="right" v-if="!hideArrow"></f-icon>
      <slot name="title">
        {{ title }}
      </slot>
    </div>
    <f-collapse-transition>
      <div class="fei-collapse-content" v-show="isActive">
        <div class="fei-collapse-content-box">
          <slot></slot>
        </div>
      </div>
    </f-collapse-transition>
  </div>
</template>

<script>
import { ref, inject, computed } from 'vue'
import FIcon from '../icon'
import FCollapseTransition from '../collapse-transition'

export const generateId = () => Math.floor(Math.random() * 10000)
export default {
  name: 'FCollapsePanel',
  components: { FCollapseTransition, FIcon },
  props: {
    title: String,
    name: String,
    hideArrow: Boolean,
    disabled: Boolean,
  },
  setup(props) {
    const collapse = inject('collapse')
    const collapseMitt = collapse?.collapseMitt

    const contentWrapStyle = ref({
      height: 'auto',
      display: 'block',
    })
    const contentHeight = ref(0)
    const isClick = ref(false)
    const id = ref(generateId())

    const isActive = computed(() => {
      return collapse?.activeNames.value.indexOf(props.name) > -1
    })

    const handleHeaderClick = () => {
      if (props.disabled) return
      collapseMitt?.emit('item-click', props.name)
      isClick.value = true
    }

    return {
      isActive,
      contentWrapStyle,
      contentHeight,
      isClick,
      id,
      handleHeaderClick,
      collapse,
    }
  },
}
</script>
