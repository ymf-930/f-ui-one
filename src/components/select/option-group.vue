<template>
  <ul v-show="visible" class="fei-select-group__wrap">
    <li class="fei-select-group__title">{{ label }}</li>
    <li>
      <ul class="fei-select-group">
        <slot></slot>
      </ul>
    </li>
  </ul>
</template>

<script>
import { provide, inject, ref, reactive, toRefs } from 'vue'
import { selectGroupKey, selectKey, selectEvents } from './token'

export default {
  name: 'FOptionGroup',
  componentName: 'FOptionGroup',

  props: {
    label: String,
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const visible = ref(true)
    provide(
      selectGroupKey,
      reactive({
        ...toRefs(props),
      }),
    )
    const select = inject(selectKey)
    const queryChange = () => {
      visible.value = select?.optionsArray?.some(option => option.visible === true)
    }
    select.selectEmitter.on(selectEvents.groupQueryChange, queryChange)
    return {
      visible,
    }
  },
}
</script>
