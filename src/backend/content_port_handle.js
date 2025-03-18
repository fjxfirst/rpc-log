import {tabReqRecordMap, RequestRecordManage} from './data_manage';

export const contentPortHandler = (port) => {
  const {id: tabId} = port.sender.tab;
  if (!tabReqRecordMap.has(tabId)) {
    tabReqRecordMap.set(tabId, new RequestRecordManage(tabId));
  }
};
let reqId = 1;
export const contentMessageHandler = (message, port) => {
  const {id: tabId} = port.sender.tab;
  console.log('content to back', message);
  switch (message.type) {
    case 'REQUEST_EVENT': {
      let reqRecordManage = tabReqRecordMap.get(tabId);
      const {requestType, isReceived} = message.data;
      if (requestType === 'FETCH') {
// 如果是请求
        if (isReceived) {
// 如果是后端返回的响应
          const {resBody, id, receiveTime} = message.data;
          reqRecordManage.updateRecord(resBody, id, receiveTime);
        } else {
// 如果是前端请求
          const {reqData, reqHead, reqIdx, fetchTime} = message.data;
          reqRecordManage.addRecord({
            id: `fetch-${reqIdx}`,
            requestState: -1, //-1：等待中 0：成功 1：失败 2：未处理（只针对消息推送）
            requestId: reqHead.request_id,
            requestType,
            requestDetail: {
              reqData,
              reqHead
            },
            fetchTime,
            responseDetail: null
          });
        }
      } else if (requestType === 'MSG') {
// 如果是后端主动推送消息
        const {resBody, state, receiveTime} = message.data;
        let requestState = state !== undefined
          ? state
          : (resBody.error.error_id === 0 ? 0 : 1);
        reqRecordManage.addMsgRecord({
          id: reqId++,
          requestState,
          requestId: resBody.header.request_id,
          requestType,
          receiveTime,
          responseDetail: resBody
        });
      }
      break;
    }
    case 'PAGE_UNLOAD': {
      let reqRecordManage = tabReqRecordMap.get(tabId);
      reqRecordManage.clearAllRecords();
      reqRecordManage.clearNotRespondedRecords();
      reqRecordManage.panelPort && reqRecordManage.panelPort.postMessage({
        type: 'clear-all-records',
        payloadData: []
      });
      break;
    }
    case 'PING': {
      port.postMessage({
        type: 'PONG'
      });
    }
  }
};
export const contentDisConnectHandler = (port) => {
  const {id: tabId} = port.sender.tab;
};
