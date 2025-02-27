import {isExtension} from '../utils'

export let portToBackground;

export function panelPortInit() {
  if (portToBackground) {
    return;
  }
  if (isExtension()) {
    const tabId = window.chrome.devtools.inspectedWindow.tabId;
    portToBackground = window.chrome.runtime.connect({name: `panel_${tabId}`});
    portToBackground.onDisconnect.addListener(() => {
      console.log('panel的port掉线了，尝试重连');
      portToBackground = null;
      portToBackground = window.chrome.runtime.connect({name: `panel_${tabId}`});
      console.log('panel重连成功');
    });
  } else {
    console.error(new Error('panel长期消息通道创建失败，请确保执行环境为devtool面板中'));
  }
}

export function postMessageToBackground(msgParam) {
  const {type} = msgParam;
  return new Promise((resolve, reject) => {
    const messageCallback = (message, port) => {
      if (message.type === type) {
        resolve(message);
        portToBackground.onMessage.removeListener(messageCallback);
      }
    };
    portToBackground.onMessage.addListener(messageCallback);
    portToBackground.postMessage(msgParam);
  })

}

export function requestRecordChange(callback) {
  const messageHandler = (message, port) => {
    if (message.type === 'req-changed') {
      callback(message.payloadData);
    }
  };
  portToBackground.onMessage.addListener(messageHandler);
  return () => {
    portToBackground.onMessage.removeListener(messageHandler);
  }
}

export function clearAllRecordsChange(callback) {
  const messageHandler = (message, port) => {
    if (message.type === 'clear-all-records') {
      callback(message.payloadData);
    }
  };
  portToBackground.onMessage.addListener(messageHandler);
  return () => {
    portToBackground.onMessage.removeListener(messageHandler);
  }
}
