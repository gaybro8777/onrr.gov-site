"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkonrr_frontend_app_vue"] = self["webpackChunkonrr_frontend_app_vue"] || []).push([["NYMEXCollection"],{

/***/ "./src/components/collections/NYMEX.vue?vue&type=template&id=d3bfac8a&":
/*!*****************************************************************************!*\
  !*** ./src/components/collections/NYMEX.vue?vue&type=template&id=d3bfac8a& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_NYMEX_vue_vue_type_template_id_d3bfac8a___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_NYMEX_vue_vue_type_template_id_d3bfac8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_NYMEX_vue_vue_type_template_id_d3bfac8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./NYMEX.vue?vue&type=template&id=d3bfac8a& */ \"./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/collections/NYMEX.vue?vue&type=template&id=d3bfac8a&\");\n\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./src/components/collections/NYMEX.vue?");

/***/ }),

/***/ "./src/components/collections/NYMEX.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./src/components/collections/NYMEX.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_39_0_rules_0_use_0_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_NYMEX_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-39[0].rules[0].use[0]!../../../node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./NYMEX.vue?vue&type=script&lang=js& */ \"./node_modules/babel-loader/lib/index.js??clonedRuleSet-39[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/collections/NYMEX.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_39_0_rules_0_use_0_node_modules_vue_vue_loader_v15_lib_index_js_vue_loader_options_NYMEX_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://onrr-frontend-app-vue/./src/components/collections/NYMEX.vue?");

/***/ }),

