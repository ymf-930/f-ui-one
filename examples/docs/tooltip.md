## Tooltip 提示

文字提示气泡框，在鼠标悬停时显示，代替了系统的title提示。tooltip的default slot应该保证是一个dom或者一个component

### 基础用法

::: demo

```html

<template>
  <f-tooltip content="这是tooltip悬停文字">
    <span>这是一段文字，鼠标经过其上时会显示tooltip</span>
  </f-tooltip>
</template>
```

:::

### 多种悬停位置

::: demo

```html

<template>
  <div class="top">
    <f-tooltip content="Top Left text" placement="top-start">
      <f-button>上左</f-button>&nbsp;&nbsp;
    </f-tooltip>
    <f-tooltip content="Top Center text" placement="top">
      <f-button>上边</f-button>&nbsp;&nbsp;
    </f-tooltip>
    <f-tooltip content="Top Right text" placement="top-end">
      <f-button>上右</f-button>
    </f-tooltip>
  </div>
  <div class="center">
    <div class="center-left">
      <f-tooltip content="Left Top text" placement="left-start">
        <f-button>左上</f-button>
      </f-tooltip>
      <br><br>
      <f-tooltip content="Left Center text" placement="left">
        <f-button>左边</f-button>
      </f-tooltip>
      <br><br>
      <f-tooltip content="Left Bottom text" placement="left-end">
        <f-button>左下</f-button>
      </f-tooltip>
    </div>
    <div class="center-right">
      <f-tooltip content="Right Top text" placement="right-start">
        <f-button>右上</f-button>
      </f-tooltip>
      <br><br>
      <f-tooltip content="Right Center text" placement="right">
        <f-button>右边</f-button>
      </f-tooltip>
      <br><br>
      <f-tooltip content="Right Bottom text" placement="right-end">
        <f-button>右下</f-button>
      </f-tooltip>
    </div>
  </div>
  <div class="bottom">
    <f-tooltip content="Bottom Left text" placement="bottom-start">
      <f-button>下左</f-button>&nbsp;&nbsp;
    </f-tooltip>
    <f-tooltip content="Bottom Center text" placement="bottom">
      <f-button>下边</f-button>&nbsp;&nbsp;
    </f-tooltip>
    <f-tooltip content="Bottom Right text" placement="bottom-end">
      <f-button>下右</f-button>
    </f-tooltip>
  </div>
</template>
```

:::

### 不同主题

::: demo

```html

<template>
  <f-tooltip content="light" theme="light">
    <f-button>light</f-button>
  </f-tooltip>
  <f-tooltip content="Dark" theme="dark">
    <f-button>Dark(default)</f-button>
  </f-tooltip>
</template>
```

:::

### 多行

::: demo

```html

<template>
  <f-tooltip placement="top">
    <f-button>多行</f-button>
    <template #content>
      <div>这是多行文字</div>
      <div>这是多行文字</div>
    </template>
  </f-tooltip>
  <f-tooltip placement="top" content="我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本，我是一段长文本">
    <f-button>长文本</f-button>
  </f-tooltip>
</template>
```

:::

### 延时，触发时机和禁用提示

::: demo

```html

<template>
  <f-tooltip content="延时一秒显示悬停文字" :open-delay="1000">
    <f-button>延时一秒</f-button>
  </f-tooltip>
  <f-tooltip content="点击显示" trigger="click">
    <f-button>点击显示</f-button>
  </f-tooltip>
  <f-tooltip content="关闭和隐藏提示" :disabled="disabled">
    <f-button @click="disabled=!disabled">{{ disabled ? '关闭提示':'开启提示'}}</f-button>
  </f-tooltip>
</template>
<script>
  export default {
    data() {
      return {
        disabled: false
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| v-model:visible     | 状态是否可见   | Boolean  |  —   |  false   |
| content     | 显示的内容   | string  |  —   |   —   |
| placement     | 提示框出现的位置   | string  |  top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end   |   —   |
| disabled     | 是否禁用提示框   | Boolean  |  —   |   false   |
| transition | 自定义渐变动画   |  string     |  —   |   fade-in-linear   |
| show-arrow     | 是否显示箭头  |  Boolean  |  —   |   true   |
| theme     | 主题   |  string  |  dark 或 light   |   dark   |
| open-delay     | 延迟出现，单位毫秒   | number  | — |   0    |
| hide-delay     | 延迟消失，单位毫秒   | number  | — |   0    |
| offset    | 出现位置的偏移量   |  Number |  — |    12     |
| appendToBody    | 是否将弹层放置于 body 内   | Boolean  |  —   |   true   |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| content     | 提示框的内容，定义此 slot 时，会覆盖 props content。   |
