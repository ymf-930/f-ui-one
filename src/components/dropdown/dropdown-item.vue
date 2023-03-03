<template>
  <li
    class="fei-dropdown-item"
    :class="{
      'fei-dropdown-item-disabled': disabled,
      'fei-dropdown-item-divided': divided,
      'fei-dropdown-item-selected': selected
    }"
    :aria-disabled="disabled"
    :tabindex="disabled ? null : -1"
    @click="handleClick"
  >
    <i v-if="icon" :class="`f-iconfont f-icon-${icon}`"></i>
    <slot></slot>
  </li>
</template>
<script>
import { getCurrentInstance } from 'vue'
import { useDropdown } from './useDropdown'

export default {
  name: 'FDropdownItem',
  props: {
    name: {
      type: [Object, String, Number],
      default: () => ({}),
    },
    disabled: Boolean,
    divided: Boolean,
    selected: Boolean,
    icon: String,
  },
  setup(props) {
    const { bDropdown } = useDropdown()
    const _instance = getCurrentInstance()

    function handleClick(e) {
      if (props.disabled) return
      if (bDropdown.hideOnClick.value) {
        bDropdown.handleClick?.()
      }
      bDropdown.commandHandler?.(props.name, _instance, e)
    }

    return {
      handleClick,
    }
  },
}
</script>
