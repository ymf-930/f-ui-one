## Affix 图钉

### 基础用法

原生滚动相对于window窗口固定，也可以结合scrollbar进行配置

::: demo

```html
<template>
  <f-affix :offset="80">
    <f-button type="primary">固定在顶部80的位置</f-button>
  </f-affix>
</template>
```

:::

### 固定位置

可以设置固定距离底部的位置

::: demo

```html
<template>
  <f-affix :offset="20" position="bottom">
    <f-button type="primary">固定在底部20的位置</f-button>
  </f-affix>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| offset   | 距离窗口位置触发   | Number  |  —   |   0  |
| position   | 可设置距离顶部或底部   | String  |  top、bottom   |  top  |
| z-index    | 层级   | Number  |  —   |   10  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change    | 在固定状态发生改变时触发   | true/false  |
| scroll    | 滚动响应事件   | Object{scrollTop,fixed}  |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| default     | 警告提示内容   |
