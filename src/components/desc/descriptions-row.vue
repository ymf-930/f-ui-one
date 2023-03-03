<template>
  <tr>
    <template v-for="(cell, index) in row" :key="`tr3-${index}`">
      <template v-if="descriptions.border">
        <f-desc-cell :cell="cell" tag="td" type="label" />
        <f-desc-cell :cell="cell" tag="td" type="content" />
      </template>
      <f-desc-cell v-else :cell="cell" tag="td" type="both" />
    </template>
  </tr>
</template>

<script>
import { inject } from 'vue'
import FDescCell from './descriptions-cell'

export default {
  name: 'FDescRow',
  components: { FDescCell },
  props: {
    row: {
      type: Array,
    },
  },
  setup() {
    const descriptions = inject('FDesc', {})

    return {
      descriptions,
    }
  },
}
</script>
