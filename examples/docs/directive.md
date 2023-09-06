## 自定义指令

### 点击动画指令

在标签中追加`v-click-animation`指令增加点击动画指令，波纹颜色根据border或background颜色创建

::: demo

```html

<template>
  <div class="demo-button">
    <f-button>Default</f-button>
    <f-button type="primary">Primary</f-button>
    <f-button type="success">Success</f-button>
    <f-button type="info">Info</f-button>
    <f-button type="warning">Warning</f-button>
    <f-button type="danger">Danger</f-button>
    <span style="border: 1px solid #ffa2d3; 
            padding: 6px 10px;margin: 0 8px;border-radius: 2px;vertical-align: middle;"
          v-click-animation>自定义</span>
  </div>
</template>
```

:::

### 水波纹指令

在标签中追加`v-waves`指令增加水波纹指令,指令可以设置波纹颜色和点击方式, 注意，增加水波纹指令会默认覆盖原有的按钮点击效果

::: demo

```html

<template>
  <div class="demo-button">
    <f-button v-waves>默认指令</f-button>
    <f-button v-waves="'rgba(255,162,211,0.3)'">设置颜色</f-button>
  </div>
</template>
```

:::

### clickOutSide

通过添加`v-click-outside="clickOutSide"`来添加外部点击事件

::: demo

```html

<template>
  <div class="demo-button">
    <div v-click-outside="clickOutSide" flex="main:center cross:center"
         style="width: 200px;height:100px;background: #1677ff;color:#fff;font-size: 20px;">
      click out side
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      clickOutSide() {
        this.$log.primary('点击外部')
      }
    }
  }
</script>
```

:::
