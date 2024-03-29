## Desc 描述列表

按照一个区块来展示

### 基础用法

日常显示列表的显示组件

:::demo

```html
<template>
  <f-desc title="用户信息">
    <f-desc-item label="用户名">韩梅梅</f-desc-item>
    <f-desc-item label="手机号">1769239****</f-desc-item>
    <f-desc-item label="居住地">徐州市</f-desc-item>
    <f-desc-item label="备注">
      <f-tag type="primary" size="mini">学校</f-tag>
    </f-desc-item>
    <f-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</f-desc-item>
  </f-desc>
</template>
```

:::

### 不同尺寸

可以显示不同尺寸的信息

:::demo

```html
<template>
  <div flex="cross:center">
    <span style="margin: 0 5px;">Size:</span>
    <f-radio-group v-model="size">
      <f-radio label="large">大号</f-radio>
      <f-radio label="default">默认</f-radio>
      <f-radio label="small">小型</f-radio>
      <f-radio label="mini">超小</f-radio>
    </f-radio-group>
    <span style="margin: 0 5px;">Label宽度:</span>
    <f-input-number
      v-model="labelWidth"
      :min="10"
      :max="20"
      :step="2"
      :formatter="value => `${value}%`"
      :parser="value => value.replace('%', '')"
    ></f-input-number>
    <f-button @click="labelWidth = null">AUTO</f-button>
  </div>
  <f-divider />
  <f-desc title="带边框列表" :column="3" :size="size" border :label-width="labelWidth">
    <f-desc-item label="用户名">韩梅梅</f-desc-item>
    <f-desc-item label="手机号">1769239****</f-desc-item>
    <f-desc-item label="居住地">徐州市</f-desc-item>
    <f-desc-item label="备注">
      <f-tag type="primary" size="mini">学校</f-tag>
    </f-desc-item>
    <f-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</f-desc-item>
  </f-desc>
  <f-divider />
  <f-desc title="无边框列表" :column="3" :size="size" :label-width="labelWidth">
    <f-desc-item label="用户名">韩梅梅</f-desc-item>
    <f-desc-item label="手机号">1769239****</f-desc-item>
    <f-desc-item label="居住地">徐州市</f-desc-item>
    <f-desc-item label="备注">
      <f-tag type="primary" size="mini">学校</f-tag>
    </f-desc-item>
    <f-desc-item label="联系地址">江苏省xx市吴中区吴中大道 1245 号</f-desc-item>
  </f-desc>
</template>
<script>
  export default {
    data() {
      return {
        labelWidth: null,
        size: 'default'
      }
    }
  }
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| border     | 是否带有边框   | Boolean  |    —       |    false   |
| column     | 一行显示几个   | Number  |    —       |    3    |
| label-width     | label宽度(百分比)   | Number  |   —   |     —      |
| size     | 尺寸   | String  |   large ，default，small，mini      |    default    |
| title     | 标题文本   | String  |   —    |    —    |
| extra     | 操作区文本，显示在右上方，可插槽插入   | String  |   —    |    —    |

### Slot

| 名称      | 说明    |
|---------- |-------- |
| title     | 标题文本插槽   |
| extra     | 操作区域插槽   |

### ItemProps

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| label     | 标签文本   | String  |    —       |    —    |
| span     | 列的数量   | Number  |    —       |    —    |

### ItemSlot

| 名称      | 说明    |
|---------- |-------- |
| label     | 文本插槽   |
