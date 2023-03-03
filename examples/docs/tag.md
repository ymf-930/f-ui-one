## Tag 标签

显示标签

### 基础用法

由`type`属性来选择`tag`的类型，也可以通过`color`属性来自定义背景色。 由于标签原有高度和按钮类似，因此去除size设置

::: demo

```html

<template>
  <div>
    <f-tag>default</f-tag>
    <f-tag type="primary">primary</f-tag>
    <f-tag type="success">success</f-tag>
    <f-tag type="info">info</f-tag>
    <f-tag type="warning">warning</f-tag>
    <f-tag type="danger">danger</f-tag>
  </div>
</template>
```

:::

### 多种颜色

由`dark`属性来设置深色模式,并可以设置更多颜色类型的标签

::: demo

```html

<template>
  <div>
    <f-tag>default</f-tag>
    <f-tag type="primary" dark>primary</f-tag>
    <f-tag type="success" dark>success</f-tag>
    <f-tag type="info" dark>info</f-tag>
    <f-tag type="warning" dark>warning</f-tag>
    <f-tag type="danger" dark>danger</f-tag>
    <f-tag type="magenta">magenta</f-tag>
    <f-tag type="red">red</f-tag>
    <f-tag type="volcano">volcano</f-tag>
    <f-tag type="orange">orange</f-tag>
    <f-tag type="gold">gold</f-tag>
    <f-tag type="cyan">cyan</f-tag>
    <f-tag type="blue">blue</f-tag>
    <f-tag type="geekblue">geekblue</f-tag>
    <f-tag type="purple">purple</f-tag>
  </div>
</template>
```

:::

### 可选择标签

设置`checkable`属性可以定义一个标签是否可可选择。

::: demo

```html

<template>
  <div class="mf-10">
    <f-tag type="primary" dark checkable><span>primary</span></f-tag>
    <f-tag type="success" dark checkable>success</f-tag>
    <f-tag type="info" dark checkable>info</f-tag>
    <f-tag type="warning" dark checkable>warning</f-tag>
    <f-tag type="danger" dark checkable>danger</f-tag>
    <f-tag type="magenta" dark checkable>magenta</f-tag>
    <f-tag type="red" dark checkable>red</f-tag>
    <f-tag type="volcano" dark checkable>volcano</f-tag>
    <f-tag type="orange" dark checkable>orange</f-tag>
    <f-tag type="gold" dark checkable>gold</f-tag>
    <f-tag type="cyan" dark checkable>cyan</f-tag>
    <f-tag type="blue" dark checkable>blue</f-tag>
    <f-tag type="geekblue" dark checkable>geekblue</f-tag>
    <f-tag type="purple" dark checkable>purple</f-tag>
  </div>
  <div>
    <f-tag type="primary" checkable><span>primary</span></f-tag>
    <f-tag type="success" checkable>success</f-tag>
    <f-tag type="info" checkable>info</f-tag>
    <f-tag type="warning" checkable>warning</f-tag>
    <f-tag type="danger" checkable>danger</f-tag>
    <f-tag type="magenta" checkable>magenta</f-tag>
    <f-tag type="red" checkable>red</f-tag>
    <f-tag type="volcano" checkable>volcano</f-tag>
    <f-tag type="orange" checkable>orange</f-tag>
    <f-tag type="gold" checkable>gold</f-tag>
    <f-tag type="cyan" checkable>cyan</f-tag>
    <f-tag type="blue" checkable>blue</f-tag>
    <f-tag type="geekblue" checkable>geekblue</f-tag>
    <f-tag type="purple" checkable>purple</f-tag>
  </div>
</template>
```

:::

### 可移除标签

设置`closable`属性可以定义一个标签是否可移除。

::: demo

```html

<template>
  <f-tag type="primary" closable>标签一</f-tag>
  <f-tag type="success" closable>标签二</f-tag>
  <f-tag type="info" closable>标签三</f-tag>
  <f-tag type="warning" closable>标签四</f-tag>
  <f-tag type="danger" closable>标签五</f-tag>
</template>
```

:::

### dot 模式

dot 模式可以简单显示带有提示小圆点等内容

::: demo

```html

<template>
  <f-tag type="default" dot><span>default</span></f-tag>
  <f-tag type="primary" dot><span>primary</span></f-tag>
  <f-tag type="success" dot>success</f-tag>
  <f-tag type="info" dot>info</f-tag>
  <f-tag type="warning" dot>warning</f-tag>
  <f-tag type="danger" dot>danger</f-tag>
  <f-tag type="magenta" dot>magenta</f-tag>
  <f-tag type="red" dot>red</f-tag>
  <f-tag type="volcano" dot>volcano</f-tag>
  <f-tag type="orange" dot>orange</f-tag>
  <f-tag type="gold" dot>gold</f-tag>
  <f-tag type="cyan" dot>cyan</f-tag>
  <f-tag type="blue" dot>blue</f-tag>
  <f-tag type="geekblue" dot>geekblue</f-tag>
  <f-tag type="purple" dot>purple</f-tag>
</template>
```

:::

### 动态编辑标签

::: demo

```html

<template>
  <div>
    <f-button class="button-new-tag" @click="addOne">+ New Tag</f-button>
    <p>
      <f-tag
        :key="tag"
        v-for="tag in dynamicTags"
        type="primary"
        closable
        @close="handleCloseTag(tag)">
        {{tag}}
      </f-tag>
    </p>
  </div>
</template>
<script>
  import { reactive, toRefs } from 'vue'

  export default {
    setup() {
      const data = reactive({
        dynamicTags: ['标签一', '标签二', '标签三'],
        count: 0
      })
      const handleCloseTag = (tag) => {
        data.dynamicTags.splice(data.dynamicTags.indexOf(tag), 1)
      }
      const addOne = () => {
        data.count++
        data.dynamicTags.push('new tag' + data.count);
      }
      return {
        ...toRefs(data),
        handleCloseTag,
        addOne
      }
    }
  }
</script>
```

:::

### 自定义样式

具有多种自定义样式的方式可供选择

::: demo

```html

<template>
  <f-tag color="#ffa2d3">Custom Color</f-tag>
  <f-tag type="primary" no-border font-size="14px">No Border</f-tag>
  <f-tag :tag-style="{backgroundColor: '#5AFAFC',color:'#606266'}">Style</f-tag>
  <f-tag closable>Default</f-tag>
</template>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| closable     | 是否可关闭   | boolean  |   —            |    false    |
| type     | 主题   | string  |   success/info/warning/danger     |    —         |
| dot     |  是否显示是小圆点   | boolean  |   —         |    false       |
| no-border     |  是否关闭边框   | boolean  |   —         |    false       |
| color    |  背景颜色(可自定义)   | String  |   —         |    —          |
| fontSize    |  字体大小   | String  |    —      |    —          |
| tag-style    |  标签样式(完全控制，尽量不要设置)   | String  |    —      |    —          |
| checkable    |  是否可选中   | Boolean  |    —      |   false       |
| modelValue |  选中状态可以使用v-model双向绑定    | Boolean  |    —      |   true        |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| close    | 关闭事件回调   | event  |
| click    | 点击事件回调   | event  |
| change   | 选中事件回调,第二项需要设置name值   | checked,name  |
