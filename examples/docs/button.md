## Button 按钮

常用的操作按钮。

### 基础用法

默认按钮，可设置`dashed`虚线和`background`拟物按钮

::: demo

```html
<template>
  <div class="demo-button" flex="cross:center">
    <f-button>Default</f-button>
    <f-button dashed>Dashed</f-button>
    <f-button background>Background</f-button>
  </div>
</template>
```

:::

### 不同状态

使用`type`可以设置不同状态的按钮样式

::: demo

```html
<template>
  <div class="demo-button">
    <f-button type="primary">Primary</f-button>
    <f-button type="success">Success</f-button>
    <f-button type="info">Info</f-button>
    <f-button type="warning">Warning</f-button>
    <f-button type="danger">Danger</f-button>
  </div>
</template>
```

:::

### 不同的按钮效果

可以另外给按钮设置不同的按钮效果，如`plain`简约按钮，`round`圆角按钮，`dashed`虚线按钮和`transparent`透明按钮四种不同种类的按钮

::: demo

```html
<template>
  <f-divider align="left">[plain]简约按钮</f-divider>
  <div class="demo-button">
    <f-button type="primary" plain>Primary</f-button>
    <f-button type="success" plain>Success</f-button>
    <f-button type="info" plain>Info</f-button>
    <f-button type="warning" plain>Warning</f-button>
    <f-button type="danger" plain>Danger</f-button>
  </div>
  <f-divider align="left">[round]圆角按钮</f-divider>
  <div class="demo-button">
    <f-button type="primary" round>Primary</f-button>
    <f-button type="success" round>Success</f-button>
    <f-button type="info" round>Info</f-button>
    <f-button type="warning" round>Warning</f-button>
    <f-button type="danger" round>Danger</f-button>
  </div>
  <f-divider align="left">[dashed]虚线按钮</f-divider>
  <div class="demo-button">
    <f-button type="primary" dashed>Primary</f-button>
    <f-button type="success" dashed>Success</f-button>
    <f-button type="info" dashed>Info</f-button>
    <f-button type="warning" dashed>Warning</f-button>
    <f-button type="danger" dashed>Danger</f-button>
  </div>
  <f-divider align="left">[transparent]透明按钮</f-divider>
  <div class="demo-button" style="background: #cad4d4;padding: 10px 6px;">
    <f-button type="primary" transparent size="small">Primary</f-button>
    <f-button type="success" transparent size="small">Success</f-button>
    <f-button type="info" transparent size="small">Info</f-button>
    <f-button type="warning" transparent size="small">Warning</f-button>
    <f-button type="danger" transparent size="small">Danger</f-button>
  </div>
</template>
```

:::

### 带图标的按钮

使用`icon`给按钮配置图标

::: demo

```html
<template>
  <div class="demo-button">
    <f-button icon="search">search</f-button>
    <f-button icon="plus-circle">create</f-button>
    <f-button icon="check-circle" type="primary">check</f-button>
    <f-button icon="delete" type="danger">delete</f-button>
  </div>
</template>
```

:::

### 禁用按钮

你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

::: demo

```html
<template>
  <div class="demo-button" flex="cross:center">
    <f-button disabled>Default</f-button>
    <f-button dashed disabled>Dashed</f-button>
    <f-button background disabled>Background</f-button>
    <f-button loading disabled>Loading</f-button>
  </div>
  <div class="demo-button">
    <f-button type="primary" disabled>Primary</f-button>
    <f-button type="success" disabled>Success</f-button>
    <f-button type="info" disabled>Info</f-button>
    <f-button type="warning" disabled>Warning</f-button>
    <f-button type="danger" disabled>Danger</f-button>
  </div>
  <div class="demo-button">
    <f-button type="primary" plain disabled>Primary</f-button>
    <f-button type="success" plain disabled>Success</f-button>
    <f-button type="info" plain disabled>Info</f-button>
    <f-button type="warning" plain disabled>Warning</f-button>
    <f-button type="danger" plain disabled>Danger</f-button>
  </div>
  <div class="demo-button">
    <f-button type="primary" round disabled>Primary</f-button>
    <f-button type="success" round disabled>Success</f-button>
    <f-button type="info" round disabled>Info</f-button>
    <f-button type="warning" round disabled>Warning</f-button>
    <f-button type="danger" round disabled>Danger</f-button>
  </div>
  <div class="demo-button">
    <f-button type="primary" dashed disabled>Primary</f-button>
    <f-button type="success" dashed disabled>Success</f-button>
    <f-button type="info" dashed disabled>Info</f-button>
    <f-button type="warning" dashed disabled>Warning</f-button>
    <f-button type="danger" dashed disabled>Danger</f-button>
  </div>
  <div class="demo-button" style="background: #cad4d4;padding: 10px;">
    <f-button type="primary" transparent size="small" disabled>Primary</f-button>
    <f-button type="success" transparent size="small" disabled>Success</f-button>
    <f-button type="info" transparent size="small" disabled>Info</f-button>
    <f-button type="warning" transparent size="small" disabled>Warning</f-button>
    <f-button type="danger" transparent size="small" disabled>Danger</f-button>
  </div>
</template>
```

