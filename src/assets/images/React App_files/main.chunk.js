(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles/App.scss":
/*!*************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/sass-loader/lib/loader.js!./src/styles/App.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n  position: relative;\n  background: white;\n  max-width: 850px;\n  max-height: 700px;\n  margin: 0 auto;\n  padding: 0;\n  overflow: hidden; }\n\nul {\n  list-style: none; }\n\n.app-header {\n  position: relative;\n  width: 100%;\n  background: #1b1c20;\n  z-index: 1000; }\n  .app-header .header-container {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    padding: 5px;\n    height: 50px; }\n  .app-header .nav-arrow ul {\n    margin-right: 5px; }\n  .app-header .nav-arrow ul li {\n    display: inline-block;\n    width: 30px;\n    height: 30px;\n    background: #4b4d55;\n    border-radius: 50%;\n    line-height: 30px;\n    text-align: center;\n    vertical-align: middle;\n    margin: 0;\n    padding: 0;\n    -webkit-transition: background .2s;\n    transition: background .2s;\n    cursor: pointer; }\n    .app-header .nav-arrow ul li:first-child {\n      margin-right: 10px; }\n    .app-header .nav-arrow ul li:hover {\n      background: #00c29a; }\n\n.view-container {\n  position: relative;\n  width: 100%;\n  height: calc(700px - 110px);\n  overflow: hidden; }\n  .view-container .grid-container {\n    display: grid;\n    height: 100%;\n    width: 101%;\n    grid-auto-columns: 50%;\n    grid-auto-flow: column;\n    overflow-x: scroll; }\n    .view-container .grid-container .image-container, .view-container .grid-container .video-container, .view-container .grid-container .quote-container {\n      display: block;\n      position: relative;\n      width: 100%;\n      height: 100%;\n      cursor: pointer;\n      -webkit-transition: all .2s;\n      transition: all .2s;\n      overflow: hidden;\n      background-position: center center;\n      background-size: cover; }\n      .view-container .grid-container .image-container:hover, .view-container .grid-container .video-container:hover, .view-container .grid-container .quote-container:hover {\n        -webkit-transform: scale(1.2);\n                transform: scale(1.2); }\n\nfooter {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  height: 50px;\n  background: #1b1c20; }\n  footer .footer-line {\n    position: relative;\n    height: 4px;\n    width: 100%;\n    background: #4b4d55; }\n    footer .footer-line:after {\n      content: '';\n      position: absolute;\n      width: 50%;\n      height: 4px;\n      background: #00c29a; }\n", ""]);

// exports


/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _redux_reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./redux/reducers */ "./src/redux/reducers/index.js");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./styles/App.scss */ "./src/styles/App.scss");
/* harmony import */ var _styles_App_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_App_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Header */ "./src/components/Header.js");
/* harmony import */ var _components_ViewContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ViewContainer */ "./src/components/ViewContainer.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/Footer */ "./src/components/Footer.js");
/* harmony import */ var _Data__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Data */ "./src/Data.js");






var _jsxFileName = "/Users/razor/Documents/WttjApp/src/App.js";









var store = Object(redux__WEBPACK_IMPORTED_MODULE_8__["createStore"])(_redux_reducers__WEBPACK_IMPORTED_MODULE_9__["default"]);

var App =
/*#__PURE__*/
function (_PureComponent) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(App, _PureComponent);

  function App(props) {
    var _this;

    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    _this = Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App).call(this, props));
    _this.state = {
      device: '',
      colNumber: 0,
      rowNUmber: 0
    };
    _this._updateDevice = _this._updateDevice.bind(Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)));
    return _this;
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this._updateDevice();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener("resize", this._updateDevice);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this._updateDevice);
    }
  }, {
    key: "_updateDevice",
    value: function _updateDevice() {
      var body = document.body.offsetWidth;
      if (body < 575.98) this.setState({
        device: 'xs'
      });else if (body < 767.98) this.setState({
        device: 'sm'
      });else if (body < 991.98) this.setState({
        device: 'md'
      });else if (body < 1199.98) this.setState({
        device: 'lg'
      });else this.setState({
        device: 'xl'
      });

      this._updateDeviceCol();
    }
  }, {
    key: "_updateDeviceCol",
    value: function _updateDeviceCol() {
      if (this.state.device === 'xs' || this.state.device === 'sm') this.setState({
        colNumber: 1,
        rowNUmber: 1
      });else this.setState({
        colNumber: 3,
        rowNUmber: 2
      });
      return;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_7__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_ViewContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
        data: _Data__WEBPACK_IMPORTED_MODULE_14__["default"],
        col: this.state.colNumber,
        row: this.state.rowNUmber,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      })));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/Data.js":