/***/ "./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/collections/NYMEX.vue?vue&type=template&id=d3bfac8a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/collections/NYMEX.vue?vue&type=template&id=d3bfac8a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function () {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"v-card\",\n    [\n      _c(\"v-data-table\", {\n        attrs: {\n          headers: _vm.headers,\n          items: _vm.filteredCollection,\n          \"item-key\": \"month\",\n        },\n        scopedSlots: _vm._u(\n          [\n            {\n              key: \"top\",\n              fn: function () {\n                return [\n                  _c(\n                    \"v-container\",\n                    [\n                      _c(\n                        \"v-row\",\n                        [\n                          _c(\n                            \"v-col\",\n                            { attrs: { cols: \"12\", sm: \"6\" } },\n                            [\n                              _c(\"v-select\", {\n                                attrs: {\n                                  items: _vm.years,\n                                  value: _vm.maxYear,\n                                  label: \"Year\",\n                                  outlined: \"\",\n                                  dense: \"\",\n                                  color: \"secondary\",\n                                },\n                                on: {\n                                  change: function ($event) {\n                                    return _vm.onUpdateStore(\"year\", $event)\n                                  },\n                                },\n                              }),\n                            ],\n                            1\n                          ),\n                        ],\n                        1\n                      ),\n                    ],\n                    1\n                  ),\n                ]\n              },\n              proxy: true,\n            },\n            {\n              key: \"item.date\",\n              fn: function (ref) {\n                var item = ref.item\n                return [\n                  _vm._v(\" \" + _vm._s(_vm.getMonth(item.date, \"long\")) + \" \"),\n                ]\n              },\n            },\n            {\n              key: \"item.average\",\n              fn: function (ref) {\n                var item = ref.item\n                return [\n                  _vm._v(\" $\" + _vm._s(_vm.roundHalfUp(item.average, 2)) + \" \"),\n                ]\n              },\n            },\n            {\n              key: \"item.roll\",\n              fn: function (ref) {\n                var item = ref.item\n                return [\n                  _vm._v(\" $\" + _vm._s(_vm.roundHalfUp(item.roll, 2)) + \" \"),\n                ]\n              },\n            },\n            {\n              key: \"item.Spreadsheet\",\n              fn: function (ref) {\n                var item = ref.item\n                return [\n                  _c(\n                    \"a\",\n                    {\n                      attrs: {\n                        href: _vm.fileLink(item.Spreadsheet.filename_download),\n                      },\n                    },\n                    [_vm._v(\"Download\")]\n                  ),\n                  _c(\"v-icon\", { attrs: { color: \"secondary ml-2\" } }, [\n                    _vm._v(\"mdi-file-excel-box\"),\n                  ]),\n                ]\n              },\n            },\n          ],\n          null,\n          true\n        ),\n      }),\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./src/components/collections/NYMEX.vue?./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-39[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/collections/NYMEX.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-39[0].rules[0].use[0]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./src/components/collections/NYMEX.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/store */ \"./src/store.js\");\n/* harmony import */ var _js_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/utils */ \"./src/js/utils.js\");\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'NYMEXCollection',\n\n  data() {\n    return {\n      items: [],\n      API: \"https://dev-onrr-frontend.app.cloud.gov\"\n    };\n  },\n\n  props: {\n    collection: [Object, Array],\n    collectionName: String,\n    collectionLayout: String,\n    showToolbar: Boolean\n  },\n  components: {},\n  methods: {\n    fileLink(filename) {\n      let link = `${this.API}/document/${filename}`;\n      return link;\n    },\n\n    getDay: _js_utils__WEBPACK_IMPORTED_MODULE_1__.getDay,\n    getMonth: _js_utils__WEBPACK_IMPORTED_MODULE_1__.getMonth,\n    getFullDate: _js_utils__WEBPACK_IMPORTED_MODULE_1__.getFullDate,\n    getYear: _js_utils__WEBPACK_IMPORTED_MODULE_1__.getYear,\n\n    year() {\n      if (_store__WEBPACK_IMPORTED_MODULE_0__.store.collections.year > this.maxYear || !_store__WEBPACK_IMPORTED_MODULE_0__.store.collections.year) {\n        return this.maxYear;\n      } else {\n        return _store__WEBPACK_IMPORTED_MODULE_0__.store.collections.year;\n      }\n    },\n\n    onUpdateStore(key, value) {\n      _store__WEBPACK_IMPORTED_MODULE_0__.mutations.updateCollections(key, value);\n    },\n\n    roundHalfUp(value, decimals) {\n      return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals).toFixed(decimals);\n    }\n\n  },\n  computed: {\n    search() {\n      return _store__WEBPACK_IMPORTED_MODULE_0__.store.collections.searchQuery;\n    },\n\n    maxYear() {\n      if (this.collection) {\n        const max = [...new Set(this.collection.map(item => this.getYear(item.date)))].sort((a, b) => a - b).pop();\n        return max;\n      } else {\n        return 2022;\n      }\n    },\n\n    years() {\n      if (this.collection) {\n        const years = [...new Set(this.collection.map(item => this.getYear(item.date)))].sort((a, b) => b - a);\n        return years;\n      } else {\n        return [];\n      }\n    },\n\n    filteredCollection() {\n      if (this.collection) {\n        const year = this.year();\n        const filtered = this.collection && this.collection.filter(item => this.getYear(item.date) === year.toString()).sort((a, b) => {\n          return new Date(a.date) - new Date(b.date);\n        });\n        return filtered;\n      } else {\n        return [];\n      }\n    },\n\n    searchResults() {\n      // search input results\n      const results = this.collection.filter(item => parseInt(this.getYear(item.date)) === this.year).sort((a, b) => b.date - a.date);\n      return results;\n    },\n\n    headers() {\n      return [{\n        text: 'Month',\n        value: 'date'\n      }, {\n        text: 'Calendar Month Avg.',\n        value: 'average',\n        align: 'end'\n      }, {\n        text: 'NYMEX Roll',\n        value: 'roll',\n        align: 'end'\n      }, {\n        text: 'Excel File',\n        value: 'Spreadsheet'\n      }];\n    }\n\n  }\n});\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./src/components/collections/NYMEX.vue?./node_modules/babel-loader/lib/index.js??clonedRuleSet-39%5B0%5D.rules%5B0%5D.use%5B0%5D!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/VCol.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/VCol.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VGrid/VGrid.sass */ \"./node_modules/vuetify/src/components/VGrid/VGrid.sass\");\n/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/mergeData */ \"./node_modules/vuetify/lib/util/mergeData.js\");\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ \"./node_modules/vuetify/lib/util/helpers.js\");\n\n\n\n\n // no xs\n\nconst breakpoints = ['sm', 'md', 'lg', 'xl'];\n\nconst breakpointProps = (() => {\n  return breakpoints.reduce((props, val) => {\n    props[val] = {\n      type: [Boolean, String, Number],\n      default: false\n    };\n    return props;\n  }, {});\n})();\n\nconst offsetProps = (() => {\n  return breakpoints.reduce((props, val) => {\n    props['offset' + (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.upperFirst)(val)] = {\n      type: [String, Number],\n      default: null\n    };\n    return props;\n  }, {});\n})();\n\nconst orderProps = (() => {\n  return breakpoints.reduce((props, val) => {\n    props['order' + (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.upperFirst)(val)] = {\n      type: [String, Number],\n      default: null\n    };\n    return props;\n  }, {});\n})();\n\nconst propMap = {\n  col: Object.keys(breakpointProps),\n  offset: Object.keys(offsetProps),\n  order: Object.keys(orderProps)\n};\n\nfunction breakpointClass(type, prop, val) {\n  let className = type;\n\n  if (val == null || val === false) {\n    return undefined;\n  }\n\n  if (prop) {\n    const breakpoint = prop.replace(type, '');\n    className += `-${breakpoint}`;\n  } // Handling the boolean style prop when accepting [Boolean, String, Number]\n  // means Vue will not convert <v-col sm></v-col> to sm: true for us.\n  // Since the default is false, an empty string indicates the prop's presence.\n\n\n  if (type === 'col' && (val === '' || val === true)) {\n    // .col-md\n    return className.toLowerCase();\n  } // .order-md-6\n\n\n  className += `-${val}`;\n  return className.toLowerCase();\n}\n\nconst cache = new Map();\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"].extend({\n  name: 'v-col',\n  functional: true,\n  props: {\n    cols: {\n      type: [Boolean, String, Number],\n      default: false\n    },\n    ...breakpointProps,\n    offset: {\n      type: [String, Number],\n      default: null\n    },\n    ...offsetProps,\n    order: {\n      type: [String, Number],\n      default: null\n    },\n    ...orderProps,\n    alignSelf: {\n      type: String,\n      default: null,\n      validator: str => ['auto', 'start', 'end', 'center', 'baseline', 'stretch'].includes(str)\n    },\n    tag: {\n      type: String,\n      default: 'div'\n    }\n  },\n\n  render(h, {\n    props,\n    data,\n    children,\n    parent\n  }) {\n    // Super-fast memoization based on props, 5x faster than JSON.stringify\n    let cacheKey = '';\n\n    for (const prop in props) {\n      cacheKey += String(props[prop]);\n    }\n\n    let classList = cache.get(cacheKey);\n\n    if (!classList) {\n      classList = []; // Loop through `col`, `offset`, `order` breakpoint props\n\n      let type;\n\n      for (type in propMap) {\n        propMap[type].forEach(prop => {\n          const value = props[prop];\n          const className = breakpointClass(type, prop, value);\n          if (className) classList.push(className);\n        });\n      }\n\n      const hasColClasses = classList.some(className => className.startsWith('col-'));\n      classList.push({\n        // Default to .col if no other col-{bp}-* classes generated nor `cols` specified.\n        col: !hasColClasses || !props.cols,\n        [`col-${props.cols}`]: props.cols,\n        [`offset-${props.offset}`]: props.offset,\n        [`order-${props.order}`]: props.order,\n        [`align-self-${props.alignSelf}`]: props.alignSelf\n      });\n      cache.set(cacheKey, classList);\n    }\n\n    return h(props.tag, (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data, {\n      class: classList\n    }), children);\n  }\n\n}));\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./node_modules/vuetify/lib/components/VGrid/VCol.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/VContainer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/VContainer.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/components/VGrid/_grid.sass */ \"./node_modules/vuetify/src/components/VGrid/_grid.sass\");\n/* harmony import */ var _src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_grid_sass__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VGrid/VGrid.sass */ \"./node_modules/vuetify/src/components/VGrid/VGrid.sass\");\n/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./grid */ \"./node_modules/vuetify/lib/components/VGrid/grid.js\");\n/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/mergeData */ \"./node_modules/vuetify/lib/util/mergeData.js\");\n\n\n\n\n/* @vue/component */\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,_grid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('container').extend({\n  name: 'v-container',\n  functional: true,\n  props: {\n    id: String,\n    tag: {\n      type: String,\n      default: 'div'\n    },\n    fluid: {\n      type: Boolean,\n      default: false\n    }\n  },\n\n  render(h, {\n    props,\n    data,\n    children\n  }) {\n    let classes;\n    const {\n      attrs\n    } = data;\n\n    if (attrs) {\n      // reset attrs to extract utility clases like pa-3\n      data.attrs = {};\n      classes = Object.keys(attrs).filter(key => {\n        // TODO: Remove once resolved\n        // https://github.com/vuejs/vue/issues/7841\n        if (key === 'slot') return false;\n        const value = attrs[key]; // add back data attributes like data-test=\"foo\" but do not\n        // add them as classes\n\n        if (key.startsWith('data-')) {\n          data.attrs[key] = value;\n          return false;\n        }\n\n        return value || typeof value === 'string';\n      });\n    }\n\n    if (props.id) {\n      data.domProps = data.domProps || {};\n      data.domProps.id = props.id;\n    }\n\n    return h(props.tag, (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(data, {\n      staticClass: 'container',\n      class: Array({\n        'container--fluid': props.fluid\n      }).concat(classes || [])\n    }), children);\n  }\n\n}));\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./node_modules/vuetify/lib/components/VGrid/VContainer.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/VRow.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/VRow.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ \"./node_modules/core-js/modules/es.array.includes.js\");\n/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../src/components/VGrid/VGrid.sass */ \"./node_modules/vuetify/src/components/VGrid/VGrid.sass\");\n/* harmony import */ var _src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_src_components_VGrid_VGrid_sass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n/* harmony import */ var _util_mergeData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/mergeData */ \"./node_modules/vuetify/lib/util/mergeData.js\");\n/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/helpers */ \"./node_modules/vuetify/lib/util/helpers.js\");\n\n\n\n\n // no xs\n\nconst breakpoints = ['sm', 'md', 'lg', 'xl'];\nconst ALIGNMENT = ['start', 'end', 'center'];\n\nfunction makeProps(prefix, def) {\n  return breakpoints.reduce((props, val) => {\n    props[prefix + (0,_util_helpers__WEBPACK_IMPORTED_MODULE_2__.upperFirst)(val)] = def();\n    return props;\n  }, {});\n}\n\nconst alignValidator = str => [...ALIGNMENT, 'baseline', 'stretch'].includes(str);\n\nconst alignProps = makeProps('align', () => ({\n  type: String,\n  default: null,\n  validator: alignValidator\n}));\n\nconst justifyValidator = str => [...ALIGNMENT, 'space-between', 'space-around'].includes(str);\n\nconst justifyProps = makeProps('justify', () => ({\n  type: String,\n  default: null,\n  validator: justifyValidator\n}));\n\nconst alignContentValidator = str => [...ALIGNMENT, 'space-between', 'space-around', 'stretch'].includes(str);\n\nconst alignContentProps = makeProps('alignContent', () => ({\n  type: String,\n  default: null,\n  validator: alignContentValidator\n}));\nconst propMap = {\n  align: Object.keys(alignProps),\n  justify: Object.keys(justifyProps),\n  alignContent: Object.keys(alignContentProps)\n};\nconst classMap = {\n  align: 'align',\n  justify: 'justify',\n  alignContent: 'align-content'\n};\n\nfunction breakpointClass(type, prop, val) {\n  let className = classMap[type];\n\n  if (val == null) {\n    return undefined;\n  }\n\n  if (prop) {\n    // alignSm -> Sm\n    const breakpoint = prop.replace(type, '');\n    className += `-${breakpoint}`;\n  } // .align-items-sm-center\n\n\n  className += `-${val}`;\n  return className.toLowerCase();\n}\n\nconst cache = new Map();\n/* harmony default export */ __webpack_exports__[\"default\"] = (vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"].extend({\n  name: 'v-row',\n  functional: true,\n  props: {\n    tag: {\n      type: String,\n      default: 'div'\n    },\n    dense: Boolean,\n    noGutters: Boolean,\n    align: {\n      type: String,\n      default: null,\n      validator: alignValidator\n    },\n    ...alignProps,\n    justify: {\n      type: String,\n      default: null,\n      validator: justifyValidator\n    },\n    ...justifyProps,\n    alignContent: {\n      type: String,\n      default: null,\n      validator: alignContentValidator\n    },\n    ...alignContentProps\n  },\n\n  render(h, {\n    props,\n    data,\n    children\n  }) {\n    // Super-fast memoization based on props, 5x faster than JSON.stringify\n    let cacheKey = '';\n\n    for (const prop in props) {\n      cacheKey += String(props[prop]);\n    }\n\n    let classList = cache.get(cacheKey);\n\n    if (!classList) {\n      classList = []; // Loop through `align`, `justify`, `alignContent` breakpoint props\n\n      let type;\n\n      for (type in propMap) {\n        propMap[type].forEach(prop => {\n          const value = props[prop];\n          const className = breakpointClass(type, prop, value);\n          if (className) classList.push(className);\n        });\n      }\n\n      classList.push({\n        'no-gutters': props.noGutters,\n        'row--dense': props.dense,\n        [`align-${props.align}`]: props.align,\n        [`justify-${props.justify}`]: props.justify,\n        [`align-content-${props.alignContent}`]: props.alignContent\n      });\n      cache.set(cacheKey, classList);\n    }\n\n    return h(props.tag, (0,_util_mergeData__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(data, {\n      staticClass: 'row',\n      class: classList\n    }), children);\n  }\n\n}));\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./node_modules/vuetify/lib/components/VGrid/VRow.js?");

/***/ }),

/***/ "./node_modules/vuetify/lib/components/VGrid/grid.js":
/*!***********************************************************!*\
  !*** ./node_modules/vuetify/lib/components/VGrid/grid.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VGrid; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n// Types\n\nfunction VGrid(name) {\n  /* @vue/component */\n  return vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].extend({\n    name: `v-${name}`,\n    functional: true,\n    props: {\n      id: String,\n      tag: {\n        type: String,\n        default: 'div'\n      }\n    },\n\n    render(h, {\n      props,\n      data,\n      children\n    }) {\n      data.staticClass = `${name} ${data.staticClass || ''}`.trim();\n      const {\n        attrs\n      } = data;\n\n      if (attrs) {\n        // reset attrs to extract utility clases like pa-3\n        data.attrs = {};\n        const classes = Object.keys(attrs).filter(key => {\n          // TODO: Remove once resolved\n          // https://github.com/vuejs/vue/issues/7841\n          if (key === 'slot') return false;\n          const value = attrs[key]; // add back data attributes like data-test=\"foo\" but do not\n          // add them as classes\n\n          if (key.startsWith('data-')) {\n            data.attrs[key] = value;\n            return false;\n          }\n\n          return value || typeof value === 'string';\n        });\n        if (classes.length) data.staticClass += ` ${classes.join(' ')}`;\n      }\n\n      if (props.id) {\n        data.domProps = data.domProps || {};\n        data.domProps.id = props.id;\n      }\n\n      return h(props.tag, data, children);\n    }\n\n  });\n}\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./node_modules/vuetify/lib/components/VGrid/grid.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mutations\": function() { return /* binding */ mutations; },\n/* harmony export */   \"store\": function() { return /* binding */ store; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.runtime.esm.js\");\n\nconst store = vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"].observable({\n  collections: {\n    searchQuery: '',\n    year: new Date().getFullYear(),\n    queryParams: {}\n  },\n  queryParams: {\n    tabs: [],\n    panel: ''\n  }\n});\nconst mutations = {\n  updateCollections(key, value) {\n    console.log('updateCollectionsSearchQuery --------> ', value);\n    store.collections[key] = value;\n  },\n\n  updateQueryParams(key, value) {\n    console.log('updateQueryParams --------> ', value);\n    store.queryParams[key] = value;\n  }\n\n};\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./src/store.js?");

/***/ }),

/***/ "./src/components/collections/NYMEX.vue":
/*!**********************************************!*\
  !*** ./src/components/collections/NYMEX.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _NYMEX_vue_vue_type_template_id_d3bfac8a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NYMEX.vue?vue&type=template&id=d3bfac8a& */ \"./src/components/collections/NYMEX.vue?vue&type=template&id=d3bfac8a&\");\n/* harmony import */ var _NYMEX_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NYMEX.vue?vue&type=script&lang=js& */ \"./src/components/collections/NYMEX.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js */ \"./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ \"./node_modules/vuetify-loader/lib/runtime/installComponents.js\");\n/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ \"./node_modules/vuetify/lib/components/VCard/VCard.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/VCol.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/VContainer.js\");\n/* harmony import */ var vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDataTable */ \"./node_modules/vuetify/lib/components/VDataTable/VDataTable.js\");\n/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ \"./node_modules/vuetify/lib/components/VIcon/VIcon.js\");\n/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ \"./node_modules/vuetify/lib/components/VGrid/VRow.js\");\n/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ \"./node_modules/vuetify/lib/components/VSelect/VSelect.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_vue_loader_v15_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _NYMEX_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _NYMEX_vue_vue_type_template_id_d3bfac8a___WEBPACK_IMPORTED_MODULE_0__.render,\n  _NYMEX_vue_vue_type_template_id_d3bfac8a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* vuetify-loader */\n;\n\n\n\n\n\n\n\n_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"],VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_5__[\"default\"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__[\"default\"],VDataTable: vuetify_lib_components_VDataTable__WEBPACK_IMPORTED_MODULE_7__[\"default\"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__[\"default\"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__[\"default\"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_10__[\"default\"]})\n\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/components/collections/NYMEX.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://onrr-frontend-app-vue/./src/components/collections/NYMEX.vue?");

/***/ })

}]);