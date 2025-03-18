import { RequestRecordManage, tabReqRecordMap } from './data_manage';

export const panelPortHandler = (port) => {
  const tabId = parseInt(port.name.split('_')[1]);
  let reqRecordManage;
  console.log('tabReqRecordMap', tabReqRecordMap);
  if (tabReqRecordMap.has(tabId)) {
    reqRecordManage = tabReqRecordMap.get(tabId);
    reqRecordManage.panelPort = port;
  } else {
    reqRecordManage = new RequestRecordManage(tabId);
    reqRecordManage.panelPort = port;
    tabReqRecordMap.set(tabId, reqRecordManage);
  }
};
export const panelMessageHandler = (message, port) => {
  console.log('panelMessageHandler', message);
  const tabId = parseInt(port.name.split('_')[1]);
  let reqRecordManage = tabReqRecordMap.get(tabId);
  switch (message.type) {
    case 'get-req-records': {
      const requestRecords = reqRecordManage ? reqRecordManage.getRequestRecords():[];
      port.postMessage({
        type: message.type,
        payloadData: requestRecords
      });
      break;
    }
    case 'clear-all-records': {
      reqRecordManage.clearAllRecords();
      port.postMessage({
        type: message.type,
        payloadData: []
      });
      break;
    }
    case 'switch-running': {
      const { data } = message;
      reqRecordManage.setRunning(data);
      port.postMessage({
        type: message.type,
        payloadData: !data
      });
      break;
    }
    case 'get-is-running': {
      const isRunning = reqRecordManage.getRunning();
      port.postMessage({
        type: message.type,
        payloadData: isRunning
      })
    }
  }
}
export const panelDisconnectHandler = (port) => {
  const tabId = parseInt(port.name.split('_')[1]);
  let reqRecordManage;
  if(tabReqRecordMap.has(tabId)) {
    reqRecordManage = tabReqRecordMap.get(tabId);
    reqRecordManage.panelPort = null;
  }
}
