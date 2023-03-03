<template>
  <div class="fei-desc">
    <div v-if="title || extra || $slots.title || $slots.extra" class="fei-desc__header">
      <div class="fei-desc__title">
        <slot name="title">{{ title }}</slot>
      </div>
      <div class="fei-desc__extra">
        <slot name="extra">{{ extra }}</slot>
      </div>
    </div>

    <div class="fei-desc__body">
      <table :class="[{'is-bordered': border}, size ? `fei-desc--${size}` : '']">
        <tbody>
        <template v-for="(row, index) in rows" :key="index">
          <f-desc-row :row="row" />
        </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { computed, provide } from 'vue'
import FDescRow from './descriptions-row.vue'
import FDescItem from '../desc-item/item.vue'

export default {
  name: 'FDesc',
  components: {
    FDescRow,
    [FDescItem.name]: FDescItem,
  },
  props: {
    border: {
      type: Boolean,
      default: false,
    },
    column: {
      type: Number,
      default: 3,
    },
    labelWidth: {
      type: Number,
    },
    size: {
      type: String,
      validator: (val) => ['large', 'default', 'small', 'mini'].includes(val),
      default: 'default',
    },
    title: {
      type: String,
      default: '',
    },
    extra: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    provide('FDesc', props)

    const flattedChildren = children => {
      const temp = Array.isArray(children) ? children : [children]
      const res = []
      temp.forEach(child => {
        if (Array.isArray(child.children)) {
          res.push(...flattedChildren(child.children))
        } else {
          res.push(child)
        }
      })
      return res
    }

    const filledNode = (node, span, count, isLast = false) => {
      if (!node.props) {
        node.props = {}
      }
      if (span > count) {
        node.props.span = count
      }
      if (isLast) {
        // set the max span, cause of the last td
        node.props.span = props.column
      }
      return node
    }

    const rows = computed(() => {
      const children = flattedChildren(slots.default?.()).filter(node => node?.type?.name === 'FDescItem')
      const rows = []
      let temp = []
      let count = props.column

      children.forEach((node, index) => {
        const span = node.props?.span || 1

        if (index === children.length - 1) {
          temp.push(filledNode(node, span, count, true))
          rows.push(temp)
          return
        }

        if (span < count) {
          count -= span
          temp.push(node)
        } else {
          temp.push(filledNode(node, span, count))
          rows.push(temp)
          count = props.column
          temp = []
        }
      })

      return rows
    })

    return {
      rows,
    }
  },
}
</script>
