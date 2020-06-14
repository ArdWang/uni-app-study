(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["components/sjpeter-loadmore/loadmore"],{

/***/ 19:
/*!****************************************************************************************************!*\
  !*** F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadmore.vue?vue&type=template&id=03f03327& */ 20);
/* harmony import */ var _loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadmore.vue?vue&type=script&lang=js& */ 22);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _loadmore_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadmore.vue?vue&type=style&index=0&lang=css& */ 24);
/* harmony import */ var _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__["render"],
  _loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 20:
/*!***********************************************************************************************************************************!*\
  !*** F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue?vue&type=template&id=03f03327& ***!
  \***********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./loadmore.vue?vue&type=template&id=03f03327& */ 21);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_template_id_03f03327___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 21:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue?vue&type=template&id=03f03327& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 22:
/*!*****************************************************************************************************************************!*\
  !*** F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./loadmore.vue?vue&type=script&lang=js& */ 23);
/* harmony import */ var _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 23:
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var uniLoadMore = function uniLoadMore() {__webpack_require__.e(/*! require.ensure | components/uni-load-more/uni-load-more */ "components/uni-load-more/uni-load-more").then((function () {return resolve(__webpack_require__(/*! @/components/uni-load-more/uni-load-more.vue */ 26));}).bind(null, __webpack_require__)).catch(__webpack_require__.oe);};var _default =






















