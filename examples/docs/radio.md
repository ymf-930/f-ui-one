## Radio 单选框

基本组件-单选框。主要用于一组可选项单项选择，或者单独用于切换到选中状态。

### 基础用法

::: demo

```html

<template>
  <f-radio v-model="single">Radio</f-radio>
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
  <f-radio-group v-model="social">
    <f-radio label="twitter">
      <span>Twitter</span>
    </f-radio>
    <f-radio label="facebook">
      <span>Facebook</span>
    </f-radio>
    <f-radio label="github">
      <span>Github</span>
    </f-radio>
    <f-radio label="snapchat">
      <span>Snapchat</span>
    </f-radio>
  </f-radio-group>
  <p style="color:#ff4511;margin: 5px 0;">{{social}}</p>
  <f-radio-group v-model="fruit">
    <f-radio label="香蕉"></f-radio>
    <f-radio label="苹果"></f-radio>
    <f-radio label="西瓜"></f-radio>
  </f-radio-group>
  <p style="color:#ff4511;margin: 5px 0;">{{fruit}}</p>
</template>
<script>
  export default {
    data() {
      return {
        social: 'facebook',
        fruit: '苹果'
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
  <f-radio v-model="disabledSingle" disabled>Checkbox</f-radio>
  <f-radio-group v-model="disabledGroup">
    <f-radio label="香蕉" disabled></f-radio>
    <f-radio label="苹果" disabled></f-radio>
    <f-radio label="西瓜"></f-radio>
  </f-radio-group>
</template>
<script>
  export default {
    data() {
      return {
        disabledSingle: true,
        disabledGroup: '苹果'
      }
    }
  }
</script>
```

:::

### 按钮模式

::: demo

```html

<template>
  <div flex>
    <div>
      <f-radio-group v-model="fruit" type="button">
        <f-radio label="香蕉"></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
      <br>
      <f-radio-group v-model="fruit" type="button" size="small">
        <f-radio label="香蕉"></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
      <br>
      <f-radio-group v-model="fruit" type="button" size="mini">
        <f-radio label="香蕉"></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
    </div>
    <div style="margin-left: 24px;">
      <f-radio-group v-model="fruit" type="button">
        <f-radio label="香蕉" disabled></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
      <br>
      <f-radio-group v-model="fruit" type="button" disabled>
        <f-radio label="香蕉" disabled></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="西瓜"></f-radio>
        </f-radio-group>
    </div>
    <div style="margin-left: 24px;">
      <f-radio-group v-model="fruit" type="capsule">
        <f-radio label="香蕉"></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="桃子"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
      <div class="p10"/>
      <f-radio-group v-model="fruit" type="capsule" size="small">
        <f-radio label="香蕉"></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="桃子"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
      <div class="p10"/>
      <f-radio-group v-model="fruit" type="capsule" size="mini">
        <f-radio label="香蕉"></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="桃子"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
    </div>

    <div style="margin-left: 24px;">
      <f-radio-group v-model="fruit" type="capsule">
        <f-radio label="香蕉" disabled></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="桃子"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
      <div class="p10"/>
      <f-radio-group v-model="fruit" type="capsule" disabled>
        <f-radio label="香蕉" disabled></f-radio>
        <f-radio label="苹果"></f-radio>
        <f-radio label="桃子"></f-radio>
        <f-radio label="西瓜"></f-radio>
      </f-radio-group>
    </div>
  </div>


  <span style="color:#ff4511;margin: 5px 0;">{{fruit}}</span>
</template>
<script>
  export default {
    data() {
      return {
        fruit: ''
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value     | 只在单独使用时有效。可以使用 v-model 双向绑定数据   | Boolean  |  —   |   false  |
| label     | 组合使用时有效。指定当前选项的 value 值，组合会自动判断是否选中   | String/Number/Boolean  |  —   |    —   |
| disabled     | 是否禁用当前项  | Boolean  |  —   |   false  |

### Radio events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| change     | 在选项状态发生改变时触发，返回当前状态。通过修改外部的数据改变时不会触发  | ... |

### RadioGroup  props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value   | 指定选中项目的集合，可以使用 v-model 双向绑定数据  | String/ Number  |  —   |   ''  |
| disabled     | 是否禁用所有选项  | Boolean  |  —   |  false  |
| type     | 是否开启button模式  | String  |  button/capsule  |   —  |
| size   | 按钮模式单选组的尺寸  |String  | large、small、default | — |

### RadioGroup  events

| 事件名      | 说明    | 返回值  |
|---------- |-------- |---------- |
| change     | 在选项状态发生改变时触发，返回已选中的数组。通过修改外部的数据改变时不会触发 | ... |

