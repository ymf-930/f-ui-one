## Popover 气泡弹窗

气泡类型的弹窗,用于放置更多信息或询问流程等

### 基础用法

::: demo

```html

<template>
  <div>
    <f-popover trigger="hover" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <f-button>Hover</f-button>
    </f-popover>
    <f-popover trigger="click" title="Title" content="这是一段内容这是一段内容这是一段内容" :z-index="1000">
      <f-button>Click</f-button>
    </f-popover>
    <f-popover trigger="focus" title="Title" content="这是一段内容这是一段内容这是一段内容">
      <f-button>Focus</f-button>
    </f-popover>
  </div>
</template>
```

:::

### 多种悬停位置

::: demo

```html

<template>
  <div class="top">
    <f-popover title="Title" content="Top Left text" placement="top-start">
      <f-button>上左</f-button>&nbsp;&nbsp;
    </f-popover>
    <f-popover title="Title" content="Top Center text" placement="top">
      <f-button>上边</f-button>&nbsp;&nbsp;
    </f-popover>
    <f-popover title="Title" content="Top Right text" placement="top-end">
      <f-button>上右</f-button>
    </f-popover>
  </div>
  <div class="center">
    <div class="center-left">
      <f-popover title="Title" content="Left Top text" placement="left-start">
        <f-button>左上</f-button>
      </f-popover>
      <br><br>
      <f-popover title="Title" content="Left Center text" placement="left">
        <f-button>左边</f-button>
      </f-popover>
      <br><br>
      <f-popover title="Title" content="Left Bottom text" placement="left-end">
        <f-button>左下</f-button>
      </f-popover>
    </div>
    <div class="center-right">
      <f-popover title="Title" content="Right Top text" placement="right-start">
        <f-button>右上</f-button>
      </f-popover>
      <br><br>
      <f-popover title="Title" content="Right Center text" placement="right">
        <f-button>右边</f-button>
      </f-popover>
      <br><br>
      <f-popover title="Title" content="Right Bottom text" placement="right-end">
        <f-button>右下</f-button>
      </f-popover>
    </div>
  </div>
  <div class="bottom">
    <f-popover title="Title" content="Bottom Left text" placement="bottom-start">
      <f-button>下左</f-button>&nbsp;&nbsp;
    </f-popover>
    <f-popover title="Title" content="Bottom Center text" placement="bottom">
      <f-button>下边</f-button>&nbsp;&nbsp;
    </f-popover>
    <f-popover title="Title" content="Bottom Right text" placement="bottom-end">
      <f-button>下右</f-button>
    </f-popover>
  </div>
</template>
```

:::

### 浮层内关闭

::: demo

```html

<template>
  <f-popover v-model:visible="visible">
    <f-button type="text" @click="close">点我打开浮层</f-button>
    <a style="margin-left: 30px;">Click</a>
    <template #content>
      <f-button type="text" @click="close">关闭</f-button>
    </template>
  </f-popover>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      close() {
        this.visible = false;
      }
    }
  }
</script>
```

:::

### 更多内容

::: demo

```html

<template>
  <div>
    <f-popover placement="top" width="200px">
      <f-button>长文本</f-button>
      <template #content>
        <div>这是一段很长很长很长很长很长很长很长很长很长很长很长很长很长很长的描述</div>
      </template>
    </f-popover>
    <f-popover placement="right" width="300px">
      <f-button>更多内容</f-button>
      <template #content>
        <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
        <div>这是自定义内容~这是自定义内容~这是自定义内容~这是自定义内容~</div>
      </template>
    </f-popover>
  </div>
</template>
```

:::

### 确认气泡框

通过设置属性confirm开启确认框模式。确认框只会以 click 的形式激活，并且只会显示 title 的内容，忽略 content。

::: demo

```html

<template>
  <div>
    <f-popover v-model:visible="visible" :width="240">
      <f-button type="danger" plain>确认气泡框</f-button>
      <template #content>
        <p>
          <f-icon name="question-circle" size="16" color="#f5222d"></f-icon>
          Are you sure delete this item?
        </p>
        <div style="text-align: right; margin: 0">
          <f-button size="mini" type="text" @click="cancel">取消</f-button>
          <f-button type="primary" size="mini" @click="ok">确定</f-button>
        </div>
      </template>
    </f-popover>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      ok() {
        this.$message('点击了确定');
        this.visible = false
      },
      cancel() {
        this.$message('点击了取消');
        this.visible = false
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| trigger     | 触发方式   | string  | hover（悬停）click（点击）focus（聚焦） |  click  |
| title     | 标题   | string  |  —   |   —   |
| content     | 显示的内容   | string  |  —   |   —   |
| width         | 宽度  |  string/number  | — |   —    |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| v-model:visible     | 状态是否可见   | Boolean  |  —   |  false   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| transition | 自定义渐变动画   |  string     |  —   |   fade-in-linear   |
| show-arrow     | 是否显示箭头  |  Boolean  |  —   |   true   |
| popper-options  | popper.js 参数   |  Object  |   —    |   { boundariesElement: 'body', gpuAcceleration: false }   |
| show-after     | 延迟出现，单位毫秒   | number  | — |   0    |
| hide-after     | 延迟消失，单位毫秒   | number  | — |   0    |
| auto-close     | tooltip出现后自动隐藏演示，单位毫秒，为0时不隐藏  | number  | — |   0    |
| manual    | 手动控制模式，true时鼠标进入移出事件不生效   | Boolean  |  —   |   false   |
| offset    | 出现位置的偏移量   |  Number |  — |    0     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   true   |
| options    | 自定义 popper.js 的配置项具体参考popper.js   | Object  |  —   |   —    |
| z-index    | 层级 | Number，默认为2000，弹窗会自增，如设置了此值，则会追加当前值后进行自增进行自增  |      —      |  0  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