{
  components: {
    uniLoadMore: uniLoadMore },

  props: {
    maxDistance: {
      type: Number,
      default: 0 },

    top: {
      type: Number },

    bottom: {
      type: Number },

    autoFill: {
      type: Boolean,
      default: true },

    distanceIndex: {
      type: Number,
      default: 1 },

    topMethod: {
      type: Function },

    topPullText: {
      type: String,
      default: '下拉刷新' },

    topDropText: {
      type: String,
      default: '释放更新' },

    topLoadingText: {
      type: String,
      default: '加载中...' },

    topDistance: {
      type: Number,
      default: 70 },

    bottomMethod: {
      type: Function },

    bottomPullText: {
      type: String,
      default: '上拉刷新' },

    bottomDropText: {
      type: String,
      default: '释放更新' },

    bottomLoadingText: {
      type: String,
      default: '加载中...' },

    bottomDistance: {
      type: Number,
      default: 70 },

    bottomAllLoaded: {
      type: Boolean,
      default: false },

    noMoreText: {
      type: String,
      default: '没有更多数据了' },

    controlBottom: {
      type: Boolean,
      default: true } },


  data: function data() {
    return {
      translate: 0,
      scrollTop: 0,
      old: {
        scrollTop: 0 },

      topStatus: '',
      topText: '',
      topDropped: false,
      bottomStatus: '',
      bottomText: '',
      bottomDropped: false,
      bottomReached: false,
      direction: '',
      startY: 0,
      startScrollTop: 0,
      scrollInfo: {},
      contentTop: {
        contentdown: this.topPullText,
        contentrefresh: this.topLoadingText,
        contentnomore: this.topDropText },

      contentBottom: {
        contentdown: this.bottomPullText,
        contentrefresh: this.bottomLoadingText,
        contentnomore: this.bottomDropText } };


  },
  computed: {
    transform: function transform() {
      // console.log(this.translate)
      return this.translate === 0 ? null : 'translate3d(0, ' + this.translate + 'px, 0)';
    } },

  watch: {
    topStatus: function topStatus(val) {
      switch (val) {
        case 'pull':
          // this.topText = this.topPullText;
          this.topText = 'more';
          break;
        case 'drop':
          // this.topText = this.topDropText;
          this.topText = 'noMore';
          break;
        case 'loading':
          // this.topText = this.topLoadingText;
          this.topText = 'loading';
          break;}

    },
    bottomStatus: function bottomStatus(val) {
      switch (val) {
        case 'pull':
          // this.bottomText = this.bottomPullText;
          this.bottomText = 'more';
          break;
        case 'drop':
          // this.bottomText = this.bottomDropText;
          this.bottomText = 'noMore';
          break;
        case 'loading':
          // this.bottomText = this.bottomLoadingText;
          this.bottomText = 'loading';
          break;}

    } },

  mounted: function mounted() {
    this.topStatus = 'pull';
    this.bottomStatus = 'pull';
    // this.topText = this.topPullText;
    this.topText = 'more';
  },
  methods: {
    getScrollTop: function getScrollTop() {
      var that = this;
      var query = uni.createSelectorQuery().in(this);
      query.select('#loadmore').boundingClientRect(function (data) {
        // console.log("得到布局位置信息" + JSON.stringify(data));
        that.startScrollTop = data.top;
        that.scrollInfo = data;
      }).exec();
    },
    handleTouchStart: function handleTouchStart(event) {
      try {
        this.startY = event.changedTouches[0].clientY;
      } catch (e) {
        //TODO handle the exception
      }
      this.getScrollTop();
      this.bottomReached = false;
      if (this.topStatus !== 'loading') {
        this.topStatus = 'pull';
        this.topDropped = false;
      }
      if (this.bottomStatus !== 'loading') {
        this.bottomStatus = 'pull';
        this.bottomDropped = false;
      }
    },
    handleTouchMove: function handleTouchMove(event) {
      // this.getScrollTop();
      if (this.startY < this.top && this.startY > this.bottom) {
        return;
      }
      this.currentY = event.changedTouches[0].clientY;
      var distance = (this.currentY - this.startY) / this.distanceIndex;
      this.direction = distance > 0 ? 'down' : 'up';
      // console.log(this.direction)
      if (typeof this.topMethod === 'function' && this.direction === 'down' && this.startScrollTop - this.top == 0 && this.topStatus !== 'loading') {
        event.preventDefault();
        event.stopPropagation();
        if (this.maxDistance > 0) {
          this.translate = distance <= this.maxDistance ? distance : this.translate;
        } else {
          this.translate = distance;
        }
        if (this.translate < 0) {
          this.translate = 0;
        }
        this.topStatus = this.translate >= this.topDistance ? 'drop' : 'pull';
      }

      if (this.direction === 'up') {
        this.bottomReached = this.bottomReached || this.checkBottomReached(distance);
      }

      if (typeof this.bottomMethod === 'function' && this.direction === 'up' &&
      this.bottomReached && this.bottomStatus !== 'loading' && !this.bottomAllLoaded) {
        event.preventDefault();
        event.stopPropagation();
        if (this.maxDistance > 0) {
          this.translate = Math.abs(distance) <= this.maxDistance ?
          this.scrollInfo.height + distance + this.scrollInfo.top - this.scrollInfo.bottom : this.translate;
        } else {
          this.translate = this.scrollInfo.height + distance + this.scrollInfo.top - this.scrollInfo.bottom;
        }
        if (this.translate > 0) {
          this.translate = 0;
        }
        this.bottomStatus = -this.translate >= this.bottomDistance ? 'drop' : 'pull';
      }
    },
    handleTouchEnd: function handleTouchEnd(event) {
      if (this.direction === 'down' && this.startScrollTop - this.top == 0 && this.translate > 0) {
        this.topDropped = true;
        if (this.topStatus === 'drop') {
          this.translate = '50';
          this.topStatus = 'loading';
          // this.topMethod();
          this.$emit('topMethods');
        } else {
          this.translate = '0';
          this.topStatus = 'pull';
        }
      }
      if (this.direction === 'up' && this.bottomReached && this.translate < 0) {
        this.bottomDropped = true;
        this.bottomReached = false;
        if (this.bottomStatus === 'drop') {
          this.translate = '-50';
          this.bottomStatus = 'loading';
          // this.bottomMethod();
          this.$emit('bottomMethods');
        } else {
          this.translate = '0';
          this.bottomStatus = 'pull';
        }
      }
      this.direction = '';
    },
    checkBottomReached: function checkBottomReached(distance) {
      // console.log(this.scrollInfo.height + distance + this.scrollInfo.top)
      return this.scrollInfo.height + distance + this.scrollInfo.top <= this.scrollInfo.bottom;
    },
    onTopLoaded: function onTopLoaded() {var _this = this;
      this.translate = 0;
      setTimeout(function () {
        _this.topStatus = 'pull';
      }, 200);
    },
    onBottomLoaded: function onBottomLoaded() {var _this2 = this;
      this.bottomStatus = 'pull';
      this.bottomDropped = false;
      this.$nextTick(function () {
        _this2.translate = 0;
      });
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 24:
/*!*************************************************************************************************************************************!*\
  !*** F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./loadmore.vue?vue&type=style&index=0&lang=css& */ 25);
/* harmony import */ var _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_Soft_worksoft_HbuliderX_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_loadmore_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 25:
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!F:/GitHub_Project/uni-app-study/loadmore上下拉刷新加载更多示例/components/sjpeter-loadmore/loadmore.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/sjpeter-loadmore/loadmore.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/sjpeter-loadmore/loadmore-create-component',
    {
        'components/sjpeter-loadmore/loadmore-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(19))
        })
    },
    [['components/sjpeter-loadmore/loadmore-create-component']]
]);
