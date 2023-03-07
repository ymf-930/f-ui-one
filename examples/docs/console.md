## 控制台优化

使用 `$log` 可以在控制台输出颜色信息 打开控制台查看输出效果

### 所有实例

::: demo

```html

<template>
  <div class="demo-button">
    <f-button @click="$log.print('default print','#df85ff')">custom</f-button>
    <f-button @click="$log.print('default print')">default</f-button>
    <f-button @click="$log.print('primary print','primary')" type="primary">primary</f-button>
    <f-button @click="$log.print('success print','success')" type="success">success</f-button>
    <f-button @click="$log.print('warning print','warning')" type="warning">warning</f-button>
    <f-button @click="$log.print('danger print','danger')" type="danger">danger</f-button>
  </div>
  <div class="demo-button">
    <f-button @click="$log.print('primary print','primary',true)" type="primary">primary-back</f-button>
    <f-button @click="$log.print('success print','success',true)" type="success">success-back</f-button>
    <f-button @click="$log.print('warning print','warning',true)" type="warning">warning-back</f-button>
    <f-button @click="$log.print('danger print','danger',true)" type="danger">danger-back</f-button>
  </div>
  <div class="demo-button">
    <f-button @click="$log.print({name:'fei-ui',author:'yangmengfei'})">object - log</f-button>
    <f-button @click="$log.pretty('title','pretty print','primary')">pretty - primary</f-button>
    <f-button @click="$log.pretty('title','pretty print','success')">pretty - success</f-button>
    <f-button @click="$log.pretty('title','pretty print','warning')">pretty - warning</f-button>
    <f-button @click="$log.pretty('title','pretty print','danger')">pretty - danger</f-button>
  </div>
  <div class="demo-button">
    <f-button @click="$log.printVersion('f-ui-one','1.0.2','https://gitee.com/daijuymf/f-ui-one/')">
      打印版本号连接
    </f-button>
  </div>
</template>
```

:::

### API：

    $log.print( 文字, 样式/颜色, 是否是背景模式 )
    $log.print( 对象/数组 )
    
    $log.primary(文字, 是否是背景模式)
    $log.success(文字, 是否是背景模式)
    $log.warning(文字, 是否是背景模式)
    $log.danger(文字,  是否是背景模式)
    $log.pretty(文字, 文字2，样式/颜色)
    $log.printVersion(title, version, link, type = 'primary', fontSize = '20px', versionColor = '#999')
