/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"rpc-log","version":"1.0.0","description":"chrome插件，记录并管理electron中prc调用的请求和推送消息，提高开发调试效率","scripts":{"start":"cross-env NODE_ENV=development webpack serve","build":"cross-env NODE_ENV=production webpack","build:watch":"cross-env NODE_ENV=development webpack --watch"},"author":"fengjianxiong","private":true,"license":"ISC","dependencies":{"@ant-design/icons":"^5.3.7","@reduxjs/toolkit":"^2.2.6","antd":"^5.19.2","immer":"10.1.1","json-to-ts":"^2.1.0","react":"18.3.1","react-dom":"18.3.1","react-inspector":"6.0.2","react-redux":"9.1.2"},"devDependencies":{"@babel/core":"^7.24.7","@babel/preset-env":"^7.24.7","@babel/preset-react":"^7.24.7","@types/chrome":"^0.0.268","@types/node":"^22.10.2","babel-loader":"^9.1.3","copy-webpack-plugin":"^12.0.2","cross-env":"^7.0.3","css-loader":"^7.1.2","html-webpack-plugin":"^5.6.0","mini-css-extract-plugin":"^2.9.0","sass":"^1.85.1","sass-loader":"^16.0.5","style-loader":"^4.0.0","webpack":"^5.92.1","webpack-cli":"^5.1.4","webpack-dev-server":"^5.0.4"}}');

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
    className: "base-info-wrapped",
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
    dispatch((0,_store_request_record_slice__WEBPACK_IMPORTED_MODULE_4__.setIsOnFiltering)(isEmptyQueryParameterObj(queryParameter)));
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
    title: ' 请求 ID',
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
      } else if (record.requestType === 'NSG') {
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
    title: ' 类型 ',
    dataIndex: 'requestType',
    width: 50,
    render: function render(value) {
      return value === 'FETCH' ? ' 请求 ' : ' 推送 ';
    }
  }, {
    title: ' 状态 ',
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
      rowClassText = 'row-selected ${rowClassText}';
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


var RequestDetail = function RequestDetail(requestRecord) {
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
            className: activeKey === item.key ? 'tab-item tab-item.active' : 'tab-item',
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
      label: ' 关于 ',
      key: 'about'
    }],
    onClick: function onClick(e) {
      if (e.key === 'about') {
        antd__WEBPACK_IMPORTED_MODULE_8__["default"].info({
          title: ' 关于 ATUNetwork',
          icon: null,
          content: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            children: ["\u7248\u672C\u53F7\uFF1A", _package_json__WEBPACK_IMPORTED_MODULE_5__.version]
          }),
          okText: ' 确定 '
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
      if (item.requestDetail && queryStr === item.requestDetail.reqHead.service_name || queryStr === item.responseDetail.header.service.service_name) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0RBQXNEO1dBQ3RELHNDQUFzQyxpRUFBaUU7V0FDdkc7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxFQUFFO1dBQ0Y7V0FDQTs7Ozs7V0NWQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL0FwcC5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9jb21wb25lbnRzL0Jhc2VEZXRhaWwuanN4Iiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvY29tcG9uZW50cy9DaGVja1RhZy5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9jb21wb25lbnRzL0RldGFpbFNpZGVyLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvRGV0YWlsVmlldy5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9jb21wb25lbnRzL0ZpbHRlckJhci5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9jb21wb25lbnRzL0xhdW5jaEJ1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9jb21wb25lbnRzL0xvZ1RhYmxlLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvUmVxdWVzdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9jb21wb25lbnRzL1Jlc3BvbnNlRGV0YWlsLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvVGFiLmpzeCIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL2NvbXBvbmVudHMvdG9vbGJhci5qc3giLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3BhbmVsLmpzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvcGFuZWxfbWVzc2FnZS9wYW5lbF9wb3J0X2NyZWF0b3IuanMiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0b3JlL3JlcXVlc3RfcmVjb3JkX3NsaWNlLmpzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvc3R5bGVzL2FwcC5zY3NzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvc3R5bGVzL2Jhc2UtZGV0YWlsLnNjc3MiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9zdHlsZXMvY3NzcmVzZXQuY3NzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvc3R5bGVzL2RldGFpbC1zaWRlci5zY3NzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvc3R5bGVzL2ZpbHRlci1iYXIuc2NzcyIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0eWxlcy9sYXVuY2gtYnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvc3R5bGVzL3JlY29yZC1kZXRhaWwuc2NzcyIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0eWxlcy90YWIuc2NzcyIsIndlYnBhY2s6Ly9ycGMtbG9nLy4vc3JjL3N0eWxlcy90b29sLWJhci5zY3NzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvdXRpbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcnBjLWxvZy9pZ25vcmVkfEQ6XFxwcm9qZWN0XFxycGMtbG9nXFxub2RlX21vZHVsZXNcXG9iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Iiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvYW1kIG9wdGlvbnMiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvY3JlYXRlIGZha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvaGFybW9ueSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcnBjLWxvZy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xyXG5pbXBvcnQgJy4vc3R5bGVzL3JlY29yZC1kZXRhaWwuc2Nzcyc7XHJcblxyXG5pbXBvcnQge3VzZVN0YXRlLCB1c2VNZW1vLCB1c2VSZWYsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZVNlbGVjdG9yfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCBUb29sQmFyIGZyb20gJy4vY29tcG9uZW50cy90b29sYmFyJztcclxuaW1wb3J0IExvZ1RhYmxlIGZyb20gJy4vY29tcG9uZW50cy9Mb2dUYWJsZSc7XHJcbmltcG9ydCBEZXRhaWxTaWRlciBmcm9tICcuL2NvbXBvbmVudHMvRGV0YWlsU2lkZXInO1xyXG5pbXBvcnQgVGFiIGZyb20gJy4vY29tcG9uZW50cy9UYWInO1xyXG5pbXBvcnQgQmFzZURldGFpbCBmcm9tICcuL2NvbXBvbmVudHMvQmFzZURldGFpbCc7XHJcbmltcG9ydCBSZXF1ZXN0RGV0YWlsIGZyb20gJy4vY29tcG9uZW50cy9SZXF1ZXN0RGV0YWlsJztcclxuaW1wb3J0IFJlc3BvbnNlRGV0YWlsIGZyb20gJy4vY29tcG9uZW50cy9SZXNwb25zZURldGFpbCc7XHJcbmltcG9ydCBGaWx0ZXJCYXIgZnJvbSAnLi9jb21wb25lbnRzL0ZpbHRlckJhcic7XHJcbmltcG9ydCB7dGhyb3R0bGV9IGZyb20gJy4vdXRpbHMnO1xyXG5pbXBvcnQge0RpdmlkZXJ9IGZyb20gJ2FudGQnO1xyXG5cclxuY29uc3QgQXBwID0gKCkgPT4ge1xyXG4gIGNvbnN0IHtzZWxlY3RlZFJlY29yZCwgaXNPbkZpbHRlcmluZywgb3JpZ2luUmVxdWVzdExpc3R9ID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUucmVxdWVzdFJlY29yZDtcclxuICB9KTtcclxuICBjb25zdCBbaXNTaG93U2lkZXIsIHNldElzU2hvd1NpZGVyXSA9IHVzZVN0YXRlKGZhbHNlKTsgLy8g5piv5ZCm5bGV56S65Y+z5L6n6L655qCPXHJcbiAgY29uc3QgW2lzU2hvd0ZpbHRlckJhciwgc2V0SXNTaG93RmlsdGVyQmFyXSA9IHVzZVN0YXRlKHRydWUpOyAvLyDmmK/lkKblsZXnpLrov4fmu6Tmn6Xor6LmoI9cclxuICBjb25zdCBbdGFibGVXaWR0aCwgc2V0VGFibGVXaWR0aF0gPSB1c2VTdGF0ZSgnYXV0bycpOyAvL1xyXG4gIGNvbnN0IFtzaWRlcldpZHRoLCBzZXRTaWRlcldpZHRoXSA9IHVzZVN0YXRlKDQwMCk7IC8vXHJcbiAgY29uc3QgbG9nVGFibGVXcmFwcGVyID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IHNwbGl0TGluZSA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCB0YWJWaWV3cyA9IHNlbGVjdGVkUmVjb3JkID8gW1xyXG4gICAge1xyXG4gICAgICBrZXk6ICcxJyxcclxuICAgICAgbGFiZWw6ICfln7rmnKwnLFxyXG4gICAgICBjaGlsZHJlbjogPEJhc2VEZXRhaWwgcmVxdWVzdFJlY29yZD17c2VsZWN0ZWRSZWNvcmR9Lz4sXHJcbiAgICAgIHRhYkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGtleTogJzInLFxyXG4gICAgICBsYWJlbDogJ+ivt+axgicsXHJcbiAgICAgIGRpc1Nob3c6IHNlbGVjdGVkUmVjb3JkLnJlcXVlc3RUeXBlID09PSAnTVNHJyxcclxuICAgICAgY2hpbGRyZW46IDxSZXF1ZXN0RGV0YWlsIHJlcXVlc3RSZWNvcmQ9e3NlbGVjdGVkUmVjb3JkfS8+XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBrZXk6ICczJyxcclxuICAgICAgbGFiZWw6ICflk43lupQnLFxyXG4gICAgICBjaGlsZHJlbjogPFJlc3BvbnNlRGV0YWlsIHJlcXVlc3RSZWNvcmQ9e3NlbGVjdGVkUmVjb3JkfS8+XHJcbiAgICB9XHJcbiAgXSA6IFtdO1xyXG4gIGNvbnN0IGxvZ1dyYXBwZXJIZWlnaHQgPSB1c2VNZW1vKCgpID0+IGlzU2hvd0ZpbHRlckJhciA/ICdjYWxjKDEwMHZoIC0gODFweCknIDogJ2NhbGMoMTAwdmggLSA1MnB4KScsIFtpc1Nob3dGaWx0ZXJCYXJdKTtcclxuICBjb25zdCBjb3VudEluZm8gPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHRvdGFsID0gb3JpZ2luUmVxdWVzdExpc3QubGVuZ3RoO1xyXG4gICAgbGV0IGZldGNoQ291bnQgPSAwO1xyXG4gICAgbGV0IHB1c2hDb3VudCA9IDA7XHJcbiAgICBvcmlnaW5SZXF1ZXN0TGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgIGlmIChpdGVtLnJlcXVlc3RUeXBlID09PSAnRkVUQ0gnKSB7XHJcbiAgICAgICAgZmV0Y2hDb3VudCsrO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHB1c2hDb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvdGFsLCBmZXRjaENvdW50LCBwdXNoQ291bnRcclxuICAgIH07XHJcbiAgfSwgW29yaWdpblJlcXVlc3RMaXN0XSk7XHJcbiAgY29uc3QgY2xvc2VEZXRhaWxTaWRlciA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd1NpZGVyKGZhbHNlKTtcclxuICAgIHNldFRhYmxlV2lkdGgoJ2F1dG8nKTtcclxuICB9O1xyXG4gIGNvbnN0IHRhYmxlUm93Q2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Nob3dTaWRlcih0cnVlKTtcclxuICAgIHNldFRhYmxlV2lkdGgobG9nVGFibGVXcmFwcGVyLmN1cnJlbnQub2Zmc2V0V2lkdGggLSBzaWRlcldpZHRoKTtcclxuICB9O1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIXNlbGVjdGVkUmVjb3JkKSB7XHJcbiAgICAgIHNldElzU2hvd1NpZGVyKGZhbHNlKTtcclxuICAgICAgc2V0VGFibGVXaWR0aCgnYXV0bycpO1xyXG4gICAgfVxyXG4gIH0sIFtzZWxlY3RlZFJlY29yZF0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNTaG93U2lkZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3Qgc3BsaXRNb3VzZURvd25IYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc3BsaXRNb3VzZU1vdmVIYW5kbGVyKTtcclxuICAgIH07XHJcbiAgICBjb25zdCBzcGxpdE1vdXNlTW92ZUhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBzZXRTaWRlcldpZHRoKGxvZ1RhYmxlV3JhcHBlci5jdXJyZW50Lm9mZnNldFdpZHRoIC0gZS5jbGllbnRYKTtcclxuICAgICAgc2V0VGFibGVXaWR0aChlLmNsaWVudFgpO1xyXG4gICAgfTtcclxuICAgIGNvbnN0IHNwbGl0TW91c2VVcEhhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzcGxpdE1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgfTtcclxuICAgIHNwbGl0TGluZS5jdXJyZW50ICYmIHNwbGl0TGluZS5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNwbGl0TW91c2VEb3duSGFuZGxlcik7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3BsaXRNb3VzZVVwSGFuZGxlcik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzcGxpdE1vdXNlTW92ZUhhbmRsZXIpO1xyXG4gICAgICBzcGxpdExpbmUuY3VycmVudCAmJiBzcGxpdExpbmUuY3VycmVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzcGxpdE1vdXNlRG93bkhhbmRsZXIpO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgc3BsaXRNb3VzZVVwSGFuZGxlcik7XHJcbiAgICB9O1xyXG4gIH0sIFtpc1Nob3dTaWRlcl0pO1xyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoaXNTaG93U2lkZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcmVzaXplSGFuZGxlciA9IHRocm90dGxlKCgpID0+IHtcclxuICAgICAgY29uc3QgbmV3U2lkZXJXaWR0aCA9IGxvZ1RhYmxlV3JhcHBlci5jdXJyZW50Lm9mZnNldFdpZHRoIC0gdGFibGVXaWR0aDtcclxuICAgICAgaWYgKG5ld1NpZGVyV2lkdGggPCAzODApIHtcclxuICAgICAgICBzZXRUYWJsZVdpZHRoKGxvZ1RhYmxlV3JhcHBlci5jdXJyZW50Lm9mZnNldFdpZHRoIC0gMzgwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRTaWRlcldpZHRoKG5ld1NpZGVyV2lkdGgpO1xyXG4gICAgICB9XHJcbiAgICB9LCAyNTApO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlc2l6ZUhhbmRsZXIpO1xyXG4gICAgfTtcclxuICB9LCBbaXNTaG93U2lkZXIsIHRhYmxlV2lkdGhdKTtcclxuICByZXR1cm4gPD5cclxuICAgIDxUb29sQmFyXHJcbiAgICAgIGlzU2hvd0ZpbHRlckJhcj17aXNTaG93RmlsdGVyQmFyfVxyXG4gICAgICBzZXRJc1Nob3dGaWx0ZXJCYXI9e3NldElzU2hvd0ZpbHRlckJhcn1cclxuICAgICAgaXNPbkZpbHRlcmluZz17aXNPbkZpbHRlcmluZ31cclxuICAgIC8+XHJcbiAgICA8RmlsdGVyQmFyIGlzU2hvdz17aXNTaG93RmlsdGVyQmFyfS8+XHJcbiAgICA8ZGl2IHJlZj17bG9nVGFibGVXcmFwcGVyfSBjbGFzc05hbWU9XCJyZXEtbG9nLXdyYXBwZXJcIiBzdHlsZT17e2hlaWdodDogbG9nV3JhcHBlckhlaWdodH19PlxyXG4gICAgICA8TG9nVGFibGUgcm93Q2xpY2s9e3RhYmxlUm93Q2xpY2t9IHBhcmVudFdyYXBwZXI9e2xvZ1RhYmxlV3JhcHBlci5jdXJyZW50fSB0YWJsZVdpZHRoPXt0YWJsZVdpZHRofS8+XHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RlZFJlY29yZCAmJiBpc1Nob3dTaWRlclxyXG4gICAgICAgICYmXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BsaXQtbGluZVwiIHJlZj17c3BsaXRMaW5lfT48L2Rpdj5cclxuICAgICAgICAgIDxEZXRhaWxTaWRlciB3aWR0aD17c2lkZXJXaWR0aH0+XHJcbiAgICAgICAgICAgIDxUYWIgdGFiVmlld3M9e3RhYlZpZXdzfSBvbkNsb3NlPXtjbG9zZURldGFpbFNpZGVyfS8+XHJcbiAgICAgICAgICA8L0RldGFpbFNpZGVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICA8Lz47XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuIiwiaW1wb3J0ICcuLi9zdHlsZXMvYmFzZS1kZXRhaWwuc2Nzcyc7XHJcbmltcG9ydCB7Q2hlY2tDaXJjbGVGaWxsZWQsIENsb3NlQ2lyY2xlRmlsbGVkLCBFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCwgTG9hZGluZ091dGxpbmVkfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7dXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge2dldEN1c0Zvcm1hdFRpbWV9IGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmNvbnN0IEJhc2VEZXRhaWwgPSAoe3JlcXVlc3RSZWNvcmR9KSA9PiB7XHJcbiAgaWYgKCFyZXF1ZXN0UmVjb3JkKSB7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcbiAgY29uc3Qgc3RhdGVNYXAgPSB7XHJcbiAgICAnLTEnOiAnIOetieW+heWTjeW6lCAnLFxyXG4gICAgMDogJyDmiJDlip8gJyxcclxuICAgIDE6ICcg5aSx6LSlICcsXHJcbiAgICAyOiAnIOacquWkhOeQhiAnXHJcbiAgfTtcclxuICBjb25zdCBzdGF0ZUljb25NYXAgPSB7XHJcbiAgICAnLTEnOiA8TG9hZGluZ091dGxpbmVkIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDJ9fS8+LFxyXG4gICAgMDogPENoZWNrQ2lyY2xlRmlsbGVkIHN0eWxlPXt7Y29sb3I6IFwiIzUyYzE0YVwiLCBtYXJnaW5SaWdodDogMn19Lz4sXHJcbiAgICAxOiA8Q2xvc2VDaXJjbGVGaWxsZWQgc3R5bGU9e3tjb2xvcjogXCIjZmY0ZDRmXCIsIG1hcmdpblJpZ2h0OiAyfX0vPixcclxuICAgIDI6IDxFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCBzdHlsZT17e2NvbG9yOiBcIiNmYWFkMTRcIiwgbWFyZ2luUmlnaHQ6IDJ9fS8+XHJcbiAgfTtcclxuICBjb25zdCByZXF1ZXN0X25hbm9faWQgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZXF1ZXN0UmVjb3JkLnJlcXVlc3REZXRhaWwpIHtcclxuICAgICAgcmV0dXJuIHJlcXVlc3RSZWNvcmQucmVxdWVzdERldGFpbC5yZXFIZWFkLnJlcXVlc3RfbmFub19pZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsLmhlYWRlci5yZXF1ZXN0X25hbm9faWQ7XHJcbiAgICB9XHJcbiAgfSwgW3JlcXVlc3RSZWNvcmRdKTtcclxuICBjb25zdCBzZXJ2aWNlX25hbWUgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZXF1ZXN0UmVjb3JkLnJlcXVlc3REZXRhaWwpIHtcclxuICAgICAgcmV0dXJuIHJlcXVlc3RSZWNvcmQucmVxdWVzdERldGFpbC5yZXFIZWFkLnNlcnZpY2VfbmFtZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiByZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsLmhlYWRlci5zZXJ2aWNlX25hbWU7XHJcbiAgICB9XHJcbiAgfSwgW3JlcXVlc3RSZWNvcmRdKTtcclxuICBjb25zdCBmZXRjaFRpbWUgPSB1c2VNZW1vKCgpID0+IHJlcXVlc3RSZWNvcmQuZmV0Y2hUaW1lID8gZ2V0Q3VzRm9ybWF0VGltZShyZXF1ZXN0UmVjb3JkLmZldGNoVGltZSkgOiAnJywgW3JlcXVlc3RSZWNvcmRdKTtcclxuICBjb25zdCByZWNlaXZlVGltZSA9IHVzZU1lbW8oKCkgPT4gcmVxdWVzdFJlY29yZC5yZWNlaXZlVGltZSA/IGdldEN1c0Zvcm1hdFRpbWUocmVxdWVzdFJlY29yZC5yZWNlaXZlVGltZSkgOiAnJywgW3JlcXVlc3RSZWNvcmRdKVxyXG4gIGNvbnN0IHRpbWVDb25zdW1pbmcgPSB1c2VNZW1vKCgpID0+IHtcclxuICAgIGlmIChyZXF1ZXN0UmVjb3JkLmZldGNoVGltZSAmJiByZXF1ZXN0UmVjb3JkLnJlY2VpdmVUaW1lKSB7XHJcbiAgICAgIHJldHVybiBgJHtyZXF1ZXN0UmVjb3JkLnJlY2VpdmVUaW1lIC0gcmVxdWVzdFJlY29yZC5mZXRjaFRpbWV95q+r56eSYFxyXG4gICAgfVxyXG4gICAgcmV0dXJuICcnO1xyXG4gIH0sIFtyZXF1ZXN0UmVjb3JkXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiYXNlLWluZm8td3JhcHBlZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHkta2V5XCI+cmVxdWVzdF9uYW5vX2lkPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS12YWx1ZVwiPntyZXF1ZXN0X25hbm9faWR9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHkta2V5XCI+5pyN5Yqh5qih5Z2XPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS12YWx1ZVwiPntzZXJ2aWNlX25hbWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHkta2V5XCI+6K+35rGCSUQ8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXZhbHVlXCI+e3JlcXVlc3RSZWNvcmQucmVxdWVzdElkfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LWtleVwiPueKtuaAgTwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInByb3BlcnR5LXZhbHVlXCI+e3N0YXRlSWNvbk1hcFtyZXF1ZXN0UmVjb3JkLnJlcXVlc3RTdGF0ZV19e3N0YXRlTWFwW3JlcXVlc3RSZWNvcmQucmVxdWVzdFN0YXRlXX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktcm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1rZXlcIj7nsbvlnos8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXZhbHVlXCI+e3JlcXVlc3RSZWNvcmQucmVxdWVzdFR5cGUgPT09ICdGRVRDSCcgPyAn6K+35rGCJyA6ICfmjqjpgIEnfTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge1xyXG4gICAgICAgIHJlcXVlc3RSZWNvcmQucmVxdWVzdFR5cGUgPT09ICdGRVRDSCdcclxuICAgICAgICAmJlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktcm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LWtleVwiPuivt+axguaXtumXtDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS12YWx1ZVwiPntmZXRjaFRpbWV9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1yb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LWtleVwiPui/lOWbnuaXtumXtDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHktdmFsdWVcIj57cmVjZWl2ZVRpbWV9PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7XHJcbiAgICAgICAgcmVxdWVzdFJlY29yZC5yZXF1ZXN0VHlwZSA9PT0gJ0ZFVENIJ1xyXG4gICAgICAgICYmXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9wZXJ0eS1yb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvcGVydHkta2V5XCI+6K+35rGC6ICX5pe2PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb3BlcnR5LXZhbHVlXCI+e3RpbWVDb25zdW1pbmd9PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEJhc2VEZXRhaWw7XHJcbiIsImNvbnN0IENoZWNrVGFnID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2xhYmVsLCB2YWx1ZSwgY2hlY2tlZCwgb25DaGVjaywgb25DbGljaywgc3R5bGU9e319PXByb3BzO1xyXG4gIGNvbnN0IGNsaWNrVGFnSGFuZGxlPSgpPT57XHJcbiAgICBvbkNoZWNrKHZhbHVlKTtcclxuICAgIG9uQ2xpY2sgJiYgb25DbGljayh7bGFiZWwsIHZhbHVlLGNoZWNrZWR9KTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgc3R5bGU9e3N0eWxlfSBjbGFzc05hbWU9e2NoZWNrZWQ/J2NoZWNrLXRhZyBjaGVja2VkJzonY2hlY2stdGFnJ30gb25DbGljaz17Y2xpY2tUYWdIYW5kbGV9PntsYWJlbH08L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENoZWNrVGFnO1xyXG4iLCJpbXBvcnQgJy4uL3N0eWxlcy9kZXRhaWwtc2lkZXIuc2Nzcyc7XHJcbmNvbnN0IERldGFpbFNpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3dpZHRofSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3QtZGV0YWlsLXNpZGVyXCIgc3R5bGU9e3t3aWR0aH19PlxyXG4gICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsU2lkZXI7XHJcbiIsImltcG9ydCB7Q2hlY2tib3gsIG1lc3NhZ2V9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge09iamVjdEluc3BlY3RvciwgY2hyb21lTGlnaHR9IGZyb20gJ3JlYWN0LWluc3BlY3Rvcic7XHJcbmltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHtjb3B5VmFsdWV9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IEpzb25Ub1RTIGZyb20gJ2pzb24tdG8tdHMnO1xyXG5cclxuY29uc3QgRGV0YWlsVmlldyA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHt0aXRsZSwgZGF0YU9ian0gPSBwcm9wcztcclxuICBjb25zdCBbbWVzc2FnZUFwaSwgY29udGV4dEhvbGRlcl0gPSBtZXNzYWdlLnVzZU1lc3NhZ2UoKTtcclxuICBjb25zdCBbaXNTaG93SnNvbiwgc2V0SXNTaG93SnNvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgaXNTaG93SnNvbkNoYW5nZSA9ICgpID0+IHtcclxuICAgIHNldElzU2hvd0pzb24oIWlzU2hvd0pzb24pO1xyXG4gIH07XHJcbiAgY29uc3QgY29weVRvSnNvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHN0clZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZGF0YU9iaik7XHJcbiAgICBjb3B5VmFsdWUoc3RyVmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICBtZXNzYWdlQXBpLnN1Y2Nlc3MoJ+aIkOWKn+WkjeWItkpTT07liLDliarotLTmnb/vvIEnKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY29weVRvVHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzdHJWYWx1ZSA9IEpzb25Ub1RTKGRhdGFPYmopLmpvaW4oJ1xcbicpO1xyXG4gICAgY29weVZhbHVlKHN0clZhbHVlKS50aGVuKCgpID0+IHtcclxuICAgICAgbWVzc2FnZUFwaS5zdWNjZXNzKCfmiJDlip/lpI3liLZUc+WIsOWJqui0tOadv++8gScpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge2NvbnRleHRIb2xkZXJ9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbS1kZXRhaWwtdGl0bGVcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXIxNVwiPnt0aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8Q2hlY2tib3ggY2hlY2tlZD17aXNTaG93SnNvbn0gb25DaGFuZ2U9e2lzU2hvd0pzb25DaGFuZ2V9PkpTT048L0NoZWNrYm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3BlcmF0ZS1ncm91cFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1idG5cIiBzdHlsZT17e21hcmdpblJpZ2h0OiA1fX0gb25DbGljaz17Y29weVRvSnNvbn0+5aSN5Yi25Li6SlNPTjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbC1idG5cIiBvbkNsaWNrPXtjb3B5VG9Uc30+5aSN5Yi25Li6VFPnsbvlnos8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVnLWhlYWRlclwiPlxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlzU2hvd0pzb25cclxuICAgICAgICAgICAgPyA8cHJlPntKU09OLnN0cmluZ2lmeShkYXRhT2JqLCB1bmRlZmluZWQsIDIpfTwvcHJlPlxyXG4gICAgICAgICAgICA6IDxPYmplY3RJbnNwZWN0b3JcclxuICAgICAgICAgICAgICBkYXRhPXtkYXRhT2JqfVxyXG4gICAgICAgICAgICAgIGV4cGFuZFBhdGhzPXtbJyQnLCAnLiQuZGF0YSddfVxyXG4gICAgICAgICAgICAgIHRoZW1lPXt7XHJcbiAgICAgICAgICAgICAgICAuLi5jaHJvbWVMaWdodCxcclxuICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgQkFTRV9GT05UX1NJWkU6ICcxNHB4JyxcclxuICAgICAgICAgICAgICAgICAgVFJFRU5PREVfRk9OVF9TSVpFOiAnMTRweCcsXHJcbiAgICAgICAgICAgICAgICAgIEJBU0VfRk9OVF9GQU1JTFk6ICdDb25zb2xhcywgTWVubG8sIG1vbm9zcGFjZSwgTWljcm9zb2Z0IFlhSGVpJyxcclxuICAgICAgICAgICAgICAgICAgVFJFRU5PREVfRk9OVF9GQU1JTFk6ICdDb25zb2xhcywgTWVubG8sIG1vbm9zcGFjZSwgTWljcm9zb2Z0IFlhSGVpJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxWaWV3O1xyXG4iLCJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7SW5wdXQsIFRvb2x0aXB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNofSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7dXNlSW1tZXJ9IGZyb20gJy4uL2hvb2tzJztcclxuaW1wb3J0IENoZWNrVGFnIGZyb20gJy4vQ2hlY2tUYWcnO1xyXG5pbXBvcnQgJy4uL3N0eWxlcy9maWx0ZXItYmFyLnNjc3MnO1xyXG5pbXBvcnQge3NldElzT25GaWx0ZXJpbmcsIHNldFF1ZXJ5UGFyYW1ldGVyfSBmcm9tICcuLi9zdG9yZS9yZXF1ZXN0X3JlY29yZF9zbGljZSc7XHJcbmltcG9ydCB7UXVlc3Rpb25DaXJjbGVPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5cclxuY29uc3QgRmlsdGVyQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBxdWVyeVBhcmFtZXRlckNoYW5nZSwgaXNTaG93IH0gPSBwcm9wcztcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoICgpO1xyXG4gIGNvbnN0IFtxdWVyeVN0ciwgc2V0UXVlcnlTdHJdID0gdXNlU3RhdGUgKCcnKTtcclxuICBjb25zdCBbcXVlcnlUeXBlLCBzZXRRdWVyeVR5cGVdID0gdXNlU3RhdGUgKCcnKTtcclxuICBjb25zdCBbcXVlcnlQYXJhbWV0ZXJPYmosIHNldFF1ZXJ5UGFyYW1ldGVyT2JqXSA9IHVzZUltbWVyICh7IHF1ZXJ5U3RyLCBxdWVyeVR5cGUgfSk7XHJcbiAgY29uc3QgcmVxVHlwZXMgPSBbXHJcbiAgICB7IGxhYmVsOiAnQWxsJywgdmFsdWU6ICcnIH0sXHJcbiAgICB7IGxhYmVsOiAnIOivt+axgiAnLCB2YWx1ZTogJ0ZFVENIJyB9LFxyXG4gICAgeyBsYWJlbDogJyDmjqjpgIEgJywgdmFsdWU6ICdNU0cnIH1cclxuICBdO1xyXG4gIGNvbnN0IGlzRW1wdHlRdWVyeVBhcmFtZXRlck9iaiA9IChxdWVyeURhdGEpID0+IE9iamVjdC5rZXlzIChxdWVyeURhdGEpLmV2ZXJ5IChrZXkgPT4gcXVlcnlEYXRhIFtrZXldID09PSAnJyk7XHJcbiAgY29uc3QgcXVlcnlQYXJhbWV0ZXJDaGFuZ2VIYW5kbGUgPSAocXVlcnlQYXJhbWV0ZXIpID0+IHtcclxuICAgIGRpc3BhdGNoIChzZXRJc09uRmlsdGVyaW5nIChpc0VtcHR5UXVlcnlQYXJhbWV0ZXJPYmogKHF1ZXJ5UGFyYW1ldGVyKSkpO1xyXG4gICAgZGlzcGF0Y2ggKHNldFF1ZXJ5UGFyYW1ldGVyIChxdWVyeVBhcmFtZXRlcikpO1xyXG4gICAgcXVlcnlQYXJhbWV0ZXJDaGFuZ2UgJiYgcXVlcnlQYXJhbWV0ZXJDaGFuZ2UgKHF1ZXJ5UGFyYW1ldGVyKTtcclxuICB9O1xyXG4gIGNvbnN0IGZpbHRlcklucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWUudHJpbSAoKTtcclxuICAgIGlmICh2YWx1ZSE9PSBxdWVyeVN0cikge1xyXG4gICAgICBzZXRRdWVyeVN0ciAodmFsdWUpO1xyXG4gICAgICBjb25zdCBuZXdRdWVyeVBhcmFtZXRlck9iaiA9IHNldFF1ZXJ5UGFyYW1ldGVyT2JqICgoZHJhZnQpID0+IHtcclxuICAgICAgICBkcmFmdC5xdWVyeVN0ciA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcXVlcnlQYXJhbWV0ZXJDaGFuZ2VIYW5kbGUgKG5ld1F1ZXJ5UGFyYW1ldGVyT2JqKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbnN0IGNoZWNrVGFnQ2hlY2tIYW5kbGUgPSAodmFsdWUpID0+IHtcclxuICAgIGlmIChxdWVyeVR5cGUhPT0gdmFsdWUpIHtcclxuICAgICAgc2V0UXVlcnlUeXBlICh2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IG5ld1F1ZXJ5UGFyYW1ldGVyT2JqID0gc2V0UXVlcnlQYXJhbWV0ZXJPYmogKChkcmFmdCkgPT4ge1xyXG4gICAgICAgIGRyYWZ0LnF1ZXJ5VHlwZSA9IHZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgICAgcXVlcnlQYXJhbWV0ZXJDaGFuZ2VIYW5kbGUgKG5ld1F1ZXJ5UGFyYW1ldGVyT2JqKTtcclxuICAgIH1cclxuICB9XHJcbiAgY29uc3QgaGVscFRleHQgPSBg5p+l6K+i6K+05piO77ya5L6d5qyh5oyJ54Wn5LyY5YWI57qn4pGg6K+35rGCSUTjgIHikaHmnI3liqHlkI3jgIHikaLlk43lupTmlbDmja7ljLnphY3mn6Xor6LvvIzmnInnu5PmnpzljbPlgZzmraLlkI7nu63nmoTljLnphY1gO1xyXG4gIGNvbnN0IGhlbHBUaXAgPSA8VG9vbHRpcCBwbGFjZW1lbnQ9XCJyaWdodFwiIHRpdGxlPXtoZWxwVGV4dH0+PFF1ZXN0aW9uQ2lyY2xlT3V0bGluZWQvPjwvVG9vbHRpcD47XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtpc1Nob3c/ICdmaWx0ZXItYmFyJyA6ICdkb20taGlkZGVuJ30+XHJcbiAgICAgIDxJbnB1dFxyXG4gICAgICAgIHZhbHVlPXtxdWVyeVN0cn1cclxuICAgICAgICByb290Q2xhc3NOYW1lPVwiZmlsdGVyLWlucHV0XCJcclxuICAgICAgICBhbGxvd0NsZWFyXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJGaWx0ZXJcIlxyXG4gICAgICAgIHN1ZmZpeD17aGVscFRpcH1cclxuICAgICAgICBvbkNoYW5nZT17ZmlsdGVySW5wdXRDaGFuZ2V9XHJcbiAgICAgIC8+XHJcbiAgICAgIHtcclxuICAgICAgICByZXFUeXBlcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxDaGVja1RhZ1xyXG4gICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cclxuICAgICAgICAgICAgdmFsdWU9e2l0ZW0udmFsdWV9XHJcbiAgICAgICAgICAgIGtleT17aXRlbS52YWx1ZX1cclxuICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luTGVmdDogNSB9fVxyXG4gICAgICAgICAgICBjaGVja2VkPXtpdGVtLnZhbHVlID09PSBxdWVyeVR5cGV9XHJcbiAgICAgICAgICAgIG9uQ2hlY2s9e2NoZWNrVGFnQ2hlY2tIYW5kbGV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEZpbHRlckJhcjtcclxuIiwiaW1wb3J0ICogYXMgc3R5bGVPYmogZnJvbSAnLi4vc3R5bGVzL2xhdW5jaC1idXR0b24ubW9kdWxlLnNjc3MnO1xyXG5jb25zdCBMYXVuY2hCdXR0b24gPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGlzUnVubmluZywgb25DbGljaywgLi4ucmVzdFByb3BzIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2lzUnVubmluZz8gYCR7c3R5bGVPYmoubGF1bmNoQnRufSAke3N0eWxlT2JqLmxhdW5jaEJ0bkFjdGl2ZX1gIDogc3R5bGVPYmoubGF1bmNoQnRuIH1cclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgey4uLnJlc3RQcm9wc31cclxuICAgIC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExhdW5jaEJ1dHRvbjtcclxuIiwiaW1wb3J0IHt1c2VFZmZlY3QsIHVzZVN0YXRlLCB1c2VSZWYsIHVzZUxheW91dEVmZmVjdH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge1RhYmxlfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IHt1c2VEaXNwYXRjaCwgdXNlU2VsZWN0b3J9IGZyb20gJ3JlYWN0LXJlZHV4JztcclxuaW1wb3J0IHtcclxuICBzZXRSZXF1ZXN0TGlzdCxcclxuICBwdXNoUmVxdWVzdFJlY29yZCxcclxuICBwdXNoTXNnUmVjb3JkLFxyXG4gIHVwZGF0ZVJlcXVlc3RSZWNvcmQsXHJcbiAgc2V0U2VsZWN0ZWRSZWNvcmQsXHJcbiAgcmVzZXRSZXF1ZXN0TGlzdFxyXG59IGZyb20gJy4uL3N0b3JlL3JlcXVlc3RfcmVjb3JkX3NsaWNlJztcclxuaW1wb3J0IHtcclxuICBwb3N0TWVzc2FnZVRvQmFja2dyb3VuZCxcclxuICByZXF1ZXN0UmVjb3JkQ2hhbmdlLFxyXG4gIGNsZWFyQWxsUmVjb3Jkc0NoYW5nZVxyXG59IGZyb20gJy4uL3BhbmVsX21lc3NhZ2UvcGFuZWxfcG9ydF9jcmVhdG9yJztcclxuaW1wb3J0IHtcclxuICBDaGVja0NpcmNsZUZpbGxlZCxcclxuICBDbG9zZUNpcmNsZUZpbGxlZCxcclxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGxlZCxcclxuICBMb2FkaW5nT3V0bGluZWQsXHJcbiAgUHVsbFJlcXVlc3RPdXRsaW5lZCxcclxuICBTZW5kT3V0bGluZWRcclxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcblxyXG5jb25zdCBMb2dUYWJsZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtyb3dDbGljaywgcGFyZW50V3JhcHBlciwgdGFibGVXaWR0aH0gPSBwcm9wcztcclxuICBjb25zdCBbc2VsZWN0ZWRSb3csIHNldFNlbGVjdGVkUm93XSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbdGFibGVTY3JvbGxZLCBzZXRUYWJsZVNjcm9sbFldID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgdGFibGVXcmFwcGVyID0gdXNlUmVmKCk7XHJcbiAgY29uc3QgcmVxdWVzdExpc3QgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKCdzdGF0ZScsIHN0YXRlKTtcclxuICAgIHJldHVybiBzdGF0ZS5yZXF1ZXN0UmVjb3JkLnJlcXVlc3RMaXN0O1xyXG4gIH0pO1xyXG4gIGNvbnN0IHNlbGVjdGVkUmVjb3JkID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gc3RhdGUucmVxdWVzdFJlY29yZC5zZWxlY3RlZFJlY29yZDtcclxuICB9KTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgY29sdW1ucyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICcg6K+35rGCIElEJyxcclxuICAgICAgZGF0YUluZGV4OiAncmVxdWVzdElkJyxcclxuICAgICAgcmVuZGVyOiAodmFsdWUsIHJlY29yZCwgaW5kZXgpID0+IHtcclxuICAgICAgICBpZiAocmVjb3JkLnJlcXVlc3RUeXBlID09PSAnRkVUQ0gnKSB7XHJcbiAgICAgICAgICByZXR1cm4gKDxkaXY+PFB1bGxSZXF1ZXN0T3V0bGluZWQgc3R5bGU9e3ttYXJnaW5SaWdodDogNSwgY29sb3I6ICcjMWI2ZWYzJ319Lz57dmFsdWV9PC9kaXY+KTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC5yZXF1ZXN0VHlwZSA9PT0gJ05TRycpIHtcclxuICAgICAgICAgIHJldHVybiAoPGRpdj48U2VuZE91dGxpbmVkIHN0eWxlPXt7bWFyZ2luUmlnaHQ6IDUsIGNvbG9yOiAnI2M1ODhmMCd9fS8+e3ZhbHVlfTwvZGl2Pik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAge3RpdGxlOiAnIOexu+WeiyAnLCBkYXRhSW5kZXg6ICdyZXF1ZXN0VHlwZScsIHdpZHRoOiA1MCwgcmVuZGVyOiB2YWx1ZSA9PiB2YWx1ZSA9PT0gJ0ZFVENIJyA/ICcg6K+35rGCICcgOiAnIOaOqOmAgSAnfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICcg54q25oCBICcsIC8vLTE6IOetieW+heS4rSAwOiDmiJDlip8gMTog5aSx6LSlIDI6IOacquWkhOeQhu+8iOWPqumSiOWvuea2iOaBr+aOqOmAge+8iVxyXG4gICAgICBkYXRhSW5kZXg6ICdyZXF1ZXN0U3RhdGUnLFxyXG4gICAgICB3aWR0aDogMTAwLFxyXG4gICAgICByZW5kZXI6IHZhbHVlID0+IHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IC0xKSB7XHJcbiAgICAgICAgICByZXR1cm4gPExvYWRpbmdPdXRsaW5lZC8+O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzdGF0ZU1hcCA9IHtcclxuICAgICAgICAgIDA6ICcg5oiQ5YqfICcsXHJcbiAgICAgICAgICAxOiAnIOWksei0pSAnLFxyXG4gICAgICAgICAgMjogJyDmnKrlpITnkIYgJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3Qgc3RhdGVJY29uTWFwID0ge1xyXG4gICAgICAgICAgMDogPENoZWNrQ2lyY2xlRmlsbGVkIHN0eWxlPXt7Y29sb3I6ICcjNTJjMWNhJywgbWFyZ2luUmlnaHQ6IDJ9fS8+LFxyXG4gICAgICAgICAgMTogPENsb3NlQ2lyY2xlRmlsbGVkIHN0eWxlPXt7Y29sb3I6ICcjZmY0ZDRmJywgbWFyZ2luUmlnaHQ6IDJ9fS8+LFxyXG4gICAgICAgICAgMjogPEV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkIHN0eWxlPXt7Y29sb3I6ICcjZmFhZDE0JywgbWFyZ2luUmlnaHQ6IDJ9fS8+XHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4gPHNwYW4+e3N0YXRlSWNvbk1hcFt2YWx1ZV19e3N0YXRlTWFwW3ZhbHVlXX08L3NwYW4+O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgXTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgcG9zdE1lc3NhZ2VUb0JhY2tncm91bmQoe3R5cGU6ICdnZXQtcmVxLXJlY29yZHMnfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRSZXF1ZXN0TGlzdChyZXMucGF5bG9hZERhdGEpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGNhbmNlbExpc3RlbiA9IHJlcXVlc3RSZWNvcmRDaGFuZ2UoKG5ld1JlcXVlc3QpID0+IHtcclxuICAgICAgaWYgKG5ld1JlcXVlc3QucmVxdWVzdFR5cGUgPT09ICdGRVRDSCcpIHtcclxuICAgICAgICBpZiAobmV3UmVxdWVzdC5yZXF1ZXN0U3RhdGUgPT09IC0xKSB7XHJcbiAgICAgICAgICBkaXNwYXRjaChwdXNoUmVxdWVzdFJlY29yZChuZXdSZXF1ZXN0KSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRpc3BhdGNoKHVwZGF0ZVJlcXVlc3RSZWNvcmQobmV3UmVxdWVzdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChuZXdSZXF1ZXN0LnJlcXVlc3RUeXBlID09PSAnTVNHJykge1xyXG4gICAgICAgIGRpc3BhdGNoKHB1c2hNc2dSZWNvcmQobmV3UmVxdWVzdCkpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNsZWFyTGlzdGVuID0gY2xlYXJBbGxSZWNvcmRzQ2hhbmdlKChyZWNvcmRzKSA9PiB7XHJcbiAgICAgIGRpc3BhdGNoKHJlc2V0UmVxdWVzdExpc3QocmVjb3JkcykpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBjYW5jZWxMaXN0ZW4oKTtcclxuICAgICAgY2xlYXJMaXN0ZW4oKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodGFibGVXcmFwcGVyLmN1cnJlbnQpIHtcclxuICAgICAgY29uc3Qgc2Nyb2xsQm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FudC10YWJsZS1ib2R5JylbMF07XHJcbiAgICAgIGlmIChzY3JvbGxCb2R5ICYmICFzZWxlY3RlZFJlY29yZCkge1xyXG4gICAgICAgIHNjcm9sbEJvZHkuc2Nyb2xsVG8oe3RvcDogc2Nyb2xsQm9keS5zY3JvbGxIZWlnaHR9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIFtyZXF1ZXN0TGlzdCwgc2VsZWN0ZWRSb3ddKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcclxuICAgICAgY29uc3QgZW50cnkgPSBlbnRyaWVzIFswXTtcclxuICAgICAgc2V0VGFibGVTY3JvbGxZKGVudHJ5LmNvbnRlbnRSZWN0LmhlaWdodCAtIDI3KTsgLy8g6KGo5qC86auY5bqm5pivIDI3XHJcbiAgICB9KTtcclxuICAgIGlmIChwYXJlbnRXcmFwcGVyKSB7XHJcbiAgICAgIHJlc2l6ZU9ic2VydmVyLm9ic2VydmUocGFyZW50V3JhcHBlcik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICByZXNpemVPYnNlcnZlci5kaXNjb25uZWN0KCk7XHJcbiAgICB9O1xyXG4gIH0sIFtwYXJlbnRXcmFwcGVyXSk7XHJcbiAgY29uc3Qgcm93Q2xhc3NOYW1lID0gKHJlY29yZCwgaW5kZXgpID0+IHtcclxuICAgIGxldCByb3dDbGFzc1RleHQgPSBpbmRleCAlIDIgPT09IDAgPyAnZXZlbi1yb3cnIDogJ29kZC1yb3cnO1xyXG4gICAgaWYgKHJlY29yZC5pZCA9PT0gc2VsZWN0ZWRSb3cuaWQpIHtcclxuICAgICAgcm93Q2xhc3NUZXh0ID0gJ3Jvdy1zZWxlY3RlZCAke3Jvd0NsYXNzVGV4dH0nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJvd0NsYXNzVGV4dDtcclxuICB9O1xyXG4gIGNvbnN0IG9uUm93ID0gKHJlY29yZCkgPT4gKHtcclxuICAgIG9uQ2xpY2s6IChldmVudCkgPT4ge1xyXG4gICAgICBzZXRTZWxlY3RlZFJvdyhyZWNvcmQpO1xyXG4gICAgICBkaXNwYXRjaChzZXRTZWxlY3RlZFJlY29yZChyZWNvcmQpKTtcclxuICAgICAgcm93Q2xpY2sgJiYgcm93Q2xpY2soKTtcclxuICAgIH1cclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlXHJcbiAgICAgIGNsYXNzTmFtZT1cInJlcS1yZWNvcmQtdGFibGVcIlxyXG4gICAgICByZWY9e3RhYmxlV3JhcHBlcn1cclxuICAgICAgc3R5bGU9e3t3aWR0aDogdGFibGVXaWR0aH19XHJcbiAgICAgIHJvd0hvdmVyPXt0cnVlfVxyXG4gICAgICBvblJvdz17b25Sb3d9XHJcbiAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XHJcbiAgICAgIHJvd0NsYXNzTmFtZT17cm93Q2xhc3NOYW1lfVxyXG4gICAgICBkYXRhU291cmNlPXtyZXF1ZXN0TGlzdH1cclxuICAgICAgcm93S2V5PXsnaWQnfVxyXG4gICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICBzY3JvbGw9e3t5OiB0YWJsZVNjcm9sbFl9fVxyXG4gICAgICBwYWdpbmF0aW9uPXtmYWxzZX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgTG9nVGFibGU7XHJcbiIsImltcG9ydCBEZXRhaWxWaWV3IGZyb20gJy4vRGV0YWlsVmlldyc7XHJcbmNvbnN0IFJlcXVlc3REZXRhaWw9KHJlcXVlc3RSZWNvcmQpPT4ge1xyXG4gIGlmICghcmVxdWVzdFJlY29yZCB8fCAhcmVxdWVzdFJlY29yZC5yZXF1ZXN0RGV0YWlsKSByZXR1cm4gbnVsbDtcclxuICBjb25zdCB7cmVxdWVzdERldGFpbH0gPSByZXF1ZXN0UmVjb3JkO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJlcXVlc3QtaW5mby13cmFwcGVyXCI+XHJcbiAgICAgIDxEZXRhaWxWaWV3IHRpdGxlPVwi6K+35rGC5aS0XCIgZGF0YU9iaj17cmVxdWVzdERldGFpbC5yZXFIZWFkfS8+XHJcbiAgICAgIDxEZXRhaWxWaWV3IHRpdGxlPVwi6K+35rGC5L2T5pWw5o2uXCIgZGF0YU9iaj17cmVxdWVzdERldGFpbC5yZXFEYXRhfS8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFJlcXVlc3REZXRhaWw7XHJcbiIsImltcG9ydCBEZXRhaWxWaWV3IGZyb20gJy4vRGV0YWlsVmlldyc7XHJcbmNvbnN0IFJlc3BvbnNlRGV0YWlsID0gKHsgcmVxdWVzdFJlY29yZCB9KSA9PiB7XHJcbiAgaWYgKCFyZXF1ZXN0UmVjb3JkIHx8IXJlcXVlc3RSZWNvcmQucmVzcG9uc2VEZXRhaWwpIHJldHVybiBudWxsO1xyXG4gIGNvbnN0IHsgcmVzcG9uc2VEZXRhaWwgfSA9IHJlcXVlc3RSZWNvcmQ7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwicmVxdWVzdC1pbmZvLXdyYXBwZXJcIj5cclxuICAgICAgPERldGFpbFZpZXcgdGl0bGU9XCLlk43lupTlpLRcIiBkYXRhT2JqPXtyZXNwb25zZURldGFpbC5oZWFkZXJ9Lz5cclxuICAgICAgPERldGFpbFZpZXcgdGl0bGU9XCLlk43lupTkvZPmlbDmja5cIiBkYXRhT2JqPXtyZXNwb25zZURldGFpbH0vPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2VEZXRhaWw7XHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL3RhYi5zY3NzJztcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge0Nsb3NlT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuXHJcbmNvbnN0IFRhYiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHRhYlZpZXdzLCBvbkNsb3NlID0gKCkgPT4ge1xyXG4gICAgfSwgaXNTaG93Q2xvc2VCdG4gPSB0cnVlXHJcbiAgfSA9IHByb3BzO1xyXG4gIGNvbnN0IHRhYkNsaWNrSGFuZGxlciA9ICh0YWJJdGVtKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVLZXkodGFiSXRlbS5rZXkpO1xyXG4gICAgdGFiSXRlbS50YWJDbGljayAmJiB0YWJJdGVtLnRhYkNsaWNrKCk7XHJcbiAgfTtcclxuICBjb25zdCB2aWV3cyA9IHRhYlZpZXdzLmZpbHRlcihpdGVtID0+ICFpdGVtLmRpc1Nob3cpO1xyXG4gIGNvbnN0IFthY3RpdmVLZXksIHNldEFjdGl2ZUtleV0gPSB1c2VTdGF0ZSh2aWV3c1swXS5rZXkpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi1iYXJcIj5cclxuICAgICAgICB7XHJcbiAgICAgICAgICBpc1Nob3dDbG9zZUJ0biAmJiA8ZGl2IGNsYXNzTmFtZT1cImNsb3NlLWJ0blwiIG9uQ2xpY2s9e29uQ2xvc2V9PlxyXG4gICAgICAgICAgICA8Q2xvc2VPdXRsaW5lZCBjbGFzc05hbWU9XCJjbG9zZS1idG4taWNvblwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwidGFiLWxpc3RcIj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdmlld3MubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZUtleSA9PT0gaXRlbS5rZXkgPyAndGFiLWl0ZW0gdGFiLWl0ZW0uYWN0aXZlJyA6ICd0YWItaXRlbSd9XHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0ua2V5fVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGFiQ2xpY2tIYW5kbGVyKGl0ZW0pfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmxhYmVsfVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHtcclxuICAgICAgICB2aWV3cy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYi12aWV3XCIgc3R5bGU9e3tkaXNwbGF5OiBhY3RpdmVLZXkgPT09IGl0ZW0ua2V5ID8gJ2Jsb2NrJyA6ICdub25lJ319IGtleT17aXRlbS5rZXl9PlxyXG4gICAgICAgICAgICB7aXRlbS5jaGlsZHJlbn1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgIH1cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUYWI7XHJcbiIsImltcG9ydCAnLi4vc3R5bGVzL3Rvb2wtYmFyLnNjc3MnO1xyXG5pbXBvcnQge3VzZUVmZmVjdCwgdXNlTWVtb30gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3VzZURpc3BhdGNoLCB1c2VTZWxlY3Rvcn0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQge0V4cG9ydE91dGxpbmVkLCBGaWx0ZXJGaWxsZWQsIEZpbHRlck91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQsIFN0b3BPdXRsaW5lZH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgTGF1bmNoQnV0dG9uIGZyb20gJy4vTGF1bmNoQnV0dG9uJztcclxuaW1wb3J0IHtwb3N0TWVzc2FnZVRvQmFja2dyb3VuZH0gZnJvbSAnLi4vcGFuZWxfbWVzc2FnZS9wYW5lbF9wb3J0X2NyZWF0b3InO1xyXG5pbXBvcnQge0Ryb3Bkb3duLCBNb2RhbCwgRGl2aWRlcn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCB7c2V0UmVxdWVzdExpc3QsIHNldFNlbGVjdGVkUmVjb3JkLCBzZXRSdW5uaW5nfSBmcm9tICcuLi9zdG9yZS9yZXF1ZXN0X3JlY29yZF9zbGljZSc7XHJcbmltcG9ydCBhcHBKc29uIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XHJcblxyXG5jb25zdCBUb29sQmFyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge2lzU2hvd0ZpbHRlckJhciwgc2V0SXNTaG93RmlsdGVyQmFyLCBpc09uRmlsdGVyaW5nfSA9IHByb3BzO1xyXG4gIGNvbnN0IGlzUnVubmluZyA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUucmVxdWVzdFJlY29yZC5pc1J1bm5pbmcpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBmaWx0ZXJpbmdDb2xvciA9IHVzZU1lbW8oKCkgPT4gaXNPbkZpbHRlcmluZyA/ICcjZGMzNjJlJyA6ICcjMWI2ZWYzJywgW2lzT25GaWx0ZXJpbmddKTtcclxuICBjb25zdCBzdGFydFJlY29yZCA9ICgpID0+IHtcclxuICAgIHBvc3RNZXNzYWdlVG9CYWNrZ3JvdW5kKHt0eXBlOiAnc3dpdGNoLXJ1bm5pbmcnLCBkYXRhOiAhaXNSdW5uaW5nfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRSdW5uaW5nKCFpc1J1bm5pbmcpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgY2xlYXJBbGxSZWNvcmQgPSAoKSA9PiB7XHJcbiAgICBwb3N0TWVzc2FnZVRvQmFja2dyb3VuZCh7dHlwZTogJ2NsZWFyLWFsbC1yZWNvcmRzJ30pLnRoZW4ocmVzID0+IHtcclxuICAgICAgZGlzcGF0Y2goc2V0UmVxdWVzdExpc3QoW10pKTtcclxuICAgICAgZGlzcGF0Y2goc2V0U2VsZWN0ZWRSZWNvcmQobnVsbCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBtZW51UHJvcHMgPSB7XHJcbiAgICBpdGVtczogW3tsYWJlbDogJyDlhbPkuo4gJywga2V5OiAnYWJvdXQnfV0sXHJcbiAgICBvbkNsaWNrOiAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09ICdhYm91dCcpIHtcclxuICAgICAgICBNb2RhbC5pbmZvKHtcclxuICAgICAgICAgIHRpdGxlOiAnIOWFs+S6jiBBVFVOZXR3b3JrJyxcclxuICAgICAgICAgIGljb246IG51bGwsXHJcbiAgICAgICAgICBjb250ZW50OiA8c3Bhbj7niYjmnKzlj7fvvJp7YXBwSnNvbi52ZXJzaW9ufTwvc3Bhbj4sXHJcbiAgICAgICAgICBva1RleHQ6ICcg56Gu5a6aICdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHBvc3RNZXNzYWdlVG9CYWNrZ3JvdW5kKHt0eXBlOiAnZ2V0LWlzLXJ1bm5pbmcnfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICBkaXNwYXRjaChzZXRSdW5uaW5nKHJlcy5wYXlsb2FkRGF0YSkpO1xyXG4gICAgfSk7XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IHNob3dFeHBvcnREaWFsb2cgPSAoKSA9PiB7XHJcbiAgICBhbGVydCgyKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvb2wtYmFyXCI+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiAnZmxleCd9fT5cclxuICAgICAgICA8TGF1bmNoQnV0dG9uIGlzUnVubmluZz17aXNSdW5uaW5nfSBvbkNsaWNrPXtzdGFydFJlY29yZH0gdGl0bGU9e2lzUnVubmluZyA/ICflgZzmraInIDogJ+i/kOihjCd9Lz5cclxuICAgICAgICA8U3RvcE91dGxpbmVkIGNsYXNzTmFtZT1cImNsZWFyLWJ0blwiIHJvdGF0ZT17OTB9IG9uQ2xpY2s9e2NsZWFyQWxsUmVjb3JkfSB0aXRsZT1cIua4heeQhlwiLz5cclxuICAgICAgICA8RGl2aWRlciB0eXBlPVwidmVydGljYWxcIi8+XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaXNTaG93RmlsdGVyQmFyXHJcbiAgICAgICAgICAgID8gPEZpbHRlckZpbGxlZCBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3dGaWx0ZXJCYXIoZmFsc2UpfSBzdHlsZT17e2NvbG9yOiBmaWx0ZXJpbmdDb2xvcn19IHRpdGxlPVwi562b6YCJXCIvPlxyXG4gICAgICAgICAgICA6IDxGaWx0ZXJPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiBzZXRJc1Nob3dGaWx0ZXJCYXIodHJ1ZSl9IHN0eWxlPXt7Y29sb3I6IGZpbHRlcmluZ0NvbG9yfX0gdGl0bGU9XCLnrZvpgIlcIi8+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDxEaXZpZGVyIHR5cGU9XCJ2ZXJ0aWNhbFwiLz5cclxuICAgICAgICA8RXhwb3J0T3V0bGluZWQgc3R5bGU9e3tjb2xvcjogJyMxYjZlZjMnfX0gb25DbGljaz17c2hvd0V4cG9ydERpYWxvZ30gdGl0bGU9XCLlr7zlh7rorrDlvZVcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8RHJvcGRvd24gbWVudT17bWVudVByb3BzfSB0cmlnZ2VyPXtbJ2NsaWNrJ119PlxyXG4gICAgICAgIDxTZXR0aW5nT3V0bGluZWQvPlxyXG4gICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgVG9vbEJhcjtcclxuIiwiaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQge3Byb2R1Y2V9IGZyb20gJ2ltbWVyJztcclxuXHJcbmV4cG9ydCBjb25zdCB1c2VJbW1lcj0oYmFzZVNhdGUpPT57XHJcbiAgY29uc3QgW3N0YXRlLHNldFN0YXRlXT11c2VTdGF0ZShiYXNlU2F0ZSk7XHJcbiAgY29uc3QgdXBkYXRlU3RhdGU9KHN0YXRlQ2hhbmdlKT0+e1xyXG4gICAgY29uc3QgbmV4dFN0YXRlPXByb2R1Y2Uoc3RhdGUsIHN0YXRlQ2hhbmdlKTtcclxuICAgIHNldFN0YXRlKG5leHRTdGF0ZSk7XHJcbiAgICByZXR1cm4gbmV4dFN0YXRlO1xyXG4gIH1cclxuICByZXR1cm4gW3N0YXRlLHVwZGF0ZVN0YXRlXTtcclxufVxyXG4iLCJpbXBvcnQgJy4vc3R5bGVzL2Nzc3Jlc2V0LmNzcydcclxuaW1wb3J0IFJlYWN0RG9tIGZyb20gJ3JlYWN0LWRvbS9jbGllbnQnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCB7UHJvdmlkZXJ9IGZyb20gJ3JlYWN0LXJlZHV4J1xyXG5pbXBvcnQge3N0b3JlfSBmcm9tICcuL3N0b3JlJ1xyXG5pbXBvcnQge3BhbmVsUG9ydEluaXR9IGZyb20gJy4vcGFuZWxfbWVzc2FnZS9wYW5lbF9wb3J0X2NyZWF0b3InO1xyXG5cclxucGFuZWxQb3J0SW5pdCgpO1xyXG5jb25zdCByb290PVJlYWN0RG9tLmNyZWF0ZVJvb3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSk7XHJcbnJvb3QucmVuZGVyKFxyXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxyXG4gICAgPEFwcC8+XHJcbiAgPC9Qcm92aWRlcj5cclxuKTtcclxuIiwiaW1wb3J0IHtpc0V4dGVuc2lvbn0gZnJvbSAnLi4vdXRpbHMnXHJcblxyXG5leHBvcnQgbGV0IHBvcnRUb0JhY2tncm91bmQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFuZWxQb3J0SW5pdCgpIHtcclxuICBpZiAocG9ydFRvQmFja2dyb3VuZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBpZiAoaXNFeHRlbnNpb24oKSkge1xyXG4gICAgY29uc3QgdGFiSWQgPSB3aW5kb3cuY2hyb21lLmRldnRvb2xzLmluc3BlY3RlZFdpbmRvdy50YWJJZDtcclxuICAgIHBvcnRUb0JhY2tncm91bmQgPSB3aW5kb3cuY2hyb21lLnJ1bnRpbWUuY29ubmVjdCh7bmFtZTogYHBhbmVsXyR7dGFiSWR9YH0pO1xyXG4gICAgcG9ydFRvQmFja2dyb3VuZC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygncGFuZWznmoRwb3J05o6J57q/5LqG77yM5bCd6K+V6YeN6L+eJyk7XHJcbiAgICAgIHBvcnRUb0JhY2tncm91bmQgPSBudWxsO1xyXG4gICAgICBwb3J0VG9CYWNrZ3JvdW5kID0gd2luZG93LmNocm9tZS5ydW50aW1lLmNvbm5lY3Qoe25hbWU6IGBwYW5lbF8ke3RhYklkfWB9KTtcclxuICAgICAgY29uc29sZS5sb2coJ3BhbmVs6YeN6L+e5oiQ5YqfJyk7XHJcbiAgICB9KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihuZXcgRXJyb3IoJ3BhbmVs6ZW/5pyf5raI5oGv6YCa6YGT5Yib5bu65aSx6LSl77yM6K+356Gu5L+d5omn6KGM546v5aKD5Li6ZGV2dG9vbOmdouadv+S4rScpKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0TWVzc2FnZVRvQmFja2dyb3VuZChtc2dQYXJhbSkge1xyXG4gIGNvbnN0IHt0eXBlfSA9IG1zZ1BhcmFtO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICBjb25zdCBtZXNzYWdlQ2FsbGJhY2sgPSAobWVzc2FnZSwgcG9ydCkgPT4ge1xyXG4gICAgICBpZiAobWVzc2FnZS50eXBlID09PSB0eXBlKSB7XHJcbiAgICAgICAgcmVzb2x2ZShtZXNzYWdlKTtcclxuICAgICAgICBwb3J0VG9CYWNrZ3JvdW5kLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihtZXNzYWdlQ2FsbGJhY2spO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgcG9ydFRvQmFja2dyb3VuZC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobWVzc2FnZUNhbGxiYWNrKTtcclxuICAgIHBvcnRUb0JhY2tncm91bmQucG9zdE1lc3NhZ2UobXNnUGFyYW0pO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVxdWVzdFJlY29yZENoYW5nZShjYWxsYmFjaykge1xyXG4gIGNvbnN0IG1lc3NhZ2VIYW5kbGVyID0gKG1lc3NhZ2UsIHBvcnQpID0+IHtcclxuICAgIGlmIChtZXNzYWdlLnR5cGUgPT09ICdyZXEtY2hhbmdlZCcpIHtcclxuICAgICAgY2FsbGJhY2sobWVzc2FnZS5wYXlsb2FkRGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBwb3J0VG9CYWNrZ3JvdW5kLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtZXNzYWdlSGFuZGxlcik7XHJcbiAgcmV0dXJuICgpID0+IHtcclxuICAgIHBvcnRUb0JhY2tncm91bmQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjbGVhckFsbFJlY29yZHNDaGFuZ2UoY2FsbGJhY2spIHtcclxuICBjb25zdCBtZXNzYWdlSGFuZGxlciA9IChtZXNzYWdlLCBwb3J0KSA9PiB7XHJcbiAgICBpZiAobWVzc2FnZS50eXBlID09PSAnY2xlYXItYWxsLXJlY29yZHMnKSB7XHJcbiAgICAgIGNhbGxiYWNrKG1lc3NhZ2UucGF5bG9hZERhdGEpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcG9ydFRvQmFja2dyb3VuZC5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIobWVzc2FnZUhhbmRsZXIpO1xyXG4gIHJldHVybiAoKSA9PiB7XHJcbiAgICBwb3J0VG9CYWNrZ3JvdW5kLm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihtZXNzYWdlSGFuZGxlcik7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7Y29uZmlndXJlU3RvcmV9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5pbXBvcnQgcmVxdWVzdFJlY29yZFNsaWNlIGZyb20gJy4vcmVxdWVzdF9yZWNvcmRfc2xpY2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xyXG4gIHJlZHVjZXI6IHtcclxuICAgIHJlcXVlc3RSZWNvcmQ6IHJlcXVlc3RSZWNvcmRTbGljZVxyXG4gIH1cclxufSk7XHJcbiIsImltcG9ydCB7Y3JlYXRlU2xpY2V9IGZyb20gJ0ByZWR1eGpzL3Rvb2xraXQnO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHNlbGVjdGVkUmVjb3JkOiBudWxsLFxyXG4gIG9yaWdpblJlcXVlc3RMaXN0OiBbXSxcclxuICByZXF1ZXN0TGlzdDogW10sXHJcbiAgcXVlcnlQYXJhbWV0ZXI6IHt9LFxyXG4gIGlzT25GaWx0ZXJpbmc6IGZhbHNlLFxyXG4gIGlzUnVubmluZzogdHJ1ZVxyXG59O1xyXG5jb25zdCBub3RSZXNwb25kZWRPZk9yaWdpbkluZGV4TWFwID0gbmV3IE1hcCgpO1xyXG5jb25zdCBub3RSZXNwb25kZWRJbmRleE1hcCA9IG5ldyBNYXAoKTtcclxuY29uc3QgZmlsdGVyV2l0aFF1ZXJ5UGFyYW1ldGVyID0gKHF1ZXJ5UGFyYW1ldGVyLCByZXF1ZXN0TGlzdCkgPT4ge1xyXG4gIGNvbnN0IHtxdWVyeVN0ciwgcXVlcnlUeXBlfSA9IHF1ZXJ5UGFyYW1ldGVyO1xyXG4gIGxldCBuZXh0UmVxTGlzdCA9IHJlcXVlc3RMaXN0O1xyXG4gIGlmIChxdWVyeVR5cGUpIHtcclxuICAgIG5leHRSZXFMaXN0ID0gcmVxdWVzdExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5yZXF1ZXN0VHlwZSA9PT0gcXVlcnlUeXBlKTtcclxuICB9XHJcbiAgaWYgKHF1ZXJ5U3RyKSB7XHJcbiAgICBuZXh0UmVxTGlzdCA9IG5leHRSZXFMaXN0LmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgaWYgKHF1ZXJ5U3RyID09PSBpdGVtLnJlcXVlc3RJZCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICgoaXRlbS5yZXF1ZXN0RGV0YWlsICYmIHF1ZXJ5U3RyID09PSBpdGVtLnJlcXVlc3REZXRhaWwucmVxSGVhZC5zZXJ2aWNlX25hbWUpXHJcbiAgICAgICAgfHwgcXVlcnlTdHIgPT09IGl0ZW0ucmVzcG9uc2VEZXRhaWwuaGVhZGVyLnNlcnZpY2Uuc2VydmljZV9uYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGl0ZW0ucmVzcG9uc2VEZXRhaWwgJiYgSlNPTi5zdHJpbmdpZnkoaXRlbS5yZXNwb25zZURldGFpbC5kYXRhKS5pbmNsdWRlcyhxdWVyeVN0cikpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIHJldHVybiBuZXh0UmVxTGlzdDtcclxufTtcclxuY29uc3QgaXNPbmVSZWNvcmRNYXRjaCA9IChxdWVyeVBhcmFtZXRlciwgcmVxSXRlbSkgPT4ge1xyXG4gIGNvbnN0IHtxdWVyeVN0ciwgcXVlcnlUeXBlfSA9IHF1ZXJ5UGFyYW1ldGVyO1xyXG4gIGxldCBpc1JlcXVlc3RUeXBlTWF0Y2ggPSB0cnVlO1xyXG4gIGlmIChxdWVyeVR5cGUpIHtcclxuICAgIGlzUmVxdWVzdFR5cGVNYXRjaCA9IHF1ZXJ5VHlwZSA9PT0gcmVxSXRlbS5yZXF1ZXN0VHlwZTtcclxuICB9XHJcbiAgaWYoIWlzUmVxdWVzdFR5cGVNYXRjaCl7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGlmIChxdWVyeVN0cil7XHJcbiAgICBpZihxdWVyeVN0cj09PXJlcUl0ZW0ucmVxdWVzdElkKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZigocmVxSXRlbS5yZXF1ZXN0RGV0YWlsJiZxdWVyeVN0cj09PXJlcUl0ZW0ucmVxdWVzdERldGFpbC5yZXFIZWFkLnNlcnZpY2VfbmFtZSlcclxuICAgICAgfHwgcXVlcnlTdHI9PT1yZXFJdGVtLnJlc3BvbnNlRGV0YWlsPy5oZWFkZXIuc2VydmljZV9uYW1lKXtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAocmVxSXRlbS5yZXNwb25zZURldGFpbCYmSlNPTi5zdHJpbmdpZnkocmVxSXRlbS5yZXNwb25zZURldGFpbC5kYXRhKS5pbmNsdWRlcyhxdWVyeVN0cikpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9ZWxzZSBpZihxdWVyeVN0cj09PScnKXtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuICByZXR1cm4gZmFsc2U7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVxdWVzdFJlY29yZFNsaWNlPWNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiAncmVxdWVzdFJlY29yZGVyJyxcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIHNldFJlcXVlc3RMaXN0KHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUub3JpZ2luUmVxdWVzdExpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUucmVxdWVzdExpc3QgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBwdXNoUmVxdWVzdFJlY29yZChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGlmKHN0YXRlLmlzT25GaWx0ZXJpbmcpe1xyXG4gICAgICAgIGlmKGlzT25lUmVjb3JkTWF0Y2goc3RhdGUucXVlcnlQYXJhbWV0ZXIsIGFjdGlvbi5wYXlsb2FkKSl7XHJcbiAgICAgICAgICBzdGF0ZS5yZXF1ZXN0TGlzdC5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgIG5vdFJlc3BvbmRlZEluZGV4TWFwLnNldChhY3Rpb24ucGF5bG9hZC5pZCwgc3RhdGUucmVxdWVzdExpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLnJlcXVlc3RMaXN0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgIG5vdFJlc3BvbmRlZEluZGV4TWFwLnNldChhY3Rpb24ucGF5bG9hZC5pZCwgc3RhdGUucmVxdWVzdExpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUub3JpZ2luUmVxdWVzdExpc3QucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgIG5vdFJlc3BvbmRlZE9mT3JpZ2luSW5kZXhNYXAuc2V0KGFjdGlvbi5wYXlsb2FkLmlkLCBzdGF0ZS5vcmlnaW5SZXF1ZXN0TGlzdC5sZW5ndGggLSAxKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVSZXF1ZXN0UmVjb3JkKHN0YXRlLCBhY3Rpb24pIHtcclxuXHJcbiAgICAgIC8vIOabtOaWsOa6kOaVsOaNruS4reivt+axgueahOeKtuaAgVxyXG4gICAgICBpZiAobm90UmVzcG9uZGVkT2ZPcmlnaW5JbmRleE1hcC5oYXMoYWN0aW9uLnBheWxvYWQuaWQpKSB7XHJcbiAgICAgICAgY29uc3QgcmVxdWVzdFJlY29yZCA9IHN0YXRlLm9yaWdpblJlcXVlc3RMaXN0W25vdFJlc3BvbmRlZE9mT3JpZ2luSW5kZXhNYXAuZ2V0KGFjdGlvbi5wYXlsb2FkLmlkKV1cclxuICAgICAgICByZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VEZXRhaWw7IC8vIOabtOaWsOWTjeW6lOS9k1xyXG4gICAgICAgIC8vIOabtOaWsOeKtuaAgVxyXG4gICAgICAgIHJlcXVlc3RSZWNvcmQucmVxdWVzdFN0YXRlID0gcmVxdWVzdFJlY29yZC5yZXNwb25zZURldGFpbC5lcnJvci5lcnJvcl9pZCA9PT0gMD8gMCA6IDE7XHJcbiAgICAgICAgcmVxdWVzdFJlY29yZC5yZWNlaXZlVGltZSA9ICBhY3Rpb24ucGF5bG9hZC5yZWNlaXZlVGltZTtcclxuICAgICAgICBub3RSZXNwb25kZWRPZk9yaWdpbkluZGV4TWFwLmRlbGV0ZShhY3Rpb24ucGF5bG9hZC5pZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIOabtOaWsOWxleekuuaVsOaNruS4reivt+axgueahOeKtuaAgVxyXG4gICAgICBpZiAobm90UmVzcG9uZGVkSW5kZXhNYXAuaGFzKGFjdGlvbi5wYXlsb2FkLmlkKSkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3RSZWNvcmQgPSBzdGF0ZS5yZXF1ZXN0TGlzdFtub3RSZXNwb25kZWRJbmRleE1hcC5nZXQoYWN0aW9uLnBheWxvYWQuaWQpXTtcclxuICAgICAgICByZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsID0gYWN0aW9uLnBheWxvYWQucmVzcG9uc2VEZXRhaWw7IC8vIOabtOaWsOWTjeW6lOS9k1xyXG4gICAgICAgIC8vIOabtOaWsOeKtuaAgVxyXG4gICAgICAgIHJlcXVlc3RSZWNvcmQucmVxdWVzdFN0YXRlID0gcmVxdWVzdFJlY29yZC5yZXNwb25zZURldGFpbC5lcnJvci5lcnJvcl9pZCA9PT0gMD8gMCA6IDE7XHJcbiAgICAgICAgcmVxdWVzdFJlY29yZC5yZWNlaXZlVGltZSA9ICBhY3Rpb24ucGF5bG9hZC5yZWNlaXZlVGltZTtcclxuICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWRSZWNvcmQgJiYgc3RhdGUuc2VsZWN0ZWRSZWNvcmQuaWQgPT09IHJlcXVlc3RSZWNvcmQuaWQpIHtcclxuICAgICAgICAgIC8vIOWmguaenOabtOaWsOeahOaYr+W9k+WJjemAieS4reeahOivt+axguiusOW9lVxyXG4gICAgICAgICAgc3RhdGUuc2VsZWN0ZWRSZWNvcmQgPSByZXF1ZXN0UmVjb3JkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBub3RSZXNwb25kZWRJbmRleE1hcC5kZWxldGUoYWN0aW9uLnBheWxvYWQuaWQpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgcHVzaE1zZ1JlY29yZChzdGF0ZSwgYWN0aW9uKSB7XHJcbiAgICAgIGlmIChzdGF0ZS5pc09uRmlsdGVyaW5nKSB7XHJcbiAgICAgICAgaWYgKGlzT25lUmVjb3JkTWF0Y2goc3RhdGUucXVlcnlQYXJhbWV0ZXIsIGFjdGlvbi5wYXlsb2FkKSkge1xyXG4gICAgICAgICAgc3RhdGUucmVxdWVzdExpc3QucHVzaChhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHN0YXRlLnJlcXVlc3RMaXN0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlLm9yaWdpblJlcXVlc3RMaXN0LnB1c2goYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgfSxcclxuICAgIHNldFNlbGVjdGVkUmVjb3JkKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuc2VsZWN0ZWRSZWNvcmQgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBzZXRJc09uRmlsdGVyaW5nKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuaXNPbkZpbHRlcmluZyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldFF1ZXJ5UGFyYW1ldGVyKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUucXVlcnlQYXJhbWV0ZXIgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgICAgc3RhdGUucmVxdWVzdExpc3QgPSBmaWx0ZXJXaXRoUXVlcnlQYXJhbWV0ZXIoYWN0aW9uLnBheWxvYWQsIHN0YXRlLm9yaWdpblJlcXVlc3RMaXN0KTtcclxuICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkUmVjb3JkICYmIWlzT25lUmVjb3JkTWF0Y2goYWN0aW9uLnBheWxvYWQsIHN0YXRlLnNlbGVjdGVkUmVjb3JkKSkge1xyXG4gICAgICAgIHN0YXRlLnNlbGVjdGVkUmVjb3JkID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJlc2V0UmVxdWVzdExpc3Qoc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICBzdGF0ZS5vcmlnaW5SZXF1ZXN0TGlzdCA9IFtdO1xyXG4gICAgICBzdGF0ZS5yZXF1ZXN0TGlzdCA9IFtdO1xyXG4gICAgICBzdGF0ZS5zZWxlY3RlZFJlY29yZCA9IG51bGw7XHJcbiAgICAgIG5vdFJlc3BvbmRlZE9mT3JpZ2luSW5kZXhNYXAuY2xlYXIoKTtcclxuICAgICAgbm90UmVzcG9uZGVkSW5kZXhNYXAuY2xlYXIoKTtcclxuICAgIH0sXHJcbiAgICBzZXRSdW5uaW5nKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgc3RhdGUuaXNSdW5uaW5nID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY29uc3Qge1xyXG4gIHNldFJlcXVlc3RMaXN0LFxyXG4gIHB1c2hSZXF1ZXN0UmVjb3JkLFxyXG4gIHVwZGF0ZVJlcXVlc3RSZWNvcmQsXHJcbiAgc2V0U2VsZWN0ZWRSZWNvcmQsXHJcbiAgcHVzaE1zZ1JlY29yZCxcclxuICBzZXRJc09uRmlsdGVyaW5nLFxyXG4gIHNldFF1ZXJ5UGFyYW1ldGVyLFxyXG4gIHJlc2V0UmVxdWVzdExpc3QsXHJcbiAgc2V0UnVubmluZ1xyXG59ID0gcmVxdWVzdFJlY29yZFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBkZWZhdWx0IHJlcXVlc3RSZWNvcmRTbGljZS5yZWR1Y2VyO1xyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbnZhciBfMSA9IFwibGF1bmNoLWJ1dHRvbi1tb2R1bGVfbGF1bmNoLWJ0bl9XQkpicVwiO1xudmFyIF8yID0gXCJsYXVuY2gtYnV0dG9uLW1vZHVsZV9sYXVuY2gtYnRuX2FjdGl2ZV92VlhwaVwiO1xudmFyIF8zID0gXCJsYXVuY2gtYnV0dG9uLW1vZHVsZV9sYXVuY2gtYnRuX1dCSmJxXCI7XG52YXIgXzQgPSBcImxhdW5jaC1idXR0b24tbW9kdWxlX2xhdW5jaC1idG5fYWN0aXZlX3ZWWHBpXCI7XG5leHBvcnQgeyBfMSBhcyBcImxhdW5jaC1idG5cIiwgXzIgYXMgXCJsYXVuY2gtYnRuX2FjdGl2ZVwiLCBfMyBhcyBcImxhdW5jaEJ0blwiLCBfNCBhcyBcImxhdW5jaEJ0bkFjdGl2ZVwiIH1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImV4cG9ydCBjb25zdCBpc0V4dGVuc2lvbiA9ICgpID0+ICEhd2luZG93LmNocm9tZT8uZGV2dG9vbHM7XHJcbmV4cG9ydCBjb25zdCBjb3B5VmFsdWUgPSAodmFsdWUpID0+IHtcclxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcign5peg5rOV5aSN5Yi26Z2e5a2X56ym5Liy57G75Z6L5pWw5o2uJykpO1xyXG4gIH1cclxuICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcclxuICB0ZXh0YXJlYS52YWx1ZSA9IHZhbHVlO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xyXG4gIHRleHRhcmVhLnNlbGVjdCgpO1xyXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBzdWNjZXNzZnVsID0gZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcclxuICAgICAgaWYgKHN1Y2Nlc3NmdWwpIHtcclxuICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVqZWN0KCk7XHJcbiAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgcmVqZWN0KGUpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZXh0YXJlYSk7XHJcbiAgfSlcclxufVxyXG5leHBvcnQgY29uc3QgdGhyb3R0bGUgPSAoZnVuYywgZGVsYXkpID0+IHtcclxuICBsZXQgdGltZXJJZDtcclxuICByZXR1cm4gKCkgPT4ge1xyXG4gICAgaWYgKCF0aW1lcklkKSB7XHJcbiAgICAgIGZ1bmMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgdGltZXJJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRpbWVySWQgPSBudWxsO1xyXG4gICAgICB9LCBkZWxheSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRDdXNGb3JtYXRUaW1lPSh0aW1lc3RhbXApID0+IHtcclxuICBjb25zdCB0aW1lPW5ldyBEYXRlKHRpbWVzdGFtcCk7XHJcbiAgY29uc3QgZnVsbFllYXI9dGltZS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IG1vbnRoPVN0cmluZyh0aW1lLmdldE1vbnRoKCkrMSkucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgY29uc3QgZGF5PVN0cmluZyh0aW1lLmdldERhdGUoKSkucGFkU3RhcnQoMixcIjBcIik7XHJcbiAgY29uc3QgaG91cj1TdHJpbmcodGltZS5nZXRIb3VycygpKS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICBjb25zdCBtaW51dGU9U3RyaW5nKHRpbWUuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICBjb25zdCBzZWNvbmQ9U3RyaW5nKHRpbWUuZ2V0U2Vjb25kcygpKS5wYWRTdGFydCgyLFwiMFwiKTtcclxuICBjb25zdCBtU2Vjb25kPVN0cmluZyh0aW1lLmdldE1pbGxpc2Vjb25kcygpKS5wYWRTdGFydCgzLFwiMFwiKTtcclxuICByZXR1cm4gYCR7ZnVsbFllYXJ9LyR7bW9udGh9LyR7ZGF5fSAke2hvdXJ9OiR7bWludXRlfToke3NlY29uZH06JHttU2Vjb25kfWA7XHJcbn1cclxuIiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIl9fd2VicGFja19yZXF1aXJlX18uYW1kTyA9IHt9OyIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwidmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mID8gKG9iaikgPT4gKE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmopKSA6IChvYmopID0+IChvYmouX19wcm90b19fKTtcbnZhciBsZWFmUHJvdG90eXBlcztcbi8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuLy8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuLy8gbW9kZSAmIDE2OiByZXR1cm4gdmFsdWUgd2hlbiBpdCdzIFByb21pc2UtbGlrZVxuLy8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcblx0aWYobW9kZSAmIDEpIHZhbHVlID0gdGhpcyh2YWx1ZSk7XG5cdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG5cdGlmKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUpIHtcblx0XHRpZigobW9kZSAmIDQpICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcblx0XHRpZigobW9kZSAmIDE2KSAmJiB0eXBlb2YgdmFsdWUudGhlbiA9PT0gJ2Z1bmN0aW9uJykgcmV0dXJuIHZhbHVlO1xuXHR9XG5cdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG5cdHZhciBkZWYgPSB7fTtcblx0bGVhZlByb3RvdHlwZXMgPSBsZWFmUHJvdG90eXBlcyB8fCBbbnVsbCwgZ2V0UHJvdG8oe30pLCBnZXRQcm90byhbXSksIGdldFByb3RvKGdldFByb3RvKV07XG5cdGZvcih2YXIgY3VycmVudCA9IG1vZGUgJiAyICYmIHZhbHVlOyB0eXBlb2YgY3VycmVudCA9PSAnb2JqZWN0JyAmJiAhfmxlYWZQcm90b3R5cGVzLmluZGV4T2YoY3VycmVudCk7IGN1cnJlbnQgPSBnZXRQcm90byhjdXJyZW50KSkge1xuXHRcdE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGN1cnJlbnQpLmZvckVhY2goKGtleSkgPT4gKGRlZltrZXldID0gKCkgPT4gKHZhbHVlW2tleV0pKSk7XG5cdH1cblx0ZGVmWydkZWZhdWx0J10gPSAoKSA9PiAodmFsdWUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGRlZik7XG5cdHJldHVybiBucztcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmhtZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlID0gT2JqZWN0LmNyZWF0ZShtb2R1bGUpO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsICdleHBvcnRzJywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0c2V0OiAoKSA9PiB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0VTIE1vZHVsZXMgbWF5IG5vdCBhc3NpZ24gbW9kdWxlLmV4cG9ydHMgb3IgZXhwb3J0cy4qLCBVc2UgRVNNIGV4cG9ydCBzeW50YXgsIGluc3RlYWQ6ICcgKyBtb2R1bGUuaWQpO1xuXHRcdH1cblx0fSk7XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwicGFuZWxcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rcnBjX2xvZ1wiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtycGNfbG9nXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJyZWFjdF92ZW5kb3JzXCIsXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19hbnQtZGVzaWduX2ljb25zX2VzX2ljb25zX0V4cG9ydE91dGxpbmVkX2pzLW5vZGVfbW9kdWxlc19hbnQtZGVzaWduX2ljb24tYWNkMWYwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BhbmVsLmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VNZW1vIiwidXNlUmVmIiwidXNlRWZmZWN0IiwidXNlU2VsZWN0b3IiLCJUb29sQmFyIiwiTG9nVGFibGUiLCJEZXRhaWxTaWRlciIsIlRhYiIsIkJhc2VEZXRhaWwiLCJSZXF1ZXN0RGV0YWlsIiwiUmVzcG9uc2VEZXRhaWwiLCJGaWx0ZXJCYXIiLCJ0aHJvdHRsZSIsIkRpdmlkZXIiLCJqc3giLCJfanN4IiwiRnJhZ21lbnQiLCJfRnJhZ21lbnQiLCJqc3hzIiwiX2pzeHMiLCJBcHAiLCJfdXNlU2VsZWN0b3IiLCJzdGF0ZSIsInJlcXVlc3RSZWNvcmQiLCJzZWxlY3RlZFJlY29yZCIsImlzT25GaWx0ZXJpbmciLCJvcmlnaW5SZXF1ZXN0TGlzdCIsIl91c2VTdGF0ZSIsIl91c2VTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsImlzU2hvd1NpZGVyIiwic2V0SXNTaG93U2lkZXIiLCJfdXNlU3RhdGUzIiwiX3VzZVN0YXRlNCIsImlzU2hvd0ZpbHRlckJhciIsInNldElzU2hvd0ZpbHRlckJhciIsIl91c2VTdGF0ZTUiLCJfdXNlU3RhdGU2IiwidGFibGVXaWR0aCIsInNldFRhYmxlV2lkdGgiLCJfdXNlU3RhdGU3IiwiX3VzZVN0YXRlOCIsInNpZGVyV2lkdGgiLCJzZXRTaWRlcldpZHRoIiwibG9nVGFibGVXcmFwcGVyIiwic3BsaXRMaW5lIiwidGFiVmlld3MiLCJrZXkiLCJsYWJlbCIsImNoaWxkcmVuIiwidGFiQ2xpY2siLCJkaXNTaG93IiwicmVxdWVzdFR5cGUiLCJsb2dXcmFwcGVySGVpZ2h0IiwiY291bnRJbmZvIiwidG90YWwiLCJsZW5ndGgiLCJmZXRjaENvdW50IiwicHVzaENvdW50IiwiZm9yRWFjaCIsIml0ZW0iLCJjbG9zZURldGFpbFNpZGVyIiwidGFibGVSb3dDbGljayIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsInNwbGl0TW91c2VEb3duSGFuZGxlciIsImUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzcGxpdE1vdXNlTW92ZUhhbmRsZXIiLCJjbGllbnRYIiwic3BsaXRNb3VzZVVwSGFuZGxlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXNpemVIYW5kbGVyIiwibmV3U2lkZXJXaWR0aCIsIndpbmRvdyIsImlzU2hvdyIsInJlZiIsImNsYXNzTmFtZSIsInN0eWxlIiwiaGVpZ2h0Iiwicm93Q2xpY2siLCJwYXJlbnRXcmFwcGVyIiwid2lkdGgiLCJvbkNsb3NlIiwiQ2hlY2tDaXJjbGVGaWxsZWQiLCJDbG9zZUNpcmNsZUZpbGxlZCIsIkV4Y2xhbWF0aW9uQ2lyY2xlRmlsbGVkIiwiTG9hZGluZ091dGxpbmVkIiwiZ2V0Q3VzRm9ybWF0VGltZSIsIl9yZWYiLCJzdGF0ZU1hcCIsInN0YXRlSWNvbk1hcCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJyZXF1ZXN0X25hbm9faWQiLCJyZXF1ZXN0RGV0YWlsIiwicmVxSGVhZCIsInJlc3BvbnNlRGV0YWlsIiwiaGVhZGVyIiwic2VydmljZV9uYW1lIiwiZmV0Y2hUaW1lIiwicmVjZWl2ZVRpbWUiLCJ0aW1lQ29uc3VtaW5nIiwiY29uY2F0IiwicmVxdWVzdElkIiwicmVxdWVzdFN0YXRlIiwiQ2hlY2tUYWciLCJwcm9wcyIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hlY2siLCJvbkNsaWNrIiwiX3Byb3BzJHN0eWxlIiwiY2xpY2tUYWdIYW5kbGUiLCJDaGVja2JveCIsIm1lc3NhZ2UiLCJPYmplY3RJbnNwZWN0b3IiLCJjaHJvbWVMaWdodCIsImNvcHlWYWx1ZSIsIkpzb25Ub1RTIiwiRGV0YWlsVmlldyIsInRpdGxlIiwiZGF0YU9iaiIsIl9tZXNzYWdlJHVzZU1lc3NhZ2UiLCJ1c2VNZXNzYWdlIiwiX21lc3NhZ2UkdXNlTWVzc2FnZTIiLCJtZXNzYWdlQXBpIiwiY29udGV4dEhvbGRlciIsImlzU2hvd0pzb24iLCJzZXRJc1Nob3dKc29uIiwiaXNTaG93SnNvbkNoYW5nZSIsImNvcHlUb0pzb24iLCJzdHJWYWx1ZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwic3VjY2VzcyIsImNvcHlUb1RzIiwiam9pbiIsIm9uQ2hhbmdlIiwidW5kZWZpbmVkIiwiZGF0YSIsImV4cGFuZFBhdGhzIiwidGhlbWUiLCJfb2JqZWN0U3ByZWFkIiwiQkFTRV9GT05UX1NJWkUiLCJUUkVFTk9ERV9GT05UX1NJWkUiLCJCQVNFX0ZPTlRfRkFNSUxZIiwiVFJFRU5PREVfRk9OVF9GQU1JTFkiLCJJbnB1dCIsIlRvb2x0aXAiLCJ1c2VEaXNwYXRjaCIsInVzZUltbWVyIiwic2V0SXNPbkZpbHRlcmluZyIsInNldFF1ZXJ5UGFyYW1ldGVyIiwiUXVlc3Rpb25DaXJjbGVPdXRsaW5lZCIsInF1ZXJ5UGFyYW1ldGVyQ2hhbmdlIiwiZGlzcGF0Y2giLCJxdWVyeVN0ciIsInNldFF1ZXJ5U3RyIiwicXVlcnlUeXBlIiwic2V0UXVlcnlUeXBlIiwiX3VzZUltbWVyIiwiX3VzZUltbWVyMiIsInF1ZXJ5UGFyYW1ldGVyT2JqIiwic2V0UXVlcnlQYXJhbWV0ZXJPYmoiLCJyZXFUeXBlcyIsImlzRW1wdHlRdWVyeVBhcmFtZXRlck9iaiIsInF1ZXJ5RGF0YSIsIk9iamVjdCIsImtleXMiLCJldmVyeSIsInF1ZXJ5UGFyYW1ldGVyQ2hhbmdlSGFuZGxlIiwicXVlcnlQYXJhbWV0ZXIiLCJmaWx0ZXJJbnB1dENoYW5nZSIsInRhcmdldCIsInRyaW0iLCJuZXdRdWVyeVBhcmFtZXRlck9iaiIsImRyYWZ0IiwiY2hlY2tUYWdDaGVja0hhbmRsZSIsImhlbHBUZXh0IiwiaGVscFRpcCIsInBsYWNlbWVudCIsInJvb3RDbGFzc05hbWUiLCJhbGxvd0NsZWFyIiwicGxhY2Vob2xkZXIiLCJzdWZmaXgiLCJtYXAiLCJtYXJnaW5MZWZ0Iiwic3R5bGVPYmoiLCJMYXVuY2hCdXR0b24iLCJpc1J1bm5pbmciLCJyZXN0UHJvcHMiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJfZXhjbHVkZWQiLCJsYXVuY2hCdG4iLCJsYXVuY2hCdG5BY3RpdmUiLCJ1c2VMYXlvdXRFZmZlY3QiLCJUYWJsZSIsInNldFJlcXVlc3RMaXN0IiwicHVzaFJlcXVlc3RSZWNvcmQiLCJwdXNoTXNnUmVjb3JkIiwidXBkYXRlUmVxdWVzdFJlY29yZCIsInNldFNlbGVjdGVkUmVjb3JkIiwicmVzZXRSZXF1ZXN0TGlzdCIsInBvc3RNZXNzYWdlVG9CYWNrZ3JvdW5kIiwicmVxdWVzdFJlY29yZENoYW5nZSIsImNsZWFyQWxsUmVjb3Jkc0NoYW5nZSIsIlB1bGxSZXF1ZXN0T3V0bGluZWQiLCJTZW5kT3V0bGluZWQiLCJzZWxlY3RlZFJvdyIsInNldFNlbGVjdGVkUm93IiwidGFibGVTY3JvbGxZIiwic2V0VGFibGVTY3JvbGxZIiwidGFibGVXcmFwcGVyIiwicmVxdWVzdExpc3QiLCJjb25zb2xlIiwibG9nIiwiY29sdW1ucyIsImRhdGFJbmRleCIsInJlbmRlciIsInJlY29yZCIsImluZGV4IiwidHlwZSIsInJlcyIsInBheWxvYWREYXRhIiwiY2FuY2VsTGlzdGVuIiwibmV3UmVxdWVzdCIsImNsZWFyTGlzdGVuIiwicmVjb3JkcyIsInNjcm9sbEJvZHkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwic2Nyb2xsVG8iLCJ0b3AiLCJzY3JvbGxIZWlnaHQiLCJyZXNpemVPYnNlcnZlciIsIlJlc2l6ZU9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY29udGVudFJlY3QiLCJvYnNlcnZlIiwiZGlzY29ubmVjdCIsInJvd0NsYXNzTmFtZSIsInJvd0NsYXNzVGV4dCIsImlkIiwib25Sb3ciLCJldmVudCIsInJvd0hvdmVyIiwiZGF0YVNvdXJjZSIsInJvd0tleSIsInNpemUiLCJzY3JvbGwiLCJ5IiwicGFnaW5hdGlvbiIsInJlcURhdGEiLCJDbG9zZU91dGxpbmVkIiwiX3Byb3BzJG9uQ2xvc2UiLCJfcHJvcHMkaXNTaG93Q2xvc2VCdG4iLCJpc1Nob3dDbG9zZUJ0biIsInRhYkNsaWNrSGFuZGxlciIsInRhYkl0ZW0iLCJzZXRBY3RpdmVLZXkiLCJ2aWV3cyIsImZpbHRlciIsImFjdGl2ZUtleSIsImRpc3BsYXkiLCJFeHBvcnRPdXRsaW5lZCIsIkZpbHRlckZpbGxlZCIsIkZpbHRlck91dGxpbmVkIiwiU2V0dGluZ091dGxpbmVkIiwiU3RvcE91dGxpbmVkIiwiRHJvcGRvd24iLCJNb2RhbCIsInNldFJ1bm5pbmciLCJhcHBKc29uIiwiZmlsdGVyaW5nQ29sb3IiLCJzdGFydFJlY29yZCIsImNsZWFyQWxsUmVjb3JkIiwibWVudVByb3BzIiwiaXRlbXMiLCJpbmZvIiwiaWNvbiIsImNvbnRlbnQiLCJ2ZXJzaW9uIiwib2tUZXh0Iiwic2hvd0V4cG9ydERpYWxvZyIsImFsZXJ0Iiwicm90YXRlIiwibWVudSIsInRyaWdnZXIiLCJwcm9kdWNlIiwiYmFzZVNhdGUiLCJzZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwic3RhdGVDaGFuZ2UiLCJuZXh0U3RhdGUiLCJSZWFjdERvbSIsIlByb3ZpZGVyIiwic3RvcmUiLCJwYW5lbFBvcnRJbml0Iiwicm9vdCIsImNyZWF0ZVJvb3QiLCJnZXRFbGVtZW50QnlJZCIsImlzRXh0ZW5zaW9uIiwicG9ydFRvQmFja2dyb3VuZCIsInRhYklkIiwiY2hyb21lIiwiZGV2dG9vbHMiLCJpbnNwZWN0ZWRXaW5kb3ciLCJydW50aW1lIiwiY29ubmVjdCIsIm5hbWUiLCJvbkRpc2Nvbm5lY3QiLCJhZGRMaXN0ZW5lciIsImVycm9yIiwiRXJyb3IiLCJtc2dQYXJhbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwibWVzc2FnZUNhbGxiYWNrIiwicG9ydCIsIm9uTWVzc2FnZSIsInJlbW92ZUxpc3RlbmVyIiwicG9zdE1lc3NhZ2UiLCJjYWxsYmFjayIsIm1lc3NhZ2VIYW5kbGVyIiwiY29uZmlndXJlU3RvcmUiLCJyZXF1ZXN0UmVjb3JkU2xpY2UiLCJyZWR1Y2VyIiwiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJub3RSZXNwb25kZWRPZk9yaWdpbkluZGV4TWFwIiwiTWFwIiwibm90UmVzcG9uZGVkSW5kZXhNYXAiLCJmaWx0ZXJXaXRoUXVlcnlQYXJhbWV0ZXIiLCJuZXh0UmVxTGlzdCIsInNlcnZpY2UiLCJpbmNsdWRlcyIsImlzT25lUmVjb3JkTWF0Y2giLCJyZXFJdGVtIiwiaXNSZXF1ZXN0VHlwZU1hdGNoIiwiX3JlcUl0ZW0kcmVzcG9uc2VEZXRhIiwicmVkdWNlcnMiLCJhY3Rpb24iLCJwYXlsb2FkIiwicHVzaCIsInNldCIsImhhcyIsImdldCIsImVycm9yX2lkIiwiY2xlYXIiLCJfcmVxdWVzdFJlY29yZFNsaWNlJGEiLCJhY3Rpb25zIiwiX3dpbmRvdyRjaHJvbWUiLCJ0ZXh0YXJlYSIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3QiLCJzdWNjZXNzZnVsIiwiZXhlY0NvbW1hbmQiLCJyZW1vdmVDaGlsZCIsImZ1bmMiLCJkZWxheSIsInRpbWVySWQiLCJhcHBseSIsIl90aGlzIiwiYXJndW1lbnRzIiwic2V0VGltZW91dCIsInRpbWVzdGFtcCIsInRpbWUiLCJEYXRlIiwiZnVsbFllYXIiLCJnZXRGdWxsWWVhciIsIm1vbnRoIiwiU3RyaW5nIiwiZ2V0TW9udGgiLCJwYWRTdGFydCIsImRheSIsImdldERhdGUiLCJob3VyIiwiZ2V0SG91cnMiLCJtaW51dGUiLCJnZXRNaW51dGVzIiwic2Vjb25kIiwiZ2V0U2Vjb25kcyIsIm1TZWNvbmQiLCJnZXRNaWxsaXNlY29uZHMiXSwic291cmNlUm9vdCI6IiJ9