## 定制主题

Bin UI Next 提供了一套默认的主题变量，并在一定程度上可以定制，已满足业务和项目上的多样化视觉需求。

为了实现更加通用的可定制化的主题设置，现组件库默认采用css变量方式替换原有的预处理主题机制，具体参考覆盖如下。

### 基础用法

以button为例，通过设置覆盖变量来进行主题定制

::: demo

```html

<template>
  <div
      style="
      --fei-color-primary: #722ed1;
      --fei-color-primary-active: #6729bc; 
      --fei-color-primary-light1: #8e58da;
      --fei-color-primary-light3: #c7abed;
      --fei-color-primary-light5: #f1eafa;
      --fei-color-success: #13c2c2;
      --fei-color-success-active: #11afaf;
      --fei-color-success-light1: #42cece;
      --fei-color-success-light3: #a1e7e7;
      --fei-color-success-light5: #e7f9f9;
      --fei-color-warning: #fa541c;
      --fei-color-warning-active: #e14c19;
      --fei-color-warning-light1: #fb7649;
      --fei-color-warning-light3: #fdbba4;
      --fei-color-warning-light5: #ffeee8;
      --fei-color-danger: #eb2f96;
      --fei-color-danger-active: #d42a87;
      --fei-color-danger-light1: #ef59ab;
      --fei-color-danger-light3: #f7acd5;
      --fei-color-danger-light5: #fdeaf5;"
  >
    <f-divider align="left">[default]默认按钮</f-divider>
    <div class="demo-button">
      <f-button type="primary">Primary</f-button>
      <f-button type="success">Success</f-button>
      <f-button type="warning">Warning</f-button>
      <f-button type="danger">Danger</f-button>
    </div>
    <f-divider align="left">[plain]简约按钮</f-divider>
    <div class="demo-button">
      <f-button type="primary" plain>Primary</f-button>
      <f-button type="success" plain>Success</f-button>
      <f-button type="warning" plain>Warning</f-button>
      <f-button type="danger" plain>Danger</f-button>
    </div>
    <f-divider align="left">[round]圆角按钮</f-divider>
    <div class="demo-button">
      <f-button type="primary" round>Primary</f-button>
      <f-button type="success" round>Success</f-button>
      <f-button type="warning" round>Warning</f-button>
      <f-button type="danger" round>Danger</f-button>
    </div>
    <f-divider align="left">[dashed]虚线按钮</f-divider>
    <div class="demo-button">
      <f-button type="primary" dashed>Primary</f-button>
      <f-button type="success" dashed>Success</f-button>
      <f-button type="warning" dashed>Warning</f-button>
      <f-button type="danger" dashed>Danger</f-button>
    </div>
  </div>
</template>
```

:::

### 变量列表

通过这种通用的主题解决方案，可以更加灵活的配置不同的主题颜色及配色，让组件更加灵活。

```css
:root {
    /* white-color */
    --fei-color-white: #fff;
    --fei-color-white-light: rgba(255, 255, 255, 0.65);
    --fei-color-white-light2: rgba(255, 255, 255, 0.35);
    --fei-dark-bg: #001529;
    /* primary-color */
    --fei-color-primary: #1677ff;
    --fei-color-primary-light1: #40a1ff;
    --fei-color-primary-light2: #70b8ff;
    --fei-color-primary-light3: #9fd0ff;
    --fei-color-primary-light4: #cfe7ff;
    --fei-color-primary-light5: #e7f3ff;
    --fei-color-primary-light6: #f3f9ff;
    --fei-color-primary-active: #0e7be6;
    /* success-color */
    --fei-color-success: #52c41a;
    --fei-color-success-light1: #75d048;
    --fei-color-success-light2: #97dc76;
    --fei-color-success-light3: #bae7a3;
    --fei-color-success-light4: #dcf3d1;
    --fei-color-success-light5: #eef9e8;
    --fei-color-success-light6: #f6fcf4;
    --fei-color-success-active: #4ab017;
    /* info-color */
    --fei-color-info: #35495E;
    --fei-color-info-light1: #5d6d7e;
    --fei-color-info-light2: #86929e;
    --fei-color-info-light3: #aeb6bf;
    --fei-color-info-light4: #d7dbdf;
    --fei-color-info-light5: #ebedef;
    --fei-color-info-light6: #f5f6f7;
    --fei-color-info-active: #304255;
    /* warning-color */
    --fei-color-warning: #fa8c16;
    --fei-color-warning-light1: #fba345;
    --fei-color-warning-light2: #fcba73;
    --fei-color-warning-light3: #fdd1a2;
    --fei-color-warning-light4: #fee8d0;
    --fei-color-warning-light5: #fff4e8;
    --fei-color-warning-light6: #fff9f3;
    --fei-color-warning-active: #e17e14;
    /* danger-color */
    --fei-color-danger: #f5222d;
    --fei-color-danger-light1: #f74e57;
    --fei-color-danger-light2: #f97a81;
    --fei-color-danger-light3: #fba7ab;
    --fei-color-danger-light4: #fdd3d5;
    --fei-color-danger-light5: #fee9ea;
    --fei-color-danger-light6: #fff4f5;
    --fei-color-danger-active: #dd1f29;
    /* text-color */
    --fei-color-text-primary: #17233d;
    --fei-color-text-default: #515a6e;
    --fei-color-text-secondary: #808695;
    --fei-color-text-disabled: #c5c8ce;
    --fei-color-text-placeholder: #C0C4CC;
    /* bg-color */
    --fei-color-bg-fa: #fafafa;
    --fei-color-select-hover: #f5f5f5;
    --fei-color-input-shadow: rgba(16, 137, 255, 0.2);
    --fei-color-input-error-shadow: rgba(245, 34, 45, 0.2);
    /* border */
    --fei-border-color-base: #dcdfe6;
    --fei-border-color-light: #f0f0f0;
    --fei-border-base: 1px solid #dcdfe6;
    --fei-border-base-light: 1px solid #f0f0f0;
    --fei-border-table: 1px solid #e8eaec;
    --fei-border-table-color: #e8eaec;
    --fei-border-popper-color: #EBEEF5;
    /* radius font-size */
    --fei-border-base-radius: 2px;
    --fei-base-font-size: 14px;
    --fei-header-font-size: 16px;
    /* height */
    --fei-large-height: 36px;
    --fei-large-height-2: 34px;
    --fei-default-height: 32px;
    --fei-default-height-2: 30px;
    --fei-small-height: 28px;
    --fei-small-height-2: 26px;
    --fei-mini-height: 24px;
    --fei-mini-height-2: 22px;
    --fei-base-line-height: 1.5715;
    /* animation-duration */
    --fei-animation-duration-slow: 0.3s;
    --fei-animation-duration-base: 0.2s;
    /* shadow-duration */
    --fei-shadow-down: 0px 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0px rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
    --fei-shadow-popper: 0 1px 6px rgba(0, 0, 0, .2);
}

```
