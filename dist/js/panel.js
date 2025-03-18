/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"rpc-log","version":"1.0.0","description":"chrome插件，记录并管理electron中prc调用的请求和推送消息，提高开发调试效率","scripts":{"start":"cross-env NODE_ENV=development webpack serve","build":"cross-env NODE_ENV=production webpack","build:watch":"cross-env NODE_ENV=development webpack --watch"},"author":"fengjianxiong","private":false,"license":"ISC","dependencies":{"@ant-design/icons":"^5.3.7","@reduxjs/toolkit":"^2.2.6","antd":"^5.19.2","immer":"10.1.1","json-to-ts":"^2.1.0","react":"18.3.1","react-dom":"18.3.1","react-inspector":"6.0.2","react-redux":"9.1.2"},"devDependencies":{"@babel/core":"^7.24.7","@babel/preset-env":"^7.24.7","@babel/preset-react":"^7.24.7","@types/chrome":"^0.0.268","@types/node":"^22.10.2","babel-loader":"^9.1.3","copy-webpack-plugin":"^12.0.2","cross-env":"^7.0.3","css-loader":"^7.1.2","html-webpack-plugin":"^5.6.0","mini-css-extract-plugin":"^2.9.0","sass":"^1.85.1","sass-loader":"^16.0.5","style-loader":"^4.0.0","webpack":"^5.92.1","webpack-cli":"^5.1.4","webpack-dev-server":"^5.0.4"}}');

/***/ }),

/***/ "./src/App.jsx":
/*!*********************!*\
  !*** ./src/App.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _styles_record_detail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/record-detail.scss */ "./src/styles/record-detail.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _components_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/toolbar */ "./src/components/toolbar.jsx");
/* harmony import */ var _components_LogTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/LogTable */ "./src/components/LogTable.jsx");
/* harmony import */ var _components_DetailSider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DetailSider */ "./src/components/DetailSider.jsx");
/* harmony import */ var _components_Tab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Tab */ "./src/components/Tab.jsx");
/* harmony import */ var _components_BaseDetail__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/BaseDetail */ "./src/components/BaseDetail.jsx");
/* harmony import */ var _components_RequestDetail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/RequestDetail */ "./src/components/RequestDetail.jsx");
/* harmony import */ var _components_ResponseDetail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/ResponseDetail */ "./src/components/ResponseDetail.jsx");
/* harmony import */ var _components_FilterBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FilterBar */ "./src/components/FilterBar.jsx");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utils */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }















var App = function App() {
  var _useSelector = (0,react_redux__WEBPACK_IMPORTED_MODULE_13__.useSelector)(function (state) {
      return state.requestRecord;
    }),
    selectedRecord = _useSelector.selectedRecord,
    isOnFiltering = _useSelector.isOnFiltering,
    originRequestList = _useSelector.originRequestList;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowSider = _useState2[0],
    setIsShowSider = _useState2[1]; // 是否展示右侧边栏
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true),
    _useState4 = _slicedToArray(_useState3, 2),
    isShowFilterBar = _useState4[0],
    setIsShowFilterBar = _useState4[1]; // 是否展示过滤查询栏
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)('auto'),
    _useState6 = _slicedToArray(_useState5, 2),
    tableWidth = _useState6[0],
    setTableWidth = _useState6[1]; //
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(400),
    _useState8 = _slicedToArray(_useState7, 2),
    siderWidth = _useState8[0],
    setSiderWidth = _useState8[1]; //
  var logTableWrapper = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var splitLine = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var tabViews = selectedRecord ? [{
    key: '1',
    label: '基本',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_BaseDetail__WEBPACK_IMPORTED_MODULE_7__["default"], {
      requestRecord: selectedRecord
    }),
    tabClick: function tabClick() {}
  }, {
    key: '2',
    label: '请求',
    disShow: selectedRecord.requestType === 'MSG',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_RequestDetail__WEBPACK_IMPORTED_MODULE_8__["default"], {
      requestRecord: selectedRecord
    })
  }, {
    key: '3',
    label: '响应',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_ResponseDetail__WEBPACK_IMPORTED_MODULE_9__["default"], {
      requestRecord: selectedRecord
    })
  }] : [];
  console.log('tabViews', tabViews);
  var logWrapperHeight = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    return isShowFilterBar ? 'calc(100vh - 81px)' : 'calc(100vh - 52px)';
  }, [isShowFilterBar]);
  var countInfo = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(function () {
    var total = originRequestList.length;
    var fetchCount = 0;
    var pushCount = 0;
    originRequestList.forEach(function (item) {
      if (item.requestType === 'FETCH') {
        fetchCount++;
      } else {
        pushCount++;
      }
    });
    return {
      total: total,
      fetchCount: fetchCount,
      pushCount: pushCount
    };
  }, [originRequestList]);
  var closeDetailSider = function closeDetailSider() {
    setIsShowSider(false);
    setTableWidth('auto');
  };
  var tableRowClick = function tableRowClick() {
    setIsShowSider(true);
    setTableWidth(logTableWrapper.current.offsetWidth - siderWidth);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (!selectedRecord) {
      setIsShowSider(false);
      setTableWidth('auto');
    }
  }, [selectedRecord]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (isShowSider) {
      return;
    }
    var splitMouseDownHandler = function splitMouseDownHandler(e) {
      document.addEventListener('mousemove', splitMouseMoveHandler);
    };
    var splitMouseMoveHandler = function splitMouseMoveHandler(e) {
      setSiderWidth(logTableWrapper.current.offsetWidth - e.clientX);
      setTableWidth(e.clientX);
    };
    var splitMouseUpHandler = function splitMouseUpHandler(e) {
      document.removeEventListener('mousemove', splitMouseMoveHandler);
    };
    splitLine.current && splitLine.current.addEventListener('mousedown', splitMouseDownHandler);
    document.addEventListener('mouseup', splitMouseUpHandler);
    return function () {
      document.removeEventListener('mousemove', splitMouseMoveHandler);
      splitLine.current && splitLine.current.removeEventListener('mousedown', splitMouseDownHandler);
      document.removeEventListener('mouseup', splitMouseUpHandler);
    };
  }, [isShowSider]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    if (isShowSider) {
      return;
    }
    var resizeHandler = (0,_utils__WEBPACK_IMPORTED_MODULE_11__.throttle)(function () {
      var newSiderWidth = logTableWrapper.current.offsetWidth - tableWidth;
      if (newSiderWidth < 380) {
        setTableWidth(logTableWrapper.current.offsetWidth - 380);
      } else {
        setSiderWidth(newSiderWidth);
      }
    }, 250);
    window.addEventListener('resize', resizeHandler);
    return function () {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [isShowSider, tableWidth]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_toolbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
      isShowFilterBar: isShowFilterBar,
      setIsShowFilterBar: setIsShowFilterBar,
      isOnFiltering: isOnFiltering
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_FilterBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
      isShow: isShowFilterBar
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)("div", {
      ref: logTableWrapper,
      className: "req-log-wrapper",
      style: {
        height: logWrapperHeight
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_LogTable__WEBPACK_IMPORTED_MODULE_4__["default"], {
        rowClick: tableRowClick,
        parentWrapper: logTableWrapper.current,
        tableWidth: tableWidth
      }), selectedRecord && isShowSider && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
          className: "split-line",
          ref: splitLine
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_DetailSider__WEBPACK_IMPORTED_MODULE_5__["default"], {
          width: siderWidth,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_components_Tab__WEBPACK_IMPORTED_MODULE_6__["default"], {
            tabViews: tabViews,
            onClose: closeDetailSider
          })
        })]
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/BaseDetail.jsx":
/*!***************************************!*\
  !*** ./src/components/BaseDetail.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_base_detail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/base-detail.scss */ "./src/styles/base-detail.scss");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var BaseDetail = function BaseDetail(_ref) {
  var requestRecord = _ref.requestRecord;
  if (!requestRecord) {
    return null;
  }
  var stateMap = {
    '-1': ' 等待响应 ',
    0: ' 成功 ',
    1: ' 失败 ',
    2: ' 未处理 '
  };
  var stateIconMap = {
    '-1': /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["default"], {
      style: {
        marginRight: 2
      }
    }),
    0: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: {
        color: "#52c14a",
        marginRight: 2
      }
    }),
    1: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        color: "#ff4d4f",
        marginRight: 2
      }
    }),
    2: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {
      style: {
        color: "#faad14",
        marginRight: 2
      }
    })
  };
  var request_nano_id = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if (requestRecord.requestDetail) {
      return requestRecord.requestDetail.reqHead.request_nano_id;
    } else {
      return requestRecord.responseDetail.header.request_nano_id;
    }
  }, [requestRecord]);
  var service_name = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if (requestRecord.requestDetail) {
      return requestRecord.requestDetail.reqHead.service_name;
    } else {
      return requestRecord.responseDetail.header.service_name;
    }
  }, [requestRecord]);
  var fetchTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return requestRecord.fetchTime ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCusFormatTime)(requestRecord.fetchTime) : '';
  }, [requestRecord]);
  var receiveTime = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return requestRecord.receiveTime ? (0,_utils__WEBPACK_IMPORTED_MODULE_2__.getCusFormatTime)(requestRecord.receiveTime) : '';
  }, [requestRecord]);
  var timeConsuming = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    if (requestRecord.fetchTime && requestRecord.receiveTime) {
      return "".concat(requestRecord.receiveTime - requestRecord.fetchTime, "\u6BEB\u79D2");
    }
    return '';
  }, [requestRecord]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: "base-info-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "request_nano_id"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-value",
        children: request_nano_id
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "\u670D\u52A1\u6A21\u5757"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-value",
        children: service_name
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "\u8BF7\u6C42ID"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-value",
        children: requestRecord.requestId
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "\u72B6\u6001"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        className: "property-value",
        children: [stateIconMap[requestRecord.requestState], stateMap[requestRecord.requestState]]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "\u7C7B\u578B"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-value",
        children: requestRecord.requestType === 'FETCH' ? '请求' : '推送'
      })]
    }), requestRecord.requestType === 'FETCH' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "\u8BF7\u6C42\u65F6\u95F4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-value",
        children: fetchTime
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "\u8FD4\u56DE\u65F6\u95F4"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-value",
        children: receiveTime
      })]
    }), requestRecord.requestType === 'FETCH' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "property-row",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-key",
        children: "\u8BF7\u6C42\u8017\u65F6"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        className: "property-value",
        children: timeConsuming
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseDetail);

/***/ }),

/***/ "./src/components/CheckTag.jsx":
/*!*************************************!*\
  !*** ./src/components/CheckTag.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

var CheckTag = function CheckTag(props) {
  var label = props.label,
    value = props.value,
    checked = props.checked,
    onCheck = props.onCheck,
    onClick = props.onClick,
    _props$style = props.style,
    style = _props$style === void 0 ? {} : _props$style;
  var clickTagHandle = function clickTagHandle() {
    onCheck(value);
    onClick && onClick({
      label: label,
      value: value,
      checked: checked
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    style: style,
    className: checked ? 'check-tag checked' : 'check-tag',
    onClick: clickTagHandle,
    children: label
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckTag);

/***/ }),

/***/ "./src/components/DetailSider.jsx":
/*!****************************************!*\
  !*** ./src/components/DetailSider.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_detail_sider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/detail-sider.scss */ "./src/styles/detail-sider.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var DetailSider = function DetailSider(props) {
  var width = props.width;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "request-detail-sider",
    style: {
      width: width
    },
    children: props.children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailSider);

/***/ }),

/***/ "./src/components/DetailView.jsx":
/*!***************************************!*\
  !*** ./src/components/DetailView.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/message/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/checkbox/index.js");
/* harmony import */ var react_inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-inspector */ "./node_modules/react-inspector/dist/index.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var json_to_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! json-to-ts */ "./node_modules/json-to-ts/build/src/index.js");
/* harmony import */ var json_to_ts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(json_to_ts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }






var DetailView = function DetailView(props) {
  var title = props.title,
    dataObj = props.dataObj;
  var _message$useMessage = antd__WEBPACK_IMPORTED_MODULE_5__["default"].useMessage(),
    _message$useMessage2 = _slicedToArray(_message$useMessage, 2),
    messageApi = _message$useMessage2[0],
    contextHolder = _message$useMessage2[1];
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isShowJson = _useState2[0],
    setIsShowJson = _useState2[1];
  var isShowJsonChange = function isShowJsonChange() {
    setIsShowJson(!isShowJson);
  };
  var copyToJson = function copyToJson() {
    var strValue = JSON.stringify(dataObj);
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.copyValue)(strValue).then(function () {
      messageApi.success('成功复制JSON到剪贴板！');
    });
  };
  var copyToTs = function copyToTs() {
    var strValue = json_to_ts__WEBPACK_IMPORTED_MODULE_3___default()(dataObj).join('\n');
    (0,_utils__WEBPACK_IMPORTED_MODULE_2__.copyValue)(strValue).then(function () {
      messageApi.success('成功复制Ts到剪贴板！');
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [contextHolder, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
      className: "item-detail-title",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
          className: "mr15",
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
          checked: isShowJson,
          onChange: isShowJsonChange,
          children: "JSON"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "operate-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "small-btn",
          style: {
            marginRight: 5
          },
          onClick: copyToJson,
          children: "\u590D\u5236\u4E3AJSON"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "small-btn",
          onClick: copyToTs,
          children: "\u590D\u5236\u4E3ATS\u7C7B\u578B"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "reg-header",
      children: isShowJson ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("pre", {
        children: JSON.stringify(dataObj, undefined, 2)
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_inspector__WEBPACK_IMPORTED_MODULE_0__.ObjectInspector, {
        data: dataObj,
        expandPaths: ['$', '.$.data'],
        theme: _objectSpread(_objectSpread({}, react_inspector__WEBPACK_IMPORTED_MODULE_0__.chromeLight), {
          BASE_FONT_SIZE: '14px',
          TREENODE_FONT_SIZE: '14px',
          BASE_FONT_FAMILY: 'Consolas, Menlo, monospace, Microsoft YaHei',
          TREENODE_FONT_FAMILY: 'Consolas, Menlo, monospace, Microsoft YaHei'
        })
      })
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DetailView);

/***/ }),

/***/ "./src/components/FilterBar.jsx":
/*!**************************************!*\
  !*** ./src/components/FilterBar.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/tooltip/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/input/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks */ "./src/hooks/index.js");
/* harmony import */ var _CheckTag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CheckTag */ "./src/components/CheckTag.jsx");
/* harmony import */ var _styles_filter_bar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/filter-bar.scss */ "./src/styles/filter-bar.scss");
/* harmony import */ var _store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/request_record_slice */ "./src/store/request_record_slice.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/QuestionCircleOutlined.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }









var FilterBar = function FilterBar(props) {
  var queryParameterChange = props.queryParameterChange,
    isShow = props.isShow;
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    queryStr = _useState2[0],
    setQueryStr = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    queryType = _useState4[0],
    setQueryType = _useState4[1];
  var _useImmer = (0,_hooks__WEBPACK_IMPORTED_MODULE_1__.useImmer)({
      queryStr: queryStr,
      queryType: queryType
    }),
    _useImmer2 = _slicedToArray(_useImmer, 2),
    queryParameterObj = _useImmer2[0],
    setQueryParameterObj = _useImmer2[1];
  var reqTypes = [{
    label: 'All',
    value: ''
  }, {
    label: ' 请求 ',
    value: 'FETCH'
  }, {
    label: ' 推送 ',
    value: 'MSG'
  }];
  var isEmptyQueryParameterObj = function isEmptyQueryParameterObj(queryData) {
    return Object.keys(queryData).every(function (key) {
      return queryData[key] === '';
    });
  };
  var queryParameterChangeHandle = function queryParameterChangeHandle(queryParameter) {
    dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__.setIsOnFiltering)(!isEmptyQueryParameterObj(queryParameter)));
    dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__.setQueryParameter)(queryParameter));
    queryParameterChange && queryParameterChange(queryParameter);
  };
  var filterInputChange = function filterInputChange(e) {
    var value = e.target.value.trim();
    if (value !== queryStr) {
      setQueryStr(value);
      var newQueryParameterObj = setQueryParameterObj(function (draft) {
        draft.queryStr = value;
      });
      queryParameterChangeHandle(newQueryParameterObj);
    }
  };
  var checkTagCheckHandle = function checkTagCheckHandle(value) {
    if (queryType !== value) {
      setQueryType(value);
      var newQueryParameterObj = setQueryParameterObj(function (draft) {
        draft.queryType = value;
      });
      queryParameterChangeHandle(newQueryParameterObj);
    }
  };
  var helpText = "\u67E5\u8BE2\u8BF4\u660E\uFF1A\u4F9D\u6B21\u6309\u7167\u4F18\u5148\u7EA7\u2460\u8BF7\u6C42ID\u3001\u2461\u670D\u52A1\u540D\u3001\u2462\u54CD\u5E94\u6570\u636E\u5339\u914D\u67E5\u8BE2\uFF0C\u6709\u7ED3\u679C\u5373\u505C\u6B62\u540E\u7EED\u7684\u5339\u914D";
  var helpTip = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
    placement: "right",
    title: helpText,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["default"], {})
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: isShow ? 'filter-bar' : 'dom-hidden',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__["default"], {
      value: queryStr,
      rootClassName: "filter-input",
      allowClear: true,
      placeholder: "Filter",
      suffix: helpTip,
      onChange: filterInputChange
    }), reqTypes.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_CheckTag__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: item.label,
        value: item.value,
        style: {
          marginLeft: 5
        },
        checked: item.value === queryType,
        onCheck: checkTagCheckHandle
      }, item.value);
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterBar);

