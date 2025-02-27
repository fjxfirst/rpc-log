/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/backend/content_port_handle.js":
/*!********************************************!*\
  !*** ./src/backend/content_port_handle.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentDisConnectHandler: () => (/* binding */ contentDisConnectHandler),
/* harmony export */   contentMessageHandler: () => (/* binding */ contentMessageHandler),
/* harmony export */   contentPortHandler: () => (/* binding */ contentPortHandler)
/* harmony export */ });
/* harmony import */ var _data_manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_manage */ "./src/backend/data_manage.js");

var contentPortHandler = function contentPortHandler(port) {
  var tabId = port.sender.tab.id;
  if (!_data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.has(tabId)) {
    _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.set(tabId, new _data_manage__WEBPACK_IMPORTED_MODULE_0__.RequestRecordManage(tabId));
  }
};
var reqId = 1;
var contentMessageHandler = function contentMessageHandler(message, port) {
  var tabId = port.sender.tab.id;
  console.log('content to back', message);
  switch (message.type) {
    case 'REQUEST_EVENT':
      {
        var reqRecordManage = _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.get(tabId);
        var _message$data = message.data,
          requestType = _message$data.requestType,
          isReceived = _message$data.isReceived;
        if (requestType === 'FETCH') {
          // 如果是请求
          if (isReceived) {
            // 如果是后端返回的响应
            var _message$data2 = message.data,
              resBody = _message$data2.resBody,
              id = _message$data2.id,
              receiveTime = _message$data2.receiveTime;
            reqRecordManage.updateRecord(resBody, id, receiveTime);
          } else {
            // 如果是前端请求
            var _message$data3 = message.data,
              reqData = _message$data3.reqData,
              reqHead = _message$data3.reqHead,
              reqIdx = _message$data3.reqIdx,
              fetchTime = _message$data3.fetchTime;
            reqRecordManage.addRecord({
              id: "fetch-".concat(reqIdx),
              requestState: -1,
              //-1：等待中 0：成功 1：失败 2：未处理（只针对消息推送）
              requestId: reqHead.request_id,
              requestType: requestType,
              requestDetail: {
                reqData: reqData,
                reqHead: reqHead
              },
              fetchTime: fetchTime,
              responseDetail: null
            });
          }
        } else if (requestType === 'MSG') {
          // 如果是后端主动推送消息
          var _message$data4 = message.data,
            _resBody = _message$data4.resBody,
            state = _message$data4.state,
            _receiveTime = _message$data4.receiveTime;
          var requestState = state !== undefined ? state : _resBody.error.error_id === 0 ? 0 : 1;
          reqRecordManage.addMsgRecord({
            id: reqId++,
            requestState: requestState,
            requestId: _resBody.error.request_id,
            requestType: requestType,
            receiveTime: _receiveTime,
            responseDetail: _resBody
          });
        }
        break;
      }
    case 'PAGE_UNLOAD':
      {
        var _reqRecordManage = _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.get(tabId);
        _reqRecordManage.clearAllRecords();
        _reqRecordManage.clearNotRespondedRecords();
        _reqRecordManage.panelPort && _reqRecordManage.panelPort.postMessage({
          type: 'clear-all-records',
          payloadData: []
        });
        break;
      }
    case 'PING':
      {
        port.postMessage({
          type: 'PONG'
        });
      }
  }
};
var contentDisConnectHandler = function contentDisConnectHandler(port) {
  var tabId = port.sender.tab.id;
};

/***/ }),

/***/ "./src/backend/data_manage.js":
/*!************************************!*\
  !*** ./src/backend/data_manage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RequestRecordManage: () => (/* binding */ RequestRecordManage),
