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
            requestId: _resBody.header.request_id,
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
  var tabId = parseInt(port.name.split('_')[1]);
  var reqRecordManage;
  console.log('tabReqRecordMap', _data_manage__WEBPACK_IMPORTED_MODULE_0__.tabReqRecordMap);
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
  var tabId = parseInt(port.name.split('_')[1]);
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
  var tabId = parseInt(port.name.split('_')[1]);
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
  if (port.name.startsWith('panel_')) {
    portHandle(port, _backend_panel_port_handle__WEBPACK_IMPORTED_MODULE_1__.panelPortHandler, _backend_panel_port_handle__WEBPACK_IMPORTED_MODULE_1__.panelMessageHandler, _backend_panel_port_handle__WEBPACK_IMPORTED_MODULE_1__.panelDisconnectHandler);
  } else if (port.name === 'content') {
    portHandle(port, _backend_content_port_handle__WEBPACK_IMPORTED_MODULE_0__.contentPortHandler, _backend_content_port_handle__WEBPACK_IMPORTED_MODULE_0__.contentMessageHandler, _backend_content_port_handle__WEBPACK_IMPORTED_MODULE_0__.contentDisConnectHandler);
  }
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNILGNBQWMsQ0FBQztFQUMxQ3pFLElBQUksQ0FBQzZFLFlBQVksQ0FBQ0QsV0FBVyxDQUFDLFlBQU07SUFDbEM7SUFDQWxFLE9BQU8sQ0FBQ0MsR0FBRyxJQUFBa0IsTUFBQSxDQUFJN0IsSUFBSSxDQUFDbUUsSUFBSSx1Q0FBZ0IsQ0FBQztJQUN6Q25FLElBQUksQ0FBQzJFLFNBQVMsQ0FBQ0csY0FBYyxDQUFDTCxjQUFjLENBQUM7SUFDN0NDLGlCQUFpQixDQUFDMUUsSUFBSSxDQUFDO0VBQ3pCLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCtFLE1BQU0sQ0FBQ0MsT0FBTyxDQUFDQyxTQUFTLENBQUNMLFdBQVcsQ0FBQyxVQUFDNUUsSUFBSSxFQUFLO0VBQzdDLElBQUlBLElBQUksQ0FBQ21FLElBQUksQ0FBQ2UsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFO0lBQ2xDWCxVQUFVLENBQUN2RSxJQUFJLEVBQUVpRSx3RUFBZ0IsRUFBRUksMkVBQW1CLEVBQUVDLDhFQUFzQixDQUFDO0VBQ2pGLENBQUMsTUFBTSxJQUFJdEUsSUFBSSxDQUFDbUUsSUFBSSxLQUFLLFNBQVMsRUFBRTtJQUNsQ0ksVUFBVSxDQUFDdkUsSUFBSSxFQUFFRCw0RUFBa0IsRUFBRVMsK0VBQXFCLEVBQUV1QyxrRkFBd0IsQ0FBQztFQUN2RjtBQUNGLENBQUMsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9iYWNrZW5kL2NvbnRlbnRfcG9ydF9oYW5kbGUuanMiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9iYWNrZW5kL2RhdGFfbWFuYWdlLmpzIiwid2VicGFjazovL3JwYy1sb2cvLi9zcmMvYmFja2VuZC9wYW5lbF9wb3J0X2hhbmRsZS5qcyIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3JwYy1sb2cvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ycGMtbG9nL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcnBjLWxvZy8uL3NyYy9iYWNrZ3JvdW5kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dGFiUmVxUmVjb3JkTWFwLCBSZXF1ZXN0UmVjb3JkTWFuYWdlfSBmcm9tICcuL2RhdGFfbWFuYWdlJztcclxuXHJcbmV4cG9ydCBjb25zdCBjb250ZW50UG9ydEhhbmRsZXIgPSAocG9ydCkgPT4ge1xyXG4gIGNvbnN0IHtpZDogdGFiSWR9ID0gcG9ydC5zZW5kZXIudGFiO1xyXG4gIGlmICghdGFiUmVxUmVjb3JkTWFwLmhhcyh0YWJJZCkpIHtcclxuICAgIHRhYlJlcVJlY29yZE1hcC5zZXQodGFiSWQsIG5ldyBSZXF1ZXN0UmVjb3JkTWFuYWdlKHRhYklkKSk7XHJcbiAgfVxyXG59O1xyXG5sZXQgcmVxSWQgPSAxO1xyXG5leHBvcnQgY29uc3QgY29udGVudE1lc3NhZ2VIYW5kbGVyID0gKG1lc3NhZ2UsIHBvcnQpID0+IHtcclxuICBjb25zdCB7aWQ6IHRhYklkfSA9IHBvcnQuc2VuZGVyLnRhYjtcclxuICBjb25zb2xlLmxvZygnY29udGVudCB0byBiYWNrJywgbWVzc2FnZSk7XHJcbiAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcclxuICAgIGNhc2UgJ1JFUVVFU1RfRVZFTlQnOiB7XHJcbiAgICAgIGxldCByZXFSZWNvcmRNYW5hZ2UgPSB0YWJSZXFSZWNvcmRNYXAuZ2V0KHRhYklkKTtcclxuICAgICAgY29uc3Qge3JlcXVlc3RUeXBlLCBpc1JlY2VpdmVkfSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgaWYgKHJlcXVlc3RUeXBlID09PSAnRkVUQ0gnKSB7XHJcbi8vIOWmguaenOaYr+ivt+axglxyXG4gICAgICAgIGlmIChpc1JlY2VpdmVkKSB7XHJcbi8vIOWmguaenOaYr+WQjuerr+i/lOWbnueahOWTjeW6lFxyXG4gICAgICAgICAgY29uc3Qge3Jlc0JvZHksIGlkLCByZWNlaXZlVGltZX0gPSBtZXNzYWdlLmRhdGE7XHJcbiAgICAgICAgICByZXFSZWNvcmRNYW5hZ2UudXBkYXRlUmVjb3JkKHJlc0JvZHksIGlkLCByZWNlaXZlVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuLy8g5aaC5p6c5piv5YmN56uv6K+35rGCXHJcbiAgICAgICAgICBjb25zdCB7cmVxRGF0YSwgcmVxSGVhZCwgcmVxSWR4LCBmZXRjaFRpbWV9ID0gbWVzc2FnZS5kYXRhO1xyXG4gICAgICAgICAgcmVxUmVjb3JkTWFuYWdlLmFkZFJlY29yZCh7XHJcbiAgICAgICAgICAgIGlkOiBgZmV0Y2gtJHtyZXFJZHh9YCxcclxuICAgICAgICAgICAgcmVxdWVzdFN0YXRlOiAtMSwgLy8tMe+8muetieW+heS4rSAw77ya5oiQ5YqfIDHvvJrlpLHotKUgMu+8muacquWkhOeQhu+8iOWPqumSiOWvuea2iOaBr+aOqOmAge+8iVxyXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IHJlcUhlYWQucmVxdWVzdF9pZCxcclxuICAgICAgICAgICAgcmVxdWVzdFR5cGUsXHJcbiAgICAgICAgICAgIHJlcXVlc3REZXRhaWw6IHtcclxuICAgICAgICAgICAgICByZXFEYXRhLFxyXG4gICAgICAgICAgICAgIHJlcUhlYWRcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmV0Y2hUaW1lLFxyXG4gICAgICAgICAgICByZXNwb25zZURldGFpbDogbnVsbFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3RUeXBlID09PSAnTVNHJykge1xyXG4vLyDlpoLmnpzmmK/lkI7nq6/kuLvliqjmjqjpgIHmtojmga9cclxuICAgICAgICBjb25zdCB7cmVzQm9keSwgc3RhdGUsIHJlY2VpdmVUaW1lfSA9IG1lc3NhZ2UuZGF0YTtcclxuICAgICAgICBsZXQgcmVxdWVzdFN0YXRlID0gc3RhdGUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBzdGF0ZVxyXG4gICAgICAgICAgOiAocmVzQm9keS5lcnJvci5lcnJvcl9pZCA9PT0gMCA/IDAgOiAxKTtcclxuICAgICAgICByZXFSZWNvcmRNYW5hZ2UuYWRkTXNnUmVjb3JkKHtcclxuICAgICAgICAgIGlkOiByZXFJZCsrLFxyXG4gICAgICAgICAgcmVxdWVzdFN0YXRlLFxyXG4gICAgICAgICAgcmVxdWVzdElkOiByZXNCb2R5LmhlYWRlci5yZXF1ZXN0X2lkLFxyXG4gICAgICAgICAgcmVxdWVzdFR5cGUsXHJcbiAgICAgICAgICByZWNlaXZlVGltZSxcclxuICAgICAgICAgIHJlc3BvbnNlRGV0YWlsOiByZXNCb2R5XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICdQQUdFX1VOTE9BRCc6IHtcclxuICAgICAgbGV0IHJlcVJlY29yZE1hbmFnZSA9IHRhYlJlcVJlY29yZE1hcC5nZXQodGFiSWQpO1xyXG4gICAgICByZXFSZWNvcmRNYW5hZ2UuY2xlYXJBbGxSZWNvcmRzKCk7XHJcbiAgICAgIHJlcVJlY29yZE1hbmFnZS5jbGVhck5vdFJlc3BvbmRlZFJlY29yZHMoKTtcclxuICAgICAgcmVxUmVjb3JkTWFuYWdlLnBhbmVsUG9ydCAmJiByZXFSZWNvcmRNYW5hZ2UucGFuZWxQb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiAnY2xlYXItYWxsLXJlY29yZHMnLFxyXG4gICAgICAgIHBheWxvYWREYXRhOiBbXVxyXG4gICAgICB9KTtcclxuICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICBjYXNlICdQSU5HJzoge1xyXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiAnUE9ORydcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5leHBvcnQgY29uc3QgY29udGVudERpc0Nvbm5lY3RIYW5kbGVyID0gKHBvcnQpID0+IHtcclxuICBjb25zdCB7aWQ6IHRhYklkfSA9IHBvcnQuc2VuZGVyLnRhYjtcclxufTtcclxuIiwiLy8ga2V5OiDpobXnrb5pZO+8jOiAg+iZkeWIsGJz5p625p6E5rWP6KeI5Zmo5a2Y5Zyo5aSa6aG1562+5omT5byAYXR155qE5oOF5Ya177yMdmFsdWXmmK90YWLlr7nlupTnmoTor7fmsYLorrDlvZXpm4blkIhcclxuZXhwb3J0IGNvbnN0IHRhYlJlcVJlY29yZE1hcCA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXF1ZXN0UmVjb3JkTWFuYWdlIHtcclxuICByZXF1ZXN0UmVjb3JkcyA9IFtdO1xyXG4gIG5vdFJlc3BvbmRlZFJlY29yZHMgPSBuZXcgTWFwKCk7XHJcbiAgdGFiSWQgPSAnJztcclxuICBwYW5lbFBvcnQgPSBudWxsO1xyXG4gIGlzUnVubmluZyA9IHRydWU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKF90YWJJZCkge1xyXG4gICAgdGhpcy50YWJJZCA9IF90YWJJZDtcclxuICB9XHJcblxyXG4gIGFkZFJlY29yZChyZWNvcmQpIHtcclxuICAgIGlmICghdGhpcy5pc1J1bm5pbmcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCF0aGlzLm5vdFJlc3BvbmRlZFJlY29yZHMuaGFzKHJlY29yZC5pZCkpIHtcclxuICAgICAgdGhpcy5yZXF1ZXN0UmVjb3Jkcy5wdXNoKHJlY29yZCk7XHJcbiAgICAgIGlmICh0aGlzLnBhbmVsUG9ydCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxQb3J0LnBvc3RNZXNzYWdlKHt0eXBlOiAncmVxLWNoYW5nZWQnLCBwYXlsb2FkRGF0YTogcmVjb3JkfSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ub3RSZXNwb25kZWRSZWNvcmRzLnNldChyZWNvcmQuaWQsIHJlY29yZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygn5rKh5om+5YiwJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZGRNc2dSZWNvcmQocmVjb3JkKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNSdW5uaW5nKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMucmVxdWVzdFJlY29yZHMucHVzaChyZWNvcmQpO1xyXG4vLyDop6blj5Hmm7TmlrDmtojmga9cclxuICAgIGlmICh0aGlzLnBhbmVsUG9ydCkge1xyXG4gICAgICB0aGlzLnBhbmVsUG9ydC5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgdHlwZTogJ3JlcS1jaGFuZ2VkJyxcclxuICAgICAgICBwYXlsb2FkRGF0YTogcmVjb3JkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUmVjb3JkKHJlc1JlY29yZCwgaWQsIHJlY2VpdmVUaW1lKSB7XHJcbiAgICBpZiAodGhpcy5ub3RSZXNwb25kZWRSZWNvcmRzLmhhcyhpZCkpIHtcclxuICAgICAgY29uc3QgcmVxdWVzdFJlY29yZCA9IHRoaXMubm90UmVzcG9uZGVkUmVjb3Jkcy5nZXQoaWQpO1xyXG4gICAgICByZXF1ZXN0UmVjb3JkLnJlc3BvbnNlRGV0YWlsID0gcmVzUmVjb3JkO1xyXG4vL3JlcXVlc3RTdGF0ZSAtMTog562J5b6F5LitIDA6IOaIkOWKnyAxOiDlpLHotKUgMjog5pyq5aSE55CG77yI5Y+q6ZKI5a+55raI5oGv5o6o6YCB77yJXHJcbiAgICAgIHJlcXVlc3RSZWNvcmQucmVxdWVzdFN0YXRlID0gcmVzUmVjb3JkLmVycm9yLmVycm9yX2lkID09PSAwID8gMCA6IDE7XHJcbiAgICAgIHJlcXVlc3RSZWNvcmQucmVjZWl2ZVRpbWUgPSByZWNlaXZlVGltZTtcclxuLy8g6Kem5Y+R5pu05paw5raI5oGvXHJcbiAgICAgIGlmICh0aGlzLnBhbmVsUG9ydCkge1xyXG4gICAgICAgIHRoaXMucGFuZWxQb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgIHR5cGU6ICdyZXEtY2hhbmdlZCcsXHJcbiAgICAgICAgICBwYXlsb2FkRGF0YTogcmVxdWVzdFJlY29yZFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4vL3RvZG86IGVycm9yXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsZWFyQWxsUmVjb3JkcygpIHtcclxuICAgIHRoaXMucmVxdWVzdFJlY29yZHMgPSBbXTtcclxuICB9XHJcblxyXG4gIGNsZWFyTm90UmVzcG9uZGVkUmVjb3JkcygpIHtcclxuICAgIHRoaXMubm90UmVzcG9uZGVkUmVjb3JkcyA9IG5ldyBNYXAoKTtcclxuICB9XHJcblxyXG4gIGdldFJlcXVlc3RSZWNvcmRzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdFJlY29yZHM7XHJcbiAgfVxyXG4gIHNldFJ1bm5pbmcoaXNSdW5uaW5nKSB7XHJcbiAgICB0aGlzLmlzUnVubmluZyA9IGlzUnVubmluZztcclxuICB9XHJcbiAgZ2V0UnVubmluZygpIHtcclxuICAgIHJldHVybiB0aGlzLmlzUnVubmluZztcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVxdWVzdFJlY29yZE1hbmFnZSwgdGFiUmVxUmVjb3JkTWFwIH0gZnJvbSAnLi9kYXRhX21hbmFnZSc7XHJcblxyXG5leHBvcnQgY29uc3QgcGFuZWxQb3J0SGFuZGxlciA9IChwb3J0KSA9PiB7XHJcbiAgY29uc3QgdGFiSWQgPSBwYXJzZUludChwb3J0Lm5hbWUuc3BsaXQoJ18nKVsxXSk7XHJcbiAgbGV0IHJlcVJlY29yZE1hbmFnZTtcclxuICBjb25zb2xlLmxvZygndGFiUmVxUmVjb3JkTWFwJywgdGFiUmVxUmVjb3JkTWFwKTtcclxuICBpZiAodGFiUmVxUmVjb3JkTWFwLmhhcyh0YWJJZCkpIHtcclxuICAgIHJlcVJlY29yZE1hbmFnZSA9IHRhYlJlcVJlY29yZE1hcC5nZXQodGFiSWQpO1xyXG4gICAgcmVxUmVjb3JkTWFuYWdlLnBhbmVsUG9ydCA9IHBvcnQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJlcVJlY29yZE1hbmFnZSA9IG5ldyBSZXF1ZXN0UmVjb3JkTWFuYWdlKHRhYklkKTtcclxuICAgIHJlcVJlY29yZE1hbmFnZS5wYW5lbFBvcnQgPSBwb3J0O1xyXG4gICAgdGFiUmVxUmVjb3JkTWFwLnNldCh0YWJJZCwgcmVxUmVjb3JkTWFuYWdlKTtcclxuICB9XHJcbn07XHJcbmV4cG9ydCBjb25zdCBwYW5lbE1lc3NhZ2VIYW5kbGVyID0gKG1lc3NhZ2UsIHBvcnQpID0+IHtcclxuICBjb25zb2xlLmxvZygncGFuZWxNZXNzYWdlSGFuZGxlcicsIG1lc3NhZ2UpO1xyXG4gIGNvbnN0IHRhYklkID0gcGFyc2VJbnQocG9ydC5uYW1lLnNwbGl0KCdfJylbMV0pO1xyXG4gIGxldCByZXFSZWNvcmRNYW5hZ2UgPSB0YWJSZXFSZWNvcmRNYXAuZ2V0KHRhYklkKTtcclxuICBzd2l0Y2ggKG1lc3NhZ2UudHlwZSkge1xyXG4gICAgY2FzZSAnZ2V0LXJlcS1yZWNvcmRzJzoge1xyXG4gICAgICBjb25zdCByZXF1ZXN0UmVjb3JkcyA9IHJlcVJlY29yZE1hbmFnZSA/IHJlcVJlY29yZE1hbmFnZS5nZXRSZXF1ZXN0UmVjb3JkcygpOltdO1xyXG4gICAgICBwb3J0LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXHJcbiAgICAgICAgcGF5bG9hZERhdGE6IHJlcXVlc3RSZWNvcmRzXHJcbiAgICAgIH0pO1xyXG4gICAgICBicmVhaztcclxuICAgIH1cclxuICAgIGNhc2UgJ2NsZWFyLWFsbC1yZWNvcmRzJzoge1xyXG4gICAgICByZXFSZWNvcmRNYW5hZ2UuY2xlYXJBbGxSZWNvcmRzKCk7XHJcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6IG1lc3NhZ2UudHlwZSxcclxuICAgICAgICBwYXlsb2FkRGF0YTogW11cclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnc3dpdGNoLXJ1bm5pbmcnOiB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gbWVzc2FnZTtcclxuICAgICAgcmVxUmVjb3JkTWFuYWdlLnNldFJ1bm5pbmcoZGF0YSk7XHJcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6IG1lc3NhZ2UudHlwZSxcclxuICAgICAgICBwYXlsb2FkRGF0YTogIWRhdGFcclxuICAgICAgfSk7XHJcbiAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgY2FzZSAnZ2V0LWlzLXJ1bm5pbmcnOiB7XHJcbiAgICAgIGNvbnN0IGlzUnVubmluZyA9IHJlcVJlY29yZE1hbmFnZS5nZXRSdW5uaW5nKCk7XHJcbiAgICAgIHBvcnQucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgIHR5cGU6IG1lc3NhZ2UudHlwZSxcclxuICAgICAgICBwYXlsb2FkRGF0YTogaXNSdW5uaW5nXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBwYW5lbERpc2Nvbm5lY3RIYW5kbGVyID0gKHBvcnQpID0+IHtcclxuICBjb25zdCB0YWJJZCA9IHBhcnNlSW50KHBvcnQubmFtZS5zcGxpdCgnXycpWzFdKTtcclxuICBsZXQgcmVxUmVjb3JkTWFuYWdlO1xyXG4gIGlmKHRhYlJlcVJlY29yZE1hcC5oYXModGFiSWQpKSB7XHJcbiAgICByZXFSZWNvcmRNYW5hZ2UgPSB0YWJSZXFSZWNvcmRNYXAuZ2V0KHRhYklkKTtcclxuICAgIHJlcVJlY29yZE1hbmFnZS5wYW5lbFBvcnQgPSBudWxsO1xyXG4gIH1cclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxyXG5cclxuaW1wb3J0IHsgY29udGVudE1lc3NhZ2VIYW5kbGVyLCBjb250ZW50RGlzQ29ubmVjdEhhbmRsZXIsIGNvbnRlbnRQb3J0SGFuZGxlciB9IGZyb20gJy4vYmFja2VuZC9jb250ZW50X3BvcnRfaGFuZGxlJztcclxuaW1wb3J0IHsgcGFuZWxNZXNzYWdlSGFuZGxlciwgcGFuZWxEaXNjb25uZWN0SGFuZGxlciwgcGFuZWxQb3J0SGFuZGxlciB9IGZyb20gJy4vYmFja2VuZC9wYW5lbF9wb3J0X2hhbmRsZSc7XHJcblxyXG5jb25zdCBwb3J0SGFuZGxlID0gKHBvcnQsIHBvcnRIYW5kbGVyLCBtZXNzYWdlSGFuZGxlciwgZGlzY29ubmVjdEhhbmRsZXIpID0+IHtcclxuICBjb25zb2xlLmxvZyhgJHtwb3J0Lm5hbWV955qEc2VuZGVyYCwgcG9ydC5zZW5kZXIpO1xyXG4gIHBvcnRIYW5kbGVyKHBvcnQpO1xyXG4gIHBvcnQub25NZXNzYWdlLmFkZExpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcclxuICBwb3J0Lm9uRGlzY29ubmVjdC5hZGRMaXN0ZW5lcigoKSA9PiB7XHJcbiAgICAvLyDlhbPpl61wYW5lbOaXtuS5n+S8muinpuWPkei/meS4quaOiee6v1xyXG4gICAgY29uc29sZS5sb2coYCR7cG9ydC5uYW1lfeeahGJhY2tncm91bmTmjonnur/kuoZgKTtcclxuICAgIHBvcnQub25NZXNzYWdlLnJlbW92ZUxpc3RlbmVyKG1lc3NhZ2VIYW5kbGVyKTtcclxuICAgIGRpc2Nvbm5lY3RIYW5kbGVyKHBvcnQpO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY2hyb21lLnJ1bnRpbWUub25Db25uZWN0LmFkZExpc3RlbmVyKChwb3J0KSA9PiB7XHJcbiAgaWYgKHBvcnQubmFtZS5zdGFydHNXaXRoKCdwYW5lbF8nKSkge1xyXG4gICAgcG9ydEhhbmRsZShwb3J0LCBwYW5lbFBvcnRIYW5kbGVyLCBwYW5lbE1lc3NhZ2VIYW5kbGVyLCBwYW5lbERpc2Nvbm5lY3RIYW5kbGVyKTtcclxuICB9IGVsc2UgaWYgKHBvcnQubmFtZSA9PT0gJ2NvbnRlbnQnKSB7XHJcbiAgICBwb3J0SGFuZGxlKHBvcnQsIGNvbnRlbnRQb3J0SGFuZGxlciwgY29udGVudE1lc3NhZ2VIYW5kbGVyLCBjb250ZW50RGlzQ29ubmVjdEhhbmRsZXIpO1xyXG4gIH1cclxufSk7XHJcbiJdLCJuYW1lcyI6WyJ0YWJSZXFSZWNvcmRNYXAiLCJSZXF1ZXN0UmVjb3JkTWFuYWdlIiwiY29udGVudFBvcnRIYW5kbGVyIiwicG9ydCIsInRhYklkIiwic2VuZGVyIiwidGFiIiwiaWQiLCJoYXMiLCJzZXQiLCJyZXFJZCIsImNvbnRlbnRNZXNzYWdlSGFuZGxlciIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInJlcVJlY29yZE1hbmFnZSIsImdldCIsIl9tZXNzYWdlJGRhdGEiLCJkYXRhIiwicmVxdWVzdFR5cGUiLCJpc1JlY2VpdmVkIiwiX21lc3NhZ2UkZGF0YTIiLCJyZXNCb2R5IiwicmVjZWl2ZVRpbWUiLCJ1cGRhdGVSZWNvcmQiLCJfbWVzc2FnZSRkYXRhMyIsInJlcURhdGEiLCJyZXFIZWFkIiwicmVxSWR4IiwiZmV0Y2hUaW1lIiwiYWRkUmVjb3JkIiwiY29uY2F0IiwicmVxdWVzdFN0YXRlIiwicmVxdWVzdElkIiwicmVxdWVzdF9pZCIsInJlcXVlc3REZXRhaWwiLCJyZXNwb25zZURldGFpbCIsIl9tZXNzYWdlJGRhdGE0Iiwic3RhdGUiLCJ1bmRlZmluZWQiLCJlcnJvciIsImVycm9yX2lkIiwiYWRkTXNnUmVjb3JkIiwiaGVhZGVyIiwiY2xlYXJBbGxSZWNvcmRzIiwiY2xlYXJOb3RSZXNwb25kZWRSZWNvcmRzIiwicGFuZWxQb3J0IiwicG9zdE1lc3NhZ2UiLCJwYXlsb2FkRGF0YSIsImNvbnRlbnREaXNDb25uZWN0SGFuZGxlciIsIk1hcCIsIl90YWJJZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZpbmVQcm9wZXJ0eSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicmVjb3JkIiwiaXNSdW5uaW5nIiwibm90UmVzcG9uZGVkUmVjb3JkcyIsInJlcXVlc3RSZWNvcmRzIiwicHVzaCIsInJlc1JlY29yZCIsInJlcXVlc3RSZWNvcmQiLCJnZXRSZXF1ZXN0UmVjb3JkcyIsInNldFJ1bm5pbmciLCJnZXRSdW5uaW5nIiwicGFuZWxQb3J0SGFuZGxlciIsInBhcnNlSW50IiwibmFtZSIsInNwbGl0IiwicGFuZWxNZXNzYWdlSGFuZGxlciIsInBhbmVsRGlzY29ubmVjdEhhbmRsZXIiLCJwb3J0SGFuZGxlIiwicG9ydEhhbmRsZXIiLCJtZXNzYWdlSGFuZGxlciIsImRpc2Nvbm5lY3RIYW5kbGVyIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJvbkRpc2Nvbm5lY3QiLCJyZW1vdmVMaXN0ZW5lciIsImNocm9tZSIsInJ1bnRpbWUiLCJvbkNvbm5lY3QiLCJzdGFydHNXaXRoIl0sInNvdXJjZVJvb3QiOiIifQ==