/***/ }),

/***/ "./src/components/LaunchButton.jsx":
/*!*****************************************!*\
  !*** ./src/components/LaunchButton.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_launch_button_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/launch-button.module.scss */ "./src/styles/launch-button.module.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["isRunning", "onClick"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }


var LaunchButton = function LaunchButton(props) {
  var isRunning = props.isRunning,
    onClick = props.onClick,
    restProps = _objectWithoutProperties(props, _excluded);
  console.log('isRunning', isRunning, _styles_launch_button_module_scss__WEBPACK_IMPORTED_MODULE_0__);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", _objectSpread({
    className: isRunning ? "".concat(_styles_launch_button_module_scss__WEBPACK_IMPORTED_MODULE_0__.launchBtn, " ").concat(_styles_launch_button_module_scss__WEBPACK_IMPORTED_MODULE_0__.launchBtnActive) : _styles_launch_button_module_scss__WEBPACK_IMPORTED_MODULE_0__.launchBtn,
    onClick: onClick
  }, restProps));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LaunchButton);

/***/ }),

/***/ "./src/components/LogTable.jsx":
/*!*************************************!*\
  !*** ./src/components/LogTable.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/table/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store_request_record_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/request_record_slice */ "./src/store/request_record_slice.js");
/* harmony import */ var _panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panel_message/panel_port_creator */ "./src/panel_message/panel_port_creator.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/PullRequestOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/SendOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CheckCircleFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloseCircleFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ExclamationCircleFilled.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }







var LogTable = function LogTable(props) {
  var rowClick = props.rowClick,
    parentWrapper = props.parentWrapper,
    tableWidth = props.tableWidth;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    selectedRow = _useState2[0],
    setSelectedRow = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    tableScrollY = _useState4[0],
    setTableScrollY = _useState4[1];
  var tableWrapper = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var requestList = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    console.log('state', state);
    return state.requestRecord.requestList;
  });
  var selectedRecord = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(function (state) {
    return state.requestRecord.selectedRecord;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  var columns = [{
    title: '请求 ID',
    dataIndex: 'requestId',
    render: function render(value, record, index) {
      if (record.requestType === 'FETCH') {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_5__["default"], {
            style: {
              marginRight: 5,
              color: '#1b6ef3'
            }
          }), value]
        });
      } else if (record.requestType === 'MSG') {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_6__["default"], {
            style: {
              marginRight: 5,
              color: '#c588f0'
            }
          }), value]
        });
      }
    }
  }, {
    title: '类型',
    dataIndex: 'requestType',
    width: 50,
    render: function render(value) {
      return value === 'FETCH' ? '请求' : '推送';
    }
  }, {
    title: '状态',
    //-1: 等待中 0: 成功 1: 失败 2: 未处理（只针对消息推送）
    dataIndex: 'requestState',
    width: 100,
    render: function render(value) {
      if (value === -1) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__["default"], {});
      }
      var stateMap = {
        0: ' 成功 ',
        1: ' 失败 ',
        2: ' 未处理 '
      };
      var stateIconMap = {
        0: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["default"], {
          style: {
            color: '#52c1ca',
            marginRight: 2
          }
        }),
        1: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
          style: {
            color: '#ff4d4f',
            marginRight: 2
          }
        }),
        2: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__["default"], {
          style: {
            color: '#faad14',
            marginRight: 2
          }
        })
      };
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("span", {
        children: [stateIconMap[value], stateMap[value]]
      });
    }
  }];
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    (0,_panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_2__.postMessageToBackground)({
      type: 'get-req-records'
    }).then(function (res) {
      dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_1__.setRequestList)(res.payloadData));
    });
    var cancelListen = (0,_panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_2__.requestRecordChange)(function (newRequest) {
      if (newRequest.requestType === 'FETCH') {
        if (newRequest.requestState === -1) {
          dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_1__.pushRequestRecord)(newRequest));
        } else {
          dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_1__.updateRequestRecord)(newRequest));
        }
      } else if (newRequest.requestType === 'MSG') {
        dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_1__.pushMsgRecord)(newRequest));
      }
    });
    var clearListen = (0,_panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_2__.clearAllRecordsChange)(function (records) {
      dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_1__.resetRequestList)(records));
    });
    return function () {
      cancelListen();
      clearListen();
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
    if (tableWrapper.current) {
      var scrollBody = document.getElementsByClassName('ant-table-body')[0];
      if (scrollBody && !selectedRecord) {
        scrollBody.scrollTo({
          top: scrollBody.scrollHeight
        });
      }
    }
  }, [requestList, selectedRow]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var resizeObserver = new ResizeObserver(function (entries) {
      var entry = entries[0];
      setTableScrollY(entry.contentRect.height - 27); // 表格高度是 27
    });
    if (parentWrapper) {
      resizeObserver.observe(parentWrapper);
    }
    return function () {
      resizeObserver.disconnect();
    };
  }, [parentWrapper]);
  var rowClassName = function rowClassName(record, index) {
    var rowClassText = index % 2 === 0 ? 'even-row' : 'odd-row';
    if (record.id === selectedRow.id) {
      rowClassText = "row-selected ".concat(rowClassText);
    }
    return rowClassText;
  };
  var onRow = function onRow(record) {
    return {
      onClick: function onClick(event) {
        setSelectedRow(record);
        dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_1__.setSelectedRecord)(record));
        rowClick && rowClick();
      }
    };
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: "req-record-table",
    ref: tableWrapper,
    style: {
      width: tableWidth
    },
    rowHover: true,
    onRow: onRow,
    columns: columns,
    rowClassName: rowClassName,
    dataSource: requestList,
    rowKey: 'id',
    size: "small",
    scroll: {
      y: tableScrollY
    },
    pagination: false
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LogTable);

/***/ }),

/***/ "./src/components/RequestDetail.jsx":
/*!******************************************!*\
  !*** ./src/components/RequestDetail.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailView */ "./src/components/DetailView.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var RequestDetail = function RequestDetail(_ref) {
  var requestRecord = _ref.requestRecord;
  if (!requestRecord || !requestRecord.requestDetail) return null;
  var requestDetail = requestRecord.requestDetail;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "request-info-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DetailView__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "\u8BF7\u6C42\u5934",
      dataObj: requestDetail.reqHead
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DetailView__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "\u8BF7\u6C42\u4F53\u6570\u636E",
      dataObj: requestDetail.reqData
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RequestDetail);

/***/ }),

/***/ "./src/components/ResponseDetail.jsx":
/*!*******************************************!*\
  !*** ./src/components/ResponseDetail.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DetailView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailView */ "./src/components/DetailView.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


var ResponseDetail = function ResponseDetail(_ref) {
  var requestRecord = _ref.requestRecord;
  if (!requestRecord || !requestRecord.responseDetail) return null;
  var responseDetail = requestRecord.responseDetail;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: "request-info-wrapper",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DetailView__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "\u54CD\u5E94\u5934",
      dataObj: responseDetail.header
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_DetailView__WEBPACK_IMPORTED_MODULE_0__["default"], {
      title: "\u54CD\u5E94\u4F53\u6570\u636E",
      dataObj: responseDetail
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResponseDetail);

/***/ }),

/***/ "./src/components/Tab.jsx":
/*!********************************!*\
  !*** ./src/components/Tab.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_tab_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/tab.scss */ "./src/styles/tab.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/CloseOutlined.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }




var Tab = function Tab(props) {
  var tabViews = props.tabViews,
    _props$onClose = props.onClose,
    onClose = _props$onClose === void 0 ? function () {} : _props$onClose,
    _props$isShowCloseBtn = props.isShowCloseBtn,
    isShowCloseBtn = _props$isShowCloseBtn === void 0 ? true : _props$isShowCloseBtn;
  var tabClickHandler = function tabClickHandler(tabItem) {
    setActiveKey(tabItem.key);
    tabItem.tabClick && tabItem.tabClick();
  };
  var views = tabViews.filter(function (item) {
    return !item.disShow;
  });
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(views[0].key),
    _useState2 = _slicedToArray(_useState, 2),
    activeKey = _useState2[0],
    setActiveKey = _useState2[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "tab-bar",
      children: [isShowCloseBtn && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "close-btn",
        onClick: onClose,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["default"], {
          className: "close-btn-icon"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
        className: "tab-list",
        children: views.map(function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("li", {
            className: activeKey === item.key ? 'tab-item tab-item_active' : 'tab-item',
            onClick: function onClick() {
              return tabClickHandler(item);
            },
            children: item.label
          }, item.key);
        })
      })]
    }), views.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
        className: "tab-view",
        style: {
          display: activeKey === item.key ? 'block' : 'none'
        },
        children: item.children
      }, item.key);
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tab);

/***/ }),

/***/ "./src/components/toolbar.jsx":
/*!************************************!*\
  !*** ./src/components/toolbar.jsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_tool_bar_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/tool-bar.scss */ "./src/styles/tool-bar.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/StopOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FilterFilled.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/FilterOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/ExportOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/SettingOutlined.js");
/* harmony import */ var _LaunchButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LaunchButton */ "./src/components/LaunchButton.jsx");
/* harmony import */ var _panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panel_message/panel_port_creator */ "./src/panel_message/panel_port_creator.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/modal/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/divider/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/dropdown/index.js");
/* harmony import */ var _store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/request_record_slice */ "./src/store/request_record_slice.js");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../package.json */ "./package.json");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");










var ToolBar = function ToolBar(props) {
  var isShowFilterBar = props.isShowFilterBar,
    setIsShowFilterBar = props.setIsShowFilterBar,
    isOnFiltering = props.isOnFiltering;
  var isRunning = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)(function (state) {
    return state.requestRecord.isRunning;
  });
  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  var filteringColor = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(function () {
    return isOnFiltering ? '#dc362e' : '#1b6ef3';
  }, [isOnFiltering]);
  var startRecord = function startRecord() {
    (0,_panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_3__.postMessageToBackground)({
      type: 'switch-running',
      data: !isRunning
    }).then(function (res) {
      dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__.setRunning)(!isRunning));
    });
  };
  var clearAllRecord = function clearAllRecord() {
    (0,_panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_3__.postMessageToBackground)({
      type: 'clear-all-records'
    }).then(function (res) {
      dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__.setRequestList)([]));
      dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__.setSelectedRecord)(null));
    });
  };
  var menuProps = {
    items: [{
      label: '关于',
      key: 'about'
    }],
    onClick: function onClick(e) {
      if (e.key === 'about') {
        antd__WEBPACK_IMPORTED_MODULE_8__["default"].info({
          title: '关于 ATUNetwork',
          icon: null,
          content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            children: ["\u7248\u672C\u53F7\uFF1A", _package_json__WEBPACK_IMPORTED_MODULE_5__.version]
          }),
          okText: '确定'
        });
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    (0,_panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_3__.postMessageToBackground)({
      type: 'get-is-running'
    }).then(function (res) {
      dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__.setRunning)(res.payloadData));
    });
  }, []);
  var showExportDialog = function showExportDialog() {
    alert(2);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "tool-bar",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
      style: {
        display: 'flex'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_LaunchButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isRunning: isRunning,
        onClick: startRecord,
        title: isRunning ? '停止' : '运行'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: "clear-btn",
        rotate: 90,
        onClick: clearAllRecord,
        title: "\u6E05\u7406"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "vertical"
      }), isShowFilterBar ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: function onClick() {
          return setIsShowFilterBar(false);
        },
        style: {
          color: filteringColor
        },
        title: "\u7B5B\u9009"
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__["default"], {
        onClick: function onClick() {
          return setIsShowFilterBar(true);
        },
        style: {
          color: filteringColor
        },
        title: "\u7B5B\u9009"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__["default"], {
        type: "vertical"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["default"], {
        style: {
          color: '#1b6ef3'
        },
        onClick: showExportDialog,
        title: "\u5BFC\u51FA\u8BB0\u5F55"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd__WEBPACK_IMPORTED_MODULE_14__["default"], {
      menu: menuProps,
      trigger: ['click'],
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], {})
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToolBar);

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   useImmer: () => (/* binding */ useImmer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! immer */ "./node_modules/immer/dist/immer.mjs");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }


var useImmer = function useImmer(baseSate) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(baseSate),
    _useState2 = _slicedToArray(_useState, 2),
    state = _useState2[0],
    setState = _useState2[1];
  var updateState = function updateState(stateChange) {
    var nextState = (0,immer__WEBPACK_IMPORTED_MODULE_1__.produce)(state, stateChange);
    setState(nextState);
    return nextState;
  };
  return [state, updateState];
};

/***/ }),

/***/ "./src/panel.js":
/*!**********************!*\
  !*** ./src/panel.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_cssreset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/cssreset.css */ "./src/styles/cssreset.css");
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./src/store/index.js");
/* harmony import */ var _panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel_message/panel_port_creator */ "./src/panel_message/panel_port_creator.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







(0,_panel_message_panel_port_creator__WEBPACK_IMPORTED_MODULE_4__.panelPortInit)();
var root = react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById('root'));
root.render(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_6__.Provider, {
  store: _store__WEBPACK_IMPORTED_MODULE_3__.store,
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}));

/***/ }),

/***/ "./src/panel_message/panel_port_creator.js":
/*!*************************************************!*\
  !*** ./src/panel_message/panel_port_creator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   clearAllRecordsChange: () => (/* binding */ clearAllRecordsChange),
/* harmony export */   panelPortInit: () => (/* binding */ panelPortInit),
/* harmony export */   portToBackground: () => (/* binding */ portToBackground),
/* harmony export */   postMessageToBackground: () => (/* binding */ postMessageToBackground),
/* harmony export */   requestRecordChange: () => (/* binding */ requestRecordChange)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");

var portToBackground;
function panelPortInit() {
  if (portToBackground) {
    return;
  }
  if ((0,_utils__WEBPACK_IMPORTED_MODULE_0__.isExtension)()) {
    var tabId = window.chrome.devtools.inspectedWindow.tabId;
    portToBackground = window.chrome.runtime.connect({
      name: "panel_".concat(tabId)
    });
    portToBackground.onDisconnect.addListener(function () {
      console.log('panel的port掉线了，尝试重连');
      portToBackground = null;
      portToBackground = window.chrome.runtime.connect({
        name: "panel_".concat(tabId)
      });
      console.log('panel重连成功');
    });
  } else {
    console.error(new Error('panel长期消息通道创建失败，请确保执行环境为devtool面板中'));
  }
}
function postMessageToBackground(msgParam) {
  var type = msgParam.type;
  return new Promise(function (resolve, reject) {
    var _messageCallback = function messageCallback(message, port) {
      if (message.type === type) {
        resolve(message);
        portToBackground.onMessage.removeListener(_messageCallback);
      }
    };
    portToBackground.onMessage.addListener(_messageCallback);
    portToBackground.postMessage(msgParam);
  });
}
function requestRecordChange(callback) {
  var messageHandler = function messageHandler(message, port) {
    if (message.type === 'req-changed') {
      callback(message.payloadData);
    }
  };
  portToBackground.onMessage.addListener(messageHandler);
  return function () {
    portToBackground.onMessage.removeListener(messageHandler);
  };
}
function clearAllRecordsChange(callback) {
  var messageHandler = function messageHandler(message, port) {
    if (message.type === 'clear-all-records') {
      callback(message.payloadData);
    }
  };
  portToBackground.onMessage.addListener(messageHandler);
  return function () {
    portToBackground.onMessage.removeListener(messageHandler);
  };
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _request_record_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request_record_slice */ "./src/store/request_record_slice.js");


var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    requestRecord: _request_record_slice__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./src/store/request_record_slice.js":
/*!*******************************************!*\
  !*** ./src/store/request_record_slice.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   pushMsgRecord: () => (/* binding */ pushMsgRecord),
/* harmony export */   pushRequestRecord: () => (/* binding */ pushRequestRecord),
/* harmony export */   requestRecordSlice: () => (/* binding */ requestRecordSlice),
/* harmony export */   resetRequestList: () => (/* binding */ resetRequestList),
/* harmony export */   setIsOnFiltering: () => (/* binding */ setIsOnFiltering),
/* harmony export */   setQueryParameter: () => (/* binding */ setQueryParameter),
/* harmony export */   setRequestList: () => (/* binding */ setRequestList),
/* harmony export */   setRunning: () => (/* binding */ setRunning),
/* harmony export */   setSelectedRecord: () => (/* binding */ setSelectedRecord),
/* harmony export */   updateRequestRecord: () => (/* binding */ updateRequestRecord)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");