/*!*********************!*\
  !*** ./src/Data.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var prefixe = "https://cdn.welcometothejungle.co/uploads/";
var data = [{
  id: 1,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7217/151601/small_wttj-jobs_2d663949-83f4-486c-be79-b7d199de4216.jpg'
}, {
  id: 2,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7206/151601/small_wttj-offres-emploi_170aa579-aa26-4cf8-838c-9d68d4da6c32.jpg'
}, {
  id: 3,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7223/151601/small_wttj-jobs_360f6eb8-26e1-42aa-a3ee-837c3767b734.jpg'
}, {
  id: 4,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7240/151601/small_wttj-jobs_a1aa5500-1287-47f8-8fda-efc32a627451.jpg'
}, {
  id: 5,
  type: 'video',
  title: '',
  value: prefixe + 'video/image/1480/151603/small_wttj_video_0679859b-6e84-4549-bbc4-1330eddcac57.jpg'
}, {
  id: 6,
  type: 'video',
  title: '',
  value: prefixe + 'video/image/1540/151603/small_wttj_video_267f7b56-911e-4888-9721-085e83f9f479.jpg'
}, {
  id: 7,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7234/151601/small_wttj-inside_d42c7877-b765-4da3-ba05-f93e9c56c02b.jpg'
}, {
  id: 8,
  type: 'video',
  title: '',
  value: prefixe + 'video/image/1702/151603/small_wttj_video_c9575808-fd3a-4571-95ef-873af73be887.jpg'
}, {
  id: 9,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7260/151601/small_wttj-jobs_d358d6ec-89f7-4761-8d59-98408857dc08.jpg'
}, {
  id: 10,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7263/151601/small_wttj-offres-emploi_c8b64f4a-e281-4303-b453-c4158a2aa19f.jpg'
}, {
  id: 11,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7252/151601/small_wttj-jobs_b3bbd3a7-0c09-403a-a446-9f29d0b09c3f.jpg'
}, {
  id: 12,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7214/151601/small_wttj-annonces_d8d26d42-e764-4b3b-af34-2cdf25936ee1.jpg'
}, {
  id: 13,
  type: 'video',
  title: '',
  value: prefixe + 'video/image/9401/151602/small_wttj_video_3bbaeeb9-2f2f-4a1b-ac14-e6be495d3bb4.jpg'
}, {
  id: 14,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7266/151601/small_wttj-annonces_296b33a2-ae75-439f-82fa-25d75fff45ae.jpg'
}, {
  id: 15,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7210/151601/small_wttj-recrutement_c29a2f2d-68f7-489a-9a39-dd9f4ee39848.jpg'
}, {
  id: 16,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7255/151601/small_wttj-jobs_acea4610-1ecd-4089-ad21-bc4121a66570.jpg'
}, {
  id: 17,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7220/151601/small_wttj-annonces_fde76898-d6a4-4540-af78-f26ec06ba201.jpg'
}, {
  id: 18,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7257/151601/small_wttj-inside_e1444930-ad09-436d-a907-74cdbf7f821a.jpg'
}, {
  id: 19,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7245/151601/small_wttj-offres-emploi_7647c1d8-8699-46c7-955d-ad8e131dd231.jpg'
}, {
  id: 20,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7229/151601/small_wttj-jobs_5dd0c775-397f-4462-911b-6e43b37effe7.jpg'
}, {
  id: 21,
  type: 'image',
  title: '',
  value: prefixe + 'image/file/7242/151601/small_wttj-inside_06571833-82ab-42e7-8fe2-0f004ecf79c8.jpg'
}, {
  id: 22,
  type: 'quote',
  title: '',
  value: 'Life is short, work somewhere awesome.'
}, {
  id: 23,
  type: 'quote',
  title: '',
  value: 'Lorem ipsum dolor sit amet, consectetur'
}, {
  id: 24,
  type: 'quote',
  title: '',
  value: 'adipiscing elit, sed do eiusmod tempor incididunt'
}, {
  id: 25,
  type: 'quote',
  title: '',
  value: 'ut labore et dolore magna aliqua'
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./src/assets/images/wttj-square_green.jpg":
/*!*************************************************!*\
  !*** ./src/assets/images/wttj-square_green.jpg ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/wttj-square_green.5e2238cc.jpg";

/***/ }),

