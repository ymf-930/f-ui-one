## Switch 开关

在两种状态间切换时用到的开关选择器。

### 基础用法

::: demo

```html

<template>
  <f-switch v-model="switch1" @change="change"></f-switch>
</template>
<script>
  export default {
    data() {
      return {
        switch1: false
      }
    },
    methods: {
      change(status) {
        this.$message('开关状态：' + status);
      }
    }
  }
</script>
```

:::

### 大小及颜色

::: demo

```html

<template>
  <f-switch size="large"></f-switch>&nbsp;
  <f-switch></f-switch>&nbsp;
  <f-switch size="small"></f-switch>&nbsp;
  <f-switch active-color="#13ce66" inactive-color="#ff4949"></f-switch>
</template>
```

:::

### 文字或图标

::: demo

```html

<template>
  <f-switch>
    <template #open><span>开</span></template>
    <template #close><span>关</span></template>
  </f-switch>&nbsp;
  <f-switch>
    <template #open>
      <f-icon name="check"></f-icon>
    </template>
    <template #close>
      <f-icon name="close"></f-icon>
    </template>
  </f-switch>
  <br><br>
  <f-switch size="large">
    <template #open><span>开启</span></template>
    <template #close><span>关闭</span></template>
  </f-switch>&nbsp;
  <f-switch size="large">
    <template #open><span>ON</span></template>
    <template #close><span>OFF</span></template>
  </f-switch>
</template>
```

:::

### 禁用

::: demo

```html

<template>
  <f-switch v-model="value1" disabled size="large"></f-switch>&nbsp;
  <f-switch v-model="value1" disabled></f-switch>&nbsp;
  <f-switch v-model="value1" disabled size="small"></f-switch>&nbsp;
  <f-switch v-model="value2" disabled size="large"></f-switch>&nbsp;
  <f-switch v-model="value2" disabled></f-switch>&nbsp;
  <f-switch v-model="value2" disabled size="small"></f-switch>&nbsp;
</template>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  }
</script>
```

:::

### loading

::: demo

```html

<template>
  <f-switch v-model="value1" loading size="large"></f-switch>&nbsp;
  <f-switch v-model="value1" loading></f-switch>&nbsp;
  <f-switch v-model="value1" loading size="small"></f-switch>&nbsp;
  <f-switch v-model="value2" loading size="large"></f-switch>&nbsp;
  <f-switch v-model="value2" loading></f-switch>&nbsp;
  <f-switch v-model="value2" loading size="small"></f-switch>&nbsp;
</template>
<script>
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  }
</script>
```

:::

### 切换前拦截

可以通过设置`confirm`来设置切换前拦截，并通过`confirm-txt`来自定义切换文字提示。

::: demo

```html

<template>
  <f-switch confirm></f-switch>
</template>
```

:::

### 阻止切换

可以配合loading和confirm一级before-change函数props来配合实现阻止切换

::: demo

```html

<template>
  <f-switch confirm v-model="value1" :loading="loading1" :before-change="beforeChange1"></f-switch>
  &nbsp;
  <f-switch confirm v-model="value2" :loading="loading2" :before-change="beforeChange2"></f-switch>
</template>
<script>
  import { reactive, toRefs } from 'vue'

  export default {
    setup() {
      const status1 = reactive({
        value1: false,
        loading1: false,
      })
      const beforeChange1 = () => {
        status1.loading1 = true
        return new Promise((resolve) => {
          setTimeout(() => {
            status1.loading1 = false
            return resolve(true)
          }, 1000)
        })
      }
      const status2 = reactive({
        value2: false,
        loading2: false,
      })

      const beforeChange2 = () => {
        status2.loading2 = true
        return new Promise((_, reject) => {
          setTimeout(() => {
            status2.loading2 = false
            return reject(new Error('调用出错！'))
          }, 1000)
        })
      }
      return {
        ...toRefs(status1),
        ...toRefs(status2),
        beforeChange1,
        beforeChange2
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| modelValue     | 指定当前是否选中，可以使用 v-model 双向绑定数据   | Boolean  |  —   |  false   |
| size     | 开关的尺寸。建议开关如果使用了2个汉字的文字，使用 large。   | String  |  large、small、default   |  default   |
| disabled     | 禁用开关       | Boolean  |  —   |  false   |
| true-value     | 选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用       | String, Number, Boolean  |  —   |  true   |
| false-value     | 没有选中时的值，当使用类似 1 和 0 来判断是否选中时会很有用       | String, Number, Boolean  |  —   |  false   |
| active-color     | switch 打开时的背景色       | string |  —   |   —    |
| inactive-color | switch 关闭时的背景色       | string |  —   |   —    |
| confirm | 开启切换前拦截功能  | Boolean  |  —   |  false   |
| confirm-txt | 切换拦截文字   | string |  —   |   —    |
| loading | 加载中状态 | Boolean  |  —   |  —    |
| beforeChange | 改变状态前拦截函数，return type Promise or boolean  | Function  |  —   |  —    |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| change     | 开关变化时触发，返回当前的状态   | true、false  |

### Slot

| 事件名      | 说明    |
|---------- |-------- |
| open  | 自定义显示打开时的内容  |
| close  | 自定义显示关闭时的内容  |
