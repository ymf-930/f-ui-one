## Carousel 轮播

### 基础用法

轮播组件，用于滚动显示图片等

::: demo

```html

<template>
  <f-carousel v-model="value1" loop trigger="click">
    <f-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </f-carousel-item>
  </f-carousel>
</template>
<script>
  export default {
    data() {
      return {
        value1: 0
      }
    }
  }
</script>
```

:::

### 自动切换和速度

可以设置`autoplay`自动切换，`trigger="hover"`悬停切换

::: demo

```html

<template>
  <f-carousel autoplay :interval="2000" :initial-index="value1" loop>
    <f-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </f-carousel-item>
  </f-carousel>
</template>
<script>
  export default {
    data() {
      return {
        value1: 1
      }
    }
  }
</script>
```

:::

### 指示器样式和位置

::: demo

```html

<template>
  <f-carousel indicator-position="inside"
              arrow="always"
              trigger="hover" loop>
    <f-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </f-carousel-item>
  </f-carousel>
  <f-divider></f-divider>
  <f-carousel indicator-position="outside" loop>
    <f-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </f-carousel-item>
  </f-carousel>
</template>
```

:::

### 卡片风格

可以设置`card`卡片风格

::: demo

```html

<template>
  <f-carousel :interval="4000" type="card" height="200px" loop>
    <f-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </f-carousel-item>
  </f-carousel>
</template>
```

:::

### 方向

可以设置`direction`方向为竖直方向

::: demo

```html

<template>
  <f-carousel height="200px" direction="vertical" :autoplay="false">
    <f-carousel-item>
      <div class="demo-carousel-panel">1</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">2</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">3</div>
    </f-carousel-item>
    <f-carousel-item>
      <div class="demo-carousel-panel">4</div>
    </f-carousel-item>
  </f-carousel>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| initial-index     | 轮播的索引，从 0 开始，  | Number  |  —   |   0  |
| height   | 走马灯的高度，可填 auto 或具体高度数值，单位 px   | String / Number  |  —   |   200px  |
| loop   | 是否开启循环   | Boolean |  —   |   false  |
| autoplay   | 是否自动切换   | Boolean |  —   |   false  |
| interval   | 自动切换的时间间隔，单位为毫秒   | Number |  —   |   3000  |
| indicator-position  | 指示器的位置   | String | inside （内部），outside（外部），none（不显示）  |   inside  |
| trigger | 触发方式   | String |  click，hover  |   click  |
| arrow | 切换箭头的显示时机   | String |  hover，always，never |   hover  |
| direction | 方向   | String |  horizontal、vertical  |   horizontal  |
| type |  类型   | String |  card  |    —   |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change    | 轮播切换时触发，目前激活的索引，原的索引   | oldValue, value  |