/***/ "./src/components/Arrow.js":
/*!*********************************!*\
  !*** ./src/components/Arrow.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Arrow; });
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/razor/Documents/WttjApp/src/components/Arrow.js";


var Arrow =
/*#__PURE__*/
function (_Component) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Arrow, _Component);

  function Arrow() {
    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Arrow);

    return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Arrow).apply(this, arguments));
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Arrow, [{
    key: "render",
    value: function render() {
      if (this.props.direction === 'left') {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
          height: this.props.height,
          width: this.props.width,
          viewBox: "0 0 12 12",
          xmlns: "http://www.w3.org/2000/svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
          fill: this.props.color,
          stroke: this.props.color,
          strokeWidth: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polyline", {
          fill: "none",
          points: "8.5 11.5 2.5 6 8.5 0.5",
          stroke: this.props.color,
          strokeLinecap: "round",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          },
          __self: this
        })));
      } else if (this.props.direction === 'right') {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("svg", {
          height: this.props.height,
          width: this.props.width,
          viewBox: "0 0 12 12",
          xmlns: "http://www.w3.org/2000/svg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("g", {
          fill: this.props.color,
          stroke: this.props.color,
          strokeWidth: "1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("polyline", {
          fill: "none",
          points: "3.5 0.5 9.5 6 3.5 11.5",
          stroke: this.props.color,
          strokeLinecap: "round",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        })));
      }
    }
  }]);

  return Arrow;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/Footer.js":
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/razor/Documents/WttjApp/src/components/Footer.js";


var Footer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Footer, _Component);

  function Footer() {
    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Footer);

    return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Footer).apply(this, arguments));
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Footer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("footer", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "footer-line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      }));
    }
  }]);

  return Footer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Arrow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Arrow */ "./src/components/Arrow.js");
/* harmony import */ var _assets_images_wttj_square_green_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../assets/images/wttj-square_green.jpg */ "./src/assets/images/wttj-square_green.jpg");
/* harmony import */ var _assets_images_wttj_square_green_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_wttj_square_green_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_moveScreen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../redux/actions/moveScreen */ "./src/redux/actions/moveScreen.js");





var _jsxFileName = "/Users/razor/Documents/WttjApp/src/components/Header.js";






var RIGHT = 'right';
var LEFT = 'left';

var posLost = function posLost(scrollPos, tabPos, dir) {
  var index = 0;
  var middlePos = Math.round(tabPos[1] / 2); // console.log(middlePos)
  // console.log(tabPos)
  // console.log(scrollPos)

  while (index < tabPos.length) {
    if (scrollPos === tabPos[index]) return index;

    if (scrollPos > tabPos[index] && scrollPos < tabPos[index] + tabPos[1]) {
      // console.log('BITCH')
      break;
    }

    index++;
  }

  if (dir === LEFT && scrollPos > tabPos[index] && scrollPos > Math.round(tabPos[index] + middlePos)) {
    console.log('INDEX :');
    return index + 1;
  }

  if (dir === RIGHT && tabPos[index] < scrollPos && scrollPos < tabPos[index + 1]) return index;
  return 0;
};

