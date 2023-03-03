## Badge 徽标

用于提示当前条目数量等

### 基础用法

基础的徽标用法

::: demo

```html

<template>
  <f-badge :value="12" class="item">
    <f-button>普通按钮</f-button>
  </f-badge>
  <f-badge :value="3" class="item">
    <f-button>回复</f-button>
  </f-badge>
  <f-badge :value="1" class="item" type="primary">
    <f-button>primary徽标</f-button>
  </f-badge>
  <f-badge :value="2" class="item" type="warning">
    <f-button>warning徽标</f-button>
  </f-badge>
  <f-badge :value="200" :max="99" class="item">
    <f-button>最大数值</f-button>
  </f-badge>
</template>
```

:::

### 自定义提示内容

可以提示非数字的徽标

::: demo

```html

<template>
  <f-badge value="hot" class="item">
    <f-button>热点</f-button>
  </f-badge>
  <f-badge value="new" class="item">
    <f-button>回复</f-button>
  </f-badge>
  <f-badge is-dot class="item">红点模式</f-badge>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 显示值   | string, number  |  —   |    —     |
| max     | 最大值，超过最大值会显示 '{max}+'   |  number  |  —   |    —     |
| is-dot     | 小圆点   |  boolean  |  —   |false|
| hidden     | 隐藏 badge   |  boolean  |  —   |false|
| type     | 类型   |  string  |  primary / success / warning / danger / info  | — |
