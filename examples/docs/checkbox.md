## Checkbox 多选框

基本组件-多选框。主要用于一组可选项多项选择，或者单独用于标记切换某种状态。

### 基础用法

::: demo

```html

<template>
  <f-checkbox v-model="single">多选框</f-checkbox>&nbsp;&nbsp;
  <span style="color:#ff4511;">{{single}}</span>
</template>
<script>
  export default {
    data() {
      return {
        single: false
      }
    }
  }
</script>
```

:::

### 组合使用

::: demo

```html

<template>
  <f-checkbox-group v-model="social">
    <f-checkbox label="twitter">
      <span>Twitter</span>
    </f-checkbox>
    <f-checkbox label="facebook">
      <span>Facebook</span>
    </f-checkbox>
    <f-checkbox label="github">
      <span>Github</span>
    </f-checkbox>
    <f-checkbox label="snapchat">
      <span>Snapchat</span>
    </f-checkbox>
  </f-checkbox-group>
  <p style="color:#ff4511;margin: 5px 0;">{{social}}</p>
  <f-checkbox-group v-model="fruit">
    <f-checkbox label="香蕉"></f-checkbox>
    <f-checkbox label="苹果"></f-checkbox>
    <f-checkbox label="西瓜"></f-checkbox>
  </f-checkbox-group>
  <p style="color:#ff4511;margin: 5px 0;">{{fruit}}</p>
</template>
<script>
  export default {
    data() {
      return {
        social: ['facebook', 'github'],
        fruit: ['苹果']
      }
    }
  }
</script>
```

:::

### 禁用

::: demo

```html

<template>
  <f-checkbox v-model="disabledSingle" disabled>Checkbox</f-checkbox>
  <f-checkbox-group v-model="disabledGroup">
    <f-checkbox label="香蕉" disabled></f-checkbox>
    <f-checkbox label="苹果" disabled></f-checkbox>
    <f-checkbox label="西瓜"></f-checkbox>
  </f-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        disabledSingle: true,
        disabledGroup: ['苹果']
      }
    }
  }
</script>
```

:::

### 全选

::: demo

```html

<template>
  <div style="border-bottom: 1px solid #e9e9e9;padding-bottom:6px;margin-bottom:6px;">
    <f-checkbox
        :indeterminate="indeterminate"
        v-model="checkAll"
        @change="handleCheckAll">全选
    </f-checkbox>
    <span style="color:#ff4511;margin: 5px 0;">{{ checkAllGroup }} - {{ checkAll }}</span>
  </div>
  <f-checkbox-group v-model="checkAllGroup" @change="checkAllGroupChange">
    <f-checkbox label="香蕉"></f-checkbox>
    <f-checkbox label="苹果"></f-checkbox>
    <f-checkbox label="西瓜"></f-checkbox>
    <f-checkbox label="草莓"></f-checkbox>
  </f-checkbox-group>
</template>

<script>
  const all = ['香蕉', '西瓜', '苹果', '草莓'];
  export default {
    data() {
      return {
        indeterminate: true,
        checkAll: false,
        checkAllGroup: ['香蕉', '西瓜']
      }
    },
    methods: {
      handleCheckAll(val) {
        this.checkAllGroup = val ? all : [];
        this.indeterminate = false;
      },
      checkAllGroupChange(value) {
        if (value.length === all.length) {
          this.indeterminate = false;
          this.checkAll = true;
        } else if (value.length > 0) {
          this.indeterminate = true;
          this.checkAll = false;
        } else {
          this.indeterminate = false;
          this.checkAll = false;
        }
      }
    }
  }
</script>
```

:::

### 限制数量

可以控制被勾选的数量限制

::: demo

```html

<template>
  <div>
    <f-checkbox-group v-model="checkAllGroup" :min="1" :max="2">
      <f-checkbox label="香蕉"></f-checkbox>
      <f-checkbox label="苹果"></f-checkbox>
      <f-checkbox label="西瓜"></f-checkbox>
      <f-checkbox label="草莓"></f-checkbox>
    </f-checkbox-group>
    <span style="color:#ff4511;margin: 5px 0;">{{ checkAllGroup }}</span>
  </div>
</template>

<script>
  const all = ['香蕉', '西瓜', '苹果', '草莓'];
  export default {
    data() {
      return {
        checkAllGroup: ['香蕉', '西瓜']
      }
    },
  }
</script>
```

:::

### Checkbox props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| modelValue     | 只在单独使用时有效。可以使用 v-model 双向绑定数据   | Boolean  |  —   |   false  |
| label     | 组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中   | String/Number/Boolean  |  —   |    —   |
| disabled     | 是否禁用当前项  | Boolean  |  —   |   false  |
| true-label     | 选中值  | String、Number  |  —   |   —    |
| false-label     | 没选中的值  | String、Number  |  —   |   —   |
| indeterminate     | 设置 indeterminate 状态，只负责样式控制  | Boolean  |  —   |   false  |

### Checkbox events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| change     | 只在单独使用时有效。在选项状态发生改变时触发，通过修改外部的数据改变时不会触发  | true/false  |

### CheckboxGroup props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value   | 指定选中项目的集合，可以使用 v-model 双向绑定数据  | String/ Number  |  —   |   ''  |
| disabled     | 是否禁用所有选项  | Boolean  |  —   |  false  || min   | 最小数量 |Number  | — |
| min   | 最小数量  |Number  | —  |  —  |
| max   | 最大数量  |Number  | —  |  —  |

### CheckboxGroup events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| change     | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | [...] |
