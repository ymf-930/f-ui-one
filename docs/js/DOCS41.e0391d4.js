"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkf_ui_one"] = self["webpackChunkf_ui_one"] || []).push([[9486],{

/***/ 4538:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  \"default\": function() { return /* binding */ page; }\n});\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@vue+runtime-core@3.3.4/node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js\nvar runtime_core_esm_bundler = __webpack_require__(2296);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_c3tfwv7p35clwcmkb5fnkshzei/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@16.5.0_yd4rp62hsewuzxgunnirqragb4/node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@16.5.0_yd4rp62hsewuzxgunnirqragb4/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/page.md?vue&type=template&id=483e8718\n\nconst _hoisted_1 = {\n  class: \"content element-doc\"\n};\nconst _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h2\", {\n  id: \"page-fen-ye-qi\",\n  tabindex: \"-1\"\n}, \"Page 分页器\", -1);\nconst _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"ji-chu-yong-fa\",\n  tabindex: \"-1\"\n}, \"基础用法\", -1);\nconst _hoisted_4 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"<template>\\n  <f-page :total=\\\"100\\\" :current.sync=\\\"current\\\"></f-page>\\n</template>\\n<script>\\n  export default {\\n    data() {\\n      return {\\n        current: 2\\n      }\\n    }\\n  }\\n</script>\\n\")], -1);\nconst _hoisted_5 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"mei-ye-shu-liang\",\n  tabindex: \"-1\"\n}, \"每页数量\", -1);\nconst _hoisted_6 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"<template>\\n  <f-page :total=\\\"100\\\" show-sizer></f-page>\\n</template>\\n\")], -1);\nconst _hoisted_7 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"dian-ti\",\n  tabindex: \"-1\"\n}, \"电梯\", -1);\nconst _hoisted_8 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"<template>\\n  <f-page :total=\\\"100\\\" show-elevator></f-page>\\n</template>\\n\")], -1);\nconst _hoisted_9 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"zong-shu\",\n  tabindex: \"-1\"\n}, \"总数\", -1);\nconst _hoisted_10 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"<template>\\n  <f-page :total=\\\"100\\\" show-total></f-page>\\n</template>\\n\")], -1);\nconst _hoisted_11 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"minixing\",\n  tabindex: \"-1\"\n}, \"mini型\", -1);\nconst _hoisted_12 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"<template>\\n  <f-page :total=\\\"100\\\" size=\\\"small\\\" show-elevator show-sizer show-total></f-page>\\n</template>\\n\")], -1);\nconst _hoisted_13 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"shang-yi-ye-xia-yi-ye-wen-zi\",\n  tabindex: \"-1\"\n}, \"上一页下一页文字\", -1);\nconst _hoisted_14 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"<template>\\n  <f-page :total=\\\"40\\\" prev-text=\\\"上一页\\\" next-text=\\\"下一页\\\"></f-page>\\n</template>\\n\")], -1);\nconst _hoisted_15 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"h3\", {\n  id: \"jian-ji-mo-shi\",\n  tabindex: \"-1\"\n}, \"简洁模式\", -1);\nconst _hoisted_16 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"pre\", null, [/*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */._)(\"code\", {\n  class: \"html\"\n}, \"<template>\\n  <f-page :current=\\\"2\\\" :total=\\\"50\\\" simple></f-page>\\n</template>\\n\")], -1);\nconst _hoisted_17 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createStaticVNode */.uE)(\"<h3 id=\\\"props\\\" tabindex=\\\"-1\\\">Props</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>可选值</th><th>默认值</th></tr></thead><tbody><tr><td>current</td><td>当前页码 支持v-model:current修饰</td><td>Number</td><td>—</td><td>1</td></tr><tr><td>total</td><td>数据总数</td><td>Number</td><td>—</td><td>0</td></tr><tr><td>page-size</td><td>每页条数</td><td>Number</td><td>—</td><td>10</td></tr><tr><td>page-size-opts</td><td>每页条数切换的配置</td><td>Array</td><td>—</td><td>[10, 20, 30, 40]</td></tr><tr><td>placement</td><td>条数切换弹窗的展开方向</td><td>string</td><td>bottom 和 top</td><td>bottom</td></tr><tr><td>size</td><td>可选值为small（迷你版）或不填（默认）</td><td>string</td><td>—</td><td>—</td></tr><tr><td>simple</td><td>简洁版</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>show-total</td><td>显示总数</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>show-elevator</td><td>显示电梯，可以快速切换到某一页</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>show-sizer</td><td>显示分页，用来改变page-size</td><td>Boolean</td><td>—</td><td>false</td></tr><tr><td>class-name</td><td>自定义 class 名称</td><td>String</td><td>—</td><td>—</td></tr><tr><td>styles</td><td>自定义 style 样式</td><td>Object</td><td>—</td><td>—</td></tr><tr><td>prev-text</td><td>替代图标显示的上一页文字</td><td>String</td><td>—</td><td>—</td></tr><tr><td>next-text</td><td>替代图标显示的下一页文字</td><td>String</td><td>—</td><td>—</td></tr></tbody></table><h3 id=\\\"events\\\" tabindex=\\\"-1\\\">Events</h3><table><thead><tr><th>事件名</th><th>说明</th><th>返回值</th></tr></thead><tbody><tr><td>change</td><td>页码改变的回调，返回改变后的页码</td><td>页码</td></tr><tr><td>size-change</td><td>切换每页条数时的回调，返回切换后的每页条数</td><td>page-size</td></tr></tbody></table><h3 id=\\\"slot\\\" tabindex=\\\"-1\\\">Slot</h3><table><thead><tr><th>名称</th><th>说明</th></tr></thead><tbody><tr><td>default</td><td>自定义显示总数的内容</td></tr></tbody></table>\", 6);\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_element_demo0 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo0\");\n  const _component_demo_block = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"demo-block\");\n  const _component_element_demo1 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo1\");\n  const _component_element_demo2 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo2\");\n  const _component_element_demo3 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo3\");\n  const _component_element_demo4 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo4\");\n  const _component_element_demo5 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo5\");\n  const _component_element_demo6 = (0,runtime_core_esm_bundler/* resolveComponent */.up)(\"element-demo6\");\n  return (0,runtime_core_esm_bundler/* openBlock */.wg)(), (0,runtime_core_esm_bundler/* createElementBlock */.iD)(\"section\", _hoisted_1, [_hoisted_2, _hoisted_3, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo0)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_4]),\n    _: 1\n  }), _hoisted_5, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo1)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_6]),\n    _: 1\n  }), _hoisted_7, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo2)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_8]),\n    _: 1\n  }), _hoisted_9, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo3)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_10]),\n    _: 1\n  }), _hoisted_11, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo4)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_12]),\n    _: 1\n  }), _hoisted_13, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo5)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_14]),\n    _: 1\n  }), _hoisted_15, (0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_demo_block, null, {\n    source: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [(0,runtime_core_esm_bundler/* createVNode */.Wm)(_component_element_demo6)]),\n    highlight: (0,runtime_core_esm_bundler/* withCtx */.w5)(() => [_hoisted_16]),\n    _: 1\n  }), _hoisted_17]);\n}\n;// CONCATENATED MODULE: ./examples/docs/page.md?vue&type=template&id=483e8718\n\n// EXTERNAL MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue@3.3.4/node_modules/vue/dist/vue.runtime.esm-bundler.js\nvar vue_runtime_esm_bundler = __webpack_require__(596);\n;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_c3tfwv7p35clwcmkb5fnkshzei/node_modules/babel-loader/lib/index.js!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@16.5.0_yd4rp62hsewuzxgunnirqragb4/node_modules/vue-loader/dist/index.js??clonedRuleSet-2.use[0]!./build/md-loader/index.js!./examples/docs/page.md?vue&type=script&lang=js\n\n/* harmony default export */ var pagevue_type_script_lang_js = ({\n  name: 'component-doc',\n  components: {\n    \"element-demo0\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      function render(_ctx, _cache) {\n        const _component_f_page = _resolveComponent(\"f-page\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_f_page, {\n          total: 100,\n          current: _ctx.current\n        }, null, 8, [\"current\"])]);\n      }\n      const democomponentExport = {\n        data() {\n          return {\n            current: 2\n          };\n        }\n      };\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo1\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      function render(_ctx, _cache) {\n        const _component_f_page = _resolveComponent(\"f-page\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_f_page, {\n          total: 100,\n          \"show-sizer\": \"\"\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo2\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      function render(_ctx, _cache) {\n        const _component_f_page = _resolveComponent(\"f-page\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_f_page, {\n          total: 100,\n          \"show-elevator\": \"\"\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo3\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      function render(_ctx, _cache) {\n        const _component_f_page = _resolveComponent(\"f-page\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_f_page, {\n          total: 100,\n          \"show-total\": \"\"\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo4\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      function render(_ctx, _cache) {\n        const _component_f_page = _resolveComponent(\"f-page\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_f_page, {\n          total: 100,\n          size: \"small\",\n          \"show-elevator\": \"\",\n          \"show-sizer\": \"\",\n          \"show-total\": \"\"\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo5\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      function render(_ctx, _cache) {\n        const _component_f_page = _resolveComponent(\"f-page\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_f_page, {\n          total: 40,\n          \"prev-text\": \"上一页\",\n          \"next-text\": \"下一页\"\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }(),\n    \"element-demo6\": function () {\n      const {\n        resolveComponent: _resolveComponent,\n        createVNode: _createVNode,\n        openBlock: _openBlock,\n        createElementBlock: _createElementBlock\n      } = vue_runtime_esm_bundler;\n      function render(_ctx, _cache) {\n        const _component_f_page = _resolveComponent(\"f-page\");\n        return _openBlock(), _createElementBlock(\"div\", null, [_createVNode(_component_f_page, {\n          current: 2,\n          total: 50,\n          simple: \"\"\n        })]);\n      }\n      const democomponentExport = {};\n      return {\n        render,\n        ...democomponentExport\n      };\n    }()\n  }\n});\n;// CONCATENATED MODULE: ./examples/docs/page.md?vue&type=script&lang=js\n \n;// CONCATENATED MODULE: ./examples/docs/page.md\n\n\n\npagevue_type_script_lang_js.render = render\n\n/* harmony default export */ var page = (pagevue_type_script_lang_js);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDUzOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFZQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBekRBO0FBS0E7QUFDQTs7QUFZQTtBQUdBO0FBQ0E7O0FBR0E7QUFHQTtBQUNBOztBQUdBO0FBR0E7QUFDQTs7QUFHQTtBQUdBO0FBQ0E7O0FBR0E7QUFHQTtBQUNBOztBQUdBO0FBR0E7QUFDQTs7QUFHQTs7Ozs7OztBQXlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUVwWEE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZi11aS1vbmUvLi9leGFtcGxlcy9kb2NzL3BhZ2UubWQ/N2EwYSIsIndlYnBhY2s6Ly9mLXVpLW9uZS8uL2V4YW1wbGVzL2RvY3MvcGFnZS5tZD8wN2M0Iiwid2VicGFjazovL2YtdWktb25lLy4vZXhhbXBsZXMvZG9jcy9wYWdlLm1kP2MwMjciLCJ3ZWJwYWNrOi8vZi11aS1vbmUvLi9leGFtcGxlcy9kb2NzL3BhZ2UubWQ/NmRhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgPHRlbXBsYXRlPlxuICAgIDxzZWN0aW9uIGNsYXNzPVwiY29udGVudCBlbGVtZW50LWRvY1wiPlxuICAgICAgPGgyIGlkPVwicGFnZS1mZW4teWUtcWlcIiB0YWJpbmRleD1cIi0xXCI+UGFnZSDliIbpobXlmag8L2gyPlxuPGgzIGlkPVwiamktY2h1LXlvbmctZmFcIiB0YWJpbmRleD1cIi0xXCI+5Z+656GA55So5rOVPC9oMz5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzAgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2YtcGFnZSA6dG90YWw9JnF1b3Q7MTAwJnF1b3Q7IDpjdXJyZW50LnN5bmM9JnF1b3Q7Y3VycmVudCZxdW90OyZndDsmbHQ7L2YtcGFnZSZndDtcbiZsdDsvdGVtcGxhdGUmZ3Q7XG4mbHQ7c2NyaXB0Jmd0O1xuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGN1cnJlbnQ6IDJcbiAgICAgIH1cbiAgICB9XG4gIH1cbiZsdDsvc2NyaXB0Jmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cIm1laS15ZS1zaHUtbGlhbmdcIiB0YWJpbmRleD1cIi0xXCI+5q+P6aG15pWw6YePPC9oMz5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzEgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2YtcGFnZSA6dG90YWw9JnF1b3Q7MTAwJnF1b3Q7IHNob3ctc2l6ZXImZ3Q7Jmx0Oy9mLXBhZ2UmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cImRpYW4tdGlcIiB0YWJpbmRleD1cIi0xXCI+55S15qKvPC9oMz5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzIgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2YtcGFnZSA6dG90YWw9JnF1b3Q7MTAwJnF1b3Q7IHNob3ctZWxldmF0b3ImZ3Q7Jmx0Oy9mLXBhZ2UmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInpvbmctc2h1XCIgdGFiaW5kZXg9XCItMVwiPuaAu+aVsDwvaDM+XG48ZGVtby1ibG9jaz5cbiAgICAgICAgXG4gICAgICAgIDx0ZW1wbGF0ZSAjc291cmNlPjxlbGVtZW50LWRlbW8zIC8+PC90ZW1wbGF0ZT5cbiAgICAgICAgPHRlbXBsYXRlICNoaWdobGlnaHQ+PHByZSB2LXByZT48Y29kZSBjbGFzcz1cImh0bWxcIj4mbHQ7dGVtcGxhdGUmZ3Q7XG4gICZsdDtmLXBhZ2UgOnRvdGFsPSZxdW90OzEwMCZxdW90OyBzaG93LXRvdGFsJmd0OyZsdDsvZi1wYWdlJmd0O1xuJmx0Oy90ZW1wbGF0ZSZndDtcbjwvY29kZT48L3ByZT48L3RlbXBsYXRlPjwvZGVtby1ibG9jaz48aDMgaWQ9XCJtaW5peGluZ1wiIHRhYmluZGV4PVwiLTFcIj5taW5p5Z6LPC9oMz5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzQgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2YtcGFnZSA6dG90YWw9JnF1b3Q7MTAwJnF1b3Q7IHNpemU9JnF1b3Q7c21hbGwmcXVvdDsgc2hvdy1lbGV2YXRvciBzaG93LXNpemVyIHNob3ctdG90YWwmZ3Q7Jmx0Oy9mLXBhZ2UmZ3Q7XG4mbHQ7L3RlbXBsYXRlJmd0O1xuPC9jb2RlPjwvcHJlPjwvdGVtcGxhdGU+PC9kZW1vLWJsb2NrPjxoMyBpZD1cInNoYW5nLXlpLXllLXhpYS15aS15ZS13ZW4temlcIiB0YWJpbmRleD1cIi0xXCI+5LiK5LiA6aG15LiL5LiA6aG15paH5a2XPC9oMz5cbjxkZW1vLWJsb2NrPlxuICAgICAgICBcbiAgICAgICAgPHRlbXBsYXRlICNzb3VyY2U+PGVsZW1lbnQtZGVtbzUgLz48L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgI2hpZ2hsaWdodD48cHJlIHYtcHJlPjxjb2RlIGNsYXNzPVwiaHRtbFwiPiZsdDt0ZW1wbGF0ZSZndDtcbiAgJmx0O2YtcGFnZSA6dG90YWw9JnF1b3Q7NDAmcXVvdDsgcHJldi10ZXh0PSZxdW90O+S4iuS4gOmhtSZxdW90OyBuZXh0LXRleHQ9JnF1b3Q75LiL5LiA6aG1JnF1b3Q7Jmd0OyZsdDsvZi1wYWdlJmd0O1xuJmx0Oy90ZW1wbGF0ZSZndDtcbjwvY29kZT48L3ByZT48L3RlbXBsYXRlPjwvZGVtby1ibG9jaz48aDMgaWQ9XCJqaWFuLWppLW1vLXNoaVwiIHRhYmluZGV4PVwiLTFcIj7nroDmtIHmqKHlvI88L2gzPlxuPGRlbW8tYmxvY2s+XG4gICAgICAgIFxuICAgICAgICA8dGVtcGxhdGUgI3NvdXJjZT48ZWxlbWVudC1kZW1vNiAvPjwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSAjaGlnaGxpZ2h0PjxwcmUgdi1wcmU+PGNvZGUgY2xhc3M9XCJodG1sXCI+Jmx0O3RlbXBsYXRlJmd0O1xuICAmbHQ7Zi1wYWdlIDpjdXJyZW50PSZxdW90OzImcXVvdDsgOnRvdGFsPSZxdW90OzUwJnF1b3Q7IHNpbXBsZSZndDsmbHQ7L2YtcGFnZSZndDtcbiZsdDsvdGVtcGxhdGUmZ3Q7XG48L2NvZGU+PC9wcmU+PC90ZW1wbGF0ZT48L2RlbW8tYmxvY2s+PGgzIGlkPVwicHJvcHNcIiB0YWJpbmRleD1cIi0xXCI+UHJvcHM8L2gzPlxuPHRhYmxlPlxuPHRoZWFkPlxuPHRyPlxuPHRoPuWPguaVsDwvdGg+XG48dGg+6K+05piOPC90aD5cbjx0aD7nsbvlnos8L3RoPlxuPHRoPuWPr+mAieWAvDwvdGg+XG48dGg+6buY6K6k5YC8PC90aD5cbjwvdHI+XG48L3RoZWFkPlxuPHRib2R5PlxuPHRyPlxuPHRkPmN1cnJlbnQ8L3RkPlxuPHRkPuW9k+WJjemhteeggSDmlK/mjIF2LW1vZGVsOmN1cnJlbnTkv67ppbA8L3RkPlxuPHRkPk51bWJlcjwvdGQ+XG48dGQ+4oCUPC90ZD5cbjx0ZD4xPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+dG90YWw8L3RkPlxuPHRkPuaVsOaNruaAu+aVsDwvdGQ+XG48dGQ+TnVtYmVyPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPjA8L3RkPlxuPC90cj5cbjx0cj5cbjx0ZD5wYWdlLXNpemU8L3RkPlxuPHRkPuavj+mhteadoeaVsDwvdGQ+XG48dGQ+TnVtYmVyPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPjEwPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+cGFnZS1zaXplLW9wdHM8L3RkPlxuPHRkPuavj+mhteadoeaVsOWIh+aNoueahOmFjee9rjwvdGQ+XG48dGQ+QXJyYXk8L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+WzEwLCAyMCwgMzAsIDQwXTwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPnBsYWNlbWVudDwvdGQ+XG48dGQ+5p2h5pWw5YiH5o2i5by556qX55qE5bGV5byA5pa55ZCRPC90ZD5cbjx0ZD5zdHJpbmc8L3RkPlxuPHRkPmJvdHRvbSDlkowgdG9wPC90ZD5cbjx0ZD5ib3R0b208L3RkPlxuPC90cj5cbjx0cj5cbjx0ZD5zaXplPC90ZD5cbjx0ZD7lj6/pgInlgLzkuLpzbWFsbO+8iOi/t+S9oOeJiO+8ieaIluS4jeWhq++8iOm7mOiupO+8iTwvdGQ+XG48dGQ+c3RyaW5nPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPuKAlDwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPnNpbXBsZTwvdGQ+XG48dGQ+566A5rSB54mIPC90ZD5cbjx0ZD5Cb29sZWFuPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPmZhbHNlPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c2hvdy10b3RhbDwvdGQ+XG48dGQ+5pi+56S65oC75pWwPC90ZD5cbjx0ZD5Cb29sZWFuPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPmZhbHNlPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c2hvdy1lbGV2YXRvcjwvdGQ+XG48dGQ+5pi+56S655S15qKv77yM5Y+v5Lul5b+r6YCf5YiH5o2i5Yiw5p+Q5LiA6aG1PC90ZD5cbjx0ZD5Cb29sZWFuPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPmZhbHNlPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c2hvdy1zaXplcjwvdGQ+XG48dGQ+5pi+56S65YiG6aG177yM55So5p2l5pS55Y+YcGFnZS1zaXplPC90ZD5cbjx0ZD5Cb29sZWFuPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPmZhbHNlPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+Y2xhc3MtbmFtZTwvdGQ+XG48dGQ+6Ieq5a6a5LmJIGNsYXNzIOWQjeensDwvdGQ+XG48dGQ+U3RyaW5nPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPuKAlDwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPnN0eWxlczwvdGQ+XG48dGQ+6Ieq5a6a5LmJIHN0eWxlIOagt+W8jzwvdGQ+XG48dGQ+T2JqZWN0PC90ZD5cbjx0ZD7igJQ8L3RkPlxuPHRkPuKAlDwvdGQ+XG48L3RyPlxuPHRyPlxuPHRkPnByZXYtdGV4dDwvdGQ+XG48dGQ+5pu/5Luj5Zu+5qCH5pi+56S655qE5LiK5LiA6aG15paH5a2XPC90ZD5cbjx0ZD5TdHJpbmc8L3RkPlxuPHRkPuKAlDwvdGQ+XG48dGQ+4oCUPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+bmV4dC10ZXh0PC90ZD5cbjx0ZD7mm7/ku6Plm77moIfmmL7npLrnmoTkuIvkuIDpobXmloflrZc8L3RkPlxuPHRkPlN0cmluZzwvdGQ+XG48dGQ+4oCUPC90ZD5cbjx0ZD7igJQ8L3RkPlxuPC90cj5cbjwvdGJvZHk+XG48L3RhYmxlPlxuPGgzIGlkPVwiZXZlbnRzXCIgdGFiaW5kZXg9XCItMVwiPkV2ZW50czwvaDM+XG48dGFibGU+XG48dGhlYWQ+XG48dHI+XG48dGg+5LqL5Lu25ZCNPC90aD5cbjx0aD7or7TmmI48L3RoPlxuPHRoPui/lOWbnuWAvDwvdGg+XG48L3RyPlxuPC90aGVhZD5cbjx0Ym9keT5cbjx0cj5cbjx0ZD5jaGFuZ2U8L3RkPlxuPHRkPumhteeggeaUueWPmOeahOWbnuiwg++8jOi/lOWbnuaUueWPmOWQjueahOmhteeggTwvdGQ+XG48dGQ+6aG156CBPC90ZD5cbjwvdHI+XG48dHI+XG48dGQ+c2l6ZS1jaGFuZ2U8L3RkPlxuPHRkPuWIh+aNouavj+mhteadoeaVsOaXtueahOWbnuiwg++8jOi/lOWbnuWIh+aNouWQjueahOavj+mhteadoeaVsDwvdGQ+XG48dGQ+cGFnZS1zaXplPC90ZD5cbjwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cbjxoMyBpZD1cInNsb3RcIiB0YWJpbmRleD1cIi0xXCI+U2xvdDwvaDM+XG48dGFibGU+XG48dGhlYWQ+XG48dHI+XG48dGg+5ZCN56ewPC90aD5cbjx0aD7or7TmmI48L3RoPlxuPC90cj5cbjwvdGhlYWQ+XG48dGJvZHk+XG48dHI+XG48dGQ+ZGVmYXVsdDwvdGQ+XG48dGQ+6Ieq5a6a5LmJ5pi+56S65oC75pWw55qE5YaF5a65PC90ZD5cbjwvdHI+XG48L3Rib2R5PlxuPC90YWJsZT5cblxuICAgIDwvc2VjdGlvbj5cbiAgPC90ZW1wbGF0ZT5cbiAgPHNjcmlwdD5cbiAgICAgIGltcG9ydCAqIGFzIFZ1ZSBmcm9tICd2dWUnO1xuICAgICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnY29tcG9uZW50LWRvYycsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICBcImVsZW1lbnQtZGVtbzBcIjogKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHsgcmVzb2x2ZUNvbXBvbmVudDogX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlOiBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrOiBfY3JlYXRlRWxlbWVudEJsb2NrIH0gPSBWdWVcblxuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICBjb25zdCBfY29tcG9uZW50X2ZfcGFnZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiZi1wYWdlXCIpXG5cbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2ZfcGFnZSwge1xuICAgICAgdG90YWw6IDEwMCxcbiAgICAgIGN1cnJlbnQ6IF9jdHguY3VycmVudFxuICAgIH0sIG51bGwsIDgsIFtcImN1cnJlbnRcIl0pXG4gIF0pKVxufVxuICBcbiAgICBjb25zdCBkZW1vY29tcG9uZW50RXhwb3J0ID0ge1xuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjdXJyZW50OiAyXG4gICAgICB9XG4gICAgfVxuICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIC4uLmRlbW9jb21wb25lbnRFeHBvcnRcbiAgICB9XG4gIH0pKCksXCJlbGVtZW50LWRlbW8xXCI6IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB7IHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2s6IF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jazogX2NyZWF0ZUVsZW1lbnRCbG9jayB9ID0gVnVlXG5cbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9mX3BhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcImYtcGFnZVwiKVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIG51bGwsIFtcbiAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9mX3BhZ2UsIHtcbiAgICAgIHRvdGFsOiAxMDAsXG4gICAgICBcInNob3ctc2l6ZXJcIjogXCJcIlxuICAgIH0pXG4gIF0pKVxufVxuICBcbiAgICBjb25zdCBkZW1vY29tcG9uZW50RXhwb3J0ID0ge31cbiAgICByZXR1cm4ge1xuICAgICAgcmVuZGVyLFxuICAgICAgLi4uZGVtb2NvbXBvbmVudEV4cG9ydFxuICAgIH1cbiAgfSkoKSxcImVsZW1lbnQtZGVtbzJcIjogKGZ1bmN0aW9uKCkge1xuICAgIFxuICAgIGNvbnN0IHsgcmVzb2x2ZUNvbXBvbmVudDogX3Jlc29sdmVDb21wb25lbnQsIGNyZWF0ZVZOb2RlOiBfY3JlYXRlVk5vZGUsIG9wZW5CbG9jazogX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrOiBfY3JlYXRlRWxlbWVudEJsb2NrIH0gPSBWdWVcblxuZnVuY3Rpb24gcmVuZGVyKF9jdHgsIF9jYWNoZSkge1xuICBjb25zdCBfY29tcG9uZW50X2ZfcGFnZSA9IF9yZXNvbHZlQ29tcG9uZW50KFwiZi1wYWdlXCIpXG5cbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJkaXZcIiwgbnVsbCwgW1xuICAgIF9jcmVhdGVWTm9kZShfY29tcG9uZW50X2ZfcGFnZSwge1xuICAgICAgdG90YWw6IDEwMCxcbiAgICAgIFwic2hvdy1lbGV2YXRvclwiOiBcIlwiXG4gICAgfSlcbiAgXSkpXG59XG4gIFxuICAgIGNvbnN0IGRlbW9jb21wb25lbnRFeHBvcnQgPSB7fVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIsXG4gICAgICAuLi5kZW1vY29tcG9uZW50RXhwb3J0XG4gICAgfVxuICB9KSgpLFwiZWxlbWVudC1kZW1vM1wiOiAoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3QgeyByZXNvbHZlQ29tcG9uZW50OiBfcmVzb2x2ZUNvbXBvbmVudCwgY3JlYXRlVk5vZGU6IF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrOiBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2s6IF9jcmVhdGVFbGVtZW50QmxvY2sgfSA9IFZ1ZVxuXG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfZl9wYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJmLXBhZ2VcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfZl9wYWdlLCB7XG4gICAgICB0b3RhbDogMTAwLFxuICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCJcbiAgICB9KVxuICBdKSlcbn1cbiAgXG4gICAgY29uc3QgZGVtb2NvbXBvbmVudEV4cG9ydCA9IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIC4uLmRlbW9jb21wb25lbnRFeHBvcnRcbiAgICB9XG4gIH0pKCksXCJlbGVtZW50LWRlbW80XCI6IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB7IHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2s6IF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jazogX2NyZWF0ZUVsZW1lbnRCbG9jayB9ID0gVnVlXG5cbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9mX3BhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcImYtcGFnZVwiKVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIG51bGwsIFtcbiAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9mX3BhZ2UsIHtcbiAgICAgIHRvdGFsOiAxMDAsXG4gICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICBcInNob3ctZWxldmF0b3JcIjogXCJcIixcbiAgICAgIFwic2hvdy1zaXplclwiOiBcIlwiLFxuICAgICAgXCJzaG93LXRvdGFsXCI6IFwiXCJcbiAgICB9KVxuICBdKSlcbn1cbiAgXG4gICAgY29uc3QgZGVtb2NvbXBvbmVudEV4cG9ydCA9IHt9XG4gICAgcmV0dXJuIHtcbiAgICAgIHJlbmRlcixcbiAgICAgIC4uLmRlbW9jb21wb25lbnRFeHBvcnRcbiAgICB9XG4gIH0pKCksXCJlbGVtZW50LWRlbW81XCI6IChmdW5jdGlvbigpIHtcbiAgICBcbiAgICBjb25zdCB7IHJlc29sdmVDb21wb25lbnQ6IF9yZXNvbHZlQ29tcG9uZW50LCBjcmVhdGVWTm9kZTogX2NyZWF0ZVZOb2RlLCBvcGVuQmxvY2s6IF9vcGVuQmxvY2ssIGNyZWF0ZUVsZW1lbnRCbG9jazogX2NyZWF0ZUVsZW1lbnRCbG9jayB9ID0gVnVlXG5cbmZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUpIHtcbiAgY29uc3QgX2NvbXBvbmVudF9mX3BhZ2UgPSBfcmVzb2x2ZUNvbXBvbmVudChcImYtcGFnZVwiKVxuXG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIG51bGwsIFtcbiAgICBfY3JlYXRlVk5vZGUoX2NvbXBvbmVudF9mX3BhZ2UsIHtcbiAgICAgIHRvdGFsOiA0MCxcbiAgICAgIFwicHJldi10ZXh0XCI6IFwi5LiK5LiA6aG1XCIsXG4gICAgICBcIm5leHQtdGV4dFwiOiBcIuS4i+S4gOmhtVwiXG4gICAgfSlcbiAgXSkpXG59XG4gIFxuICAgIGNvbnN0IGRlbW9jb21wb25lbnRFeHBvcnQgPSB7fVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIsXG4gICAgICAuLi5kZW1vY29tcG9uZW50RXhwb3J0XG4gICAgfVxuICB9KSgpLFwiZWxlbWVudC1kZW1vNlwiOiAoZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgY29uc3QgeyByZXNvbHZlQ29tcG9uZW50OiBfcmVzb2x2ZUNvbXBvbmVudCwgY3JlYXRlVk5vZGU6IF9jcmVhdGVWTm9kZSwgb3BlbkJsb2NrOiBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2s6IF9jcmVhdGVFbGVtZW50QmxvY2sgfSA9IFZ1ZVxuXG5mdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIGNvbnN0IF9jb21wb25lbnRfZl9wYWdlID0gX3Jlc29sdmVDb21wb25lbnQoXCJmLXBhZ2VcIilcblxuICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCBudWxsLCBbXG4gICAgX2NyZWF0ZVZOb2RlKF9jb21wb25lbnRfZl9wYWdlLCB7XG4gICAgICBjdXJyZW50OiAyLFxuICAgICAgdG90YWw6IDUwLFxuICAgICAgc2ltcGxlOiBcIlwiXG4gICAgfSlcbiAgXSkpXG59XG4gIFxuICAgIGNvbnN0IGRlbW9jb21wb25lbnRFeHBvcnQgPSB7fVxuICAgIHJldHVybiB7XG4gICAgICByZW5kZXIsXG4gICAgICAuLi5kZW1vY29tcG9uZW50RXhwb3J0XG4gICAgfVxuICB9KSgpLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zY3JpcHQ+XG4gICIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2JhYmVsLWxvYWRlckA4LjMuMF9jM3Rmd3Y3cDM1Y2x3Y21rYjVmbmtzaHplaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtbWlycm9yLmNvbSt2dWUtbG9hZGVyQDE2LjUuMF95ZDRycDYyaHNld3V6eGd1bm5pcnFyYWdiNC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK3Z1ZS1sb2FkZXJAMTYuNS4wX3lkNHJwNjJoc2V3dXp4Z3VubmlycXJhZ2I0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMF0hLi4vLi4vYnVpbGQvbWQtbG9hZGVyL2luZGV4LmpzIS4vcGFnZS5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODNlODcxOFwiIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK2JhYmVsLWxvYWRlckA4LjMuMF9jM3Rmd3Y3cDM1Y2x3Y21rYjVmbmtzaHplaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vcmVnaXN0cnkubnBtbWlycm9yLmNvbSt2dWUtbG9hZGVyQDE2LjUuMF95ZDRycDYyaHNld3V6eGd1bm5pcnFyYWdiNC9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTIudXNlWzBdIS4uLy4uL2J1aWxkL21kLWxvYWRlci9pbmRleC5qcyEuL3BhZ2UubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL3JlZ2lzdHJ5Lm5wbW1pcnJvci5jb20rYmFiZWwtbG9hZGVyQDguMy4wX2MzdGZ3djdwMzVjbHdjbWtiNWZua3NoemVpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9yZWdpc3RyeS5ucG1taXJyb3IuY29tK3Z1ZS1sb2FkZXJAMTYuNS4wX3lkNHJwNjJoc2V3dXp4Z3VubmlycXJhZ2I0L25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMi51c2VbMF0hLi4vLi4vYnVpbGQvbWQtbG9hZGVyL2luZGV4LmpzIS4vcGFnZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vcGFnZS5tZD92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ODNlODcxOFwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BhZ2UubWQ/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vcGFnZS5tZD92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5zY3JpcHQucmVuZGVyID0gcmVuZGVyXG5cbmV4cG9ydCBkZWZhdWx0IHNjcmlwdCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4538\n");

/***/ })

}]);