var Header =
/*#__PURE__*/
function (_Component) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Header, _Component);

  function Header(props) {
    var _this;

    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Header).call(this, props));

    _this.moveLeft = function (e) {
      var _this$props = _this.props,
          index = _this$props.index,
          tabPos = _this$props.tabPos,
          gridWidth = _this$props.gridWidth;
      var scrollPos = document.getElementById('grid').scrollLeft;

      if (scrollPos > 0) {
        var value = posLost(scrollPos, tabPos, LEFT);
        console.log('Value :' + value);
        if (value > 0) _this.props.onImposeIndex(value);
        if (index > 0) _this.props.onMoveLeft();
      }

      e.preventDefault();
    };

    _this.moveRight = function (e) {
      var _this$props2 = _this.props,
          tabPos = _this$props2.tabPos,
          index = _this$props2.index;
      var scrollPos = document.getElementById('grid').scrollLeft;

      if (index < tabPos.length) {
        var value = posLost(scrollPos, tabPos, RIGHT);
        if (value > 0) _this.props.onImposeIndex(value);

        _this.props.onMoveRight();
      }

      e.preventDefault();
    };

    return _this;
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("header", {
        className: "app-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "header-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        src: _assets_images_wttj_square_green_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
        width: 50,
        height: 50,
        alt: "Logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "nav-arrow",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        onClick: function onClick(e) {
          return _this2.moveLeft(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Arrow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        direction: "left",
        width: 10,
        height: 10,
        color: '#FFFFFF',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("li", {
        onClick: function onClick(e) {
          return _this2.moveRight(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Arrow__WEBPACK_IMPORTED_MODULE_8__["default"], {
        direction: "right",
        width: 10,
        height: 10,
        color: '#FFFFFF',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

Header.propTypes = {
  gridWidth: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  scrollPos: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  index: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.number,
  tabPos: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.array
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$moveReducer = state.moveReducer,
      gridWidth = _state$moveReducer.gridWidth,
      scrollPos = _state$moveReducer.scrollPos,
      index = _state$moveReducer.index,
      tabPos = _state$moveReducer.tabPos;
  return {
    index: index,
    tabPos: tabPos,
    scrollPos: scrollPos,
    gridWidth: gridWidth
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onMoveLeft: function onMoveLeft() {
      console.log('LEFT');
      dispatch(Object(_redux_actions_moveScreen__WEBPACK_IMPORTED_MODULE_10__["moveLeft"])());
    },
    onMoveRight: function onMoveRight() {
      console.log('RIGHT');
      dispatch(Object(_redux_actions_moveScreen__WEBPACK_IMPORTED_MODULE_10__["moveRight"])());
    },
    onImposeIndex: function onImposeIndex(index) {
      dispatch(Object(_redux_actions_moveScreen__WEBPACK_IMPORTED_MODULE_10__["onImpose"])(index));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./src/components/Image.js":
/*!*********************************!*\
  !*** ./src/components/Image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/razor/Documents/WttjApp/src/components/Image.js";


var Image =
/*#__PURE__*/
function (_Component) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Image, _Component);

  function Image() {
    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Image);

    return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Image).apply(this, arguments));
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Image, [{
    key: "render",
    value: function render() {
      var src = this.props.src;
      var ImgStyle = {
        backgroundImage: 'url(' + src + ')'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "image-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "background-content",
        style: ImgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }));
    }
  }]);

  return Image;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/Quote.js":
/*!*********************************!*\
  !*** ./src/components/Quote.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Quote; });
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/razor/Documents/WttjApp/src/components/Quote.js";


var Quote =
/*#__PURE__*/
function (_Component) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Quote, _Component);

  function Quote() {
    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Quote);

    return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Quote).apply(this, arguments));
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Quote, [{
    key: "render",
    value: function render() {
      var src = this.props.src;
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        className: "quote-container",
        src: src,
        alt: 'toto',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      });
    }
  }]);

  return Quote;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/Video.js":
/*!*********************************!*\
  !*** ./src/components/Video.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Video; });
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "/Users/razor/Documents/WttjApp/src/components/Video.js";


var Video =
/*#__PURE__*/
function (_Component) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Video, _Component);

  function Video() {
    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Video);

    return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Video).apply(this, arguments));
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Video, [{
    key: "render",
    value: function render() {
      var src = this.props.src;
      var ImgStyle = {
        backgroundImage: 'url(' + src + ')'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "video-container",
        style: ImgStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
    }
  }]);

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);



/***/ }),

/***/ "./src/components/ViewContainer.js":
/*!*****************************************!*\
  !*** ./src/components/ViewContainer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_actions_moveScreen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../redux/actions/moveScreen */ "./src/redux/actions/moveScreen.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Image */ "./src/components/Image.js");
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Quote */ "./src/components/Quote.js");
/* harmony import */ var _Video__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Video */ "./src/components/Video.js");





var _jsxFileName = "/Users/razor/Documents/WttjApp/src/components/ViewContainer.js";








var calculatePosition = function calculatePosition(gridWidth, offsetView) {
  var iterator = 0;
  var tabPos = [];
  offsetView = offsetView * 101 / 100;

  while (iterator < gridWidth - offsetView) {
    tabPos.push(Math.round(iterator));
    iterator += offsetView;
  }

  tabPos.push(gridWidth);
  return tabPos;
};