var initialState = {
  selectedRecord: null,
  originRequestList: [],
  requestList: [],
  queryParameter: {},
  isOnFiltering: false,
  isRunning: true
};
var notRespondedOfOriginIndexMap = new Map();
var notRespondedIndexMap = new Map();
var filterWithQueryParameter = function filterWithQueryParameter(queryParameter, requestList) {
  var queryStr = queryParameter.queryStr,
    queryType = queryParameter.queryType;
  var nextReqList = requestList;
  if (queryType) {
    nextReqList = requestList.filter(function (item) {
      return item.requestType === queryType;
    });
  }
  if (queryStr) {
    nextReqList = nextReqList.filter(function (item) {
      if (queryStr === item.requestId) {
        return true;
      }
      if (item.requestDetail && queryStr === item.requestDetail.reqHead.service_name || queryStr === item.responseDetail.header.service_name) {
        return true;
      }
      if (item.responseDetail && JSON.stringify(item.responseDetail.data).includes(queryStr)) {
        return true;
      }
    });
  }
  return nextReqList;
};
var isOneRecordMatch = function isOneRecordMatch(queryParameter, reqItem) {
  var queryStr = queryParameter.queryStr,
    queryType = queryParameter.queryType;
  var isRequestTypeMatch = true;
  if (queryType) {
    isRequestTypeMatch = queryType === reqItem.requestType;
  }
  if (!isRequestTypeMatch) {
    return false;
  }
  if (queryStr) {
    var _reqItem$responseDeta;
    if (queryStr === reqItem.requestId) {
      return true;
    }
    if (reqItem.requestDetail && queryStr === reqItem.requestDetail.reqHead.service_name || queryStr === ((_reqItem$responseDeta = reqItem.responseDetail) === null || _reqItem$responseDeta === void 0 ? void 0 : _reqItem$responseDeta.header.service_name)) {
      return true;
    }
    if (reqItem.responseDetail && JSON.stringify(reqItem.responseDetail.data).includes(queryStr)) {
      return true;
    }
  } else if (queryStr === '') {
    return true;
  }
  return false;
};
var requestRecordSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'requestRecorder',
  initialState: initialState,
  reducers: {
    setRequestList: function setRequestList(state, action) {
      state.originRequestList = action.payload;
      state.requestList = action.payload;
    },
    pushRequestRecord: function pushRequestRecord(state, action) {
      if (state.isOnFiltering) {
        if (isOneRecordMatch(state.queryParameter, action.payload)) {
          state.requestList.push(action.payload);
          notRespondedIndexMap.set(action.payload.id, state.requestList.length - 1);
        }
      } else {
        state.requestList.push(action.payload);
        notRespondedIndexMap.set(action.payload.id, state.requestList.length - 1);
      }
      state.originRequestList.push(action.payload);
      notRespondedOfOriginIndexMap.set(action.payload.id, state.originRequestList.length - 1);
    },
    updateRequestRecord: function updateRequestRecord(state, action) {
      // 更新源数据中请求的状态
      if (notRespondedOfOriginIndexMap.has(action.payload.id)) {
        var requestRecord = state.originRequestList[notRespondedOfOriginIndexMap.get(action.payload.id)];
        requestRecord.responseDetail = action.payload.responseDetail; // 更新响应体
        // 更新状态
        requestRecord.requestState = requestRecord.responseDetail.error.error_id === 0 ? 0 : 1;
        requestRecord.receiveTime = action.payload.receiveTime;
        notRespondedOfOriginIndexMap["delete"](action.payload.id);
      }

      // 更新展示数据中请求的状态
      if (notRespondedIndexMap.has(action.payload.id)) {
        var _requestRecord = state.requestList[notRespondedIndexMap.get(action.payload.id)];
        _requestRecord.responseDetail = action.payload.responseDetail; // 更新响应体
        // 更新状态
        _requestRecord.requestState = _requestRecord.responseDetail.error.error_id === 0 ? 0 : 1;
        _requestRecord.receiveTime = action.payload.receiveTime;
        if (state.selectedRecord && state.selectedRecord.id === _requestRecord.id) {
          // 如果更新的是当前选中的请求记录
          state.selectedRecord = _requestRecord;
        }
        notRespondedIndexMap["delete"](action.payload.id);
      }
    },
    pushMsgRecord: function pushMsgRecord(state, action) {
      if (state.isOnFiltering) {
        if (isOneRecordMatch(state.queryParameter, action.payload)) {
          state.requestList.push(action.payload);
        }
      } else {
        state.requestList.push(action.payload);
      }
      state.originRequestList.push(action.payload);
    },
    setSelectedRecord: function setSelectedRecord(state, action) {
      state.selectedRecord = action.payload;
    },
    setIsOnFiltering: function setIsOnFiltering(state, action) {
      state.isOnFiltering = action.payload;
    },
    setQueryParameter: function setQueryParameter(state, action) {
      state.queryParameter = action.payload;
      state.requestList = filterWithQueryParameter(action.payload, state.originRequestList);
      if (state.selectedRecord && !isOneRecordMatch(action.payload, state.selectedRecord)) {
        state.selectedRecord = null;
      }
    },
    resetRequestList: function resetRequestList(state, action) {
      state.originRequestList = [];
      state.requestList = [];
      state.selectedRecord = null;
      notRespondedOfOriginIndexMap.clear();
      notRespondedIndexMap.clear();
    },
    setRunning: function setRunning(state, action) {
      state.isRunning = action.payload;
    }
  }
});
var _requestRecordSlice$a = requestRecordSlice.actions,
  setRequestList = _requestRecordSlice$a.setRequestList,
  pushRequestRecord = _requestRecordSlice$a.pushRequestRecord,
  updateRequestRecord = _requestRecordSlice$a.updateRequestRecord,
  setSelectedRecord = _requestRecordSlice$a.setSelectedRecord,
  pushMsgRecord = _requestRecordSlice$a.pushMsgRecord,
  setIsOnFiltering = _requestRecordSlice$a.setIsOnFiltering,
  setQueryParameter = _requestRecordSlice$a.setQueryParameter,
  resetRequestList = _requestRecordSlice$a.resetRequestList,
  setRunning = _requestRecordSlice$a.setRunning;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (requestRecordSlice.reducer);

/***/ }),

/***/ "./src/styles/app.scss":
/*!*****************************!*\
  !*** ./src/styles/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/base-detail.scss":
/*!*************************************!*\
  !*** ./src/styles/base-detail.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/cssreset.css":
/*!*********************************!*\
  !*** ./src/styles/cssreset.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/detail-sider.scss":
/*!**************************************!*\
  !*** ./src/styles/detail-sider.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/filter-bar.scss":
/*!************************************!*\
  !*** ./src/styles/filter-bar.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/launch-button.module.scss":
/*!**********************************************!*\
  !*** ./src/styles/launch-button.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "launch-btn": () => (/* binding */ _1),
/* harmony export */   "launch-btn_active": () => (/* binding */ _2),
/* harmony export */   launchBtn: () => (/* binding */ _3),
/* harmony export */   launchBtnActive: () => (/* binding */ _4)
/* harmony export */ });
// extracted by mini-css-extract-plugin
var _1 = "launch-button-module_launch-btn_WBJbq";
var _2 = "launch-button-module_launch-btn_active_vVXpi";
var _3 = "launch-button-module_launch-btn_WBJbq";
var _4 = "launch-button-module_launch-btn_active_vVXpi";



/***/ }),

/***/ "./src/styles/record-detail.scss":
/*!***************************************!*\
  !*** ./src/styles/record-detail.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/tab.scss":
/*!*****************************!*\
  !*** ./src/styles/tab.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/tool-bar.scss":
/*!**********************************!*\
  !*** ./src/styles/tool-bar.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   copyValue: () => (/* binding */ copyValue),
/* harmony export */   getCusFormatTime: () => (/* binding */ getCusFormatTime),
/* harmony export */   isExtension: () => (/* binding */ isExtension),
/* harmony export */   throttle: () => (/* binding */ throttle)
/* harmony export */ });
var _arguments = typeof arguments === "undefined" ? void 0 : arguments,
  _this = undefined;
var isExtension = function isExtension() {
  var _window$chrome;
  return !!((_window$chrome = window.chrome) !== null && _window$chrome !== void 0 && _window$chrome.devtools);
};
var copyValue = function copyValue(value) {
  if (typeof value !== 'string') {
    return Promise.reject(new Error('无法复制非字符串类型数据'));
  }
  var textarea = document.createElement("textarea");
  textarea.value = value;
  document.body.appendChild(textarea);
  textarea.select();
  return new Promise(function (resolve, reject) {
    try {
      var successful = document.execCommand('copy');
      if (successful) {
        resolve();
      } else {
        reject();
      }
    } catch (e) {
      reject(e);
    }
    document.body.removeChild(textarea);
  });
};
var throttle = function throttle(func, delay) {
  var timerId;
  return function () {
    if (!timerId) {
      func.apply(_this, _arguments);
      timerId = setTimeout(function () {
        timerId = null;
      }, delay);
    }
  };
};
var getCusFormatTime = function getCusFormatTime(timestamp) {
  var time = new Date(timestamp);
  var fullYear = time.getFullYear();
  var month = String(time.getMonth() + 1).padStart(2, "0");
  var day = String(time.getDate()).padStart(2, "0");
  var hour = String(time.getHours()).padStart(2, "0");
  var minute = String(time.getMinutes()).padStart(2, "0");
  var second = String(time.getSeconds()).padStart(2, "0");
  var mSecond = String(time.getMilliseconds()).padStart(3, "0");
  return "".concat(fullYear, "/").concat(month, "/").concat(day, " ").concat(hour, ":").concat(minute, ":").concat(second, ":").concat(mSecond);
};

