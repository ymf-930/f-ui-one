## Calendar 日历组件

### 基础用法

简单的日历组件用于装饰页面

::: demo

```html

<template>
  <f-calendar></f-calendar>
</template>
```

:::

### mini显示

简单的日历组件用于装饰页面

::: demo

```html

<template>
  <div style="width: 300px;display: inline-block;">
    <f-calendar mini></f-calendar>
  </div>
  <div style="width: 300px;display: inline-block;">
    <f-calendar mini :body-style="{border:'none'}"
                :day-style="{border:'none',borderRadius:'4px'}">
    </f-calendar>
  </div>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| grid-height | 日期高度，不填默认 80  | String  |  —   |   80px  |
| text-align  | 日期对其方式 | String  | left center right |   left  |
| mini | 迷你模式 | Boolean  | —  |   —  |
| body-style   | 日期表body样式 | Object  | —  |   —  |
| day-style  | 每天样式 | Object  | —  |   —  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| prev  | 上个月按钮事件  | —  |
| next  | 下个月按钮事件  | —  |
| today  | 今天按钮事件  | —  |
| selected | 选中某一天事件  | day |