/* harmony export */   tabReqRecordMap: () => (/* binding */ tabReqRecordMap)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// key: 页签id，考虑到bs架构浏览器存在多页签打开atu的情况，value是tab对应的请求记录集合
var tabReqRecordMap = new Map();
var RequestRecordManage = /*#__PURE__*/function () {
  function RequestRecordManage(_tabId) {
    _classCallCheck(this, RequestRecordManage);
    _defineProperty(this, "requestRecords", []);
    _defineProperty(this, "notRespondedRecords", new Map());
    _defineProperty(this, "tabId", '');
    _defineProperty(this, "panelPort", null);
    _defineProperty(this, "isRunning", true);
    this.tabId = _tabId;
  }
  return _createClass(RequestRecordManage, [{
    key: "addRecord",
    value: function addRecord(record) {
      if (!this.isRunning) {
        return;
      }
      if (!this.notRespondedRecords.has(record.id)) {
        this.requestRecords.push(record);
        if (this.panelPort) {
          this.panelPort.postMessage({
            type: 'req-changed',
            payloadData: record
          });
        }
        this.notRespondedRecords.set(record.id, record);
      } else {
        console.log('没找到');
      }
    }
  }, {
    key: "addMsgRecord",
    value: function addMsgRecord(record) {
      if (!this.isRunning) {
        return;
      }
      this.requestRecords.push(record);
      // 触发更新消息
      if (this.panelPort) {
        this.panelPort.postMessage({
          type: 'req-changed',
          payloadData: record
        });
      }
    }
  }, {
    key: "updateRecord",
    value: function updateRecord(resRecord, id, receiveTime) {
      if (this.notRespondedRecords.has(id)) {
        var requestRecord = this.notRespondedRecords.get(id);
        requestRecord.responseDetail = resRecord;
        //requestState -1: 等待中 0: 成功 1: 失败 2: 未处理（只针对消息推送）
        requestRecord.requestState = resRecord.error.error_id === 0 ? 0 : 1;
        requestRecord.receiveTime = receiveTime;
        // 触发更新消息
        if (this.panelPort) {
          this.panelPort.postMessage({
            type: 'req-changed',
            payloadData: requestRecord
          });
        } else {
          //todo: error
        }
      }
    }
  }, {
    key: "clearAllRecords",
    value: function clearAllRecords() {
      this.requestRecords = [];
    }
  }, {
    key: "clearNotRespondedRecords",
    value: function clearNotRespondedRecords() {
      this.notRespondedRecords = new Map();
    }
  }, {
    key: "getRequestRecords",
    value: function getRequestRecords() {
      return this.requestRecords;
    }
  }, {
    key: "setRunning",
    value: function setRunning(isRunning) {
      this.isRunning = isRunning;
    }
  }, {
    key: "getRunning",
    value: function getRunning() {
      return this.isRunning;
    }
  }]);
}();

/***/ }),

/***/ "./src/backend/panel_port_handle.js":
/*!******************************************!*\
  !*** ./src/backend/panel_port_handle.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   panelDisconnectHandler: () => (/* binding */ panelDisconnectHandler),
/* harmony export */   panelMessageHandler: () => (/* binding */ panelMessageHandler),
/* harmony export */   panelPortHandler: () => (/* binding */ panelPortHandler)
/* harmony export */ });
/* harmony import */ var _data_manage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_manage */ "./src/backend/data_manage.js");

var panelPortHandler = function panelPortHandler(port) {
  var tabId = parseInt(port.name.split('-')[1]);
  var reqRecordManage;
  if (_data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.has(tabId)) {
    reqRecordManage = _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.get(tabId);
    reqRecordManage.panelPort = port;
  } else {
    reqRecordManage = new _data_manage__WEBPACK_IMPORTED_MODULE_0__.RequestRecordManage(tabId);
    reqRecordManage.panelPort = port;
    _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.set(tabId, reqRecordManage);
  }
};
var panelMessageHandler = function panelMessageHandler(message, port) {
  console.log('panelMessageHandler', message);
  var tabId = parseInt(port.name.split('-')[1]);
  var reqRecordManage = _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.get(tabId);
  switch (message.type) {
    case 'get-req-records':
      {
        var requestRecords = reqRecordManage ? reqRecordManage.getRequestRecords() : [];
        port.postMessage({
          type: message.type,
          payloadData: requestRecords
        });
        break;
      }
    case 'clear-all-records':
      {
        reqRecordManage.clearAllRecords();
        port.postMessage({
          type: message.type,
          payloadData: []
        });
        break;
      }
    case 'switch-running':
      {
        var data = message.data;
        reqRecordManage.setRunning(data);
        port.postMessage({
          type: message.type,
          payloadData: !data
        });
        break;
      }
    case 'get-is-running':
      {
        var isRunning = reqRecordManage.getRunning();
        port.postMessage({
          type: message.type,
          payloadData: isRunning
        });
      }
  }
};
var panelDisconnectHandler = function panelDisconnectHandler(port) {
  var tabId = parseInt(port.name.split('-')[1]);
  var reqRecordManage;
  if (_data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.has(tabId)) {
    reqRecordManage = _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap.get(tabId);
    reqRecordManage.panelPort = null;
  }
};

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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _backend_content_port_handle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./backend/content_port_handle */ "./src/backend/content_port_handle.js");
/* harmony import */ var _backend_panel_port_handle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backend/panel_port_handle */ "./src/backend/panel_port_handle.js");