/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/amd options */
/******/ 	(() => {
/******/ 		__webpack_require__.amdO = {};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/harmony module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.hmd = (module) => {
/******/ 			module = Object.create(module);
/******/ 			if (!module.children) module.children = [];
/******/ 			Object.defineProperty(module, 'exports', {
/******/ 				enumerable: true,
/******/ 				set: () => {
/******/ 					throw new Error('ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: ' + module.id);
/******/ 				}
/******/ 			});
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"panel": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkrpc_log"] = self["webpackChunkrpc_log"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["react_vendors","vendors-node_modules_ant-design_icons_es_icons_ExportOutlined_js-node_modules_ant-design_icon-acd1f0"], () => (__webpack_require__("./src/panel.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3JwYy1sb2cvLi9zcmMvQXBwLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvQmFzZURldGFpbC5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9jb21wb25lbnRzL0NoZWNrVGFnLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvRGV0YWlsU2lkZXIuanN4Iiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvY29tcG9uZW50cy9EZXRhaWxWaWV3LmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvRmlsdGVyQmFyLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvTGF1bmNoQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvTG9nVGFibGUuanN4Iiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvY29tcG9uZW50cy9SZXF1ZXN0RGV0YWlsLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvUmVzcG9uc2VEZXRhaWwuanN4Iiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvY29tcG9uZW50cy9UYWIuanN4Iiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvY29tcG9uZW50cy90b29sYmFyLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvcGFuZWwuanMiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9wYW5lbF9tZXNzYWdlL3BhbmVsX3BvcnRfY3JlYXRvci5qcyIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvc3RvcmUvcmVxdWVzdF9yZWNvcmRfc2xpY2UuanMiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9zdHlsZXMvYXBwLnNjc3M/YTc2ZCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0eWxlcy9iYXNlLWRldGFpbC5zY3NzPzg1OTgiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9zdHlsZXMvY3NzcmVzZXQuY3NzPzBkN2MiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9zdHlsZXMvZGV0YWlsLXNpZGVyLnNjc3M/OGE0MCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0eWxlcy9maWx0ZXItYmFyLnNjc3M/ZGQ4MiIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0eWxlcy9sYXVuY2gtYnV0dG9uLm1vZHVsZS5zY3NzP2U4MDUiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9zdHlsZXMvcmVjb3JkLWRldGFpbC5zY3NzPzc2ZTAiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9zdHlsZXMvdGFiLnNjc3M/YTNjZiIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0eWxlcy90b29sLWJhci5zY3NzP2NhMGIiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy91dGlscy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ycGMtbG9nL2lnbm9yZWR8RDpcXHByb2plY3RcXHJwYy1sb2dcXG5vZGVfbW9kdWxlc1xcb2JqZWN0LWluc3BlY3R8Li91dGlsLmluc3BlY3QiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9hbWQgb3B0aW9ucyIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9jcmVhdGUgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9oYXJtb255IG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlcy9hcHAuc2Nzcyc7XHJcbmltcG9ydCAnLi9zdHlsZXMvcmVjb3JkLWRldGFpbC5zY3NzJztcclxuXHJcbmltcG9ydCB7dXNlU3RhdGUsIHVzZU1lbW8sIHVzZVJlZiwgdXNlRWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IFRvb2xCYXIgZnJvbSAnLi9jb21wb25lbnRzL3Rvb2xiYXInO1xyXG5pbXBvcnQgTG9nVGFibGUgZnJvbSAnLi9jb21wb25lbnRzL0xvZ1RhYmxlJztcclxuaW1wb3J0IERldGFpbFNpZGVyIGZyb20gJy4vY29tcG9uZW50cy9EZXRhaWxTaWRlcic7XHJcbmltcG9ydCBUYWIgZnJvbSAnLi9jb21wb25lbnRzL1RhYic7XHJcbmltcG9ydCBCYXNlRGV0YWlsIGZyb20gJy4vY29tcG9uZW50cy9CYXNlRGV0YWlsJztcclxuaW1wb3J0IFJlcXVlc3REZXRhaWwgZnJvbSAnLi9jb21wb25lbnRzL1JlcXVlc3REZXRhaWwnO1xyXG5pbXBvcnQgUmVzcG9uc2VEZXRhaWwgZnJvbSAnLi9jb21wb25lbnRzL1Jlc3BvbnNlRGV0YWlsJztcclxuaW1wb3J0IEZpbHRlckJhciBmcm9tICcuL2NvbXBvbmVudHMvRmlsdGVyQmFyJztcclxuaW1wb3J0IHt0aHJvdHRsZX0gZnJvbSAnLi91dGlscyc7XHJcbmltcG9ydCB7RGl2aWRlcn0gZnJvbSAnYW50ZCc7XHJcblxyXG5jb25zdCBBcHAgPSAoKSA9PiB7XHJcbiAgY29uc3Qge3NlbGVjdGVkUmVjb3JkLCBpc09uRmlsdGVyaW5nLCBvcmlnaW5SZXF1ZXN0TGlzdH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5yZXF1ZXN0UmVjb3JkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IFtpc1Nob3dTaWRlciwgc2V0SXNTaG93U2lkZXJdID0gdXNlU3RhdGUoZmFsc2UpOyAvLyDmmK/lkKblsZXnpLrlj7PkvqfovrnmoI9cclxuICBjb25zdCBbaXNTaG93RmlsdGVyQmFyLCBzZXRJc1Nob3dGaWx0ZXJCYXJdID0gdXNlU3RhdGUodHJ1ZSk7IC8vIOaYr+WQpuWxleekuui/h+a7pOafpeivouagj1xyXG4gIGNvbnN0IFt0YWJsZVdpZHRoLCBzZXRUYWJsZVdpZHRoXSA9IHVzZVN0YXRlKCdhdXRvJyk7IC8vXHJcbiAgY29uc3QgW3NpZGVyV2lkdGgsIHNldFNpZGVyV2lkdGhdID0gdXNlU3RhdGUoNDAwKTsgLy9cclxuICBjb25zdCBsb2dUYWJsZVdyYXBwZXIgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3Qgc3BsaXRMaW5lID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHRhYlZpZXdzID0gc2VsZWN0ZWRSZWNvcmQgPyBbXHJcbiAgICB7XHJcbiAgICAgIGtleTogJzEnLFxyXG4gICAgICBsYWJlbDogJ+WfuuacrCcsXHJcbiAgICAgIGNoaWxkcmVuOiA8QmFzZURldGFpbCByZXF1ZXN0UmVjb3JkPXtzZWxlY3RlZFJlY29yZH0vPixcclxuICAgICAgdGFiQ2xpY2s6ICgpID0+IHtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAga2V5OiAnMicsXHJcbiAgICAgIGxhYmVsOiAn6K+35rGCJyxcclxuICAgICAgZGlzU2hvdzogc2VsZWN0ZWRSZWNvcmQucmVxdWVzdFR5cGUgPT09ICdNU0cnLFxyXG4gICAgICBjaGlsZHJlbjogPFJlcXVlc3REZXRhaWwgcmVxdWVzdFJlY29yZD17c2VsZWN0ZWRSZWNvcmR9Lz5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJzMnLFxyXG4gICAgICBsYWJlbDogJ+WTjeW6lCcsXHJcbiAgICAgIGNoaWxkcmVuOiA8UmVzcG9uc2VEZXRhaWwgcmVxdWVzdFJlY29yZD17c2VsZWN0ZWRSZWNvcmR9Lz5cclxuICAgIH1cclxuICBdIDogW107XHJcbiAgY29uc29sZS5sb2coJ3RhYlZpZXdzJywgdGFiVmlld3MpO1xyXG4gIGNvbnN0IGxvZ1dyYXBwZXJIZWlnaHQgPSB1c2VNZW1vKCgpID0+IGlzU2hvd0ZpbHRlckJhciA/ICdjYWxjKDEwMHZoIC0gODFweCknIDogJ2NhbGMoMTAwdmggLSA1MnB4KScsIFtpc1Nob3dGaWx0ZXJCYXJdKTtcclxuICBjb25zdCBjb3VudEluZm8gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHRvdGFsID0gb3JpZ2luUmVxdWVzdExpc3QubGVuZ3RoO1xyXG4gICAgbGV0IGZldGNoQ291bnQgPSAwO1xyXG4gICAgbGV0IHB1c2hDb3VudCA9IDA7XHJcbiAgICBvcmlnaW5SZXF1ZXN0TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLnJlcXVlc3RUeXBlID09PSAnRkVUQ0gnKSB7XHJcbiAgICAgICAgZmV0Y2hDb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHB1c2hDb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvdGFsLCBmZXRjaENvdW50LCBwdXNoQ291bnRcclxuICAgIH07XHJcbiAgfSwgW29yaWdpblJlcXVlc3RMaXN0XSk7XHJcbiAgY29uc3QgY2xvc2VEZXRhaWxTaWRlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd1NpZGVyKGZhbHNlKTtcclxuICAgIHNldFRhYmxlV2lkdGgoJ2F1dG8nKTtcclxuICB9O1xyXG4gIGNvbnN0IHRhYmxlUm93Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dTaWRlcih0cnVlKTtcclxuICAgIHNldFRhYmxlV2lkdGgobG9nVGFibGVXcmFwcGVyLmN1cnJlbnQub2Zmc2V0V2lkdGggLSBzaWRlcldpZHRoKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNlbGVjdGVkUmVjb3JkKSB7XHJcbiAgICAgIHNldElzU2hvd1NpZGVyKGZhbHNlKTtcclxuICAgICAgc2V0VGFibGVXaWR0aCgnYXV0bycpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZFJlY29yZF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNTaG93U2lkZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRNb3VzZURvd25IYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3BsaXRNb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzcGxpdE1vdXNlTW92ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBzZXRTaWRlcldpZHRoKGxvZ1RhYmxlV3JhcHBlci5jdXJyZW50Lm9mZnNldFdpZHRoIC0gZS5jbGllbnRYKTtcclxuICAgICAgc2V0VGFibGVXaWR0aChlLmNsaWVudFgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNwbGl0TW91c2VVcEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzcGxpdE1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIHNwbGl0TGluZS5jdXJyZW50ICYmIHNwbGl0TGluZS5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNwbGl0TW91c2VEb3duSGFuZGxlcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3BsaXRNb3VzZVVwSGFuZGxlcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzcGxpdE1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgICBzcGxpdExpbmUuY3VycmVudCAmJiBzcGxpdExpbmUuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzcGxpdE1vdXNlRG93bkhhbmRsZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3BsaXRNb3VzZVVwSGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFtpc1Nob3dTaWRlcl0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNTaG93U2lkZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRocm90dGxlKCgpID0+IHtcclxuICAgICAgY29uc3QgbmV3U2lkZXJXaWR0aCA9IGxvZ1RhYmxlV3JhcHBlci5jdXJyZW50Lm9mZnNldFdpZHRoIC0gdGFibGVXaWR0aDtcclxuICAgICAgaWYgKG5ld1NpZGVyV2lkdGggPCAzODApIHtcclxuICAgICAgICBzZXRUYWJsZVdpZHRoKGxvZ1RhYmxlV3JhcHBlci5jdXJyZW50Lm9mZnNldFdpZHRoIC0gMzgwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTaWRlcldpZHRoKG5ld1NpZGVyV2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyNTApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbaXNTaG93U2lkZXIsIHRhYmxlV2lkdGhdKTtcclxuICByZXR1cm4gPD5cclxuICAgIDxUb29sQmFyXHJcbiAgICAgIGlzU2hvd0ZpbHRlckJhcj17aXNTaG93RmlsdGVyQmFyfVxyXG4gICAgICBzZXRJc1Nob3dGaWx0ZXJCYXI9e3NldElzU2hvd0ZpbHRlckJhcn1cclxuICAgICAgaXNPbkZpbHRlcmluZz17aXNPbkZpbHRlcmluZ31cclxuICAgIC8+XHJcbiAgICA8RmlsdGVyQmFyIGlzU2hvdz17aXNTaG93RmlsdGVyQmFyfS8+XHJcbiAgICA8ZGl2IHJlZj17bG9nVGFibGVXcmFwcGVyfSBjbGFzc05hbWU9XCJyZXEtbG9nLXdyYXBwZXJcIiBzdHlsZT17e2hlaWdodDogbG9nV3JhcHBlckhlaWdodH19PlxyXG4gICAgICA8TG9nVGFibGUgcm93Q2xpY2s9e3RhYmxlUm93Q2xpY2t9IHBhcmVudFdyYXBwZXI9e2xvZ1RhYmxlV3JhcHBlci5jdXJyZW50fSB0YWJsZVdpZHRoPXt0YWJsZVdpZHRofS8+XHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RlZFJlY29yZCAmJiBpc1Nob3dTaWRlclxyXG4gICAgICAgICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtbGluZVwiIHJlZj17c3BsaXRMaW5lfT48L2Rpdj5cclxuICAgICAgICAgIDxEZXRhaWxTaWRlciB3aWR0aD17c2lkZXJXaWR0aH0+XHJcbiAgICAgICAgICAgIHsvKnt0YWJWaWV3cy5tYXAoaXRlbSA9PiBpdGVtLmNoaWxkcmVuKX0qL31cclxuICAgICAgICAgICAgPFRhYiB0YWJWaWV3cz17dGFiVmlld3N9IG9uQ2xvc2U9e2Nsb3NlRGV0YWlsU2lkZXJ9Lz5cclxuICAgICAgICAgIDwvRGV0YWlsU2lkZXI+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gIDwvPjtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9iYXNlLWRldGFpbC5zY3NzJztcclxuaW1wb3J0IHtDaGVja0NpcmNsZUZpbGxlZCwgQ2xvc2VDaXJjbGVGaWxsZWQsIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkLCBMb2FkaW5nT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHt1c2VNZW1vfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7Z2V0Q3VzRm9ybWF0VGltZX0gZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuY29uc3QgQmFzZURldGFpbCA9ICh7cmVxdWVzdFJlY29yZH0pID0+IHtcclxuICBpZiAoIXJlcXVlc3RSZWNvcmQpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuICBjb25zdCBzdGF0ZU1hcCA9IHtcclxuICAgICctMSc6ICcg562J5b6F5ZON5bqUICcsXHJcbiAgICAwOiAnIOaIkOWKnyAnLFxyXG4gICAgMTogJyDlpLHotKUgJyxcclxuICAgIDI6ICcg5pyq5aSE55CGICdcclxuICB9O1xyXG4gIGNvbnN0IHN0YXRlSWNvbk1hcCA9IHtcclxuICAgICctMSc6IDxMb2FkaW5nT3V0bGluZWQgc3R5bGU9e3ttYXJnaW5SaWdodDogMn19Lz4sXHJcbiAgICAwOiA8Q2hlY2tDaXJjbGVGaWxsZWQgc3R5bGU9e3tjb2xvcjogXCIjNTJjMTRhXCIsIG1hcmdpblJpZ2h0OiAyfX0vPixcclxuICAgIDE6IDxDbG9zZUNpcmNsZUZpbGxlZCBzdHlsZT17e2NvbG9yOiBcIiNmZjRkNGZcIiwgbWFyZ2luUmlnaHQ6IDJ9fS8+LFxyXG4gICAgMjogPEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkIHN0eWxlPXt7Y29sb3I6IFwiI2ZhYWQxNFwiLCBtYXJnaW5SaWdodDogMn19Lz5cclxuICB9O1xyXG4gIGNvbnN0IHJlcXVlc3RfbmFub19pZCA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlcXVlc3RSZWNvcmQucmVxdWVzdERldGFpbCkge1xyXG4gICAgICByZXR1cm4gcmVxdWVzdFJlY29yZC5yZXF1ZXN0RGV0YWlsLnJlcUhlYWQucmVxdWVzdF9uYW5vX2lkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlcXVlc3RSZWNvcmQucmVzcG9uc2VEZXRhaWwuaGVhZGVyLnJlcXVlc3RfbmFub19pZDtcclxuICAgIH1cclxuICB9LCBbcmVxdWVzdFJlY29yZF0pO1xyXG4gIGNvbnN0IHNlcnZpY2VfbmFtZSA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlcXVlc3RSZWNvcmQucmVxdWVzdERldGFpbCkge1xyXG4gICAgICByZXR1cm4gcmVxdWVzdFJlY29yZC5yZXF1ZXN0RGV0YWlsLnJlcUhlYWQuc2VydmljZV9uYW1lO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHJlcXVlc3RSZWNvcmQucmVzcG9uc2VEZXRhaWwuaGVhZGVyLnNlcnZpY2VfbmFtZTtcclxuICAgIH1cclxuICB9LCBbcmVxdWVzdFJlY29yZF0pO1xyXG4gIGNvbnN0IGZldGNoVGltZSA9IHVzZU1lbW8oKCkgPT4gcmVxdWVzdFJlY29yZC5mZXRjaFRpbWUgPyBnZXRDdXNGb3JtYXRUaW1lKHJlcXVlc3RSZWNvcmQuZmV0Y2hUaW1lKSA6ICcnLCBbcmVxdWVzdFJlY29yZF0pO1xyXG4gIGNvbnN0IHJlY2VpdmVUaW1lID0gdXNlTWVtbygoKSA9PiByZXF1ZXN0UmVjb3JkLnJlY2VpdmVUaW1lID8gZ2V0Q3VzRm9ybWF0VGltZShyZXF1ZXN0UmVjb3JkLnJlY2VpdmVUaW1lKSA6ICcnLCBbcmVxdWVzdFJlY29yZF0pXHJcbiAgY29uc3QgdGltZUNvbnN1bWluZyA9IHVzZU1lbW8oKCkgPT4ge1xyXG4gICAgaWYgKHJlcXVlc3RSZWNvcmQuZmV0Y2hUaW1lICYmIHJlcXVlc3RSZWNvcmQucmVjZWl2ZVRpbWUpIHtcclxuICAgICAgcmV0dXJuIGAke3JlcXVlc3RSZWNvcmQucmVjZWl2ZVRpbWUgLSByZXF1ZXN0UmVjb3JkLmZldGNoVGltZX3mr6vnp5JgXHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfSwgW3JlcXVlc3RSZWNvcmRdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhc2UtaW5mby13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1rZXlcIj5yZXF1ZXN0X25hbm9faWQ8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXZhbHVlXCI+e3JlcXVlc3RfbmFub19pZH08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1rZXlcIj7mnI3liqHmqKHlnZc8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXZhbHVlXCI+e3NlcnZpY2VfbmFtZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1rZXlcIj7or7fmsYJJRDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktdmFsdWVcIj57cmVxdWVzdFJlY29yZC5yZXF1ZXN0SWR9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHkta2V5XCI+54q25oCBPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicHJvcGVydHktdmFsdWVcIj57c3RhdGVJY29uTWFwW3JlcXVlc3RSZWNvcmQucmVxdWVzdFN0YXRlXX17c3RhdGVNYXBbcmVxdWVzdFJlY29yZC5yZXF1ZXN0U3RhdGVdfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LWtleVwiPuexu+WeizwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktdmFsdWVcIj57cmVxdWVzdFJlY29yZC5yZXF1ZXN0VHlwZSA9PT0gJ0ZFVENIJyA/ICfor7fmsYInIDogJ+aOqOmAgSd9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgcmVxdWVzdFJlY29yZC5yZXF1ZXN0VHlwZSA9PT0gJ0ZFVENIJ1xyXG4gICAgICAgICYmXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHkta2V5XCI+6K+35rGC5pe26Ze0PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXZhbHVlXCI+e2ZldGNoVGltZX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHkta2V5XCI+6L+U5Zue5pe26Ze0PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS12YWx1ZVwiPntyZWNlaXZlVGltZX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICByZXF1ZXN0UmVjb3JkLnJlcXVlc3RUeXBlID09PSAnRkVUQ0gnXHJcbiAgICAgICAgJiZcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1rZXlcIj7or7fmsYLogJfml7Y8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktdmFsdWVcIj57dGltZUNvbnN1bWluZ308L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQmFzZURldGFpbDtcclxuIiwiY29uc3QgQ2hlY2tUYWcgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7bGFiZWwsIHZhbHVlLCBjaGVja2VkLCBvbkNoZWNrLCBvbkNsaWNrLCBzdHlsZT17fX09cHJvcHM7XHJcbiAgY29uc3QgY2xpY2tUYWdIYW5kbGU9KCk9PntcclxuICAgIG9uQ2hlY2sodmFsdWUpO1xyXG4gICAgb25DbGljayAmJiBvbkNsaWNrKHtsYWJlbCwgdmFsdWUsY2hlY2tlZH0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17c3R5bGV9IGNsYXNzTmFtZT17Y2hlY2tlZD8nY2hlY2stdGFnIGNoZWNrZWQnOidjaGVjay10YWcnfSBvbkNsaWNrPXtjbGlja1RhZ0hhbmRsZX0+e2xhYmVsfTwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tUYWc7XHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL2RldGFpbC1zaWRlci5zY3NzJztcclxuY29uc3QgRGV0YWlsU2lkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7d2lkdGh9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdC1kZXRhaWwtc2lkZXJcIiBzdHlsZT17e3dpZHRofX0+XHJcbiAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxTaWRlcjtcclxuIiwiaW1wb3J0IHtDaGVja2JveCwgbWVzc2FnZX0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7T2JqZWN0SW5zcGVjdG9yLCBjaHJvbWVMaWdodH0gZnJvbSAncmVhY3QtaW5zcGVjdG9yJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2NvcHlWYWx1ZX0gZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgSnNvblRvVFMgZnJvbSAnanNvbi10by10cyc7XHJcblxyXG5jb25zdCBEZXRhaWxWaWV3ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3RpdGxlLCBkYXRhT2JqfSA9IHByb3BzO1xyXG4gIGNvbnN0IFttZXNzYWdlQXBpLCBjb250ZXh0SG9sZGVyXSA9IG1lc3NhZ2UudXNlTWVzc2FnZSgpO1xyXG4gIGNvbnN0IFtpc1Nob3dKc29uLCBzZXRJc1Nob3dKc29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpc1Nob3dKc29uQ2hhbmdlID0gKCkgPT4ge1xyXG4gICAgc2V0SXNTaG93SnNvbighaXNTaG93SnNvbik7XHJcbiAgfTtcclxuICBjb25zdCBjb3B5VG9Kc29uID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgc3RyVmFsdWUgPSBKU09OLnN0cmluZ2lmeShkYXRhT2JqKTtcclxuICAgIGNvcHlWYWx1ZShzdHJWYWx1ZSkudGhlbigoKSA9PiB7XHJcbiAgICAgIG1lc3NhZ2VBcGkuc3VjY2Vzcygn5oiQ5Yqf5aSN5Yi2SlNPTuWIsOWJqui0tOadv++8gScpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBjb3B5VG9UcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0clZhbHVlID0gSnNvblRvVFMoZGF0YU9iaikuam9pbignXFxuJyk7XHJcbiAgICBjb3B5VmFsdWUoc3RyVmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBtZXNzYWdlQXBpLnN1Y2Nlc3MoJ+aIkOWKn+WkjeWItlRz5Yiw5Ymq6LS05p2/77yBJyk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y29udGV4dEhvbGRlcn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbC10aXRsZVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtcjE1XCI+e3RpdGxlfTwvc3Bhbj5cclxuICAgICAgICAgIDxDaGVja2JveCBjaGVja2VkPXtpc1Nob3dKc29ufSBvbkNoYW5nZT17aXNTaG93SnNvbkNoYW5nZX0+SlNPTjwvQ2hlY2tib3g+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcGVyYXRlLWdyb3VwXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWJ0blwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDV9fSBvbkNsaWNrPXtjb3B5VG9Kc29ufT7lpI3liLbkuLpKU09OPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsLWJ0blwiIG9uQ2xpY2s9e2NvcHlUb1RzfT7lpI3liLbkuLpUU+exu+WeizwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWctaGVhZGVyXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNTaG93SnNvblxyXG4gICAgICAgICAgICA/IDxwcmU+e0pTT04uc3RyaW5naWZ5KGRhdGFPYmosIHVuZGVmaW5lZCwgMil9PC9wcmU+XHJcbiAgICAgICAgICAgIDogPE9iamVjdEluc3BlY3RvclxyXG4gICAgICAgICAgICAgIGRhdGE9e2RhdGFPYmp9XHJcbiAgICAgICAgICAgICAgZXhwYW5kUGF0aHM9e1snJCcsICcuJC5kYXRhJ119XHJcbiAgICAgICAgICAgICAgdGhlbWU9e3tcclxuICAgICAgICAgICAgICAgIC4uLmNocm9tZUxpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLi4ue1xyXG4gICAgICAgICAgICAgICAgICBCQVNFX0ZPTlRfU0laRTogJzE0cHgnLFxyXG4gICAgICAgICAgICAgICAgICBUUkVFTk9ERV9GT05UX1NJWkU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgICAgQkFTRV9GT05UX0ZBTUlMWTogJ0NvbnNvbGFzLCBNZW5sbywgbW9ub3NwYWNlLCBNaWNyb3NvZnQgWWFIZWknLFxyXG4gICAgICAgICAgICAgICAgICBUUkVFTk9ERV9GT05UX0ZBTUlMWTogJ0NvbnNvbGFzLCBNZW5sbywgbW9ub3NwYWNlLCBNaWNyb3NvZnQgWWFIZWknXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERldGFpbFZpZXc7XHJcbiIsImltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtJbnB1dCwgVG9vbHRpcH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7dXNlRGlzcGF0Y2h9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHt1c2VJbW1lcn0gZnJvbSAnLi4vaG9va3MnO1xyXG5pbXBvcnQgQ2hlY2tUYWcgZnJvbSAnLi9DaGVja1RhZyc7XHJcbmltcG9ydCAnLi4vc3R5bGVzL2ZpbHRlci1iYXIuc2Nzcyc7XHJcbmltcG9ydCB7c2V0SXNPbkZpbHRlcmluZywgc2V0UXVlcnlQYXJhbWV0ZXJ9IGZyb20gJy4uL3N0b3JlL3JlcXVlc3RfcmVjb3JkX3NsaWNlJztcclxuaW1wb3J0IHtRdWVzdGlvbkNpcmNsZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBGaWx0ZXJCYXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IHF1ZXJ5UGFyYW1ldGVyQ2hhbmdlLCBpc1Nob3cgfSA9IHByb3BzO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2ggKCk7XHJcbiAgY29uc3QgW3F1ZXJ5U3RyLCBzZXRRdWVyeVN0cl0gPSB1c2VTdGF0ZSAoJycpO1xyXG4gIGNvbnN0IFtxdWVyeVR5cGUsIHNldFF1ZXJ5VHlwZV0gPSB1c2VTdGF0ZSAoJycpO1xyXG4gIGNvbnN0IFtxdWVyeVBhcmFtZXRlck9iaiwgc2V0UXVlcnlQYXJhbWV0ZXJPYmpdID0gdXNlSW1tZXIgKHsgcXVlcnlTdHIsIHF1ZXJ5VHlwZSB9KTtcclxuICBjb25zdCByZXFUeXBlcyA9IFtcclxuICAgIHsgbGFiZWw6ICdBbGwnLCB2YWx1ZTogJycgfSxcclxuICAgIHsgbGFiZWw6ICcg6K+35rGCICcsIHZhbHVlOiAnRkVUQ0gnIH0sXHJcbiAgICB7IGxhYmVsOiAnIOaOqOmAgSAnLCB2YWx1ZTogJ01TRycgfVxyXG4gIF07XHJcbiAgY29uc3QgaXNFbXB0eVF1ZXJ5UGFyYW1ldGVyT2JqID0gKHF1ZXJ5RGF0YSkgPT4gT2JqZWN0LmtleXMocXVlcnlEYXRhKS5ldmVyeShrZXkgPT4gcXVlcnlEYXRhW2tleV0gPT09ICcnKTtcclxuICBjb25zdCBxdWVyeVBhcmFtZXRlckNoYW5nZUhhbmRsZSA9IChxdWVyeVBhcmFtZXRlcikgPT4ge1xyXG4gICAgZGlzcGF0Y2goc2V0SXNPbkZpbHRlcmluZyghaXNFbXB0eVF1ZXJ5UGFyYW1ldGVyT2JqKHF1ZXJ5UGFyYW1ldGVyKSkpO1xyXG4gICAgZGlzcGF0Y2goc2V0UXVlcnlQYXJhbWV0ZXIgKHF1ZXJ5UGFyYW1ldGVyKSk7XHJcbiAgICBxdWVyeVBhcmFtZXRlckNoYW5nZSAmJiBxdWVyeVBhcmFtZXRlckNoYW5nZShxdWVyeVBhcmFtZXRlcik7XHJcbiAgfTtcclxuICBjb25zdCBmaWx0ZXJJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGUudGFyZ2V0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICh2YWx1ZSE9PSBxdWVyeVN0cikge1xyXG4gICAgICBzZXRRdWVyeVN0ciAodmFsdWUpO1xyXG4gICAgICBjb25zdCBuZXdRdWVyeVBhcmFtZXRlck9iaiA9IHNldFF1ZXJ5UGFyYW1ldGVyT2JqKChkcmFmdCkgPT4ge1xyXG4gICAgICAgIGRyYWZ0LnF1ZXJ5U3RyID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBxdWVyeVBhcmFtZXRlckNoYW5nZUhhbmRsZShuZXdRdWVyeVBhcmFtZXRlck9iaik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBjaGVja1RhZ0NoZWNrSGFuZGxlID0gKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAocXVlcnlUeXBlIT09IHZhbHVlKSB7XHJcbiAgICAgIHNldFF1ZXJ5VHlwZSh2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IG5ld1F1ZXJ5UGFyYW1ldGVyT2JqID0gc2V0UXVlcnlQYXJhbWV0ZXJPYmooKGRyYWZ0KSA9PiB7XHJcbiAgICAgICAgZHJhZnQucXVlcnlUeXBlID0gdmFsdWU7XHJcbiAgICAgIH0pO1xyXG4gICAgICBxdWVyeVBhcmFtZXRlckNoYW5nZUhhbmRsZShuZXdRdWVyeVBhcmFtZXRlck9iaik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGNvbnN0IGhlbHBUZXh0ID0gYOafpeivouivtOaYju+8muS+neasoeaMieeFp+S8mOWFiOe6p+KRoOivt+axgklE44CB4pGh5pyN5Yqh5ZCN44CB4pGi5ZON5bqU5pWw5o2u5Yy56YWN5p+l6K+i77yM5pyJ57uT5p6c5Y2z5YGc5q2i5ZCO57ut55qE5Yy56YWNYDtcclxuICBjb25zdCBoZWxwVGlwID0gPFRvb2x0aXAgcGxhY2VtZW50PVwicmlnaHRcIiB0aXRsZT17aGVscFRleHR9PjxRdWVzdGlvbkNpcmNsZU91dGxpbmVkLz48L1Rvb2x0aXA+O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17aXNTaG93PyAnZmlsdGVyLWJhcicgOiAnZG9tLWhpZGRlbid9PlxyXG4gICAgICA8SW5wdXRcclxuICAgICAgICB2YWx1ZT17cXVlcnlTdHJ9XHJcbiAgICAgICAgcm9vdENsYXNzTmFtZT1cImZpbHRlci1pbnB1dFwiXHJcbiAgICAgICAgYWxsb3dDbGVhclxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRmlsdGVyXCJcclxuICAgICAgICBzdWZmaXg9e2hlbHBUaXB9XHJcbiAgICAgICAgb25DaGFuZ2U9e2ZpbHRlcklucHV0Q2hhbmdlfVxyXG4gICAgICAvPlxyXG4gICAgICB7XHJcbiAgICAgICAgcmVxVHlwZXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICA8Q2hlY2tUYWdcclxuICAgICAgICAgICAgbGFiZWw9e2l0ZW0ubGFiZWx9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpdGVtLnZhbHVlfVxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDUgfX1cclxuICAgICAgICAgICAgY2hlY2tlZD17aXRlbS52YWx1ZSA9PT0gcXVlcnlUeXBlfVxyXG4gICAgICAgICAgICBvbkNoZWNrPXtjaGVja1RhZ0NoZWNrSGFuZGxlfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJCYXI7XHJcbiIsImltcG9ydCAqIGFzIHN0eWxlT2JqIGZyb20gJy4uL3N0eWxlcy9sYXVuY2gtYnV0dG9uLm1vZHVsZS5zY3NzJztcclxuY29uc3QgTGF1bmNoQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBpc1J1bm5pbmcsIG9uQ2xpY2ssIC4uLnJlc3RQcm9wcyB9ID0gcHJvcHM7XHJcbiAgY29uc29sZS5sb2coJ2lzUnVubmluZycsIGlzUnVubmluZywgc3R5bGVPYmopO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2XHJcbiAgICAgIGNsYXNzTmFtZT17aXNSdW5uaW5nPyBgJHtzdHlsZU9iai5sYXVuY2hCdG59ICR7c3R5bGVPYmoubGF1bmNoQnRuQWN0aXZlfWAgOiBzdHlsZU9iai5sYXVuY2hCdG4gfVxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICB7Li4ucmVzdFByb3BzfVxyXG4gICAgLz5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGF1bmNoQnV0dG9uO1xyXG4iLCJpbXBvcnQge3VzZUVmZmVjdCwgdXNlU3RhdGUsIHVzZVJlZiwgdXNlTGF5b3V0RWZmZWN0fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7VGFibGV9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge1xyXG4gIHNldFJlcXVlc3RMaXN0LFxyXG4gIHB1c2hSZXF1ZXN0UmVjb3JkLFxyXG4gIHB1c2hNc2dSZWNvcmQsXHJcbiAgdXBkYXRlUmVxdWVzdFJlY29yZCxcclxuICBzZXRTZWxlY3RlZFJlY29yZCxcclxuICByZXNldFJlcXVlc3RMaXN0XHJcbn0gZnJvbSAnLi4vc3RvcmUvcmVxdWVzdF9yZWNvcmRfc2xpY2UnO1xyXG5pbXBvcnQge1xyXG4gIHBvc3RNZXNzYWdlVG9CYWNrZ3JvdW5kLFxyXG4gIHJlcXVlc3RSZWNvcmRDaGFuZ2UsXHJcbiAgY2xlYXJBbGxSZWNvcmRzQ2hhbmdlXHJcbn0gZnJvbSAnLi4vcGFuZWxfbWVzc2FnZS9wYW5lbF9wb3J0X2NyZWF0b3InO1xyXG5pbXBvcnQge1xyXG4gIENoZWNrQ2lyY2xlRmlsbGVkLFxyXG4gIENsb3NlQ2lyY2xlRmlsbGVkLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkLFxyXG4gIExvYWRpbmdPdXRsaW5lZCxcclxuICBQdWxsUmVxdWVzdE91dGxpbmVkLFxyXG4gIFNlbmRPdXRsaW5lZFxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IExvZ1RhYmxlID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3Jvd0NsaWNrLCBwYXJlbnRXcmFwcGVyLCB0YWJsZVdpZHRofSA9IHByb3BzO1xyXG4gIGNvbnN0IFtzZWxlY3RlZFJvdywgc2V0U2VsZWN0ZWRSb3ddID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFt0YWJsZVNjcm9sbFksIHNldFRhYmxlU2Nyb2xsWV0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCB0YWJsZVdyYXBwZXIgPSB1c2VSZWYoKTtcclxuICBjb25zdCByZXF1ZXN0TGlzdCA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3N0YXRlJywgc3RhdGUpO1xyXG4gICAgcmV0dXJuIHN0YXRlLnJlcXVlc3RSZWNvcmQucmVxdWVzdExpc3Q7XHJcbiAgfSk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRSZWNvcmQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAgIHJldHVybiBzdGF0ZS5yZXF1ZXN0UmVjb3JkLnNlbGVjdGVkUmVjb3JkO1xyXG4gIH0pO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBjb2x1bW5zID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ+ivt+axgiBJRCcsXHJcbiAgICAgIGRhdGFJbmRleDogJ3JlcXVlc3RJZCcsXHJcbiAgICAgIHJlbmRlcjogKHZhbHVlLCByZWNvcmQsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgaWYgKHJlY29yZC5yZXF1ZXN0VHlwZSA9PT0gJ0ZFVENIJykge1xyXG4gICAgICAgICAgcmV0dXJuICg8ZGl2PjxQdWxsUmVxdWVzdE91dGxpbmVkIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDUsIGNvbG9yOiAnIzFiNmVmMyd9fS8+e3ZhbHVlfTwvZGl2Pik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQucmVxdWVzdFR5cGUgPT09ICdNU0cnKSB7XHJcbiAgICAgICAgICByZXR1cm4gKDxkaXY+PFNlbmRPdXRsaW5lZCBzdHlsZT17e21hcmdpblJpZ2h0OiA1LCBjb2xvcjogJyNjNTg4ZjAnfX0vPnt2YWx1ZX08L2Rpdj4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHt0aXRsZTogJ+exu+WeiycsIGRhdGFJbmRleDogJ3JlcXVlc3RUeXBlJywgd2lkdGg6IDUwLCByZW5kZXI6IHZhbHVlID0+IHZhbHVlID09PSAnRkVUQ0gnID8gJ+ivt+axgicgOiAn5o6o6YCBJ30sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAn54q25oCBJywgLy8tMTog562J5b6F5LitIDA6IOaIkOWKnyAxOiDlpLHotKUgMjog5pyq5aSE55CG77yI5Y+q6ZKI5a+55raI5oGv5o6o6YCB77yJXHJcbiAgICAgIGRhdGFJbmRleDogJ3JlcXVlc3RTdGF0ZScsXHJcbiAgICAgIHdpZHRoOiAxMDAsXHJcbiAgICAgIHJlbmRlcjogdmFsdWUgPT4ge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gLTEpIHtcclxuICAgICAgICAgIHJldHVybiA8TG9hZGluZ091dGxpbmVkLz47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN0YXRlTWFwID0ge1xyXG4gICAgICAgICAgMDogJyDmiJDlip8gJyxcclxuICAgICAgICAgIDE6ICcg5aSx6LSlICcsXHJcbiAgICAgICAgICAyOiAnIOacquWkhOeQhiAnXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzdGF0ZUljb25NYXAgPSB7XHJcbiAgICAgICAgICAwOiA8Q2hlY2tDaXJjbGVGaWxsZWQgc3R5bGU9e3tjb2xvcjogJyM1MmMxY2EnLCBtYXJnaW5SaWdodDogMn19Lz4sXHJcbiAgICAgICAgICAxOiA8Q2xvc2VDaXJjbGVGaWxsZWQgc3R5bGU9e3tjb2xvcjogJyNmZjRkNGYnLCBtYXJnaW5SaWdodDogMn19Lz4sXHJcbiAgICAgICAgICAyOiA8RXhjbGFtYXRpb25DaXJjbGVGaWxsZWQgc3R5bGU9e3tjb2xvcjogJyNmYWFkMTQnLCBtYXJnaW5SaWdodDogMn19Lz5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiA8c3Bhbj57c3RhdGVJY29uTWFwW3ZhbHVlXX17c3RhdGVNYXBbdmFsdWVdfTwvc3Bhbj47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBwb3N0TWVzc2FnZVRvQmFja2dyb3VuZCh7dHlwZTogJ2dldC1yZXEtcmVjb3Jkcyd9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFJlcXVlc3RMaXN0KHJlcy5wYXlsb2FkRGF0YSkpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgY2FuY2VsTGlzdGVuID0gcmVxdWVzdFJlY29yZENoYW5nZSgobmV3UmVxdWVzdCkgPT4ge1xyXG4gICAgICBpZiAobmV3UmVxdWVzdC5yZXF1ZXN0VHlwZSA9PT0gJ0ZFVENIJykge1xyXG4gICAgICAgIGlmIChuZXdSZXF1ZXN0LnJlcXVlc3RTdGF0ZSA9PT0gLTEpIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHB1c2hSZXF1ZXN0UmVjb3JkKG5ld1JlcXVlc3QpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZGlzcGF0Y2godXBkYXRlUmVxdWVzdFJlY29yZChuZXdSZXF1ZXN0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG5ld1JlcXVlc3QucmVxdWVzdFR5cGUgPT09ICdNU0cnKSB7XHJcbiAgICAgICAgZGlzcGF0Y2gocHVzaE1zZ1JlY29yZChuZXdSZXF1ZXN0KSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2xlYXJMaXN0ZW4gPSBjbGVhckFsbFJlY29yZHNDaGFuZ2UoKHJlY29yZHMpID0+IHtcclxuICAgICAgZGlzcGF0Y2gocmVzZXRSZXF1ZXN0TGlzdChyZWNvcmRzKSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIGNhbmNlbExpc3RlbigpO1xyXG4gICAgICBjbGVhckxpc3RlbigpO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcbiAgdXNlTGF5b3V0RWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0YWJsZVdyYXBwZXIuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxCb2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYW50LXRhYmxlLWJvZHknKVswXTtcclxuICAgICAgaWYgKHNjcm9sbEJvZHkgJiYgIXNlbGVjdGVkUmVjb3JkKSB7XHJcbiAgICAgICAgc2Nyb2xsQm9keS5zY3JvbGxUbyh7dG9wOiBzY3JvbGxCb2R5LnNjcm9sbEhlaWdodH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgW3JlcXVlc3RMaXN0LCBzZWxlY3RlZFJvd10pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCByZXNpemVPYnNlcnZlciA9IG5ldyBSZXNpemVPYnNlcnZlcigoZW50cmllcykgPT4ge1xyXG4gICAgICBjb25zdCBlbnRyeSA9IGVudHJpZXMgWzBdO1xyXG4gICAgICBzZXRUYWJsZVNjcm9sbFkoZW50cnkuY29udGVudFJlY3QuaGVpZ2h0IC0gMjcpOyAvLyDooajmoLzpq5jluqbmmK8gMjdcclxuICAgIH0pO1xyXG4gICAgaWYgKHBhcmVudFdyYXBwZXIpIHtcclxuICAgICAgcmVzaXplT2JzZXJ2ZXIub2JzZXJ2ZShwYXJlbnRXcmFwcGVyKTtcclxuICAgIH1cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIHJlc2l6ZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgIH07XHJcbiAgfSwgW3BhcmVudFdyYXBwZXJdKTtcclxuICBjb25zdCByb3dDbGFzc05hbWUgPSAocmVjb3JkLCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHJvd0NsYXNzVGV4dCA9IGluZGV4ICUgMiA9PT0gMCA/ICdldmVuLXJvdycgOiAnb2RkLXJvdyc7XHJcbiAgICBpZiAocmVjb3JkLmlkID09PSBzZWxlY3RlZFJvdy5pZCkge1xyXG4gICAgICByb3dDbGFzc1RleHQgPSBgcm93LXNlbGVjdGVkICR7cm93Q2xhc3NUZXh0fWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcm93Q2xhc3NUZXh0O1xyXG4gIH07XHJcbiAgY29uc3Qgb25Sb3cgPSAocmVjb3JkKSA9PiAoe1xyXG4gICAgb25DbGljazogKGV2ZW50KSA9PiB7XHJcbiAgICAgIHNldFNlbGVjdGVkUm93KHJlY29yZCk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkUmVjb3JkKHJlY29yZCkpO1xyXG4gICAgICByb3dDbGljayAmJiByb3dDbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGFibGVcclxuICAgICAgY2xhc3NOYW1lPVwicmVxLXJlY29yZC10YWJsZVwiXHJcbiAgICAgIHJlZj17dGFibGVXcmFwcGVyfVxyXG4gICAgICBzdHlsZT17e3dpZHRoOiB0YWJsZVdpZHRofX1cclxuICAgICAgcm93SG92ZXI9e3RydWV9XHJcbiAgICAgIG9uUm93PXtvblJvd31cclxuICAgICAgY29sdW1ucz17Y29sdW1uc31cclxuICAgICAgcm93Q2xhc3NOYW1lPXtyb3dDbGFzc05hbWV9XHJcbiAgICAgIGRhdGFTb3VyY2U9e3JlcXVlc3RMaXN0fVxyXG4gICAgICByb3dLZXk9eydpZCd9XHJcbiAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgIHNjcm9sbD17e3k6IHRhYmxlU2Nyb2xsWX19XHJcbiAgICAgIHBhZ2luYXRpb249e2ZhbHNlfVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMb2dUYWJsZTtcclxuIiwiaW1wb3J0IERldGFpbFZpZXcgZnJvbSAnLi9EZXRhaWxWaWV3JztcclxuY29uc3QgUmVxdWVzdERldGFpbD0oe3JlcXVlc3RSZWNvcmR9KT0+IHtcclxuICBpZiAoIXJlcXVlc3RSZWNvcmQgfHwgIXJlcXVlc3RSZWNvcmQucmVxdWVzdERldGFpbCkgcmV0dXJuIG51bGw7XHJcbiAgY29uc3Qge3JlcXVlc3REZXRhaWx9ID0gcmVxdWVzdFJlY29yZDtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyZXF1ZXN0LWluZm8td3JhcHBlclwiPlxyXG4gICAgICA8RGV0YWlsVmlldyB0aXRsZT1cIuivt+axguWktFwiIGRhdGFPYmo9e3JlcXVlc3REZXRhaWwucmVxSGVhZH0vPlxyXG4gICAgICA8RGV0YWlsVmlldyB0aXRsZT1cIuivt+axguS9k+aVsOaNrlwiIGRhdGFPYmo9e3JlcXVlc3REZXRhaWwucmVxRGF0YX0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0RGV0YWlsO1xyXG4iLCJpbXBvcnQgRGV0YWlsVmlldyBmcm9tICcuL0RldGFpbFZpZXcnO1xyXG5jb25zdCBSZXNwb25zZURldGFpbCA9ICh7IHJlcXVlc3RSZWNvcmQgfSkgPT4ge1xyXG4gIGlmICghcmVxdWVzdFJlY29yZCB8fCFyZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB7IHJlc3BvbnNlRGV0YWlsIH0gPSByZXF1ZXN0UmVjb3JkO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3QtaW5mby13cmFwcGVyXCI+XHJcbiAgICAgIDxEZXRhaWxWaWV3IHRpdGxlPVwi5ZON5bqU5aS0XCIgZGF0YU9iaj17cmVzcG9uc2VEZXRhaWwuaGVhZGVyfS8+XHJcbiAgICAgIDxEZXRhaWxWaWV3IHRpdGxlPVwi5ZON5bqU5L2T5pWw5o2uXCIgZGF0YU9iaj17cmVzcG9uc2VEZXRhaWx9Lz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlRGV0YWlsO1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy90YWIuc2Nzcyc7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtDbG9zZU91dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBUYWIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7XHJcbiAgICB0YWJWaWV3cywgb25DbG9zZSA9ICgpID0+IHtcclxuICAgIH0sIGlzU2hvd0Nsb3NlQnRuID0gdHJ1ZVxyXG4gIH0gPSBwcm9wcztcclxuICBjb25zdCB0YWJDbGlja0hhbmRsZXIgPSAodGFiSXRlbSkgPT4ge1xyXG4gICAgc2V0QWN0aXZlS2V5KHRhYkl0ZW0ua2V5KTtcclxuICAgIHRhYkl0ZW0udGFiQ2xpY2sgJiYgdGFiSXRlbS50YWJDbGljaygpO1xyXG4gIH07XHJcbiAgY29uc3Qgdmlld3MgPSB0YWJWaWV3cy5maWx0ZXIoaXRlbSA9PiAhaXRlbS5kaXNTaG93KTtcclxuICBjb25zdCBbYWN0aXZlS2V5LCBzZXRBY3RpdmVLZXldID0gdXNlU3RhdGUodmlld3NbMF0ua2V5KTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItYmFyXCI+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNTaG93Q2xvc2VCdG4gJiYgPGRpdiBjbGFzc05hbWU9XCJjbG9zZS1idG5cIiBvbkNsaWNrPXtvbkNsb3NlfT5cclxuICAgICAgICAgICAgPENsb3NlT3V0bGluZWQgY2xhc3NOYW1lPVwiY2xvc2UtYnRuLWljb25cIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInRhYi1saXN0XCI+XHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHZpZXdzLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVLZXkgPT09IGl0ZW0ua2V5ID8gJ3RhYi1pdGVtIHRhYi1pdGVtX2FjdGl2ZScgOiAndGFiLWl0ZW0nfVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLmtleX1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRhYkNsaWNrSGFuZGxlcihpdGVtKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgdmlld3MubWFwKGl0ZW0gPT4gKFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItdmlld1wiIHN0eWxlPXt7ZGlzcGxheTogYWN0aXZlS2V5ID09PSBpdGVtLmtleSA/ICdibG9jaycgOiAnbm9uZSd9fSBrZXk9e2l0ZW0ua2V5fT5cclxuICAgICAgICAgICAge2l0ZW0uY2hpbGRyZW59XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8Lz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiO1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy90b29sLWJhci5zY3NzJztcclxuaW1wb3J0IHt1c2VFZmZlY3QsIHVzZU1lbW99IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtFeHBvcnRPdXRsaW5lZCwgRmlsdGVyRmlsbGVkLCBGaWx0ZXJPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkLCBTdG9wT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IExhdW5jaEJ1dHRvbiBmcm9tICcuL0xhdW5jaEJ1dHRvbic7XHJcbmltcG9ydCB7cG9zdE1lc3NhZ2VUb0JhY2tncm91bmR9IGZyb20gJy4uL3BhbmVsX21lc3NhZ2UvcGFuZWxfcG9ydF9jcmVhdG9yJztcclxuaW1wb3J0IHtEcm9wZG93biwgTW9kYWwsIERpdmlkZXJ9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge3NldFJlcXVlc3RMaXN0LCBzZXRTZWxlY3RlZFJlY29yZCwgc2V0UnVubmluZ30gZnJvbSAnLi4vc3RvcmUvcmVxdWVzdF9yZWNvcmRfc2xpY2UnO1xyXG5pbXBvcnQgYXBwSnNvbiBmcm9tICcuLi8uLi9wYWNrYWdlLmpzb24nO1xyXG5cclxuY29uc3QgVG9vbEJhciA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtpc1Nob3dGaWx0ZXJCYXIsIHNldElzU2hvd0ZpbHRlckJhciwgaXNPbkZpbHRlcmluZ30gPSBwcm9wcztcclxuICBjb25zdCBpc1J1bm5pbmcgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLnJlcXVlc3RSZWNvcmQuaXNSdW5uaW5nKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgZmlsdGVyaW5nQ29sb3IgPSB1c2VNZW1vKCgpID0+IGlzT25GaWx0ZXJpbmcgPyAnI2RjMzYyZScgOiAnIzFiNmVmMycsIFtpc09uRmlsdGVyaW5nXSk7XHJcbiAgY29uc3Qgc3RhcnRSZWNvcmQgPSAoKSA9PiB7XHJcbiAgICBwb3N0TWVzc2FnZVRvQmFja2dyb3VuZCh7dHlwZTogJ3N3aXRjaC1ydW5uaW5nJywgZGF0YTogIWlzUnVubmluZ30pLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0UnVubmluZyghaXNSdW5uaW5nKSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGNsZWFyQWxsUmVjb3JkID0gKCkgPT4ge1xyXG4gICAgcG9zdE1lc3NhZ2VUb0JhY2tncm91bmQoe3R5cGU6ICdjbGVhci1hbGwtcmVjb3Jkcyd9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFJlcXVlc3RMaXN0KFtdKSk7XHJcbiAgICAgIGRpc3BhdGNoKHNldFNlbGVjdGVkUmVjb3JkKG51bGwpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgbWVudVByb3BzID0ge1xyXG4gICAgaXRlbXM6IFt7bGFiZWw6ICflhbPkuo4nLCBrZXk6ICdhYm91dCd9XSxcclxuICAgIG9uQ2xpY2s6IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gJ2Fib3V0Jykge1xyXG4gICAgICAgIE1vZGFsLmluZm8oe1xyXG4gICAgICAgICAgdGl0bGU6ICflhbPkuo4gQVRVTmV0d29yaycsXHJcbiAgICAgICAgICBpY29uOiBudWxsLFxyXG4gICAgICAgICAgY29udGVudDogPHNwYW4+54mI5pys5Y+377yae2FwcEpzb24udmVyc2lvbn08L3NwYW4+LFxyXG4gICAgICAgICAgb2tUZXh0OiAn56Gu5a6aJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcG9zdE1lc3NhZ2VUb0JhY2tncm91bmQoe3R5cGU6ICdnZXQtaXMtcnVubmluZyd9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHNldFJ1bm5pbmcocmVzLnBheWxvYWREYXRhKSk7XHJcbiAgICB9KTtcclxuICB9LCBbXSk7XHJcbiAgY29uc3Qgc2hvd0V4cG9ydERpYWxvZyA9ICgpID0+IHtcclxuICAgIGFsZXJ0KDIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbC1iYXJcIj5cclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4J319PlxyXG4gICAgICAgIDxMYXVuY2hCdXR0b24gaXNSdW5uaW5nPXtpc1J1bm5pbmd9IG9uQ2xpY2s9e3N0YXJ0UmVjb3JkfSB0aXRsZT17aXNSdW5uaW5nID8gJ+WBnOatoicgOiAn6L+Q6KGMJ30vPlxyXG4gICAgICAgIDxTdG9wT3V0bGluZWQgY2xhc3NOYW1lPVwiY2xlYXItYnRuXCIgcm90YXRlPXs5MH0gb25DbGljaz17Y2xlYXJBbGxSZWNvcmR9IHRpdGxlPVwi5riF55CGXCIvPlxyXG4gICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiLz5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpc1Nob3dGaWx0ZXJCYXJcclxuICAgICAgICAgICAgPyA8RmlsdGVyRmlsbGVkIG9uQ2xpY2s9eygpID0+IHNldElzU2hvd0ZpbHRlckJhcihmYWxzZSl9IHN0eWxlPXt7Y29sb3I6IGZpbHRlcmluZ0NvbG9yfX0gdGl0bGU9XCLnrZvpgIlcIi8+XHJcbiAgICAgICAgICAgIDogPEZpbHRlck91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHNldElzU2hvd0ZpbHRlckJhcih0cnVlKX0gc3R5bGU9e3tjb2xvcjogZmlsdGVyaW5nQ29sb3J9fSB0aXRsZT1cIuetm+mAiVwiLz5cclxuICAgICAgICB9XHJcbiAgICAgICAgPERpdmlkZXIgdHlwZT1cInZlcnRpY2FsXCIvPlxyXG4gICAgICAgIDxFeHBvcnRPdXRsaW5lZCBzdHlsZT17e2NvbG9yOiAnIzFiNmVmMyd9fSBvbkNsaWNrPXtzaG93RXhwb3J0RGlhbG9nfSB0aXRsZT1cIuWvvOWHuuiusOW9lVwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxEcm9wZG93biBtZW51PXttZW51UHJvcHN9IHRyaWdnZXI9e1snY2xpY2snXX0+XHJcbiAgICAgICAgPFNldHRpbmdPdXRsaW5lZC8+XHJcbiAgICAgIDwvRHJvcGRvd24+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBUb29sQmFyO1xyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7cHJvZHVjZX0gZnJvbSAnaW1tZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUltbWVyPShiYXNlU2F0ZSk9PntcclxuICBjb25zdCBbc3RhdGUsc2V0U3RhdGVdPXVzZVN0YXRlKGJhc2VTYXRlKTtcclxuICBjb25zdCB1cGRhdGVTdGF0ZT0oc3RhdGVDaGFuZ2UpPT57XHJcbiAgICBjb25zdCBuZXh0U3RhdGU9cHJvZHVjZShzdGF0ZSwgc3RhdGVDaGFuZ2UpO1xyXG4gICAgc2V0U3RhdGUobmV4dFN0YXRlKTtcclxuICAgIHJldHVybiBuZXh0U3RhdGU7XHJcbiAgfVxyXG4gIHJldHVybiBbc3RhdGUsdXBkYXRlU3RhdGVdO1xyXG59XHJcbiIsImltcG9ydCAnLi9zdHlsZXMvY3NzcmVzZXQuY3NzJ1xyXG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tL2NsaWVudCdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuaW1wb3J0IHtQcm92aWRlcn0gZnJvbSAncmVhY3QtcmVkdXgnXHJcbmltcG9ydCB7c3RvcmV9IGZyb20gJy4vc3RvcmUnXHJcbmltcG9ydCB7cGFuZWxQb3J0SW5pdH0gZnJvbSAnLi9wYW5lbF9tZXNzYWdlL3BhbmVsX3BvcnRfY3JlYXRvcic7XHJcblxyXG5wYW5lbFBvcnRJbml0KCk7XHJcbmNvbnN0IHJvb3Q9UmVhY3REb20uY3JlYXRlUm9vdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKTtcclxucm9vdC5yZW5kZXIoXHJcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICA8QXBwLz5cclxuICA8L1Byb3ZpZGVyPlxyXG4pO1xyXG4iLCJpbXBvcnQge2lzRXh0ZW5zaW9ufSBmcm9tICcuLi91dGlscydcclxuXHJcbmV4cG9ydCBsZXQgcG9ydFRvQmFja2dyb3VuZDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwYW5lbFBvcnRJbml0KCkge1xyXG4gIGlmIChwb3J0VG9CYWNrZ3JvdW5kKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGlmIChpc0V4dGVuc2lvbigpKSB7XHJcbiAgICBjb25zdCB0YWJJZCA9IHdpbmRvdy5jaHJvbWUuZGV2dG9vbHMuaW5zcGVjdGVkV2luZG93LnRhYklkO1xyXG4gICAgcG9ydFRvQmFja2dyb3VuZCA9IHdpbmRvdy5jaHJvbWUucnVudGltZS5jb25uZWN0KHtuYW1lOiBgcGFuZWxfJHt0YWJJZH1gfSk7XHJcbiAgICBwb3J0VG9CYWNrZ3JvdW5kLm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdwYW5lbOeahHBvcnTmjonnur/kuobvvIzlsJ3or5Xph43ov54nKTtcclxuICAgICAgcG9ydFRvQmFja2dyb3VuZCA9IG51bGw7XHJcbiAgICAgIHBvcnRUb0JhY2tncm91bmQgPSB3aW5kb3cuY2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7bmFtZTogYHBhbmVsXyR7dGFiSWR9YH0pO1xyXG4gICAgICBjb25zb2xlLmxvZygncGFuZWzph43ov57miJDlip8nKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmVycm9yKG5ldyBFcnJvcigncGFuZWzplb/mnJ/mtojmga/pgJrpgZPliJvlu7rlpLHotKXvvIzor7fnoa7kv53miafooYznjq/looPkuLpkZXZ0b29s6Z2i5p2/5LitJykpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHBvc3RNZXNzYWdlVG9CYWNrZ3JvdW5kKG1zZ1BhcmFtKSB7XHJcbiAgY29uc3Qge3R5cGV9ID0gbXNnUGFyYW07XHJcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgIGNvbnN0IG1lc3NhZ2VDYWxsYmFjayA9IChtZXNzYWdlLCBwb3J0KSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLnR5cGUgPT09IHR5cGUpIHtcclxuICAgICAgICByZXNvbHZlKG1lc3NhZ2UpO1xyXG4gICAgICAgIHBvcnRUb0JhY2tncm91bmQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG1lc3NhZ2VDYWxsYmFjayk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBwb3J0VG9CYWNrZ3JvdW5kLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtZXNzYWdlQ2FsbGJhY2spO1xyXG4gICAgcG9ydFRvQmFja2dyb3VuZC5wb3N0TWVzc2FnZShtc2dQYXJhbSk7XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXF1ZXN0UmVjb3JkQ2hhbmdlKGNhbGxiYWNrKSB7XHJcbiAgY29uc3QgbWVzc2FnZUhhbmRsZXIgPSAobWVzc2FnZSwgcG9ydCkgPT4ge1xyXG4gICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ3JlcS1jaGFuZ2VkJykge1xyXG4gICAgICBjYWxsYmFjayhtZXNzYWdlLnBheWxvYWREYXRhKTtcclxuICAgIH1cclxuICB9O1xyXG4gIHBvcnRUb0JhY2tncm91bmQub25NZXNzYWdlLmFkZExpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgcG9ydFRvQmFja2dyb3VuZC5vbk1lc3NhZ2UucmVtb3ZlTGlzdGVuZXIobWVzc2FnZUhhbmRsZXIpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQWxsUmVjb3Jkc0NoYW5nZShjYWxsYmFjaykge1xyXG4gIGNvbnN0IG1lc3NhZ2VIYW5kbGVyID0gKG1lc3NhZ2UsIHBvcnQpID0+IHtcclxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdjbGVhci1hbGwtcmVjb3JkcycpIHtcclxuICAgICAgY2FsbGJhY2sobWVzc2FnZS5wYXlsb2FkRGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBwb3J0VG9CYWNrZ3JvdW5kLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtZXNzYWdlSGFuZGxlcik7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHBvcnRUb0JhY2tncm91bmQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjb25maWd1cmVTdG9yZX0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcbmltcG9ydCByZXF1ZXN0UmVjb3JkU2xpY2UgZnJvbSAnLi9yZXF1ZXN0X3JlY29yZF9zbGljZSc7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgcmVkdWNlcjoge1xyXG4gICAgcmVxdWVzdFJlY29yZDogcmVxdWVzdFJlY29yZFNsaWNlXHJcbiAgfVxyXG59KTtcclxuIiwiaW1wb3J0IHtjcmVhdGVTbGljZX0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgc2VsZWN0ZWRSZWNvcmQ6IG51bGwsXHJcbiAgb3JpZ2luUmVxdWVzdExpc3Q6IFtdLFxyXG4gIHJlcXVlc3RMaXN0OiBbXSxcclxuICBxdWVyeVBhcmFtZXRlcjoge30sXHJcbiAgaXNPbkZpbHRlcmluZzogZmFsc2UsXHJcbiAgaXNSdW5uaW5nOiB0cnVlXHJcbn07XHJcbmNvbnN0IG5vdFJlc3BvbmRlZE9mT3JpZ2luSW5kZXhNYXAgPSBuZXcgTWFwKCk7XHJcbmNvbnN0IG5vdFJlc3BvbmRlZEluZGV4TWFwID0gbmV3IE1hcCgpO1xyXG5jb25zdCBmaWx0ZXJXaXRoUXVlcnlQYXJhbWV0ZXIgPSAocXVlcnlQYXJhbWV0ZXIsIHJlcXVlc3RMaXN0KSA9PiB7XHJcbiAgY29uc3Qge3F1ZXJ5U3RyLCBxdWVyeVR5cGV9ID0gcXVlcnlQYXJhbWV0ZXI7XHJcbiAgbGV0IG5leHRSZXFMaXN0ID0gcmVxdWVzdExpc3Q7XHJcbiAgaWYgKHF1ZXJ5VHlwZSkge1xyXG4gICAgbmV4dFJlcUxpc3QgPSByZXF1ZXN0TGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnJlcXVlc3RUeXBlID09PSBxdWVyeVR5cGUpO1xyXG4gIH1cclxuICBpZiAocXVlcnlTdHIpIHtcclxuICAgIG5leHRSZXFMaXN0ID0gbmV4dFJlcUxpc3QuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICBpZiAocXVlcnlTdHIgPT09IGl0ZW0ucmVxdWVzdElkKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKChpdGVtLnJlcXVlc3REZXRhaWwgJiYgcXVlcnlTdHIgPT09IGl0ZW0ucmVxdWVzdERldGFpbC5yZXFIZWFkLnNlcnZpY2VfbmFtZSlcclxuICAgICAgICB8fCBxdWVyeVN0ciA9PT0gaXRlbS5yZXNwb25zZURldGFpbC5oZWFkZXIuc2VydmljZV9uYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0ucmVzcG9uc2VEZXRhaWwgJiYgSlNPTi5zdHJpbmdpZnkoaXRlbS5yZXNwb25zZURldGFpbC5kYXRhKS5pbmNsdWRlcyhxdWVyeVN0cikpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0UmVxTGlzdDtcclxufTtcclxuY29uc3QgaXNPbmVSZWNvcmRNYXRjaCA9IChxdWVyeVBhcmFtZXRlciwgcmVxSXRlbSkgPT4ge1xyXG4gIGNvbnN0IHtxdWVyeVN0ciwgcXVlcnlUeXBlfSA9IHF1ZXJ5UGFyYW1ldGVyO1xyXG4gIGxldCBpc1JlcXVlc3RUeXBlTWF0Y2ggPSB0cnVlO1xyXG4gIGlmIChxdWVyeVR5cGUpIHtcclxuICAgIGlzUmVxdWVzdFR5cGVNYXRjaCA9IHF1ZXJ5VHlwZSA9PT0gcmVxSXRlbS5yZXF1ZXN0VHlwZTtcclxuICB9XHJcbiAgaWYoIWlzUmVxdWVzdFR5cGVNYXRjaCl7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChxdWVyeVN0cil7XHJcbiAgICBpZihxdWVyeVN0cj09PXJlcUl0ZW0ucmVxdWVzdElkKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZigocmVxSXRlbS5yZXF1ZXN0RGV0YWlsJiZxdWVyeVN0cj09PXJlcUl0ZW0ucmVxdWVzdERldGFpbC5yZXFIZWFkLnNlcnZpY2VfbmFtZSlcclxuICAgICAgfHwgcXVlcnlTdHI9PT1yZXFJdGVtLnJlc3BvbnNlRGV0YWlsPy5oZWFkZXIuc2VydmljZV9uYW1lKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAocmVxSXRlbS5yZXNwb25zZURldGFpbCYmSlNPTi5zdHJpbmdpZnkocmVxSXRlbS5yZXNwb25zZURldGFpbC5kYXRhKS5pbmNsdWRlcyhxdWVyeVN0cikpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9ZWxzZSBpZihxdWVyeVN0cj09PScnKXtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFJlY29yZFNsaWNlPWNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAncmVxdWVzdFJlY29yZGVyJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFJlcXVlc3RMaXN0KHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUub3JpZ2luUmVxdWVzdExpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUucmVxdWVzdExpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBwdXNoUmVxdWVzdFJlY29yZChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGlmKHN0YXRlLmlzT25GaWx0ZXJpbmcpe1xyXG4gICAgICAgIGlmKGlzT25lUmVjb3JkTWF0Y2goc3RhdGUucXVlcnlQYXJhbWV0ZXIsIGFjdGlvbi5wYXlsb2FkKSl7XHJcbiAgICAgICAgICBzdGF0ZS5yZXF1ZXN0TGlzdC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgIG5vdFJlc3BvbmRlZEluZGV4TWFwLnNldChhY3Rpb24ucGF5bG9hZC5pZCwgc3RhdGUucmVxdWVzdExpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLnJlcXVlc3RMaXN0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIG5vdFJlc3BvbmRlZEluZGV4TWFwLnNldChhY3Rpb24ucGF5bG9hZC5pZCwgc3RhdGUucmVxdWVzdExpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUub3JpZ2luUmVxdWVzdExpc3QucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIG5vdFJlc3BvbmRlZE9mT3JpZ2luSW5kZXhNYXAuc2V0KGFjdGlvbi5wYXlsb2FkLmlkLCBzdGF0ZS5vcmlnaW5SZXF1ZXN0TGlzdC5sZW5ndGggLSAxKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVSZXF1ZXN0UmVjb3JkKHN0YXRlLCBhY3Rpb24pIHtcclxuXHJcbiAgICAgIC8vIOabtOaWsOa6kOaVsOaNruS4reivt+axgueahOeKtuaAgVxyXG4gICAgICBpZiAobm90UmVzcG9uZGVkT2ZPcmlnaW5JbmRleE1hcC5oYXMoYWN0aW9uLnBheWxvYWQuaWQpKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFJlY29yZCA9IHN0YXRlLm9yaWdpblJlcXVlc3RMaXN0W25vdFJlc3BvbmRlZE9mT3JpZ2luSW5kZXhNYXAuZ2V0KGFjdGlvbi5wYXlsb2FkLmlkKV1cclxuICAgICAgICByZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VEZXRhaWw7IC8vIOabtOaWsOWTjeW6lOS9k1xyXG4gICAgICAgIC8vIOabtOaWsOeKtuaAgVxyXG4gICAgICAgIHJlcXVlc3RSZWNvcmQucmVxdWVzdFN0YXRlID0gcmVxdWVzdFJlY29yZC5yZXNwb25zZURldGFpbC5lcnJvci5lcnJvcl9pZCA9PT0gMD8gMCA6IDE7XHJcbiAgICAgICAgcmVxdWVzdFJlY29yZC5yZWNlaXZlVGltZSA9ICBhY3Rpb24ucGF5bG9hZC5yZWNlaXZlVGltZTtcclxuICAgICAgICBub3RSZXNwb25kZWRPZk9yaWdpbkluZGV4TWFwLmRlbGV0ZShhY3Rpb24ucGF5bG9hZC5pZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOabtOaWsOWxleekuuaVsOaNruS4reivt+axgueahOeKtuaAgVxyXG4gICAgICBpZiAobm90UmVzcG9uZGVkSW5kZXhNYXAuaGFzKGFjdGlvbi5wYXlsb2FkLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RSZWNvcmQgPSBzdGF0ZS5yZXF1ZXN0TGlzdFtub3RSZXNwb25kZWRJbmRleE1hcC5nZXQoYWN0aW9uLnBheWxvYWQuaWQpXTtcclxuICAgICAgICByZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VEZXRhaWw7IC8vIOabtOaWsOWTjeW6lOS9k1xyXG4gICAgICAgIC8vIOabtOaWsOeKtuaAgVxyXG4gICAgICAgIHJlcXVlc3RSZWNvcmQucmVxdWVzdFN0YXRlID0gcmVxdWVzdFJlY29yZC5yZXNwb25zZURldGFpbC5lcnJvci5lcnJvcl9pZCA9PT0gMD8gMCA6IDE7XHJcbiAgICAgICAgcmVxdWVzdFJlY29yZC5yZWNlaXZlVGltZSA9ICBhY3Rpb24ucGF5bG9hZC5yZWNlaXZlVGltZTtcclxuICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWRSZWNvcmQgJiYgc3RhdGUuc2VsZWN0ZWRSZWNvcmQuaWQgPT09IHJlcXVlc3RSZWNvcmQuaWQpIHtcclxuICAgICAgICAgIC8vIOWmguaenOabtOaWsOeahOaYr+W9k+WJjemAieS4reeahOivt+axguiusOW9lVxyXG4gICAgICAgICAgc3RhdGUuc2VsZWN0ZWRSZWNvcmQgPSByZXF1ZXN0UmVjb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub3RSZXNwb25kZWRJbmRleE1hcC5kZWxldGUoYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHVzaE1zZ1JlY29yZChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGlmIChzdGF0ZS5pc09uRmlsdGVyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlzT25lUmVjb3JkTWF0Y2goc3RhdGUucXVlcnlQYXJhbWV0ZXIsIGFjdGlvbi5wYXlsb2FkKSkge1xyXG4gICAgICAgICAgc3RhdGUucmVxdWVzdExpc3QucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLnJlcXVlc3RMaXN0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlLm9yaWdpblJlcXVlc3RMaXN0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkUmVjb3JkKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRSZWNvcmQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJc09uRmlsdGVyaW5nKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuaXNPbkZpbHRlcmluZyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldFF1ZXJ5UGFyYW1ldGVyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUucXVlcnlQYXJhbWV0ZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUucmVxdWVzdExpc3QgPSBmaWx0ZXJXaXRoUXVlcnlQYXJhbWV0ZXIoYWN0aW9uLnBheWxvYWQsIHN0YXRlLm9yaWdpblJlcXVlc3RMaXN0KTtcclxuICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkUmVjb3JkICYmIWlzT25lUmVjb3JkTWF0Y2goYWN0aW9uLnBheWxvYWQsIHN0YXRlLnNlbGVjdGVkUmVjb3JkKSkge1xyXG4gICAgICAgIHN0YXRlLnNlbGVjdGVkUmVjb3JkID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlc2V0UmVxdWVzdExpc3Qoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5vcmlnaW5SZXF1ZXN0TGlzdCA9IFtdO1xyXG4gICAgICBzdGF0ZS5yZXF1ZXN0TGlzdCA9IFtdO1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZFJlY29yZCA9IG51bGw7XHJcbiAgICAgIG5vdFJlc3BvbmRlZE9mT3JpZ2luSW5kZXhNYXAuY2xlYXIoKTtcclxuICAgICAgbm90UmVzcG9uZGVkSW5kZXhNYXAuY2xlYXIoKTtcclxuICAgIH0sXHJcbiAgICBzZXRSdW5uaW5nKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuaXNSdW5uaW5nID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHNldFJlcXVlc3RMaXN0LFxyXG4gIHB1c2hSZXF1ZXN0UmVjb3JkLFxyXG4gIHVwZGF0ZVJlcXVlc3RSZWNvcmQsXHJcbiAgc2V0U2VsZWN0ZWRSZWNvcmQsXHJcbiAgcHVzaE1zZ1JlY29yZCxcclxuICBzZXRJc09uRmlsdGVyaW5nLFxyXG4gIHNldFF1ZXJ5UGFyYW1ldGVyLFxyXG4gIHJlc2V0UmVxdWVzdExpc3QsXHJcbiAgc2V0UnVubmluZ1xyXG59ID0gcmVxdWVzdFJlY29yZFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RSZWNvcmRTbGljZS5yZWR1Y2VyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbnZhciBfMSA9IFwibGF1bmNoLWJ1dHRvbi1tb2R1bGVfbGF1bmNoLWJ0bl9XQkpicVwiO1xudmFyIF8yID0gXCJsYXVuY2gtYnV0dG9uLW1vZHVsZV9sYXVuY2gtYnRuX2FjdGl2ZV92VlhwaVwiO1xudmFyIF8zID0gXCJsYXVuY2gtYnV0dG9uLW1vZHVsZV9sYXVuY2gtYnRuX1dCSmJxXCI7XG52YXIgXzQgPSBcImxhdW5jaC1idXR0b24tbW9kdWxlX2xhdW5jaC1idG5fYWN0aXZlX3ZWWHBpXCI7XG5leHBvcnQgeyBfMSBhcyBcImxhdW5jaC1idG5cIiwgXzIgYXMgXCJsYXVuY2gtYnRuX2FjdGl2ZVwiLCBfMyBhcyBcImxhdW5jaEJ0blwiLCBfNCBhcyBcImxhdW5jaEJ0bkFjdGl2ZVwiIH1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBpc0V4dGVuc2lvbiA9ICgpID0+ICEhd2luZG93LmNocm9tZT8uZGV2dG9vbHM7XHJcbmV4cG9ydCBjb25zdCBjb3B5VmFsdWUgPSAodmFsdWUpID0+IHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcign5peg5rOV5aSN5Yi26Z2e5a2X56ym5Liy57G75Z6L5pWw5o2uJykpO1xyXG4gIH1cclxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IHZhbHVlO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG4gIHRleHRhcmVhLnNlbGVjdCgpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgaWYgKHN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVqZWN0KGUpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgfSlcclxufVxyXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgZGVsYXkpID0+IHtcclxuICBsZXQgdGltZXJJZDtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgaWYgKCF0aW1lcklkKSB7XHJcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRpbWVySWQgPSBudWxsO1xyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRDdXNGb3JtYXRUaW1lPSh0aW1lc3RhbXApID0+IHtcclxuICBjb25zdCB0aW1lPW5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcbiAgY29uc3QgZnVsbFllYXI9dGltZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoPVN0cmluZyh0aW1lLmdldE1vbnRoKCkrMSkucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgY29uc3QgZGF5PVN0cmluZyh0aW1lLmdldERhdGUoKSkucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgY29uc3QgaG91cj1TdHJpbmcodGltZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICBjb25zdCBtaW51dGU9U3RyaW5nKHRpbWUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICBjb25zdCBzZWNvbmQ9U3RyaW5nKHRpbWUuZ2V0U2Vjb25kcygpKS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICBjb25zdCBtU2Vjb25kPVN0cmluZyh0aW1lLmdldE1pbGxpc2Vjb25kcygpKS5wYWRTdGFydCgzLFwiMFwiKTtcclxuICByZXR1cm4gYCR7ZnVsbFllYXJ9LyR7bW9udGh9LyR7ZGF5fSAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH06JHttU2Vjb25kfWA7XHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicGFuZWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcnBjX2xvZ1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtycGNfbG9nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJyZWFjdF92ZW5kb3JzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hbnQtZGVzaWduX2ljb25zX2VzX2ljb25zX0V4cG9ydE91dGxpbmVkX2pzLW5vZGVfbW9kdWxlc19hbnQtZGVzaWduX2ljb24tYWNkMWYwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhbmVsLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJUb29sQmFyIiwiTG9nVGFibGUiLCJEZXRhaWxTaWRlciIsIlRhYiIsIkJhc2VEZXRhaWwiLCJSZXF1ZXN0RGV0YWlsIiwiUmVzcG9uc2VEZXRhaWwiLCJGaWx0ZXJCYXIiLCJ0aHJvdHRsZSIsIkRpdmlkZXIiLCJqc3giLCJfanN4IiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3hzIiwiX2pzeHMiLCJBcHAiLCJfdXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlcXVlc3RSZWNvcmQiLCJzZWxlY3RlZFJlY29yZCIsImlzT25GaWx0ZXJpbmciLCJvcmlnaW5SZXF1ZXN0TGlzdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzU2hvd1NpZGVyIiwic2V0SXNTaG93U2lkZXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImlzU2hvd0ZpbHRlckJhciIsInNldElzU2hvd0ZpbHRlckJhciIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidGFibGVXaWR0aCIsInNldFRhYmxlV2lkdGgiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNpZGVyV2lkdGgiLCJzZXRTaWRlcldpZHRoIiwibG9nVGFibGVXcmFwcGVyIiwic3BsaXRMaW5lIiwidGFiVmlld3MiLCJrZXkiLCJsYWJlbCIsImNoaWxkcmVuIiwidGFiQ2xpY2siLCJkaXNTaG93IiwicmVxdWVzdFR5cGUiLCJjb25zb2xlIiwibG9nIiwibG9nV3JhcHBlckhlaWdodCIsImNvdW50SW5mbyIsInRvdGFsIiwibGVuZ3RoIiwiZmV0Y2hDb3VudCIsInB1c2hDb3VudCIsImZvckVhY2giLCJpdGVtIiwiY2xvc2VEZXRhaWxTaWRlciIsInRhYmxlUm93Q2xpY2siLCJjdXJyZW50Iiwib2Zmc2V0V2lkdGgiLCJzcGxpdE1vdXNlRG93bkhhbmRsZXIiLCJlIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic3BsaXRNb3VzZU1vdmVIYW5kbGVyIiwiY2xpZW50WCIsInNwbGl0TW91c2VVcEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVzaXplSGFuZGxlciIsIm5ld1NpZGVyV2lkdGgiLCJ3aW5kb3ciLCJpc1Nob3ciLCJyZWYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImhlaWdodCIsInJvd0NsaWNrIiwicGFyZW50V3JhcHBlciIsIndpZHRoIiwib25DbG9zZSIsIkNoZWNrQ2lyY2xlRmlsbGVkIiwiQ2xvc2VDaXJjbGVGaWxsZWQiLCJFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCIsIkxvYWRpbmdPdXRsaW5lZCIsImdldEN1c0Zvcm1hdFRpbWUiLCJfcmVmIiwic3RhdGVNYXAiLCJzdGF0ZUljb25NYXAiLCJtYXJnaW5SaWdodCIsImNvbG9yIiwicmVxdWVzdF9uYW5vX2lkIiwicmVxdWVzdERldGFpbCIsInJlcUhlYWQiLCJyZXNwb25zZURldGFpbCIsImhlYWRlciIsInNlcnZpY2VfbmFtZSIsImZldGNoVGltZSIsInJlY2VpdmVUaW1lIiwidGltZUNvbnN1bWluZyIsImNvbmNhdCIsInJlcXVlc3RJZCIsInJlcXVlc3RTdGF0ZSIsIkNoZWNrVGFnIiwicHJvcHMiLCJ2YWx1ZSIsImNoZWNrZWQiLCJvbkNoZWNrIiwib25DbGljayIsIl9wcm9wcyRzdHlsZSIsImNsaWNrVGFnSGFuZGxlIiwiQ2hlY2tib3giLCJtZXNzYWdlIiwiT2JqZWN0SW5zcGVjdG9yIiwiY2hyb21lTGlnaHQiLCJjb3B5VmFsdWUiLCJKc29uVG9UUyIsIkRldGFpbFZpZXciLCJ0aXRsZSIsImRhdGFPYmoiLCJfbWVzc2FnZSR1c2VNZXNzYWdlIiwidXNlTWVzc2FnZSIsIl9tZXNzYWdlJHVzZU1lc3NhZ2UyIiwibWVzc2FnZUFwaSIsImNvbnRleHRIb2xkZXIiLCJpc1Nob3dKc29uIiwic2V0SXNTaG93SnNvbiIsImlzU2hvd0pzb25DaGFuZ2UiLCJjb3B5VG9Kc29uIiwic3RyVmFsdWUiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInN1Y2Nlc3MiLCJjb3B5VG9UcyIsImpvaW4iLCJvbkNoYW5nZSIsInVuZGVmaW5lZCIsImRhdGEiLCJleHBhbmRQYXRocyIsInRoZW1lIiwiX29iamVjdFNwcmVhZCIsIkJBU0VfRk9OVF9TSVpFIiwiVFJFRU5PREVfRk9OVF9TSVpFIiwiQkFTRV9GT05UX0ZBTUlMWSIsIlRSRUVOT0RFX0ZPTlRfRkFNSUxZIiwiSW5wdXQiLCJUb29sdGlwIiwidXNlRGlzcGF0Y2giLCJ1c2VJbW1lciIsInNldElzT25GaWx0ZXJpbmciLCJzZXRRdWVyeVBhcmFtZXRlciIsIlF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQiLCJxdWVyeVBhcmFtZXRlckNoYW5nZSIsImRpc3BhdGNoIiwicXVlcnlTdHIiLCJzZXRRdWVyeVN0ciIsInF1ZXJ5VHlwZSIsInNldFF1ZXJ5VHlwZSIsIl91c2VJbW1lciIsIl91c2VJbW1lcjIiLCJxdWVyeVBhcmFtZXRlck9iaiIsInNldFF1ZXJ5UGFyYW1ldGVyT2JqIiwicmVxVHlwZXMiLCJpc0VtcHR5UXVlcnlQYXJhbWV0ZXJPYmoiLCJxdWVyeURhdGEiLCJPYmplY3QiLCJrZXlzIiwiZXZlcnkiLCJxdWVyeVBhcmFtZXRlckNoYW5nZUhhbmRsZSIsInF1ZXJ5UGFyYW1ldGVyIiwiZmlsdGVySW5wdXRDaGFuZ2UiLCJ0YXJnZXQiLCJ0cmltIiwibmV3UXVlcnlQYXJhbWV0ZXJPYmoiLCJkcmFmdCIsImNoZWNrVGFnQ2hlY2tIYW5kbGUiLCJoZWxwVGV4dCIsImhlbHBUaXAiLCJwbGFjZW1lbnQiLCJyb290Q2xhc3NOYW1lIiwiYWxsb3dDbGVhciIsInBsYWNlaG9sZGVyIiwic3VmZml4IiwibWFwIiwibWFyZ2luTGVmdCIsInN0eWxlT2JqIiwiTGF1bmNoQnV0dG9uIiwiaXNSdW5uaW5nIiwicmVzdFByb3BzIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiX2V4Y2x1ZGVkIiwibGF1bmNoQnRuIiwibGF1bmNoQnRuQWN0aXZlIiwidXNlTGF5b3V0RWZmZWN0IiwiVGFibGUiLCJzZXRSZXF1ZXN0TGlzdCIsInB1c2hSZXF1ZXN0UmVjb3JkIiwicHVzaE1zZ1JlY29yZCIsInVwZGF0ZVJlcXVlc3RSZWNvcmQiLCJzZXRTZWxlY3RlZFJlY29yZCIsInJlc2V0UmVxdWVzdExpc3QiLCJwb3N0TWVzc2FnZVRvQmFja2dyb3VuZCIsInJlcXVlc3RSZWNvcmRDaGFuZ2UiLCJjbGVhckFsbFJlY29yZHNDaGFuZ2UiLCJQdWxsUmVxdWVzdE91dGxpbmVkIiwiU2VuZE91dGxpbmVkIiwic2VsZWN0ZWRSb3ciLCJzZXRTZWxlY3RlZFJvdyIsInRhYmxlU2Nyb2xsWSIsInNldFRhYmxlU2Nyb2xsWSIsInRhYmxlV3JhcHBlciIsInJlcXVlc3RMaXN0IiwiY29sdW1ucyIsImRhdGFJbmRleCIsInJlbmRlciIsInJlY29yZCIsImluZGV4IiwidHlwZSIsInJlcyIsInBheWxvYWREYXRhIiwiY2FuY2VsTGlzdGVuIiwibmV3UmVxdWVzdCIsImNsZWFyTGlzdGVuIiwicmVjb3JkcyIsInNjcm9sbEJvZHkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsVG8iLCJ0b3AiLCJzY3JvbGxIZWlnaHQiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY29udGVudFJlY3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsInJvd0NsYXNzTmFtZSIsInJvd0NsYXNzVGV4dCIsImlkIiwib25Sb3ciLCJldmVudCIsInJvd0hvdmVyIiwiZGF0YVNvdXJjZSIsInJvd0tleSIsInNpemUiLCJzY3JvbGwiLCJ5IiwicGFnaW5hdGlvbiIsInJlcURhdGEiLCJDbG9zZU91dGxpbmVkIiwiX3Byb3BzJG9uQ2xvc2UiLCJfcHJvcHMkaXNTaG93Q2xvc2VCdG4iLCJpc1Nob3dDbG9zZUJ0biIsInRhYkNsaWNrSGFuZGxlciIsInRhYkl0ZW0iLCJzZXRBY3RpdmVLZXkiLCJ2aWV3cyIsImZpbHRlciIsImFjdGl2ZUtleSIsImRpc3BsYXkiLCJFeHBvcnRPdXRsaW5lZCIsIkZpbHRlckZpbGxlZCIsIkZpbHRlck91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiU3RvcE91dGxpbmVkIiwiRHJvcGRvd24iLCJNb2RhbCIsInNldFJ1bm5pbmciLCJhcHBKc29uIiwiZmlsdGVyaW5nQ29sb3IiLCJzdGFydFJlY29yZCIsImNsZWFyQWxsUmVjb3JkIiwibWVudVByb3BzIiwiaXRlbXMiLCJpbmZvIiwiaWNvbiIsImNvbnRlbnQiLCJ2ZXJzaW9uIiwib2tUZXh0Iiwic2hvd0V4cG9ydERpYWxvZyIsImFsZXJ0Iiwicm90YXRlIiwibWVudSIsInRyaWdnZXIiLCJwcm9kdWNlIiwiYmFzZVNhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic3RhdGVDaGFuZ2UiLCJuZXh0U3RhdGUiLCJSZWFjdERvbSIsIlByb3ZpZGVyIiwic3RvcmUiLCJwYW5lbFBvcnRJbml0Iiwicm9vdCIsImNyZWF0ZVJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImlzRXh0ZW5zaW9uIiwicG9ydFRvQmFja2dyb3VuZCIsInRhYklkIiwiY2hyb21lIiwiZGV2dG9vbHMiLCJpbnNwZWN0ZWRXaW5kb3ciLCJydW50aW1lIiwiY29ubmVjdCIsIm5hbWUiLCJvbkRpc2Nvbm5lY3QiLCJhZGRMaXN0ZW5lciIsImVycm9yIiwiRXJyb3IiLCJtc2dQYXJhbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWVzc2FnZUNhbGxiYWNrIiwicG9ydCIsIm9uTWVzc2FnZSIsInJlbW92ZUxpc3RlbmVyIiwicG9zdE1lc3NhZ2UiLCJjYWxsYmFjayIsIm1lc3NhZ2VIYW5kbGVyIiwiY29uZmlndXJlU3RvcmUiLCJyZXF1ZXN0UmVjb3JkU2xpY2UiLCJyZWR1Y2VyIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJub3RSZXNwb25kZWRPZk9yaWdpbkluZGV4TWFwIiwiTWFwIiwibm90UmVzcG9uZGVkSW5kZXhNYXAiLCJmaWx0ZXJXaXRoUXVlcnlQYXJhbWV0ZXIiLCJuZXh0UmVxTGlzdCIsImluY2x1ZGVzIiwiaXNPbmVSZWNvcmRNYXRjaCIsInJlcUl0ZW0iLCJpc1JlcXVlc3RUeXBlTWF0Y2giLCJfcmVxSXRlbSRyZXNwb25zZURldGEiLCJyZWR1Y2VycyIsImFjdGlvbiIsInBheWxvYWQiLCJwdXNoIiwic2V0IiwiaGFzIiwiZ2V0IiwiZXJyb3JfaWQiLCJjbGVhciIsIl9yZXF1ZXN0UmVjb3JkU2xpY2UkYSIsImFjdGlvbnMiLCJfd2luZG93JGNocm9tZSIsInRleHRhcmVhIiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInNlbGVjdCIsInN1Y2Nlc3NmdWwiLCJleGVjQ29tbWFuZCIsInJlbW92ZUNoaWxkIiwiZnVuYyIsImRlbGF5IiwidGltZXJJZCIsImFwcGx5IiwiX3RoaXMiLCJhcmd1bWVudHMiLCJzZXRUaW1lb3V0IiwidGltZXN0YW1wIiwidGltZSIsIkRhdGUiLCJmdWxsWWVhciIsImdldEZ1bGxZZWFyIiwibW9udGgiLCJTdHJpbmciLCJnZXRNb250aCIsInBhZFN0YXJ0IiwiZGF5IiwiZ2V0RGF0ZSIsImhvdXIiLCJnZXRIb3VycyIsIm1pbnV0ZSIsImdldE1pbnV0ZXMiLCJzZWNvbmQiLCJnZXRTZWNvbmRzIiwibVNlY29uZCIsImdldE1pbGxpc2Vjb25kcyJdLCJzb3VyY2VSb290IjoiIn0=