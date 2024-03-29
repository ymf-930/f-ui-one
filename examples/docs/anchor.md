## Anchor 锚点

### 基础用法

锚点主要应用于滚动导航，默认是window滚动，也可以设置滚动区域的 target，并且可以设置`f-affix`来固定

::: demo

```html
<template>
  <div style="overflow: hidden;border:1px solid #eee;display: flex;justify-content: flex-end;">
    <div style="width: 200px;">
      <f-anchor show-ink style="margin-left:20px;" :scroll-offset="100">
        <f-anchor-link href="#ji-chu-yong-fa" title="基础用法"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-tu-biao" title="自定义图标"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-yan-se" title="自定义颜色"></f-anchor-link>
        <f-anchor-link href="#zhi-ding-gun-dong-rong-qi" title="指定滚动容器"></f-anchor-link>
        <f-anchor-link href="#props" title="Props"></f-anchor-link>
        <f-anchor-link href="#events" title="Events"></f-anchor-link>
        <f-anchor-link href="#anchorlink-props" title="AnchorLink Props"></f-anchor-link>
      </f-anchor>
    </div>
  </div>
</template>
```

:::

### 自定义图标

可以通过设置`icon`来设置小圆点为自定义图标，推荐使用实心图标以达到最好的显示效果

::: demo

```html
<template>
  <div style="overflow: hidden;border:1px solid #eee;" flex="box:mean">
    <div style="padding: 20px;background-color: #fff;border-right:1px solid #eee;">
      <f-anchor icon="star-fill" :scroll-offset="100">
        <f-anchor-link href="#ji-chu-yong-fa" title="基础用法"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-tu-biao" title="自定义图标"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-yan-se" title="自定义颜色"></f-anchor-link>
        <f-anchor-link href="#zhi-ding-gun-dong-rong-qi" title="指定滚动容器"></f-anchor-link>
        <f-anchor-link href="#props" title="Props"></f-anchor-link>
        <f-anchor-link href="#events" title="Events"></f-anchor-link>
        <f-anchor-link href="#anchorlink-props" title="AnchorLink Props"></f-anchor-link>
      </f-anchor>
    </div>
    <div style="padding: 20px;background-color: #fff;">
      <f-anchor icon="tag-fill" :icon-size="20" :scroll-offset="100">
        <f-anchor-link href="#ji-chu-yong-fa" title="基础用法"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-tu-biao" title="自定义图标"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-yan-se" title="自定义颜色"></f-anchor-link>
        <f-anchor-link href="#zhi-ding-gun-dong-rong-qi" title="指定滚动容器"></f-anchor-link>
        <f-anchor-link href="#props" title="Props"></f-anchor-link>
        <f-anchor-link href="#events" title="Events"></f-anchor-link>
        <f-anchor-link href="#anchorlink-props" title="AnchorLink Props"></f-anchor-link>
      </f-anchor>
    </div>
  </div>
</template>
```

:::

### 自定义颜色

可以通过设置`activeColor`来设置自定义图标的颜色

::: demo

```html
<template>
  <div style="overflow: hidden;border:1px solid #eee;" flex="box:mean">
    <div style="padding: 20px;background-color: #fff;border-right:1px solid #eee;">
      <f-anchor icon="fire-fill" active-color="success" :scroll-offset="100">
        <f-anchor-link href="#ji-chu-yong-fa" title="基础用法"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-tu-biao" title="自定义图标"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-yan-se" title="自定义颜色"></f-anchor-link>
        <f-anchor-link href="#zhi-ding-gun-dong-rong-qi" title="指定滚动容器"></f-anchor-link>
        <f-anchor-link href="#props" title="Props"></f-anchor-link>
        <f-anchor-link href="#events" title="Events"></f-anchor-link>
        <f-anchor-link href="#anchorlink-props" title="AnchorLink Props"></f-anchor-link>
      </f-anchor>
    </div>
    <div style="padding: 20px;background-color: #fff;">
      <f-anchor active-color="#ff53a5" show-ink :scroll-offset="100">
        <f-anchor-link href="#ji-chu-yong-fa" title="基础用法"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-tu-biao" title="自定义图标"></f-anchor-link>
        <f-anchor-link href="#zi-ding-yi-yan-se" title="自定义颜色"></f-anchor-link>
        <f-anchor-link href="#zhi-ding-gun-dong-rong-qi" title="指定滚动容器"></f-anchor-link>
        <f-anchor-link href="#props" title="Props"></f-anchor-link>
        <f-anchor-link href="#events" title="Events"></f-anchor-link>
        <f-anchor-link href="#anchorlink-props" title="AnchorLink Props"></f-anchor-link>
      </f-anchor>
    </div>
  </div>
</template>
```

:::

### 指定滚动容器

可以通过设置`target`来指定滚动区域的标识，设置的滚动容器需要设置定位

::: demo

```html
<template>
  <f-button @click="scrollTo7" size=small>滚动到第七行</f-button>
  <div style="overflow: hidden;border:1px solid #eee;" flex>
    <div style="padding: 20px;width:30%;background-color: #fff;border-right:1px solid #eee;">
      <f-anchor target="#scrollWrap" show-ink ref="anchorScrollRef">
        <f-anchor-link href="#id1" title="标题1"></f-anchor-link>
        <f-anchor-link href="#id2" title="标题2"></f-anchor-link>
        <f-anchor-link href="#id3" title="标题3"></f-anchor-link>
        <f-anchor-link href="#id4" title="标题4"></f-anchor-link>
        <f-anchor-link href="#id5" title="标题5"></f-anchor-link>
        <f-anchor-link href="#id6" title="标题6"></f-anchor-link>
        <f-anchor-link href="#id10" title="标题10"></f-anchor-link>
      </f-anchor>
    </div>
    <div id="scrollWrap"
         style="position:relative;padding: 20px;width:70%;height:400px;overflow:auto;background-color: #fff;">
      <div v-for="i in 10" :key="i">
        <h4 style="font-weight:500;padding: 5px;border-bottom: 1px solid #eee;" :id="`id${i}`">
          标题{{i}}
        </h4>
        <p v-for="k in 10" :key="k">{{ `我是第${k}行内容...` }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props) {
    const anchorScrollRef = ref(null)
    function scrollTo7() {
      console.log('滚动到第七行 ');
      anchorScrollRef.value.chooseLink('#id7')
    }
    return {
      scrollTo7,
      anchorScrollRef
    }
  }
}
</script>
```

:::

### Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| icon     | 是否设置自定义图标   | string  |  —   |   —   |
| icon-size     | 自定义图标大小   | Number  |  —   |   —   |
| active-color    | 选中颜色   | string  |  primary,info,success,warning,danger,自定义   |   —   |
| offset-top     | 距离窗口顶部达到指定偏移量后触发   | Number  |  —   | 0 |
| bounds     | 锚点区域边界   | Number  |  —   | 5 |
| showInk     | 是否显示小圆点   | Boolean      |  —   | false |
| scroll-offset     | 点击滚动的额外距离   | Number  |  —   | 0 |
| target     | 指定滚动容器的标识，滚动容器需要设置position定位用于计算滚动偏移   | string  |  —   |  —  |

### Events

| 事件名      | 说明    | 返回值      |
|---------- |-------- |---------- |
| select    | 点击锚点时触发，返回链接   | href  |

### AnchorLink Props

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| href     | 锚点链接   | String  |  —   |  — |
| title     | 文字内容   | String  |  —   |  — |