:::

### 文字按钮

没有边框和背景色的按钮。

::: demo 注意，文字按钮无法使用样式变量进行覆盖，可自主设置颜色值来改变

```html
<template>
  <div class="demo-button">
    <div>
      <f-button type="text">文字按钮</f-button>
      <f-button type="text" text-color="primary">Primary</f-button>
      <f-button type="text" text-color="success">Success</f-button>
      <f-button type="text" text-color="info">Info</f-button>
      <f-button type="text" text-color="warning">Warning</f-button>
      <f-button type="text" text-color="danger">Danger</f-button>
      <f-button type="text" text-color="#b37feb">多彩按钮</f-button>
      <f-button type="text" text-color="#f759ab">多彩按钮2</f-button>
    </div>
    <div>
      <f-button type="text" disabled>禁用按钮</f-button>
      <f-button type="text" text-color="primary" disabled>Primary</f-button>
      <f-button type="text" text-color="success" disabled>Success</f-button>
      <f-button type="text" text-color="info" disabled>Info</f-button>
      <f-button type="text" text-color="warning" disabled>Warning</f-button>
      <f-button type="text" text-color="danger" disabled>Danger</f-button>
      <f-button type="text" text-color="#f759ab" disabled>多彩按钮</f-button>
      <f-button type="text" text-color="#f759ab" disabled>多彩按钮2</f-button>
    </div>
  </div>
</template>
```

:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。使用`<f-button-group>`标签来嵌套你的按钮。

::: demo

```html
<template>
  <div class="demo-button">
    <f-button-group>
      <f-button type="primary" icon="left">上一页</f-button>
      <f-button type="primary"
      >下一页<i class="f-iconfont f-icon-right"></i
      ></f-button>
    </f-button-group>
    <f-button-group>
      <f-button>上一页</f-button>
      <f-button>下一页</f-button>
    </f-button-group>
    <f-button-group>
      <f-button type="success" icon="star"></f-button>
      <f-button type="info" icon="heatmap"></f-button>
      <f-button type="danger" icon="edit"></f-button>
    </f-button-group>
  </div>
</template>
```

:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

::: demo

```html
<template>
  <div class="demo-button">
    <f-button size="large">Large</f-button>
    <f-button>Default</f-button>
    <f-button size="small">Small</f-button>
    <f-button size="mini">Mini</f-button>
  </div>
  <div class="demo-button">
    <f-button size="large" round>Large</f-button>
    <f-button round>Default</f-button>
    <f-button size="small" round>Small</f-button>
    <f-button size="mini" round>Mini</f-button>
  </div>
</template>
```

:::

### 加载状态

可以添加加载状态

::: demo

```html

<template>
  <div class="demo-button">
    <f-button
        type="primary"
        :loading="loading"
        icon="reload"
        @click="loading=true"
    >Click me!
    </f-button>
    <f-button @click="loading=false">stop</f-button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        loading: false
      }
    },
  }
</script>
```

:::

### 点击动画

通过指令`v-waves`开启水波纹动画

::: demo

```html

<template>
  <div class="demo-button">
    <f-button>Click me!</f-button>
    <f-button type="danger">Click me!</f-button>
    <f-button v-waves>Wave Click!</f-button>
    <f-button type="success" v-waves>Wave Click!</f-button>
  </div>
</template>
```

:::

### Props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| size | 尺寸 | string | large / small / mini | — |
| type | 类型 | string | primary / success / warning / danger / info / text | — |
| plain | 是否朴素按钮 | boolean | — | false |
| round | 是否圆角按钮 | boolean | — | false |
| transparent | 是否是透明按钮 | boolean | — | false |
| background | 默认按钮是否带有拟物背景 | boolean | — | false |
| loading | 是否加载中状态 | boolean | — | false |
| disabled | 是否禁用状态 | boolean | — | false |
| icon | 图标类名 | string | — | — |
| text-color | 文字按钮颜色，默认禁用文字颜色增加亮度区分 | string | primary / success / warning / danger / info / text / 自定义色值 | — |
| icon-style | 图标样式,可设置图标大小，字体对其等，可依托 text-color 设置颜色，也可以自定义 | Object | — | — |
| autofocus | 是否默认聚焦 | boolean | — | false |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