var portHandle = function portHandle(port, portHandler, messageHandler, disconnectHandler) {
  console.log("".concat(port.name, "\u7684sender"), port.sender);
  portHandler(port);
  port.onMessage.addListener(messageHandler);
  port.onDisconnect.addListener(function () {
    // 关闭panel时也会触发这个掉线
    console.log("".concat(port.name, "\u7684background\u6389\u7EBF\u4E86"));
    port.onMessage.removeListener(messageHandler);
    disconnectHandler(port);
  });
};
chrome.runtime.onConnect.addListener(function (port) {
  if (port.name.startsWith('panel-')) {
    portHandle(port, _backend_panel_port_handle__WEBPACK_IMPORTED_MODULE_1__.panelPortHandler, _backend_panel_port_handle__WEBPACK_IMPORTED_MODULE_1__.panelMessageHandler, _backend_panel_port_handle__WEBPACK_IMPORTED_MODULE_1__.panelDisconnectHandler);
  } else if (port.name === 'content') {
    portHandle(port, _backend_content_port_handle__WEBPACK_IMPORTED_MODULE_0__.contentPortHandler, _backend_content_port_handle__WEBPACK_IMPORTED_MODULE_0__.contentMessageHandler, _backend_content_port_handle__WEBPACK_IMPORTED_MODULE_0__.contentDisConnectHandler);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFlBQU07SUFDbEM7SUFDQWpFLE9BQU8sQ0FBQ0MsR0FBRyxJQUFBa0IsTUFBQSxDQUFJN0IsSUFBSSxDQUFDa0UsSUFBSSx1Q0FBZ0IsQ0FBQztJQUN6Q2xFLElBQUksQ0FBQzBFLFNBQVMsQ0FBQ0csY0FBYyxDQUFDTCxjQUFjLENBQUM7SUFDN0NDLGlCQUFpQixDQUFDekUsSUFBSSxDQUFDO0VBQ3pCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRDhFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNMLFdBQVcsQ0FBQyxVQUFDM0UsSUFBSSxFQUFLO0VBQzdDLElBQUlBLElBQUksQ0FBQ2tFLElBQUksQ0FBQ2UsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ2xDWCxVQUFVLENBQUN0RSxJQUFJLEVBQUVnRSx3RUFBZ0IsRUFBRUksMkVBQW1CLEVBQUVDLDhFQUFzQixDQUFDO0VBQ2pGLENBQUMsTUFBTSxJQUFJckUsSUFBSSxDQUFDa0UsSUFBSSxLQUFLLFNBQVMsRUFBRTtJQUNsQ0ksVUFBVSxDQUFDdEUsSUFBSSxFQUFFRCw0RUFBa0IsRUFBRVMsK0VBQXFCLEVBQUVzQyxrRkFBd0IsQ0FBQztFQUN2RjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9iYWNrZW5kL2NvbnRlbnRfcG9ydF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9iYWNrZW5kL2RhdGFfbWFuYWdlLmpzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvYmFja2VuZC9wYW5lbF9wb3J0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGFiUmVxUmVjb3JkTWFwLCBSZXF1ZXN0UmVjb3JkTWFuYWdlfSBmcm9tICcuL2RhdGFfbWFuYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250ZW50UG9ydEhhbmRsZXIgPSAocG9ydCkgPT4ge1xyXG4gIGNvbnN0IHtpZDogdGFiSWR9ID0gcG9ydC5zZW5kZXIudGFiO1xyXG4gIGlmICghdGFiUmVxUmVjb3JkTWFwLmhhcyh0YWJJZCkpIHtcclxuICAgIHRhYlJlcVJlY29yZE1hcC5zZXQodGFiSWQsIG5ldyBSZXF1ZXN0UmVjb3JkTWFuYWdlKHRhYklkKSk7XHJcbiAgfVxyXG59O1xyXG5sZXQgcmVxSWQgPSAxO1xyXG5leHBvcnQgY29uc3QgY29udGVudE1lc3NhZ2VIYW5kbGVyID0gKG1lc3NhZ2UsIHBvcnQpID0+IHtcclxuICBjb25zdCB7aWQ6IHRhYklkfSA9IHBvcnQuc2VuZGVyLnRhYjtcclxuICBjb25zb2xlLmxvZygnY29udGVudCB0byBiYWNrJywgbWVzc2FnZSk7XHJcbiAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgIGNhc2UgJ1JFUVVFU1RfRVZFTlQnOiB7XHJcbiAgICAgIGxldCByZXFSZWNvcmRNYW5hZ2UgPSB0YWJSZXFSZWNvcmRNYXAuZ2V0KHRhYklkKTtcclxuICAgICAgY29uc3Qge3JlcXVlc3RUeXBlLCBpc1JlY2VpdmVkfSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgaWYgKHJlcXVlc3RUeXBlID09PSAnRkVUQ0gnKSB7XHJcbi8vIOWmguaenOaYr+ivt+axglxyXG4gICAgICAgIGlmIChpc1JlY2VpdmVkKSB7XHJcbi8vIOWmguaenOaYr+WQjuerr+i/lOWbnueahOWTjeW6lFxyXG4gICAgICAgICAgY29uc3Qge3Jlc0JvZHksIGlkLCByZWNlaXZlVGltZX0gPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICByZXFSZWNvcmRNYW5hZ2UudXBkYXRlUmVjb3JkKHJlc0JvZHksIGlkLCByZWNlaXZlVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuLy8g5aaC5p6c5piv5YmN56uv6K+35rGCXHJcbiAgICAgICAgICBjb25zdCB7cmVxRGF0YSwgcmVxSGVhZCwgcmVxSWR4LCBmZXRjaFRpbWV9ID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgcmVxUmVjb3JkTWFuYWdlLmFkZFJlY29yZCh7XHJcbiAgICAgICAgICAgIGlkOiBgZmV0Y2gtJHtyZXFJZHh9YCxcclxuICAgICAgICAgICAgcmVxdWVzdFN0YXRlOiAtMSwgLy8tMe+8muetieW+heS4rSAw77ya5oiQ5YqfIDHvvJrlpLHotKUgMu+8muacquWkhOeQhu+8iOWPqumSiOWvuea2iOaBr+aOqOmAge+8iVxyXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcUhlYWQucmVxdWVzdF9pZCxcclxuICAgICAgICAgICAgcmVxdWVzdFR5cGUsXHJcbiAgICAgICAgICAgIHJlcXVlc3REZXRhaWw6IHtcclxuICAgICAgICAgICAgICByZXFEYXRhLFxyXG4gICAgICAgICAgICAgIHJlcUhlYWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmV0Y2hUaW1lLFxyXG4gICAgICAgICAgICByZXNwb25zZURldGFpbDogbnVsbFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3RUeXBlID09PSAnTVNHJykge1xyXG4vLyDlpoLmnpzmmK/lkI7nq6/kuLvliqjmjqjpgIHmtojmga9cclxuICAgICAgICBjb25zdCB7cmVzQm9keSwgc3RhdGUsIHJlY2VpdmVUaW1lfSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBsZXQgcmVxdWVzdFN0YXRlID0gc3RhdGUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBzdGF0ZVxyXG4gICAgICAgICAgOiAocmVzQm9keS5lcnJvci5lcnJvcl9pZCA9PT0gMCA/IDAgOiAxKTtcclxuICAgICAgICByZXFSZWNvcmRNYW5hZ2UuYWRkTXNnUmVjb3JkKHtcclxuICAgICAgICAgIGlkOiByZXFJZCsrLFxyXG4gICAgICAgICAgcmVxdWVzdFN0YXRlLFxyXG4gICAgICAgICAgcmVxdWVzdElkOiByZXNCb2R5LmVycm9yLnJlcXVlc3RfaWQsXHJcbiAgICAgICAgICByZXF1ZXN0VHlwZSxcclxuICAgICAgICAgIHJlY2VpdmVUaW1lLFxyXG4gICAgICAgICAgcmVzcG9uc2VEZXRhaWw6IHJlc0JvZHlcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgJ1BBR0VfVU5MT0FEJzoge1xyXG4gICAgICBsZXQgcmVxUmVjb3JkTWFuYWdlID0gdGFiUmVxUmVjb3JkTWFwLmdldCh0YWJJZCk7XHJcbiAgICAgIHJlcVJlY29yZE1hbmFnZS5jbGVhckFsbFJlY29yZHMoKTtcclxuICAgICAgcmVxUmVjb3JkTWFuYWdlLmNsZWFyTm90UmVzcG9uZGVkUmVjb3JkcygpO1xyXG4gICAgICByZXFSZWNvcmRNYW5hZ2UucGFuZWxQb3J0ICYmIHJlcVJlY29yZE1hbmFnZS5wYW5lbFBvcnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6ICdjbGVhci1hbGwtcmVjb3JkcycsXHJcbiAgICAgICAgcGF5bG9hZERhdGE6IFtdXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgJ1BJTkcnOiB7XHJcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6ICdQT05HJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBjb250ZW50RGlzQ29ubmVjdEhhbmRsZXIgPSAocG9ydCkgPT4ge1xyXG4gIGNvbnN0IHtpZDogdGFiSWR9ID0gcG9ydC5zZW5kZXIudGFiO1xyXG59O1xyXG4iLCIvLyBrZXk6IOmhteetvmlk77yM6ICD6JmR5YiwYnPmnrbmnoTmtY/op4jlmajlrZjlnKjlpJrpobXnrb7miZPlvIBhdHXnmoTmg4XlhrXvvIx2YWx1ZeaYr3RhYuWvueW6lOeahOivt+axguiusOW9lembhuWQiFxyXG5leHBvcnQgY29uc3QgdGFiUmVxUmVjb3JkTWFwID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlcXVlc3RSZWNvcmRNYW5hZ2Uge1xyXG4gIHJlcXVlc3RSZWNvcmRzID0gW107XHJcbiAgbm90UmVzcG9uZGVkUmVjb3JkcyA9IG5ldyBNYXAoKTtcclxuICB0YWJJZCA9ICcnO1xyXG4gIHBhbmVsUG9ydCA9IG51bGw7XHJcbiAgaXNSdW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoX3RhYklkKSB7XHJcbiAgICB0aGlzLnRhYklkID0gX3RhYklkO1xyXG4gIH1cclxuXHJcbiAgYWRkUmVjb3JkKHJlY29yZCkge1xyXG4gICAgaWYgKCF0aGlzLmlzUnVubmluZykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAoIXRoaXMubm90UmVzcG9uZGVkUmVjb3Jkcy5oYXMocmVjb3JkLmlkKSkge1xyXG4gICAgICB0aGlzLnJlcXVlc3RSZWNvcmRzLnB1c2gocmVjb3JkKTtcclxuICAgICAgaWYgKHRoaXMucGFuZWxQb3J0KSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbFBvcnQucG9zdE1lc3NhZ2Uoe3R5cGU6ICdyZXEtY2hhbmdlZCcsIHBheWxvYWREYXRhOiByZWNvcmR9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5vdFJlc3BvbmRlZFJlY29yZHMuc2V0KHJlY29yZC5pZCwgcmVjb3JkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCfmsqHmib7liLAnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZE1zZ1JlY29yZChyZWNvcmQpIHtcclxuICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZXF1ZXN0UmVjb3Jkcy5wdXNoKHJlY29yZCk7XHJcbi8vIOinpuWPkeabtOaWsOa2iOaBr1xyXG4gICAgaWYgKHRoaXMucGFuZWxQb3J0KSB7XHJcbiAgICAgIHRoaXMucGFuZWxQb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiAncmVxLWNoYW5nZWQnLFxyXG4gICAgICAgIHBheWxvYWREYXRhOiByZWNvcmRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVSZWNvcmQocmVzUmVjb3JkLCBpZCwgcmVjZWl2ZVRpbWUpIHtcclxuICAgIGlmICh0aGlzLm5vdFJlc3BvbmRlZFJlY29yZHMuaGFzKGlkKSkge1xyXG4gICAgICBjb25zdCByZXF1ZXN0UmVjb3JkID0gdGhpcy5ub3RSZXNwb25kZWRSZWNvcmRzLmdldChpZCk7XHJcbiAgICAgIHJlcXVlc3RSZWNvcmQucmVzcG9uc2VEZXRhaWwgPSByZXNSZWNvcmQ7XHJcbi8vcmVxdWVzdFN0YXRlIC0xOiDnrYnlvoXkuK0gMDog5oiQ5YqfIDE6IOWksei0pSAyOiDmnKrlpITnkIbvvIjlj6rpkojlr7nmtojmga/mjqjpgIHvvIlcclxuICAgICAgcmVxdWVzdFJlY29yZC5yZXF1ZXN0U3RhdGUgPSByZXNSZWNvcmQuZXJyb3IuZXJyb3JfaWQgPT09IDAgPyAwIDogMTtcclxuICAgICAgcmVxdWVzdFJlY29yZC5yZWNlaXZlVGltZSA9IHJlY2VpdmVUaW1lO1xyXG4vLyDop6blj5Hmm7TmlrDmtojmga9cclxuICAgICAgaWYgKHRoaXMucGFuZWxQb3J0KSB7XHJcbiAgICAgICAgdGhpcy5wYW5lbFBvcnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgdHlwZTogJ3JlcS1jaGFuZ2VkJyxcclxuICAgICAgICAgIHBheWxvYWREYXRhOiByZXF1ZXN0UmVjb3JkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbi8vdG9kbzogZXJyb3JcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJBbGxSZWNvcmRzKCkge1xyXG4gICAgdGhpcy5yZXF1ZXN0UmVjb3JkcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJOb3RSZXNwb25kZWRSZWNvcmRzKCkge1xyXG4gICAgdGhpcy5ub3RSZXNwb25kZWRSZWNvcmRzID0gbmV3IE1hcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0UmVxdWVzdFJlY29yZHMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0UmVjb3JkcztcclxuICB9XHJcbiAgc2V0UnVubmluZyhpc1J1bm5pbmcpIHtcclxuICAgIHRoaXMuaXNSdW5uaW5nID0gaXNSdW5uaW5nO1xyXG4gIH1cclxuICBnZXRSdW5uaW5nKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNSdW5uaW5nO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZXF1ZXN0UmVjb3JkTWFuYWdlLCB0YWJSZXFSZWNvcmRNYXB9IGZyb20gJy4vZGF0YV9tYW5hZ2UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IHBhbmVsUG9ydEhhbmRsZXIgPSAocG9ydCkgPT4ge1xyXG4gIGNvbnN0IHRhYklkID0gcGFyc2VJbnQocG9ydC5uYW1lLnNwbGl0KCctJylbMV0pO1xyXG4gIGxldCByZXFSZWNvcmRNYW5hZ2U7XHJcbiAgaWYgKHRhYlJlcVJlY29yZE1hcC5oYXModGFiSWQpKSB7XHJcbiAgICByZXFSZWNvcmRNYW5hZ2UgPSB0YWJSZXFSZWNvcmRNYXAuZ2V0KHRhYklkKTtcclxuICAgIHJlcVJlY29yZE1hbmFnZS5wYW5lbFBvcnQgPSBwb3J0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICByZXFSZWNvcmRNYW5hZ2UgPSBuZXcgUmVxdWVzdFJlY29yZE1hbmFnZSh0YWJJZCk7XHJcbiAgICByZXFSZWNvcmRNYW5hZ2UucGFuZWxQb3J0ID0gcG9ydDtcclxuICAgIHRhYlJlcVJlY29yZE1hcC5zZXQodGFiSWQsIHJlcVJlY29yZE1hbmFnZSk7XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgcGFuZWxNZXNzYWdlSGFuZGxlciA9IChtZXNzYWdlLCBwb3J0KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3BhbmVsTWVzc2FnZUhhbmRsZXInLCBtZXNzYWdlKTtcclxuICBjb25zdCB0YWJJZCA9IHBhcnNlSW50KHBvcnQubmFtZS5zcGxpdCgnLScpWzFdKTtcclxuICBsZXQgcmVxUmVjb3JkTWFuYWdlID0gdGFiUmVxUmVjb3JkTWFwLmdldCh0YWJJZCk7XHJcbiAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgIGNhc2UgJ2dldC1yZXEtcmVjb3Jkcyc6IHtcclxuICAgICAgY29uc3QgcmVxdWVzdFJlY29yZHMgPSByZXFSZWNvcmRNYW5hZ2UgPyByZXFSZWNvcmRNYW5hZ2UuZ2V0UmVxdWVzdFJlY29yZHMoKTpbXTtcclxuICAgICAgcG9ydC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgdHlwZTogbWVzc2FnZS50eXBlLFxyXG4gICAgICAgIHBheWxvYWREYXRhOiByZXF1ZXN0UmVjb3Jkc1xyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICdjbGVhci1hbGwtcmVjb3Jkcyc6IHtcclxuICAgICAgcmVxUmVjb3JkTWFuYWdlLmNsZWFyQWxsUmVjb3JkcygpO1xyXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXHJcbiAgICAgICAgcGF5bG9hZERhdGE6IFtdXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgJ3N3aXRjaC1ydW5uaW5nJzoge1xyXG4gICAgICBjb25zdCB7IGRhdGEgfSA9IG1lc3NhZ2U7XHJcbiAgICAgIHJlcVJlY29yZE1hbmFnZS5zZXRSdW5uaW5nKGRhdGEpO1xyXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXHJcbiAgICAgICAgcGF5bG9hZERhdGE6ICFkYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgJ2dldC1pcy1ydW5uaW5nJzoge1xyXG4gICAgICBjb25zdCBpc1J1bm5pbmcgPSByZXFSZWNvcmRNYW5hZ2UuZ2V0UnVubmluZygpO1xyXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXHJcbiAgICAgICAgcGF5bG9hZERhdGE6IGlzUnVubmluZ1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5leHBvcnQgY29uc3QgcGFuZWxEaXNjb25uZWN0SGFuZGxlciA9IChwb3J0KSA9PiB7XHJcbiAgY29uc3QgdGFiSWQgPSBwYXJzZUludChwb3J0Lm5hbWUuc3BsaXQoJy0nKVsxXSk7XHJcbiAgbGV0IHJlcVJlY29yZE1hbmFnZTtcclxuICBpZih0YWJSZXFSZWNvcmRNYXAuaGFzKHRhYklkKSkge1xyXG4gICAgcmVxUmVjb3JkTWFuYWdlID0gdGFiUmVxUmVjb3JkTWFwLmdldCh0YWJJZCk7XHJcbiAgICByZXFSZWNvcmRNYW5hZ2UucGFuZWxQb3J0ID0gbnVsbDtcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJcclxuXHJcbmltcG9ydCB7IGNvbnRlbnRNZXNzYWdlSGFuZGxlciwgY29udGVudERpc0Nvbm5lY3RIYW5kbGVyLCBjb250ZW50UG9ydEhhbmRsZXIgfSBmcm9tICcuL2JhY2tlbmQvY29udGVudF9wb3J0X2hhbmRsZSc7XHJcbmltcG9ydCB7IHBhbmVsTWVzc2FnZUhhbmRsZXIsIHBhbmVsRGlzY29ubmVjdEhhbmRsZXIsIHBhbmVsUG9ydEhhbmRsZXIgfSBmcm9tICcuL2JhY2tlbmQvcGFuZWxfcG9ydF9oYW5kbGUnO1xyXG5cclxuY29uc3QgcG9ydEhhbmRsZSA9IChwb3J0LCBwb3J0SGFuZGxlciwgbWVzc2FnZUhhbmRsZXIsIGRpc2Nvbm5lY3RIYW5kbGVyKSA9PiB7XHJcbiAgY29uc29sZS5sb2coYCR7cG9ydC5uYW1lfeeahHNlbmRlcmAsIHBvcnQuc2VuZGVyKTtcclxuICBwb3J0SGFuZGxlcihwb3J0KTtcclxuICBwb3J0Lm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihtZXNzYWdlSGFuZGxlcik7XHJcbiAgcG9ydC5vbkRpc2Nvbm5lY3QuYWRkTGlzdGVuZXIoKCkgPT4ge1xyXG4gICAgLy8g5YWz6ZetcGFuZWzml7bkuZ/kvJrop6blj5Hov5nkuKrmjonnur9cclxuICAgIGNvbnNvbGUubG9nKGAke3BvcnQubmFtZX3nmoRiYWNrZ3JvdW5k5o6J57q/5LqGYCk7XHJcbiAgICBwb3J0Lm9uTWVzc2FnZS5yZW1vdmVMaXN0ZW5lcihtZXNzYWdlSGFuZGxlcik7XHJcbiAgICBkaXNjb25uZWN0SGFuZGxlcihwb3J0KTtcclxuICB9KTtcclxufTtcclxuXHJcbmNocm9tZS5ydW50aW1lLm9uQ29ubmVjdC5hZGRMaXN0ZW5lcigocG9ydCkgPT4ge1xyXG4gIGlmIChwb3J0Lm5hbWUuc3RhcnRzV2l0aCgncGFuZWwtJykpIHtcclxuICAgIHBvcnRIYW5kbGUocG9ydCwgcGFuZWxQb3J0SGFuZGxlciwgcGFuZWxNZXNzYWdlSGFuZGxlciwgcGFuZWxEaXNjb25uZWN0SGFuZGxlcik7XHJcbiAgfSBlbHNlIGlmIChwb3J0Lm5hbWUgPT09ICdjb250ZW50Jykge1xyXG4gICAgcG9ydEhhbmRsZShwb3J0LCBjb250ZW50UG9ydEhhbmRsZXIsIGNvbnRlbnRNZXNzYWdlSGFuZGxlciwgY29udGVudERpc0Nvbm5lY3RIYW5kbGVyKTtcclxuICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsidGFiUmVxUmVjb3JkTWFwIiwiUmVxdWVzdFJlY29yZE1hbmFnZSIsImNvbnRlbnRQb3J0SGFuZGxlciIsInBvcnQiLCJ0YWJJZCIsInNlbmRlciIsInRhYiIsImlkIiwiaGFzIiwic2V0IiwicmVxSWQiLCJjb250ZW50TWVzc2FnZUhhbmRsZXIiLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJyZXFSZWNvcmRNYW5hZ2UiLCJnZXQiLCJfbWVzc2FnZSRkYXRhIiwiZGF0YSIsInJlcXVlc3RUeXBlIiwiaXNSZWNlaXZlZCIsIl9tZXNzYWdlJGRhdGEyIiwicmVzQm9keSIsInJlY2VpdmVUaW1lIiwidXBkYXRlUmVjb3JkIiwiX21lc3NhZ2UkZGF0YTMiLCJyZXFEYXRhIiwicmVxSGVhZCIsInJlcUlkeCIsImZldGNoVGltZSIsImFkZFJlY29yZCIsImNvbmNhdCIsInJlcXVlc3RTdGF0ZSIsInJlcXVlc3RJZCIsInJlcXVlc3RfaWQiLCJyZXF1ZXN0RGV0YWlsIiwicmVzcG9uc2VEZXRhaWwiLCJfbWVzc2FnZSRkYXRhNCIsInN0YXRlIiwidW5kZWZpbmVkIiwiZXJyb3IiLCJlcnJvcl9pZCIsImFkZE1zZ1JlY29yZCIsImNsZWFyQWxsUmVjb3JkcyIsImNsZWFyTm90UmVzcG9uZGVkUmVjb3JkcyIsInBhbmVsUG9ydCIsInBvc3RNZXNzYWdlIiwicGF5bG9hZERhdGEiLCJjb250ZW50RGlzQ29ubmVjdEhhbmRsZXIiLCJNYXAiLCJfdGFiSWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfZGVmaW5lUHJvcGVydHkiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInJlY29yZCIsImlzUnVubmluZyIsIm5vdFJlc3BvbmRlZFJlY29yZHMiLCJyZXF1ZXN0UmVjb3JkcyIsInB1c2giLCJyZXNSZWNvcmQiLCJyZXF1ZXN0UmVjb3JkIiwiZ2V0UmVxdWVzdFJlY29yZHMiLCJzZXRSdW5uaW5nIiwiZ2V0UnVubmluZyIsInBhbmVsUG9ydEhhbmRsZXIiLCJwYXJzZUludCIsIm5hbWUiLCJzcGxpdCIsInBhbmVsTWVzc2FnZUhhbmRsZXIiLCJwYW5lbERpc2Nvbm5lY3RIYW5kbGVyIiwicG9ydEhhbmRsZSIsInBvcnRIYW5kbGVyIiwibWVzc2FnZUhhbmRsZXIiLCJkaXNjb25uZWN0SGFuZGxlciIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwib25EaXNjb25uZWN0IiwicmVtb3ZlTGlzdGVuZXIiLCJjaHJvbWUiLCJydW50aW1lIiwib25Db25uZWN0Iiwic3RhcnRzV2l0aCJdLCJzb3VyY2VSb290IjoiIn0=