var ViewContainer =
/*#__PURE__*/
function (_Component) {
  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(ViewContainer, _Component);

  function ViewContainer(props) {
    var _this;

    Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ViewContainer);

    _this = Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(ViewContainer).call(this, props));

    _this.onDown = function (e) {// console.log('Down');
      // if(!this.isHandle){
      //     this.setState({
      //         isHandle: true,
      //         scrollPosition: 0
      //     })
      // }
    };

    _this.onUp = function (e) {// console.log('Up');
      // if(this.isHandle){
      //     this.setState({
      //         isHandle: false
      //     })
      // }
    };

    _this.onMove = function (e) {// if (!this.isHandle)
      //     return ;
      // const {left, top} = this.extractPositionDelta(e);
      // this.setState({
      //     scrollX: left
      // })
      // this.myRef.scrollTo(this.scrollX)
    };

    _this.state = {
      isHandle: false,
      scrollX: 0,
      gridWidth: 0,
      viewWidth: 0,
      colGridWidth: 0,
      rowGridWidth: 0
    };
    return _this;
  }

  Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ViewContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setState({
        gridWidth: document.getElementById('grid').scrollWidth,
        viewWidth: document.getElementById('viewContainer').clientWidth
      }, function () {
        _this2.props.onInitPos(_this2.state.gridWidth, 0, calculatePosition(_this2.state.gridWidth, _this2.state.viewWidth), 0);
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$props = this.props,
          index = _this$props.index,
          tabPos = _this$props.tabPos,
          scrollPos = _this$props.scrollPos;
      console.log('Pos: ' + index);
      document.getElementById('grid').scroll({
        top: 0,
        left: tabPos[index],
        behavior: 'smooth'
      });
    } // scrollPos = () => {
    //     let scrollPos = document.getElementById('grid').scrollLeft
    //     console.log(scrollPos);
    // }

  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props2 = this.props,
          data = _this$props2.data,
          col = _this$props2.col,
          row = _this$props2.row;
      this.colGridWdth = 100 / col;
      this.rowGridWidth = 100 / row;
      var gridContainerStyle = {
        gridTemplateColumns: 'repeat(' + data.length + ', ' + this.colGridWdth + '%)',
        gridTemplateRows: 'repeat(' + row + ', ' + this.rowGridWidth + '%)'
      };
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
        id: "viewContainer",
        className: "view-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        id: "grid",
        className: "grid-container",
        style: gridContainerStyle,
        onMouseDown: function onMouseDown(e) {
          return _this3.onDown(e);
        },
        onMouseUp: function onMouseUp(e) {
          return _this3.onUp(e);
        },
        onMouseMove: function onMouseMove(e) {
          return _this3.onMove(e);
        } // onScroll={() => this.scrollPos()}
        // ref={this.grid}
        ,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, data.map(function (t, index) {
        switch (t.type) {
          case 'image':
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {
              src: t.value,
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117
              },
              __self: this
            });

          case 'video':
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Video__WEBPACK_IMPORTED_MODULE_11__["default"], {
              src: t.value,
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 119
              },
              __self: this
            });

          case 'quote':
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Quote__WEBPACK_IMPORTED_MODULE_10__["default"], {
              text: t.value,
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121
              },
              __self: this
            });

          default:
            return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {
              src: "https://media.giphy.com/media/3o85xwxr06YNoFdSbm/giphy.gif",
              key: index,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              __self: this
            });
        }
      })));
    }
  }]);

  return ViewContainer;
}(react__WEBPACK_IMPORTED_MODULE_5__["Component"]);

ViewContainer.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array,
  col: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  row: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  index: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  scrollPos: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.number,
  tabPos: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.array
};

var mapStateToProps = function mapStateToProps(state) {
  var _state$moveReducer = state.moveReducer,
      scrollPos = _state$moveReducer.scrollPos,
      index = _state$moveReducer.index,
      tabPos = _state$moveReducer.tabPos;
  console.log('State: ' + index);
  return {
    index: index,
    tabPos: tabPos,
    scrollPos: scrollPos
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onInitPos: function onInitPos(gridWidth, index, tabPos, scrollPos) {
      dispatch(Object(_redux_actions_moveScreen__WEBPACK_IMPORTED_MODULE_8__["initPos"])(gridWidth, index, tabPos, scrollPos));
    },
    onImposeIndex: function onImposeIndex(index) {
      dispatch(Object(_redux_actions_moveScreen__WEBPACK_IMPORTED_MODULE_8__["onImpose"])(index));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(ViewContainer));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/razor/Documents/WttjApp/src/index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_3__["unregister"]();

/***/ }),

