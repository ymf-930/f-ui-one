<template>
  <div class="demo-block" :class="[blockClass]">
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div
      class="demo-block-control"
      ref="control"
    >
      <f-tooltip content="复制代码" placement="top">
        <i class="f-iconfont f-icon-file-copy" @click="copyCode"></i>
      </f-tooltip>
      <f-tooltip :content="controlText" placement="top">
        <i class="f-iconfont f-icon-code ml-15" @click="isExpanded = !isExpanded"></i>
      </f-tooltip>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
        <div class="code-up pb-8">
          <f-button dashed icon='up' @click="isExpanded = false" style="width: 100%">收起代码</f-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nextTick } from 'vue'
import FTooltip from '../../src/components/tooltip/tooltip'
import FButton from '../../src/components/button/button.vue'

export default {
  components: { FButton, FTooltip },
  data() {
    return {
      isExpanded: false,
      fixedControl: false,
      scrollParent: null,
    }
  },
  computed: {
    blockClass() {
      return `demo-${this.$router.currentRoute.value.path.split('/').pop()}`
    },
    controlText() {
      return this.isExpanded ? '收起代码' : '显示代码'
    },
    codeArea() {
      return this.$el.getElementsByClassName('meta')[0]
    },
    codeAreaHeight() {
      if (this.$el.getElementsByClassName('description').length > 0) {
        return this.$el.getElementsByClassName('description')[0].clientHeight +
          this.$el.getElementsByClassName('highlight')[0].clientHeight + 20
      }
      return this.$el.getElementsByClassName('highlight')[0].clientHeight
    },
  },
  methods: {
    copyCode(){
      this.$copy().then(result => {
        if (result) {
          this.$message.info({ message: `已复制代码至剪切板` })
        }
      })
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : '0'
    },
  },
  mounted() {
    nextTick(() => {
      let highlight = this.$el.getElementsByClassName('highlight')[0]
      if (this.$el.getElementsByClassName('description').length === 0) {
        highlight.style.width = '100%'
      }
    })
  },
}
</script>

<style lang="stylus">
.demo-block {
  padding: 16px 16px 0;
  border: solid 1px #ebebeb;
  border-radius: var(--fei-border-radius-default);
  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }
  .source {
    padding-bottom: 16px;
  }
  .meta {
    position: relative;
    background-color: #fff;
    overflow: hidden;
    height: 0;
    transition: height .2s;
  }
  .description {
    padding: 10px;
    box-sizing: border-box;
    border: solid 1px #ebebeb;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: #666;
    word-break: break-word;
    margin: 10px;
    background-color: #fff;
    p {
      margin: 0;
      line-height: 26px;
    }
    code {
      color: #5e6d82;
      background-color: #e6effb;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .highlight {
    pre {
      margin-bottom: 8px;
    }
    code {
      &.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;
        &::before {
          content: none;
        }
      }
    }
  }
  .demo-block-control {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    text-align: center;
    color: #d3dce6;
    cursor: pointer;
    border-top 1px dashed #d7dbdf;
    border-radius: 0 0 var(--fei-border-radius-default) var(--fei-border-radius-default);
    i {
      font-size: 16px;
      line-height: 44px;
      transition: .3s;
      color: #86929e;
      &:hover {
        color: #1677ff;
        transform: scale(1.2);
      }
    }
    > span {
      font-size: 14px;
      line-height: 44px;
      transition: .3s;
    }
  }
}
</style>
