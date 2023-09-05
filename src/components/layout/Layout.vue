<template>
  <div class="fei-layout">
    <div v-if="hasSider" class="fei-layout-sider" :style="siderStyle">
      <div class="sider-inner" :class="{ hide: collapsed && !showCollapsedContent }">
        <slot name="sider">hasSider</slot>
      </div>
      <div
        class="fei-layout-toggle-button"
        v-if="showToggle"
        :class="{ collapsed }"
        @click="collapsed = !collapsed"
      >
        <f-icon name="left"></f-icon>
      </div>
    </div>
    <div class="fei-layout-content" :style="contentStyles"><slot>content</slot></div>
  </div>
</template>

<script>
import { computed, ref } from 'vue'
export default {
  name: 'FLayout',
  props:{
    hasSider: {
      type: Boolean,
      default: true,
    },
    siderWidth: {
      type: Number,
      default: 240,
    },
    collapsedWidth: {
      type: Number,
      default: 40,
    },
    showToggle: {
      type: Boolean,
      default: true,
    },
    showCollapsedContent: {
      type: Boolean,
    },
    contentStyle: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props){
    const collapsed = ref(false)
    const siderStyle = computed(() => ({
      width: collapsed.value ? `${props.collapsedWidth}px` : `${props.siderWidth}px`,
    }))

    const contentStyles = computed(() => ({
      ...props.contentStyle,
      width: collapsed.value
        ? `calc(100% - ${props.collapsedWidth}px)`
        : `calc(100% - ${props.siderWidth}px)`,
    }))
    return {
      collapsed,
      siderStyle,
      contentStyles
    }
  }
}
</script>