/***/ "./src/redux/actionType.js":
/*!*********************************!*\
  !*** ./src/redux/actionType.js ***!
  \*********************************/
/*! exports provided: SHOW_DATA, MOVE_LEFT, MOVE_RIGHT, INIT_POS, IMPOSE_INDEX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_DATA", function() { return SHOW_DATA; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_LEFT", function() { return MOVE_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_RIGHT", function() { return MOVE_RIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INIT_POS", function() { return INIT_POS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMPOSE_INDEX", function() { return IMPOSE_INDEX; });
var SHOW_DATA = 'SHOW_DATA';
var MOVE_LEFT = 'MOVE_LEFT';
var MOVE_RIGHT = 'MOVE_RIGHT';
var INIT_POS = 'INIT_POS';
var IMPOSE_INDEX = 'IMPOSE_INDEX';

/***/ }),

/***/ "./src/redux/actions/moveScreen.js":
/*!*****************************************!*\
  !*** ./src/redux/actions/moveScreen.js ***!
  \*****************************************/
/*! exports provided: initPos, moveLeft, moveRight, onImpose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initPos", function() { return initPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveLeft", function() { return moveLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveRight", function() { return moveRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "onImpose", function() { return onImpose; });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actionType */ "./src/redux/actionType.js");


var initPos = function initPos(gridWidth, index, tabPos, scrollPos) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["INIT_POS"],
    gridWidth: gridWidth,
    index: index,
    tabPos: tabPos,
    scrollPos: scrollPos
  };
};

var moveLeft = function moveLeft() {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["MOVE_LEFT"]
  };
};

var moveRight = function moveRight() {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["MOVE_RIGHT"]
  };
};

var onImpose = function onImpose(index) {
  return {
    type: _actionType__WEBPACK_IMPORTED_MODULE_0__["IMPOSE_INDEX"],
    index: index
  };
};



/***/ }),

/***/ "./src/redux/reducers/dataReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/dataReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionType */ "./src/redux/actionType.js");


var defaultState = {
  data: null
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType__WEBPACK_IMPORTED_MODULE_1__["SHOW_DATA"]:
      return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        data: action.data
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/redux/reducers/index.js":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _dataReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataReducer */ "./src/redux/reducers/dataReducer.js");
/* harmony import */ var _moveReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moveReducer */ "./src/redux/reducers/moveReducer.js");



var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  dataReducer: _dataReducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  moveReducer: _moveReducer__WEBPACK_IMPORTED_MODULE_2__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./src/redux/reducers/moveReducer.js":
/*!*******************************************!*\
  !*** ./src/redux/reducers/moveReducer.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actionType */ "./src/redux/actionType.js");


var defaultState = {
  gridWidth: 0,
  index: 0,
  tabPos: [],
  scrollPos: 0
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _actionType__WEBPACK_IMPORTED_MODULE_1__["INIT_POS"]:
      return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        gridWidth: action.gridWidth,
        index: action.index,
        tabPos: action.tabPos,
        scrollPos: action.scrollPos
      });

    case _actionType__WEBPACK_IMPORTED_MODULE_1__["MOVE_LEFT"]:
      return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        index: state.index - 1
      });

    case _actionType__WEBPACK_IMPORTED_MODULE_1__["MOVE_RIGHT"]:
      return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        index: state.index + 1
      });

    case _actionType__WEBPACK_IMPORTED_MODULE_1__["IMPOSE_INDEX"]:
      return Object(_Users_razor_Documents_WttjApp_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        index: action.index
      });

    default:
      return state;
  }
});

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read http://bit.ly/CRA-PWA
var isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) { var publicUrl; }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See http://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    var contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}

/***/ }),

/***/ "./src/styles/App.scss":
/*!*****************************!*\
  !*** ./src/styles/App.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles/App.scss", function() {
		var newContent = __webpack_require__(/*! !../../node_modules/css-loader??ref--6-oneOf-5-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/sass-loader/lib/loader.js!./App.scss */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js!./src/styles/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/razor/Documents/WttjApp/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/razor/Documents/WttjApp/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map